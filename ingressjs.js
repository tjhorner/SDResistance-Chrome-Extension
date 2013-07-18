// Input 0
'use strict';var j = void 0, k = true, l = null, m = false, q, r = this;
function aa() {
}
function s(a) {
  a.g = function() {
    return a.Ec || (a.Ec = new a)
  }
}
function ba(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function ca(a) {
  return a != l
}
function da(a) {
  var b = ba(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function t(a) {
  return typeof a == "string"
}
function ea(a) {
  return ba(a) == "function"
}
function fa(a) {
  a = ba(a);
  return a == "object" || a == "array" || a == "function"
}
var ga = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ha = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ja(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function u(a, b, c) {
  u = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ia : ja;
  return u.apply(l, arguments)
}
function ka(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var v = Date.now || function() {
  return+new Date
};
function w(a, b) {
  var c = a.split("."), d = r;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    !c.length && b !== j ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  }
}
function x(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ib = b.prototype;
  a.prototype = new c
}
;
// Input 1
function la(a, b, c, d) {
  this.Kc = a;
  this.Ic = b;
  this.Lc = c;
  this.Jc = d
}
function ma(a, b, c) {
  this.zoom = a;
  this.x = b;
  this.y = c
}
ma.prototype.getBounds = function() {
  var a = na(new ma(this.zoom, this.x + 1, this.y)), b = na(new ma(this.zoom, this.x, this.y + 1));
  return new la(b[0], a[0], b[1], a[1])
};
function oa(a, b, c) {
  var d = b;
  d > 85.05112877980659 ? d = 85.05112877980659 : d < -85.05112877980659 && (d = -85.05112877980659);
  b = Math.floor(Math.pow(2, a) * ((c + 180) / 360));
  b >= Math.pow(2, a) && b--;
  d = d * Math.PI / 180;
  d = Math.log(Math.tan(Math.PI / 4 + d / 2));
  d = Math.floor(Math.pow(2, a) * ((Math.PI - d) / (2 * Math.PI)));
  (c <= -180 || c >= 180) && d < 0 && d++;
  return new ma(a, b, d)
}
function na(a) {
  var b = Math.PI - a.y * 2 * Math.PI / Math.pow(2, a.zoom), b = 2 * Math.atan(Math.exp(b)) - Math.PI / 2;
  return[b * 180 / Math.PI, 360 * a.x / Math.pow(2, a.zoom) - 180]
}
;
// Input 2
function pa() {
  this.V = {};
  this.qd = "";
  this.n = 0
}
function qa(a, b, c) {
  var d = {}, a = new ma(a, b, c), c = a.getBounds(), b = new google.maps.LatLng(c.Kc, c.Lc), c = new google.maps.LatLng(c.Ic, c.Jc);
  d.bounds = {};
  d.bounds.sw = b;
  d.bounds.ne = c;
  d.quadkey = a.zoom + "_" + a.x + "_" + a.y;
  return d
}
;
// Input 3
function ra(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
x(ra, Error);
ra.prototype.name = "CustomError";
// Input 4
function sa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function y(a, b) {
  var c = String(a), d = c.indexOf(".");
  if(d == -1) {
    d = c.length
  }
  d = Math.max(0, b - d);
  return Array(d + 1).join("0") + c
}
function ta(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;c == 0 && g < f;g++) {
    var h = d[g] || "", i = e[g] || "", o = /(\d*)(\D*)/g, n = /(\d*)(\D*)/g;
    do {
      var p = o.exec(h) || ["", "", ""], E = n.exec(i) || ["", "", ""];
      if(p[0].length == 0 && E[0].length == 0) {
        break
      }
      c = ua(p[1].length == 0 ? 0 : parseInt(p[1], 10), E[1].length == 0 ? 0 : parseInt(E[1], 10)) || ua(p[2].length == 0, E[2].length == 0) || ua(p[2], E[2])
    }while(c == 0)
  }
  return c
}
function ua(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var va = {};
function wa(a) {
  return va[a] || (va[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;
// Input 5
function xa(a, b) {
  b.unshift(a);
  ra.call(this, sa.apply(l, b));
  b.shift();
  this.sd = a
}
x(xa, ra);
xa.prototype.name = "AssertionError";
function ya(a, b) {
  throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;
// Input 6
// Input 7
var za, Aa, Ba, Ca, Da;
function Ea() {
  return r.navigator ? r.navigator.userAgent : l
}
function Fa() {
  return r.navigator
}
Ca = Ba = Aa = za = m;
var Ga;
if(Ga = Ea()) {
  var Ha = Fa();
  za = Ga.indexOf("Opera") == 0;
  Aa = !za && Ga.indexOf("MSIE") != -1;
  Ba = !za && Ga.indexOf("WebKit") != -1;
  Ca = !za && !Ba && Ha.product == "Gecko"
}
var Ia = za, z = Aa, Ja = Ca, Ka = Ba, La = Fa();
Da = (La && La.platform || "").indexOf("Mac") != -1;
var Ma = !!Fa() && (Fa().appVersion || "").indexOf("X11") != -1, Na;
a: {
  var Oa = "", Pa;
  if(Ia && r.opera) {
    var Qa = r.opera.version, Oa = typeof Qa == "function" ? Qa() : Qa
  }else {
    if(Ja ? Pa = /rv\:([^\);]+)(\)|;)/ : z ? Pa = /MSIE\s+([^\);]+)(\)|;)/ : Ka && (Pa = /WebKit\/(\S+)/), Pa) {
      var Ra = Pa.exec(Ea()), Oa = Ra ? Ra[1] : ""
    }
  }
  if(z) {
    var Sa, Ta = r.document;
    Sa = Ta ? Ta.documentMode : j;
    if(Sa > parseFloat(Oa)) {
      Na = String(Sa);
      break a
    }
  }
  Na = Oa
}
var Ua = {};
function Va(a) {
  return Ua[a] || (Ua[a] = ta(Na, a) >= 0)
}
var Wa = {};
function Xa() {
  return Wa[9] || (Wa[9] = z && document.documentMode && document.documentMode >= 9)
}
;
// Input 8
function A(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
}
function Ya(a, b, c) {
  var d = {}, e;
  for(e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e])
  }
  return d
}
function Za(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function $a(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function ab(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function bb(a) {
  for(var b in a) {
    return m
  }
  return k
}
function cb(a) {
  var b = MAP_PARAMS;
  a in b && delete b[a]
}
function db(a, b) {
  var c = MAP_PARAMS;
  return a in c ? c[a] : b
}
;
// Input 9
!z || Xa();
var eb = !z || Xa();
z && Va("8");
// Input 10
var B = Array.prototype, fb = B.indexOf ? function(a, b, c) {
  return B.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    return!t(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, C = B.forEach ? function(a, b, c) {
  B.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = t(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, D = B.filter ? function(a, b, c) {
  return B.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = t(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in g) {
      var i = g[h];
      b.call(c, i, h, a) && (e[f++] = i)
    }
  }
  return e
}, F = B.map ? function(a, b, c) {
  return B.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
function gb(a, b, c) {
  if(a.reduce) {
    return a.reduce(b, c)
  }
  var d = c;
  C(a, function(c, f) {
    d = b.call(j, d, c, f, a)
  });
  return d
}
function hb(a, b) {
  var c = fb(a, b);
  c >= 0 && B.splice.call(a, c, 1)
}
function ib(a) {
  return B.concat.apply(B, arguments)
}
function jb(a) {
  if(ba(a) == "array") {
    return ib(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function kb(a, b, c, d) {
  B.splice.apply(a, lb(arguments, 1))
}
function lb(a, b, c) {
  return arguments.length <= 2 ? B.slice.call(a, b) : B.slice.call(a, b, c)
}
function mb(a, b, c) {
  if(!da(a) || !da(b) || a.length != b.length) {
    return m
  }
  for(var d = a.length, c = c || nb, e = 0;e < d;e++) {
    if(!c(a[e], b[e])) {
      return m
    }
  }
  return k
}
function nb(a, b) {
  return a === b
}
;
// Input 11
// Input 12
// Input 13
// Input 14
// Input 15
function ob() {
}
ob.prototype.vb = m;
ob.prototype.N = function() {
  if(!this.vb) {
    this.vb = k, this.O()
  }
};
ob.prototype.O = function() {
  this.Ac && pb.apply(l, this.Ac)
};
function pb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    da(d) ? pb.apply(l, d) : d && typeof d.N == "function" && d.N()
  }
}
;
// Input 16
function G(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
x(G, ob);
G.prototype.O = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
G.prototype.za = m;
G.prototype.Wc = k;
G.prototype.stopPropagation = function() {
  this.za = k
};
// Input 17
function qb(a) {
  qb[" "](a);
  return a
}
qb[" "] = aa;
// Input 18
function rb(a, b) {
  a && this.u(a, b)
}
x(rb, G);
q = rb.prototype;
q.target = l;
q.relatedTarget = l;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = m;
q.altKey = m;
q.shiftKey = m;
q.metaKey = m;
q.Sc = m;
q.Z = l;
q.u = function(a, b) {
  var c = this.type = a.type;
  G.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ja) {
      var e;
      a: {
        try {
          qb(d.nodeName);
          e = k;
          break a
        }catch(f) {
        }
        e = m
      }
      e || (d = l)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== j ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== j ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== j ? a.clientX : a.pageX;
  this.clientY = a.clientY !== j ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Sc = Da ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Z = a;
  delete this.Wc;
  delete this.za
};
q.stopPropagation = function() {
  rb.ib.stopPropagation.call(this);
  this.Z.stopPropagation ? this.Z.stopPropagation() : this.Z.cancelBubble = k
};
q.O = function() {
  rb.ib.O.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Z = l
};
// Input 19
function sb() {
}
var tb = 0;
q = sb.prototype;
q.key = 0;
q.T = m;
q.qb = m;
q.u = function(a, b, c, d, e, f) {
  if(ea(a)) {
    this.Eb = k
  }else {
    if(a && a.handleEvent && ea(a.handleEvent)) {
      this.Eb = m
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.ta = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.zb = f;
  this.qb = m;
  this.key = ++tb;
  this.T = m
};
q.handleEvent = function(a) {
  return this.Eb ? this.ta.call(this.zb || this.src, a) : this.ta.handleEvent.call(this.ta, a)
};
// Input 20
var ub, vb = (ub = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
// Input 21
function H(a, b) {
  this.Hb = b;
  this.L = [];
  if(a > this.Hb) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.L.push(this.w ? this.w() : {})
  }
}
x(H, ob);
H.prototype.w = l;
H.prototype.ub = l;
function wb(a) {
  return a.L.length ? a.L.pop() : a.w ? a.w() : {}
}
function xb(a, b) {
  a.L.length < a.Hb ? a.L.push(b) : yb(a, b)
}
function yb(a, b) {
  if(a.ub) {
    a.ub(b)
  }else {
    if(fa(b)) {
      if(ea(b.N)) {
        b.N()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
H.prototype.O = function() {
  H.ib.O.call(this);
  for(var a = this.L;a.length;) {
    yb(this, a.pop())
  }
  delete this.L
};
// Input 22
var zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb;
(function() {
  function a() {
    return{F:0, S:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = eb ? function(b) {
      return g.call(a.src, a.key, b)
    } : function(b) {
      b = g.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    };
    return a
  }
  function d() {
    return new sb
  }
  function e() {
    return new rb
  }
  var f = ub && !(ta(vb, "5.7") >= 0), g;
  Eb = function(a) {
    g = a
  };
  if(f) {
    zb = function() {
      return wb(h)
    };
    Ab = function(a) {
      xb(h, a)
    };
    Bb = function() {
      return wb(i)
    };
    Cb = function(a) {
      xb(i, a)
    };
    Db = function() {
      return wb(o)
    };
    Fb = function() {
      xb(o, c())
    };
    Gb = function() {
      return wb(n)
    };
    Hb = function(a) {
      xb(n, a)
    };
    Ib = function() {
      return wb(p)
    };
    Jb = function(a) {
      xb(p, a)
    };
    var h = new H(0, 600);
    h.w = a;
    var i = new H(0, 600);
    i.w = b;
    var o = new H(0, 600);
    o.w = c;
    var n = new H(0, 600);
    n.w = d;
    var p = new H(0, 600);
    p.w = e
  }else {
    zb = a, Ab = aa, Bb = b, Cb = aa, Db = c, Fb = aa, Gb = d, Hb = aa, Ib = e, Jb = aa
  }
})();
// Input 23
var Kb = {}, I = {}, Lb = {}, Mb = {};
function J(a, b, c, d, e) {
  if(b) {
    if(ba(b) == "array") {
      for(var f = 0;f < b.length;f++) {
        J(a, b[f], c, d, e)
      }
      return l
    }else {
      var d = !!d, g = I;
      b in g || (g[b] = zb());
      g = g[b];
      d in g || (g[d] = zb(), g.F++);
      var g = g[d], h = a[ga] || (a[ga] = ++ha), i;
      g.S++;
      if(g[h]) {
        i = g[h];
        for(f = 0;f < i.length;f++) {
          if(g = i[f], g.ta == c && g.zb == e) {
            if(g.T) {
              break
            }
            return i[f].key
          }
        }
      }else {
        i = g[h] = Bb(), g.F++
      }
      f = Db();
      f.src = a;
      g = Gb();
      g.u(c, f, a, b, d, e);
      c = g.key;
      f.key = c;
      i.push(g);
      Kb[c] = g;
      Lb[h] || (Lb[h] = Bb());
      Lb[h].push(g);
      a.addEventListener ? (a == r || !a.zc) && a.addEventListener(b, f, d) : a.attachEvent(b in Mb ? Mb[b] : Mb[b] = "on" + b, f);
      return c
    }
  }else {
    throw Error("Invalid event type");
  }
}
function Nb(a) {
  if(Kb[a]) {
    var b = Kb[a];
    if(!b.T) {
      var c = b.src, d = b.type, e = b.proxy, f = b.capture;
      c.removeEventListener ? (c == r || !c.zc) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Mb ? Mb[d] : Mb[d] = "on" + d, e);
      c = c[ga] || (c[ga] = ++ha);
      e = I[d][f][c];
      if(Lb[c]) {
        var g = Lb[c];
        hb(g, b);
        g.length == 0 && delete Lb[c]
      }
      b.T = k;
      e.Ib = k;
      Ob(d, f, c, e);
      delete Kb[a]
    }
  }
}
function Ob(a, b, c, d) {
  if(!d.ua && d.Ib) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].T) {
        var g = d[e].proxy;
        g.src = l;
        Fb(g);
        Hb(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.Ib = m;
    f == 0 && (Cb(d), delete I[a][b][c], I[a][b].F--, I[a][b].F == 0 && (Ab(I[a][b]), delete I[a][b], I[a].F--), I[a].F == 0 && (Ab(I[a]), delete I[a]))
  }
}
function Pb(a, b, c, d, e) {
  var f = 1, b = b[ga] || (b[ga] = ++ha);
  if(a[b]) {
    a.S--;
    a = a[b];
    a.ua ? a.ua++ : a.ua = 1;
    try {
      for(var g = a.length, h = 0;h < g;h++) {
        var i = a[h];
        i && !i.T && (f &= Qb(i, e) !== m)
      }
    }finally {
      a.ua--, Ob(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Qb(a, b) {
  var c = a.handleEvent(b);
  a.qb && Nb(a.key);
  return c
}
Eb(function(a, b) {
  if(!Kb[a]) {
    return k
  }
  var c = Kb[a], d = c.type, e = I;
  if(!(d in e)) {
    return k
  }
  var e = e[d], f, g;
  if(!eb) {
    var h;
    if(!(h = b)) {
      a: {
        h = "window.event".split(".");
        for(var i = r;f = h.shift();) {
          if(ca(i[f])) {
            i = i[f]
          }else {
            h = l;
            break a
          }
        }
        h = i
      }
    }
    f = h;
    h = k in e;
    i = m in e;
    if(h) {
      if(f.keyCode < 0 || f.returnValue != j) {
        return k
      }
      a: {
        var o = m;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(n) {
            o = k
          }
        }
        if(o || f.returnValue == j) {
          f.returnValue = k
        }
      }
    }
    o = Ib();
    o.u(f, this);
    f = k;
    try {
      if(h) {
        for(var p = Bb(), E = o.currentTarget;E;E = E.parentNode) {
          p.push(E)
        }
        g = e[k];
        g.S = g.F;
        for(var Q = p.length - 1;!o.za && Q >= 0 && g.S;Q--) {
          o.currentTarget = p[Q], f &= Pb(g, p[Q], d, k, o)
        }
        if(i) {
          g = e[m];
          g.S = g.F;
          for(Q = 0;!o.za && Q < p.length && g.S;Q++) {
            o.currentTarget = p[Q], f &= Pb(g, p[Q], d, m, o)
          }
        }
      }else {
        f = Qb(c, o)
      }
    }finally {
      if(p) {
        p.length = 0, Cb(p)
      }
      o.N();
      Jb(o)
    }
    return f
  }
  d = new rb(b, this);
  try {
    f = Qb(c, d)
  }finally {
    d.N()
  }
  return f
});
// Input 24
function K(a, b) {
  this.r = ub ? [] : "";
  a != l && this.append.apply(this, arguments)
}
ub ? (K.prototype.Ja = 0, K.prototype.append = function(a, b, c) {
  b == l ? this.r[this.Ja++] = a : (this.r.push.apply(this.r, arguments), this.Ja = this.r.length);
  return this
}) : K.prototype.append = function(a, b, c) {
  this.r += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.r += arguments[d]
    }
  }
  return this
};
K.prototype.clear = function() {
  ub ? this.Ja = this.r.length = 0 : this.r = ""
};
K.prototype.toString = function() {
  if(ub) {
    var a = this.r.join("");
    this.clear();
    a && this.append(a);
    return a
  }else {
    return this.r
  }
};
// Input 25
var Rb;
function Sb(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function L(a, b) {
  for(var c = Sb(a), d = lb(arguments, 1), e = c, f = 0, g = 0;g < d.length;g++) {
    fb(e, d[g]) >= 0 || (e.push(d[g]), f++)
  }
  a.className = c.join(" ")
}
function M(a, b) {
  for(var c = Sb(a), d = lb(arguments, 1), e = c, f = 0, g = 0;g < e.length;g++) {
    fb(d, e[g]) >= 0 && (kb(e, g--, 1), f++)
  }
  a.className = c.join(" ")
}
function Tb(a, b, c) {
  for(var d = Sb(a), e = m, f = 0;f < d.length;f++) {
    d[f] == b && (kb(d, f--, 1), e = k)
  }
  if(e) {
    d.push(c), a.className = d.join(" ")
  }
}
function Ub(a, b) {
  var c = !(fb(Sb(a), b) >= 0);
  c ? L(a, b) : M(a, b);
  return c
}
;
// Input 26
// Input 27
// Input 28
!z || Xa();
var Vb = !Ja && !z || z && Xa() || Ja && Va("1.9.1");
z && Va("9");
// Input 29
// Input 30
function Wb(a, b, c) {
  function d(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    da(f) && !(fa(f) && f.nodeType > 0) ? C(Xb(f) ? jb(f) : f, d) : d(f)
  }
}
function Yb(a, b) {
  Wb(a.nodeType == 9 ? a : a.ownerDocument || a.document, a, arguments)
}
function Zb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : l
}
function $b(a) {
  var b, c = a.parentNode;
  if(c && c.nodeType != 11) {
    if(a.removeNode) {
      a.removeNode(m)
    }else {
      for(;b = a.firstChild;) {
        c.insertBefore(b, a)
      }
      Zb(a)
    }
  }
}
function ac(a) {
  return Vb && a.children != j ? a.children : D(a.childNodes, function(a) {
    return a.nodeType == 1
  })
}
function Xb(a) {
  if(a && typeof a.length == "number") {
    if(fa(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(ea(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return m
}
function bc(a) {
  this.wb = a || r.document || document
}
q = bc.prototype;
q.createElement = function(a) {
  return this.wb.createElement(a)
};
q.createTextNode = function(a) {
  return this.wb.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = Yb;
q.removeNode = Zb;
q.contains = function(a, b) {
  if(a.contains && b.nodeType == 1) {
    return a == b || a.contains(b)
  }
  if(typeof a.compareDocumentPosition != "undefined") {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
// Input 31
function cc(a, b) {
  var c = (Rb || (Rb = new bc)).createElement("DIV");
  c.innerHTML = a(b || dc, j, j);
  if(c.childNodes.length == 1) {
    var d = c.firstChild;
    if(d.nodeType == 1) {
      return d
    }
  }
  return c
}
var dc = {};
// Input 32
// Input 33
// Input 34
z && Va(8);
// Input 35
// Input 36
// Input 37
function N(a, b, c) {
  a.innerHTML = b(c || dc, j, j)
}
function ec(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for(e in b) {
    d[e] = b[e]
  }
  return d
}
function O(a) {
  return typeof a === "object" && a && a.sb === 0 ? a.content : String(a).replace(fc, gc)
}
function P(a) {
  typeof a === "object" && a && a.sb === 0 ? (a = String(a.content).replace(hc, ""), a = String(a).replace(ic, gc)) : a = String(a).replace(fc, gc);
  return a
}
function R(a) {
  if(a == l) {
    return" null "
  }
  switch(typeof a) {
    case "boolean":
    ;
    case "number":
      return" " + a + " ";
    default:
      return"'" + String(String(a)).replace(jc, kc) + "'"
  }
}
var lc = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\u000b":"&#11;", "\u000c":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function gc(a) {
  return lc[a]
}
var mc = {"\x00":"\\x00", "\u0008":"\\x08", "\t":"\\t", "\n":"\\n", "\u000b":"\\x0b", "\u000c":"\\f", "\r":"\\r", '"':"\\x22", "&":"\\x26", "'":"\\x27", "/":"\\/", "<":"\\x3c", "=":"\\x3d", ">":"\\x3e", "\\":"\\\\", "\u0085":"\\x85", "\u2028":"\\u2028", "\u2029":"\\u2029", $:"\\x24", "(":"\\x28", ")":"\\x29", "*":"\\x2a", "+":"\\x2b", ",":"\\x2c", "-":"\\x2d", ".":"\\x2e", ":":"\\x3a", "?":"\\x3f", "[":"\\x5b", "]":"\\x5d", "^":"\\x5e", "{":"\\x7b", "|":"\\x7c", "}":"\\x7d"};
function kc(a) {
  return mc[a]
}
var nc = {"\x00":"%00", "\u0001":"%01", "\u0002":"%02", "\u0003":"%03", "\u0004":"%04", "\u0005":"%05", "\u0006":"%06", "\u0007":"%07", "\u0008":"%08", "\t":"%09", "\n":"%0A", "\u000b":"%0B", "\u000c":"%0C", "\r":"%0D", "\u000e":"%0E", "\u000f":"%0F", "\u0010":"%10", "\u0011":"%11", "\u0012":"%12", "\u0013":"%13", "\u0014":"%14", "\u0015":"%15", "\u0016":"%16", "\u0017":"%17", "\u0018":"%18", "\u0019":"%19", "\u001a":"%1A", "\u001b":"%1B", "\u001c":"%1C", "\u001d":"%1D", "\u001e":"%1E", "\u001f":"%1F", 
" ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "<":"%3C", ">":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "\u007f":"%7F", "\u0085":"%C2%85", "\u00a0":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "\uff01":"%EF%BC%81", "\uff03":"%EF%BC%83", "\uff04":"%EF%BC%84", "\uff06":"%EF%BC%86", "\uff07":"%EF%BC%87", "\uff08":"%EF%BC%88", "\uff09":"%EF%BC%89", "\uff0a":"%EF%BC%8A", "\uff0b":"%EF%BC%8B", "\uff0c":"%EF%BC%8C", "\uff0f":"%EF%BC%8F", "\uff1a":"%EF%BC%9A", "\uff1b":"%EF%BC%9B", "\uff1d":"%EF%BC%9D", 
"\uff1f":"%EF%BC%9F", "\uff20":"%EF%BC%A0", "\uff3b":"%EF%BC%BB", "\uff3d":"%EF%BC%BD"};
function oc(a) {
  return nc[a]
}
var fc = /[\x00\x22\x26\x27\x3c\x3e]/g, ic = /[\x00\x22\x27\x3c\x3e]/g, jc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, pc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, qc = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, rc = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
function sc(a) {
  a = String(a);
  return!qc.test(a) ? (ya("Bad value `%s` for |filterCssValue", [a]), "zSoyz") : a
}
function tc(a) {
  a = String(a);
  return!rc.test(a) ? (ya("Bad value `%s` for |filterNormalizeUri", [a]), "zSoyz") : a.replace(pc, oc)
}
var hc = /<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
// Input 38
function uc(a, b) {
  var c = b || new K;
  c.append('<div id="player_ap_icon"><div class="SPRITE_ap_icon_', P(a.f.b.ma), "_", P(a.f.ob), '"><div id="player_level">', O(a.f.d), '</div></div></div><div class="', P(a.f.b.css), '"><div class="player_nickname">', O(a.f.I), '</div><div id="xm_slot"><div id="xm_indicator" style="width: ', a.f.kb == l ? "" : sc(a.f.kb), 'px;"></div></div><div id="xm">', O(a.f.Ia), ' <span id="xm_reward"></span><span class="color_orange"> / ', O(a.f.Ua), ' XM</span></div><div id="ap" class="visible_on_show_box"><div><span class="number">', 
  O(a.f.M), "</span> AP  Level ", O(a.f.d), "</div>", a.f.ga > 0 ? '<div><span class="color_orange">[ </span><span class="number">' + O(a.f.Ya) + '</span> AP<span class="color_orange"> required for level ' + O(a.f.ga) + " ]</span></div>" : "", "</div></div>");
  return b ? "" : c.toString()
}
;
// Input 39
function vc(a, b, c, d) {
  this.La = a;
  this.color = b;
  this.css = c;
  this.ma = d;
  this.Cc = d + "_symbol_black";
  this.Mc = "mod_icon_" + d + "_L1"
}
var wc = new vc("Neutral", "#cccc00", "NEUTRAL", "neutral"), xc = new vc("Enlightened", "#00cc00", "ALIENS", "enl"), yc = new vc("Resistance", "#009eff", "RESISTANCE", "hum");
function zc(a) {
  return a == "ALIENS" ? xc : a == "RESISTANCE" ? yc : wc
}
;
// Input 40
function S(a, b, c) {
  this.a = a;
  this.b = zc(b);
  this.n = c
}
S.prototype.toString = function() {
  return"guid:" + this.a + ",team:" + this.b.La
};
function Ac(a, b) {
  var c = D(a, ca), d = D(b, ca);
  return c.length != d.length ? m : mb(c, d, function(a, b) {
    C(ab(a), function(c) {
      if(a[c] != b[c]) {
        return m
      }
    });
    return k
  })
}
;
// Input 41
function Bc(a, b, c, d, e) {
  S.call(this, a, b, v());
  this.I = c;
  this.ob = this.kb = this.Ua = this.Ya = this.ga = this.d = this.Ia = this.M = 0;
  Cc(this, d, e)
}
x(Bc, S);
function Cc(a, b, c) {
  var d = Dc;
  a.M = b;
  a.Ia = c;
  a.d = Ec(a.M);
  a.ga = a.d == d.length ? 0 : a.d + 1;
  a.Ya = a.ga > 0 ? d[a.ga - 1] : 0;
  a.Ua = 2E3 + Ec(a.M) * 1E3;
  a.kb = Math.ceil(230 * a.Ia / a.Ua);
  a.ob = a.Ya == 0 ? 0 : Math.floor(8 * ((a.M - d[a.d - 1]) / (d[a.d] - d[a.d - 1])))
}
var Dc = [0, 1E4, 3E4, 7E4, 15E4, 3E5, 6E5, 12E5];
Bc.prototype.ba = function() {
  return!!this.I
};
Bc.prototype.merge = function(a) {
  if(this.a == a.a) {
    this.b = a.b, this.I = a.I, Cc(this, a.M, a.Ia)
  }
};
function Ec(a) {
  for(var b = Dc, c = b.length;c > 0;c--) {
    if(a >= b[c - 1]) {
      return c
    }
  }
  return 1
}
function Fc(a) {
  return new Bc(a.guid, a.team, a.nickname, +a.ap, +a.energy)
}
;
// Input 42
// Input 43
function Gc() {
}
Gc.prototype.gb = function(a) {
  var b = this.$a;
  a ? L(b, "show_box") : M(b, "show_box")
};
Gc.prototype.bd = function() {
  Ub(this.$a, "show_box")
};
// Input 44
function Hc() {
  this.fb = {};
  this.rd = []
}
function Ic(a, b) {
  a.fb[b] || (a.fb[b] = []);
  return a.fb[b]
}
Hc.prototype.vc = function(a, b) {
  var c = Ic(this, a);
  c.length >= (b || 1) && c.shift().abort()
};
Hc.prototype.Vc = function(a, b) {
  hb(Ic(this, a), b)
};
function Jc(a, b, c, d, e) {
  c.method = b;
  var f = u(a.vc, a, b, e), g = u(a.Rc, a, b, d), h = u(a.Vc, a);
  _gaq.push(["_trackEvent", "RPC", b]);
  c = $.ajax({type:"POST", url:"/rpc/" + b, dataType:"json", contentType:"application/json; charset=utf-8", data:JSON.stringify(c), pd:function() {
    f()
  }, success:function(a) {
    g(a)
  }, error:function() {
    _gaq.push(["_trackEvent", "RPC_error", b])
  }, complete:function(a) {
    h(b, a)
  }});
  Ic(a, b).push(c)
}
Hc.prototype.Rc = function(a, b, c) {
  a = Ic(this, a).length > 1;
  b(c, a)
};
function Kc(a, b, c) {
  var d = T.getZoom(), e = [];
  C(c, function(a, b) {
    for(var c = b % 4;e.length <= c;) {
      e.push({boundsParamsList:[], zoom:d})
    }
    e[c].boundsParamsList.push({id:a.Kb, minLatE6:Math.round(a.V.bounds.sw.lat() * 1E6), minLngE6:Math.round(a.V.bounds.sw.lng() * 1E6), maxLatE6:Math.round(a.V.bounds.ne.lat() * 1E6), maxLngE6:Math.round(a.V.bounds.ne.lng() * 1E6), timestampMs:a.C, qk:a.Kb})
  });
  var f = e.length;
  C(e, function(a) {
    Jc(this, "dashboard.getThinnedEntitiesV2", a, b, f)
  }, a)
}
Hc.prototype.Ma = function(a, b, c, d, e, f) {
  if(!d) {
    d = new pa;
    d.n = v();
    var g = {};
    g.sw = new google.maps.LatLng(-90, -180);
    g.ne = new google.maps.LatLng(90, 180);
    d.bounds = g
  }
  e = e || -1;
  f = f || -1;
  b = {desiredNumItems:b, minLatE6:Math.round(d.bounds.sw.lat() * 1E6), minLngE6:Math.round(d.bounds.sw.lng() * 1E6), maxLatE6:Math.round(d.bounds.ne.lat() * 1E6), maxLngE6:Math.round(d.bounds.ne.lng() * 1E6), minTimestampMs:e, maxTimestampMs:f};
  c && (b.factionOnly = k);
  e > -1 && (b.ascendingTimestampOrder = k);
  Jc(this, "dashboard.getPaginatedPlextsV2", b, a, 12)
};
function Lc(a, b, c) {
  Jc(a, "dashboard.getPlayersByGuids", {guids:b}, c)
}
;
// Input 45
function Mc(a, b, c) {
  this.a = a;
  this.lat = b;
  this.lng = c
}
function Nc(a) {
  return!!a.lat && !!a.lng
}
;
// Input 46
function Oc(a, b, c) {
  S.call(this, a, b, c);
  this.l = this.origin = l
}
x(Oc, S);
Oc.prototype.merge = function(a) {
  if(this.a != a.a) {
    return l
  }
  if(this.a == a.a && this.origin.lat == a.origin.lat && this.origin.lng == a.origin.lng && this.l.lat == a.l.lat && this.l.lng == a.l.lng) {
    return this
  }
  if(!Nc(this.origin) && Nc(a.origin)) {
    this.origin = a.origin
  }else {
    if(!Nc(this.l) && Nc(a.l)) {
      this.l = a.l
    }
  }
  this.n = Math.max(this.n, a.n);
  return this
};
// Input 47
function Pc() {
  this.Q = {}
}
s(Pc);
function Qc(a, b) {
  a.Q[b] || (a.Q[b] = new Bc(b, l, "", 0, 0));
  return a.Q[b]
}
;
// Input 48
function Rc(a, b, c) {
  this.d = a;
  this.Za = Qc(Pc.g(), b);
  this.ca = Math.ceil(16 * c / Sc[this.d]);
  this.Bc = c
}
var Sc = [0, 1E3, 1500, 2E3, 2500, 3E3, 4E3, 5E3, 6E3];
function Tc(a) {
  a = D(a, function(a) {
    return!!a
  });
  return F(a, function(a) {
    return new Rc(a.level, a.ownerGuid, a.energyTotal)
  })
}
;
// Input 49
function Uc(a, b, c) {
  S.call(this, a, b, c);
  this.lng = this.lat = 0;
  this.d = 1;
  this.title = "";
  this.t = l;
  this.pa = 0;
  this.W = l;
  this.P = [];
  this.o = [];
  this.isCaptured = m;
  this.ca = 0
}
x(Uc, S);
var Vc = {VERY_COMMON:"Very common", COMMON:"Common", LESS_COMMON:"Less common", RARE:"Rare", VERY_RARE:"Very rare", EXTREMELY_RARE:"Extremely rare"}, Wc = [16, 24, 32, 40, 48, 56, 64];
function Xc(a) {
  return new google.maps.LatLng(a.lat, a.lng)
}
function Yc(a, b) {
  var c = v(), d = Pc.g(), c = new Uc(a, b.controllingTeam.team, c);
  c.lat = b.locationE6.latE6 / 1E6;
  c.lng = b.locationE6.lngE6 / 1E6;
  c.o = Tc(b.resonatorArray.resonators);
  c.d = Zc(c.o);
  c.ca = $c(c.o);
  var e = D(b.portalV2.linkedModArray, ca);
  c.P = F(e, function(a) {
    return{ud:Vc[a.rarity], name:a.displayName, Oa:Qc(d, a.installingUser)}
  });
  if(b.captured) {
    c.isCaptured = k, c.pa = (new ad("MM/dd/yyyy")).format(new Date(parseInt(b.captured.capturedTime, 10))), c.W = Qc(d, b.captured.capturingPlayerId)
  }
  if("descriptiveText" in b.portalV2) {
    if("TITLE" in b.portalV2.descriptiveText) {
      c.title = b.portalV2.descriptiveText.TITLE
    }
  }else {
    c.title = ""
  }
  b.imageByUrl && b.imageByUrl.imageUrl ? (c.t = b.imageByUrl.imageUrl.replace("medium", "small"), c.t = window.location.protocol == "https:" && c.t.indexOf("www.panoramio.com") > -1 ? c.t.replace("http://www", "https://ssl") : c.t.replace("http://", "//")) : c.t = "//commondatastorage.googleapis.com/ingress.com/img/default-portal-image.png";
  return c
}
function Zc(a) {
  a = gb(a, function(a, b) {
    return a + b.d
  }, 0);
  if(a == 0) {
    return 1
  }else {
    for(var b = 0;b < 7;b++) {
      if(a < Wc[b]) {
        return b + 1
      }
    }
    return 8
  }
}
Uc.prototype.Ra = function(a) {
  return this.a == a.a && this.b == a.b && this.d == a.d && this.title == a.title && this.t == a.t && this.pa == a.pa && Ac(this.P, a.P) && Ac(this.o, a.o) && this.isCaptured == a.isCaptured
};
Uc.prototype.ba = function() {
  return bd(this).length == 0
};
function bd(a) {
  if(a.W) {
    var b = {};
    b[a.W.a] = a.W;
    C(a.o, function(a) {
      b[a.Za.a] = a.Za
    });
    C(a.P, function(a) {
      b[a.Oa.a] = a.Oa
    });
    return D($a(b), function(a) {
      return!a.ba()
    })
  }
  return[]
}
function $c(a) {
  var b = 0, c = 0;
  C(a, function(a) {
    b += a.Bc;
    c += Sc[a.d]
  });
  a = 0;
  c != 0 && (a = b / c * 100);
  return parseInt(a, 10)
}
;
// Input 50
function cd(a, b, c, d) {
  S.call(this, a, b, c);
  this.R = d
}
x(cd, S);
cd.prototype.Ra = function(a) {
  if(this.a != a.a) {
    return m
  }
  for(var b = 0;b < this.R.length;b++) {
    if(!(this.R[b].lat == a.R[b].lat && this.R[b].lng == a.R[b].lng)) {
      return m
    }
  }
  return k
};
function dd(a, b) {
  var c = v(), d = F($a(b.capturedRegion), function(a) {
    return new Mc(a.guid, a.location.latE6 / 1E6, a.location.lngE6 / 1E6)
  });
  return new cd(a, b.controllingTeam.team, c, d)
}
;
// Input 51
function U() {
  this.h = {};
  this.ja = {};
  this.Y = {};
  this.eb = {};
  this.z = new Hc;
  this.Aa = [];
  this.X = {}
}
s(U);
function ed(a, b, c) {
  for(var d = {}, e = 0;e < a.Aa.length;e++) {
    var f = a.Aa[e];
    if(a.h[f] && a.h[f][b] && a.h[f][b].entities) {
      for(var g = a.h[f][b].entities, h = 0;h < g.length;h++) {
        var i = g[h];
        c[i] && !d[i] && !a.X[i] ? d[i] = c[i] : a.X[i] && hb(a.h[f][b].entities, i)
      }
    }
  }
  return d
}
function fd(a, b) {
  a.h[b] || (a.h[b] = {});
  a.h[b].lastUpdated = v()
}
function gd(a, b, c, d) {
  a.h[b] || (a.h[b] = {});
  if(!a.h[b][c]) {
    a.h[b][c] = {}, a.h[b][c].entities = []
  }
  a.h[b][c].entities.push(d)
}
function hd(a, b, c, d) {
  var e = Yc(c, d), f = a.ja[c];
  if(!f || !f.Ra(e)) {
    a.ja[c] = e, C(d.portalV2.linkedEdges, function(a) {
      var e = v(), f = new Mc(c, d.locationE6.latE6 / 1E6, d.locationE6.lngE6 / 1E6), o = new Mc(a.otherPortalGuid), e = new Oc(a.edgeGuid, d.controllingTeam.team, e), a = a.isOrigin;
      e.origin = a ? f : o;
      e.l = a ? o : f;
      this.Y[e.a] = this.Y[e.a] ? this.Y[e.a].merge(e) : e;
      gd(this, b, "edge", e.a)
    }, a)
  }
}
U.prototype.U = function(a, b, c, d) {
  if(!("result" in c) || !("map" in c.result)) {
    a(k)
  }else {
    var e = {};
    A(c.result.map, function(a, c) {
      "gameEntities" in a && (fd(this, c), C(a.gameEntities, function(a) {
        var b = a[0], a = a[2], d;
        if("portalV2" in a) {
          hd(this, c, b, a), d = "portal"
        }else {
          if("capturedRegion" in a) {
            a = dd(b, a);
            d = this.eb[b];
            if(!d || !d.Ra(a)) {
              this.eb[b] = a
            }
            d = "region"
          }else {
            if("edge" in a) {
              d = v(), d = new Oc(b, a.controllingTeam.team, d), a = a.edge, d.origin = new Mc(a.originPortalGuid, a.originPortalLocation.latE6 / 1E6, a.originPortalLocation.lngE6 / 1E6), d.l = new Mc(a.destinationPortalGuid, a.destinationPortalLocation.latE6 / 1E6, a.destinationPortalLocation.lngE6 / 1E6), this.Y[b] = d, d = "edge"
            }
          }
        }
        d && gd(this, c, d, b)
      }, this));
      "deletedGameEntityGuids" in a && C(a.deletedGameEntityGuids, function(a) {
        this.X[a] = a
      }, this);
      "error" in a && a.error == "TIMEOUT" && c in b && (e[c] = b[c])
    }, this);
    bb(e) || window.location.hostname == "localhost" ? a(!d) : (a(m), Kc(this.z, u(this.U, this, a, e), $a(e)))
  }
};
function id(a, b) {
  return a.h[b] && a.h[b].lastUpdated ? +a.h[b].lastUpdated : 0
}
function jd(a, b) {
  var c = kd;
  a.X = {};
  a.Aa = [];
  var d = {};
  A(b, function(a) {
    var b = a.quadkey;
    this.Aa.push(b);
    if(id(this, b) + 18E4 < v()) {
      var c = new pa;
      c.V = a;
      c.n = id(this, b);
      c.Kb = b;
      d[b] = c
    }
  }, a);
  bb(d) ? c(k) : Kc(a.z, u(a.U, a, c, d), $a(d))
}
function ld(a, b, c) {
  b = a.ja[b] || l;
  !b || b.ba() ? c(b) : Lc(a.z, F(bd(b), function(a) {
    return a.a
  }), u(a.Uc, a, b, c))
}
U.prototype.Uc = function(a, b, c) {
  if("result" in c) {
    var d = Pc.g();
    C(c.result, function(a) {
      a = Fc(a);
      d.Q[a.a] ? d.Q[a.a].merge(a) : d.Q[a.a] = a
    })
  }
  b(a)
};
// Input 52
// Input 53
function md(a, b) {
  var c = b || new K;
  c.append('<div id="header_invites_box" class="header_box" onclick="stop(event)"><form onSubmit="return false;" id="send_invite_form" name="send_invite"><input type="email" id="invitee_email" placeholder="enter email" ', a.disabled ? "disabled" : "", ' /><input type="submit" value="Send" ', a.disabled ? "disabled" : "", ' /></form><div id="send_invite_status"></div><div id="invite_count_text">');
  nd(a, c);
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function nd(a, b) {
  var c = b || new K;
  c.append(a.Pa == 0 ? "No invites left" : a.Pa == 1 ? "1 invite left" : O(a.Pa) + " invites left");
  return b ? "" : c.toString()
}
;
// Input 54
function od() {
}
od.prototype.draw = function(a) {
  var a = {Pa:a, disabled:a == 0}, b = document.getElementById("invite_count_text");
  b ? N(b, nd, a) : (a = cc(md, a), b = document.getElementById("header_invites"), b.parentNode.insertBefore(a, b.nextSibling))
};
// Input 55
function pd() {
  this.Db = new od
}
pd.prototype.u = function(a) {
  this.Db.draw(a);
  this.xb = document.getElementById("invitee_email");
  this.hb = document.getElementById("send_invite_status");
  (a = document.getElementById("send_invite_form")) && J(a, "submit", u(this.Xc, this))
};
pd.prototype.Xc = function() {
  var a = this.xb.value;
  if(/^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,6}$/.test(a)) {
    this.xb.value = "";
    this.hb.innerHTML = "sending invite to " + a + "...";
    var b = U.g().z, c = u(this.Pc, this, a);
    Jc(b, "dashboard.sendInviteEmail", {inviteeEmailAddress:a}, c);
    _gaq.push(["_trackEvent", "Action", "Send invite"])
  }else {
    this.hb.innerHTML = "invalid email"
  }
};
pd.prototype.Pc = function(a, b) {
  this.hb.innerHTML = "error" in b ? "error sending invite to " + a : "invite sent to " + a;
  "result" in b && this.Db.draw(+b.result.numAvailableInvites)
};
// Input 56
// Input 57
// Input 58
function qd(a, b, c) {
  t(b) ? rd(a, c, b) : A(b, ka(rd, a))
}
function rd(a, b, c) {
  a.style[wa(c)] = b
}
function sd(a, b) {
  typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
  return a
}
;
// Input 59
var td = [{featureType:"all", elementType:"all", stylers:[{visibility:"on"}, {hue:"#131c1c"}, {saturation:"-50"}, {invert_lightness:k}]}, {featureType:"water", elementType:"all", stylers:[{visibility:"on"}, {hue:"#005eff"}, {invert_lightness:k}]}, {featureType:"poi", stylers:[{visibility:"off"}]}, {featureType:"transit", elementType:"all", stylers:[{visibility:"off"}]}];
// Input 60
function ud(a, b) {
  document.cookie = "ingress.intelmap." + a + "=" + escape(b)
}
function vd(a) {
  return wd("ingress.intelmap." + a)
}
function wd(a) {
  for(var b = document.cookie.split(";"), c = 0;c < b.length;c++) {
    var d = b[c], e = d.indexOf("=");
    if(d.substr(0, e).replace(/^\s+|\s+$/g, "") == a) {
      return unescape(d.substr(e + 1))
    }
  }
  return l
}
;
// Input 61
function xd() {
  jQuery(document).ajaxSend(function(a, b, c) {
    if(a = !/^(GET|HEAD|OPTIONS|TRACE)$/.test(c.type)) {
      var c = c.url, a = "//" + document.location.host, d = document.location.protocol + a, a = c == d || c.slice(0, d.length + 1) == d + "/" || c == a || c.slice(0, a.length + 1) == a + "/" || !/^(\/\/|http:|https:).*/.test(c)
    }
    a && b.setRequestHeader("X-CSRFToken", wd("csrftoken"))
  })
}
;
// Input 62
function yd() {
  this.Rb = "92rYjlxqypM";
  this.fd = "//www.youtube.com/watch?v=" + this.Rb;
  this.Gc = m
}
s(yd);
w("play", function() {
  _gaq.push(["_trackEvent", "Videos", "Play", "Ingress promo"]);
  var a = yd.g();
  a.Gc ? window.location.href = a.fd : ($("#video_overlay").show(), $("<div>").attr("id", "ytvideo").show().appendTo($("#video")), ytplayer = new YT.Player("ytvideo", {width:$("#video").width(), height:$("#video").height(), videoId:a.Rb, playerVars:{autoplay:1, enablejsapi:1, modestbranding:1, rel:0, showinfo:0, hd:1}, events:{onReady:function() {
    ytplayer.setPlaybackQuality("hd720")
  }}}))
});
w("landingPageInit", function() {
  var a = yd.g();
  zd(a);
  $(document).keyup(function(b) {
    b.keyCode == 27 && a.Ab()
  });
  xd()
});
yd.prototype.Ab = function() {
  ytplayer.stopVideo();
  $("#video_overlay").hide();
  $("#ytvideo").remove()
};
function zd(a) {
  var b = document.getElementById("video_overlay");
  b && J(b, "click", u(a.Ab, a))
}
;
// Input 63
var V = 0, Ad = [];
function Bd(a) {
  V != a && (V = a, _gaq.push(["_trackEvent", "Map", "Zoom level change", a]), C(Ad, function(a) {
    a()
  }))
}
function Cd() {
  switch(V) {
    case 1:
    ;
    case 2:
    ;
    case 3:
      return 8;
    case 4:
    ;
    case 5:
      return 7;
    case 6:
    ;
    case 7:
      return 6;
    case 8:
      return 5;
    case 9:
    ;
    case 10:
      return 4;
    case 11:
    ;
    case 12:
      return 3;
    case 13:
    ;
    case 14:
      return 2;
    case 15:
    ;
    case 16:
      return 1;
    default:
      return 0
  }
}
function Dd() {
  return V >= 18 ? 1 : V >= 16 ? 0.8 : V >= 14 ? 0.6 : V >= 12 ? 0.4 : 0.3
}
;
// Input 64
var T, Ed;
w("doGeocode", function() {
  Fd.g().Fa();
  var a = document.getElementById("address");
  a.blur();
  a = a.value;
  /^[\s\xa0]*$/.test(a) || (Ed || (Ed = new google.maps.Geocoder), Ed.geocode({address:a}, function(a, c) {
    c == google.maps.GeocoderStatus.OK ? (T.fitBounds(a[0].geometry.viewport), _gaq.push(["_trackEvent", "Map", "Search"])) : _gaq.push(["_trackEvent", "Error", "geocode error", c])
  }))
});
function Gd(a, b) {
  var c = new google.maps.LatLng(a, b);
  T.panTo(c);
  Cd() > 0 && T.setZoom(17)
}
w("panto", Gd);
function Hd() {
  var a = document.getElementById("maplink");
  if(a) {
    a.value = "";
    var b = T.getCenter().toUrlValue(), b = window.location.protocol + "//" + window.location.hostname + "/intel?ll=" + b + "&z=" + V, c;
    c = Id;
    (c = typeof c !== "undefined" && c.getMap() ? c.c : l) && (b += "&pll=" + c.lat + "," + c.lng);
    a.value = b
  }
}
w("getmaplink", Hd);
// Input 65
function Jd(a, b) {
  var c = b || new K;
  c.append('<div class="', P(a.i.b.css), '"><div id="portal_details_container"><div id="pointy_container"><div id="pointy"></div></div><div class="portal_details_row"><div id="portal_primary_title">', O(a.i.title), '</div><div id="portal_close"><div class="SPRITE_close"></div></div></div>');
  var d = c || new K;
  d.append('<div class="portal_details_row"><div id="portal_image_container"><div id="portal_image">', a.i.t ? '<img style="max-width:100%; max-height:100%; margin:auto; display:block" src="' + P(tc(a.i.t)) + '">' : "", '</div></div><div id="portal_metadata">', a.i.d ? '<div id="portal_level">Level ' + O(a.i.d) + "</div>" : "", '<div id="portal_capture_status">');
  a.i.isCaptured && (d.append('<div id="portal_discovery_label">Discovery:</div><div id="portal_capture_details">'), Kd(a, d), d.append("</div>"));
  d.append("</div></div></div>");
  a.i.isCaptured ? (c.append('<div id="portal_tabs_container" class="res_tab_selected"><div class="portal_details_row"><div id="portal_tab_group_decorator"><div id="pi-tab-res" class="portal_tab_title tab_selected">RESONATORS</div><div id="pi-tab-mod" class="portal_tab_title">MODS</div></div></div><div id="tab_content_res">'), Ld({ka:a.i.o, b:a.i.b}, c), c.append('</div><div id="tab_content_mod">'), Md({Wa:a.i.P, b:a.i.b}, c), c.append("</div></div>")) : c.append('<div class="portal_details_row"></div>');
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function Kd(a, b) {
  var c = b || new K;
  Nd({f:a.i.W}, c);
  c.append("   ", O(a.i.pa));
  return b ? "" : c.toString()
}
function Md(a, b) {
  var c = b || new K;
  c.append('<div class="portal_details_row">');
  for(var d = 0;d < 4;d++) {
    d < a.Wa.length ? Od(ec(a.Wa[d], {b:a.b}), c) : Od(l, c), c.append(d != 3 ? '<div class="mod_separator"></div>' : "")
  }
  c.append("</div>");
  return b ? "" : c.toString()
}
function Od(a, b) {
  var c = b || new K;
  c.append('<div class="mod">');
  a != l ? (c.append('<div class="mod_installer">'), Nd({f:a.Oa}, c), c.append('</div><div class="mod_icon"><div class="SPRITE_', P(a.b.Mc), '"></div></div><div class="mod_name">', O(a.name), "</div>")) : c.append('<div class="mod_icon_empty"></div>');
  c.append("</div>")
}
function Ld(a, b) {
  var c = b || new K;
  c.append('<div class="portal_details_row"><div id="resonators_left">');
  for(var d = 0;d < 4;d++) {
    d < a.ka.length ? Pd(a.ka[d], c) : Pd({Qa:0}, c)
  }
  c.append('</div><div id="resonators_center">');
  d = c || new K;
  d.append('<div id="resonatorsCenterPiece"><div id="resonator_arms_left">');
  for(var e = 1;e < 5;e++) {
    d.append('<div class="resonator_arm resonator_arm_', P(e), '"></div>')
  }
  d.append('</div><div id="resonator_arms_right">');
  for(e = 1;e < 5;e++) {
    d.append('<div class="resonator_arm resonator_arm_', P(e), '"></div>')
  }
  d.append('</div><div id="resonators_bar"><div id="portal_faction_icon"><div class="SPRITE_', P(a.b.Cc), '"></div></div></div></div>');
  c.append('</div><div id="resonators_right">');
  for(d = 4;d < 8;d++) {
    d < a.ka.length ? Pd(ec(a.ka[d], {Qa:1}), c) : Pd({Qa:1}, c)
  }
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function Pd(a, b) {
  var c = b || new K;
  c.append('<div class="resonator">');
  a.Qa ? (Qd(a, c), Rd(a, c), Sd(a, c)) : (Sd(a, c), Rd(a, c), Qd(a, c));
  c.append("</div>")
}
function Qd(a, b) {
  (b || new K).append('<div class="resonator_health"><div class="resonator_health_slot">', a.d ? "<div " + (a.ca ? 'style="height: ' + (a.ca == l ? "" : sc(a.ca)) + 'px;"' : "") + 'class="resonator_health_indicator resonator_level_' + P(a.d) + '"></div>' : "", "</div></div>")
}
function Rd(a, b) {
  (b || new K).append('<div class="resonator_level">', a.d ? "Level " + O(a.d) : "", "</div>")
}
function Sd(a, b) {
  var c = b || new K;
  c.append('<div class="resonator_owner">');
  Nd({f:a.Za}, c);
  c.append("</div>")
}
function Nd(a, b) {
  (b || new K).append(a.f ? a.f.I ? '<span title="' + P(a.f.I) + '">' + O(a.f.I) + "</span>" : "<span>loading...</span>" : "")
}
;
// Input 66
function W(a) {
  google.maps.OverlayView.call(this);
  this.G = l;
  this.c = a;
  this.sa = []
}
var Id;
x(W, google.maps.OverlayView);
W.prototype.onAdd = function() {
  if(!this.G) {
    var a = document.createElement("div");
    qd(a, "position", "absolute");
    N(a, Jd, {i:this.c});
    this.G = a
  }
  this.getPanes().floatPane.appendChild(this.G);
  (a = document.getElementById("pi-tab-res")) && J(a, "click", u(this.Mb, this, "resonators"));
  (a = document.getElementById("pi-tab-mod")) && J(a, "click", u(this.Mb, this, "mods"));
  this.sa.push(J(document.getElementById("portal_close"), "click", u(this.Jb, this)));
  this.sa.push(J(this.getMap().getDiv(), "click", u(this.Jb, this)));
  this.sa.push(J(this.G, "click", function(a) {
    a.stopPropagation()
  }))
};
W.prototype.onAdd = W.prototype.onAdd;
W.prototype.show = function(a) {
  Id = this;
  this.setMap(a);
  _gaq.push(["_trackEvent", "Map", "Portal info window"])
};
W.prototype.Jb = function(a) {
  C(this.sa, function(a) {
    Nb(a)
  });
  a.stopPropagation();
  this.setMap(l)
};
W.prototype.Mb = function(a, b) {
  b.stopPropagation();
  var c = document.getElementById("portal_tabs_container"), d = document.getElementById("pi-tab-res"), e = document.getElementById("pi-tab-mod");
  a == "resonators" ? (Tb(c, "mod_tab_selected", "res_tab_selected"), L(d, "tab_selected"), M(e, "tab_selected")) : (Tb(c, "res_tab_selected", "mod_tab_selected"), L(e, "tab_selected"), M(d, "tab_selected"));
  _gaq.push(["_trackEvent", "Map", "Portal info window", a + " tab"])
};
W.prototype.draw = function() {
  this.c.ba() || ld(U.g(), this.c.a, u(this.ed, this));
  var a;
  a = l;
  var b = this.G, c = Xc(this.c), d = this.getProjection().fromLatLngToContainerPixel(c), e = document.getElementById("map_canvas"), f = d.y, g = e.offsetHeight - f, d = d.x, e = e.offsetWidth - d, h = b.offsetWidth, i = b.offsetHeight, o = this.getProjection().fromLatLngToDivPixel(c), n = Math.floor(h / 2), p = Math.floor(i / 2), E = o.x - n, c = o.y - p;
  n < d && n < e && i + 45 < f ? (c -= p + 45, Td("bottom", i)) : n < d && n < e && i + 45 < g ? (c += p + 45, Td("top")) : p < f && p < g && h + 45 < e ? (E += n + 45, Td("left", p)) : p < f && p < g && h + 45 < d ? (E -= n + 45, Td("right", p)) : (c -= p + 45, Td("bottom", i), a = this.getProjection().fromDivPixelToLatLng(new google.maps.Point(o.x, o.y - (i + 45) / 2)));
  f = E;
  g = c;
  d = Ja && (Da || Ma) && Va("1.9");
  b.style.left = sd(f, d);
  b.style.top = sd(g, d);
  a && this.getMap().getBounds().contains(Xc(this.c)) && this.getMap().panTo(a)
};
W.prototype.draw = W.prototype.draw;
function Td(a, b) {
  var c = document.getElementById("pointy");
  c.className = "pointy_" + a;
  b ? qd(c, "top", b + "px") : c.removeAttribute("style")
}
W.prototype.onRemove = function() {
  this.G.parentNode.removeChild(this.G);
  this.G = l;
  Hd()
};
W.prototype.onRemove = W.prototype.onRemove;
W.prototype.ed = function(a) {
  if(a && (this.c = a, !a.ba())) {
    return
  }
  (a = document.getElementById("portal_capture_details")) && N(a, Kd, {i:this.c});
  N(document.getElementById("tab_content_res"), Ld, {ka:this.c.o, b:this.c.b});
  N(document.getElementById("tab_content_mod"), Md, {Wa:this.c.P, b:this.c.b})
};
// Input 67
function Ud(a) {
  this.B = 1;
  this.c = a
}
Ud.prototype.show = function(a) {
  this.B = a;
  Vd(this);
  this.J.setMap(T);
  this.s && this.s.setMap(T)
};
Ud.prototype.hide = function() {
  this.J && this.J.setMap(l);
  this.s && this.s.setMap(l)
};
function Vd(a) {
  a.J ? (a.J.setIcon(Wd(a.c.b, Za(a.c.o), a.B)), a.J.setShape(Xd(a.B))) : a.J = new google.maps.Marker({position:Xc(a.c), icon:Wd(a.c.b, Za(a.c.o), a.B), shape:Xd(a.B), zIndex:1});
  var b = a.c.d > 1;
  if(a.s && b) {
    a.s.setIcon(Yd(a.c.b, a.c.d, a.B))
  }else {
    if(a.s && !b) {
      a.s.setMap(l), a.s = l
    }else {
      if(!a.s && b) {
        a.s = new google.maps.Marker({position:Xc(a.c), icon:Yd(a.c.b, a.c.d, a.B), clickable:m, zIndex:2})
      }
    }
  }
  google.maps.event.clearListeners(a.J, "click");
  b = new W(a.c);
  google.maps.event.addListener(a.J, "click", u(b.show, b, T));
  var c;
  a: {
    if("plat" in MAP_PARAMS && "plng" in MAP_PARAMS && "lat" in MAP_PARAMS && (c = db("plng"), a.c.lat == db("plat") && a.c.lng == c)) {
      cb("plat");
      cb("plng");
      c = k;
      break a
    }
    c = m
  }
  c && (a = Xc(a.c), T.getBounds().contains(a) || T.panTo(a), b.show(T))
}
var Zd = {};
function Wd(a, b, c) {
  var d = a.ma;
  Zd[d] || (Zd[d] = {});
  Zd[d][b] || (Zd[d][b] = {});
  Zd[d][b][c] || (Zd[d][b][c] = $d(a == wc ? "//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/neutral_icon.png" : "//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + a.ma + "_" + b + "res.png", c));
  return Zd[d][b][c]
}
var ae = {};
function Yd(a, b, c) {
  var d = a.ma;
  ae[d] || (ae[d] = {});
  ae[d][b] || (ae[d][b] = {});
  ae[d][b][c] || (ae[d][b][c] = $d("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + a.ma + "_lev" + b + ".png", c));
  return ae[d][b][c]
}
function $d(a, b) {
  var c = new google.maps.Size(60, 60), d = new google.maps.Point(0, 0), e = new google.maps.Point(30 * b, 30 * b), f = new google.maps.Size(60 * b, 60 * b);
  return new google.maps.MarkerImage(a, c, d, e, f)
}
var be = {};
function Xd(a) {
  be[a] || (be[a] = {type:"circle", coords:[30 * a, 30 * a, 20 * a]});
  return be[a]
}
;
// Input 68
var X = {Yb:["BC", "AD"], Xb:["Before Christ", "Anno Domini"], ec:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), pc:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), cc:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), oc:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), lc:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), rc:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), uc:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), 
tc:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), nc:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), sc:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), nd:"S,M,T,W,T,F,S".split(","), qc:"S,M,T,W,T,F,S".split(","), mc:["Q1", "Q2", "Q3", "Q4"], jc:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], Sb:["AM", "PM"], lb:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], mb:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], kd:6, od:[5, 6], ld:2};
// Input 69
// Input 70
function ce() {
}
function de(a) {
  if(typeof a == "number") {
    var b = new ce;
    b.Ca = a;
    var c;
    c = a;
    if(c == 0) {
      c = "Etc/GMT"
    }else {
      var d = ["Etc/GMT", c < 0 ? "-" : "+"];
      c = Math.abs(c);
      d.push(Math.floor(c / 60) % 100);
      c %= 60;
      c != 0 && d.push(":", y(c, 2));
      c = d.join("")
    }
    b.Nb = c;
    a == 0 ? a = "UTC" : (c = ["UTC", a < 0 ? "+" : "-"], a = Math.abs(a), c.push(Math.floor(a / 60) % 100), a %= 60, a != 0 && c.push(":", a), a = c.join(""));
    b.jb = [a, a];
    b.Ea = [];
    return b
  }
  b = new ce;
  b.Nb = a.id;
  b.Ca = -a.std_offset;
  b.jb = a.names;
  b.Ea = a.transitions;
  return b
}
function ee(a, b) {
  for(var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0;d < a.Ea.length && c >= a.Ea[d];) {
    d += 2
  }
  return d == 0 ? 0 : a.Ea[d - 1]
}
;
// Input 71
function ad(a) {
  this.ya = [];
  typeof a == "number" ? this.oa(a) : this.D(a)
}
var fe = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
ad.prototype.D = function(a) {
  for(;a;) {
    for(var b = 0;b < fe.length;++b) {
      var c = a.match(fe[b]);
      if(c) {
        c = c[0];
        a = a.substring(c.length);
        b == 0 && (c == "''" ? c = "'" : (c = c.substring(1, c.length - 1), c = c.replace(/\'\'/, "'")));
        this.ya.push({text:c, type:b});
        break
      }
    }
  }
};
ad.prototype.format = function(a, b) {
  var c = b ? (a.getTimezoneOffset() - (b.Ca - ee(b, a))) * 6E4 : 0, d = c ? new Date(a.getTime() + c) : a, e = d;
  b && d.getTimezoneOffset() != a.getTimezoneOffset() && (c += c > 0 ? -864E5 : 864E5, e = new Date(a.getTime() + c));
  for(var c = [], f = 0;f < this.ya.length;++f) {
    var g = this.ya[f].text;
    1 == this.ya[f].type ? c.push(ge(g, a, d, e, b)) : c.push(g)
  }
  return c.join("")
};
ad.prototype.oa = function(a) {
  if(a < 4) {
    a = X.lb[a]
  }else {
    if(a < 8) {
      a = X.mb[a - 4]
    }else {
      if(a < 12) {
        a = X.lb[a - 8] + " " + X.mb[a - 8]
      }else {
        this.oa(10);
        return
      }
    }
  }
  this.D(a)
};
function he(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return X.ec[c];
    case 4:
      return X.cc[c];
    case 3:
      return X.lc[c];
    default:
      return y(c + 1, a)
  }
}
function ie(a, b) {
  var c = b.getDay();
  switch(a) {
    case 5:
      return X.qc[c];
    case 4:
      return X.tc[c];
    case 3:
      return X.sc[c];
    default:
      return y(c, 1)
  }
}
function je(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return X.pc[c];
    case 4:
      return X.oc[c];
    case 3:
      return X.rc[c];
    default:
      return y(c + 1, a)
  }
}
function ge(a, b, c, d, e) {
  var f = a.length;
  switch(a.charAt(0)) {
    case "G":
      return b = c.getFullYear() > 0 ? 1 : 0, f >= 4 ? X.Xb[b] : X.Yb[b];
    case "y":
      return b = c.getFullYear(), b < 0 && (b = -b), f == 2 ? y(b % 100, 2) : String(b);
    case "M":
      return he(f, c);
    case "k":
      return y(d.getHours() || 24, f);
    case "S":
      return(d.getTime() % 1E3 / 1E3).toFixed(Math.min(3, f)).substr(2) + (f > 3 ? y(0, f - 3) : "");
    case "E":
      return b = c.getDay(), f >= 4 ? X.uc[b] : X.nc[b];
    case "a":
      return f = d.getHours(), X.Sb[f >= 12 && f < 24 ? 1 : 0];
    case "h":
      return y(d.getHours() % 12 || 12, f);
    case "K":
      return y(d.getHours() % 12, f);
    case "H":
      return y(d.getHours(), f);
    case "c":
      return ie(f, c);
    case "L":
      return je(f, c);
    case "Q":
      return b = Math.floor(c.getMonth() / 3), f < 4 ? X.mc[b] : X.jc[b];
    case "d":
      return y(c.getDate(), f);
    case "m":
      return y(d.getMinutes(), f);
    case "s":
      return y(d.getSeconds(), f);
    case "v":
      return f = e || de(b.getTimezoneOffset()), f.Nb;
    case "z":
      return a = e || de(b.getTimezoneOffset()), f < 4 ? a.jb[ee(a, b) > 0 ? 2 : 0] : a.jb[ee(a, b) > 0 ? 3 : 1];
    case "Z":
      return a = e || de(b.getTimezoneOffset()), f < 4 ? (f = -(a.Ca - ee(a, b)), b = [f < 0 ? "-" : "+"], f = Math.abs(f), b.push(y(Math.floor(f / 60) % 100, 2), y(f % 60, 2))) : (f = a.Ca - ee(a, b), b = ["GMT"], b.push(f <= 0 ? "+" : "-"), f = Math.abs(f), b.push(y(Math.floor(f / 60) % 100, 2), ":", y(f % 60, 2))), f = b.join("");
    default:
      return""
  }
}
;
// Input 72
function ke() {
  this.qa = {}
}
s(ke);
ke.prototype.draw = function(a) {
  var b = Dd(), c = le;
  this.qa = Ya(this.qa, function(d) {
    var e = d.c;
    if(!c(e)) {
      return d.hide(), m
    }
    if(a[e.a]) {
      var f = a[e.a];
      if(f.n > e.n && d.c != f) {
        d.c = f, Vd(d)
      }
      delete a[e.a]
    }
    if(d.B != b) {
      d.B = b, Vd(d)
    }
    return k
  }, this);
  A(a, function(a) {
    if(c(a) && !(a.a in this.qa)) {
      var b = new Ud(a);
      b.show(Dd());
      this.qa[a.a] = b
    }
  }, this)
};
function le(a) {
  return(a.o.length ? a.d : 0) >= Cd()
}
;
// Input 73
function me() {
  this.K = {}
}
me.prototype.draw = function(a) {
  var b = ne, c = U.g();
  this.K = Ya(this.K, function(d, e) {
    return!b(this.aa(d)) || a[e] && this.K[a[e].a] && this.K[a[e].a].n < a[e].n || c.X[e] ? (this.hide(d), m) : k
  }, this);
  A(a, function(a) {
    b(this.aa(a)) && (this.show(a), this.K[a.a] = a)
  }, this)
};
function ne(a) {
  var b = U.g();
  return gb(a, function(a, d) {
    if(a) {
      return k
    }
    var e = b.ja[d.a] || l;
    if(e) {
      if(le(e)) {
        return k
      }
    }else {
      return k
    }
    return m
  }, m)
}
;
// Input 74
function oe() {
  this.K = {};
  this.ra = {}
}
x(oe, me);
s(oe);
oe.prototype.aa = function(a) {
  return a ? [a.origin, a.l] : []
};
oe.prototype.hide = function(a) {
  var b = this.ra[a.a];
  b && (delete this.ra[a.a], b.setMap(l))
};
oe.prototype.show = function(a) {
  if(!this.ra[a.a]) {
    var b = [];
    C(this.aa(a), function(a) {
      Nc(a) && (a = new google.maps.LatLng(a.lat, a.lng), b.push(a))
    });
    b.length < 2 || (this.ra[a.a] = new google.maps.Polyline({map:T, path:b, geodesic:k, strokeColor:a.b.color, strokeOpacity:0.8, strokeWeight:2}))
  }
};
// Input 75
var pe = {Vb:".", $b:",", fc:"%", na:"0", ic:"+", bc:"-", Zb:"E", hc:"\u2030", ac:"\u221e", dc:"NaN", Ub:"#,##0.###", kc:"#E0", gc:"#,##0%", Tb:"\u00a4#,##0.00;(\u00a4#,##0.00)", Wb:"USD"}, Y = pe, Y = pe;
// Input 76
var qe = {AED:"\u062f.\u0625", ARS:"$", AUD:"$", BDT:"\u09f3", BRL:"R$", CAD:"$", CHF:"Fr.", CLP:"$", CNY:"\u00a5", COP:"$", CRC:"\u20a1", CUP:"$", CZK:"K\u010d", DKK:"kr", DOP:"$", EGP:"\u00a3", EUR:"\u20ac", GBP:"\u00a3", HKD:"$", HRK:"kn", HUF:"Ft", IDR:"Rp", ILS:"\u20aa", INR:"Rs", IQD:"\u0639\u062f", ISK:"kr", JMD:"$", JPY:"\u00a5", KRW:"\u20a9", KWD:"\u062f.\u0643", LKR:"Rs", LVL:"Ls", MNT:"\u20ae", MXN:"$", MYR:"RM", NOK:"kr", NZD:"$", PAB:"B/.", PEN:"S/.", PHP:"P", PKR:"Rs.", PLN:"z\u0142", 
RON:"L", RUB:"\u0440\u0443\u0431", SAR:"\u0633.\u0631", SEK:"kr", SGD:"$", SKK:"Sk", SYP:"SYP", THB:"\u0e3f", TRY:"TL", TWD:"NT$", USD:"$", UYU:"$", VEF:"Bs.F", VND:"\u20ab", XAF:"FCFA", XCD:"$", YER:"YER", ZAR:"R"};
// Input 77
function re(a, b) {
  this.Cb = b || Y.Wb;
  this.yc = qe[this.Cb];
  this.va = 40;
  this.q = 1;
  this.Va = 3;
  this.wa = this.ea = 0;
  this.Qb = m;
  this.cb = this.bb = "";
  this.xa = "-";
  this.Xa = "";
  this.fa = 1;
  this.Na = 3;
  this.Ga = this.tb = m;
  typeof a == "number" ? this.oa(a) : this.D(a)
}
re.prototype.D = function(a) {
  this.td = a.replace(/ /g, "\u00a0");
  var b = [0];
  this.bb = se(this, a, b);
  for(var c = b[0], d = -1, e = 0, f = 0, g = 0, h = -1, i = a.length, o = k;b[0] < i && o;b[0]++) {
    switch(a.charAt(b[0])) {
      case "#":
        f > 0 ? g++ : e++;
        h >= 0 && d < 0 && h++;
        break;
      case "0":
        if(g > 0) {
          throw Error('Unexpected "0" in pattern "' + a + '"');
        }
        f++;
        h >= 0 && d < 0 && h++;
        break;
      case ",":
        h = 0;
        break;
      case ".":
        if(d >= 0) {
          throw Error('Multiple decimal separators in pattern "' + a + '"');
        }
        d = e + f + g;
        break;
      case "E":
        if(this.Ga) {
          throw Error('Multiple exponential symbols in pattern "' + a + '"');
        }
        this.Ga = k;
        this.wa = 0;
        if(b[0] + 1 < i && a.charAt(b[0] + 1) == "+") {
          b[0]++, this.Qb = k
        }
        for(;b[0] + 1 < i && a.charAt(b[0] + 1) == "0";) {
          b[0]++, this.wa++
        }
        if(e + f < 1 || this.wa < 1) {
          throw Error('Malformed exponential pattern "' + a + '"');
        }
        o = m;
        break;
      default:
        b[0]--, o = m
    }
  }
  f == 0 && e > 0 && d >= 0 && (f = d, f == 0 && f++, g = e - f, e = f - 1, f = 1);
  if(d < 0 && g > 0 || d >= 0 && (d < e || d > e + f) || h == 0) {
    throw Error('Malformed pattern "' + a + '"');
  }
  g = e + f + g;
  this.Va = d >= 0 ? g - d : 0;
  if(d >= 0 && (this.ea = e + f - d, this.ea < 0)) {
    this.ea = 0
  }
  this.q = (d >= 0 ? d : g) - e;
  if(this.Ga && (this.va = e + this.q, this.Va == 0 && this.q == 0)) {
    this.q = 1
  }
  this.Na = Math.max(0, h);
  this.tb = d == 0 || d == g;
  c = b[0] - c;
  this.cb = se(this, a, b);
  b[0] < a.length && a.charAt(b[0]) == te ? (b[0]++, this.xa = se(this, a, b), b[0] += c, this.Xa = se(this, a, b)) : (this.xa = this.bb + this.xa, this.Xa += this.cb)
};
re.prototype.oa = function(a) {
  switch(a) {
    case 1:
      this.D(Y.Ub);
      break;
    case 2:
      this.D(Y.kc);
      break;
    case 3:
      this.D(Y.gc);
      break;
    case 4:
      this.D(Y.Tb);
      break;
    default:
      throw Error("Unsupported pattern type.");
  }
};
re.prototype.format = function(a) {
  if(isNaN(a)) {
    return Y.dc
  }
  var b = [], c = a < 0 || a == 0 && 1 / a < 0;
  b.push(c ? this.xa : this.bb);
  if(isFinite(a)) {
    if(a *= c ? -1 : 1, a *= this.fa, this.Ga) {
      if(a == 0) {
        ue(this, a, this.q, b), ve(this, 0, b)
      }else {
        var d = Math.floor(Math.log(a) / Math.log(10));
        a /= Math.pow(10, d);
        var e = this.q;
        if(this.va > 1 && this.va > this.q) {
          for(;d % this.va != 0;) {
            a *= 10, d--
          }
          e = 1
        }else {
          this.q < 1 ? (d++, a /= 10) : (d -= this.q - 1, a *= Math.pow(10, this.q - 1))
        }
        ue(this, a, e, b);
        ve(this, d, b)
      }
    }else {
      ue(this, a, this.q, b)
    }
  }else {
    b.push(Y.ac)
  }
  b.push(c ? this.Xa : this.cb);
  return b.join("")
};
function ue(a, b, c, d) {
  for(var e = Math.pow(10, a.Va), b = Math.round(b * e), f = Math.floor(b / e), g = Math.floor(b - f * e), h = a.ea > 0 || g > 0, i = "", b = f;b > 1.0E20;) {
    i = "0" + i, b = Math.round(b / 10)
  }
  var i = b + i, o = Y.Vb, n = Y.$b, b = Y.na.charCodeAt(0), p = i.length;
  if(f > 0 || c > 0) {
    for(f = p;f < c;f++) {
      d.push(Y.na)
    }
    for(f = 0;f < p;f++) {
      d.push(String.fromCharCode(b + i.charAt(f) * 1)), p - f > 1 && a.Na > 0 && (p - f) % a.Na == 1 && d.push(n)
    }
  }else {
    h || d.push(Y.na)
  }
  (a.tb || h) && d.push(o);
  c = "" + (g + e);
  for(e = c.length;c.charAt(e - 1) == "0" && e > a.ea + 1;) {
    e--
  }
  for(f = 1;f < e;f++) {
    d.push(String.fromCharCode(b + c.charAt(f) * 1))
  }
}
function ve(a, b, c) {
  c.push(Y.Zb);
  b < 0 ? (b = -b, c.push(Y.bc)) : a.Qb && c.push(Y.ic);
  for(var b = "" + b, d = b.length;d < a.wa;d++) {
    c.push(Y.na)
  }
  c.push(b)
}
var te = ";";
function se(a, b, c) {
  for(var d = "", e = m, f = b.length;c[0] < f;c[0]++) {
    var g = b.charAt(c[0]);
    if(g == "'") {
      c[0] + 1 < f && b.charAt(c[0] + 1) == "'" ? (c[0]++, d += "'") : e = !e
    }else {
      if(e) {
        d += g
      }else {
        switch(g) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case te:
            return d;
          case "\u00a4":
            c[0] + 1 < f && b.charAt(c[0] + 1) == "\u00a4" ? (c[0]++, d += a.Cb) : d += a.yc;
            break;
          case "%":
            if(a.fa != 1) {
              throw Error("Too many percent/permill");
            }
            a.fa = 100;
            d += Y.fc;
            break;
          case "\u2030":
            if(a.fa != 1) {
              throw Error("Too many percent/permill");
            }
            a.fa = 1E3;
            d += Y.hc;
            break;
          default:
            d += g
        }
      }
    }
  }
  return d
}
;
// Input 78
function we(a, b) {
  var c = b || new K;
  c.append('<div id="metascore"><div id="metascore_border_left"></div><div id="metascore_border_mid"></div><div id="metascore_border_right"></div></div>');
  xe({b:yc, la:a.Bb}, c);
  xe({b:xc, la:a.nb}, c);
  var d = c || new K;
  d.append('<div id="metascore_box" class="visible_on_show_box box_drop_shadow">');
  ye({b:yc, la:a.Bb, Lb:a.Dc}, d);
  ye({b:xc, la:a.nb, Lb:a.wc}, d);
  d.append("</div>");
  return b ? "" : c.toString()
}
function xe(a, b) {
  (b || new K).append('<div class="meta_team ', P(a.b.css), '"><div class="meta_team_icon"></div><div class="meta_team_score">', O(a.la), "</div></div>")
}
function ye(a, b) {
  (b || new K).append('<div class="meta_team_section ', P(a.b.css), '"><div class="meta_team_section_name">', O(a.b.La), '</div><div class="meta_team_section_score"><span class="color_orange">Mind Units:</span>  ', O(a.la), '</div><div class="meta_team_section_ratio"><span class="color_orange">Global Control:</span>  ', O(a.Lb), "</div></div>")
}
;
// Input 79
function ze(a, b) {
  var c = b || new K;
  c.append('<div class="portal_level_indicator">');
  if(a.da == 0) {
    c.append("Showing all Portals.")
  }else {
    c.append("Showing ");
    if(a.da < 8) {
      var d = a.da;
      (c || new K).append('<span class="level_', P(d), '">L', O(d), "</span>");
      c.append("-")
    }
    c.append('<span class="level_8">L8</span> Portals.')
  }
  c.append(a.da == 1 ? " Zoom in to see unclaimed Portals." : a.da > 1 ? " Zoom in to see lower level Portals." : "", "</div>");
  return b ? "" : c.toString()
}
;
// Input 80
function Ae() {
  this.K = {};
  this.Ba = {}
}
x(Ae, me);
s(Ae);
Ae.prototype.aa = function(a) {
  return a ? a.R : []
};
Ae.prototype.hide = function(a) {
  var b = this.Ba[a.a];
  b && (delete this.Ba[a.a], b.setMap(l))
};
Ae.prototype.show = function(a) {
  if(!this.Ba[a.a]) {
    var b = F(this.aa(a), function(a) {
      return new google.maps.LatLng(a.lat, a.lng)
    });
    b.length < 3 || (this.Ba[a.a] = new google.maps.Polygon({map:T, paths:b, strokeColor:a.b.color, strokeOpacity:0.2, strokeWeight:1, fillColor:a.b.color, fillOpacity:0.35}))
  }
};
// Input 81
var Be = new re(1), Ce = new re(3);
function kd(a) {
  var b = U.g(), c = ke.g(), d = Ae.g(), e = oe.g();
  c.draw(ed(b, "portal", b.ja));
  d.draw(ed(b, "region", b.eb));
  e.draw(ed(b, "edge", b.Y));
  a && De(m)
}
function De(a) {
  document.getElementById("map_spinner").style.display = a ? "" : "none"
}
function Ee() {
  var a = Cd(), b = document.getElementById("zoom_level_data");
  b && N(b, ze, {da:a})
}
function Fe(a) {
  var b = +a.result.alienScore, a = +a.result.resistanceScore, c = b / (b + a), d = a / (b + a), e = document.getElementById("game_stats");
  e && (N(e, we, {nb:Be.format(b), wc:Ce.format(c), Bb:Be.format(a), Dc:Ce.format(d)}), J(e, "touchstart", Ge), J(e, "mouseover", ka(He, k)), J(e, "mouseout", ka(He, m)))
}
function He(a) {
  var b = document.getElementById("game_stats");
  a ? L(b, "show_box") : M(b, "show_box")
}
function Ge() {
  Ub(document.getElementById("game_stats"), "show_box")
}
;
// Input 82
var Ie, Je;
function Ke(a, b, c, d) {
  this.Sa = a;
  this.Ta = b;
  this.accuracy = Math.round(c);
  this.timestamp = d;
  this.xc = v()
}
;
// Input 83
var Le = l, Z = l, Me = l, Ne = l, Oe = l, Pe = 0, Qe = [], Re = [];
function Se(a) {
  for(var b = 0, c;c = Re[b];b++) {
    c(a)
  }
}
function Te() {
  if(!Oe) {
    window.navigator.yb && typeof window.navigator.yb.watchPosition != "undefined" ? Oe = window.navigator.yb : window.navigator.geolocation && typeof window.navigator.geolocation.watchPosition != "undefined" ? Oe = window.navigator.geolocation : Se(m)
  }
  return Oe
}
function Ue() {
  var a = Te();
  a && (Ve(0), Ie = a.watchPosition(We, Xe, {maximumAge:3E5, timeout:3E4, enableHighAccuracy:k, gearsRequestAddress:m}))
}
function We(a) {
  if(a && a.coords) {
    Pe = 0;
    var b = a.coords, a = new Ke(b.latitude * 1E6, b.longitude * 1E6, b.accuracy, a.timestamp);
    b = Le;
    if(b == l) {
      b = m
    }else {
      var c = Math.floor(b.Ta / 1E3), d = Math.floor(a.Ta / 1E3), b = Math.floor(b.Sa / 1E3) == Math.floor(a.Sa / 1E3) && c == d
    }
    if(b) {
      Z = l, Me || Ve(1E3)
    }else {
      if((!Le || !(Le.xc + 18E4 >= v() && a.accuracy + 5 >= Le.accuracy)) && !(Z && a.accuracy > Z.accuracy)) {
        a.accuracy > 200 ? (Z || window.setTimeout(Ye, 2E3), Z = a) : Ze(a)
      }
    }
  }
}
function Ye() {
  Z && Ze(Z)
}
function Ze(a) {
  if(a) {
    Le = a;
    for(var b = 0, c;c = Qe[b];b++) {
      c(a)
    }
    Z = l;
    Ve(6E4)
  }
}
function Xe(a) {
  Pe++;
  Ie && window.setTimeout(ka(Ve, 0), 0);
  Pe <= 3 && a.code != a.PERMISSION_DENIED ? window.setTimeout(Ue, 3E4) : (Pe = 0, Se(a.code == a.PERMISSION_DENIED))
}
function Ve(a) {
  if(a) {
    var b = v() + a;
    Me && b < Ne && (window.clearTimeout(Me), Me = l);
    Me || (Me = window.setTimeout(ka(Ve, 0), a), Ne = b)
  }else {
    if((a = Te()) && Ie) {
      a.clearWatch(Ie), Ie = l
    }
    Ne = Me = l
  }
}
;
// Input 84
function $e(a, b) {
  var c = b || new K;
  c.append('<div id="snapcontrol"><div class="img_snap"></div></div>');
  return b ? "" : c.toString()
}
;
// Input 85
var af = m;
function bf(a) {
  var b = document.createElement("div");
  N(b, $e);
  google.maps.event.addDomListener(b, "click", cf);
  a.controls[google.maps.ControlPosition.RIGHT_TOP].push(b)
}
function cf() {
  df(k);
  af || (Qe.push(ef), Re.push(ff), af = k);
  Le = l;
  Ue()
}
function ef(a) {
  df(m);
  var b = a.Sa / 1E6, a = a.Ta / 1E6;
  IS_MOBILE && gf(b, a);
  Gd(b, a)
}
function gf(a, b) {
  if(Je) {
    Je.setPosition(new google.maps.LatLng(a, b))
  }else {
    var c = "//commondatastorage.googleapis.com/ingress.com/img/common/";
    c += PLAYER.team == "ALIENS" ? "player_icon_enl.png" : "player_icon_res.png";
    var d = new google.maps.Size(90, 90), e = new google.maps.Point(0, 0), f = new google.maps.Point(45, 45), c = new google.maps.MarkerImage(c, d, e, f);
    Je = new google.maps.Marker({icon:c, map:T, position:new google.maps.LatLng(a, b)});
    google.maps.event.addListenerOnce(T, "dragend", function() {
      Je.setMap(l);
      Je = l
    })
  }
}
function ff(a) {
  df(m);
  a ? alert("You must share location.") : alert("Location not working.")
}
function df(a) {
  var b = document.getElementById("snapcontrol");
  a ? L(b, "in_progress") : M(b, "in_progress");
  De(a)
}
;
// Input 86
function hf(a, b) {
  var c = b || new Date;
  return a.getMonth() == c.getMonth() && a.getFullYear() == (c || new Date).getFullYear()
}
;
// Input 87
function jf(a, b, c) {
  S.call(this, a, b, v());
  this.C = c;
  a = new Date(c);
  b = new Date;
  this.timestamp = (a.getDate() == b.getDate() && hf(a, b) ? kf : lf).format(a);
  this.type = mf;
  this.Gb = [];
  this.H = m
}
x(jf, S);
var lf = new ad("MMM d"), kf = new ad("h:mma"), mf = 0;
function nf(a) {
  var b = a[2].plext, c = new jf(a[0], b.team, a[1]);
  if(b.plextType == "SYSTEM_NARROWCAST") {
    c.type = 1
  }else {
    if(b.plextType == "PLAYER_GENERATED") {
      c.type = 2
    }
  }
  c.Gb = F(b.markup, function(a) {
    var b = a[1], f = new of(b.plain);
    switch(a[0]) {
      case "FACTION":
        f.type = 1;
        f.b = zc(b.team);
        break;
      case "PLAYER":
        f.type = 2;
        f.b = zc(b.team);
        f.a = b.guid;
        break;
      case "SENDER":
        f.type = 3;
        f.b = zc(b.team);
        f.a = b.guid;
        f.sender = b.plain.replace(/[:\']/g, "").trim();
        break;
      case "AT_PLAYER":
        f.type = pf;
        f.b = zc(b.team);
        f.a = b.guid;
        f.pb = b.plain == "@" + PLAYER.nickname;
        break;
      case "PORTAL":
        f.type = 4;
        f.b = zc(b.team);
        f.a = b.guid;
        f.lat = b.latE6 / 1E6;
        f.lng = b.lngE6 / 1E6;
        f.name = b.name;
        f.address = b.address;
        break;
      case "SECURE":
        f.type = 5
    }
    if(!c.H && f.type == pf && f.pb) {
      c.H = k
    }
    return f
  });
  return c
}
function qf(a) {
  if(!("result" in a)) {
    return[]
  }
  var a = F(a.result, nf), b = {};
  return D(a, function(a) {
    return b[a.a] ? m : b[a.a] = k
  })
}
function of(a) {
  this.type = 0;
  this.A = a
}
var pf = 6;
// Input 88
function rf() {
  this.e = [];
  this.Ka = k
}
var sf = {gd:"all", jd:"faction"}, tf = {VIEWPORT:"viewport", md:"global"};
function uf(a, b) {
  a.e = vf(b);
  a.Ka = m
}
function vf(a) {
  return a.length > 1 && a[0].C > a[a.length - 1].C ? a.reverse() : a
}
rf.prototype.Ma = function() {
  return this.e
};
// Input 89
function wf(a, b) {
  var c = b || new K;
  c.append('<div id="pl_header_tab"><div id="pl_header_1" class="pl_header_part"></div><div id="pl_header_2" class="pl_header_part"><div id="plext_primary_title">COMM<div class="SPRITE_chevron"></div><div class="SPRITE_chevron_down"></div></div></div><div id="pl_header_3" class="pl_header_part"></div><div id="pl_header_4" class="pl_header_part"></div><div id="pl_header_5" class="pl_header_part"></div></div><div id="plext_tab_group_container"><div id="pl_tab_all" class="plext_tab_title">All</div><div id="pl_tab_fac" class="plext_tab_title tab_selected">Faction</div></div><div id="plext_viewport_restrict_checkbox_container"><input type="checkbox" checked="true" id="pl_checkbox" /><div id="pl_checkbox_text" class="color_orange">Restrict to map</div></div><div id="plext_container"><div id="pl_status"></div><div id="plexts"></div></div><form id="send_plext_form" name="send_plext" onSubmit="return false;"><input id="message" type="text" placeholder="start broadcasting here" maxlength="256"><input type="submit" value="Transmit"></form>');
  return b ? "" : c.toString()
}
function xf(a, b) {
  var c = b || new K;
  c.append('<div id="pl_spinner"><div class="img_progress"></div><div class="pl_status_text">Loading...</div></div>');
  return b ? "" : c.toString()
}
function yf(a, b) {
  var c = b || new K;
  c.append('<div class="pl_status_text">Oops! Something went wrong...</div>');
  return b ? "" : c.toString()
}
function zf(a, b) {
  for(var c = b || new K, d = a.ab, e = d.length, f = 0;f < e;f++) {
    var g = d[f], h = c || new K;
    h.append('<div class="plext">');
    var i = g;
    (h || new K).append("<\!-- ", typeof i.H === "object" && i.H && i.H.sb === 0 ? String(i.H.content).replace(ic, gc) : String(i.H).replace(fc, gc), " --\>", i.H ? '<div class="pl_nudge_timestamp"><div class="pl_timestamp_container"><div class="pl_nudge_date">' + O(i.timestamp) + '</div><div class="pl_nudge_pointy_spacer"></div></div></div>' : '<div class="pl_timestamp"><div class="pl_timestamp_container"><div class="pl_timestamp_date">' + O(i.timestamp) + '</div><div class="pl_timestamp_spacer"></div></div></div>');
    h.append('<div class="pl_content ', g.type == mf ? "pl_broad" : g.type == 1 ? "pl_narrow" : "pl_player", '" >');
    for(var g = g.Gb, i = g.length, o = 0;o < i;o++) {
      var n = g[o], p = h || new K;
      switch(n.type) {
        case 1:
          p.append('<span class="', P(n.b.css), '">', O(n.b.La), "</span>");
          break;
        case 2:
          p.append('<span class="', P(n.b.css), ' pl_nudge_player" ontouchstart="nudge(', R("@" + n.A), ', event)" onclick="nudge(', R("@" + n.A), '), event">', O(n.A), "</span>");
          break;
        case 3:
          p.append("<span ", PLAYER.I == n.sender ? 'class="' + P(n.b.css) + '"' : 'class="' + P(n.b.css) + ' pl_nudge_player" ontouchstart="nudge(' + R("@" + n.sender) + ', event)" onclick="nudge(' + R("@" + n.sender) + ', event)"', ">", O(n.A), "</span>");
          break;
        case pf:
          p.append('<span class="', n.pb ? 'pl_nudge_me"' : P(n.b.css) + ' pl_nudge_player" ontouchstart="nudge(' + R(n.A) + ', event)" onclick="nudge(' + R(n.A) + ', event)"', ">", O(n.A), "</span>");
          break;
        case 4:
          p.append('<span class="pl_portal_name" ontouchstart="panto(', R(n.lat), ", ", R(n.lng), ')" onclick="panto(', R(n.lat), ", ", R(n.lng), ')">', O(n.name), '</span> <span class="pl_portal_address" ontouchstart="panto(', R(n.lat), ", ", R(n.lng), ')" onclick="panto(', R(n.lat), ", ", R(n.lng), ')">(', O(n.address), ")</span>");
          break;
        case 5:
          p.append('<span class="pl_secure">', O(n.A), "</span>");
          break;
        default:
          p.append(O(n.A))
      }
    }
    h.append("</div></div>")
  }
  return b ? "" : c.toString()
}
;
// Input 90
function Af() {
}
q = Af.prototype;
q.u = function(a, b, c, d) {
  N(document.getElementById("comm"), wf);
  var e = document.getElementById("plext_container");
  if(e) {
    this.v = e
  }
  if(e = document.getElementById("plexts")) {
    this.e = e
  }
  (e = document.getElementById("plext_primary_title")) && J(e, "click", u(this.cd, this));
  (e = document.getElementById("pl_tab_all")) && J(e, "click", u(this.rb, this, "all", a));
  (e = document.getElementById("pl_tab_fac")) && J(e, "click", u(this.rb, this, "faction", a));
  (a = document.getElementById("pl_checkbox")) && J(a, "change", u(this.dd, this, b));
  J(this.v, "scroll", u(this.Oc, this, c));
  (b = document.getElementById("send_plext_form")) && J(b, "submit", u(this.Qc, this, d))
};
q.cd = function(a) {
  a.stopPropagation();
  (a = document.getElementById("comm")) && (Ub(a, "comm_expanded") ? _gaq.push(["_trackEvent", "Action", "Comm view", "expanded"]) : _gaq.push(["_trackEvent", "Action", "Comm view", "minimized"]))
};
q.rb = function(a, b, c) {
  c.stopPropagation();
  var c = document.getElementById("pl_tab_all"), d = document.getElementById("pl_tab_fac");
  a == "all" ? (L(c, "tab_selected"), M(d, "tab_selected")) : (L(d, "tab_selected"), M(c, "tab_selected"));
  b(a)
};
q.dd = function(a, b) {
  b.stopPropagation();
  a(document.getElementById("pl_checkbox").checked ? "viewport" : "global")
};
q.Oc = function(a) {
  this.v.scrollTop == 0 && a()
};
q.Qc = function(a) {
  var b = document.getElementById("message"), c = b.value;
  Fd.g().Fa();
  if(!/^[\s\xa0]*$/.test(c)) {
    _gaq.push(["_trackEvent", "Action", "Send plext"]), a(c), b.value = ""
  }
};
q.draw = function(a) {
  N(this.e, zf, {ab:a});
  this.v.scrollTop = this.v.scrollHeight
};
q.append = function(a, b) {
  var c = cc(zf, {ab:a});
  Yb(this.e, c);
  a.length > 1 && $b(c);
  if(b) {
    this.v.scrollTop = this.v.scrollHeight
  }
};
function Bf(a) {
  var b = document.getElementById("pl_status");
  a == 1 ? N(b, xf) : a == 2 ? N(b, yf) : b.innerHTML = ""
}
w("nudge", function(a, b) {
  if(!("ontouchstart" in window && "onclick" in window && b.type == "touchstart")) {
    var c = document.getElementById("message");
    c.value = [c.value, a, " "].join(" ").trim() + " ";
    c.focus()
  }
});
// Input 91
function Cf(a, b) {
  this.z = a;
  this.p = b;
  this.ia = new Af;
  this.j = "faction";
  this.k = "viewport";
  this.m = {};
  this.Da = {}
}
q = Cf.prototype;
q.u = function() {
  var a = u(this.ad, this), b = u(this.$c, this), c = u(this.Hc, this), d = u(this.Yc, this);
  this.ia.u(a, b, c, d);
  A(sf, function(a) {
    this.m[a] = {};
    this.Da[a] = {};
    A(tf, function(b) {
      this.m[a][b] = new rf;
      this.Da[a][b] = 1
    }, this)
  }, this)
};
q.ad = function(a) {
  if(this.j != a) {
    this.j = a, Df(this)
  }
};
q.$c = function(a) {
  if(this.k != a) {
    this.k = a, Df(this)
  }
};
function Df(a) {
  var b = a.m[a.j][a.k];
  b && a.ia.draw(b.Ma());
  Bf(a.Da[a.j][a.k]);
  b.Ka ? a.reload(k) : a.refresh();
  _gaq.push(["_trackEvent", "Action", "Comm click", a.k + " " + a.j])
}
q.Hc = function() {
  var a = this.j, b = this.k;
  Ef(this, a, b, 1);
  Ff(this, u(this.Ob, this, a, b, k, m), a, b, j, this.m[a][b].e.length < 1 ? -1 : this.m[a][b].e[0].C)
};
q.Yc = function(a) {
  var b = u(this.refresh, this, k), c = this.p.getCenter(), d = Math.floor(c.lat() * 1E6), e = Math.floor(c.lng() * 1E6), c = this.z, a = {message:a, latE6:d, lngE6:e};
  this.j == "faction" && (a.factionOnly = k);
  Jc(c, "dashboard.sendPlext", a, b, 5)
};
q.reload = function(a) {
  var b = this.j, c = this.k, d = u(this.Zc, this, b, c);
  a || A(sf, function(a) {
    this.m[a].viewport.Ka = k
  }, this);
  Ef(this, b, c, 1);
  Ff(this, d, b, c)
};
q.refresh = function(a) {
  var b = this.j, c = this.k;
  Ff(this, u(this.Ob, this, b, c, m, !!a), b, c, this.m[b][c].e.length < 1 ? -1 : this.m[b][c].e[this.m[b][c].e.length - 1].C)
};
function Ff(a, b, c, d, e, f) {
  c = c == "faction";
  if(d == "viewport") {
    var d = a.p, g = new pa;
    g.n = v();
    var h = {};
    h.sw = d.getBounds().getSouthWest();
    h.ne = d.getBounds().getNorthEast();
    g.bounds = h;
    d = g
  }else {
    d = j
  }
  a.z.Ma(b, 50, c, d, e, f)
}
q.Zc = function(a, b, c) {
  if("result" in c) {
    var d = this.m[a][b], c = qf(c);
    uf(d, c);
    this.j == a && this.k == b && this.ia.draw(c);
    Ef(this, a, b, 0)
  }else {
    Ef(this, a, b, 2)
  }
};
q.Ob = function(a, b, c, d, e) {
  if("result" in e) {
    var f = this.m[a][b], e = qf(e);
    if(c) {
      if(e.length < 1) {
        f = []
      }else {
        if(f.e.length < 1) {
          uf(f, e)
        }else {
          for(var e = vf(e), g = f.e[0], h = -1, i = e.length - 1;i >= 0;i--) {
            var o = e[i];
            if(o.C < g.C) {
              break
            }
            if(o.a == g.a) {
              h = i;
              break
            }
          }
          h > -1 && e.splice(h, e.length - h);
          if(e.length > 0) {
            f.e = e.concat(f.e)
          }
        }
        f = e
      }
    }else {
      if(e.length < 1) {
        f = []
      }else {
        if(f.e.length < 1) {
          uf(f, e)
        }else {
          e = vf(e);
          g = f.e[f.e.length - 1];
          h = -1;
          for(i = 0;i < e.length;i++) {
            o = e[i];
            if(o.C > g.C) {
              break
            }
            if(o.a == g.a) {
              h = i;
              break
            }
          }
          h > -1 && e.splice(0, h + 1);
          if(e.length > 0) {
            f.e = f.e.concat(e)
          }
        }
        f = e
      }
    }
    if(this.j == a && this.k == b && f.length > 0) {
      if(c) {
        c = this.ia;
        d = cc(zf, {ab:f});
        if(c.e.firstElementChild != j) {
          e = c.e.firstElementChild
        }else {
          for(e = c.e.firstChild;e && e.nodeType != 1;) {
            e = e.nextSibling
          }
        }
        g = e ? e.offsetTop : 0;
        h = c.e;
        h.insertBefore(d, h.childNodes[0] || l);
        f.length > 1 && $b(d);
        c.v.scrollTop = e ? c.v.scrollTop + e.offsetTop - g : c.v.scrollHeight
      }else {
        this.ia.append(f, d)
      }
    }
    Ef(this, a, b, 0)
  }else {
    Ef(this, a, b, 2)
  }
};
function Ef(a, b, c, d) {
  a.Da[b][c] = d;
  a.j == b && a.k == c && Bf(d)
}
;
// Input 92
// Input 93
// Input 94
z || Ka && Va("525");
// Input 95
function Fd() {
  this.Fc = new pd;
  this.Tc = new Gc;
  this.ha = l;
  this.Ha = 0
}
s(Fd);
function Gf(a, b) {
  var c, d, e;
  bb(MAP_PARAMS) ? (c = +vd("lat") || 25, d = +vd("lng") || 0, e = +vd("zoom") || 2) : (c = db("lat", 25), d = db("lng", 0), e = db("zoom", 2));
  e = {mapTypeId:google.maps.MapTypeId.ROADMAP, minZoom:1, panControl:m, styles:td, zoom:e, streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}, zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}};
  c = new google.maps.LatLng(c, d);
  T = a.p = new google.maps.Map(document.getElementById("map_canvas"), e);
  new bf(a.p);
  a.p.setCenter(c);
  if(!b) {
    a.ha = new Cf(U.g().z, a.p), a.ha.u()
  }
  Ad.push(Ee);
  Ad.push(kd);
  google.maps.event.addListener(a.p, "idle", u(a.Nc, a));
  google.maps.event.addListener(a.p, "dragend", function() {
    _gaq.push(["_trackEvent", "Map", "pan"])
  })
}
Fd.prototype.Nc = function() {
  var a = this.p.getCenter(), b = this.p.getZoom();
  ud("lat", "" + a.lat());
  ud("lng", "" + a.lng());
  ud("zoom", "" + b);
  De(k);
  this.Fa();
  this.Fb && window.clearTimeout(this.Fb);
  Bd(b);
  this.Fb = window.setTimeout(u(this.U, this, k), 1E3)
};
Fd.prototype.U = function(a) {
  if(this.Ha + 3E5 > v()) {
    De(k);
    for(var b = this.p, c = b.getZoom(), d = b.getBounds(), b = d.getNorthEast(), d = d.getSouthWest(), b = oa(c, b.lat(), b.lng()), d = oa(c, d.lat(), d.lng()), e = Math.pow(2, c) - 1, f = [], g = b.y;g <= d.y;g++) {
      if(d.x <= b.x) {
        var h = d.x
      }else {
        for(h = d.x;h <= e;h++) {
          f.push(qa(c, h, g))
        }
        h = 0
      }
      for(;h <= b.x;h++) {
        f.push(qa(c, h, g))
      }
    }
    jd(U.g(), f);
    this.ha && (a ? this.ha.reload() : this.ha.refresh());
    this.Pb && window.clearTimeout(this.Pb);
    this.Pb = window.setTimeout(u(this.U, this, m), 12E4)
  }else {
    a = document.getElementById("butterbar"), a.style.display = "", J(a, "click", u(this.Fa, this))
  }
};
w("initialize", function(a) {
  xd();
  var b = Fd.g();
  if(!a && (Jc(U.g().z, "dashboard.getGameScore", {}, Fe), PLAYER && "available_invites" in PLAYER && b.Fc.u(+PLAYER.available_invites), PLAYER && "nickname" in PLAYER)) {
    var c = b.Tc, d = Fc(PLAYER), e = document.getElementById("player_stats");
    if(e) {
      c.$a = e;
      N(c.$a, uc, {f:d});
      if(d = document.getElementById("player_ap_icon")) {
        J(d, "touchstart", u(c.bd, c)), J(d, "mouseover", u(c.gb, c, k)), J(d, "mouseout", u(c.gb, c, m))
      }
      (d = document.getElementById("ap")) && J(d, "touchstart", u(c.gb, c, m))
    }
  }
  Gf(b, a);
  b.Ha = v();
  J(document, "click", Hf)
});
w("stop", function(a) {
  a.stopPropagation()
});
function Hf() {
  C(ac(document.getElementById("header")), function(a) {
    M(a, "show_box")
  });
  C(ac(document.getElementById("nav")), function(a) {
    M(a, "show_box")
  })
}
Fd.prototype.Fa = function() {
  var a = this.Ha + 3E5 > v();
  this.Ha = v();
  if(!a) {
    document.getElementById("butterbar").style.display = "none", this.U(m), _gaq.push(["_trackEvent", "Action", "Awake inactive client"])
  }
};
w("sbox", function(a) {
  var b = a.currentTarget;
  fb(Sb(b), "show_box") >= 0 || (Hf(), a.stopPropagation(), L(b, "show_box"))
});
// Input 96