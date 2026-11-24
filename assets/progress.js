/* Progress check boxes for lesson pages.
   Turns every "Done when" list (ul.check) into real check boxes,
   remembers the ticks in this browser, and builds a one-line progress
   summary Tony can copy into the message board at the bottom of the page. */
(function () {
  var KEY = "tony-progress:" + location.pathname.replace(/\/index\.html$/, "/");

  function load(k) { try { return JSON.parse(localStorage.getItem(k) || "{}"); } catch (e) { return {}; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------- Lessons page: show how far each day has got ---------- */
  var dayLinks = document.querySelectorAll('.weeks a[href*="day-"]');
  if (dayLinks.length) {
    dayLinks.forEach(function (a) {
      var path = new URL(a.getAttribute("href"), location.href).pathname;
      var st = load("tony-progress:" + path);
      if (!st.total) return;
      var done = (st.ticks || []).filter(Boolean).length;
      var tag = document.createElement("div");
      tag.className = "prog-tag" + (done === st.total ? " all" : "");
      tag.textContent = done === st.total ? "✓ done" : done + " of " + st.total;
      a.appendChild(tag);
    });
    return;
  }

  /* ---------- Lesson page: real check boxes ---------- */
  var lists = Array.prototype.filter.call(
    document.querySelectorAll("main ul.check"),
    function (ul) { return !ul.closest(".board"); }
  );
  if (!lists.length) return;

  var state = load(KEY);
  var ticks = state.ticks || [];
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
      label.appendChild(box);
      label.appendChild(text);
      li.appendChild(label);
      items.push({ box: box, text: text.textContent.trim() });
      box.addEventListener("change", update);
    });
  });

  // Progress bar + copy button after the last checklist
  var bar = document.createElement("div");
  bar.className = "prog";
  bar.innerHTML =
    '<div class="prog-line"><div class="prog-fill"></div></div>' +
    '<p class="prog-count"></p>' +
    '<button type="button" class="prog-copy">Copy my progress for the message board</button>' +
    '<p class="prog-hint quiet-note">Then paste it in the message board at the bottom of this page. Your ticks are saved on this device only, so posting them is how your coach sees them.</p>';
  lists[lists.length - 1].after(bar);

  var fill = bar.querySelector(".prog-fill");
  var count = bar.querySelector(".prog-count");
  var btn = bar.querySelector(".prog-copy");
  var label = (document.querySelector("main .wrap > p") || {}).textContent || "";
  var title = (document.querySelector("main h1") || {}).textContent || document.title;

  function update() {
    var t = items.map(function (it) { return it.box.checked; });
    var done = t.filter(Boolean).length;
    save(KEY, { ticks: t, total: items.length });
    fill.style.width = Math.round((100 * done) / items.length) + "%";
    count.textContent = done === items.length
      ? "All " + items.length + " done. Nice work!"
      : done + " of " + items.length + " done";
  }

  function summary() {
    var done = items.filter(function (it) { return it.box.checked; }).length;
    var lines = [label.trim() + ": " + title.trim() + " — " + done + " of " + items.length + " done"];
    items.forEach(function (it) { lines.push((it.box.checked ? "[x] " : "[ ] ") + it.text); });
    return lines.join("\n");
  }

  btn.addEventListener("click", function () {
    var s = summary();
    function ok() { btn.textContent = "Copied! Now paste it below ↓"; setTimeout(function () { btn.textContent = "Copy my progress for the message board"; }, 4000); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(s).then(ok, fallback);
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = s; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); ok(); } catch (e) { alert(s); }
      ta.remove();
    }
  });

  update();
})();
