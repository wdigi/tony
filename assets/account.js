/* GitHub sign-in for the training site, shared by lesson pages and the coach page.
   The progress server address is set in progress-config.js. */
(function () {
  var SERVER = (window.PROGRESS_SERVER || "").replace(/\/$/, "");
  var TOKEN_KEY = "tony-auth";

  function get() { try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; } }
  function set(t) { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch (e) {} }

  // Coming back from GitHub: the server puts the session token after #pt=
  var m = location.hash.match(/[#&]pt=([A-Za-z0-9_\-.]+)/);
  if (m) {
    set(m[1]);
    history.replaceState(null, "", location.pathname + location.search);
  }

  function api(method, path, body) {
    var t = get();
    var opts = { method: method, headers: {} };
    if (t) opts.headers.Authorization = "Bearer " + t;
    if (body !== undefined) { opts.headers["Content-Type"] = "application/json"; opts.body = JSON.stringify(body); }
    return fetch(SERVER + path, opts).then(function (r) {
      if (r.status === 401) set(null);
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) { var e = new Error(j.error || ("HTTP " + r.status)); e.status = r.status; throw e; }
        return j;
      });
    });
  }

  var mePromise = null;
  window.Account = {
    enabled: !!SERVER,
    signedIn: function () { return !!get(); },
    signIn: function () { location.href = SERVER + "/login?return=" + encodeURIComponent(location.href.split("#")[0]); },
    signOut: function () { set(null); mePromise = null; location.reload(); },
    // Resolves {login, coach, trainee}, or null when signed out or the server can't be reached
    me: function () {
      if (!SERVER || !get()) return Promise.resolve(null);
      if (!mePromise) mePromise = api("GET", "/me").catch(function (e) { if (e.status === 401) return null; throw e; });
      return mePromise;
    },
    api: api
  };
})();
