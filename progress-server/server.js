// DiGiKits training progress server.
// Trainees sign in with GitHub on the training site; their tick boxes are saved here.
// Coaches see every trainee's boxes and manage the trainee list.
// No dependencies: plain Node 22. Data lives in one JSON file.
"use strict";
const http = require("node:http");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const env = process.env;
const PORT = Number(env.PORT || 8080);
const PUBLIC_URL = (env.PUBLIC_URL || "http://localhost:8080").replace(/\/$/, "");
const SITE_ORIGIN = (env.SITE_ORIGIN || "https://wdigi.github.io").replace(/\/$/, "");
const SITE_PATH = env.SITE_PATH || "/tony/";
const CLIENT_ID = env.GITHUB_CLIENT_ID || "";
const CLIENT_SECRET = env.GITHUB_CLIENT_SECRET || "";
const SECRET = env.SESSION_SECRET || "";
const COACHES = (env.COACHES || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
const DATA_FILE = env.DATA_FILE || path.join(__dirname, "data", "progress.json");
const GITHUB_WEB = env.GITHUB_WEB || "https://github.com";
const GITHUB_API = env.GITHUB_API || "https://api.github.com";
const TOKEN_DAYS = 90;

if (!SECRET || SECRET.length < 32) { console.error("SESSION_SECRET must be at least 32 characters"); process.exit(1); }
if (!CLIENT_ID || !CLIENT_SECRET) { console.error("GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are required"); process.exit(1); }
if (!COACHES.length) { console.error("COACHES must list at least one GitHub username"); process.exit(1); }

// ---------- storage ----------
function loadData() {
  try { const d = JSON.parse(fs.readFileSync(DATA_FILE, "utf8")); d.trainees ||= {}; d.progress ||= {}; return d; }
  catch (e) { if (e.code !== "ENOENT") throw e; return { trainees: {}, progress: {} }; }
}
let data = loadData();
function saveData() {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  const tmp = DATA_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 1));
  fs.renameSync(tmp, DATA_FILE);
}

// ---------- signed tokens ----------
const b64 = (s) => Buffer.from(s).toString("base64url");
const sign = (s) => crypto.createHmac("sha256", SECRET).update(s).digest("base64url");
function makeToken(obj) { const body = b64(JSON.stringify(obj)); return body + "." + sign(body); }
function readToken(tok) {
  if (typeof tok !== "string" || tok.length > 2000) return null;
  const [body, sig] = tok.split(".");
  if (!body || !sig) return null;
  const want = sign(body);
  if (sig.length !== want.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(want))) return null;
  try { const o = JSON.parse(Buffer.from(body, "base64url").toString()); return o.exp > Date.now() ? o : null; } catch { return null; }
}

// ---------- helpers ----------
const isCoach = (login) => COACHES.includes(login);
const isTrainee = (login) => Object.prototype.hasOwnProperty.call(data.trainees, login);
const LOGIN_RE = /^[a-z0-9](?:[a-z0-9-]{0,38})$/;
const PAGE_RE = /^\/[A-Za-z0-9._\/-]{1,200}\.html$/;

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", SITE_ORIGIN);
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Max-Age", "86400");
  res.setHeader("Vary", "Origin");
}
function send(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(JSON.stringify(obj));
}
function redirect(res, url) { res.writeHead(302, { Location: url, "Cache-Control": "no-store" }); res.end(); }
function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on("data", (c) => { size += c.length; if (size > 64 * 1024) { reject(new Error("too big")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString() || "{}")); } catch { reject(new Error("bad json")); } });
    req.on("error", reject);
  });
}
function auth(req) {
  const h = req.headers.authorization || "";
  return h.startsWith("Bearer ") ? readToken(h.slice(7)) : null;
}
function safeReturn(u) {
  try { const url = new URL(u); if (url.origin === SITE_ORIGIN && url.pathname.startsWith(SITE_PATH)) return url.origin + url.pathname + url.search; } catch {}
  return SITE_ORIGIN + SITE_PATH;
}
const str = (v, max) => (typeof v === "string" ? v.slice(0, max) : "");

