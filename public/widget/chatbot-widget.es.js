import ke, { useState as g, useRef as we } from "react";
import gr from "react-dom";
var ee = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function yr() {
  if (Pe) return I;
  Pe = 1;
  var _ = ke, h = Symbol.for("react.element"), x = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, W = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(R, c, S) {
    var p, b = {}, m = null, L = null;
    S !== void 0 && (m = "" + S), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (p in c) O.call(c, p) && !Y.hasOwnProperty(p) && (b[p] = c[p]);
    if (R && R.defaultProps) for (p in c = R.defaultProps, c) b[p] === void 0 && (b[p] = c[p]);
    return { $$typeof: h, type: R, key: m, ref: L, props: b, _owner: W.current };
  }
  return I.Fragment = x, I.jsx = k, I.jsxs = k, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function hr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = ke, h = Symbol.for("react.element"), x = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), R = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, De = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[De];
      return typeof r == "function" ? r : null;
    }
    var w = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, $e = !1, We = !1, Ye = !1, Le = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === O || e === Y || Le || e === W || e === S || e === p || Ye || e === L || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === k || e.$$typeof === R || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case O:
          return "Fragment";
        case x:
          return "Portal";
        case Y:
          return "Profiler";
        case W:
          return "StrictMode";
        case S:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ae(r) + ".Consumer";
          case k:
            var t = e;
            return ae(t._context) + ".Provider";
          case c:
            return Ue(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case m: {
            var i = e, u = i._payload, o = i._init;
            try {
              return E(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, D = 0, oe, ie, ue, se, le, fe, ce;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ve() {
      {
        if (D === 0) {
          oe = console.log, ie = console.info, ue = console.warn, se = console.error, le = console.group, fe = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Me() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: oe
            }),
            info: T({}, e, {
              value: ie
            }),
            warn: T({}, e, {
              value: ue
            }),
            error: T({}, e, {
              value: se
            }),
            group: T({}, e, {
              value: le
            }),
            groupCollapsed: T({}, e, {
              value: fe
            }),
            groupEnd: T({}, e, {
              value: ce
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = w.ReactCurrentDispatcher, J;
    function N(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var K = !1, U;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Be();
    }
    function ve(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, y), y;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = u, Me(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", C = j ? N(j) : "";
      return typeof e == "function" && U.set(e, C), C;
    }
    function qe(e, r, t) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Je(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case S:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return qe(e.render);
          case b:
            return V(e.type, r, t);
          case m: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, pe = {}, ge = w.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, i) {
      {
        var u = Function.call.bind(F);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, M(i), f("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ge = Array.isArray;
    function G(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function he(e) {
      if (He(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ye(e);
    }
    var A = w.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Ee, z;
    z = {};
    function Ze(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = E(A.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(A.current.type), e.ref), z[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (he(t), a = "" + t), Qe(r) && (he(r.key), a = "" + r.key), Ze(r) && (d = r.ref, er(r, i));
        for (u in r)
          F.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, l), d && tr(o, l);
        }
        return nr(e, a, d, i, n, A.current, o);
      }
    }
    var H = w.ReactCurrentOwner, be = w.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function Re() {
      {
        if (H.current) {
          var e = E(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var me = {};
    function ir(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + E(e._owner.type) + "."), P(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Te(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Fe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Te(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = E(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, i, u) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = or();
          d ? a += d : a += Re();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = ar(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (G(y)) {
                for (var j = 0; j < y.length; j++)
                  Ce(y[j], e);
                Object.freeze && Object.freeze(y);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(y, e);
        }
        if (F.call(r, "key")) {
          var C = E(e), v = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), Q = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[C + Q]) {
            var vr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, C, vr, C), Oe[C + Q] = !0;
          }
        }
        return e === O ? sr(l) : ur(l), l;
      }
    }
    function lr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var cr = fr, dr = lr;
    $.Fragment = O, $.jsx = cr, $.jsxs = dr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ee.exports = yr() : ee.exports = hr();
var _r = ee.exports, re, B = gr;
if (process.env.NODE_ENV === "production")
  re = B.createRoot, B.hydrateRoot;
else {
  var xe = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  re = function(_, h) {
    xe.usingClientEntryPoint = !0;
    try {
      return B.createRoot(_, h);
    } finally {
      xe.usingClientEntryPoint = !1;
    }
  };
}
function Er({ domainId: _ }) {
  g(!1), g(""), g([]), g([]), g("history"), g(null), g(!1), g(/* @__PURE__ */ new Set()), g(null), g(null), we(null), g(!1), we(null), g(!1);
  const [h, x] = g({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  });
  h.color;
}
function br() {
  const _ = document.createElement("div");
  _.id = "chatbot-widget-root", document.body.appendChild(_);
  const h = window.CHATBOT_CONFIG || {};
  re(_).render(/* @__PURE__ */ _r.jsx(Er, { domainId: h.domainId }));
}
br();
//# sourceMappingURL=chatbot-widget.es.js.map
