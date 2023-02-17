(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function n(e) {
            e.parentElement.removeChild(e);
          }
          function i(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function a(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function o(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              n = e.ownerDocument,
              i = n.documentElement,
              r = v(n);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - i.clientTop : s.left + r.x - i.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (h(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function f(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function h(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function y() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function S(e, t) {
            return 100 / (t - e);
          }
          function x(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function E(e, t) {
            return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function C(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function A(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var n = T(s, e),
              i = e[n - 1],
              r = e[n],
              a = t[n - 1],
              o = t[n];
            return a + E([i, r], s) / S(a, o);
          }
          function L(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var n = T(s, t),
              i = e[n - 1],
              r = e[n],
              a = t[n - 1];
            return C([i, r], (s - a) * S(a, t[n]));
          }
          function O(e, t, s, n) {
            if (100 === n) return n;
            var i = T(n, e),
              r = e[i - 1],
              a = e[i];
            return s
              ? n - r > (a - r) / 2
                ? a
                : r
              : t[i - 1]
              ? e[i - 1] + o(n - e[i - 1], t[i - 1])
              : n;
          }
          var P, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((P = e.PipsType || (e.PipsType = {}))[(P.None = -1)] = "None"),
            (P[(P.NoValue = 0)] = "NoValue"),
            (P[(P.LargeValue = 1)] = "LargeValue"),
            (P[(P.SmallValue = 2)] = "SmallValue");
          var M = (function () {
              function e(e, t, s) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var i = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    i.push([p(e[t]), t]);
                  }),
                    i.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    n = 0;
                  n < i.length;
                  n++
                )
                  this.handleEntryPoint(i[n][1], i[n][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  this.handleStepPoint(n, this.xNumSteps[n]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = x(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var n,
                    i = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[i + 1]; ) i++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (i = this.xPct.length - 2);
                  s || e !== this.xPct[i + 1] || i++, null === t && (t = []);
                  var r = 1,
                    a = t[i],
                    o = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    n = s
                      ? (e - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i])
                      : (this.xPct[i + 1] - e) /
                        (this.xPct[i + 1] - this.xPct[i]);
                    a > 0;

                  )
                    (o = this.xPct[i + 1 + d] - this.xPct[i + d]),
                      t[i + d] * r + 100 - 100 * n > 100
                        ? ((l = o * n), (r = (a - 100 * n) / t[i + d]), (n = 1))
                        : ((l = ((t[i + d] * o) / 100) * r), (r = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (a = t[i + d] * r);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = A(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return L(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = O(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var n = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(f);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var n = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(n) && n)
                    : isNaN(n) || (this.xSteps[0] = n),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        x([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        S(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        n = Math.ceil(Number(s.toFixed(3)) - 1),
                        i = this.xVal[e] + this.xNumSteps[e] * n;
                      this.xHighestCompleteStep[e] = i;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            _ = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            D = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            I = { tooltips: ".__tooltips", aria: ".__aria" };
          function $(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function V(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function N(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function q(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function z(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new M(t, e.snap || !1, e.singleStep);
          }
          function B(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function j(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function F(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function G(e, t) {
            var s,
              n = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) n.push(t);
              n.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              n = t;
            }
            e.connect = n;
          }
          function R(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function X(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var n = t[0] + t[1],
                i = e.spectrum.xVal[0];
              if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - i) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function Z(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              n = t.indexOf("drag") >= 0,
              i = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              a = t.indexOf("hover") >= 0,
              o = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0,
              c = t.indexOf("smooth-steps") >= 0;
            if (i) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              W(e, e.start[1] - e.start[0]);
            }
            if (o && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: n,
              dragAll: l,
              smoothSteps: c,
              fixed: i,
              snap: r,
              hover: a,
              unconstrained: o,
            };
          }
          function K(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Q(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ne(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ie(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: _,
                format: _,
              },
              s = {
                step: { r: !1, t: $ },
                keyboardPageMultiplier: { r: !1, t: V },
                keyboardMultiplier: { r: !1, t: N },
                keyboardDefaultStep: { r: !1, t: q },
                start: { r: !0, t: B },
                connect: { r: !0, t: G },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: j },
                animate: { r: !1, t: H },
                animationDuration: { r: !1, t: F },
                range: { r: !0, t: z },
                orientation: { r: !1, t: R },
                margin: { r: !1, t: W },
                limit: { r: !1, t: U },
                padding: { r: !1, t: X },
                behaviour: { r: !0, t: Z },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: K },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ne },
                cssClasses: { r: !0, t: ie },
                handleAttributes: { r: !1, t: Q },
              },
              n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: D,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (i(e[r]) || void 0 !== n[r])
                  s[r].t(t, i(e[r]) ? e[r] : n[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              a = void 0 !== r.style.msTransform,
              o = void 0 !== r.style.transform;
            t.transformRule = o
              ? "transform"
              : a
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function ae(t, s, o) {
            var c,
              f,
              S,
              x,
              E,
              C = b(),
              T = w() && y(),
              A = t,
              L = s.spectrum,
              O = [],
              P = [],
              k = [],
              M = 0,
              _ = {},
              D = t.ownerDocument,
              $ = s.documentElement || D.documentElement,
              V = D.body,
              N = "rtl" === D.dir || 1 === s.ort ? 0 : 100;
            function q(e, t) {
              var s = D.createElement("div");
              return t && h(s, t), e.appendChild(s), s;
            }
            function z(e, t) {
              var n = q(e, s.cssClasses.origin),
                i = q(n, s.cssClasses.handle);
              if (
                (q(i, s.cssClasses.touchArea),
                i.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (i.setAttribute("tabindex", "0"),
                  i.addEventListener("keydown", function (e) {
                    return me(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  i.setAttribute(e, r[e]);
                });
              }
              return (
                i.setAttribute("role", "slider"),
                i.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? h(i, s.cssClasses.handleLower)
                  : t === s.handles - 1 && h(i, s.cssClasses.handleUpper),
                (n.handle = i),
                n
              );
            }
            function B(e, t) {
              return !!t && q(e, s.cssClasses.connect);
            }
            function j(e, t) {
              var n = q(t, s.cssClasses.connects);
              (f = []), (S = []).push(B(n, e[0]));
              for (var i = 0; i < s.handles; i++)
                f.push(z(t, i)), (k[i] = i), S.push(B(n, e[i + 1]));
            }
            function H(e) {
              return (
                h(e, s.cssClasses.target),
                0 === s.dir ? h(e, s.cssClasses.ltr) : h(e, s.cssClasses.rtl),
                0 === s.ort
                  ? h(e, s.cssClasses.horizontal)
                  : h(e, s.cssClasses.vertical),
                h(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                q(e, s.cssClasses.base)
              );
            }
            function F(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                q(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function G() {
              return A.hasAttribute("disabled");
            }
            function R(e) {
              return f[e].hasAttribute("disabled");
            }
            function W(e) {
              null != e
                ? (f[e].setAttribute("disabled", ""),
                  f[e].handle.removeAttribute("tabindex"))
                : (A.setAttribute("disabled", ""),
                  f.forEach(function (e) {
                    e.handle.removeAttribute("tabindex");
                  }));
            }
            function U(e) {
              null != e
                ? (f[e].removeAttribute("disabled"),
                  f[e].handle.setAttribute("tabindex", "0"))
                : (A.removeAttribute("disabled"),
                  f.forEach(function (e) {
                    e.removeAttribute("disabled"),
                      e.handle.setAttribute("tabindex", "0");
                  }));
            }
            function X() {
              E &&
                (ye("update" + I.tooltips),
                E.forEach(function (e) {
                  e && n(e);
                }),
                (E = null));
            }
            function Y() {
              X(),
                (E = f.map(F)),
                ve("update" + I.tooltips, function (e, t, n) {
                  if (E && s.tooltips && !1 !== E[t]) {
                    var i = e[t];
                    !0 !== s.tooltips[t] && (i = s.tooltips[t].to(n[t])),
                      (E[t].innerHTML = i);
                  }
                });
            }
            function Z() {
              ye("update" + I.aria),
                ve("update" + I.aria, function (e, t, n, i, r) {
                  k.forEach(function (e) {
                    var t = f[e],
                      i = Se(P, e, 0, !0, !0, !0),
                      a = Se(P, e, 100, !0, !0, !0),
                      o = r[e],
                      l = String(s.ariaFormat.to(n[e]));
                    (i = L.fromStepping(i).toFixed(1)),
                      (a = L.fromStepping(a).toFixed(1)),
                      (o = L.fromStepping(o).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", i),
                      t.children[0].setAttribute("aria-valuemax", a),
                      t.children[0].setAttribute("aria-valuenow", o),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function K(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return L.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, n = 100 / s, i = []; s--; )
                  i[s] = s * n;
                return i.push(100), Q(i, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? Q(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return L.fromStepping(L.getStep(L.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function Q(e, t) {
              return e.map(function (e) {
                return L.fromStepping(t ? L.getStep(e) : e);
              });
            }
            function J(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var n = K(t),
                i = {},
                r = L.xVal[0],
                o = L.xVal[L.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (n = a(
                  n.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (n.unshift(r), (l = !0)),
                n[n.length - 1] !== o && (n.push(o), (c = !0)),
                n.forEach(function (r, a) {
                  var o,
                    u,
                    p,
                    f,
                    h,
                    m,
                    g,
                    v,
                    b,
                    y,
                    w = r,
                    S = n[a + 1],
                    x = t.mode === e.PipsMode.Steps;
                  for (
                    x && (o = L.xNumSteps[a]),
                      o || (o = S - w),
                      void 0 === S && (S = w),
                      o = Math.max(o, 1e-7),
                      u = w;
                    u <= S;
                    u = s(u, o)
                  ) {
                    for (
                      v = (h = (f = L.toStepping(u)) - d) / (t.density || 1),
                        y = h / (b = Math.round(v)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      i[(m = d + p * y).toFixed(5)] = [L.fromStepping(m), 0];
                    (g =
                      n.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : x
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !a && l && u !== S && (g = 0),
                      (u === S && c) || (i[f.toFixed(5)] = [u, g]),
                      (d = f);
                  }
                }),
                i
              );
            }
            function ee(t, n, i) {
              var r,
                a,
                o = D.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                c =
                  (((a = {})[e.PipsType.None] = ""),
                  (a[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (a[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (a[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  a),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var n = t === s.cssClasses.value,
                  i = n ? l : c;
                return t + " " + (n ? d : u)[s.ort] + " " + i[e];
              }
              function f(t, r, a) {
                if ((a = n ? n(r, a) : a) !== e.PipsType.None) {
                  var l = q(o, !1);
                  (l.className = p(a, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    a > e.PipsType.NoValue &&
                      (((l = q(o, !1)).className = p(a, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(i.to(r))));
                }
              }
              return (
                h(o, s.cssClasses.pips),
                h(
                  o,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  f(e, t[e][0], t[e][1]);
                }),
                o
              );
            }
            function te() {
              x && (n(x), (x = null));
            }
            function se(e) {
              te();
              var t = J(e),
                s = e.filter,
                n = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (x = A.appendChild(ee(t, s, n)));
            }
            function ne() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function ie(e, t, n, i) {
              var r = function (r) {
                  var a = ae(r, i.pageOffset, i.target || t);
                  return (
                    !!a &&
                    !(G() && !i.doNotReject) &&
                    !(g(A, s.cssClasses.tap) && !i.doNotReject) &&
                    !(e === C.start && void 0 !== a.buttons && a.buttons > 1) &&
                    (!i.hover || !a.buttons) &&
                    (T || a.preventDefault(),
                    (a.calcPoint = a.points[s.ort]),
                    void n(a, i))
                  );
                },
                a = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!T && { passive: !0 }),
                    a.push([e, r]);
                }),
                a
              );
            }
            function ae(e, t, s) {
              var n = 0 === e.type.indexOf("touch"),
                i = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                a = 0,
                o = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (n) {
                var l = function (t) {
                  var n = t.target;
                  return (
                    n === s ||
                    s.contains(n) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (a = c[0].pageX), (o = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (a = d.pageX), (o = d.pageY);
                }
              }
              return (
                (t = t || v(D)),
                (i || r) && ((a = e.clientX + t.x), (o = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [a, o]),
                (e.cursor = i || r),
                e
              );
            }
            function oe(e) {
              var t = (100 * (e - l(c, s.ort))) / ne();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function le(e) {
              var t = 100,
                s = !1;
              return (
                f.forEach(function (n, i) {
                  if (!R(i)) {
                    var r = P[i],
                      a = Math.abs(r - e);
                    (a < t || (a <= t && e > r) || (100 === a && 100 === t)) &&
                      ((s = i), (t = a));
                  }
                }),
                s
              );
            }
            function ce(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ue(e, t);
            }
            function de(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ue(e, t);
              var n = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Ee(
                n > 0,
                (100 * n) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ue(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (M -= 1)),
                t.listeners.forEach(function (e) {
                  $.removeEventListener(e[0], e[1]);
                }),
                0 === M &&
                  (m(A, s.cssClasses.drag),
                  Ae(),
                  e.cursor &&
                    ((V.style.cursor = ""),
                    V.removeEventListener("selectstart", r))),
                s.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    Le(e, P[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    we("update", e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  we("change", e), we("set", e), we("end", e);
                });
            }
            function pe(e, t) {
              if (!t.handleNumbers.some(R)) {
                var n;
                1 === t.handleNumbers.length &&
                  ((n = f[t.handleNumbers[0]].children[0]),
                  (M += 1),
                  h(n, s.cssClasses.active)),
                  e.stopPropagation();
                var i = [],
                  a = ie(C.move, $, de, {
                    target: e.target,
                    handle: n,
                    connect: t.connect,
                    listeners: i,
                    startCalcPoint: e.calcPoint,
                    baseSize: ne(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: P.slice(),
                  }),
                  o = ie(C.end, $, ue, {
                    target: e.target,
                    handle: n,
                    listeners: i,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = ie("mouseout", $, ce, {
                    target: e.target,
                    handle: n,
                    listeners: i,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                i.push.apply(i, a.concat(o, l)),
                  e.cursor &&
                    ((V.style.cursor = getComputedStyle(e.target).cursor),
                    f.length > 1 && h(A, s.cssClasses.drag),
                    V.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    we("start", e);
                  });
              }
            }
            function fe(e) {
              e.stopPropagation();
              var t = oe(e.calcPoint),
                n = le(t);
              !1 !== n &&
                (s.events.snap || d(A, s.cssClasses.tap, s.animationDuration),
                Le(n, t, !0, !0),
                Ae(),
                we("slide", n, !0),
                we("update", n, !0),
                s.events.snap
                  ? pe(e, { handleNumbers: [n] })
                  : (we("change", n, !0), we("set", n, !0)));
            }
            function he(e) {
              var t = oe(e.calcPoint),
                s = L.getStep(t),
                n = L.fromStepping(s);
              Object.keys(_).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  _[e].forEach(function (e) {
                    e.call(ze, n);
                  });
              });
            }
            function me(e, t) {
              if (G() || R(t)) return !1;
              var n = ["Left", "Right"],
                i = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                a = ["Home", "End"];
              s.dir && !s.ort
                ? n.reverse()
                : s.ort && !s.dir && (i.reverse(), r.reverse());
              var o,
                l = e.key.replace("Arrow", ""),
                c = l === r[0],
                d = l === r[1],
                u = l === i[0] || l === n[0] || c,
                p = l === i[1] || l === n[1] || d,
                f = l === a[0],
                h = l === a[1];
              if (!(u || p || f || h)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = $e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = L.getDefaultStep(P[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (o = O[t] + g);
              } else
                o = h
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Le(t, L.toStepping(o), !0, !0),
                we("slide", t),
                we("update", t),
                we("change", t),
                we("set", t),
                !1
              );
            }
            function ge(e) {
              e.fixed ||
                f.forEach(function (e, t) {
                  ie(C.start, e.children[0], pe, { handleNumbers: [t] });
                }),
                e.tap && ie(C.start, c, fe, {}),
                e.hover && ie(C.move, c, he, { hover: !0 }),
                e.drag &&
                  S.forEach(function (t, n) {
                    if (!1 !== t && 0 !== n && n !== S.length - 1) {
                      var i = f[n - 1],
                        r = f[n],
                        a = [t],
                        o = [i, r],
                        l = [n - 1, n];
                      h(t, s.cssClasses.draggable),
                        e.fixed &&
                          (a.push(i.children[0]), a.push(r.children[0])),
                        e.dragAll && ((o = f), (l = k)),
                        a.forEach(function (e) {
                          ie(C.start, e, pe, {
                            handles: o,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function ve(e, t) {
              (_[e] = _[e] || []),
                _[e].push(t),
                "update" === e.split(".")[0] &&
                  f.forEach(function (e, t) {
                    we("update", t);
                  });
            }
            function be(e) {
              return e === I.aria || e === I.tooltips;
            }
            function ye(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(_).forEach(function (e) {
                var n = e.split(".")[0],
                  i = e.substring(n.length);
                (t && t !== n) ||
                  (s && s !== i) ||
                  (be(i) && s !== i) ||
                  delete _[e];
              });
            }
            function we(e, t, n) {
              Object.keys(_).forEach(function (i) {
                var r = i.split(".")[0];
                e === r &&
                  _[i].forEach(function (e) {
                    e.call(
                      ze,
                      O.map(s.format.to),
                      t,
                      O.slice(),
                      n || !1,
                      P.slice(),
                      ze
                    );
                  });
              });
            }
            function Se(e, t, n, i, r, a, o) {
              var l;
              return (
                f.length > 1 &&
                  !s.events.unconstrained &&
                  (i &&
                    t > 0 &&
                    ((l = L.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (n = Math.max(n, l))),
                  r &&
                    t < f.length - 1 &&
                    ((l = L.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (n = Math.min(n, l)))),
                f.length > 1 &&
                  s.limit &&
                  (i &&
                    t > 0 &&
                    ((l = L.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (n = Math.min(n, l))),
                  r &&
                    t < f.length - 1 &&
                    ((l = L.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (n = Math.max(n, l)))),
                s.padding &&
                  (0 === t &&
                    ((l = L.getAbsoluteDistance(0, s.padding[0], !1)),
                    (n = Math.max(n, l))),
                  t === f.length - 1 &&
                    ((l = L.getAbsoluteDistance(100, s.padding[1], !0)),
                    (n = Math.min(n, l)))),
                o || (n = L.getStep(n)),
                !((n = u(n)) === e[t] && !a) && n
              );
            }
            function xe(e, t) {
              var n = s.ort;
              return (n ? t : e) + ", " + (n ? e : t);
            }
            function Ee(e, t, n, i, r) {
              var a = n.slice(),
                o = i[0],
                l = s.events.smoothSteps,
                c = [!e, e],
                d = [e, !e];
              (i = i.slice()),
                e && i.reverse(),
                i.length > 1
                  ? i.forEach(function (e, s) {
                      var n = Se(a, e, a[e] + t, c[s], d[s], !1, l);
                      !1 === n ? (t = 0) : ((t = n - a[e]), (a[e] = n));
                    })
                  : (c = d = [!0]);
              var u = !1;
              i.forEach(function (e, s) {
                u = Le(e, n[e] + t, c[s], d[s], !1, l) || u;
              }),
                u &&
                  (i.forEach(function (e) {
                    we("update", e), we("slide", e);
                  }),
                  null != r && we("drag", o));
            }
            function Ce(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Te(e, t) {
              (P[e] = t), (O[e] = L.fromStepping(t));
              var n = "translate(" + xe(Ce(t, 0) - N + "%", "0") + ")";
              (f[e].style[s.transformRule] = n), Oe(e), Oe(e + 1);
            }
            function Ae() {
              k.forEach(function (e) {
                var t = P[e] > 50 ? -1 : 1,
                  s = 3 + (f.length + t * e);
                f[e].style.zIndex = String(s);
              });
            }
            function Le(e, t, s, n, i, r) {
              return (
                i || (t = Se(P, e, t, s, n, !1, r)), !1 !== t && (Te(e, t), !0)
              );
            }
            function Oe(e) {
              if (S[e]) {
                var t = 0,
                  n = 100;
                0 !== e && (t = P[e - 1]), e !== S.length - 1 && (n = P[e]);
                var i = n - t,
                  r = "translate(" + xe(Ce(t, i) + "%", "0") + ")",
                  a = "scale(" + xe(i / 100, "1") + ")";
                S[e].style[s.transformRule] = r + " " + a;
              }
            }
            function Pe(e, t) {
              return null === e || !1 === e || void 0 === e
                ? P[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = L.toStepping(e)),
                  !1 === e || isNaN(e) ? P[t] : e);
            }
            function ke(e, t, n) {
              var i = p(e),
                r = void 0 === P[0];
              (t = void 0 === t || t),
                s.animate && !r && d(A, s.cssClasses.tap, s.animationDuration),
                k.forEach(function (e) {
                  Le(e, Pe(i[e], e), !0, !1, n);
                });
              var a = 1 === k.length ? 0 : 1;
              if (r && L.hasNoSize() && ((n = !0), (P[0] = 0), k.length > 1)) {
                var o = 100 / (k.length - 1);
                k.forEach(function (e) {
                  P[e] = e * o;
                });
              }
              for (; a < k.length; ++a)
                k.forEach(function (e) {
                  Le(e, P[e], !0, !0, n);
                });
              Ae(),
                k.forEach(function (e) {
                  we("update", e), null !== i[e] && t && we("set", e);
                });
            }
            function Me(e) {
              ke(s.start, e);
            }
            function _e(e, t, s, n) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Le(e, Pe(t, e), !0, !0, n), we("update", e), s && we("set", e);
            }
            function De(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === O.length ? O[0] : O.slice(0);
              var t = O.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Ie() {
              for (
                ye(I.aria),
                  ye(I.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(A, s.cssClasses[e]);
                  });
                A.firstChild;

              )
                A.removeChild(A.firstChild);
              delete A.noUiSlider;
            }
            function $e(e) {
              var t = P[e],
                n = L.getNearbySteps(t),
                i = O[e],
                r = n.thisStep.step,
                a = null;
              if (s.snap)
                return [
                  i - n.stepBefore.startValue || null,
                  n.stepAfter.startValue - i || null,
                ];
              !1 !== r &&
                i + r > n.stepAfter.startValue &&
                (r = n.stepAfter.startValue - i),
                (a =
                  i > n.thisStep.startValue
                    ? n.thisStep.step
                    : !1 !== n.stepBefore.step && i - n.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (a = null);
              var o = L.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(o))),
                null !== a && !1 !== a && (a = Number(a.toFixed(o))),
                [a, r]
              );
            }
            function Ve() {
              return k.map($e);
            }
            function Ne(e, t) {
              var n = De(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (o[t] = e[t]);
              });
              var a = re(o);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = a[t]);
              }),
                (L = a.spectrum),
                (s.margin = a.margin),
                (s.limit = a.limit),
                (s.padding = a.padding),
                s.pips ? se(s.pips) : te(),
                s.tooltips ? Y() : X(),
                (P = []),
                ke(i(e.start) ? e.start : n, t);
            }
            function qe() {
              (c = H(A)),
                j(s.connect, c),
                ge(s.events),
                ke(s.start),
                s.pips && se(s.pips),
                s.tooltips && Y(),
                Z();
            }
            qe();
            var ze = {
              destroy: Ie,
              steps: Ve,
              on: ve,
              off: ye,
              get: De,
              set: ke,
              setHandle: _e,
              reset: Me,
              disable: W,
              enable: U,
              __moveHandles: function (e, t, s) {
                Ee(e, t, P, s);
              },
              options: o,
              updateOptions: Ne,
              target: A,
              removePips: te,
              removeTooltips: X,
              getPositions: function () {
                return P.slice();
              },
              getTooltips: function () {
                return E;
              },
              getOrigins: function () {
                return f;
              },
              pips: se,
            };
            return ze;
          }
          function oe(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = ae(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: M, cssClasses: D, create: oe };
          (e.create = oe),
            (e.cssClasses = D),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      n = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      i = (e, s = 500) => (e.hidden ? n(e, s) : t(e, s)),
      r = !0,
      a = (e = 500) => {
        document.documentElement.classList.contains("lock") ? o(e) : l(e);
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const n = {},
            i = s.dataset[t].split(",");
          (n.value = i[0]),
            (n.type = i[1] ? i[1].trim() : "max"),
            (n.item = s),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = d(n);
        const i = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const s = t.split(","),
                n = s[1],
                r = s[2],
                a = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === n && e.type === r) return !0;
                });
              i.push({ itemsArray: o, matchMedia: a });
            }),
            i
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : a(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            r &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              a(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          n = s.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && c(`[Попапос]: ${e}`);
      }
    })({});
    let p = (e, t = !1, s = 500, n = 0) => {
      const i = "string" == typeof e ? document.querySelector(e) : e;
      if (i) {
        let r = "",
          a = 0;
        t &&
          ((r = "header.header"), (a = document.querySelector(r).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (o(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", l);
        else {
          let e = i.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
        }
        c(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    let f = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                f.removeError(t);
            }
            let n = t.querySelectorAll(".checkbox__input");
            if (n.length > 0)
              for (let e = 0; e < n.length; e++) {
                n[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const n = s[t].querySelector("select");
                  e.select.selectBuild(n);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let n = document.createElement("div");
        if (
          (n.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(n, e),
          n.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          n.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            n,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const n = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            i = this.getSelectElement(n).originalSelect;
          if ("click" === s) {
            if (!i.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(n, i, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(n);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(n, i, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? n.classList.add(this.selectClasses.classSelectFocus)
                  : n.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          i(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          n = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        n && n.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let n = "";
        return (
          (n += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (n += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (n += t ? s : ""),
          (n += t ? "</span>" : ""),
          (n += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (n += e.textContent),
          (n += t ? "</span>" : ""),
          (n += t ? "</span>" : ""),
          n
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          n = Array.from(e.options);
        if (n.length > 0) {
          let i = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (n = n.filter((e) => e.value)),
            (i += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            n.forEach((t) => {
              i += this.getOption(t, e);
            }),
            (i += t ? "</div>" : ""),
            i
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          n =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          i = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          a = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += r
            ? `<a ${a} ${n} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${i}${s}">`
            : `<button ${n} class="${this.selectClasses.classSelectOption}${i}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += r ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && f.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          n = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          i = this;
        t.addEventListener("input", function () {
          n.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && i.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c(`[select]: ${e}`);
      }
    })({});
    var h = s(211);
    function m(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function g(e) {
      return e instanceof m(e).Element || e instanceof Element;
    }
    function v(e) {
      return e instanceof m(e).HTMLElement || e instanceof HTMLElement;
    }
    function b(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof m(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    !(function () {
      const e = document.querySelectorAll("[data-range]");
      e.length &&
        e.forEach((e) => {
          const t = e.querySelector("[data-range-from]"),
            s = e.querySelector("[data-range-to]"),
            n = e.querySelector("[data-range-item]");
          h.create(n, {
            start: [Number(t.value), Number(s.value)],
            connect: !0,
            range: {
              min: [Number(t.dataset.rangeFrom)],
              max: [Number(s.dataset.rangeTo)],
            },
          }),
            n.noUiSlider.on("update", (e) => {
              (t.value = Math.round(e[0])), (s.value = Math.round(e[1]));
            });
        });
    })();
    var y = Math.max,
      w = Math.min,
      S = Math.round;
    function x() {
      var e = navigator.userAgentData;
      return null != e && e.brands
        ? e.brands
            .map(function (e) {
              return e.brand + "/" + e.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function E() {
      return !/^((?!chrome|android).)*safari/i.test(x());
    }
    function C(e, t, s) {
      void 0 === t && (t = !1), void 0 === s && (s = !1);
      var n = e.getBoundingClientRect(),
        i = 1,
        r = 1;
      t &&
        v(e) &&
        ((i = (e.offsetWidth > 0 && S(n.width) / e.offsetWidth) || 1),
        (r = (e.offsetHeight > 0 && S(n.height) / e.offsetHeight) || 1));
      var a = (g(e) ? m(e) : window).visualViewport,
        o = !E() && s,
        l = (n.left + (o && a ? a.offsetLeft : 0)) / i,
        c = (n.top + (o && a ? a.offsetTop : 0)) / r,
        d = n.width / i,
        u = n.height / r;
      return {
        width: d,
        height: u,
        top: c,
        right: l + d,
        bottom: c + u,
        left: l,
        x: l,
        y: c,
      };
    }
    function T(e) {
      var t = m(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function A(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function L(e) {
      return ((g(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function O(e) {
      return C(L(e)).left + T(e).scrollLeft;
    }
    function P(e) {
      return m(e).getComputedStyle(e);
    }
    function k(e) {
      var t = P(e),
        s = t.overflow,
        n = t.overflowX,
        i = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(s + i + n);
    }
    function M(e, t, s) {
      void 0 === s && (s = !1);
      var n,
        i,
        r = v(t),
        a =
          v(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              s = S(t.width) / e.offsetWidth || 1,
              n = S(t.height) / e.offsetHeight || 1;
            return 1 !== s || 1 !== n;
          })(t),
        o = L(t),
        l = C(e, a, s),
        c = { scrollLeft: 0, scrollTop: 0 },
        d = { x: 0, y: 0 };
      return (
        (r || (!r && !s)) &&
          (("body" !== A(t) || k(o)) &&
            (c =
              (n = t) !== m(n) && v(n)
                ? { scrollLeft: (i = n).scrollLeft, scrollTop: i.scrollTop }
                : T(n)),
          v(t)
            ? (((d = C(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
            : o && (d.x = O(o))),
        {
          x: l.left + c.scrollLeft - d.x,
          y: l.top + c.scrollTop - d.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    function _(e) {
      var t = C(e),
        s = e.offsetWidth,
        n = e.offsetHeight;
      return (
        Math.abs(t.width - s) <= 1 && (s = t.width),
        Math.abs(t.height - n) <= 1 && (n = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: s, height: n }
      );
    }
    function D(e) {
      return "html" === A(e)
        ? e
        : e.assignedSlot || e.parentNode || (b(e) ? e.host : null) || L(e);
    }
    function I(e) {
      return ["html", "body", "#document"].indexOf(A(e)) >= 0
        ? e.ownerDocument.body
        : v(e) && k(e)
        ? e
        : I(D(e));
    }
    function $(e, t) {
      var s;
      void 0 === t && (t = []);
      var n = I(e),
        i = n === (null == (s = e.ownerDocument) ? void 0 : s.body),
        r = m(n),
        a = i ? [r].concat(r.visualViewport || [], k(n) ? n : []) : n,
        o = t.concat(a);
      return i ? o : o.concat($(D(a)));
    }
    function V(e) {
      return ["table", "td", "th"].indexOf(A(e)) >= 0;
    }
    function N(e) {
      return v(e) && "fixed" !== P(e).position ? e.offsetParent : null;
    }
    function q(e) {
      for (var t = m(e), s = N(e); s && V(s) && "static" === P(s).position; )
        s = N(s);
      return s &&
        ("html" === A(s) || ("body" === A(s) && "static" === P(s).position))
        ? t
        : s ||
            (function (e) {
              var t = /firefox/i.test(x());
              if (/Trident/i.test(x()) && v(e) && "fixed" === P(e).position)
                return null;
              var s = D(e);
              for (
                b(s) && (s = s.host);
                v(s) && ["html", "body"].indexOf(A(s)) < 0;

              ) {
                var n = P(s);
                if (
                  "none" !== n.transform ||
                  "none" !== n.perspective ||
                  "paint" === n.contain ||
                  -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                  (t && "filter" === n.willChange) ||
                  (t && n.filter && "none" !== n.filter)
                )
                  return s;
                s = s.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    var z = "top",
      B = "bottom",
      j = "right",
      H = "left",
      F = "auto",
      G = [z, B, j, H],
      R = "start",
      W = "end",
      U = "clippingParents",
      X = "viewport",
      Y = "popper",
      Z = "reference",
      K = G.reduce(function (e, t) {
        return e.concat([t + "-" + R, t + "-" + W]);
      }, []),
      Q = [].concat(G, [F]).reduce(function (e, t) {
        return e.concat([t, t + "-" + R, t + "-" + W]);
      }, []),
      J = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function ee(e) {
      var t = new Map(),
        s = new Set(),
        n = [];
      function i(e) {
        s.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              if (!s.has(e)) {
                var n = t.get(e);
                n && i(n);
              }
            }),
          n.push(e);
      }
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          s.has(e.name) || i(e);
        }),
        n
      );
    }
    var te = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function se() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function ne(e) {
      void 0 === e && (e = {});
      var t = e,
        s = t.defaultModifiers,
        n = void 0 === s ? [] : s,
        i = t.defaultOptions,
        r = void 0 === i ? te : i;
      return function (e, t, s) {
        void 0 === s && (s = r);
        var i,
          a,
          o = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, te, r),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          d = {
            state: o,
            setOptions: function (s) {
              var i = "function" == typeof s ? s(o.options) : s;
              u(),
                (o.options = Object.assign({}, r, o.options, i)),
                (o.scrollParents = {
                  reference: g(e)
                    ? $(e)
                    : e.contextElement
                    ? $(e.contextElement)
                    : [],
                  popper: $(t),
                });
              var a = (function (e) {
                var t = ee(e);
                return J.reduce(function (e, s) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === s;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var s = e[t.name];
                    return (
                      (e[t.name] = s
                        ? Object.assign({}, s, t, {
                            options: Object.assign({}, s.options, t.options),
                            data: Object.assign({}, s.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(n, o.options.modifiers))
              );
              return (
                (o.orderedModifiers = a.filter(function (e) {
                  return e.enabled;
                })),
                o.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    s = e.options,
                    n = void 0 === s ? {} : s,
                    i = e.effect;
                  if ("function" == typeof i) {
                    var r = i({ state: o, name: t, instance: d, options: n }),
                      a = function () {};
                    l.push(r || a);
                  }
                }),
                d.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = o.elements,
                  t = e.reference,
                  s = e.popper;
                if (se(t, s)) {
                  (o.rects = {
                    reference: M(t, q(s), "fixed" === o.options.strategy),
                    popper: _(s),
                  }),
                    (o.reset = !1),
                    (o.placement = o.options.placement),
                    o.orderedModifiers.forEach(function (e) {
                      return (o.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var n = 0; n < o.orderedModifiers.length; n++)
                    if (!0 !== o.reset) {
                      var i = o.orderedModifiers[n],
                        r = i.fn,
                        a = i.options,
                        l = void 0 === a ? {} : a,
                        u = i.name;
                      "function" == typeof r &&
                        (o =
                          r({ state: o, options: l, name: u, instance: d }) ||
                          o);
                    } else (o.reset = !1), (n = -1);
                }
              }
            },
            update:
              ((i = function () {
                return new Promise(function (e) {
                  d.forceUpdate(), e(o);
                });
              }),
              function () {
                return (
                  a ||
                    (a = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (a = void 0), e(i());
                      });
                    })),
                  a
                );
              }),
            destroy: function () {
              u(), (c = !0);
            },
          };
        if (!se(e, t)) return d;
        function u() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          d.setOptions(s).then(function (e) {
            !c && s.onFirstUpdate && s.onFirstUpdate(e);
          }),
          d
        );
      };
    }
    var ie = { passive: !0 };
    function re(e) {
      return e.split("-")[0];
    }
    function ae(e) {
      return e.split("-")[1];
    }
    function oe(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function le(e) {
      var t,
        s = e.reference,
        n = e.element,
        i = e.placement,
        r = i ? re(i) : null,
        a = i ? ae(i) : null,
        o = s.x + s.width / 2 - n.width / 2,
        l = s.y + s.height / 2 - n.height / 2;
      switch (r) {
        case z:
          t = { x: o, y: s.y - n.height };
          break;
        case B:
          t = { x: o, y: s.y + s.height };
          break;
        case j:
          t = { x: s.x + s.width, y: l };
          break;
        case H:
          t = { x: s.x - n.width, y: l };
          break;
        default:
          t = { x: s.x, y: s.y };
      }
      var c = r ? oe(r) : null;
      if (null != c) {
        var d = "y" === c ? "height" : "width";
        switch (a) {
          case R:
            t[c] = t[c] - (s[d] / 2 - n[d] / 2);
            break;
          case W:
            t[c] = t[c] + (s[d] / 2 - n[d] / 2);
        }
      }
      return t;
    }
    var ce = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function de(e) {
      var t,
        s = e.popper,
        n = e.popperRect,
        i = e.placement,
        r = e.variation,
        a = e.offsets,
        o = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        d = e.roundOffsets,
        u = e.isFixed,
        p = a.x,
        f = void 0 === p ? 0 : p,
        h = a.y,
        g = void 0 === h ? 0 : h,
        v = "function" == typeof d ? d({ x: f, y: g }) : { x: f, y: g };
      (f = v.x), (g = v.y);
      var b = a.hasOwnProperty("x"),
        y = a.hasOwnProperty("y"),
        w = H,
        x = z,
        E = window;
      if (c) {
        var C = q(s),
          T = "clientHeight",
          A = "clientWidth";
        if (
          (C === m(s) &&
            "static" !== P((C = L(s))).position &&
            "absolute" === o &&
            ((T = "scrollHeight"), (A = "scrollWidth")),
          i === z || ((i === H || i === j) && r === W))
        )
          (x = B),
            (g -=
              (u && C === E && E.visualViewport
                ? E.visualViewport.height
                : C[T]) - n.height),
            (g *= l ? 1 : -1);
        if (i === H || ((i === z || i === B) && r === W))
          (w = j),
            (f -=
              (u && C === E && E.visualViewport
                ? E.visualViewport.width
                : C[A]) - n.width),
            (f *= l ? 1 : -1);
      }
      var O,
        k = Object.assign({ position: o }, c && ce),
        M =
          !0 === d
            ? (function (e) {
                var t = e.x,
                  s = e.y,
                  n = window.devicePixelRatio || 1;
                return { x: S(t * n) / n || 0, y: S(s * n) / n || 0 };
              })({ x: f, y: g })
            : { x: f, y: g };
      return (
        (f = M.x),
        (g = M.y),
        l
          ? Object.assign(
              {},
              k,
              (((O = {})[x] = y ? "0" : ""),
              (O[w] = b ? "0" : ""),
              (O.transform =
                (E.devicePixelRatio || 1) <= 1
                  ? "translate(" + f + "px, " + g + "px)"
                  : "translate3d(" + f + "px, " + g + "px, 0)"),
              O)
            )
          : Object.assign(
              {},
              k,
              (((t = {})[x] = y ? g + "px" : ""),
              (t[w] = b ? f + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    const ue = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var s = t.styles[e] || {},
            n = t.attributes[e] || {},
            i = t.elements[e];
          v(i) &&
            A(i) &&
            (Object.assign(i.style, s),
            Object.keys(n).forEach(function (e) {
              var t = n[e];
              !1 === t
                ? i.removeAttribute(e)
                : i.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var n = t.elements[e],
                i = t.attributes[e] || {},
                r = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              v(n) &&
                A(n) &&
                (Object.assign(n.style, r),
                Object.keys(i).forEach(function (e) {
                  n.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    const pe = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          s = e.options,
          n = e.name,
          i = s.offset,
          r = void 0 === i ? [0, 0] : i,
          a = Q.reduce(function (e, s) {
            return (
              (e[s] = (function (e, t, s) {
                var n = re(e),
                  i = [H, z].indexOf(n) >= 0 ? -1 : 1,
                  r =
                    "function" == typeof s
                      ? s(Object.assign({}, t, { placement: e }))
                      : s,
                  a = r[0],
                  o = r[1];
                return (
                  (a = a || 0),
                  (o = (o || 0) * i),
                  [H, j].indexOf(n) >= 0 ? { x: o, y: a } : { x: a, y: o }
                );
              })(s, t.rects, r)),
              e
            );
          }, {}),
          o = a[t.placement],
          l = o.x,
          c = o.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += l),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[n] = a);
      },
    };
    var fe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function he(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return fe[e];
      });
    }
    var me = { start: "end", end: "start" };
    function ge(e) {
      return e.replace(/start|end/g, function (e) {
        return me[e];
      });
    }
    function ve(e, t) {
      var s = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (s && b(s)) {
        var n = t;
        do {
          if (n && e.isSameNode(n)) return !0;
          n = n.parentNode || n.host;
        } while (n);
      }
      return !1;
    }
    function be(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function ye(e, t, s) {
      return t === X
        ? be(
            (function (e, t) {
              var s = m(e),
                n = L(e),
                i = s.visualViewport,
                r = n.clientWidth,
                a = n.clientHeight,
                o = 0,
                l = 0;
              if (i) {
                (r = i.width), (a = i.height);
                var c = E();
                (c || (!c && "fixed" === t)) &&
                  ((o = i.offsetLeft), (l = i.offsetTop));
              }
              return { width: r, height: a, x: o + O(e), y: l };
            })(e, s)
          )
        : g(t)
        ? (function (e, t) {
            var s = C(e, !1, "fixed" === t);
            return (
              (s.top = s.top + e.clientTop),
              (s.left = s.left + e.clientLeft),
              (s.bottom = s.top + e.clientHeight),
              (s.right = s.left + e.clientWidth),
              (s.width = e.clientWidth),
              (s.height = e.clientHeight),
              (s.x = s.left),
              (s.y = s.top),
              s
            );
          })(t, s)
        : be(
            (function (e) {
              var t,
                s = L(e),
                n = T(e),
                i = null == (t = e.ownerDocument) ? void 0 : t.body,
                r = y(
                  s.scrollWidth,
                  s.clientWidth,
                  i ? i.scrollWidth : 0,
                  i ? i.clientWidth : 0
                ),
                a = y(
                  s.scrollHeight,
                  s.clientHeight,
                  i ? i.scrollHeight : 0,
                  i ? i.clientHeight : 0
                ),
                o = -n.scrollLeft + O(e),
                l = -n.scrollTop;
              return (
                "rtl" === P(i || s).direction &&
                  (o += y(s.clientWidth, i ? i.clientWidth : 0) - r),
                { width: r, height: a, x: o, y: l }
              );
            })(L(e))
          );
    }
    function we(e, t, s, n) {
      var i =
          "clippingParents" === t
            ? (function (e) {
                var t = $(D(e)),
                  s =
                    ["absolute", "fixed"].indexOf(P(e).position) >= 0 && v(e)
                      ? q(e)
                      : e;
                return g(s)
                  ? t.filter(function (e) {
                      return g(e) && ve(e, s) && "body" !== A(e);
                    })
                  : [];
              })(e)
            : [].concat(t),
        r = [].concat(i, [s]),
        a = r[0],
        o = r.reduce(function (t, s) {
          var i = ye(e, s, n);
          return (
            (t.top = y(i.top, t.top)),
            (t.right = w(i.right, t.right)),
            (t.bottom = w(i.bottom, t.bottom)),
            (t.left = y(i.left, t.left)),
            t
          );
        }, ye(e, a, n));
      return (
        (o.width = o.right - o.left),
        (o.height = o.bottom - o.top),
        (o.x = o.left),
        (o.y = o.top),
        o
      );
    }
    function Se(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function xe(e, t) {
      return t.reduce(function (t, s) {
        return (t[s] = e), t;
      }, {});
    }
    function Ee(e, t) {
      void 0 === t && (t = {});
      var s = t,
        n = s.placement,
        i = void 0 === n ? e.placement : n,
        r = s.strategy,
        a = void 0 === r ? e.strategy : r,
        o = s.boundary,
        l = void 0 === o ? U : o,
        c = s.rootBoundary,
        d = void 0 === c ? X : c,
        u = s.elementContext,
        p = void 0 === u ? Y : u,
        f = s.altBoundary,
        h = void 0 !== f && f,
        m = s.padding,
        v = void 0 === m ? 0 : m,
        b = Se("number" != typeof v ? v : xe(v, G)),
        y = p === Y ? Z : Y,
        w = e.rects.popper,
        S = e.elements[h ? y : p],
        x = we(g(S) ? S : S.contextElement || L(e.elements.popper), l, d, a),
        E = C(e.elements.reference),
        T = le({
          reference: E,
          element: w,
          strategy: "absolute",
          placement: i,
        }),
        A = be(Object.assign({}, w, T)),
        O = p === Y ? A : E,
        P = {
          top: x.top - O.top + b.top,
          bottom: O.bottom - x.bottom + b.bottom,
          left: x.left - O.left + b.left,
          right: O.right - x.right + b.right,
        },
        k = e.modifiersData.offset;
      if (p === Y && k) {
        var M = k[i];
        Object.keys(P).forEach(function (e) {
          var t = [j, B].indexOf(e) >= 0 ? 1 : -1,
            s = [z, B].indexOf(e) >= 0 ? "y" : "x";
          P[e] += M[s] * t;
        });
      }
      return P;
    }
    function Ce(e, t, s) {
      return y(e, w(t, s));
    }
    const Te = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          s = e.options,
          n = e.name,
          i = s.mainAxis,
          r = void 0 === i || i,
          a = s.altAxis,
          o = void 0 !== a && a,
          l = s.boundary,
          c = s.rootBoundary,
          d = s.altBoundary,
          u = s.padding,
          p = s.tether,
          f = void 0 === p || p,
          h = s.tetherOffset,
          m = void 0 === h ? 0 : h,
          g = Ee(t, {
            boundary: l,
            rootBoundary: c,
            padding: u,
            altBoundary: d,
          }),
          v = re(t.placement),
          b = ae(t.placement),
          S = !b,
          x = oe(v),
          E = "x" === x ? "y" : "x",
          C = t.modifiersData.popperOffsets,
          T = t.rects.reference,
          A = t.rects.popper,
          L =
            "function" == typeof m
              ? m(Object.assign({}, t.rects, { placement: t.placement }))
              : m,
          O =
            "number" == typeof L
              ? { mainAxis: L, altAxis: L }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
          P = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          k = { x: 0, y: 0 };
        if (C) {
          if (r) {
            var M,
              D = "y" === x ? z : H,
              I = "y" === x ? B : j,
              $ = "y" === x ? "height" : "width",
              V = C[x],
              N = V + g[D],
              F = V - g[I],
              G = f ? -A[$] / 2 : 0,
              W = b === R ? T[$] : A[$],
              U = b === R ? -A[$] : -T[$],
              X = t.elements.arrow,
              Y = f && X ? _(X) : { width: 0, height: 0 },
              Z = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              K = Z[D],
              Q = Z[I],
              J = Ce(0, T[$], Y[$]),
              ee = S
                ? T[$] / 2 - G - J - K - O.mainAxis
                : W - J - K - O.mainAxis,
              te = S
                ? -T[$] / 2 + G + J + Q + O.mainAxis
                : U + J + Q + O.mainAxis,
              se = t.elements.arrow && q(t.elements.arrow),
              ne = se
                ? "y" === x
                  ? se.clientTop || 0
                  : se.clientLeft || 0
                : 0,
              ie = null != (M = null == P ? void 0 : P[x]) ? M : 0,
              le = V + te - ie,
              ce = Ce(f ? w(N, V + ee - ie - ne) : N, V, f ? y(F, le) : F);
            (C[x] = ce), (k[x] = ce - V);
          }
          if (o) {
            var de,
              ue = "x" === x ? z : H,
              pe = "x" === x ? B : j,
              fe = C[E],
              he = "y" === E ? "height" : "width",
              me = fe + g[ue],
              ge = fe - g[pe],
              ve = -1 !== [z, H].indexOf(v),
              be = null != (de = null == P ? void 0 : P[E]) ? de : 0,
              ye = ve ? me : fe - T[he] - A[he] - be + O.altAxis,
              we = ve ? fe + T[he] + A[he] - be - O.altAxis : ge,
              Se =
                f && ve
                  ? (function (e, t, s) {
                      var n = Ce(e, t, s);
                      return n > s ? s : n;
                    })(ye, fe, we)
                  : Ce(f ? ye : me, fe, f ? we : ge);
            (C[E] = Se), (k[E] = Se - fe);
          }
          t.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"],
    };
    var Ae = function (e, t) {
      return Se(
        "number" !=
          typeof (e =
            "function" == typeof e
              ? e(Object.assign({}, t.rects, { placement: t.placement }))
              : e)
          ? e
          : xe(e, G)
      );
    };
    const Le = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          s = e.state,
          n = e.name,
          i = e.options,
          r = s.elements.arrow,
          a = s.modifiersData.popperOffsets,
          o = re(s.placement),
          l = oe(o),
          c = [H, j].indexOf(o) >= 0 ? "height" : "width";
        if (r && a) {
          var d = Ae(i.padding, s),
            u = _(r),
            p = "y" === l ? z : H,
            f = "y" === l ? B : j,
            h =
              s.rects.reference[c] +
              s.rects.reference[l] -
              a[l] -
              s.rects.popper[c],
            m = a[l] - s.rects.reference[l],
            g = q(r),
            v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            b = h / 2 - m / 2,
            y = d[p],
            w = v - u[c] - d[f],
            S = v / 2 - u[c] / 2 + b,
            x = Ce(y, S, w),
            E = l;
          s.modifiersData[n] = (((t = {})[E] = x), (t.centerOffset = x - S), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          s = e.options.element,
          n = void 0 === s ? "[data-popper-arrow]" : s;
        null != n &&
          ("string" != typeof n || (n = t.elements.popper.querySelector(n))) &&
          ve(t.elements.popper, n) &&
          (t.elements.arrow = n);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Oe(e, t, s) {
      return (
        void 0 === s && (s = { x: 0, y: 0 }),
        {
          top: e.top - t.height - s.y,
          right: e.right - t.width + s.x,
          bottom: e.bottom - t.height + s.y,
          left: e.left - t.width - s.x,
        }
      );
    }
    function Pe(e) {
      return [z, j, B, H].some(function (t) {
        return e[t] >= 0;
      });
    }
    var ke = ne({
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
              var t = e.state,
                s = e.instance,
                n = e.options,
                i = n.scroll,
                r = void 0 === i || i,
                a = n.resize,
                o = void 0 === a || a,
                l = m(t.elements.popper),
                c = [].concat(
                  t.scrollParents.reference,
                  t.scrollParents.popper
                );
              return (
                r &&
                  c.forEach(function (e) {
                    e.addEventListener("scroll", s.update, ie);
                  }),
                o && l.addEventListener("resize", s.update, ie),
                function () {
                  r &&
                    c.forEach(function (e) {
                      e.removeEventListener("scroll", s.update, ie);
                    }),
                    o && l.removeEventListener("resize", s.update, ie);
                }
              );
            },
            data: {},
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                s = e.name;
              t.modifiersData[s] = le({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                n = s.gpuAcceleration,
                i = void 0 === n || n,
                r = s.adaptive,
                a = void 0 === r || r,
                o = s.roundOffsets,
                l = void 0 === o || o,
                c = {
                  placement: re(t.placement),
                  variation: ae(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: i,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  de(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: a,
                      roundOffsets: l,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    de(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          ue,
          pe,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                n = e.name;
              if (!t.modifiersData[n]._skip) {
                for (
                  var i = s.mainAxis,
                    r = void 0 === i || i,
                    a = s.altAxis,
                    o = void 0 === a || a,
                    l = s.fallbackPlacements,
                    c = s.padding,
                    d = s.boundary,
                    u = s.rootBoundary,
                    p = s.altBoundary,
                    f = s.flipVariations,
                    h = void 0 === f || f,
                    m = s.allowedAutoPlacements,
                    g = t.options.placement,
                    v = re(g),
                    b =
                      l ||
                      (v === g || !h
                        ? [he(g)]
                        : (function (e) {
                            if (re(e) === F) return [];
                            var t = he(e);
                            return [ge(e), t, ge(t)];
                          })(g)),
                    y = [g].concat(b).reduce(function (e, s) {
                      return e.concat(
                        re(s) === F
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var s = t,
                                n = s.placement,
                                i = s.boundary,
                                r = s.rootBoundary,
                                a = s.padding,
                                o = s.flipVariations,
                                l = s.allowedAutoPlacements,
                                c = void 0 === l ? Q : l,
                                d = ae(n),
                                u = d
                                  ? o
                                    ? K
                                    : K.filter(function (e) {
                                        return ae(e) === d;
                                      })
                                  : G,
                                p = u.filter(function (e) {
                                  return c.indexOf(e) >= 0;
                                });
                              0 === p.length && (p = u);
                              var f = p.reduce(function (t, s) {
                                return (
                                  (t[s] = Ee(e, {
                                    placement: s,
                                    boundary: i,
                                    rootBoundary: r,
                                    padding: a,
                                  })[re(s)]),
                                  t
                                );
                              }, {});
                              return Object.keys(f).sort(function (e, t) {
                                return f[e] - f[t];
                              });
                            })(t, {
                              placement: s,
                              boundary: d,
                              rootBoundary: u,
                              padding: c,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : s
                      );
                    }, []),
                    w = t.rects.reference,
                    S = t.rects.popper,
                    x = new Map(),
                    E = !0,
                    C = y[0],
                    T = 0;
                  T < y.length;
                  T++
                ) {
                  var A = y[T],
                    L = re(A),
                    O = ae(A) === R,
                    P = [z, B].indexOf(L) >= 0,
                    k = P ? "width" : "height",
                    M = Ee(t, {
                      placement: A,
                      boundary: d,
                      rootBoundary: u,
                      altBoundary: p,
                      padding: c,
                    }),
                    _ = P ? (O ? j : H) : O ? B : z;
                  w[k] > S[k] && (_ = he(_));
                  var D = he(_),
                    I = [];
                  if (
                    (r && I.push(M[L] <= 0),
                    o && I.push(M[_] <= 0, M[D] <= 0),
                    I.every(function (e) {
                      return e;
                    }))
                  ) {
                    (C = A), (E = !1);
                    break;
                  }
                  x.set(A, I);
                }
                if (E)
                  for (
                    var $ = function (e) {
                        var t = y.find(function (t) {
                          var s = x.get(t);
                          if (s)
                            return s.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (C = t), "break";
                      },
                      V = h ? 3 : 1;
                    V > 0;
                    V--
                  ) {
                    if ("break" === $(V)) break;
                  }
                t.placement !== C &&
                  ((t.modifiersData[n]._skip = !0),
                  (t.placement = C),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          Te,
          Le,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                s = e.name,
                n = t.rects.reference,
                i = t.rects.popper,
                r = t.modifiersData.preventOverflow,
                a = Ee(t, { elementContext: "reference" }),
                o = Ee(t, { altBoundary: !0 }),
                l = Oe(a, n),
                c = Oe(o, i, r),
                d = Pe(l),
                u = Pe(c);
              (t.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: u,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": d,
                  "data-popper-escaped": u,
                }));
            },
          },
        ],
      }),
      Me = "tippy-box",
      _e = "tippy-content",
      De = "tippy-backdrop",
      Ie = "tippy-arrow",
      $e = "tippy-svg-arrow",
      Ve = { passive: !0, capture: !0 },
      Ne = function () {
        return document.body;
      };
    function qe(e, t, s) {
      if (Array.isArray(e)) {
        var n = e[t];
        return null == n ? (Array.isArray(s) ? s[t] : s) : n;
      }
      return e;
    }
    function ze(e, t) {
      var s = {}.toString.call(e);
      return 0 === s.indexOf("[object") && s.indexOf(t + "]") > -1;
    }
    function Be(e, t) {
      return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function je(e, t) {
      return 0 === t
        ? e
        : function (n) {
            clearTimeout(s),
              (s = setTimeout(function () {
                e(n);
              }, t));
          };
      var s;
    }
    function He(e) {
      return [].concat(e);
    }
    function Fe(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function Ge(e) {
      return e.split("-")[0];
    }
    function Re(e) {
      return [].slice.call(e);
    }
    function We(e) {
      return Object.keys(e).reduce(function (t, s) {
        return void 0 !== e[s] && (t[s] = e[s]), t;
      }, {});
    }
    function Ue() {
      return document.createElement("div");
    }
    function Xe(e) {
      return ["Element", "Fragment"].some(function (t) {
        return ze(e, t);
      });
    }
    function Ye(e) {
      return ze(e, "MouseEvent");
    }
    function Ze(e) {
      return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function Ke(e) {
      return Xe(e)
        ? [e]
        : (function (e) {
            return ze(e, "NodeList");
          })(e)
        ? Re(e)
        : Array.isArray(e)
        ? e
        : Re(document.querySelectorAll(e));
    }
    function Qe(e, t) {
      e.forEach(function (e) {
        e && (e.style.transitionDuration = t + "ms");
      });
    }
    function Je(e, t) {
      e.forEach(function (e) {
        e && e.setAttribute("data-state", t);
      });
    }
    function et(e) {
      var t,
        s = He(e)[0];
      return null != s && null != (t = s.ownerDocument) && t.body
        ? s.ownerDocument
        : document;
    }
    function tt(e, t, s) {
      var n = t + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e[n](t, s);
      });
    }
    function st(e, t) {
      for (var s = t; s; ) {
        var n;
        if (e.contains(s)) return !0;
        s =
          null == s.getRootNode || null == (n = s.getRootNode())
            ? void 0
            : n.host;
      }
      return !1;
    }
    var nt = { isTouch: !1 },
      it = 0;
    function rt() {
      nt.isTouch ||
        ((nt.isTouch = !0),
        window.performance && document.addEventListener("mousemove", at));
    }
    function at() {
      var e = performance.now();
      e - it < 20 &&
        ((nt.isTouch = !1), document.removeEventListener("mousemove", at)),
        (it = e);
    }
    function ot() {
      var e = document.activeElement;
      if (Ze(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur();
      }
    }
    var lt =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
    var ct = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
      dt = Object.assign(
        {
          appendTo: Ne,
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        ct,
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        }
      ),
      ut = Object.keys(dt);
    function pt(e) {
      var t = (e.plugins || []).reduce(function (t, s) {
        var n,
          i = s.name,
          r = s.defaultValue;
        i && (t[i] = void 0 !== e[i] ? e[i] : null != (n = dt[i]) ? n : r);
        return t;
      }, {});
      return Object.assign({}, e, t);
    }
    function ft(e, t) {
      var s = Object.assign(
        {},
        t,
        { content: Be(t.content, [e]) },
        t.ignoreAttributes
          ? {}
          : (function (e, t) {
              return (
                t ? Object.keys(pt(Object.assign({}, dt, { plugins: t }))) : ut
              ).reduce(function (t, s) {
                var n = (e.getAttribute("data-tippy-" + s) || "").trim();
                if (!n) return t;
                if ("content" === s) t[s] = n;
                else
                  try {
                    t[s] = JSON.parse(n);
                  } catch (e) {
                    t[s] = n;
                  }
                return t;
              }, {});
            })(e, t.plugins)
      );
      return (
        (s.aria = Object.assign({}, dt.aria, s.aria)),
        (s.aria = {
          expanded:
            "auto" === s.aria.expanded ? t.interactive : s.aria.expanded,
          content:
            "auto" === s.aria.content
              ? t.interactive
                ? null
                : "describedby"
              : s.aria.content,
        }),
        s
      );
    }
    var ht = function () {
      return "innerHTML";
    };
    function mt(e, t) {
      e[ht()] = t;
    }
    function gt(e) {
      var t = Ue();
      return (
        !0 === e
          ? (t.className = Ie)
          : ((t.className = $e), Xe(e) ? t.appendChild(e) : mt(t, e)),
        t
      );
    }
    function vt(e, t) {
      Xe(t.content)
        ? (mt(e, ""), e.appendChild(t.content))
        : "function" != typeof t.content &&
          (t.allowHTML ? mt(e, t.content) : (e.textContent = t.content));
    }
    function bt(e) {
      var t = e.firstElementChild,
        s = Re(t.children);
      return {
        box: t,
        content: s.find(function (e) {
          return e.classList.contains(_e);
        }),
        arrow: s.find(function (e) {
          return e.classList.contains(Ie) || e.classList.contains($e);
        }),
        backdrop: s.find(function (e) {
          return e.classList.contains(De);
        }),
      };
    }
    function yt(e) {
      var t = Ue(),
        s = Ue();
      (s.className = Me),
        s.setAttribute("data-state", "hidden"),
        s.setAttribute("tabindex", "-1");
      var n = Ue();
      function i(s, n) {
        var i = bt(t),
          r = i.box,
          a = i.content,
          o = i.arrow;
        n.theme
          ? r.setAttribute("data-theme", n.theme)
          : r.removeAttribute("data-theme"),
          "string" == typeof n.animation
            ? r.setAttribute("data-animation", n.animation)
            : r.removeAttribute("data-animation"),
          n.inertia
            ? r.setAttribute("data-inertia", "")
            : r.removeAttribute("data-inertia"),
          (r.style.maxWidth =
            "number" == typeof n.maxWidth ? n.maxWidth + "px" : n.maxWidth),
          n.role ? r.setAttribute("role", n.role) : r.removeAttribute("role"),
          (s.content === n.content && s.allowHTML === n.allowHTML) ||
            vt(a, e.props),
          n.arrow
            ? o
              ? s.arrow !== n.arrow &&
                (r.removeChild(o), r.appendChild(gt(n.arrow)))
              : r.appendChild(gt(n.arrow))
            : o && r.removeChild(o);
      }
      return (
        (n.className = _e),
        n.setAttribute("data-state", "hidden"),
        vt(n, e.props),
        t.appendChild(s),
        s.appendChild(n),
        i(e.props, e.props),
        { popper: t, onUpdate: i }
      );
    }
    yt.$$tippy = !0;
    var wt = 1,
      St = [],
      xt = [];
    function Et(e, t) {
      var s,
        n,
        i,
        r,
        a,
        o,
        l,
        c,
        d = ft(e, Object.assign({}, dt, pt(We(t)))),
        u = !1,
        p = !1,
        f = !1,
        h = !1,
        m = [],
        g = je(U, d.interactiveDebounce),
        v = wt++,
        b = (c = d.plugins).filter(function (e, t) {
          return c.indexOf(e) === t;
        }),
        y = {
          id: v,
          reference: e,
          popper: Ue(),
          popperInstance: null,
          props: d,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          plugins: b,
          clearDelayTimeouts: function () {
            clearTimeout(s), clearTimeout(n), cancelAnimationFrame(i);
          },
          setProps: function (t) {
            0;
            if (y.state.isDestroyed) return;
            D("onBeforeUpdate", [y, t]), R();
            var s = y.props,
              n = ft(e, Object.assign({}, s, We(t), { ignoreAttributes: !0 }));
            (y.props = n),
              G(),
              s.interactiveDebounce !== n.interactiveDebounce &&
                (V(), (g = je(U, n.interactiveDebounce)));
            s.triggerTarget && !n.triggerTarget
              ? He(s.triggerTarget).forEach(function (e) {
                  e.removeAttribute("aria-expanded");
                })
              : n.triggerTarget && e.removeAttribute("aria-expanded");
            $(), _(), x && x(s, n);
            y.popperInstance &&
              (K(),
              J().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
            D("onAfterUpdate", [y, t]);
          },
          setContent: function (e) {
            y.setProps({ content: e });
          },
          show: function () {
            0;
            var e = y.state.isVisible,
              t = y.state.isDestroyed,
              s = !y.state.isEnabled,
              n = nt.isTouch && !y.props.touch,
              i = qe(y.props.duration, 0, dt.duration);
            if (e || t || s || n) return;
            if (O().hasAttribute("disabled")) return;
            if ((D("onShow", [y], !1), !1 === y.props.onShow(y))) return;
            (y.state.isVisible = !0), L() && (S.style.visibility = "visible");
            _(), B(), y.state.isMounted || (S.style.transition = "none");
            if (L()) {
              var r = k();
              Qe([r.box, r.content], 0);
            }
            (o = function () {
              var e;
              if (y.state.isVisible && !h) {
                if (
                  ((h = !0),
                  S.offsetHeight,
                  (S.style.transition = y.props.moveTransition),
                  L() && y.props.animation)
                ) {
                  var t = k(),
                    s = t.box,
                    n = t.content;
                  Qe([s, n], i), Je([s, n], "visible");
                }
                I(),
                  $(),
                  Fe(xt, y),
                  null == (e = y.popperInstance) || e.forceUpdate(),
                  D("onMount", [y]),
                  y.props.animation &&
                    L() &&
                    (function (e, t) {
                      H(e, t);
                    })(i, function () {
                      (y.state.isShown = !0), D("onShown", [y]);
                    });
              }
            }),
              (function () {
                var e,
                  t = y.props.appendTo,
                  s = O();
                e =
                  (y.props.interactive && t === Ne) || "parent" === t
                    ? s.parentNode
                    : Be(t, [s]);
                e.contains(S) || e.appendChild(S);
                (y.state.isMounted = !0), K(), !1;
              })();
          },
          hide: function () {
            0;
            var e = !y.state.isVisible,
              t = y.state.isDestroyed,
              s = !y.state.isEnabled,
              n = qe(y.props.duration, 1, dt.duration);
            if (e || t || s) return;
            if ((D("onHide", [y], !1), !1 === y.props.onHide(y))) return;
            (y.state.isVisible = !1),
              (y.state.isShown = !1),
              (h = !1),
              (u = !1),
              L() && (S.style.visibility = "hidden");
            if ((V(), j(), _(!0), L())) {
              var i = k(),
                r = i.box,
                a = i.content;
              y.props.animation && (Qe([r, a], n), Je([r, a], "hidden"));
            }
            I(),
              $(),
              y.props.animation
                ? L() &&
                  (function (e, t) {
                    H(e, function () {
                      !y.state.isVisible &&
                        S.parentNode &&
                        S.parentNode.contains(S) &&
                        t();
                    });
                  })(n, y.unmount)
                : y.unmount();
          },
          hideWithInteractivity: function (e) {
            0;
            P().addEventListener("mousemove", g), Fe(St, g), g(e);
          },
          enable: function () {
            y.state.isEnabled = !0;
          },
          disable: function () {
            y.hide(), (y.state.isEnabled = !1);
          },
          unmount: function () {
            0;
            y.state.isVisible && y.hide();
            if (!y.state.isMounted) return;
            Q(),
              J().forEach(function (e) {
                e._tippy.unmount();
              }),
              S.parentNode && S.parentNode.removeChild(S);
            (xt = xt.filter(function (e) {
              return e !== y;
            })),
              (y.state.isMounted = !1),
              D("onHidden", [y]);
          },
          destroy: function () {
            0;
            if (y.state.isDestroyed) return;
            y.clearDelayTimeouts(),
              y.unmount(),
              R(),
              delete e._tippy,
              (y.state.isDestroyed = !0),
              D("onDestroy", [y]);
          },
        };
      if (!d.render) return y;
      var w = d.render(y),
        S = w.popper,
        x = w.onUpdate;
      S.setAttribute("data-tippy-root", ""),
        (S.id = "tippy-" + y.id),
        (y.popper = S),
        (e._tippy = y),
        (S._tippy = y);
      var E = b.map(function (e) {
          return e.fn(y);
        }),
        C = e.hasAttribute("aria-expanded");
      return (
        G(),
        $(),
        _(),
        D("onCreate", [y]),
        d.showOnCreate && ee(),
        S.addEventListener("mouseenter", function () {
          y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
        }),
        S.addEventListener("mouseleave", function () {
          y.props.interactive &&
            y.props.trigger.indexOf("mouseenter") >= 0 &&
            P().addEventListener("mousemove", g);
        }),
        y
      );
      function T() {
        var e = y.props.touch;
        return Array.isArray(e) ? e : [e, 0];
      }
      function A() {
        return "hold" === T()[0];
      }
      function L() {
        var e;
        return !(null == (e = y.props.render) || !e.$$tippy);
      }
      function O() {
        return l || e;
      }
      function P() {
        var e = O().parentNode;
        return e ? et(e) : document;
      }
      function k() {
        return bt(S);
      }
      function M(e) {
        return (y.state.isMounted && !y.state.isVisible) ||
          nt.isTouch ||
          (r && "focus" === r.type)
          ? 0
          : qe(y.props.delay, e ? 0 : 1, dt.delay);
      }
      function _(e) {
        void 0 === e && (e = !1),
          (S.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
          (S.style.zIndex = "" + y.props.zIndex);
      }
      function D(e, t, s) {
        var n;
        (void 0 === s && (s = !0),
        E.forEach(function (s) {
          s[e] && s[e].apply(s, t);
        }),
        s) && (n = y.props)[e].apply(n, t);
      }
      function I() {
        var t = y.props.aria;
        if (t.content) {
          var s = "aria-" + t.content,
            n = S.id;
          He(y.props.triggerTarget || e).forEach(function (e) {
            var t = e.getAttribute(s);
            if (y.state.isVisible) e.setAttribute(s, t ? t + " " + n : n);
            else {
              var i = t && t.replace(n, "").trim();
              i ? e.setAttribute(s, i) : e.removeAttribute(s);
            }
          });
        }
      }
      function $() {
        !C &&
          y.props.aria.expanded &&
          He(y.props.triggerTarget || e).forEach(function (e) {
            y.props.interactive
              ? e.setAttribute(
                  "aria-expanded",
                  y.state.isVisible && e === O() ? "true" : "false"
                )
              : e.removeAttribute("aria-expanded");
          });
      }
      function V() {
        P().removeEventListener("mousemove", g),
          (St = St.filter(function (e) {
            return e !== g;
          }));
      }
      function N(t) {
        if (!nt.isTouch || (!f && "mousedown" !== t.type)) {
          var s = (t.composedPath && t.composedPath()[0]) || t.target;
          if (!y.props.interactive || !st(S, s)) {
            if (
              He(y.props.triggerTarget || e).some(function (e) {
                return st(e, s);
              })
            ) {
              if (nt.isTouch) return;
              if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                return;
            } else D("onClickOutside", [y, t]);
            !0 === y.props.hideOnClick &&
              (y.clearDelayTimeouts(),
              y.hide(),
              (p = !0),
              setTimeout(function () {
                p = !1;
              }),
              y.state.isMounted || j());
          }
        }
      }
      function q() {
        f = !0;
      }
      function z() {
        f = !1;
      }
      function B() {
        var e = P();
        e.addEventListener("mousedown", N, !0),
          e.addEventListener("touchend", N, Ve),
          e.addEventListener("touchstart", z, Ve),
          e.addEventListener("touchmove", q, Ve);
      }
      function j() {
        var e = P();
        e.removeEventListener("mousedown", N, !0),
          e.removeEventListener("touchend", N, Ve),
          e.removeEventListener("touchstart", z, Ve),
          e.removeEventListener("touchmove", q, Ve);
      }
      function H(e, t) {
        var s = k().box;
        function n(e) {
          e.target === s && (tt(s, "remove", n), t());
        }
        if (0 === e) return t();
        tt(s, "remove", a), tt(s, "add", n), (a = n);
      }
      function F(t, s, n) {
        void 0 === n && (n = !1),
          He(y.props.triggerTarget || e).forEach(function (e) {
            e.addEventListener(t, s, n),
              m.push({ node: e, eventType: t, handler: s, options: n });
          });
      }
      function G() {
        var e;
        A() &&
          (F("touchstart", W, { passive: !0 }),
          F("touchend", X, { passive: !0 })),
          ((e = y.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
            function (e) {
              if ("manual" !== e)
                switch ((F(e, W), e)) {
                  case "mouseenter":
                    F("mouseleave", X);
                    break;
                  case "focus":
                    F(lt ? "focusout" : "blur", Y);
                    break;
                  case "focusin":
                    F("focusout", Y);
                }
            }
          );
      }
      function R() {
        m.forEach(function (e) {
          var t = e.node,
            s = e.eventType,
            n = e.handler,
            i = e.options;
          t.removeEventListener(s, n, i);
        }),
          (m = []);
      }
      function W(e) {
        var t,
          s = !1;
        if (y.state.isEnabled && !Z(e) && !p) {
          var n = "focus" === (null == (t = r) ? void 0 : t.type);
          (r = e),
            (l = e.currentTarget),
            $(),
            !y.state.isVisible &&
              Ye(e) &&
              St.forEach(function (t) {
                return t(e);
              }),
            "click" === e.type &&
            (y.props.trigger.indexOf("mouseenter") < 0 || u) &&
            !1 !== y.props.hideOnClick &&
            y.state.isVisible
              ? (s = !0)
              : ee(e),
            "click" === e.type && (u = !s),
            s && !n && te(e);
        }
      }
      function U(e) {
        var t = e.target,
          s = O().contains(t) || S.contains(t);
        if ("mousemove" !== e.type || !s) {
          var n = J()
            .concat(S)
            .map(function (e) {
              var t,
                s = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return s
                ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: s,
                    props: d,
                  }
                : null;
            })
            .filter(Boolean);
          (function (e, t) {
            var s = t.clientX,
              n = t.clientY;
            return e.every(function (e) {
              var t = e.popperRect,
                i = e.popperState,
                r = e.props.interactiveBorder,
                a = Ge(i.placement),
                o = i.modifiersData.offset;
              if (!o) return !0;
              var l = "bottom" === a ? o.top.y : 0,
                c = "top" === a ? o.bottom.y : 0,
                d = "right" === a ? o.left.x : 0,
                u = "left" === a ? o.right.x : 0,
                p = t.top - n + l > r,
                f = n - t.bottom - c > r,
                h = t.left - s + d > r,
                m = s - t.right - u > r;
              return p || f || h || m;
            });
          })(n, e) && (V(), te(e));
        }
      }
      function X(e) {
        Z(e) ||
          (y.props.trigger.indexOf("click") >= 0 && u) ||
          (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
      }
      function Y(e) {
        (y.props.trigger.indexOf("focusin") < 0 && e.target !== O()) ||
          (y.props.interactive &&
            e.relatedTarget &&
            S.contains(e.relatedTarget)) ||
          te(e);
      }
      function Z(e) {
        return !!nt.isTouch && A() !== e.type.indexOf("touch") >= 0;
      }
      function K() {
        Q();
        var t = y.props,
          s = t.popperOptions,
          n = t.placement,
          i = t.offset,
          r = t.getReferenceClientRect,
          a = t.moveTransition,
          l = L() ? bt(S).arrow : null,
          c = r
            ? {
                getBoundingClientRect: r,
                contextElement: r.contextElement || O(),
              }
            : e,
          d = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
              var t = e.state;
              if (L()) {
                var s = k().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  e
                ) {
                  "placement" === e
                    ? s.setAttribute("data-placement", t.placement)
                    : t.attributes.popper["data-popper-" + e]
                    ? s.setAttribute("data-" + e, "")
                    : s.removeAttribute("data-" + e);
                }),
                  (t.attributes.popper = {});
              }
            },
          },
          u = [
            { name: "offset", options: { offset: i } },
            {
              name: "preventOverflow",
              options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
            },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !a } },
            d,
          ];
        L() &&
          l &&
          u.push({ name: "arrow", options: { element: l, padding: 3 } }),
          u.push.apply(u, (null == s ? void 0 : s.modifiers) || []),
          (y.popperInstance = ke(
            c,
            S,
            Object.assign({}, s, {
              placement: n,
              onFirstUpdate: o,
              modifiers: u,
            })
          ));
      }
      function Q() {
        y.popperInstance &&
          (y.popperInstance.destroy(), (y.popperInstance = null));
      }
      function J() {
        return Re(S.querySelectorAll("[data-tippy-root]"));
      }
      function ee(e) {
        y.clearDelayTimeouts(), e && D("onTrigger", [y, e]), B();
        var t = M(!0),
          n = T(),
          i = n[0],
          r = n[1];
        nt.isTouch && "hold" === i && r && (t = r),
          t
            ? (s = setTimeout(function () {
                y.show();
              }, t))
            : y.show();
      }
      function te(e) {
        if (
          (y.clearDelayTimeouts(), D("onUntrigger", [y, e]), y.state.isVisible)
        ) {
          if (
            !(
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              y.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
              u
            )
          ) {
            var t = M(!1);
            t
              ? (n = setTimeout(function () {
                  y.state.isVisible && y.hide();
                }, t))
              : (i = requestAnimationFrame(function () {
                  y.hide();
                }));
          }
        } else j();
      }
    }
    function Ct(e, t) {
      void 0 === t && (t = {});
      var s = dt.plugins.concat(t.plugins || []);
      document.addEventListener("touchstart", rt, Ve),
        window.addEventListener("blur", ot);
      var n = Object.assign({}, t, { plugins: s }),
        i = Ke(e).reduce(function (e, t) {
          var s = t && Et(t, n);
          return s && e.push(s), e;
        }, []);
      return Xe(e) ? i[0] : i;
    }
    (Ct.defaultProps = dt),
      (Ct.setDefaultProps = function (e) {
        Object.keys(e).forEach(function (t) {
          dt[t] = e[t];
        });
      }),
      (Ct.currentInput = nt);
    Object.assign({}, ue, {
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow);
      },
    });
    Ct.setDefaultProps({ render: yt });
    const Tt = Ct;
    function At(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function Lt(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : At(t[s]) &&
            At(e[s]) &&
            Object.keys(t[s]).length > 0 &&
            Lt(e[s], t[s]);
      });
    }
    e.tippy = Tt("[data-tippy-content]", {});
    const Ot = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Pt() {
      const e = "undefined" != typeof document ? document : {};
      return Lt(e, Ot), e;
    }
    const kt = {
      document: Ot,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function Mt() {
      const e = "undefined" != typeof window ? window : {};
      return Lt(e, kt), e;
    }
    function _t(e, t = 0) {
      return setTimeout(e, t);
    }
    function Dt() {
      return Date.now();
    }
    function It(e, t = "x") {
      const s = Mt();
      let n, i, r;
      const a = (function (e) {
        const t = Mt();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = a.transform || a.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
      );
    }
    function $t(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function Vt(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== i &&
              i.enumerable &&
              ($t(t[n]) && $t(r[n])
                ? r[n].__swiper__
                  ? (t[n] = r[n])
                  : Vt(t[n], r[n])
                : !$t(t[n]) && $t(r[n])
                ? ((t[n] = {}),
                  r[n].__swiper__ ? (t[n] = r[n]) : Vt(t[n], r[n]))
                : (t[n] = r[n]));
          }
        }
      }
      var n;
      return t;
    }
    function Nt(e, t, s) {
      e.style.setProperty(t, s);
    }
    function qt({ swiper: e, targetPosition: t, side: s }) {
      const n = Mt(),
        i = -e.translate;
      let r,
        a = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (r = new Date().getTime()), null === a && (a = r);
          const l = Math.max(Math.min((r - a) / o, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = i + u * (t - i);
          if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), c(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(d);
        };
      d();
    }
    function zt(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function Bt(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function jt(e, t) {
      return Mt().getComputedStyle(e, null).getPropertyValue(t);
    }
    function Ht(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function Ft(e, t) {
      const s = [];
      let n = e.parentElement;
      for (; n; )
        t ? n.matches(t) && s.push(n) : s.push(n), (n = n.parentElement);
      return s;
    }
    function Gt(e, t, s) {
      const n = Mt();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              n
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              n
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let Rt, Wt, Ut;
    function Xt() {
      return (
        Rt ||
          (Rt = (function () {
            const e = Mt(),
              t = Pt();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        Rt
      );
    }
    function Yt(e = {}) {
      return (
        Wt ||
          (Wt = (function ({ userAgent: e } = {}) {
            const t = Xt(),
              s = Mt(),
              n = s.navigator.platform,
              i = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              a = s.screen.width,
              o = s.screen.height,
              l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === n;
            let f = "MacIntel" === n;
            return (
              !c &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${o}`) >= 0 &&
                ((c = i.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              l && !p && ((r.os = "android"), (r.android = !0)),
              (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        Wt
      );
    }
    function Zt() {
      return (
        Ut ||
          (Ut = (function () {
            const e = Mt();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, n] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && n < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        Ut
      );
    }
    const Kt = {
      on(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function i(...s) {
          n.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(n, s);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, n, i;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
          : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
          n.unshift(i);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          t
        );
      },
    };
    const Qt = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(jt(n, "padding-left") || 0, 10) -
              parseInt(jt(n, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(jt(n, "padding-top") || 0, 10) -
              parseInt(jt(n, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          {
            wrapperEl: i,
            slidesEl: r,
            size: a,
            rtlTranslate: o,
            wrongRTL: l,
          } = e,
          c = e.virtual && n.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          u = zt(r, `.${e.params.slideClass}, swiper-slide`),
          p = c ? e.virtual.slides.length : u.length;
        let f = [];
        const h = [],
          m = [];
        let g = n.slidesOffsetBefore;
        "function" == typeof g && (g = n.slidesOffsetBefore.call(e));
        let v = n.slidesOffsetAfter;
        "function" == typeof v && (v = n.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          y = e.slidesGrid.length;
        let w = n.spaceBetween,
          S = -g,
          x = 0,
          E = 0;
        if (void 0 === a) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * a),
          (e.virtualSize = -w),
          u.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          n.centeredSlides &&
            n.cssMode &&
            (Nt(i, "--swiper-centered-offset-before", ""),
            Nt(i, "--swiper-centered-offset-after", ""));
        const C = n.grid && n.grid.rows > 1 && e.grid;
        let T;
        C && e.grid.initSlides(p);
        const A =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < p; i += 1) {
          let r;
          if (
            ((T = 0),
            u[i] && (r = u[i]),
            C && e.grid.updateSlide(i, r, p, t),
            !u[i] || "none" !== jt(r, "display"))
          ) {
            if ("auto" === n.slidesPerView) {
              A && (u[i].style[t("width")] = "");
              const a = getComputedStyle(r),
                o = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (o && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                n.roundLengths)
              )
                T = e.isHorizontal() ? Gt(r, "width", !0) : Gt(r, "height", !0);
              else {
                const e = s(a, "width"),
                  t = s(a, "padding-left"),
                  n = s(a, "padding-right"),
                  i = s(a, "margin-left"),
                  o = s(a, "margin-right"),
                  l = a.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + i + o;
                else {
                  const { clientWidth: s, offsetWidth: a } = r;
                  T = e + t + n + i + o + (a - s);
                }
              }
              o && (r.style.transform = o),
                l && (r.style.webkitTransform = l),
                n.roundLengths && (T = Math.floor(T));
            } else
              (T = (a - (n.slidesPerView - 1) * w) / n.slidesPerView),
                n.roundLengths && (T = Math.floor(T)),
                u[i] && (u[i].style[t("width")] = `${T}px`);
            u[i] && (u[i].swiperSlideSize = T),
              m.push(T),
              n.centeredSlides
                ? ((S = S + T / 2 + x / 2 + w),
                  0 === x && 0 !== i && (S = S - a / 2 - w),
                  0 === i && (S = S - a / 2 - w),
                  Math.abs(S) < 0.001 && (S = 0),
                  n.roundLengths && (S = Math.floor(S)),
                  E % n.slidesPerGroup == 0 && f.push(S),
                  h.push(S))
                : (n.roundLengths && (S = Math.floor(S)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && f.push(S),
                  h.push(S),
                  (S = S + T + w)),
              (e.virtualSize += T + w),
              (x = T),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + v),
          o &&
            l &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            (i.style.width = `${e.virtualSize + n.spaceBetween}px`),
          n.setWrapperSize &&
            (i.style[t("width")] = `${e.virtualSize + n.spaceBetween}px`),
          C && e.grid.updateWrapperSize(T, f, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < f.length; s += 1) {
            let i = f[s];
            n.roundLengths && (i = Math.floor(i)),
              f[s] <= e.virtualSize - a && t.push(i);
          }
          (f = t),
            Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
              f.push(e.virtualSize - a);
        }
        if (c && n.loop) {
          const t = m[0] + w;
          if (n.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  n.slidesPerGroup
              ),
              i = t * n.slidesPerGroup;
            for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === n.slidesPerGroup && f.push(f[f.length - 1] + t),
              h.push(h[h.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === f.length && (f = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1
          ).forEach((e) => {
            e.style[s] = `${w}px`;
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - a;
          f = f.map((e) => (e < 0 ? -g : e > t ? t + v : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < a)
          ) {
            const t = (a - e) / 2;
            f.forEach((e, s) => {
              f[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: f,
            slidesGrid: h,
            slidesSizesGrid: m,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          Nt(i, "--swiper-centered-offset-before", -f[0] + "px"),
            Nt(
              i,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== d && e.emit("slidesLengthChange"),
          f.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== y && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          p <= n.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides[e];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset =
            (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - s;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        i && (a = e),
          n.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const o = n[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
          const c =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            d =
              (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            n[e].classList.add(s.slideVisibleClass)),
            (o.progress = i ? -c : c),
            (o.originalProgress = i ? -d : d);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: a, progressLoop: o } = t;
        const l = r,
          c = a;
        if (0 === n) (i = 0), (r = !0), (a = !0);
        else {
          i = (e - t.minTranslate()) / n;
          const s = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (r = s || i <= 0), (a = o || i >= 1), s && (i = 0), o && (i = 1);
        }
        if (s.loop) {
          const s = Ht(
              t.slides.filter(
                (e) => "0" === e.getAttribute("data-swiper-slide-index")
              )[0]
            ),
            n = Ht(
              t.slides.filter(
                (e) =>
                  1 * e.getAttribute("data-swiper-slide-index") ==
                  t.slides.length - 1
              )[0]
            ),
            i = t.slidesGrid[s],
            r = t.slidesGrid[n],
            a = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= i ? (l - i) / a : (l + a - r) / a), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: i,
          progressLoop: o,
          isBeginning: r,
          isEnd: a,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          a && !c && t.emit("reachEnd toEdge"),
          ((l && !r) || (c && !a)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: n, activeIndex: i } = e,
          r = e.virtual && s.virtual.enabled,
          a = (e) => zt(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          r)
        )
          if (s.loop) {
            let t = i - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = a(`[data-swiper-slide-index="${t}"]`));
          } else o = a(`[data-swiper-slide-index="${i}"]`);
        else o = t[i];
        if (o) {
          o.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const n = e.nextElementSibling;
              t ? n.matches(t) && s.push(n) : s.push(n), (e = n);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let n = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const n = e.previousElementSibling;
              t ? n.matches(t) && s.push(n) : s.push(n), (e = n);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !n && (n = t[t.length - 1]),
            n && n.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: n,
            params: i,
            activeIndex: r,
            realIndex: a,
            snapIndex: o,
          } = t;
        let l,
          c = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: s } = e,
                n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (i = e)
                    : n >= t[e] && n < t[e + 1] && (i = e + 1)
                  : n >= t[e] && (i = e);
              return (
                s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
              );
            })(t)),
          n.indexOf(s) >= 0)
        )
          l = n.indexOf(s);
        else {
          const e = Math.min(i.slidesPerGroupSkip, c);
          l = e + Math.floor((c - e) / i.slidesPerGroup);
        }
        if ((l >= n.length && (l = n.length - 1), c === r))
          return (
            l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let u;
        (u =
          t.virtual && i.virtual.enabled && i.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10
              )
            : c),
          Object.assign(t, {
            snapIndex: l,
            realIndex: u,
            previousIndex: r,
            activeIndex: c,
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = e.closest(`.${s.slideClass}, swiper-slide`);
        let i,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (i = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                n.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const Jt = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: n, wrapperEl: i } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let r = It(i, e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: n, params: i, wrapperEl: r, progress: a } = s;
        let o,
          l = 0,
          c = 0;
        s.isHorizontal() ? (l = n ? -e : e) : (c = e),
          i.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
          i.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -l : -c)
            : i.virtualTranslate ||
              (r.style.transform = `translate3d(${l}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : c);
        const d = s.maxTranslate() - s.minTranslate();
        (o = 0 === d ? 0 : (e - s.minTranslate()) / d),
          o !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, n = !0, i) {
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          r.updateProgress(d),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                qt({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function es({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: r } = e;
      let a = s;
      if (
        (a || (a = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== r)
      ) {
        if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === a
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const ts = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
        "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!h && !n && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (a = e)
                : t >= s && t < n && (a = e + 1)
              : t >= s && (a = e);
          }
        if (r.initialized && a !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          (a !== (d || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(v),
          (b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                qt({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const i = this;
        let r = e;
        return (
          i.params.loop &&
            (i.virtual && i.params.virtual.enabled
              ? (r += i.virtual.slidesBefore)
              : (r = Ht(
                  i.slides.filter(
                    (e) => 1 * e.getAttribute("data-swiper-slide-index") === r
                  )[0]
                ))),
          i.slideTo(r, t, s, n)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const n = this,
          { enabled: i, params: r, animating: a } = n;
        if (!i) return n;
        let o = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : o,
          c = n.virtual && r.virtual.enabled;
        if (r.loop) {
          if (a && !c && r.loopPreventsSliding) return !1;
          n.loopFix({ direction: "next" }),
            (n._clientLeft = n.wrapperEl.clientLeft);
        }
        return r.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const n = this,
          {
            params: i,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: o,
            enabled: l,
            animating: c,
          } = n;
        if (!l) return n;
        const d = n.virtual && i.virtual.enabled;
        if (i.loop) {
          if (c && !d && i.loopPreventsSliding) return !1;
          n.loopFix({ direction: "prev" }),
            (n._clientLeft = n.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(o ? n.translate : -n.translate),
          f = r.map((e) => u(e));
        let h = r[f.indexOf(p) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          r.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== h &&
            ((m = a.indexOf(h)),
            m < 0 && (m = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((m = m - n.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          i.rewind && n.isBeginning)
        ) {
          const i =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(i, e, t, s);
        }
        return n.slideTo(m, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
        const i = this;
        let r = i.activeIndex;
        const a = Math.min(i.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          const e = i.snapGrid[o];
          l - e > (i.snapGrid[o + 1] - e) * n && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[o - 1];
          l - e <= (i.snapGrid[o] - e) * n && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = Ht(zt(s, `${a}[data-swiper-slide-index="${i}"]`)[0])),
                  _t(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = Ht(zt(s, `${a}[data-swiper-slide-index="${i}"]`)[0])),
                _t(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const ss = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: n } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        zt(n, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: n,
        activeSlideIndex: i,
        byController: r,
        byMousewheel: a,
      } = {}) {
        const o = this;
        if (!o.params.loop) return;
        o.emit("beforeLoopFix");
        const {
          slides: l,
          allowSlidePrev: c,
          allowSlideNext: d,
          slidesEl: u,
          params: p,
        } = o;
        if (
          ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && p.virtual.enabled)
        )
          return (
            t &&
              (p.centeredSlides || 0 !== o.snapIndex
                ? p.centeredSlides && o.snapIndex < p.slidesPerView
                  ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                  : o.snapIndex === o.snapGrid.length - 1 &&
                    o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
            (o.allowSlidePrev = c),
            (o.allowSlideNext = d),
            void o.emit("loopFix")
          );
        const f =
          "auto" === p.slidesPerView
            ? o.slidesPerViewDynamic()
            : Math.ceil(parseFloat(p.slidesPerView, 10));
        let h = p.loopedSlides || f;
        h % p.slidesPerGroup != 0 &&
          (h += p.slidesPerGroup - (h % p.slidesPerGroup)),
          (o.loopedSlides = h);
        const m = [],
          g = [];
        let v = o.activeIndex;
        void 0 === i
          ? (i = Ht(
              o.slides.filter((e) =>
                e.classList.contains("swiper-slide-active")
              )[0]
            ))
          : (v = i);
        const b = "next" === s || !s,
          y = "prev" === s || !s;
        let w = 0,
          S = 0;
        if (i < h) {
          w = h - i;
          for (let e = 0; e < h - i; e += 1) {
            const t = e - Math.floor(e / l.length) * l.length;
            m.push(l.length - t - 1);
          }
        } else if (i > o.slides.length - 2 * h) {
          S = i - (o.slides.length - 2 * h);
          for (let e = 0; e < S; e += 1) {
            const t = e - Math.floor(e / l.length) * l.length;
            g.push(t);
          }
        }
        if (
          (y &&
            m.forEach((e) => {
              u.prepend(o.slides[e]);
            }),
          b &&
            g.forEach((e) => {
              u.append(o.slides[e]);
            }),
          o.recalcSlides(),
          p.watchSlidesProgress && o.updateSlidesOffset(),
          t)
        )
          if (m.length > 0 && y)
            if (void 0 === e) {
              const e = o.slidesGrid[v],
                t = o.slidesGrid[v + w] - e;
              a
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(v + w, 0, !1, !0),
                  n &&
                    (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
            } else n && o.slideToLoop(e, 0, !1, !0);
          else if (g.length > 0 && b)
            if (void 0 === e) {
              const e = o.slidesGrid[v],
                t = o.slidesGrid[v - S] - e;
              a
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(v - S, 0, !1, !0),
                  n &&
                    (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
            } else o.slideToLoop(e, 0, !1, !0);
        if (
          ((o.allowSlidePrev = c),
          (o.allowSlideNext = d),
          o.controller && o.controller.control && !r)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: n,
            activeSlideIndex: i,
            byController: !0,
          };
          Array.isArray(o.controller.control)
            ? o.controller.control.forEach((e) => {
                e.params.loop && e.loopFix(t);
              })
            : o.controller.control instanceof o.constructor &&
              o.controller.control.params.loop &&
              o.controller.control.loopFix(t);
        }
        o.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { slides: t, params: s, slidesEl: n } = e;
        if (!s.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        t.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          t.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            n.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function ns(e) {
      const t = this,
        s = Pt(),
        n = Mt(),
        i = t.touchEventsData;
      i.evCache.push(e);
      const { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = l.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(c)) return;
      if ("which" in l && 3 === l.which) return;
      if ("button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      d && l.target && l.target.shadowRoot && u && (c = u[0]);
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        f = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (f
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === Pt() || s === Mt()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const n = s.closest(e);
                return n || s.getRootNode ? n || t(s.getRootNode().host) : null;
              })(t);
            })(p, c)
          : c.closest(p))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
      (a.currentX = l.pageX), (a.currentY = l.pageY);
      const h = a.currentX,
        m = a.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (h <= v || h >= n.innerWidth - v)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (a.startX = h),
        (a.startY = m),
        (i.touchStartTime = Dt()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1);
      let b = !0;
      c.matches(i.focusableElements) &&
        ((b = !1), "SELECT" === c.nodeName && (i.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(i.focusableElements) &&
          s.activeElement !== c &&
          s.activeElement.blur();
      const y = b && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !y) ||
        c.isContentEditable ||
        l.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function is(e) {
      const t = Pt(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: a, enabled: o } = s;
      if (!o) return;
      if (!i.simulateTouch && "mouse" === e.pointerType) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      const c = n.evCache.findIndex((e) => e.pointerId === l.pointerId);
      c >= 0 && (n.evCache[c] = l);
      const d = n.evCache.length > 1 ? n.evCache[0] : l,
        u = d.pageX,
        p = d.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!s.allowTouchMove)
        return (
          l.target.matches(n.focusableElements) || (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: u,
              currentY: p,
            }),
            (n.touchStartTime = Dt()))
          )
        );
      if (i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (p < r.startY && s.translate <= s.maxTranslate()) ||
            (p > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (u < r.startX && s.translate <= s.maxTranslate()) ||
          (u > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const f = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            n.evCache.length > 1))
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
      let m = s.isHorizontal() ? f : h,
        g = s.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      i.oneWayMovement &&
        ((m = Math.abs(m) * (a ? 1 : -1)), (g = Math.abs(g) * (a ? 1 : -1))),
        (r.diff = m),
        (m *= i.touchRatio),
        a && ((m = -m), (g = -g));
      const v = s.touchesDirection;
      (s.swipeDirection = m > 0 ? "prev" : "next"),
        (s.touchesDirection = g > 0 ? "prev" : "next");
      const b = s.params.loop && !i.cssMode;
      if (!n.isMoved) {
        if (
          (b && s.loopFix({ direction: s.swipeDirection }),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l);
      }
      let y;
      n.isMoved &&
        v !== s.touchesDirection &&
        b &&
        Math.abs(m) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (y = !0)),
        s.emit("sliderMove", l),
        (n.isMoved = !0),
        (n.currentTranslate = m + n.startTranslate);
      let w = !0,
        S = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (S = 0),
        m > 0
          ? (b &&
              !y &&
              n.currentTranslate >
                (i.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            n.currentTranslate > s.minTranslate() &&
              ((w = !1),
              i.resistance &&
                (n.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + n.startTranslate + m) ** S)))
          : m < 0 &&
            (b &&
              !y &&
              n.currentTranslate <
                (i.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === i.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(i.slidesPerView, 10))),
              }),
            n.currentTranslate < s.maxTranslate() &&
              ((w = !1),
              i.resistance &&
                (n.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - n.startTranslate - m) ** S))),
        w && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(m) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function rs(e) {
      const t = this,
        s = t.touchEventsData,
        n = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (n >= 0 && s.evCache.splice(n, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      )
        return;
      const {
        params: i,
        touches: r,
        rtlTranslate: a,
        slidesGrid: o,
        enabled: l,
      } = t;
      if (!l) return;
      if (!i.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = Dt(),
        u = d - s.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit("tap click", c),
          u < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((s.lastClickTime = Dt()),
        _t(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = i.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let f = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? p >= o[e] && p < o[e + t] && ((f = e), (h = o[e + t] - o[e]))
          : p >= o[e] && ((f = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let m = null,
        g = null;
      i.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (m = 0));
      const v = (p - o[f]) / h,
        b = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (u > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? m : f + b)
            : t.slideTo(f)),
          "prev" === t.swipeDirection &&
            (v > 1 - i.longSwipesRatio
              ? t.slideTo(f + b)
              : null !== g && v < 0 && Math.abs(v) > i.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(f));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(f + b)
            : t.slideTo(f)
          : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : f + b),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : f));
      }
    }
    let as;
    function os() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(as),
          (as = setTimeout(() => {
            e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function ls(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function cs() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    const ds = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    };
    function us(e) {
      ds(this, e.target), this.update();
    }
    let ps = !1;
    function fs() {}
    const hs = (e, t) => {
      const s = Pt(),
        { params: n, el: i, wrapperEl: r, device: a } = e,
        o = !!n.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      i[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        s[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (n.preventClicks || n.preventClicksPropagation) &&
          i[l]("click", e.onClick, !0),
        n.cssMode && r[l]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[c](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              os,
              !0
            )
          : e[c]("observerUpdate", os, !0),
        i[l]("load", e.onLoad, { capture: !0 });
    };
    const ms = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const gs = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function vs(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                Vt(t, s))
              : Vt(t, s))
          : Vt(t, s);
      };
    }
    const bs = {
        eventsEmitter: Kt,
        update: Qt,
        translate: Jt,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              (s.wrapperEl.style.transitionDuration = `${e}ms`),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              es({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                es({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: ts,
        loop: ss,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = Pt(),
              { params: s } = e;
            (e.onTouchStart = ns.bind(e)),
              (e.onTouchMove = is.bind(e)),
              (e.onTouchEnd = rs.bind(e)),
              s.cssMode && (e.onScroll = cs.bind(e)),
              (e.onClick = ls.bind(e)),
              (e.onLoad = us.bind(e)),
              ps || (t.addEventListener("touchstart", fs), (ps = !0)),
              hs(e, "on");
          },
          detachEvents: function () {
            hs(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: n, el: i } = e,
              r = n.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const o = (a in r ? r[a] : void 0) || e.originalParams,
              l = ms(e, n),
              c = ms(e, o),
              d = n.enabled;
            l && !c
              ? (i.classList.remove(
                  `${n.containerModifierClass}grid`,
                  `${n.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !l &&
                c &&
                (i.classList.add(`${n.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === n.grid.fill)) &&
                  i.classList.add(`${n.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = n[t] && n[t].enabled,
                  i = o[t] && o[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable();
              });
            const u = o.direction && o.direction !== n.direction,
              p = n.loop && (o.slidesPerView !== n.slidesPerView || u);
            u && s && e.changeDirection(), Vt(e.params, o);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !f ? e.disable() : !d && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", o),
              p && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let n = !1;
            const i = Mt(),
              r = "window" === t ? i.innerHeight : s.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: r, value: o } = a[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = r)
                : o <= s.clientWidth && (n = r);
            }
            return n || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: n, el: i, device: r } = e,
              a = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((n) => {
                          e[n] && s.push(t + n);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: n },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass
              );
            t.push(...a), i.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      ys = {};
    class ws {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = Vt({}, s)),
          t && !s.el && (s.el = t);
        const n = Pt();
        if (
          s.el &&
          "string" == typeof s.el &&
          n.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            n.querySelectorAll(s.el).forEach((t) => {
              const n = Vt({}, s, { el: t });
              e.push(new ws(n));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = Xt()),
          (i.device = Yt({ userAgent: s.userAgent })),
          (i.browser = Zt()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
        const r = {};
        i.modules.forEach((e) => {
          e({
            params: s,
            swiper: i,
            extendParams: vs(s, r),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const a = Vt({}, gs, r);
        return (
          (i.params = Vt({}, a, ys, s)),
          (i.originalParams = Vt({}, i.params)),
          (i.passedParams = Vt({}, s)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: Dt(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = zt(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[o].swiperSlideSize;
          for (let s = o + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < n.length; e += 1) {
            (t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            i[o] - i[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && ds(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(n());
          }
          return zt(s, n())[0];
        })();
        return (
          !i &&
            t.params.createElements &&
            ((i = Bt("div", t.params.wrapperClass)),
            s.append(i),
            zt(s, `.${t.params.slideClass}`).forEach((e) => {
              i.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: i,
            slidesEl: t.isElement ? s : i,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === jt(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === jt(s, "direction")),
            wrongRTL: "-webkit-box" === jt(i, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? ds(t, e)
                : e.addEventListener("load", (e) => {
                    ds(t, e.target);
                  });
            }),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, el: i, wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttribute("style"),
              r.removeAttribute("style"),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    n.slideVisibleClass,
                    n.slideActiveClass,
                    n.slideNextClass,
                    n.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        Vt(ys, e);
      }
      static get extendedDefaults() {
        return ys;
      }
      static get defaults() {
        return gs;
      }
      static installModule(e) {
        ws.prototype.__modules__ || (ws.prototype.__modules__ = []);
        const t = ws.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ws.installModule(e)), ws)
          : (ws.installModule(e), ws);
      }
    }
    Object.keys(bs).forEach((e) => {
      Object.keys(bs[e]).forEach((t) => {
        ws.prototype[t] = bs[e][t];
      });
    }),
      ws.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = Mt();
          let i = null,
            r = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  r = n.requestAnimationFrame(() => {
                    const { width: s, height: n } = e;
                    let i = s,
                      r = n;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: n }) => {
                        (n && n !== e.el) ||
                          ((i = s ? s.width : (t[0] || t).inlineSize),
                          (r = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (i === s && r === n) || a();
                  });
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              r && n.cancelAnimationFrame(r),
                i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            r = Mt(),
            a = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = Ft(e.el);
                  for (let e = 0; e < t.length; e += 1) a(t[e]);
                }
                a(e.el, { childList: e.params.observeSlideChildren }),
                  a(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const Ss = ws;
    function xs(e, t, s, n) {
      return (
        e.params.createElements &&
          Object.keys(n).forEach((i) => {
            if (!s[i] && !0 === s.auto) {
              let r = zt(e.el, `.${n[i]}`)[0];
              r ||
                ((r = Bt("div", n[i])), (r.className = n[i]), e.el.append(r)),
                (s[i] = r),
                (t[i] = r);
            }
          }),
        s
      );
    }
    function Es({ swiper: e, extendParams: t, on: s, emit: n }) {
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null });
      const i = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function r(t) {
        let s;
        return t &&
          "string" == typeof t &&
          e.isElement &&
          ((s = e.el.shadowRoot.querySelector(t)), s)
          ? s
          : (t &&
              ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.el.querySelectorAll(t).length &&
                (s = e.el.querySelector(t))),
            t && !s ? t : s);
      }
      function a(t, s) {
        const n = e.params.navigation;
        (t = i(t)).forEach((t) => {
          t &&
            (t.classList[s ? "add" : "remove"](...n.disabledClass.split(" ")),
            "BUTTON" === t.tagName && (t.disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](n.lockClass));
        });
      }
      function o() {
        const { nextEl: t, prevEl: s } = e.navigation;
        if (e.params.loop) return a(s, !1), void a(t, !1);
        a(s, e.isBeginning && !e.params.rewind),
          a(t, e.isEnd && !e.params.rewind);
      }
      function l(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), n("navigationPrev"));
      }
      function c(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), n("navigationNext"));
      }
      function d() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = xs(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        let s = r(t.nextEl),
          n = r(t.prevEl);
        Object.assign(e.navigation, { nextEl: s, prevEl: n }),
          (s = i(s)),
          (n = i(n));
        const a = (s, n) => {
          s && s.addEventListener("click", "next" === n ? c : l),
            !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
        };
        s.forEach((e) => a(e, "next")), n.forEach((e) => a(e, "prev"));
      }
      function u() {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = i(t)), (s = i(s));
        const n = (t, s) => {
          t.removeEventListener("click", "next" === s ? c : l),
            t.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        t.forEach((e) => n(e, "next")), s.forEach((e) => n(e, "prev"));
      }
      s("init", () => {
        !1 === e.params.navigation.enabled ? p() : (d(), o());
      }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          let { nextEl: t, prevEl: s } = e.navigation;
          (t = i(t)),
            (s = i(s)),
            [...t, ...s]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.navigation.lockClass
                )
              );
        }),
        s("click", (t, s) => {
          let { nextEl: r, prevEl: a } = e.navigation;
          (r = i(r)), (a = i(a));
          const o = s.target;
          if (
            e.params.navigation.hideOnClick &&
            !a.includes(o) &&
            !r.includes(o)
          ) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            r.length
              ? (t = r[0].classList.contains(e.params.navigation.hiddenClass))
              : a.length &&
                (t = a[0].classList.contains(e.params.navigation.hiddenClass)),
              n(!0 === t ? "navigationShow" : "navigationHide"),
              [...r, ...a]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const p = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            d(),
            o();
        },
        disable: p,
        update: o,
        init: d,
        destroy: u,
      });
    }
    function Cs(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function Ts({ swiper: e, extendParams: t, on: s, emit: n }) {
      const i = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
          paginationDisabledClass: `${i}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let a = 0;
      const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function l() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function c(t, s) {
        const { bulletActiveClass: n } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${n}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${n}-${s}-${s}`));
      }
      function d(t) {
        const s = t.target.closest(Cs(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const n = Ht(s) * e.params.slidesPerGroup;
        e.params.loop ? e.slideToLoop(n) : e.slideTo(n);
      }
      function u() {
        const t = e.rtl,
          s = e.params.pagination;
        if (l()) return;
        let i,
          d = e.pagination.el;
        d = o(d);
        const u =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          p = e.params.loop
            ? Math.ceil(u / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          ((i = e.params.loop
            ? e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex
            : void 0 !== e.snapIndex
            ? e.snapIndex
            : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const n = e.pagination.bullets;
          let o, l, u;
          if (
            (s.dynamicBullets &&
              ((r = Gt(n[0], e.isHorizontal() ? "width" : "height", !0)),
              d.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  r * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((a += i - (e.previousIndex || 0)),
                a > s.dynamicMainBullets - 1
                  ? (a = s.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (o = Math.max(i - a, 0)),
              (l = o + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (u = (l + o) / 2)),
            n.forEach((e) => {
              e.classList.remove(
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`)
              );
            }),
            d.length > 1)
          )
            n.forEach((e) => {
              const t = Ht(e);
              t === i && e.classList.add(s.bulletActiveClass),
                s.dynamicBullets &&
                  (t >= o &&
                    t <= l &&
                    e.classList.add(`${s.bulletActiveClass}-main`),
                  t === o && c(e, "prev"),
                  t === l && c(e, "next"));
            });
          else {
            const e = n[i];
            if ((e && e.classList.add(s.bulletActiveClass), s.dynamicBullets)) {
              const e = n[o],
                t = n[l];
              for (let e = o; e <= l; e += 1)
                n[e].classList.add(`${s.bulletActiveClass}-main`);
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              a = (r * i - r) / 2 - u * r,
              o = t ? "right" : "left";
            n.forEach((t) => {
              t.style[e.isHorizontal() ? o : "top"] = `${a}px`;
            });
          }
        }
        d.forEach((t, r) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(Cs(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
              t.querySelectorAll(Cs(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(p);
              })),
            "progressbar" === s.type)
          ) {
            let n;
            n = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (i + 1) / p;
            let a = 1,
              o = 1;
            "horizontal" === n ? (a = r) : (o = r),
              t.querySelectorAll(Cs(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, i + 1, p)),
              0 === r && n("paginationRender", t))
            : (0 === r && n("paginationRender", t), n("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function p() {
        const t = e.params.pagination;
        if (l()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let i = e.pagination.el;
        i = o(i);
        let r = "";
        if ("bullets" === t.type) {
          let n = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && n > s && (n = s);
          for (let s = 0; s < n; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          i.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = r || ""),
              "bullets" === t.type &&
                (e.pagination.bullets = [
                  ...s.querySelectorAll(Cs(t.bulletClass)),
                ]);
          }),
          "custom" !== t.type && n("paginationRender", i[0]);
      }
      function f() {
        e.params.pagination = xs(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => Ft(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (a = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", d),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function h() {
        const t = e.params.pagination;
        if (l()) return;
        let s = e.pagination.el;
        s &&
          ((s = o(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", d);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(t.bulletActiveClass)
            );
      }
      s("init", () => {
        !1 === e.params.pagination.enabled ? m() : (f(), p(), u());
      }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && u();
        }),
        s("snapIndexChange", () => {
          u();
        }),
        s("snapGridLengthChange", () => {
          p(), u();
        }),
        s("destroy", () => {
          h();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          u();
        }),
        s("click", (t, s) => {
          const i = s.target;
          let { el: r } = e.pagination;
          if (
            (Array.isArray(r) || (r = [r].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !i.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            const t = r[0].classList.contains(e.params.pagination.hiddenClass);
            n(!0 === t ? "paginationShow" : "paginationHide"),
              r.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const m = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          h();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            f(),
            p(),
            u();
        },
        disable: m,
        render: p,
        update: u,
        init: f,
        destroy: h,
      });
    }
    function As({ swiper: e, extendParams: t, on: s }) {
      t({ parallax: { enabled: !1 } });
      const n = (t, s) => {
          const { rtl: n } = e,
            i = n ? -1 : 1,
            r = t.getAttribute("data-swiper-parallax") || "0";
          let a = t.getAttribute("data-swiper-parallax-x"),
            o = t.getAttribute("data-swiper-parallax-y");
          const l = t.getAttribute("data-swiper-parallax-scale"),
            c = t.getAttribute("data-swiper-parallax-opacity"),
            d = t.getAttribute("data-swiper-parallax-rotate");
          if (
            (a || o
              ? ((a = a || "0"), (o = o || "0"))
              : e.isHorizontal()
              ? ((a = r), (o = "0"))
              : ((o = r), (a = "0")),
            (a =
              a.indexOf("%") >= 0
                ? parseInt(a, 10) * s * i + "%"
                : a * s * i + "px"),
            (o =
              o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
            null != c)
          ) {
            const e = c - (c - 1) * (1 - Math.abs(s));
            t.style.opacity = e;
          }
          let u = `translate3d(${a}, ${o}, 0px)`;
          if (null != l) {
            u += ` scale(${l - (l - 1) * (1 - Math.abs(s))})`;
          }
          if (d && null != d) {
            u += ` rotate(${d * s * -1}deg)`;
          }
          t.style.transform = u;
        },
        i = () => {
          const { el: t, slides: s, progress: i, snapGrid: r } = e;
          zt(
            t,
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          ).forEach((e) => {
            n(e, i);
          }),
            s.forEach((t, s) => {
              let a = t.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (a += Math.ceil(s / 2) - i * (r.length - 1)),
                (a = Math.min(Math.max(a, -1), 1)),
                t
                  .querySelectorAll(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                  )
                  .forEach((e) => {
                    n(e, a);
                  });
            });
        };
      s("beforeInit", () => {
        e.params.parallax.enabled &&
          ((e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0));
      }),
        s("init", () => {
          e.params.parallax.enabled && i();
        }),
        s("setTranslate", () => {
          e.params.parallax.enabled && i();
        }),
        s("setTransition", (t, s) => {
          e.params.parallax.enabled &&
            ((t = e.params.speed) => {
              const { el: s } = e;
              s.querySelectorAll(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).forEach((e) => {
                let s =
                  parseInt(
                    e.getAttribute("data-swiper-parallax-duration"),
                    10
                  ) || t;
                0 === t && (s = 0), (e.style.transitionDuration = `${s}ms`);
              });
            })(s);
        });
    }
    function Ls({ swiper: e, extendParams: t, on: s, emit: n, params: i }) {
      let r, a;
      (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let o,
        l,
        c,
        d,
        u,
        p,
        f,
        h = i && i.autoplay ? i.autoplay.delay : 3e3,
        m = i && i.autoplay ? i.autoplay.delay : 3e3,
        g = new Date().getTime;
      function v(t) {
        e &&
          !e.destroyed &&
          e.wrapperEl &&
          t.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", v), E());
      }
      const b = () => {
          if (e.destroyed || !e.autoplay.running) return;
          e.autoplay.paused ? (l = !0) : l && ((m = o), (l = !1));
          const t = e.autoplay.paused ? o : g + m - new Date().getTime();
          (e.autoplay.timeLeft = t),
            n("autoplayTimeLeft", t, t / h),
            (a = requestAnimationFrame(() => {
              b();
            }));
        },
        y = (t) => {
          if (e.destroyed || !e.autoplay.running) return;
          cancelAnimationFrame(a), b();
          let s = void 0 === t ? e.params.autoplay.delay : t;
          (h = e.params.autoplay.delay), (m = e.params.autoplay.delay);
          const i = (() => {
            let t;
            if (
              ((t =
                e.virtual && e.params.virtual.enabled
                  ? e.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : e.slides[e.activeIndex]),
              !t)
            )
              return;
            return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(i) &&
            i > 0 &&
            void 0 === t &&
            ((s = i), (h = i), (m = i)),
            (o = s);
          const l = e.params.speed,
            c = () => {
              e &&
                !e.destroyed &&
                (e.params.autoplay.reverseDirection
                  ? !e.isBeginning || e.params.loop || e.params.rewind
                    ? (e.slidePrev(l, !0, !0), n("autoplay"))
                    : e.params.autoplay.stopOnLastSlide ||
                      (e.slideTo(e.slides.length - 1, l, !0, !0), n("autoplay"))
                  : !e.isEnd || e.params.loop || e.params.rewind
                  ? (e.slideNext(l, !0, !0), n("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(0, l, !0, !0), n("autoplay")),
                e.params.cssMode &&
                  ((g = new Date().getTime()),
                  requestAnimationFrame(() => {
                    y();
                  })));
            };
          return (
            s > 0
              ? (clearTimeout(r),
                (r = setTimeout(() => {
                  c();
                }, s)))
              : requestAnimationFrame(() => {
                  c();
                }),
            s
          );
        },
        w = () => {
          (e.autoplay.running = !0), y(), n("autoplayStart");
        },
        S = () => {
          (e.autoplay.running = !1),
            clearTimeout(r),
            cancelAnimationFrame(a),
            n("autoplayStop");
        },
        x = (t, s) => {
          if (e.destroyed || !e.autoplay.running) return;
          clearTimeout(r), t || (f = !0);
          const i = () => {
            n("autoplayPause"),
              e.params.autoplay.waitForTransition
                ? e.wrapperEl.addEventListener("transitionend", v)
                : E();
          };
          if (((e.autoplay.paused = !0), s))
            return p && (o = e.params.autoplay.delay), (p = !1), void i();
          const a = o || e.params.autoplay.delay;
          (o = a - (new Date().getTime() - g)),
            (e.isEnd && o < 0 && !e.params.loop) || (o < 0 && (o = 0), i());
        },
        E = () => {
          (e.isEnd && o < 0 && !e.params.loop) ||
            e.destroyed ||
            !e.autoplay.running ||
            ((g = new Date().getTime()),
            f ? ((f = !1), y(o)) : y(),
            (e.autoplay.paused = !1),
            n("autoplayResume"));
        },
        C = () => {
          if (e.destroyed || !e.autoplay.running) return;
          const t = Pt();
          "hidden" === t.visibilityState && ((f = !0), x(!0)),
            "visible" === t.visibilityState && E();
        },
        T = (e) => {
          "mouse" === e.pointerType && ((f = !0), x(!0));
        },
        A = (t) => {
          "mouse" === t.pointerType && e.autoplay.paused && E();
        };
      s("init", () => {
        e.params.autoplay.enabled &&
          (e.params.autoplay.pauseOnMouseEnter &&
            (e.el.addEventListener("pointerenter", T),
            e.el.addEventListener("pointerleave", A)),
          Pt().addEventListener("visibilitychange", C),
          (g = new Date().getTime()),
          w());
      }),
        s("destroy", () => {
          e.el.removeEventListener("pointerenter", T),
            e.el.removeEventListener("pointerleave", A),
            Pt().removeEventListener("visibilitychange", C),
            e.autoplay.running && S();
        }),
        s("beforeTransitionStart", (t, s, n) => {
          !e.destroyed &&
            e.autoplay.running &&
            (n || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : S());
        }),
        s("sliderFirstMove", () => {
          !e.destroyed &&
            e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? S()
              : ((c = !0),
                (d = !1),
                (f = !1),
                (u = setTimeout(() => {
                  (f = !0), (d = !0), x(!0);
                }, 200))));
        }),
        s("touchEnd", () => {
          if (!e.destroyed && e.autoplay.running && c) {
            if (
              (clearTimeout(u),
              clearTimeout(r),
              e.params.autoplay.disableOnInteraction)
            )
              return (d = !1), void (c = !1);
            d && e.params.cssMode && E(), (d = !1), (c = !1);
          }
        }),
        s("slideChange", () => {
          !e.destroyed && e.autoplay.running && (p = !0);
        }),
        Object.assign(e.autoplay, { start: w, stop: S, pause: x, resume: E });
    }
    function Os({ swiper: e, extendParams: t, on: s }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let n = !1,
        i = !1;
      function r() {
        const t = e.thumbs.swiper;
        if (!t || t.destroyed) return;
        const s = t.clickedIndex,
          n = t.clickedSlide;
        if (n && n.classList.contains(e.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let i;
        (i = t.params.loop
          ? parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          e.params.loop ? e.slideToLoop(i) : e.slideTo(i);
      }
      function a() {
        const { thumbs: t } = e.params;
        if (n) return !1;
        n = !0;
        const s = e.constructor;
        if (t.swiper instanceof s)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            e.thumbs.swiper.update();
        else if ($t(t.swiper)) {
          const n = Object.assign({}, t.swiper);
          Object.assign(n, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new s(n)),
            (i = !0);
        }
        return (
          e.thumbs.swiper.el.classList.add(
            e.params.thumbs.thumbsContainerClass
          ),
          e.thumbs.swiper.on("tap", r),
          !0
        );
      }
      function o(t) {
        const s = e.thumbs.swiper;
        if (!s || s.destroyed) return;
        const n =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let i = 1;
        const r = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (i = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (i = 1),
          (i = Math.floor(i)),
          s.slides.forEach((e) => e.classList.remove(r)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let t = 0; t < i; t += 1)
            zt(
              s.slidesEl,
              `[data-swiper-slide-index="${e.realIndex + t}"]`
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let t = 0; t < i; t += 1)
            s.slides[e.realIndex + t] &&
              s.slides[e.realIndex + t].classList.add(r);
        const a = e.params.thumbs.autoScrollOffset,
          o = a && !s.params.loop;
        if (e.realIndex !== s.realIndex || o) {
          const i = s.activeIndex;
          let r, l;
          if (s.params.loop) {
            const t = s.slides.filter(
              (t) =>
                t.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
            )[0];
            (r = s.slides.indexOf(t)),
              (l = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (r = e.realIndex), (l = r > e.previousIndex ? "next" : "prev");
          o && (r += "next" === l ? a : -1 * a),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(r) < 0 &&
              (s.params.centeredSlides
                ? (r =
                    r > i
                      ? r - Math.floor(n / 2) + 1
                      : r + Math.floor(n / 2) - 1)
                : r > i && s.params.slidesPerGroup,
              s.slideTo(r, t ? 0 : void 0));
        }
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: t } = e.params;
          if (t && t.swiper)
            if (
              "string" == typeof t.swiper ||
              t.swiper instanceof HTMLElement
            ) {
              const s = Pt(),
                n = () => {
                  const n =
                    "string" == typeof t.swiper
                      ? s.querySelector(t.swiper)
                      : t.swiper;
                  if (n && n.swiper) (t.swiper = n.swiper), a(), o(!0);
                  else if (n) {
                    const s = (i) => {
                      (t.swiper = i.detail[0]),
                        n.removeEventListener("init", s),
                        a(),
                        o(!0),
                        t.swiper.update(),
                        e.update();
                    };
                    n.addEventListener("init", s);
                  }
                  return n;
                },
                i = () => {
                  if (e.destroyed) return;
                  n() || requestAnimationFrame(i);
                };
              requestAnimationFrame(i);
            } else a(), o(!0);
        }),
        s("slideChange update resize observerUpdate", () => {
          o();
        }),
        s("setTransition", (t, s) => {
          const n = e.thumbs.swiper;
          n && !n.destroyed && n.setTransition(s);
        }),
        s("beforeDestroy", () => {
          const t = e.thumbs.swiper;
          t && !t.destroyed && i && t.destroy();
        }),
        Object.assign(e.thumbs, { init: a, update: o });
    }
    function Ps() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if (
          (Ps(),
          document.querySelector(".main-block__slider") &&
            new Ss(".main-block__slider", {
              modules: [Es, Ts, As, Ls],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 50,
              parallax: !0,
              speed: 800,
              loop: !0,
              pagination: { el: ".controll-main-block__dotts", clickable: !0 },
              on: {
                init: function (e) {
                  const t = document.querySelector(".fraction-controll__all"),
                    s = document.querySelectorAll(
                      ".slide-main-block:not(.swiper-slide-duplicate)"
                    );
                  t.innerHTML = s.length < 10 ? `0${s.length}` : s.length;
                },
                slideChange: function (e) {
                  document.querySelector(
                    ".fraction-controll__current"
                  ).innerHTML =
                    e.realIndex + 1 < 10
                      ? `0${e.realIndex + 1}`
                      : e.realIndex + 1;
                },
              },
            }),
          document.querySelector(".products-slider") &&
            new Ss(".products-slider__slider", {
              modules: [Es, Ts, Ls],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              slidesPerView: 4,
              spaceBetween: 30,
              parallax: !0,
              speed: 800,
              pagination: {
                el: ".products-slider__dotts",
                clickable: !0,
                dynamicBullets: !0,
              },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 20 },
                1370: { slidesPerView: 4, spaceBetween: 30 },
              },
              on: { init: function (e) {} },
            }),
          document.querySelector(".products-new") &&
            new Ss(".products-new__slider", {
              modules: [Es, Ts, Ls],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              slidesPerView: 3,
              spaceBetween: 30,
              parallax: !0,
              speed: 800,
              pagination: {
                el: ".products-new__dotts",
                clickable: !0,
                dynamicBullets: !0,
              },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 2, spaceBetween: 20 },
                1330: { slidesPerView: 3, spaceBetween: 30 },
              },
              on: { init: function (e) {} },
            }),
          document.querySelector(".thumbs-images"))
        ) {
          const e = new Ss(".thumbs-images", {
            modules: [Es, Ts, Ls, Os],
            observer: !0,
            observeParents: !0,
            watchOverflow: !0,
            slidesPerView: 4,
            spaceBetween: 16,
            parallax: !0,
            speed: 800,
            pagination: {
              el: ".products-new__dotts",
              clickable: !0,
              dynamicBullets: !0,
            },
            breakpoints: {
              992: { slidesPerView: 3 },
              1330: { slidesPerView: 4, spaceBetween: 16 },
            },
            on: { init: function (e) {} },
          });
          new Ss(".images-product__slider", {
            modules: [Es, Ts, Ls, Os],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            thumbs: { swiper: e },
            observer: !0,
            observeParents: !0,
            watchOverflow: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            on: { init: function (e) {} },
          });
        }
      })();
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            d(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                n = { root: s[0], margin: s[1], threshold: s[2] },
                i = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    i = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(s) === n.margin &&
                    String(i) === n.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(i, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let ks = !1;
    function Ms(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (ks) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (Ms.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            n = {};
          (n.element = t),
            (n.parent = t.parentNode),
            (n.destination = document.querySelector(s[0].trim())),
            (n.breakpoint = s[1] ? s[1].trim() : "767"),
            (n.place = s[2] ? s[2].trim() : "last"),
            (n.index = this.indexInParent(n.parent, n.element)),
            this.оbjects.push(n);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            n = String.prototype.split.call(s, ","),
            i = window.matchMedia(n[0]),
            r = n[1],
            a = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          i.addListener(function () {
            e.mediaHandler(i, a);
          }),
            this.mediaHandler(i, a);
        }
      }),
      (Ms.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (Ms.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (Ms.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (Ms.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (Ms.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new Ms("max").init(),
      document.addEventListener("click", function (e) {
        const t = e.target;
        if (t.closest("[data-parent]")) {
          const s = t.dataset.parent ? t.dataset.parent : null,
            n = document.querySelector(`[data-submenu="${s}"]`);
          if (n) {
            const e = document.querySelector("._sub-menu-active"),
              s = document.querySelector("._sub-menu-open");
            e &&
              e !== t &&
              (e.classList.remove("_sub-menu-active"),
              s.classList.remove("_sub-menu-open"),
              document.documentElement.classList.remove("sub-menu-open")),
              document.documentElement.classList.toggle("sub-menu-open"),
              t.classList.toggle("_sub-menu-active"),
              n.classList.toggle("_sub-menu-open");
          } else console.log("Ой ой, нет такого подменю");
          e.preventDefault();
        }
        t.closest(".menu-top-header__link_catalog") &&
          (document.documentElement.classList.add("catalog-open"),
          e.preventDefault());
        t.closest(".menu-catalog__back") &&
          (document.documentElement.classList.remove("catalog-open"),
          document.querySelector("._sub-menu-active") &&
            document
              .querySelector("._sub-menu-active")
              .classList.remove("_sub-menu-active"),
          document.querySelector("._sub-menu-open") &&
            document
              .querySelector("._sub-menu-open")
              .classList.remove("_sub-menu-open"),
          e.preventDefault());
        t.closest(".sub-menu-catalog__back") &&
          (document.documentElement.classList.remove("sub-menu-open"),
          document.querySelector("._sub-menu-active") &&
            document
              .querySelector("._sub-menu-active")
              .classList.remove("_sub-menu-active"),
          document.querySelector("._sub-menu-open") &&
            document
              .querySelector("._sub-menu-open")
              .classList.remove("_sub-menu-open"),
          e.preventDefault());
      });
    const _s = document.querySelectorAll(".sub-menu-catalog__block");
    _s.length &&
      _s.forEach((e) => {
        const t = e.querySelectorAll(".sub-menu-catalog__category").length;
        e.classList.add(`sub-menu-catalog__block_${t}`);
      }),
      document.querySelector(".filter-catalog__title") &&
        document
          .querySelector(".filter-catalog__title")
          .addEventListener("click", () => {
            window.innerWidth < 992 &&
              document
                .querySelector(".filter-catalog__items")
                .classList.toggle("_active");
          }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            r &&
              (a(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && r(s);
          let n = u(e, "spollers");
          function r(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    a(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    a(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function a(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                n = s.closest("[data-spollers]"),
                r = !!n.hasAttribute("data-one-spoller");
              n.querySelectorAll("._slide").length ||
                (r && !s.classList.contains("_spoller-active") && l(n),
                s.classList.toggle("_spoller-active"),
                i(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, 500));
          }
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let s = [];
        if (e.length > 0) {
          const t = (function () {
            if (location.hash) return location.hash.replace("#", "");
          })();
          t && t.startsWith("tab-") && (s = t.replace("tab-", "").split("-")),
            e.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", a),
                (function (e) {
                  let t = e.querySelectorAll("[data-tabs-titles]>*"),
                    n = e.querySelectorAll("[data-tabs-body]>*");
                  const i = e.dataset.tabsIndex,
                    r = s[0] == i;
                  if (r) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  n.length &&
                    ((n = Array.from(n).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (t = Array.from(t).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    n.forEach((e, n) => {
                      t[n].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && n == s[1] && t[n].classList.add("_tab-active"),
                        (e.hidden = !t[n].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let n = u(e, "tabs");
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
        function i(e, t) {
          e.forEach((e) => {
            let s = (e = e.item).querySelector("[data-tabs-titles]"),
              n = e.querySelectorAll("[data-tabs-title]"),
              i = e.querySelector("[data-tabs-body]"),
              r = e.querySelectorAll("[data-tabs-item]");
            (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
              (r = Array.from(r).filter((t) => t.closest("[data-tabs]") === e)),
              r.forEach((r, a) => {
                t.matches
                  ? (i.append(n[a]),
                    i.append(r),
                    e.classList.add("_tab-spoller"))
                  : (s.append(n[a]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function r(e) {
          let s = e.querySelectorAll("[data-tabs-title]"),
            i = e.querySelectorAll("[data-tabs-item]");
          const r = e.dataset.tabsIndex;
          const a = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (i.length > 0) {
            const o = e.hasAttribute("data-tabs-hash");
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              i.forEach((e, i) => {
                s[i].classList.contains("_tab-active")
                  ? (a ? n(e, a) : (e.hidden = !1),
                    o &&
                      !e.closest(".popup") &&
                      (function (e) {
                        (e = e ? `#${e}` : window.location.href.split("#")[0]),
                          history.pushState("", "", e);
                      })(`tab-${r}-${i}`))
                  : a
                  ? t(e, a)
                  : (e.hidden = !0);
              });
          }
        }
        function a(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              n = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !n.querySelector("._slide")
            ) {
              let e = n.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === n
                )),
                e.length && e[0].classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                r(n);
            }
            e.preventDefault();
          }
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              f.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && f.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              n(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                f.formClean(t);
              });
        async function n(e, s) {
          if (0 === (t ? f.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                n = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                r = new FormData(e);
              e.classList.add("_sending");
              const a = await fetch(t, { method: n, body: r });
              if (a.ok) {
                await a.json();
                e.classList.remove("_sending"), i(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), i(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && p(t, !0, 1e3);
          }
        }
        function i(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } })
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            f.formClean(t),
            c(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      }),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, s;
            for (let t = 0; t < e.length; t++) {
              n(e[t]);
            }
            function n(e) {
              i(e), r(), e.classList.contains("rating_set") && a(e);
            }
            function i(e) {
              (t = e.querySelector(".rating__active")),
                (s = e.querySelector(".rating__value"));
            }
            function r(e = s.innerHTML) {
              const n = e / 0.05;
              t.style.width = `${n}%`;
            }
            function a(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let n = 0; n < t.length; n++) {
                const a = t[n];
                a.addEventListener("mouseenter", function (t) {
                  i(e), r(a.value);
                }),
                  a.addEventListener("mouseleave", function (e) {
                    r();
                  }),
                  a.addEventListener("click", function (t) {
                    i(e),
                      e.dataset.ajax
                        ? o(a.value, e)
                        : ((s.innerHTML = n + 1), r());
                  });
              }
            }
            async function o(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const n = (await e.json()).newRating;
                  (s.innerHTML = n), r(), t.classList.remove("rating_sending");
                } else alert("Ошибка"), t.classList.remove("rating_sending");
              }
            }
          })();
      })();
  })();
})();