// ---------- routes ----------
async function handle(req, res) {
  const url = new URL(req.url, PUBLIC_URL);
  const p = url.pathname;
  cors(res);
  if (req.method === "OPTIONS") { res.writeHead(204); return res.end(); }

  if (p === "/health") return send(res, 200, { ok: true });

  // Step 1: send the visitor to GitHub to sign in
  if (p === "/login" && req.method === "GET") {
    const state = makeToken({ r: safeReturn(url.searchParams.get("return") || ""), n: crypto.randomBytes(8).toString("hex"), exp: Date.now() + 10 * 60e3 });
    const q = new URLSearchParams({ client_id: CLIENT_ID, redirect_uri: PUBLIC_URL + "/callback", state, allow_signup: "true" });
    return redirect(res, GITHUB_WEB + "/login/oauth/authorize?" + q);
  }

  // Step 2: GitHub sends them back; find out who they are, hand the site a session token
  if (p === "/callback" && req.method === "GET") {
    const st = readToken(url.searchParams.get("state") || "");
    const code = url.searchParams.get("code");
    if (!st || !code) return send(res, 400, { error: "Sign-in expired. Go back to the training site and try again." });
    try {
      const tr = await fetch(GITHUB_WEB + "/login/oauth/access_token", {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code, redirect_uri: PUBLIC_URL + "/callback" }),
      }).then((r) => r.json());
      if (!tr.access_token) throw new Error("no token");
      const user = await fetch(GITHUB_API + "/user", { headers: { Authorization: "Bearer " + tr.access_token, Accept: "application/vnd.github+json", "User-Agent": "digikits-training" } }).then((r) => r.json());
      if (!user.login) throw new Error("no user");
      // The GitHub access token is not kept; only the username is.
      const tok = makeToken({ login: String(user.login).toLowerCase(), id: user.id, exp: Date.now() + TOKEN_DAYS * 864e5 });
      return redirect(res, st.r + "#pt=" + tok);
    } catch (e) {
      console.error("callback failed:", e.message);
      return send(res, 502, { error: "GitHub sign-in failed. Go back and try again." });
    }
  }

  // Everything below needs a signed-in user
  const who = auth(req);
  if (!who) return send(res, 401, { error: "not signed in" });
  const login = who.login;
  const coach = isCoach(login);
  const trainee = isTrainee(login);

  if (p === "/me" && req.method === "GET") return send(res, 200, { login, coach, trainee });

  // A trainee's own ticks: all pages, or one page
  if (p === "/progress" && req.method === "GET") {
    if (!trainee && !coach) return send(res, 403, { error: "not on the trainee list" });
    return send(res, 200, { pages: data.progress[login] || {} });
  }

  if (p === "/progress" && req.method === "PUT") {
    if (!trainee && !coach) return send(res, 403, { error: "not on the trainee list" });
    let b; try { b = await readBody(req); } catch (e) { return send(res, 400, { error: e.message }); }
    const page = str(b.page, 220);
    if (!PAGE_RE.test(page) || page.includes("..")) return send(res, 400, { error: "bad page" });
    if (!Array.isArray(b.ticks) || b.ticks.length > 100) return send(res, 400, { error: "bad ticks" });
    const ticks = b.ticks.map(Boolean);
    const items = Array.isArray(b.items) ? b.items.slice(0, 100).map((s) => str(s, 300)) : [];
    const mine = (data.progress[login] ||= {});
    if (!mine[page] && Object.keys(mine).length >= 500) return send(res, 400, { error: "too many pages" });
    mine[page] = { ticks, total: ticks.length, items, title: str(b.title, 200), label: str(b.label, 100), updated: new Date().toISOString() };
    saveData();
    return send(res, 200, { ok: true, updated: mine[page].updated });
  }

  // ----- coach only -----
  if (p.startsWith("/coach")) {
    if (!coach) return send(res, 403, { error: "coaches only" });

    if (p === "/coach/progress" && req.method === "GET") {
      const trainees = Object.keys(data.trainees).sort().map((t) => ({ login: t, added: data.trainees[t].added, pages: data.progress[t] || {} }));
      return send(res, 200, { trainees });
    }
    if (p === "/coach/trainees" && req.method === "POST") {
      let b; try { b = await readBody(req); } catch (e) { return send(res, 400, { error: e.message }); }
      const t = str(b.login, 40).trim().toLowerCase().replace(/^@/, "");
      if (!LOGIN_RE.test(t)) return send(res, 400, { error: "That doesn't look like a GitHub username" });
      data.trainees[t] ||= { added: new Date().toISOString() };
      saveData();
      return send(res, 200, { ok: true });
    }
    const m = p.match(/^\/coach\/trainees\/([a-z0-9-]{1,39})$/);
    if (m && req.method === "DELETE") {
      // Removing a trainee hides them from the coach view and stops new saves; their ticks are kept.
      delete data.trainees[m[1]];
      saveData();
      return send(res, 200, { ok: true });
    }
  }

  return send(res, 404, { error: "not found" });
}

http.createServer((req, res) => {
  handle(req, res).catch((e) => { console.error(e); if (!res.headersSent) send(res, 500, { error: "server error" }); });
}).listen(PORT, () => console.log(`progress server on :${PORT}, site ${SITE_ORIGIN}${SITE_PATH}, coaches: ${COACHES.join(", ")}`));
