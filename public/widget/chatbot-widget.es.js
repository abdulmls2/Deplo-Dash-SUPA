import * as G from "react";
import pe, { forwardRef as jr, createElement as Tt, useState as B, useRef as jt, useEffect as Ie } from "react";
import kr from "react-dom";
function Pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var st = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Rr() {
  if (kt) return ke;
  kt = 1;
  var e = pe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(m, l, g) {
    var d, f = {}, y = null, x = null;
    g !== void 0 && (y = "" + g), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (d in l) n.call(l, d) && !s.hasOwnProperty(d) && (f[d] = l[d]);
    if (m && m.defaultProps) for (d in l = m.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: m, key: y, ref: x, props: f, _owner: o.current };
  }
  return ke.Fragment = r, ke.jsx = c, ke.jsxs = c, ke;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Cr() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), m = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function D(a) {
      if (a === null || typeof a != "object")
        return null;
      var i = b && a[b] || a[w];
      return typeof i == "function" ? i : null;
    }
    var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(a) {
      {
        for (var i = arguments.length, h = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          h[v - 1] = arguments[v];
        R("error", a, h);
      }
    }
    function R(a, i, h) {
      {
        var v = N.ReactDebugCurrentFrame, j = v.getStackAddendum();
        j !== "" && (i += "%s", h = h.concat([j]));
        var C = h.map(function(T) {
          return String(T);
        });
        C.unshift("Warning: " + i), Function.prototype.apply.call(console[a], console, C);
      }
    }
    var S = !1, M = !1, E = !1, A = !1, Y = !1, F;
    F = Symbol.for("react.module.reference");
    function Z(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === s || Y || a === o || a === g || a === d || A || a === x || S || M || E || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === f || a.$$typeof === c || a.$$typeof === m || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === F || a.getModuleId !== void 0));
    }
    function oe(a, i, h) {
      var v = a.displayName;
      if (v)
        return v;
      var j = i.displayName || i.name || "";
      return j !== "" ? h + "(" + j + ")" : h;
    }
    function J(a) {
      return a.displayName || "Context";
    }
    function L(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
        case g:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case m:
            var i = a;
            return J(i) + ".Consumer";
          case c:
            var h = a;
            return J(h._context) + ".Provider";
          case l:
            return oe(a, a.render, "ForwardRef");
          case f:
            var v = a.displayName || null;
            return v !== null ? v : L(a.type) || "Memo";
          case y: {
            var j = a, C = j._payload, T = j._init;
            try {
              return L(T(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, ee = 0, se, ie, Ne, $, ge, ye, Ae;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Se() {
      {
        if (ee === 0) {
          se = console.log, ie = console.info, Ne = console.warn, $ = console.error, ge = console.group, ye = console.groupCollapsed, Ae = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: te,
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
        ee++;
      }
    }
    function _e() {
      {
        if (ee--, ee === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, a, {
              value: se
            }),
            info: U({}, a, {
              value: ie
            }),
            warn: U({}, a, {
              value: Ne
            }),
            error: U({}, a, {
              value: $
            }),
            group: U({}, a, {
              value: ge
            }),
            groupCollapsed: U({}, a, {
              value: ye
            }),
            groupEnd: U({}, a, {
              value: Ae
            })
          });
        }
        ee < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = N.ReactCurrentDispatcher, Oe;
    function ve(a, i, h) {
      {
        if (Oe === void 0)
          try {
            throw Error();
          } catch (j) {
            var v = j.stack.trim().match(/\n( *(at )?)/);
            Oe = v && v[1] || "";
          }
        return `
` + Oe + a;
      }
    }
    var p = !1, O;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      O = new q();
    }
    function de(a, i) {
      if (!a || p)
        return "";
      {
        var h = O.get(a);
        if (h !== void 0)
          return h;
      }
      var v;
      p = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = Ee.current, Ee.current = null, Se();
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
            } catch (H) {
              v = H;
            }
            Reflect.construct(a, [], T);
          } else {
            try {
              T.call();
            } catch (H) {
              v = H;
            }
            a.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            v = H;
          }
          a();
        }
      } catch (H) {
        if (H && v && typeof H.stack == "string") {
          for (var _ = H.stack.split(`
`), V = v.stack.split(`
`), W = _.length - 1, I = V.length - 1; W >= 1 && I >= 0 && _[W] !== V[I]; )
            I--;
          for (; W >= 1 && I >= 0; W--, I--)
            if (_[W] !== V[I]) {
              if (W !== 1 || I !== 1)
                do
                  if (W--, I--, I < 0 || _[W] !== V[I]) {
                    var z = `
` + _[W].replace(" at new ", " at ");
                    return a.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", a.displayName)), typeof a == "function" && O.set(a, z), z;
                  }
                while (W >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        p = !1, Ee.current = C, _e(), Error.prepareStackTrace = j;
      }
      var we = a ? a.displayName || a.name : "", fe = we ? ve(we) : "";
      return typeof a == "function" && O.set(a, fe), fe;
    }
    function re(a, i, h) {
      return de(a, !1);
    }
    function ar(a) {
      var i = a.prototype;
      return !!(i && i.isReactComponent);
    }
    function We(a, i, h) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return de(a, ar(a));
      if (typeof a == "string")
        return ve(a);
      switch (a) {
        case g:
          return ve("Suspense");
        case d:
          return ve("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return re(a.render);
          case f:
            return We(a.type, i, h);
          case y: {
            var v = a, j = v._payload, C = v._init;
            try {
              return We(C(j), i, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, ht = {}, mt = N.ReactDebugCurrentFrame;
    function Fe(a) {
      if (a) {
        var i = a._owner, h = We(a.type, a._source, i ? i.type : null);
        mt.setExtraStackFrame(h);
      } else
        mt.setExtraStackFrame(null);
    }
    function or(a, i, h, v, j) {
      {
        var C = Function.call.bind(Te);
        for (var T in a)
          if (C(a, T)) {
            var _ = void 0;
            try {
              if (typeof a[T] != "function") {
                var V = Error((v || "React class") + ": " + h + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              _ = a[T](i, T, v, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (Fe(j), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", h, T, typeof _), Fe(null)), _ instanceof Error && !(_.message in ht) && (ht[_.message] = !0, Fe(j), k("Failed %s type: %s", h, _.message), Fe(null));
          }
      }
    }
    var sr = Array.isArray;
    function ze(a) {
      return sr(a);
    }
    function ir(a) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, h = i && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h;
      }
    }
    function cr(a) {
      try {
        return pt(a), !1;
      } catch {
        return !0;
      }
    }
    function pt(a) {
      return "" + a;
    }
    function gt(a) {
      if (cr(a))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(a)), pt(a);
    }
    var je = N.ReactCurrentOwner, ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yt, vt, Je;
    Je = {};
    function lr(a) {
      if (Te.call(a, "ref")) {
        var i = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function dr(a) {
      if (Te.call(a, "key")) {
        var i = Object.getOwnPropertyDescriptor(a, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function fr(a, i) {
      if (typeof a.ref == "string" && je.current && i && je.current.stateNode !== i) {
        var h = L(je.current.type);
        Je[h] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(je.current.type), a.ref), Je[h] = !0);
      }
    }
    function hr(a, i) {
      {
        var h = function() {
          yt || (yt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        h.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function mr(a, i) {
      {
        var h = function() {
          vt || (vt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        h.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var pr = function(a, i, h, v, j, C, T) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: i,
        ref: h,
        props: T,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function gr(a, i, h, v, j) {
      {
        var C, T = {}, _ = null, V = null;
        h !== void 0 && (gt(h), _ = "" + h), dr(i) && (gt(i.key), _ = "" + i.key), lr(i) && (V = i.ref, fr(i, j));
        for (C in i)
          Te.call(i, C) && !ur.hasOwnProperty(C) && (T[C] = i[C]);
        if (a && a.defaultProps) {
          var W = a.defaultProps;
          for (C in W)
            T[C] === void 0 && (T[C] = W[C]);
        }
        if (_ || V) {
          var I = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          _ && hr(T, I), V && mr(T, I);
        }
        return pr(a, _, V, j, v, je.current, T);
      }
    }
    var Ke = N.ReactCurrentOwner, bt = N.ReactDebugCurrentFrame;
    function be(a) {
      if (a) {
        var i = a._owner, h = We(a.type, a._source, i ? i.type : null);
        bt.setExtraStackFrame(h);
      } else
        bt.setExtraStackFrame(null);
    }
    var Xe;
    Xe = !1;
    function Qe(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function wt() {
      {
        if (Ke.current) {
          var a = L(Ke.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function yr(a) {
      return "";
    }
    var xt = {};
    function vr(a) {
      {
        var i = wt();
        if (!i) {
          var h = typeof a == "string" ? a : a.displayName || a.name;
          h && (i = `

Check the top-level render call using <` + h + ">.");
        }
        return i;
      }
    }
    function St(a, i) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var h = vr(i);
        if (xt[h])
          return;
        xt[h] = !0;
        var v = "";
        a && a._owner && a._owner !== Ke.current && (v = " It was passed a child from " + L(a._owner.type) + "."), be(a), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, v), be(null);
      }
    }
    function _t(a, i) {
      {
        if (typeof a != "object")
          return;
        if (ze(a))
          for (var h = 0; h < a.length; h++) {
            var v = a[h];
            Qe(v) && St(v, i);
          }
        else if (Qe(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var j = D(a);
          if (typeof j == "function" && j !== a.entries)
            for (var C = j.call(a), T; !(T = C.next()).done; )
              Qe(T.value) && St(T.value, i);
        }
      }
    }
    function br(a) {
      {
        var i = a.type;
        if (i == null || typeof i == "string")
          return;
        var h;
        if (typeof i == "function")
          h = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === f))
          h = i.propTypes;
        else
          return;
        if (h) {
          var v = L(i);
          or(h, a.props, "prop", v, a);
        } else if (i.PropTypes !== void 0 && !Xe) {
          Xe = !0;
          var j = L(i);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(a) {
      {
        for (var i = Object.keys(a.props), h = 0; h < i.length; h++) {
          var v = i[h];
          if (v !== "children" && v !== "key") {
            be(a), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), be(null);
            break;
          }
        }
        a.ref !== null && (be(a), k("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var Et = {};
    function Ot(a, i, h, v, j, C) {
      {
        var T = Z(a);
        if (!T) {
          var _ = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = yr();
          V ? _ += V : _ += wt();
          var W;
          a === null ? W = "null" : ze(a) ? W = "array" : a !== void 0 && a.$$typeof === t ? (W = "<" + (L(a.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof a, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var I = gr(a, i, h, j, C);
        if (I == null)
          return I;
        if (T) {
          var z = i.children;
          if (z !== void 0)
            if (v)
              if (ze(z)) {
                for (var we = 0; we < z.length; we++)
                  _t(z[we], a);
                Object.freeze && Object.freeze(z);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _t(z, a);
        }
        if (Te.call(i, "key")) {
          var fe = L(a), H = Object.keys(i).filter(function(Tr) {
            return Tr !== "key";
          }), Ze = H.length > 0 ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Et[fe + Ze]) {
            var Or = H.length > 0 ? "{" + H.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, fe, Or, fe), Et[fe + Ze] = !0;
          }
        }
        return a === n ? wr(I) : br(I), I;
      }
    }
    function xr(a, i, h) {
      return Ot(a, i, h, !0);
    }
    function Sr(a, i, h) {
      return Ot(a, i, h, !1);
    }
    var _r = Sr, Er = xr;
    Pe.Fragment = n, Pe.jsx = _r, Pe.jsxs = Er;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? st.exports = Rr() : st.exports = Cr();
var u = st.exports, it, Le = kr;
if (process.env.NODE_ENV === "production")
  it = Le.createRoot, Le.hydrateRoot;
else {
  var Rt = Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  it = function(e, t) {
    Rt.usingClientEntryPoint = !0;
    try {
      return Le.createRoot(e, t);
    } finally {
      Rt.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dr = {
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
const Mr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Q = (e, t) => {
  const r = jr(
    ({
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: c,
      className: m = "",
      children: l,
      ...g
    }, d) => Tt(
      "svg",
      {
        ref: d,
        ...Dr,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: c ? Number(s) * 24 / Number(o) : s,
        className: ["lucide", `lucide-${Mr(e)}`, m].join(" "),
        ...g
      },
      [
        ...t.map(([f, y]) => Tt(f, y)),
        ...Array.isArray(l) ? l : [l]
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
const Nr = Q("Archive", [
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
const Ar = Q("Hourglass", [
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
const Wr = Q("MessageSquarePlus", [
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
const Fr = Q("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = Q("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = Q("RefreshCw", [
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
const Yr = Q("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = Q("ThumbsDown", [
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
const Vr = Q("ThumbsUp", [
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
const qr = Q("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]), He = "https://deplo-dash.vercel.app/api/supabase";
async function Hr(e) {
  const t = await fetch(He, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: "getMessages",
      payload: { conversationId: e }
    })
  });
  if (!t.ok)
    throw new Error(`Failed to fetch messages: ${t.statusText}`);
  return (await t.json()).messages;
}
async function Br(e) {
  const t = await fetch(He, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: "getConversations",
      payload: { sessionId: e }
    })
  });
  if (!t.ok)
    throw new Error(`Failed to fetch conversations: ${t.statusText}`);
  return (await t.json()).conversations;
}
async function Ct(e) {
  const t = await fetch(He, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: "createMessage",
      payload: { message: e }
    })
  });
  if (!t.ok)
    throw new Error(`Failed to create message: ${t.statusText}`);
  return (await t.json()).message;
}
async function Dt(e, t) {
  const r = await fetch(He, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: "updateConversation",
      payload: {
        conversation: { id: e, ...t }
      }
    })
  });
  if (!r.ok)
    throw new Error(`Failed to update conversation: ${r.statusText}`);
  return (await r.json()).conversation;
}
function X(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function me(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Kt = 6048e5, Ur = 864e5;
let Gr = {};
function Be() {
  return Gr;
}
function De(e, t) {
  var m, l, g, d;
  const r = Be(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = X(e), s = o.getDay(), c = (s < n ? 7 : 0) + s - n;
  return o.setDate(o.getDate() - c), o.setHours(0, 0, 0, 0), o;
}
function qe(e) {
  return De(e, { weekStartsOn: 1 });
}
function Xt(e) {
  const t = X(e), r = t.getFullYear(), n = me(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = qe(n), s = me(e, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const c = qe(s);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= c.getTime() ? r : r - 1;
}
function Mt(e) {
  const t = X(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Nt(e) {
  const t = X(e), r = new Date(
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
function zr(e, t) {
  const r = Mt(e), n = Mt(t), o = +r - Nt(r), s = +n - Nt(n);
  return Math.round((o - s) / Ur);
}
function Jr(e) {
  const t = Xt(e), r = me(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), qe(r);
}
function Kr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Xr(e) {
  if (!Kr(e) && typeof e != "number")
    return !1;
  const t = X(e);
  return !isNaN(Number(t));
}
function Qr(e) {
  const t = X(e), r = me(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Zr = {
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
}, en = (e, t, r) => {
  let n;
  const o = Zr[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function et(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const tn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, nn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, an = {
  date: et({
    formats: tn,
    defaultWidth: "full"
  }),
  time: et({
    formats: rn,
    defaultWidth: "full"
  }),
  dateTime: et({
    formats: nn,
    defaultWidth: "full"
  })
}, on = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, sn = (e, t, r, n) => on[e];
function Re(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const c = e.defaultFormattingWidth || e.defaultWidth, m = r != null && r.width ? String(r.width) : c;
      o = e.formattingValues[m] || e.formattingValues[c];
    } else {
      const c = e.defaultWidth, m = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[m] || e.values[c];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const cn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, un = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ln = {
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
}, dn = {
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
}, fn = {
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
}, hn = {
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
}, mn = (e, t) => {
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
  ordinalNumber: mn,
  era: Re({
    values: cn,
    defaultWidth: "wide"
  }),
  quarter: Re({
    values: un,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Re({
    values: ln,
    defaultWidth: "wide"
  }),
  day: Re({
    values: dn,
    defaultWidth: "wide"
  }),
  dayPeriod: Re({
    values: fn,
    defaultWidth: "wide",
    formattingValues: hn,
    defaultFormattingWidth: "wide"
  })
};
function Ce(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const c = s[0], m = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(m) ? yn(m, (f) => f.test(c)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      gn(m, (f) => f.test(c))
    );
    let g;
    g = e.valueCallback ? e.valueCallback(l) : l, g = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(g)
    ) : g;
    const d = t.slice(c.length);
    return { value: g, rest: d };
  };
}
function gn(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function yn(e, t) {
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
    let c = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    const m = t.slice(o.length);
    return { value: c, rest: m };
  };
}
const bn = /^(\d+)(th|st|nd|rd)?/i, wn = /\d+/i, xn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Sn = {
  any: [/^b/i, /^(a|c)/i]
}, _n = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, En = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, On = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tn = {
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
}, jn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, kn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Pn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Rn = {
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
}, Cn = {
  ordinalNumber: vn({
    matchPattern: bn,
    parsePattern: wn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ce({
    matchPatterns: xn,
    defaultMatchWidth: "wide",
    parsePatterns: Sn,
    defaultParseWidth: "any"
  }),
  quarter: Ce({
    matchPatterns: _n,
    defaultMatchWidth: "wide",
    parsePatterns: En,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ce({
    matchPatterns: On,
    defaultMatchWidth: "wide",
    parsePatterns: Tn,
    defaultParseWidth: "any"
  }),
  day: Ce({
    matchPatterns: jn,
    defaultMatchWidth: "wide",
    parsePatterns: kn,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ce({
    matchPatterns: Pn,
    defaultMatchWidth: "any",
    parsePatterns: Rn,
    defaultParseWidth: "any"
  })
}, Dn = {
  code: "en-US",
  formatDistance: en,
  formatLong: an,
  formatRelative: sn,
  localize: pn,
  match: Cn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Mn(e) {
  const t = X(e);
  return zr(t, Qr(t)) + 1;
}
function Nn(e) {
  const t = X(e), r = +qe(t) - +Jr(t);
  return Math.round(r / Kt) + 1;
}
function Qt(e, t) {
  var d, f, y, x;
  const r = X(e), n = r.getFullYear(), o = Be(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((x = (y = o.locale) == null ? void 0 : y.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, c = me(e, 0);
  c.setFullYear(n + 1, 0, s), c.setHours(0, 0, 0, 0);
  const m = De(c, t), l = me(e, 0);
  l.setFullYear(n, 0, s), l.setHours(0, 0, 0, 0);
  const g = De(l, t);
  return r.getTime() >= m.getTime() ? n + 1 : r.getTime() >= g.getTime() ? n : n - 1;
}
function An(e, t) {
  var m, l, g, d;
  const r = Be(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Qt(e, t), s = me(e, 0);
  return s.setFullYear(o, 0, n), s.setHours(0, 0, 0, 0), De(s, t);
}
function Wn(e, t) {
  const r = X(e), n = +De(r, t) - +An(r, t);
  return Math.round(n / Kt) + 1;
}
function P(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const ce = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return P(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : P(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return P(e.getDate(), t.length);
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
    return P(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return P(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return P(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return P(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return P(o, t.length);
  }
}, xe = {
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
    return ce.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Qt(e, n), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const c = s % 100;
      return P(c, 2);
    }
    return t === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : P(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Xt(e);
    return P(r, t.length);
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
    return P(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return P(n, 2);
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
        return P(n, 2);
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
        return ce.M(e, t);
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
        return P(n + 1, 2);
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
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : P(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Nn(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : P(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : ce.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Mn(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : P(n, t.length);
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
        return P(s, 2);
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
        return P(s, t.length);
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
        return P(o, t.length);
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
    switch (n === 12 ? o = xe.noon : n === 0 ? o = xe.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = xe.evening : n >= 12 ? o = xe.afternoon : n >= 4 ? o = xe.morning : o = xe.night, t) {
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
    return ce.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : ce.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : P(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : P(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ce.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : ce.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ce.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ft(n);
      case "XXXX":
      case "XX":
        return he(n);
      case "XXXXX":
      case "XXX":
      default:
        return he(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ft(n);
      case "xxxx":
      case "xx":
        return he(n);
      case "xxxxx":
      case "xxx":
      default:
        return he(n, ":");
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
        return "GMT" + he(n, ":");
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
        return "GMT" + he(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return P(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return P(n, t.length);
  }
};
function Wt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? r + String(o) : r + String(o) + t + P(s, 2);
}
function Ft(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + P(Math.abs(e) / 60, 2) : he(e, t);
}
function he(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = P(Math.trunc(n / 60), 2), s = P(n % 60, 2);
  return r + o + t + s;
}
const It = (e, t) => {
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
}, Fn = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return It(e, t);
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
  return s.replace("{{date}}", It(n, t)).replace("{{time}}", Zt(o, t));
}, In = {
  p: Zt,
  P: Fn
}, Ln = /^D+$/, Yn = /^Y+$/, $n = ["D", "DD", "YY", "YYYY"];
function Vn(e) {
  return Ln.test(e);
}
function qn(e) {
  return Yn.test(e);
}
function Hn(e, t, r) {
  const n = Bn(e, t, r);
  if (console.warn(n), $n.includes(e)) throw new RangeError(n);
}
function Bn(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Un = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zn = /^'([^]*?)'?$/, Jn = /''/g, Kn = /[a-zA-Z]/;
function Ye(e, t, r) {
  var d, f, y, x;
  const n = Be(), o = n.locale ?? Dn, s = n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, c = n.weekStartsOn ?? ((x = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : x.weekStartsOn) ?? 0, m = X(e);
  if (!Xr(m))
    throw new RangeError("Invalid time value");
  let l = t.match(Gn).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const D = In[w];
      return D(b, o.formatLong);
    }
    return b;
  }).join("").match(Un).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: Xn(b) };
    if (At[w])
      return { isToken: !0, value: b };
    if (w.match(Kn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(m, l));
  const g = {
    firstWeekContainsDate: s,
    weekStartsOn: c,
    locale: o
  };
  return l.map((b) => {
    if (!b.isToken) return b.value;
    const w = b.value;
    (qn(w) || Vn(w)) && Hn(w, t, String(e));
    const D = At[w[0]];
    return D(m, w, o.localize, g);
  }).join("");
}
function Xn(e) {
  const t = e.match(zn);
  return t ? t[1].replace(Jn, "'") : e;
}
const Qn = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "" }, Lt = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (d, f) => {
    const y = typeof d == "function" ? d(t) : d;
    if (!Object.is(y, t)) {
      const x = t;
      t = f ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), r.forEach((b) => b(t, x));
    }
  }, o = () => t, l = { setState: n, getState: o, getInitialState: () => g, subscribe: (d) => (r.add(d), () => r.delete(d)), destroy: () => {
    (Qn ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, g = t = e(n, o, l);
  return l;
}, Zn = (e) => e ? Lt(e) : Lt;
var ct = { exports: {} }, tt = {}, $e = { exports: {} }, rt = {};
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
function ea() {
  if (Yt) return rt;
  Yt = 1;
  var e = pe;
  function t(f, y) {
    return f === y && (f !== 0 || 1 / f === 1 / y) || f !== f && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, c = e.useDebugValue;
  function m(f, y) {
    var x = y(), b = n({ inst: { value: x, getSnapshot: y } }), w = b[0].inst, D = b[1];
    return s(function() {
      w.value = x, w.getSnapshot = y, l(w) && D({ inst: w });
    }, [f, x, y]), o(function() {
      return l(w) && D({ inst: w }), f(function() {
        l(w) && D({ inst: w });
      });
    }, [f]), c(x), x;
  }
  function l(f) {
    var y = f.getSnapshot;
    f = f.value;
    try {
      var x = y();
      return !r(f, x);
    } catch {
      return !0;
    }
  }
  function g(f, y) {
    return y();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : m;
  return rt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, rt;
}
var nt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
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
    var e = pe, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(R) {
      {
        for (var S = arguments.length, M = new Array(S > 1 ? S - 1 : 0), E = 1; E < S; E++)
          M[E - 1] = arguments[E];
        n("error", R, M);
      }
    }
    function n(R, S, M) {
      {
        var E = t.ReactDebugCurrentFrame, A = E.getStackAddendum();
        A !== "" && (S += "%s", M = M.concat([A]));
        var Y = M.map(function(F) {
          return String(F);
        });
        Y.unshift("Warning: " + S), Function.prototype.apply.call(console[R], console, Y);
      }
    }
    function o(R, S) {
      return R === S && (R !== 0 || 1 / R === 1 / S) || R !== R && S !== S;
    }
    var s = typeof Object.is == "function" ? Object.is : o, c = e.useState, m = e.useEffect, l = e.useLayoutEffect, g = e.useDebugValue, d = !1, f = !1;
    function y(R, S, M) {
      d || e.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = S();
      if (!f) {
        var A = S();
        s(E, A) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var Y = c({
        inst: {
          value: E,
          getSnapshot: S
        }
      }), F = Y[0].inst, Z = Y[1];
      return l(function() {
        F.value = E, F.getSnapshot = S, x(F) && Z({
          inst: F
        });
      }, [R, E, S]), m(function() {
        x(F) && Z({
          inst: F
        });
        var oe = function() {
          x(F) && Z({
            inst: F
          });
        };
        return R(oe);
      }, [R]), g(E), E;
    }
    function x(R) {
      var S = R.getSnapshot, M = R.value;
      try {
        var E = S();
        return !s(M, E);
      } catch {
        return !0;
      }
    }
    function b(R, S, M) {
      return S();
    }
    var w = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !w, N = D ? b : y, k = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : N;
    nt.useSyncExternalStore = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), nt;
}
var Vt;
function er() {
  return Vt || (Vt = 1, process.env.NODE_ENV === "production" ? $e.exports = ea() : $e.exports = ta()), $e.exports;
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
var qt;
function ra() {
  if (qt) return tt;
  qt = 1;
  var e = pe, t = er();
  function r(g, d) {
    return g === d && (g !== 0 || 1 / g === 1 / d) || g !== g && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, c = e.useEffect, m = e.useMemo, l = e.useDebugValue;
  return tt.useSyncExternalStoreWithSelector = function(g, d, f, y, x) {
    var b = s(null);
    if (b.current === null) {
      var w = { hasValue: !1, value: null };
      b.current = w;
    } else w = b.current;
    b = m(function() {
      function N(E) {
        if (!k) {
          if (k = !0, R = E, E = y(E), x !== void 0 && w.hasValue) {
            var A = w.value;
            if (x(A, E)) return S = A;
          }
          return S = E;
        }
        if (A = S, n(R, E)) return A;
        var Y = y(E);
        return x !== void 0 && x(A, Y) ? A : (R = E, S = Y);
      }
      var k = !1, R, S, M = f === void 0 ? null : f;
      return [function() {
        return N(d());
      }, M === null ? void 0 : function() {
        return N(M());
      }];
    }, [d, f, y, x]);
    var D = o(g, b[0], b[1]);
    return c(function() {
      w.hasValue = !0, w.value = D;
    }, [D]), l(D), D;
  }, tt;
}
var at = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function na() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = pe, t = er();
    function r(d, f) {
      return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, c = e.useEffect, m = e.useMemo, l = e.useDebugValue;
    function g(d, f, y, x, b) {
      var w = s(null), D;
      w.current === null ? (D = {
        hasValue: !1,
        value: null
      }, w.current = D) : D = w.current;
      var N = m(function() {
        var M = !1, E, A, Y = function(J) {
          if (!M) {
            M = !0, E = J;
            var L = x(J);
            if (b !== void 0 && D.hasValue) {
              var U = D.value;
              if (b(U, L))
                return A = U, U;
            }
            return A = L, L;
          }
          var ee = E, se = A;
          if (n(ee, J))
            return se;
          var ie = x(J);
          return b !== void 0 && b(se, ie) ? se : (E = J, A = ie, ie);
        }, F = y === void 0 ? null : y, Z = function() {
          return Y(f());
        }, oe = F === null ? void 0 : function() {
          return Y(F());
        };
        return [Z, oe];
      }, [f, y, x, b]), k = N[0], R = N[1], S = o(d, k, R);
      return c(function() {
        D.hasValue = !0, D.value = S;
      }, [S]), l(S), S;
    }
    at.useSyncExternalStoreWithSelector = g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), at;
}
process.env.NODE_ENV === "production" ? ct.exports = ra() : ct.exports = na();
var aa = ct.exports;
const oa = /* @__PURE__ */ Pr(aa), tr = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "" }, { useDebugValue: sa } = pe, { useSyncExternalStoreWithSelector: ia } = oa;
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
  const t = typeof e == "function" ? Zn(e) : e, r = (n, o) => ua(t, n, o);
  return Object.assign(r, t), r;
}, la = (e) => e ? Ut(e) : Ut;
let da = { data: "" }, fa = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || da, ha = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, ma = /\/\*[^]*?\*\/|  +/g, Gt = /\n+/g, ue = (e, t) => {
  let r = "", n = "", o = "";
  for (let s in e) {
    let c = e[s];
    s[0] == "@" ? s[1] == "i" ? r = s + " " + c + ";" : n += s[1] == "f" ? ue(c, s) : s + "{" + ue(c, s[1] == "k" ? "" : t) + "}" : typeof c == "object" ? n += ue(c, t ? t.replace(/([^,])+/g, (m) => s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) => /&/.test(l) ? l.replace(/&/g, m) : m ? m + " " + l : l)) : s) : c != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += ue.p ? ue.p(s, c) : s + ":" + c + ";");
  }
  return r + (t && o ? t + "{" + o + "}" : o) + n;
}, ne = {}, rr = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e) t += r + rr(e[r]);
    return t;
  }
  return e;
}, pa = (e, t, r, n, o) => {
  let s = rr(e), c = ne[s] || (ne[s] = ((l) => {
    let g = 0, d = 11;
    for (; g < l.length; ) d = 101 * d + l.charCodeAt(g++) >>> 0;
    return "go" + d;
  })(s));
  if (!ne[c]) {
    let l = s !== e ? e : ((g) => {
      let d, f, y = [{}];
      for (; d = ha.exec(g.replace(ma, "")); ) d[4] ? y.shift() : d[3] ? (f = d[3].replace(Gt, " ").trim(), y.unshift(y[0][f] = y[0][f] || {})) : y[0][d[1]] = d[2].replace(Gt, " ").trim();
      return y[0];
    })(e);
    ne[c] = ue(o ? { ["@keyframes " + c]: l } : l, r ? "" : "." + c);
  }
  let m = r && ne.g ? ne.g : null;
  return r && (ne.g = ne[c]), ((l, g, d, f) => {
    f ? g.data = g.data.replace(f, l) : g.data.indexOf(l) === -1 && (g.data = d ? l + g.data : g.data + l);
  })(ne[c], t, n, m), c;
}, ga = (e, t, r) => e.reduce((n, o, s) => {
  let c = t[s];
  if (c && c.call) {
    let m = c(r), l = m && m.props && m.props.className || /^go/.test(m) && m;
    c = l ? "." + l : m && typeof m == "object" ? m.props ? "" : ue(m, "") : m === !1 ? "" : m;
  }
  return n + o + (c ?? "");
}, "");
function Ue(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return pa(r.unshift ? r.raw ? ga(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {}) : r, fa(t.target), t.g, t.o, t.k);
}
let nr, ut, lt;
Ue.bind({ g: 1 });
let ae = Ue.bind({ k: 1 });
function ya(e, t, r, n) {
  ue.p = t, nr = e, ut = r, lt = n;
}
function le(e, t) {
  let r = this || {};
  return function() {
    let n = arguments;
    function o(s, c) {
      let m = Object.assign({}, s), l = m.className || o.className;
      r.p = Object.assign({ theme: ut && ut() }, m), r.o = / *go\d+/.test(l), m.className = Ue.apply(r, n) + (l ? " " + l : "");
      let g = e;
      return e[0] && (g = m.as || e, delete m.as), lt && g[0] && lt(m), nr(g, m);
    }
    return o;
  };
}
var va = (e) => typeof e == "function", dt = (e, t) => va(e) ? e(t) : e, ba = /* @__PURE__ */ (() => {
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
})(), xa = 20, Ve = /* @__PURE__ */ new Map(), Sa = 1e3, zt = (e) => {
  if (Ve.has(e)) return;
  let t = setTimeout(() => {
    Ve.delete(e), Ge({ type: 4, toastId: e });
  }, Sa);
  Ve.set(e, t);
}, _a = (e) => {
  let t = Ve.get(e);
  t && clearTimeout(t);
}, ft = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, xa) };
    case 1:
      return t.toast.id && _a(t.toast.id), { ...e, toasts: e.toasts.map((s) => s.id === t.toast.id ? { ...s, ...t.toast } : s) };
    case 2:
      let { toast: r } = t;
      return e.toasts.find((s) => s.id === r.id) ? ft(e, { type: 1, toast: r }) : ft(e, { type: 0, toast: r });
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
}, Ea = [], ot = { toasts: [], pausedAt: void 0 }, Ge = (e) => {
  ot = ft(ot, e), Ea.forEach((t) => {
    t(ot);
  });
}, Oa = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || ba() }), Me = (e) => (t, r) => {
  let n = Oa(t, e, r);
  return Ge({ type: 2, toast: n }), n.id;
}, K = (e, t) => Me("blank")(e, t);
K.error = Me("error");
K.success = Me("success");
K.loading = Me("loading");
K.custom = Me("custom");
K.dismiss = (e) => {
  Ge({ type: 3, toastId: e });
};
K.remove = (e) => Ge({ type: 4, toastId: e });
K.promise = (e, t, r) => {
  let n = K.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return e.then((o) => (K.success(dt(t.success, o), { id: n, ...r, ...r == null ? void 0 : r.success }), o)).catch((o) => {
    K.error(dt(t.error, o), { id: n, ...r, ...r == null ? void 0 : r.error });
  }), e;
};
var Ta = ae`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, ja = ae`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, ka = ae`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, Pa = le("div")`
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
    animation: ${ja} 0.15s ease-out forwards;
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
    animation: ${ka} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Ra = ae`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Ca = le("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Ra} 1s linear infinite;
`, Da = ae`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Ma = ae`
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
}`, Na = le("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Da} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`, Aa = le("div")`
  position: absolute;
`, Wa = le("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Fa = ae`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ia = le("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fa} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, La = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: n } = e;
  return t !== void 0 ? typeof t == "string" ? G.createElement(Ia, null, t) : t : r === "blank" ? null : G.createElement(Wa, null, G.createElement(Ca, { ...n }), r !== "loading" && G.createElement(Aa, null, r === "error" ? G.createElement(Pa, { ...n }) : G.createElement(Na, { ...n })));
}, Ya = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, $a = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Va = "0%{opacity:0;} 100%{opacity:1;}", qa = "0%{opacity:1;} 100%{opacity:0;}", Ha = le("div")`
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
`, Ba = le("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ua = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [n, o] = wa() ? [Va, qa] : [Ya(r), $a(r)];
  return { animation: t ? `${ae(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ae(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
G.memo(({ toast: e, position: t, style: r, children: n }) => {
  let o = e.height ? Ua(e.position || t || "top-center", e.visible) : { opacity: 0 }, s = G.createElement(La, { toast: e }), c = G.createElement(Ba, { ...e.ariaProps }, dt(e.message, e));
  return G.createElement(Ha, { className: e.className, style: { ...o, ...r, ...e.style } }, typeof n == "function" ? n({ icon: s, message: c }) : G.createElement(G.Fragment, null, s, c));
});
ya(G.createElement);
Ue`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
const Ga = async (e, t) => {
  try {
    const n = await fetch("https://deplo-dash.vercel.app/api/chat", {
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
        user_id: null,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }, s = await Ct(o), c = await Ga(r, n);
      await Ct({
        conversation_id: n,
        content: c,
        sender_type: "bot",
        user_id: null,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (o) {
      console.error("Error in sendMessage:", o), e({ error: "Failed to send message" }), K.error("Failed to send message");
    } finally {
      e({ isLoading: !1 });
    }
  }
})), Jt = "chatbot_session_id";
function Ja({ domainId: e }) {
  const [t, r] = B(!1), [n, o] = B(""), [s, c] = B([]), [m, l] = B([]), [g, d] = B("history"), [f, y] = B(null), [x, b] = B(!1), [w] = B(/* @__PURE__ */ new Set()), [D, N] = B(null), [k, R] = B(null), S = jt(null), [M, E] = B(!1);
  jt(null);
  const { sendMessage: A } = za(), [Y, F] = B(!1), Z = (p, O) => O.some(
    (q) => q.id === p.id || q.id.startsWith("temp-") && q.content === p.content && q.sender_type === p.sender_type || q.content === p.content && q.sender_type === p.sender_type && Math.abs(new Date(q.created_at).getTime() - new Date(p.created_at).getTime()) < 2e3
  ), oe = async (p) => {
    try {
      const O = await Hr(p);
      c(O);
    } catch (O) {
      console.error("Error fetching messages:", O), N("Failed to load messages");
    }
  }, J = async () => {
    if (k)
      try {
        const p = await Br(k);
        l(p);
      } catch (p) {
        console.error("Error fetching conversations:", p), N("Failed to load conversations");
      }
  }, L = async (p) => {
    if (f)
      try {
        await Dt(f, {
          rating: p,
          last_message_at: (/* @__PURE__ */ new Date()).toISOString()
        }), await J();
      } catch (O) {
        console.error("Error updating rating:", O), N("Failed to update rating");
      }
  };
  Ie(() => {
    var p;
    t && (s.length > 0 || M) && ((p = S.current) == null || p.scrollIntoView({ behavior: "smooth" }));
  }, [s, t, M]);
  const U = async () => {
    c([]), y(null), E(!1), Se(null), F(!1), d("chat");
  }, ee = () => {
    d("history"), c([]), y(null), E(!1);
  }, se = async (p) => {
    try {
      y(p.id), E(p.status === "archived"), Se(null), F(!1), await oe(p.id), p.status === "archived" && Se(p.rating || null), d("chat");
    } catch (O) {
      console.error("Error loading conversation:", O);
    }
  };
  Ie(() => {
    k && J();
  }, [k]);
  const ie = async () => {
    try {
      const p = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "signInAnonymously" })
      }), { user: O } = await p.json();
      if (!O) throw new Error("Failed to create anonymous session");
      const q = {
        domain_id: e,
        user_id: O.id,
        session_id: k,
        last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }, de = await fetch("/api/supabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "createConversation",
          payload: { conversation: q }
        })
      }), { conversation: re } = await de.json();
      return re.id;
    } catch (p) {
      throw console.error("Error creating conversation:", p), p;
    }
  }, Ne = async () => {
    try {
      const p = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "getDomainSettings",
          domainId: e
        })
      }), { settings: O } = await p.json();
      ge(O ? {
        chatbotName: O.chatbot_name,
        greetingMessage: O.greeting_message || "Hello! How can I help you today?",
        color: O.primary_color || "#FF6B00",
        headerTextColor: O.header_text_color || "#000000"
      } : {
        chatbotName: "Friendly Assistant",
        greetingMessage: "Hello! How can I help you today?",
        color: "#FF6B00",
        headerTextColor: "#000000"
      });
    } catch (p) {
      console.error("Error fetching chatbot config:", p), ge({
        chatbotName: "Friendly Assistant",
        greetingMessage: "Hello! How can I help you today?",
        color: "#FF6B00",
        headerTextColor: "#000000"
      });
    }
  };
  Ie(() => {
    e && Ne();
  }, [e]);
  const [$, ge] = B({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  }), ye = {
    backgroundColor: $.color
  }, Ae = async () => {
    if (f)
      try {
        c([]), w.clear(), await oe(f);
      } catch (p) {
        console.error("Error refreshing chat:", p), N("Failed to refresh chat");
      }
  }, [te, Se] = B(null), _e = async (p) => {
    await L(p);
  }, Ee = async () => {
    if (f)
      try {
        await Dt(f, {
          requested_live_at: (/* @__PURE__ */ new Date()).toISOString()
        }), F(!0);
        const p = {
          id: `temp-${Date.now()}`,
          content: "I'll connect you with a live agent. Please wait a moment while I transfer your chat.",
          sender_type: "bot",
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        c((O) => [...O, p]);
      } catch (p) {
        console.error("Error requesting live chat:", p), N("Failed to request live chat. Please try again.");
      }
  };
  Ie(() => {
    (async () => {
      let O = localStorage.getItem(Jt);
      O || (O = window.crypto.randomUUID(), localStorage.setItem(Jt, O)), R(O);
    })();
  }, []);
  const Oe = async (p) => {
    try {
      b(!0), N(null);
      const { data: { user: O } } = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "getUser" })
      }).then((re) => re.json());
      O || await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "signInAnonymously" })
      });
      const q = f || await ie();
      f || y(q);
      const de = {
        id: `temp-${Date.now()}`,
        content: p,
        sender_type: "user",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      c((re) => Z(de, re) ? re : [...re, de]), await A(p, q), o("");
    } catch (O) {
      console.error("Error sending message:", O), N("Failed to send message. Please try again.");
    } finally {
      b(!1);
    }
  }, ve = async (p) => {
    p.preventDefault(), !(!n.trim() || x) && await Oe(n.trim());
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    t && /* @__PURE__ */ u.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: $.color }, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ u.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ u.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ u.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: ye })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ u.jsx("h3", { className: "font-medium", style: { color: $.headerTextColor }, children: $.chatbotName }),
          /* @__PURE__ */ u.jsxs("p", { className: "text-sm", style: { color: $.headerTextColor }, children: [
            "from ",
            $.chatbotName
          ] })
        ] }),
        g === "chat" && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
          Y ? /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: $.headerTextColor },
              title: "Waiting for agent",
              children: /* @__PURE__ */ u.jsx(Ar, { className: "h-4 w-4" })
            }
          ) : /* @__PURE__ */ u.jsx(
            "button",
            {
              onClick: Ee,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm hover:bg-white/30",
              style: { color: $.headerTextColor },
              title: "Request live agent",
              disabled: !f || M,
              children: /* @__PURE__ */ u.jsx(qr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              onClick: Ae,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: $.headerTextColor },
              title: "Refresh chat",
              children: /* @__PURE__ */ u.jsx(Lr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              onClick: ee,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: $.headerTextColor },
              children: /* @__PURE__ */ u.jsx(Fr, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "h-[400px] overflow-y-auto p-4 bg-gray-50 relative", children: g === "history" ? /* @__PURE__ */ u.jsxs("div", { className: "space-y-4 h-full", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ u.jsx("h3", { className: "font-medium text-gray-900", children: "Conversation History" }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              onClick: U,
              className: "flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600",
              children: [
                /* @__PURE__ */ u.jsx(Wr, { className: "h-4 w-4" }),
                "Start New Chat"
              ]
            }
          )
        ] }),
        m.map((p) => /* @__PURE__ */ u.jsxs(
          "button",
          {
            onClick: () => se(p),
            className: "w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200",
            children: [
              /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                /* @__PURE__ */ u.jsx("span", { className: "text-sm font-medium text-gray-900", children: Ye(new Date(p.created_at), "PPP") }),
                /* @__PURE__ */ u.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${p.status === "archived" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600"}`, children: p.status === "archived" ? "Archived" : "Active" })
              ] }),
              /* @__PURE__ */ u.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Last message: ",
                Ye(new Date(p.last_message_at), "p")
              ] })
            ]
          },
          p.id
        )),
        m.length === 0 && /* @__PURE__ */ u.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ u.jsx("p", { className: "mb-4", children: "No previous conversations found" }) })
      ] }) : /* @__PURE__ */ u.jsxs("div", { className: "space-y-4", children: [
        g === "chat" && /* @__PURE__ */ u.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ u.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
          /* @__PURE__ */ u.jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm max-w-[80%]", children: [
            /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: $.greetingMessage }),
            /* @__PURE__ */ u.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: Ye(/* @__PURE__ */ new Date(), "h:mm a") })
          ] })
        ] }),
        s.map((p) => /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `flex gap-2 ${p.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              p.sender_type === "bot" && /* @__PURE__ */ u.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg max-w-[80%] ${p.sender_type === "user" ? "bg-orange-500 text-white ml-auto" : "bg-white shadow-sm"}`,
                  children: [
                    /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: p.content }),
                    /* @__PURE__ */ u.jsx("span", { className: `text-xs mt-1 block ${p.sender_type === "user" ? "text-orange-100" : "text-gray-500"}`, children: Ye(new Date(p.created_at), "h:mm a") })
                  ]
                }
              ),
              p.sender_type === "user" && /* @__PURE__ */ u.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          p.id
        )),
        M && /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center gap-3 my-4", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ u.jsx(Nr, { className: "h-4 w-4" }),
            /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: "This conversation has been archived" })
          ] }),
          !te && /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("p", { className: "text-sm text-gray-600", children: "How was this conversation?" }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  onClick: () => _e("bad"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors",
                  children: [
                    /* @__PURE__ */ u.jsx($r, { className: "h-4 w-4" }),
                    /* @__PURE__ */ u.jsx("span", { children: "Bad" })
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  onClick: () => _e("ok"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors",
                  children: [
                    /* @__PURE__ */ u.jsx(Ir, { className: "h-4 w-4" }),
                    /* @__PURE__ */ u.jsx("span", { children: "OK" })
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  onClick: () => _e("good"),
                  className: "flex items-center gap-1 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors",
                  children: [
                    /* @__PURE__ */ u.jsx(Vr, { className: "h-4 w-4" }),
                    /* @__PURE__ */ u.jsx("span", { children: "Good" })
                  ]
                }
              )
            ] })
          ] }),
          te && /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
            /* @__PURE__ */ u.jsx("span", { className: "text-sm text-gray-600", children: "You rated this conversation:" }),
            /* @__PURE__ */ u.jsx("span", { className: `font-medium ${te === "bad" ? "text-red-600" : te === "ok" ? "text-yellow-600" : "text-green-600"}`, children: te === "bad" ? "Bad 👎" : te === "ok" ? "OK 😐" : "Good 👍" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { ref: S })
      ] }) }),
      g === "chat" && /* @__PURE__ */ u.jsxs("form", { onSubmit: ve, className: "p-4 border-t bg-white", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "text",
              value: n,
              onChange: (p) => o(p.target.value),
              placeholder: "Type your message...",
              className: "w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed",
              style: { "--tw-ring-color": $.color },
              disabled: x || M
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "submit",
              disabled: !n.trim() || x || M,
              className: "p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
              style: ye,
              children: x ? /* @__PURE__ */ u.jsx("div", { className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ u.jsx(Yr, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ u.jsx(
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
    /* @__PURE__ */ u.jsx(
      "button",
      {
        className: "w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg",
        style: ye,
        onClick: () => r(!t),
        children: t ? "×" : "💬"
      }
    )
  ] });
}
function Ka() {
  const e = document.createElement("div");
  e.id = "chatbot-widget-root", document.body.appendChild(e);
  const t = window.CHATBOT_CONFIG || {};
  it(e).render(/* @__PURE__ */ u.jsx(Ja, { domainId: t.domainId }));
}
Ka();
//# sourceMappingURL=chatbot-widget.es.js.map
