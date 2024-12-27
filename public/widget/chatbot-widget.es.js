import * as X from "react";
import xe, { forwardRef as Or, createElement as jt, useState as z, useRef as kt, useEffect as se } from "react";
import Tr from "react-dom";
function jr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var it = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function kr() {
  if (Rt) return Ce;
  Rt = 1;
  var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, d, y) {
    var f, c = {}, v = null, _ = null;
    y !== void 0 && (v = "" + y), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (_ = d.ref);
    for (f in d) n.call(d, f) && !s.hasOwnProperty(f) && (c[f] = d[f]);
    if (m && m.defaultProps) for (f in d = m.defaultProps, d) c[f] === void 0 && (c[f] = d[f]);
    return { $$typeof: t, type: m, key: v, ref: _, props: c, _owner: o.current };
  }
  return Ce.Fragment = r, Ce.jsx = u, Ce.jsxs = u, Ce;
}
var De = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function Rr() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), x = Symbol.iterator, b = "@@iterator";
    function N(a) {
      if (a === null || typeof a != "object")
        return null;
      var i = x && a[x] || a[b];
      return typeof i == "function" ? i : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(a) {
      {
        for (var i = arguments.length, g = new Array(i > 1 ? i - 1 : 0), w = 1; w < i; w++)
          g[w - 1] = arguments[w];
        D("error", a, g);
      }
    }
    function D(a, i, g) {
      {
        var w = F.ReactDebugCurrentFrame, R = w.getStackAddendum();
        R !== "" && (i += "%s", g = g.concat([R]));
        var M = g.map(function(k) {
          return String(k);
        });
        M.unshift("Warning: " + i), Function.prototype.apply.call(console[a], console, M);
      }
    }
    var O = !1, I = !1, S = !1, A = !1, $ = !1, q;
    q = Symbol.for("react.module.reference");
    function Z(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === s || $ || a === o || a === y || a === f || A || a === _ || O || I || S || typeof a == "object" && a !== null && (a.$$typeof === v || a.$$typeof === c || a.$$typeof === u || a.$$typeof === m || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === q || a.getModuleId !== void 0));
    }
    function ue(a, i, g) {
      var w = a.displayName;
      if (w)
        return w;
      var R = i.displayName || i.name || "";
      return R !== "" ? g + "(" + R + ")" : g;
    }
    function re(a) {
      return a.displayName || "Context";
    }
    function V(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case y:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case m:
            var i = a;
            return re(i) + ".Consumer";
          case u:
            var g = a;
            return re(g._context) + ".Provider";
          case d:
            return ue(a, a.render, "ForwardRef");
          case c:
            var w = a.displayName || null;
            return w !== null ? w : V(a.type) || "Memo";
          case v: {
            var R = a, M = R._payload, k = R._init;
            try {
              return V(k(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ae = 0, oe, le, Ae, We, Le, H, _e;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ge() {
      {
        if (ae === 0) {
          oe = console.log, le = console.info, Ae = console.warn, We = console.error, Le = console.group, H = console.groupCollapsed, _e = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
    function de() {
      {
        if (ae--, ae === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, a, {
              value: oe
            }),
            info: G({}, a, {
              value: le
            }),
            warn: G({}, a, {
              value: Ae
            }),
            error: G({}, a, {
              value: We
            }),
            group: G({}, a, {
              value: Le
            }),
            groupCollapsed: G({}, a, {
              value: H
            }),
            groupEnd: G({}, a, {
              value: _e
            })
          });
        }
        ae < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = F.ReactCurrentDispatcher, ye;
    function Ee(a, i, g) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (R) {
            var w = R.stack.trim().match(/\n( *(at )?)/);
            ye = w && w[1] || "";
          }
        return `
` + ye + a;
      }
    }
    var l = !1, p;
    {
      var T = typeof WeakMap == "function" ? WeakMap : Map;
      p = new T();
    }
    function P(a, i) {
      if (!a || l)
        return "";
      {
        var g = p.get(a);
        if (g !== void 0)
          return g;
      }
      var w;
      l = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = fe.current, fe.current = null, Ge();
      try {
        if (i) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (U) {
              w = U;
            }
            Reflect.construct(a, [], k);
          } else {
            try {
              k.call();
            } catch (U) {
              w = U;
            }
            a.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            w = U;
          }
          a();
        }
      } catch (U) {
        if (U && w && typeof U.stack == "string") {
          for (var j = U.stack.split(`
`), B = w.stack.split(`
`), L = j.length - 1, Y = B.length - 1; L >= 1 && Y >= 0 && j[L] !== B[Y]; )
            Y--;
          for (; L >= 1 && Y >= 0; L--, Y--)
            if (j[L] !== B[Y]) {
              if (L !== 1 || Y !== 1)
                do
                  if (L--, Y--, Y < 0 || j[L] !== B[Y]) {
                    var K = `
` + j[L].replace(" at new ", " at ");
                    return a.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", a.displayName)), typeof a == "function" && p.set(a, K), K;
                  }
                while (L >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        l = !1, fe.current = M, de(), Error.prepareStackTrace = R;
      }
      var je = a ? a.displayName || a.name : "", ve = je ? Ee(je) : "";
      return typeof a == "function" && p.set(a, ve), ve;
    }
    function J(a, i, g) {
      return P(a, !1);
    }
    function ee(a) {
      var i = a.prototype;
      return !!(i && i.isReactComponent);
    }
    function Oe(a, i, g) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return P(a, ee(a));
      if (typeof a == "string")
        return Ee(a);
      switch (a) {
        case y:
          return Ee("Suspense");
        case f:
          return Ee("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return J(a.render);
          case c:
            return Oe(a.type, i, g);
          case v: {
            var w = a, R = w._payload, M = w._init;
            try {
              return Oe(M(R), i, g);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, mt = {}, gt = F.ReactDebugCurrentFrame;
    function Fe(a) {
      if (a) {
        var i = a._owner, g = Oe(a.type, a._source, i ? i.type : null);
        gt.setExtraStackFrame(g);
      } else
        gt.setExtraStackFrame(null);
    }
    function nr(a, i, g, w, R) {
      {
        var M = Function.call.bind(he);
        for (var k in a)
          if (M(a, k)) {
            var j = void 0;
            try {
              if (typeof a[k] != "function") {
                var B = Error((w || "React class") + ": " + g + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              j = a[k](i, k, w, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              j = L;
            }
            j && !(j instanceof Error) && (Fe(R), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", g, k, typeof j), Fe(null)), j instanceof Error && !(j.message in mt) && (mt[j.message] = !0, Fe(R), E("Failed %s type: %s", g, j.message), Fe(null));
          }
      }
    }
    var ar = Array.isArray;
    function Je(a) {
      return ar(a);
    }
    function or(a) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, g = i && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return g;
      }
    }
    function sr(a) {
      try {
        return pt(a), !1;
      } catch {
        return !0;
      }
    }
    function pt(a) {
      return "" + a;
    }
    function yt(a) {
      if (sr(a))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(a)), pt(a);
    }
    var Re = F.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, bt, Xe;
    Xe = {};
    function cr(a) {
      if (he.call(a, "ref")) {
        var i = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function ur(a) {
      if (he.call(a, "key")) {
        var i = Object.getOwnPropertyDescriptor(a, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function lr(a, i) {
      if (typeof a.ref == "string" && Re.current && i && Re.current.stateNode !== i) {
        var g = V(Re.current.type);
        Xe[g] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Re.current.type), a.ref), Xe[g] = !0);
      }
    }
    function dr(a, i) {
      {
        var g = function() {
          vt || (vt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function fr(a, i) {
      {
        var g = function() {
          bt || (bt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        g.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var hr = function(a, i, g, w, R, M, k) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: i,
        ref: g,
        props: k,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function mr(a, i, g, w, R) {
      {
        var M, k = {}, j = null, B = null;
        g !== void 0 && (yt(g), j = "" + g), ur(i) && (yt(i.key), j = "" + i.key), cr(i) && (B = i.ref, lr(i, R));
        for (M in i)
          he.call(i, M) && !ir.hasOwnProperty(M) && (k[M] = i[M]);
        if (a && a.defaultProps) {
          var L = a.defaultProps;
          for (M in L)
            k[M] === void 0 && (k[M] = L[M]);
        }
        if (j || B) {
          var Y = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          j && dr(k, Y), B && fr(k, Y);
        }
        return hr(a, j, B, R, w, Re.current, k);
      }
    }
    var Ke = F.ReactCurrentOwner, wt = F.ReactDebugCurrentFrame;
    function Te(a) {
      if (a) {
        var i = a._owner, g = Oe(a.type, a._source, i ? i.type : null);
        wt.setExtraStackFrame(g);
      } else
        wt.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function Ze(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function xt() {
      {
        if (Ke.current) {
          var a = V(Ke.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function gr(a) {
      return "";
    }
    var _t = {};
    function pr(a) {
      {
        var i = xt();
        if (!i) {
          var g = typeof a == "string" ? a : a.displayName || a.name;
          g && (i = `

Check the top-level render call using <` + g + ">.");
        }
        return i;
      }
    }
    function St(a, i) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var g = pr(i);
        if (_t[g])
          return;
        _t[g] = !0;
        var w = "";
        a && a._owner && a._owner !== Ke.current && (w = " It was passed a child from " + V(a._owner.type) + "."), Te(a), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, w), Te(null);
      }
    }
    function Et(a, i) {
      {
        if (typeof a != "object")
          return;
        if (Je(a))
          for (var g = 0; g < a.length; g++) {
            var w = a[g];
            Ze(w) && St(w, i);
          }
        else if (Ze(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var R = N(a);
          if (typeof R == "function" && R !== a.entries)
            for (var M = R.call(a), k; !(k = M.next()).done; )
              Ze(k.value) && St(k.value, i);
        }
      }
    }
    function yr(a) {
      {
        var i = a.type;
        if (i == null || typeof i == "string")
          return;
        var g;
        if (typeof i == "function")
          g = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === c))
          g = i.propTypes;
        else
          return;
        if (g) {
          var w = V(i);
          nr(g, a.props, "prop", w, a);
        } else if (i.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var R = V(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(a) {
      {
        for (var i = Object.keys(a.props), g = 0; g < i.length; g++) {
          var w = i[g];
          if (w !== "children" && w !== "key") {
            Te(a), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Te(null);
            break;
          }
        }
        a.ref !== null && (Te(a), E("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var Ot = {};
    function Tt(a, i, g, w, R, M) {
      {
        var k = Z(a);
        if (!k) {
          var j = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = gr();
          B ? j += B : j += xt();
          var L;
          a === null ? L = "null" : Je(a) ? L = "array" : a !== void 0 && a.$$typeof === t ? (L = "<" + (V(a.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : L = typeof a, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, j);
        }
        var Y = mr(a, i, g, R, M);
        if (Y == null)
          return Y;
        if (k) {
          var K = i.children;
          if (K !== void 0)
            if (w)
              if (Je(K)) {
                for (var je = 0; je < K.length; je++)
                  Et(K[je], a);
                Object.freeze && Object.freeze(K);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Et(K, a);
        }
        if (he.call(i, "key")) {
          var ve = V(a), U = Object.keys(i).filter(function(Er) {
            return Er !== "key";
          }), et = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ot[ve + et]) {
            var Sr = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, ve, Sr, ve), Ot[ve + et] = !0;
          }
        }
        return a === n ? vr(Y) : yr(Y), Y;
      }
    }
    function br(a, i, g) {
      return Tt(a, i, g, !0);
    }
    function wr(a, i, g) {
      return Tt(a, i, g, !1);
    }
    var xr = wr, _r = br;
    De.Fragment = n, De.jsx = xr, De.jsxs = _r;
  }()), De;
}
process.env.NODE_ENV === "production" ? it.exports = kr() : it.exports = Rr();
var h = it.exports, ct, Ye = Tr;
if (process.env.NODE_ENV === "production")
  ct = Ye.createRoot, Ye.hydrateRoot;
else {
  var Dt = Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ct = function(e, t) {
    Dt.usingClientEntryPoint = !0;
    try {
      return Ye.createRoot(e, t);
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
var Cr = {
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
const Dr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ne = (e, t) => {
  const r = Or(
    ({
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: u,
      className: m = "",
      children: d,
      ...y
    }, f) => jt(
      "svg",
      {
        ref: f,
        ...Cr,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: u ? Number(s) * 24 / Number(o) : s,
        className: ["lucide", `lucide-${Dr(e)}`, m].join(" "),
        ...y
      },
      [
        ...t.map(([c, v]) => jt(c, v)),
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
const Pr = ne("Archive", [
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
const Mr = ne("Hourglass", [
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
const Nr = ne("MessageSquarePlus", [
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
const Ir = ne("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = ne("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = ne("RefreshCw", [
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
const Lr = ne("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = ne("ThumbsDown", [
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
const Yr = ne("ThumbsUp", [
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
const qr = ne("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]), Vr = "https://deplo-dash-supa.vercel.app/api/supabase";
class $r {
  async fetchApi(t, r) {
    try {
      return await (await fetch(Vr, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: t, payload: r })
      })).json();
    } catch (n) {
      return { data: null, error: n };
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
      single: async () => await this.fetchApi("select", {
        table: t,
        query: "*",
        single: !0
      })
    };
  }
}
const W = new $r();
function te(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function we(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Jt = 6048e5, Hr = 864e5;
let Br = {};
function Be() {
  return Br;
}
function Ne(e, t) {
  var m, d, y, f;
  const r = Be(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((f = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = te(e), s = o.getDay(), u = (s < n ? 7 : 0) + s - n;
  return o.setDate(o.getDate() - u), o.setHours(0, 0, 0, 0), o;
}
function He(e) {
  return Ne(e, { weekStartsOn: 1 });
}
function Xt(e) {
  const t = te(e), r = t.getFullYear(), n = we(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = He(n), s = we(e, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const u = He(s);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= u.getTime() ? r : r - 1;
}
function Pt(e) {
  const t = te(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Mt(e) {
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
function Ur(e, t) {
  const r = Pt(e), n = Pt(t), o = +r - Mt(r), s = +n - Mt(n);
  return Math.round((o - s) / Hr);
}
function zr(e) {
  const t = Xt(e), r = we(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), He(r);
}
function Gr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Jr(e) {
  if (!Gr(e) && typeof e != "number")
    return !1;
  const t = te(e);
  return !isNaN(Number(t));
}
function Xr(e) {
  const t = te(e), r = we(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Kr = {
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
}, Qr = (e, t, r) => {
  let n;
  const o = Kr[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function tt(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Zr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, en = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, rn = {
  date: tt({
    formats: Zr,
    defaultWidth: "full"
  }),
  time: tt({
    formats: en,
    defaultWidth: "full"
  }),
  dateTime: tt({
    formats: tn,
    defaultWidth: "full"
  })
}, nn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, an = (e, t, r, n) => nn[e];
function Pe(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const u = e.defaultFormattingWidth || e.defaultWidth, m = r != null && r.width ? String(r.width) : u;
      o = e.formattingValues[m] || e.formattingValues[u];
    } else {
      const u = e.defaultWidth, m = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[m] || e.values[u];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const on = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, cn = {
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
}, un = {
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
}, ln = {
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
}, dn = {
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
}, fn = (e, t) => {
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
}, hn = {
  ordinalNumber: fn,
  era: Pe({
    values: on,
    defaultWidth: "wide"
  }),
  quarter: Pe({
    values: sn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Pe({
    values: cn,
    defaultWidth: "wide"
  }),
  day: Pe({
    values: un,
    defaultWidth: "wide"
  }),
  dayPeriod: Pe({
    values: ln,
    defaultWidth: "wide",
    formattingValues: dn,
    defaultFormattingWidth: "wide"
  })
};
function Me(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const u = s[0], m = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(m) ? gn(m, (c) => c.test(u)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      mn(m, (c) => c.test(u))
    );
    let y;
    y = e.valueCallback ? e.valueCallback(d) : d, y = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(y)
    ) : y;
    const f = t.slice(u.length);
    return { value: y, rest: f };
  };
}
function mn(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function gn(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function pn(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let u = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    u = r.valueCallback ? r.valueCallback(u) : u;
    const m = t.slice(o.length);
    return { value: u, rest: m };
  };
}
const yn = /^(\d+)(th|st|nd|rd)?/i, vn = /\d+/i, bn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wn = {
  any: [/^b/i, /^(a|c)/i]
}, xn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _n = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Sn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, En = {
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
}, On = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Tn = {
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
}, Rn = {
  ordinalNumber: pn({
    matchPattern: yn,
    parsePattern: vn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Me({
    matchPatterns: bn,
    defaultMatchWidth: "wide",
    parsePatterns: wn,
    defaultParseWidth: "any"
  }),
  quarter: Me({
    matchPatterns: xn,
    defaultMatchWidth: "wide",
    parsePatterns: _n,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Me({
    matchPatterns: Sn,
    defaultMatchWidth: "wide",
    parsePatterns: En,
    defaultParseWidth: "any"
  }),
  day: Me({
    matchPatterns: On,
    defaultMatchWidth: "wide",
    parsePatterns: Tn,
    defaultParseWidth: "any"
  }),
  dayPeriod: Me({
    matchPatterns: jn,
    defaultMatchWidth: "any",
    parsePatterns: kn,
    defaultParseWidth: "any"
  })
}, Cn = {
  code: "en-US",
  formatDistance: Qr,
  formatLong: rn,
  formatRelative: an,
  localize: hn,
  match: Rn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Dn(e) {
  const t = te(e);
  return Ur(t, Xr(t)) + 1;
}
function Pn(e) {
  const t = te(e), r = +He(t) - +zr(t);
  return Math.round(r / Jt) + 1;
}
function Kt(e, t) {
  var f, c, v, _;
  const r = te(e), n = r.getFullYear(), o = Be(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : c.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((_ = (v = o.locale) == null ? void 0 : v.options) == null ? void 0 : _.firstWeekContainsDate) ?? 1, u = we(e, 0);
  u.setFullYear(n + 1, 0, s), u.setHours(0, 0, 0, 0);
  const m = Ne(u, t), d = we(e, 0);
  d.setFullYear(n, 0, s), d.setHours(0, 0, 0, 0);
  const y = Ne(d, t);
  return r.getTime() >= m.getTime() ? n + 1 : r.getTime() >= y.getTime() ? n : n - 1;
}
function Mn(e, t) {
  var m, d, y, f;
  const r = Be(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Kt(e, t), s = we(e, 0);
  return s.setFullYear(o, 0, n), s.setHours(0, 0, 0, 0), Ne(s, t);
}
function Nn(e, t) {
  const r = te(e), n = +Ne(r, t) - +Mn(r, t);
  return Math.round(n / Jt) + 1;
}
function C(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const me = {
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
}, ke = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Nt = {
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
    const o = Kt(e, n), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const u = s % 100;
      return C(u, 2);
    }
    return t === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : C(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Xt(e);
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
    const o = Nn(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : C(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Pn(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : C(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : me.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Dn(e);
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
    switch (n === 12 ? o = ke.noon : n === 0 ? o = ke.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = ke.evening : n >= 12 ? o = ke.afternoon : n >= 4 ? o = ke.morning : o = ke.night, t) {
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
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : C(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : C(n, t.length);
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
        return At(n);
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
        return At(n);
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
        return "GMT" + It(n, ":");
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
        return "GMT" + It(n, ":");
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
function It(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? r + String(o) : r + String(o) + t + C(s, 2);
}
function At(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + C(Math.abs(e) / 60, 2) : be(e, t);
}
function be(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = C(Math.trunc(n / 60), 2), s = C(n % 60, 2);
  return r + o + t + s;
}
const Wt = (e, t) => {
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
}, Qt = (e, t) => {
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
}, In = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Wt(e, t);
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
  return s.replace("{{date}}", Wt(n, t)).replace("{{time}}", Qt(o, t));
}, An = {
  p: Qt,
  P: In
}, Wn = /^D+$/, Ln = /^Y+$/, Fn = ["D", "DD", "YY", "YYYY"];
function Yn(e) {
  return Wn.test(e);
}
function qn(e) {
  return Ln.test(e);
}
function Vn(e, t, r) {
  const n = $n(e, t, r);
  if (console.warn(n), Fn.includes(e)) throw new RangeError(n);
}
function $n(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Hn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Un = /^'([^]*?)'?$/, zn = /''/g, Gn = /[a-zA-Z]/;
function qe(e, t, r) {
  var f, c, v, _;
  const n = Be(), o = n.locale ?? Cn, s = n.firstWeekContainsDate ?? ((c = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, u = n.weekStartsOn ?? ((_ = (v = n.locale) == null ? void 0 : v.options) == null ? void 0 : _.weekStartsOn) ?? 0, m = te(e);
  if (!Jr(m))
    throw new RangeError("Invalid time value");
  let d = t.match(Bn).map((x) => {
    const b = x[0];
    if (b === "p" || b === "P") {
      const N = An[b];
      return N(x, o.formatLong);
    }
    return x;
  }).join("").match(Hn).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const b = x[0];
    if (b === "'")
      return { isToken: !1, value: Jn(x) };
    if (Nt[b])
      return { isToken: !0, value: x };
    if (b.match(Gn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (d = o.localize.preprocessor(m, d));
  const y = {
    firstWeekContainsDate: s,
    weekStartsOn: u,
    locale: o
  };
  return d.map((x) => {
    if (!x.isToken) return x.value;
    const b = x.value;
    (qn(b) || Yn(b)) && Vn(b, t, String(e));
    const N = Nt[b[0]];
    return N(m, b, o.localize, y);
  }).join("");
}
function Jn(e) {
  const t = e.match(Un);
  return t ? t[1].replace(zn, "'") : e;
}
const Xn = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", VITE_SUPABASE_URL: "https://zozodfjzxzlwzkhmfhwh.supabase.co" }, Lt = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (f, c) => {
    const v = typeof f == "function" ? f(t) : f;
    if (!Object.is(v, t)) {
      const _ = t;
      t = c ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), r.forEach((x) => x(t, _));
    }
  }, o = () => t, d = { setState: n, getState: o, getInitialState: () => y, subscribe: (f) => (r.add(f), () => r.delete(f)), destroy: () => {
    (Xn ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, y = t = e(n, o, d);
  return d;
}, Kn = (e) => e ? Lt(e) : Lt;
var ut = { exports: {} }, rt = {}, Ve = { exports: {} }, nt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Qn() {
  if (Ft) return nt;
  Ft = 1;
  var e = xe;
  function t(c, v) {
    return c === v && (c !== 0 || 1 / c === 1 / v) || c !== c && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function m(c, v) {
    var _ = v(), x = n({ inst: { value: _, getSnapshot: v } }), b = x[0].inst, N = x[1];
    return s(function() {
      b.value = _, b.getSnapshot = v, d(b) && N({ inst: b });
    }, [c, _, v]), o(function() {
      return d(b) && N({ inst: b }), c(function() {
        d(b) && N({ inst: b });
      });
    }, [c]), u(_), _;
  }
  function d(c) {
    var v = c.getSnapshot;
    c = c.value;
    try {
      var _ = v();
      return !r(c, _);
    } catch {
      return !0;
    }
  }
  function y(c, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? y : m;
  return nt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, nt;
}
var at = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Zn() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = xe, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(D) {
      {
        for (var O = arguments.length, I = new Array(O > 1 ? O - 1 : 0), S = 1; S < O; S++)
          I[S - 1] = arguments[S];
        n("error", D, I);
      }
    }
    function n(D, O, I) {
      {
        var S = t.ReactDebugCurrentFrame, A = S.getStackAddendum();
        A !== "" && (O += "%s", I = I.concat([A]));
        var $ = I.map(function(q) {
          return String(q);
        });
        $.unshift("Warning: " + O), Function.prototype.apply.call(console[D], console, $);
      }
    }
    function o(D, O) {
      return D === O && (D !== 0 || 1 / D === 1 / O) || D !== D && O !== O;
    }
    var s = typeof Object.is == "function" ? Object.is : o, u = e.useState, m = e.useEffect, d = e.useLayoutEffect, y = e.useDebugValue, f = !1, c = !1;
    function v(D, O, I) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = O();
      if (!c) {
        var A = O();
        s(S, A) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var $ = u({
        inst: {
          value: S,
          getSnapshot: O
        }
      }), q = $[0].inst, Z = $[1];
      return d(function() {
        q.value = S, q.getSnapshot = O, _(q) && Z({
          inst: q
        });
      }, [D, S, O]), m(function() {
        _(q) && Z({
          inst: q
        });
        var ue = function() {
          _(q) && Z({
            inst: q
          });
        };
        return D(ue);
      }, [D]), y(S), S;
    }
    function _(D) {
      var O = D.getSnapshot, I = D.value;
      try {
        var S = O();
        return !s(I, S);
      } catch {
        return !0;
      }
    }
    function x(D, O, I) {
      return O();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", N = !b, F = N ? x : v, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : F;
    at.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), at;
}
var qt;
function Zt() {
  return qt || (qt = 1, process.env.NODE_ENV === "production" ? Ve.exports = Qn() : Ve.exports = Zn()), Ve.exports;
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
function ea() {
  if (Vt) return rt;
  Vt = 1;
  var e = xe, t = Zt();
  function r(y, f) {
    return y === f && (y !== 0 || 1 / y === 1 / f) || y !== y && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, m = e.useMemo, d = e.useDebugValue;
  return rt.useSyncExternalStoreWithSelector = function(y, f, c, v, _) {
    var x = s(null);
    if (x.current === null) {
      var b = { hasValue: !1, value: null };
      x.current = b;
    } else b = x.current;
    x = m(function() {
      function F(S) {
        if (!E) {
          if (E = !0, D = S, S = v(S), _ !== void 0 && b.hasValue) {
            var A = b.value;
            if (_(A, S)) return O = A;
          }
          return O = S;
        }
        if (A = O, n(D, S)) return A;
        var $ = v(S);
        return _ !== void 0 && _(A, $) ? A : (D = S, O = $);
      }
      var E = !1, D, O, I = c === void 0 ? null : c;
      return [function() {
        return F(f());
      }, I === null ? void 0 : function() {
        return F(I());
      }];
    }, [f, c, v, _]);
    var N = o(y, x[0], x[1]);
    return u(function() {
      b.hasValue = !0, b.value = N;
    }, [N]), d(N), N;
  }, rt;
}
var ot = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function ta() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = xe, t = Zt();
    function r(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, m = e.useMemo, d = e.useDebugValue;
    function y(f, c, v, _, x) {
      var b = s(null), N;
      b.current === null ? (N = {
        hasValue: !1,
        value: null
      }, b.current = N) : N = b.current;
      var F = m(function() {
        var I = !1, S, A, $ = function(re) {
          if (!I) {
            I = !0, S = re;
            var V = _(re);
            if (x !== void 0 && N.hasValue) {
              var G = N.value;
              if (x(G, V))
                return A = G, G;
            }
            return A = V, V;
          }
          var ae = S, oe = A;
          if (n(ae, re))
            return oe;
          var le = _(re);
          return x !== void 0 && x(oe, le) ? oe : (S = re, A = le, le);
        }, q = v === void 0 ? null : v, Z = function() {
          return $(c());
        }, ue = q === null ? void 0 : function() {
          return $(q());
        };
        return [Z, ue];
      }, [c, v, _, x]), E = F[0], D = F[1], O = o(f, E, D);
      return u(function() {
        N.hasValue = !0, N.value = O;
      }, [O]), d(O), O;
    }
    ot.useSyncExternalStoreWithSelector = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ot;
}
process.env.NODE_ENV === "production" ? ut.exports = ea() : ut.exports = ta();
var ra = ut.exports;
const na = /* @__PURE__ */ jr(ra), er = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", VITE_SUPABASE_URL: "https://zozodfjzxzlwzkhmfhwh.supabase.co" }, { useDebugValue: aa } = xe, { useSyncExternalStoreWithSelector: oa } = na;
let Ht = !1;
const sa = (e) => e;
function ia(e, t = sa, r) {
  (er ? "production" : void 0) !== "production" && r && !Ht && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ht = !0);
  const n = oa(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return aa(n), n;
}
const Bt = (e) => {
  (er ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Kn(e) : e, r = (n, o) => ia(t, n, o);
  return Object.assign(r, t), r;
}, ca = (e) => e ? Bt(e) : Bt;
let ua = { data: "" }, la = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || ua, da = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, fa = /\/\*[^]*?\*\/|  +/g, Ut = /\n+/g, ge = (e, t) => {
  let r = "", n = "", o = "";
  for (let s in e) {
    let u = e[s];
    s[0] == "@" ? s[1] == "i" ? r = s + " " + u + ";" : n += s[1] == "f" ? ge(u, s) : s + "{" + ge(u, s[1] == "k" ? "" : t) + "}" : typeof u == "object" ? n += ge(u, t ? t.replace(/([^,])+/g, (m) => s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (d) => /&/.test(d) ? d.replace(/&/g, m) : m ? m + " " + d : d)) : s) : u != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += ge.p ? ge.p(s, u) : s + ":" + u + ";");
  }
  return r + (t && o ? t + "{" + o + "}" : o) + n;
}, ie = {}, tr = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e) t += r + tr(e[r]);
    return t;
  }
  return e;
}, ha = (e, t, r, n, o) => {
  let s = tr(e), u = ie[s] || (ie[s] = ((d) => {
    let y = 0, f = 11;
    for (; y < d.length; ) f = 101 * f + d.charCodeAt(y++) >>> 0;
    return "go" + f;
  })(s));
  if (!ie[u]) {
    let d = s !== e ? e : ((y) => {
      let f, c, v = [{}];
      for (; f = da.exec(y.replace(fa, "")); ) f[4] ? v.shift() : f[3] ? (c = f[3].replace(Ut, " ").trim(), v.unshift(v[0][c] = v[0][c] || {})) : v[0][f[1]] = f[2].replace(Ut, " ").trim();
      return v[0];
    })(e);
    ie[u] = ge(o ? { ["@keyframes " + u]: d } : d, r ? "" : "." + u);
  }
  let m = r && ie.g ? ie.g : null;
  return r && (ie.g = ie[u]), ((d, y, f, c) => {
    c ? y.data = y.data.replace(c, d) : y.data.indexOf(d) === -1 && (y.data = f ? d + y.data : y.data + d);
  })(ie[u], t, n, m), u;
}, ma = (e, t, r) => e.reduce((n, o, s) => {
  let u = t[s];
  if (u && u.call) {
    let m = u(r), d = m && m.props && m.props.className || /^go/.test(m) && m;
    u = d ? "." + d : m && typeof m == "object" ? m.props ? "" : ge(m, "") : m === !1 ? "" : m;
  }
  return n + o + (u ?? "");
}, "");
function Ue(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return ha(r.unshift ? r.raw ? ma(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {}) : r, la(t.target), t.g, t.o, t.k);
}
let rr, lt, dt;
Ue.bind({ g: 1 });
let ce = Ue.bind({ k: 1 });
function ga(e, t, r, n) {
  ge.p = t, rr = e, lt = r, dt = n;
}
function pe(e, t) {
  let r = this || {};
  return function() {
    let n = arguments;
    function o(s, u) {
      let m = Object.assign({}, s), d = m.className || o.className;
      r.p = Object.assign({ theme: lt && lt() }, m), r.o = / *go\d+/.test(d), m.className = Ue.apply(r, n) + (d ? " " + d : "");
      let y = e;
      return e[0] && (y = m.as || e, delete m.as), dt && y[0] && dt(m), rr(y, m);
    }
    return o;
  };
}
var pa = (e) => typeof e == "function", ft = (e, t) => pa(e) ? e(t) : e, ya = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), va = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), ba = 20, $e = /* @__PURE__ */ new Map(), wa = 1e3, zt = (e) => {
  if ($e.has(e)) return;
  let t = setTimeout(() => {
    $e.delete(e), ze({ type: 4, toastId: e });
  }, wa);
  $e.set(e, t);
}, xa = (e) => {
  let t = $e.get(e);
  t && clearTimeout(t);
}, ht = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, ba) };
    case 1:
      return t.toast.id && xa(t.toast.id), { ...e, toasts: e.toasts.map((s) => s.id === t.toast.id ? { ...s, ...t.toast } : s) };
    case 2:
      let { toast: r } = t;
      return e.toasts.find((s) => s.id === r.id) ? ht(e, { type: 1, toast: r }) : ht(e, { type: 0, toast: r });
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
}, _a = [], st = { toasts: [], pausedAt: void 0 }, ze = (e) => {
  st = ht(st, e), _a.forEach((t) => {
    t(st);
  });
}, Sa = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || ya() }), Ie = (e) => (t, r) => {
  let n = Sa(t, e, r);
  return ze({ type: 2, toast: n }), n.id;
}, Q = (e, t) => Ie("blank")(e, t);
Q.error = Ie("error");
Q.success = Ie("success");
Q.loading = Ie("loading");
Q.custom = Ie("custom");
Q.dismiss = (e) => {
  ze({ type: 3, toastId: e });
};
Q.remove = (e) => ze({ type: 4, toastId: e });
Q.promise = (e, t, r) => {
  let n = Q.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return e.then((o) => (Q.success(ft(t.success, o), { id: n, ...r, ...r == null ? void 0 : r.success }), o)).catch((o) => {
    Q.error(ft(t.error, o), { id: n, ...r, ...r == null ? void 0 : r.error });
  }), e;
};
var Ea = ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Oa = ce`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ta = ce`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, ja = pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ea} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Oa} 0.15s ease-out forwards;
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
    animation: ${Ta} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, ka = ce`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Ra = pe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${ka} 1s linear infinite;
`, Ca = ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Da = ce`
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
}`, Pa = pe("div")`
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
    animation: ${Da} 0.2s ease-out forwards;
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
`, Ma = pe("div")`
  position: absolute;
`, Na = pe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Ia = ce`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Aa = pe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ia} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Wa = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: n } = e;
  return t !== void 0 ? typeof t == "string" ? X.createElement(Aa, null, t) : t : r === "blank" ? null : X.createElement(Na, null, X.createElement(Ra, { ...n }), r !== "loading" && X.createElement(Ma, null, r === "error" ? X.createElement(ja, { ...n }) : X.createElement(Pa, { ...n })));
}, La = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Fa = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Ya = "0%{opacity:0;} 100%{opacity:1;}", qa = "0%{opacity:1;} 100%{opacity:0;}", Va = pe("div")`
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
`, $a = pe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ha = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [n, o] = va() ? [Ya, qa] : [La(r), Fa(r)];
  return { animation: t ? `${ce(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ce(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
X.memo(({ toast: e, position: t, style: r, children: n }) => {
  let o = e.height ? Ha(e.position || t || "top-center", e.visible) : { opacity: 0 }, s = X.createElement(Wa, { toast: e }), u = X.createElement($a, { ...e.ariaProps }, ft(e.message, e));
  return X.createElement(Va, { className: e.className, style: { ...o, ...r, ...e.style } }, typeof n == "function" ? n({ icon: s, message: u }) : X.createElement(X.Fragment, null, s, u));
});
ga(X.createElement);
Ue`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
const Ba = async (e, t) => {
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
}, Ua = ca((e, t) => ({
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
      const { data: u, error: m } = await W.from("conversations").select("live_mode").eq("id", n).single();
      if (m) throw m;
      if (u.live_mode)
        console.log("Live mode enabled, skipping OpenAI response");
      else {
        console.log("Live mode disabled, generating OpenAI response");
        try {
          const y = await Ba(r, n);
          console.log("Got OpenAI response:", y);
          const f = {
            conversation_id: n,
            content: y,
            sender_type: "bot",
            user_id: null
          }, { error: c } = await W.from("messages").insert(f);
          if (c) throw c;
        } catch (y) {
          console.error("Error generating bot response:", y), Q.error("Failed to generate bot response");
        }
      }
      const { error: d } = await W.from("conversations").update({ last_message_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", n);
      if (d) throw d;
    } catch (o) {
      console.error("Error sending message:", o), e({ error: o.message }), Q.error("Failed to send message");
    } finally {
      e({ isLoading: !1 });
    }
  }
})), Gt = "chatbot_session_id", za = 180;
function Ga({ domainId: e }) {
  const [t, r] = z(!1), [n, o] = z(""), [s, u] = z([]), [m, d] = z([]), [y, f] = z("history"), [c, v] = z(null), [_, x] = z(!1), [b] = z(/* @__PURE__ */ new Set()), [N, F] = z(null), [E, D] = z(null), O = kt(null), [I, S] = z(!1), A = kt(null), { sendMessage: $ } = Ua(), [q, Z] = z(!1), ue = (l, p) => p.some(
    (T) => (
      // Check for exact ID match
      T.id === l.id || // Check for temp ID being replaced by real ID
      T.id.startsWith("temp-") && T.content === l.content && T.sender_type === l.sender_type || // Check for exact content match within a small time window (2 seconds)
      T.content === l.content && T.sender_type === l.sender_type && Math.abs(new Date(T.created_at).getTime() - new Date(l.created_at).getTime()) < 2e3
    )
  );
  se(() => {
    if (!E) return;
    const l = W.channel("new-conversations").on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${E}`
      },
      (p) => {
        if (p.eventType === "INSERT") {
          const T = p.new;
          d((P) => [T, ...P]);
        }
      }
    ).subscribe();
    return () => {
      l.unsubscribe();
    };
  }, [E]), se(() => {
    if (!E) return;
    const l = W.channel("conversations-updates").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${E}`
      },
      (p) => {
        p.eventType === "UPDATE" && (d(
          (T) => T.map(
            (P) => P.id === p.new.id ? { ...P, ...p.new } : P
          )
        ), p.new.id === c && S(p.new.status === "archived"));
      }
    ).subscribe();
    return () => {
      l.unsubscribe();
    };
  }, [E, c]), se(() => {
    var l;
    t && (s.length > 0 || I) && ((l = O.current) == null || l.scrollIntoView({ behavior: "smooth" }));
  }, [s, t, I]);
  const re = async () => {
    if (E)
      try {
        const { data: l, error: p } = await W.from("conversations").select("*").eq("session_id", E).order("last_message_at", { ascending: !1 });
        if (p) throw p;
        d(l || []);
      } catch (l) {
        console.error("Error loading conversation history:", l);
      }
  };
  se(() => {
    E && re();
  }, [E]);
  const V = async () => {
    u([]), v(null), S(!1), fe(null), Z(!1), f("chat");
  }, G = () => {
    f("history"), u([]), v(null), S(!1);
  }, ae = async (l) => {
    try {
      v(l.id), S(l.status === "archived"), fe(null), Z(!1);
      const { data: p } = await W.from("messages").select("*").eq("conversation_id", l.id).order("created_at", { ascending: !0 });
      p && (u(p), b.clear(), p.forEach((T) => b.add(T.id))), l.status === "archived" && fe(l.rating || null), f("chat");
    } catch (p) {
      console.error("Error loading conversation:", p);
    }
  };
  se(() => {
    if (!c) return;
    const l = W.channel(`conversation-status:${c}`).on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "conversations",
        filter: `id=eq.${c}`
      },
      (p) => {
        p.new.status === "archived" ? (S(!0), oe()) : S(!1);
      }
    ).subscribe();
    return () => {
      l.unsubscribe();
    };
  }, [c]), se(() => {
    A.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3");
  }, []);
  const oe = () => {
    A.current && (A.current.currentTime = 0, A.current.play().catch((l) => {
      console.log("Error playing notification:", l);
    }));
  };
  se(() => {
    if (!c) {
      console.log("No conversation ID yet, skipping subscription");
      return;
    }
    console.log("Setting up subscription for conversation:", c);
    const l = W.channel(`messages-${c}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${c}`
      },
      (p) => {
        if (console.log("Received real-time event:", p), p.eventType === "INSERT") {
          const T = p.new;
          console.log("New message:", T), u((P) => {
            if (ue(T, P))
              return console.log("Message already exists, skipping"), P;
            const J = P.filter(
              (ee) => !(ee.id.startsWith("temp-") && ee.content === T.content && ee.sender_type === T.sender_type)
            );
            return b.add(T.id), T.sender_type === "bot" && oe(), console.log("Adding new message to state"), [...J, T];
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
      let p = localStorage.getItem(Gt);
      p || (p = window.crypto.randomUUID(), localStorage.setItem(Gt, p)), D(p), await le(p);
    })();
  }, []);
  const le = async (l) => {
    try {
      const { data: p, error: T } = await W.from("conversations").select("*").eq("session_id", l).eq("status", "active").order("last_message_at", { ascending: !1 }).limit(1);
      if (T) throw T;
      if (!p || p.length === 0) {
        console.log("No active conversations found for this session");
        return;
      }
      const P = p[0], J = /* @__PURE__ */ new Date();
      if (J.setDate(J.getDate() - za), new Date(P.last_message_at) < J) {
        await W.from("conversations").update({ status: "archived" }).eq("id", P.id);
        return;
      }
      v(P.id);
      const { data: ee } = await W.from("messages").select("*").eq("conversation_id", P.id).order("created_at", { ascending: !0 });
      if (ee) {
        const Oe = ee.filter((he) => b.has(he.id) ? !1 : (b.add(he.id), !0));
        u(Oe);
      }
    } catch (p) {
      p instanceof Error && !p.message.includes("no rows returned") && (console.error("Error loading existing conversation:", p), F("Failed to load conversation history"));
    }
  }, Ae = async () => {
    try {
      const { data: { user: l } } = await W.auth.getUser();
      if (!l) {
        await W.auth.signInAnonymously();
        const { data: { user: P } } = await W.auth.getUser();
        if (!P) throw new Error("Failed to create anonymous session");
        const { data: J, error: ee } = await W.from("conversations").insert({
          domain_id: e,
          user_id: P.id,
          session_id: E,
          last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
          status: "active"
        }).select().single();
        if (ee) throw ee;
        return J.id;
      }
      const { data: p, error: T } = await W.from("conversations").insert({
        domain_id: e,
        user_id: l.id,
        session_id: E,
        last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).select().single();
      if (T) throw T;
      return p.id;
    } catch (l) {
      throw console.error("Error creating conversation:", l), l;
    }
  }, We = async (l) => {
    try {
      x(!0), F(null);
      const { data: { user: p } } = await W.auth.getUser();
      p || await W.auth.signInAnonymously();
      const T = c || await Ae();
      c || v(T);
      const P = {
        id: `temp-${Date.now()}`,
        content: l,
        sender_type: "user",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      u((J) => ue(P, J) ? J : [...J, P]), await $(l, T), o("");
    } catch (p) {
      console.error("Error sending message:", p), F("Failed to send message. Please try again.");
    } finally {
      x(!1);
    }
  }, Le = async (l) => {
    l.preventDefault(), !(!n.trim() || _) && await We(n.trim());
  };
  se(() => {
    e && (async () => {
      try {
        const { data: p } = await W.from("domain_settings").select("*").eq("domain_id", e).single();
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
  const [H, _e] = z({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  }), Se = {
    backgroundColor: H.color
  }, Ge = async () => {
    if (c)
      try {
        u([]), b.clear();
        const { data: l } = await W.from("messages").select("*").eq("conversation_id", c).order("created_at", { ascending: !0 });
        l && (u(l), l.forEach((p) => b.add(p.id)));
      } catch (l) {
        console.error("Error refreshing chat:", l), F("Failed to refresh chat");
      }
  }, [de, fe] = z(null), ye = async (l) => {
    if (c)
      try {
        const { error: p } = await W.from("conversations").update({ rating: l }).eq("id", c);
        if (p) throw p;
        fe(l), d(
          (T) => T.map(
            (P) => P.id === c ? { ...P, rating: l } : P
          )
        );
      } catch (p) {
        console.error("Error rating conversation:", p);
      }
  }, Ee = async () => {
    if (c)
      try {
        const { error: l } = await W.from("conversations").update({
          requested_live_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", c);
        if (l) throw l;
        Z(!0);
        const p = {
          id: `temp-${Date.now()}`,
          content: "I'll connect you with a live agent. Please wait a moment while I transfer your chat.",
          sender_type: "bot",
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        u((T) => [...T, p]);
      } catch (l) {
        console.error("Error requesting live chat:", l), F("Failed to request live chat. Please try again.");
      }
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    t && /* @__PURE__ */ h.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: H.color }, children: [
        /* @__PURE__ */ h.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ h.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ h.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ h.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: Se })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ h.jsx("h3", { className: "font-medium", style: { color: H.headerTextColor }, children: H.chatbotName }),
          /* @__PURE__ */ h.jsxs("p", { className: "text-sm", style: { color: H.headerTextColor }, children: [
            "from ",
            H.chatbotName
          ] })
        ] }),
        y === "chat" && /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-2", children: [
          q ? /* @__PURE__ */ h.jsx(
            "div",
            {
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              title: "Waiting for agent",
              children: /* @__PURE__ */ h.jsx(Mr, { className: "h-4 w-4" })
            }
          ) : /* @__PURE__ */ h.jsx(
            "button",
            {
              onClick: Ee,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm hover:bg-white/30",
              style: { color: H.headerTextColor },
              title: "Request live agent",
              disabled: !c || I,
              children: /* @__PURE__ */ h.jsx(qr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              onClick: Ge,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              title: "Refresh chat",
              children: /* @__PURE__ */ h.jsx(Wr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              onClick: G,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: H.headerTextColor },
              children: /* @__PURE__ */ h.jsx(Ir, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "h-[400px] overflow-y-auto p-4 bg-gray-50 relative", children: y === "history" ? /* @__PURE__ */ h.jsxs("div", { className: "space-y-4 h-full", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ h.jsx("h3", { className: "font-medium text-gray-900", children: "Conversation History" }),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              onClick: V,
              className: "flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600",
              children: [
                /* @__PURE__ */ h.jsx(Nr, { className: "h-4 w-4" }),
                "Start New Chat"
              ]
            }
          )
        ] }),
        m.map((l) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            onClick: () => ae(l),
            className: "w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200",
            children: [
              /* @__PURE__ */ h.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                /* @__PURE__ */ h.jsx("span", { className: "text-sm font-medium text-gray-900", children: qe(new Date(l.created_at), "PPP") }),
                /* @__PURE__ */ h.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${l.status === "archived" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600"}`, children: l.status === "archived" ? "Archived" : "Active" })
              ] }),
              /* @__PURE__ */ h.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Last message: ",
                qe(new Date(l.last_message_at), "p")
              ] })
            ]
          },
          l.id
        )),
        m.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ h.jsx("p", { className: "mb-4", children: "No previous conversations found" }) })
      ] }) : /* @__PURE__ */ h.jsxs("div", { className: "space-y-4", children: [
        y === "chat" && /* @__PURE__ */ h.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ h.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
          /* @__PURE__ */ h.jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm max-w-[80%]", children: [
            /* @__PURE__ */ h.jsx("p", { className: "text-sm", children: H.greetingMessage }),
            /* @__PURE__ */ h.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: qe(/* @__PURE__ */ new Date(), "h:mm a") })
          ] })
        ] }),
        s.map((l) => /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: `flex gap-2 ${l.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              l.sender_type === "bot" && /* @__PURE__ */ h.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg max-w-[80%] ${l.sender_type === "user" ? "bg-orange-500 text-white ml-auto" : "bg-white shadow-sm"}`,
                  children: [
                    /* @__PURE__ */ h.jsx("p", { className: "text-sm", children: l.content }),
                    /* @__PURE__ */ h.jsx("span", { className: `text-xs mt-1 block ${l.sender_type === "user" ? "text-orange-100" : "text-gray-500"}`, children: qe(new Date(l.created_at), "h:mm a") })
                  ]
                }
              ),
              l.sender_type === "user" && /* @__PURE__ */ h.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          l.id
        )),
        I && /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col items-center gap-3 my-4", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ h.jsx(Pr, { className: "h-4 w-4" }),
            /* @__PURE__ */ h.jsx("span", { className: "text-sm", children: "This conversation has been archived" })
          ] }),
          !de && /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ h.jsx("p", { className: "text-sm text-gray-600", children: "How was this conversation?" }),
            /* @__PURE__ */ h.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  onClick: () => ye("bad"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors",
                  children: [
                    /* @__PURE__ */ h.jsx(Fr, { className: "h-4 w-4" }),
                    /* @__PURE__ */ h.jsx("span", { children: "Bad" })
                  ]
                }
              ),
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  onClick: () => ye("ok"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors",
                  children: [
                    /* @__PURE__ */ h.jsx(Ar, { className: "h-4 w-4" }),
                    /* @__PURE__ */ h.jsx("span", { children: "OK" })
                  ]
                }
              ),
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  onClick: () => ye("good"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors",
                  children: [
                    /* @__PURE__ */ h.jsx(Yr, { className: "h-4 w-4" }),
                    /* @__PURE__ */ h.jsx("span", { children: "Good" })
                  ]
                }
              )
            ] })
          ] }),
          de && /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
            /* @__PURE__ */ h.jsx("span", { className: "text-sm text-gray-600", children: "You rated this conversation:" }),
            /* @__PURE__ */ h.jsx("span", { className: `font-medium ${de === "bad" ? "text-red-600" : de === "ok" ? "text-yellow-600" : "text-green-600"}`, children: de === "bad" ? "Bad 👎" : de === "ok" ? "OK 😐" : "Good 👍" })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("div", { ref: O })
      ] }) }),
      y === "chat" && /* @__PURE__ */ h.jsxs("form", { onSubmit: Le, className: "p-4 border-t bg-white", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ h.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "text",
              value: n,
              onChange: (l) => o(l.target.value),
              placeholder: "Type your message...",
              className: "w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed",
              style: { "--tw-ring-color": H.color },
              disabled: _ || I
            }
          ) }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "submit",
              disabled: !n.trim() || _ || I,
              className: "p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
              style: Se,
              children: _ ? /* @__PURE__ */ h.jsx("div", { className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ h.jsx(Lr, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ h.jsx(
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
    /* @__PURE__ */ h.jsx(
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
function Ja() {
  const e = document.createElement("div");
  e.id = "chatbot-widget-root", document.body.appendChild(e);
  const t = window.CHATBOT_CONFIG || {};
  ct(e).render(/* @__PURE__ */ h.jsx(Ga, { domainId: t.domainId }));
}
Ja();
//# sourceMappingURL=chatbot-widget.es.js.map
