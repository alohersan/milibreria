var ha = Object.defineProperty;
var ya = (e, r, t) => r in e ? ha(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Vr = (e, r, t) => ya(e, typeof r != "symbol" ? r + "" : r, t);
import * as J from "react";
import nr, { forwardRef as ga, useContext as va, Children as ba, isValidElement as ut, cloneElement as lt } from "react";
function Sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fn = { exports: {} }, zr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Ea() {
  if (Ln) return zr;
  Ln = 1;
  var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, p) {
    var m, h = {}, y = null, w = null;
    p !== void 0 && (y = "" + p), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (m in l) n.call(l, m) && !i.hasOwnProperty(m) && (h[m] = l[m]);
    if (u && u.defaultProps) for (m in l = u.defaultProps, l) h[m] === void 0 && (h[m] = l[m]);
    return { $$typeof: r, type: u, key: y, ref: w, props: h, _owner: o.current };
  }
  return zr.Fragment = t, zr.jsx = s, zr.jsxs = s, zr;
}
var Wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Ca() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), C = Symbol.iterator, b = "@@iterator";
    function g(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = C && a[C] || a[b];
      return typeof d == "function" ? d : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(a) {
      {
        for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), P = 1; P < d; P++)
          v[P - 1] = arguments[P];
        _("error", a, v);
      }
    }
    function _(a, d, v) {
      {
        var P = R.ReactDebugCurrentFrame, B = P.getStackAddendum();
        B !== "" && (d += "%s", v = v.concat([B]));
        var z = v.map(function(D) {
          return String(D);
        });
        z.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, z);
      }
    }
    var T = !1, f = !1, M = !1, j = !1, ne = !1, te;
    te = Symbol.for("react.module.reference");
    function c(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ne || a === o || a === p || a === m || j || a === w || T || f || M || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === h || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === te || a.getModuleId !== void 0));
    }
    function k(a, d, v) {
      var P = a.displayName;
      if (P)
        return P;
      var B = d.displayName || d.name || "";
      return B !== "" ? v + "(" + B + ")" : v;
    }
    function L(a) {
      return a.displayName || "Context";
    }
    function N(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var d = a;
            return L(d) + ".Consumer";
          case s:
            var v = a;
            return L(v._context) + ".Provider";
          case l:
            return k(a, a.render, "ForwardRef");
          case h:
            var P = a.displayName || null;
            return P !== null ? P : N(a.type) || "Memo";
          case y: {
            var B = a, z = B._payload, D = B._init;
            try {
              return N(D(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, oe = 0, ae, ve, be, Ee, O, A, U;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function V() {
      {
        if (oe === 0) {
          ae = console.log, ve = console.info, be = console.warn, Ee = console.error, O = console.group, A = console.groupCollapsed, U = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
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
        oe++;
      }
    }
    function ee() {
      {
        if (oe--, oe === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, a, {
              value: ae
            }),
            info: W({}, a, {
              value: ve
            }),
            warn: W({}, a, {
              value: be
            }),
            error: W({}, a, {
              value: Ee
            }),
            group: W({}, a, {
              value: O
            }),
            groupCollapsed: W({}, a, {
              value: A
            }),
            groupEnd: W({}, a, {
              value: U
            })
          });
        }
        oe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = R.ReactCurrentDispatcher, q;
    function K(a, d, v) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (B) {
            var P = B.stack.trim().match(/\n( *(at )?)/);
            q = P && P[1] || "";
          }
        return `
` + q + a;
      }
    }
    var Q = !1, H;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ce();
    }
    function S(a, d) {
      if (!a || Q)
        return "";
      {
        var v = H.get(a);
        if (v !== void 0)
          return v;
      }
      var P;
      Q = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = Y.current, Y.current = null, V();
      try {
        if (d) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(a, [], D);
          } else {
            try {
              D.call();
            } catch (he) {
              P = he;
            }
            a.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          a();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var I = he.stack.split(`
`), ie = P.stack.split(`
`), Z = I.length - 1, re = ie.length - 1; Z >= 1 && re >= 0 && I[Z] !== ie[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (I[Z] !== ie[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || I[Z] !== ie[re]) {
                    var Se = `
` + I[Z].replace(" at new ", " at ");
                    return a.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", a.displayName)), typeof a == "function" && H.set(a, Se), Se;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        Q = !1, Y.current = z, ee(), Error.prepareStackTrace = B;
      }
      var Fe = a ? a.displayName || a.name : "", Me = Fe ? K(Fe) : "";
      return typeof a == "function" && H.set(a, Me), Me;
    }
    function we(a, d, v) {
      return S(a, !1);
    }
    function F(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function xe(a, d, v) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return S(a, F(a));
      if (typeof a == "string")
        return K(a);
      switch (a) {
        case p:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return we(a.render);
          case h:
            return xe(a.type, d, v);
          case y: {
            var P = a, B = P._payload, z = P._init;
            try {
              return xe(z(B), d, v);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Ge = {}, Ke = R.ReactDebugCurrentFrame;
    function Ie(a) {
      if (a) {
        var d = a._owner, v = xe(a.type, a._source, d ? d.type : null);
        Ke.setExtraStackFrame(v);
      } else
        Ke.setExtraStackFrame(null);
    }
    function Ar(a, d, v, P, B) {
      {
        var z = Function.call.bind($e);
        for (var D in a)
          if (z(a, D)) {
            var I = void 0;
            try {
              if (typeof a[D] != "function") {
                var ie = Error((P || "React class") + ": " + v + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              I = a[D](d, D, P, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              I = Z;
            }
            I && !(I instanceof Error) && (Ie(B), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", v, D, typeof I), Ie(null)), I instanceof Error && !(I.message in Ge) && (Ge[I.message] = !0, Ie(B), $("Failed %s type: %s", v, I.message), Ie(null));
          }
      }
    }
    var yr = Array.isArray;
    function er(a) {
      return yr(a);
    }
    function X(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, v = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v;
      }
    }
    function gr(a) {
      try {
        return ur(a), !1;
      } catch {
        return !0;
      }
    }
    function ur(a) {
      return "" + a;
    }
    function ar(a) {
      if (gr(a))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(a)), ur(a);
    }
    var ze = R.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kr, Ir, lr;
    lr = {};
    function Dt(a) {
      if ($e.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Nt(a) {
      if ($e.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Ft(a, d) {
      if (typeof a.ref == "string" && ze.current && d && ze.current.stateNode !== d) {
        var v = N(ze.current.type);
        lr[v] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(ze.current.type), a.ref), lr[v] = !0);
      }
    }
    function Bt(a, d) {
      {
        var v = function() {
          kr || (kr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Lt(a, d) {
      {
        var v = function() {
          Ir || (Ir = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Vt = function(a, d, v, P, B, z, D) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: d,
        ref: v,
        props: D,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function zt(a, d, v, P, B) {
      {
        var z, D = {}, I = null, ie = null;
        v !== void 0 && (ar(v), I = "" + v), Nt(d) && (ar(d.key), I = "" + d.key), Dt(d) && (ie = d.ref, Ft(d, B));
        for (z in d)
          $e.call(d, z) && !jt.hasOwnProperty(z) && (D[z] = d[z]);
        if (a && a.defaultProps) {
          var Z = a.defaultProps;
          for (z in Z)
            D[z] === void 0 && (D[z] = Z[z]);
        }
        if (I || ie) {
          var re = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          I && Bt(D, re), ie && Lt(D, re);
        }
        return Vt(a, I, ie, B, P, ze.current, D);
      }
    }
    var fr = R.ReactCurrentOwner, Mr = R.ReactDebugCurrentFrame;
    function Ne(a) {
      if (a) {
        var d = a._owner, v = xe(a.type, a._source, d ? d.type : null);
        Mr.setExtraStackFrame(v);
      } else
        Mr.setExtraStackFrame(null);
    }
    var dr;
    dr = !1;
    function pr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function jr() {
      {
        if (fr.current) {
          var a = N(fr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Wt(a) {
      return "";
    }
    var Dr = {};
    function Yt(a) {
      {
        var d = jr();
        if (!d) {
          var v = typeof a == "string" ? a : a.displayName || a.name;
          v && (d = `

Check the top-level render call using <` + v + ">.");
        }
        return d;
      }
    }
    function Nr(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var v = Yt(d);
        if (Dr[v])
          return;
        Dr[v] = !0;
        var P = "";
        a && a._owner && a._owner !== fr.current && (P = " It was passed a child from " + N(a._owner.type) + "."), Ne(a), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, P), Ne(null);
      }
    }
    function Fr(a, d) {
      {
        if (typeof a != "object")
          return;
        if (er(a))
          for (var v = 0; v < a.length; v++) {
            var P = a[v];
            pr(P) && Nr(P, d);
          }
        else if (pr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var B = g(a);
          if (typeof B == "function" && B !== a.entries)
            for (var z = B.call(a), D; !(D = z.next()).done; )
              pr(D.value) && Nr(D.value, d);
        }
      }
    }
    function Ut(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var v;
        if (typeof d == "function")
          v = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === h))
          v = d.propTypes;
        else
          return;
        if (v) {
          var P = N(d);
          Ar(v, a.props, "prop", P, a);
        } else if (d.PropTypes !== void 0 && !dr) {
          dr = !0;
          var B = N(d);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qt(a) {
      {
        for (var d = Object.keys(a.props), v = 0; v < d.length; v++) {
          var P = d[v];
          if (P !== "children" && P !== "key") {
            Ne(a), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Ne(null);
            break;
          }
        }
        a.ref !== null && (Ne(a), $("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Br = {};
    function Lr(a, d, v, P, B, z) {
      {
        var D = c(a);
        if (!D) {
          var I = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Wt();
          ie ? I += ie : I += jr();
          var Z;
          a === null ? Z = "null" : er(a) ? Z = "array" : a !== void 0 && a.$$typeof === r ? (Z = "<" + (N(a.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof a, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, I);
        }
        var re = zt(a, d, v, B, z);
        if (re == null)
          return re;
        if (D) {
          var Se = d.children;
          if (Se !== void 0)
            if (P)
              if (er(Se)) {
                for (var Fe = 0; Fe < Se.length; Fe++)
                  Fr(Se[Fe], a);
                Object.freeze && Object.freeze(Se);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fr(Se, a);
        }
        if ($e.call(d, "key")) {
          var Me = N(a), he = Object.keys(d).filter(function(Qt) {
            return Qt !== "key";
          }), mr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Br[Me + mr]) {
            var Jt = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mr, Me, Jt, Me), Br[Me + mr] = !0;
          }
        }
        return a === n ? qt(re) : Ut(re), re;
      }
    }
    function Gt(a, d, v) {
      return Lr(a, d, v, !0);
    }
    function Kt(a, d, v) {
      return Lr(a, d, v, !1);
    }
    var Ht = Kt, Xt = Gt;
    Wr.Fragment = n, Wr.jsx = Ht, Wr.jsxs = Xt;
  }()), Wr;
}
process.env.NODE_ENV === "production" ? fn.exports = Ea() : fn.exports = Ca();
var Ta = fn.exports, dn = { exports: {} }, ot = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function xa() {
  if (zn) return ue;
  zn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function _(f) {
    if (typeof f == "object" && f !== null) {
      var M = f.$$typeof;
      switch (M) {
        case r:
          switch (f = f.type, f) {
            case l:
            case p:
            case n:
            case i:
            case o:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case u:
                case m:
                case C:
                case w:
                case s:
                  return f;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function T(f) {
    return _(f) === p;
  }
  return ue.AsyncMode = l, ue.ConcurrentMode = p, ue.ContextConsumer = u, ue.ContextProvider = s, ue.Element = r, ue.ForwardRef = m, ue.Fragment = n, ue.Lazy = C, ue.Memo = w, ue.Portal = t, ue.Profiler = i, ue.StrictMode = o, ue.Suspense = h, ue.isAsyncMode = function(f) {
    return T(f) || _(f) === l;
  }, ue.isConcurrentMode = T, ue.isContextConsumer = function(f) {
    return _(f) === u;
  }, ue.isContextProvider = function(f) {
    return _(f) === s;
  }, ue.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, ue.isForwardRef = function(f) {
    return _(f) === m;
  }, ue.isFragment = function(f) {
    return _(f) === n;
  }, ue.isLazy = function(f) {
    return _(f) === C;
  }, ue.isMemo = function(f) {
    return _(f) === w;
  }, ue.isPortal = function(f) {
    return _(f) === t;
  }, ue.isProfiler = function(f) {
    return _(f) === i;
  }, ue.isStrictMode = function(f) {
    return _(f) === o;
  }, ue.isSuspense = function(f) {
    return _(f) === h;
  }, ue.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === p || f === i || f === o || f === h || f === y || typeof f == "object" && f !== null && (f.$$typeof === C || f.$$typeof === w || f.$$typeof === s || f.$$typeof === u || f.$$typeof === m || f.$$typeof === g || f.$$typeof === R || f.$$typeof === $ || f.$$typeof === b);
  }, ue.typeOf = _, ue;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function wa() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function _(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === p || S === i || S === o || S === h || S === y || typeof S == "object" && S !== null && (S.$$typeof === C || S.$$typeof === w || S.$$typeof === s || S.$$typeof === u || S.$$typeof === m || S.$$typeof === g || S.$$typeof === R || S.$$typeof === $ || S.$$typeof === b);
    }
    function T(S) {
      if (typeof S == "object" && S !== null) {
        var we = S.$$typeof;
        switch (we) {
          case r:
            var F = S.type;
            switch (F) {
              case l:
              case p:
              case n:
              case i:
              case o:
              case h:
                return F;
              default:
                var xe = F && F.$$typeof;
                switch (xe) {
                  case u:
                  case m:
                  case C:
                  case w:
                  case s:
                    return xe;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var f = l, M = p, j = u, ne = s, te = r, c = m, k = n, L = C, N = w, W = t, oe = i, ae = o, ve = h, be = !1;
    function Ee(S) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(S) || T(S) === l;
    }
    function O(S) {
      return T(S) === p;
    }
    function A(S) {
      return T(S) === u;
    }
    function U(S) {
      return T(S) === s;
    }
    function G(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function V(S) {
      return T(S) === m;
    }
    function ee(S) {
      return T(S) === n;
    }
    function Y(S) {
      return T(S) === C;
    }
    function q(S) {
      return T(S) === w;
    }
    function K(S) {
      return T(S) === t;
    }
    function Q(S) {
      return T(S) === i;
    }
    function H(S) {
      return T(S) === o;
    }
    function Ce(S) {
      return T(S) === h;
    }
    le.AsyncMode = f, le.ConcurrentMode = M, le.ContextConsumer = j, le.ContextProvider = ne, le.Element = te, le.ForwardRef = c, le.Fragment = k, le.Lazy = L, le.Memo = N, le.Portal = W, le.Profiler = oe, le.StrictMode = ae, le.Suspense = ve, le.isAsyncMode = Ee, le.isConcurrentMode = O, le.isContextConsumer = A, le.isContextProvider = U, le.isElement = G, le.isForwardRef = V, le.isFragment = ee, le.isLazy = Y, le.isMemo = q, le.isPortal = K, le.isProfiler = Q, le.isStrictMode = H, le.isSuspense = Ce, le.isValidElementType = _, le.typeOf = T;
  }()), le;
}
var Yn;
function ko() {
  return Yn || (Yn = 1, process.env.NODE_ENV === "production" ? ot.exports = xa() : ot.exports = wa()), ot.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, Un;
function Ra() {
  if (Un) return Zt;
  Un = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        p[m] = m;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zt = o() ? Object.assign : function(i, s) {
    for (var u, l = n(i), p, m = 1; m < arguments.length; m++) {
      u = Object(arguments[m]);
      for (var h in u)
        r.call(u, h) && (l[h] = u[h]);
      if (e) {
        p = e(u);
        for (var y = 0; y < p.length; y++)
          t.call(u, p[y]) && (l[p[y]] = u[p[y]]);
      }
    }
    return l;
  }, Zt;
}
var en, qn;
function Tn() {
  if (qn) return en;
  qn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return en = e, en;
}
var rn, Gn;
function Io() {
  return Gn || (Gn = 1, rn = Function.call.bind(Object.prototype.hasOwnProperty)), rn;
}
var tn, Kn;
function _a() {
  if (Kn) return tn;
  Kn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Tn(), t = {}, n = Io();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, u, l, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var h;
          try {
            if (typeof i[m] != "function") {
              var y = Error(
                (l || "React class") + ": " + u + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = i[m](s, m, l, u, null, r);
          } catch (C) {
            h = C;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + u + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + u + " type: " + h.message + (w ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, tn = o, tn;
}
var nn, Hn;
function Oa() {
  if (Hn) return nn;
  Hn = 1;
  var e = ko(), r = Ra(), t = Tn(), n = Io(), o = _a(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var l = "Warning: " + u;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return nn = function(u, l) {
    var p = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function h(O) {
      var A = O && (p && O[p] || O[m]);
      if (typeof A == "function")
        return A;
    }
    var y = "<<anonymous>>", w = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: $(),
      arrayOf: _,
      element: T(),
      elementType: f(),
      instanceOf: M,
      node: c(),
      objectOf: ne,
      oneOf: j,
      oneOfType: te,
      shape: L,
      exact: N
    };
    function C(O, A) {
      return O === A ? O !== 0 || 1 / O === 1 / A : O !== O && A !== A;
    }
    function b(O, A) {
      this.message = O, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function g(O) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, U = 0;
      function G(ee, Y, q, K, Q, H, Ce) {
        if (K = K || y, H = H || q, Ce !== t) {
          if (l) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = K + ":" + q;
            !A[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[we] = !0, U++);
          }
        }
        return Y[q] == null ? ee ? Y[q] === null ? new b("The " + Q + " `" + H + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new b("The " + Q + " `" + H + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : O(Y, q, K, Q, H);
      }
      var V = G.bind(null, !1);
      return V.isRequired = G.bind(null, !0), V;
    }
    function R(O) {
      function A(U, G, V, ee, Y, q) {
        var K = U[G], Q = ae(K);
        if (Q !== O) {
          var H = ve(K);
          return new b(
            "Invalid " + ee + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + V + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(A);
    }
    function $() {
      return g(s);
    }
    function _(O) {
      function A(U, G, V, ee, Y) {
        if (typeof O != "function")
          return new b("Property `" + Y + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var q = U[G];
        if (!Array.isArray(q)) {
          var K = ae(q);
          return new b("Invalid " + ee + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + V + "`, expected an array."));
        }
        for (var Q = 0; Q < q.length; Q++) {
          var H = O(q, Q, V, ee, Y + "[" + Q + "]", t);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return g(A);
    }
    function T() {
      function O(A, U, G, V, ee) {
        var Y = A[U];
        if (!u(Y)) {
          var q = ae(Y);
          return new b("Invalid " + V + " `" + ee + "` of type " + ("`" + q + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function f() {
      function O(A, U, G, V, ee) {
        var Y = A[U];
        if (!e.isValidElementType(Y)) {
          var q = ae(Y);
          return new b("Invalid " + V + " `" + ee + "` of type " + ("`" + q + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function M(O) {
      function A(U, G, V, ee, Y) {
        if (!(U[G] instanceof O)) {
          var q = O.name || y, K = Ee(U[G]);
          return new b("Invalid " + ee + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + V + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return g(A);
    }
    function j(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function A(U, G, V, ee, Y) {
        for (var q = U[G], K = 0; K < O.length; K++)
          if (C(q, O[K]))
            return null;
        var Q = JSON.stringify(O, function(Ce, S) {
          var we = ve(S);
          return we === "symbol" ? String(S) : S;
        });
        return new b("Invalid " + ee + " `" + Y + "` of value `" + String(q) + "` " + ("supplied to `" + V + "`, expected one of " + Q + "."));
      }
      return g(A);
    }
    function ne(O) {
      function A(U, G, V, ee, Y) {
        if (typeof O != "function")
          return new b("Property `" + Y + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var q = U[G], K = ae(q);
        if (K !== "object")
          return new b("Invalid " + ee + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + V + "`, expected an object."));
        for (var Q in q)
          if (n(q, Q)) {
            var H = O(q, Q, V, ee, Y + "." + Q, t);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return g(A);
    }
    function te(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var A = 0; A < O.length; A++) {
        var U = O[A];
        if (typeof U != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(U) + " at index " + A + "."
          ), s;
      }
      function G(V, ee, Y, q, K) {
        for (var Q = [], H = 0; H < O.length; H++) {
          var Ce = O[H], S = Ce(V, ee, Y, q, K, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && Q.push(S.data.expectedType);
        }
        var we = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new b("Invalid " + q + " `" + K + "` supplied to " + ("`" + Y + "`" + we + "."));
      }
      return g(G);
    }
    function c() {
      function O(A, U, G, V, ee) {
        return W(A[U]) ? null : new b("Invalid " + V + " `" + ee + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function k(O, A, U, G, V) {
      return new b(
        (O || "React class") + ": " + A + " type `" + U + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function L(O) {
      function A(U, G, V, ee, Y) {
        var q = U[G], K = ae(q);
        if (K !== "object")
          return new b("Invalid " + ee + " `" + Y + "` of type `" + K + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var Q in O) {
          var H = O[Q];
          if (typeof H != "function")
            return k(V, ee, Y, Q, ve(H));
          var Ce = H(q, Q, V, ee, Y + "." + Q, t);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return g(A);
    }
    function N(O) {
      function A(U, G, V, ee, Y) {
        var q = U[G], K = ae(q);
        if (K !== "object")
          return new b("Invalid " + ee + " `" + Y + "` of type `" + K + "` " + ("supplied to `" + V + "`, expected `object`."));
        var Q = r({}, U[G], O);
        for (var H in Q) {
          var Ce = O[H];
          if (n(O, H) && typeof Ce != "function")
            return k(V, ee, Y, H, ve(Ce));
          if (!Ce)
            return new b(
              "Invalid " + ee + " `" + Y + "` key `" + H + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(U[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var S = Ce(q, H, V, ee, Y + "." + H, t);
          if (S)
            return S;
        }
        return null;
      }
      return g(A);
    }
    function W(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(W);
          if (O === null || u(O))
            return !0;
          var A = h(O);
          if (A) {
            var U = A.call(O), G;
            if (A !== O.entries) {
              for (; !(G = U.next()).done; )
                if (!W(G.value))
                  return !1;
            } else
              for (; !(G = U.next()).done; ) {
                var V = G.value;
                if (V && !W(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(O, A) {
      return O === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function ae(O) {
      var A = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : oe(A, O) ? "symbol" : A;
    }
    function ve(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var A = ae(O);
      if (A === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function be(O) {
      var A = ve(O);
      switch (A) {
        case "array":
        case "object":
          return "an " + A;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + A;
        default:
          return A;
      }
    }
    function Ee(O) {
      return !O.constructor || !O.constructor.name ? y : O.constructor.name;
    }
    return w.checkPropTypes = o, w.resetWarningCache = o.resetWarningCache, w.PropTypes = w, w;
  }, nn;
}
var on, Xn;
function Pa() {
  if (Xn) return on;
  Xn = 1;
  var e = Tn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, on = function() {
    function n(s, u, l, p, m, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, on;
}
if (process.env.NODE_ENV !== "production") {
  var $a = ko(), Aa = !0;
  dn.exports = Oa()($a.isElement, Aa);
} else
  dn.exports = Pa()();
var ka = dn.exports;
const x = /* @__PURE__ */ Sa(ka);
function Mo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Mo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function We() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Mo(e)) && (n && (n += " "), n += r);
  return n;
}
function ht(e, r) {
  const t = {
    ...r
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        t[o] = {
          ...e[o],
          ...t[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = r[o];
        if (!s)
          t[o] = i || {};
        else if (!i)
          t[o] = s;
        else {
          t[o] = {
            ...s
          };
          for (const u in i)
            if (Object.prototype.hasOwnProperty.call(i, u)) {
              const l = u;
              t[o][l] = ht(i[l], s[l]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
function jo(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", u = !0;
    for (let l = 0; l < i.length; l += 1) {
      const p = i[l];
      p && (s += (u === !0 ? "" : " ") + r(p), u = !1, t && t[p] && (s += " " + t[p]));
    }
    n[o] = s;
  }
  return n;
}
function ir(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function Ia(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function xn(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Ia(e, r, t);
}
function Ma(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function sr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return sr(Ma(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ir(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ir(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const ja = (e) => {
  const r = sr(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, Kr = (e, r) => {
  try {
    return ja(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function St(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Do(e) {
  e = sr(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (p, m = (p + t / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let u = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (u += "a", l.push(r[3])), St({
    type: u,
    values: l
  });
}
function pn(e) {
  e = sr(e);
  let r = e.type === "hsl" || e.type === "hsla" ? sr(Do(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Jn(e, r) {
  const t = pn(e), n = pn(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function xr(e, r) {
  return e = sr(e), r = xn(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, St(e);
}
function at(e, r, t) {
  try {
    return xr(e, r);
  } catch {
    return e;
  }
}
function wn(e, r) {
  if (e = sr(e), r = xn(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return St(e);
}
function ye(e, r, t) {
  try {
    return wn(e, r);
  } catch {
    return e;
  }
}
function Rn(e, r) {
  if (e = sr(e), r = xn(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return St(e);
}
function ge(e, r, t) {
  try {
    return Rn(e, r);
  } catch {
    return e;
  }
}
function Da(e, r = 0.15) {
  return pn(e) > 0.5 ? wn(e, r) : Rn(e, r);
}
function it(e, r, t) {
  try {
    return Da(e, r);
  } catch {
    return e;
  }
}
function Na(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const No = (e) => Na(e) && e !== "classes";
function je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ir(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function tr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Fo(e) {
  if (!tr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Fo(e[t]);
  }), r;
}
function Le(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return tr(e) && tr(r) && Object.keys(r).forEach((o) => {
    tr(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && tr(e[o]) ? n[o] = Le(e[o], r[o], t) : t.clone ? n[o] = tr(r[o]) ? Fo(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function Xr(e, r) {
  return r ? Le(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const cr = process.env.NODE_ENV !== "production" ? x.oneOfType([x.number, x.string, x.object, x.array]) : {};
function Fa(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, u;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((u = o.match(i)) == null ? void 0 : u[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function Ba(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function La(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ir(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Va(e) {
  const r = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function t(i, s) {
    i.up = (...u) => r(e.breakpoints.up(...u), s), i.down = (...u) => r(e.breakpoints.down(...u), s), i.between = (...u) => r(e.breakpoints.between(...u), s), i.only = (...u) => r(e.breakpoints.only(...u), s), i.not = (...u) => {
      const l = r(e.breakpoints.not(...u), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const Et = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Qn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Et[e]}px)`
}, za = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : Et[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function or(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Qn;
    return r.reduce((s, u, l) => (s[i.up(i.keys[l])] = t(r[l]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Qn;
    return Object.keys(r).reduce((s, u) => {
      if (Ba(i.keys, u)) {
        const l = La(n.containerQueries ? n : za, u);
        l && (s[l] = t(r[u], u));
      } else if (Object.keys(i.values || Et).includes(u)) {
        const l = i.up(u);
        s[l] = t(r[u], u);
      } else {
        const l = u;
        s[l] = r[l];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Wa(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ya(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Ct(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function yt(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Ct(e, t) || n, r && (o = r(o, n, e)), o;
}
function Oe(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const u = s[r], l = s.theme, p = Ct(l, n) || {};
    return or(s, u, (h) => {
      let y = yt(p, o, h);
      return h === y && typeof h == "string" && (y = yt(p, o, `${r}${h === "default" ? "" : je(h)}`, h)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: cr
  } : {}, i.filterProps = [r], i;
}
function Ua(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const qa = {
  m: "margin",
  p: "padding"
}, Ga = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ka = Ua((e) => {
  if (e.length > 2)
    if (Zn[e])
      e = Zn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = qa[r], o = Ga[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Tt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], xt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ha = [...Tt, ...xt];
function rt(e, r, t, n) {
  const o = Ct(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const u = o[s];
    return i >= 0 ? u : typeof u == "number" ? -u : `-${u}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function _n(e) {
  return rt(e, "spacing", 8, "spacing");
}
function tt(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function Xa(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = tt(r, t), n), {});
}
function Ja(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = Ka(t), i = Xa(o, n), s = e[t];
  return or(e, s, i);
}
function Bo(e, r) {
  const t = _n(e.theme);
  return Object.keys(e).map((n) => Ja(e, r, n, t)).reduce(Xr, {});
}
function Re(e) {
  return Bo(e, Tt);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? Tt.reduce((e, r) => (e[r] = cr, e), {}) : {};
Re.filterProps = Tt;
function _e(e) {
  return Bo(e, xt);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? xt.reduce((e, r) => (e[r] = cr, e), {}) : {};
_e.filterProps = xt;
process.env.NODE_ENV !== "production" && Ha.reduce((e, r) => (e[r] = cr, e), {});
function wt(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Xr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function qe(e, r) {
  return Oe({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Qa = qe("border", Ue), Za = qe("borderTop", Ue), ei = qe("borderRight", Ue), ri = qe("borderBottom", Ue), ti = qe("borderLeft", Ue), ni = qe("borderColor"), oi = qe("borderTopColor"), ai = qe("borderRightColor"), ii = qe("borderBottomColor"), si = qe("borderLeftColor"), ci = qe("outline", Ue), ui = qe("outlineColor"), Rt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = rt(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: tt(r, n)
    });
    return or(e, e.borderRadius, t);
  }
  return null;
};
Rt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: cr
} : {};
Rt.filterProps = ["borderRadius"];
wt(Qa, Za, ei, ri, ti, ni, oi, ai, ii, si, Rt, ci, ui);
const _t = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = rt(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: tt(r, n)
    });
    return or(e, e.gap, t);
  }
  return null;
};
_t.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: cr
} : {};
_t.filterProps = ["gap"];
const Ot = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = rt(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: tt(r, n)
    });
    return or(e, e.columnGap, t);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: cr
} : {};
Ot.filterProps = ["columnGap"];
const Pt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = rt(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: tt(r, n)
    });
    return or(e, e.rowGap, t);
  }
  return null;
};
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: cr
} : {};
Pt.filterProps = ["rowGap"];
const li = Oe({
  prop: "gridColumn"
}), fi = Oe({
  prop: "gridRow"
}), di = Oe({
  prop: "gridAutoFlow"
}), pi = Oe({
  prop: "gridAutoColumns"
}), mi = Oe({
  prop: "gridAutoRows"
}), hi = Oe({
  prop: "gridTemplateColumns"
}), yi = Oe({
  prop: "gridTemplateRows"
}), gi = Oe({
  prop: "gridTemplateAreas"
}), vi = Oe({
  prop: "gridArea"
});
wt(_t, Ot, Pt, li, fi, di, pi, mi, hi, yi, gi, vi);
function wr(e, r) {
  return r === "grey" ? r : e;
}
const bi = Oe({
  prop: "color",
  themeKey: "palette",
  transform: wr
}), Si = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wr
}), Ei = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wr
});
wt(bi, Si, Ei);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ci = Oe({
  prop: "width",
  transform: Be
}), On = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, s, u, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[t]) || Et[t];
      return n ? ((l = (u = e.theme) == null ? void 0 : u.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Be(t)
      };
    };
    return or(e, e.maxWidth, r);
  }
  return null;
};
On.filterProps = ["maxWidth"];
const Ti = Oe({
  prop: "minWidth",
  transform: Be
}), xi = Oe({
  prop: "height",
  transform: Be
}), wi = Oe({
  prop: "maxHeight",
  transform: Be
}), Ri = Oe({
  prop: "minHeight",
  transform: Be
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const _i = Oe({
  prop: "boxSizing"
});
wt(Ci, On, Ti, xi, wi, Ri, _i);
const $t = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ue
  },
  borderTop: {
    themeKey: "borders",
    transform: Ue
  },
  borderRight: {
    themeKey: "borders",
    transform: Ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ue
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Rt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wr
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Re
  },
  mt: {
    style: Re
  },
  mr: {
    style: Re
  },
  mb: {
    style: Re
  },
  ml: {
    style: Re
  },
  mx: {
    style: Re
  },
  my: {
    style: Re
  },
  margin: {
    style: Re
  },
  marginTop: {
    style: Re
  },
  marginRight: {
    style: Re
  },
  marginBottom: {
    style: Re
  },
  marginLeft: {
    style: Re
  },
  marginX: {
    style: Re
  },
  marginY: {
    style: Re
  },
  marginInline: {
    style: Re
  },
  marginInlineStart: {
    style: Re
  },
  marginInlineEnd: {
    style: Re
  },
  marginBlock: {
    style: Re
  },
  marginBlockStart: {
    style: Re
  },
  marginBlockEnd: {
    style: Re
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: _t
  },
  rowGap: {
    style: Pt
  },
  columnGap: {
    style: Ot
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Be
  },
  maxWidth: {
    style: On
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Oi(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Pi(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function $i() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, u = i[t];
    if (!u)
      return {
        [t]: n
      };
    const {
      cssProperty: l = t,
      themeKey: p,
      transform: m,
      style: h
    } = u;
    if (n == null)
      return null;
    if (p === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = Ct(o, p) || {};
    return h ? h(s) : or(s, n, (C) => {
      let b = yt(y, m, C);
      return C === b && typeof C == "string" && (b = yt(y, m, `${t}${C === "default" ? "" : je(C)}`, C)), l === !1 ? b : {
        [l]: b
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {}
    } = t || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? $t;
    function s(u) {
      let l = u;
      if (typeof u == "function")
        l = u(o);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const p = Wa(o.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(l).forEach((y) => {
        const w = Pi(l[y], o);
        if (w != null)
          if (typeof w == "object")
            if (i[y])
              h = Xr(h, e(y, w, o, i));
            else {
              const C = or({
                theme: o
              }, w, (b) => ({
                [y]: b
              }));
              Oi(C, w) ? h[y] = r({
                sx: w,
                theme: o
              }) : h = Xr(h, C);
            }
          else
            h = Xr(h, e(y, w, o, i));
      }), Fa(o, Ya(m, h));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return r;
}
const _r = $i();
_r.filterProps = ["sx"];
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, gt.apply(null, arguments);
}
function Lo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ai = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ki = /* @__PURE__ */ Lo(
  function(e) {
    return Ai.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ii = !1;
function Mi(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function ji(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Di = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !Ii : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ji(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Mi(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ke = "-ms-", vt = "-moz-", se = "-webkit-", Vo = "comm", Pn = "rule", $n = "decl", Ni = "@import", zo = "@keyframes", Fi = "@layer", Bi = Math.abs, At = String.fromCharCode, Li = Object.assign;
function Vi(e, r) {
  return Ae(e, 0) ^ 45 ? (((r << 2 ^ Ae(e, 0)) << 2 ^ Ae(e, 1)) << 2 ^ Ae(e, 2)) << 2 ^ Ae(e, 3) : 0;
}
function Wo(e) {
  return e.trim();
}
function zi(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ce(e, r, t) {
  return e.replace(r, t);
}
function mn(e, r) {
  return e.indexOf(r);
}
function Ae(e, r) {
  return e.charCodeAt(r) | 0;
}
function Jr(e, r, t) {
  return e.slice(r, t);
}
function Xe(e) {
  return e.length;
}
function An(e) {
  return e.length;
}
function st(e, r) {
  return r.push(e), e;
}
function Wi(e, r) {
  return e.map(r).join("");
}
var kt = 1, Or = 1, Yo = 0, De = 0, Pe = 0, Pr = "";
function It(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: kt, column: Or, length: s, return: "" };
}
function Yr(e, r) {
  return Li(It("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Yi() {
  return Pe;
}
function Ui() {
  return Pe = De > 0 ? Ae(Pr, --De) : 0, Or--, Pe === 10 && (Or = 1, kt--), Pe;
}
function Ve() {
  return Pe = De < Yo ? Ae(Pr, De++) : 0, Or++, Pe === 10 && (Or = 1, kt++), Pe;
}
function Qe() {
  return Ae(Pr, De);
}
function ft() {
  return De;
}
function nt(e, r) {
  return Jr(Pr, e, r);
}
function Qr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uo(e) {
  return kt = Or = 1, Yo = Xe(Pr = e), De = 0, [];
}
function qo(e) {
  return Pr = "", e;
}
function dt(e) {
  return Wo(nt(De - 1, hn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qi(e) {
  for (; (Pe = Qe()) && Pe < 33; )
    Ve();
  return Qr(e) > 2 || Qr(Pe) > 3 ? "" : " ";
}
function Gi(e, r) {
  for (; --r && Ve() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
    ;
  return nt(e, ft() + (r < 6 && Qe() == 32 && Ve() == 32));
}
function hn(e) {
  for (; Ve(); )
    switch (Pe) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hn(Pe);
        break;
      case 40:
        e === 41 && hn(e);
        break;
      case 92:
        Ve();
        break;
    }
  return De;
}
function Ki(e, r) {
  for (; Ve() && e + Pe !== 57; )
    if (e + Pe === 84 && Qe() === 47)
      break;
  return "/*" + nt(r, De - 1) + "*" + At(e === 47 ? e : Ve());
}
function Hi(e) {
  for (; !Qr(Qe()); )
    Ve();
  return nt(e, De);
}
function Xi(e) {
  return qo(pt("", null, null, null, [""], e = Uo(e), 0, [0], e));
}
function pt(e, r, t, n, o, i, s, u, l) {
  for (var p = 0, m = 0, h = s, y = 0, w = 0, C = 0, b = 1, g = 1, R = 1, $ = 0, _ = "", T = o, f = i, M = n, j = _; g; )
    switch (C = $, $ = Ve()) {
      case 40:
        if (C != 108 && Ae(j, h - 1) == 58) {
          mn(j += ce(dt($), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += dt($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += qi(C);
        break;
      case 92:
        j += Gi(ft() - 1, 7);
        continue;
      case 47:
        switch (Qe()) {
          case 42:
          case 47:
            st(Ji(Ki(Ve(), ft()), r, t), l);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * b:
        u[p++] = Xe(j) * R;
      case 125 * b:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            g = 0;
          case 59 + m:
            R == -1 && (j = ce(j, /\f/g, "")), w > 0 && Xe(j) - h && st(w > 32 ? ro(j + ";", n, t, h - 1) : ro(ce(j, " ", "") + ";", n, t, h - 2), l);
            break;
          case 59:
            j += ";";
          default:
            if (st(M = eo(j, r, t, p, m, o, u, _, T = [], f = [], h), i), $ === 123)
              if (m === 0)
                pt(j, r, M, M, T, i, h, u, f);
              else
                switch (y === 99 && Ae(j, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pt(e, M, M, n && st(eo(e, M, M, 0, 0, o, u, _, o, T = [], h), f), o, f, h, u, n ? T : f);
                    break;
                  default:
                    pt(j, M, M, M, [""], f, 0, u, f);
                }
        }
        p = m = w = 0, b = R = 1, _ = j = "", h = s;
        break;
      case 58:
        h = 1 + Xe(j), w = C;
      default:
        if (b < 1) {
          if ($ == 123)
            --b;
          else if ($ == 125 && b++ == 0 && Ui() == 125)
            continue;
        }
        switch (j += At($), $ * b) {
          case 38:
            R = m > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            u[p++] = (Xe(j) - 1) * R, R = 1;
            break;
          case 64:
            Qe() === 45 && (j += dt(Ve())), y = Qe(), m = h = Xe(_ = j += Hi(ft())), $++;
            break;
          case 45:
            C === 45 && Xe(j) == 2 && (b = 0);
        }
    }
  return i;
}
function eo(e, r, t, n, o, i, s, u, l, p, m) {
  for (var h = o - 1, y = o === 0 ? i : [""], w = An(y), C = 0, b = 0, g = 0; C < n; ++C)
    for (var R = 0, $ = Jr(e, h + 1, h = Bi(b = s[C])), _ = e; R < w; ++R)
      (_ = Wo(b > 0 ? y[R] + " " + $ : ce($, /&\f/g, y[R]))) && (l[g++] = _);
  return It(e, r, t, o === 0 ? Pn : u, l, p, m);
}
function Ji(e, r, t) {
  return It(e, r, t, Vo, At(Yi()), Jr(e, 2, -2), 0);
}
function ro(e, r, t, n) {
  return It(e, r, t, $n, Jr(e, 0, n), Jr(e, n + 1, -1), n);
}
function Rr(e, r) {
  for (var t = "", n = An(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Qi(e, r, t, n) {
  switch (e.type) {
    case Fi:
      if (e.children.length) break;
    case Ni:
    case $n:
      return e.return = e.return || e.value;
    case Vo:
      return "";
    case zo:
      return e.return = e.value + "{" + Rr(e.children, n) + "}";
    case Pn:
      e.value = e.props.join(",");
  }
  return Xe(t = Rr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Zi(e) {
  var r = An(e);
  return function(t, n, o, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e[u](t, n, o, i) || "";
    return s;
  };
}
function es(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var rs = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Qe(), o === 38 && i === 12 && (t[n] = 1), !Qr(i); )
    Ve();
  return nt(r, De);
}, ts = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Qr(o)) {
      case 0:
        o === 38 && Qe() === 12 && (t[n] = 1), r[n] += rs(De - 1, t, n);
        break;
      case 2:
        r[n] += dt(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Qe() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += At(o);
    }
  while (o = Ve());
  return r;
}, ns = function(r, t) {
  return qo(ts(Uo(r), t));
}, to = /* @__PURE__ */ new WeakMap(), os = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !to.get(n)) && !o) {
      to.set(r, !0);
      for (var i = [], s = ns(t, i), u = n.props, l = 0, p = 0; l < s.length; l++)
        for (var m = 0; m < u.length; m++, p++)
          r.props[p] = i[l] ? s[l].replace(/&\f/g, u[m]) : u[m] + " " + s[l];
    }
  }
}, as = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Go(e, r) {
  switch (Vi(e, r)) {
    case 5103:
      return se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + vt + e + ke + e + e;
    case 6828:
    case 4268:
      return se + e + ke + e + e;
    case 6165:
      return se + e + ke + "flex-" + e + e;
    case 5187:
      return se + e + ce(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + ke + "flex-$1$2") + e;
    case 5443:
      return se + e + ke + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    case 4675:
      return se + e + ke + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return se + e + ke + ce(e, "shrink", "negative") + e;
    case 5292:
      return se + e + ke + ce(e, "basis", "preferred-size") + e;
    case 6060:
      return se + "box-" + ce(e, "-grow", "") + se + e + ke + ce(e, "grow", "positive") + e;
    case 4554:
      return se + ce(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xe(e) - 1 - r > 6) switch (Ae(e, r + 1)) {
        case 109:
          if (Ae(e, r + 4) !== 45) break;
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + vt + (Ae(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~mn(e, "stretch") ? Go(ce(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (Ae(e, r + 1) !== 115) break;
    case 6444:
      switch (Ae(e, Xe(e) - 3 - (~mn(e, "!important") && 10))) {
        case 107:
          return ce(e, ":", ":" + se) + e;
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (Ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ae(e, r + 11)) {
        case 114:
          return se + e + ke + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + ke + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + ke + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + ke + e + e;
  }
  return e;
}
var is = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case $n:
      r.return = Go(r.value, r.length);
      break;
    case zo:
      return Rr([Yr(r, {
        value: ce(r.value, "@", "@" + se)
      })], o);
    case Pn:
      if (r.length) return Wi(r.props, function(i) {
        switch (zi(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Rr([Yr(r, {
              props: [ce(i, /:(read-\w+)/, ":" + vt + "$1")]
            })], o);
          case "::placeholder":
            return Rr([Yr(r, {
              props: [ce(i, /:(plac\w+)/, ":" + se + "input-$1")]
            }), Yr(r, {
              props: [ce(i, /:(plac\w+)/, ":" + vt + "$1")]
            }), Yr(r, {
              props: [ce(i, /:(plac\w+)/, ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ss = [is], cs = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var g = b.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || ss, i = {}, s, u = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var g = b.getAttribute("data-emotion").split(" "), R = 1; R < g.length; R++)
        i[g[R]] = !0;
      u.push(b);
    }
  );
  var l, p = [os, as];
  {
    var m, h = [Qi, es(function(b) {
      m.insert(b);
    })], y = Zi(p.concat(o, h)), w = function(g) {
      return Rr(Xi(g), y);
    };
    l = function(g, R, $, _) {
      m = $, w(g ? g + "{" + R.styles + "}" : R.styles), _ && (C.inserted[R.name] = !0);
    };
  }
  var C = {
    key: t,
    sheet: new Di({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return C.sheet.hydrate(u), C;
}, yn = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function us() {
  if (no) return fe;
  no = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function _(f) {
    if (typeof f == "object" && f !== null) {
      var M = f.$$typeof;
      switch (M) {
        case r:
          switch (f = f.type, f) {
            case l:
            case p:
            case n:
            case i:
            case o:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case u:
                case m:
                case C:
                case w:
                case s:
                  return f;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function T(f) {
    return _(f) === p;
  }
  return fe.AsyncMode = l, fe.ConcurrentMode = p, fe.ContextConsumer = u, fe.ContextProvider = s, fe.Element = r, fe.ForwardRef = m, fe.Fragment = n, fe.Lazy = C, fe.Memo = w, fe.Portal = t, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = h, fe.isAsyncMode = function(f) {
    return T(f) || _(f) === l;
  }, fe.isConcurrentMode = T, fe.isContextConsumer = function(f) {
    return _(f) === u;
  }, fe.isContextProvider = function(f) {
    return _(f) === s;
  }, fe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, fe.isForwardRef = function(f) {
    return _(f) === m;
  }, fe.isFragment = function(f) {
    return _(f) === n;
  }, fe.isLazy = function(f) {
    return _(f) === C;
  }, fe.isMemo = function(f) {
    return _(f) === w;
  }, fe.isPortal = function(f) {
    return _(f) === t;
  }, fe.isProfiler = function(f) {
    return _(f) === i;
  }, fe.isStrictMode = function(f) {
    return _(f) === o;
  }, fe.isSuspense = function(f) {
    return _(f) === h;
  }, fe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === p || f === i || f === o || f === h || f === y || typeof f == "object" && f !== null && (f.$$typeof === C || f.$$typeof === w || f.$$typeof === s || f.$$typeof === u || f.$$typeof === m || f.$$typeof === g || f.$$typeof === R || f.$$typeof === $ || f.$$typeof === b);
  }, fe.typeOf = _, fe;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function ls() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function _(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === p || S === i || S === o || S === h || S === y || typeof S == "object" && S !== null && (S.$$typeof === C || S.$$typeof === w || S.$$typeof === s || S.$$typeof === u || S.$$typeof === m || S.$$typeof === g || S.$$typeof === R || S.$$typeof === $ || S.$$typeof === b);
    }
    function T(S) {
      if (typeof S == "object" && S !== null) {
        var we = S.$$typeof;
        switch (we) {
          case r:
            var F = S.type;
            switch (F) {
              case l:
              case p:
              case n:
              case i:
              case o:
              case h:
                return F;
              default:
                var xe = F && F.$$typeof;
                switch (xe) {
                  case u:
                  case m:
                  case C:
                  case w:
                  case s:
                    return xe;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var f = l, M = p, j = u, ne = s, te = r, c = m, k = n, L = C, N = w, W = t, oe = i, ae = o, ve = h, be = !1;
    function Ee(S) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(S) || T(S) === l;
    }
    function O(S) {
      return T(S) === p;
    }
    function A(S) {
      return T(S) === u;
    }
    function U(S) {
      return T(S) === s;
    }
    function G(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function V(S) {
      return T(S) === m;
    }
    function ee(S) {
      return T(S) === n;
    }
    function Y(S) {
      return T(S) === C;
    }
    function q(S) {
      return T(S) === w;
    }
    function K(S) {
      return T(S) === t;
    }
    function Q(S) {
      return T(S) === i;
    }
    function H(S) {
      return T(S) === o;
    }
    function Ce(S) {
      return T(S) === h;
    }
    de.AsyncMode = f, de.ConcurrentMode = M, de.ContextConsumer = j, de.ContextProvider = ne, de.Element = te, de.ForwardRef = c, de.Fragment = k, de.Lazy = L, de.Memo = N, de.Portal = W, de.Profiler = oe, de.StrictMode = ae, de.Suspense = ve, de.isAsyncMode = Ee, de.isConcurrentMode = O, de.isContextConsumer = A, de.isContextProvider = U, de.isElement = G, de.isForwardRef = V, de.isFragment = ee, de.isLazy = Y, de.isMemo = q, de.isPortal = K, de.isProfiler = Q, de.isStrictMode = H, de.isSuspense = Ce, de.isValidElementType = _, de.typeOf = T;
  }()), de;
}
process.env.NODE_ENV === "production" ? yn.exports = us() : yn.exports = ls();
var fs = yn.exports, Ko = fs, ds = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ps = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ho = {};
Ho[Ko.ForwardRef] = ds;
Ho[Ko.Memo] = ps;
var ms = !0;
function hs(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Xo = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ms === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, ys = function(r, t, n) {
  Xo(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function gs(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var vs = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, bs = !1, Ss = /[A-Z]|^ms/g, Es = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Jo = function(r) {
  return r.charCodeAt(1) === 45;
}, ao = function(r) {
  return r != null && typeof r != "boolean";
}, an = /* @__PURE__ */ Lo(function(e) {
  return Jo(e) ? e : e.replace(Ss, "-$&").toLowerCase();
}), io = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Es, function(n, o, i) {
          return Je = {
            name: o,
            styles: i,
            next: Je
          }, o;
        });
  }
  return vs[r] !== 1 && !Jo(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Cs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Zr(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Je = {
          name: o.name,
          styles: o.styles,
          next: Je
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Je = {
              name: s.name,
              styles: s.styles,
              next: Je
            }, s = s.next;
        var u = i.styles + ";";
        return u;
      }
      return Ts(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var l = Je, p = t(e);
        return Je = l, Zr(e, r, p);
      }
      break;
    }
  }
  var m = t;
  if (r == null)
    return m;
  var h = r[m];
  return h !== void 0 ? h : m;
}
function Ts(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Zr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object") {
        var u = s;
        r != null && r[u] !== void 0 ? n += i + "{" + r[u] + "}" : ao(u) && (n += an(i) + ":" + io(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && bs)
          throw new Error(Cs);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            ao(s[l]) && (n += an(i) + ":" + io(i, s[l]) + ";");
        else {
          var p = Zr(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += an(i) + ":" + p + ";";
              break;
            }
            default:
              n += i + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var so = /label:\s*([^\s;{]+)\s*(;|$)/g, Je;
function kn(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Je = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Zr(t, r, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Zr(t, r, e[u]), n) {
      var l = i;
      o += l[u];
    }
  so.lastIndex = 0;
  for (var p = "", m; (m = so.exec(o)) !== null; )
    p += "-" + m[1];
  var h = gs(o) + p;
  return {
    name: h,
    styles: o,
    next: Je
  };
}
var xs = function(r) {
  return r();
}, ws = J.useInsertionEffect ? J.useInsertionEffect : !1, Rs = ws || xs, Qo = /* @__PURE__ */ J.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cs({
    key: "css"
  }) : null
);
Qo.Provider;
var _s = function(r) {
  return /* @__PURE__ */ ga(function(t, n) {
    var o = va(Qo);
    return r(t, o, n);
  });
}, Os = /* @__PURE__ */ J.createContext({});
function Ps() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return kn(r);
}
var In = function() {
  var r = Ps.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, $s = ki, As = function(r) {
  return r !== "theme";
}, co = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? $s : As;
}, uo = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, ks = !1, Is = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Xo(t, n, o), Rs(function() {
    return ys(t, n, o);
  }), null;
}, Ms = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var u = uo(r, t, n), l = u || co(o), p = !l("as");
  return function() {
    var m = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      h.push.apply(h, m);
    else {
      h.push(m[0][0]);
      for (var y = m.length, w = 1; w < y; w++)
        h.push(m[w], m[0][w]);
    }
    var C = _s(function(b, g, R) {
      var $ = p && b.as || o, _ = "", T = [], f = b;
      if (b.theme == null) {
        f = {};
        for (var M in b)
          f[M] = b[M];
        f.theme = J.useContext(Os);
      }
      typeof b.className == "string" ? _ = hs(g.registered, T, b.className) : b.className != null && (_ = b.className + " ");
      var j = kn(h.concat(T), g.registered, f);
      _ += g.key + "-" + j.name, s !== void 0 && (_ += " " + s);
      var ne = p && u === void 0 ? co($) : l, te = {};
      for (var c in b)
        p && c === "as" || ne(c) && (te[c] = b[c]);
      return te.className = _, R && (te.ref = R), /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(Is, {
        cache: g,
        serialized: j,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ J.createElement($, te));
    });
    return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = r.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = h, C.__emotion_forwardProp = u, Object.defineProperty(C, "toString", {
      value: function() {
        return s === void 0 && ks ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), C.withComponent = function(b, g) {
      return e(b, gt({}, t, g, {
        shouldForwardProp: uo(C, g, !0)
      })).apply(void 0, h);
    }, C;
  };
}, js = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], gn = Ms.bind();
js.forEach(function(e) {
  gn[e] = gn(e);
});
var vn = { exports: {} }, Ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Ds() {
  if (lo) return Ur;
  lo = 1;
  var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, p) {
    var m, h = {}, y = null, w = null;
    p !== void 0 && (y = "" + p), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (m in l) n.call(l, m) && !i.hasOwnProperty(m) && (h[m] = l[m]);
    if (u && u.defaultProps) for (m in l = u.defaultProps, l) h[m] === void 0 && (h[m] = l[m]);
    return { $$typeof: r, type: u, key: y, ref: w, props: h, _owner: o.current };
  }
  return Ur.Fragment = t, Ur.jsx = s, Ur.jsxs = s, Ur;
}
var qr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function Ns() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), C = Symbol.iterator, b = "@@iterator";
    function g(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = C && a[C] || a[b];
      return typeof d == "function" ? d : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(a) {
      {
        for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), P = 1; P < d; P++)
          v[P - 1] = arguments[P];
        _("error", a, v);
      }
    }
    function _(a, d, v) {
      {
        var P = R.ReactDebugCurrentFrame, B = P.getStackAddendum();
        B !== "" && (d += "%s", v = v.concat([B]));
        var z = v.map(function(D) {
          return String(D);
        });
        z.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, z);
      }
    }
    var T = !1, f = !1, M = !1, j = !1, ne = !1, te;
    te = Symbol.for("react.module.reference");
    function c(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ne || a === o || a === p || a === m || j || a === w || T || f || M || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === h || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === te || a.getModuleId !== void 0));
    }
    function k(a, d, v) {
      var P = a.displayName;
      if (P)
        return P;
      var B = d.displayName || d.name || "";
      return B !== "" ? v + "(" + B + ")" : v;
    }
    function L(a) {
      return a.displayName || "Context";
    }
    function N(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var d = a;
            return L(d) + ".Consumer";
          case s:
            var v = a;
            return L(v._context) + ".Provider";
          case l:
            return k(a, a.render, "ForwardRef");
          case h:
            var P = a.displayName || null;
            return P !== null ? P : N(a.type) || "Memo";
          case y: {
            var B = a, z = B._payload, D = B._init;
            try {
              return N(D(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, oe = 0, ae, ve, be, Ee, O, A, U;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function V() {
      {
        if (oe === 0) {
          ae = console.log, ve = console.info, be = console.warn, Ee = console.error, O = console.group, A = console.groupCollapsed, U = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
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
        oe++;
      }
    }
    function ee() {
      {
        if (oe--, oe === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, a, {
              value: ae
            }),
            info: W({}, a, {
              value: ve
            }),
            warn: W({}, a, {
              value: be
            }),
            error: W({}, a, {
              value: Ee
            }),
            group: W({}, a, {
              value: O
            }),
            groupCollapsed: W({}, a, {
              value: A
            }),
            groupEnd: W({}, a, {
              value: U
            })
          });
        }
        oe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = R.ReactCurrentDispatcher, q;
    function K(a, d, v) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (B) {
            var P = B.stack.trim().match(/\n( *(at )?)/);
            q = P && P[1] || "";
          }
        return `
` + q + a;
      }
    }
    var Q = !1, H;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ce();
    }
    function S(a, d) {
      if (!a || Q)
        return "";
      {
        var v = H.get(a);
        if (v !== void 0)
          return v;
      }
      var P;
      Q = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = Y.current, Y.current = null, V();
      try {
        if (d) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(a, [], D);
          } else {
            try {
              D.call();
            } catch (he) {
              P = he;
            }
            a.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          a();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var I = he.stack.split(`
`), ie = P.stack.split(`
`), Z = I.length - 1, re = ie.length - 1; Z >= 1 && re >= 0 && I[Z] !== ie[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (I[Z] !== ie[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || I[Z] !== ie[re]) {
                    var Se = `
` + I[Z].replace(" at new ", " at ");
                    return a.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", a.displayName)), typeof a == "function" && H.set(a, Se), Se;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        Q = !1, Y.current = z, ee(), Error.prepareStackTrace = B;
      }
      var Fe = a ? a.displayName || a.name : "", Me = Fe ? K(Fe) : "";
      return typeof a == "function" && H.set(a, Me), Me;
    }
    function we(a, d, v) {
      return S(a, !1);
    }
    function F(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function xe(a, d, v) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return S(a, F(a));
      if (typeof a == "string")
        return K(a);
      switch (a) {
        case p:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return we(a.render);
          case h:
            return xe(a.type, d, v);
          case y: {
            var P = a, B = P._payload, z = P._init;
            try {
              return xe(z(B), d, v);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Ge = {}, Ke = R.ReactDebugCurrentFrame;
    function Ie(a) {
      if (a) {
        var d = a._owner, v = xe(a.type, a._source, d ? d.type : null);
        Ke.setExtraStackFrame(v);
      } else
        Ke.setExtraStackFrame(null);
    }
    function Ar(a, d, v, P, B) {
      {
        var z = Function.call.bind($e);
        for (var D in a)
          if (z(a, D)) {
            var I = void 0;
            try {
              if (typeof a[D] != "function") {
                var ie = Error((P || "React class") + ": " + v + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              I = a[D](d, D, P, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              I = Z;
            }
            I && !(I instanceof Error) && (Ie(B), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", v, D, typeof I), Ie(null)), I instanceof Error && !(I.message in Ge) && (Ge[I.message] = !0, Ie(B), $("Failed %s type: %s", v, I.message), Ie(null));
          }
      }
    }
    var yr = Array.isArray;
    function er(a) {
      return yr(a);
    }
    function X(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, v = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v;
      }
    }
    function gr(a) {
      try {
        return ur(a), !1;
      } catch {
        return !0;
      }
    }
    function ur(a) {
      return "" + a;
    }
    function ar(a) {
      if (gr(a))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(a)), ur(a);
    }
    var ze = R.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kr, Ir, lr;
    lr = {};
    function Dt(a) {
      if ($e.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Nt(a) {
      if ($e.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Ft(a, d) {
      if (typeof a.ref == "string" && ze.current && d && ze.current.stateNode !== d) {
        var v = N(ze.current.type);
        lr[v] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(ze.current.type), a.ref), lr[v] = !0);
      }
    }
    function Bt(a, d) {
      {
        var v = function() {
          kr || (kr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Lt(a, d) {
      {
        var v = function() {
          Ir || (Ir = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Vt = function(a, d, v, P, B, z, D) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: d,
        ref: v,
        props: D,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function zt(a, d, v, P, B) {
      {
        var z, D = {}, I = null, ie = null;
        v !== void 0 && (ar(v), I = "" + v), Nt(d) && (ar(d.key), I = "" + d.key), Dt(d) && (ie = d.ref, Ft(d, B));
        for (z in d)
          $e.call(d, z) && !jt.hasOwnProperty(z) && (D[z] = d[z]);
        if (a && a.defaultProps) {
          var Z = a.defaultProps;
          for (z in Z)
            D[z] === void 0 && (D[z] = Z[z]);
        }
        if (I || ie) {
          var re = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          I && Bt(D, re), ie && Lt(D, re);
        }
        return Vt(a, I, ie, B, P, ze.current, D);
      }
    }
    var fr = R.ReactCurrentOwner, Mr = R.ReactDebugCurrentFrame;
    function Ne(a) {
      if (a) {
        var d = a._owner, v = xe(a.type, a._source, d ? d.type : null);
        Mr.setExtraStackFrame(v);
      } else
        Mr.setExtraStackFrame(null);
    }
    var dr;
    dr = !1;
    function pr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function jr() {
      {
        if (fr.current) {
          var a = N(fr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Wt(a) {
      return "";
    }
    var Dr = {};
    function Yt(a) {
      {
        var d = jr();
        if (!d) {
          var v = typeof a == "string" ? a : a.displayName || a.name;
          v && (d = `

Check the top-level render call using <` + v + ">.");
        }
        return d;
      }
    }
    function Nr(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var v = Yt(d);
        if (Dr[v])
          return;
        Dr[v] = !0;
        var P = "";
        a && a._owner && a._owner !== fr.current && (P = " It was passed a child from " + N(a._owner.type) + "."), Ne(a), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, P), Ne(null);
      }
    }
    function Fr(a, d) {
      {
        if (typeof a != "object")
          return;
        if (er(a))
          for (var v = 0; v < a.length; v++) {
            var P = a[v];
            pr(P) && Nr(P, d);
          }
        else if (pr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var B = g(a);
          if (typeof B == "function" && B !== a.entries)
            for (var z = B.call(a), D; !(D = z.next()).done; )
              pr(D.value) && Nr(D.value, d);
        }
      }
    }
    function Ut(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var v;
        if (typeof d == "function")
          v = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === h))
          v = d.propTypes;
        else
          return;
        if (v) {
          var P = N(d);
          Ar(v, a.props, "prop", P, a);
        } else if (d.PropTypes !== void 0 && !dr) {
          dr = !0;
          var B = N(d);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qt(a) {
      {
        for (var d = Object.keys(a.props), v = 0; v < d.length; v++) {
          var P = d[v];
          if (P !== "children" && P !== "key") {
            Ne(a), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Ne(null);
            break;
          }
        }
        a.ref !== null && (Ne(a), $("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Br = {};
    function Lr(a, d, v, P, B, z) {
      {
        var D = c(a);
        if (!D) {
          var I = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Wt();
          ie ? I += ie : I += jr();
          var Z;
          a === null ? Z = "null" : er(a) ? Z = "array" : a !== void 0 && a.$$typeof === r ? (Z = "<" + (N(a.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof a, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, I);
        }
        var re = zt(a, d, v, B, z);
        if (re == null)
          return re;
        if (D) {
          var Se = d.children;
          if (Se !== void 0)
            if (P)
              if (er(Se)) {
                for (var Fe = 0; Fe < Se.length; Fe++)
                  Fr(Se[Fe], a);
                Object.freeze && Object.freeze(Se);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fr(Se, a);
        }
        if ($e.call(d, "key")) {
          var Me = N(a), he = Object.keys(d).filter(function(Qt) {
            return Qt !== "key";
          }), mr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Br[Me + mr]) {
            var Jt = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mr, Me, Jt, Me), Br[Me + mr] = !0;
          }
        }
        return a === n ? qt(re) : Ut(re), re;
      }
    }
    function Gt(a, d, v) {
      return Lr(a, d, v, !0);
    }
    function Kt(a, d, v) {
      return Lr(a, d, v, !1);
    }
    var Ht = Kt, Xt = Gt;
    qr.Fragment = n, qr.jsx = Ht, qr.jsxs = Xt;
  }()), qr;
}
process.env.NODE_ENV === "production" ? vn.exports = Ds() : vn.exports = Ns();
var Ze = vn.exports;
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Fs(e, r) {
  const t = gn(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function Bs(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const po = [];
function mo(e) {
  return po[0] = e, kn(po);
}
const Ls = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Vs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = Ls(r), s = Object.keys(i);
  function u(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function l(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function p(y, w) {
    const C = s.indexOf(w);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(C !== -1 && typeof r[s[C]] == "number" ? r[s[C]] : w) - n / 100}${t})`;
  }
  function m(y) {
    return s.indexOf(y) + 1 < s.length ? p(y, s[s.indexOf(y) + 1]) : u(y);
  }
  function h(y) {
    const w = s.indexOf(y);
    return w === 0 ? u(s[1]) : w === s.length - 1 ? l(s[w]) : p(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: u,
    down: l,
    between: p,
    only: m,
    not: h,
    unit: t,
    ...o
  };
}
const zs = {
  borderRadius: 4
};
function Zo(e = 8, r = _n({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function Ws(e, r) {
  var n;
  const t = this;
  if (t.vars) {
    if (!((n = t.colorSchemes) != null && n[e]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let o = t.getColorSchemeSelector(e);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function ea(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, u = Vs(t), l = Zo(o);
  let p = Le({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...zs,
      ...i
    }
  }, s);
  return p = Va(p), p.applyStyles = Ws, p = r.reduce((m, h) => Le(m, h), p), p.unstable_sxConfig = {
    ...$t,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, p.unstable_sx = function(h) {
    return _r({
      sx: h,
      theme: this
    });
  }, p;
}
const ho = (e) => e, Ys = () => {
  let e = ho;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ho;
    }
  };
}, Us = Ys(), qs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Mt(e, r, t = "Mui") {
  const n = qs[r];
  return n ? `${t}-${n}` : `${Us.generate(e)}-${r}`;
}
function Mn(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Mt(e, o, t);
  }), n;
}
var bn = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Gs() {
  if (yo) return pe;
  yo = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function b(g) {
    if (typeof g == "object" && g !== null) {
      var R = g.$$typeof;
      switch (R) {
        case e:
          switch (g = g.type, g) {
            case t:
            case o:
            case n:
            case p:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case u:
                case s:
                case l:
                case y:
                case h:
                case i:
                  return g;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  return pe.ContextConsumer = s, pe.ContextProvider = i, pe.Element = e, pe.ForwardRef = l, pe.Fragment = t, pe.Lazy = y, pe.Memo = h, pe.Portal = r, pe.Profiler = o, pe.StrictMode = n, pe.Suspense = p, pe.SuspenseList = m, pe.isAsyncMode = function() {
    return !1;
  }, pe.isConcurrentMode = function() {
    return !1;
  }, pe.isContextConsumer = function(g) {
    return b(g) === s;
  }, pe.isContextProvider = function(g) {
    return b(g) === i;
  }, pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, pe.isForwardRef = function(g) {
    return b(g) === l;
  }, pe.isFragment = function(g) {
    return b(g) === t;
  }, pe.isLazy = function(g) {
    return b(g) === y;
  }, pe.isMemo = function(g) {
    return b(g) === h;
  }, pe.isPortal = function(g) {
    return b(g) === r;
  }, pe.isProfiler = function(g) {
    return b(g) === o;
  }, pe.isStrictMode = function(g) {
    return b(g) === n;
  }, pe.isSuspense = function(g) {
    return b(g) === p;
  }, pe.isSuspenseList = function(g) {
    return b(g) === m;
  }, pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === p || g === m || g === w || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === h || g.$$typeof === i || g.$$typeof === s || g.$$typeof === l || g.$$typeof === C || g.getModuleId !== void 0);
  }, pe.typeOf = b, pe;
}
var me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function Ks() {
  return go || (go = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), C = !1, b = !1, g = !1, R = !1, $ = !1, _;
    _ = Symbol.for("react.module.reference");
    function T(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === t || F === o || $ || F === n || F === p || F === m || R || F === w || C || b || g || typeof F == "object" && F !== null && (F.$$typeof === y || F.$$typeof === h || F.$$typeof === i || F.$$typeof === s || F.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === _ || F.getModuleId !== void 0));
    }
    function f(F) {
      if (typeof F == "object" && F !== null) {
        var xe = F.$$typeof;
        switch (xe) {
          case e:
            var $e = F.type;
            switch ($e) {
              case t:
              case o:
              case n:
              case p:
              case m:
                return $e;
              default:
                var Ge = $e && $e.$$typeof;
                switch (Ge) {
                  case u:
                  case s:
                  case l:
                  case y:
                  case h:
                  case i:
                    return Ge;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var M = s, j = i, ne = e, te = l, c = t, k = y, L = h, N = r, W = o, oe = n, ae = p, ve = m, be = !1, Ee = !1;
    function O(F) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(F) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(F) {
      return f(F) === s;
    }
    function G(F) {
      return f(F) === i;
    }
    function V(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function ee(F) {
      return f(F) === l;
    }
    function Y(F) {
      return f(F) === t;
    }
    function q(F) {
      return f(F) === y;
    }
    function K(F) {
      return f(F) === h;
    }
    function Q(F) {
      return f(F) === r;
    }
    function H(F) {
      return f(F) === o;
    }
    function Ce(F) {
      return f(F) === n;
    }
    function S(F) {
      return f(F) === p;
    }
    function we(F) {
      return f(F) === m;
    }
    me.ContextConsumer = M, me.ContextProvider = j, me.Element = ne, me.ForwardRef = te, me.Fragment = c, me.Lazy = k, me.Memo = L, me.Portal = N, me.Profiler = W, me.StrictMode = oe, me.Suspense = ae, me.SuspenseList = ve, me.isAsyncMode = O, me.isConcurrentMode = A, me.isContextConsumer = U, me.isContextProvider = G, me.isElement = V, me.isForwardRef = ee, me.isFragment = Y, me.isLazy = q, me.isMemo = K, me.isPortal = Q, me.isProfiler = H, me.isStrictMode = Ce, me.isSuspense = S, me.isSuspenseList = we, me.isValidElementType = T, me.typeOf = f;
  }()), me;
}
process.env.NODE_ENV === "production" ? bn.exports = Gs() : bn.exports = Ks();
var vo = bn.exports;
function ra(e, r = "") {
  return e.displayName || e.name || r;
}
function bo(e, r, t) {
  const n = ra(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Hs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ra(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vo.ForwardRef:
          return bo(e, e.render, "ForwardRef");
        case vo.Memo:
          return bo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ta(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: mo(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = mo(o.style));
  }), n;
}
const Xs = ea();
function sn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Js(e) {
  return e ? (r, t) => t[e] : null;
}
function Qs(e, r, t) {
  e.theme = tc(e.theme) ? t : e.theme[r] || e.theme;
}
function mt(e, r) {
  const t = typeof r == "function" ? r(e) : r;
  if (Array.isArray(t))
    return t.flatMap((n) => mt(e, n));
  if (Array.isArray(t == null ? void 0 : t.variants)) {
    let n;
    if (t.isProcessed)
      n = t.style;
    else {
      const {
        variants: o,
        ...i
      } = t;
      n = i;
    }
    return na(e, t.variants, [n]);
  }
  return t != null && t.isProcessed ? t.style : t;
}
function na(e, r, t = []) {
  var o;
  let n;
  e: for (let i = 0; i < r.length; i += 1) {
    const s = r[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const u in s.props)
        if (e[u] !== s.props[u] && ((o = e.ownerState) == null ? void 0 : o[u]) !== s.props[u])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), t.push(s.style(n))) : t.push(s.style);
  }
  return t;
}
function Zs(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Xs,
    rootShouldForwardProp: n = sn,
    slotShouldForwardProp: o = sn
  } = e;
  function i(u) {
    Qs(u, r, t);
  }
  return (u, l = {}) => {
    Bs(u, (f) => f.filter((M) => M !== _r));
    const {
      name: p,
      slot: m,
      skipVariantsResolver: h,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = Js(oa(m)),
      ...C
    } = l, b = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), g = y || !1;
    let R = sn;
    m === "Root" || m === "root" ? R = n : m ? R = o : nc(u) && (R = void 0);
    const $ = Fs(u, {
      shouldForwardProp: R,
      label: rc(p, m),
      ...C
    }), _ = (f) => {
      if (typeof f == "function" && f.__emotion_real !== f)
        return function(j) {
          return mt(j, f);
        };
      if (tr(f)) {
        const M = ta(f);
        return M.variants ? function(ne) {
          return mt(ne, M);
        } : M.style;
      }
      return f;
    }, T = (...f) => {
      const M = [], j = f.map(_), ne = [];
      if (M.push(i), p && w && ne.push(function(L) {
        var ae, ve;
        const W = (ve = (ae = L.theme.components) == null ? void 0 : ae[p]) == null ? void 0 : ve.styleOverrides;
        if (!W)
          return null;
        const oe = {};
        for (const be in W)
          oe[be] = mt(L, W[be]);
        return w(L, oe);
      }), p && !b && ne.push(function(L) {
        var oe, ae;
        const N = L.theme, W = (ae = (oe = N == null ? void 0 : N.components) == null ? void 0 : oe[p]) == null ? void 0 : ae.variants;
        return W ? na(L, W) : null;
      }), g || ne.push(_r), Array.isArray(j[0])) {
        const k = j.shift(), L = new Array(M.length).fill(""), N = new Array(ne.length).fill("");
        let W;
        W = [...L, ...k, ...N], W.raw = [...L, ...k.raw, ...N], M.unshift(W);
      }
      const te = [...M, ...j, ...ne], c = $(...te);
      return u.muiName && (c.muiName = u.muiName), process.env.NODE_ENV !== "production" && (c.displayName = ec(p, m, u)), c;
    };
    return $.withConfig && (T.withConfig = $.withConfig), T;
  };
}
function ec(e, r, t) {
  return e ? `${e}${je(r || "")}` : `Styled(${Hs(t)})`;
}
function rc(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${oa(r || "Root")}`), t;
}
function tc(e) {
  for (const r in e)
    return !1;
  return !0;
}
function nc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function oa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const oc = typeof window < "u" ? J.useLayoutEffect : J.useEffect;
function ac(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function ic(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function sc(e, r, t, n, o) {
  const i = e[r], s = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let u;
  return typeof i == "function" && !ic(i) && (u = "Did you accidentally provide a plain function component instead?"), u !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${u} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const cc = ac(x.elementType, sc), uc = x.oneOfType([x.func, x.object]);
function lc(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
function ct(e) {
  const r = J.useRef(e);
  return oc(() => {
    r.current = e;
  }), J.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
function So(...e) {
  return J.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      lc(t, r);
    });
  }, e);
}
const Eo = {};
function aa(e, r) {
  const t = J.useRef(Eo);
  return t.current === Eo && (t.current = e(r)), t;
}
const fc = [];
function dc(e) {
  J.useEffect(e, fc);
}
class jn {
  constructor() {
    Vr(this, "currentId", null);
    Vr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Vr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new jn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, t) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t();
    }, r);
  }
}
function pc() {
  const e = aa(jn.create).current;
  return dc(e.disposeEffect), e;
}
function Co(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const mc = /* @__PURE__ */ J.createContext(void 0);
process.env.NODE_ENV !== "production" && (x.node, x.object);
function hc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? ht(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ht(o, n) : n;
}
function yc({
  props: e,
  name: r
}) {
  const t = J.useContext(mc);
  return hc({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const To = {
  theme: void 0
};
function gc(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (To.theme = o.theme, i = ta(e(To)), r = i, t = o.theme), i;
  };
}
function vc(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const xo = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, s) => {
    s === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, bc = (e, r, t) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([u, l]) => {
      (!t || t && !t([...i, u])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, u], Array.isArray(l) ? [...s, u] : s) : r([...i, u], l, s));
    });
  }
  n(e);
}, Sc = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function cn(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, s = {};
  return bc(
    e,
    (u, l, p) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(u, l))) {
        const m = `--${t ? `${t}-` : ""}${u.join("-")}`, h = Sc(u, l);
        Object.assign(o, {
          [m]: h
        }), xo(i, u, `var(${m})`, p), xo(s, u, `var(${m}, ${h})`, p);
      }
    },
    (u) => u[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Ec(e, r = {}) {
  const {
    getSelector: t = g,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: u = "light",
    ...l
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: h
  } = cn(l, r);
  let y = h;
  const w = {}, {
    [u]: C,
    ...b
  } = i;
  if (Object.entries(b || {}).forEach(([_, T]) => {
    const {
      vars: f,
      css: M,
      varsWithDefaults: j
    } = cn(T, r);
    y = Le(y, j), w[_] = {
      css: M,
      vars: f
    };
  }), C) {
    const {
      css: _,
      vars: T,
      varsWithDefaults: f
    } = cn(C, r);
    y = Le(y, f), w[u] = {
      css: _,
      vars: T
    };
  }
  function g(_, T) {
    var M, j;
    let f = o;
    if (o === "class" && (f = ".%s"), o === "data" && (f = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (f = `[${o}="%s"]`), _) {
      if (f === "media")
        return e.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((j = (M = i[_]) == null ? void 0 : M.palette) == null ? void 0 : j.mode) || _})`]: {
            ":root": T
          }
        };
      if (f)
        return e.defaultColorScheme === _ ? `:root, ${f.replace("%s", String(_))}` : f.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let _ = {
        ...p
      };
      return Object.entries(w).forEach(([, {
        vars: T
      }]) => {
        _ = Le(_, T);
      }), _;
    },
    generateStyleSheets: () => {
      var ne, te;
      const _ = [], T = e.defaultColorScheme || "light";
      function f(c, k) {
        Object.keys(k).length && _.push(typeof c == "string" ? {
          [c]: {
            ...k
          }
        } : c);
      }
      f(t(void 0, {
        ...m
      }), m);
      const {
        [T]: M,
        ...j
      } = w;
      if (M) {
        const {
          css: c
        } = M, k = (te = (ne = i[T]) == null ? void 0 : ne.palette) == null ? void 0 : te.mode, L = !n && k ? {
          colorScheme: k,
          ...c
        } : {
          ...c
        };
        f(t(T, {
          ...L
        }), L);
      }
      return Object.entries(j).forEach(([c, {
        css: k
      }]) => {
        var W, oe;
        const L = (oe = (W = i[c]) == null ? void 0 : W.palette) == null ? void 0 : oe.mode, N = !n && L ? {
          colorScheme: L,
          ...k
        } : {
          ...k
        };
        f(t(c, {
          ...N
        }), N);
      }), _;
    }
  };
}
function Cc(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const et = {
  black: "#000",
  white: "#fff"
}, Tc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, vr = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, br = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Gr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Sr = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Er = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Cr = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, wo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: et.white,
    default: et.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, un = {
  text: {
    primary: et.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: et.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ro(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Rn(e.main, o) : r === "dark" && (e.dark = wn(e.main, i)));
}
function xc(e = "light") {
  return e === "dark" ? {
    main: Sr[200],
    light: Sr[50],
    dark: Sr[400]
  } : {
    main: Sr[700],
    light: Sr[400],
    dark: Sr[800]
  };
}
function wc(e = "light") {
  return e === "dark" ? {
    main: vr[200],
    light: vr[50],
    dark: vr[400]
  } : {
    main: vr[500],
    light: vr[300],
    dark: vr[700]
  };
}
function Rc(e = "light") {
  return e === "dark" ? {
    main: br[500],
    light: br[300],
    dark: br[700]
  } : {
    main: br[700],
    light: br[400],
    dark: br[800]
  };
}
function _c(e = "light") {
  return e === "dark" ? {
    main: Er[400],
    light: Er[300],
    dark: Er[700]
  } : {
    main: Er[700],
    light: Er[500],
    dark: Er[900]
  };
}
function Oc(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[800],
    light: Cr[500],
    dark: Cr[900]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: Gr[400],
    light: Gr[300],
    dark: Gr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Gr[500],
    dark: Gr[900]
  };
}
function Dn(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || xc(r), s = e.secondary || wc(r), u = e.error || Rc(r), l = e.info || _c(r), p = e.success || Oc(r), m = e.warning || Pc(r);
  function h(b) {
    const g = Jn(b, un.text.primary) >= t ? un.text.primary : wo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = Jn(b, g);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${g} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const y = ({
    color: b,
    name: g,
    mainShade: R = 500,
    lightShade: $ = 300,
    darkShade: _ = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[R] && (b.main = b[R]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : ir(11, g ? ` (${g})` : "", R));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ir(12, g ? ` (${g})` : "", JSON.stringify(b.main)));
    return Ro(b, "light", $, n), Ro(b, "dark", _, n), b.contrastText || (b.contrastText = h(b.main)), b;
  }, w = {
    dark: un,
    light: wo
  };
  return process.env.NODE_ENV !== "production" && (w[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Le({
    // A collection of common colors.
    common: {
      ...et
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Tc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...w[r]
  }, o);
}
function $c(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function Ac(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function kc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _o = {
  textTransform: "uppercase"
}, Oo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ic(e, r) {
  const {
    fontFamily: t = Oo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: m,
    ...h
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, w = m || ((g) => `${g / l * y}rem`), C = (g, R, $, _, T) => ({
    fontFamily: t,
    fontWeight: g,
    fontSize: w(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === Oo ? {
      letterSpacing: `${kc(_ / R)}em`
    } : {},
    ...T,
    ...p
  }), b = {
    h1: C(o, 96, 1.167, -1.5),
    h2: C(o, 60, 1.2, -0.5),
    h3: C(i, 48, 1.167, 0),
    h4: C(i, 34, 1.235, 0.25),
    h5: C(i, 24, 1.334, 0),
    h6: C(s, 20, 1.6, 0.15),
    subtitle1: C(i, 16, 1.75, 0.15),
    subtitle2: C(s, 14, 1.57, 0.1),
    body1: C(i, 16, 1.5, 0.15),
    body2: C(i, 14, 1.43, 0.15),
    button: C(s, 14, 1.75, 0.4, _o),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, _o),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Le({
    htmlFontSize: l,
    pxToRem: w,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: u,
    ...b
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Mc = 0.2, jc = 0.14, Dc = 0.12;
function Te(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${jc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Dc})`].join(",");
}
const Nc = ["none", Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Fc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Bc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Po(e) {
  return `${Math.round(e)}ms`;
}
function Lc(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Vc(e) {
  const r = {
    ...Fc,
    ...e.easing
  }, t = {
    ...Bc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Lc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: u = r.easeInOut,
        delay: l = 0,
        ...p
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (y) => typeof y == "string", h = (y) => !Number.isNaN(parseFloat(y));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(u) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !m(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : Po(s)} ${u} ${typeof l == "string" ? l : Po(l)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const zc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Sn(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: u = {},
    shape: l,
    ...p
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ir(20));
  const m = Dn(i), h = ea(e);
  let y = Le(h, {
    mixins: Ac(h.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Nc.slice(),
    typography: Ic(m, u),
    transitions: Vc(s),
    zIndex: {
      ...zc
    }
  });
  if (y = Le(y, p), y = r.reduce((w, C) => Le(w, C), y), process.env.NODE_ENV !== "production") {
    const w = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (b, g) => {
      let R;
      for (R in b) {
        const $ = b[R];
        if (w.includes(R) && Object.keys($).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = Mt("", R);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: $
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[R] = {};
        }
      }
    };
    Object.keys(y.components).forEach((b) => {
      const g = y.components[b].styleOverrides;
      g && b.startsWith("Mui") && C(g, b);
    });
  }
  return y.unstable_sxConfig = {
    ...$t,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, y.unstable_sx = function(C) {
    return _r({
      sx: C,
      theme: this
    });
  }, y;
}
function Wc(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Yc = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Wc(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function ia(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function sa(e) {
  return e === "dark" ? Yc : [];
}
function Uc(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = Dn(r);
  return {
    palette: i,
    opacity: {
      ...ia(i.mode),
      ...t
    },
    overlays: n || sa(i.mode),
    ...o
  };
}
function qc(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Gc = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Kc = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const s = {};
      return Gc(e.cssVarPrefix).forEach((u) => {
        s[u] = t[u], delete t[u];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", r)]: s,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function Hc(e) {
  return tr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Xc(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, u] = o[i];
      !Hc(u) || s.startsWith("unstable_") ? delete n[s] : tr(u) && (n[s] = {
        ...u
      }, t(n[s]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Jc(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function E(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Hr(e) {
  return !e || !e.startsWith("hsl") ? e : Do(e);
}
function rr(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Kr(Hr(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Qc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const He = (e) => {
  try {
    return e();
  } catch {
  }
}, Zc = (e = "mui") => vc(e);
function ln(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = Uc({
      ...r,
      palette: {
        mode: o,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Sn({
    ...t,
    palette: {
      mode: o,
      ...r == null ? void 0 : r.palette
    }
  });
  return e[n] = {
    ...r,
    palette: i,
    opacity: {
      ...ia(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || sa(o)
  }, s;
}
function eu(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = qc,
    colorSchemeSelector: u = t.light && t.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...p
  } = e, m = Object.keys(t)[0], h = n || (t.light && m !== "light" ? "light" : m), y = Zc(i), {
    [h]: w,
    light: C,
    dark: b,
    ...g
  } = t, R = {
    ...g
  };
  let $ = w;
  if ((h === "dark" && !("dark" in t) || h === "light" && !("light" in t)) && ($ = !0), !$)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : ir(21, h));
  const _ = ln(R, $, p, h);
  C && !R.light && ln(R, C, void 0, "light"), b && !R.dark && ln(R, b, void 0, "dark");
  let T = {
    defaultColorScheme: h,
    ..._,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    rootSelector: l,
    getCssVar: y,
    colorSchemes: R,
    font: {
      ...$c(_.typography),
      ..._.font
    },
    spacing: Qc(p.spacing)
  };
  Object.keys(T.colorSchemes).forEach((te) => {
    const c = T.colorSchemes[te].palette, k = (L) => {
      const N = L.split("-"), W = N[1], oe = N[2];
      return y(L, c[W][oe]);
    };
    if (c.mode === "light" && (E(c.common, "background", "#fff"), E(c.common, "onBackground", "#000")), c.mode === "dark" && (E(c.common, "background", "#000"), E(c.common, "onBackground", "#fff")), Jc(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      E(c.Alert, "errorColor", ye(c.error.light, 0.6)), E(c.Alert, "infoColor", ye(c.info.light, 0.6)), E(c.Alert, "successColor", ye(c.success.light, 0.6)), E(c.Alert, "warningColor", ye(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", k("palette-error-main")), E(c.Alert, "infoFilledBg", k("palette-info-main")), E(c.Alert, "successFilledBg", k("palette-success-main")), E(c.Alert, "warningFilledBg", k("palette-warning-main")), E(c.Alert, "errorFilledColor", He(() => c.getContrastText(c.error.main))), E(c.Alert, "infoFilledColor", He(() => c.getContrastText(c.info.main))), E(c.Alert, "successFilledColor", He(() => c.getContrastText(c.success.main))), E(c.Alert, "warningFilledColor", He(() => c.getContrastText(c.warning.main))), E(c.Alert, "errorStandardBg", ge(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", ge(c.info.light, 0.9)), E(c.Alert, "successStandardBg", ge(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", ge(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", k("palette-error-main")), E(c.Alert, "infoIconColor", k("palette-info-main")), E(c.Alert, "successIconColor", k("palette-success-main")), E(c.Alert, "warningIconColor", k("palette-warning-main")), E(c.AppBar, "defaultBg", k("palette-grey-100")), E(c.Avatar, "defaultBg", k("palette-grey-400")), E(c.Button, "inheritContainedBg", k("palette-grey-300")), E(c.Button, "inheritContainedHoverBg", k("palette-grey-A100")), E(c.Chip, "defaultBorder", k("palette-grey-400")), E(c.Chip, "defaultAvatarColor", k("palette-grey-700")), E(c.Chip, "defaultIconColor", k("palette-grey-700")), E(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), E(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), E(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), E(c.LinearProgress, "primaryBg", ge(c.primary.main, 0.62)), E(c.LinearProgress, "secondaryBg", ge(c.secondary.main, 0.62)), E(c.LinearProgress, "errorBg", ge(c.error.main, 0.62)), E(c.LinearProgress, "infoBg", ge(c.info.main, 0.62)), E(c.LinearProgress, "successBg", ge(c.success.main, 0.62)), E(c.LinearProgress, "warningBg", ge(c.warning.main, 0.62)), E(c.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), E(c.Slider, "primaryTrack", ge(c.primary.main, 0.62)), E(c.Slider, "secondaryTrack", ge(c.secondary.main, 0.62)), E(c.Slider, "errorTrack", ge(c.error.main, 0.62)), E(c.Slider, "infoTrack", ge(c.info.main, 0.62)), E(c.Slider, "successTrack", ge(c.success.main, 0.62)), E(c.Slider, "warningTrack", ge(c.warning.main, 0.62));
      const L = it(c.background.default, 0.8);
      E(c.SnackbarContent, "bg", L), E(c.SnackbarContent, "color", He(() => c.getContrastText(L))), E(c.SpeedDialAction, "fabHoverBg", it(c.background.paper, 0.15)), E(c.StepConnector, "border", k("palette-grey-400")), E(c.StepContent, "border", k("palette-grey-400")), E(c.Switch, "defaultColor", k("palette-common-white")), E(c.Switch, "defaultDisabledColor", k("palette-grey-100")), E(c.Switch, "primaryDisabledColor", ge(c.primary.main, 0.62)), E(c.Switch, "secondaryDisabledColor", ge(c.secondary.main, 0.62)), E(c.Switch, "errorDisabledColor", ge(c.error.main, 0.62)), E(c.Switch, "infoDisabledColor", ge(c.info.main, 0.62)), E(c.Switch, "successDisabledColor", ge(c.success.main, 0.62)), E(c.Switch, "warningDisabledColor", ge(c.warning.main, 0.62)), E(c.TableCell, "border", ge(at(c.divider, 1), 0.88)), E(c.Tooltip, "bg", at(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      E(c.Alert, "errorColor", ge(c.error.light, 0.6)), E(c.Alert, "infoColor", ge(c.info.light, 0.6)), E(c.Alert, "successColor", ge(c.success.light, 0.6)), E(c.Alert, "warningColor", ge(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", k("palette-error-dark")), E(c.Alert, "infoFilledBg", k("palette-info-dark")), E(c.Alert, "successFilledBg", k("palette-success-dark")), E(c.Alert, "warningFilledBg", k("palette-warning-dark")), E(c.Alert, "errorFilledColor", He(() => c.getContrastText(c.error.dark))), E(c.Alert, "infoFilledColor", He(() => c.getContrastText(c.info.dark))), E(c.Alert, "successFilledColor", He(() => c.getContrastText(c.success.dark))), E(c.Alert, "warningFilledColor", He(() => c.getContrastText(c.warning.dark))), E(c.Alert, "errorStandardBg", ye(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", ye(c.info.light, 0.9)), E(c.Alert, "successStandardBg", ye(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", ye(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", k("palette-error-main")), E(c.Alert, "infoIconColor", k("palette-info-main")), E(c.Alert, "successIconColor", k("palette-success-main")), E(c.Alert, "warningIconColor", k("palette-warning-main")), E(c.AppBar, "defaultBg", k("palette-grey-900")), E(c.AppBar, "darkBg", k("palette-background-paper")), E(c.AppBar, "darkColor", k("palette-text-primary")), E(c.Avatar, "defaultBg", k("palette-grey-600")), E(c.Button, "inheritContainedBg", k("palette-grey-800")), E(c.Button, "inheritContainedHoverBg", k("palette-grey-700")), E(c.Chip, "defaultBorder", k("palette-grey-700")), E(c.Chip, "defaultAvatarColor", k("palette-grey-300")), E(c.Chip, "defaultIconColor", k("palette-grey-300")), E(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), E(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), E(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), E(c.LinearProgress, "primaryBg", ye(c.primary.main, 0.5)), E(c.LinearProgress, "secondaryBg", ye(c.secondary.main, 0.5)), E(c.LinearProgress, "errorBg", ye(c.error.main, 0.5)), E(c.LinearProgress, "infoBg", ye(c.info.main, 0.5)), E(c.LinearProgress, "successBg", ye(c.success.main, 0.5)), E(c.LinearProgress, "warningBg", ye(c.warning.main, 0.5)), E(c.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), E(c.Slider, "primaryTrack", ye(c.primary.main, 0.5)), E(c.Slider, "secondaryTrack", ye(c.secondary.main, 0.5)), E(c.Slider, "errorTrack", ye(c.error.main, 0.5)), E(c.Slider, "infoTrack", ye(c.info.main, 0.5)), E(c.Slider, "successTrack", ye(c.success.main, 0.5)), E(c.Slider, "warningTrack", ye(c.warning.main, 0.5));
      const L = it(c.background.default, 0.98);
      E(c.SnackbarContent, "bg", L), E(c.SnackbarContent, "color", He(() => c.getContrastText(L))), E(c.SpeedDialAction, "fabHoverBg", it(c.background.paper, 0.15)), E(c.StepConnector, "border", k("palette-grey-600")), E(c.StepContent, "border", k("palette-grey-600")), E(c.Switch, "defaultColor", k("palette-grey-300")), E(c.Switch, "defaultDisabledColor", k("palette-grey-600")), E(c.Switch, "primaryDisabledColor", ye(c.primary.main, 0.55)), E(c.Switch, "secondaryDisabledColor", ye(c.secondary.main, 0.55)), E(c.Switch, "errorDisabledColor", ye(c.error.main, 0.55)), E(c.Switch, "infoDisabledColor", ye(c.info.main, 0.55)), E(c.Switch, "successDisabledColor", ye(c.success.main, 0.55)), E(c.Switch, "warningDisabledColor", ye(c.warning.main, 0.55)), E(c.TableCell, "border", ye(at(c.divider, 1), 0.68)), E(c.Tooltip, "bg", at(c.grey[700], 0.92));
    }
    rr(c.background, "default"), rr(c.background, "paper"), rr(c.common, "background"), rr(c.common, "onBackground"), rr(c, "divider"), Object.keys(c).forEach((L) => {
      const N = c[L];
      N && typeof N == "object" && (N.main && E(c[L], "mainChannel", Kr(Hr(N.main))), N.light && E(c[L], "lightChannel", Kr(Hr(N.light))), N.dark && E(c[L], "darkChannel", Kr(Hr(N.dark))), N.contrastText && E(c[L], "contrastTextChannel", Kr(Hr(N.contrastText))), L === "text" && (rr(c[L], "primary"), rr(c[L], "secondary")), L === "action" && (N.active && rr(c[L], "active"), N.selected && rr(c[L], "selected")));
    });
  }), T = r.reduce((te, c) => Le(te, c), T);
  const f = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Kc(T)
  }, {
    vars: M,
    generateThemeVars: j,
    generateStyleSheets: ne
  } = Ec(T, f);
  return T.vars = M, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([te, c]) => {
    T[te] = c;
  }), T.generateThemeVars = j, T.generateStyleSheets = ne, T.generateSpacing = function() {
    return Zo(p.spacing, _n(this));
  }, T.getColorSchemeSelector = Cc(u), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = s, T.unstable_sxConfig = {
    ...$t,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, T.unstable_sx = function(c) {
    return _r({
      sx: c,
      theme: this
    });
  }, T.toRuntimeSource = Xc, T;
}
function $o(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: Dn({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function ru(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...s
  } = e, u = i || "light", l = o == null ? void 0 : o[u], p = {
    ...o,
    ...t ? {
      [u]: {
        ...typeof l != "boolean" && l,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Sn(e, ...r);
    let m = t;
    "palette" in e || p[u] && (p[u] !== !0 ? m = p[u].palette : u === "dark" && (m = {
      mode: "dark"
    }));
    const h = Sn({
      ...e,
      palette: m
    }, ...r);
    return h.defaultColorScheme = u, h.colorSchemes = p, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: h.palette
    }, $o(h, "dark", p.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: h.palette
    }, $o(h, "light", p.light)), h;
  }
  return !t && !("light" in p) && u === "light" && (p.light = !0), eu({
    ...s,
    colorSchemes: p,
    defaultColorScheme: u,
    ...typeof n != "boolean" && n
  }, ...r);
}
const tu = ru(), nu = "$$material", $r = Zs({
  themeId: nu,
  defaultTheme: tu,
  rootShouldForwardProp: No
}), ou = gc;
process.env.NODE_ENV !== "production" && (x.node, x.object.isRequired);
function Nn(e) {
  return yc(e);
}
class bt {
  constructor() {
    Vr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new bt();
  }
  static use() {
    const r = aa(bt.create).current, [t, n] = J.useState(!1);
    return r.shouldMount = t, r.setShouldMount = n, J.useEffect(r.mountEffect, [t]), r;
  }
  mount() {
    return this.mounted || (this.mounted = iu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.pulsate(...r);
    });
  }
}
function au() {
  return bt.use();
}
function iu() {
  let e, r;
  const t = new Promise((n, o) => {
    e = n, r = o;
  });
  return t.resolve = e, t.reject = r, t;
}
function su(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function En(e, r) {
  return En = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, En(e, r);
}
function cu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, En(e, r);
}
const Ao = nr.createContext(null);
function uu(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fn(e, r) {
  var t = function(i) {
    return r && ut(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ba.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function lu(e, r) {
  e = e || {}, r = r || {};
  function t(m) {
    return m in r ? r[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, u = {};
  for (var l in r) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var p = n[l][s];
        u[n[l][s]] = t(p);
      }
    u[l] = t(l);
  }
  for (s = 0; s < o.length; s++)
    u[o[s]] = t(o[s]);
  return u;
}
function hr(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function fu(e, r) {
  return Fn(e.children, function(t) {
    return lt(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: hr(t, "appear", e),
      enter: hr(t, "enter", e),
      exit: hr(t, "exit", e)
    });
  });
}
function du(e, r, t) {
  var n = Fn(e.children), o = lu(r, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (ut(s)) {
      var u = i in r, l = i in n, p = r[i], m = ut(p) && !p.props.in;
      l && (!u || m) ? o[i] = lt(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: hr(s, "exit", e),
        enter: hr(s, "enter", e)
      }) : !l && u && !m ? o[i] = lt(s, {
        in: !1
      }) : l && u && ut(p) && (o[i] = lt(s, {
        onExited: t.bind(null, s),
        in: p.props.in,
        exit: hr(s, "exit", e),
        enter: hr(s, "enter", e)
      }));
    }
  }), o;
}
var pu = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, mu = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, Bn = /* @__PURE__ */ function(e) {
  cu(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(uu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var s = i.children, u = i.handleExited, l = i.firstRender;
    return {
      children: l ? fu(o, u) : du(o, s, u),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var s = Fn(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(u) {
      var l = gt({}, u.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, u = su(o, ["component", "childFactory"]), l = this.state.contextValue, p = pu(this.state.children).map(s);
    return delete u.appear, delete u.enter, delete u.exit, i === null ? /* @__PURE__ */ nr.createElement(Ao.Provider, {
      value: l
    }, p) : /* @__PURE__ */ nr.createElement(Ao.Provider, {
      value: l
    }, /* @__PURE__ */ nr.createElement(i, u, p));
  }, r;
}(nr.Component);
Bn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: x.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: x.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: x.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: x.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: x.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: x.func
} : {};
Bn.defaultProps = mu;
function ca(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: u,
    onExited: l,
    timeout: p
  } = e, [m, h] = J.useState(!1), y = We(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), w = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, C = We(t.child, m && t.childLeaving, n && t.childPulsate);
  return !u && !m && h(!0), J.useEffect(() => {
    if (!u && l != null) {
      const b = setTimeout(l, p);
      return () => {
        clearTimeout(b);
      };
    }
  }, [l, u, p]), /* @__PURE__ */ Ze.jsx("span", {
    className: y,
    style: w,
    children: /* @__PURE__ */ Ze.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (ca.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object.isRequired,
  className: x.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: x.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: x.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: x.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: x.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: x.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: x.number,
  /**
   * exit delay
   */
  timeout: x.number.isRequired
});
const Ye = Mn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Cn = 550, hu = 80, yu = In`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, gu = In`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, vu = In`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, bu = $r("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Su = $r(ca, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ye.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yu};
    animation-duration: ${Cn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ye.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ye.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ye.childLeaving} {
    opacity: 0;
    animation-name: ${gu};
    animation-duration: ${Cn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ye.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${vu};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ua = /* @__PURE__ */ J.forwardRef(function(r, t) {
  const n = Nn({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...u
  } = n, [l, p] = J.useState([]), m = J.useRef(0), h = J.useRef(null);
  J.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const y = J.useRef(!1), w = pc(), C = J.useRef(null), b = J.useRef(null), g = J.useCallback((T) => {
    const {
      pulsate: f,
      rippleX: M,
      rippleY: j,
      rippleSize: ne,
      cb: te
    } = T;
    p((c) => [...c, /* @__PURE__ */ Ze.jsx(Su, {
      classes: {
        ripple: We(i.ripple, Ye.ripple),
        rippleVisible: We(i.rippleVisible, Ye.rippleVisible),
        ripplePulsate: We(i.ripplePulsate, Ye.ripplePulsate),
        child: We(i.child, Ye.child),
        childLeaving: We(i.childLeaving, Ye.childLeaving),
        childPulsate: We(i.childPulsate, Ye.childPulsate)
      },
      timeout: Cn,
      pulsate: f,
      rippleX: M,
      rippleY: j,
      rippleSize: ne
    }, m.current)]), m.current += 1, h.current = te;
  }, [i]), R = J.useCallback((T = {}, f = {}, M = () => {
  }) => {
    const {
      pulsate: j = !1,
      center: ne = o || f.pulsate,
      fakeElement: te = !1
      // For test purposes
    } = f;
    if ((T == null ? void 0 : T.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (y.current = !0);
    const c = te ? null : b.current, k = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let L, N, W;
    if (ne || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      L = Math.round(k.width / 2), N = Math.round(k.height / 2);
    else {
      const {
        clientX: oe,
        clientY: ae
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      L = Math.round(oe - k.left), N = Math.round(ae - k.top);
    }
    if (ne)
      W = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const oe = Math.max(Math.abs((c ? c.clientWidth : 0) - L), L) * 2 + 2, ae = Math.max(Math.abs((c ? c.clientHeight : 0) - N), N) * 2 + 2;
      W = Math.sqrt(oe ** 2 + ae ** 2);
    }
    T != null && T.touches ? C.current === null && (C.current = () => {
      g({
        pulsate: j,
        rippleX: L,
        rippleY: N,
        rippleSize: W,
        cb: M
      });
    }, w.start(hu, () => {
      C.current && (C.current(), C.current = null);
    })) : g({
      pulsate: j,
      rippleX: L,
      rippleY: N,
      rippleSize: W,
      cb: M
    });
  }, [o, g, w]), $ = J.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), _ = J.useCallback((T, f) => {
    if (w.clear(), (T == null ? void 0 : T.type) === "touchend" && C.current) {
      C.current(), C.current = null, w.start(0, () => {
        _(T, f);
      });
      return;
    }
    C.current = null, p((M) => M.length > 0 ? M.slice(1) : M), h.current = f;
  }, [w]);
  return J.useImperativeHandle(t, () => ({
    pulsate: $,
    start: R,
    stop: _
  }), [$, R, _]), /* @__PURE__ */ Ze.jsx(bu, {
    className: We(Ye.root, i.root, s),
    ref: b,
    ...u,
    children: /* @__PURE__ */ Ze.jsx(Bn, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (ua.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: x.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string
});
function Eu(e) {
  return Mt("MuiButtonBase", e);
}
const Cu = Mn("MuiButtonBase", ["root", "disabled", "focusVisible"]), Tu = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, s = jo({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, Eu, o);
  return t && n && (s.root += ` ${n}`), s;
}, xu = $r("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Cu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), la = /* @__PURE__ */ J.forwardRef(function(r, t) {
  const n = Nn({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: u,
    component: l = "button",
    disabled: p = !1,
    disableRipple: m = !1,
    disableTouchRipple: h = !1,
    focusRipple: y = !1,
    focusVisibleClassName: w,
    LinkComponent: C = "a",
    onBlur: b,
    onClick: g,
    onContextMenu: R,
    onDragLeave: $,
    onFocus: _,
    onFocusVisible: T,
    onKeyDown: f,
    onKeyUp: M,
    onMouseDown: j,
    onMouseLeave: ne,
    onMouseUp: te,
    onTouchEnd: c,
    onTouchMove: k,
    onTouchStart: L,
    tabIndex: N = 0,
    TouchRippleProps: W,
    touchRippleRef: oe,
    type: ae,
    ...ve
  } = n, be = J.useRef(null), Ee = au(), O = So(Ee.ref, oe), [A, U] = J.useState(!1);
  p && A && U(!1), J.useImperativeHandle(o, () => ({
    focusVisible: () => {
      U(!0), be.current.focus();
    }
  }), []);
  const G = Ee.shouldMount && !m && !p;
  J.useEffect(() => {
    A && y && !m && Ee.pulsate();
  }, [m, y, A, Ee]);
  function V(X, gr, ur = h) {
    return ct((ar) => (gr && gr(ar), ur || Ee[X](ar), !0));
  }
  const ee = V("start", j), Y = V("stop", R), q = V("stop", $), K = V("stop", te), Q = V("stop", (X) => {
    A && X.preventDefault(), ne && ne(X);
  }), H = V("start", L), Ce = V("stop", c), S = V("stop", k), we = V("stop", (X) => {
    Co(X.target) || U(!1), b && b(X);
  }, !1), F = ct((X) => {
    be.current || (be.current = X.currentTarget), Co(X.target) && (U(!0), T && T(X)), _ && _(X);
  }), xe = () => {
    const X = be.current;
    return l && l !== "button" && !(X.tagName === "A" && X.href);
  }, $e = ct((X) => {
    y && !X.repeat && A && X.key === " " && Ee.stop(X, () => {
      Ee.start(X);
    }), X.target === X.currentTarget && xe() && X.key === " " && X.preventDefault(), f && f(X), X.target === X.currentTarget && xe() && X.key === "Enter" && !p && (X.preventDefault(), g && g(X));
  }), Ge = ct((X) => {
    y && X.key === " " && A && !X.defaultPrevented && Ee.stop(X, () => {
      Ee.pulsate(X);
    }), M && M(X), g && X.target === X.currentTarget && xe() && X.key === " " && !X.defaultPrevented && g(X);
  });
  let Ke = l;
  Ke === "button" && (ve.href || ve.to) && (Ke = C);
  const Ie = {};
  Ke === "button" ? (Ie.type = ae === void 0 ? "button" : ae, Ie.disabled = p) : (!ve.href && !ve.to && (Ie.role = "button"), p && (Ie["aria-disabled"] = p));
  const Ar = So(t, be), yr = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: p,
    disableRipple: m,
    disableTouchRipple: h,
    focusRipple: y,
    tabIndex: N,
    focusVisible: A
  }, er = Tu(yr);
  return /* @__PURE__ */ Ze.jsxs(xu, {
    as: Ke,
    className: We(er.root, u),
    ownerState: yr,
    onBlur: we,
    onClick: g,
    onContextMenu: Y,
    onFocus: F,
    onKeyDown: $e,
    onKeyUp: Ge,
    onMouseDown: ee,
    onMouseLeave: Q,
    onMouseUp: K,
    onDragLeave: q,
    onTouchEnd: Ce,
    onTouchMove: S,
    onTouchStart: H,
    ref: Ar,
    tabIndex: p ? -1 : N,
    type: ae,
    ...Ie,
    ...ve,
    children: [s, G ? /* @__PURE__ */ Ze.jsx(ua, {
      ref: O,
      center: i,
      ...W
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (la.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: uc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: x.bool,
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: cc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: x.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: x.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: x.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: x.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: x.string,
  /**
   * @ignore
   */
  href: x.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: x.elementType,
  /**
   * @ignore
   */
  onBlur: x.func,
  /**
   * @ignore
   */
  onClick: x.func,
  /**
   * @ignore
   */
  onContextMenu: x.func,
  /**
   * @ignore
   */
  onDragLeave: x.func,
  /**
   * @ignore
   */
  onFocus: x.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: x.func,
  /**
   * @ignore
   */
  onKeyDown: x.func,
  /**
   * @ignore
   */
  onKeyUp: x.func,
  /**
   * @ignore
   */
  onMouseDown: x.func,
  /**
   * @ignore
   */
  onMouseLeave: x.func,
  /**
   * @ignore
   */
  onMouseUp: x.func,
  /**
   * @ignore
   */
  onTouchEnd: x.func,
  /**
   * @ignore
   */
  onTouchMove: x.func,
  /**
   * @ignore
   */
  onTouchStart: x.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * @default 0
   */
  tabIndex: x.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: x.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: x.oneOfType([x.func, x.shape({
    current: x.shape({
      pulsate: x.func.isRequired,
      start: x.func.isRequired,
      stop: x.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: x.oneOfType([x.oneOf(["button", "reset", "submit"]), x.string])
});
function wu(e) {
  return typeof e.main == "string";
}
function Ru(e, r = []) {
  if (!wu(e))
    return !1;
  for (const t of r)
    if (!e.hasOwnProperty(t) || typeof e[t] != "string")
      return !1;
  return !0;
}
function _u(e = []) {
  return ([, r]) => r && Ru(r, e);
}
function Ou(e) {
  return Mt("MuiButton", e);
}
const Tr = Mn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), fa = /* @__PURE__ */ J.createContext({});
process.env.NODE_ENV !== "production" && (fa.displayName = "ButtonGroupContext");
const da = /* @__PURE__ */ J.createContext(void 0);
process.env.NODE_ENV !== "production" && (da.displayName = "ButtonGroupButtonContext");
const Pu = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, u = {
    root: ["root", i, `${i}${je(r)}`, `size${je(o)}`, `${i}Size${je(o)}`, `color${je(r)}`, t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${je(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${je(o)}`]
  }, l = jo(u, Ou, s);
  return {
    ...s,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, pa = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], $u = $r(la, {
  shouldForwardProp: (e) => No(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${je(t.color)}`], r[`size${je(t.size)}`], r[`${t.variant}Size${je(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(ou(({
  theme: e
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], t = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Tr.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Tr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Tr.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Tr.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(_u()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : xr(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : t,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Tr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Tr.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Au = $r("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${je(t.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...pa]
}), ku = $r("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${je(t.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...pa]
}), ma = /* @__PURE__ */ J.forwardRef(function(r, t) {
  const n = J.useContext(fa), o = J.useContext(da), i = ht(n, r), s = Nn({
    props: i,
    name: "MuiButton"
  }), {
    children: u,
    color: l = "primary",
    component: p = "button",
    className: m,
    disabled: h = !1,
    disableElevation: y = !1,
    disableFocusRipple: w = !1,
    endIcon: C,
    focusVisibleClassName: b,
    fullWidth: g = !1,
    size: R = "medium",
    startIcon: $,
    type: _,
    variant: T = "text",
    ...f
  } = s, M = {
    ...s,
    color: l,
    component: p,
    disabled: h,
    disableElevation: y,
    disableFocusRipple: w,
    fullWidth: g,
    size: R,
    type: _,
    variant: T
  }, j = Pu(M), ne = $ && /* @__PURE__ */ Ze.jsx(Au, {
    className: j.startIcon,
    ownerState: M,
    children: $
  }), te = C && /* @__PURE__ */ Ze.jsx(ku, {
    className: j.endIcon,
    ownerState: M,
    children: C
  }), c = o || "";
  return /* @__PURE__ */ Ze.jsxs($u, {
    ownerState: M,
    className: We(n.className, j.root, m, c),
    component: p,
    disabled: h,
    focusRipple: !w,
    focusVisibleClassName: We(j.focusVisible, b),
    ref: t,
    type: _,
    ...f,
    classes: j,
    children: [ne, u, te]
  });
});
process.env.NODE_ENV !== "production" && (ma.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: x.oneOfType([x.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), x.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: x.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: x.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: x.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: x.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: x.bool,
  /**
   * Element placed after the children.
   */
  endIcon: x.node,
  /**
   * @ignore
   */
  focusVisibleClassName: x.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: x.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: x.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: x.oneOfType([x.oneOf(["small", "medium", "large"]), x.string]),
  /**
   * Element placed before the children.
   */
  startIcon: x.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * @ignore
   */
  type: x.oneOfType([x.oneOf(["button", "reset", "submit"]), x.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: x.oneOfType([x.oneOf(["contained", "outlined", "text"]), x.string])
});
function ju(e) {
  const { bgcolor: r, text: t, txtcolor: n, disabled: o, onClick: i, size: s } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ Ta.jsx(
      ma,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: s,
        sx: { backgroundColor: r, color: n },
        children: t
      }
    )
  );
}
export {
  ju as CustomButton
};
//# sourceMappingURL=index.es.js.map
