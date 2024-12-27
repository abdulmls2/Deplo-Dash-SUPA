import * as X from "react";
import xe, { forwardRef as Tr, createElement as kt, useState as G, useRef as Rt, useEffect as se } from "react";
import jr from "react-dom";
function kr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ct = { exports: {} }, Ce = {};
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
function Rr() {
  if (Pt) return Ce;
  Pt = 1;
  var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(h, d, v) {
    var g, c = {}, y = null, x = null;
    v !== void 0 && (y = "" + v), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (g in d) n.call(d, g) && !s.hasOwnProperty(g) && (c[g] = d[g]);
    if (h && h.defaultProps) for (g in d = h.defaultProps, d) c[g] === void 0 && (c[g] = d[g]);
    return { $$typeof: t, type: h, key: y, ref: x, props: c, _owner: o.current };
  }
  return Ce.Fragment = r, Ce.jsx = u, Ce.jsxs = u, Ce;
}
var De = {}, Ct;
function Pr() {
  if (Ct) return De;
  Ct = 1;
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
    var t = xe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), b = Symbol.iterator, W = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var i = b && a[b] || a[W];
      return typeof i == "function" ? i : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(a) {
      {
        for (var i = arguments.length, m = new Array(i > 1 ? i - 1 : 0), w = 1; w < i; w++)
          m[w - 1] = arguments[w];
        P("error", a, m);
      }
    }
    function P(a, i, m) {
      {
        var w = D.ReactDebugCurrentFrame, R = w.getStackAddendum();
        R !== "" && (i += "%s", m = m.concat([R]));
        var M = m.map(function(T) {
          return String(T);
        });
        M.unshift("Warning: " + i), Function.prototype.apply.call(console[a], console, M);
      }
    }
    var E = !1, k = !1, j = !1, $ = !1, K = !1, Y;
    Y = Symbol.for("react.module.reference");
    function re(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === o || a === u || K || a === s || a === g || a === c || $ || a === _ || E || k || j || typeof a == "object" && a !== null && (a.$$typeof === x || a.$$typeof === y || a.$$typeof === h || a.$$typeof === d || a.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Y || a.getModuleId !== void 0));
    }
    function ge(a, i, m) {
      var w = a.displayName;
      if (w)
        return w;
      var R = i.displayName || i.name || "";
      return R !== "" ? m + "(" + R + ")" : m;
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
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case g:
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
            return ge(a, a.render, "ForwardRef");
          case y:
            var w = a.displayName || null;
            return w !== null ? w : V(a.type) || "Memo";
          case x: {
            var R = a, M = R._payload, T = R._init;
            try {
              return V(T(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, ae = 0, ue, le, We, Le, H, _e, Se;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function de() {
      {
        if (ae === 0) {
          ue = console.log, le = console.info, We = console.warn, Le = console.error, H = console.group, _e = console.groupCollapsed, Se = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
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
    function Ee() {
      {
        if (ae--, ae === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, a, {
              value: ue
            }),
            info: J({}, a, {
              value: le
            }),
            warn: J({}, a, {
              value: We
            }),
            error: J({}, a, {
              value: Le
            }),
            group: J({}, a, {
              value: H
            }),
            groupCollapsed: J({}, a, {
              value: _e
            }),
            groupEnd: J({}, a, {
              value: Se
            })
          });
        }
        ae < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = D.ReactCurrentDispatcher, ke;
    function l(a, i, m) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (R) {
            var w = R.stack.trim().match(/\n( *(at )?)/);
            ke = w && w[1] || "";
          }
        return `
` + ke + a;
      }
    }
    var p = !1, S;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      S = new I();
    }
    function B(a, i) {
      if (!a || p)
        return "";
      {
        var m = S.get(a);
        if (m !== void 0)
          return m;
      }
      var w;
      p = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = pe.current, pe.current = null, de();
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
            } catch (z) {
              w = z;
            }
            Reflect.construct(a, [], T);
          } else {
            try {
              T.call();
            } catch (z) {
              w = z;
            }
            a.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            w = z;
          }
          a();
        }
      } catch (z) {
        if (z && w && typeof z.stack == "string") {
          for (var O = z.stack.split(`
`), U = w.stack.split(`
`), L = O.length - 1, q = U.length - 1; L >= 1 && q >= 0 && O[L] !== U[q]; )
            q--;
          for (; L >= 1 && q >= 0; L--, q--)
            if (O[L] !== U[q]) {
              if (L !== 1 || q !== 1)
                do
                  if (L--, q--, q < 0 || O[L] !== U[q]) {
                    var Q = `
` + O[L].replace(" at new ", " at ");
                    return a.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", a.displayName)), typeof a == "function" && S.set(a, Q), Q;
                  }
                while (L >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        p = !1, pe.current = M, Ee(), Error.prepareStackTrace = R;
      }
      var Te = a ? a.displayName || a.name : "", ye = Te ? l(Te) : "";
      return typeof a == "function" && S.set(a, ye), ye;
    }
    function ee(a, i, m) {
      return B(a, !1);
    }
    function Je(a) {
      var i = a.prototype;
      return !!(i && i.isReactComponent);
    }
    function ve(a, i, m) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return B(a, Je(a));
      if (typeof a == "string")
        return l(a);
      switch (a) {
        case g:
          return l("Suspense");
        case c:
          return l("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case v:
            return ee(a.render);
          case y:
            return ve(a.type, i, m);
          case x: {
            var w = a, R = w._payload, M = w._init;
            try {
              return ve(M(R), i, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, gt = {}, pt = D.ReactDebugCurrentFrame;
    function Ye(a) {
      if (a) {
        var i = a._owner, m = ve(a.type, a._source, i ? i.type : null);
        pt.setExtraStackFrame(m);
      } else
        pt.setExtraStackFrame(null);
    }
    function ar(a, i, m, w, R) {
      {
        var M = Function.call.bind(Re);
        for (var T in a)
          if (M(a, T)) {
            var O = void 0;
            try {
              if (typeof a[T] != "function") {
                var U = Error((w || "React class") + ": " + m + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              O = a[T](i, T, w, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              O = L;
            }
            O && !(O instanceof Error) && (Ye(R), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", m, T, typeof O), Ye(null)), O instanceof Error && !(O.message in gt) && (gt[O.message] = !0, Ye(R), N("Failed %s type: %s", m, O.message), Ye(null));
          }
      }
    }
    var or = Array.isArray;
    function Xe(a) {
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
    var Pe = D.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bt, wt, Ke;
    Ke = {};
    function ur(a) {
      if (Re.call(a, "ref")) {
        var i = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function lr(a) {
      if (Re.call(a, "key")) {
        var i = Object.getOwnPropertyDescriptor(a, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function dr(a, i) {
      if (typeof a.ref == "string" && Pe.current && i && Pe.current.stateNode !== i) {
        var m = V(Pe.current.type);
        Ke[m] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Pe.current.type), a.ref), Ke[m] = !0);
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
    var mr = function(a, i, m, w, R, M, T) {
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
        value: R
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function gr(a, i, m, w, R) {
      {
        var M, T = {}, O = null, U = null;
        m !== void 0 && (yt(m), O = "" + m), lr(i) && (yt(i.key), O = "" + i.key), ur(i) && (U = i.ref, dr(i, R));
        for (M in i)
          Re.call(i, M) && !cr.hasOwnProperty(M) && (T[M] = i[M]);
        if (a && a.defaultProps) {
          var L = a.defaultProps;
          for (M in L)
            T[M] === void 0 && (T[M] = L[M]);
        }
        if (O || U) {
          var q = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          O && fr(T, q), U && hr(T, q);
        }
        return mr(a, O, U, R, w, Pe.current, T);
      }
    }
    var Qe = D.ReactCurrentOwner, xt = D.ReactDebugCurrentFrame;
    function Oe(a) {
      if (a) {
        var i = a._owner, m = ve(a.type, a._source, i ? i.type : null);
        xt.setExtraStackFrame(m);
      } else
        xt.setExtraStackFrame(null);
    }
    var Ze;
    Ze = !1;
    function et(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function _t() {
      {
        if (Qe.current) {
          var a = V(Qe.current.type);
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
    var St = {};
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
    function Et(a, i) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var m = vr(i);
        if (St[m])
          return;
        St[m] = !0;
        var w = "";
        a && a._owner && a._owner !== Qe.current && (w = " It was passed a child from " + V(a._owner.type) + "."), Oe(a), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, w), Oe(null);
      }
    }
    function Ot(a, i) {
      {
        if (typeof a != "object")
          return;
        if (Xe(a))
          for (var m = 0; m < a.length; m++) {
            var w = a[m];
            et(w) && Et(w, i);
          }
        else if (et(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var R = F(a);
          if (typeof R == "function" && R !== a.entries)
            for (var M = R.call(a), T; !(T = M.next()).done; )
              et(T.value) && Et(T.value, i);
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
        } else if (i.PropTypes !== void 0 && !Ze) {
          Ze = !0;
          var R = V(i);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(a) {
      {
        for (var i = Object.keys(a.props), m = 0; m < i.length; m++) {
          var w = i[m];
          if (w !== "children" && w !== "key") {
            Oe(a), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Oe(null);
            break;
          }
        }
        a.ref !== null && (Oe(a), N("Invalid attribute `ref` supplied to `React.Fragment`."), Oe(null));
      }
    }
    var Tt = {};
    function jt(a, i, m, w, R, M) {
      {
        var T = re(a);
        if (!T) {
          var O = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = pr();
          U ? O += U : O += _t();
          var L;
          a === null ? L = "null" : Xe(a) ? L = "array" : a !== void 0 && a.$$typeof === r ? (L = "<" + (V(a.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : L = typeof a, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, O);
        }
        var q = gr(a, i, m, R, M);
        if (q == null)
          return q;
        if (T) {
          var Q = i.children;
          if (Q !== void 0)
            if (w)
              if (Xe(Q)) {
                for (var Te = 0; Te < Q.length; Te++)
                  Ot(Q[Te], a);
                Object.freeze && Object.freeze(Q);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(Q, a);
        }
        if (Re.call(i, "key")) {
          var ye = V(a), z = Object.keys(i).filter(function(Or) {
            return Or !== "key";
          }), tt = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tt[ye + tt]) {
            var Er = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tt, ye, Er, ye), Tt[ye + tt] = !0;
          }
        }
        return a === o ? br(q) : yr(q), q;
      }
    }
    function wr(a, i, m) {
      return jt(a, i, m, !0);
    }
    function xr(a, i, m) {
      return jt(a, i, m, !1);
    }
    var _r = xr, Sr = wr;
    De.Fragment = o, De.jsx = _r, De.jsxs = Sr;
  }(), De;
}
var Cr = {};
Cr.NODE_ENV === "production" ? ct.exports = Rr() : ct.exports = Pr();
var f = ct.exports, ut, Dr = {}, qe = jr;
if (Dr.NODE_ENV === "production")
  ut = qe.createRoot, qe.hydrateRoot;
else {
  var Dt = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ut = function(e, t) {
    Dt.usingClientEntryPoint = !0;
    try {
      return qe.createRoot(e, t);
    } finally {
      Dt.usingClientEntryPoint = !1;
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
const Nr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), oe = (e, t) => {
  const r = Tr(
    ({
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: u,
      className: h = "",
      children: d,
      ...v
    }, g) => kt(
      "svg",
      {
        ref: g,
        ...Mr,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: u ? Number(s) * 24 / Number(o) : s,
        className: ["lucide", `lucide-${Nr(e)}`, h].join(" "),
        ...v
      },
      [
        ...t.map(([c, y]) => kt(c, y)),
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
const Ir = oe("Archive", [
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
const Ar = oe("Hourglass", [
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
const Wr = oe("MessageSquarePlus", [
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
const Lr = oe("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = oe("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = oe("RefreshCw", [
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
const qr = oe("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = oe("ThumbsDown", [
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
const Vr = oe("ThumbsUp", [
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
const Hr = oe("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]), Ur = `${window.location.origin}/api/supabase`;
class Br {
  async fetchApi(t, r) {
    try {
      const n = await fetch(Ur, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: t, payload: r })
      });
      if (!n.ok)
        throw new Error(`HTTP error! status: ${n.status}`);
      return await n.json();
    } catch (n) {
      return console.error("API request failed:", n), { data: null, error: n instanceof Error ? n.message : "Unknown error" };
    }
  }
  from(t) {
    return {
      select: async (r) => this.fetchApi("select", { table: t, query: r }),
      insert: async (r) => this.fetchApi("insert", { table: t, data: r }),
      update: async (r, n) => this.fetchApi("update", { table: t, data: r, match: n }),
      eq: async (r, n) => this.fetchApi("select", {
        table: t,
        query: "*",
        filters: { type: "eq", column: r, value: n }
      }),
      single: async () => this.fetchApi("select", {
        table: t,
        query: "*",
        single: !0
      })
    };
  }
}
const A = new Br();
function te(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function we(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Xt = 6048e5, zr = 864e5;
let Gr = {};
function Be() {
  return Gr;
}
function Ie(e, t) {
  var h, d, v, g;
  const r = Be(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((g = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = te(e), s = o.getDay(), u = (s < n ? 7 : 0) + s - n;
  return o.setDate(o.getDate() - u), o.setHours(0, 0, 0, 0), o;
}
function Ue(e) {
  return Ie(e, { weekStartsOn: 1 });
}
function Kt(e) {
  const t = te(e), r = t.getFullYear(), n = we(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = Ue(n), s = we(e, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const u = Ue(s);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= u.getTime() ? r : r - 1;
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
function Jr(e, t) {
  const r = Mt(e), n = Mt(t), o = +r - Nt(r), s = +n - Nt(n);
  return Math.round((o - s) / zr);
}
function Xr(e) {
  const t = Kt(e), r = we(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Ue(r);
}
function Kr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qr(e) {
  if (!Kr(e) && typeof e != "number")
    return !1;
  const t = te(e);
  return !isNaN(Number(t));
}
function Zr(e) {
  const t = te(e), r = we(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const en = {
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
}, tn = (e, t, r) => {
  let n;
  const o = en[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function rt(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const rn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, nn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, an = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, on = {
  date: rt({
    formats: rn,
    defaultWidth: "full"
  }),
  time: rt({
    formats: nn,
    defaultWidth: "full"
  }),
  dateTime: rt({
    formats: an,
    defaultWidth: "full"
  })
}, sn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, cn = (e, t, r, n) => sn[e];
function Me(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const u = e.defaultFormattingWidth || e.defaultWidth, h = r != null && r.width ? String(r.width) : u;
      o = e.formattingValues[h] || e.formattingValues[u];
    } else {
      const u = e.defaultWidth, h = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[h] || e.values[u];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const un = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ln = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, dn = {
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
}, fn = {
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
}, hn = {
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
}, mn = {
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
}, gn = (e, t) => {
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
}, pn = {
  ordinalNumber: gn,
  era: Me({
    values: un,
    defaultWidth: "wide"
  }),
  quarter: Me({
    values: ln,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Me({
    values: dn,
    defaultWidth: "wide"
  }),
  day: Me({
    values: fn,
    defaultWidth: "wide"
  }),
  dayPeriod: Me({
    values: hn,
    defaultWidth: "wide",
    formattingValues: mn,
    defaultFormattingWidth: "wide"
  })
};
function Ne(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const u = s[0], h = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(h) ? yn(h, (c) => c.test(u)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      vn(h, (c) => c.test(u))
    );
    let v;
    v = e.valueCallback ? e.valueCallback(d) : d, v = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(v)
    ) : v;
    const g = t.slice(u.length);
    return { value: v, rest: g };
  };
}
function vn(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function yn(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function bn(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let u = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    u = r.valueCallback ? r.valueCallback(u) : u;
    const h = t.slice(o.length);
    return { value: u, rest: h };
  };
}
const wn = /^(\d+)(th|st|nd|rd)?/i, xn = /\d+/i, _n = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Sn = {
  any: [/^b/i, /^(a|c)/i]
}, En = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, On = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Tn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, jn = {
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
}, kn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Rn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Pn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Cn = {
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
}, Dn = {
  ordinalNumber: bn({
    matchPattern: wn,
    parsePattern: xn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ne({
    matchPatterns: _n,
    defaultMatchWidth: "wide",
    parsePatterns: Sn,
    defaultParseWidth: "any"
  }),
  quarter: Ne({
    matchPatterns: En,
    defaultMatchWidth: "wide",
    parsePatterns: On,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ne({
    matchPatterns: Tn,
    defaultMatchWidth: "wide",
    parsePatterns: jn,
    defaultParseWidth: "any"
  }),
  day: Ne({
    matchPatterns: kn,
    defaultMatchWidth: "wide",
    parsePatterns: Rn,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ne({
    matchPatterns: Pn,
    defaultMatchWidth: "any",
    parsePatterns: Cn,
    defaultParseWidth: "any"
  })
}, Mn = {
  code: "en-US",
  formatDistance: tn,
  formatLong: on,
  formatRelative: cn,
  localize: pn,
  match: Dn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Nn(e) {
  const t = te(e);
  return Jr(t, Zr(t)) + 1;
}
function In(e) {
  const t = te(e), r = +Ue(t) - +Xr(t);
  return Math.round(r / Xt) + 1;
}
function Qt(e, t) {
  var g, c, y, x;
  const r = te(e), n = r.getFullYear(), o = Be(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (g = t == null ? void 0 : t.locale) == null ? void 0 : g.options) == null ? void 0 : c.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((x = (y = o.locale) == null ? void 0 : y.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, u = we(e, 0);
  u.setFullYear(n + 1, 0, s), u.setHours(0, 0, 0, 0);
  const h = Ie(u, t), d = we(e, 0);
  d.setFullYear(n, 0, s), d.setHours(0, 0, 0, 0);
  const v = Ie(d, t);
  return r.getTime() >= h.getTime() ? n + 1 : r.getTime() >= v.getTime() ? n : n - 1;
}
function An(e, t) {
  var h, d, v, g;
  const r = Be(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = Qt(e, t), s = we(e, 0);
  return s.setFullYear(o, 0, n), s.setHours(0, 0, 0, 0), Ie(s, t);
}
function Wn(e, t) {
  const r = te(e), n = +Ie(r, t) - +An(r, t);
  return Math.round(n / Xt) + 1;
}
function C(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const fe = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return C(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : C(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return C(e.getDate(), t.length);
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
    return C(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return C(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return C(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return C(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return C(o, t.length);
  }
}, je = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, It = {
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
    return fe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Qt(e, n), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const u = s % 100;
      return C(u, 2);
    }
    return t === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : C(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Kt(e);
    return C(r, t.length);
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
    return C(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return C(n, 2);
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
        return C(n, 2);
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
        return fe.M(e, t);
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
        return C(n + 1, 2);
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
    const o = Wn(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : C(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = In(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : C(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : fe.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Nn(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : C(n, t.length);
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
        return C(s, 2);
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
        return C(s, t.length);
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
        return C(o, t.length);
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
    switch (n === 12 ? o = je.noon : n === 0 ? o = je.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = je.evening : n >= 12 ? o = je.afternoon : n >= 4 ? o = je.morning : o = je.night, t) {
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
    return fe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : fe.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : C(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : C(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : fe.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : fe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return fe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Wt(n);
      case "XXXX":
      case "XX":
        return be(n);
      case "XXXXX":
      case "XXX":
      default:
        return be(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Wt(n);
      case "xxxx":
      case "xx":
        return be(n);
      case "xxxxx":
      case "xxx":
      default:
        return be(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + At(n, ":");
      case "OOOO":
      default:
        return "GMT" + be(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + At(n, ":");
      case "zzzz":
      default:
        return "GMT" + be(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return C(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return C(n, t.length);
  }
};
function At(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? r + String(o) : r + String(o) + t + C(s, 2);
}
function Wt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + C(Math.abs(e) / 60, 2) : be(e, t);
}
function be(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = C(Math.trunc(n / 60), 2), s = C(n % 60, 2);
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
}, Ln = (e, t) => {
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
}, Fn = {
  p: Zt,
  P: Ln
}, Yn = /^D+$/, qn = /^Y+$/, $n = ["D", "DD", "YY", "YYYY"];
function Vn(e) {
  return Yn.test(e);
}
function Hn(e) {
  return qn.test(e);
}
function Un(e, t, r) {
  const n = Bn(e, t, r);
  if (console.warn(n), $n.includes(e)) throw new RangeError(n);
}
function Bn(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const zn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Jn = /^'([^]*?)'?$/, Xn = /''/g, Kn = /[a-zA-Z]/;
function $e(e, t, r) {
  var g, c, y, x;
  const n = Be(), o = n.locale ?? Mn, s = n.firstWeekContainsDate ?? ((c = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, u = n.weekStartsOn ?? ((x = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : x.weekStartsOn) ?? 0, h = te(e);
  if (!Qr(h))
    throw new RangeError("Invalid time value");
  let d = t.match(Gn).map((_) => {
    const b = _[0];
    if (b === "p" || b === "P") {
      const W = Fn[b];
      return W(_, o.formatLong);
    }
    return _;
  }).join("").match(zn).map((_) => {
    if (_ === "''")
      return { isToken: !1, value: "'" };
    const b = _[0];
    if (b === "'")
      return { isToken: !1, value: Qn(_) };
    if (It[b])
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
    weekStartsOn: u,
    locale: o
  };
  return d.map((_) => {
    if (!_.isToken) return _.value;
    const b = _.value;
    (Hn(b) || Vn(b)) && Un(b, t, String(e));
    const W = It[b[0]];
    return W(h, b, o.localize, v);
  }).join("");
}
function Qn(e) {
  const t = e.match(Jn);
  return t ? t[1].replace(Xn, "'") : e;
}
const Zn = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", VITE_SUPABASE_URL: "https://zozodfjzxzlwzkhmfhwh.supabase.co" }, Ft = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (g, c) => {
    const y = typeof g == "function" ? g(t) : g;
    if (!Object.is(y, t)) {
      const x = t;
      t = c ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), r.forEach((_) => _(t, x));
    }
  }, o = () => t, d = { setState: n, getState: o, getInitialState: () => v, subscribe: (g) => (r.add(g), () => r.delete(g)), destroy: () => {
    (Zn ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, v = t = e(n, o, d);
  return d;
}, ea = (e) => e ? Ft(e) : Ft;
var lt = { exports: {} }, nt = {}, Ve = { exports: {} }, at = {};
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
function ta() {
  if (Yt) return at;
  Yt = 1;
  var e = xe;
  function t(c, y) {
    return c === y && (c !== 0 || 1 / c === 1 / y) || c !== c && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function h(c, y) {
    var x = y(), _ = n({ inst: { value: x, getSnapshot: y } }), b = _[0].inst, W = _[1];
    return s(function() {
      b.value = x, b.getSnapshot = y, d(b) && W({ inst: b });
    }, [c, x, y]), o(function() {
      return d(b) && W({ inst: b }), c(function() {
        d(b) && W({ inst: b });
      });
    }, [c]), u(x), x;
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
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? v : h;
  return at.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, at;
}
var ot = {}, qt;
function ra() {
  if (qt) return ot;
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
    var t = xe, r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(P) {
      {
        for (var E = arguments.length, k = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
          k[j - 1] = arguments[j];
        o("error", P, k);
      }
    }
    function o(P, E, k) {
      {
        var j = r.ReactDebugCurrentFrame, $ = j.getStackAddendum();
        $ !== "" && (E += "%s", k = k.concat([$]));
        var K = k.map(function(Y) {
          return String(Y);
        });
        K.unshift("Warning: " + E), Function.prototype.apply.call(console[P], console, K);
      }
    }
    function s(P, E) {
      return P === E && (P !== 0 || 1 / P === 1 / E) || P !== P && E !== E;
    }
    var u = typeof Object.is == "function" ? Object.is : s, h = t.useState, d = t.useEffect, v = t.useLayoutEffect, g = t.useDebugValue, c = !1, y = !1;
    function x(P, E, k) {
      c || t.startTransition !== void 0 && (c = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var j = E();
      if (!y) {
        var $ = E();
        u(j, $) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), y = !0);
      }
      var K = h({
        inst: {
          value: j,
          getSnapshot: E
        }
      }), Y = K[0].inst, re = K[1];
      return v(function() {
        Y.value = j, Y.getSnapshot = E, _(Y) && re({
          inst: Y
        });
      }, [P, j, E]), d(function() {
        _(Y) && re({
          inst: Y
        });
        var ge = function() {
          _(Y) && re({
            inst: Y
          });
        };
        return P(ge);
      }, [P]), g(j), j;
    }
    function _(P) {
      var E = P.getSnapshot, k = P.value;
      try {
        var j = E();
        return !u(k, j);
      } catch {
        return !0;
      }
    }
    function b(P, E, k) {
      return E();
    }
    var W = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", F = !W, D = F ? b : x, N = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : D;
    ot.useSyncExternalStore = N, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ot;
}
var $t;
function er() {
  if ($t) return Ve.exports;
  $t = 1;
  var e = {};
  return e.NODE_ENV === "production" ? Ve.exports = ta() : Ve.exports = ra(), Ve.exports;
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
function na() {
  if (Vt) return nt;
  Vt = 1;
  var e = xe, t = er();
  function r(v, g) {
    return v === g && (v !== 0 || 1 / v === 1 / g) || v !== v && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, h = e.useMemo, d = e.useDebugValue;
  return nt.useSyncExternalStoreWithSelector = function(v, g, c, y, x) {
    var _ = s(null);
    if (_.current === null) {
      var b = { hasValue: !1, value: null };
      _.current = b;
    } else b = _.current;
    _ = h(function() {
      function F(k) {
        if (!D) {
          if (D = !0, N = k, k = y(k), x !== void 0 && b.hasValue) {
            var j = b.value;
            if (x(j, k)) return P = j;
          }
          return P = k;
        }
        if (j = P, n(N, k)) return j;
        var $ = y(k);
        return x !== void 0 && x(j, $) ? j : (N = k, P = $);
      }
      var D = !1, N, P, E = c === void 0 ? null : c;
      return [function() {
        return F(g());
      }, E === null ? void 0 : function() {
        return F(E());
      }];
    }, [g, c, y, x]);
    var W = o(v, _[0], _[1]);
    return u(function() {
      b.hasValue = !0, b.value = W;
    }, [W]), d(W), W;
  }, nt;
}
var st = {}, Ht;
function aa() {
  if (Ht) return st;
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
    var t = xe, r = er();
    function n(c, y) {
      return c === y && (c !== 0 || 1 / c === 1 / y) || c !== c && y !== y;
    }
    var o = typeof Object.is == "function" ? Object.is : n, s = r.useSyncExternalStore, u = t.useRef, h = t.useEffect, d = t.useMemo, v = t.useDebugValue;
    function g(c, y, x, _, b) {
      var W = u(null), F;
      W.current === null ? (F = {
        hasValue: !1,
        value: null
      }, W.current = F) : F = W.current;
      var D = d(function() {
        var k = !1, j, $, K = function(ne) {
          if (!k) {
            k = !0, j = ne;
            var V = _(ne);
            if (b !== void 0 && F.hasValue) {
              var J = F.value;
              if (b(J, V))
                return $ = J, J;
            }
            return $ = V, V;
          }
          var ae = j, ue = $;
          if (o(ae, ne))
            return ue;
          var le = _(ne);
          return b !== void 0 && b(ue, le) ? ue : (j = ne, $ = le, le);
        }, Y = x === void 0 ? null : x, re = function() {
          return K(y());
        }, ge = Y === null ? void 0 : function() {
          return K(Y());
        };
        return [re, ge];
      }, [y, x, _, b]), N = D[0], P = D[1], E = s(c, N, P);
      return h(function() {
        F.hasValue = !0, F.value = E;
      }, [E]), v(E), E;
    }
    st.useSyncExternalStoreWithSelector = g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), st;
}
var oa = {};
oa.NODE_ENV === "production" ? lt.exports = na() : lt.exports = aa();
var sa = lt.exports;
const ia = /* @__PURE__ */ kr(sa), tr = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", VITE_SUPABASE_URL: "https://zozodfjzxzlwzkhmfhwh.supabase.co" }, { useDebugValue: ca } = xe, { useSyncExternalStoreWithSelector: ua } = ia;
let Ut = !1;
const la = (e) => e;
function da(e, t = la, r) {
  (tr ? "production" : void 0) !== "production" && r && !Ut && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ut = !0);
  const n = ua(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return ca(n), n;
}
const Bt = (e) => {
  (tr ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? ea(e) : e, r = (n, o) => da(t, n, o);
  return Object.assign(r, t), r;
}, fa = (e) => e ? Bt(e) : Bt;
let ha = { data: "" }, ma = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || ha, ga = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, pa = /\/\*[^]*?\*\/|  +/g, zt = /\n+/g, he = (e, t) => {
  let r = "", n = "", o = "";
  for (let s in e) {
    let u = e[s];
    s[0] == "@" ? s[1] == "i" ? r = s + " " + u + ";" : n += s[1] == "f" ? he(u, s) : s + "{" + he(u, s[1] == "k" ? "" : t) + "}" : typeof u == "object" ? n += he(u, t ? t.replace(/([^,])+/g, (h) => s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (d) => /&/.test(d) ? d.replace(/&/g, h) : h ? h + " " + d : d)) : s) : u != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += he.p ? he.p(s, u) : s + ":" + u + ";");
  }
  return r + (t && o ? t + "{" + o + "}" : o) + n;
}, ie = {}, rr = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e) t += r + rr(e[r]);
    return t;
  }
  return e;
}, va = (e, t, r, n, o) => {
  let s = rr(e), u = ie[s] || (ie[s] = ((d) => {
    let v = 0, g = 11;
    for (; v < d.length; ) g = 101 * g + d.charCodeAt(v++) >>> 0;
    return "go" + g;
  })(s));
  if (!ie[u]) {
    let d = s !== e ? e : ((v) => {
      let g, c, y = [{}];
      for (; g = ga.exec(v.replace(pa, "")); ) g[4] ? y.shift() : g[3] ? (c = g[3].replace(zt, " ").trim(), y.unshift(y[0][c] = y[0][c] || {})) : y[0][g[1]] = g[2].replace(zt, " ").trim();
      return y[0];
    })(e);
    ie[u] = he(o ? { ["@keyframes " + u]: d } : d, r ? "" : "." + u);
  }
  let h = r && ie.g ? ie.g : null;
  return r && (ie.g = ie[u]), ((d, v, g, c) => {
    c ? v.data = v.data.replace(c, d) : v.data.indexOf(d) === -1 && (v.data = g ? d + v.data : v.data + d);
  })(ie[u], t, n, h), u;
}, ya = (e, t, r) => e.reduce((n, o, s) => {
  let u = t[s];
  if (u && u.call) {
    let h = u(r), d = h && h.props && h.props.className || /^go/.test(h) && h;
    u = d ? "." + d : h && typeof h == "object" ? h.props ? "" : he(h, "") : h === !1 ? "" : h;
  }
  return n + o + (u ?? "");
}, "");
function ze(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return va(r.unshift ? r.raw ? ya(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {}) : r, ma(t.target), t.g, t.o, t.k);
}
let nr, dt, ft;
ze.bind({ g: 1 });
let ce = ze.bind({ k: 1 });
function ba(e, t, r, n) {
  he.p = t, nr = e, dt = r, ft = n;
}
function me(e, t) {
  let r = this || {};
  return function() {
    let n = arguments;
    function o(s, u) {
      let h = Object.assign({}, s), d = h.className || o.className;
      r.p = Object.assign({ theme: dt && dt() }, h), r.o = / *go\d+/.test(d), h.className = ze.apply(r, n) + (d ? " " + d : "");
      let v = e;
      return e[0] && (v = h.as || e, delete h.as), ft && v[0] && ft(h), nr(v, h);
    }
    return o;
  };
}
var wa = (e) => typeof e == "function", ht = (e, t) => wa(e) ? e(t) : e, xa = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), _a = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), Sa = 20, He = /* @__PURE__ */ new Map(), Ea = 1e3, Gt = (e) => {
  if (He.has(e)) return;
  let t = setTimeout(() => {
    He.delete(e), Ge({ type: 4, toastId: e });
  }, Ea);
  He.set(e, t);
}, Oa = (e) => {
  let t = He.get(e);
  t && clearTimeout(t);
}, mt = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Sa) };
    case 1:
      return t.toast.id && Oa(t.toast.id), { ...e, toasts: e.toasts.map((s) => s.id === t.toast.id ? { ...s, ...t.toast } : s) };
    case 2:
      let { toast: r } = t;
      return e.toasts.find((s) => s.id === r.id) ? mt(e, { type: 1, toast: r }) : mt(e, { type: 0, toast: r });
    case 3:
      let { toastId: n } = t;
      return n ? Gt(n) : e.toasts.forEach((s) => {
        Gt(s.id);
      }), { ...e, toasts: e.toasts.map((s) => s.id === n || n === void 0 ? { ...s, visible: !1 } : s) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let o = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((s) => ({ ...s, pauseDuration: s.pauseDuration + o })) };
  }
}, Ta = [], it = { toasts: [], pausedAt: void 0 }, Ge = (e) => {
  it = mt(it, e), Ta.forEach((t) => {
    t(it);
  });
}, ja = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || xa() }), Ae = (e) => (t, r) => {
  let n = ja(t, e, r);
  return Ge({ type: 2, toast: n }), n.id;
}, Z = (e, t) => Ae("blank")(e, t);
Z.error = Ae("error");
Z.success = Ae("success");
Z.loading = Ae("loading");
Z.custom = Ae("custom");
Z.dismiss = (e) => {
  Ge({ type: 3, toastId: e });
};
Z.remove = (e) => Ge({ type: 4, toastId: e });
Z.promise = (e, t, r) => {
  let n = Z.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return e.then((o) => (Z.success(ht(t.success, o), { id: n, ...r, ...r == null ? void 0 : r.success }), o)).catch((o) => {
    Z.error(ht(t.error, o), { id: n, ...r, ...r == null ? void 0 : r.error });
  }), e;
};
var ka = ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Ra = ce`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Pa = ce`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, Ca = me("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ka} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${Pa} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Da = ce`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Ma = me("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Da} 1s linear infinite;
`, Na = ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Ia = ce`
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
}`, Aa = me("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Na} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ia} 0.2s ease-out forwards;
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
`, Wa = me("div")`
  position: absolute;
`, La = me("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Fa = ce`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ya = me("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fa} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, qa = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: n } = e;
  return t !== void 0 ? typeof t == "string" ? X.createElement(Ya, null, t) : t : r === "blank" ? null : X.createElement(La, null, X.createElement(Ma, { ...n }), r !== "loading" && X.createElement(Wa, null, r === "error" ? X.createElement(Ca, { ...n }) : X.createElement(Aa, { ...n })));
}, $a = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Va = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Ha = "0%{opacity:0;} 100%{opacity:1;}", Ua = "0%{opacity:1;} 100%{opacity:0;}", Ba = me("div")`
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
`, za = me("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ga = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [n, o] = _a() ? [Ha, Ua] : [$a(r), Va(r)];
  return { animation: t ? `${ce(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ce(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
X.memo(({ toast: e, position: t, style: r, children: n }) => {
  let o = e.height ? Ga(e.position || t || "top-center", e.visible) : { opacity: 0 }, s = X.createElement(qa, { toast: e }), u = X.createElement(za, { ...e.ariaProps }, ht(e.message, e));
  return X.createElement(Ba, { className: e.className, style: { ...o, ...r, ...e.style } }, typeof n == "function" ? n({ icon: s, message: u }) : X.createElement(X.Fragment, null, s, u));
});
ba(X.createElement);
ze`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
const Ja = async (e, t) => {
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
}, Xa = fa((e, t) => ({
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
      }, { error: s } = await A.from("messages").insert(o);
      if (s) throw s;
      const { data: u, error: h } = await A.from("conversations").select("live_mode").eq("id", n).single();
      if (h) throw h;
      if (u.live_mode)
        console.log("Live mode enabled, skipping OpenAI response");
      else {
        console.log("Live mode disabled, generating OpenAI response");
        try {
          const v = await Ja(r, n);
          console.log("Got OpenAI response:", v);
          const g = {
            conversation_id: n,
            content: v,
            sender_type: "bot",
            user_id: null
          }, { error: c } = await A.from("messages").insert(g);
          if (c) throw c;
        } catch (v) {
          console.error("Error generating bot response:", v), Z.error("Failed to generate bot response");
        }
      }
      const { error: d } = await A.from("conversations").update({ last_message_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", n);
      if (d) throw d;
    } catch (o) {
      console.error("Error sending message:", o), e({ error: o.message }), Z.error("Failed to send message");
    } finally {
      e({ isLoading: !1 });
    }
  }
})), Jt = "chatbot_session_id", Ka = 180;
function Qa({ domainId: e }) {
  const [t, r] = G(!1), [n, o] = G(""), [s, u] = G([]), [h, d] = G([]), [v, g] = G("history"), [c, y] = G(null), [x, _] = G(!1), [b] = G(/* @__PURE__ */ new Set()), [W, F] = G(null), [D, N] = G(null), P = Rt(null), [E, k] = G(!1), j = Rt(null), { sendMessage: $ } = Xa(), [K, Y] = G(!1), re = (l, p) => p.some(
    (S) => (
      // Check for exact ID match
      S.id === l.id || // Check for temp ID being replaced by real ID
      S.id.startsWith("temp-") && S.content === l.content && S.sender_type === l.sender_type || // Check for exact content match within a small time window (2 seconds)
      S.content === l.content && S.sender_type === l.sender_type && Math.abs(new Date(S.created_at).getTime() - new Date(l.created_at).getTime()) < 2e3
    )
  );
  se(() => {
    if (!D) return;
    const l = A.channel("new-conversations").on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${D}`
      },
      (p) => {
        if (p.eventType === "INSERT") {
          const S = p.new;
          d((I) => [S, ...I]);
        }
      }
    ).subscribe();
    return () => {
      l.unsubscribe();
    };
  }, [D]), se(() => {
    if (!D) return;
    const l = A.channel("conversations-updates").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${D}`
      },
      (p) => {
        p.eventType === "UPDATE" && (d(
          (S) => S.map(
            (I) => I.id === p.new.id ? { ...I, ...p.new } : I
          )
        ), p.new.id === c && k(p.new.status === "archived"));
      }
    ).subscribe();
    return () => {
      l.unsubscribe();
    };
  }, [D, c]), se(() => {
    var l;
    t && (s.length > 0 || E) && ((l = P.current) == null || l.scrollIntoView({ behavior: "smooth" }));
  }, [s, t, E]);
  const ge = async () => {
    if (D)
      try {
        const { data: l, error: p } = await A.from("conversations").select("*").eq("session_id", D).order("last_message_at", { ascending: !1 });
        if (p) throw p;
        d(l || []);
      } catch (l) {
        console.error("Error loading conversation history:", l);
      }
  };
  se(() => {
    D && ge();
  }, [D]);
  const ne = async () => {
    u([]), y(null), k(!1), Ee(null), Y(!1), g("chat");
  }, V = () => {
    g("history"), u([]), y(null), k(!1);
  }, J = async (l) => {
    try {
      y(l.id), k(l.status === "archived"), Ee(null), Y(!1);
      const { data: p } = await A.from("messages").select("*").eq("conversation_id", l.id).order("created_at", { ascending: !0 });
      p && (u(p), b.clear(), p.forEach((S) => b.add(S.id))), l.status === "archived" && Ee(l.rating || null), g("chat");
    } catch (p) {
      console.error("Error loading conversation:", p);
    }
  };
  se(() => {
    if (!c) return;
    const l = A.channel(`conversation-status:${c}`).on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "conversations",
        filter: `id=eq.${c}`
      },
      (p) => {
        p.new.status === "archived" ? (k(!0), ae()) : k(!1);
      }
    ).subscribe();
    return () => {
      l.unsubscribe();
    };
  }, [c]), se(() => {
    j.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3");
  }, []);
  const ae = () => {
    j.current && (j.current.currentTime = 0, j.current.play().catch((l) => {
      console.log("Error playing notification:", l);
    }));
  };
  se(() => {
    if (!c) {
      console.log("No conversation ID yet, skipping subscription");
      return;
    }
    console.log("Setting up subscription for conversation:", c);
    const l = A.channel(`messages-${c}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${c}`
      },
      (p) => {
        if (console.log("Received real-time event:", p), p.eventType === "INSERT") {
          const S = p.new;
          console.log("New message:", S), u((I) => {
            if (re(S, I))
              return console.log("Message already exists, skipping"), I;
            const B = I.filter(
              (ee) => !(ee.id.startsWith("temp-") && ee.content === S.content && ee.sender_type === S.sender_type)
            );
            return b.add(S.id), S.sender_type === "bot" && ae(), console.log("Adding new message to state"), [...B, S];
          });
        }
      }
    );
    return l.subscribe((p) => {
      console.log("Subscription status:", p);
    }), () => {
      console.log("Cleaning up subscription for conversation:", c), l.unsubscribe();
    };
  }, [c, t]), se(() => {
    (async () => {
      let p = localStorage.getItem(Jt);
      p || (p = window.crypto.randomUUID(), localStorage.setItem(Jt, p)), N(p), await ue(p);
    })();
  }, []);
  const ue = async (l) => {
    try {
      const { data: p, error: S } = await A.from("conversations").select("*").eq("session_id", l).eq("status", "active").order("last_message_at", { ascending: !1 }).limit(1);
      if (S) throw S;
      if (!p || p.length === 0) {
        console.log("No active conversations found for this session");
        return;
      }
      const I = p[0], B = /* @__PURE__ */ new Date();
      if (B.setDate(B.getDate() - Ka), new Date(I.last_message_at) < B) {
        await A.from("conversations").update({ status: "archived" }).eq("id", I.id);
        return;
      }
      y(I.id);
      const { data: ee } = await A.from("messages").select("*").eq("conversation_id", I.id).order("created_at", { ascending: !0 });
      if (ee) {
        const Je = ee.filter((ve) => b.has(ve.id) ? !1 : (b.add(ve.id), !0));
        u(Je);
      }
    } catch (p) {
      p instanceof Error && !p.message.includes("no rows returned") && (console.error("Error loading existing conversation:", p), F("Failed to load conversation history"));
    }
  }, le = async () => {
    try {
      const { data: { user: l } } = await A.auth.getUser();
      if (!l) {
        await A.auth.signInAnonymously();
        const { data: { user: I } } = await A.auth.getUser();
        if (!I) throw new Error("Failed to create anonymous session");
        const { data: B, error: ee } = await A.from("conversations").insert({
          domain_id: e,
          user_id: I.id,
          session_id: D,
          last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
          status: "active"
        }).select().single();
        if (ee) throw ee;
        return B.id;
      }
      const { data: p, error: S } = await A.from("conversations").insert({
        domain_id: e,
        user_id: l.id,
        session_id: D,
        last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).select().single();
      if (S) throw S;
      return p.id;
    } catch (l) {
      throw console.error("Error creating conversation:", l), l;
    }
  }, We = async (l) => {
    try {
      _(!0), F(null);
      const { data: { user: p } } = await A.auth.getUser();
      p || await A.auth.signInAnonymously();
      const S = c || await le();
      c || y(S);
      const I = {
        id: `temp-${Date.now()}`,
        content: l,
        sender_type: "user",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      u((B) => re(I, B) ? B : [...B, I]), await $(l, S), o("");
    } catch (p) {
      console.error("Error sending message:", p), F("Failed to send message. Please try again.");
    } finally {
      _(!1);
    }
  }, Le = async (l) => {
    l.preventDefault(), !(!n.trim() || x) && await We(n.trim());
  };
  se(() => {
    e && (async () => {
      try {
        const { data: p } = await A.from("domain_settings").select("*").eq("domain_id", e).single();
        _e(p ? {
          chatbotName: p.chatbot_name,
          greetingMessage: p.greeting_message || "Hello! How can I help you today?",
          color: p.primary_color || "#FF6B00",
          headerTextColor: p.header_text_color || "#000000"
        } : {
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      } catch (p) {
        console.error("Error fetching chatbot config:", p), _e({
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      }
    })();
  }, [e]);
  const [H, _e] = G({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  }), Se = {
    backgroundColor: H.color
  }, Fe = async () => {
    if (c)
      try {
        u([]), b.clear();
        const { data: l } = await A.from("messages").select("*").eq("conversation_id", c).order("created_at", { ascending: !0 });
        l && (u(l), l.forEach((p) => b.add(p.id)));
      } catch (l) {
        console.error("Error refreshing chat:", l), F("Failed to refresh chat");
      }
  }, [de, Ee] = G(null), pe = async (l) => {
    if (c)
      try {
        const { error: p } = await A.from("conversations").update({ rating: l }).eq("id", c);
        if (p) throw p;
        Ee(l), d(
          (S) => S.map(
            (I) => I.id === c ? { ...I, rating: l } : I
          )
        );
      } catch (p) {
        console.error("Error rating conversation:", p);
      }
  }, ke = async () => {
    if (c)
      try {
        const { error: l } = await A.from("conversations").update({
          requested_live_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", c);
        if (l) throw l;
        Y(!0);
        const p = {
          id: `temp-${Date.now()}`,
          content: "I'll connect you with a live agent. Please wait a moment while I transfer your chat.",
          sender_type: "bot",
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        u((S) => [...S, p]);
      } catch (l) {
        console.error("Error requesting live chat:", l), F("Failed to request live chat. Please try again.");
      }
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    t && /* @__PURE__ */ f.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: H.color }, children: [
        /* @__PURE__ */ f.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ f.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ f.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ f.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: Se })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ f.jsx("h3", { className: "font-medium", style: { color: H.headerTextColor }, children: H.chatbotName }),
          /* @__PURE__ */ f.jsxs("p", { className: "text-sm", style: { color: H.headerTextColor }, children: [
            "from ",
            H.chatbotName
          ] })
        ] }),
        v === "chat" && /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
          K ? /* @__PURE__ */ f.jsx(
            "div",
            {
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              title: "Waiting for agent",
              children: /* @__PURE__ */ f.jsx(Ar, { className: "h-4 w-4" })
            }
          ) : /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: ke,
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
              onClick: Fe,
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
                /* @__PURE__ */ f.jsx(Wr, { className: "h-4 w-4" }),
                "Start New Chat"
              ]
            }
          )
        ] }),
        h.map((l) => /* @__PURE__ */ f.jsxs(
          "button",
          {
            onClick: () => J(l),
            className: "w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200",
            children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                /* @__PURE__ */ f.jsx("span", { className: "text-sm font-medium text-gray-900", children: $e(new Date(l.created_at), "PPP") }),
                /* @__PURE__ */ f.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${l.status === "archived" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600"}`, children: l.status === "archived" ? "Archived" : "Active" })
              ] }),
              /* @__PURE__ */ f.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Last message: ",
                $e(new Date(l.last_message_at), "p")
              ] })
            ]
          },
          l.id
        )),
        h.length === 0 && /* @__PURE__ */ f.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ f.jsx("p", { className: "mb-4", children: "No previous conversations found" }) })
      ] }) : /* @__PURE__ */ f.jsxs("div", { className: "space-y-4", children: [
        v === "chat" && /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
          /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm max-w-[80%]", children: [
            /* @__PURE__ */ f.jsx("p", { className: "text-sm", children: H.greetingMessage }),
            /* @__PURE__ */ f.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: $e(/* @__PURE__ */ new Date(), "h:mm a") })
          ] })
        ] }),
        s.map((l) => /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: `flex gap-2 ${l.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              l.sender_type === "bot" && /* @__PURE__ */ f.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ f.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg max-w-[80%] ${l.sender_type === "user" ? "bg-orange-500 text-white ml-auto" : "bg-white shadow-sm"}`,
                  children: [
                    /* @__PURE__ */ f.jsx("p", { className: "text-sm", children: l.content }),
                    /* @__PURE__ */ f.jsx("span", { className: `text-xs mt-1 block ${l.sender_type === "user" ? "text-orange-100" : "text-gray-500"}`, children: $e(new Date(l.created_at), "h:mm a") })
                  ]
                }
              ),
              l.sender_type === "user" && /* @__PURE__ */ f.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          l.id
        )),
        E && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-3 my-4", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ f.jsx(Ir, { className: "h-4 w-4" }),
            /* @__PURE__ */ f.jsx("span", { className: "text-sm", children: "This conversation has been archived" })
          ] }),
          !de && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ f.jsx("p", { className: "text-sm text-gray-600", children: "How was this conversation?" }),
            /* @__PURE__ */ f.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  onClick: () => pe("bad"),
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
                  onClick: () => pe("ok"),
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
                  onClick: () => pe("good"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors",
                  children: [
                    /* @__PURE__ */ f.jsx(Vr, { className: "h-4 w-4" }),
                    /* @__PURE__ */ f.jsx("span", { children: "Good" })
                  ]
                }
              )
            ] })
          ] }),
          de && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
            /* @__PURE__ */ f.jsx("span", { className: "text-sm text-gray-600", children: "You rated this conversation:" }),
            /* @__PURE__ */ f.jsx("span", { className: `font-medium ${de === "bad" ? "text-red-600" : de === "ok" ? "text-yellow-600" : "text-green-600"}`, children: de === "bad" ? "Bad 👎" : de === "ok" ? "OK 😐" : "Good 👍" })
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("div", { ref: P })
      ] }) }),
      v === "chat" && /* @__PURE__ */ f.jsxs("form", { onSubmit: Le, className: "p-4 border-t bg-white", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              value: n,
              onChange: (l) => o(l.target.value),
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
              style: Se,
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
        style: Se,
        onClick: () => r(!t),
        children: t ? "×" : "💬"
      }
    )
  ] });
}
function Za() {
  const e = document.createElement("div");
  e.id = "chatbot-widget-root", document.body.appendChild(e);
  const t = window.CHATBOT_CONFIG || {};
  ut(e).render(/* @__PURE__ */ f.jsx(Qa, { domainId: t.domainId }));
}
Za();
