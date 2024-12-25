import dt, { forwardRef as Ht, createElement as et, useState as D, useRef as Vt, useEffect as Ce } from "react";
import Bt from "react-dom";
var Me = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function Xt() {
  if (tt) return Z;
  tt = 1;
  var e = dt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(y, h, v) {
    var w, P = {}, T = null, W = null;
    v !== void 0 && (T = "" + v), h.key !== void 0 && (T = "" + h.key), h.ref !== void 0 && (W = h.ref);
    for (w in h) a.call(h, w) && !c.hasOwnProperty(w) && (P[w] = h[w]);
    if (y && y.defaultProps) for (w in h = y.defaultProps, h) P[w] === void 0 && (P[w] = h[w]);
    return { $$typeof: t, type: y, key: T, ref: W, props: P, _owner: o.current };
  }
  return Z.Fragment = n, Z.jsx = d, Z.jsxs = d, Z;
}
var ee = {}, rt;
function Ut() {
  if (rt) return ee;
  rt = 1;
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
    var t = dt, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), C = Symbol.iterator, L = "@@iterator";
    function oe(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = C && r[C] || r[L];
      return typeof i == "function" ? i : null;
    }
    var F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(r) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
          s[u - 1] = arguments[u];
        ie("error", r, s);
      }
    }
    function ie(r, i, s) {
      {
        var u = F.ReactDebugCurrentFrame, b = u.getStackAddendum();
        b !== "" && (i += "%s", s = s.concat([b]));
        var E = s.map(function(m) {
          return String(m);
        });
        E.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, E);
      }
    }
    var ye = !1, A = !1, ve = !1, G = !1, J = !1, se;
    se = Symbol.for("react.module.reference");
    function we(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === d || J || r === c || r === w || r === P || G || r === S || ye || A || ve || typeof r == "object" && r !== null && (r.$$typeof === W || r.$$typeof === T || r.$$typeof === y || r.$$typeof === h || r.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === se || r.getModuleId !== void 0));
    }
    function be(r, i, s) {
      var u = r.displayName;
      if (u)
        return u;
      var b = i.displayName || i.name || "";
      return b !== "" ? s + "(" + b + ")" : s;
    }
    function ce(r) {
      return r.displayName || "Context";
    }
    function l(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case d:
          return "Profiler";
        case c:
          return "StrictMode";
        case w:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            var i = r;
            return ce(i) + ".Consumer";
          case y:
            var s = r;
            return ce(s._context) + ".Provider";
          case v:
            return be(r, r.render, "ForwardRef");
          case T:
            var u = r.displayName || null;
            return u !== null ? u : l(r.type) || "Memo";
          case W: {
            var b = r, E = b._payload, m = b._init;
            try {
              return l(m(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var p = Object.assign, O = 0, Q, De, We, Ne, Ye, Fe, Ae;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function yt() {
      {
        if (O === 0) {
          Q = console.log, De = console.info, We = console.warn, Ne = console.error, Ye = console.group, Fe = console.groupCollapsed, Ae = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        O++;
      }
    }
    function vt() {
      {
        if (O--, O === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: p({}, r, {
              value: Q
            }),
            info: p({}, r, {
              value: De
            }),
            warn: p({}, r, {
              value: We
            }),
            error: p({}, r, {
              value: Ne
            }),
            group: p({}, r, {
              value: Ye
            }),
            groupCollapsed: p({}, r, {
              value: Fe
            }),
            groupEnd: p({}, r, {
              value: Ae
            })
          });
        }
        O < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = F.ReactCurrentDispatcher, xe;
    function ue(r, i, s) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (b) {
            var u = b.stack.trim().match(/\n( *(at )?)/);
            xe = u && u[1] || "";
          }
        return `
` + xe + r;
      }
    }
    var Ee = !1, le;
    {
      var wt = typeof WeakMap == "function" ? WeakMap : Map;
      le = new wt();
    }
    function Le(r, i) {
      if (!r || Ee)
        return "";
      {
        var s = le.get(r);
        if (s !== void 0)
          return s;
      }
      var u;
      Ee = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = pe.current, pe.current = null, yt();
      try {
        if (i) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (j) {
              u = j;
            }
            Reflect.construct(r, [], m);
          } else {
            try {
              m.call();
            } catch (j) {
              u = j;
            }
            r.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            u = j;
          }
          r();
        }
      } catch (j) {
        if (j && u && typeof j.stack == "string") {
          for (var f = j.stack.split(`
`), M = u.stack.split(`
`), _ = f.length - 1, k = M.length - 1; _ >= 1 && k >= 0 && f[_] !== M[k]; )
            k--;
          for (; _ >= 1 && k >= 0; _--, k--)
            if (f[_] !== M[k]) {
              if (_ !== 1 || k !== 1)
                do
                  if (_--, k--, k < 0 || f[_] !== M[k]) {
                    var N = `
` + f[_].replace(" at new ", " at ");
                    return r.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", r.displayName)), typeof r == "function" && le.set(r, N), N;
                  }
                while (_ >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, pe.current = E, vt(), Error.prepareStackTrace = b;
      }
      var B = r ? r.displayName || r.name : "", q = B ? ue(B) : "";
      return typeof r == "function" && le.set(r, q), q;
    }
    function bt(r, i, s) {
      return Le(r, !1);
    }
    function pt(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function de(r, i, s) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Le(r, pt(r));
      if (typeof r == "string")
        return ue(r);
      switch (r) {
        case w:
          return ue("Suspense");
        case P:
          return ue("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case v:
            return bt(r.render);
          case T:
            return de(r.type, i, s);
          case W: {
            var u = r, b = u._payload, E = u._init;
            try {
              return de(E(b), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, qe = {}, $e = F.ReactDebugCurrentFrame;
    function fe(r) {
      if (r) {
        var i = r._owner, s = de(r.type, r._source, i ? i.type : null);
        $e.setExtraStackFrame(s);
      } else
        $e.setExtraStackFrame(null);
    }
    function xt(r, i, s, u, b) {
      {
        var E = Function.call.bind(z);
        for (var m in r)
          if (E(r, m)) {
            var f = void 0;
            try {
              if (typeof r[m] != "function") {
                var M = Error((u || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              f = r[m](i, m, u, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              f = _;
            }
            f && !(f instanceof Error) && (fe(b), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", s, m, typeof f), fe(null)), f instanceof Error && !(f.message in qe) && (qe[f.message] = !0, fe(b), R("Failed %s type: %s", s, f.message), fe(null));
          }
      }
    }
    var Et = Array.isArray;
    function Oe(r) {
      return Et(r);
    }
    function Ot(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return s;
      }
    }
    function Pt(r) {
      try {
        return He(r), !1;
      } catch {
        return !0;
      }
    }
    function He(r) {
      return "" + r;
    }
    function Ve(r) {
      if (Pt(r))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(r)), He(r);
    }
    var K = F.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Xe, Pe;
    Pe = {};
    function St(r) {
      if (z.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function kt(r) {
      if (z.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Tt(r, i) {
      if (typeof r.ref == "string" && K.current && i && K.current.stateNode !== i) {
        var s = l(K.current.type);
        Pe[s] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l(K.current.type), r.ref), Pe[s] = !0);
      }
    }
    function Ct(r, i) {
      {
        var s = function() {
          Be || (Be = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Rt(r, i) {
      {
        var s = function() {
          Xe || (Xe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Mt = function(r, i, s, u, b, E, m) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: s,
        props: m,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function jt(r, i, s, u, b) {
      {
        var E, m = {}, f = null, M = null;
        s !== void 0 && (Ve(s), f = "" + s), kt(i) && (Ve(i.key), f = "" + i.key), St(i) && (M = i.ref, Tt(i, b));
        for (E in i)
          z.call(i, E) && !_t.hasOwnProperty(E) && (m[E] = i[E]);
        if (r && r.defaultProps) {
          var _ = r.defaultProps;
          for (E in _)
            m[E] === void 0 && (m[E] = _[E]);
        }
        if (f || M) {
          var k = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          f && Ct(m, k), M && Rt(m, k);
        }
        return Mt(r, f, M, b, u, K.current, m);
      }
    }
    var _e = F.ReactCurrentOwner, Ue = F.ReactDebugCurrentFrame;
    function V(r) {
      if (r) {
        var i = r._owner, s = de(r.type, r._source, i ? i.type : null);
        Ue.setExtraStackFrame(s);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function ke(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function Ge() {
      {
        if (_e.current) {
          var r = l(_e.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Dt(r) {
      return "";
    }
    var Je = {};
    function Wt(r) {
      {
        var i = Ge();
        if (!i) {
          var s = typeof r == "string" ? r : r.displayName || r.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function Qe(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var s = Wt(i);
        if (Je[s])
          return;
        Je[s] = !0;
        var u = "";
        r && r._owner && r._owner !== _e.current && (u = " It was passed a child from " + l(r._owner.type) + "."), V(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, u), V(null);
      }
    }
    function ze(r, i) {
      {
        if (typeof r != "object")
          return;
        if (Oe(r))
          for (var s = 0; s < r.length; s++) {
            var u = r[s];
            ke(u) && Qe(u, i);
          }
        else if (ke(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var b = oe(r);
          if (typeof b == "function" && b !== r.entries)
            for (var E = b.call(r), m; !(m = E.next()).done; )
              ke(m.value) && Qe(m.value, i);
        }
      }
    }
    function Nt(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === T))
          s = i.propTypes;
        else
          return;
        if (s) {
          var u = l(i);
          xt(s, r.props, "prop", u, r);
        } else if (i.PropTypes !== void 0 && !Se) {
          Se = !0;
          var b = l(i);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(r) {
      {
        for (var i = Object.keys(r.props), s = 0; s < i.length; s++) {
          var u = i[s];
          if (u !== "children" && u !== "key") {
            V(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), V(null);
            break;
          }
        }
        r.ref !== null && (V(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var Ke = {};
    function Ze(r, i, s, u, b, E) {
      {
        var m = we(r);
        if (!m) {
          var f = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = Dt();
          M ? f += M : f += Ge();
          var _;
          r === null ? _ = "null" : Oe(r) ? _ = "array" : r !== void 0 && r.$$typeof === n ? (_ = "<" + (l(r.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof r, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, f);
        }
        var k = jt(r, i, s, b, E);
        if (k == null)
          return k;
        if (m) {
          var N = i.children;
          if (N !== void 0)
            if (u)
              if (Oe(N)) {
                for (var B = 0; B < N.length; B++)
                  ze(N[B], r);
                Object.freeze && Object.freeze(N);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(N, r);
        }
        if (z.call(i, "key")) {
          var q = l(r), j = Object.keys(i).filter(function($t) {
            return $t !== "key";
          }), Te = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[q + Te]) {
            var qt = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, q, qt, q), Ke[q + Te] = !0;
          }
        }
        return r === o ? Yt(k) : Nt(k), k;
      }
    }
    function Ft(r, i, s) {
      return Ze(r, i, s, !0);
    }
    function At(r, i, s) {
      return Ze(r, i, s, !1);
    }
    var It = At, Lt = Ft;
    ee.Fragment = o, ee.jsx = It, ee.jsxs = Lt;
  }(), ee;
}
var Gt = {};
Gt.NODE_ENV === "production" ? Me.exports = Xt() : Me.exports = Ut();
var g = Me.exports, je, Jt = {}, he = Bt;
if (Jt.NODE_ENV === "production")
  je = he.createRoot, he.hydrateRoot;
else {
  var nt = he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  je = function(e, t) {
    nt.usingClientEntryPoint = !0;
    try {
      return he.createRoot(e, t);
    } finally {
      nt.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qt = {
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
const zt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), U = (e, t) => {
  const n = Ht(
    ({
      color: a = "currentColor",
      size: o = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: d,
      className: y = "",
      children: h,
      ...v
    }, w) => et(
      "svg",
      {
        ref: w,
        ...Qt,
        width: o,
        height: o,
        stroke: a,
        strokeWidth: d ? Number(c) * 24 / Number(o) : c,
        className: ["lucide", `lucide-${zt(e)}`, y].join(" "),
        ...v
      },
      [
        ...t.map(([P, T]) => et(P, T)),
        ...Array.isArray(h) ? h : [h]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = U("Hourglass", [
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
const Zt = U("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = U("RefreshCw", [
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
const tr = U("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = U("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Y(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function H(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const ft = 6048e5, ar = 864e5;
let or = {};
function ge() {
  return or;
}
function ae(e, t) {
  var y, h, v, w;
  const n = ge(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((w = (v = n.locale) == null ? void 0 : v.options) == null ? void 0 : w.weekStartsOn) ?? 0, o = Y(e), c = o.getDay(), d = (c < a ? 7 : 0) + c - a;
  return o.setDate(o.getDate() - d), o.setHours(0, 0, 0, 0), o;
}
function me(e) {
  return ae(e, { weekStartsOn: 1 });
}
function ht(e) {
  const t = Y(e), n = t.getFullYear(), a = H(e, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = me(a), c = H(e, 0);
  c.setFullYear(n, 0, 4), c.setHours(0, 0, 0, 0);
  const d = me(c);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= d.getTime() ? n : n - 1;
}
function at(e) {
  const t = Y(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ot(e) {
  const t = Y(e), n = new Date(
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
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function ir(e, t) {
  const n = at(e), a = at(t), o = +n - ot(n), c = +a - ot(a);
  return Math.round((o - c) / ar);
}
function sr(e) {
  const t = ht(e), n = H(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), me(n);
}
function cr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ur(e) {
  if (!cr(e) && typeof e != "number")
    return !1;
  const t = Y(e);
  return !isNaN(Number(t));
}
function lr(e) {
  const t = Y(e), n = H(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const dr = {
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
}, fr = (e, t, n) => {
  let a;
  const o = dr[e];
  return typeof o == "string" ? a = o : t === 1 ? a = o.one : a = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + a : a + " ago" : a;
};
function Re(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const hr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, mr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, gr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yr = {
  date: Re({
    formats: hr,
    defaultWidth: "full"
  }),
  time: Re({
    formats: mr,
    defaultWidth: "full"
  }),
  dateTime: Re({
    formats: gr,
    defaultWidth: "full"
  })
}, vr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, wr = (e, t, n, a) => vr[e];
function te(e) {
  return (t, n) => {
    const a = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (a === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, y = n != null && n.width ? String(n.width) : d;
      o = e.formattingValues[y] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, y = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[y] || e.values[d];
    }
    const c = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[c];
  };
}
const br = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, pr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, xr = {
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
}, Er = {
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
}, Or = {
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
}, Pr = {
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
}, _r = (e, t) => {
  const n = Number(e), a = n % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Sr = {
  ordinalNumber: _r,
  era: te({
    values: br,
    defaultWidth: "wide"
  }),
  quarter: te({
    values: pr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: te({
    values: xr,
    defaultWidth: "wide"
  }),
  day: te({
    values: Er,
    defaultWidth: "wide"
  }),
  dayPeriod: te({
    values: Or,
    defaultWidth: "wide",
    formattingValues: Pr,
    defaultFormattingWidth: "wide"
  })
};
function re(e) {
  return (t, n = {}) => {
    const a = n.width, o = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], c = t.match(o);
    if (!c)
      return null;
    const d = c[0], y = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(y) ? Tr(y, (P) => P.test(d)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      kr(y, (P) => P.test(d))
    );
    let v;
    v = e.valueCallback ? e.valueCallback(h) : h, v = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(v)
    ) : v;
    const w = t.slice(d.length);
    return { value: v, rest: w };
  };
}
function kr(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Tr(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Cr(e) {
  return (t, n = {}) => {
    const a = t.match(e.matchPattern);
    if (!a) return null;
    const o = a[0], c = t.match(e.parsePattern);
    if (!c) return null;
    let d = e.valueCallback ? e.valueCallback(c[0]) : c[0];
    d = n.valueCallback ? n.valueCallback(d) : d;
    const y = t.slice(o.length);
    return { value: d, rest: y };
  };
}
const Rr = /^(\d+)(th|st|nd|rd)?/i, Mr = /\d+/i, jr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Dr = {
  any: [/^b/i, /^(a|c)/i]
}, Wr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Nr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Yr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Fr = {
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
}, Ar = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ir = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Lr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qr = {
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
}, $r = {
  ordinalNumber: Cr({
    matchPattern: Rr,
    parsePattern: Mr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: re({
    matchPatterns: jr,
    defaultMatchWidth: "wide",
    parsePatterns: Dr,
    defaultParseWidth: "any"
  }),
  quarter: re({
    matchPatterns: Wr,
    defaultMatchWidth: "wide",
    parsePatterns: Nr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: re({
    matchPatterns: Yr,
    defaultMatchWidth: "wide",
    parsePatterns: Fr,
    defaultParseWidth: "any"
  }),
  day: re({
    matchPatterns: Ar,
    defaultMatchWidth: "wide",
    parsePatterns: Ir,
    defaultParseWidth: "any"
  }),
  dayPeriod: re({
    matchPatterns: Lr,
    defaultMatchWidth: "any",
    parsePatterns: qr,
    defaultParseWidth: "any"
  })
}, Hr = {
  code: "en-US",
  formatDistance: fr,
  formatLong: yr,
  formatRelative: wr,
  localize: Sr,
  match: $r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Vr(e) {
  const t = Y(e);
  return ir(t, lr(t)) + 1;
}
function Br(e) {
  const t = Y(e), n = +me(t) - +sr(t);
  return Math.round(n / ft) + 1;
}
function mt(e, t) {
  var w, P, T, W;
  const n = Y(e), a = n.getFullYear(), o = ge(), c = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((P = (w = t == null ? void 0 : t.locale) == null ? void 0 : w.options) == null ? void 0 : P.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((W = (T = o.locale) == null ? void 0 : T.options) == null ? void 0 : W.firstWeekContainsDate) ?? 1, d = H(e, 0);
  d.setFullYear(a + 1, 0, c), d.setHours(0, 0, 0, 0);
  const y = ae(d, t), h = H(e, 0);
  h.setFullYear(a, 0, c), h.setHours(0, 0, 0, 0);
  const v = ae(h, t);
  return n.getTime() >= y.getTime() ? a + 1 : n.getTime() >= v.getTime() ? a : a - 1;
}
function Xr(e, t) {
  var y, h, v, w;
  const n = ge(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) == null ? void 0 : h.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((w = (v = n.locale) == null ? void 0 : v.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = mt(e, t), c = H(e, 0);
  return c.setFullYear(o, 0, a), c.setHours(0, 0, 0, 0), ae(c, t);
}
function Ur(e, t) {
  const n = Y(e), a = +ae(n, t) - +Xr(n, t);
  return Math.round(a / ft) + 1;
}
function x(e, t) {
  const n = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(t, "0");
  return n + a;
}
const I = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
    return x(t === "yy" ? a % 100 : a, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : x(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return x(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return x(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return x(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return x(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return x(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, a = e.getMilliseconds(), o = Math.trunc(
      a * Math.pow(10, n - 3)
    );
    return x(o, t.length);
  }
}, X = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, it = {
  // Era
  G: function(e, t, n) {
    const a = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(a, { width: "abbreviated" });
      case "GGGGG":
        return n.era(a, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(a, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const a = e.getFullYear(), o = a > 0 ? a : 1 - a;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return I.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, a) {
    const o = mt(e, a), c = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const d = c % 100;
      return x(d, 2);
    }
    return t === "Yo" ? n.ordinalNumber(c, { unit: "year" }) : x(c, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ht(e);
    return x(n, t.length);
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
    const n = e.getFullYear();
    return x(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(a);
      case "QQ":
        return x(a, 2);
      case "Qo":
        return n.ordinalNumber(a, { unit: "quarter" });
      case "QQQ":
        return n.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(a);
      case "qq":
        return x(a, 2);
      case "qo":
        return n.ordinalNumber(a, { unit: "quarter" });
      case "qqq":
        return n.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const a = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return I.M(e, t);
      case "Mo":
        return n.ordinalNumber(a + 1, { unit: "month" });
      case "MMM":
        return n.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(a, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const a = e.getMonth();
    switch (t) {
      case "L":
        return String(a + 1);
      case "LL":
        return x(a + 1, 2);
      case "Lo":
        return n.ordinalNumber(a + 1, { unit: "month" });
      case "LLL":
        return n.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(a, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, a) {
    const o = Ur(e, a);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : x(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const a = Br(e);
    return t === "Io" ? n.ordinalNumber(a, { unit: "week" }) : x(a, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : I.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const a = Vr(e);
    return t === "Do" ? n.ordinalNumber(a, { unit: "dayOfYear" }) : x(a, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const a = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, a) {
    const o = e.getDay(), c = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(c);
      case "ee":
        return x(c, 2);
      case "eo":
        return n.ordinalNumber(c, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, a) {
    const o = e.getDay(), c = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(c);
      case "cc":
        return x(c, t.length);
      case "co":
        return n.ordinalNumber(c, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const a = e.getDay(), o = a === 0 ? 7 : a;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return x(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const a = e.getHours();
    let o;
    switch (a === 12 ? o = X.noon : a === 0 ? o = X.midnight : o = a / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const a = e.getHours();
    let o;
    switch (a >= 17 ? o = X.evening : a >= 12 ? o = X.afternoon : a >= 4 ? o = X.morning : o = X.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let a = e.getHours() % 12;
      return a === 0 && (a = 12), n.ordinalNumber(a, { unit: "hour" });
    }
    return I.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : I.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const a = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(a, { unit: "hour" }) : x(a, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let a = e.getHours();
    return a === 0 && (a = 24), t === "ko" ? n.ordinalNumber(a, { unit: "hour" }) : x(a, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : I.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : I.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return I.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const a = e.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (t) {
      case "X":
        return ct(a);
      case "XXXX":
      case "XX":
        return $(a);
      case "XXXXX":
      case "XXX":
      default:
        return $(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const a = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return ct(a);
      case "xxxx":
      case "xx":
        return $(a);
      case "xxxxx":
      case "xxx":
      default:
        return $(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const a = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + st(a, ":");
      case "OOOO":
      default:
        return "GMT" + $(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const a = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + st(a, ":");
      case "zzzz":
      default:
        return "GMT" + $(a, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const a = Math.trunc(e.getTime() / 1e3);
    return x(a, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const a = e.getTime();
    return x(a, t.length);
  }
};
function st(e, t = "") {
  const n = e > 0 ? "-" : "+", a = Math.abs(e), o = Math.trunc(a / 60), c = a % 60;
  return c === 0 ? n + String(o) : n + String(o) + t + x(c, 2);
}
function ct(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + x(Math.abs(e) / 60, 2) : $(e, t);
}
function $(e, t = "") {
  const n = e > 0 ? "-" : "+", a = Math.abs(e), o = x(Math.trunc(a / 60), 2), c = x(a % 60, 2);
  return n + o + t + c;
}
const ut = (e, t) => {
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
}, gt = (e, t) => {
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
}, Gr = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], a = n[1], o = n[2];
  if (!o)
    return ut(e, t);
  let c;
  switch (a) {
    case "P":
      c = t.dateTime({ width: "short" });
      break;
    case "PP":
      c = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      c = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      c = t.dateTime({ width: "full" });
      break;
  }
  return c.replace("{{date}}", ut(a, t)).replace("{{time}}", gt(o, t));
}, Jr = {
  p: gt,
  P: Gr
}, Qr = /^D+$/, zr = /^Y+$/, Kr = ["D", "DD", "YY", "YYYY"];
function Zr(e) {
  return Qr.test(e);
}
function en(e) {
  return zr.test(e);
}
function tn(e, t, n) {
  const a = rn(e, t, n);
  if (console.warn(a), Kr.includes(e)) throw new RangeError(a);
}
function rn(e, t, n) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const nn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, an = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, on = /^'([^]*?)'?$/, sn = /''/g, cn = /[a-zA-Z]/;
function un(e, t, n) {
  var w, P, T, W;
  const a = ge(), o = a.locale ?? Hr, c = a.firstWeekContainsDate ?? ((P = (w = a.locale) == null ? void 0 : w.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, d = a.weekStartsOn ?? ((W = (T = a.locale) == null ? void 0 : T.options) == null ? void 0 : W.weekStartsOn) ?? 0, y = Y(e);
  if (!ur(y))
    throw new RangeError("Invalid time value");
  let h = t.match(an).map((S) => {
    const C = S[0];
    if (C === "p" || C === "P") {
      const L = Jr[C];
      return L(S, o.formatLong);
    }
    return S;
  }).join("").match(nn).map((S) => {
    if (S === "''")
      return { isToken: !1, value: "'" };
    const C = S[0];
    if (C === "'")
      return { isToken: !1, value: ln(S) };
    if (it[C])
      return { isToken: !0, value: S };
    if (C.match(cn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: S };
  });
  o.localize.preprocessor && (h = o.localize.preprocessor(y, h));
  const v = {
    firstWeekContainsDate: c,
    weekStartsOn: d,
    locale: o
  };
  return h.map((S) => {
    if (!S.isToken) return S.value;
    const C = S.value;
    (en(C) || Zr(C)) && tn(C, t, String(e));
    const L = it[C[0]];
    return L(y, C, o.localize, v);
  }).join("");
}
function ln(e) {
  const t = e.match(on);
  return t ? t[1].replace(sn, "'") : e;
}
const lt = "chatbot_session_id", ne = "https://deplo-dash-supa.vercel.app";
function dn({ domainId: e }) {
  const [t, n] = D(!1), [a, o] = D(""), [c, d] = D([]);
  D([]);
  const [y, h] = D("history"), [v, w] = D(null), [P, T] = D(!1);
  D(/* @__PURE__ */ new Set());
  const [W, S] = D(null), [C, L] = D(null), oe = Vt(null), [F, R] = D(!1), [ie, ye] = D(!1), [A, ve] = D({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  });
  D(null);
  const G = {
    backgroundColor: A.color
  };
  Ce(() => {
    var l;
    t && (c.length > 0 || F) && ((l = oe.current) == null || l.scrollIntoView({ behavior: "smooth" }));
  }, [c, t, F]), Ce(() => {
    (async () => {
      let p = localStorage.getItem(lt);
      p || (p = window.crypto.randomUUID(), localStorage.setItem(lt, p)), L(p), await be(p);
    })();
  }, []), Ce(() => {
    (async () => {
      try {
        const O = await (await fetch(`${ne}/api/widget`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "getConfig",
            domainId: e
          })
        })).json();
        if (O.error) throw new Error(O.error);
        ve({
          chatbotName: O.chatbotName || "Chatbot",
          greetingMessage: O.greetingMessage || "Hello! How can I help you today?",
          color: O.color || "#FF6B00",
          headerTextColor: O.headerTextColor || "#000000"
        });
      } catch (p) {
        console.error("Error fetching config:", p);
      }
    })();
  }, [e]);
  const J = async (l) => {
    try {
      const O = await (await fetch(`${ne}/api/widget`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "getMessages",
          domainId: e,
          payload: { conversationId: l }
        })
      })).json();
      if (O.error) throw new Error(O.error);
      d(O.messages);
    } catch (p) {
      S(p.message);
    }
  }, se = async (l) => {
    try {
      T(!0);
      const O = await (await fetch(`${ne}/api/widget`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          domainId: e,
          payload: {
            message: l,
            sessionId: C,
            conversationId: v
          }
        })
      })).json();
      if (O.error) throw new Error(O.error);
      o(""), await J(v || O.message.conversation_id);
    } catch (p) {
      S(p.message);
    } finally {
      T(!1);
    }
  }, we = async (l) => {
    l.preventDefault(), !(!a.trim() || P) && await se(a.trim());
  }, be = async (l) => {
    try {
      const O = await (await fetch(`${ne}/api/widget`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "getConversations",
          domainId: e,
          payload: { sessionId: l }
        })
      })).json();
      if (O.error) throw new Error(O.error);
      if (!O.conversations || O.conversations.length === 0) {
        console.log("No active conversations found");
        return;
      }
      const Q = O.conversations[0];
      w(Q.id), await J(Q.id);
    } catch (p) {
      console.error("Error loading conversation:", p), S(p.message);
    }
  }, ce = async () => {
    if (v)
      try {
        const p = await (await fetch(`${ne}/api/widget`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "updateConversation",
            domainId: e,
            payload: {
              conversationId: v,
              updates: { requested_live_at: (/* @__PURE__ */ new Date()).toISOString() }
            }
          })
        })).json();
        if (p.error) throw new Error(p.error);
        ye(!0);
      } catch (l) {
        S(l.message);
      }
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: () => n(!t),
        className: "w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white",
        style: G,
        children: t ? /* @__PURE__ */ g.jsx(nr, { className: "h-6 w-6" }) : /* @__PURE__ */ g.jsx(Zt, { className: "h-6 w-6" })
      }
    ),
    t && /* @__PURE__ */ g.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: A.color }, children: [
        /* @__PURE__ */ g.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ g.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ g.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ g.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: G })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ g.jsx("h3", { className: "font-medium", style: { color: A.headerTextColor }, children: A.chatbotName }),
          /* @__PURE__ */ g.jsx("p", { className: "text-sm", style: { color: A.headerTextColor }, children: "AI Assistant" })
        ] }),
        y === "chat" && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: ce,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: A.headerTextColor },
              disabled: !v || F || ie,
              children: ie ? /* @__PURE__ */ g.jsx(Kt, { className: "h-4 w-4" }) : /* @__PURE__ */ g.jsx(rr, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: () => J(v),
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: A.headerTextColor },
              disabled: !v,
              children: /* @__PURE__ */ g.jsx(er, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "h-[400px] overflow-y-auto p-4 bg-gray-50", children: [
        c.map((l) => /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: `flex gap-2 mb-4 ${l.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              l.sender_type === "bot" && /* @__PURE__ */ g.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ g.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg shadow-sm ${l.sender_type === "user" ? "bg-blue-500 text-white" : "bg-white"}`,
                  children: [
                    /* @__PURE__ */ g.jsx("p", { className: "text-sm", children: l.content }),
                    /* @__PURE__ */ g.jsx("span", { className: `text-xs mt-1 block ${l.sender_type === "user" ? "text-blue-100" : "text-gray-500"}`, children: un(new Date(l.created_at), "h:mm a") })
                  ]
                }
              ),
              l.sender_type === "user" && /* @__PURE__ */ g.jsx("div", { className: "w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          l.id
        )),
        /* @__PURE__ */ g.jsx("div", { ref: oe })
      ] }),
      /* @__PURE__ */ g.jsx("form", { onSubmit: we, className: "p-4 border-t bg-white", children: /* @__PURE__ */ g.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "text",
            value: a,
            onChange: (l) => o(l.target.value),
            placeholder: "Type your message...",
            className: "flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2",
            style: { "--tw-ring-color": A.color },
            disabled: P
          }
        ),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "submit",
            disabled: !a.trim() || P,
            className: "p-2 rounded-full text-white",
            style: G,
            children: P ? /* @__PURE__ */ g.jsx("div", { className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ g.jsx(tr, { className: "h-5 w-5" })
          }
        )
      ] }) })
    ] })
  ] });
}
function fn() {
  const e = document.createElement("div");
  e.id = "chatbot-widget-root", document.body.appendChild(e);
  const t = window.CHATBOT_CONFIG || {};
  je(e).render(/* @__PURE__ */ g.jsx(dn, { domainId: t.domainId }));
}
fn();
//# sourceMappingURL=chatbot-widget.es.js.map
