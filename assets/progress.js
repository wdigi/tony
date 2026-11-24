/* Progress check boxes for lesson pages.
   Turns every "Done when" list (ul.check) into real check boxes.
   Signed in with GitHub: ticks are saved on the progress server, follow the
   trainee to any computer, and the coach sees them.
   Not signed in (or server unreachable): ticks are kept in this browser only. */
(function () {
  var A = window.Account || { enabled: false, me: function () { return Promise.resolve(null); } };
  var PAGE = location.pathname;
  var KEY = "tony-progress:" + PAGE;

  function load(k) { try { return JSON.parse(localStorage.getItem(k) || "{}"); } catch (e) { return {}; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  /* ---------- Lessons page: show how far each day has got ---------- */
  var dayLinks = document.querySelectorAll('.weeks a[href*="day-"]');
  if (dayLinks.length) {
    function tag(getState) {
      dayLinks.forEach(function (a) {
        var old = a.querySelector(".prog-tag"); if (old) old.remove();
        var st = getState(new URL(a.getAttribute("href"), location.href).pathname);
        if (!st || !st.total) return;
        var done = (st.ticks || []).filter(Boolean).length;
        a.appendChild(el("div", "prog-tag" + (done === st.total ? " all" : ""), done === st.total ? "✓ done" : done + " of " + st.total));
      });
    }
    tag(function (p) { return load("tony-progress:" + p); });
    A.me().then(function (me) {
      if (!me || !(me.trainee || me.coach)) return;
      return A.api("GET", "/progress").then(function (r) { tag(function (p) { return r.pages[p]; }); });
    }).catch(function () {});
    return;
  }

  /* ---------- Lesson page: real check boxes ---------- */
  var lists = Array.prototype.filter.call(document.querySelectorAll("main ul.check"), function (ul) { return !ul.closest(".board"); });
  if (!lists.length) return;

  var ticks = load(KEY).ticks || [];
  var items = [];
  var n = 0;
  lists.forEach(function (ul) {
    ul.classList.add("live");
    Array.prototype.forEach.call(ul.children, function (li) {
      var i = n++;
      var label = document.createElement("label");
      var box = document.createElement("input");
      box.type = "checkbox";
      box.checked = !!ticks[i];
      var text = document.createElement("span");
      while (li.firstChild) text.appendChild(li.firstChild);
      label.appendChild(box); label.appendChild(text); li.appendChild(label);
      items.push({ box: box, text: text.textContent.trim() });
      box.addEventListener("change", changed);
    });
  });

  var bar = el("div", "prog");
  bar.innerHTML = '<div class="prog-line"><div class="prog-fill"></div></div><p class="prog-count"></p><div class="prog-acct"></div>';
  lists[lists.length - 1].after(bar);
  var fill = bar.querySelector(".prog-fill");
  var count = bar.querySelector(".prog-count");
  var acct = bar.querySelector(".prog-acct");
  var label = ((document.querySelector("main .wrap > p") || {}).textContent || "").trim();
  var title = ((document.querySelector("main h1") || {}).textContent || document.title).trim();

  var online = false;      // signed in, on the trainee list, server reachable
  var statusEl = null;
  var timer = null;

  function current() { return items.map(function (it) { return it.box.checked; }); }
  function apply(t) { items.forEach(function (it, i) { it.box.checked = !!t[i]; }); }
  function draw() {
    var done = current().filter(Boolean).length;
    fill.style.width = Math.round((100 * done) / items.length) + "%";
    count.textContent = done === items.length ? "All " + items.length + " done. Nice work!" : done + " of " + items.length + " done";
  }
  function status(t, bad) { if (statusEl) { statusEl.textContent = t; statusEl.className = "prog-status" + (bad ? " bad" : ""); } }

  function push() {
    status("Saving…");
    return A.api("PUT", "/progress", { page: PAGE, ticks: current(), items: items.map(function (it) { return it.text; }), title: title, label: label })
      .then(function () { status("Saved ✓ Your coach can see it."); })
      .catch(function () { status("Not saved online yet. It will try again on your next tick.", true); });
  }

  function changed() {
    save(KEY, { ticks: current(), total: items.length });
    draw();
    if (online) { clearTimeout(timer); timer = setTimeout(push, 600); }
  }

  /* ----- account line under the checklist ----- */
  function showLocalOnly(msg) {
    acct.textContent = "";
    var p = el("p", "quiet-note", msg);
    acct.appendChild(p);
    copyButton();
  }
  function copyButton() {
    var btn = el("button", "prog-copy", "Copy my progress for the message board");
    btn.type = "button";
    acct.appendChild(btn);
    btn.addEventListener("click", function () {
      var t = current(), done = t.filter(Boolean).length;
      var s = [label + ": " + title + " — " + done + " of " + items.length + " done"]
        .concat(items.map(function (it, i) { return (t[i] ? "[x] " : "[ ] ") + it.text; })).join("\n");
      function ok() { btn.textContent = "Copied! Now paste it below ↓"; setTimeout(function () { btn.textContent = "Copy my progress for the message board"; }, 4000); }
      function fallback() {
        var ta = document.createElement("textarea"); ta.value = s; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); ok(); } catch (e) { alert(s); } ta.remove();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(s).then(ok, fallback); else fallback();
    });
  }

  draw();

  if (!A.enabled) { showLocalOnly("Your ticks are saved on this device only. Copy them into the message board so your coach sees them."); return; }

  if (!A.signedIn()) {
    acct.textContent = "";
    var b = el("button", "prog-signin", "Sign in with GitHub to save your ticks");
    b.type = "button";
    b.addEventListener("click", A.signIn);
    acct.appendChild(b);
    acct.appendChild(el("p", "quiet-note", "Signed in, your ticks follow you to any computer and your coach sees them. Without signing in they stay on this device only."));
    return;
  }

  acct.appendChild(el("p", "quiet-note", "Checking your sign-in…"));
  A.me().then(function (me) {
    if (!me) return location.reload();          // token expired: page reloads showing the sign-in button
    acct.textContent = "";
    if (!me.trainee && !me.coach) {
      showLocalOnly("Signed in as @" + me.login + ", but you're not on the trainee list yet. Ask your coach to add you. Until then your ticks stay on this device.");
      return;
    }
    var line = el("p", "prog-who");
    line.appendChild(document.createTextNode("Signed in as @" + me.login + " · "));
    statusEl = el("span", "prog-status", "Loading your ticks…");
    line.appendChild(statusEl);
    line.appendChild(document.createTextNode(" · "));
    var out = el("button", "linkish", "Sign out"); out.type = "button"; out.addEventListener("click", A.signOut);
    line.appendChild(out);
    acct.appendChild(line);

    return A.api("GET", "/progress").then(function (r) {
      online = true;
      var saved = r.pages[PAGE];
      if (saved && saved.ticks) {
        apply(saved.ticks);                       // the server copy wins
        save(KEY, { ticks: current(), total: items.length });
        draw();
        status("Saved ✓ Your coach can see it.");
      } else if (current().some(Boolean)) {
        push();                                   // first time online: upload ticks made on this device
      } else {
        status("Ready. Each tick is saved for your coach.");
      }
    });
  }).catch(function () {
    acct.textContent = "";
    showLocalOnly("Can't reach the progress server right now. Your ticks are saved on this device; you can also copy them into the message board.");
  });
})();
