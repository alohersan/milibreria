var ji = Object.defineProperty;
var Di = (e, r, t) => r in e ? ji(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var _r = (e, r, t) => Di(e, typeof r != "symbol" ? r + "" : r, t);
import * as D from "react";
import sr, { forwardRef as Bi, useContext as Fi, Children as zi, isValidElement as Zr, cloneElement as et } from "react";
function Vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lt = { exports: {} }, Pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Li() {
  if (Mn) return Pr;
  Mn = 1;
  var e = sr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, f) {
    var p, h = {}, g = null, E = null;
    f !== void 0 && (g = "" + f), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (p in l) n.call(l, p) && !i.hasOwnProperty(p) && (h[p] = l[p]);
    if (s && s.defaultProps) for (p in l = s.defaultProps, l) h[p] === void 0 && (h[p] = l[p]);
    return { $$typeof: r, type: s, key: g, ref: E, props: h, _owner: o.current };
  }
  return Pr.Fragment = t, Pr.jsx = a, Pr.jsxs = a, Pr;
}
var Ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Wi() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = sr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), C = Symbol.iterator, b = "@@iterator";
    function y(u) {
      if (u === null || typeof u != "object")
        return null;
      var $ = C && u[C] || u[b];
      return typeof $ == "function" ? $ : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(u) {
      {
        for (var $ = arguments.length, A = new Array($ > 1 ? $ - 1 : 0), L = 1; L < $; L++)
          A[L - 1] = arguments[L];
        w("error", u, A);
      }
    }
    function w(u, $, A) {
      {
        var L = T.ReactDebugCurrentFrame, ie = L.getStackAddendum();
        ie !== "" && ($ += "%s", A = A.concat([ie]));
        var de = A.map(function(ee) {
          return String(ee);
        });
        de.unshift("Warning: " + $), Function.prototype.apply.call(console[u], console, de);
      }
    }
    var x = !1, d = !1, k = !1, M = !1, Z = !1, J;
    J = Symbol.for("react.module.reference");
    function c(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || Z || u === o || u === f || u === p || M || u === E || x || d || k || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === h || u.$$typeof === a || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === J || u.getModuleId !== void 0));
    }
    function _(u, $, A) {
      var L = u.displayName;
      if (L)
        return L;
      var ie = $.displayName || $.name || "";
      return ie !== "" ? A + "(" + ie + ")" : A;
    }
    function N(u) {
      return u.displayName || "Context";
    }
    function B(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var $ = u;
            return N($) + ".Consumer";
          case a:
            var A = u;
            return N(A._context) + ".Provider";
          case l:
            return _(u, u.render, "ForwardRef");
          case h:
            var L = u.displayName || null;
            return L !== null ? L : B(u.type) || "Memo";
          case g: {
            var ie = u, de = ie._payload, ee = ie._init;
            try {
              return B(ee(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, oe = 0, re, ye, be, xe, R, O, F;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function j() {
      {
        if (oe === 0) {
          re = console.log, ye = console.info, be = console.warn, xe = console.error, R = console.group, O = console.groupCollapsed, F = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        oe++;
      }
    }
    function H() {
      {
        if (oe--, oe === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, u, {
              value: re
            }),
            info: U({}, u, {
              value: ye
            }),
            warn: U({}, u, {
              value: be
            }),
            error: U({}, u, {
              value: xe
            }),
            group: U({}, u, {
              value: R
            }),
            groupCollapsed: U({}, u, {
              value: O
            }),
            groupEnd: U({}, u, {
              value: F
            })
          });
        }
        oe < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = T.ReactCurrentDispatcher, V;
    function Y(u, $, A) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (ie) {
            var L = ie.stack.trim().match(/\n( *(at )?)/);
            V = L && L[1] || "";
          }
        return `
` + V + u;
      }
    }
    var K = !1, q;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      q = new ve();
    }
    function v(u, $) {
      if (!u || K)
        return "";
      {
        var A = q.get(u);
        if (A !== void 0)
          return A;
      }
      var L;
      K = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = z.current, z.current = null, j();
      try {
        if ($) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Me) {
              L = Me;
            }
            Reflect.construct(u, [], ee);
          } else {
            try {
              ee.call();
            } catch (Me) {
              L = Me;
            }
            u.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            L = Me;
          }
          u();
        }
      } catch (Me) {
        if (Me && L && typeof Me.stack == "string") {
          for (var Q = Me.stack.split(`
`), ke = L.stack.split(`
`), Ee = Q.length - 1, Re = ke.length - 1; Ee >= 1 && Re >= 0 && Q[Ee] !== ke[Re]; )
            Re--;
          for (; Ee >= 1 && Re >= 0; Ee--, Re--)
            if (Q[Ee] !== ke[Re]) {
              if (Ee !== 1 || Re !== 1)
                do
                  if (Ee--, Re--, Re < 0 || Q[Ee] !== ke[Re]) {
                    var Fe = `
` + Q[Ee].replace(" at new ", " at ");
                    return u.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", u.displayName)), typeof u == "function" && q.set(u, Fe), Fe;
                  }
                while (Ee >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        K = !1, z.current = de, H(), Error.prepareStackTrace = ie;
      }
      var pr = u ? u.displayName || u.name : "", ar = pr ? Y(pr) : "";
      return typeof u == "function" && q.set(u, ar), ar;
    }
    function we(u, $, A) {
      return v(u, !1);
    }
    function I(u) {
      var $ = u.prototype;
      return !!($ && $.isReactComponent);
    }
    function Oe(u, $, A) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return v(u, I(u));
      if (typeof u == "string")
        return Y(u);
      switch (u) {
        case f:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return we(u.render);
          case h:
            return Oe(u.type, $, A);
          case g: {
            var L = u, ie = L._payload, de = L._init;
            try {
              return Oe(de(ie), $, A);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, or = {}, ir = T.ReactDebugCurrentFrame;
    function Ue(u) {
      if (u) {
        var $ = u._owner, A = Oe(u.type, u._source, $ ? $.type : null);
        ir.setExtraStackFrame(A);
      } else
        ir.setExtraStackFrame(null);
    }
    function wt(u, $, A, L, ie) {
      {
        var de = Function.call.bind(Be);
        for (var ee in u)
          if (de(u, ee)) {
            var Q = void 0;
            try {
              if (typeof u[ee] != "function") {
                var ke = Error((L || "React class") + ": " + A + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              Q = u[ee]($, ee, L, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              Q = Ee;
            }
            Q && !(Q instanceof Error) && (Ue(ie), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", A, ee, typeof Q), Ue(null)), Q instanceof Error && !(Q.message in or) && (or[Q.message] = !0, Ue(ie), P("Failed %s type: %s", A, Q.message), Ue(null));
          }
      }
    }
    var Yr = Array.isArray;
    function $r(u) {
      return Yr(u);
    }
    function G(u) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, A = $ && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return A;
      }
    }
    function qr(u) {
      try {
        return Gr(u), !1;
      } catch {
        return !0;
      }
    }
    function Gr(u) {
      return "" + u;
    }
    function Or(u) {
      if (qr(u))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", G(u)), Gr(u);
    }
    var fr = T.ReactCurrentOwner, bi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tn, wn, Rt;
    Rt = {};
    function vi(u) {
      if (Be.call(u, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(u, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Si(u) {
      if (Be.call(u, "key")) {
        var $ = Object.getOwnPropertyDescriptor(u, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Ci(u, $) {
      if (typeof u.ref == "string" && fr.current && $ && fr.current.stateNode !== $) {
        var A = B(fr.current.type);
        Rt[A] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(fr.current.type), u.ref), Rt[A] = !0);
      }
    }
    function xi(u, $) {
      {
        var A = function() {
          Tn || (Tn = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        A.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function Ei(u, $) {
      {
        var A = function() {
          wn || (wn = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        A.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var Ti = function(u, $, A, L, ie, de, ee) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: u,
        key: $,
        ref: A,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return Q._store = {}, Object.defineProperty(Q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function wi(u, $, A, L, ie) {
      {
        var de, ee = {}, Q = null, ke = null;
        A !== void 0 && (Or(A), Q = "" + A), Si($) && (Or($.key), Q = "" + $.key), vi($) && (ke = $.ref, Ci($, ie));
        for (de in $)
          Be.call($, de) && !bi.hasOwnProperty(de) && (ee[de] = $[de]);
        if (u && u.defaultProps) {
          var Ee = u.defaultProps;
          for (de in Ee)
            ee[de] === void 0 && (ee[de] = Ee[de]);
        }
        if (Q || ke) {
          var Re = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          Q && xi(ee, Re), ke && Ei(ee, Re);
        }
        return Ti(u, Q, ke, ie, L, fr.current, ee);
      }
    }
    var $t = T.ReactCurrentOwner, Rn = T.ReactDebugCurrentFrame;
    function dr(u) {
      if (u) {
        var $ = u._owner, A = Oe(u.type, u._source, $ ? $.type : null);
        Rn.setExtraStackFrame(A);
      } else
        Rn.setExtraStackFrame(null);
    }
    var Ot;
    Ot = !1;
    function _t(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function $n() {
      {
        if ($t.current) {
          var u = B($t.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Ri(u) {
      return "";
    }
    var On = {};
    function $i(u) {
      {
        var $ = $n();
        if (!$) {
          var A = typeof u == "string" ? u : u.displayName || u.name;
          A && ($ = `

Check the top-level render call using <` + A + ">.");
        }
        return $;
      }
    }
    function _n(u, $) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var A = $i($);
        if (On[A])
          return;
        On[A] = !0;
        var L = "";
        u && u._owner && u._owner !== $t.current && (L = " It was passed a child from " + B(u._owner.type) + "."), dr(u), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, L), dr(null);
      }
    }
    function Pn(u, $) {
      {
        if (typeof u != "object")
          return;
        if ($r(u))
          for (var A = 0; A < u.length; A++) {
            var L = u[A];
            _t(L) && _n(L, $);
          }
        else if (_t(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var ie = y(u);
          if (typeof ie == "function" && ie !== u.entries)
            for (var de = ie.call(u), ee; !(ee = de.next()).done; )
              _t(ee.value) && _n(ee.value, $);
        }
      }
    }
    function Oi(u) {
      {
        var $ = u.type;
        if ($ == null || typeof $ == "string")
          return;
        var A;
        if (typeof $ == "function")
          A = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === h))
          A = $.propTypes;
        else
          return;
        if (A) {
          var L = B($);
          wt(A, u.props, "prop", L, u);
        } else if ($.PropTypes !== void 0 && !Ot) {
          Ot = !0;
          var ie = B($);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _i(u) {
      {
        for (var $ = Object.keys(u.props), A = 0; A < $.length; A++) {
          var L = $[A];
          if (L !== "children" && L !== "key") {
            dr(u), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), dr(null);
            break;
          }
        }
        u.ref !== null && (dr(u), P("Invalid attribute `ref` supplied to `React.Fragment`."), dr(null));
      }
    }
    var An = {};
    function kn(u, $, A, L, ie, de) {
      {
        var ee = c(u);
        if (!ee) {
          var Q = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Ri();
          ke ? Q += ke : Q += $n();
          var Ee;
          u === null ? Ee = "null" : $r(u) ? Ee = "array" : u !== void 0 && u.$$typeof === r ? (Ee = "<" + (B(u.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof u, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, Q);
        }
        var Re = wi(u, $, A, ie, de);
        if (Re == null)
          return Re;
        if (ee) {
          var Fe = $.children;
          if (Fe !== void 0)
            if (L)
              if ($r(Fe)) {
                for (var pr = 0; pr < Fe.length; pr++)
                  Pn(Fe[pr], u);
                Object.freeze && Object.freeze(Fe);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pn(Fe, u);
        }
        if (Be.call($, "key")) {
          var ar = B(u), Me = Object.keys($).filter(function(Ni) {
            return Ni !== "key";
          }), Pt = Me.length > 0 ? "{key: someKey, " + Me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!An[ar + Pt]) {
            var Ii = Me.length > 0 ? "{" + Me.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pt, ar, Ii, ar), An[ar + Pt] = !0;
          }
        }
        return u === n ? _i(Re) : Oi(Re), Re;
      }
    }
    function Pi(u, $, A) {
      return kn(u, $, A, !0);
    }
    function Ai(u, $, A) {
      return kn(u, $, A, !1);
    }
    var ki = Ai, Mi = Pi;
    Ar.Fragment = n, Ar.jsx = ki, Ar.jsxs = Mi;
  }()), Ar;
}
process.env.NODE_ENV === "production" ? Lt.exports = Li() : Lt.exports = Wi();
var X = Lt.exports, Wt = { exports: {} }, Hr = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function Ui() {
  if (Nn) return ae;
  Nn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function w(d) {
    if (typeof d == "object" && d !== null) {
      var k = d.$$typeof;
      switch (k) {
        case r:
          switch (d = d.type, d) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case p:
                case C:
                case E:
                case a:
                  return d;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function x(d) {
    return w(d) === f;
  }
  return ae.AsyncMode = l, ae.ConcurrentMode = f, ae.ContextConsumer = s, ae.ContextProvider = a, ae.Element = r, ae.ForwardRef = p, ae.Fragment = n, ae.Lazy = C, ae.Memo = E, ae.Portal = t, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = h, ae.isAsyncMode = function(d) {
    return x(d) || w(d) === l;
  }, ae.isConcurrentMode = x, ae.isContextConsumer = function(d) {
    return w(d) === s;
  }, ae.isContextProvider = function(d) {
    return w(d) === a;
  }, ae.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ae.isForwardRef = function(d) {
    return w(d) === p;
  }, ae.isFragment = function(d) {
    return w(d) === n;
  }, ae.isLazy = function(d) {
    return w(d) === C;
  }, ae.isMemo = function(d) {
    return w(d) === E;
  }, ae.isPortal = function(d) {
    return w(d) === t;
  }, ae.isProfiler = function(d) {
    return w(d) === i;
  }, ae.isStrictMode = function(d) {
    return w(d) === o;
  }, ae.isSuspense = function(d) {
    return w(d) === h;
  }, ae.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === i || d === o || d === h || d === g || typeof d == "object" && d !== null && (d.$$typeof === C || d.$$typeof === E || d.$$typeof === a || d.$$typeof === s || d.$$typeof === p || d.$$typeof === y || d.$$typeof === T || d.$$typeof === P || d.$$typeof === b);
  }, ae.typeOf = w, ae;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function Yi() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function w(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === f || v === i || v === o || v === h || v === g || typeof v == "object" && v !== null && (v.$$typeof === C || v.$$typeof === E || v.$$typeof === a || v.$$typeof === s || v.$$typeof === p || v.$$typeof === y || v.$$typeof === T || v.$$typeof === P || v.$$typeof === b);
    }
    function x(v) {
      if (typeof v == "object" && v !== null) {
        var we = v.$$typeof;
        switch (we) {
          case r:
            var I = v.type;
            switch (I) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case h:
                return I;
              default:
                var Oe = I && I.$$typeof;
                switch (Oe) {
                  case s:
                  case p:
                  case C:
                  case E:
                  case a:
                    return Oe;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var d = l, k = f, M = s, Z = a, J = r, c = p, _ = n, N = C, B = E, U = t, oe = i, re = o, ye = h, be = !1;
    function xe(v) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || x(v) === l;
    }
    function R(v) {
      return x(v) === f;
    }
    function O(v) {
      return x(v) === s;
    }
    function F(v) {
      return x(v) === a;
    }
    function W(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function j(v) {
      return x(v) === p;
    }
    function H(v) {
      return x(v) === n;
    }
    function z(v) {
      return x(v) === C;
    }
    function V(v) {
      return x(v) === E;
    }
    function Y(v) {
      return x(v) === t;
    }
    function K(v) {
      return x(v) === i;
    }
    function q(v) {
      return x(v) === o;
    }
    function ve(v) {
      return x(v) === h;
    }
    se.AsyncMode = d, se.ConcurrentMode = k, se.ContextConsumer = M, se.ContextProvider = Z, se.Element = J, se.ForwardRef = c, se.Fragment = _, se.Lazy = N, se.Memo = B, se.Portal = U, se.Profiler = oe, se.StrictMode = re, se.Suspense = ye, se.isAsyncMode = xe, se.isConcurrentMode = R, se.isContextConsumer = O, se.isContextProvider = F, se.isElement = W, se.isForwardRef = j, se.isFragment = H, se.isLazy = z, se.isMemo = V, se.isPortal = Y, se.isProfiler = K, se.isStrictMode = q, se.isSuspense = ve, se.isValidElementType = w, se.typeOf = x;
  }()), se;
}
var Dn;
function Ro() {
  return Dn || (Dn = 1, process.env.NODE_ENV === "production" ? Hr.exports = Ui() : Hr.exports = Yi()), Hr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var At, Bn;
function qi() {
  if (Bn) return At;
  Bn = 1;
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
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return At = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), f, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var h in s)
        r.call(s, h) && (l[h] = s[h]);
      if (e) {
        f = e(s);
        for (var g = 0; g < f.length; g++)
          t.call(s, f[g]) && (l[f[g]] = s[f[g]]);
      }
    }
    return l;
  }, At;
}
var kt, Fn;
function on() {
  if (Fn) return kt;
  Fn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kt = e, kt;
}
var Mt, zn;
function $o() {
  return zn || (zn = 1, Mt = Function.call.bind(Object.prototype.hasOwnProperty)), Mt;
}
var It, Vn;
function Gi() {
  if (Vn) return It;
  Vn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = on(), t = {}, n = $o();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (l || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[p](a, p, l, s, null, r);
          } catch (C) {
            h = C;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var E = f ? f() : "";
            e(
              "Failed " + s + " type: " + h.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, It = o, It;
}
var Nt, Ln;
function Hi() {
  if (Ln) return Nt;
  Ln = 1;
  var e = Ro(), r = qi(), t = on(), n = $o(), o = Gi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Nt = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(R) {
      var O = R && (f && R[f] || R[p]);
      if (typeof O == "function")
        return O;
    }
    var g = "<<anonymous>>", E = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: P(),
      arrayOf: w,
      element: x(),
      elementType: d(),
      instanceOf: k,
      node: c(),
      objectOf: Z,
      oneOf: M,
      oneOfType: J,
      shape: N,
      exact: B
    };
    function C(R, O) {
      return R === O ? R !== 0 || 1 / R === 1 / O : R !== R && O !== O;
    }
    function b(R, O) {
      this.message = R, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(R) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, F = 0;
      function W(H, z, V, Y, K, q, ve) {
        if (Y = Y || g, q = q || V, ve !== t) {
          if (l) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = Y + ":" + V;
            !O[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[we] = !0, F++);
          }
        }
        return z[V] == null ? H ? z[V] === null ? new b("The " + K + " `" + q + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new b("The " + K + " `" + q + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : R(z, V, Y, K, q);
      }
      var j = W.bind(null, !1);
      return j.isRequired = W.bind(null, !0), j;
    }
    function T(R) {
      function O(F, W, j, H, z, V) {
        var Y = F[W], K = re(Y);
        if (K !== R) {
          var q = ye(Y);
          return new b(
            "Invalid " + H + " `" + z + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return y(O);
    }
    function P() {
      return y(a);
    }
    function w(R) {
      function O(F, W, j, H, z) {
        if (typeof R != "function")
          return new b("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var V = F[W];
        if (!Array.isArray(V)) {
          var Y = re(V);
          return new b("Invalid " + H + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var K = 0; K < V.length; K++) {
          var q = R(V, K, j, H, z + "[" + K + "]", t);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y(O);
    }
    function x() {
      function R(O, F, W, j, H) {
        var z = O[F];
        if (!s(z)) {
          var V = re(z);
          return new b("Invalid " + j + " `" + H + "` of type " + ("`" + V + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(R);
    }
    function d() {
      function R(O, F, W, j, H) {
        var z = O[F];
        if (!e.isValidElementType(z)) {
          var V = re(z);
          return new b("Invalid " + j + " `" + H + "` of type " + ("`" + V + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(R);
    }
    function k(R) {
      function O(F, W, j, H, z) {
        if (!(F[W] instanceof R)) {
          var V = R.name || g, Y = xe(F[W]);
          return new b("Invalid " + H + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return y(O);
    }
    function M(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(F, W, j, H, z) {
        for (var V = F[W], Y = 0; Y < R.length; Y++)
          if (C(V, R[Y]))
            return null;
        var K = JSON.stringify(R, function(ve, v) {
          var we = ye(v);
          return we === "symbol" ? String(v) : v;
        });
        return new b("Invalid " + H + " `" + z + "` of value `" + String(V) + "` " + ("supplied to `" + j + "`, expected one of " + K + "."));
      }
      return y(O);
    }
    function Z(R) {
      function O(F, W, j, H, z) {
        if (typeof R != "function")
          return new b("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var V = F[W], Y = re(V);
        if (Y !== "object")
          return new b("Invalid " + H + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an object."));
        for (var K in V)
          if (n(V, K)) {
            var q = R(V, K, j, H, z + "." + K, t);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y(O);
    }
    function J(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < R.length; O++) {
        var F = R[O];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(F) + " at index " + O + "."
          ), a;
      }
      function W(j, H, z, V, Y) {
        for (var K = [], q = 0; q < R.length; q++) {
          var ve = R[q], v = ve(j, H, z, V, Y, t);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && K.push(v.data.expectedType);
        }
        var we = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new b("Invalid " + V + " `" + Y + "` supplied to " + ("`" + z + "`" + we + "."));
      }
      return y(W);
    }
    function c() {
      function R(O, F, W, j, H) {
        return U(O[F]) ? null : new b("Invalid " + j + " `" + H + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return y(R);
    }
    function _(R, O, F, W, j) {
      return new b(
        (R || "React class") + ": " + O + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(R) {
      function O(F, W, j, H, z) {
        var V = F[W], Y = re(V);
        if (Y !== "object")
          return new b("Invalid " + H + " `" + z + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var K in R) {
          var q = R[K];
          if (typeof q != "function")
            return _(j, H, z, K, ye(q));
          var ve = q(V, K, j, H, z + "." + K, t);
          if (ve)
            return ve;
        }
        return null;
      }
      return y(O);
    }
    function B(R) {
      function O(F, W, j, H, z) {
        var V = F[W], Y = re(V);
        if (Y !== "object")
          return new b("Invalid " + H + " `" + z + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var K = r({}, F[W], R);
        for (var q in K) {
          var ve = R[q];
          if (n(R, q) && typeof ve != "function")
            return _(j, H, z, q, ye(ve));
          if (!ve)
            return new b(
              "Invalid " + H + " `" + z + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var v = ve(V, q, j, H, z + "." + q, t);
          if (v)
            return v;
        }
        return null;
      }
      return y(O);
    }
    function U(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(U);
          if (R === null || s(R))
            return !0;
          var O = h(R);
          if (O) {
            var F = O.call(R), W;
            if (O !== R.entries) {
              for (; !(W = F.next()).done; )
                if (!U(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var j = W.value;
                if (j && !U(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(R, O) {
      return R === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function re(R) {
      var O = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : oe(O, R) ? "symbol" : O;
    }
    function ye(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var O = re(R);
      if (O === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function be(R) {
      var O = ye(R);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function xe(R) {
      return !R.constructor || !R.constructor.name ? g : R.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Nt;
}
var jt, Wn;
function Ki() {
  if (Wn) return jt;
  Wn = 1;
  var e = on();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, jt = function() {
    function n(a, s, l, f, p, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, jt;
}
if (process.env.NODE_ENV !== "production") {
  var Xi = Ro(), Ji = !0;
  Wt.exports = Hi()(Xi.isElement, Ji);
} else
  Wt.exports = Ki()();
var Qi = Wt.exports;
const m = /* @__PURE__ */ Vi(Qi);
function Oo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Oo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ae() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Oo(e)) && (n && (n += " "), n += r);
  return n;
}
function it(e, r) {
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
        const i = e[o], a = r[o];
        if (!a)
          t[o] = i || {};
        else if (!i)
          t[o] = a;
        else {
          t[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const l = s;
              t[o][l] = it(i[l], a[l]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
function wr(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (a += (s === !0 ? "" : " ") + r(f), s = !1, t && t[f] && (a += " " + t[f]));
    }
    n[o] = a;
  }
  return n;
}
function er(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function Zi(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function an(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Zi(e, r, t);
}
function ea(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function rr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return rr(ea(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : er(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : er(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const ra = (e) => {
  const r = rr(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, Ir = (e, r) => {
  try {
    return ra(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function ut(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function _o(e) {
  e = rr(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, p = (f + t / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(r[3])), ut({
    type: s,
    values: l
  });
}
function Ut(e) {
  e = rr(e);
  let r = e.type === "hsl" || e.type === "hsla" ? rr(_o(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Un(e, r) {
  const t = Ut(e), n = Ut(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function He(e, r) {
  return e = rr(e), r = an(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, ut(e);
}
function Kr(e, r, t) {
  try {
    return He(e, r);
  } catch {
    return e;
  }
}
function sn(e, r) {
  if (e = rr(e), r = an(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return ut(e);
}
function pe(e, r, t) {
  try {
    return sn(e, r);
  } catch {
    return e;
  }
}
function cn(e, r) {
  if (e = rr(e), r = an(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return ut(e);
}
function me(e, r, t) {
  try {
    return cn(e, r);
  } catch {
    return e;
  }
}
function Po(e, r = 0.15) {
  return Ut(e) > 0.5 ? sn(e, r) : cn(e, r);
}
function Xr(e, r, t) {
  try {
    return Po(e, r);
  } catch {
    return e;
  }
}
function ta(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ao = (e) => ta(e) && e !== "classes";
function ge(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : er(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ko(e) {
  if (!Je(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = ko(e[t]);
  }), r;
}
function je(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return Je(e) && Je(r) && Object.keys(r).forEach((o) => {
    Je(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Je(e[o]) ? n[o] = je(e[o], r[o], t) : t.clone ? n[o] = Je(r[o]) ? ko(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function jr(e, r) {
  return r ? je(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const tr = process.env.NODE_ENV !== "production" ? m.oneOfType([m.number, m.string, m.object, m.array]) : {};
function na(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function oa(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function ia(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : er(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function aa(e) {
  const r = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function t(i, a) {
    i.up = (...s) => r(e.breakpoints.up(...s), a), i.down = (...s) => r(e.breakpoints.down(...s), a), i.between = (...s) => r(e.breakpoints.between(...s), a), i.only = (...s) => r(e.breakpoints.only(...s), a), i.not = (...s) => {
      const l = r(e.breakpoints.not(...s), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const ft = {
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
}, Yn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ft[e]}px)`
}, sa = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : ft[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function Qe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Yn;
    return r.reduce((a, s, l) => (a[i.up(i.keys[l])] = t(r[l]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Yn;
    return Object.keys(r).reduce((a, s) => {
      if (oa(i.keys, s)) {
        const l = ia(n.containerQueries ? n : sa, s);
        l && (a[l] = t(r[s], s));
      } else if (Object.keys(i.values || ft).includes(s)) {
        const l = i.up(s);
        a[l] = t(r[s], s);
      } else {
        const l = s;
        a[l] = r[l];
      }
      return a;
    }, {});
  }
  return t(r);
}
function ca(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function la(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function dt(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function at(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = dt(e, t) || n, r && (o = r(o, n, e)), o;
}
function Te(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const s = a[r], l = a.theme, f = dt(l, n) || {};
    return Qe(a, s, (h) => {
      let g = at(f, o, h);
      return h === g && typeof h == "string" && (g = at(f, o, `${r}${h === "default" ? "" : ge(h)}`, h)), t === !1 ? g : {
        [t]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: tr
  } : {}, i.filterProps = [r], i;
}
function ua(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const fa = {
  m: "margin",
  p: "padding"
}, da = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, qn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, pa = ua((e) => {
  if (e.length > 2)
    if (qn[e])
      e = qn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = fa[r], o = da[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), pt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], mt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ma = [...pt, ...mt];
function Lr(e, r, t, n) {
  const o = dt(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ln(e) {
  return Lr(e, "spacing", 8, "spacing");
}
function Wr(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function ha(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Wr(r, t), n), {});
}
function ga(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = pa(t), i = ha(o, n), a = e[t];
  return Qe(e, a, i);
}
function Mo(e, r) {
  const t = ln(e.theme);
  return Object.keys(e).map((n) => ga(e, r, n, t)).reduce(jr, {});
}
function Se(e) {
  return Mo(e, pt);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? pt.reduce((e, r) => (e[r] = tr, e), {}) : {};
Se.filterProps = pt;
function Ce(e) {
  return Mo(e, mt);
}
Ce.propTypes = process.env.NODE_ENV !== "production" ? mt.reduce((e, r) => (e[r] = tr, e), {}) : {};
Ce.filterProps = mt;
process.env.NODE_ENV !== "production" && ma.reduce((e, r) => (e[r] = tr, e), {});
function ht(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? jr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Ve(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Le(e, r) {
  return Te({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const ya = Le("border", Ve), ba = Le("borderTop", Ve), va = Le("borderRight", Ve), Sa = Le("borderBottom", Ve), Ca = Le("borderLeft", Ve), xa = Le("borderColor"), Ea = Le("borderTopColor"), Ta = Le("borderRightColor"), wa = Le("borderBottomColor"), Ra = Le("borderLeftColor"), $a = Le("outline", Ve), Oa = Le("outlineColor"), gt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Lr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Wr(r, n)
    });
    return Qe(e, e.borderRadius, t);
  }
  return null;
};
gt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: tr
} : {};
gt.filterProps = ["borderRadius"];
ht(ya, ba, va, Sa, Ca, xa, Ea, Ta, wa, Ra, gt, $a, Oa);
const yt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Lr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Wr(r, n)
    });
    return Qe(e, e.gap, t);
  }
  return null;
};
yt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: tr
} : {};
yt.filterProps = ["gap"];
const bt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Lr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Wr(r, n)
    });
    return Qe(e, e.columnGap, t);
  }
  return null;
};
bt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: tr
} : {};
bt.filterProps = ["columnGap"];
const vt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Lr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Wr(r, n)
    });
    return Qe(e, e.rowGap, t);
  }
  return null;
};
vt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: tr
} : {};
vt.filterProps = ["rowGap"];
const _a = Te({
  prop: "gridColumn"
}), Pa = Te({
  prop: "gridRow"
}), Aa = Te({
  prop: "gridAutoFlow"
}), ka = Te({
  prop: "gridAutoColumns"
}), Ma = Te({
  prop: "gridAutoRows"
}), Ia = Te({
  prop: "gridTemplateColumns"
}), Na = Te({
  prop: "gridTemplateRows"
}), ja = Te({
  prop: "gridTemplateAreas"
}), Da = Te({
  prop: "gridArea"
});
ht(yt, bt, vt, _a, Pa, Aa, ka, Ma, Ia, Na, ja, Da);
function Sr(e, r) {
  return r === "grey" ? r : e;
}
const Ba = Te({
  prop: "color",
  themeKey: "palette",
  transform: Sr
}), Fa = Te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Sr
}), za = Te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Sr
});
ht(Ba, Fa, za);
function Ne(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Va = Te({
  prop: "width",
  transform: Ne
}), un = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, a, s, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[t]) || ft[t];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ne(t)
      };
    };
    return Qe(e, e.maxWidth, r);
  }
  return null;
};
un.filterProps = ["maxWidth"];
const La = Te({
  prop: "minWidth",
  transform: Ne
}), Wa = Te({
  prop: "height",
  transform: Ne
}), Ua = Te({
  prop: "maxHeight",
  transform: Ne
}), Ya = Te({
  prop: "minHeight",
  transform: Ne
});
Te({
  prop: "size",
  cssProperty: "width",
  transform: Ne
});
Te({
  prop: "size",
  cssProperty: "height",
  transform: Ne
});
const qa = Te({
  prop: "boxSizing"
});
ht(Va, un, La, Wa, Ua, Ya, qa);
const St = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ve
  },
  borderTop: {
    themeKey: "borders",
    transform: Ve
  },
  borderRight: {
    themeKey: "borders",
    transform: Ve
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ve
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ve
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
    transform: Ve
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: gt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Sr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Sr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Sr
  },
  // spacing
  p: {
    style: Ce
  },
  pt: {
    style: Ce
  },
  pr: {
    style: Ce
  },
  pb: {
    style: Ce
  },
  pl: {
    style: Ce
  },
  px: {
    style: Ce
  },
  py: {
    style: Ce
  },
  padding: {
    style: Ce
  },
  paddingTop: {
    style: Ce
  },
  paddingRight: {
    style: Ce
  },
  paddingBottom: {
    style: Ce
  },
  paddingLeft: {
    style: Ce
  },
  paddingX: {
    style: Ce
  },
  paddingY: {
    style: Ce
  },
  paddingInline: {
    style: Ce
  },
  paddingInlineStart: {
    style: Ce
  },
  paddingInlineEnd: {
    style: Ce
  },
  paddingBlock: {
    style: Ce
  },
  paddingBlockStart: {
    style: Ce
  },
  paddingBlockEnd: {
    style: Ce
  },
  m: {
    style: Se
  },
  mt: {
    style: Se
  },
  mr: {
    style: Se
  },
  mb: {
    style: Se
  },
  ml: {
    style: Se
  },
  mx: {
    style: Se
  },
  my: {
    style: Se
  },
  margin: {
    style: Se
  },
  marginTop: {
    style: Se
  },
  marginRight: {
    style: Se
  },
  marginBottom: {
    style: Se
  },
  marginLeft: {
    style: Se
  },
  marginX: {
    style: Se
  },
  marginY: {
    style: Se
  },
  marginInline: {
    style: Se
  },
  marginInlineStart: {
    style: Se
  },
  marginInlineEnd: {
    style: Se
  },
  marginBlock: {
    style: Se
  },
  marginBlockStart: {
    style: Se
  },
  marginBlockEnd: {
    style: Se
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
    style: yt
  },
  rowGap: {
    style: vt
  },
  columnGap: {
    style: bt
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
    transform: Ne
  },
  maxWidth: {
    style: un
  },
  minWidth: {
    transform: Ne
  },
  height: {
    transform: Ne
  },
  maxHeight: {
    transform: Ne
  },
  minHeight: {
    transform: Ne
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
function Ga(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Ha(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ka() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, s = i[t];
    if (!s)
      return {
        [t]: n
      };
    const {
      cssProperty: l = t,
      themeKey: f,
      transform: p,
      style: h
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const g = dt(o, f) || {};
    return h ? h(a) : Qe(a, n, (C) => {
      let b = at(g, p, C);
      return C === b && typeof C == "string" && (b = at(g, p, `${t}${C === "default" ? "" : ge(C)}`, C)), l === !1 ? b : {
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
    const i = o.unstable_sxConfig ?? St;
    function a(s) {
      let l = s;
      if (typeof s == "function")
        l = s(o);
      else if (typeof s != "object")
        return s;
      if (!l)
        return null;
      const f = ca(o.breakpoints), p = Object.keys(f);
      let h = f;
      return Object.keys(l).forEach((g) => {
        const E = Ha(l[g], o);
        if (E != null)
          if (typeof E == "object")
            if (i[g])
              h = jr(h, e(g, E, o, i));
            else {
              const C = Qe({
                theme: o
              }, E, (b) => ({
                [g]: b
              }));
              Ga(C, E) ? h[g] = r({
                sx: E,
                theme: o
              }) : h = jr(h, C);
            }
          else
            h = jr(h, e(g, E, o, i));
      }), na(o, la(p, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return r;
}
const xr = Ka();
xr.filterProps = ["sx"];
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Yt.apply(null, arguments);
}
function Io(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Xa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ja = /* @__PURE__ */ Io(
  function(e) {
    return Xa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qa = !1;
function Za(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function es(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var rs = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !Qa : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(es(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Za(o);
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
}(), Pe = "-ms-", st = "-moz-", te = "-webkit-", No = "comm", fn = "rule", dn = "decl", ts = "@import", jo = "@keyframes", ns = "@layer", os = Math.abs, Ct = String.fromCharCode, is = Object.assign;
function as(e, r) {
  return _e(e, 0) ^ 45 ? (((r << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function Do(e) {
  return e.trim();
}
function ss(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ne(e, r, t) {
  return e.replace(r, t);
}
function qt(e, r) {
  return e.indexOf(r);
}
function _e(e, r) {
  return e.charCodeAt(r) | 0;
}
function Dr(e, r, t) {
  return e.slice(r, t);
}
function qe(e) {
  return e.length;
}
function pn(e) {
  return e.length;
}
function Jr(e, r) {
  return r.push(e), e;
}
function cs(e, r) {
  return e.map(r).join("");
}
var xt = 1, Er = 1, Bo = 0, Ie = 0, $e = 0, Rr = "";
function Et(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: xt, column: Er, length: a, return: "" };
}
function kr(e, r) {
  return is(Et("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ls() {
  return $e;
}
function us() {
  return $e = Ie > 0 ? _e(Rr, --Ie) : 0, Er--, $e === 10 && (Er = 1, xt--), $e;
}
function De() {
  return $e = Ie < Bo ? _e(Rr, Ie++) : 0, Er++, $e === 10 && (Er = 1, xt++), $e;
}
function Ke() {
  return _e(Rr, Ie);
}
function rt() {
  return Ie;
}
function Ur(e, r) {
  return Dr(Rr, e, r);
}
function Br(e) {
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
function Fo(e) {
  return xt = Er = 1, Bo = qe(Rr = e), Ie = 0, [];
}
function zo(e) {
  return Rr = "", e;
}
function tt(e) {
  return Do(Ur(Ie - 1, Gt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fs(e) {
  for (; ($e = Ke()) && $e < 33; )
    De();
  return Br(e) > 2 || Br($e) > 3 ? "" : " ";
}
function ds(e, r) {
  for (; --r && De() && !($e < 48 || $e > 102 || $e > 57 && $e < 65 || $e > 70 && $e < 97); )
    ;
  return Ur(e, rt() + (r < 6 && Ke() == 32 && De() == 32));
}
function Gt(e) {
  for (; De(); )
    switch ($e) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gt($e);
        break;
      case 40:
        e === 41 && Gt(e);
        break;
      case 92:
        De();
        break;
    }
  return Ie;
}
function ps(e, r) {
  for (; De() && e + $e !== 57; )
    if (e + $e === 84 && Ke() === 47)
      break;
  return "/*" + Ur(r, Ie - 1) + "*" + Ct(e === 47 ? e : De());
}
function ms(e) {
  for (; !Br(Ke()); )
    De();
  return Ur(e, Ie);
}
function hs(e) {
  return zo(nt("", null, null, null, [""], e = Fo(e), 0, [0], e));
}
function nt(e, r, t, n, o, i, a, s, l) {
  for (var f = 0, p = 0, h = a, g = 0, E = 0, C = 0, b = 1, y = 1, T = 1, P = 0, w = "", x = o, d = i, k = n, M = w; y; )
    switch (C = P, P = De()) {
      case 40:
        if (C != 108 && _e(M, h - 1) == 58) {
          qt(M += ne(tt(P), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += tt(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += fs(C);
        break;
      case 92:
        M += ds(rt() - 1, 7);
        continue;
      case 47:
        switch (Ke()) {
          case 42:
          case 47:
            Jr(gs(ps(De(), rt()), r, t), l);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * b:
        s[f++] = qe(M) * T;
      case 125 * b:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            y = 0;
          case 59 + p:
            T == -1 && (M = ne(M, /\f/g, "")), E > 0 && qe(M) - h && Jr(E > 32 ? Hn(M + ";", n, t, h - 1) : Hn(ne(M, " ", "") + ";", n, t, h - 2), l);
            break;
          case 59:
            M += ";";
          default:
            if (Jr(k = Gn(M, r, t, f, p, o, s, w, x = [], d = [], h), i), P === 123)
              if (p === 0)
                nt(M, r, k, k, x, i, h, s, d);
              else
                switch (g === 99 && _e(M, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nt(e, k, k, n && Jr(Gn(e, k, k, 0, 0, o, s, w, o, x = [], h), d), o, d, h, s, n ? x : d);
                    break;
                  default:
                    nt(M, k, k, k, [""], d, 0, s, d);
                }
        }
        f = p = E = 0, b = T = 1, w = M = "", h = a;
        break;
      case 58:
        h = 1 + qe(M), E = C;
      default:
        if (b < 1) {
          if (P == 123)
            --b;
          else if (P == 125 && b++ == 0 && us() == 125)
            continue;
        }
        switch (M += Ct(P), P * b) {
          case 38:
            T = p > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            s[f++] = (qe(M) - 1) * T, T = 1;
            break;
          case 64:
            Ke() === 45 && (M += tt(De())), g = Ke(), p = h = qe(w = M += ms(rt())), P++;
            break;
          case 45:
            C === 45 && qe(M) == 2 && (b = 0);
        }
    }
  return i;
}
function Gn(e, r, t, n, o, i, a, s, l, f, p) {
  for (var h = o - 1, g = o === 0 ? i : [""], E = pn(g), C = 0, b = 0, y = 0; C < n; ++C)
    for (var T = 0, P = Dr(e, h + 1, h = os(b = a[C])), w = e; T < E; ++T)
      (w = Do(b > 0 ? g[T] + " " + P : ne(P, /&\f/g, g[T]))) && (l[y++] = w);
  return Et(e, r, t, o === 0 ? fn : s, l, f, p);
}
function gs(e, r, t) {
  return Et(e, r, t, No, Ct(ls()), Dr(e, 2, -2), 0);
}
function Hn(e, r, t, n) {
  return Et(e, r, t, dn, Dr(e, 0, n), Dr(e, n + 1, -1), n);
}
function Cr(e, r) {
  for (var t = "", n = pn(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function ys(e, r, t, n) {
  switch (e.type) {
    case ns:
      if (e.children.length) break;
    case ts:
    case dn:
      return e.return = e.return || e.value;
    case No:
      return "";
    case jo:
      return e.return = e.value + "{" + Cr(e.children, n) + "}";
    case fn:
      e.value = e.props.join(",");
  }
  return qe(t = Cr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function bs(e) {
  var r = pn(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function vs(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Ss = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ke(), o === 38 && i === 12 && (t[n] = 1), !Br(i); )
    De();
  return Ur(r, Ie);
}, Cs = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Br(o)) {
      case 0:
        o === 38 && Ke() === 12 && (t[n] = 1), r[n] += Ss(Ie - 1, t, n);
        break;
      case 2:
        r[n] += tt(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ke() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Ct(o);
    }
  while (o = De());
  return r;
}, xs = function(r, t) {
  return zo(Cs(Fo(r), t));
}, Kn = /* @__PURE__ */ new WeakMap(), Es = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Kn.get(n)) && !o) {
      Kn.set(r, !0);
      for (var i = [], a = xs(t, i), s = n.props, l = 0, f = 0; l < a.length; l++)
        for (var p = 0; p < s.length; p++, f++)
          r.props[f] = i[l] ? a[l].replace(/&\f/g, s[p]) : s[p] + " " + a[l];
    }
  }
}, Ts = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Vo(e, r) {
  switch (as(e, r)) {
    case 5103:
      return te + "print-" + e + e;
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
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + st + e + Pe + e + e;
    case 6828:
    case 4268:
      return te + e + Pe + e + e;
    case 6165:
      return te + e + Pe + "flex-" + e + e;
    case 5187:
      return te + e + ne(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Pe + "flex-$1$2") + e;
    case 5443:
      return te + e + Pe + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + Pe + "flex-line-pack" + ne(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + Pe + ne(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Pe + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + ne(e, "-grow", "") + te + e + Pe + ne(e, "grow", "positive") + e;
    case 4554:
      return te + ne(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return ne(ne(ne(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return ne(ne(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, te + "$1$2") + e;
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
      if (qe(e) - 1 - r > 6) switch (_e(e, r + 1)) {
        case 109:
          if (_e(e, r + 4) !== 45) break;
        case 102:
          return ne(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + st + (_e(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~qt(e, "stretch") ? Vo(ne(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (_e(e, r + 1) !== 115) break;
    case 6444:
      switch (_e(e, qe(e) - 3 - (~qt(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + te) + e;
        case 101:
          return ne(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + te + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + Pe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, r + 11)) {
        case 114:
          return te + e + Pe + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Pe + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Pe + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Pe + e + e;
  }
  return e;
}
var ws = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case dn:
      r.return = Vo(r.value, r.length);
      break;
    case jo:
      return Cr([kr(r, {
        value: ne(r.value, "@", "@" + te)
      })], o);
    case fn:
      if (r.length) return cs(r.props, function(i) {
        switch (ss(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Cr([kr(r, {
              props: [ne(i, /:(read-\w+)/, ":" + st + "$1")]
            })], o);
          case "::placeholder":
            return Cr([kr(r, {
              props: [ne(i, /:(plac\w+)/, ":" + te + "input-$1")]
            }), kr(r, {
              props: [ne(i, /:(plac\w+)/, ":" + st + "$1")]
            }), kr(r, {
              props: [ne(i, /:(plac\w+)/, Pe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Rs = [ws], $s = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var y = b.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Rs, i = {}, a, s = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var y = b.getAttribute("data-emotion").split(" "), T = 1; T < y.length; T++)
        i[y[T]] = !0;
      s.push(b);
    }
  );
  var l, f = [Es, Ts];
  {
    var p, h = [ys, vs(function(b) {
      p.insert(b);
    })], g = bs(f.concat(o, h)), E = function(y) {
      return Cr(hs(y), g);
    };
    l = function(y, T, P, w) {
      p = P, E(y ? y + "{" + T.styles + "}" : T.styles), w && (C.inserted[T.name] = !0);
    };
  }
  var C = {
    key: t,
    sheet: new rs({
      key: t,
      container: a,
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
  return C.sheet.hydrate(s), C;
}, Ht = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Os() {
  if (Xn) return ce;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function w(d) {
    if (typeof d == "object" && d !== null) {
      var k = d.$$typeof;
      switch (k) {
        case r:
          switch (d = d.type, d) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case p:
                case C:
                case E:
                case a:
                  return d;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function x(d) {
    return w(d) === f;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = f, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = r, ce.ForwardRef = p, ce.Fragment = n, ce.Lazy = C, ce.Memo = E, ce.Portal = t, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = h, ce.isAsyncMode = function(d) {
    return x(d) || w(d) === l;
  }, ce.isConcurrentMode = x, ce.isContextConsumer = function(d) {
    return w(d) === s;
  }, ce.isContextProvider = function(d) {
    return w(d) === a;
  }, ce.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ce.isForwardRef = function(d) {
    return w(d) === p;
  }, ce.isFragment = function(d) {
    return w(d) === n;
  }, ce.isLazy = function(d) {
    return w(d) === C;
  }, ce.isMemo = function(d) {
    return w(d) === E;
  }, ce.isPortal = function(d) {
    return w(d) === t;
  }, ce.isProfiler = function(d) {
    return w(d) === i;
  }, ce.isStrictMode = function(d) {
    return w(d) === o;
  }, ce.isSuspense = function(d) {
    return w(d) === h;
  }, ce.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === i || d === o || d === h || d === g || typeof d == "object" && d !== null && (d.$$typeof === C || d.$$typeof === E || d.$$typeof === a || d.$$typeof === s || d.$$typeof === p || d.$$typeof === y || d.$$typeof === T || d.$$typeof === P || d.$$typeof === b);
  }, ce.typeOf = w, ce;
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
var Jn;
function _s() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function w(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === f || v === i || v === o || v === h || v === g || typeof v == "object" && v !== null && (v.$$typeof === C || v.$$typeof === E || v.$$typeof === a || v.$$typeof === s || v.$$typeof === p || v.$$typeof === y || v.$$typeof === T || v.$$typeof === P || v.$$typeof === b);
    }
    function x(v) {
      if (typeof v == "object" && v !== null) {
        var we = v.$$typeof;
        switch (we) {
          case r:
            var I = v.type;
            switch (I) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case h:
                return I;
              default:
                var Oe = I && I.$$typeof;
                switch (Oe) {
                  case s:
                  case p:
                  case C:
                  case E:
                  case a:
                    return Oe;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var d = l, k = f, M = s, Z = a, J = r, c = p, _ = n, N = C, B = E, U = t, oe = i, re = o, ye = h, be = !1;
    function xe(v) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || x(v) === l;
    }
    function R(v) {
      return x(v) === f;
    }
    function O(v) {
      return x(v) === s;
    }
    function F(v) {
      return x(v) === a;
    }
    function W(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function j(v) {
      return x(v) === p;
    }
    function H(v) {
      return x(v) === n;
    }
    function z(v) {
      return x(v) === C;
    }
    function V(v) {
      return x(v) === E;
    }
    function Y(v) {
      return x(v) === t;
    }
    function K(v) {
      return x(v) === i;
    }
    function q(v) {
      return x(v) === o;
    }
    function ve(v) {
      return x(v) === h;
    }
    le.AsyncMode = d, le.ConcurrentMode = k, le.ContextConsumer = M, le.ContextProvider = Z, le.Element = J, le.ForwardRef = c, le.Fragment = _, le.Lazy = N, le.Memo = B, le.Portal = U, le.Profiler = oe, le.StrictMode = re, le.Suspense = ye, le.isAsyncMode = xe, le.isConcurrentMode = R, le.isContextConsumer = O, le.isContextProvider = F, le.isElement = W, le.isForwardRef = j, le.isFragment = H, le.isLazy = z, le.isMemo = V, le.isPortal = Y, le.isProfiler = K, le.isStrictMode = q, le.isSuspense = ve, le.isValidElementType = w, le.typeOf = x;
  }()), le;
}
process.env.NODE_ENV === "production" ? Ht.exports = Os() : Ht.exports = _s();
var Ps = Ht.exports, Lo = Ps, As = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ks = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wo = {};
Wo[Lo.ForwardRef] = As;
Wo[Lo.Memo] = ks;
var Ms = !0;
function Is(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Uo = function(r, t, n) {
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
  Ms === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, Ns = function(r, t, n) {
  Uo(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function js(e) {
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
var Ds = {
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
}, Bs = !1, Fs = /[A-Z]|^ms/g, zs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Yo = function(r) {
  return r.charCodeAt(1) === 45;
}, Qn = function(r) {
  return r != null && typeof r != "boolean";
}, Dt = /* @__PURE__ */ Io(function(e) {
  return Yo(e) ? e : e.replace(Fs, "-$&").toLowerCase();
}), Zn = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(zs, function(n, o, i) {
          return Ge = {
            name: o,
            styles: i,
            next: Ge
          }, o;
        });
  }
  return Ds[r] !== 1 && !Yo(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Vs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Fr(e, r, t) {
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
        return Ge = {
          name: o.name,
          styles: o.styles,
          next: Ge
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ge = {
              name: a.name,
              styles: a.styles,
              next: Ge
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Ls(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ge, f = t(e);
        return Ge = l, Fr(e, r, f);
      }
      break;
    }
  }
  var p = t;
  if (r == null)
    return p;
  var h = r[p];
  return h !== void 0 ? h : p;
}
function Ls(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Fr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var s = a;
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Qn(s) && (n += Dt(i) + ":" + Zn(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Bs)
          throw new Error(Vs);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Qn(a[l]) && (n += Dt(i) + ":" + Zn(i, a[l]) + ";");
        else {
          var f = Fr(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Dt(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var eo = /label:\s*([^\s;{]+)\s*(;|$)/g, Ge;
function qo(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ge = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Fr(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Fr(t, r, e[s]), n) {
      var l = i;
      o += l[s];
    }
  eo.lastIndex = 0;
  for (var f = "", p; (p = eo.exec(o)) !== null; )
    f += "-" + p[1];
  var h = js(o) + f;
  return {
    name: h,
    styles: o,
    next: Ge
  };
}
var Ws = function(r) {
  return r();
}, Us = D.useInsertionEffect ? D.useInsertionEffect : !1, Ys = Us || Ws, Go = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $s({
    key: "css"
  }) : null
);
Go.Provider;
var qs = function(r) {
  return /* @__PURE__ */ Bi(function(t, n) {
    var o = Fi(Go);
    return r(t, o, n);
  });
}, Ho = /* @__PURE__ */ D.createContext({});
function Gs() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return qo(r);
}
var mn = function() {
  var r = Gs.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Hs = Ja, Ks = function(r) {
  return r !== "theme";
}, ro = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Hs : Ks;
}, to = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Xs = !1, Js = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Uo(t, n, o), Ys(function() {
    return Ns(t, n, o);
  }), null;
}, Qs = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var s = to(r, t, n), l = s || ro(o), f = !l("as");
  return function() {
    var p = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      h.push(p[0][0]);
      for (var g = p.length, E = 1; E < g; E++)
        h.push(p[E], p[0][E]);
    }
    var C = qs(function(b, y, T) {
      var P = f && b.as || o, w = "", x = [], d = b;
      if (b.theme == null) {
        d = {};
        for (var k in b)
          d[k] = b[k];
        d.theme = D.useContext(Ho);
      }
      typeof b.className == "string" ? w = Is(y.registered, x, b.className) : b.className != null && (w = b.className + " ");
      var M = qo(h.concat(x), y.registered, d);
      w += y.key + "-" + M.name, a !== void 0 && (w += " " + a);
      var Z = f && s === void 0 ? ro(P) : l, J = {};
      for (var c in b)
        f && c === "as" || Z(c) && (J[c] = b[c]);
      return J.className = w, T && (J.ref = T), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Js, {
        cache: y,
        serialized: M,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ D.createElement(P, J));
    });
    return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = r.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = h, C.__emotion_forwardProp = s, Object.defineProperty(C, "toString", {
      value: function() {
        return a === void 0 && Xs ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), C.withComponent = function(b, y) {
      return e(b, Yt({}, t, y, {
        shouldForwardProp: to(C, y, !0)
      })).apply(void 0, h);
    }, C;
  };
}, Zs = [
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
], Kt = Qs.bind();
Zs.forEach(function(e) {
  Kt[e] = Kt(e);
});
function ec(e) {
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
var rc = {
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
};
function tc(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var nc = !1, oc = /[A-Z]|^ms/g, ic = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ko = function(r) {
  return r.charCodeAt(1) === 45;
}, no = function(r) {
  return r != null && typeof r != "boolean";
}, Bt = /* @__PURE__ */ tc(function(e) {
  return Ko(e) ? e : e.replace(oc, "-$&").toLowerCase();
}), oo = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ic, function(n, o, i) {
          return Ze = {
            name: o,
            styles: i,
            next: Ze
          }, o;
        });
  }
  return rc[r] !== 1 && !Ko(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, ac = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ct(e, r, t) {
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
        return Ze = {
          name: o.name,
          styles: o.styles,
          next: Ze
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ze = {
              name: a.name,
              styles: a.styles,
              next: Ze
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return sc(e, r, t);
    }
  }
  var l = t;
  return l;
}
function sc(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += ct(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var s = a;
        no(s) && (n += Bt(i) + ":" + oo(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && nc)
          throw new Error(ac);
        if (Array.isArray(a) && typeof a[0] == "string" && r == null)
          for (var l = 0; l < a.length; l++)
            no(a[l]) && (n += Bt(i) + ":" + oo(i, a[l]) + ";");
        else {
          var f = ct(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Bt(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var io = /label:\s*([^\s;{]+)\s*(;|$)/g, Ze;
function cc(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ze = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += ct(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += ct(t, r, e[s]), n) {
      var l = i;
      o += l[s];
    }
  io.lastIndex = 0;
  for (var f = "", p; (p = io.exec(o)) !== null; )
    f += "-" + p[1];
  var h = ec(o) + f;
  return {
    name: h,
    styles: o,
    next: Ze
  };
}
/**
 * @mui/styled-engine v6.1.5
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function lc(e, r) {
  const t = Kt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function uc(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const ao = [];
function so(e) {
  return ao[0] = e, cc(ao);
}
const fc = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function dc(e) {
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
  } = e, i = fc(r), a = Object.keys(i);
  function s(g) {
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof r[g] == "number" ? r[g] : g) - n / 100}${t})`;
  }
  function f(g, E) {
    const C = a.indexOf(E);
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t}) and (max-width:${(C !== -1 && typeof r[a[C]] == "number" ? r[a[C]] : E) - n / 100}${t})`;
  }
  function p(g) {
    return a.indexOf(g) + 1 < a.length ? f(g, a[a.indexOf(g) + 1]) : s(g);
  }
  function h(g) {
    const E = a.indexOf(g);
    return E === 0 ? s(a[1]) : E === a.length - 1 ? l(a[E]) : f(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: f,
    only: p,
    not: h,
    unit: t,
    ...o
  };
}
const pc = {
  borderRadius: 4
};
function Xo(e = 8, r = ln({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function mc(e, r) {
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
function hn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = dc(t), l = Xo(o);
  let f = je({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...pc,
      ...i
    }
  }, a);
  return f = aa(f), f.applyStyles = mc, f = r.reduce((p, h) => je(p, h), f), f.unstable_sxConfig = {
    ...St,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(h) {
    return xr({
      sx: h,
      theme: this
    });
  }, f;
}
function hc(e) {
  return Object.keys(e).length === 0;
}
function gc(e = null) {
  const r = D.useContext(Ho);
  return !r || hc(r) ? e : r;
}
const yc = hn();
function bc(e = yc) {
  return gc(e);
}
const co = (e) => e, vc = () => {
  let e = co;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = co;
    }
  };
}, Sc = vc(), Cc = {
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
function nr(e, r, t = "Mui") {
  const n = Cc[r];
  return n ? `${t}-${n}` : `${Sc.generate(e)}-${r}`;
}
function lr(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = nr(e, o, t);
  }), n;
}
var Xt = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function xc() {
  if (lo) return ue;
  lo = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var T = y.$$typeof;
      switch (T) {
        case e:
          switch (y = y.type, y) {
            case t:
            case o:
            case n:
            case f:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case a:
                case l:
                case g:
                case h:
                case i:
                  return y;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  return ue.ContextConsumer = a, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = l, ue.Fragment = t, ue.Lazy = g, ue.Memo = h, ue.Portal = r, ue.Profiler = o, ue.StrictMode = n, ue.Suspense = f, ue.SuspenseList = p, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(y) {
    return b(y) === a;
  }, ue.isContextProvider = function(y) {
    return b(y) === i;
  }, ue.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, ue.isForwardRef = function(y) {
    return b(y) === l;
  }, ue.isFragment = function(y) {
    return b(y) === t;
  }, ue.isLazy = function(y) {
    return b(y) === g;
  }, ue.isMemo = function(y) {
    return b(y) === h;
  }, ue.isPortal = function(y) {
    return b(y) === r;
  }, ue.isProfiler = function(y) {
    return b(y) === o;
  }, ue.isStrictMode = function(y) {
    return b(y) === n;
  }, ue.isSuspense = function(y) {
    return b(y) === f;
  }, ue.isSuspenseList = function(y) {
    return b(y) === p;
  }, ue.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === t || y === o || y === n || y === f || y === p || y === E || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === h || y.$$typeof === i || y.$$typeof === a || y.$$typeof === l || y.$$typeof === C || y.getModuleId !== void 0);
  }, ue.typeOf = b, ue;
}
var fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function Ec() {
  return uo || (uo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), C = !1, b = !1, y = !1, T = !1, P = !1, w;
    w = Symbol.for("react.module.reference");
    function x(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === t || I === o || P || I === n || I === f || I === p || T || I === E || C || b || y || typeof I == "object" && I !== null && (I.$$typeof === g || I.$$typeof === h || I.$$typeof === i || I.$$typeof === a || I.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === w || I.getModuleId !== void 0));
    }
    function d(I) {
      if (typeof I == "object" && I !== null) {
        var Oe = I.$$typeof;
        switch (Oe) {
          case e:
            var Be = I.type;
            switch (Be) {
              case t:
              case o:
              case n:
              case f:
              case p:
                return Be;
              default:
                var or = Be && Be.$$typeof;
                switch (or) {
                  case s:
                  case a:
                  case l:
                  case g:
                  case h:
                  case i:
                    return or;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var k = a, M = i, Z = e, J = l, c = t, _ = g, N = h, B = r, U = o, oe = n, re = f, ye = p, be = !1, xe = !1;
    function R(I) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(I) {
      return xe || (xe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(I) {
      return d(I) === a;
    }
    function W(I) {
      return d(I) === i;
    }
    function j(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function H(I) {
      return d(I) === l;
    }
    function z(I) {
      return d(I) === t;
    }
    function V(I) {
      return d(I) === g;
    }
    function Y(I) {
      return d(I) === h;
    }
    function K(I) {
      return d(I) === r;
    }
    function q(I) {
      return d(I) === o;
    }
    function ve(I) {
      return d(I) === n;
    }
    function v(I) {
      return d(I) === f;
    }
    function we(I) {
      return d(I) === p;
    }
    fe.ContextConsumer = k, fe.ContextProvider = M, fe.Element = Z, fe.ForwardRef = J, fe.Fragment = c, fe.Lazy = _, fe.Memo = N, fe.Portal = B, fe.Profiler = U, fe.StrictMode = oe, fe.Suspense = re, fe.SuspenseList = ye, fe.isAsyncMode = R, fe.isConcurrentMode = O, fe.isContextConsumer = F, fe.isContextProvider = W, fe.isElement = j, fe.isForwardRef = H, fe.isFragment = z, fe.isLazy = V, fe.isMemo = Y, fe.isPortal = K, fe.isProfiler = q, fe.isStrictMode = ve, fe.isSuspense = v, fe.isSuspenseList = we, fe.isValidElementType = x, fe.typeOf = d;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Xt.exports = xc() : Xt.exports = Ec();
var fo = Xt.exports;
function Jo(e, r = "") {
  return e.displayName || e.name || r;
}
function po(e, r, t) {
  const n = Jo(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Tc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Jo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case fo.ForwardRef:
          return po(e, e.render, "ForwardRef");
        case fo.Memo:
          return po(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Qo(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: so(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = so(o.style));
  }), n;
}
const wc = hn();
function Ft(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Rc(e) {
  return e ? (r, t) => t[e] : null;
}
function $c(e, r, t) {
  e.theme = Ac(e.theme) ? t : e.theme[r] || e.theme;
}
function ot(e, r) {
  const t = typeof r == "function" ? r(e) : r;
  if (Array.isArray(t))
    return t.flatMap((n) => ot(e, n));
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
    return Zo(e, t.variants, [n]);
  }
  return t != null && t.isProcessed ? t.style : t;
}
function Zo(e, r, t = []) {
  var o;
  let n;
  e: for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), t.push(a.style(n))) : t.push(a.style);
  }
  return t;
}
function Oc(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = wc,
    rootShouldForwardProp: n = Ft,
    slotShouldForwardProp: o = Ft
  } = e;
  function i(s) {
    $c(s, r, t);
  }
  return (s, l = {}) => {
    uc(s, (d) => d.filter((k) => k !== xr));
    const {
      name: f,
      slot: p,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = Rc(ei(p)),
      ...C
    } = l, b = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), y = g || !1;
    let T = Ft;
    p === "Root" || p === "root" ? T = n : p ? T = o : kc(s) && (T = void 0);
    const P = lc(s, {
      shouldForwardProp: T,
      label: Pc(f, p),
      ...C
    }), w = (d) => {
      if (typeof d == "function" && d.__emotion_real !== d)
        return function(M) {
          return ot(M, d);
        };
      if (Je(d)) {
        const k = Qo(d);
        return k.variants ? function(Z) {
          return ot(Z, k);
        } : k.style;
      }
      return d;
    }, x = (...d) => {
      const k = [], M = d.map(w), Z = [];
      if (k.push(i), f && E && Z.push(function(N) {
        var re, ye;
        const U = (ye = (re = N.theme.components) == null ? void 0 : re[f]) == null ? void 0 : ye.styleOverrides;
        if (!U)
          return null;
        const oe = {};
        for (const be in U)
          oe[be] = ot(N, U[be]);
        return E(N, oe);
      }), f && !b && Z.push(function(N) {
        var oe, re;
        const B = N.theme, U = (re = (oe = B == null ? void 0 : B.components) == null ? void 0 : oe[f]) == null ? void 0 : re.variants;
        return U ? Zo(N, U) : null;
      }), y || Z.push(xr), Array.isArray(M[0])) {
        const _ = M.shift(), N = new Array(k.length).fill(""), B = new Array(Z.length).fill("");
        let U;
        U = [...N, ..._, ...B], U.raw = [...N, ..._.raw, ...B], k.unshift(U);
      }
      const J = [...k, ...M, ...Z], c = P(...J);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = _c(f, p, s)), c;
    };
    return P.withConfig && (x.withConfig = P.withConfig), x;
  };
}
function _c(e, r, t) {
  return e ? `${e}${ge(r || "")}` : `Styled(${Tc(t)})`;
}
function Pc(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${ei(r || "Root")}`), t;
}
function Ac(e) {
  for (const r in e)
    return !1;
  return !0;
}
function kc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ei(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Mc = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function gn(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function Ic(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function Nc(e, r, t, n, o) {
  const i = e[r], a = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !Ic(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const jc = gn(m.elementType, Nc), Dc = m.oneOfType([m.func, m.object]);
function Bc(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
function Qr(e) {
  const r = D.useRef(e);
  return Mc(() => {
    r.current = e;
  }), D.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
function mo(...e) {
  return D.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Bc(t, r);
    });
  }, e);
}
const ho = {};
function ri(e, r) {
  const t = D.useRef(ho);
  return t.current === ho && (t.current = e(r)), t;
}
const Fc = [];
function zc(e) {
  D.useEffect(e, Fc);
}
class yn {
  constructor() {
    _r(this, "currentId", null);
    _r(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    _r(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new yn();
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
function Vc() {
  const e = ri(yn.create).current;
  return zc(e.disposeEffect), e;
}
function go(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Lc(e) {
  const r = typeof e;
  switch (r) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return r;
  }
}
function ti(e, r, t, n) {
  const o = e[r];
  if (o == null || !Number.isInteger(o)) {
    const i = Lc(o);
    return new RangeError(`Invalid ${n} \`${r}\` of type \`${i}\` supplied to \`${t}\`, expected \`integer\`.`);
  }
  return null;
}
function ni(e, r, ...t) {
  return e[r] === void 0 ? null : ti(e, r, ...t);
}
function Jt() {
  return null;
}
ni.isRequired = ti;
Jt.isRequired = Jt;
const Wc = process.env.NODE_ENV === "production" ? Jt : ni, Uc = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (m.node, m.object);
function Yc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? it(o.defaultProps, n) : !o.styleOverrides && !o.variants ? it(o, n) : n;
}
function qc({
  props: e,
  name: r
}) {
  const t = D.useContext(Uc);
  return Yc({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const yo = {
  theme: void 0
};
function Gc(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (yo.theme = o.theme, i = Qo(e(yo)), r = i, t = o.theme), i;
  };
}
function Hc(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const bo = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, a) => {
    a === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Kc = (e, r, t) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!t || t && !t([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : r([...i, s], l, a));
    });
  }
  n(e);
}, Xc = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function zt(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, a = {};
  return Kc(
    e,
    (s, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const p = `--${t ? `${t}-` : ""}${s.join("-")}`, h = Xc(s, l);
        Object.assign(o, {
          [p]: h
        }), bo(i, s, `var(${p})`, f), bo(a, s, `var(${p}, ${h})`, f);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Jc(e, r = {}) {
  const {
    getSelector: t = y,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...l
  } = e, {
    vars: f,
    css: p,
    varsWithDefaults: h
  } = zt(l, r);
  let g = h;
  const E = {}, {
    [s]: C,
    ...b
  } = i;
  if (Object.entries(b || {}).forEach(([w, x]) => {
    const {
      vars: d,
      css: k,
      varsWithDefaults: M
    } = zt(x, r);
    g = je(g, M), E[w] = {
      css: k,
      vars: d
    };
  }), C) {
    const {
      css: w,
      vars: x,
      varsWithDefaults: d
    } = zt(C, r);
    g = je(g, d), E[s] = {
      css: w,
      vars: x
    };
  }
  function y(w, x) {
    var k, M;
    let d = o;
    if (o === "class" && (d = ".%s"), o === "data" && (d = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (d = `[${o}="%s"]`), w) {
      if (d === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = (k = i[w]) == null ? void 0 : k.palette) == null ? void 0 : M.mode) || w})`]: {
            ":root": x
          }
        };
      if (d)
        return e.defaultColorScheme === w ? `:root, ${d.replace("%s", String(w))}` : d.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let w = {
        ...f
      };
      return Object.entries(E).forEach(([, {
        vars: x
      }]) => {
        w = je(w, x);
      }), w;
    },
    generateStyleSheets: () => {
      var Z, J;
      const w = [], x = e.defaultColorScheme || "light";
      function d(c, _) {
        Object.keys(_).length && w.push(typeof c == "string" ? {
          [c]: {
            ..._
          }
        } : c);
      }
      d(t(void 0, {
        ...p
      }), p);
      const {
        [x]: k,
        ...M
      } = E;
      if (k) {
        const {
          css: c
        } = k, _ = (J = (Z = i[x]) == null ? void 0 : Z.palette) == null ? void 0 : J.mode, N = !n && _ ? {
          colorScheme: _,
          ...c
        } : {
          ...c
        };
        d(t(x, {
          ...N
        }), N);
      }
      return Object.entries(M).forEach(([c, {
        css: _
      }]) => {
        var U, oe;
        const N = (oe = (U = i[c]) == null ? void 0 : U.palette) == null ? void 0 : oe.mode, B = !n && N ? {
          colorScheme: N,
          ..._
        } : {
          ..._
        };
        d(t(c, {
          ...B
        }), B);
      }), w;
    }
  };
}
function Qc(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const zr = {
  black: "#000",
  white: "#fff"
}, Zc = {
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
}, mr = {
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
}, hr = {
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
}, Mr = {
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
}, gr = {
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
}, yr = {
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
}, br = {
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
};
function oi() {
  return {
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
      paper: zr.white,
      default: zr.white
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
  };
}
const el = oi();
function ii() {
  return {
    text: {
      primary: zr.white,
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
      active: zr.white,
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
}
const vo = ii();
function So(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = cn(e.main, o) : r === "dark" && (e.dark = sn(e.main, i)));
}
function rl(e = "light") {
  return e === "dark" ? {
    main: gr[200],
    light: gr[50],
    dark: gr[400]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function tl(e = "light") {
  return e === "dark" ? {
    main: mr[200],
    light: mr[50],
    dark: mr[400]
  } : {
    main: mr[500],
    light: mr[300],
    dark: mr[700]
  };
}
function nl(e = "light") {
  return e === "dark" ? {
    main: hr[500],
    light: hr[300],
    dark: hr[700]
  } : {
    main: hr[700],
    light: hr[400],
    dark: hr[800]
  };
}
function ol(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[700],
    light: yr[500],
    dark: yr[900]
  };
}
function il(e = "light") {
  return e === "dark" ? {
    main: br[400],
    light: br[300],
    dark: br[700]
  } : {
    main: br[800],
    light: br[500],
    dark: br[900]
  };
}
function al(e = "light") {
  return e === "dark" ? {
    main: Mr[400],
    light: Mr[300],
    dark: Mr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mr[500],
    dark: Mr[900]
  };
}
function bn(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || rl(r), a = e.secondary || tl(r), s = e.error || nl(r), l = e.info || ol(r), f = e.success || il(r), p = e.warning || al(r);
  function h(b) {
    const y = Un(b, vo.text.primary) >= t ? vo.text.primary : el.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Un(b, y);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${y} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const g = ({
    color: b,
    name: y,
    mainShade: T = 500,
    lightShade: P = 300,
    darkShade: w = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[T] && (b.main = b[T]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : er(11, y ? ` (${y})` : "", T));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : er(12, y ? ` (${y})` : "", JSON.stringify(b.main)));
    return So(b, "light", P, n), So(b, "dark", w, n), b.contrastText || (b.contrastText = h(b.main)), b;
  };
  let E;
  return r === "light" ? E = oi() : r === "dark" && (E = ii()), process.env.NODE_ENV !== "production" && (E || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), je({
    // A collection of common colors.
    common: {
      ...zr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Zc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...E
  }, o);
}
function sl(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function cl(e, r) {
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
function ll(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Co = {
  textTransform: "uppercase"
}, xo = '"Roboto", "Helvetica", "Arial", sans-serif';
function ul(e, r) {
  const {
    fontFamily: t = xo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p,
    ...h
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, E = p || ((y) => `${y / l * g}rem`), C = (y, T, P, w, x) => ({
    fontFamily: t,
    fontWeight: y,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === xo ? {
      letterSpacing: `${ll(w / T)}em`
    } : {},
    ...x,
    ...f
  }), b = {
    h1: C(o, 96, 1.167, -1.5),
    h2: C(o, 60, 1.2, -0.5),
    h3: C(i, 48, 1.167, 0),
    h4: C(i, 34, 1.235, 0.25),
    h5: C(i, 24, 1.334, 0),
    h6: C(a, 20, 1.6, 0.15),
    subtitle1: C(i, 16, 1.75, 0.15),
    subtitle2: C(a, 14, 1.57, 0.1),
    body1: C(i, 16, 1.5, 0.15),
    body2: C(i, 14, 1.43, 0.15),
    button: C(a, 14, 1.75, 0.4, Co),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, Co),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je({
    htmlFontSize: l,
    pxToRem: E,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...b
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const fl = 0.2, dl = 0.14, pl = 0.12;
function he(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${dl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pl})`].join(",");
}
const ml = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], hl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, gl = {
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
function Eo(e) {
  return `${Math.round(e)}ms`;
}
function yl(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function bl(e) {
  const r = {
    ...hl,
    ...e.easing
  }, t = {
    ...gl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: yl,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: s = r.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", h = (g) => !Number.isNaN(parseFloat(g));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(s) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !p(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : Eo(a)} ${s} ${typeof l == "string" ? l : Eo(l)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const vl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Sl(e) {
  return Je(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ai(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Sl(s) || a.startsWith("unstable_") ? delete n[a] : Je(s) && (n[a] = {
        ...s
      }, t(n[a]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Qt(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: l,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : er(20));
  const p = bn(i), h = hn(e);
  let g = je(h, {
    mixins: cl(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ml.slice(),
    typography: ul(p, s),
    transitions: bl(a),
    zIndex: {
      ...vl
    }
  });
  if (g = je(g, f), g = r.reduce((E, C) => je(E, C), g), process.env.NODE_ENV !== "production") {
    const E = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (b, y) => {
      let T;
      for (T in b) {
        const P = b[T];
        if (E.includes(T) && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = nr("", T);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: P
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[T] = {};
        }
      }
    };
    Object.keys(g.components).forEach((b) => {
      const y = g.components[b].styleOverrides;
      y && b.startsWith("Mui") && C(y, b);
    });
  }
  return g.unstable_sxConfig = {
    ...St,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, g.unstable_sx = function(C) {
    return xr({
      sx: C,
      theme: this
    });
  }, g.toRuntimeSource = ai, g;
}
function Zt(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Cl = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Zt(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function si(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ci(e) {
  return e === "dark" ? Cl : [];
}
function xl(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = bn(r);
  return {
    palette: i,
    opacity: {
      ...si(i.mode),
      ...t
    },
    overlays: n || ci(i.mode),
    ...o
  };
}
function El(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Tl = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], wl = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const a = {};
      return Tl(e.cssVarPrefix).forEach((s) => {
        a[s] = t[s], delete t[s];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", r)]: a,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...a
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
function Rl(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function S(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Nr(e) {
  return !e || !e.startsWith("hsl") ? e : _o(e);
}
function Xe(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Ir(Nr(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function $l(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ye = (e) => {
  try {
    return e();
  } catch {
  }
}, Ol = (e = "mui") => Hc(e);
function Vt(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = xl({
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
    ...a
  } = Qt({
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
      ...si(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || ci(o)
  }, a;
}
function _l(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = El,
    colorSchemeSelector: s = t.light && t.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...f
  } = e, p = Object.keys(t)[0], h = n || (t.light && p !== "light" ? "light" : p), g = Ol(i), {
    [h]: E,
    light: C,
    dark: b,
    ...y
  } = t, T = {
    ...y
  };
  let P = E;
  if ((h === "dark" && !("dark" in t) || h === "light" && !("light" in t)) && (P = !0), !P)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : er(21, h));
  const w = Vt(T, P, f, h);
  C && !T.light && Vt(T, C, void 0, "light"), b && !T.dark && Vt(T, b, void 0, "dark");
  let x = {
    defaultColorScheme: h,
    ...w,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: l,
    getCssVar: g,
    colorSchemes: T,
    font: {
      ...sl(w.typography),
      ...w.font
    },
    spacing: $l(f.spacing)
  };
  Object.keys(x.colorSchemes).forEach((J) => {
    const c = x.colorSchemes[J].palette, _ = (N) => {
      const B = N.split("-"), U = B[1], oe = B[2];
      return g(N, c[U][oe]);
    };
    if (c.mode === "light" && (S(c.common, "background", "#fff"), S(c.common, "onBackground", "#000")), c.mode === "dark" && (S(c.common, "background", "#000"), S(c.common, "onBackground", "#fff")), Rl(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      S(c.Alert, "errorColor", pe(c.error.light, 0.6)), S(c.Alert, "infoColor", pe(c.info.light, 0.6)), S(c.Alert, "successColor", pe(c.success.light, 0.6)), S(c.Alert, "warningColor", pe(c.warning.light, 0.6)), S(c.Alert, "errorFilledBg", _("palette-error-main")), S(c.Alert, "infoFilledBg", _("palette-info-main")), S(c.Alert, "successFilledBg", _("palette-success-main")), S(c.Alert, "warningFilledBg", _("palette-warning-main")), S(c.Alert, "errorFilledColor", Ye(() => c.getContrastText(c.error.main))), S(c.Alert, "infoFilledColor", Ye(() => c.getContrastText(c.info.main))), S(c.Alert, "successFilledColor", Ye(() => c.getContrastText(c.success.main))), S(c.Alert, "warningFilledColor", Ye(() => c.getContrastText(c.warning.main))), S(c.Alert, "errorStandardBg", me(c.error.light, 0.9)), S(c.Alert, "infoStandardBg", me(c.info.light, 0.9)), S(c.Alert, "successStandardBg", me(c.success.light, 0.9)), S(c.Alert, "warningStandardBg", me(c.warning.light, 0.9)), S(c.Alert, "errorIconColor", _("palette-error-main")), S(c.Alert, "infoIconColor", _("palette-info-main")), S(c.Alert, "successIconColor", _("palette-success-main")), S(c.Alert, "warningIconColor", _("palette-warning-main")), S(c.AppBar, "defaultBg", _("palette-grey-100")), S(c.Avatar, "defaultBg", _("palette-grey-400")), S(c.Button, "inheritContainedBg", _("palette-grey-300")), S(c.Button, "inheritContainedHoverBg", _("palette-grey-A100")), S(c.Chip, "defaultBorder", _("palette-grey-400")), S(c.Chip, "defaultAvatarColor", _("palette-grey-700")), S(c.Chip, "defaultIconColor", _("palette-grey-700")), S(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(c.LinearProgress, "primaryBg", me(c.primary.main, 0.62)), S(c.LinearProgress, "secondaryBg", me(c.secondary.main, 0.62)), S(c.LinearProgress, "errorBg", me(c.error.main, 0.62)), S(c.LinearProgress, "infoBg", me(c.info.main, 0.62)), S(c.LinearProgress, "successBg", me(c.success.main, 0.62)), S(c.LinearProgress, "warningBg", me(c.warning.main, 0.62)), S(c.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), S(c.Slider, "primaryTrack", me(c.primary.main, 0.62)), S(c.Slider, "secondaryTrack", me(c.secondary.main, 0.62)), S(c.Slider, "errorTrack", me(c.error.main, 0.62)), S(c.Slider, "infoTrack", me(c.info.main, 0.62)), S(c.Slider, "successTrack", me(c.success.main, 0.62)), S(c.Slider, "warningTrack", me(c.warning.main, 0.62));
      const N = Xr(c.background.default, 0.8);
      S(c.SnackbarContent, "bg", N), S(c.SnackbarContent, "color", Ye(() => c.getContrastText(N))), S(c.SpeedDialAction, "fabHoverBg", Xr(c.background.paper, 0.15)), S(c.StepConnector, "border", _("palette-grey-400")), S(c.StepContent, "border", _("palette-grey-400")), S(c.Switch, "defaultColor", _("palette-common-white")), S(c.Switch, "defaultDisabledColor", _("palette-grey-100")), S(c.Switch, "primaryDisabledColor", me(c.primary.main, 0.62)), S(c.Switch, "secondaryDisabledColor", me(c.secondary.main, 0.62)), S(c.Switch, "errorDisabledColor", me(c.error.main, 0.62)), S(c.Switch, "infoDisabledColor", me(c.info.main, 0.62)), S(c.Switch, "successDisabledColor", me(c.success.main, 0.62)), S(c.Switch, "warningDisabledColor", me(c.warning.main, 0.62)), S(c.TableCell, "border", me(Kr(c.divider, 1), 0.88)), S(c.Tooltip, "bg", Kr(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      S(c.Alert, "errorColor", me(c.error.light, 0.6)), S(c.Alert, "infoColor", me(c.info.light, 0.6)), S(c.Alert, "successColor", me(c.success.light, 0.6)), S(c.Alert, "warningColor", me(c.warning.light, 0.6)), S(c.Alert, "errorFilledBg", _("palette-error-dark")), S(c.Alert, "infoFilledBg", _("palette-info-dark")), S(c.Alert, "successFilledBg", _("palette-success-dark")), S(c.Alert, "warningFilledBg", _("palette-warning-dark")), S(c.Alert, "errorFilledColor", Ye(() => c.getContrastText(c.error.dark))), S(c.Alert, "infoFilledColor", Ye(() => c.getContrastText(c.info.dark))), S(c.Alert, "successFilledColor", Ye(() => c.getContrastText(c.success.dark))), S(c.Alert, "warningFilledColor", Ye(() => c.getContrastText(c.warning.dark))), S(c.Alert, "errorStandardBg", pe(c.error.light, 0.9)), S(c.Alert, "infoStandardBg", pe(c.info.light, 0.9)), S(c.Alert, "successStandardBg", pe(c.success.light, 0.9)), S(c.Alert, "warningStandardBg", pe(c.warning.light, 0.9)), S(c.Alert, "errorIconColor", _("palette-error-main")), S(c.Alert, "infoIconColor", _("palette-info-main")), S(c.Alert, "successIconColor", _("palette-success-main")), S(c.Alert, "warningIconColor", _("palette-warning-main")), S(c.AppBar, "defaultBg", _("palette-grey-900")), S(c.AppBar, "darkBg", _("palette-background-paper")), S(c.AppBar, "darkColor", _("palette-text-primary")), S(c.Avatar, "defaultBg", _("palette-grey-600")), S(c.Button, "inheritContainedBg", _("palette-grey-800")), S(c.Button, "inheritContainedHoverBg", _("palette-grey-700")), S(c.Chip, "defaultBorder", _("palette-grey-700")), S(c.Chip, "defaultAvatarColor", _("palette-grey-300")), S(c.Chip, "defaultIconColor", _("palette-grey-300")), S(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(c.LinearProgress, "primaryBg", pe(c.primary.main, 0.5)), S(c.LinearProgress, "secondaryBg", pe(c.secondary.main, 0.5)), S(c.LinearProgress, "errorBg", pe(c.error.main, 0.5)), S(c.LinearProgress, "infoBg", pe(c.info.main, 0.5)), S(c.LinearProgress, "successBg", pe(c.success.main, 0.5)), S(c.LinearProgress, "warningBg", pe(c.warning.main, 0.5)), S(c.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), S(c.Slider, "primaryTrack", pe(c.primary.main, 0.5)), S(c.Slider, "secondaryTrack", pe(c.secondary.main, 0.5)), S(c.Slider, "errorTrack", pe(c.error.main, 0.5)), S(c.Slider, "infoTrack", pe(c.info.main, 0.5)), S(c.Slider, "successTrack", pe(c.success.main, 0.5)), S(c.Slider, "warningTrack", pe(c.warning.main, 0.5));
      const N = Xr(c.background.default, 0.98);
      S(c.SnackbarContent, "bg", N), S(c.SnackbarContent, "color", Ye(() => c.getContrastText(N))), S(c.SpeedDialAction, "fabHoverBg", Xr(c.background.paper, 0.15)), S(c.StepConnector, "border", _("palette-grey-600")), S(c.StepContent, "border", _("palette-grey-600")), S(c.Switch, "defaultColor", _("palette-grey-300")), S(c.Switch, "defaultDisabledColor", _("palette-grey-600")), S(c.Switch, "primaryDisabledColor", pe(c.primary.main, 0.55)), S(c.Switch, "secondaryDisabledColor", pe(c.secondary.main, 0.55)), S(c.Switch, "errorDisabledColor", pe(c.error.main, 0.55)), S(c.Switch, "infoDisabledColor", pe(c.info.main, 0.55)), S(c.Switch, "successDisabledColor", pe(c.success.main, 0.55)), S(c.Switch, "warningDisabledColor", pe(c.warning.main, 0.55)), S(c.TableCell, "border", pe(Kr(c.divider, 1), 0.68)), S(c.Tooltip, "bg", Kr(c.grey[700], 0.92));
    }
    Xe(c.background, "default"), Xe(c.background, "paper"), Xe(c.common, "background"), Xe(c.common, "onBackground"), Xe(c, "divider"), Object.keys(c).forEach((N) => {
      const B = c[N];
      B && typeof B == "object" && (B.main && S(c[N], "mainChannel", Ir(Nr(B.main))), B.light && S(c[N], "lightChannel", Ir(Nr(B.light))), B.dark && S(c[N], "darkChannel", Ir(Nr(B.dark))), B.contrastText && S(c[N], "contrastTextChannel", Ir(Nr(B.contrastText))), N === "text" && (Xe(c[N], "primary"), Xe(c[N], "secondary")), N === "action" && (B.active && Xe(c[N], "active"), B.selected && Xe(c[N], "selected")));
    });
  }), x = r.reduce((J, c) => je(J, c), x);
  const d = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: wl(x)
  }, {
    vars: k,
    generateThemeVars: M,
    generateStyleSheets: Z
  } = Jc(x, d);
  return x.vars = k, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([J, c]) => {
    x[J] = c;
  }), x.generateThemeVars = M, x.generateStyleSheets = Z, x.generateSpacing = function() {
    return Xo(f.spacing, ln(this));
  }, x.getColorSchemeSelector = Qc(s), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = a, x.unstable_sxConfig = {
    ...St,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, x.unstable_sx = function(c) {
    return xr({
      sx: c,
      theme: this
    });
  }, x.toRuntimeSource = ai, x;
}
function To(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: bn({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function Pl(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...a
  } = e, s = i || "light", l = o == null ? void 0 : o[s], f = {
    ...o,
    ...t ? {
      [s]: {
        ...typeof l != "boolean" && l,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Qt(e, ...r);
    let p = t;
    "palette" in e || f[s] && (f[s] !== !0 ? p = f[s].palette : s === "dark" && (p = {
      mode: "dark"
    }));
    const h = Qt({
      ...e,
      palette: p
    }, ...r);
    return h.defaultColorScheme = s, h.colorSchemes = f, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: h.palette
    }, To(h, "dark", f.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: h.palette
    }, To(h, "light", f.light)), h;
  }
  return !t && !("light" in f) && s === "light" && (f.light = !0), _l({
    ...a,
    colorSchemes: f,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...r);
}
const li = Pl(), ui = "$$material";
function Al() {
  const e = bc(li);
  return process.env.NODE_ENV !== "production" && D.useDebugValue(e), e[ui] || e;
}
const We = Oc({
  themeId: ui,
  defaultTheme: li,
  rootShouldForwardProp: Ao
}), Tr = Gc;
process.env.NODE_ENV !== "production" && (m.node, m.object.isRequired);
function ur(e) {
  return qc(e);
}
class lt {
  constructor() {
    _r(this, "mountEffect", () => {
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
    return new lt();
  }
  static use() {
    const r = ri(lt.create).current, [t, n] = D.useState(!1);
    return r.shouldMount = t, r.setShouldMount = n, D.useEffect(r.mountEffect, [t]), r;
  }
  mount() {
    return this.mounted || (this.mounted = Ml(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function kl() {
  return lt.use();
}
function Ml() {
  let e, r;
  const t = new Promise((n, o) => {
    e = n, r = o;
  });
  return t.resolve = e, t.reject = r, t;
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, en.apply(null, arguments);
}
function Il(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function rn(e, r) {
  return rn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, rn(e, r);
}
function Nl(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, rn(e, r);
}
const wo = sr.createContext(null);
function jl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vn(e, r) {
  var t = function(i) {
    return r && Zr(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && zi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function Dl(e, r) {
  e = e || {}, r = r || {};
  function t(p) {
    return p in r ? r[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var l in r) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var f = n[l][a];
        s[n[l][a]] = t(f);
      }
    s[l] = t(l);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = t(o[a]);
  return s;
}
function cr(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function Bl(e, r) {
  return vn(e.children, function(t) {
    return et(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: cr(t, "appear", e),
      enter: cr(t, "enter", e),
      exit: cr(t, "exit", e)
    });
  });
}
function Fl(e, r, t) {
  var n = vn(e.children), o = Dl(r, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Zr(a)) {
      var s = i in r, l = i in n, f = r[i], p = Zr(f) && !f.props.in;
      l && (!s || p) ? o[i] = et(a, {
        onExited: t.bind(null, a),
        in: !0,
        exit: cr(a, "exit", e),
        enter: cr(a, "enter", e)
      }) : !l && s && !p ? o[i] = et(a, {
        in: !1
      }) : l && s && Zr(f) && (o[i] = et(a, {
        onExited: t.bind(null, a),
        in: f.props.in,
        exit: cr(a, "exit", e),
        enter: cr(a, "enter", e)
      }));
    }
  }), o;
}
var zl = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, Vl = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, Sn = /* @__PURE__ */ function(e) {
  Nl(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(jl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
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
    var a = i.children, s = i.handleExited, l = i.firstRender;
    return {
      children: l ? Bl(o, s) : Fl(o, a, s),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var a = vn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = en({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = Il(o, ["component", "childFactory"]), l = this.state.contextValue, f = zl(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ sr.createElement(wo.Provider, {
      value: l
    }, f) : /* @__PURE__ */ sr.createElement(wo.Provider, {
      value: l
    }, /* @__PURE__ */ sr.createElement(i, s, f));
  }, r;
}(sr.Component);
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: m.any,
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
  children: m.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: m.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: m.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: m.bool,
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
  childFactory: m.func
} : {};
Sn.defaultProps = Vl;
function fi(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: l,
    timeout: f
  } = e, [p, h] = D.useState(!1), g = Ae(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), E = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, C = Ae(t.child, p && t.childLeaving, n && t.childPulsate);
  return !s && !p && h(!0), D.useEffect(() => {
    if (!s && l != null) {
      const b = setTimeout(l, f);
      return () => {
        clearTimeout(b);
      };
    }
  }, [l, s, f]), /* @__PURE__ */ X.jsx("span", {
    className: g,
    style: E,
    children: /* @__PURE__ */ X.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object.isRequired,
  className: m.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: m.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: m.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: m.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: m.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: m.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: m.number,
  /**
   * exit delay
   */
  timeout: m.number.isRequired
});
const ze = lr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), tn = 550, Ll = 80, Wl = mn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ul = mn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Yl = mn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ql = We("span", {
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
}), Gl = We(fi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ze.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Wl};
    animation-duration: ${tn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ze.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ze.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ze.childLeaving} {
    opacity: 0;
    animation-name: ${Ul};
    animation-duration: ${tn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ze.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Yl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, di = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = ur({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [l, f] = D.useState([]), p = D.useRef(0), h = D.useRef(null);
  D.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const g = D.useRef(!1), E = Vc(), C = D.useRef(null), b = D.useRef(null), y = D.useCallback((x) => {
    const {
      pulsate: d,
      rippleX: k,
      rippleY: M,
      rippleSize: Z,
      cb: J
    } = x;
    f((c) => [...c, /* @__PURE__ */ X.jsx(Gl, {
      classes: {
        ripple: Ae(i.ripple, ze.ripple),
        rippleVisible: Ae(i.rippleVisible, ze.rippleVisible),
        ripplePulsate: Ae(i.ripplePulsate, ze.ripplePulsate),
        child: Ae(i.child, ze.child),
        childLeaving: Ae(i.childLeaving, ze.childLeaving),
        childPulsate: Ae(i.childPulsate, ze.childPulsate)
      },
      timeout: tn,
      pulsate: d,
      rippleX: k,
      rippleY: M,
      rippleSize: Z
    }, p.current)]), p.current += 1, h.current = J;
  }, [i]), T = D.useCallback((x = {}, d = {}, k = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: Z = o || d.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = d;
    if ((x == null ? void 0 : x.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (g.current = !0);
    const c = J ? null : b.current, _ = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, B, U;
    if (Z || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      N = Math.round(_.width / 2), B = Math.round(_.height / 2);
    else {
      const {
        clientX: oe,
        clientY: re
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      N = Math.round(oe - _.left), B = Math.round(re - _.top);
    }
    if (Z)
      U = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const oe = Math.max(Math.abs((c ? c.clientWidth : 0) - N), N) * 2 + 2, re = Math.max(Math.abs((c ? c.clientHeight : 0) - B), B) * 2 + 2;
      U = Math.sqrt(oe ** 2 + re ** 2);
    }
    x != null && x.touches ? C.current === null && (C.current = () => {
      y({
        pulsate: M,
        rippleX: N,
        rippleY: B,
        rippleSize: U,
        cb: k
      });
    }, E.start(Ll, () => {
      C.current && (C.current(), C.current = null);
    })) : y({
      pulsate: M,
      rippleX: N,
      rippleY: B,
      rippleSize: U,
      cb: k
    });
  }, [o, y, E]), P = D.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), w = D.useCallback((x, d) => {
    if (E.clear(), (x == null ? void 0 : x.type) === "touchend" && C.current) {
      C.current(), C.current = null, E.start(0, () => {
        w(x, d);
      });
      return;
    }
    C.current = null, f((k) => k.length > 0 ? k.slice(1) : k), h.current = d;
  }, [E]);
  return D.useImperativeHandle(t, () => ({
    pulsate: P,
    start: T,
    stop: w
  }), [P, T, w]), /* @__PURE__ */ X.jsx(ql, {
    className: Ae(ze.root, i.root, a),
    ref: b,
    ...s,
    children: /* @__PURE__ */ X.jsx(Sn, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (di.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: m.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string
});
function Hl(e) {
  return nr("MuiButtonBase", e);
}
const Kl = lr("MuiButtonBase", ["root", "disabled", "focusVisible"]), Xl = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, a = wr({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, Hl, o);
  return t && n && (a.root += ` ${n}`), a;
}, Jl = We("button", {
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
  [`&.${Kl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Cn = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = ur({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: f = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: E,
    LinkComponent: C = "a",
    onBlur: b,
    onClick: y,
    onContextMenu: T,
    onDragLeave: P,
    onFocus: w,
    onFocusVisible: x,
    onKeyDown: d,
    onKeyUp: k,
    onMouseDown: M,
    onMouseLeave: Z,
    onMouseUp: J,
    onTouchEnd: c,
    onTouchMove: _,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: U,
    touchRippleRef: oe,
    type: re,
    ...ye
  } = n, be = D.useRef(null), xe = kl(), R = mo(xe.ref, oe), [O, F] = D.useState(!1);
  f && O && F(!1), D.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), be.current.focus();
    }
  }), []);
  const W = xe.shouldMount && !p && !f;
  D.useEffect(() => {
    O && g && !p && xe.pulsate();
  }, [p, g, O, xe]);
  function j(G, qr, Gr = h) {
    return Qr((Or) => (qr && qr(Or), Gr || xe[G](Or), !0));
  }
  const H = j("start", M), z = j("stop", T), V = j("stop", P), Y = j("stop", J), K = j("stop", (G) => {
    O && G.preventDefault(), Z && Z(G);
  }), q = j("start", N), ve = j("stop", c), v = j("stop", _), we = j("stop", (G) => {
    go(G.target) || F(!1), b && b(G);
  }, !1), I = Qr((G) => {
    be.current || (be.current = G.currentTarget), go(G.target) && (F(!0), x && x(G)), w && w(G);
  }), Oe = () => {
    const G = be.current;
    return l && l !== "button" && !(G.tagName === "A" && G.href);
  }, Be = Qr((G) => {
    g && !G.repeat && O && G.key === " " && xe.stop(G, () => {
      xe.start(G);
    }), G.target === G.currentTarget && Oe() && G.key === " " && G.preventDefault(), d && d(G), G.target === G.currentTarget && Oe() && G.key === "Enter" && !f && (G.preventDefault(), y && y(G));
  }), or = Qr((G) => {
    g && G.key === " " && O && !G.defaultPrevented && xe.stop(G, () => {
      xe.pulsate(G);
    }), k && k(G), y && G.target === G.currentTarget && Oe() && G.key === " " && !G.defaultPrevented && y(G);
  });
  let ir = l;
  ir === "button" && (ye.href || ye.to) && (ir = C);
  const Ue = {};
  ir === "button" ? (Ue.type = re === void 0 ? "button" : re, Ue.disabled = f) : (!ye.href && !ye.to && (Ue.role = "button"), f && (Ue["aria-disabled"] = f));
  const wt = mo(t, be), Yr = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: f,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: g,
    tabIndex: B,
    focusVisible: O
  }, $r = Xl(Yr);
  return /* @__PURE__ */ X.jsxs(Jl, {
    as: ir,
    className: Ae($r.root, s),
    ownerState: Yr,
    onBlur: we,
    onClick: y,
    onContextMenu: z,
    onFocus: I,
    onKeyDown: Be,
    onKeyUp: or,
    onMouseDown: H,
    onMouseLeave: K,
    onMouseUp: Y,
    onDragLeave: V,
    onTouchEnd: ve,
    onTouchMove: v,
    onTouchStart: q,
    ref: wt,
    tabIndex: f ? -1 : B,
    type: re,
    ...Ue,
    ...ye,
    children: [a, W ? /* @__PURE__ */ X.jsx(di, {
      ref: R,
      center: i,
      ...U
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Cn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: m.bool,
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: jc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: m.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: m.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: m.string,
  /**
   * @ignore
   */
  href: m.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: m.elementType,
  /**
   * @ignore
   */
  onBlur: m.func,
  /**
   * @ignore
   */
  onClick: m.func,
  /**
   * @ignore
   */
  onContextMenu: m.func,
  /**
   * @ignore
   */
  onDragLeave: m.func,
  /**
   * @ignore
   */
  onFocus: m.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: m.func,
  /**
   * @ignore
   */
  onKeyDown: m.func,
  /**
   * @ignore
   */
  onKeyUp: m.func,
  /**
   * @ignore
   */
  onMouseDown: m.func,
  /**
   * @ignore
   */
  onMouseLeave: m.func,
  /**
   * @ignore
   */
  onMouseUp: m.func,
  /**
   * @ignore
   */
  onTouchEnd: m.func,
  /**
   * @ignore
   */
  onTouchMove: m.func,
  /**
   * @ignore
   */
  onTouchStart: m.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @default 0
   */
  tabIndex: m.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: m.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: m.oneOfType([m.func, m.shape({
    current: m.shape({
      pulsate: m.func.isRequired,
      start: m.func.isRequired,
      stop: m.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string])
});
function Ql(e) {
  return typeof e.main == "string";
}
function Zl(e, r = []) {
  if (!Ql(e))
    return !1;
  for (const t of r)
    if (!e.hasOwnProperty(t) || typeof e[t] != "string")
      return !1;
  return !0;
}
function nn(e = []) {
  return ([, r]) => r && Zl(r, e);
}
function eu(e) {
  return nr("MuiButton", e);
}
const vr = lr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), pi = /* @__PURE__ */ D.createContext({});
process.env.NODE_ENV !== "production" && (pi.displayName = "ButtonGroupContext");
const mi = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (mi.displayName = "ButtonGroupButtonContext");
const ru = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${ge(r)}`, `size${ge(o)}`, `${i}Size${ge(o)}`, `color${ge(r)}`, t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ge(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ge(o)}`]
  }, l = wr(s, eu, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, hi = [{
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
}], tu = We(Cn, {
  shouldForwardProp: (e) => Ao(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${ge(t.color)}`], r[`size${ge(t.size)}`], r[`${t.variant}Size${ge(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(Tr(({
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
    [`&.${vr.disabled}`]: {
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
        [`&.${vr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${vr.disabled}`]: {
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
        [`&.${vr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(nn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : He(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${vr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${vr.disabled}`]: {
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
})), nu = We("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${ge(t.size)}`]];
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
  }, ...hi]
}), ou = We("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${ge(t.size)}`]];
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
  }, ...hi]
}), xn = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = D.useContext(pi), o = D.useContext(mi), i = it(n, r), a = ur({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: f = "button",
    className: p,
    disabled: h = !1,
    disableElevation: g = !1,
    disableFocusRipple: E = !1,
    endIcon: C,
    focusVisibleClassName: b,
    fullWidth: y = !1,
    size: T = "medium",
    startIcon: P,
    type: w,
    variant: x = "text",
    ...d
  } = a, k = {
    ...a,
    color: l,
    component: f,
    disabled: h,
    disableElevation: g,
    disableFocusRipple: E,
    fullWidth: y,
    size: T,
    type: w,
    variant: x
  }, M = ru(k), Z = P && /* @__PURE__ */ X.jsx(nu, {
    className: M.startIcon,
    ownerState: k,
    children: P
  }), J = C && /* @__PURE__ */ X.jsx(ou, {
    className: M.endIcon,
    ownerState: k,
    children: C
  }), c = o || "";
  return /* @__PURE__ */ X.jsxs(tu, {
    ownerState: k,
    className: Ae(n.className, M.root, p, c),
    component: f,
    disabled: h,
    focusRipple: !E,
    focusVisibleClassName: Ae(M.focusVisible, b),
    ref: t,
    type: w,
    ...d,
    classes: M,
    children: [Z, s, J]
  });
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: m.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * Element placed after the children.
   */
  endIcon: m.node,
  /**
   * @ignore
   */
  focusVisibleClassName: m.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: m.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: m.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: m.oneOfType([m.oneOf(["small", "medium", "large"]), m.string]),
  /**
   * Element placed before the children.
   */
  startIcon: m.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: m.oneOfType([m.oneOf(["contained", "outlined", "text"]), m.string])
});
function Ru(e) {
  const { bgcolor: r, text: t, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      xn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: r, color: n },
        children: t
      }
    )
  );
}
function iu(e) {
  return nr("MuiIconButton", e);
}
const au = lr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), su = (e) => {
  const {
    classes: r,
    disabled: t,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", t && "disabled", n !== "default" && `color${ge(n)}`, o && `edge${ge(o)}`, `size${ge(i)}`]
  };
  return wr(a, iu, r);
}, cu = We(Cn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "default" && r[`color${ge(t.color)}`], t.edge && r[`edge${ge(t.edge)}`], r[`size${ge(t.size)}`]];
  }
})(Tr(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Tr(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(nn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (e.vars || e).palette[r].main
    }
  })), ...Object.entries(e.palette).filter(nn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He((e.vars || e).palette[r].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${au.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), En = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = ur({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: l = !1,
    disableFocusRipple: f = !1,
    size: p = "medium",
    ...h
  } = n, g = {
    ...n,
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: f,
    size: p
  }, E = su(g);
  return /* @__PURE__ */ X.jsx(cu, {
    className: Ae(E.root, a),
    centerRipple: !0,
    focusRipple: !f,
    disabled: l,
    ref: t,
    ...h,
    ownerState: g,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: gn(m.node, (e) => D.Children.toArray(e.children).some((t) => /* @__PURE__ */ D.isValidElement(t) && t.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: m.oneOfType([m.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), m.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: m.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: m.oneOfType([m.oneOf(["small", "medium", "large"]), m.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
function lu(e) {
  return nr("MuiSvgIcon", e);
}
lr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const uu = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${ge(r)}`, `fontSize${ge(t)}`]
  };
  return wr(o, lu, n);
}, fu = We("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${ge(t.color)}`], r[`fontSize${ge(t.fontSize)}`]];
  }
})(Tr(({
  theme: e
}) => {
  var r, t, n, o, i, a, s, l, f, p, h, g, E, C;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (r = e.transitions) == null ? void 0 : r.create) == null ? void 0 : o.call(r, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (b) => !b.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : l.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : p.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, b]) => b && b.main).map(([b]) => {
        var y, T;
        return {
          props: {
            color: b
          },
          style: {
            color: (T = (y = (e.vars ?? e).palette) == null ? void 0 : y[b]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (C = (E = (e.vars ?? e).palette) == null ? void 0 : E.action) == null ? void 0 : C.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Vr = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = ur({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: f,
    inheritViewBox: p = !1,
    titleAccess: h,
    viewBox: g = "0 0 24 24",
    ...E
  } = n, C = /* @__PURE__ */ D.isValidElement(o) && o.type === "svg", b = {
    ...n,
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: r.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: C
  }, y = {};
  p || (y.viewBox = g);
  const T = uu(b);
  return /* @__PURE__ */ X.jsxs(fu, {
    as: s,
    className: Ae(T.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: t,
    ...y,
    ...E,
    ...C && o.props,
    ownerState: b,
    children: [C ? o.props.children : o, h ? /* @__PURE__ */ X.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Vr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: m.oneOfType([m.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: m.oneOfType([m.oneOf(["inherit", "large", "medium", "small"]), m.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: m.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: m.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: m.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: m.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: m.string
});
Vr && (Vr.muiName = "SvgIcon");
function Tt(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ X.jsx(Vr, {
      "data-testid": `${r}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = Vr.muiName, /* @__PURE__ */ D.memo(/* @__PURE__ */ D.forwardRef(t));
}
const du = Tt(/* @__PURE__ */ X.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function $u(e) {
  const {
    color: r,
    disabled: t,
    onClick: n
  } = e;
  return (
    //Uso el IconButton de la libreria MUI y lo personalizo con las props que pasan a mi componente
    /* @__PURE__ */ X.jsx(
      En,
      {
        onClick: n,
        disabled: t,
        color: r,
        children: /* @__PURE__ */ X.jsx(du, {})
      }
    )
  );
}
function Ou(e) {
  const {
    bordercolor: r,
    borderwidth: t,
    hoverbgcolor: n,
    hovertxtcolor: o,
    bgcolor: i,
    text: a,
    txtcolor: s,
    disabled: l,
    onClick: f,
    size: p
  } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      xn,
      {
        type: "button",
        onClick: f,
        disabled: l,
        size: p,
        sx: {
          backgroundColor: i,
          color: s,
          borderColor: r,
          borderWidth: t,
          ":hover": {
            backgroundColor: n,
            color: o
          }
        },
        children: a
      }
    )
  );
}
const pu = Tt(/* @__PURE__ */ X.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function _u(e) {
  const {
    color: r,
    disabled: t,
    onClick: n
  } = e;
  return (
    //Uso el IconButton de la libreria MUI y lo personalizo con las props que pasan a mi componente
    /* @__PURE__ */ X.jsx(
      En,
      {
        onClick: n,
        disabled: t,
        color: r,
        children: /* @__PURE__ */ X.jsx(pu, {})
      }
    )
  );
}
function mu(e) {
  return nr("MuiPaper", e);
}
lr("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const hu = (e) => {
  const {
    square: r,
    elevation: t,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !r && "rounded", n === "elevation" && `elevation${t}`]
  };
  return wr(i, mu, o);
}, gu = We("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], !t.square && r.rounded, t.variant === "elevation" && r[`elevation${t.elevation}`]];
  }
})(Tr(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), gi = /* @__PURE__ */ D.forwardRef(function(r, t) {
  var E;
  const n = ur({
    props: r,
    name: "MuiPaper"
  }), o = Al(), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: l = !1,
    variant: f = "elevation",
    ...p
  } = n, h = {
    ...n,
    component: a,
    elevation: s,
    square: l,
    variant: f
  }, g = hu(h);
  return process.env.NODE_ENV !== "production" && o.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ X.jsx(gu, {
    as: a,
    ownerState: h,
    className: Ae(g.root, i),
    ref: t,
    ...p,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[s],
        ...o.vars && {
          "--Paper-overlay": (E = o.vars.overlays) == null ? void 0 : E[s]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${He("#fff", Zt(s))}, ${He("#fff", Zt(s))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: gn(Wc, (e) => {
    const {
      elevation: r,
      variant: t
    } = e;
    return r > 0 && t === "outlined" ? new Error(`MUI: Combining \`elevation={${r}}\` with \`variant="${t}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: m.bool,
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: m.oneOfType([m.oneOf(["elevation", "outlined"]), m.string])
});
function yu(e) {
  return nr("MuiSnackbarContent", e);
}
lr("MuiSnackbarContent", ["root", "message", "action"]);
const bu = (e) => {
  const {
    classes: r
  } = e;
  return wr({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, yu, r);
}, vu = We(gi, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})(Tr(({
  theme: e
}) => {
  const r = e.palette.mode === "light" ? 0.8 : 0.98, t = Po(e.palette.background.default, r);
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(t),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : t,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
})), Su = We("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (e, r) => r.message
})({
  padding: "8px 0"
}), Cu = We("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (e, r) => r.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), yi = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = ur({
    props: r,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: a,
    role: s = "alert",
    ...l
  } = n, f = n, p = bu(f);
  return /* @__PURE__ */ X.jsxs(vu, {
    role: s,
    square: !0,
    elevation: 6,
    className: Ae(p.root, i),
    ownerState: f,
    ref: t,
    ...l,
    children: [/* @__PURE__ */ X.jsx(Su, {
      className: p.message,
      ownerState: f,
      children: a
    }), o ? /* @__PURE__ */ X.jsx(Cu, {
      className: p.action,
      ownerState: f,
      children: o
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The message to display.
   */
  message: m.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: m.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
const xu = Tt([/* @__PURE__ */ X.jsx("circle", {
  cx: "15.5",
  cy: "9.5",
  r: "1.5"
}, "0"), /* @__PURE__ */ X.jsx("circle", {
  cx: "8.5",
  cy: "9.5",
  r: "1.5"
}, "1"), /* @__PURE__ */ X.jsx("circle", {
  cx: "15.5",
  cy: "9.5",
  r: "1.5"
}, "2"), /* @__PURE__ */ X.jsx("circle", {
  cx: "8.5",
  cy: "9.5",
  r: "1.5"
}, "3"), /* @__PURE__ */ X.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5"
}, "4")], "SentimentSatisfiedAlt"), Eu = Tt([/* @__PURE__ */ X.jsx("circle", {
  cx: "15.5",
  cy: "9.5",
  r: "1.5"
}, "0"), /* @__PURE__ */ X.jsx("circle", {
  cx: "8.5",
  cy: "9.5",
  r: "1.5"
}, "1"), /* @__PURE__ */ X.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5"
}, "2")], "SentimentVeryDissatisfied");
function Pu(e) {
  const {
    message: r,
    messagecolor: t,
    color: n,
    icon: o
  } = e;
  return (
    //Uso un Snackbar de la libreria MUI y lo personalizo
    /* @__PURE__ */ X.jsx(
      yi,
      {
        message: /* @__PURE__ */ X.jsxs("span", { style: { display: "flex", alignItems: "center", color: t }, children: [
          r,
          o === "happy" ? /* @__PURE__ */ X.jsx(xu, { style: { marginLeft: 4 } }) : /* @__PURE__ */ X.jsx(Eu, { style: { marginLeft: 4 } })
        ] }),
        style: {
          backgroundColor: n
        }
      }
    )
  );
}
export {
  Pu as AlondraHS,
  Ru as CustomButton,
  Ou as MyButton,
  $u as MyFavourite,
  _u as MyFavouriteBorder
};
//# sourceMappingURL=index.es.js.map
