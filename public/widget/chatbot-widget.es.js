import * as Q from "react";
import _e, { forwardRef as Tr, createElement as jt, useState as z, useRef as kt, useEffect as ie } from "react";
import Rr from "react-dom";
function jr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function kr() {
  if (Pt) return De;
  Pt = 1;
  var e = _e, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(h, d, v) {
    var p, c = {}, y = null, x = null;
    v !== void 0 && (y = "" + v), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (p in d) n.call(d, p) && !s.hasOwnProperty(p) && (c[p] = d[p]);
    if (h && h.defaultProps) for (p in d = h.defaultProps, d) c[p] === void 0 && (c[p] = d[p]);
    return { $$typeof: t, type: h, key: y, ref: x, props: c, _owner: o.current };
  }
  return De.Fragment = r, De.jsx = l, De.jsxs = l, De;
}
var Ce = {}, Dt;
function Pr() {
  if (Dt) return Ce;
  Dt = 1;
  var e = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return e.NODE_ENV !== "production" && function() {
    var t = _e, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), b = Symbol.iterator, I = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var i = b && a[b] || a[I];
      return typeof i == "function" ? i : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(a) {
      {
        for (var i = arguments.length, m = new Array(i > 1 ? i - 1 : 0), w = 1; w < i; w++)
          m[w - 1] = arguments[w];
        P("error", a, m);
      }
    }
    function P(a, i, m) {
      {
        var w = C.ReactDebugCurrentFrame, k = w.getStackAddendum();
        k !== "" && (i += "%s", m = m.concat([k]));
        var M = m.map(function(T) {
          return String(T);
        });
        M.unshift("Warning: " + i), Function.prototype.apply.call(console[a], console, M);
      }
    }
    var E = !1, j = !1, R = !1, $ = !1, J = !1, Y;
    Y = Symbol.for("react.module.reference");
    function re(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === o || a === l || J || a === s || a === p || a === c || $ || a === _ || E || j || R || typeof a == "object" && a !== null && (a.$$typeof === x || a.$$typeof === y || a.$$typeof === h || a.$$typeof === d || a.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Y || a.getModuleId !== void 0));
    }
    function ve(a, i, m) {
      var w = a.displayName;
      if (w)
        return w;
      var k = i.displayName || i.name || "";
      return k !== "" ? m + "(" + k + ")" : m;
    }
    function ne(a) {
      return a.displayName || "Context";
    }
    function V(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case p:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            var i = a;
            return ne(i) + ".Consumer";
          case h:
            var m = a;
            return ne(m._context) + ".Provider";
          case v:
            return ve(a, a.render, "ForwardRef");
          case y:
            var w = a.displayName || null;
            return w !== null ? w : V(a.type) || "Memo";
          case x: {
            var k = a, M = k._payload, T = k._init;
            try {
              return V(T(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ae = 0, le, de, Ie, Le, Fe, Ye, H;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Re() {
      {
        if (ae === 0) {
          le = console.log, de = console.info, Ie = console.warn, Le = console.error, Fe = console.group, Ye = console.groupCollapsed, H = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        ae++;
      }
    }
    function Xe() {
      {
        if (ae--, ae === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, a, {
              value: le
            }),
            info: K({}, a, {
              value: de
            }),
            warn: K({}, a, {
              value: Ie
            }),
            error: K({}, a, {
              value: Le
            }),
            group: K({}, a, {
              value: Fe
            }),
            groupCollapsed: K({}, a, {
              value: Ye
            }),
            groupEnd: K({}, a, {
              value: H
            })
          });
        }
        ae < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = C.ReactCurrentDispatcher, fe;
    function he(a, i, m) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (k) {
            var w = k.stack.trim().match(/\n( *(at )?)/);
            fe = w && w[1] || "";
          }
        return `
` + fe + a;
      }
    }
    var je = !1, u;
    {
      var g = typeof WeakMap == "function" ? WeakMap : Map;
      u = new g();
    }
    function S(a, i) {
      if (!a || je)
        return "";
      {
        var m = u.get(a);
        if (m !== void 0)
          return m;
      }
      var w;
      je = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = oe.current, oe.current = null, Re();
      try {
        if (i) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (G) {
              w = G;
            }
            Reflect.construct(a, [], T);
          } else {
            try {
              T.call();
            } catch (G) {
              w = G;
            }
            a.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            w = G;
          }
          a();
        }
      } catch (G) {
        if (G && w && typeof G.stack == "string") {
          for (var O = G.stack.split(`
`), B = w.stack.split(`
`), L = O.length - 1, q = B.length - 1; L >= 1 && q >= 0 && O[L] !== B[q]; )
            q--;
          for (; L >= 1 && q >= 0; L--, q--)
            if (O[L] !== B[q]) {
              if (L !== 1 || q !== 1)
                do
                  if (L--, q--, q < 0 || O[L] !== B[q]) {
                    var Z = `
` + O[L].replace(" at new ", " at ");
                    return a.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", a.displayName)), typeof a == "function" && u.set(a, Z), Z;
                  }
                while (L >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        je = !1, oe.current = M, Xe(), Error.prepareStackTrace = k;
      }
      var Oe = a ? a.displayName || a.name : "", be = Oe ? he(Oe) : "";
      return typeof a == "function" && u.set(a, be), be;
    }
    function A(a, i, m) {
      return S(a, !1);
    }
    function X(a) {
      var i = a.prototype;
      return !!(i && i.isReactComponent);
    }
    function U(a, i, m) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return S(a, X(a));
      if (typeof a == "string")
        return he(a);
      switch (a) {
        case p:
          return he("Suspense");
        case c:
          return he("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case v:
            return A(a.render);
          case y:
            return U(a.type, i, m);
          case x: {
            var w = a, k = w._payload, M = w._init;
            try {
              return U(M(k), i, m);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, ke = {}, pt = C.ReactDebugCurrentFrame;
    function qe(a) {
      if (a) {
        var i = a._owner, m = U(a.type, a._source, i ? i.type : null);
        pt.setExtraStackFrame(m);
      } else
        pt.setExtraStackFrame(null);
    }
    function ar(a, i, m, w, k) {
      {
        var M = Function.call.bind(ye);
        for (var T in a)
          if (M(a, T)) {
            var O = void 0;
            try {
              if (typeof a[T] != "function") {
                var B = Error((w || "React class") + ": " + m + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              O = a[T](i, T, w, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              O = L;
            }
            O && !(O instanceof Error) && (qe(k), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", m, T, typeof O), qe(null)), O instanceof Error && !(O.message in ke) && (ke[O.message] = !0, qe(k), N("Failed %s type: %s", m, O.message), qe(null));
          }
      }
    }
    var or = Array.isArray;
    function Qe(a) {
      return or(a);
    }
    function sr(a) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, m = i && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return m;
      }
    }
    function ir(a) {
      try {
        return vt(a), !1;
      } catch {
        return !0;
      }
    }
    function vt(a) {
      return "" + a;
    }
    function yt(a) {
      if (ir(a))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(a)), vt(a);
    }
    var Pe = C.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bt, wt, Je;
    Je = {};
    function ur(a) {
      if (ye.call(a, "ref")) {
        var i = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function lr(a) {
      if (ye.call(a, "key")) {
        var i = Object.getOwnPropertyDescriptor(a, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function dr(a, i) {
      if (typeof a.ref == "string" && Pe.current && i && Pe.current.stateNode !== i) {
        var m = V(Pe.current.type);
        Je[m] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Pe.current.type), a.ref), Je[m] = !0);
      }
    }
    function fr(a, i) {
      {
        var m = function() {
          bt || (bt = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        m.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function hr(a, i) {
      {
        var m = function() {
          wt || (wt = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        m.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var mr = function(a, i, m, w, k, M, T) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: i,
        ref: m,
        props: T,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function gr(a, i, m, w, k) {
      {
        var M, T = {}, O = null, B = null;
        m !== void 0 && (yt(m), O = "" + m), lr(i) && (yt(i.key), O = "" + i.key), ur(i) && (B = i.ref, dr(i, k));
        for (M in i)
          ye.call(i, M) && !cr.hasOwnProperty(M) && (T[M] = i[M]);
        if (a && a.defaultProps) {
          var L = a.defaultProps;
          for (M in L)
            T[M] === void 0 && (T[M] = L[M]);
        }
        if (O || B) {
          var q = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          O && fr(T, q), B && hr(T, q);
        }
        return mr(a, O, B, k, w, Pe.current, T);
      }
    }
    var Ze = C.ReactCurrentOwner, xt = C.ReactDebugCurrentFrame;
    function Se(a) {
      if (a) {
        var i = a._owner, m = U(a.type, a._source, i ? i.type : null);
        xt.setExtraStackFrame(m);
      } else
        xt.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function tt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function _t() {
      {
        if (Ze.current) {
          var a = V(Ze.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function pr(a) {
      return "";
    }
    var Et = {};
    function vr(a) {
      {
        var i = _t();
        if (!i) {
          var m = typeof a == "string" ? a : a.displayName || a.name;
          m && (i = `

Check the top-level render call using <` + m + ">.");
        }
        return i;
      }
    }
    function St(a, i) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var m = vr(i);
        if (Et[m])
          return;
        Et[m] = !0;
        var w = "";
        a && a._owner && a._owner !== Ze.current && (w = " It was passed a child from " + V(a._owner.type) + "."), Se(a), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, w), Se(null);
      }
    }
    function Ot(a, i) {
      {
        if (typeof a != "object")
          return;
        if (Qe(a))
          for (var m = 0; m < a.length; m++) {
            var w = a[m];
            tt(w) && St(w, i);
          }
        else if (tt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var k = F(a);
          if (typeof k == "function" && k !== a.entries)
            for (var M = k.call(a), T; !(T = M.next()).done; )
              tt(T.value) && St(T.value, i);
        }
      }
    }
    function yr(a) {
      {
        var i = a.type;
        if (i == null || typeof i == "string")
          return;
        var m;
        if (typeof i == "function")
          m = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === y))
          m = i.propTypes;
        else
          return;
        if (m) {
          var w = V(i);
          ar(m, a.props, "prop", w, a);
        } else if (i.PropTypes !== void 0 && !et) {
          et = !0;
          var k = V(i);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(a) {
      {
        for (var i = Object.keys(a.props), m = 0; m < i.length; m++) {
          var w = i[m];
          if (w !== "children" && w !== "key") {
            Se(a), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Se(null);
            break;
          }
        }
        a.ref !== null && (Se(a), N("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var Tt = {};
    function Rt(a, i, m, w, k, M) {
      {
        var T = re(a);
        if (!T) {
          var O = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = pr();
          B ? O += B : O += _t();
          var L;
          a === null ? L = "null" : Qe(a) ? L = "array" : a !== void 0 && a.$$typeof === r ? (L = "<" + (V(a.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : L = typeof a, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, O);
        }
        var q = gr(a, i, m, k, M);
        if (q == null)
          return q;
        if (T) {
          var Z = i.children;
          if (Z !== void 0)
            if (w)
              if (Qe(Z)) {
                for (var Oe = 0; Oe < Z.length; Oe++)
                  Ot(Z[Oe], a);
                Object.freeze && Object.freeze(Z);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(Z, a);
        }
        if (ye.call(i, "key")) {
          var be = V(a), G = Object.keys(i).filter(function(Or) {
            return Or !== "key";
          }), rt = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tt[be + rt]) {
            var Sr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, be, Sr, be), Tt[be + rt] = !0;
          }
        }
        return a === o ? br(q) : yr(q), q;
      }
    }
    function wr(a, i, m) {
      return Rt(a, i, m, !0);
    }
    function xr(a, i, m) {
      return Rt(a, i, m, !1);
    }
    var _r = xr, Er = wr;
    Ce.Fragment = o, Ce.jsx = _r, Ce.jsxs = Er;
  }(), Ce;
}
var Dr = {};
Dr.NODE_ENV === "production" ? ut.exports = kr() : ut.exports = Pr();
var f = ut.exports, lt, Cr = {}, $e = Rr;
if (Cr.NODE_ENV === "production")
  lt = $e.createRoot, $e.hydrateRoot;
else {
  var Ct = $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  lt = function(e, t) {
    Ct.usingClientEntryPoint = !0;
    try {
      return $e.createRoot(e, t);
    } finally {
      Ct.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), se = (e, t) => {
  const r = Tr(
    ({
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: l,
      className: h = "",
      children: d,
      ...v
    }, p) => jt(
      "svg",
      {
        ref: p,
        ...Mr,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: l ? Number(s) * 24 / Number(o) : s,
        className: ["lucide", `lucide-${Nr(e)}`, h].join(" "),
        ...v
      },
      [
        ...t.map(([c, y]) => jt(c, y)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = se("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = se("Hourglass", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = se("MessageSquarePlus", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = se("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = se("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = se("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = se("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = se("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = se("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = se("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
let W;
function te(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function xe(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Xt = 6048e5, Br = 864e5;
let Ur = {};
function Ge() {
  return Ur;
}
function Ae(e, t) {
  var h, d, v, p;
  const r = Ge(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((p = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : p.weekStartsOn) ?? 0, o = te(e), s = o.getDay(), l = (s < n ? 7 : 0) + s - n;
  return o.setDate(o.getDate() - l), o.setHours(0, 0, 0, 0), o;
}
function Ue(e) {
  return Ae(e, { weekStartsOn: 1 });
}
function Qt(e) {
  const t = te(e), r = t.getFullYear(), n = xe(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = Ue(n), s = xe(e, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = Ue(s);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function Mt(e) {
  const t = te(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Nt(e) {
  const t = te(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Gr(e, t) {
  const r = Mt(e), n = Mt(t), o = +r - Nt(r), s = +n - Nt(n);
  return Math.round((o - s) / Br);
}
function zr(e) {
  const t = Qt(e), r = xe(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Ue(r);
}
function Kr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Xr(e) {
  if (!Kr(e) && typeof e != "number")
    return !1;
  const t = te(e);
  return !isNaN(Number(t));
}
function Qr(e) {
  const t = te(e), r = xe(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Jr = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Zr = (e, t, r) => {
  let n;
  const o = Jr[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function nt(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const en = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, tn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, rn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nn = {
  date: nt({
    formats: en,
    defaultWidth: "full"
  }),
  time: nt({
    formats: tn,
    defaultWidth: "full"
  }),
  dateTime: nt({
    formats: rn,
    defaultWidth: "full"
  })
}, an = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, on = (e, t, r, n) => an[e];
function Me(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, h = r != null && r.width ? String(r.width) : l;
      o = e.formattingValues[h] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, h = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[h] || e.values[l];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const sn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, un = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ln = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, dn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, fn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, hn = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, mn = {
  ordinalNumber: hn,
  era: Me({
    values: sn,
    defaultWidth: "wide"
  }),
  quarter: Me({
    values: cn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Me({
    values: un,
    defaultWidth: "wide"
  }),
  day: Me({
    values: ln,
    defaultWidth: "wide"
  }),
  dayPeriod: Me({
    values: dn,
    defaultWidth: "wide",
    formattingValues: fn,
    defaultFormattingWidth: "wide"
  })
};
function Ne(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const l = s[0], h = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(h) ? pn(h, (c) => c.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      gn(h, (c) => c.test(l))
    );
    let v;
    v = e.valueCallback ? e.valueCallback(d) : d, v = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(v)
    ) : v;
    const p = t.slice(l.length);
    return { value: v, rest: p };
  };
}
function gn(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function pn(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function vn(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let l = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    l = r.valueCallback ? r.valueCallback(l) : l;
    const h = t.slice(o.length);
    return { value: l, rest: h };
  };
}
const yn = /^(\d+)(th|st|nd|rd)?/i, bn = /\d+/i, wn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xn = {
  any: [/^b/i, /^(a|c)/i]
}, _n = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, En = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Sn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, On = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Tn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Rn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, jn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, kn = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Pn = {
  ordinalNumber: vn({
    matchPattern: yn,
    parsePattern: bn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ne({
    matchPatterns: wn,
    defaultMatchWidth: "wide",
    parsePatterns: xn,
    defaultParseWidth: "any"
  }),
  quarter: Ne({
    matchPatterns: _n,
    defaultMatchWidth: "wide",
    parsePatterns: En,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ne({
    matchPatterns: Sn,
    defaultMatchWidth: "wide",
    parsePatterns: On,
    defaultParseWidth: "any"
  }),
  day: Ne({
    matchPatterns: Tn,
    defaultMatchWidth: "wide",
    parsePatterns: Rn,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ne({
    matchPatterns: jn,
    defaultMatchWidth: "any",
    parsePatterns: kn,
    defaultParseWidth: "any"
  })
}, Dn = {
  code: "en-US",
  formatDistance: Zr,
  formatLong: nn,
  formatRelative: on,
  localize: mn,
  match: Pn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Cn(e) {
  const t = te(e);
  return Gr(t, Qr(t)) + 1;
}
function Mn(e) {
  const t = te(e), r = +Ue(t) - +zr(t);
  return Math.round(r / Xt) + 1;
}
function Jt(e, t) {
  var p, c, y, x;
  const r = te(e), n = r.getFullYear(), o = Ge(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : c.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((x = (y = o.locale) == null ? void 0 : y.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, l = xe(e, 0);
  l.setFullYear(n + 1, 0, s), l.setHours(0, 0, 0, 0);
  const h = Ae(l, t), d = xe(e, 0);
  d.setFullYear(n, 0, s), d.setHours(0, 0, 0, 0);
  const v = Ae(d, t);
  return r.getTime() >= h.getTime() ? n + 1 : r.getTime() >= v.getTime() ? n : n - 1;
}
function Nn(e, t) {
  var h, d, v, p;
  const r = Ge(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = Jt(e, t), s = xe(e, 0);
  return s.setFullYear(o, 0, n), s.setHours(0, 0, 0, 0), Ae(s, t);
}
function An(e, t) {
  const r = te(e), n = +Ae(r, t) - +Nn(r, t);
  return Math.round(n / Xt) + 1;
}
function D(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const me = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return D(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : D(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return D(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return D(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return D(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return D(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return D(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return D(o, t.length);
  }
}, Te = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, At = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, { unit: "year" });
    }
    return me.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Jt(e, n), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const l = s % 100;
      return D(l, 2);
    }
    return t === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : D(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Qt(e);
    return D(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return D(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return D(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return D(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return me.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return D(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const o = An(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : D(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Mn(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : D(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : me.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Cn(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : D(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const o = e.getDay(), s = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return D(s, 2);
      case "eo":
        return r.ordinalNumber(s, { unit: "day" });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const o = e.getDay(), s = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return D(s, t.length);
      case "co":
        return r.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return D(o, t.length);
      case "io":
        return r.ordinalNumber(o, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = Te.noon : n === 0 ? o = Te.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = Te.evening : n >= 12 ? o = Te.afternoon : n >= 4 ? o = Te.morning : o = Te.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return me.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : me.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : D(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : D(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : me.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : me.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return me.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return It(n);
      case "XXXX":
      case "XX":
        return we(n);
      case "XXXXX":
      case "XXX":
      default:
        return we(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return It(n);
      case "xxxx":
      case "xx":
        return we(n);
      case "xxxxx":
      case "xxx":
      default:
        return we(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Wt(n, ":");
      case "OOOO":
      default:
        return "GMT" + we(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Wt(n, ":");
      case "zzzz":
      default:
        return "GMT" + we(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return D(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return D(n, t.length);
  }
};
function Wt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? r + String(o) : r + String(o) + t + D(s, 2);
}
function It(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + D(Math.abs(e) / 60, 2) : we(e, t);
}
function we(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = D(Math.trunc(n / 60), 2), s = D(n % 60, 2);
  return r + o + t + s;
}
const Lt = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Zt = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Wn = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Lt(e, t);
  let s;
  switch (n) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Lt(n, t)).replace("{{time}}", Zt(o, t));
}, In = {
  p: Zt,
  P: Wn
}, Ln = /^D+$/, Fn = /^Y+$/, Yn = ["D", "DD", "YY", "YYYY"];
function qn(e) {
  return Ln.test(e);
}
function $n(e) {
  return Fn.test(e);
}
function Vn(e, t, r) {
  const n = Hn(e, t, r);
  if (console.warn(n), Yn.includes(e)) throw new RangeError(n);
}
function Hn(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Bn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Un = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Gn = /^'([^]*?)'?$/, zn = /''/g, Kn = /[a-zA-Z]/;
function Ve(e, t, r) {
  var p, c, y, x;
  const n = Ge(), o = n.locale ?? Dn, s = n.firstWeekContainsDate ?? ((c = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, l = n.weekStartsOn ?? ((x = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : x.weekStartsOn) ?? 0, h = te(e);
  if (!Xr(h))
    throw new RangeError("Invalid time value");
  let d = t.match(Un).map((_) => {
    const b = _[0];
    if (b === "p" || b === "P") {
      const I = In[b];
      return I(_, o.formatLong);
    }
    return _;
  }).join("").match(Bn).map((_) => {
    if (_ === "''")
      return { isToken: !1, value: "'" };
    const b = _[0];
    if (b === "'")
      return { isToken: !1, value: Xn(_) };
    if (At[b])
      return { isToken: !0, value: _ };
    if (b.match(Kn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: _ };
  });
  o.localize.preprocessor && (d = o.localize.preprocessor(h, d));
  const v = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  };
  return d.map((_) => {
    if (!_.isToken) return _.value;
    const b = _.value;
    ($n(b) || qn(b)) && Vn(b, t, String(e));
    const I = At[b[0]];
    return I(h, b, o.localize, v);
  }).join("");
}
function Xn(e) {
  const t = e.match(Gn);
  return t ? t[1].replace(zn, "'") : e;
}
const Qn = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "", VITE_SUPABASE_URL: "" }, Ft = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (p, c) => {
    const y = typeof p == "function" ? p(t) : p;
    if (!Object.is(y, t)) {
      const x = t;
      t = c ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), r.forEach((_) => _(t, x));
    }
  }, o = () => t, d = { setState: n, getState: o, getInitialState: () => v, subscribe: (p) => (r.add(p), () => r.delete(p)), destroy: () => {
    (Qn ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, v = t = e(n, o, d);
  return d;
}, Jn = (e) => e ? Ft(e) : Ft;
var dt = { exports: {} }, at = {}, He = { exports: {} }, ot = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Zn() {
  if (Yt) return ot;
  Yt = 1;
  var e = _e;
  function t(c, y) {
    return c === y && (c !== 0 || 1 / c === 1 / y) || c !== c && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, l = e.useDebugValue;
  function h(c, y) {
    var x = y(), _ = n({ inst: { value: x, getSnapshot: y } }), b = _[0].inst, I = _[1];
    return s(function() {
      b.value = x, b.getSnapshot = y, d(b) && I({ inst: b });
    }, [c, x, y]), o(function() {
      return d(b) && I({ inst: b }), c(function() {
        d(b) && I({ inst: b });
      });
    }, [c]), l(x), x;
  }
  function d(c) {
    var y = c.getSnapshot;
    c = c.value;
    try {
      var x = y();
      return !r(c, x);
    } catch {
      return !0;
    }
  }
  function v(c, y) {
    return y();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? v : h;
  return ot.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, ot;
}
var st = {}, qt;
function ea() {
  if (qt) return st;
  qt = 1;
  var e = {};
  /**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return e.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = _e, r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(P) {
      {
        for (var E = arguments.length, j = new Array(E > 1 ? E - 1 : 0), R = 1; R < E; R++)
          j[R - 1] = arguments[R];
        o("error", P, j);
      }
    }
    function o(P, E, j) {
      {
        var R = r.ReactDebugCurrentFrame, $ = R.getStackAddendum();
        $ !== "" && (E += "%s", j = j.concat([$]));
        var J = j.map(function(Y) {
          return String(Y);
        });
        J.unshift("Warning: " + E), Function.prototype.apply.call(console[P], console, J);
      }
    }
    function s(P, E) {
      return P === E && (P !== 0 || 1 / P === 1 / E) || P !== P && E !== E;
    }
    var l = typeof Object.is == "function" ? Object.is : s, h = t.useState, d = t.useEffect, v = t.useLayoutEffect, p = t.useDebugValue, c = !1, y = !1;
    function x(P, E, j) {
      c || t.startTransition !== void 0 && (c = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var R = E();
      if (!y) {
        var $ = E();
        l(R, $) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), y = !0);
      }
      var J = h({
        inst: {
          value: R,
          getSnapshot: E
        }
      }), Y = J[0].inst, re = J[1];
      return v(function() {
        Y.value = R, Y.getSnapshot = E, _(Y) && re({
          inst: Y
        });
      }, [P, R, E]), d(function() {
        _(Y) && re({
          inst: Y
        });
        var ve = function() {
          _(Y) && re({
            inst: Y
          });
        };
        return P(ve);
      }, [P]), p(R), R;
    }
    function _(P) {
      var E = P.getSnapshot, j = P.value;
      try {
        var R = E();
        return !l(j, R);
      } catch {
        return !0;
      }
    }
    function b(P, E, j) {
      return E();
    }
    var I = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", F = !I, C = F ? b : x, N = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : C;
    st.useSyncExternalStore = N, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), st;
}
var $t;
function er() {
  if ($t) return He.exports;
  $t = 1;
  var e = {};
  return e.NODE_ENV === "production" ? He.exports = Zn() : He.exports = ea(), He.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function ta() {
  if (Vt) return at;
  Vt = 1;
  var e = _e, t = er();
  function r(v, p) {
    return v === p && (v !== 0 || 1 / v === 1 / p) || v !== v && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, l = e.useEffect, h = e.useMemo, d = e.useDebugValue;
  return at.useSyncExternalStoreWithSelector = function(v, p, c, y, x) {
    var _ = s(null);
    if (_.current === null) {
      var b = { hasValue: !1, value: null };
      _.current = b;
    } else b = _.current;
    _ = h(function() {
      function F(j) {
        if (!C) {
          if (C = !0, N = j, j = y(j), x !== void 0 && b.hasValue) {
            var R = b.value;
            if (x(R, j)) return P = R;
          }
          return P = j;
        }
        if (R = P, n(N, j)) return R;
        var $ = y(j);
        return x !== void 0 && x(R, $) ? R : (N = j, P = $);
      }
      var C = !1, N, P, E = c === void 0 ? null : c;
      return [function() {
        return F(p());
      }, E === null ? void 0 : function() {
        return F(E());
      }];
    }, [p, c, y, x]);
    var I = o(v, _[0], _[1]);
    return l(function() {
      b.hasValue = !0, b.value = I;
    }, [I]), d(I), I;
  }, at;
}
var it = {}, Ht;
function ra() {
  if (Ht) return it;
  Ht = 1;
  var e = {};
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return e.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = _e, r = er();
    function n(c, y) {
      return c === y && (c !== 0 || 1 / c === 1 / y) || c !== c && y !== y;
    }
    var o = typeof Object.is == "function" ? Object.is : n, s = r.useSyncExternalStore, l = t.useRef, h = t.useEffect, d = t.useMemo, v = t.useDebugValue;
    function p(c, y, x, _, b) {
      var I = l(null), F;
      I.current === null ? (F = {
        hasValue: !1,
        value: null
      }, I.current = F) : F = I.current;
      var C = d(function() {
        var j = !1, R, $, J = function(ne) {
          if (!j) {
            j = !0, R = ne;
            var V = _(ne);
            if (b !== void 0 && F.hasValue) {
              var K = F.value;
              if (b(K, V))
                return $ = K, K;
            }
            return $ = V, V;
          }
          var ae = R, le = $;
          if (o(ae, ne))
            return le;
          var de = _(ne);
          return b !== void 0 && b(le, de) ? le : (R = ne, $ = de, de);
        }, Y = x === void 0 ? null : x, re = function() {
          return J(y());
        }, ve = Y === null ? void 0 : function() {
          return J(Y());
        };
        return [re, ve];
      }, [y, x, _, b]), N = C[0], P = C[1], E = s(c, N, P);
      return h(function() {
        F.hasValue = !0, F.value = E;
      }, [E]), v(E), E;
    }
    it.useSyncExternalStoreWithSelector = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), it;
}
var na = {};
na.NODE_ENV === "production" ? dt.exports = ta() : dt.exports = ra();
var aa = dt.exports;
const oa = /* @__PURE__ */ jr(aa), tr = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "", VITE_SUPABASE_URL: "" }, { useDebugValue: sa } = _e, { useSyncExternalStoreWithSelector: ia } = oa;
let Bt = !1;
const ca = (e) => e;
function ua(e, t = ca, r) {
  (tr ? "production" : void 0) !== "production" && r && !Bt && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Bt = !0);
  const n = ia(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return sa(n), n;
}
const Ut = (e) => {
  (tr ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Jn(e) : e, r = (n, o) => ua(t, n, o);
  return Object.assign(r, t), r;
}, la = (e) => e ? Ut(e) : Ut;
let da = { data: "" }, fa = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || da, ha = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, ma = /\/\*[^]*?\*\/|  +/g, Gt = /\n+/g, ge = (e, t) => {
  let r = "", n = "", o = "";
  for (let s in e) {
    let l = e[s];
    s[0] == "@" ? s[1] == "i" ? r = s + " " + l + ";" : n += s[1] == "f" ? ge(l, s) : s + "{" + ge(l, s[1] == "k" ? "" : t) + "}" : typeof l == "object" ? n += ge(l, t ? t.replace(/([^,])+/g, (h) => s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (d) => /&/.test(d) ? d.replace(/&/g, h) : h ? h + " " + d : d)) : s) : l != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += ge.p ? ge.p(s, l) : s + ":" + l + ";");
  }
  return r + (t && o ? t + "{" + o + "}" : o) + n;
}, ce = {}, rr = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e) t += r + rr(e[r]);
    return t;
  }
  return e;
}, ga = (e, t, r, n, o) => {
  let s = rr(e), l = ce[s] || (ce[s] = ((d) => {
    let v = 0, p = 11;
    for (; v < d.length; ) p = 101 * p + d.charCodeAt(v++) >>> 0;
    return "go" + p;
  })(s));
  if (!ce[l]) {
    let d = s !== e ? e : ((v) => {
      let p, c, y = [{}];
      for (; p = ha.exec(v.replace(ma, "")); ) p[4] ? y.shift() : p[3] ? (c = p[3].replace(Gt, " ").trim(), y.unshift(y[0][c] = y[0][c] || {})) : y[0][p[1]] = p[2].replace(Gt, " ").trim();
      return y[0];
    })(e);
    ce[l] = ge(o ? { ["@keyframes " + l]: d } : d, r ? "" : "." + l);
  }
  let h = r && ce.g ? ce.g : null;
  return r && (ce.g = ce[l]), ((d, v, p, c) => {
    c ? v.data = v.data.replace(c, d) : v.data.indexOf(d) === -1 && (v.data = p ? d + v.data : v.data + d);
  })(ce[l], t, n, h), l;
}, pa = (e, t, r) => e.reduce((n, o, s) => {
  let l = t[s];
  if (l && l.call) {
    let h = l(r), d = h && h.props && h.props.className || /^go/.test(h) && h;
    l = d ? "." + d : h && typeof h == "object" ? h.props ? "" : ge(h, "") : h === !1 ? "" : h;
  }
  return n + o + (l ?? "");
}, "");
function ze(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return ga(r.unshift ? r.raw ? pa(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {}) : r, fa(t.target), t.g, t.o, t.k);
}
let nr, ft, ht;
ze.bind({ g: 1 });
let ue = ze.bind({ k: 1 });
function va(e, t, r, n) {
  ge.p = t, nr = e, ft = r, ht = n;
}
function pe(e, t) {
  let r = this || {};
  return function() {
    let n = arguments;
    function o(s, l) {
      let h = Object.assign({}, s), d = h.className || o.className;
      r.p = Object.assign({ theme: ft && ft() }, h), r.o = / *go\d+/.test(d), h.className = ze.apply(r, n) + (d ? " " + d : "");
      let v = e;
      return e[0] && (v = h.as || e, delete h.as), ht && v[0] && ht(h), nr(v, h);
    }
    return o;
  };
}
var ya = (e) => typeof e == "function", mt = (e, t) => ya(e) ? e(t) : e, ba = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), wa = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), xa = 20, Be = /* @__PURE__ */ new Map(), _a = 1e3, zt = (e) => {
  if (Be.has(e)) return;
  let t = setTimeout(() => {
    Be.delete(e), Ke({ type: 4, toastId: e });
  }, _a);
  Be.set(e, t);
}, Ea = (e) => {
  let t = Be.get(e);
  t && clearTimeout(t);
}, gt = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, xa) };
    case 1:
      return t.toast.id && Ea(t.toast.id), { ...e, toasts: e.toasts.map((s) => s.id === t.toast.id ? { ...s, ...t.toast } : s) };
    case 2:
      let { toast: r } = t;
      return e.toasts.find((s) => s.id === r.id) ? gt(e, { type: 1, toast: r }) : gt(e, { type: 0, toast: r });
    case 3:
      let { toastId: n } = t;
      return n ? zt(n) : e.toasts.forEach((s) => {
        zt(s.id);
      }), { ...e, toasts: e.toasts.map((s) => s.id === n || n === void 0 ? { ...s, visible: !1 } : s) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let o = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((s) => ({ ...s, pauseDuration: s.pauseDuration + o })) };
  }
}, Sa = [], ct = { toasts: [], pausedAt: void 0 }, Ke = (e) => {
  ct = gt(ct, e), Sa.forEach((t) => {
    t(ct);
  });
}, Oa = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || ba() }), We = (e) => (t, r) => {
  let n = Oa(t, e, r);
  return Ke({ type: 2, toast: n }), n.id;
}, ee = (e, t) => We("blank")(e, t);
ee.error = We("error");
ee.success = We("success");
ee.loading = We("loading");
ee.custom = We("custom");
ee.dismiss = (e) => {
  Ke({ type: 3, toastId: e });
};
ee.remove = (e) => Ke({ type: 4, toastId: e });
ee.promise = (e, t, r) => {
  let n = ee.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return e.then((o) => (ee.success(mt(t.success, o), { id: n, ...r, ...r == null ? void 0 : r.success }), o)).catch((o) => {
    ee.error(mt(t.error, o), { id: n, ...r, ...r == null ? void 0 : r.error });
  }), e;
};
var Ta = ue`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Ra = ue`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, ja = ue`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, ka = pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ta} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ra} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ja} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Pa = ue`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Da = pe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Pa} 1s linear infinite;
`, Ca = ue`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Ma = ue`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Na = pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ca} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ma} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Aa = pe("div")`
  position: absolute;
`, Wa = pe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Ia = ue`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, La = pe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ia} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Fa = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: n } = e;
  return t !== void 0 ? typeof t == "string" ? Q.createElement(La, null, t) : t : r === "blank" ? null : Q.createElement(Wa, null, Q.createElement(Da, { ...n }), r !== "loading" && Q.createElement(Aa, null, r === "error" ? Q.createElement(ka, { ...n }) : Q.createElement(Na, { ...n })));
}, Ya = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, qa = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, $a = "0%{opacity:0;} 100%{opacity:1;}", Va = "0%{opacity:1;} 100%{opacity:0;}", Ha = pe("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Ba = pe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ua = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [n, o] = wa() ? [$a, Va] : [Ya(r), qa(r)];
  return { animation: t ? `${ue(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ue(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
Q.memo(({ toast: e, position: t, style: r, children: n }) => {
  let o = e.height ? Ua(e.position || t || "top-center", e.visible) : { opacity: 0 }, s = Q.createElement(Fa, { toast: e }), l = Q.createElement(Ba, { ...e.ariaProps }, mt(e.message, e));
  return Q.createElement(Ha, { className: e.className, style: { ...o, ...r, ...e.style } }, typeof n == "function" ? n({ icon: s, message: l }) : Q.createElement(Q.Fragment, null, s, l));
});
va(Q.createElement);
ze`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
const Ga = async (e, t) => {
  try {
    const n = await fetch("https://deplo-dash-supa.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        message: e,
        conversationId: t
      })
    });
    if (!n.ok) {
      console.error("API Response:", {
        status: n.status,
        statusText: n.statusText,
        headers: Object.fromEntries(n.headers.entries())
      });
      const s = await n.text();
      throw console.error("Error response body:", s), new Error(`HTTP error! status: ${n.status}`);
    }
    return (await n.json()).response || "Sorry, I could not generate a response.";
  } catch (r) {
    throw console.error("Error generating response:", r), r;
  }
}, za = la((e, t) => ({
  isLoading: !1,
  error: null,
  sendMessage: async (r, n) => {
    e({ isLoading: !0, error: null });
    try {
      console.log("Sending user message from widget:", r);
      const o = {
        conversation_id: n,
        content: r,
        sender_type: "user",
        user_id: null
      }, { error: s } = await W.from("messages").insert(o);
      if (s) throw s;
      const { data: l, error: h } = await W.from("conversations").select("live_mode").eq("id", n).single();
      if (h) throw h;
      if (l.live_mode)
        console.log("Live mode enabled, skipping OpenAI response");
      else {
        console.log("Live mode disabled, generating OpenAI response");
        try {
          const v = await Ga(r, n);
          console.log("Got OpenAI response:", v);
          const p = {
            conversation_id: n,
            content: v,
            sender_type: "bot",
            user_id: null
          }, { error: c } = await W.from("messages").insert(p);
          if (c) throw c;
        } catch (v) {
          console.error("Error generating bot response:", v), ee.error("Failed to generate bot response");
        }
      }
      const { error: d } = await W.from("conversations").update({ last_message_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", n);
      if (d) throw d;
    } catch (o) {
      console.error("Error sending message:", o), e({ error: o.message }), ee.error("Failed to send message");
    } finally {
      e({ isLoading: !1 });
    }
  }
})), Kt = "chatbot_session_id", Ka = 180;
function Xa({ domainId: e }) {
  const [t, r] = z(!1), [n, o] = z(""), [s, l] = z([]), [h, d] = z([]), [v, p] = z("history"), [c, y] = z(null), [x, _] = z(!1), [b] = z(/* @__PURE__ */ new Set()), [I, F] = z(null), [C, N] = z(null), P = kt(null), [E, j] = z(!1), R = kt(null), { sendMessage: $ } = za(), [J, Y] = z(!1), re = (u, g) => g.some(
    (S) => (
      // Check for exact ID match
      S.id === u.id || // Check for temp ID being replaced by real ID
      S.id.startsWith("temp-") && S.content === u.content && S.sender_type === u.sender_type || // Check for exact content match within a small time window (2 seconds)
      S.content === u.content && S.sender_type === u.sender_type && Math.abs(new Date(S.created_at).getTime() - new Date(u.created_at).getTime()) < 2e3
    )
  );
  ie(() => {
    if (!C) return;
    const u = W.channel("new-conversations").on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${C}`
      },
      (g) => {
        if (g.eventType === "INSERT") {
          const S = g.new;
          d((A) => [S, ...A]);
        }
      }
    ).subscribe();
    return () => {
      u.unsubscribe();
    };
  }, [C]), ie(() => {
    if (!C) return;
    const u = W.channel("conversations-updates").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${C}`
      },
      (g) => {
        g.eventType === "UPDATE" && (d(
          (S) => S.map(
            (A) => A.id === g.new.id ? { ...A, ...g.new } : A
          )
        ), g.new.id === c && j(g.new.status === "archived"));
      }
    ).subscribe();
    return () => {
      u.unsubscribe();
    };
  }, [C, c]), ie(() => {
    var u;
    t && (s.length > 0 || E) && ((u = P.current) == null || u.scrollIntoView({ behavior: "smooth" }));
  }, [s, t, E]);
  const ve = async () => {
    if (C)
      try {
        const { data: u, error: g } = await W.from("conversations").select("*").eq("session_id", C).order("last_message_at", { ascending: !1 });
        if (g) throw g;
        d(u || []);
      } catch (u) {
        console.error("Error loading conversation history:", u);
      }
  };
  ie(() => {
    C && ve();
  }, [C]);
  const ne = async () => {
    l([]), y(null), j(!1), fe(null), Y(!1), p("chat");
  }, V = () => {
    p("history"), l([]), y(null), j(!1);
  }, K = async (u) => {
    try {
      y(u.id), j(u.status === "archived"), fe(null), Y(!1);
      const { data: g } = await W.from("messages").select("*").eq("conversation_id", u.id).order("created_at", { ascending: !0 });
      g && (l(g), b.clear(), g.forEach((S) => b.add(S.id))), u.status === "archived" && fe(u.rating || null), p("chat");
    } catch (g) {
      console.error("Error loading conversation:", g);
    }
  };
  ie(() => {
    if (!c) return;
    const u = W.channel(`conversation-status:${c}`).on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "conversations",
        filter: `id=eq.${c}`
      },
      (g) => {
        g.new.status === "archived" ? (j(!0), ae()) : j(!1);
      }
    ).subscribe();
    return () => {
      u.unsubscribe();
    };
  }, [c]), ie(() => {
    R.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3");
  }, []);
  const ae = () => {
    R.current && (R.current.currentTime = 0, R.current.play().catch((u) => {
      console.log("Error playing notification:", u);
    }));
  };
  ie(() => {
    if (!c) {
      console.log("No conversation ID yet, skipping subscription");
      return;
    }
    console.log("Setting up subscription for conversation:", c);
    const u = W.channel(`messages-${c}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${c}`
      },
      (g) => {
        if (console.log("Received real-time event:", g), g.eventType === "INSERT") {
          const S = g.new;
          console.log("New message:", S), l((A) => {
            if (re(S, A))
              return console.log("Message already exists, skipping"), A;
            const X = A.filter(
              (U) => !(U.id.startsWith("temp-") && U.content === S.content && U.sender_type === S.sender_type)
            );
            return b.add(S.id), S.sender_type === "bot" && ae(), console.log("Adding new message to state"), [...X, S];
          });
        }
      }
    );
    return u.subscribe((g) => {
      console.log("Subscription status:", g);
    }), () => {
      console.log("Cleaning up subscription for conversation:", c), u.unsubscribe();
    };
  }, [c, t]), ie(() => {
    (async () => {
      let g = localStorage.getItem(Kt);
      g || (g = window.crypto.randomUUID(), localStorage.setItem(Kt, g)), N(g), await le(g);
    })();
  }, []);
  const le = async (u) => {
    try {
      const { data: g, error: S } = await W.from("conversations").select("*").eq("session_id", u).eq("status", "active").order("last_message_at", { ascending: !1 }).limit(1);
      if (S) throw S;
      if (!g || g.length === 0) {
        console.log("No active conversations found for this session");
        return;
      }
      const A = g[0], X = /* @__PURE__ */ new Date();
      if (X.setDate(X.getDate() - Ka), new Date(A.last_message_at) < X) {
        await W.from("conversations").update({ status: "archived" }).eq("id", A.id);
        return;
      }
      y(A.id);
      const { data: U } = await W.from("messages").select("*").eq("conversation_id", A.id).order("created_at", { ascending: !0 });
      if (U) {
        const ye = U.filter((ke) => b.has(ke.id) ? !1 : (b.add(ke.id), !0));
        l(ye);
      }
    } catch (g) {
      g instanceof Error && !g.message.includes("no rows returned") && (console.error("Error loading existing conversation:", g), F("Failed to load conversation history"));
    }
  }, de = async () => {
    try {
      const { data: { user: u } } = await W.auth.getUser();
      if (!u) {
        await W.auth.signInAnonymously();
        const { data: { user: A } } = await W.auth.getUser();
        if (!A) throw new Error("Failed to create anonymous session");
        const { data: X, error: U } = await W.from("conversations").insert({
          domain_id: e,
          user_id: A.id,
          session_id: C,
          last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
          status: "active"
        }).select().single();
        if (U) throw U;
        return X.id;
      }
      const { data: g, error: S } = await W.from("conversations").insert({
        domain_id: e,
        user_id: u.id,
        session_id: C,
        last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).select().single();
      if (S) throw S;
      return g.id;
    } catch (u) {
      throw console.error("Error creating conversation:", u), u;
    }
  }, Ie = (u, g) => ({
    id: `temp-${Date.now()}`,
    content: u,
    sender_type: "user",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    conversation_id: g,
    user_id: null
  }), Le = (u, g) => ({
    id: `temp-${Date.now()}`,
    content: u,
    sender_type: "bot",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    conversation_id: g,
    user_id: null
  }), Fe = async (u) => {
    try {
      _(!0), F(null);
      const { data: { user: g } } = await W.auth.getUser();
      g || await W.auth.signInAnonymously();
      const S = c || await de();
      c || y(S);
      const A = Ie(u, S);
      l((X) => re(A, X) ? X : [...X, A]), await $(u, S), o("");
    } catch (g) {
      console.error("Error sending message:", g), F("Failed to send message. Please try again.");
    } finally {
      _(!1);
    }
  }, Ye = async (u) => {
    u.preventDefault(), !(!n.trim() || x) && await Fe(n.trim());
  };
  ie(() => {
    e && (async () => {
      try {
        const { data: g } = await W.from("domain_settings").select("*").eq("domain_id", e).single();
        Ee(g ? {
          chatbotName: g.chatbot_name,
          greetingMessage: g.greeting_message || "Hello! How can I help you today?",
          color: g.primary_color || "#FF6B00",
          headerTextColor: g.header_text_color || "#000000"
        } : {
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      } catch (g) {
        console.error("Error fetching chatbot config:", g), Ee({
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      }
    })();
  }, [e]);
  const [H, Ee] = z({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  }), Re = {
    backgroundColor: H.color
  }, Xe = async () => {
    if (c)
      try {
        l([]), b.clear();
        const { data: u } = await W.from("messages").select("*").eq("conversation_id", c).order("created_at", { ascending: !0 });
        u && (l(u), u.forEach((g) => b.add(g.id)));
      } catch (u) {
        console.error("Error refreshing chat:", u), F("Failed to refresh chat");
      }
  }, [oe, fe] = z(null), he = async (u) => {
    if (c)
      try {
        const { error: g } = await W.from("conversations").update({ rating: u }).eq("id", c);
        if (g) throw g;
        fe(u), d(
          (S) => S.map(
            (A) => A.id === c ? { ...A, rating: u } : A
          )
        );
      } catch (g) {
        console.error("Error rating conversation:", g);
      }
  }, je = async () => {
    if (c)
      try {
        const { error: u } = await W.from("conversations").update({
          requested_live_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", c);
        if (u) throw u;
        Y(!0);
        const g = Le(
          "I'll connect you with a live agent. Please wait a moment while I transfer your chat.",
          c
        );
        l((S) => [...S, g]);
      } catch (u) {
        console.error("Error requesting live chat:", u), F("Failed to request live chat. Please try again.");
      }
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    t && /* @__PURE__ */ f.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: H.color }, children: [
        /* @__PURE__ */ f.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ f.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ f.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ f.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: Re })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ f.jsx("h3", { className: "font-medium", style: { color: H.headerTextColor }, children: H.chatbotName }),
          /* @__PURE__ */ f.jsxs("p", { className: "text-sm", style: { color: H.headerTextColor }, children: [
            "from ",
            H.chatbotName
          ] })
        ] }),
        v === "chat" && /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
          J ? /* @__PURE__ */ f.jsx(
            "div",
            {
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              title: "Waiting for agent",
              children: /* @__PURE__ */ f.jsx(Wr, { className: "h-4 w-4" })
            }
          ) : /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: je,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm hover:bg-white/30",
              style: { color: H.headerTextColor },
              title: "Request live agent",
              disabled: !c || E,
              children: /* @__PURE__ */ f.jsx(Hr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: Xe,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              title: "Refresh chat",
              children: /* @__PURE__ */ f.jsx(Yr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: V,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              children: /* @__PURE__ */ f.jsx(Lr, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "h-[400px] overflow-y-auto p-4 bg-gray-50 relative", children: v === "history" ? /* @__PURE__ */ f.jsxs("div", { className: "space-y-4 h-full", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ f.jsx("h3", { className: "font-medium text-gray-900", children: "Conversation History" }),
          /* @__PURE__ */ f.jsxs(
            "button",
            {
              onClick: ne,
              className: "flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600",
              children: [
                /* @__PURE__ */ f.jsx(Ir, { className: "h-4 w-4" }),
                "Start New Chat"
              ]
            }
          )
        ] }),
        h.map((u) => /* @__PURE__ */ f.jsxs(
          "button",
          {
            onClick: () => K(u),
            className: "w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200",
            children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium text-gray-900", children: Ve(new Date(u.created_at), "PPP") }),
                /* @__PURE__ */ f.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${u.status === "archived" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600"}`, children: u.status === "archived" ? "Archived" : "Active" })
              ] }),
              /* @__PURE__ */ f.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Last message: ",
                Ve(new Date(u.last_message_at), "p")
              ] })
            ]
          },
          u.id
        )),
        h.length === 0 && /* @__PURE__ */ f.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ f.jsx("p", { className: "mb-4", children: "No previous conversations found" }) })
      ] }) : /* @__PURE__ */ f.jsxs("div", { className: "space-y-4", children: [
        v === "chat" && /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
          /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm max-w-[80%]", children: [
            /* @__PURE__ */ f.jsx("p", { className: "text-sm", children: H.greetingMessage }),
            /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: Ve(/* @__PURE__ */ new Date(), "h:mm a") })
          ] })
        ] }),
        s.map((u) => /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: `flex gap-2 ${u.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              u.sender_type === "bot" && /* @__PURE__ */ f.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ f.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg max-w-[80%] ${u.sender_type === "user" ? "bg-orange-500 text-white ml-auto" : "bg-white shadow-sm"}`,
                  children: [
                    /* @__PURE__ */ f.jsx("p", { className: "text-sm", children: u.content }),
                    /* @__PURE__ */ f.jsx("span", { className: `text-xs mt-1 block ${u.sender_type === "user" ? "text-orange-100" : "text-gray-500"}`, children: Ve(new Date(u.created_at), "h:mm a") })
                  ]
                }
              ),
              u.sender_type === "user" && /* @__PURE__ */ f.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          u.id
        )),
        E && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-3 my-4", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ f.jsx(Ar, { className: "h-4 w-4" }),
            /* @__PURE__ */ f.jsx("span", { className: "text-sm", children: "This conversation has been archived" })
          ] }),
          !oe && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ f.jsx("p", { className: "text-sm text-gray-600", children: "How was this conversation?" }),
            /* @__PURE__ */ f.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  onClick: () => he("bad"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors",
                  children: [
                    /* @__PURE__ */ f.jsx($r, { className: "h-4 w-4" }),
                    /* @__PURE__ */ f.jsx("span", { children: "Bad" })
                  ]
                }
              ),
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  onClick: () => he("ok"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors",
                  children: [
                    /* @__PURE__ */ f.jsx(Fr, { className: "h-4 w-4" }),
                    /* @__PURE__ */ f.jsx("span", { children: "OK" })
                  ]
                }
              ),
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  onClick: () => he("good"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors",
                  children: [
                    /* @__PURE__ */ f.jsx(Vr, { className: "h-4 w-4" }),
                    /* @__PURE__ */ f.jsx("span", { children: "Good" })
                  ]
                }
              )
            ] })
          ] }),
          oe && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
            /* @__PURE__ */ f.jsx("span", { className: "text-sm text-gray-600", children: "You rated this conversation:" }),
            /* @__PURE__ */ f.jsx("span", { className: `font-medium ${oe === "bad" ? "text-red-600" : oe === "ok" ? "text-yellow-600" : "text-green-600"}`, children: oe === "bad" ? "Bad 👎" : oe === "ok" ? "OK 😐" : "Good 👍" })
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("div", { ref: P })
      ] }) }),
      v === "chat" && /* @__PURE__ */ f.jsxs("form", { onSubmit: Ye, className: "p-4 border-t bg-white", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              value: n,
              onChange: (u) => o(u.target.value),
              placeholder: "Type your message...",
              className: "w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed",
              style: { "--tw-ring-color": H.color },
              disabled: x || E
            }
          ) }),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "submit",
              disabled: !n.trim() || x || E,
              className: "p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
              style: Re,
              children: x ? /* @__PURE__ */ f.jsx("div", { className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ f.jsx(qr, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ f.jsx(
          "a",
          {
            href: "https://dashboard.ai",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-gray-600 hover:text-gray-700",
            children: "Powered by Dashboard.ai"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg",
        style: Re,
        onClick: () => r(!t),
        children: t ? "×" : "💬"
      }
    )
  ] });
}
function Qa() {
  const e = document.createElement("div");
  e.id = "chatbot-widget-root", document.body.appendChild(e);
  const t = window.CHATBOT_CONFIG || {};
  lt(e).render(/* @__PURE__ */ f.jsx(Xa, { domainId: t.domainId }));
}
Qa();
//# sourceMappingURL=chatbot-widget.es.js.map
