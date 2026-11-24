/* Coach view: every trainee's tick boxes, plus adding and removing trainees. */
(function () {
  var A = window.Account;
  var root = document.getElementById("coach");
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function msg(t) { root.textContent = ""; root.appendChild(el("p", "quiet-note", t)); }
  function when(iso) { var d = new Date(iso); return isNaN(d) ? "" : d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }); }

  if (!A || !A.enabled) return msg("The progress server isn't set up yet (see progress-server/README.md in the repo).");
  if (!A.signedIn()) {
    root.textContent = "";
    var b = el("button", "prog-signin", "Sign in with GitHub"); b.type = "button"; b.addEventListener("click", A.signIn);
    root.appendChild(b);
    return;
  }

  // The lesson list comes from lessons.html, so new lessons show up here on their own.
  var lessonsP = fetch("lessons.html").then(function (r) { return r.text(); }).then(function (html) {
    var doc = new DOMParser().parseFromString(html, "text/html"), phases = [];
    doc.querySelectorAll("main h2").forEach(function (h) {
      var weeks = h.nextElementSibling; while (weeks && !(weeks.classList && weeks.classList.contains("weeks")) && weeks.tagName !== "H2") weeks = weeks.nextElementSibling;
      if (!weeks || weeks.tagName === "H2") return;
      phases.push({ name: h.textContent.trim(), lessons: Array.prototype.map.call(weeks.querySelectorAll("a"), function (a) {
        return { path: new URL(a.getAttribute("href"), new URL("lessons.html", location.href)).pathname, href: a.getAttribute("href"),
          num: (a.querySelector(".num") || {}).textContent || "", title: (a.querySelector(".t") || a).textContent.trim() };
      }) });
    });
    return phases;
  });

  function load() {
    return Promise.all([A.me(), lessonsP]).then(function (r) {
      var me = r[0], phases = r[1];
      if (!me) return location.reload();
      if (!me.coach) return msg("Signed in as @" + me.login + ". This page is for coaches only.");
      return A.api("GET", "/coach/progress").then(function (d) { render(me, phases, d.trainees); });
    }).catch(function (e) { msg("Can't reach the progress server right now (" + e.message + ")."); });
  }

  function render(me, phases, trainees) {
    root.textContent = "";
    var who = el("p", "prog-who", "Signed in as @" + me.login + " (coach) · ");
    var out = el("button", "linkish", "Sign out"); out.type = "button"; out.addEventListener("click", A.signOut); who.appendChild(out);
    root.appendChild(who);

    // Add a trainee
    var form = el("form", "coach-bar");
    var inp = el("input"); inp.placeholder = "Trainee's GitHub username"; inp.autocapitalize = "off"; inp.autocomplete = "off"; inp.spellcheck = false;
    var add = el("button", null, "Add trainee"); add.type = "submit";
    form.appendChild(inp); form.appendChild(add);
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = inp.value.trim(); if (!v) return;
      add.disabled = true;
      A.api("POST", "/coach/trainees", { login: v }).then(load).catch(function (e) { alert(e.message); add.disabled = false; });
    });
    root.appendChild(form);

    if (!trainees.length) { root.appendChild(el("p", "quiet-note", "No trainees yet. Add their GitHub username above; their ticks show up here once they sign in on a lesson page.")); return; }

    var known = {}; phases.forEach(function (ph) { ph.lessons.forEach(function (l) { known[l.path] = true; }); });

    trainees.forEach(function (t) {
      var sec = el("section", "trainee");
      var pages = t.pages || {};
      var boxes = 0, ticked = 0, started = 0, done = 0, last = "";
      Object.keys(pages).forEach(function (p) {
        var pg = pages[p], k = pg.ticks.filter(Boolean).length;
        boxes += pg.total; ticked += k; if (k) started++; if (k && k === pg.total) done++;
        if (pg.updated > last) last = pg.updated;
      });
      var head = el("div", "trainee-head");
      head.appendChild(el("h2", null, "@" + t.login));
      var rm = el("button", "chip-x", "Remove"); rm.type = "button";
      rm.addEventListener("click", function () {
        if (!confirm("Remove @" + t.login + " from the trainee list? Their ticks are kept, and adding them back shows them again.")) return;
        A.api("DELETE", "/coach/trainees/" + encodeURIComponent(t.login)).then(load).catch(function (e) { alert(e.message); });
      });
      head.appendChild(rm);
      sec.appendChild(head);
      sec.appendChild(el("p", "trainee-sum", started
        ? done + " lessons fully done · " + started + " started · " + ticked + " of " + boxes + " boxes ticked · last active " + when(last)
        : "Hasn't ticked anything yet."));

      phases.forEach(function (ph) {
        sec.appendChild(el("div", "phase-h", ph.name));
        ph.lessons.forEach(function (l) { sec.appendChild(row(l.num + " · " + l.title, l.href, pages[l.path])); });
      });
      // Pages saved that aren't on the lessons list (renamed or extra pages)
      Object.keys(pages).filter(function (p) { return !known[p]; }).forEach(function (p) {
        sec.appendChild(row((pages[p].label ? pages[p].label + " · " : "") + (pages[p].title || p), null, pages[p]));
      });
      root.appendChild(sec);
    });
  }

  function row(name, href, pg) {
    var d = el("details", "lesson-row" + (pg ? "" : " none"));
    var s = el("summary");
    s.appendChild(el("span", "lt", name));
    if (!pg) { s.appendChild(el("span", "lc", "not started")); d.appendChild(s); d.addEventListener("toggle", function () { d.open = false; }); return d; }
    var k = pg.ticks.filter(Boolean).length;
    s.appendChild(el("span", "lc" + (k === pg.total ? " all" : ""), k === pg.total ? "✓ " + k + " of " + pg.total : k + " of " + pg.total));
    var mini = el("div", "mini"), bar = el("i"); bar.style.width = Math.round(100 * k / (pg.total || 1)) + "%"; mini.appendChild(bar); s.appendChild(mini);
    d.appendChild(s);
    var ul = el("ul");
    pg.ticks.forEach(function (on, i) {
      var li = el("li", on ? "on" : null);
      li.appendChild(el("span", "bx", on ? "☑" : "☐"));
      li.appendChild(el("span", null, (pg.items && pg.items[i]) || "Box " + (i + 1)));
      ul.appendChild(li);
    });
    d.appendChild(ul);
    var w = el("p", "when", "Last ticked " + when(pg.updated) + " · ");
    if (href) { var a = el("a", null, "open lesson and its messages"); a.href = href + "#how-did-it-feel"; w.appendChild(a); }
    d.appendChild(w);
    return d;
  }

  load();
})();
