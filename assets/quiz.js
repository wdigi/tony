/* Renders the "Check yourself" quiz on lesson pages, and progress ticks on the Lessons page. */
(function () {
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function seed(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function shuffled(arr, s) { const a = arr.slice(); let x = seed(s) || 1; for (let i = a.length - 1; i > 0; i--) { x = (Math.imul(x, 1103515245) + 12345) >>> 0; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const m = location.pathname.match(/((?:phase-\d+\/day-\d+|physical-ai\/lesson-\d+|extra\/[\w-]+)\.html)$/);
  if (m && window.QUIZ && QUIZ[m[1]]) render(m[1], QUIZ[m[1]]);
  if (/lessons\.html$/.test(location.pathname)) ticks();

  function render(key, qs) {
    const pager = document.querySelector(".pager");
    if (!pager) return;
    const sec = document.createElement("section");
    sec.className = "quiz"; sec.id = "check-yourself";
    const prev = store("tony-quiz:" + key);
    sec.innerHTML = '<h2>Check yourself</h2><p class="quiet-note">' + qs.length +
      " quick questions. Answer from memory first, then read why." +
      (prev ? " Your best so far: <strong>" + prev.best + "/" + prev.total + "</strong>." : "") + "</p>";
    let answered = 0, right = 0;
    qs.forEach((q, qi) => {
      const [text, choices, ci, why] = q;
      const correct = choices[ci];
      const box = document.createElement("div");
      box.className = "q";
      box.innerHTML = '<div class="qt"><span class="qn">' + (qi + 1) + "</span>" + esc(text) + "</div>";
      const opts = document.createElement("div"); opts.className = "opts";
      shuffled(choices, key + text).forEach(c => {
        const b = document.createElement("button");
        b.type = "button"; b.textContent = c;
        b.addEventListener("click", () => {
          if (box.dataset.done) return;
          box.dataset.done = "1"; answered++;
          const ok = c === correct; if (ok) right++;
          opts.querySelectorAll("button").forEach(x => {
            x.disabled = true;
            if (x.textContent === correct) x.classList.add("ok");
            else if (x === b) x.classList.add("no");
          });
          const w = document.createElement("div");
          w.className = "why " + (ok ? "ok" : "no");
          w.innerHTML = "<strong>" + (ok ? "Right." : "Not quite.") + "</strong> " + esc(why);
          box.appendChild(w);
          if (answered === qs.length) finish();
        });
        opts.appendChild(b);
      });
      box.appendChild(opts);
      sec.appendChild(box);
    });
    const res = document.createElement("div"); res.className = "quiz-result"; res.hidden = true;
    sec.appendChild(res);
    pager.parentNode.insertBefore(sec, pager);

    function finish() {
      const all = right === qs.length, most = right >= qs.length - 1;
      const best = Math.max(right, prev ? prev.best : 0);
      store("tony-quiz:" + key, { best, total: qs.length, at: Date.now() });
      res.hidden = false;
      res.className = "quiz-result " + (all ? "ok" : most ? "mid" : "no");
      res.innerHTML = "<strong>" + right + " / " + qs.length + "</strong> " +
        (all ? "All right. You're ready for the next lesson." :
         most ? "Nearly there. Re-read the section for the one you missed." :
                "Go back over this lesson, ask Claude or your coach about what's unclear, then try again.") +
        ' <button type="button" class="again">Try again</button>';
      res.querySelector(".again").addEventListener("click", () => { sec.remove(); render(key, qs); document.getElementById("check-yourself").scrollIntoView(); });
    }
  }

  function ticks() {
    document.querySelectorAll(".weeks a[href]").forEach(a => {
      const r = store("tony-quiz:" + a.getAttribute("href"));
      if (!r) return;
      const t = document.createElement("div");
      t.className = "tick " + (r.best === r.total ? "ok" : "mid");
      t.textContent = (r.best === r.total ? "✓ " : "") + "quiz " + r.best + "/" + r.total;
      a.appendChild(t);
    });
  }
})();
