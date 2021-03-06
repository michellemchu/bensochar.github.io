/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-hsla-pointerevents-queryselector-touchevents-webp-setclasses !*/
! function(e, n, t) {
  function o(e, n) {
    return typeof e === n }

  function i() {
    var e, n, t, i, a, r, s;
    for (var A in c)
      if (c.hasOwnProperty(A)) {
        if (e = [], n = c[A], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (i = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) r = e[a], s = r.split("."), 1 === s.length ? Modernizr[s[0]] = i : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = i), u.push((i ? "" : "no-") + s.join("-")) } }

  function a(e) {
    var n = p.className,
      t = Modernizr._config.classPrefix || "";
    if (h && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2") }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), h ? p.className.baseVal = n : p.className = n) }

  function r() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : h ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

  function s(e, n) {
    return !!~("" + e).indexOf(n) }

  function A(e, n) {
    if ("object" == typeof e)
      for (var t in e) g(e, t) && A(t, e[t]);
    else { e = e.toLowerCase();
      var o = e.split("."),
        i = Modernizr[o[0]];
      if (2 == o.length && (i = i[o[1]]), "undefined" != typeof i) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n) }
    return Modernizr }

  function l() {
    var e = n.body;
    return e || (e = r(h ? "svg" : "body"), e.fake = !0), e }

  function f(e, t, o, i) {
    var a, s, A, f, u = "modernizr",
      c = r("div"),
      d = l();
    if (parseInt(o, 10))
      for (; o--;) A = r("div"), A.id = i ? i[o] : u + (o + 1), c.appendChild(A);
    return a = r("style"), a.type = "text/css", a.id = "s" + u, (d.fake ? d : c).appendChild(a), d.appendChild(c), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), c.id = u, d.fake && (d.style.background = "", d.style.overflow = "hidden", f = p.style.overflow, p.style.overflow = "hidden", p.appendChild(d)), s = t(c, e), d.fake ? (d.parentNode.removeChild(d), p.style.overflow = f, p.offsetHeight) : c.parentNode.removeChild(c), !!s }
  var u = [],
    c = [],
    d = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) {
        var t = this;
        setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { c.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { c.push({ name: null, fn: e }) } },
    Modernizr = function() {};
  Modernizr.prototype = d, Modernizr = new Modernizr, Modernizr.addTest("queryselector", "querySelector" in n && "querySelectorAll" in n);
  var p = n.documentElement,
    h = "svg" === p.nodeName.toLowerCase(),
    v = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  d._prefixes = v, Modernizr.addTest("hsla", function() {
    var e = r("a").style;
    return e.cssText = "background-color:hsla(120,40%,100%,.5)", s(e.backgroundColor, "rgba") || s(e.backgroundColor, "hsla") });
  var g;! function() {
    var e = {}.hasOwnProperty;
    g = o(e, "undefined") || o(e.call, "undefined") ? function(e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined") } : function(n, t) {
      return e.call(n, t) } }(), d._l = {}, d.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, d._trigger = function(e, n) {
    if (this._l[e]) {
      var t = this._l[e];
      setTimeout(function() {
        var e, o;
        for (e = 0; e < t.length; e++)(o = t[e])(n) }, 0), delete this._l[e] } }, Modernizr._q.push(function() { d.addTest = A }), Modernizr.addAsyncTest(function() {
    function e(e, n, t) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == i.width : !1,
          a = "webp" === e;
        A(e, a ? new Boolean(o) : o), t && t(n) }
      var i = new Image;
      i.onerror = o, i.onload = o, i.src = n }
    var n = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
      t = n.shift();
    e(t.name, t.uri, function(t) {
      if (t && "load" === t.type)
        for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri) }) });
  var m = d.testStyles = f;
  Modernizr.addTest("touchevents", function() {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
    else {
      var o = ["@media (", v.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      m(o, function(e) { t = 9 === e.offsetTop }) }
    return t });
  var w = function() {
    function e(e, n) {
      var i;
      return e ? (n && "string" != typeof n || (n = r(n || "div")), e = "on" + e, i = e in n, !i && o && (n.setAttribute || (n = r("div")), n.setAttribute(e, ""), i = "function" == typeof n[e], n[e] !== t && (n[e] = t), n.removeAttribute(e)), i) : !1 }
    var o = !("onblur" in n.documentElement);
    return e }();
  d.hasEvent = w;
  var b = "Moz O ms Webkit",
    y = d._config.usePrefixes ? b.toLowerCase().split(" ") : [];
  d._domPrefixes = y, Modernizr.addTest("pointerevents", function() {
    var e = !1,
      n = y.length;
    for (e = Modernizr.hasEvent("pointerdown"); n-- && !e;) w(y[n] + "pointerdown") && (e = !0);
    return e }), i(), a(u), delete d.addTest, delete d.addAsyncTest;
  for (var _ = 0; _ < Modernizr._q.length; _++) Modernizr._q[_]();
  e.Modernizr = Modernizr }(window, document);