/* A clickable mock-up of a typical home router's admin pages, set up like the Phase 1 Day 6 lab.
   Not a real brand: real routers name things differently, but the same pages are always there.
   Nothing here touches a real network. */
(function () {
  var root = document.querySelector(".router-sim");
  if (!root) return;

  var POOL = "192.168.50.100 – 192.168.50.199";
  var devices = [
    { name: "pi-a", ip: "192.168.50.50", mac: "dc:a6:32:4b:1e:07", maker: "Raspberry Pi", link: "Wired · LAN 1", sig: null, down: 0.4, up: 0.1, reserved: true, blocked: false },
    { name: "pi-b", ip: "192.168.50.51", mac: "d8:3a:dd:52:90:3c", maker: "Raspberry Pi", link: "Wi-Fi · 5 GHz", sig: -54, down: 0.2, up: 0.1, reserved: true, blocked: false },
    { name: "desktop", ip: "192.168.50.112", mac: "70:85:c2:1a:44:e9", maker: "ASRock", link: "Wired · LAN 2", sig: null, down: 2.1, up: 0.3, reserved: false, blocked: false },
    { name: "laptop", ip: "192.168.50.118", mac: "f4:5c:89:0d:3a:b2", maker: "Apple", link: "Wi-Fi · 5 GHz", sig: -61, down: 1.4, up: 0.4, reserved: false, blocked: false },
    { name: "(no name)", ip: "192.168.50.131", mac: "6a:1f:d3:77:02:4c", maker: "private address", link: "Wi-Fi · 2.4 GHz", sig: -72, down: 0.1, up: 0.0, reserved: false, blocked: false }
  ];
  var state = { tab: "status", adminDefault: true, guest: false, guestIsolate: true, wps: true, upnp: true, remote: false, backedUp: false };
  var logs = [
    ["08:59:02", "System started, firmware 1.2.3"],
    ["08:59:15", "WAN: got 192.168.1.73 from 192.168.1.1 (DHCP)"],
    ["09:00:41", "DHCP: 192.168.50.50 to dc:a6:32:4b:1e:07 (pi-a), reserved"],
    ["09:01:03", "DHCP: 192.168.50.51 to d8:3a:dd:52:90:3c (pi-b), reserved"],
    ["09:03:27", "DHCP: 192.168.50.112 to 70:85:c2:1a:44:e9 (desktop)"],
    ["09:04:10", "DHCP: 192.168.50.118 to f4:5c:89:0d:3a:b2 (laptop)"],
    ["09:12:55", "DHCP: 192.168.50.131 to 6a:1f:d3:77:02:4c (no name)"],
    ["09:20:00", "Admin login from 192.168.50.118"]
  ];

  function now() { var d = new Date(); return [d.getHours(), d.getMinutes(), d.getSeconds()].map(function (n) { return (n < 10 ? "0" : "") + n; }).join(":"); }
  function log(t) { logs.push([now(), t]); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function btn(text, fn, cls) { var b = el("button", "rs-btn" + (cls ? " " + cls : ""), text); b.type = "button"; b.addEventListener("click", fn); return b; }
  function row(label, value, cls) { var r = el("div", "rs-row"); r.appendChild(el("span", "rs-k", label)); var v = el("span", "rs-v" + (cls ? " " + cls : "")); if (typeof value === "string") v.textContent = value; else v.appendChild(value); r.appendChild(v); return r; }
  function toggle(label, key, onText, offText, warnWhenOn, after) {
    var r = el("div", "rs-row");
    r.appendChild(el("span", "rs-k", label));
    var b = btn(state[key] ? onText : offText, function () { state[key] = !state[key]; log(label + ": " + (state[key] ? onText : offText)); if (after) after(); draw(); }, state[key] === warnWhenOn ? "warn" : "ok");
    r.appendChild(b);
    return r;
  }
  function card(title) { var c = el("div", "rs-card"); c.appendChild(el("h4", null, title)); return c; }
  function hint(t) { return el("p", "rs-hint", t); }

  var tabs = [["status", "Status"], ["devices", "Devices"], ["dhcp", "DHCP"], ["wifi", "Wi-Fi"], ["security", "Security"], ["logs", "Logs"]];

  function draw() {
    root.textContent = "";
    var bar = el("div", "rs-top");
    bar.appendChild(el("span", "rs-brand", "Home Router AX · admin"));
    bar.appendChild(el("span", "rs-url", "http://192.168.50.1"));
    root.appendChild(bar);
    var nav = el("div", "rs-tabs");
    tabs.forEach(function (t) {
      var b = btn(t[1], function () { state.tab = t[0]; draw(); }, state.tab === t[0] ? "on" : "");
      nav.appendChild(b);
    });
    root.appendChild(nav);
    var body = el("div", "rs-body");
    root.appendChild(body);
    ({ status: status, devices: devs, dhcp: dhcp, wifi: wifi, security: sec, logs: logsTab })[state.tab](body);
  }

  function status(b) {
    var on = devices.filter(function (d) { return !d.blocked; }).length;
    var c = card("Internet (WAN)");
    c.appendChild(row("Status", "● Connected", "good"));
    c.appendChild(row("Connection type", "Dynamic IP (DHCP)"));
    c.appendChild(row("WAN IP address", "192.168.1.73"));
    c.appendChild(row("Gateway", "192.168.1.1  (your home router)"));
    c.appendChild(row("DNS", "192.168.1.1"));
    b.appendChild(c);
    c = card("Local network (LAN)");
    c.appendChild(row("Router IP", "192.168.50.1"));
    c.appendChild(row("Subnet mask", "255.255.255.0  (/24)"));
    c.appendChild(row("DHCP server", "On · pool " + POOL));
    c.appendChild(row("Connected devices", on + " (2 wired, " + (on - 2) + " Wi-Fi)"));
    b.appendChild(c);
    c = card("System");
    c.appendChild(row("Firmware", "1.2.3"));
    c.appendChild(row("Uptime", "3 h 12 min"));
    c.appendChild(row("CPU / memory", "8 % / 41 %"));
    if (state.adminDefault) c.appendChild(row("Warning", "Admin password is still the default", "bad"));
    b.appendChild(c);
    b.appendChild(hint("The WAN IP comes from your home router, so it starts 192.168.1. The lab network behind this router is 192.168.50.x. Two different streets."));
  }

  var rates = {};
  function devs(b) {
    var wrap = el("div", "table-scroll");
    var t = el("table", "rs-table");
    var h = el("tr");
    ["Name", "IP", "MAC · maker", "Link", "Signal", "↓ / ↑ Mbps", ""].forEach(function (x) { h.appendChild(el("th", null, x)); });
    t.appendChild(h);
    devices.forEach(function (d) {
      var r = el("tr", d.blocked ? "blocked" : "");
      var name = el("td");
      if (state.editing === d.mac) {
        var inp = el("input", "rs-input"); inp.value = d.name === "(no name)" ? "" : d.name; inp.maxLength = 24; inp.placeholder = "new name";
        var save = function () { var n = inp.value.trim(); if (/^[\w .-]{1,24}$/.test(n) && n !== d.name) { log("Renamed " + d.mac + " to " + n); d.name = n; } state.editing = null; draw(); };
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") save(); if (e.key === "Escape") { state.editing = null; draw(); } });
        name.appendChild(inp); name.appendChild(btn("Save", save, "link"));
        setTimeout(function () { inp.focus(); }, 0);
      } else {
        name.appendChild(el("b", null, d.name));
        name.appendChild(btn("rename", function () { state.editing = d.mac; draw(); }, "link"));
      }
      r.appendChild(name);
      r.appendChild(el("td", "mono", d.ip + (d.reserved ? " ✓" : "")));
      var m = el("td"); m.appendChild(el("span", "mono", d.mac)); m.appendChild(el("div", "rs-sub", d.maker)); r.appendChild(m);
      r.appendChild(el("td", null, d.link));
      r.appendChild(el("td", null, d.sig == null ? "—" : d.sig + " dBm " + (d.sig > -60 ? "good" : d.sig > -70 ? "ok" : "weak")));
      var rt = el("td", "mono rs-rate"); rt.dataset.mac = d.mac; r.appendChild(rt);
      var a = el("td", "rs-actions");
      if (!d.reserved) a.appendChild(btn("Reserve IP", function () { d.reserved = true; log("DHCP: reserved " + d.ip + " for " + d.mac + " (" + d.name + ")"); draw(); }));
      a.appendChild(btn(d.blocked ? "Unblock" : "Block", function () { d.blocked = !d.blocked; log((d.blocked ? "Blocked " : "Unblocked ") + d.mac + " (" + d.name + ")"); draw(); }, d.blocked ? "ok" : "warn"));
      r.appendChild(a);
      t.appendChild(r);
    });
    wrap.appendChild(t);
    b.appendChild(wrap);
    b.appendChild(hint("✓ = reserved IP. Speeds update live. A MAC whose 2nd character is 2, 6, A or E (like 6a:…) is a made-up private address, usually a phone. Unknown device? Rename it once you know, or block it."));
    tick();
  }
  function tick() {
    document.querySelectorAll(".rs-rate").forEach(function (td) {
      var d = devices.filter(function (x) { return x.mac === td.dataset.mac; })[0];
      if (!d) return;
      var dn = d.blocked ? 0 : Math.max(0, d.down * (0.6 + Math.random() * 0.8));
      var up = d.blocked ? 0 : Math.max(0, d.up * (0.6 + Math.random() * 0.8));
      td.textContent = dn.toFixed(1) + " / " + up.toFixed(1);
    });
  }
  setInterval(function () { if (state.tab === "devices") tick(); }, 1500);

  function dhcp(b) {
    var c = card("DHCP server");
    c.appendChild(row("Status", "On", "good"));
    c.appendChild(row("Address pool", POOL));
    c.appendChild(row("Lease time", "24 hours"));
    c.appendChild(row("Default gateway", "192.168.50.1"));
    b.appendChild(c);
    c = card("Address reservations");
    var list = devices.filter(function (d) { return d.reserved; });
    if (!list.length) c.appendChild(hint("No reservations."));
    list.forEach(function (d) {
      var r = el("div", "rs-row");
      r.appendChild(el("span", "rs-k mono", d.mac));
      var v = el("span", "rs-v"); v.appendChild(el("span", "mono", d.ip + "  " + d.name + "  "));
      v.appendChild(btn("Remove", function () { d.reserved = false; log("DHCP: removed reservation for " + d.mac); draw(); }, "link"));
      r.appendChild(v);
      c.appendChild(r);
    });
    b.appendChild(c);
    b.appendChild(hint("Reservations here are outside the pool (.50, .51), so they never clash with addresses the router hands out. Devices without a reservation get any free address from .100 to .199."));
  }

  function wifi(b) {
    var c = card("Main Wi-Fi");
    c.appendChild(row("Name (SSID)", "DGK-LAB  (2.4 GHz and 5 GHz)"));
    c.appendChild(row("Security", "WPA2/WPA3 Personal"));
    c.appendChild(row("Password", "••••••••••••"));
    c.appendChild(row("Channel", "Auto"));
    b.appendChild(c);
    c = card("Guest network");
    c.appendChild(toggle("Guest network", "guest", "On", "Off", true));
    if (state.guest) {
      c.appendChild(row("Name (SSID)", "DGK-LAB-Guest"));
      c.appendChild(toggle("Guests can see each other and the main network", "guestIsolate", "No (isolated)", "Yes", false));
    }
    b.appendChild(c);
    b.appendChild(hint("Guest Wi-Fi gets internet only. A laptop on guest Wi-Fi can't reach pi-a: that's on purpose, and it's the same thing that happens at client sites."));
  }

  function sec(b) {
    var c = card("Router admin");
    var r = el("div", "rs-row");
    r.appendChild(el("span", "rs-k", "Admin password"));
    r.appendChild(state.adminDefault
      ? btn("Default! Change it", function () { state.adminDefault = false; log("Admin password changed"); draw(); }, "warn")
      : el("span", "rs-v good", "Changed ✓"));
    c.appendChild(r);
    c.appendChild(toggle("Remote management (from the internet)", "remote", "On", "Off", true));
    c.appendChild(row("Firmware", "1.2.3 · up to date"));
    b.appendChild(c);
    c = card("Features to switch off");
    c.appendChild(toggle("WPS (push-button join)", "wps", "On", "Off", true));
    c.appendChild(toggle("UPnP (devices open ports themselves)", "upnp", "On", "Off", true));
    c.appendChild(row("Port forwarding", "None", "good"));
    b.appendChild(c);
    c = card("Backup");
    var r2 = el("div", "rs-row");
    r2.appendChild(el("span", "rs-k", "Settings file"));
    r2.appendChild(state.backedUp ? el("span", "rs-v good", "Saved ✓ (router-config.bin)") : btn("Back up settings", function () { state.backedUp = true; log("Settings backed up"); draw(); }));
    c.appendChild(r2);
    b.appendChild(c);
    b.appendChild(hint("Orange means fix it. On a client's router, ask before changing anything, and write down what you changed."));
  }

  function logsTab(b) {
    var box = el("div", "rs-log");
    logs.slice().reverse().forEach(function (l) {
      var line = el("div");
      line.appendChild(el("span", "rs-time", l[0] + "  "));
      line.appendChild(document.createTextNode(l[1]));
      box.appendChild(line);
    });
    b.appendChild(box);
    b.appendChild(hint("Newest first. Your clicks in the other tabs show up here, like a real router's system log."));
  }

  draw();
})();
