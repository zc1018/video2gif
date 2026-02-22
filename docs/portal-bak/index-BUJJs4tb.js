(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) r(m);
  new MutationObserver((m) => {
    for (const v of m)
      if (v.type === "childList")
        for (const S of v.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && r(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(m) {
    const v = {};
    return (
      m.integrity && (v.integrity = m.integrity),
      m.referrerPolicy && (v.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : m.crossOrigin === "anonymous"
          ? (v.credentials = "omit")
          : (v.credentials = "same-origin"),
      v
    );
  }
  function r(m) {
    if (m.ep) return;
    m.ep = !0;
    const v = d(m);
    fetch(m.href, v);
  }
})();
var Cs = { exports: {} },
  Dn = {};
var Fd;
function tv() {
  if (Fd) return Dn;
  Fd = 1;
  var s = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");
  function d(r, m, v) {
    var S = null;
    if (
      (v !== void 0 && (S = "" + v),
        m.key !== void 0 && (S = "" + m.key),
        "key" in m)
    ) {
      v = {};
      for (var z in m) z !== "key" && (v[z] = m[z]);
    } else v = m;
    return (
      (m = v.ref),
      { $$typeof: s, type: r, key: S, ref: m !== void 0 ? m : null, props: v }
    );
  }
  return ((Dn.Fragment = f), (Dn.jsx = d), (Dn.jsxs = d), Dn);
}
var Id;
function lv() {
  return (Id || ((Id = 1), (Cs.exports = tv())), Cs.exports);
}
var i = lv(),
  Rs = { exports: {} },
  F = {};
var Pd;
function av() {
  if (Pd) return F;
  Pd = 1;
  var s = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    A = Symbol.for("react.activity"),
    w = Symbol.iterator;
  function L(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (w && g[w]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var X = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { },
  },
    Y = Object.assign,
    q = {};
  function J(g, U, B) {
    ((this.props = g),
      (this.context = U),
      (this.refs = q),
      (this.updater = B || X));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (g, U) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, g, U, "setState");
    }),
    (J.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    }));
  function Q() { }
  Q.prototype = J.prototype;
  function W(g, U, B) {
    ((this.props = g),
      (this.context = U),
      (this.refs = q),
      (this.updater = B || X));
  }
  var Se = (W.prototype = new Q());
  ((Se.constructor = W), Y(Se, J.prototype), (Se.isPureReactComponent = !0));
  var be = Array.isArray;
  function ze() { }
  var I = { H: null, A: null, T: null, S: null },
    Ce = Object.prototype.hasOwnProperty;
  function Ye(g, U, B) {
    var Z = B.ref;
    return {
      $$typeof: s,
      type: g,
      key: U,
      ref: Z !== void 0 ? Z : null,
      props: B,
    };
  }
  function mt(g, U) {
    return Ye(g.type, U, g.props);
  }
  function Rt(g) {
    return typeof g == "object" && g !== null && g.$$typeof === s;
  }
  function We(g) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (B) {
        return U[B];
      })
    );
  }
  var Rl = /\/+/g;
  function Bt(g, U) {
    return typeof g == "object" && g !== null && g.key != null
      ? We("" + g.key)
      : U.toString(36);
  }
  function zt(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (
        (typeof g.status == "string"
          ? g.then(ze, ze)
          : ((g.status = "pending"),
            g.then(
              function (U) {
                g.status === "pending" &&
                  ((g.status = "fulfilled"), (g.value = U));
              },
              function (U) {
                g.status === "pending" &&
                  ((g.status = "rejected"), (g.reason = U));
              },
            )),
          g.status)
        ) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function _(g, U, B, Z, P) {
    var le = typeof g;
    (le === "undefined" || le === "boolean") && (g = null);
    var oe = !1;
    if (g === null) oe = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case s:
            case f:
              oe = !0;
              break;
            case M:
              return ((oe = g._init), _(oe(g._payload), U, B, Z, P));
          }
      }
    if (oe)
      return (
        (P = P(g)),
        (oe = Z === "" ? "." + Bt(g, 0) : Z),
        be(P)
          ? ((B = ""),
            oe != null && (B = oe.replace(Rl, "$&/") + "/"),
            _(P, U, B, "", function (qa) {
              return qa;
            }))
          : P != null &&
          (Rt(P) &&
            (P = mt(
              P,
              B +
              (P.key == null || (g && g.key === P.key)
                ? ""
                : ("" + P.key).replace(Rl, "$&/") + "/") +
              oe,
            )),
            U.push(P)),
        1
      );
    oe = 0;
    var Je = Z === "" ? "." : Z + ":";
    if (be(g))
      for (var Re = 0; Re < g.length; Re++)
        ((Z = g[Re]), (le = Je + Bt(Z, Re)), (oe += _(Z, U, B, le, P)));
    else if (((Re = L(g)), typeof Re == "function"))
      for (g = Re.call(g), Re = 0; !(Z = g.next()).done;)
        ((Z = Z.value), (le = Je + Bt(Z, Re++)), (oe += _(Z, U, B, le, P)));
    else if (le === "object") {
      if (typeof g.then == "function") return _(zt(g), U, B, Z, P);
      throw (
        (U = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
          (U === "[object Object]"
            ? "object with keys {" + Object.keys(g).join(", ") + "}"
            : U) +
          "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return oe;
  }
  function H(g, U, B) {
    if (g == null) return g;
    var Z = [],
      P = 0;
    return (
      _(g, Z, "", "", function (le) {
        return U.call(B, le, P++);
      }),
      Z
    );
  }
  function $(g) {
    if (g._status === -1) {
      var U = g._result;
      ((U = U()),
        U.then(
          function (B) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = B));
          },
          function (B) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = B));
          },
        ),
        g._status === -1 && ((g._status = 0), (g._result = U)));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var me =
    typeof reportError == "function"
      ? reportError
      : function (g) {
        if (
          typeof window == "object" &&
          typeof window.ErrorEvent == "function"
        ) {
          var U = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof g == "object" &&
                g !== null &&
                typeof g.message == "string"
                ? String(g.message)
                : String(g),
            error: g,
          });
          if (!window.dispatchEvent(U)) return;
        } else if (
          typeof process == "object" &&
          typeof process.emit == "function"
        ) {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      },
    ge = {
      map: H,
      forEach: function (g, U, B) {
        H(
          g,
          function () {
            U.apply(this, arguments);
          },
          B,
        );
      },
      count: function (g) {
        var U = 0;
        return (
          H(g, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (g) {
        return (
          H(g, function (U) {
            return U;
          }) || []
        );
      },
      only: function (g) {
        if (!Rt(g))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return g;
      },
    };
  return (
    (F.Activity = A),
    (F.Children = ge),
    (F.Component = J),
    (F.Fragment = d),
    (F.Profiler = m),
    (F.PureComponent = W),
    (F.StrictMode = r),
    (F.Suspense = p),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return I.H.useMemoCache(g);
      },
    }),
    (F.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (g, U, B) {
      if (g == null)
        throw Error(
          "The argument must be a React element, but you passed " + g + ".",
        );
      var Z = Y({}, g.props),
        P = g.key;
      if (U != null)
        for (le in (U.key !== void 0 && (P = "" + U.key), U))
          !Ce.call(U, le) ||
            le === "key" ||
            le === "__self" ||
            le === "__source" ||
            (le === "ref" && U.ref === void 0) ||
            (Z[le] = U[le]);
      var le = arguments.length - 2;
      if (le === 1) Z.children = B;
      else if (1 < le) {
        for (var oe = Array(le), Je = 0; Je < le; Je++)
          oe[Je] = arguments[Je + 2];
        Z.children = oe;
      }
      return Ye(g.type, P, Z);
    }),
    (F.createContext = function (g) {
      return (
        (g = {
          $$typeof: S,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: v, _context: g }),
        g
      );
    }),
    (F.createElement = function (g, U, B) {
      var Z,
        P = {},
        le = null;
      if (U != null)
        for (Z in (U.key !== void 0 && (le = "" + U.key), U))
          Ce.call(U, Z) &&
            Z !== "key" &&
            Z !== "__self" &&
            Z !== "__source" &&
            (P[Z] = U[Z]);
      var oe = arguments.length - 2;
      if (oe === 1) P.children = B;
      else if (1 < oe) {
        for (var Je = Array(oe), Re = 0; Re < oe; Re++)
          Je[Re] = arguments[Re + 2];
        P.children = Je;
      }
      if (g && g.defaultProps)
        for (Z in ((oe = g.defaultProps), oe))
          P[Z] === void 0 && (P[Z] = oe[Z]);
      return Ye(g, le, P);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (g) {
      return { $$typeof: z, render: g };
    }),
    (F.isValidElement = Rt),
    (F.lazy = function (g) {
      return { $$typeof: M, _payload: { _status: -1, _result: g }, _init: $ };
    }),
    (F.memo = function (g, U) {
      return { $$typeof: x, type: g, compare: U === void 0 ? null : U };
    }),
    (F.startTransition = function (g) {
      var U = I.T,
        B = {};
      I.T = B;
      try {
        var Z = g(),
          P = I.S;
        (P !== null && P(B, Z),
          typeof Z == "object" &&
          Z !== null &&
          typeof Z.then == "function" &&
          Z.then(ze, me));
      } catch (le) {
        me(le);
      } finally {
        (U !== null && B.types !== null && (U.types = B.types), (I.T = U));
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (F.use = function (g) {
      return I.H.use(g);
    }),
    (F.useActionState = function (g, U, B) {
      return I.H.useActionState(g, U, B);
    }),
    (F.useCallback = function (g, U) {
      return I.H.useCallback(g, U);
    }),
    (F.useContext = function (g) {
      return I.H.useContext(g);
    }),
    (F.useDebugValue = function () { }),
    (F.useDeferredValue = function (g, U) {
      return I.H.useDeferredValue(g, U);
    }),
    (F.useEffect = function (g, U) {
      return I.H.useEffect(g, U);
    }),
    (F.useEffectEvent = function (g) {
      return I.H.useEffectEvent(g);
    }),
    (F.useId = function () {
      return I.H.useId();
    }),
    (F.useImperativeHandle = function (g, U, B) {
      return I.H.useImperativeHandle(g, U, B);
    }),
    (F.useInsertionEffect = function (g, U) {
      return I.H.useInsertionEffect(g, U);
    }),
    (F.useLayoutEffect = function (g, U) {
      return I.H.useLayoutEffect(g, U);
    }),
    (F.useMemo = function (g, U) {
      return I.H.useMemo(g, U);
    }),
    (F.useOptimistic = function (g, U) {
      return I.H.useOptimistic(g, U);
    }),
    (F.useReducer = function (g, U, B) {
      return I.H.useReducer(g, U, B);
    }),
    (F.useRef = function (g) {
      return I.H.useRef(g);
    }),
    (F.useState = function (g) {
      return I.H.useState(g);
    }),
    (F.useSyncExternalStore = function (g, U, B) {
      return I.H.useSyncExternalStore(g, U, B);
    }),
    (F.useTransition = function () {
      return I.H.useTransition();
    }),
    (F.version = "19.2.4"),
    F
  );
}
var e0;
function Gs() {
  return (e0 || ((e0 = 1), (Rs.exports = av())), Rs.exports);
}
var C = Gs(),
  _s = { exports: {} },
  Un = {},
  Os = { exports: {} },
  Ds = {};
var t0;
function nv() {
  return (
    t0 ||
    ((t0 = 1),
      (function (s) {
        function f(_, H) {
          var $ = _.length;
          _.push(H);
          e: for (; 0 < $;) {
            var me = ($ - 1) >>> 1,
              ge = _[me];
            if (0 < m(ge, H)) ((_[me] = H), (_[$] = ge), ($ = me));
            else break e;
          }
        }
        function d(_) {
          return _.length === 0 ? null : _[0];
        }
        function r(_) {
          if (_.length === 0) return null;
          var H = _[0],
            $ = _.pop();
          if ($ !== H) {
            _[0] = $;
            e: for (var me = 0, ge = _.length, g = ge >>> 1; me < g;) {
              var U = 2 * (me + 1) - 1,
                B = _[U],
                Z = U + 1,
                P = _[Z];
              if (0 > m(B, $))
                Z < ge && 0 > m(P, B)
                  ? ((_[me] = P), (_[Z] = $), (me = Z))
                  : ((_[me] = B), (_[U] = $), (me = U));
              else if (Z < ge && 0 > m(P, $))
                ((_[me] = P), (_[Z] = $), (me = Z));
              else break e;
            }
          }
          return H;
        }
        function m(_, H) {
          var $ = _.sortIndex - H.sortIndex;
          return $ !== 0 ? $ : _.id - H.id;
        }
        if (
          ((s.unstable_now = void 0),
            typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          s.unstable_now = function () {
            return v.now();
          };
        } else {
          var S = Date,
            z = S.now();
          s.unstable_now = function () {
            return S.now() - z;
          };
        }
        var p = [],
          x = [],
          M = 1,
          A = null,
          w = 3,
          L = !1,
          X = !1,
          Y = !1,
          q = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        function Se(_) {
          for (var H = d(x); H !== null;) {
            if (H.callback === null) r(x);
            else if (H.startTime <= _)
              (r(x), (H.sortIndex = H.expirationTime), f(p, H));
            else break;
            H = d(x);
          }
        }
        function be(_) {
          if (((Y = !1), Se(_), !X))
            if (d(p) !== null) ((X = !0), ze || ((ze = !0), We()));
            else {
              var H = d(x);
              H !== null && zt(be, H.startTime - _);
            }
        }
        var ze = !1,
          I = -1,
          Ce = 5,
          Ye = -1;
        function mt() {
          return q ? !0 : !(s.unstable_now() - Ye < Ce);
        }
        function Rt() {
          if (((q = !1), ze)) {
            var _ = s.unstable_now();
            Ye = _;
            var H = !0;
            try {
              e: {
                ((X = !1), Y && ((Y = !1), Q(I), (I = -1)), (L = !0));
                var $ = w;
                try {
                  t: {
                    for (
                      Se(_), A = d(p);
                      A !== null && !(A.expirationTime > _ && mt());
                    ) {
                      var me = A.callback;
                      if (typeof me == "function") {
                        ((A.callback = null), (w = A.priorityLevel));
                        var ge = me(A.expirationTime <= _);
                        if (((_ = s.unstable_now()), typeof ge == "function")) {
                          ((A.callback = ge), Se(_), (H = !0));
                          break t;
                        }
                        (A === d(p) && r(p), Se(_));
                      } else r(p);
                      A = d(p);
                    }
                    if (A !== null) H = !0;
                    else {
                      var g = d(x);
                      (g !== null && zt(be, g.startTime - _), (H = !1));
                    }
                  }
                  break e;
                } finally {
                  ((A = null), (w = $), (L = !1));
                }
                H = void 0;
              }
            } finally {
              H ? We() : (ze = !1);
            }
          }
        }
        var We;
        if (typeof W == "function")
          We = function () {
            W(Rt);
          };
        else if (typeof MessageChannel < "u") {
          var Rl = new MessageChannel(),
            Bt = Rl.port2;
          ((Rl.port1.onmessage = Rt),
            (We = function () {
              Bt.postMessage(null);
            }));
        } else
          We = function () {
            J(Rt, 0);
          };
        function zt(_, H) {
          I = J(function () {
            _(s.unstable_now());
          }, H);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (s.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
              : (Ce = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (s.unstable_next = function (_) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = w;
            }
            var $ = w;
            w = H;
            try {
              return _();
            } finally {
              w = $;
            }
          }),
          (s.unstable_requestPaint = function () {
            q = !0;
          }),
          (s.unstable_runWithPriority = function (_, H) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var $ = w;
            w = _;
            try {
              return H();
            } finally {
              w = $;
            }
          }),
          (s.unstable_scheduleCallback = function (_, H, $) {
            var me = s.unstable_now();
            switch (
            (typeof $ == "object" && $ !== null
              ? (($ = $.delay),
                ($ = typeof $ == "number" && 0 < $ ? me + $ : me))
              : ($ = me),
              _)
            ) {
              case 1:
                var ge = -1;
                break;
              case 2:
                ge = 250;
                break;
              case 5:
                ge = 1073741823;
                break;
              case 4:
                ge = 1e4;
                break;
              default:
                ge = 5e3;
            }
            return (
              (ge = $ + ge),
              (_ = {
                id: M++,
                callback: H,
                priorityLevel: _,
                startTime: $,
                expirationTime: ge,
                sortIndex: -1,
              }),
              $ > me
                ? ((_.sortIndex = $),
                  f(x, _),
                  d(p) === null &&
                  _ === d(x) &&
                  (Y ? (Q(I), (I = -1)) : (Y = !0), zt(be, $ - me)))
                : ((_.sortIndex = ge),
                  f(p, _),
                  X || L || ((X = !0), ze || ((ze = !0), We()))),
              _
            );
          }),
          (s.unstable_shouldYield = mt),
          (s.unstable_wrapCallback = function (_) {
            var H = w;
            return function () {
              var $ = w;
              w = H;
              try {
                return _.apply(this, arguments);
              } finally {
                w = $;
              }
            };
          }));
      })(Ds)),
    Ds
  );
}
var l0;
function uv() {
  return (l0 || ((l0 = 1), (Os.exports = nv())), Os.exports);
}
var Us = { exports: {} },
  Ke = {};
var a0;
function iv() {
  if (a0) return Ke;
  a0 = 1;
  var s = Gs();
  function f(p) {
    var x = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        x += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      x +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d() { }
  var r = {
    d: {
      f: d,
      r: function () {
        throw Error(f(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d,
    },
    p: 0,
    findDOMNode: null,
  },
    m = Symbol.for("react.portal");
  function v(p, x, M) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: A == null ? null : "" + A,
      children: p,
      containerInfo: x,
      implementation: M,
    };
  }
  var S = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(p, x) {
    if (p === "font") return "";
    if (typeof x == "string") return x === "use-credentials" ? x : "";
  }
  return (
    (Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Ke.createPortal = function (p, x) {
      var M =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(f(299));
      return v(p, x, null, M);
    }),
    (Ke.flushSync = function (p) {
      var x = S.T,
        M = r.p;
      try {
        if (((S.T = null), (r.p = 2), p)) return p();
      } finally {
        ((S.T = x), (r.p = M), r.d.f());
      }
    }),
    (Ke.preconnect = function (p, x) {
      typeof p == "string" &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == "string"
                ? x === "use-credentials"
                  ? x
                  : ""
                : void 0))
          : (x = null),
          r.d.C(p, x));
    }),
    (Ke.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (Ke.preinit = function (p, x) {
      if (typeof p == "string" && x && typeof x.as == "string") {
        var M = x.as,
          A = z(M, x.crossOrigin),
          w = typeof x.integrity == "string" ? x.integrity : void 0,
          L = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
        M === "style"
          ? r.d.S(p, typeof x.precedence == "string" ? x.precedence : void 0, {
            crossOrigin: A,
            integrity: w,
            fetchPriority: L,
          })
          : M === "script" &&
          r.d.X(p, {
            crossOrigin: A,
            integrity: w,
            fetchPriority: L,
            nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          });
      }
    }),
    (Ke.preinitModule = function (p, x) {
      if (typeof p == "string")
        if (typeof x == "object" && x !== null) {
          if (x.as == null || x.as === "script") {
            var M = z(x.as, x.crossOrigin);
            r.d.M(p, {
              crossOrigin: M,
              integrity: typeof x.integrity == "string" ? x.integrity : void 0,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
          }
        } else x == null && r.d.M(p);
    }),
    (Ke.preload = function (p, x) {
      if (
        typeof p == "string" &&
        typeof x == "object" &&
        x !== null &&
        typeof x.as == "string"
      ) {
        var M = x.as,
          A = z(M, x.crossOrigin);
        r.d.L(p, M, {
          crossOrigin: A,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          type: typeof x.type == "string" ? x.type : void 0,
          fetchPriority:
            typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          referrerPolicy:
            typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
          imageSrcSet:
            typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
          media: typeof x.media == "string" ? x.media : void 0,
        });
      }
    }),
    (Ke.preloadModule = function (p, x) {
      if (typeof p == "string")
        if (x) {
          var M = z(x.as, x.crossOrigin);
          r.d.m(p, {
            as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
            crossOrigin: M,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (Ke.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (Ke.unstable_batchedUpdates = function (p, x) {
      return p(x);
    }),
    (Ke.useFormState = function (p, x, M) {
      return S.H.useFormState(p, x, M);
    }),
    (Ke.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (Ke.version = "19.2.4"),
    Ke
  );
}
var n0;
function cv() {
  if (n0) return Us.exports;
  n0 = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
  }
  return (s(), (Us.exports = iv()), Us.exports);
}
var u0;
function sv() {
  if (u0) return Un;
  u0 = 1;
  var s = uv(),
    f = Gs(),
    d = cv();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function m(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function v(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function S(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function z(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (v(e) !== e) throw Error(r(188));
  }
  function x(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = v(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ;) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === l) return (p(n), e);
          if (u === a) return (p(n), t);
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var c = !1, o = n.child; o;) {
          if (o === l) {
            ((c = !0), (l = n), (a = u));
            break;
          }
          if (o === a) {
            ((c = !0), (a = n), (l = u));
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = u.child; o;) {
            if (o === l) {
              ((c = !0), (l = u), (a = n));
              break;
            }
            if (o === a) {
              ((c = !0), (a = u), (l = n));
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function M(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = M(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign,
    w = Symbol.for("react.element"),
    L = Symbol.for("react.transitional.element"),
    X = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    J = Symbol.for("react.profiler"),
    Q = Symbol.for("react.consumer"),
    W = Symbol.for("react.context"),
    Se = Symbol.for("react.forward_ref"),
    be = Symbol.for("react.suspense"),
    ze = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Ce = Symbol.for("react.lazy"),
    Ye = Symbol.for("react.activity"),
    mt = Symbol.for("react.memo_cache_sentinel"),
    Rt = Symbol.iterator;
  function We(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Rt && e[Rt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Rl = Symbol.for("react.client.reference");
  function Bt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Rl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Y:
        return "Fragment";
      case J:
        return "Profiler";
      case q:
        return "StrictMode";
      case be:
        return "Suspense";
      case ze:
        return "SuspenseList";
      case Ye:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case X:
          return "Portal";
        case W:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case Se:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
            ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case I:
          return (
            (t = e.displayName || null),
            t !== null ? t : Bt(e.type) || "Memo"
          );
        case Ce:
          ((t = e._payload), (e = e._init));
          try {
            return Bt(e(t));
          } catch { }
      }
    return null;
  }
  var zt = Array.isArray,
    _ = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    me = [],
    ge = -1;
  function g(e) {
    return { current: e };
  }
  function U(e) {
    0 > ge || ((e.current = me[ge]), (me[ge] = null), ge--);
  }
  function B(e, t) {
    (ge++, (me[ge] = e.current), (e.current = t));
  }
  var Z = g(null),
    P = g(null),
    le = g(null),
    oe = g(null);
  function Je(e, t) {
    switch ((B(le, t), B(P, e), B(Z, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? bd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = bd(t)), (e = Sd(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (U(Z), B(Z, e));
  }
  function Re() {
    (U(Z), U(P), U(le));
  }
  function qa(e) {
    e.memoizedState !== null && B(oe, e);
    var t = Z.current,
      l = Sd(t, e.type);
    t !== l && (B(P, e), B(Z, l));
  }
  function Gn(e) {
    (P.current === e && (U(Z), U(P)),
      oe.current === e && (U(oe), (Cn._currentValue = $)));
  }
  var oi, ks;
  function _l(e) {
    if (oi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((oi = (t && t[1]) || ""),
          (ks =
            -1 <
              l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      oi +
      e +
      ks
    );
  }
  var di = !1;
  function hi(e, t) {
    if (!e || di) return "";
    di = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                  typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (T) {
                  var E = T;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (T) {
                  E = T;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                E = T;
              }
              (D = e()) &&
                typeof D.catch == "function" &&
                D.catch(function () { });
            }
          } catch (T) {
            if (T && E && typeof T.stack == "string") return [T.stack, E.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        o = u[1];
      if (c && o) {
        var h = c.split(`
`),
          N = o.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot");)
          n++;
        if (a === h.length || n === N.length)
          for (
            a = h.length - 1, n = N.length - 1;
            1 <= a && 0 <= n && h[a] !== N[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== N[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== N[n])) {
                  var R =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                    R.includes("<anonymous>") &&
                    (R = R.replace("<anonymous>", e.displayName)),
                    R
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((di = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? _l(l) : "";
  }
  function O0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return _l(e.type);
      case 16:
        return _l("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? _l("Suspense Fallback")
          : _l("Suspense");
      case 19:
        return _l("SuspenseList");
      case 0:
      case 15:
        return hi(e.type, !1);
      case 11:
        return hi(e.type.render, !1);
      case 1:
        return hi(e.type, !0);
      case 31:
        return _l("Activity");
      default:
        return "";
    }
  }
  function Ws(e) {
    try {
      var t = "",
        l = null;
      do ((t += O0(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var mi = Object.prototype.hasOwnProperty,
    vi = s.unstable_scheduleCallback,
    yi = s.unstable_cancelCallback,
    D0 = s.unstable_shouldYield,
    U0 = s.unstable_requestPaint,
    nt = s.unstable_now,
    w0 = s.unstable_getCurrentPriorityLevel,
    $s = s.unstable_ImmediatePriority,
    Fs = s.unstable_UserBlockingPriority,
    Xn = s.unstable_NormalPriority,
    H0 = s.unstable_LowPriority,
    Is = s.unstable_IdlePriority,
    B0 = s.log,
    L0 = s.unstable_setDisableYieldValue,
    Ya = null,
    ut = null;
  function ul(e) {
    if (
      (typeof B0 == "function" && L0(e),
        ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(Ya, e);
      } catch { }
  }
  var it = Math.clz32 ? Math.clz32 : G0,
    q0 = Math.log,
    Y0 = Math.LN2;
  function G0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((q0(e) / Y0) | 0)) | 0);
  }
  var Qn = 256,
    Zn = 262144,
    Vn = 4194304;
  function Ol(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Kn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var o = a & 134217727;
    return (
      o !== 0
        ? ((a = o & ~u),
          a !== 0
            ? (n = Ol(a))
            : ((c &= o),
              c !== 0
                ? (n = Ol(c))
                : l || ((l = o & ~e), l !== 0 && (n = Ol(l)))))
        : ((o = a & ~u),
          o !== 0
            ? (n = Ol(o))
            : c !== 0
              ? (n = Ol(c))
              : l || ((l = a & ~e), l !== 0 && (n = Ol(l)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Ga(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function X0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ps() {
    var e = Vn;
    return ((Vn <<= 1), (Vn & 62914560) === 0 && (Vn = 4194304), e);
  }
  function xi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Xa(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
      ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Q0(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var o = e.entanglements,
      h = e.expirationTimes,
      N = e.hiddenUpdates;
    for (l = c & ~l; 0 < l;) {
      var R = 31 - it(l),
        D = 1 << R;
      ((o[R] = 0), (h[R] = -1));
      var E = N[R];
      if (E !== null)
        for (N[R] = null, R = 0; R < E.length; R++) {
          var T = E[R];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~D;
    }
    (a !== 0 && er(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t)));
  }
  function er(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - it(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function tr(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l;) {
      var a = 31 - it(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function lr(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : gi(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function gi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function pi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ar() {
    var e = H.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Zd(e.type));
  }
  function nr(e, t) {
    var l = H.p;
    try {
      return ((H.p = e), t());
    } finally {
      H.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2),
    Ge = "__reactFiber$" + il,
    $e = "__reactProps$" + il,
    Il = "__reactContainer$" + il,
    bi = "__reactEvents$" + il,
    Z0 = "__reactListeners$" + il,
    V0 = "__reactHandles$" + il,
    ur = "__reactResources$" + il,
    Qa = "__reactMarker$" + il;
  function Si(e) {
    (delete e[Ge], delete e[$e], delete e[bi], delete e[Z0], delete e[V0]);
  }
  function Pl(e) {
    var t = e[Ge];
    if (t) return t;
    for (var l = e.parentNode; l;) {
      if ((t = l[Il] || l[Ge])) {
        if (
          ((l = t.alternate),
            t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Md(e); e !== null;) {
            if ((l = e[Ge])) return l;
            e = Md(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function ea(e) {
    if ((e = e[Ge] || e[Il])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Za(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ta(e) {
    var t = e[ur];
    return (
      t ||
      (t = e[ur] =
        { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Le(e) {
    e[Qa] = !0;
  }
  var ir = new Set(),
    cr = {};
  function Dl(e, t) {
    (la(e, t), la(e + "Capture", t));
  }
  function la(e, t) {
    for (cr[e] = t, e = 0; e < t.length; e++) ir.add(t[e]);
  }
  var K0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
  ),
    sr = {},
    rr = {};
  function J0(e) {
    return mi.call(rr, e)
      ? !0
      : mi.call(sr, e)
        ? !1
        : K0.test(e)
          ? (rr[e] = !0)
          : ((sr[e] = !0), !1);
  }
  function Jn(e, t, l) {
    if (J0(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function kn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Lt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function vt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fr(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function k0(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            ((l = "" + c), u.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (c) {
            l = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function ji(e) {
    if (!e._valueTracker) {
      var t = fr(e) ? "checked" : "value";
      e._valueTracker = k0(e, t, "" + e[t]);
    }
  }
  function or(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = fr(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Wn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var W0 = /[\n"\\]/g;
  function yt(e) {
    return e.replace(W0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ni(e, t, l, a, n, u, c, o) {
    ((e.name = ""),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
          (e.value = "" + vt(t))
          : e.value !== "" + vt(t) && (e.value = "" + vt(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ei(e, c, vt(t))
        : l != null
          ? Ei(e, c, vt(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
      (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean"
        ? (e.name = "" + vt(o))
        : e.removeAttribute("name"));
  }
  function dr(e, t, l, a, n, u, c, o) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
        t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        ji(e);
        return;
      }
      ((l = l != null ? "" + vt(l) : ""),
        (t = t != null ? "" + vt(t) : l),
        o || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = o ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean" &&
      (e.name = c),
      ji(e));
  }
  function Ei(e, t, l) {
    (t === "number" && Wn(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function aa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + vt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function hr(e, t, l) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + vt(l) : "";
  }
  function mr(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (zt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = vt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      ji(e));
  }
  function na(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var $0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function vr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || $0.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function yr(e, t, l) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && vr(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && vr(e, u, t[u]);
  }
  function Ai(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var F0 = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"],
  ]),
    I0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $n(e) {
    return I0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function qt() { }
  var zi = null;
  function Ti(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ua = null,
    ia = null;
  function xr(e) {
    var t = ea(e);
    if (t && (e = t.stateNode)) {
      var l = e[$e] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ni(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
              (t = l.name),
              l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + yt("" + t) + '"][type="radio"]',
              ),
              t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[$e] || null;
                if (!n) throw Error(r(90));
                Ni(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && or(a));
          }
          break e;
        case "textarea":
          hr(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && aa(e, !!l.multiple, t, !1));
      }
    }
  }
  var Mi = !1;
  function gr(e, t, l) {
    if (Mi) return e(t, l);
    Mi = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Mi = !1),
          (ua !== null || ia !== null) &&
          (Bu(), ua && ((t = ua), (e = ia), (ia = ua = null), xr(t), e)))
      )
        for (t = 0; t < e.length; t++) xr(e[t]);
    }
  }
  function Va(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[$e] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
            (a = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(r(231, t, typeof l));
    return l;
  }
  var Yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
    Ci = !1;
  if (Yt)
    try {
      var Ka = {};
      (Object.defineProperty(Ka, "passive", {
        get: function () {
          Ci = !0;
        },
      }),
        window.addEventListener("test", Ka, Ka),
        window.removeEventListener("test", Ka, Ka));
    } catch {
      Ci = !1;
    }
  var cl = null,
    Ri = null,
    Fn = null;
  function pr() {
    if (Fn) return Fn;
    var e,
      t = Ri,
      l = t.length,
      a,
      n = "value" in cl ? cl.value : cl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (Fn = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function In(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Pn() {
    return !0;
  }
  function br() {
    return !1;
  }
  function Fe(e) {
    function t(l, a, n, u, c) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null));
      for (var o in e)
        e.hasOwnProperty(o) && ((l = e[o]), (this[o] = l ? l(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Pn
          : br),
        (this.isPropagationStopped = br),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
              (this.isDefaultPrevented = Pn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
              (this.isPropagationStopped = Pn));
        },
        persist: function () { },
        isPersistent: Pn,
      }),
      t
    );
  }
  var Ul = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
    eu = Fe(Ul),
    Ja = A({}, Ul, { view: 0, detail: 0 }),
    P0 = Fe(Ja),
    _i,
    Oi,
    ka,
    tu = A({}, Ja, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ui,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ka &&
            (ka && e.type === "mousemove"
              ? ((_i = e.screenX - ka.screenX), (Oi = e.screenY - ka.screenY))
              : (Oi = _i = 0),
              (ka = e)),
            _i);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Oi;
      },
    }),
    Sr = Fe(tu),
    eh = A({}, tu, { dataTransfer: 0 }),
    th = Fe(eh),
    lh = A({}, Ja, { relatedTarget: 0 }),
    Di = Fe(lh),
    ah = A({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nh = Fe(ah),
    uh = A({}, Ul, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ih = Fe(uh),
    ch = A({}, Ul, { data: 0 }),
    jr = Fe(ch),
    sh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    rh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    fh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function oh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = fh[e])
        ? !!t[e]
        : !1;
  }
  function Ui() {
    return oh;
  }
  var dh = A({}, Ja, {
    key: function (e) {
      if (e.key) {
        var t = sh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = In(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? rh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ui,
    charCode: function (e) {
      return e.type === "keypress" ? In(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? In(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
    hh = Fe(dh),
    mh = A({}, tu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nr = Fe(mh),
    vh = A({}, Ja, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ui,
    }),
    yh = Fe(vh),
    xh = A({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gh = Fe(xh),
    ph = A({}, tu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    bh = Fe(ph),
    Sh = A({}, Ul, { newState: 0, oldState: 0 }),
    jh = Fe(Sh),
    Nh = [9, 13, 27, 32],
    wi = Yt && "CompositionEvent" in window,
    Wa = null;
  Yt && "documentMode" in document && (Wa = document.documentMode);
  var Eh = Yt && "TextEvent" in window && !Wa,
    Er = Yt && (!wi || (Wa && 8 < Wa && 11 >= Wa)),
    Ar = " ",
    zr = !1;
  function Tr(e, t) {
    switch (e) {
      case "keyup":
        return Nh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Mr(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ca = !1;
  function Ah(e, t) {
    switch (e) {
      case "compositionend":
        return Mr(t);
      case "keypress":
        return t.which !== 32 ? null : ((zr = !0), Ar);
      case "textInput":
        return ((e = t.data), e === Ar && zr ? null : e);
      default:
        return null;
    }
  }
  function zh(e, t) {
    if (ca)
      return e === "compositionend" || (!wi && Tr(e, t))
        ? ((e = pr()), (Fn = Ri = cl = null), (ca = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Er && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Th = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Cr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Th[e.type] : t === "textarea";
  }
  function Rr(e, t, l, a) {
    (ua ? (ia ? ia.push(a) : (ia = [a])) : (ua = a),
      (t = Zu(t, "onChange")),
      0 < t.length &&
      ((l = new eu("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var $a = null,
    Fa = null;
  function Mh(e) {
    md(e, 0);
  }
  function lu(e) {
    var t = Za(e);
    if (or(t)) return e;
  }
  function _r(e, t) {
    if (e === "change") return t;
  }
  var Or = !1;
  if (Yt) {
    var Hi;
    if (Yt) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var Dr = document.createElement("div");
        (Dr.setAttribute("oninput", "return;"),
          (Bi = typeof Dr.oninput == "function"));
      }
      Hi = Bi;
    } else Hi = !1;
    Or = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ur() {
    $a && ($a.detachEvent("onpropertychange", wr), (Fa = $a = null));
  }
  function wr(e) {
    if (e.propertyName === "value" && lu(Fa)) {
      var t = [];
      (Rr(t, Fa, e, Ti(e)), gr(Mh, t));
    }
  }
  function Ch(e, t, l) {
    e === "focusin"
      ? (Ur(), ($a = t), (Fa = l), $a.attachEvent("onpropertychange", wr))
      : e === "focusout" && Ur();
  }
  function Rh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return lu(Fa);
  }
  function _h(e, t) {
    if (e === "click") return lu(t);
  }
  function Oh(e, t) {
    if (e === "input" || e === "change") return lu(t);
  }
  function Dh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : Dh;
  function Ia(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mi.call(t, n) || !ct(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Hr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Br(e, t) {
    var l = Hr(e);
    e = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Hr(l);
    }
  }
  function Lr(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Lr(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function qr(e) {
    e =
      e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Wn(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Wn(e.document);
    }
    return t;
  }
  function Li(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Uh = Yt && "documentMode" in document && 11 >= document.documentMode,
    sa = null,
    qi = null,
    Pa = null,
    Yi = !1;
  function Yr(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yi ||
      sa == null ||
      sa !== Wn(a) ||
      ((a = sa),
        "selectionStart" in a && Li(a)
          ? (a = { start: a.selectionStart, end: a.selectionEnd })
          : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
            (a = {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            })),
        (Pa && Ia(Pa, a)) ||
        ((Pa = a),
          (a = Zu(qi, "onSelect")),
          0 < a.length &&
          ((t = new eu("onSelect", "select", null, t, l)),
            e.push({ event: t, listeners: a }),
            (t.target = sa))));
  }
  function wl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ra = {
    animationend: wl("Animation", "AnimationEnd"),
    animationiteration: wl("Animation", "AnimationIteration"),
    animationstart: wl("Animation", "AnimationStart"),
    transitionrun: wl("Transition", "TransitionRun"),
    transitionstart: wl("Transition", "TransitionStart"),
    transitioncancel: wl("Transition", "TransitionCancel"),
    transitionend: wl("Transition", "TransitionEnd"),
  },
    Gi = {},
    Gr = {};
  Yt &&
    ((Gr = document.createElement("div").style),
      "AnimationEvent" in window ||
      (delete ra.animationend.animation,
        delete ra.animationiteration.animation,
        delete ra.animationstart.animation),
      "TransitionEvent" in window || delete ra.transitionend.transition);
  function Hl(e) {
    if (Gi[e]) return Gi[e];
    if (!ra[e]) return e;
    var t = ra[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Gr) return (Gi[e] = t[l]);
    return e;
  }
  var Xr = Hl("animationend"),
    Qr = Hl("animationiteration"),
    Zr = Hl("animationstart"),
    wh = Hl("transitionrun"),
    Hh = Hl("transitionstart"),
    Bh = Hl("transitioncancel"),
    Vr = Hl("transitionend"),
    Kr = new Map(),
    Xi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Xi.push("scrollEnd");
  function Tt(e, t) {
    (Kr.set(e, t), Dl(t, [e]));
  }
  var au =
    typeof reportError == "function"
      ? reportError
      : function (e) {
        if (
          typeof window == "object" &&
          typeof window.ErrorEvent == "function"
        ) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == "object" &&
          typeof process.emit == "function"
        ) {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      },
    xt = [],
    fa = 0,
    Qi = 0;
  function nu() {
    for (var e = fa, t = (Qi = fa = 0); t < e;) {
      var l = xt[t];
      xt[t++] = null;
      var a = xt[t];
      xt[t++] = null;
      var n = xt[t];
      xt[t++] = null;
      var u = xt[t];
      if (((xt[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        (c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n));
      }
      u !== 0 && Jr(l, n, u);
    }
  }
  function uu(e, t, l, a) {
    ((xt[fa++] = e),
      (xt[fa++] = t),
      (xt[fa++] = l),
      (xt[fa++] = a),
      (Qi |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Zi(e, t, l, a) {
    return (uu(e, t, l, a), iu(e));
  }
  function Bl(e, t) {
    return (uu(e, null, null, t), iu(e));
  }
  function Jr(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null;)
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
        ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
        t !== null &&
        ((n = 31 - it(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function iu(e) {
    if (50 < jn) throw ((jn = 0), (Pc = null), Error(r(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var oa = {};
  function Lh(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
        null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
        null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function st(e, t, l, a) {
    return new Lh(e, t, l, a);
  }
  function Vi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Gt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = st(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function kr(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function cu(e, t, l, a, n, u) {
    var c = 0;
    if (((a = e), typeof e == "function")) Vi(e) && (c = 1);
    else if (typeof e == "string")
      c = Qm(e, l, Z.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Ye:
          return (
            (e = st(31, l, t, n)),
            (e.elementType = Ye),
            (e.lanes = u),
            e
          );
        case Y:
          return Ll(l.children, n, u, t);
        case q:
          ((c = 8), (n |= 24));
          break;
        case J:
          return (
            (e = st(12, l, t, n | 2)),
            (e.elementType = J),
            (e.lanes = u),
            e
          );
        case be:
          return (
            (e = st(13, l, t, n)),
            (e.elementType = be),
            (e.lanes = u),
            e
          );
        case ze:
          return (
            (e = st(19, l, t, n)),
            (e.elementType = ze),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                c = 10;
                break e;
              case Q:
                c = 9;
                break e;
              case Se:
                c = 11;
                break e;
              case I:
                c = 14;
                break e;
              case Ce:
                ((c = 16), (a = null));
                break e;
            }
          ((c = 29),
            (l = Error(r(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = st(c, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function Ll(e, t, l, a) {
    return ((e = st(7, e, a, t)), (e.lanes = l), e);
  }
  function Ki(e, t, l) {
    return ((e = st(6, e, null, t)), (e.lanes = l), e);
  }
  function Wr(e) {
    var t = st(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Ji(e, t, l) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var $r = new WeakMap();
  function gt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = $r.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Ws(t) }), $r.set(e, t), t);
    }
    return { value: e, source: t, stack: Ws(t) };
  }
  var da = [],
    ha = 0,
    su = null,
    en = 0,
    pt = [],
    bt = 0,
    sl = null,
    _t = 1,
    Ot = "";
  function Xt(e, t) {
    ((da[ha++] = en), (da[ha++] = su), (su = e), (en = t));
  }
  function Fr(e, t, l) {
    ((pt[bt++] = _t), (pt[bt++] = Ot), (pt[bt++] = sl), (sl = e));
    var a = _t;
    e = Ot;
    var n = 32 - it(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - it(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      ((u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (_t = (1 << (32 - it(t) + n)) | (l << n) | a),
        (Ot = u + e));
    } else ((_t = (1 << u) | (l << n) | a), (Ot = e));
  }
  function ki(e) {
    e.return !== null && (Xt(e, 1), Fr(e, 1, 0));
  }
  function Wi(e) {
    for (; e === su;)
      ((su = da[--ha]), (da[ha] = null), (en = da[--ha]), (da[ha] = null));
    for (; e === sl;)
      ((sl = pt[--bt]),
        (pt[bt] = null),
        (Ot = pt[--bt]),
        (pt[bt] = null),
        (_t = pt[--bt]),
        (pt[bt] = null));
  }
  function Ir(e, t) {
    ((pt[bt++] = _t),
      (pt[bt++] = Ot),
      (pt[bt++] = sl),
      (_t = t.id),
      (Ot = t.overflow),
      (sl = e));
  }
  var Xe = null,
    je = null,
    ce = !1,
    rl = null,
    St = !1,
    $i = Error(r(519));
  function fl(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (tn(gt(t, e)), $i);
  }
  function Pr(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ge] = e), (t[$e] = a), l)) {
      case "dialog":
        (ne("cancel", t), ne("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ne("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++) ne(En[l], t);
        break;
      case "source":
        ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ne("error", t), ne("load", t));
        break;
      case "details":
        ne("toggle", t);
        break;
      case "input":
        (ne("invalid", t),
          dr(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        ne("invalid", t);
        break;
      case "textarea":
        (ne("invalid", t), mr(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
        t.textContent === "" + l ||
        a.suppressHydrationWarning === !0 ||
        gd(t.textContent, l)
        ? (a.popover != null && (ne("beforetoggle", t), ne("toggle", t)),
          a.onScroll != null && ne("scroll", t),
          a.onScrollEnd != null && ne("scrollend", t),
          a.onClick != null && (t.onclick = qt),
          (t = !0))
        : (t = !1),
      t || fl(e, !0));
  }
  function ef(e) {
    for (Xe = e.return; Xe;)
      switch (Xe.tag) {
        case 5:
        case 31:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          Xe = Xe.return;
      }
  }
  function ma(e) {
    if (e !== Xe) return !1;
    if (!ce) return (ef(e), (ce = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
            (l =
              !(l !== "form" && l !== "button") || ms(e.type, e.memoizedProps))),
          (l = !l)),
        l && je && fl(e),
        ef(e),
        t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      je = Td(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      je = Td(e);
    } else
      t === 27
        ? ((t = je), El(e.type) ? ((e = ps), (ps = null), (je = e)) : (je = t))
        : (je = Xe ? Nt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ql() {
    ((je = Xe = null), (ce = !1));
  }
  function Fi() {
    var e = rl;
    return (
      e !== null &&
      (tt === null ? (tt = e) : tt.push.apply(tt, e), (rl = null)),
      e
    );
  }
  function tn(e) {
    rl === null ? (rl = [e]) : rl.push(e);
  }
  var Ii = g(null),
    Yl = null,
    Qt = null;
  function ol(e, t, l) {
    (B(Ii, t._currentValue), (t._currentValue = l));
  }
  function Zt(e) {
    ((e._currentValue = Ii.current), U(Ii));
  }
  function Pi(e, t, l) {
    for (; e !== null;) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
          e === l)
      )
        break;
      e = e.return;
    }
  }
  function ec(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null;) {
          var o = u;
          u = n;
          for (var h = 0; h < t.length; h++)
            if (o.context === t[h]) {
              ((u.lanes |= l),
                (o = u.alternate),
                o !== null && (o.lanes |= l),
                Pi(u.return, l, e),
                a || (c = null));
              break e;
            }
          u = o.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(r(341));
        ((c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          Pi(c, l, e),
          (c = null));
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null;) {
          if (c === e) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            ((n.return = c.return), (c = n));
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function va(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var o = n.type;
          ct(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(o) : (e = [o]));
        }
      } else if (n === oe.current) {
        if (((c = n.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Cn) : (e = [Cn]));
      }
      n = n.return;
    }
    (e !== null && ec(t, e, l, a), (t.flags |= 262144));
  }
  function ru(e) {
    for (e = e.firstContext; e !== null;) {
      if (!ct(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Gl(e) {
    ((Yl = e),
      (Qt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Qe(e) {
    return tf(Yl, e);
  }
  function fu(e, t) {
    return (Yl === null && Gl(e), tf(e, t));
  }
  function tf(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Qt === null)) {
      if (e === null) throw Error(r(308));
      ((Qt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Qt = Qt.next = t;
    return l;
  }
  var qh =
    typeof AbortController < "u"
      ? AbortController
      : function () {
        var e = [],
          t = (this.signal = {
            aborted: !1,
            addEventListener: function (l, a) {
              e.push(a);
            },
          });
        this.abort = function () {
          ((t.aborted = !0),
            e.forEach(function (l) {
              return l();
            }));
        };
      },
    Yh = s.unstable_scheduleCallback,
    Gh = s.unstable_NormalPriority,
    De = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function tc() {
    return { controller: new qh(), data: new Map(), refCount: 0 };
  }
  function ln(e) {
    (e.refCount--,
      e.refCount === 0 &&
      Yh(Gh, function () {
        e.controller.abort();
      }));
  }
  var an = null,
    lc = 0,
    ya = 0,
    xa = null;
  function Xh(e, t) {
    if (an === null) {
      var l = (an = []);
      ((lc = 0),
        (ya = us()),
        (xa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (lc++, t.then(lf, lf), t);
  }
  function lf() {
    if (--lc === 0 && an !== null) {
      xa !== null && (xa.status = "fulfilled");
      var e = an;
      ((an = null), (ya = 0), (xa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Qh(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var af = _.S;
  _.S = function (e, t) {
    ((Xo = nt()),
      typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Xh(e, t),
      af !== null && af(e, t));
  };
  var Xl = g(null);
  function ac() {
    var e = Xl.current;
    return e !== null ? e : pe.pooledCache;
  }
  function ou(e, t) {
    t === null ? B(Xl, Xl.current) : B(Xl, t.pool);
  }
  function nf() {
    var e = ac();
    return e === null ? null : { parent: De._currentValue, pool: e };
  }
  var ga = Error(r(460)),
    nc = Error(r(474)),
    du = Error(r(542)),
    hu = { then: function () { } };
  function uf(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function cf(e, t, l) {
    switch (
    ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(qt, qt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), rf(e), e);
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (((e = pe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), rf(e), e);
        }
        throw ((Zl = t), ga);
    }
  }
  function Ql(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Zl = l), ga)
        : l;
    }
  }
  var Zl = null;
  function sf() {
    if (Zl === null) throw Error(r(459));
    var e = Zl;
    return ((Zl = null), e);
  }
  function rf(e) {
    if (e === ga || e === du) throw Error(r(483));
  }
  var pa = null,
    nn = 0;
  function mu(e) {
    var t = nn;
    return ((nn += 1), pa === null && (pa = []), cf(pa, e, t));
  }
  function un(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function vu(e, t) {
    throw t.$$typeof === w
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function ff(e) {
    function t(b, y) {
      if (e) {
        var j = b.deletions;
        j === null ? ((b.deletions = [y]), (b.flags |= 16)) : j.push(y);
      }
    }
    function l(b, y) {
      if (!e) return null;
      for (; y !== null;) (t(b, y), (y = y.sibling));
      return null;
    }
    function a(b) {
      for (var y = new Map(); b !== null;)
        (b.key !== null ? y.set(b.key, b) : y.set(b.index, b), (b = b.sibling));
      return y;
    }
    function n(b, y) {
      return ((b = Gt(b, y)), (b.index = 0), (b.sibling = null), b);
    }
    function u(b, y, j) {
      return (
        (b.index = j),
        e
          ? ((j = b.alternate),
            j !== null
              ? ((j = j.index), j < y ? ((b.flags |= 67108866), y) : j)
              : ((b.flags |= 67108866), y))
          : ((b.flags |= 1048576), y)
      );
    }
    function c(b) {
      return (e && b.alternate === null && (b.flags |= 67108866), b);
    }
    function o(b, y, j, O) {
      return y === null || y.tag !== 6
        ? ((y = Ki(j, b.mode, O)), (y.return = b), y)
        : ((y = n(y, j)), (y.return = b), y);
    }
    function h(b, y, j, O) {
      var K = j.type;
      return K === Y
        ? R(b, y, j.props.children, O, j.key)
        : y !== null &&
          (y.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === Ce &&
              Ql(K) === y.type))
          ? ((y = n(y, j.props)), un(y, j), (y.return = b), y)
          : ((y = cu(j.type, j.key, j.props, null, b.mode, O)),
            un(y, j),
            (y.return = b),
            y);
    }
    function N(b, y, j, O) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== j.containerInfo ||
        y.stateNode.implementation !== j.implementation
        ? ((y = Ji(j, b.mode, O)), (y.return = b), y)
        : ((y = n(y, j.children || [])), (y.return = b), y);
    }
    function R(b, y, j, O, K) {
      return y === null || y.tag !== 7
        ? ((y = Ll(j, b.mode, O, K)), (y.return = b), y)
        : ((y = n(y, j)), (y.return = b), y);
    }
    function D(b, y, j) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return ((y = Ki("" + y, b.mode, j)), (y.return = b), y);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case L:
            return (
              (j = cu(y.type, y.key, y.props, null, b.mode, j)),
              un(j, y),
              (j.return = b),
              j
            );
          case X:
            return ((y = Ji(y, b.mode, j)), (y.return = b), y);
          case Ce:
            return ((y = Ql(y)), D(b, y, j));
        }
        if (zt(y) || We(y))
          return ((y = Ll(y, b.mode, j, null)), (y.return = b), y);
        if (typeof y.then == "function") return D(b, mu(y), j);
        if (y.$$typeof === W) return D(b, fu(b, y), j);
        vu(b, y);
      }
      return null;
    }
    function E(b, y, j, O) {
      var K = y !== null ? y.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return K !== null ? null : o(b, y, "" + j, O);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case L:
            return j.key === K ? h(b, y, j, O) : null;
          case X:
            return j.key === K ? N(b, y, j, O) : null;
          case Ce:
            return ((j = Ql(j)), E(b, y, j, O));
        }
        if (zt(j) || We(j)) return K !== null ? null : R(b, y, j, O, null);
        if (typeof j.then == "function") return E(b, y, mu(j), O);
        if (j.$$typeof === W) return E(b, y, fu(b, j), O);
        vu(b, j);
      }
      return null;
    }
    function T(b, y, j, O, K) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return ((b = b.get(j) || null), o(y, b, "" + O, K));
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case L:
            return (
              (b = b.get(O.key === null ? j : O.key) || null),
              h(y, b, O, K)
            );
          case X:
            return (
              (b = b.get(O.key === null ? j : O.key) || null),
              N(y, b, O, K)
            );
          case Ce:
            return ((O = Ql(O)), T(b, y, j, O, K));
        }
        if (zt(O) || We(O))
          return ((b = b.get(j) || null), R(y, b, O, K, null));
        if (typeof O.then == "function") return T(b, y, j, mu(O), K);
        if (O.$$typeof === W) return T(b, y, j, fu(y, O), K);
        vu(y, O);
      }
      return null;
    }
    function G(b, y, j, O) {
      for (
        var K = null, se = null, V = y, te = (y = 0), ie = null;
        V !== null && te < j.length;
        te++
      ) {
        V.index > te ? ((ie = V), (V = null)) : (ie = V.sibling);
        var re = E(b, V, j[te], O);
        if (re === null) {
          V === null && (V = ie);
          break;
        }
        (e && V && re.alternate === null && t(b, V),
          (y = u(re, y, te)),
          se === null ? (K = re) : (se.sibling = re),
          (se = re),
          (V = ie));
      }
      if (te === j.length) return (l(b, V), ce && Xt(b, te), K);
      if (V === null) {
        for (; te < j.length; te++)
          ((V = D(b, j[te], O)),
            V !== null &&
            ((y = u(V, y, te)),
              se === null ? (K = V) : (se.sibling = V),
              (se = V)));
        return (ce && Xt(b, te), K);
      }
      for (V = a(V); te < j.length; te++)
        ((ie = T(V, b, te, j[te], O)),
          ie !== null &&
          (e &&
            ie.alternate !== null &&
            V.delete(ie.key === null ? te : ie.key),
            (y = u(ie, y, te)),
            se === null ? (K = ie) : (se.sibling = ie),
            (se = ie)));
      return (
        e &&
        V.forEach(function (Cl) {
          return t(b, Cl);
        }),
        ce && Xt(b, te),
        K
      );
    }
    function k(b, y, j, O) {
      if (j == null) throw Error(r(151));
      for (
        var K = null, se = null, V = y, te = (y = 0), ie = null, re = j.next();
        V !== null && !re.done;
        te++, re = j.next()
      ) {
        V.index > te ? ((ie = V), (V = null)) : (ie = V.sibling);
        var Cl = E(b, V, re.value, O);
        if (Cl === null) {
          V === null && (V = ie);
          break;
        }
        (e && V && Cl.alternate === null && t(b, V),
          (y = u(Cl, y, te)),
          se === null ? (K = Cl) : (se.sibling = Cl),
          (se = Cl),
          (V = ie));
      }
      if (re.done) return (l(b, V), ce && Xt(b, te), K);
      if (V === null) {
        for (; !re.done; te++, re = j.next())
          ((re = D(b, re.value, O)),
            re !== null &&
            ((y = u(re, y, te)),
              se === null ? (K = re) : (se.sibling = re),
              (se = re)));
        return (ce && Xt(b, te), K);
      }
      for (V = a(V); !re.done; te++, re = j.next())
        ((re = T(V, b, te, re.value, O)),
          re !== null &&
          (e &&
            re.alternate !== null &&
            V.delete(re.key === null ? te : re.key),
            (y = u(re, y, te)),
            se === null ? (K = re) : (se.sibling = re),
            (se = re)));
      return (
        e &&
        V.forEach(function (ev) {
          return t(b, ev);
        }),
        ce && Xt(b, te),
        K
      );
    }
    function xe(b, y, j, O) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === Y &&
          j.key === null &&
          (j = j.props.children),
          typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case L:
            e: {
              for (var K = j.key; y !== null;) {
                if (y.key === K) {
                  if (((K = j.type), K === Y)) {
                    if (y.tag === 7) {
                      (l(b, y.sibling),
                        (O = n(y, j.props.children)),
                        (O.return = b),
                        (b = O));
                      break e;
                    }
                  } else if (
                    y.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === Ce &&
                      Ql(K) === y.type)
                  ) {
                    (l(b, y.sibling),
                      (O = n(y, j.props)),
                      un(O, j),
                      (O.return = b),
                      (b = O));
                    break e;
                  }
                  l(b, y);
                  break;
                } else t(b, y);
                y = y.sibling;
              }
              j.type === Y
                ? ((O = Ll(j.props.children, b.mode, O, j.key)),
                  (O.return = b),
                  (b = O))
                : ((O = cu(j.type, j.key, j.props, null, b.mode, O)),
                  un(O, j),
                  (O.return = b),
                  (b = O));
            }
            return c(b);
          case X:
            e: {
              for (K = j.key; y !== null;) {
                if (y.key === K)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === j.containerInfo &&
                    y.stateNode.implementation === j.implementation
                  ) {
                    (l(b, y.sibling),
                      (O = n(y, j.children || [])),
                      (O.return = b),
                      (b = O));
                    break e;
                  } else {
                    l(b, y);
                    break;
                  }
                else t(b, y);
                y = y.sibling;
              }
              ((O = Ji(j, b.mode, O)), (O.return = b), (b = O));
            }
            return c(b);
          case Ce:
            return ((j = Ql(j)), xe(b, y, j, O));
        }
        if (zt(j)) return G(b, y, j, O);
        if (We(j)) {
          if (((K = We(j)), typeof K != "function")) throw Error(r(150));
          return ((j = K.call(j)), k(b, y, j, O));
        }
        if (typeof j.then == "function") return xe(b, y, mu(j), O);
        if (j.$$typeof === W) return xe(b, y, fu(b, j), O);
        vu(b, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          y !== null && y.tag === 6
            ? (l(b, y.sibling), (O = n(y, j)), (O.return = b), (b = O))
            : (l(b, y), (O = Ki(j, b.mode, O)), (O.return = b), (b = O)),
          c(b))
        : l(b, y);
    }
    return function (b, y, j, O) {
      try {
        nn = 0;
        var K = xe(b, y, j, O);
        return ((pa = null), K);
      } catch (V) {
        if (V === ga || V === du) throw V;
        var se = st(29, V, null, b.mode);
        return ((se.lanes = O), (se.return = b), se);
      }
    };
  }
  var Vl = ff(!0),
    of = ff(!1),
    dl = !1;
  function uc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ic(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null,
      }));
  }
  function hl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ml(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (fe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = iu(e)),
        Jr(e, null, l),
        t
      );
    }
    return (uu(e, a, t, l), iu(e));
  }
  function cn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), tr(e, l));
    }
  }
  function cc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = c) : (u = u.next = c), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var sc = !1;
  function sn() {
    if (sc) {
      var e = xa;
      if (e !== null) throw e;
    }
  }
  function rn(e, t, l, a) {
    sc = !1;
    var n = e.updateQueue;
    dl = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var h = o,
        N = h.next;
      ((h.next = null), c === null ? (u = N) : (c.next = N), (c = h));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
          (o = R.lastBaseUpdate),
          o !== c &&
          (o === null ? (R.firstBaseUpdate = N) : (o.next = N),
            (R.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var D = n.baseState;
      ((c = 0), (R = N = h = null), (o = u));
      do {
        var E = o.lane & -536870913,
          T = E !== o.lane;
        if (T ? (ue & E) === E : (a & E) === E) {
          (E !== 0 && E === ya && (sc = !0),
            R !== null &&
            (R = R.next =
            {
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null,
            }));
          e: {
            var G = e,
              k = o;
            E = t;
            var xe = l;
            switch (k.tag) {
              case 1:
                if (((G = k.payload), typeof G == "function")) {
                  D = G.call(xe, D, E);
                  break e;
                }
                D = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = k.payload),
                    (E = typeof G == "function" ? G.call(xe, D, E) : G),
                    E == null)
                )
                  break e;
                D = A({}, D, E);
                break e;
              case 2:
                dl = !0;
            }
          }
          ((E = o.callback),
            E !== null &&
            ((e.flags |= 64),
              T && (e.flags |= 8192),
              (T = n.callbacks),
              T === null ? (n.callbacks = [E]) : T.push(E)));
        } else
          ((T = {
            lane: E,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            R === null ? ((N = R = T), (h = D)) : (R = R.next = T),
            (c |= E));
        if (((o = o.next), o === null)) {
          if (((o = n.shared.pending), o === null)) break;
          ((T = o),
            (o = T.next),
            (T.next = null),
            (n.lastBaseUpdate = T),
            (n.shared.pending = null));
        }
      } while (!0);
      (R === null && (h = D),
        (n.baseState = h),
        (n.firstBaseUpdate = N),
        (n.lastBaseUpdate = R),
        u === null && (n.shared.lanes = 0),
        (pl |= c),
        (e.lanes = c),
        (e.memoizedState = D));
    }
  }
  function df(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function hf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) df(l[e], t);
  }
  var ba = g(null),
    yu = g(0);
  function mf(e, t) {
    ((e = Pt), B(yu, e), B(ba, t), (Pt = e | t.baseLanes));
  }
  function rc() {
    (B(yu, Pt), B(ba, ba.current));
  }
  function fc() {
    ((Pt = yu.current), U(ba), U(yu));
  }
  var rt = g(null),
    jt = null;
  function vl(e) {
    var t = e.alternate;
    (B(_e, _e.current & 1),
      B(rt, e),
      jt === null &&
      (t === null || ba.current !== null || t.memoizedState !== null) &&
      (jt = e));
  }
  function oc(e) {
    (B(_e, _e.current), B(rt, e), jt === null && (jt = e));
  }
  function vf(e) {
    e.tag === 22
      ? (B(_e, _e.current), B(rt, e), jt === null && (jt = e))
      : yl();
  }
  function yl() {
    (B(_e, _e.current), B(rt, rt.current));
  }
  function ft(e) {
    (U(rt), jt === e && (jt = null), U(_e));
  }
  var _e = g(0);
  function xu(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || xs(l) || gs(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Vt = 0,
    ee = null,
    ve = null,
    Ue = null,
    gu = !1,
    Sa = !1,
    Kl = !1,
    pu = 0,
    fn = 0,
    ja = null,
    Zh = 0;
  function Te() {
    throw Error(r(321));
  }
  function dc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!ct(e[l], t[l])) return !1;
    return !0;
  }
  function hc(e, t, l, a, n, u) {
    return (
      (Vt = u),
      (ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_.H = e === null || e.memoizedState === null ? If : Mc),
      (Kl = !1),
      (u = l(a, n)),
      (Kl = !1),
      Sa && (u = xf(t, l, a, n)),
      yf(e),
      u
    );
  }
  function yf(e) {
    _.H = hn;
    var t = ve !== null && ve.next !== null;
    if (((Vt = 0), (Ue = ve = ee = null), (gu = !1), (fn = 0), (ja = null), t))
      throw Error(r(300));
    e === null ||
      we ||
      ((e = e.dependencies), e !== null && ru(e) && (we = !0));
  }
  function xf(e, t, l, a) {
    ee = e;
    var n = 0;
    do {
      if ((Sa && (ja = null), (fn = 0), (Sa = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (Ue = ve = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((_.H = Pf), (u = t(l, a)));
    } while (Sa);
    return u;
  }
  function Vh() {
    var e = _.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? on(t) : t),
      (e = e.useState()[0]),
      (ve !== null ? ve.memoizedState : null) !== e && (ee.flags |= 1024),
      t
    );
  }
  function mc() {
    var e = pu !== 0;
    return ((pu = 0), e);
  }
  function vc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function yc(e) {
    if (gu) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      gu = !1;
    }
    ((Vt = 0), (Ue = ve = ee = null), (Sa = !1), (fn = pu = 0), (ja = null));
  }
  function ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ue === null ? (ee.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue);
  }
  function Oe() {
    if (ve === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var t = Ue === null ? ee.memoizedState : Ue.next;
    if (t !== null) ((Ue = t), (ve = e));
    else {
      if (e === null)
        throw ee.alternate === null ? Error(r(467)) : Error(r(310));
      ((ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null,
        }),
        Ue === null ? (ee.memoizedState = Ue = e) : (Ue = Ue.next = e));
    }
    return Ue;
  }
  function bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function on(e) {
    var t = fn;
    return (
      (fn += 1),
      ja === null && (ja = []),
      (e = cf(ja, e, t)),
      (t = ee),
      (Ue === null ? t.memoizedState : Ue.next) === null &&
      ((t = t.alternate),
        (_.H = t === null || t.memoizedState === null ? If : Mc)),
      e
    );
  }
  function Su(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return on(e);
      if (e.$$typeof === W) return Qe(e);
    }
    throw Error(r(438, String(e)));
  }
  function xc(e) {
    var t = null,
      l = ee.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = ee.alternate;
      a !== null &&
        ((a = a.updateQueue),
          a !== null &&
          ((a = a.memoCache),
            a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
        l === null && ((l = bu()), (ee.updateQueue = l)),
        (l.memoCache = t),
        (l = t.data[t.index]),
        l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = mt;
    return (t.index++, l);
  }
  function Kt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ju(e) {
    var t = Oe();
    return gc(t, ve, e);
  }
  function gc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        ((n.next = u.next), (u.next = c));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var o = (c = null),
        h = null,
        N = t,
        R = !1;
      do {
        var D = N.lane & -536870913;
        if (D !== N.lane ? (ue & D) === D : (Vt & D) === D) {
          var E = N.revertLane;
          if (E === 0)
            (h !== null &&
              (h = h.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null,
              }),
              D === ya && (R = !0));
          else if ((Vt & E) === E) {
            ((N = N.next), E === ya && (R = !0));
            continue;
          } else
            ((D = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              h === null ? ((o = h = D), (c = u)) : (h = h.next = D),
              (ee.lanes |= E),
              (pl |= E));
          ((D = N.action),
            Kl && l(u, D),
            (u = N.hasEagerState ? N.eagerState : l(u, D)));
        } else
          ((E = {
            lane: D,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            h === null ? ((o = h = E), (c = u)) : (h = h.next = E),
            (ee.lanes |= D),
            (pl |= D));
        N = N.next;
      } while (N !== null && N !== t);
      if (
        (h === null ? (c = u) : (h.next = o),
          !ct(u, e.memoizedState) && ((we = !0), R && ((l = xa), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = h),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function pc(e) {
    var t = Oe(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do ((u = e(u, c.action)), (c = c.next));
      while (c !== n);
      (ct(u, t.memoizedState) || (we = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function gf(e, t, l) {
    var a = ee,
      n = Oe(),
      u = ce;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var c = !ct((ve || n).memoizedState, l);
    if (
      (c && ((n.memoizedState = l), (we = !0)),
        (n = n.queue),
        jc(Sf.bind(null, a, n, e), [e]),
        n.getSnapshot !== t || c || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
          Na(9, { destroy: void 0 }, bf.bind(null, a, n, l, t), null),
          pe === null)
      )
        throw Error(r(349));
      u || (Vt & 127) !== 0 || pf(a, t, l);
    }
    return l;
  }
  function pf(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ee.updateQueue),
      t === null
        ? ((t = bu()), (ee.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function bf(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), jf(t) && Nf(e));
  }
  function Sf(e, t, l) {
    return l(function () {
      jf(t) && Nf(e);
    });
  }
  function jf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ct(e, l);
    } catch {
      return !0;
    }
  }
  function Nf(e) {
    var t = Bl(e, 2);
    t !== null && lt(t, e, 2);
  }
  function bc(e) {
    var t = ke();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Kl)) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Ef(e, t, l, a) {
    return ((e.baseState = l), gc(e, ve, typeof a == "function" ? a : Kt));
  }
  function Kh(e, t, l, a, n) {
    if (Au(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      (_.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Af(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function Af(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = _.T,
        c = {};
      _.T = c;
      try {
        var o = l(n, a),
          h = _.S;
        (h !== null && h(c, o), zf(e, t, o));
      } catch (N) {
        Sc(e, t, N);
      } finally {
        (u !== null && c.types !== null && (u.types = c.types), (_.T = u));
      }
    } else
      try {
        ((u = l(n, a)), zf(e, t, u));
      } catch (N) {
        Sc(e, t, N);
      }
  }
  function zf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
        function (a) {
          Tf(e, t, a);
        },
        function (a) {
          return Sc(e, t, a);
        },
      )
      : Tf(e, t, l);
  }
  function Tf(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      Mf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
      ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Af(e, l))));
  }
  function Sc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), Mf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Mf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Cf(e, t) {
    return t;
  }
  function Rf(e, t) {
    if (ce) {
      var l = pe.formState;
      if (l !== null) {
        e: {
          var a = ee;
          if (ce) {
            if (je) {
              t: {
                for (var n = je, u = St; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Nt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((je = Nt(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            fl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = ke()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cf,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Wf.bind(null, ee, a)),
      (a.dispatch = l),
      (a = bc(!1)),
      (u = Tc.bind(null, ee, !1, a.queue)),
      (a = ke()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Kh.bind(null, ee, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function _f(e) {
    var t = Oe();
    return Of(t, ve, e);
  }
  function Of(e, t, l) {
    if (
      ((t = gc(e, t, Cf)[0]),
        (e = ju(Kt)[0]),
        typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = on(t);
      } catch (c) {
        throw c === ga ? du : c;
      }
    else a = t;
    t = Oe();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
      ((ee.flags |= 2048),
        Na(9, { destroy: void 0 }, Jh.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function Jh(e, t) {
    e.action = t;
  }
  function Df(e) {
    var t = Oe(),
      l = ve;
    if (l !== null) return Of(t, l, e);
    (Oe(), (t = t.memoizedState), (l = Oe()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Na(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = ee.updateQueue),
      t === null && ((t = bu()), (ee.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Uf() {
    return Oe().memoizedState;
  }
  function Nu(e, t, l, a) {
    var n = ke();
    ((ee.flags |= e),
      (n.memoizedState = Na(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Eu(e, t, l, a) {
    var n = Oe();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ve !== null && a !== null && dc(a, ve.memoizedState.deps)
      ? (n.memoizedState = Na(t, u, l, a))
      : ((ee.flags |= e), (n.memoizedState = Na(1 | t, u, l, a)));
  }
  function wf(e, t) {
    Nu(8390656, 8, e, t);
  }
  function jc(e, t) {
    Eu(2048, 8, e, t);
  }
  function kh(e) {
    ee.flags |= 4;
    var t = ee.updateQueue;
    if (t === null) ((t = bu()), (ee.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Hf(e) {
    var t = Oe().memoizedState;
    return (
      kh({ ref: t, nextImpl: e }),
      function () {
        if ((fe & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Bf(e, t) {
    return Eu(4, 2, e, t);
  }
  function Lf(e, t) {
    return Eu(4, 4, e, t);
  }
  function qf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Yf(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Eu(4, 4, qf.bind(null, t, e), l));
  }
  function Nc() { }
  function Gf(e, t) {
    var l = Oe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && dc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Xf(e, t) {
    var l = Oe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && dc(t, a[1])) return a[0];
    if (((a = e()), Kl)) {
      ul(!0);
      try {
        e();
      } finally {
        ul(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Ec(e, t, l) {
    return l === void 0 || ((Vt & 1073741824) !== 0 && (ue & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Zo()), (ee.lanes |= e), (pl |= e), l);
  }
  function Qf(e, t, l, a) {
    return ct(l, t)
      ? l
      : ba.current !== null
        ? ((e = Ec(e, l, a)), ct(e, t) || (we = !0), e)
        : (Vt & 42) === 0 || ((Vt & 1073741824) !== 0 && (ue & 261930) === 0)
          ? ((we = !0), (e.memoizedState = l))
          : ((e = Zo()), (ee.lanes |= e), (pl |= e), t);
  }
  function Zf(e, t, l, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var c = _.T,
      o = {};
    ((_.T = o), Tc(e, !1, t, l));
    try {
      var h = n(),
        N = _.S;
      if (
        (N !== null && N(o, h),
          h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var R = Qh(h, a);
        dn(e, t, R, ht(e));
      } else dn(e, t, a, ht(e));
    } catch (D) {
      dn(e, t, { then: function () { }, status: "rejected", reason: D }, ht());
    } finally {
      ((H.p = u),
        c !== null && o.types !== null && (c.types = o.types),
        (_.T = c));
    }
  }
  function Wh() { }
  function Ac(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Vf(e).queue;
    Zf(
      e,
      n,
      t,
      $,
      l === null
        ? Wh
        : function () {
          return (Kf(e), l(a));
        },
    );
  }
  function Vf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: $,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Kt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Kf(e) {
    var t = Vf(e);
    (t.next === null && (t = e.alternate.memoizedState),
      dn(e, t.next.queue, {}, ht()));
  }
  function zc() {
    return Qe(Cn);
  }
  function Jf() {
    return Oe().memoizedState;
  }
  function kf() {
    return Oe().memoizedState;
  }
  function $h(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = ht();
          e = hl(l);
          var a = ml(t, e, l);
          (a !== null && (lt(a, t, l), cn(a, t, l)),
            (t = { cache: tc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Fh(e, t, l) {
    var a = ht();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Au(e)
        ? $f(t, l)
        : ((l = Zi(e, t, l, a)), l !== null && (lt(l, e, a), Ff(l, t, a))));
  }
  function Wf(e, t, l) {
    var a = ht();
    dn(e, t, l, a);
  }
  function dn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Au(e)) $f(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            o = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = o), ct(o, c)))
            return (uu(e, t, n, 0), pe === null && nu(), !1);
        } catch { }
      if (((l = Zi(e, t, n, a)), l !== null))
        return (lt(l, e, a), Ff(l, t, a), !0);
    }
    return !1;
  }
  function Tc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: us(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Au(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = Zi(e, l, a, 2)), t !== null && lt(t, e, 2));
  }
  function Au(e) {
    var t = e.alternate;
    return e === ee || (t !== null && t === ee);
  }
  function $f(e, t) {
    Sa = gu = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Ff(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), tr(e, l));
    }
  }
  var hn = {
    readContext: Qe,
    use: Su,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useLayoutEffect: Te,
    useInsertionEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useSyncExternalStore: Te,
    useId: Te,
    useHostTransitionStatus: Te,
    useFormState: Te,
    useActionState: Te,
    useOptimistic: Te,
    useMemoCache: Te,
    useCacheRefresh: Te,
  };
  hn.useEffectEvent = Te;
  var If = {
    readContext: Qe,
    use: Su,
    useCallback: function (e, t) {
      return ((ke().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Qe,
    useEffect: wf,
    useImperativeHandle: function (e, t, l) {
      ((l = l != null ? l.concat([e]) : null),
        Nu(4194308, 4, qf.bind(null, t, e), l));
    },
    useLayoutEffect: function (e, t) {
      return Nu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Nu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var l = ke();
      t = t === void 0 ? null : t;
      var a = e();
      if (Kl) {
        ul(!0);
        try {
          e();
        } finally {
          ul(!1);
        }
      }
      return ((l.memoizedState = [a, t]), a);
    },
    useReducer: function (e, t, l) {
      var a = ke();
      if (l !== void 0) {
        var n = l(t);
        if (Kl) {
          ul(!0);
          try {
            l(t);
          } finally {
            ul(!1);
          }
        }
      } else n = t;
      return (
        (a.memoizedState = a.baseState = n),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (a.queue = e),
        (e = e.dispatch = Fh.bind(null, ee, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ke();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: function (e) {
      e = bc(e);
      var t = e.queue,
        l = Wf.bind(null, ee, t);
      return ((t.dispatch = l), [e.memoizedState, l]);
    },
    useDebugValue: Nc,
    useDeferredValue: function (e, t) {
      var l = ke();
      return Ec(l, e, t);
    },
    useTransition: function () {
      var e = bc(!1);
      return (
        (e = Zf.bind(null, ee, e.queue, !0, !1)),
        (ke().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, l) {
      var a = ee,
        n = ke();
      if (ce) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else {
        if (((l = t()), pe === null)) throw Error(r(349));
        (ue & 127) !== 0 || pf(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return (
        (n.queue = u),
        wf(Sf.bind(null, a, u, e), [e]),
        (a.flags |= 2048),
        Na(9, { destroy: void 0 }, bf.bind(null, a, u, l, t), null),
        l
      );
    },
    useId: function () {
      var e = ke(),
        t = pe.identifierPrefix;
      if (ce) {
        var l = Ot,
          a = _t;
        ((l = (a & ~(1 << (32 - it(a) - 1))).toString(32) + l),
          (t = "_" + t + "R_" + l),
          (l = pu++),
          0 < l && (t += "H" + l.toString(32)),
          (t += "_"));
      } else ((l = Zh++), (t = "_" + t + "r_" + l.toString(32) + "_"));
      return (e.memoizedState = t);
    },
    useHostTransitionStatus: zc,
    useFormState: Rf,
    useActionState: Rf,
    useOptimistic: function (e) {
      var t = ke();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = l),
        (t = Tc.bind(null, ee, !0, l)),
        (l.dispatch = t),
        [e, t]
      );
    },
    useMemoCache: xc,
    useCacheRefresh: function () {
      return (ke().memoizedState = $h.bind(null, ee));
    },
    useEffectEvent: function (e) {
      var t = ke(),
        l = { impl: e };
      return (
        (t.memoizedState = l),
        function () {
          if ((fe & 2) !== 0) throw Error(r(440));
          return l.impl.apply(void 0, arguments);
        }
      );
    },
  },
    Mc = {
      readContext: Qe,
      use: Su,
      useCallback: Gf,
      useContext: Qe,
      useEffect: jc,
      useImperativeHandle: Yf,
      useInsertionEffect: Bf,
      useLayoutEffect: Lf,
      useMemo: Xf,
      useReducer: ju,
      useRef: Uf,
      useState: function () {
        return ju(Kt);
      },
      useDebugValue: Nc,
      useDeferredValue: function (e, t) {
        var l = Oe();
        return Qf(l, ve.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ju(Kt)[0],
          t = Oe().memoizedState;
        return [typeof e == "boolean" ? e : on(e), t];
      },
      useSyncExternalStore: gf,
      useId: Jf,
      useHostTransitionStatus: zc,
      useFormState: _f,
      useActionState: _f,
      useOptimistic: function (e, t) {
        var l = Oe();
        return Ef(l, ve, e, t);
      },
      useMemoCache: xc,
      useCacheRefresh: kf,
    };
  Mc.useEffectEvent = Hf;
  var Pf = {
    readContext: Qe,
    use: Su,
    useCallback: Gf,
    useContext: Qe,
    useEffect: jc,
    useImperativeHandle: Yf,
    useInsertionEffect: Bf,
    useLayoutEffect: Lf,
    useMemo: Xf,
    useReducer: pc,
    useRef: Uf,
    useState: function () {
      return pc(Kt);
    },
    useDebugValue: Nc,
    useDeferredValue: function (e, t) {
      var l = Oe();
      return ve === null ? Ec(l, e, t) : Qf(l, ve.memoizedState, e, t);
    },
    useTransition: function () {
      var e = pc(Kt)[0],
        t = Oe().memoizedState;
      return [typeof e == "boolean" ? e : on(e), t];
    },
    useSyncExternalStore: gf,
    useId: Jf,
    useHostTransitionStatus: zc,
    useFormState: Df,
    useActionState: Df,
    useOptimistic: function (e, t) {
      var l = Oe();
      return ve !== null
        ? Ef(l, ve, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: xc,
    useCacheRefresh: kf,
  };
  Pf.useEffectEvent = Hf;
  function Cc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : A({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Rc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = ht(),
        n = hl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = ml(e, n, a)),
        t !== null && (lt(t, e, a), cn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = ht(),
        n = hl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = ml(e, n, a)),
        t !== null && (lt(t, e, a), cn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = ht(),
        a = hl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ml(e, a, l)),
        t !== null && (lt(t, e, l), cn(t, e, l)));
    },
  };
  function eo(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ia(l, a) || !Ia(n, u)
          : !0
    );
  }
  function to(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Rc.enqueueReplaceState(t, t.state, null));
  }
  function Jl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = A({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function lo(e) {
    au(e);
  }
  function ao(e) {
    console.error(e);
  }
  function no(e) {
    au(e);
  }
  function zu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function uo(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function _c(e, t, l) {
    return (
      (l = hl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        zu(e, t);
      }),
      l
    );
  }
  function io(e) {
    return ((e = hl(e)), (e.tag = 3), e);
  }
  function co(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          uo(t, l, a);
        }));
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (e.callback = function () {
        (uo(t, l, a),
          typeof n != "function" &&
          (bl === null ? (bl = new Set([this])) : bl.add(this)));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function Ih(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
        a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
          t !== null && va(t, l, n, !0),
          (l = rt.current),
          l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              jt === null ? Lu() : l.alternate === null && Me === 0 && (Me = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === hu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  ls(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === hu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([a]),
                    }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  ls(e, a, n)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (ls(e, a, n), Lu(), !1);
    }
    if (ce)
      return (
        (t = rt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== $i && ((e = Error(r(422), { cause: a })), tn(gt(e, l))))
          : (a !== $i && ((t = Error(r(423), { cause: a })), tn(gt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = gt(a, l)),
            (n = _c(e.stateNode, a, n)),
            cc(e, n),
            Me !== 4 && (Me = 2)),
        !1
      );
    var u = Error(r(520), { cause: a });
    if (
      ((u = gt(u, l)),
        Sn === null ? (Sn = [u]) : Sn.push(u),
        Me !== 4 && (Me = 2),
        t === null)
    )
      return !0;
    ((a = gt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = _c(l.stateNode, a, e)),
            cc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
              (u = l.stateNode),
              (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (bl === null || !bl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = io(n)),
              co(n, e, l, a),
              cc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Oc = Error(r(461)),
    we = !1;
  function Ze(e, t, l, a) {
    t.child = e === null ? of(t, null, l, a) : Vl(t, e.child, l, a);
  }
  function so(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var o in a) o !== "ref" && (c[o] = a[o]);
    } else c = a;
    return (
      Gl(t),
      (a = hc(e, t, l, c, u, n)),
      (o = mc()),
      e !== null && !we
        ? (vc(e, t, n), Jt(e, t, n))
        : (ce && o && ki(t), (t.flags |= 1), Ze(e, t, a, n), t.child)
    );
  }
  function ro(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Vi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), fo(e, t, u, a, n))
        : ((e = cu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Yc(e, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ia), l(c, a) && e.ref === t.ref)
      )
        return Jt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Gt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function fo(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ia(u, a) && e.ref === t.ref)
        if (((we = !1), (t.pendingProps = a = u), Yc(e, n)))
          (e.flags & 131072) !== 0 && (we = !0);
        else return ((t.lanes = e.lanes), Jt(e, t, n));
    }
    return Dc(e, t, l, a, n);
  }
  function oo(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null;)
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return ho(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ou(t, u !== null ? u.cachePool : null),
          u !== null ? mf(t, u) : rc(),
          vf(t));
      else
        return (
          (a = t.lanes = 536870912),
          ho(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (ou(t, u.cachePool), mf(t, u), yl(), (t.memoizedState = null))
        : (e !== null && ou(t, null), rc(), yl());
    return (Ze(e, t, n, l), t.child);
  }
  function mn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
      t.stateNode !== null ||
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t.sibling
    );
  }
  function ho(e, t, l, a, n) {
    var u = ac();
    return (
      (u = u === null ? null : { parent: De._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && ou(t, null),
      rc(),
      vf(t),
      e !== null && va(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Tu(e, t) {
    return (
      (t = Cu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function mo(e, t, l) {
    return (
      Vl(t, e.child, null, l),
      (e = Tu(t, t.pendingProps)),
      (e.flags |= 2),
      ft(t),
      (t.memoizedState = null),
      e
    );
  }
  function Ph(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ce) {
        if (a.mode === "hidden")
          return ((e = Tu(t, a)), (t.lanes = 536870912), mn(null, e));
        if (
          (oc(t),
            (e = je)
              ? ((e = zd(e, St)),
                (e = e !== null && e.data === "&" ? e : null),
                e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: sl !== null ? { id: _t, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                  (l = Wr(e)),
                  (l.return = t),
                  (t.child = l),
                  (Xe = t),
                  (je = null)))
              : (e = null),
            e === null)
        )
          throw fl(t);
        return ((t.lanes = 536870912), null);
      }
      return Tu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if ((oc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = mo(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (we || va(e, t, l, !1), (n = (l & e.childLanes) !== 0), we || n)
      ) {
        if (
          ((a = pe),
            a !== null && ((c = lr(a, l)), c !== 0 && c !== u.retryLane))
        )
          throw ((u.retryLane = c), Bl(e, c), lt(a, e, c), Oc);
        (Lu(), (t = mo(e, t, l)));
      } else
        ((e = u.treeContext),
          (je = Nt(c.nextSibling)),
          (Xe = t),
          (ce = !0),
          (rl = null),
          (St = !1),
          e !== null && Ir(t, e),
          (t = Tu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Gt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Mu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Dc(e, t, l, a, n) {
    return (
      Gl(t),
      (l = hc(e, t, l, a, void 0, n)),
      (a = mc()),
      e !== null && !we
        ? (vc(e, t, n), Jt(e, t, n))
        : (ce && a && ki(t), (t.flags |= 1), Ze(e, t, l, n), t.child)
    );
  }
  function vo(e, t, l, a, n, u) {
    return (
      Gl(t),
      (t.updateQueue = null),
      (l = xf(t, a, l, n)),
      yf(e),
      (a = mc()),
      e !== null && !we
        ? (vc(e, t, u), Jt(e, t, u))
        : (ce && a && ki(t), (t.flags |= 1), Ze(e, t, l, u), t.child)
    );
  }
  function yo(e, t, l, a, n) {
    if ((Gl(t), t.stateNode === null)) {
      var u = oa,
        c = l.contextType;
      (typeof c == "object" && c !== null && (u = Qe(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Rc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        uc(t),
        (c = l.contextType),
        (u.context = typeof c == "object" && c !== null ? Qe(c) : oa),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (Cc(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
          c !== u.state && Rc.enqueueReplaceState(u, u.state, null),
          rn(t, a, u, n),
          sn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var o = t.memoizedProps,
        h = Jl(l, o);
      u.props = h;
      var N = u.context,
        R = l.contextType;
      ((c = oa), typeof R == "object" && R !== null && (c = Qe(R)));
      var D = l.getDerivedStateFromProps;
      ((R =
        typeof D == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (o = t.pendingProps !== o),
        R ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o || N !== c) && to(t, u, a, c)),
        (dl = !1));
      var E = t.memoizedState;
      ((u.state = E),
        rn(t, a, u, n),
        sn(),
        (N = t.memoizedState),
        o || E !== N || dl
          ? (typeof D == "function" && (Cc(t, l, D, a), (N = t.memoizedState)),
            (h = dl || eo(t, l, h, a, E, N, c))
              ? (R ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = N)),
            (u.props = a),
            (u.state = N),
            (u.context = c),
            (a = h))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = t.stateNode),
        ic(e, t),
        (c = t.memoizedProps),
        (R = Jl(l, c)),
        (u.props = R),
        (D = t.pendingProps),
        (E = u.context),
        (N = l.contextType),
        (h = oa),
        typeof N == "object" && N !== null && (h = Qe(N)),
        (o = l.getDerivedStateFromProps),
        (N =
          typeof o == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== D || E !== h) && to(t, u, a, h)),
        (dl = !1),
        (E = t.memoizedState),
        (u.state = E),
        rn(t, a, u, n),
        sn());
      var T = t.memoizedState;
      c !== D ||
        E !== T ||
        dl ||
        (e !== null && e.dependencies !== null && ru(e.dependencies))
        ? (typeof o == "function" && (Cc(t, l, o, a), (T = t.memoizedState)),
          (R =
            dl ||
            eo(t, l, R, a, E, T, h) ||
            (e !== null && e.dependencies !== null && ru(e.dependencies)))
            ? (N ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(a, T, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(a, T, h)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
              (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
              (c === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = T)),
          (u.props = a),
          (u.state = T),
          (u.context = h),
          (a = R))
        : (typeof u.componentDidUpdate != "function" ||
          (c === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Mu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Vl(t, e.child, null, n)),
              (t.child = Vl(t, null, l, n)))
            : Ze(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Jt(e, t, n)),
      e
    );
  }
  function xo(e, t, l, a) {
    return (ql(), (t.flags |= 256), Ze(e, t, l, a), t.child);
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function wc(e) {
    return { baseLanes: e, cachePool: nf() };
  }
  function Hc(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= dt), e);
  }
  function go(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0),
        c && ((n = !0), (t.flags &= -129)),
        (c = (t.flags & 32) !== 0),
        (t.flags &= -33),
        e === null)
    ) {
      if (ce) {
        if (
          (n ? vl(t) : yl(),
            (e = je)
              ? ((e = zd(e, St)),
                (e = e !== null && e.data !== "&" ? e : null),
                e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: sl !== null ? { id: _t, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                  (l = Wr(e)),
                  (l.return = t),
                  (t.child = l),
                  (Xe = t),
                  (je = null)))
              : (e = null),
            e === null)
        )
          throw fl(t);
        return (gs(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var o = a.children;
      return (
        (a = a.fallback),
        n
          ? (yl(),
            (n = t.mode),
            (o = Cu({ mode: "hidden", children: o }, n)),
            (a = Ll(a, n, l, null)),
            (o.return = t),
            (a.return = t),
            (o.sibling = a),
            (t.child = o),
            (a = t.child),
            (a.memoizedState = wc(l)),
            (a.childLanes = Hc(e, c, l)),
            (t.memoizedState = Uc),
            mn(null, a))
          : (vl(t), Bc(t, o))
      );
    }
    var h = e.memoizedState;
    if (h !== null && ((o = h.dehydrated), o !== null)) {
      if (u)
        t.flags & 256
          ? (vl(t), (t.flags &= -257), (t = Lc(e, t, l)))
          : t.memoizedState !== null
            ? (yl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (yl(),
              (o = a.fallback),
              (n = t.mode),
              (a = Cu({ mode: "visible", children: a.children }, n)),
              (o = Ll(o, n, l, null)),
              (o.flags |= 2),
              (a.return = t),
              (o.return = t),
              (a.sibling = o),
              (t.child = a),
              Vl(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = wc(l)),
              (a.childLanes = Hc(e, c, l)),
              (t.memoizedState = Uc),
              (t = mn(null, a)));
      else if ((vl(t), gs(o))) {
        if (((c = o.nextSibling && o.nextSibling.dataset), c)) var N = c.dgst;
        ((c = N),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = c),
          tn({ value: a, source: null, stack: null }),
          (t = Lc(e, t, l)));
      } else if (
        (we || va(e, t, l, !1), (c = (l & e.childLanes) !== 0), we || c)
      ) {
        if (
          ((c = pe),
            c !== null && ((a = lr(c, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), Bl(e, a), lt(c, e, a), Oc);
        (xs(o) || Lu(), (t = Lc(e, t, l)));
      } else
        xs(o)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = h.treeContext),
            (je = Nt(o.nextSibling)),
            (Xe = t),
            (ce = !0),
            (rl = null),
            (St = !1),
            e !== null && Ir(t, e),
            (t = Bc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (yl(),
        (o = a.fallback),
        (n = t.mode),
        (h = e.child),
        (N = h.sibling),
        (a = Gt(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        N !== null ? (o = Gt(N, o)) : ((o = Ll(o, n, l, null)), (o.flags |= 2)),
        (o.return = t),
        (a.return = t),
        (a.sibling = o),
        (t.child = a),
        mn(null, a),
        (a = t.child),
        (o = e.child.memoizedState),
        o === null
          ? (o = wc(l))
          : ((n = o.cachePool),
            n !== null
              ? ((h = De._currentValue),
                (n = n.parent !== h ? { parent: h, pool: h } : n))
              : (n = nf()),
            (o = { baseLanes: o.baseLanes | l, cachePool: n })),
        (a.memoizedState = o),
        (a.childLanes = Hc(e, c, l)),
        (t.memoizedState = Uc),
        mn(e.child, a))
      : (vl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Gt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
        ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Bc(e, t) {
    return (
      (t = Cu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cu(e, t) {
    return ((e = st(22, e, null, t)), (e.lanes = 0), e);
  }
  function Lc(e, t, l) {
    return (
      Vl(t, e.child, null, l),
      (e = Bc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function po(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Pi(e.return, t, l));
  }
  function qc(e, t, l, a, n, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u,
      })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = l),
        (c.tailMode = n),
        (c.treeForkCount = u));
  }
  function bo(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var c = _e.current,
      o = (c & 2) !== 0;
    if (
      (o ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
        B(_e, c),
        Ze(e, t, a, l),
        (a = ce ? en : 0),
        !o && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && po(e, l, t);
        else if (e.tag === 19) po(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null;)
          ((e = l.alternate),
            e !== null && xu(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          qc(t, !1, n, l, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null;) {
          if (((e = n.alternate), e !== null && xu(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        qc(t, !0, l, null, u, a);
        break;
      case "together":
        qc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
        (pl |= t.lanes),
        (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((va(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Gt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Gt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Yc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ru(e)));
  }
  function em(e, t, l) {
    switch (t.tag) {
      case 3:
        (Je(t, t.stateNode.containerInfo),
          ol(t, De, e.memoizedState.cache),
          ql());
        break;
      case 27:
      case 5:
        qa(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        ol(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), oc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (vl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? go(e, t, l)
              : (vl(t), (e = Jt(e, t, l)), e !== null ? e.sibling : null);
        vl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
            a || (va(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
            n)
        ) {
          if (a) return bo(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
            n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
            B(_e, _e.current),
            a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), oo(e, t, l, t.pendingProps));
      case 24:
        ol(t, De, e.memoizedState.cache);
    }
    return Jt(e, t, l);
  }
  function So(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) we = !0;
      else {
        if (!Yc(e, l) && (t.flags & 128) === 0) return ((we = !1), em(e, t, l));
        we = (e.flags & 131072) !== 0;
      }
    else ((we = !1), ce && (t.flags & 1048576) !== 0 && Fr(t, en, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ql(t.elementType)), (t.type = e), typeof e == "function"))
            Vi(e)
              ? ((a = Jl(e, a)), (t.tag = 1), (t = yo(null, t, e, a, l)))
              : ((t.tag = 0), (t = Dc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Se) {
                ((t.tag = 11), (t = so(null, t, e, a, l)));
                break e;
              } else if (n === I) {
                ((t.tag = 14), (t = ro(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = Bt(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Dc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Jl(a, t.pendingProps)), yo(e, t, a, n, l));
      case 3:
        e: {
          if ((Je(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), ic(e, t), rn(t, a, null, l));
          var c = t.memoizedState;
          if (
            ((a = c.cache),
              ol(t, De, a),
              a !== u.cache && ec(t, [De], l, !0),
              sn(),
              (a = c.element),
              u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
                (t.updateQueue.baseState = u),
                (t.memoizedState = u),
                t.flags & 256)
            ) {
              t = xo(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = gt(Error(r(424)), t)), tn(n), (t = xo(e, t, a, l)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                e.nodeType === 9
                  ? (e = e.body)
                  : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                je = Nt(e.firstChild),
                Xe = t,
                ce = !0,
                rl = null,
                St = !0,
                l = of(t, null, a, l),
                t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((ql(), a === n)) {
              t = Jt(e, t, l);
              break e;
            }
            Ze(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Mu(e, t),
          e === null
            ? (l = Od(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ce ||
              ((l = t.type),
                (e = t.pendingProps),
                (a = Vu(le.current).createElement(l)),
                (a[Ge] = t),
                (a[$e] = e),
                Ve(a, l, e),
                Le(a),
                (t.stateNode = a))
            : (t.memoizedState = Od(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState,
            )),
          null
        );
      case 27:
        return (
          qa(t),
          e === null &&
          ce &&
          ((a = t.stateNode = Cd(t.type, t.pendingProps, le.current)),
            (Xe = t),
            (St = !0),
            (n = je),
            El(t.type) ? ((ps = n), (je = Nt(a.firstChild))) : (je = n)),
          Ze(e, t, t.pendingProps.children, l),
          Mu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
          ce &&
          ((n = a = je) &&
            ((a = Rm(a, t.type, t.pendingProps, St)),
              a !== null
                ? ((t.stateNode = a),
                  (Xe = t),
                  (je = Nt(a.firstChild)),
                  (St = !1),
                  (n = !0))
                : (n = !1)),
            n || fl(t)),
          qa(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          ms(n, u) ? (a = null) : c !== null && ms(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
          ((n = hc(e, t, Vh, null, null, l)), (Cn._currentValue = n)),
          Mu(e, t),
          Ze(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
          ce &&
          ((e = l = je) &&
            ((l = _m(l, t.pendingProps, St)),
              l !== null
                ? ((t.stateNode = l), (Xe = t), (je = null), (e = !0))
                : (e = !1)),
            e || fl(t)),
          null
        );
      case 13:
        return go(e, t, l);
      case 4:
        return (
          Je(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Vl(t, null, a, l)) : Ze(e, t, a, l),
          t.child
        );
      case 11:
        return so(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ze(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ze(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ze(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          ol(t, t.type, a.value),
          Ze(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Gl(t),
          (n = Qe(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ze(e, t, a, l),
          t.child
        );
      case 14:
        return ro(e, t, t.type, t.pendingProps, l);
      case 15:
        return fo(e, t, t.type, t.pendingProps, l);
      case 19:
        return bo(e, t, l);
      case 31:
        return Ph(e, t, l);
      case 22:
        return oo(e, t, l, t.pendingProps);
      case 24:
        return (
          Gl(t),
          (a = Qe(De)),
          e === null
            ? ((n = ac()),
              n === null &&
              ((n = pe),
                (u = tc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              uc(t),
              ol(t, De, n))
            : ((e.lanes & l) !== 0 && (ic(e, t), rn(t, null, null, l), sn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                  (t.memoizedState = t.updateQueue.baseState = n),
                  ol(t, De, a))
                : ((a = u.cache),
                  ol(t, De, a),
                  a !== n.cache && ec(t, [De], l, !0))),
          Ze(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function kt(e) {
    e.flags |= 4;
  }
  function Gc(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ko()) e.flags |= 8192;
        else throw ((Zl = hu), nc);
    } else e.flags &= -16777217;
  }
  function jo(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Bd(t)))
      if (ko()) e.flags |= 8192;
      else throw ((Zl = hu), nc);
  }
  function Ru(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
      ((t = e.tag !== 22 ? Ps() : 536870912), (e.lanes |= t), (Ta |= t)));
  }
  function vn(e, t) {
    if (!ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null;)
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null;)
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null;)
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null;)
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function tm(e, t, l) {
    var a = t.pendingProps;
    switch ((Wi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ne(t), null);
      case 1:
        return (Ne(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Zt(De),
          Re(),
          l.pendingContext &&
          ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
          (ma(t)
            ? kt(t)
            : e === null ||
            (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
            ((t.flags |= 1024), Fi())),
          Ne(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (kt(t),
              u !== null ? (Ne(t), jo(t, u)) : (Ne(t), Gc(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (kt(t), Ne(t), jo(t, u))
                : (Ne(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && kt(t),
                Ne(t),
                Gc(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (Gn(t),
            (l = le.current),
            (n = t.type),
            e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ne(t), null);
          }
          ((e = Z.current),
            ma(t) ? Pr(t) : ((e = Cd(n, a, l)), (t.stateNode = e), kt(t)));
        }
        return (Ne(t), null);
      case 5:
        if ((Gn(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ne(t), null);
          }
          if (((u = Z.current), ma(t))) Pr(t);
          else {
            var c = Vu(le.current);
            switch (u) {
              case 1:
                u = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = c.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? c.createElement("select", { is: a.is })
                        : c.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? c.createElement(n, { is: a.is })
                        : c.createElement(n);
                }
            }
            ((u[Ge] = t), (u[$e] = a));
            e: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = u;
            e: switch ((Ve(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && kt(t);
          }
        }
        return (
          Ne(t),
          Gc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = le.current), ma(t))) {
            if (
              ((e = t.stateNode),
                (l = t.memoizedProps),
                (a = null),
                (n = Xe),
                n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[Ge] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                gd(e.nodeValue, l)
              )),
              e || fl(t, !0));
          } else
            ((e = Vu(e).createTextNode(a)), (e[Ge] = t), (t.stateNode = e));
        }
        return (Ne(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ma(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                  (e = e !== null ? e.dehydrated : null),
                  !e)
              )
                throw Error(r(557));
              e[Ge] = t;
            } else
              (ql(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ne(t), (e = !1));
          } else
            ((l = Fi()),
              e !== null &&
              e.memoizedState !== null &&
              (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (Ne(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
            e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = ma(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = t.memoizedState),
                  (n = n !== null ? n.dehydrated : null),
                  !n)
              )
                throw Error(r(317));
              n[Ge] = t;
            } else
              (ql(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ne(t), (n = !1));
          } else
            ((n = Fi()),
              e !== null &&
              e.memoizedState !== null &&
              (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return (
          ft(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
              ((a = t.child),
                (n = null),
                a.alternate !== null &&
                a.alternate.memoizedState !== null &&
                a.alternate.memoizedState.cachePool !== null &&
                (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                a.memoizedState.cachePool !== null &&
                (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Ru(t, t.updateQueue),
              Ne(t),
              null)
        );
      case 4:
        return (Re(), e === null && rs(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Zt(t.type), Ne(t), null);
      case 19:
        if ((U(_e), (a = t.memoizedState), a === null)) return (Ne(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) vn(a, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = xu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                    vn(a, !1),
                    e = u.updateQueue,
                    t.updateQueue = e,
                    Ru(t, e),
                    t.subtreeFlags = 0,
                    e = l,
                    l = t.child;
                    l !== null;
                  )
                    (kr(l, e), (l = l.sibling));
                  return (
                    B(_e, (_e.current & 1) | 2),
                    ce && Xt(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              nt() > wu &&
              ((t.flags |= 128), (n = !0), vn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = xu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                  (n = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ru(t, e),
                  vn(a, !0),
                  a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !ce)
              )
                return (Ne(t), null);
            } else
              2 * nt() - a.renderingStartTime > wu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), vn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = nt()),
            (e.sibling = null),
            (l = _e.current),
            B(_e, n ? (l & 1) | 2 : l & 1),
            ce && Xt(t, a.treeForkCount),
            e)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          ft(t),
          fc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
            (t.flags & 128) === 0 &&
            (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          (l = t.updateQueue),
          l !== null && Ru(t, l.retryQueue),
          (l = null),
          e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && U(Xl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Zt(De),
          Ne(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function lm(e, t) {
    switch ((Wi(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Zt(De),
          Re(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Gn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ft(t), t.alternate === null)) throw Error(r(340));
          ql();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ft(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          ql();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (U(_e), null);
      case 4:
        return (Re(), null);
      case 10:
        return (Zt(t.type), null);
      case 22:
      case 23:
        return (
          ft(t),
          fc(),
          e !== null && U(Xl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Zt(De), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function No(e, t) {
    switch ((Wi(t), t.tag)) {
      case 3:
        (Zt(De), Re());
        break;
      case 26:
      case 27:
      case 5:
        Gn(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        U(_e);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        (ft(t), fc(), e !== null && U(Xl));
        break;
      case 24:
        Zt(De);
    }
  }
  function yn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            ((a = u()), (c.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (o) {
      he(t, t.return, o);
    }
  }
  function xl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              o = c.destroy;
            if (o !== void 0) {
              ((c.destroy = void 0), (n = t));
              var h = l,
                N = o;
              try {
                N();
              } catch (R) {
                he(n, h, R);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (R) {
      he(t, t.return, R);
    }
  }
  function Eo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        hf(t, l);
      } catch (a) {
        he(e, e.return, a);
      }
    }
  }
  function Ao(e, t, l) {
    ((l.props = Jl(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      he(e, t, a);
    }
  }
  function xn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      he(e, t, n);
    }
  }
  function Dt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          he(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          he(e, t, n);
        }
      else l.current = null;
  }
  function zo(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      he(e, e.return, n);
    }
  }
  function Xc(e, t, l) {
    try {
      var a = e.stateNode;
      (Em(a, e.type, l, t), (a[$e] = t));
    } catch (n) {
      he(e, e.return, n);
    }
  }
  function To(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && El(e.type)) ||
      e.tag === 4
    );
  }
  function Qc(e) {
    e: for (; ;) {
      for (; e.sibling === null;) {
        if (e.return === null || To(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && El(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
            ? l.body
            : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
          ).insertBefore(e, t)
          : ((t =
            l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = qt)));
    else if (
      a !== 4 &&
      (a === 27 && El(e.type) && ((l = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
    )
      for (Zc(e, t, l), e = e.sibling; e !== null;)
        (Zc(e, t, l), (e = e.sibling));
  }
  function _u(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && El(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (_u(e, t, l), e = e.sibling; e !== null;)
        (_u(e, t, l), (e = e.sibling));
  }
  function Mo(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length;)
        t.removeAttributeNode(n[0]);
      (Ve(t, a, l), (t[Ge] = e), (t[$e] = l));
    } catch (u) {
      he(e, e.return, u);
    }
  }
  var Wt = !1,
    He = !1,
    Vc = !1,
    Co = typeof WeakSet == "function" ? WeakSet : Set,
    qe = null;
  function am(e, t) {
    if (((e = e.containerInfo), (ds = Iu), (e = qr(e)), Li(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var c = 0,
              o = -1,
              h = -1,
              N = 0,
              R = 0,
              D = e,
              E = null;
            t: for (; ;) {
              for (
                var T;
                D !== l || (n !== 0 && D.nodeType !== 3) || (o = c + n),
                D !== u || (a !== 0 && D.nodeType !== 3) || (h = c + a),
                D.nodeType === 3 && (c += D.nodeValue.length),
                (T = D.firstChild) !== null;
              )
                ((E = D), (D = T));
              for (; ;) {
                if (D === e) break t;
                if (
                  (E === l && ++N === n && (o = c),
                    E === u && ++R === a && (h = c),
                    (T = D.nextSibling) !== null)
                )
                  break;
                ((D = E), (E = D.parentNode));
              }
              D = T;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hs = { focusedElem: e, selectionRange: l }, Iu = !1, qe = t;
      qe !== null;
    )
      if (
        ((t = qe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (qe = e));
      else
        for (; qe !== null;) {
          switch (((t = qe), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                  (e = e !== null ? e.events : null),
                  e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var G = Jl(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(G, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (k) {
                  he(l, l.return, k);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  ys(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ys(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (qe = e));
            break;
          }
          qe = t.return;
        }
  }
  function Ro(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Ft(e, l), a & 4 && yn(5, l));
        break;
      case 1:
        if ((Ft(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              he(l, l.return, c);
            }
          else {
            var n = Jl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              he(l, l.return, c);
            }
          }
        (a & 64 && Eo(l), a & 512 && xn(l, l.return));
        break;
      case 3:
        if ((Ft(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            hf(e, t);
          } catch (c) {
            he(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Mo(l);
      case 26:
      case 5:
        (Ft(e, l), t === null && a & 4 && zo(l), a & 512 && xn(l, l.return));
        break;
      case 12:
        Ft(e, l);
        break;
      case 31:
        (Ft(e, l), a & 4 && Do(e, l));
        break;
      case 13:
        (Ft(e, l),
          a & 4 && Uo(e, l),
          a & 64 &&
          ((e = l.memoizedState),
            e !== null &&
            ((e = e.dehydrated),
              e !== null && ((l = dm.bind(null, l)), Om(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Wt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || He), (n = Wt));
          var u = He;
          ((Wt = a),
            (He = t) && !u ? It(e, l, (l.subtreeFlags & 8772) !== 0) : Ft(e, l),
            (Wt = n),
            (He = u));
        }
        break;
      case 30:
        break;
      default:
        Ft(e, l);
    }
  }
  function _o(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), _o(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Si(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ee = null,
    Ie = !1;
  function $t(e, t, l) {
    for (l = l.child; l !== null;) (Oo(e, t, l), (l = l.sibling));
  }
  function Oo(e, t, l) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(Ya, l);
      } catch { }
    switch (l.tag) {
      case 26:
        (He || Dt(l, t),
          $t(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        He || Dt(l, t);
        var a = Ee,
          n = Ie;
        (El(l.type) && ((Ee = l.stateNode), (Ie = !1)),
          $t(e, t, l),
          zn(l.stateNode),
          (Ee = a),
          (Ie = n));
        break;
      case 5:
        He || Dt(l, t);
      case 6:
        if (
          ((a = Ee),
            (n = Ie),
            (Ee = null),
            $t(e, t, l),
            (Ee = a),
            (Ie = n),
            Ee !== null)
        )
          if (Ie)
            try {
              (Ee.nodeType === 9
                ? Ee.body
                : Ee.nodeName === "HTML"
                  ? Ee.ownerDocument.body
                  : Ee
              ).removeChild(l.stateNode);
            } catch (u) {
              he(l, t, u);
            }
          else
            try {
              Ee.removeChild(l.stateNode);
            } catch (u) {
              he(l, t, u);
            }
        break;
      case 18:
        Ee !== null &&
          (Ie
            ? ((e = Ee),
              Ed(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              wa(e))
            : Ed(Ee, l.stateNode));
        break;
      case 4:
        ((a = Ee),
          (n = Ie),
          (Ee = l.stateNode.containerInfo),
          (Ie = !0),
          $t(e, t, l),
          (Ee = a),
          (Ie = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xl(2, l, t), He || xl(4, l, t), $t(e, t, l));
        break;
      case 1:
        (He ||
          (Dt(l, t),
            (a = l.stateNode),
            typeof a.componentWillUnmount == "function" && Ao(l, t, a)),
          $t(e, t, l));
        break;
      case 21:
        $t(e, t, l);
        break;
      case 22:
        ((He = (a = He) || l.memoizedState !== null), $t(e, t, l), (He = a));
        break;
      default:
        $t(e, t, l);
    }
  }
  function Do(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        wa(e);
      } catch (l) {
        he(t, t.return, l);
      }
    }
  }
  function Uo(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
        e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        wa(e);
      } catch (l) {
        he(t, t.return, l);
      }
  }
  function nm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Co()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Co()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ou(e, t) {
    var l = nm(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = hm.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Pe(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          c = t,
          o = c;
        e: for (; o !== null;) {
          switch (o.tag) {
            case 27:
              if (El(o.type)) {
                ((Ee = o.stateNode), (Ie = !1));
                break e;
              }
              break;
            case 5:
              ((Ee = o.stateNode), (Ie = !1));
              break e;
            case 3:
            case 4:
              ((Ee = o.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          o = o.return;
        }
        if (Ee === null) throw Error(r(160));
        (Oo(u, c, n),
          (Ee = null),
          (Ie = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (wo(t, e), (t = t.sibling));
  }
  var Mt = null;
  function wo(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Pe(t, e),
          et(e),
          a & 4 && (xl(3, e, e.return), yn(3, e), xl(5, e, e.return)));
        break;
      case 1:
        (Pe(t, e),
          et(e),
          a & 512 && (He || l === null || Dt(l, l.return)),
          a & 64 &&
          Wt &&
          ((e = e.updateQueue),
            e !== null &&
            ((a = e.callbacks),
              a !== null &&
              ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Mt;
        if (
          (Pe(t, e),
            et(e),
            a & 512 && (He || l === null || Dt(l, l.return)),
            a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Qa] ||
                          u[Ge] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                        ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Ve(u, a, l),
                        (u[Ge] = e),
                        Le(u),
                        (a = u));
                      break e;
                    case "link":
                      var c = wd("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (
                            ((u = c[o]),
                              u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                              (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                              (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                              (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(o, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Ve(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (c = wd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (o = 0; o < c.length; o++)
                          if (
                            ((u = c[o]),
                              u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                              (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                              (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                              (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                              (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(o, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Ve(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((u[Ge] = e), Le(u), (a = u));
                }
                e.stateNode = a;
              } else Hd(n, e.type, e.stateNode);
            else e.stateNode = Ud(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                ? l.stateNode !== null &&
                ((l = l.stateNode), l.parentNode.removeChild(l))
                : u.count--,
                a === null
                  ? Hd(n, e.type, e.stateNode)
                  : Ud(n, a, e.memoizedProps))
              : a === null &&
              e.stateNode !== null &&
              Xc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Pe(t, e),
          et(e),
          a & 512 && (He || l === null || Dt(l, l.return)),
          l !== null && a & 4 && Xc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Pe(t, e),
            et(e),
            a & 512 && (He || l === null || Dt(l, l.return)),
            e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            na(n, "");
          } catch (G) {
            he(e, e.return, G);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Xc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Vc = !0));
        break;
      case 6:
        if ((Pe(t, e), et(e), a & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (G) {
            he(e, e.return, G);
          }
        }
        break;
      case 3:
        if (
          ((ku = null),
            (n = Mt),
            (Mt = Ku(t.containerInfo)),
            Pe(t, e),
            (Mt = n),
            et(e),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            wa(t.containerInfo);
          } catch (G) {
            he(e, e.return, G);
          }
        Vc && ((Vc = !1), Ho(e));
        break;
      case 4:
        ((a = Mt),
          (Mt = Ku(e.stateNode.containerInfo)),
          Pe(t, e),
          et(e),
          (Mt = a));
        break;
      case 12:
        (Pe(t, e), et(e));
        break;
      case 31:
        (Pe(t, e),
          et(e),
          a & 4 &&
          ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ou(e, a))));
        break;
      case 13:
        (Pe(t, e),
          et(e),
          e.child.flags & 8192 &&
          (e.memoizedState !== null) !=
          (l !== null && l.memoizedState !== null) &&
          (Uu = nt()),
          a & 4 &&
          ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ou(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          N = Wt,
          R = He;
        if (
          ((Wt = N || n),
            (He = R || h),
            Pe(t, e),
            (He = R),
            (Wt = N),
            et(e),
            a & 8192)
        )
          e: for (
            t = e.stateNode,
            t._visibility = n ? t._visibility & -2 : t._visibility | 1,
            n && (l === null || h || Wt || He || kl(e)),
            l = null,
            t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (((u = h.stateNode), n))
                    ((c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    o = h.stateNode;
                    var D = h.memoizedProps.style,
                      E =
                        D != null && D.hasOwnProperty("display")
                          ? D.display
                          : null;
                    o.style.display =
                      E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (G) {
                  he(h, h.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (G) {
                  he(h, h.return, G);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                h = t;
                try {
                  var T = h.stateNode;
                  n ? Ad(T, !0) : Ad(h.stateNode, !1);
                } catch (G) {
                  he(h, h.return, G);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
            a !== null &&
            ((l = a.retryQueue),
              l !== null && ((a.retryQueue = null), Ou(e, l))));
        break;
      case 19:
        (Pe(t, e),
          et(e),
          a & 4 &&
          ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ou(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Pe(t, e), et(e));
    }
  }
  function et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null;) {
          if (To(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Qc(e);
            _u(e, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (na(c, ""), (l.flags &= -33));
            var o = Qc(e);
            _u(e, o, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              N = Qc(e);
            Zc(e, N, h);
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        he(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ho(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (Ho(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Ft(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (Ro(e, t.alternate, t), (t = t.sibling));
  }
  function kl(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (xl(4, t, t.return), kl(t));
          break;
        case 1:
          Dt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && Ao(t, t.return, l),
            kl(t));
          break;
        case 27:
          zn(t.stateNode);
        case 26:
        case 5:
          (Dt(t, t.return), kl(t));
          break;
        case 22:
          t.memoizedState === null && kl(t);
          break;
        case 30:
          kl(t);
          break;
        default:
          kl(t);
      }
      e = e.sibling;
    }
  }
  function It(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate,
        n = e,
        u = t,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (It(n, u, l), yn(4, u));
          break;
        case 1:
          if (
            (It(n, u, l),
              (a = u),
              (n = a.stateNode),
              typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (N) {
              he(a, a.return, N);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var o = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  df(h[n], o);
            } catch (N) {
              he(a, a.return, N);
            }
          }
          (l && c & 64 && Eo(u), xn(u, u.return));
          break;
        case 27:
          Mo(u);
        case 26:
        case 5:
          (It(n, u, l), l && a === null && c & 4 && zo(u), xn(u, u.return));
          break;
        case 12:
          It(n, u, l);
          break;
        case 31:
          (It(n, u, l), l && c & 4 && Do(n, u));
          break;
        case 13:
          (It(n, u, l), l && c & 4 && Uo(n, u));
          break;
        case 22:
          (u.memoizedState === null && It(n, u, l), xn(u, u.return));
          break;
        case 30:
          break;
        default:
          It(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Kc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && ln(l)));
  }
  function Jc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ln(e)));
  }
  function Ct(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (Bo(e, t, l, a), (t = t.sibling));
  }
  function Bo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ct(e, t, l, a), n & 2048 && yn(9, t));
        break;
      case 1:
        Ct(e, t, l, a);
        break;
      case 3:
        (Ct(e, t, l, a),
          n & 2048 &&
          ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ln(e))));
        break;
      case 12:
        if (n & 2048) {
          (Ct(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              c = u.id,
              o = u.onPostCommit;
            typeof o == "function" &&
              o(
                c,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (h) {
            he(t, t.return, h);
          }
        } else Ct(e, t, l, a);
        break;
      case 31:
        Ct(e, t, l, a);
        break;
      case 13:
        Ct(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ct(e, t, l, a)
              : gn(e, t)
            : u._visibility & 2
              ? Ct(e, t, l, a)
              : ((u._visibility |= 2),
                Ea(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Kc(c, t));
        break;
      case 24:
        (Ct(e, t, l, a), n & 2048 && Jc(t.alternate, t));
        break;
      default:
        Ct(e, t, l, a);
    }
  }
  function Ea(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        c = t,
        o = l,
        h = a,
        N = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(u, c, o, h, n), yn(8, c));
          break;
        case 23:
          break;
        case 22:
          var R = c.stateNode;
          (c.memoizedState !== null
            ? R._visibility & 2
              ? Ea(u, c, o, h, n)
              : gn(u, c)
            : ((R._visibility |= 2), Ea(u, c, o, h, n)),
            n && N & 2048 && Kc(c.alternate, c));
          break;
        case 24:
          (Ea(u, c, o, h, n), n && N & 2048 && Jc(c.alternate, c));
          break;
        default:
          Ea(u, c, o, h, n);
      }
      t = t.sibling;
    }
  }
  function gn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (gn(l, a), n & 2048 && Kc(a.alternate, a));
            break;
          case 24:
            (gn(l, a), n & 2048 && Jc(a.alternate, a));
            break;
          default:
            gn(l, a);
        }
        t = t.sibling;
      }
  }
  var pn = 8192;
  function Aa(e, t, l) {
    if (e.subtreeFlags & pn)
      for (e = e.child; e !== null;) (Lo(e, t, l), (e = e.sibling));
  }
  function Lo(e, t, l) {
    switch (e.tag) {
      case 26:
        (Aa(e, t, l),
          e.flags & pn &&
          e.memoizedState !== null &&
          Zm(l, Mt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Aa(e, t, l);
        break;
      case 3:
      case 4:
        var a = Mt;
        ((Mt = Ku(e.stateNode.containerInfo)), Aa(e, t, l), (Mt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
            a !== null && a.memoizedState !== null
              ? ((a = pn), (pn = 16777216), Aa(e, t, l), (pn = a))
              : Aa(e, t, l));
        break;
      default:
        Aa(e, t, l);
    }
  }
  function qo(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function bn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((qe = a), Go(a, e));
        }
      qo(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Yo(e), (e = e.sibling));
  }
  function Yo(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (bn(e), e.flags & 2048 && xl(9, e, e.return));
        break;
      case 3:
        bn(e);
        break;
      case 12:
        bn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Du(e))
          : bn(e);
        break;
      default:
        bn(e);
    }
  }
  function Du(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((qe = a), Go(a, e));
        }
      qo(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (xl(8, t, t.return), Du(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Du(t)));
          break;
        default:
          Du(t);
      }
      e = e.sibling;
    }
  }
  function Go(e, t) {
    for (; qe !== null;) {
      var l = qe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ln(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (qe = a));
      else
        e: for (l = e; qe !== null;) {
          a = qe;
          var n = a.sibling,
            u = a.return;
          if ((_o(a), a === l)) {
            qe = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (qe = n));
            break e;
          }
          qe = u;
        }
    }
  }
  var um = {
    getCacheForType: function (e) {
      var t = Qe(De),
        l = t.data.get(e);
      return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
    },
    cacheSignal: function () {
      return Qe(De).controller.signal;
    },
  },
    im = typeof WeakMap == "function" ? WeakMap : Map,
    fe = 0,
    pe = null,
    ae = null,
    ue = 0,
    de = 0,
    ot = null,
    gl = !1,
    za = !1,
    kc = !1,
    Pt = 0,
    Me = 0,
    pl = 0,
    Wl = 0,
    Wc = 0,
    dt = 0,
    Ta = 0,
    Sn = null,
    tt = null,
    $c = !1,
    Uu = 0,
    Xo = 0,
    wu = 1 / 0,
    Hu = null,
    bl = null,
    Be = 0,
    Sl = null,
    Ma = null,
    el = 0,
    Fc = 0,
    Ic = null,
    Qo = null,
    jn = 0,
    Pc = null;
  function ht() {
    return (fe & 2) !== 0 && ue !== 0 ? ue & -ue : _.T !== null ? us() : ar();
  }
  function Zo() {
    if (dt === 0)
      if ((ue & 536870912) === 0 || ce) {
        var e = Zn;
        ((Zn <<= 1), (Zn & 3932160) === 0 && (Zn = 262144), (dt = e));
      } else dt = 536870912;
    return ((e = rt.current), e !== null && (e.flags |= 32), dt);
  }
  function lt(e, t, l) {
    (((e === pe && (de === 2 || de === 9)) || e.cancelPendingCommit !== null) &&
      (Ca(e, 0), jl(e, ue, dt, !1)),
      Xa(e, l),
      ((fe & 2) === 0 || e !== pe) &&
      (e === pe &&
        ((fe & 2) === 0 && (Wl |= l), Me === 4 && jl(e, ue, dt, !1)),
        Ut(e)));
  }
  function Vo(e, t, l) {
    if ((fe & 6) !== 0) throw Error(r(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ga(e, t),
      n = a ? rm(e, t) : ts(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        za && !a && jl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !cm(l))) {
          ((n = ts(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            ((c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            e: {
              var o = e;
              n = Sn;
              var h = o.current.memoizedState.isDehydrated;
              if ((h && (Ca(o, c).flags |= 256), (c = ts(o, c, !1)), c !== 2)) {
                if (kc && !h) {
                  ((o.errorRecoveryDisabledLanes |= u), (Wl |= u), (n = 4));
                  break e;
                }
                ((u = tt),
                  (tt = n),
                  u !== null &&
                  (tt === null ? (tt = u) : tt.push.apply(tt, u)));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ca(e, 0), jl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              jl(a, t, dt, !gl);
              break e;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((n = Uu + 300 - nt()), 10 < n)) {
            if ((jl(a, t, dt, !gl), Kn(a, 0, !0) !== 0)) break e;
            ((el = t),
              (a.timeoutHandle = jd(
                Ko.bind(
                  null,
                  a,
                  l,
                  tt,
                  Hu,
                  $c,
                  t,
                  dt,
                  Wl,
                  Ta,
                  gl,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          Ko(a, l, tt, Hu, $c, t, dt, Wl, Ta, gl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(e);
  }
  function Ko(e, t, l, a, n, u, c, o, h, N, R, D, E, T) {
    if (
      ((e.timeoutHandle = -1),
        (D = t.subtreeFlags),
        D & 8192 || (D & 16785408) === 16785408)
    ) {
      ((D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt,
      }),
        Lo(t, u, D));
      var G =
        (u & 62914560) === u ? Uu - nt() : (u & 4194048) === u ? Xo - nt() : 0;
      if (((G = Vm(D, G)), G !== null)) {
        ((el = u),
          (e.cancelPendingCommit = G(
            ed.bind(null, e, t, u, l, a, n, c, o, h, R, D, null, E, T),
          )),
          jl(e, u, c, !N));
        return;
      }
    }
    ed(e, t, u, l, a, n, c, o, h);
  }
  function cm(e) {
    for (var t = e; ;) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ct(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function jl(e, t, l, a) {
    ((t &= ~Wc),
      (t &= ~Wl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n;) {
      var u = 31 - it(n),
        c = 1 << u;
      ((a[u] = -1), (n &= ~c));
    }
    l !== 0 && er(e, l, t);
  }
  function Bu() {
    return (fe & 6) === 0 ? (Nn(0), !1) : !0;
  }
  function es() {
    if (ae !== null) {
      if (de === 0) var e = ae.return;
      else ((e = ae), (Qt = Yl = null), yc(e), (pa = null), (nn = 0), (e = ae));
      for (; e !== null;) (No(e.alternate, e), (e = e.return));
      ae = null;
    }
  }
  function Ca(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Tm(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (el = 0),
      es(),
      (pe = e),
      (ae = l = Gt(e.current, null)),
      (ue = t),
      (de = 0),
      (ot = null),
      (gl = !1),
      (za = Ga(e, t)),
      (kc = !1),
      (Ta = dt = Wc = Wl = pl = Me = 0),
      (tt = Sn = null),
      ($c = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var n = 31 - it(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((Pt = t), nu(), l);
  }
  function Jo(e, t) {
    ((ee = null),
      (_.H = hn),
      t === ga || t === du
        ? ((t = sf()), (de = 3))
        : t === nc
          ? ((t = sf()), (de = 4))
          : (de =
            t === Oc
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
                ? 6
                : 1),
      (ot = t),
      ae === null && ((Me = 1), zu(e, gt(t, e.current))));
  }
  function ko() {
    var e = rt.current;
    return e === null
      ? !0
      : (ue & 4194048) === ue
        ? jt === null
        : (ue & 62914560) === ue || (ue & 536870912) !== 0
          ? e === jt
          : !1;
  }
  function Wo() {
    var e = _.H;
    return ((_.H = hn), e === null ? hn : e);
  }
  function $o() {
    var e = _.A;
    return ((_.A = um), e);
  }
  function Lu() {
    ((Me = 4),
      gl || ((ue & 4194048) !== ue && rt.current !== null) || (za = !0),
      ((pl & 134217727) === 0 && (Wl & 134217727) === 0) ||
      pe === null ||
      jl(pe, ue, dt, !1));
  }
  function ts(e, t, l) {
    var a = fe;
    fe |= 2;
    var n = Wo(),
      u = $o();
    ((pe !== e || ue !== t) && ((Hu = null), Ca(e, t)), (t = !1));
    var c = Me;
    e: do
      try {
        if (de !== 0 && ae !== null) {
          var o = ae,
            h = ot;
          switch (de) {
            case 8:
              (es(), (c = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              rt.current === null && (t = !0);
              var N = de;
              if (((de = 0), (ot = null), Ra(e, o, h, N), l && za)) {
                c = 0;
                break e;
              }
              break;
            default:
              ((N = de), (de = 0), (ot = null), Ra(e, o, h, N));
          }
        }
        (sm(), (c = Me));
        break;
      } catch (R) {
        Jo(e, R);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Qt = Yl = null),
      (fe = a),
      (_.H = n),
      (_.A = u),
      ae === null && ((pe = null), (ue = 0), nu()),
      c
    );
  }
  function sm() {
    for (; ae !== null;) Fo(ae);
  }
  function rm(e, t) {
    var l = fe;
    fe |= 2;
    var a = Wo(),
      n = $o();
    pe !== e || ue !== t
      ? ((Hu = null), (wu = nt() + 500), Ca(e, t))
      : (za = Ga(e, t));
    e: do
      try {
        if (de !== 0 && ae !== null) {
          t = ae;
          var u = ot;
          t: switch (de) {
            case 1:
              ((de = 0), (ot = null), Ra(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (uf(u)) {
                ((de = 0), (ot = null), Io(t));
                break;
              }
              ((t = function () {
                ((de !== 2 && de !== 9) || pe !== e || (de = 7), Ut(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              uf(u)
                ? ((de = 0), (ot = null), Io(t))
                : ((de = 0), (ot = null), Ra(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ae.tag) {
                case 26:
                  c = ae.memoizedState;
                case 5:
                case 27:
                  var o = ae;
                  if (c ? Bd(c) : o.stateNode.complete) {
                    ((de = 0), (ot = null));
                    var h = o.sibling;
                    if (h !== null) ae = h;
                    else {
                      var N = o.return;
                      N !== null ? ((ae = N), qu(N)) : (ae = null);
                    }
                    break t;
                  }
              }
              ((de = 0), (ot = null), Ra(e, t, u, 5));
              break;
            case 6:
              ((de = 0), (ot = null), Ra(e, t, u, 6));
              break;
            case 8:
              (es(), (Me = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        fm();
        break;
      } catch (R) {
        Jo(e, R);
      }
    while (!0);
    return (
      (Qt = Yl = null),
      (_.H = a),
      (_.A = n),
      (fe = l),
      ae !== null ? 0 : ((pe = null), (ue = 0), nu(), Me)
    );
  }
  function fm() {
    for (; ae !== null && !D0();) Fo(ae);
  }
  function Fo(e) {
    var t = So(e.alternate, e, Pt);
    ((e.memoizedProps = e.pendingProps), t === null ? qu(e) : (ae = t));
  }
  function Io(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = vo(l, t, t.pendingProps, t.type, void 0, ue);
        break;
      case 11:
        t = vo(l, t, t.pendingProps, t.type.render, t.ref, ue);
        break;
      case 5:
        yc(t);
      default:
        (No(l, t), (t = ae = kr(t, Pt)), (t = So(l, t, Pt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? qu(e) : (ae = t));
  }
  function Ra(e, t, l, a) {
    ((Qt = Yl = null), yc(t), (pa = null), (nn = 0));
    var n = t.return;
    try {
      if (Ih(e, n, t, l, ue)) {
        ((Me = 1), zu(e, gt(l, e.current)), (ae = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ae = n), u);
      ((Me = 1), zu(e, gt(l, e.current)), (ae = null));
      return;
    }
    t.flags & 32768
      ? (ce || a === 1
        ? (e = !0)
        : za || (ue & 536870912) !== 0
          ? (e = !1)
          : ((gl = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
            ((a = rt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Po(t, e))
      : qu(t);
  }
  function qu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Po(t, gl);
        return;
      }
      e = t.return;
      var l = tm(t.alternate, t, Pt);
      if (l !== null) {
        ae = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ae = t;
        return;
      }
      ae = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Po(e, t) {
    do {
      var l = lm(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ae = l));
        return;
      }
      if (
        ((l = e.return),
          l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
          !t && ((e = e.sibling), e !== null))
      ) {
        ae = e;
        return;
      }
      ae = e = l;
    } while (e !== null);
    ((Me = 6), (ae = null));
  }
  function ed(e, t, l, a, n, u, c, o, h) {
    e.cancelPendingCommit = null;
    do Yu();
    while (Be !== 0);
    if ((fe & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((u = t.lanes | t.childLanes),
          (u |= Qi),
          Q0(e, l, u, c, o, h),
          e === pe && ((ae = pe = null), (ue = 0)),
          (Ma = t),
          (Sl = e),
          (el = l),
          (Fc = u),
          (Ic = n),
          (Qo = a),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              mm(Xn, function () {
                return (ud(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (a = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = _.T), (_.T = null), (n = H.p), (H.p = 2), (c = fe), (fe |= 4));
        try {
          am(e, t, l);
        } finally {
          ((fe = c), (H.p = n), (_.T = a));
        }
      }
      ((Be = 1), td(), ld(), ad());
    }
  }
  function td() {
    if (Be === 1) {
      Be = 0;
      var e = Sl,
        t = Ma,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = _.T), (_.T = null));
        var a = H.p;
        H.p = 2;
        var n = fe;
        fe |= 4;
        try {
          wo(t, e);
          var u = hs,
            c = qr(e.containerInfo),
            o = u.focusedElem,
            h = u.selectionRange;
          if (
            c !== o &&
            o &&
            o.ownerDocument &&
            Lr(o.ownerDocument.documentElement, o)
          ) {
            if (h !== null && Li(o)) {
              var N = h.start,
                R = h.end;
              if ((R === void 0 && (R = N), "selectionStart" in o))
                ((o.selectionStart = N),
                  (o.selectionEnd = Math.min(R, o.value.length)));
              else {
                var D = o.ownerDocument || document,
                  E = (D && D.defaultView) || window;
                if (E.getSelection) {
                  var T = E.getSelection(),
                    G = o.textContent.length,
                    k = Math.min(h.start, G),
                    xe = h.end === void 0 ? k : Math.min(h.end, G);
                  !T.extend && k > xe && ((c = xe), (xe = k), (k = c));
                  var b = Br(o, k),
                    y = Br(o, xe);
                  if (
                    b &&
                    y &&
                    (T.rangeCount !== 1 ||
                      T.anchorNode !== b.node ||
                      T.anchorOffset !== b.offset ||
                      T.focusNode !== y.node ||
                      T.focusOffset !== y.offset)
                  ) {
                    var j = D.createRange();
                    (j.setStart(b.node, b.offset),
                      T.removeAllRanges(),
                      k > xe
                        ? (T.addRange(j), T.extend(y.node, y.offset))
                        : (j.setEnd(y.node, y.offset), T.addRange(j)));
                  }
                }
              }
            }
            for (D = [], T = o; (T = T.parentNode);)
              T.nodeType === 1 &&
                D.push({ element: T, left: T.scrollLeft, top: T.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < D.length;
              o++
            ) {
              var O = D[o];
              ((O.element.scrollLeft = O.left), (O.element.scrollTop = O.top));
            }
          }
          ((Iu = !!ds), (hs = ds = null));
        } finally {
          ((fe = n), (H.p = a), (_.T = l));
        }
      }
      ((e.current = t), (Be = 2));
    }
  }
  function ld() {
    if (Be === 2) {
      Be = 0;
      var e = Sl,
        t = Ma,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = _.T), (_.T = null));
        var a = H.p;
        H.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Ro(e, t.alternate, t);
        } finally {
          ((fe = n), (H.p = a), (_.T = l));
        }
      }
      Be = 3;
    }
  }
  function ad() {
    if (Be === 4 || Be === 3) {
      ((Be = 0), U0());
      var e = Sl,
        t = Ma,
        l = el,
        a = Qo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Be = 5)
        : ((Be = 0), (Ma = Sl = null), nd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (bl = null),
          pi(l),
          (t = t.stateNode),
          ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(Ya, t, void 0, (t.current.flags & 128) === 128);
        } catch { }
      if (a !== null) {
        ((t = _.T), (n = H.p), (H.p = 2), (_.T = null));
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var o = a[c];
            u(o.value, { componentStack: o.stack });
          }
        } finally {
          ((_.T = t), (H.p = n));
        }
      }
      ((el & 3) !== 0 && Yu(),
        Ut(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === Pc
            ? jn++
            : ((jn = 0), (Pc = e))
          : (jn = 0),
        Nn(0));
    }
  }
  function nd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ln(t)));
  }
  function Yu() {
    return (td(), ld(), ad(), ud());
  }
  function ud() {
    if (Be !== 5) return !1;
    var e = Sl,
      t = Fc;
    Fc = 0;
    var l = pi(el),
      a = _.T,
      n = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (_.T = null), (l = Ic), (Ic = null));
      var u = Sl,
        c = el;
      if (((Be = 0), (Ma = Sl = null), (el = 0), (fe & 6) !== 0))
        throw Error(r(331));
      var o = fe;
      if (
        ((fe |= 4),
          Yo(u.current),
          Bo(u, u.current, c, l),
          (fe = o),
          Nn(0, !1),
          ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(Ya, u);
        } catch { }
      return !0;
    } finally {
      ((H.p = n), (_.T = a), nd(e, t));
    }
  }
  function id(e, t, l) {
    ((t = gt(l, t)),
      (t = _c(e.stateNode, t, 2)),
      (e = ml(e, t, 2)),
      e !== null && (Xa(e, 2), Ut(e)));
  }
  function he(e, t, l) {
    if (e.tag === 3) id(e, e, l);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          id(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (bl === null || !bl.has(a)))
          ) {
            ((e = gt(l, e)),
              (l = io(2)),
              (a = ml(t, l, 2)),
              a !== null && (co(l, a, t, e), Xa(a, 2), Ut(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ls(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new im();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((kc = !0), n.add(l), (e = om.bind(null, e, t, l)), t.then(e, e));
  }
  function om(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      pe === e &&
      (ue & l) === l &&
      (Me === 4 || (Me === 3 && (ue & 62914560) === ue && 300 > nt() - Uu)
        ? (fe & 2) === 0 && Ca(e, 0)
        : (Wc |= l),
        Ta === ue && (Ta = 0)),
      Ut(e));
  }
  function cd(e, t) {
    (t === 0 && (t = Ps()), (e = Bl(e, t)), e !== null && (Xa(e, t), Ut(e)));
  }
  function dm(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), cd(e, l));
  }
  function hm(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), cd(e, l));
  }
  function mm(e, t) {
    return vi(e, t);
  }
  var Gu = null,
    _a = null,
    as = !1,
    Xu = !1,
    ns = !1,
    Nl = 0;
  function Ut(e) {
    (e !== _a &&
      e.next === null &&
      (_a === null ? (Gu = _a = e) : (_a = _a.next = e)),
      (Xu = !0),
      as || ((as = !0), ym()));
  }
  function Nn(e, t) {
    if (!ns && Xu) {
      ns = !0;
      do
        for (var l = !1, a = Gu; a !== null;) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                o = a.pingedLanes;
              ((u = (1 << (31 - it(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~o)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), od(a, u));
          } else
            ((u = ue),
              (u = Kn(
                a,
                a === pe ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Ga(a, u) || ((l = !0), od(a, u)));
          a = a.next;
        }
      while (l);
      ns = !1;
    }
  }
  function vm() {
    sd();
  }
  function sd() {
    Xu = as = !1;
    var e = 0;
    Nl !== 0 && zm() && (e = Nl);
    for (var t = nt(), l = null, a = Gu; a !== null;) {
      var n = a.next,
        u = rd(a, t);
      (u === 0
        ? ((a.next = null),
          l === null ? (Gu = n) : (l.next = n),
          n === null && (_a = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Xu = !0)),
        (a = n));
    }
    ((Be !== 0 && Be !== 5) || Nn(e), Nl !== 0 && (Nl = 0));
  }
  function rd(e, t) {
    for (
      var l = e.suspendedLanes,
      a = e.pingedLanes,
      n = e.expirationTimes,
      u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var c = 31 - it(u),
        o = 1 << c,
        h = n[c];
      (h === -1
        ? ((o & l) === 0 || (o & a) !== 0) && (n[c] = X0(o, t))
        : h <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
    if (
      ((t = pe),
        (l = ue),
        (l = Kn(
          e,
          e === t ? l : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (a = e.callbackNode),
        l === 0 ||
        (e === t && (de === 2 || de === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && yi(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ga(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && yi(a), pi(l))) {
        case 2:
        case 8:
          l = Fs;
          break;
        case 32:
          l = Xn;
          break;
        case 268435456:
          l = Is;
          break;
        default:
          l = Xn;
      }
      return (
        (a = fd.bind(null, e)),
        (l = vi(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && yi(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function fd(e, t) {
    if (Be !== 0 && Be !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Yu() && e.callbackNode !== l) return null;
    var a = ue;
    return (
      (a = Kn(
        e,
        e === pe ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Vo(e, a, t),
          rd(e, nt()),
          e.callbackNode != null && e.callbackNode === l
            ? fd.bind(null, e)
            : null)
    );
  }
  function od(e, t) {
    if (Yu()) return null;
    Vo(e, t, !0);
  }
  function ym() {
    Mm(function () {
      (fe & 6) !== 0 ? vi($s, vm) : sd();
    });
  }
  function us() {
    if (Nl === 0) {
      var e = ya;
      (e === 0 && ((e = Qn), (Qn <<= 1), (Qn & 261888) === 0 && (Qn = 256)),
        (Nl = e));
    }
    return Nl;
  }
  function dd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : $n("" + e);
  }
  function hd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function xm(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = dd((n[$e] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[$e] || null)
          ? dd(t.formAction)
          : c.getAttribute("formAction")),
          t !== null && ((u = t), (c = null)));
      var o = new eu("action", "action", null, a, n);
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nl !== 0) {
                  var h = c ? hd(n, c) : new FormData(n);
                  Ac(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h,
                  );
                }
              } else
                typeof u == "function" &&
                  (o.preventDefault(),
                    (h = c ? hd(n, c) : new FormData(n)),
                    Ac(
                      l,
                      { pending: !0, data: h, method: n.method, action: u },
                      u,
                      h,
                    ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var is = 0; is < Xi.length; is++) {
    var cs = Xi[is],
      gm = cs.toLowerCase(),
      pm = cs[0].toUpperCase() + cs.slice(1);
    Tt(gm, "on" + pm);
  }
  (Tt(Xr, "onAnimationEnd"),
    Tt(Qr, "onAnimationIteration"),
    Tt(Zr, "onAnimationStart"),
    Tt("dblclick", "onDoubleClick"),
    Tt("focusin", "onFocus"),
    Tt("focusout", "onBlur"),
    Tt(wh, "onTransitionRun"),
    Tt(Hh, "onTransitionStart"),
    Tt(Bh, "onTransitionCancel"),
    Tt(Vr, "onTransitionEnd"),
    la("onMouseEnter", ["mouseout", "mouseover"]),
    la("onMouseLeave", ["mouseout", "mouseover"]),
    la("onPointerEnter", ["pointerout", "pointerover"]),
    la("onPointerLeave", ["pointerout", "pointerover"]),
    Dl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Dl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Dl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Dl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Dl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var En =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
    bm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(En),
    );
  function md(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var o = a[c],
              h = o.instance,
              N = o.currentTarget;
            if (((o = o.listener), h !== u && n.isPropagationStopped()))
              break e;
            ((u = o), (n.currentTarget = N));
            try {
              u(n);
            } catch (R) {
              au(R);
            }
            ((n.currentTarget = null), (u = h));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((o = a[c]),
                (h = o.instance),
                (N = o.currentTarget),
                (o = o.listener),
                h !== u && n.isPropagationStopped())
            )
              break e;
            ((u = o), (n.currentTarget = N));
            try {
              u(n);
            } catch (R) {
              au(R);
            }
            ((n.currentTarget = null), (u = h));
          }
      }
    }
  }
  function ne(e, t) {
    var l = t[bi];
    l === void 0 && (l = t[bi] = new Set());
    var a = e + "__bubble";
    l.has(a) || (vd(t, e, 2, !1), l.add(a));
  }
  function ss(e, t, l) {
    var a = 0;
    (t && (a |= 4), vd(l, e, a, t));
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function rs(e) {
    if (!e[Qu]) {
      ((e[Qu] = !0),
        ir.forEach(function (l) {
          l !== "selectionchange" && (bm.has(l) || ss(l, !1, e), ss(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qu] || ((t[Qu] = !0), ss("selectionchange", !1, t));
    }
  }
  function vd(e, t, l, a) {
    switch (Zd(t)) {
      case 2:
        var n = km;
        break;
      case 8:
        n = Wm;
        break;
      default:
        n = Es;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function fs(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (c === 4)
            for (c = a.return; c !== null;) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; o !== null;) {
            if (((c = Pl(o)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = c;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    gr(function () {
      var N = u,
        R = Ti(l),
        D = [];
      e: {
        var E = Kr.get(e);
        if (E !== void 0) {
          var T = eu,
            G = e;
          switch (e) {
            case "keypress":
              if (In(l) === 0) break e;
            case "keydown":
            case "keyup":
              T = hh;
              break;
            case "focusin":
              ((G = "focus"), (T = Di));
              break;
            case "focusout":
              ((G = "blur"), (T = Di));
              break;
            case "beforeblur":
            case "afterblur":
              T = Di;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Sr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = th;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = yh;
              break;
            case Xr:
            case Qr:
            case Zr:
              T = nh;
              break;
            case Vr:
              T = gh;
              break;
            case "scroll":
            case "scrollend":
              T = P0;
              break;
            case "wheel":
              T = bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = ih;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Nr;
              break;
            case "toggle":
            case "beforetoggle":
              T = jh;
          }
          var k = (t & 4) !== 0,
            xe = !k && (e === "scroll" || e === "scrollend"),
            b = k ? (E !== null ? E + "Capture" : null) : E;
          k = [];
          for (var y = N, j; y !== null;) {
            var O = y;
            if (
              ((j = O.stateNode),
                (O = O.tag),
                (O !== 5 && O !== 26 && O !== 27) ||
                j === null ||
                b === null ||
                ((O = Va(y, b)), O != null && k.push(An(y, O, j))),
                xe)
            )
              break;
            y = y.return;
          }
          0 < k.length &&
            ((E = new T(E, G, null, l, R)), D.push({ event: E, listeners: k }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((E = e === "mouseover" || e === "pointerover"),
              (T = e === "mouseout" || e === "pointerout"),
              E &&
              l !== zi &&
              (G = l.relatedTarget || l.fromElement) &&
              (Pl(G) || G[Il]))
          )
            break e;
          if (
            (T || E) &&
            ((E =
              R.window === R
                ? R
                : (E = R.ownerDocument)
                  ? E.defaultView || E.parentWindow
                  : window),
              T
                ? ((G = l.relatedTarget || l.toElement),
                  (T = N),
                  (G = G ? Pl(G) : null),
                  G !== null &&
                  ((xe = v(G)),
                    (k = G.tag),
                    G !== xe || (k !== 5 && k !== 27 && k !== 6)) &&
                  (G = null))
                : ((T = null), (G = N)),
              T !== G)
          ) {
            if (
              ((k = Sr),
                (O = "onMouseLeave"),
                (b = "onMouseEnter"),
                (y = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                ((k = Nr),
                  (O = "onPointerLeave"),
                  (b = "onPointerEnter"),
                  (y = "pointer")),
                (xe = T == null ? E : Za(T)),
                (j = G == null ? E : Za(G)),
                (E = new k(O, y + "leave", T, l, R)),
                (E.target = xe),
                (E.relatedTarget = j),
                (O = null),
                Pl(R) === N &&
                ((k = new k(b, y + "enter", G, l, R)),
                  (k.target = j),
                  (k.relatedTarget = xe),
                  (O = k)),
                (xe = O),
                T && G)
            )
              t: {
                for (k = Sm, b = T, y = G, j = 0, O = b; O; O = k(O)) j++;
                O = 0;
                for (var K = y; K; K = k(K)) O++;
                for (; 0 < j - O;) ((b = k(b)), j--);
                for (; 0 < O - j;) ((y = k(y)), O--);
                for (; j--;) {
                  if (b === y || (y !== null && b === y.alternate)) {
                    k = b;
                    break t;
                  }
                  ((b = k(b)), (y = k(y)));
                }
                k = null;
              }
            else k = null;
            (T !== null && yd(D, E, T, k, !1),
              G !== null && xe !== null && yd(D, xe, G, k, !0));
          }
        }
        e: {
          if (
            ((E = N ? Za(N) : window),
              (T = E.nodeName && E.nodeName.toLowerCase()),
              T === "select" || (T === "input" && E.type === "file"))
          )
            var se = _r;
          else if (Cr(E))
            if (Or) se = Oh;
            else {
              se = Rh;
              var V = Ch;
            }
          else
            ((T = E.nodeName),
              !T ||
                T.toLowerCase() !== "input" ||
                (E.type !== "checkbox" && E.type !== "radio")
                ? N && Ai(N.elementType) && (se = _r)
                : (se = _h));
          if (se && (se = se(e, N))) {
            Rr(D, se, l, R);
            break e;
          }
          (V && V(e, E, N),
            e === "focusout" &&
            N &&
            E.type === "number" &&
            N.memoizedProps.value != null &&
            Ei(E, "number", E.value));
        }
        switch (((V = N ? Za(N) : window), e)) {
          case "focusin":
            (Cr(V) || V.contentEditable === "true") &&
              ((sa = V), (qi = N), (Pa = null));
            break;
          case "focusout":
            Pa = qi = sa = null;
            break;
          case "mousedown":
            Yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Yi = !1), Yr(D, l, R));
            break;
          case "selectionchange":
            if (Uh) break;
          case "keydown":
          case "keyup":
            Yr(D, l, R);
        }
        var te;
        if (wi)
          e: {
            switch (e) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          ca
            ? Tr(e, l) && (ie = "onCompositionEnd")
            : e === "keydown" &&
            l.keyCode === 229 &&
            (ie = "onCompositionStart");
        (ie &&
          (Er &&
            l.locale !== "ko" &&
            (ca || ie !== "onCompositionStart"
              ? ie === "onCompositionEnd" && ca && (te = pr())
              : ((cl = R),
                (Ri = "value" in cl ? cl.value : cl.textContent),
                (ca = !0))),
            (V = Zu(N, ie)),
            0 < V.length &&
            ((ie = new jr(ie, e, null, l, R)),
              D.push({ event: ie, listeners: V }),
              te
                ? (ie.data = te)
                : ((te = Mr(l)), te !== null && (ie.data = te)))),
          (te = Eh ? Ah(e, l) : zh(e, l)) &&
          ((ie = Zu(N, "onBeforeInput")),
            0 < ie.length &&
            ((V = new jr("onBeforeInput", "beforeinput", null, l, R)),
              D.push({ event: V, listeners: ie }),
              (V.data = te))),
          xm(D, e, N, l, R));
      }
      md(D, t);
    });
  }
  function An(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Zu(e, t) {
    for (var l = t + "Capture", a = []; e !== null;) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
          (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Va(e, l)),
            n != null && a.unshift(An(e, n, u)),
            (n = Va(e, t)),
            n != null && a.push(An(e, n, u))),
          e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Sm(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yd(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a;) {
      var o = l,
        h = o.alternate,
        N = o.stateNode;
      if (((o = o.tag), h !== null && h === a)) break;
      ((o !== 5 && o !== 26 && o !== 27) ||
        N === null ||
        ((h = N),
          n
            ? ((N = Va(l, u)), N != null && c.unshift(An(l, N, h)))
            : n || ((N = Va(l, u)), N != null && c.push(An(l, N, h)))),
        (l = l.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var jm = /\r\n?/g,
    Nm = /\u0000|\uFFFD/g;
  function xd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        jm,
        `
`,
      )
      .replace(Nm, "");
  }
  function gd(e, t) {
    return ((t = xd(t)), xd(e) === t);
  }
  function ye(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || na(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
          t !== "body" &&
          na(e, "" + a);
        break;
      case "className":
        kn(e, "class", a);
        break;
      case "tabIndex":
        kn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kn(e, l, a);
        break;
      case "style":
        yr(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          kn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = $n("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && ye(e, t, "name", n.name, n, null),
                ye(e, t, "formEncType", n.formEncType, n, null),
                ye(e, t, "formMethod", n.formMethod, n, null),
                ye(e, t, "formTarget", n.formTarget, n, null))
              : (ye(e, t, "encType", n.encType, n, null),
                ye(e, t, "method", n.method, n, null),
                ye(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = $n("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = qt);
        break;
      case "onScroll":
        a != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = $n("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
          typeof a != "function" &&
          typeof a != "symbol" &&
          !isNaN(a) &&
          1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (ne("beforetoggle", e), ne("toggle", e), Jn(e, "popover", a));
        break;
      case "xlinkActuate":
        Lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Lt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Lt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Lt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Lt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Jn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = F0.get(l) || l), Jn(e, l, a));
    }
  }
  function os(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        yr(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? na(e, a)
          : (typeof a == "number" || typeof a == "bigint") && na(e, "" + a);
        break;
      case "onScroll":
        a != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ne("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!cr.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
                (t = l.slice(2, n ? l.length - 7 : void 0)),
                (u = e[$e] || null),
                (u = u != null ? u[l] : null),
                typeof u == "function" && e.removeEventListener(t, u, n),
                typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Jn(e, l, a);
          }
    }
  }
  function Ve(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ne("error", e), ne("load", e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  ye(e, t, u, c, l, null);
              }
          }
        (n && ye(e, t, "srcSet", l.srcSet, l, null),
          a && ye(e, t, "src", l.src, l, null));
        return;
      case "input":
        ne("invalid", e);
        var o = (u = c = n = null),
          h = null,
          N = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var R = l[a];
            if (R != null)
              switch (a) {
                case "name":
                  n = R;
                  break;
                case "type":
                  c = R;
                  break;
                case "checked":
                  h = R;
                  break;
                case "defaultChecked":
                  N = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  o = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null) throw Error(r(137, t));
                  break;
                default:
                  ye(e, t, a, R, l, null);
              }
          }
        dr(e, u, o, h, N, c, n, !1);
        return;
      case "select":
        (ne("invalid", e), (a = c = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((o = l[n]), o != null))
            switch (n) {
              case "value":
                u = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                a = o;
              default:
                ye(e, t, n, o, l, null);
            }
        ((t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? aa(e, !!a, t, !1) : l != null && aa(e, !!a, l, !0));
        return;
      case "textarea":
        (ne("invalid", e), (u = n = a = null));
        for (c in l)
          if (l.hasOwnProperty(c) && ((o = l[c]), o != null))
            switch (c) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                n = o;
                break;
              case "children":
                u = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                ye(e, t, c, o, l, null);
            }
        mr(e, a, n, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) &&
            ((a = l[h]), a != null) &&
            (h === "selected"
              ? (e.selected =
                a && typeof a != "function" && typeof a != "symbol")
              : ye(e, t, h, a, l, null));
        return;
      case "dialog":
        (ne("beforetoggle", e),
          ne("toggle", e),
          ne("cancel", e),
          ne("close", e));
        break;
      case "iframe":
      case "object":
        ne("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++) ne(En[a], e);
        break;
      case "image":
        (ne("error", e), ne("load", e));
        break;
      case "details":
        ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ne("error", e), ne("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in l)
          if (l.hasOwnProperty(N) && ((a = l[N]), a != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                ye(e, t, N, a, l, null);
            }
        return;
      default:
        if (Ai(t)) {
          for (R in l)
            l.hasOwnProperty(R) &&
              ((a = l[R]), a !== void 0 && os(e, t, R, a, l, void 0));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && ((a = l[o]), a != null && ye(e, t, o, a, l, null));
  }
  function Em(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          o = null,
          h = null,
          N = null,
          R = null;
        for (T in l) {
          var D = l[T];
          if (l.hasOwnProperty(T) && D != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = D;
              default:
                a.hasOwnProperty(T) || ye(e, t, T, null, a, D);
            }
        }
        for (var E in a) {
          var T = a[E];
          if (((D = l[E]), a.hasOwnProperty(E) && (T != null || D != null)))
            switch (E) {
              case "type":
                u = T;
                break;
              case "name":
                n = T;
                break;
              case "checked":
                N = T;
                break;
              case "defaultChecked":
                R = T;
                break;
              case "value":
                c = T;
                break;
              case "defaultValue":
                o = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, t));
                break;
              default:
                T !== D && ye(e, t, E, T, a, D);
            }
        }
        Ni(e, c, o, h, N, R, u, n);
        return;
      case "select":
        T = c = o = E = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = h;
              default:
                a.hasOwnProperty(u) || ye(e, t, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
              (h = l[n]),
              a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case "value":
                E = u;
                break;
              case "defaultValue":
                o = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== h && ye(e, t, n, u, a, h);
            }
        ((t = o),
          (l = c),
          (a = T),
          E != null
            ? aa(e, !!l, E, !1)
            : !!a != !!l &&
            (t != null ? aa(e, !!l, t, !0) : aa(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        T = E = null;
        for (o in l)
          if (
            ((n = l[o]),
              l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                ye(e, t, o, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
              (u = l[c]),
              a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                E = n;
                break;
              case "defaultValue":
                T = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && ye(e, t, c, n, a, u);
            }
        hr(e, E, T);
        return;
      case "option":
        for (var G in l)
          ((E = l[G]),
            l.hasOwnProperty(G) &&
            E != null &&
            !a.hasOwnProperty(G) &&
            (G === "selected" ? (e.selected = !1) : ye(e, t, G, null, a, E)));
        for (h in a)
          ((E = a[h]),
            (T = l[h]),
            a.hasOwnProperty(h) &&
            E !== T &&
            (E != null || T != null) &&
            (h === "selected"
              ? (e.selected =
                E && typeof E != "function" && typeof E != "symbol")
              : ye(e, t, h, E, a, T)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var k in l)
          ((E = l[k]),
            l.hasOwnProperty(k) &&
            E != null &&
            !a.hasOwnProperty(k) &&
            ye(e, t, k, null, a, E));
        for (N in a)
          if (
            ((E = a[N]),
              (T = l[N]),
              a.hasOwnProperty(N) && E !== T && (E != null || T != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(r(137, t));
                break;
              default:
                ye(e, t, N, E, a, T);
            }
        return;
      default:
        if (Ai(t)) {
          for (var xe in l)
            ((E = l[xe]),
              l.hasOwnProperty(xe) &&
              E !== void 0 &&
              !a.hasOwnProperty(xe) &&
              os(e, t, xe, void 0, a, E));
          for (R in a)
            ((E = a[R]),
              (T = l[R]),
              !a.hasOwnProperty(R) ||
              E === T ||
              (E === void 0 && T === void 0) ||
              os(e, t, R, E, a, T));
          return;
        }
    }
    for (var b in l)
      ((E = l[b]),
        l.hasOwnProperty(b) &&
        E != null &&
        !a.hasOwnProperty(b) &&
        ye(e, t, b, null, a, E));
    for (D in a)
      ((E = a[D]),
        (T = l[D]),
        !a.hasOwnProperty(D) ||
        E === T ||
        (E == null && T == null) ||
        ye(e, t, D, E, a, T));
  }
  function pd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Am() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          c = n.initiatorType,
          o = n.duration;
        if (u && o && pd(c)) {
          for (c = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              N = h.startTime;
            if (N > o) break;
            var R = h.transferSize,
              D = h.initiatorType;
            R &&
              pd(D) &&
              ((h = h.responseEnd), (c += R * (h < o ? 1 : (o - N) / (h - N))));
          }
          if ((--a, (t += (8 * (u + c)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var ds = null,
    hs = null;
  function Vu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function bd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function ms(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vs = null;
  function zm() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === vs
        ? !1
        : ((vs = e), !0)
      : ((vs = null), !1);
  }
  var jd = typeof setTimeout == "function" ? setTimeout : void 0,
    Tm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Nd = typeof Promise == "function" ? Promise : void 0,
    Mm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Nd < "u"
          ? function (e) {
            return Nd.resolve(null).then(e).catch(Cm);
          }
          : jd;
  function Cm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function El(e) {
    return e === "head";
  }
  function Ed(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(n), wa(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") zn(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), zn(l));
          for (var u = l.firstChild; u;) {
            var c = u.nextSibling,
              o = u.nodeName;
            (u[Qa] ||
              o === "SCRIPT" ||
              o === "STYLE" ||
              (o === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = c));
          }
        } else l === "body" && zn(e.ownerDocument.body);
      l = n;
    } while (l);
    wa(t);
  }
  function Ad(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
          (t
            ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
            : (l.nodeValue = l._stashedText || "")),
          a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function ys(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ys(l), Si(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Rm(e, t, l, a) {
    for (; e.nodeType === 1;) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Qa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                  u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                  (u !== (n.src == null ? null : n.src) ||
                    e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                    e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Nt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function _m(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Nt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function zd(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Nt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function xs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function gs(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Om(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Nt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
            t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ps = null;
  function Td(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Nt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Md(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cd(e, t, l) {
    switch (((t = Vu(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function zn(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    Si(e);
  }
  var Et = new Map(),
    Rd = new Set();
  function Ku(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var tl = H.d;
  H.d = { f: Dm, r: Um, D: wm, C: Hm, L: Bm, m: Lm, X: Ym, S: qm, M: Gm };
  function Dm() {
    var e = tl.f(),
      t = Bu();
    return e || t;
  }
  function Um(e) {
    var t = ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? Kf(t) : tl.r(e);
  }
  var Oa = typeof document > "u" ? null : document;
  function _d(e, t, l) {
    var a = Oa;
    if (a && typeof t == "string" && t) {
      var n = yt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Rd.has(n) ||
        (Rd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
          ((t = a.createElement("link")),
            Ve(t, "link", e),
            Le(t),
            a.head.appendChild(t))));
    }
  }
  function wm(e) {
    (tl.D(e), _d("dns-prefetch", e, null));
  }
  function Hm(e, t) {
    (tl.C(e, t), _d("preconnect", e, t));
  }
  function Bm(e, t, l) {
    tl.L(e, t, l);
    var a = Oa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + yt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
          (n += '[imagesizes="' + yt(l.imageSizes) + '"]'))
        : (n += '[href="' + yt(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = Da(e);
          break;
        case "script":
          u = Ua(e);
      }
      Et.has(u) ||
        ((e = A(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
          Et.set(u, e),
          a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Tn(u))) ||
          (t === "script" && a.querySelector(Mn(u))) ||
          ((t = a.createElement("link")),
            Ve(t, "link", e),
            Le(t),
            a.head.appendChild(t)));
    }
  }
  function Lm(e, t) {
    tl.m(e, t);
    var l = Oa;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + yt(a) + '"][href="' + yt(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ua(e);
      }
      if (
        !Et.has(u) &&
        ((e = A({ rel: "modulepreload", href: e }, t)),
          Et.set(u, e),
          l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Mn(u))) return;
        }
        ((a = l.createElement("link")),
          Ve(a, "link", e),
          Le(a),
          l.head.appendChild(a));
      }
    }
  }
  function qm(e, t, l) {
    tl.S(e, t, l);
    var a = Oa;
    if (a && e) {
      var n = ta(a).hoistableStyles,
        u = Da(e);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if ((c = a.querySelector(Tn(u)))) o.loading = 5;
        else {
          ((e = A({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Et.get(u)) && bs(e, l));
          var h = (c = a.createElement("link"));
          (Le(h),
            Ve(h, "link", e),
            (h._p = new Promise(function (N, R) {
              ((h.onload = N), (h.onerror = R));
            })),
            h.addEventListener("load", function () {
              o.loading |= 1;
            }),
            h.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            Ju(c, t, a));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: o }),
          n.set(u, c));
      }
    }
  }
  function Ym(e, t) {
    tl.X(e, t);
    var l = Oa;
    if (l && e) {
      var a = ta(l).hoistableScripts,
        n = Ua(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Mn(n))),
          u ||
          ((e = A({ src: e, async: !0 }, t)),
            (t = Et.get(n)) && Ss(e, t),
            (u = l.createElement("script")),
            Le(u),
            Ve(u, "link", e),
            l.head.appendChild(u)),
          (u = { type: "script", instance: u, count: 1, state: null }),
          a.set(n, u));
    }
  }
  function Gm(e, t) {
    tl.M(e, t);
    var l = Oa;
    if (l && e) {
      var a = ta(l).hoistableScripts,
        n = Ua(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Mn(n))),
          u ||
          ((e = A({ src: e, async: !0, type: "module" }, t)),
            (t = Et.get(n)) && Ss(e, t),
            (u = l.createElement("script")),
            Le(u),
            Ve(u, "link", e),
            l.head.appendChild(u)),
          (u = { type: "script", instance: u, count: 1, state: null }),
          a.set(n, u));
    }
  }
  function Od(e, t, l, a) {
    var n = (n = le.current) ? Ku(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Da(l.href)),
            (l = ta(n).hoistableStyles),
            (a = l.get(t)),
            a ||
            ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Da(l.href);
          var u = ta(n).hoistableStyles,
            c = u.get(e);
          if (
            (c ||
              ((n = n.ownerDocument || n),
                (c = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                u.set(e, c),
                (u = n.querySelector(Tn(e))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
                Et.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                  Et.set(e, l),
                  u || Xm(n, e, l, c.state))),
              t && a === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
            t &&
            typeof t != "function" &&
            typeof t != "symbol"
            ? ((t = Ua(l)),
              (l = ta(n).hoistableScripts),
              (a = l.get(t)),
              a ||
              ((a = {
                type: "script",
                instance: null,
                count: 0,
                state: null,
              }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Da(e) {
    return 'href="' + yt(e) + '"';
  }
  function Tn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Dd(e) {
    return A({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Xm(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ve(t, "link", l),
        Le(t),
        e.head.appendChild(t));
  }
  function Ua(e) {
    return '[src="' + yt(e) + '"]';
  }
  function Mn(e) {
    return "script[async]" + e;
  }
  function Ud(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + yt(l.href) + '"]');
          if (a) return ((t.instance = a), Le(a), a);
          var n = A({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Le(a),
            Ve(a, "style", n),
            Ju(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = Da(l.href);
          var u = e.querySelector(Tn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Le(u), u);
          ((a = Dd(l)),
            (n = Et.get(n)) && bs(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            Le(u));
          var c = u;
          return (
            (c._p = new Promise(function (o, h) {
              ((c.onload = o), (c.onerror = h));
            })),
            Ve(u, "link", a),
            (t.state.loading |= 4),
            Ju(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ua(l.src)),
            (n = e.querySelector(Mn(u)))
              ? ((t.instance = n), Le(n), n)
              : ((a = l),
                (n = Et.get(u)) && ((a = A({}, l)), Ss(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Le(n),
                Ve(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Ju(a, l.precedence, e));
    return t.instance;
  }
  function Ju(e, t, l) {
    for (
      var a = l.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]',
      ),
      n = a.length ? a[a.length - 1] : null,
      u = n,
      c = 0;
      c < a.length;
      c++
    ) {
      var o = a[c];
      if (o.dataset.precedence === t) u = o;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function bs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Ss(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ku = null;
  function wd(e, t, l) {
    if (ku === null) {
      var a = new Map(),
        n = (ku = new Map());
      n.set(l, a);
    } else ((n = ku), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Qa] ||
          u[Ge] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var o = a.get(c);
        o ? o.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Hd(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Qm(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zm(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Da(a.href),
          u = t.querySelector(Tn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
            typeof t == "object" &&
            typeof t.then == "function" &&
            (e.count++, (e = Wu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Le(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Dd(a)),
          (n = Et.get(n)) && bs(a, n),
          (u = u.createElement("link")),
          Le(u));
        var c = u;
        ((c._p = new Promise(function (o, h) {
          ((c.onload = o), (c.onerror = h));
        })),
          Ve(u, "link", a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
        (l.state.loading & 3) === 0 &&
        (e.count++,
          (l = Wu.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var js = 0;
  function Vm(e, t) {
    return (
      e.stylesheets && e.count === 0 && Fu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
          var a = setTimeout(function () {
            if ((e.stylesheets && Fu(e, e.stylesheets), e.unsuspend)) {
              var u = e.unsuspend;
              ((e.unsuspend = null), u());
            }
          }, 6e4 + t);
          0 < e.imgBytes && js === 0 && (js = 62500 * Am());
          var n = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                  e.count === 0 &&
                  (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend))
              ) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            },
            (e.imgBytes > js ? 50 : 800) + t,
          );
          return (
            (e.unsuspend = l),
            function () {
              ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
            }
          );
        }
        : null
    );
  }
  function Wu() {
    if (
      (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Fu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var $u = null;
  function Fu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
      (e.count++,
        ($u = new Map()),
        t.forEach(Km, e),
        ($u = null),
        Wu.call(e)));
  }
  function Km(e, t) {
    if (!(t.state.loading & 4)) {
      var l = $u.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), $u.set(e, l));
        for (
          var n = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]",
          ),
          u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (c = n.getAttribute("data-precedence")),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Wu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Cn = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function Jm(e, t, l, a, n, u, c, o, h) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
        null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
        0),
      (this.entanglements = xi(0)),
      (this.hiddenUpdates = xi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map()));
  }
  function Ld(e, t, l, a, n, u, c, o, h, N, R, D) {
    return (
      (e = new Jm(e, t, l, c, h, N, R, D, o)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = st(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = tc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      uc(u),
      e
    );
  }
  function qd(e) {
    return e ? ((e = oa), e) : oa;
  }
  function Yd(e, t, l, a, n, u) {
    ((n = qd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = hl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ml(e, a, t)),
      l !== null && (lt(l, e, t), cn(l, e, t)));
  }
  function Gd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ns(e, t) {
    (Gd(e, t), (e = e.alternate) && Gd(e, t));
  }
  function Xd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bl(e, 67108864);
      (t !== null && lt(t, e, 67108864), Ns(e, 67108864));
    }
  }
  function Qd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ht();
      t = gi(t);
      var l = Bl(e, t);
      (l !== null && lt(l, e, t), Ns(e, t));
    }
  }
  var Iu = !0;
  function km(e, t, l, a) {
    var n = _.T;
    _.T = null;
    var u = H.p;
    try {
      ((H.p = 2), Es(e, t, l, a));
    } finally {
      ((H.p = u), (_.T = n));
    }
  }
  function Wm(e, t, l, a) {
    var n = _.T;
    _.T = null;
    var u = H.p;
    try {
      ((H.p = 8), Es(e, t, l, a));
    } finally {
      ((H.p = u), (_.T = n));
    }
  }
  function Es(e, t, l, a) {
    if (Iu) {
      var n = As(a);
      if (n === null) (fs(e, t, a, Pu, l), Vd(e, a));
      else if (Fm(n, e, t, l, a)) a.stopPropagation();
      else if ((Vd(e, a), t & 4 && -1 < $m.indexOf(e))) {
        for (; n !== null;) {
          var u = ea(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Ol(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c;) {
                      var h = 1 << (31 - it(c));
                      ((o.entanglements[1] |= h), (c &= ~h));
                    }
                    (Ut(u), (fe & 6) === 0 && ((wu = nt() + 500), Nn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((o = Bl(u, 2)), o !== null && lt(o, u, 2), Bu(), Ns(u, 2));
            }
          if (((u = As(a)), u === null && fs(e, t, a, Pu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else fs(e, t, a, null, l);
    }
  }
  function As(e) {
    return ((e = Ti(e)), zs(e));
  }
  var Pu = null;
  function zs(e) {
    if (((Pu = null), (e = Pl(e)), e !== null)) {
      var t = v(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = S(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = z(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Pu = e), null);
  }
  function Zd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (w0()) {
          case $s:
            return 2;
          case Fs:
            return 8;
          case Xn:
          case H0:
            return 32;
          case Is:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ts = !1,
    Al = null,
    zl = null,
    Tl = null,
    Rn = new Map(),
    _n = new Map(),
    Ml = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Vd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(t.pointerId);
    }
  }
  function On(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
        blockedOn: t,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [n],
      }),
        t !== null && ((t = ea(t)), t !== null && Xd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Fm(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((Al = On(Al, e, t, l, a, n)), !0);
      case "dragenter":
        return ((zl = On(zl, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Tl = On(Tl, e, t, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Rn.set(u, On(Rn.get(u) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          _n.set(u, On(_n.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Kd(e) {
    var t = Pl(e.target);
    if (t !== null) {
      var l = v(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = S(l)), t !== null)) {
            ((e.blockedOn = t),
              nr(e.priority, function () {
                Qd(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = z(l)), t !== null)) {
            ((e.blockedOn = t),
              nr(e.priority, function () {
                Qd(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var l = As(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((zi = a), l.target.dispatchEvent(a), (zi = null));
      } else return ((t = ea(l)), t !== null && Xd(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Jd(e, t, l) {
    ei(e) && l.delete(t);
  }
  function Im() {
    ((Ts = !1),
      Al !== null && ei(Al) && (Al = null),
      zl !== null && ei(zl) && (zl = null),
      Tl !== null && ei(Tl) && (Tl = null),
      Rn.forEach(Jd),
      _n.forEach(Jd));
  }
  function ti(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
        Ts ||
        ((Ts = !0),
          s.unstable_scheduleCallback(s.unstable_NormalPriority, Im)));
  }
  var li = null;
  function kd(e) {
    li !== e &&
      ((li = e),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
          li === e && (li = null);
          for (var t = 0; t < e.length; t += 3) {
            var l = e[t],
              a = e[t + 1],
              n = e[t + 2];
            if (typeof a != "function") {
              if (zs(a || l) === null) continue;
              break;
            }
            var u = ea(l);
            u !== null &&
              (e.splice(t, 3),
                (t -= 3),
                Ac(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
          }
        }));
  }
  function wa(e) {
    function t(h) {
      return ti(h, e);
    }
    (Al !== null && ti(Al, e),
      zl !== null && ti(zl, e),
      Tl !== null && ti(Tl, e),
      Rn.forEach(t),
      _n.forEach(t));
    for (var l = 0; l < Ml.length; l++) {
      var a = Ml[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ml.length && ((l = Ml[0]), l.blockedOn === null);)
      (Kd(l), l.blockedOn === null && Ml.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[$e] || null;
        if (typeof u == "function") c || kd(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[$e] || null))) o = c.formAction;
            else if (zs(n) !== null) continue;
          } else o = c.action;
          (typeof o == "function" ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)),
            kd(l));
        }
      }
  }
  function Wd() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (n = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Ms(e) {
    this._internalRoot = e;
  }
  ((ai.prototype.render = Ms.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var l = t.current,
        a = ht();
      Yd(l, a, e, t, null, null);
    }),
    (ai.prototype.unmount = Ms.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Yd(e.current, 2, null, e, null, null), Bu(), (t[Il] = null));
        }
      }));
  function ai(e) {
    this._internalRoot = e;
  }
  ai.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ar();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++);
      (Ml.splice(l, 0, e), l === 0 && Kd(e));
    }
  };
  var $d = f.version;
  if ($d !== "19.2.4") throw Error(r(527, $d, "19.2.4"));
  H.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = x(t)),
      (e = e !== null ? M(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Pm = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber)
      try {
        ((Ya = ni.inject(Pm)), (ut = ni));
      } catch { }
  }
  return (
    (Un.createRoot = function (e, t) {
      if (!m(e)) throw Error(r(299));
      var l = !1,
        a = "",
        n = lo,
        u = ao,
        c = no;
      return (
        t != null &&
        (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = Ld(e, 1, !1, null, null, l, a, null, n, u, c, Wd)),
        (e[Il] = t.current),
        rs(e),
        new Ms(t)
      );
    }),
    (Un.hydrateRoot = function (e, t, l) {
      if (!m(e)) throw Error(r(299));
      var a = !1,
        n = "",
        u = lo,
        c = ao,
        o = no,
        h = null;
      return (
        l != null &&
        (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (t = Ld(e, 1, !0, t, l ?? null, a, n, h, u, c, o, Wd)),
        (t.context = qd(null)),
        (l = t.current),
        (a = ht()),
        (a = gi(a)),
        (n = hl(a)),
        (n.callback = null),
        ml(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Xa(t, l),
        Ut(t),
        (e[Il] = t.current),
        rs(e),
        new ai(t)
      );
    }),
    (Un.version = "19.2.4"),
    Un
  );
}
var i0;
function rv() {
  if (i0) return _s.exports;
  i0 = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
  }
  return (s(), (_s.exports = sv()), _s.exports);
}
var fv = rv();
var c0 = "popstate";
function ov(s = {}) {
  function f(r, m) {
    let { pathname: v, search: S, hash: z } = r.location;
    return qs(
      "",
      { pathname: v, search: S, hash: z },
      (m.state && m.state.usr) || null,
      (m.state && m.state.key) || "default",
    );
  }
  function d(r, m) {
    return typeof m == "string" ? m : Hn(m);
  }
  return hv(f, d, null, s);
}
function Ae(s, f) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(f);
}
function wt(s, f) {
  if (!s) {
    typeof console < "u" && console.warn(f);
    try {
      throw new Error(f);
    } catch { }
  }
}
function dv() {
  return Math.random().toString(36).substring(2, 10);
}
function s0(s, f) {
  return { usr: s.state, key: s.key, idx: f };
}
function qs(s, f, d = null, r) {
  return {
    pathname: typeof s == "string" ? s : s.pathname,
    search: "",
    hash: "",
    ...(typeof f == "string" ? Ba(f) : f),
    state: d,
    key: (f && f.key) || r || dv(),
  };
}
function Hn({ pathname: s = "/", search: f = "", hash: d = "" }) {
  return (
    f && f !== "?" && (s += f.charAt(0) === "?" ? f : "?" + f),
    d && d !== "#" && (s += d.charAt(0) === "#" ? d : "#" + d),
    s
  );
}
function Ba(s) {
  let f = {};
  if (s) {
    let d = s.indexOf("#");
    d >= 0 && ((f.hash = s.substring(d)), (s = s.substring(0, d)));
    let r = s.indexOf("?");
    (r >= 0 && ((f.search = s.substring(r)), (s = s.substring(0, r))),
      s && (f.pathname = s));
  }
  return f;
}
function hv(s, f, d, r = {}) {
  let { window: m = document.defaultView, v5Compat: v = !1 } = r,
    S = m.history,
    z = "POP",
    p = null,
    x = M();
  x == null && ((x = 0), S.replaceState({ ...S.state, idx: x }, ""));
  function M() {
    return (S.state || { idx: null }).idx;
  }
  function A() {
    z = "POP";
    let q = M(),
      J = q == null ? null : q - x;
    ((x = q), p && p({ action: z, location: Y.location, delta: J }));
  }
  function w(q, J) {
    z = "PUSH";
    let Q = qs(Y.location, q, J);
    x = M() + 1;
    let W = s0(Q, x),
      Se = Y.createHref(Q);
    try {
      S.pushState(W, "", Se);
    } catch (be) {
      if (be instanceof DOMException && be.name === "DataCloneError") throw be;
      m.location.assign(Se);
    }
    v && p && p({ action: z, location: Y.location, delta: 1 });
  }
  function L(q, J) {
    z = "REPLACE";
    let Q = qs(Y.location, q, J);
    x = M();
    let W = s0(Q, x),
      Se = Y.createHref(Q);
    (S.replaceState(W, "", Se),
      v && p && p({ action: z, location: Y.location, delta: 0 }));
  }
  function X(q) {
    return mv(q);
  }
  let Y = {
    get action() {
      return z;
    },
    get location() {
      return s(m, S);
    },
    listen(q) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        m.addEventListener(c0, A),
        (p = q),
        () => {
          (m.removeEventListener(c0, A), (p = null));
        }
      );
    },
    createHref(q) {
      return f(m, q);
    },
    createURL: X,
    encodeLocation(q) {
      let J = X(q);
      return { pathname: J.pathname, search: J.search, hash: J.hash };
    },
    push: w,
    replace: L,
    go(q) {
      return S.go(q);
    },
  };
  return Y;
}
function mv(s, f = !1) {
  let d = "http://localhost";
  (typeof window < "u" &&
    (d =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ae(d, "No window.location.(origin|href) available to create URL"));
  let r = typeof s == "string" ? s : Hn(s);
  return (
    (r = r.replace(/ $/, "%20")),
    !f && r.startsWith("//") && (r = d + r),
    new URL(r, d)
  );
}
function h0(s, f, d = "/") {
  return vv(s, f, d, !1);
}
function vv(s, f, d, r) {
  let m = typeof f == "string" ? Ba(f) : f,
    v = nl(m.pathname || "/", d);
  if (v == null) return null;
  let S = m0(s);
  yv(S);
  let z = null;
  for (let p = 0; z == null && p < S.length; ++p) {
    let x = Tv(v);
    z = Av(S[p], x, r);
  }
  return z;
}
function m0(s, f = [], d = [], r = "", m = !1) {
  let v = (S, z, p = m, x) => {
    let M = {
      relativePath: x === void 0 ? S.path || "" : x,
      caseSensitive: S.caseSensitive === !0,
      childrenIndex: z,
      route: S,
    };
    if (M.relativePath.startsWith("/")) {
      if (!M.relativePath.startsWith(r) && p) return;
      (Ae(
        M.relativePath.startsWith(r),
        `Absolute route path "${M.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (M.relativePath = M.relativePath.slice(r.length)));
    }
    let A = al([r, M.relativePath]),
      w = d.concat(M);
    (S.children &&
      S.children.length > 0 &&
      (Ae(
        S.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${A}".`,
      ),
        m0(S.children, f, w, A, p)),
      !(S.path == null && !S.index) &&
      f.push({ path: A, score: Nv(A, S.index), routesMeta: w }));
  };
  return (
    s.forEach((S, z) => {
      if (S.path === "" || !S.path?.includes("?")) v(S, z);
      else for (let p of v0(S.path)) v(S, z, !0, p);
    }),
    f
  );
}
function v0(s) {
  let f = s.split("/");
  if (f.length === 0) return [];
  let [d, ...r] = f,
    m = d.endsWith("?"),
    v = d.replace(/\?$/, "");
  if (r.length === 0) return m ? [v, ""] : [v];
  let S = v0(r.join("/")),
    z = [];
  return (
    z.push(...S.map((p) => (p === "" ? v : [v, p].join("/")))),
    m && z.push(...S),
    z.map((p) => (s.startsWith("/") && p === "" ? "/" : p))
  );
}
function yv(s) {
  s.sort((f, d) =>
    f.score !== d.score
      ? d.score - f.score
      : Ev(
        f.routesMeta.map((r) => r.childrenIndex),
        d.routesMeta.map((r) => r.childrenIndex),
      ),
  );
}
var xv = /^:[\w-]+$/,
  gv = 3,
  pv = 2,
  bv = 1,
  Sv = 10,
  jv = -2,
  r0 = (s) => s === "*";
function Nv(s, f) {
  let d = s.split("/"),
    r = d.length;
  return (
    d.some(r0) && (r += jv),
    f && (r += pv),
    d
      .filter((m) => !r0(m))
      .reduce((m, v) => m + (xv.test(v) ? gv : v === "" ? bv : Sv), r)
  );
}
function Ev(s, f) {
  return s.length === f.length && s.slice(0, -1).every((r, m) => r === f[m])
    ? s[s.length - 1] - f[f.length - 1]
    : 0;
}
function Av(s, f, d = !1) {
  let { routesMeta: r } = s,
    m = {},
    v = "/",
    S = [];
  for (let z = 0; z < r.length; ++z) {
    let p = r[z],
      x = z === r.length - 1,
      M = v === "/" ? f : f.slice(v.length) || "/",
      A = si(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: x },
        M,
      ),
      w = p.route;
    if (
      (!A &&
        x &&
        d &&
        !r[r.length - 1].route.index &&
        (A = si(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          M,
        )),
        !A)
    )
      return null;
    (Object.assign(m, A.params),
      S.push({
        params: m,
        pathname: al([v, A.pathname]),
        pathnameBase: _v(al([v, A.pathnameBase])),
        route: w,
      }),
      A.pathnameBase !== "/" && (v = al([v, A.pathnameBase])));
  }
  return S;
}
function si(s, f) {
  typeof s == "string" && (s = { path: s, caseSensitive: !1, end: !0 });
  let [d, r] = zv(s.path, s.caseSensitive, s.end),
    m = f.match(d);
  if (!m) return null;
  let v = m[0],
    S = v.replace(/(.)\/+$/, "$1"),
    z = m.slice(1);
  return {
    params: r.reduce((x, { paramName: M, isOptional: A }, w) => {
      if (M === "*") {
        let X = z[w] || "";
        S = v.slice(0, v.length - X.length).replace(/(.)\/+$/, "$1");
      }
      const L = z[w];
      return (
        A && !L ? (x[M] = void 0) : (x[M] = (L || "").replace(/%2F/g, "/")),
        x
      );
    }, {}),
    pathname: v,
    pathnameBase: S,
    pattern: s,
  };
}
function zv(s, f = !1, d = !0) {
  wt(
    s === "*" || !s.endsWith("*") || s.endsWith("/*"),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    m =
      "^" +
      s
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, z, p) => (
            r.push({ paramName: z, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    s.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (m += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : d
        ? (m += "\\/*$")
        : s !== "" && s !== "/" && (m += "(?:(?=\\/|$))"),
    [new RegExp(m, f ? void 0 : "i"), r]
  );
}
function Tv(s) {
  try {
    return s
      .split("/")
      .map((f) => decodeURIComponent(f).replace(/\//g, "%2F"))
      .join("/");
  } catch (f) {
    return (
      wt(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`,
      ),
      s
    );
  }
}
function nl(s, f) {
  if (f === "/") return s;
  if (!s.toLowerCase().startsWith(f.toLowerCase())) return null;
  let d = f.endsWith("/") ? f.length - 1 : f.length,
    r = s.charAt(d);
  return r && r !== "/" ? null : s.slice(d) || "/";
}
var Mv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Cv(s, f = "/") {
  let {
    pathname: d,
    search: r = "",
    hash: m = "",
  } = typeof s == "string" ? Ba(s) : s,
    v;
  return (
    d
      ? ((d = d.replace(/\/\/+/g, "/")),
        d.startsWith("/") ? (v = f0(d.substring(1), "/")) : (v = f0(d, f)))
      : (v = f),
    { pathname: v, search: Ov(r), hash: Dv(m) }
  );
}
function f0(s, f) {
  let d = f.replace(/\/+$/, "").split("/");
  return (
    s.split("/").forEach((m) => {
      m === ".." ? d.length > 1 && d.pop() : m !== "." && d.push(m);
    }),
    d.length > 1 ? d.join("/") : "/"
  );
}
function ws(s, f, d, r) {
  return `Cannot include a '${s}' character in a manually specified \`to.${f}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Rv(s) {
  return s.filter(
    (f, d) => d === 0 || (f.route.path && f.route.path.length > 0),
  );
}
function y0(s) {
  let f = Rv(s);
  return f.map((d, r) => (r === f.length - 1 ? d.pathname : d.pathnameBase));
}
function x0(s, f, d, r = !1) {
  let m;
  typeof s == "string"
    ? (m = Ba(s))
    : ((m = { ...s }),
      Ae(
        !m.pathname || !m.pathname.includes("?"),
        ws("?", "pathname", "search", m),
      ),
      Ae(
        !m.pathname || !m.pathname.includes("#"),
        ws("#", "pathname", "hash", m),
      ),
      Ae(!m.search || !m.search.includes("#"), ws("#", "search", "hash", m)));
  let v = s === "" || m.pathname === "",
    S = v ? "/" : m.pathname,
    z;
  if (S == null) z = d;
  else {
    let A = f.length - 1;
    if (!r && S.startsWith("..")) {
      let w = S.split("/");
      for (; w[0] === "..";) (w.shift(), (A -= 1));
      m.pathname = w.join("/");
    }
    z = A >= 0 ? f[A] : "/";
  }
  let p = Cv(m, z),
    x = S && S !== "/" && S.endsWith("/"),
    M = (v || S === ".") && d.endsWith("/");
  return (!p.pathname.endsWith("/") && (x || M) && (p.pathname += "/"), p);
}
var al = (s) => s.join("/").replace(/\/\/+/g, "/"),
  _v = (s) => s.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ov = (s) => (!s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s),
  Dv = (s) => (!s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s),
  Uv = class {
    constructor(s, f, d, r = !1) {
      ((this.status = s),
        (this.statusText = f || ""),
        (this.internal = r),
        d instanceof Error
          ? ((this.data = d.toString()), (this.error = d))
          : (this.data = d));
    }
  };
function wv(s) {
  return (
    s != null &&
    typeof s.status == "number" &&
    typeof s.statusText == "string" &&
    typeof s.internal == "boolean" &&
    "data" in s
  );
}
function Hv(s) {
  return (
    s
      .map((f) => f.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var g0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function p0(s, f) {
  let d = s;
  if (typeof d != "string" || !Mv.test(d))
    return { absoluteURL: void 0, isExternal: !1, to: d };
  let r = d,
    m = !1;
  if (g0)
    try {
      let v = new URL(window.location.href),
        S = d.startsWith("//") ? new URL(v.protocol + d) : new URL(d),
        z = nl(S.pathname, f);
      S.origin === v.origin && z != null
        ? (d = z + S.search + S.hash)
        : (m = !0);
    } catch {
      wt(
        !1,
        `<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: m, to: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var b0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(b0);
var Bv = ["GET", ...b0];
new Set(Bv);
var La = C.createContext(null);
La.displayName = "DataRouter";
var ri = C.createContext(null);
ri.displayName = "DataRouterState";
var Lv = C.createContext(!1),
  S0 = C.createContext({ isTransitioning: !1 });
S0.displayName = "ViewTransition";
var qv = C.createContext(new Map());
qv.displayName = "Fetchers";
var Yv = C.createContext(null);
Yv.displayName = "Await";
var At = C.createContext(null);
At.displayName = "Navigation";
var Bn = C.createContext(null);
Bn.displayName = "Location";
var Ht = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ht.displayName = "Route";
var Xs = C.createContext(null);
Xs.displayName = "RouteError";
var j0 = "REACT_ROUTER_ERROR",
  Gv = "REDIRECT",
  Xv = "ROUTE_ERROR_RESPONSE";
function Qv(s) {
  if (s.startsWith(`${j0}:${Gv}:{`))
    try {
      let f = JSON.parse(s.slice(28));
      if (
        typeof f == "object" &&
        f &&
        typeof f.status == "number" &&
        typeof f.statusText == "string" &&
        typeof f.location == "string" &&
        typeof f.reloadDocument == "boolean" &&
        typeof f.replace == "boolean"
      )
        return f;
    } catch { }
}
function Zv(s) {
  if (s.startsWith(`${j0}:${Xv}:{`))
    try {
      let f = JSON.parse(s.slice(40));
      if (
        typeof f == "object" &&
        f &&
        typeof f.status == "number" &&
        typeof f.statusText == "string"
      )
        return new Uv(f.status, f.statusText, f.data);
    } catch { }
}
function Vv(s, { relative: f } = {}) {
  Ae(
    Ln(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: d, navigator: r } = C.useContext(At),
    { hash: m, pathname: v, search: S } = qn(s, { relative: f }),
    z = v;
  return (
    d !== "/" && (z = v === "/" ? d : al([d, v])),
    r.createHref({ pathname: z, search: S, hash: m })
  );
}
function Ln() {
  return C.useContext(Bn) != null;
}
function Fl() {
  return (
    Ae(
      Ln(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    C.useContext(Bn).location
  );
}
var N0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function E0(s) {
  C.useContext(At).static || C.useLayoutEffect(s);
}
function Kv() {
  let { isDataRoute: s } = C.useContext(Ht);
  return s ? iy() : Jv();
}
function Jv() {
  Ae(
    Ln(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let s = C.useContext(La),
    { basename: f, navigator: d } = C.useContext(At),
    { matches: r } = C.useContext(Ht),
    { pathname: m } = Fl(),
    v = JSON.stringify(y0(r)),
    S = C.useRef(!1);
  return (
    E0(() => {
      S.current = !0;
    }),
    C.useCallback(
      (p, x = {}) => {
        if ((wt(S.current, N0), !S.current)) return;
        if (typeof p == "number") {
          d.go(p);
          return;
        }
        let M = x0(p, JSON.parse(v), m, x.relative === "path");
        (s == null &&
          f !== "/" &&
          (M.pathname = M.pathname === "/" ? f : al([f, M.pathname])),
          (x.replace ? d.replace : d.push)(M, x.state, x));
      },
      [f, d, v, m, s],
    )
  );
}
C.createContext(null);
function kv() {
  let { matches: s } = C.useContext(Ht),
    f = s[s.length - 1];
  return f ? f.params : {};
}
function qn(s, { relative: f } = {}) {
  let { matches: d } = C.useContext(Ht),
    { pathname: r } = Fl(),
    m = JSON.stringify(y0(d));
  return C.useMemo(() => x0(s, JSON.parse(m), r, f === "path"), [s, m, r, f]);
}
function Wv(s, f) {
  return A0(s, f);
}
function A0(s, f, d, r, m) {
  Ae(
    Ln(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: v } = C.useContext(At),
    { matches: S } = C.useContext(Ht),
    z = S[S.length - 1],
    p = z ? z.params : {},
    x = z ? z.pathname : "/",
    M = z ? z.pathnameBase : "/",
    A = z && z.route;
  {
    let Q = (A && A.path) || "";
    T0(
      x,
      !A || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`,
    );
  }
  let w = Fl(),
    L;
  if (f) {
    let Q = typeof f == "string" ? Ba(f) : f;
    (Ae(
      M === "/" || Q.pathname?.startsWith(M),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${Q.pathname}" was given in the \`location\` prop.`,
    ),
      (L = Q));
  } else L = w;
  let X = L.pathname || "/",
    Y = X;
  if (M !== "/") {
    let Q = M.replace(/^\//, "").split("/");
    Y = "/" + X.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let q = h0(s, { pathname: Y });
  (wt(
    A || q != null,
    `No routes matched location "${L.pathname}${L.search}${L.hash}" `,
  ),
    wt(
      q == null ||
      q[q.length - 1].route.element !== void 0 ||
      q[q.length - 1].route.Component !== void 0 ||
      q[q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let J = ey(
    q &&
    q.map((Q) =>
      Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: al([
          M,
          v.encodeLocation
            ? v.encodeLocation(
              Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
            ).pathname
            : Q.pathname,
        ]),
        pathnameBase:
          Q.pathnameBase === "/"
            ? M
            : al([
              M,
              v.encodeLocation
                ? v.encodeLocation(
                  Q.pathnameBase
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
                : Q.pathnameBase,
            ]),
      }),
    ),
    S,
    d,
    r,
    m,
  );
  return f && J
    ? C.createElement(
      Bn.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...L,
          },
          navigationType: "POP",
        },
      },
      J,
    )
    : J;
}
function $v() {
  let s = uy(),
    f = wv(s)
      ? `${s.status} ${s.statusText}`
      : s instanceof Error
        ? s.message
        : JSON.stringify(s),
    d = s instanceof Error ? s.stack : null,
    r = "rgba(200,200,200, 0.5)",
    m = { padding: "0.5rem", backgroundColor: r },
    v = { padding: "2px 4px", backgroundColor: r },
    S = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", s),
    (S = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: v }, "errorElement"),
        " prop on your route.",
      ),
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, f),
      d ? C.createElement("pre", { style: m }, d) : null,
      S,
    )
  );
}
var Fv = C.createElement($v, null),
  z0 = class extends C.Component {
    constructor(s) {
      (super(s),
        (this.state = {
          location: s.location,
          revalidation: s.revalidation,
          error: s.error,
        }));
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, f) {
      return f.location !== s.location ||
        (f.revalidation !== "idle" && s.revalidation === "idle")
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
          error: s.error !== void 0 ? s.error : f.error,
          location: f.location,
          revalidation: s.revalidation || f.revalidation,
        };
    }
    componentDidCatch(s, f) {
      this.props.onError
        ? this.props.onError(s, f)
        : console.error(
          "React Router caught the following error during render",
          s,
        );
    }
    render() {
      let s = this.state.error;
      if (
        this.context &&
        typeof s == "object" &&
        s &&
        "digest" in s &&
        typeof s.digest == "string"
      ) {
        const d = Zv(s.digest);
        d && (s = d);
      }
      let f =
        s !== void 0
          ? C.createElement(
            Ht.Provider,
            { value: this.props.routeContext },
            C.createElement(Xs.Provider, {
              value: s,
              children: this.props.component,
            }),
          )
          : this.props.children;
      return this.context ? C.createElement(Iv, { error: s }, f) : f;
    }
  };
z0.contextType = Lv;
var Hs = new WeakMap();
function Iv({ children: s, error: f }) {
  let { basename: d } = C.useContext(At);
  if (
    typeof f == "object" &&
    f &&
    "digest" in f &&
    typeof f.digest == "string"
  ) {
    let r = Qv(f.digest);
    if (r) {
      let m = Hs.get(f);
      if (m) throw m;
      let v = p0(r.location, d);
      if (g0 && !Hs.get(f))
        if (v.isExternal || r.reloadDocument)
          window.location.href = v.absoluteURL || v.to;
        else {
          const S = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(v.to, {
              replace: r.replace,
            }),
          );
          throw (Hs.set(f, S), S);
        }
      return C.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${v.absoluteURL || v.to}`,
      });
    }
  }
  return s;
}
function Pv({ routeContext: s, match: f, children: d }) {
  let r = C.useContext(La);
  return (
    r &&
    r.static &&
    r.staticContext &&
    (f.route.errorElement || f.route.ErrorBoundary) &&
    (r.staticContext._deepestRenderedBoundaryId = f.route.id),
    C.createElement(Ht.Provider, { value: s }, d)
  );
}
function ey(s, f = [], d = null, r = null, m = null) {
  if (s == null) {
    if (!d) return null;
    if (d.errors) s = d.matches;
    else if (f.length === 0 && !d.initialized && d.matches.length > 0)
      s = d.matches;
    else return null;
  }
  let v = s,
    S = d?.errors;
  if (S != null) {
    let M = v.findIndex((A) => A.route.id && S?.[A.route.id] !== void 0);
    (Ae(
      M >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`,
    ),
      (v = v.slice(0, Math.min(v.length, M + 1))));
  }
  let z = !1,
    p = -1;
  if (d)
    for (let M = 0; M < v.length; M++) {
      let A = v[M];
      if (
        ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (p = M),
          A.route.id)
      ) {
        let { loaderData: w, errors: L } = d,
          X =
            A.route.loader &&
            !w.hasOwnProperty(A.route.id) &&
            (!L || L[A.route.id] === void 0);
        if (A.route.lazy || X) {
          ((z = !0), p >= 0 ? (v = v.slice(0, p + 1)) : (v = [v[0]]));
          break;
        }
      }
    }
  let x =
    d && r
      ? (M, A) => {
        r(M, {
          location: d.location,
          params: d.matches?.[0]?.params ?? {},
          unstable_pattern: Hv(d.matches),
          errorInfo: A,
        });
      }
      : void 0;
  return v.reduceRight((M, A, w) => {
    let L,
      X = !1,
      Y = null,
      q = null;
    d &&
      ((L = S && A.route.id ? S[A.route.id] : void 0),
        (Y = A.route.errorElement || Fv),
        z &&
        (p < 0 && w === 0
          ? (T0(
            "route-fallback",
            !1,
            "No `HydrateFallback` element provided to render during initial hydration",
          ),
            (X = !0),
            (q = null))
          : p === w &&
          ((X = !0), (q = A.route.hydrateFallbackElement || null))));
    let J = f.concat(v.slice(0, w + 1)),
      Q = () => {
        let W;
        return (
          L
            ? (W = Y)
            : X
              ? (W = q)
              : A.route.Component
                ? (W = C.createElement(A.route.Component, null))
                : A.route.element
                  ? (W = A.route.element)
                  : (W = M),
          C.createElement(Pv, {
            match: A,
            routeContext: { outlet: M, matches: J, isDataRoute: d != null },
            children: W,
          })
        );
      };
    return d && (A.route.ErrorBoundary || A.route.errorElement || w === 0)
      ? C.createElement(z0, {
        location: d.location,
        revalidation: d.revalidation,
        component: Y,
        error: L,
        children: Q(),
        routeContext: { outlet: null, matches: J, isDataRoute: !0 },
        onError: x,
      })
      : Q();
  }, null);
}
function Qs(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ty(s) {
  let f = C.useContext(La);
  return (Ae(f, Qs(s)), f);
}
function ly(s) {
  let f = C.useContext(ri);
  return (Ae(f, Qs(s)), f);
}
function ay(s) {
  let f = C.useContext(Ht);
  return (Ae(f, Qs(s)), f);
}
function Zs(s) {
  let f = ay(s),
    d = f.matches[f.matches.length - 1];
  return (
    Ae(
      d.route.id,
      `${s} can only be used on routes that contain a unique "id"`,
    ),
    d.route.id
  );
}
function ny() {
  return Zs("useRouteId");
}
function uy() {
  let s = C.useContext(Xs),
    f = ly("useRouteError"),
    d = Zs("useRouteError");
  return s !== void 0 ? s : f.errors?.[d];
}
function iy() {
  let { router: s } = ty("useNavigate"),
    f = Zs("useNavigate"),
    d = C.useRef(!1);
  return (
    E0(() => {
      d.current = !0;
    }),
    C.useCallback(
      async (m, v = {}) => {
        (wt(d.current, N0),
          d.current &&
          (typeof m == "number"
            ? await s.navigate(m)
            : await s.navigate(m, { fromRouteId: f, ...v })));
      },
      [s, f],
    )
  );
}
var o0 = {};
function T0(s, f, d) {
  !f && !o0[s] && ((o0[s] = !0), wt(!1, d));
}
C.memo(cy);
function cy({ routes: s, future: f, state: d, onError: r }) {
  return A0(s, void 0, d, r, f);
}
function $l(s) {
  Ae(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function sy({
  basename: s = "/",
  children: f = null,
  location: d,
  navigationType: r = "POP",
  navigator: m,
  static: v = !1,
  unstable_useTransitions: S,
}) {
  Ae(
    !Ln(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let z = s.replace(/^\/*/, "/"),
    p = C.useMemo(
      () => ({
        basename: z,
        navigator: m,
        static: v,
        unstable_useTransitions: S,
        future: {},
      }),
      [z, m, v, S],
    );
  typeof d == "string" && (d = Ba(d));
  let {
    pathname: x = "/",
    search: M = "",
    hash: A = "",
    state: w = null,
    key: L = "default",
  } = d,
    X = C.useMemo(() => {
      let Y = nl(x, z);
      return Y == null
        ? null
        : {
          location: { pathname: Y, search: M, hash: A, state: w, key: L },
          navigationType: r,
        };
    }, [z, x, M, A, w, L, r]);
  return (
    wt(
      X != null,
      `<Router basename="${z}"> is not able to match the URL "${x}${M}${A}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    X == null
      ? null
      : C.createElement(
        At.Provider,
        { value: p },
        C.createElement(Bn.Provider, { children: f, value: X }),
      )
  );
}
function ry({ children: s, location: f }) {
  return Wv(Ys(s), f);
}
function Ys(s, f = []) {
  let d = [];
  return (
    C.Children.forEach(s, (r, m) => {
      if (!C.isValidElement(r)) return;
      let v = [...f, m];
      if (r.type === C.Fragment) {
        d.push.apply(d, Ys(r.props.children, v));
        return;
      }
      (Ae(
        r.type === $l,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ae(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        ));
      let S = {
        id: r.props.id || v.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (S.children = Ys(r.props.children, v)), d.push(S));
    }),
    d
  );
}
var ii = "get",
  ci = "application/x-www-form-urlencoded";
function fi(s) {
  return typeof HTMLElement < "u" && s instanceof HTMLElement;
}
function fy(s) {
  return fi(s) && s.tagName.toLowerCase() === "button";
}
function oy(s) {
  return fi(s) && s.tagName.toLowerCase() === "form";
}
function dy(s) {
  return fi(s) && s.tagName.toLowerCase() === "input";
}
function hy(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function my(s, f) {
  return s.button === 0 && (!f || f === "_self") && !hy(s);
}
var ui = null;
function vy() {
  if (ui === null)
    try {
      (new FormData(document.createElement("form"), 0), (ui = !1));
    } catch {
      ui = !0;
    }
  return ui;
}
var yy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Bs(s) {
  return s != null && !yy.has(s)
    ? (wt(
      !1,
      `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ci}"`,
    ),
      null)
    : s;
}
function xy(s, f) {
  let d, r, m, v, S;
  if (oy(s)) {
    let z = s.getAttribute("action");
    ((r = z ? nl(z, f) : null),
      (d = s.getAttribute("method") || ii),
      (m = Bs(s.getAttribute("enctype")) || ci),
      (v = new FormData(s)));
  } else if (fy(s) || (dy(s) && (s.type === "submit" || s.type === "image"))) {
    let z = s.form;
    if (z == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = s.getAttribute("formaction") || z.getAttribute("action");
    if (
      ((r = p ? nl(p, f) : null),
        (d = s.getAttribute("formmethod") || z.getAttribute("method") || ii),
        (m =
          Bs(s.getAttribute("formenctype")) ||
          Bs(z.getAttribute("enctype")) ||
          ci),
        (v = new FormData(z, s)),
        !vy())
    ) {
      let { name: x, type: M, value: A } = s;
      if (M === "image") {
        let w = x ? `${x}.` : "";
        (v.append(`${w}x`, "0"), v.append(`${w}y`, "0"));
      } else x && v.append(x, A);
    }
  } else {
    if (fi(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((d = ii), (r = null), (m = ci), (S = s));
  }
  return (
    v && m === "text/plain" && ((S = v), (v = void 0)),
    { action: r, method: d.toLowerCase(), encType: m, formData: v, body: S }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vs(s, f) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(f);
}
function gy(s, f, d, r) {
  let m =
    typeof s == "string"
      ? new URL(
        s,
        typeof window > "u"
          ? "server://singlefetch/"
          : window.location.origin,
      )
      : s;
  return (
    d
      ? m.pathname.endsWith("/")
        ? (m.pathname = `${m.pathname}_.${r}`)
        : (m.pathname = `${m.pathname}.${r}`)
      : m.pathname === "/"
        ? (m.pathname = `_root.${r}`)
        : f && nl(m.pathname, f) === "/"
          ? (m.pathname = `${f.replace(/\/$/, "")}/_root.${r}`)
          : (m.pathname = `${m.pathname.replace(/\/$/, "")}.${r}`),
    m
  );
}
async function py(s, f) {
  if (s.id in f) return f[s.id];
  try {
    let d = await import(s.module);
    return ((f[s.id] = d), d);
  } catch (d) {
    return (
      console.error(
        `Error loading route module \`${s.module}\`, reloading page...`,
      ),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => { })
    );
  }
}
function by(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === "preload" &&
      typeof s.imageSrcSet == "string" &&
      typeof s.imageSizes == "string"
      : typeof s.rel == "string" && typeof s.href == "string";
}
async function Sy(s, f, d) {
  let r = await Promise.all(
    s.map(async (m) => {
      let v = f.routes[m.route.id];
      if (v) {
        let S = await py(v, d);
        return S.links ? S.links() : [];
      }
      return [];
    }),
  );
  return Ay(
    r
      .flat(1)
      .filter(by)
      .filter((m) => m.rel === "stylesheet" || m.rel === "preload")
      .map((m) =>
        m.rel === "stylesheet"
          ? { ...m, rel: "prefetch", as: "style" }
          : { ...m, rel: "prefetch" },
      ),
  );
}
function d0(s, f, d, r, m, v) {
  let S = (p, x) => (d[x] ? p.route.id !== d[x].route.id : !0),
    z = (p, x) =>
      d[x].pathname !== p.pathname ||
      (d[x].route.path?.endsWith("*") && d[x].params["*"] !== p.params["*"]);
  return v === "assets"
    ? f.filter((p, x) => S(p, x) || z(p, x))
    : v === "data"
      ? f.filter((p, x) => {
        let M = r.routes[p.route.id];
        if (!M || !M.hasLoader) return !1;
        if (S(p, x) || z(p, x)) return !0;
        if (p.route.shouldRevalidate) {
          let A = p.route.shouldRevalidate({
            currentUrl: new URL(
              m.pathname + m.search + m.hash,
              window.origin,
            ),
            currentParams: d[0]?.params || {},
            nextUrl: new URL(s, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof A == "boolean") return A;
        }
        return !0;
      })
      : [];
}
function jy(s, f, { includeHydrateFallback: d } = {}) {
  return Ny(
    s
      .map((r) => {
        let m = f.routes[r.route.id];
        if (!m) return [];
        let v = [m.module];
        return (
          m.clientActionModule && (v = v.concat(m.clientActionModule)),
          m.clientLoaderModule && (v = v.concat(m.clientLoaderModule)),
          d &&
          m.hydrateFallbackModule &&
          (v = v.concat(m.hydrateFallbackModule)),
          m.imports && (v = v.concat(m.imports)),
          v
        );
      })
      .flat(1),
  );
}
function Ny(s) {
  return [...new Set(s)];
}
function Ey(s) {
  let f = {},
    d = Object.keys(s).sort();
  for (let r of d) f[r] = s[r];
  return f;
}
function Ay(s, f) {
  let d = new Set();
  return (
    new Set(f),
    s.reduce((r, m) => {
      let v = JSON.stringify(Ey(m));
      return (d.has(v) || (d.add(v), r.push({ key: v, link: m })), r);
    }, [])
  );
}
function M0() {
  let s = C.useContext(La);
  return (
    Vs(
      s,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    s
  );
}
function zy() {
  let s = C.useContext(ri);
  return (
    Vs(
      s,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    s
  );
}
var Ks = C.createContext(void 0);
Ks.displayName = "FrameworkContext";
function C0() {
  let s = C.useContext(Ks);
  return (
    Vs(s, "You must render this element inside a <HydratedRouter> element"),
    s
  );
}
function Ty(s, f) {
  let d = C.useContext(Ks),
    [r, m] = C.useState(!1),
    [v, S] = C.useState(!1),
    {
      onFocus: z,
      onBlur: p,
      onMouseEnter: x,
      onMouseLeave: M,
      onTouchStart: A,
    } = f,
    w = C.useRef(null);
  (C.useEffect(() => {
    if ((s === "render" && S(!0), s === "viewport")) {
      let Y = (J) => {
        J.forEach((Q) => {
          S(Q.isIntersecting);
        });
      },
        q = new IntersectionObserver(Y, { threshold: 0.5 });
      return (
        w.current && q.observe(w.current),
        () => {
          q.disconnect();
        }
      );
    }
  }, [s]),
    C.useEffect(() => {
      if (r) {
        let Y = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(Y);
        };
      }
    }, [r]));
  let L = () => {
    m(!0);
  },
    X = () => {
      (m(!1), S(!1));
    };
  return d
    ? s !== "intent"
      ? [v, w, {}]
      : [
        v,
        w,
        {
          onFocus: wn(z, L),
          onBlur: wn(p, X),
          onMouseEnter: wn(x, L),
          onMouseLeave: wn(M, X),
          onTouchStart: wn(A, L),
        },
      ]
    : [!1, w, {}];
}
function wn(s, f) {
  return (d) => {
    (s && s(d), d.defaultPrevented || f(d));
  };
}
function My({ page: s, ...f }) {
  let { router: d } = M0(),
    r = C.useMemo(() => h0(d.routes, s, d.basename), [d.routes, s, d.basename]);
  return r ? C.createElement(Ry, { page: s, matches: r, ...f }) : null;
}
function Cy(s) {
  let { manifest: f, routeModules: d } = C0(),
    [r, m] = C.useState([]);
  return (
    C.useEffect(() => {
      let v = !1;
      return (
        Sy(s, f, d).then((S) => {
          v || m(S);
        }),
        () => {
          v = !0;
        }
      );
    }, [s, f, d]),
    r
  );
}
function Ry({ page: s, matches: f, ...d }) {
  let r = Fl(),
    { future: m, manifest: v, routeModules: S } = C0(),
    { basename: z } = M0(),
    { loaderData: p, matches: x } = zy(),
    M = C.useMemo(() => d0(s, f, x, v, r, "data"), [s, f, x, v, r]),
    A = C.useMemo(() => d0(s, f, x, v, r, "assets"), [s, f, x, v, r]),
    w = C.useMemo(() => {
      if (s === r.pathname + r.search + r.hash) return [];
      let Y = new Set(),
        q = !1;
      if (
        (f.forEach((Q) => {
          let W = v.routes[Q.route.id];
          !W ||
            !W.hasLoader ||
            ((!M.some((Se) => Se.route.id === Q.route.id) &&
              Q.route.id in p &&
              S[Q.route.id]?.shouldRevalidate) ||
              W.hasClientLoader
              ? (q = !0)
              : Y.add(Q.route.id));
        }),
          Y.size === 0)
      )
        return [];
      let J = gy(s, z, m.unstable_trailingSlashAwareDataRequests, "data");
      return (
        q &&
        Y.size > 0 &&
        J.searchParams.set(
          "_routes",
          f
            .filter((Q) => Y.has(Q.route.id))
            .map((Q) => Q.route.id)
            .join(","),
        ),
        [J.pathname + J.search]
      );
    }, [z, m.unstable_trailingSlashAwareDataRequests, p, r, v, M, f, s, S]),
    L = C.useMemo(() => jy(A, v), [A, v]),
    X = Cy(A);
  return C.createElement(
    C.Fragment,
    null,
    w.map((Y) =>
      C.createElement("link", {
        key: Y,
        rel: "prefetch",
        as: "fetch",
        href: Y,
        ...d,
      }),
    ),
    L.map((Y) =>
      C.createElement("link", { key: Y, rel: "modulepreload", href: Y, ...d }),
    ),
    X.map(({ key: Y, link: q }) =>
      C.createElement("link", {
        key: Y,
        nonce: d.nonce,
        ...q,
        crossOrigin: q.crossOrigin ?? d.crossOrigin,
      }),
    ),
  );
}
function _y(...s) {
  return (f) => {
    s.forEach((d) => {
      typeof d == "function" ? d(f) : d != null && (d.current = f);
    });
  };
}
var Oy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Oy && (window.__reactRouterVersion = "7.13.0");
} catch { }
function Dy({
  basename: s,
  children: f,
  unstable_useTransitions: d,
  window: r,
}) {
  let m = C.useRef();
  m.current == null && (m.current = ov({ window: r, v5Compat: !0 }));
  let v = m.current,
    [S, z] = C.useState({ action: v.action, location: v.location }),
    p = C.useCallback(
      (x) => {
        d === !1 ? z(x) : C.startTransition(() => z(x));
      },
      [d],
    );
  return (
    C.useLayoutEffect(() => v.listen(p), [v, p]),
    C.createElement(sy, {
      basename: s,
      children: f,
      location: S.location,
      navigationType: S.action,
      navigator: v,
      unstable_useTransitions: d,
    })
  );
}
var R0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  at = C.forwardRef(function (
    {
      onClick: f,
      discover: d = "render",
      prefetch: r = "none",
      relative: m,
      reloadDocument: v,
      replace: S,
      state: z,
      target: p,
      to: x,
      preventScrollReset: M,
      viewTransition: A,
      unstable_defaultShouldRevalidate: w,
      ...L
    },
    X,
  ) {
    let { basename: Y, unstable_useTransitions: q } = C.useContext(At),
      J = typeof x == "string" && R0.test(x),
      Q = p0(x, Y);
    x = Q.to;
    let W = Vv(x, { relative: m }),
      [Se, be, ze] = Ty(r, L),
      I = By(x, {
        replace: S,
        state: z,
        target: p,
        preventScrollReset: M,
        relative: m,
        viewTransition: A,
        unstable_defaultShouldRevalidate: w,
        unstable_useTransitions: q,
      });
    function Ce(mt) {
      (f && f(mt), mt.defaultPrevented || I(mt));
    }
    let Ye = C.createElement("a", {
      ...L,
      ...ze,
      href: Q.absoluteURL || W,
      onClick: Q.isExternal || v ? f : Ce,
      ref: _y(X, be),
      target: p,
      "data-discover": !J && d === "render" ? "true" : void 0,
    });
    return Se && !J
      ? C.createElement(C.Fragment, null, Ye, C.createElement(My, { page: W }))
      : Ye;
  });
at.displayName = "Link";
var Uy = C.forwardRef(function (
  {
    "aria-current": f = "page",
    caseSensitive: d = !1,
    className: r = "",
    end: m = !1,
    style: v,
    to: S,
    viewTransition: z,
    children: p,
    ...x
  },
  M,
) {
  let A = qn(S, { relative: x.relative }),
    w = Fl(),
    L = C.useContext(ri),
    { navigator: X, basename: Y } = C.useContext(At),
    q = L != null && Xy(A) && z === !0,
    J = X.encodeLocation ? X.encodeLocation(A).pathname : A.pathname,
    Q = w.pathname,
    W =
      L && L.navigation && L.navigation.location
        ? L.navigation.location.pathname
        : null;
  (d ||
    ((Q = Q.toLowerCase()),
      (W = W ? W.toLowerCase() : null),
      (J = J.toLowerCase())),
    W && Y && (W = nl(W, Y) || W));
  const Se = J !== "/" && J.endsWith("/") ? J.length - 1 : J.length;
  let be = Q === J || (!m && Q.startsWith(J) && Q.charAt(Se) === "/"),
    ze =
      W != null &&
      (W === J || (!m && W.startsWith(J) && W.charAt(J.length) === "/")),
    I = { isActive: be, isPending: ze, isTransitioning: q },
    Ce = be ? f : void 0,
    Ye;
  typeof r == "function"
    ? (Ye = r(I))
    : (Ye = [
      r,
      be ? "active" : null,
      ze ? "pending" : null,
      q ? "transitioning" : null,
    ]
      .filter(Boolean)
      .join(" "));
  let mt = typeof v == "function" ? v(I) : v;
  return C.createElement(
    at,
    {
      ...x,
      "aria-current": Ce,
      className: Ye,
      ref: M,
      style: mt,
      to: S,
      viewTransition: z,
    },
    typeof p == "function" ? p(I) : p,
  );
});
Uy.displayName = "NavLink";
var wy = C.forwardRef(
  (
    {
      discover: s = "render",
      fetcherKey: f,
      navigate: d,
      reloadDocument: r,
      replace: m,
      state: v,
      method: S = ii,
      action: z,
      onSubmit: p,
      relative: x,
      preventScrollReset: M,
      viewTransition: A,
      unstable_defaultShouldRevalidate: w,
      ...L
    },
    X,
  ) => {
    let { unstable_useTransitions: Y } = C.useContext(At),
      q = Yy(),
      J = Gy(z, { relative: x }),
      Q = S.toLowerCase() === "get" ? "get" : "post",
      W = typeof z == "string" && R0.test(z),
      Se = (be) => {
        if ((p && p(be), be.defaultPrevented)) return;
        be.preventDefault();
        let ze = be.nativeEvent.submitter,
          I = ze?.getAttribute("formmethod") || S,
          Ce = () =>
            q(ze || be.currentTarget, {
              fetcherKey: f,
              method: I,
              navigate: d,
              replace: m,
              state: v,
              relative: x,
              preventScrollReset: M,
              viewTransition: A,
              unstable_defaultShouldRevalidate: w,
            });
        Y && d !== !1 ? C.startTransition(() => Ce()) : Ce();
      };
    return C.createElement("form", {
      ref: X,
      method: Q,
      action: J,
      onSubmit: r ? p : Se,
      ...L,
      "data-discover": !W && s === "render" ? "true" : void 0,
    });
  },
);
wy.displayName = "Form";
function Hy(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _0(s) {
  let f = C.useContext(La);
  return (Ae(f, Hy(s)), f);
}
function By(
  s,
  {
    target: f,
    replace: d,
    state: r,
    preventScrollReset: m,
    relative: v,
    viewTransition: S,
    unstable_defaultShouldRevalidate: z,
    unstable_useTransitions: p,
  } = {},
) {
  let x = Kv(),
    M = Fl(),
    A = qn(s, { relative: v });
  return C.useCallback(
    (w) => {
      if (my(w, f)) {
        w.preventDefault();
        let L = d !== void 0 ? d : Hn(M) === Hn(A),
          X = () =>
            x(s, {
              replace: L,
              state: r,
              preventScrollReset: m,
              relative: v,
              viewTransition: S,
              unstable_defaultShouldRevalidate: z,
            });
        p ? C.startTransition(() => X()) : X();
      }
    },
    [M, x, A, d, r, f, s, m, v, S, z, p],
  );
}
var Ly = 0,
  qy = () => `__${String(++Ly)}__`;
function Yy() {
  let { router: s } = _0("useSubmit"),
    { basename: f } = C.useContext(At),
    d = ny(),
    r = s.fetch,
    m = s.navigate;
  return C.useCallback(
    async (v, S = {}) => {
      let { action: z, method: p, encType: x, formData: M, body: A } = xy(v, f);
      if (S.navigate === !1) {
        let w = S.fetcherKey || qy();
        await r(w, d, S.action || z, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: M,
          body: A,
          formMethod: S.method || p,
          formEncType: S.encType || x,
          flushSync: S.flushSync,
        });
      } else
        await m(S.action || z, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: M,
          body: A,
          formMethod: S.method || p,
          formEncType: S.encType || x,
          replace: S.replace,
          state: S.state,
          fromRouteId: d,
          flushSync: S.flushSync,
          viewTransition: S.viewTransition,
        });
    },
    [r, m, f, d],
  );
}
function Gy(s, { relative: f } = {}) {
  let { basename: d } = C.useContext(At),
    r = C.useContext(Ht);
  Ae(r, "useFormAction must be used inside a RouteContext");
  let [m] = r.matches.slice(-1),
    v = { ...qn(s || ".", { relative: f }) },
    S = Fl();
  if (s == null) {
    v.search = S.search;
    let z = new URLSearchParams(v.search),
      p = z.getAll("index");
    if (p.some((M) => M === "")) {
      (z.delete("index"),
        p.filter((A) => A).forEach((A) => z.append("index", A)));
      let M = z.toString();
      v.search = M ? `?${M}` : "";
    }
  }
  return (
    (!s || s === ".") &&
    m.route.index &&
    (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    d !== "/" && (v.pathname = v.pathname === "/" ? d : al([d, v.pathname])),
    Hn(v)
  );
}
function Xy(s, { relative: f } = {}) {
  let d = C.useContext(S0);
  Ae(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = _0("useViewTransitionState"),
    m = qn(s, { relative: f });
  if (!d.isTransitioning) return !1;
  let v = nl(d.currentLocation.pathname, r) || d.currentLocation.pathname,
    S = nl(d.nextLocation.pathname, r) || d.nextLocation.pathname;
  return si(m.pathname, S) != null || si(m.pathname, v) != null;
}
const Qy = () =>
  i.jsxs("header", {
    className:
      "text-center mb-16 max-w-4xl mx-auto opacity-0 animate-slide-up",
    children: [
      i.jsx("h1", {
        className:
          "text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight tight-leading mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500",
        children: "百万张 / 老张",
      }),
      i.jsxs("p", {
        className: "text-xl md:text-2xl text-gray-200 font-light mb-6",
        children: [
          "AI 产品专家 ｜ 旅行&财经自媒体「百万张」 ",
          i.jsx("br", { className: "md:hidden" }),
          " ｜ 前滴滴产品 ｜ 头部教育大厂教育产品专家",
        ],
      }),
      i.jsx("p", {
        className:
          "text-gray-400 max-w-2xl mx-auto font-light leading-relaxed",
        children:
          "专注把 AI 能力做成“可用的产品”，并用内容记录旅行与财经观察。",
      }),
    ],
  }),
  Zy = () =>
    i.jsx("section", {
      className:
        "w-full max-w-3xl mx-auto mb-20 opacity-0 animate-slide-up-delay text-center",
      children: i.jsxs("div", {
        className: "glass-card rounded-2xl p-8 relative overflow-hidden",
        children: [
          i.jsx("div", {
            className:
              "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 opacity-50",
          }),
          i.jsx("h2", {
            className: "text-2xl font-bold text-white mb-4 text-left pl-4",
            children: "关于我",
          }),
          i.jsx("p", {
            className: "text-gray-300 leading-relaxed text-left pl-4",
            children:
              "我是一名 AI 产品专家，长期从事 AI 能力在业务中的产品化落地。曾在滴滴出行负责产品工作，目前聚焦教育行业的产品体系与 AI 应用，日常也运营旅行财经自媒体「百万张」，持续输出可复用的洞察与工具。",
          }),
        ],
      }),
    }),
  Vy = () => {
    const s = [
      {
        title: "AI 产品专家",
        description: "AI 能力产品化、业务落地、工具与系统建设",
        icon: i.jsx("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M13 10V3L4 14h7v7l9-11h-7z",
          }),
        }),
        color: "bg-purple-500/20 text-purple-400",
      },
      {
        title: "自媒体「百万张」",
        description: "旅行经验与财经观察的内容创作与输出",
        icon: i.jsx("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
          }),
        }),
        color: "bg-blue-500/20 text-blue-400",
      },
      {
        title: "前滴滴出行产品",
        description: "出行领域产品经验",
        icon: i.jsxs("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: [
            i.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
            }),
            i.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            }),
          ],
        }),
        color: "bg-orange-500/20 text-orange-400",
      },
      {
        title: "教育产品专家",
        description: "教育业务场景下的产品体系与增长/交付实践",
        icon: i.jsx("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
          }),
        }),
        color: "bg-green-500/20 text-green-400",
      },
    ];
    return i.jsx("section", {
      className:
        "w-full max-w-6xl mx-auto mb-24 opacity-0 animate-slide-up-delay",
      style: { animationDelay: "0.3s" },
      children: i.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
        children: s.map((f, d) =>
          i.jsxs(
            "div",
            {
              className: "glass-card rounded-xl p-6 hover-glow",
              children: [
                i.jsx("div", {
                  className: `h-10 w-10 ${f.color} rounded-lg flex items-center justify-center mb-4`,
                  children: f.icon,
                }),
                i.jsx("h3", {
                  className: "text-lg font-bold text-white mb-2",
                  children: f.title,
                }),
                i.jsx("p", {
                  className: "text-sm text-gray-400",
                  children: f.description,
                }),
              ],
            },
            d,
          ),
        ),
      }),
    });
  },
  Ls = [
    {
      stationuuid: "1",
      name: "Classic FM",
      country: "United Kingdom",
      tags: "classical",
      url_resolved: "https://media-ice.musicradio.com/ClassicFMMP3",
    },
    {
      stationuuid: "2",
      name: "Smooth Jazz Florida",
      country: "United States",
      tags: "jazz,smooth jazz",
      url_resolved: "https://icecast.walmradio.com:8443/jazz",
    },
    {
      stationuuid: "3",
      name: "Lofi Hip Hop Radio",
      country: "Global",
      tags: "lofi,chill",
      url_resolved: "https://streams.ilovemusic.de/iloveradio17.mp3",
    },
    {
      stationuuid: "4",
      name: "BBC World Service",
      country: "United Kingdom",
      tags: "news,talk",
      url_resolved: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    },
    {
      stationuuid: "5",
      name: "Radio Paradise",
      country: "United States",
      tags: "eclectic,rock",
      url_resolved: "https://stream.radioparadise.com/aac-320",
    },
  ],
  Ky = () => {
    const [s, f] = C.useState(Ls),
      [d, r] = C.useState(null),
      [m, v] = C.useState(!1),
      [S, z] = C.useState(!0),
      p = C.useRef(null);
    C.useEffect(() => {
      (async () => {
        try {
          const L = await fetch(
            "https://nl1.api.radio-browser.info/json/stations/topclick?limit=20&hidebroken=true",
            { signal: AbortSignal.timeout(5e3) },
          );
          if (L.ok) {
            const Y = (await L.json()).filter((q) => q.url_resolved && q.name);
            if (Y.length > 0) {
              f(Y);
              const q = Math.floor(Math.random() * Math.min(10, Y.length));
              (r(Y[q]), z(!1));
              return;
            }
          }
        } catch (L) {
          console.log("使用备用电台列表:", L.message);
        }
        const w = Math.floor(Math.random() * Ls.length);
        (r(Ls[w]), z(!1));
      })();
    }, []);
    const x = () => {
      !p.current ||
        !d ||
        (m
          ? (p.current.pause(), v(!1))
          : ((p.current.src = d.url_resolved),
            p.current
              .play()
              .then(() => v(!0))
              .catch((A) => {
                (console.error("播放失败:", A), M());
              })));
    },
      M = () => {
        if (s.length === 0) return;
        (p.current && p.current.pause(), v(!1));
        const w =
          (s.findIndex((L) => L.stationuuid === d?.stationuuid) + 1) % s.length;
        r(s[w]);
      };
    return S
      ? i.jsx("div", {
        className:
          "glass-card rounded-2xl p-6 flex items-center justify-center min-h-[160px]",
        children: i.jsx("div", {
          className: "animate-pulse text-gray-400",
          children: "正在连接全球电台...",
        }),
      })
      : i.jsxs("div", {
        className: "glass-card rounded-2xl p-6 hover-glow transition-all",
        children: [
          i.jsx("audio", {
            ref: p,
            onEnded: () => v(!1),
            onError: () => v(!1),
          }),
          i.jsxs("div", {
            className: "flex items-center justify-between mb-4",
            children: [
              i.jsx("span", {
                className:
                  "px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
                children: "🌍 全球电台",
              }),
              i.jsx("a", {
                href: "https://100zhang.top/radio/",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-gray-500 hover:text-white text-xs transition-colors",
                children: "探索更多 →",
              }),
            ],
          }),
          i.jsxs("div", {
            className: "mb-4",
            children: [
              i.jsx("h3", {
                className: "text-lg font-bold text-white truncate mb-1",
                children: d?.name || "选择电台",
              }),
              i.jsxs("p", {
                className: "text-sm text-gray-400 truncate",
                children: [
                  d?.country || "全球",
                  " · ",
                  d?.tags?.split(",")[0] || "音乐",
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              i.jsx("button", {
                onClick: x,
                className: `w-12 h-12 rounded-full flex items-center justify-center transition-all ${m ? "bg-cyan-500 text-black" : "bg-white/10 text-white hover:bg-white/20"}`,
                children: m
                  ? i.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: i.jsx("path", {
                      d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z",
                    }),
                  })
                  : i.jsx("svg", {
                    className: "w-5 h-5 ml-0.5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: i.jsx("path", { d: "M8 5v14l11-7z" }),
                  }),
              }),
              i.jsx("button", {
                onClick: M,
                className:
                  "w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all",
                title: "下一个电台",
                children: i.jsx("svg", {
                  className: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: i.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7",
                  }),
                }),
              }),
              m &&
              i.jsxs("div", {
                className: "flex items-center gap-1 ml-auto",
                children: [
                  i.jsx("span", {
                    className:
                      "w-1 h-3 bg-cyan-400 rounded-full animate-pulse",
                  }),
                  i.jsx("span", {
                    className:
                      "w-1 h-4 bg-cyan-400 rounded-full animate-pulse",
                    style: { animationDelay: "0.1s" },
                  }),
                  i.jsx("span", {
                    className:
                      "w-1 h-2 bg-cyan-400 rounded-full animate-pulse",
                    style: { animationDelay: "0.2s" },
                  }),
                ],
              }),
            ],
          }),
        ],
      });
  },
  Ha = [
    {
      title: "代码审查专家",
      content:
        "你是一名资深代码审查专家。请仔细审查以下代码，指出潜在的 bug、性能问题、安全隐患和代码风格问题，并给出具体的改进建议。",
      category: "开发",
    },
    {
      title: "产品需求分析师",
      content:
        "你是一名产品经理。请帮我分析以下用户需求，拆解为具体的功能模块，评估技术可行性，并按优先级排序。",
      category: "产品",
    },
    {
      title: "英文润色助手",
      content:
        "你是一名专业的英文编辑。请帮我润色以下文本，使其更加地道、流畅，同时保持原意。请标注你的修改并解释原因。",
      category: "写作",
    },
    {
      title: "创意头脑风暴",
      content:
        "你是一名创意总监。请围绕以下主题进行头脑风暴，提供 10 个独特且可执行的创意方案，每个方案需包含核心创意点和简要执行路径。",
      category: "创意",
    },
    {
      title: "学习计划制定",
      content:
        "你是一名学习顾问。请根据我的目标和当前水平，帮我制定一个为期 30 天的学习计划，包含每日任务、学习资源推荐和阶段性检验方法。",
      category: "学习",
    },
  ],
  Jy = () => {
    const [s, f] = C.useState(0),
      [d, r] = C.useState(!1),
      m = Ha[s];
    C.useEffect(() => {
      const p = setInterval(() => {
        f((x) => (x + 1) % Ha.length);
      }, 8e3);
      return () => clearInterval(p);
    }, []);
    const v = async () => {
      try {
        (await navigator.clipboard.writeText(m.content),
          r(!0),
          setTimeout(() => r(!1), 2e3));
      } catch (p) {
        console.error("复制失败:", p);
      }
    },
      S = () => {
        f((p) => (p + 1) % Ha.length);
      },
      z = () => {
        f((p) => (p - 1 + Ha.length) % Ha.length);
      };
    return i.jsxs("div", {
      className: "glass-card rounded-2xl p-6 hover-glow transition-all",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between mb-4",
          children: [
            i.jsx("span", {
              className:
                "px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
              children: "⚡ 精选提示词",
            }),
            i.jsx("a", {
              href: "https://100zhang.top/prompt-manager/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "text-gray-500 hover:text-white text-xs transition-colors",
              children: "管理更多 →",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "mb-4",
          children: [
            i.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                i.jsx("h3", {
                  className: "text-lg font-bold text-white",
                  children: m.title,
                }),
                i.jsx("span", {
                  className:
                    "px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-400",
                  children: m.category,
                }),
              ],
            }),
            i.jsx("p", {
              className: "text-sm text-gray-400 line-clamp-2 leading-relaxed",
              children: m.content,
            }),
          ],
        }),
        i.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                i.jsx("button", {
                  onClick: z,
                  className:
                    "w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all",
                  children: i.jsx("svg", {
                    className: "w-3 h-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: i.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M15 19l-7-7 7-7",
                    }),
                  }),
                }),
                i.jsx("button", {
                  onClick: S,
                  className:
                    "w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all",
                  children: i.jsx("svg", {
                    className: "w-3 h-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: i.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M9 5l7 7-7 7",
                    }),
                  }),
                }),
                i.jsx("div", {
                  className: "flex items-center gap-1 ml-2",
                  children: Ha.map((p, x) =>
                    i.jsx(
                      "span",
                      {
                        className: `w-1.5 h-1.5 rounded-full transition-all ${x === s ? "bg-yellow-400" : "bg-white/20"}`,
                      },
                      x,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("button", {
              onClick: v,
              className: `px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${d ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 hover:bg-yellow-500/20"}`,
              children: d
                ? i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: i.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M5 13l4 4L19 7",
                      }),
                    }),
                    "已复制",
                  ],
                })
                : i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: i.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
                      }),
                    }),
                    "复制",
                  ],
                }),
            }),
          ],
        }),
      ],
    });
  },
  ky = () => {
    const s = [
      {
        title: "Video2GIF",
        category: "Tool",
        categoryColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
        description:
          "免费在线视频转 GIF 工具。支持多种视频格式，可调节清晰度、帧率，一键裁剪画面和时间段。",
        link: "https://100zhang.top/video2gif/",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-indigo-400", children: "Video" }),
            " ➔ ",
            i.jsx("span", { className: "text-white", children: "GIF" }),
            i.jsx("br", {}),
            i.jsx("span", {
              className: "text-gray-600",
              children: "// FFmpeg WebAssembly",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-green-400", children: "High Quality" }),
          ],
        }),
      },
      {
        title: "HTML 预览工具",
        category: "Tool",
        categoryColor: "border-blue-500/30 bg-blue-500/10 text-blue-300",
        description:
          "用于快速预览与调试 HTML 片段，所见即所得，支持本地运行与图片导出。",
        link: "/tool/",
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-blue-400", children: "<div" }),
            " ",
            i.jsx("span", { className: "text-purple-400", children: "class" }),
            "=",
            i.jsx("span", {
              className: "text-green-400",
              children: '"preview"',
            }),
            i.jsx("span", { className: "text-blue-400", children: ">" }),
            i.jsx("br", {}),
            "  ",
            i.jsx("span", { className: "text-white", children: "Live Render" }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-blue-400", children: "</div>" }),
          ],
        }),
      },
      {
        title: "拍立得墙",
        category: "Web App",
        categoryColor: "border-pink-500/30 bg-pink-500/10 text-pink-300",
        description:
          "一个充满仪式感的照片记录工具。支持上传照片生成拍立得效果，生成分享海报，记录生活中的美好瞬间。",
        link: "https://100zhang.top/polaroid/#",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-pink-400", children: "const" }),
            " ",
            i.jsx("span", { className: "text-blue-400", children: "memory" }),
            " = ",
            i.jsx("span", { className: "text-yellow-400", children: "new" }),
            " ",
            i.jsx("span", {
              className: "text-green-400",
              children: "Polaroid",
            }),
            "(",
            "{",
            " ",
            i.jsx("br", {}),
            "  date: ",
            i.jsx("span", {
              className: "text-orange-400",
              children: "'Today'",
            }),
            ",",
            i.jsx("br", {}),
            "  mood: ",
            i.jsx("span", {
              className: "text-orange-400",
              children: "'Happy'",
            }),
            i.jsx("br", {}),
            "}",
            ");",
          ],
        }),
      },
      {
        title: "提示词管理器",
        category: "Web App",
        categoryColor: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
        description:
          "Memphis 风格的 AI 提示词管理工具。支持创建、编辑、分类管理 Prompt，一键复制，助你高效调试 AI 模型。",
        link: "https://100zhang.top/prompt-manager/",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M13 10V3L4 14h7v7l9-11h-7z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-yellow-400", children: "User:" }),
            " Write a story...",
            i.jsx("br", {}),
            i.jsx("span", { className: "text-blue-400", children: "AI:" }),
            " ",
            i.jsx("span", {
              className: "text-green-400",
              children: "Certainly!",
            }),
            i.jsx("br", {}),
            i.jsx("span", {
              className: "text-gray-600",
              children: "// Optimized Prompt",
            }),
          ],
        }),
      },
      {
        title: "全球3D电台",
        category: "Web App",
        categoryColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
        description:
          "基于 3D 地球的全球电台播放器。探索来自世界各地的实时广播，沉浸式体验地球上的声音。",
        link: "https://100zhang.top/radio/",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0022 5.5V3.934a12.18 12.18 0 00-14.945-.047M9.055 3.917L9 4m.055-.083A12.189 12.189 0 0112 3c1.008 0 1.988.124 2.924.357",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-cyan-400", children: "🌍" }),
            " ",
            i.jsx("span", { className: "text-blue-400", children: "Tuning" }),
            " ",
            i.jsx("span", {
              className: "text-green-400",
              children: "Worldwide",
            }),
            i.jsx("br", {}),
            i.jsx("span", {
              className: "text-gray-600",
              children: "// 30,000+ stations",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-orange-400", children: "📻" }),
            " ",
            i.jsx("span", {
              className: "text-white",
              children: "Live Radio Stream",
            }),
          ],
        }),
      },
      {
        title: "LifeOS 仪表盘",
        category: "Dashboard",
        categoryColor:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        description:
          "个人生活仪表盘。年度进度追踪、实时汇率与股指、中国宏观经济指标、AI 解读，以及灵感记录墙。",
        link: "https://100zhang.top/lifeos/",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-emerald-400", children: "📊" }),
            " ",
            i.jsx("span", { className: "text-white", children: "2025" }),
            " ",
            i.jsx("span", {
              className: "text-emerald-400",
              children: "99.87%",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-gray-600", children: "USD/CNY" }),
            " ",
            i.jsx("span", { className: "text-blue-400", children: "7.0066" }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-rose-400", children: "PPI" }),
            " ",
            i.jsx("span", { className: "text-neutral-400", children: "-2.5%" }),
            " ",
            i.jsx("span", {
              className: "text-gray-600",
              children: "// AI Insight",
            }),
          ],
        }),
      },
      {
        title: "UniNews 资讯站",
        category: "Web App",
        categoryColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
        description:
          "大学生核心资讯聚合。考研、四六级、专升本、就业与培训。AI 每日总结、趋势分析与智能问答。",
        link: "https://100zhang.top/uninews/",
        external: !0,
        version: "v1.0",
        icon: i.jsxs("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: [
            i.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 14l9-5-9-5-9 5 9 5z",
            }),
            i.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
            }),
            i.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
            }),
          ],
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-cyan-400", children: "const" }),
            " ",
            i.jsx("span", { className: "text-white", children: "news" }),
            " = ",
            i.jsx("span", { className: "text-yellow-400", children: "await" }),
            " ",
            i.jsx("span", { className: "text-green-400", children: "UniNews" }),
            ".fetch();",
            i.jsx("br", {}),
            i.jsx("span", {
              className: "text-gray-600",
              children: "// AI Summary & Chat",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-purple-400", children: "return" }),
            " ",
            i.jsx("span", {
              className: "text-orange-400",
              children: '"Trends Rising"',
            }),
            ";",
          ],
        }),
      },
      {
        title: "亲属称呼计算器",
        category: "Tool",
        categoryColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
        description:
          "一款高美学的亲属关系计算器。支持南北方方言切换、逆向查询、智能纠错及测验游戏，一键生成精美分享海报。",
        link: "https://100zhang.top/relatives/",
        external: !0,
        version: "v3.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-amber-400", children: "我" }),
            " ➔ ",
            i.jsx("span", { className: "text-white", children: "父" }),
            " ➔ ",
            i.jsx("span", { className: "text-white", children: "兄" }),
            " ",
            i.jsx("br", {}),
            i.jsx("span", {
              className: "text-gray-600",
              children: "// 智能纠错与分享卡片",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-green-400", children: "Result:" }),
            " ",
            i.jsx("span", { className: "text-orange-400", children: '"伯伯"' }),
          ],
        }),
      },
      {
        title: "酒店人模拟器",
        category: "Game",
        categoryColor: "border-red-500/30 bg-red-500/10 text-red-300",
        description:
          "Reigns风格的酒店职场生存游戏。化身酒店新人，在服务、摸鱼、上进与合规之间抉择，体验真实的职场生存法则。",
        link: "https://100zhang.top/hotelier/",
        external: !0,
        version: "v6.1",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-red-400", children: "🏨" }),
            " ",
            i.jsx("span", { className: "text-white", children: "Day 1" }),
            " ",
            i.jsx("span", {
              className: "text-gray-600",
              children: "// Hotel Life",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-yellow-400", children: "→" }),
            " ",
            i.jsx("span", {
              className: "text-green-400",
              children: "服务客人",
            }),
            " ",
            i.jsx("span", { className: "text-gray-500", children: "or" }),
            " ",
            i.jsx("span", { className: "text-orange-400", children: "摸鱼" }),
            "?",
            i.jsx("br", {}),
            i.jsx("span", { className: "text-blue-400", children: "⚡" }),
            " ",
            i.jsx("span", {
              className: "text-white",
              children: "命运由卡牌决定",
            }),
          ],
        }),
      },
      {
        title: "八字算命大师",
        category: "Web App",
        categoryColor: "border-red-500/30 bg-red-500/10 text-red-300",
        description:
          "专业的在线命理测算平台。结合传统命理学与现代AI技术，提供八字排盘、手相分析、面相测算、流年运势等服务。",
        link: "https://100zhang.top/bazishouxiang/",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-red-400", children: "☯️" }),
            " ",
            i.jsx("span", { className: "text-white", children: "八字排盘" }),
            " ",
            i.jsx("span", {
              className: "text-gray-600",
              children: "// 命理分析",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-yellow-400", children: "🤚" }),
            " ",
            i.jsx("span", {
              className: "text-green-400",
              children: "手相面相",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-purple-400", children: "🔮" }),
            " ",
            i.jsx("span", { className: "text-white", children: "AI智能解读" }),
          ],
        }),
      },
      {
        title: "AI 作业助手",
        category: "Web App",
        categoryColor: "border-violet-500/30 bg-violet-500/10 text-violet-300",
        description:
          "智能作业辅助工具。支持拍照上传作业图片，AI 自动分析解答，即时问答互动，让学习更高效。",
        link: "https://100zhang.top/homework/",
        external: !0,
        version: "v1.0",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          }),
        }),
        preview: i.jsxs("div", {
          className: "p-4 font-mono text-xs text-gray-500 leading-4",
          children: [
            i.jsx("span", { className: "text-violet-400", children: "📷" }),
            " ",
            i.jsx("span", { className: "text-white", children: "Upload" }),
            " ",
            i.jsx("span", {
              className: "text-gray-600",
              children: "// Homework Image",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-yellow-400", children: "🤖" }),
            " ",
            i.jsx("span", {
              className: "text-green-400",
              children: "AI Analyzing...",
            }),
            i.jsx("br", {}),
            i.jsx("span", { className: "text-blue-400", children: "💬" }),
            " ",
            i.jsx("span", {
              className: "text-white",
              children: "Ask anything!",
            }),
          ],
        }),
      },
    ];
    return i.jsxs("section", {
      className:
        "w-full max-w-6xl mx-auto mb-24 opacity-0 animate-slide-up-delay",
      style: { animationDelay: "0.4s" },
      children: [
        i.jsxs("div", {
          className: "text-center mb-10",
          children: [
            i.jsxs("h2", {
              className: "text-3xl font-bold text-white mb-4",
              children: [
                "工具 & 作品 ",
                i.jsx("span", {
                  className: "text-lg font-normal text-gray-500 ml-2",
                  children: "(Tools & Works)",
                }),
              ],
            }),
            i.jsx("p", {
              className: "text-gray-400",
              children: "这里展示我做过的可直接使用的工具与代表作品。",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",
          children: [i.jsx(Ky, {}), i.jsx(Jy, {})],
        }),
        i.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: s.map((f, d) =>
            i.jsx(
              "a",
              {
                href: f.link,
                target: f.external ? "_blank" : "_self",
                rel: f.external ? "noopener noreferrer" : "",
                className: "group block h-full",
                onClick: () => {
                  window.umami &&
                    window.umami.track("[Portal] Tool Clicked", {
                      name: f.title,
                    });
                },
                children: i.jsxs("article", {
                  className:
                    "glass-card rounded-3xl p-8 h-full flex flex-col relative hover-glow transition-all duration-300",
                  children: [
                    i.jsxs("div", {
                      className: "mb-6",
                      children: [
                        i.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            i.jsx("span", {
                              className: `px-3 py-1 rounded-full text-xs font-medium border ${f.categoryColor}`,
                              children: f.category,
                            }),
                            i.jsx("div", {
                              className:
                                "text-gray-500 group-hover:text-white transition-colors duration-300",
                              children: f.icon,
                            }),
                          ],
                        }),
                        i.jsx("h3", {
                          className:
                            "text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors",
                          children: f.title,
                        }),
                        i.jsx("p", {
                          className: "text-gray-400 text-sm leading-relaxed",
                          children: f.description,
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "mt-auto w-full aspect-video rounded-xl bg-gray-900/80 border border-white/5 overflow-hidden relative group-hover:border-white/20 transition-colors",
                      children: [
                        f.preview,
                        i.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]",
                          children: i.jsx("span", {
                            className:
                              "px-4 py-2 bg-white text-black text-sm font-bold rounded-full",
                            children: "立即体验",
                          }),
                        }),
                        i.jsx("div", {
                          className:
                            "absolute bottom-2 right-2 text-[10px] text-gray-600",
                          children: f.version,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              d,
            ),
          ),
        }),
      ],
    });
  },
  Wy = () => {
    const s = [
      {
        name: "张小鸰 | 新闻记者",
        relation: "Father",
        relationColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
        description:
          "缅怀我的父亲。1952-2003，中国体育报资深记者，中国百佳新闻工作者。一生热爱足球新闻事业。",
        link: "/baba/",
        external: !1,
        life: "1952-2003",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
          }),
        }),
        preview: i.jsx("div", {
          className:
            "flex items-center justify-center h-full bg-neutral-900/50",
          children: i.jsxs("div", {
            className: "text-center p-6",
            children: [
              i.jsx("div", {
                className:
                  "w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30",
                children: i.jsx("span", {
                  className: "text-2xl",
                  children: "🕊️",
                }),
              }),
              i.jsx("p", {
                className: "text-amber-400 font-serif text-lg",
                children: "永远怀念",
              }),
              i.jsx("p", {
                className: "text-xs text-gray-500 mt-1",
                children: "In Loving Memory",
              }),
            ],
          }),
        }),
      },
      {
        name: "张西洛 | 资深报人",
        relation: "Grandfather",
        relationColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
        description:
          "历任《光明日报》编辑部主任、《人民政协报》副总编辑。第五至八届全国政协委员。(页面建设中...)",
        link: "#",
        external: !1,
        life: "1918-1998",
        icon: i.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
          }),
        }),
        preview: i.jsx("div", {
          className:
            "flex items-center justify-center h-full bg-neutral-900/50",
          children: i.jsxs("div", {
            className: "text-center p-6",
            children: [
              i.jsx("div", {
                className:
                  "w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30",
                children: i.jsx("span", {
                  className: "text-2xl",
                  children: "✒️",
                }),
              }),
              i.jsx("p", {
                className: "text-indigo-400 font-serif text-lg",
                children: "笔耕不辍",
              }),
              i.jsx("p", {
                className: "text-xs text-gray-500 mt-1",
                children: "Coming Soon",
              }),
            ],
          }),
        }),
      },
    ];
    return i.jsxs("section", {
      className:
        "w-full max-w-6xl mx-auto mb-24 opacity-0 animate-slide-up-delay",
      style: { animationDelay: "0.6s" },
      children: [
        i.jsxs("div", {
          className: "text-center mb-10",
          children: [
            i.jsxs("h2", {
              className: "text-3xl font-bold text-white mb-4",
              children: [
                "家人 ",
                i.jsx("span", {
                  className: "text-lg font-normal text-gray-500 ml-2",
                  children: "(Family)",
                }),
              ],
            }),
            i.jsx("p", {
              className: "text-gray-400",
              children: "致敬我生命中最重要的人。",
            }),
          ],
        }),
        i.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: s.map((f, d) =>
            i.jsx(
              "a",
              {
                href: f.link,
                target: f.external ? "_blank" : "_self",
                className: "group block h-full",
                onClick: () => {
                  window.umami &&
                    window.umami.track("[Portal] Family Clicked", {
                      name: f.name,
                    });
                },
                children: i.jsxs("article", {
                  className:
                    "glass-card rounded-3xl p-8 h-full flex flex-col relative hover-glow transition-all duration-300",
                  children: [
                    i.jsxs("div", {
                      className: "mb-6",
                      children: [
                        i.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            i.jsx("span", {
                              className: `px-3 py-1 rounded-full text-xs font-medium border ${f.relationColor}`,
                              children: f.relation,
                            }),
                            i.jsx("div", {
                              className:
                                "text-gray-500 group-hover:text-amber-400 transition-colors duration-300",
                              children: f.icon,
                            }),
                          ],
                        }),
                        i.jsx("h3", {
                          className:
                            "text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors",
                          children: f.name,
                        }),
                        i.jsx("p", {
                          className: "text-gray-400 text-sm leading-relaxed",
                          children: f.description,
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "mt-auto w-full aspect-video rounded-xl bg-gray-900/80 border border-white/5 overflow-hidden relative group-hover:border-white/20 transition-colors",
                      children: [
                        f.preview,
                        i.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]",
                          children: i.jsx("span", {
                            className:
                              "px-4 py-2 bg-white text-black text-sm font-bold rounded-full",
                            children: "查看纪念页",
                          }),
                        }),
                        i.jsx("div", {
                          className:
                            "absolute bottom-2 right-2 text-[10px] text-gray-600",
                          children: f.life,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              d,
            ),
          ),
        }),
      ],
    });
  },
  $y = () => {
    const s = (f) => {
      (navigator.clipboard.writeText(f), alert("微信号已复制！"));
    };
    return i.jsxs("footer", {
      className:
        "w-full max-w-4xl mx-auto text-center opacity-0 animate-slide-up-delay pb-10",
      style: { animationDelay: "0.5s" },
      children: [
        i.jsx("h2", {
          className: "text-2xl font-bold text-white mb-8",
          children: "联系方式",
        }),
        i.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-center items-center gap-6 mb-10",
          children: [
            i.jsxs("a", {
              href: "mailto:zc1018@me.com",
              className:
                "group relative px-8 py-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/5 hover:border-white/20",
              children: [
                i.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    i.jsx("svg", {
                      className: "w-5 h-5 text-gray-400 group-hover:text-white",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: i.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                      }),
                    }),
                    i.jsx("span", {
                      className:
                        "text-gray-300 group-hover:text-white font-medium",
                      children: "zc1018@me.com",
                    }),
                  ],
                }),
                i.jsx("span", {
                  className:
                    "absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                  children: "点击发送邮件",
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "group relative px-8 py-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/5 hover:border-white/20 cursor-pointer",
              onClick: () => s("zc1018"),
              children: [
                i.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    i.jsx("svg", {
                      className:
                        "w-5 h-5 text-gray-400 group-hover:text-green-400",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: i.jsx("path", {
                        d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 19.918 4.636 14.16C2.983 12.784 2 10.977 2 9c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                      }),
                    }),
                    i.jsx("span", {
                      className:
                        "text-gray-300 group-hover:text-white font-medium",
                      children: "zc1018",
                    }),
                  ],
                }),
                i.jsx("span", {
                  className:
                    "absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                  children: "点击复制微信号",
                }),
              ],
            }),
          ],
        }),
        i.jsx("p", {
          className: "text-gray-500 text-sm",
          children:
            "合作/交流方向：AI 产品落地、教育产品与增长、旅行与内容合作",
        }),
        i.jsxs("div", {
          className: "mt-8 pt-8 border-t border-white/5",
          children: [
            i.jsxs("div", {
              className: "flex justify-center gap-6 mb-4 text-xs text-gray-600",
              children: [
                i.jsx(at, {
                  to: "/about",
                  className: "hover:text-gray-400 transition-colors",
                  children: "关于我",
                }),
                i.jsx(at, {
                  to: "/blog",
                  className: "hover:text-gray-400 transition-colors",
                  children: "文章",
                }),
                i.jsx(at, {
                  to: "/contact",
                  className: "hover:text-gray-400 transition-colors",
                  children: "联系方式",
                }),
                i.jsx(at, {
                  to: "/privacy",
                  className: "hover:text-gray-400 transition-colors",
                  children: "隐私政策",
                }),
              ],
            }),
            i.jsx("p", {
              className: "text-gray-600 text-xs text-center",
              children: "© 2025 百万张. All rights reserved.",
            }),
          ],
        }),
      ],
    });
  },
  Js = [
    {
      slug: "how-to-use-ai-prompts-effectively",
      title: "如何写出真正有效的 AI 提示词：从入门到进阶",
      date: "2026-01-20",
      category: "AI 工具",
      categoryColor: "text-purple-400 bg-purple-400/10",
      readTime: "8 分钟",
      summary:
        "很多人用 AI 工具的效果不好，根本原因不是 AI 不够强，而是提示词写得不够好。本文分享我在日常使用中总结的提示词写作方法，帮你快速提升 AI 使用效率。",
      content: `
## 为什么提示词很重要？

用过 ChatGPT 或 Claude 的人都有这样的体验：同样的问题，不同的问法，得到的答案质量差异巨大。这背后的核心就是**提示词工程（Prompt Engineering）**。

提示词不是魔法咒语，而是一种沟通技巧。你越清楚地告诉 AI 你想要什么，它就越能给你满意的答案。

## 基础原则：CLEAR 框架

我总结了一个简单的 CLEAR 框架，帮助你快速写出高质量提示词：

**C - Context（背景）**：告诉 AI 你的背景和场景
**L - Length（长度）**：指定你想要的输出长度
**E - Examples（示例）**：给出你期望的输出格式或风格示例
**A - Audience（受众）**：说明内容的目标读者
**R - Role（角色）**：让 AI 扮演特定角色

### 示例对比

❌ 差的提示词：
\`\`\`
帮我写一篇关于 AI 的文章
\`\`\`

✅ 好的提示词：
\`\`\`
你是一位科技媒体编辑，请为非技术背景的普通读者写一篇 800 字的科普文章，
主题是"AI 如何改变日常工作"。文章要有具体的使用场景举例，语言通俗易懂，
避免使用专业术语。结构：引言 + 3个场景 + 总结。
\`\`\`

## 进阶技巧

### 1. 角色扮演法
让 AI 扮演特定专家，能显著提升专业领域的输出质量：
- "你是一位有 10 年经验的产品经理..."
- "你是一位专注于 A 股的资深分析师..."
- "你是一位精通中文写作的编辑..."

### 2. 思维链（Chain of Thought）
对于复杂问题，让 AI 一步步思考：
\`\`\`
请分析这个商业决策，先列出所有相关因素，然后逐一分析利弊，最后给出建议。
\`\`\`

### 3. 格式控制
明确指定输出格式，让结果更易用：
- "用 Markdown 表格展示"
- "用编号列表，每条不超过 30 字"
- "用 JSON 格式输出，包含 title、summary、tags 字段"

### 4. 迭代优化
不要期望一次就得到完美答案。先得到初稿，然后针对不满意的地方继续追问：
- "第二点展开说说"
- "语气改得更正式一些"
- "加入更多数据支撑"

## 常见错误

1. **太模糊**：问题越具体，答案越有用
2. **没有约束**：不限制长度和格式，AI 会自由发挥
3. **一次问太多**：复杂任务拆分成多个步骤
4. **不给反馈**：AI 不知道你不满意什么，就无法改进

## 工具推荐

我开发了一个[提示词管理器](https://100zhang.top/prompt-manager/)，可以帮你保存、分类和快速复用常用提示词。如果你经常使用 AI 工具，这个工具能帮你节省大量时间。

## 总结

写好提示词的核心是：**把你脑子里的想法，尽可能清晰地传达给 AI**。把 AI 当成一个聪明但需要明确指令的助手，而不是一个能读心术的神仙。

多练习，多迭代，你会发现 AI 工具的潜力远超你的想象。
        `,
    },
    {
      slug: "japan-travel-tips-2025",
      title: "2025 年日本旅行实用指南：省钱、避坑、深度体验",
      date: "2026-01-15",
      category: "旅行",
      categoryColor: "text-pink-400 bg-pink-400/10",
      readTime: "12 分钟",
      summary:
        "去过日本七次，每次都有新发现。这篇文章整理了我多年积累的日本旅行经验，从签证到交通，从住宿到美食，帮你规划一次真正值得的日本之旅。",
      content: `
## 为什么日本值得一去再去？

日本是我去过次数最多的国家。每次去都有新发现——不是因为景点没逛完，而是因为日本的细节太丰富了。一条小巷、一家老铺、一个节日，都能给你带来意想不到的惊喜。

## 签证与入境

**中国公民赴日签证**目前需要提前申请，建议提前 2-3 周办理。

主要材料：
- 护照（有效期 6 个月以上）
- 近期照片
- 在职证明或营业执照
- 银行流水（近 3 个月，余额建议 3 万以上）
- 行程单和酒店预订

**小贴士**：如果有日本签证记录，续签会更容易。第一次申请建议找旅行社代办，成功率更高。

## 交通攻略

### 机场到市区
- **东京成田机场**：推荐 N'EX（成田特快），约 60 分钟到新宿，票价约 3000 日元
- **东京羽田机场**：更近，推荐京急线，约 30 分钟到品川
- **大阪关西机场**：推荐 HARUKA 特急，约 75 分钟到大阪站

### 城市内交通
日本的地铁系统非常发达，但票价较贵。建议：
- 购买 **IC 卡**（Suica/Pasmo）：可以在全国大部分交通工具和便利店使用
- 考虑 **JR Pass**：如果要跨城市旅行，JR Pass 非常划算
- 善用 **Google Maps**：日本的公共交通信息非常准确

## 住宿选择

### 类型对比

| 类型 | 价格 | 体验 | 推荐场景 |
|------|------|------|----------|
| 胶囊旅馆 | ¥200-400/晚 | 基础 | 背包客、短暂停留 |
| 商务酒店 | ¥500-1000/晚 | 舒适 | 大多数旅行者 |
| 民宿（民泊） | ¥400-800/晚 | 有特色 | 想体验日式生活 |
| 温泉旅馆（旅馆） | ¥2000+/晚 | 极致 | 特别体验 |

**我的推荐**：第一次去日本，住商务酒店性价比最高。如果预算充足，至少安排一晚温泉旅馆，这是日本独有的体验。

## 美食指南

### 必吃清单
1. **拉面**：各地风格不同，东京酱油拉面、博多豚骨拉面、札幌味噌拉面各有特色
2. **寿司**：回转寿司性价比高，高端寿司店需要提前预约
3. **居酒屋**：日本的下班文化，适合体验当地生活
4. **便利店**：711、全家、罗森的便当和甜点水平远超国内
5. **和牛**：松阪牛、神户牛、近江牛，一生必吃一次

### 省钱技巧
- 午餐比晚餐便宜很多，很多高档餐厅有午市套餐
- 便利店早餐是性价比最高的选择
- 超市打折时间（晚上 7-8 点）买便当

## 购物攻略

### 必买清单
- **药妆**：资生堂、花王、小林制药等，价格比国内便宜 30-50%
- **电器**：秋叶原的电器价格有时比国内便宜，但要注意电压问题
- **零食**：各地限定零食，机场和便利店都有
- **文具**：日本文具质量极高，LOFT、东急手等文具店值得逛

### 退税
消费满 5000 日元可以退税（约 10%），记得带护照。

## 深度体验建议

1. **住在非旅游区**：选择当地人居住的区域，体验真实的日本生活
2. **参加当地活动**：节日、祭典、市集，这些才是日本文化的精髓
3. **早起**：早上 6-8 点的神社、市场、街道，是最美的时候
4. **学几句日语**：哪怕只是"ありがとう"（谢谢）和"すみません"（不好意思），当地人会非常友好

## 实用 App

- **Google Maps**：导航必备
- **Google 翻译**：拍照翻译菜单神器
- **Tabelog**：日本最权威的餐厅评价平台
- **乐天旅游/Booking.com**：订酒店

## 总结

日本旅行的精髓在于**慢下来**。不要试图在一次旅行中走遍所有景点，选择一两个城市深度体验，往往比走马观花更有收获。

如果你正在规划日本旅行，欢迎给我发邮件，我很乐意分享更多具体建议。
        `,
    },
    {
      slug: "china-economy-2025-observation",
      title: "2025 年中国经济观察：三个值得关注的结构性变化",
      date: "2026-01-10",
      category: "财经",
      categoryColor: "text-emerald-400 bg-emerald-400/10",
      readTime: "10 分钟",
      summary:
        "2025 年的中国经济经历了复杂的调整期。本文从产业结构、消费模式和对外贸易三个维度，分析正在发生的结构性变化，以及这些变化对普通人意味着什么。",
      content: `
## 前言

分析宏观经济不是为了预测股市涨跌，而是为了理解我们所处的时代背景，做出更好的个人决策。

2025 年的中国经济，表面上看是增速放缓，但深层次是一场深刻的结构性转型。理解这场转型，比关注短期数据波动更有价值。

## 变化一：制造业的"质量跃迁"

过去十年，中国制造业经历了从"量"到"质"的转变。

**数据说话**：
- 2024 年，中国新能源汽车出口量首次超过日本，成为全球最大汽车出口国
- 光伏组件全球市场份额超过 80%
- 锂电池、电动汽车、光伏"新三样"出口额持续增长

这不是偶然。背后是十年以上的持续投入和产业链的系统性升级。

**对普通人的意义**：
- 制造业高端化创造了更多高薪技术岗位
- 国产品牌竞争力提升，消费者有了更多高性价比选择
- 相关产业链的就业机会增加

## 变化二：消费模式的"理性回归"

疫情后，中国消费者的消费观念发生了明显变化。

**主要趋势**：
1. **性价比优先**：消费者更注重产品的实际价值，而非品牌溢价
2. **体验消费崛起**：旅游、餐饮、文娱消费增长，实物消费相对放缓
3. **国货崛起**：年轻消费者对国产品牌的认可度显著提升
4. **理性储蓄**：居民储蓄率维持高位，消费更加谨慎

**背后的逻辑**：
这种"理性消费"不是消费降级，而是消费者更成熟的表现。当消费者不再为品牌光环买单，倒逼企业真正提升产品质量和服务。

**对普通人的意义**：
- 消费决策更理性，减少冲动消费
- 国产品牌提供了更多高质量选择
- 体验消费的增长，意味着服务业就业机会增加

## 变化三：对外贸易的"多元化布局"

中美贸易摩擦加速了中国对外贸易的多元化进程。

**主要变化**：
- 东盟超越欧盟，成为中国最大贸易伙伴
- "一带一路"沿线国家贸易占比持续提升
- 跨境电商成为新的贸易增长点
- 人民币国际化进程加快

**值得关注的风险**：
- 部分新兴市场政治风险较高
- 汇率波动对出口企业影响较大
- 贸易保护主义在全球范围内抬头

## 我的判断

中国经济正在经历一次"痛苦但必要"的转型。短期内，这种转型会带来增速放缓、部分行业阵痛。但长期来看，这是走向高质量发展的必经之路。

对于普通人，我的建议是：
1. **关注产业趋势**：新能源、AI、高端制造是未来的增长方向
2. **提升技能价值**：在结构性变化中，技能的价值比资产更稳定
3. **保持流动性**：经济转型期，保持一定的现金储备很重要
4. **全球视野**：理解全球经济格局，做出更好的个人决策

## 数据来源

本文数据来源于国家统计局、海关总署、商务部等官方数据，以及多家研究机构的分析报告。宏观经济分析存在不确定性，本文仅供参考，不构成投资建议。
        `,
    },
    {
      slug: "product-thinking-ai-era",
      title: "AI 时代的产品思维：什么变了，什么没变",
      date: "2026-01-05",
      category: "产品思考",
      categoryColor: "text-blue-400 bg-blue-400/10",
      readTime: "9 分钟",
      summary:
        "做了十年产品，经历了移动互联网的爆发和 AI 的崛起。这篇文章想聊聊：AI 时代，产品经理的核心价值是什么？哪些能力变得更重要，哪些正在被替代？",
      content: `
## 一个真实的困惑

2023 年初，当 ChatGPT 横空出世，我身边很多产品经理都有一个共同的困惑：**AI 会取代产品经理吗？**

两年过去了，我的答案是：**不会取代，但会深刻改变**。

## 什么变了？

### 1. 需求分析的效率大幅提升

过去，产品经理花大量时间在用户访谈记录整理、竞品分析、需求文档撰写上。现在，AI 可以帮你：
- 快速整理和分析大量用户反馈
- 生成竞品分析框架
- 辅助撰写 PRD 初稿

这不是说这些工作不重要，而是**执行层面的效率大幅提升**，产品经理可以把更多时间放在判断和决策上。

### 2. 原型和验证的门槛降低

以前，验证一个想法需要设计师出图、工程师开发，周期长、成本高。现在：
- AI 可以快速生成 UI 原型
- 低代码工具让产品经理可以自己搭建 MVP
- 用户测试可以更快速地进行

这意味着**产品迭代的速度会大幅加快**，"快速验证、快速迭代"的能力变得更加重要。

### 3. 技术理解的要求提高了

AI 时代，产品经理需要理解：
- 大模型的能力边界和局限性
- Prompt Engineering 的基本原理
- AI 产品的特殊设计挑战（幻觉、延迟、成本等）

不需要会写代码，但需要能和 AI 工程师有效沟通。

## 什么没变？

### 1. 用户洞察的核心地位

AI 可以分析数据，但无法替代真正的用户理解。

真正的用户洞察来自于：
- 深度的用户访谈和观察
- 对用户心理和行为模式的理解
- 对行业和市场的长期积累

这些是 AI 目前无法替代的。

### 2. 商业判断和优先级决策

产品经理最核心的价值之一，是在资源有限的情况下做出正确的优先级判断。

这需要：
- 对商业目标的深刻理解
- 对技术可行性的准确评估
- 对用户价值的清晰判断
- 在多方利益之间的平衡能力

这些判断涉及大量隐性知识和情境理解，AI 很难完全替代。

### 3. 跨团队协作和推动执行

产品经理的很大一部分工作是"让事情发生"——推动设计、工程、运营、市场等团队协同工作。

这需要：
- 清晰的沟通和表达能力
- 建立信任和影响力的能力
- 处理冲突和推动共识的能力

这些是典型的"人的工作"，AI 无法替代。

## 我的建议

对于想在 AI 时代保持竞争力的产品经理：

**1. 主动拥抱 AI 工具**
不要等着被替代，主动学习和使用 AI 工具，提升自己的工作效率。

**2. 深化用户理解能力**
把从 AI 工具节省下来的时间，投入到更深度的用户研究中。

**3. 培养 AI 产品设计能力**
学习如何设计 AI 功能，理解 AI 产品的特殊挑战和机会。

**4. 强化判断力和决策力**
在 AI 能做很多执行工作的时代，判断力和决策力变得更加稀缺和珍贵。

## 结语

AI 时代，产品经理的工作会变得更有趣，也更有挑战。那些能够有效利用 AI 工具、同时保持深度用户理解和商业判断力的产品经理，会比以前更有价值。

那些只会写文档、画流程图的产品经理，确实面临被替代的风险。

这是一个好时代，也是一个需要持续学习的时代。
        `,
    },
    {
      slug: "chinese-relatives-naming-guide",
      title: "中国亲属称呼完全指南：为什么这么复杂，又为什么值得了解",
      date: "2025-12-28",
      category: "文化",
      categoryColor: "text-amber-400 bg-amber-400/10",
      readTime: "7 分钟",
      summary:
        "中国的亲属称呼系统是世界上最复杂的之一。爷爷、外公、伯伯、叔叔、舅舅……这些称呼背后，藏着中国文化对家庭关系的独特理解。本文带你深入了解这个系统。",
      content: `
## 为什么中国亲属称呼这么复杂？

很多外国人学中文时，都会被中国的亲属称呼系统搞晕。

英语里，"uncle"可以指父亲的兄弟、母亲的兄弟，甚至父母的朋友。但在中文里：
- 父亲的哥哥 = 伯伯
- 父亲的弟弟 = 叔叔
- 母亲的兄弟 = 舅舅

这种精细的区分，不是中国人故意把事情搞复杂，而是反映了中国传统文化对**家族关系的重视程度**。

## 中国亲属称呼的逻辑

中国亲属称呼系统有几个核心维度：

### 1. 父系 vs 母系
中国传统上是父系社会，父系亲属和母系亲属有明确区分：
- 父亲的父母 = 爷爷、奶奶
- 母亲的父母 = 外公、外婆（或姥爷、姥姥）

"外"字本身就说明了母系亲属在传统观念中的"外来"地位。

### 2. 长幼顺序
中国文化极其重视长幼有序：
- 父亲的哥哥（年长）= 伯伯
- 父亲的弟弟（年幼）= 叔叔

这种区分在英语中完全不存在。

### 3. 性别区分
同样的关系，男女称呼不同：
- 父亲的姐妹 = 姑姑
- 母亲的姐妹 = 阿姨

### 4. 南北方差异
中国地域广阔，各地称呼有所不同：
- 北方叫"姥爷、姥姥"，南方叫"外公、外婆"
- 有些地方叫"爸爸"，有些地方叫"爹"
- 方言中还有更多变体

## 为什么值得了解？

### 文化理解
了解亲属称呼系统，能帮你理解中国文化中对家庭关系的重视。在中国，家庭是社会的基本单位，亲属关系网络是重要的社会资本。

### 实际应用
在中国生活或工作，正确称呼对方的亲属是基本礼貌。叫错了，可能会造成尴尬甚至冒犯。

### 语言学价值
中国亲属称呼系统是语言学研究的重要案例，展示了语言如何反映文化价值观。

## 一个有趣的工具

我开发了一个[亲属称呼计算器](https://100zhang.top/relatives/)，可以帮你快速查询任何亲属关系的正确称呼。

支持：
- 正向查询（我和某人的关系 → 应该叫什么）
- 逆向查询（某人叫我什么 → 我们是什么关系）
- 南北方方言切换
- 测验游戏模式

如果你经常在亲戚聚会上叫错人，这个工具应该能帮到你。

## 总结

中国亲属称呼系统的复杂性，是中国文化深度的一个缩影。它不是障碍，而是理解中国文化的一扇窗。

下次在家庭聚会上，当你正确叫出每一位亲戚的称呼时，你会发现这种精确性带来的是一种特别的亲密感。
        `,
    },
  ],
  Fy = (s) => Js.find((f) => f.slug === s),
  Iy = () => {
    const s = Js.slice(0, 3);
    return i.jsxs("section", {
      className:
        "w-full max-w-6xl mx-auto mb-24 opacity-0 animate-slide-up-delay",
      style: { animationDelay: "0.45s" },
      children: [
        i.jsxs("div", {
          className: "text-center mb-10",
          children: [
            i.jsxs("h2", {
              className: "text-3xl font-bold text-white mb-4",
              children: [
                "文章 ",
                i.jsx("span", {
                  className: "text-lg font-normal text-gray-500 ml-2",
                  children: "(Blog)",
                }),
              ],
            }),
            i.jsx("p", {
              className: "text-gray-400",
              children: "关于 AI 工具、旅行见闻和财经观察的原创内容。",
            }),
          ],
        }),
        i.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
          children: s.map((f) =>
            i.jsx(
              at,
              {
                to: `/blog/${f.slug}`,
                className: "group block",
                children: i.jsxs("article", {
                  className:
                    "glass-card rounded-2xl p-6 h-full flex flex-col hover-glow transition-all duration-300",
                  children: [
                    i.jsx("div", {
                      className: "mb-4",
                      children: i.jsx("span", {
                        className: `text-xs font-medium px-2 py-1 rounded-full ${f.categoryColor}`,
                        children: f.category,
                      }),
                    }),
                    i.jsx("h3", {
                      className:
                        "text-white font-semibold mb-3 leading-snug group-hover:text-amber-400 transition-colors line-clamp-2",
                      children: f.title,
                    }),
                    i.jsx("p", {
                      className:
                        "text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3",
                      children: f.summary,
                    }),
                    i.jsxs("div", {
                      className:
                        "flex items-center justify-between mt-4 pt-4 border-t border-white/5 text-xs text-gray-600",
                      children: [
                        i.jsx("span", { children: f.date }),
                        i.jsxs("span", { children: [f.readTime, "阅读"] }),
                      ],
                    }),
                  ],
                }),
              },
              f.slug,
            ),
          ),
        }),
        i.jsx("div", {
          className: "text-center",
          children: i.jsxs(at, {
            to: "/blog",
            className:
              "inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-full transition-all border border-white/5 hover:border-white/20 text-sm",
            children: [
              "查看全部文章",
              i.jsx("svg", {
                className: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: i.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M9 5l7 7-7 7",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Yn = ({ title: s, children: f }) =>
    i.jsxs("div", {
      className: "min-h-screen px-4 sm:px-6 lg:px-8 pt-16 pb-20",
      children: [
        i.jsxs("div", {
          className:
            "absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none",
          children: [
            i.jsx("div", {
              className:
                "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]",
            }),
            i.jsx("div", {
              className:
                "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            i.jsxs(at, {
              to: "/",
              className:
                "inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm",
              children: [
                i.jsx("svg", {
                  className: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: i.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M15 19l-7-7 7-7",
                  }),
                }),
                "返回首页",
              ],
            }),
            i.jsx("h1", {
              className: "text-4xl font-bold text-white mb-10",
              children: s,
            }),
            i.jsx("div", {
              className: "prose prose-invert max-w-none",
              children: f,
            }),
          ],
        }),
      ],
    }),
  ll = ({ title: s, children: f }) =>
    i.jsxs("div", {
      className: "mb-8",
      children: [
        i.jsx("h2", {
          className: "text-xl font-semibold text-white mb-3",
          children: s,
        }),
        i.jsx("div", {
          className: "text-gray-400 leading-relaxed space-y-2",
          children: f,
        }),
      ],
    }),
  Py = () =>
    i.jsxs(Yn, {
      title: "隐私政策",
      children: [
        i.jsx("p", {
          className: "text-gray-400 mb-8 text-sm",
          children: "最后更新日期：2026年1月26日",
        }),
        i.jsx(ll, {
          title: "1. 概述",
          children: i.jsx("p", {
            children:
              '欢迎访问 100zhang.top（以下简称"本网站"）。本隐私政策说明了我们如何收集、使用和保护您在使用本网站时提供的信息。使用本网站即表示您同意本隐私政策的条款。',
          }),
        }),
        i.jsxs(ll, {
          title: "2. 信息收集",
          children: [
            i.jsx("p", { children: "本网站可能收集以下类型的信息：" }),
            i.jsxs("ul", {
              className: "list-disc list-inside space-y-1 mt-2 ml-2",
              children: [
                i.jsxs("li", {
                  children: [
                    i.jsx("strong", {
                      className: "text-gray-300",
                      children: "使用数据",
                    }),
                    "：包括您访问的页面、停留时间、点击行为等匿名统计数据，用于改善用户体验。",
                  ],
                }),
                i.jsxs("li", {
                  children: [
                    i.jsx("strong", {
                      className: "text-gray-300",
                      children: "技术数据",
                    }),
                    "：包括 IP 地址、浏览器类型、操作系统等技术信息，用于网站安全和性能优化。",
                  ],
                }),
                i.jsxs("li", {
                  children: [
                    i.jsx("strong", {
                      className: "text-gray-300",
                      children: "用户提交内容",
                    }),
                    "：当您使用本网站的工具（如提示词管理器、拍立得墙等）时，您主动输入或上传的内容。",
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsxs(ll, {
          title: "3. Cookie 与第三方服务",
          children: [
            i.jsx("p", {
              children:
                "本网站使用以下第三方服务，这些服务可能会在您的设备上设置 Cookie：",
            }),
            i.jsxs("ul", {
              className: "list-disc list-inside space-y-1 mt-2 ml-2",
              children: [
                i.jsxs("li", {
                  children: [
                    i.jsx("strong", {
                      className: "text-gray-300",
                      children: "Google AdSense",
                    }),
                    "：用于展示广告。Google 可能会根据您的浏览历史展示个性化广告。您可以通过 ",
                    i.jsx("a", {
                      href: "https://adssettings.google.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-400 hover:text-blue-300",
                      children: "Google 广告设置",
                    }),
                    " 管理个性化广告偏好。",
                  ],
                }),
                i.jsxs("li", {
                  children: [
                    i.jsx("strong", {
                      className: "text-gray-300",
                      children: "Umami Analytics",
                    }),
                    "：用于匿名统计网站访问数据，不收集个人身份信息，不使用 Cookie。",
                  ],
                }),
                i.jsxs("li", {
                  children: [
                    i.jsx("strong", {
                      className: "text-gray-300",
                      children: "Radio Browser API",
                    }),
                    "：全球电台工具使用此公共 API 获取电台数据。",
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsxs(ll, {
          title: "4. 信息使用",
          children: [
            i.jsx("p", { children: "我们收集的信息仅用于以下目的：" }),
            i.jsxs("ul", {
              className: "list-disc list-inside space-y-1 mt-2 ml-2",
              children: [
                i.jsx("li", { children: "改善网站功能和用户体验" }),
                i.jsx("li", { children: "分析网站流量和使用模式" }),
                i.jsx("li", { children: "确保网站安全和防止滥用" }),
                i.jsx("li", { children: "展示相关广告内容" }),
              ],
            }),
            i.jsx("p", {
              className: "mt-2",
              children:
                "我们不会将您的个人信息出售、出租或以其他方式提供给第三方，除非法律要求或获得您的明确同意。",
            }),
          ],
        }),
        i.jsx(ll, {
          title: "5. 数据安全",
          children: i.jsx("p", {
            children:
              "我们采取合理的技术和管理措施保护您的信息安全，包括使用 HTTPS 加密传输。但请注意，互联网传输并非完全安全，我们无法保证数据传输的绝对安全性。",
          }),
        }),
        i.jsx(ll, {
          title: "6. 儿童隐私",
          children: i.jsx("p", {
            children:
              "本网站不针对 13 岁以下儿童，也不会故意收集儿童的个人信息。如果您认为我们无意中收集了儿童信息，请联系我们，我们将立即删除相关数据。",
          }),
        }),
        i.jsxs(ll, {
          title: "7. 您的权利",
          children: [
            i.jsx("p", { children: "您有权：" }),
            i.jsxs("ul", {
              className: "list-disc list-inside space-y-1 mt-2 ml-2",
              children: [
                i.jsx("li", { children: "了解我们收集了哪些关于您的信息" }),
                i.jsx("li", { children: "要求更正不准确的信息" }),
                i.jsx("li", { children: "要求删除您的个人数据" }),
                i.jsx("li", { children: "选择退出个性化广告" }),
              ],
            }),
          ],
        }),
        i.jsx(ll, {
          title: "8. 隐私政策更新",
          children: i.jsx("p", {
            children:
              "我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，并注明更新日期。建议您定期查看本页面以了解最新政策。",
          }),
        }),
        i.jsxs(ll, {
          title: "9. 联系我们",
          children: [
            i.jsx("p", {
              children:
                "如果您对本隐私政策有任何疑问或意见，请通过以下方式联系我们：",
            }),
            i.jsxs("ul", {
              className: "list-disc list-inside space-y-1 mt-2 ml-2",
              children: [
                i.jsxs("li", {
                  children: [
                    "邮箱：",
                    i.jsx("a", {
                      href: "mailto:zc1018@me.com",
                      className: "text-blue-400 hover:text-blue-300",
                      children: "zc1018@me.com",
                    }),
                  ],
                }),
                i.jsxs("li", {
                  children: [
                    "网站：",
                    i.jsx("a", {
                      href: "https://100zhang.top",
                      className: "text-blue-400 hover:text-blue-300",
                      children: "100zhang.top",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ex = () =>
    i.jsx(Yn, {
      title: "关于我",
      children: i.jsxs("div", {
        className: "space-y-8 text-gray-400 leading-relaxed",
        children: [
          i.jsxs("div", {
            className: "glass-card rounded-2xl p-8",
            children: [
              i.jsx("h2", {
                className: "text-2xl font-bold text-white mb-4",
                children: "百万张 / 老张",
              }),
              i.jsx("p", {
                className: "text-lg text-gray-300 mb-4",
                children:
                  "AI 产品专家 ｜ 旅行&财经自媒体「百万张」 ｜ 前滴滴产品 ｜ 头部教育大厂教育产品专家",
              }),
              i.jsx("p", {
                children:
                  "我是一名专注于 AI 能力产品化落地的产品专家。过去十年，我在互联网行业深耕，从出行到教育，见证并参与了多个行业的数字化转型。现在，我把更多精力放在探索 AI 如何真正改变人们的工作和生活方式上。",
              }),
            ],
          }),
          i.jsxs("div", {
            children: [
              i.jsx("h2", {
                className: "text-xl font-semibold text-white mb-4",
                children: "我的经历",
              }),
              i.jsxs("div", {
                className: "space-y-4",
                children: [
                  i.jsxs("div", {
                    className: "border-l-2 border-purple-500/50 pl-4",
                    children: [
                      i.jsx("h3", {
                        className: "text-white font-medium",
                        children: "AI 产品专家",
                      }),
                      i.jsx("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: "2023 - 至今",
                      }),
                      i.jsx("p", {
                        children:
                          "专注于将 AI 大模型能力转化为可落地的产品功能。研究 Prompt Engineering、AI Agent 设计、人机交互体验，并通过本站的工具集将这些研究成果开放给所有人使用。",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "border-l-2 border-blue-500/50 pl-4",
                    children: [
                      i.jsx("h3", {
                        className: "text-white font-medium",
                        children: "头部教育大厂 · 教育产品专家",
                      }),
                      i.jsx("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: "2020 - 2023",
                      }),
                      i.jsx("p", {
                        children:
                          "负责 AI 辅助学习产品的设计与落地，探索 AI 在个性化教育、智能批改、学习路径规划等场景的应用。深度理解教育行业的产品逻辑与用户需求。",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "border-l-2 border-cyan-500/50 pl-4",
                    children: [
                      i.jsx("h3", {
                        className: "text-white font-medium",
                        children: "滴滴出行 · 产品经理",
                      }),
                      i.jsx("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: "2017 - 2020",
                      }),
                      i.jsx("p", {
                        children:
                          "参与出行平台核心产品的设计与迭代，积累了大规模互联网产品的设计经验，深刻理解用户增长、体验优化和数据驱动决策的方法论。",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            children: [
              i.jsx("h2", {
                className: "text-xl font-semibold text-white mb-4",
                children: "我在做什么",
              }),
              i.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  i.jsxs("div", {
                    className: "glass-card rounded-xl p-5",
                    children: [
                      i.jsx("div", {
                        className: "text-2xl mb-2",
                        children: "🛠️",
                      }),
                      i.jsx("h3", {
                        className: "text-white font-medium mb-2",
                        children: "构建 AI 工具",
                      }),
                      i.jsx("p", {
                        className: "text-sm",
                        children:
                          '把 AI 能力做成"可用的产品"，本站收录了我开发的多款实用工具，包括提示词管理器、全球电台、亲属称呼计算器等，全部免费开放使用。',
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "glass-card rounded-xl p-5",
                    children: [
                      i.jsx("div", {
                        className: "text-2xl mb-2",
                        children: "✍️",
                      }),
                      i.jsx("h3", {
                        className: "text-white font-medium mb-2",
                        children: "内容创作",
                      }),
                      i.jsx("p", {
                        className: "text-sm",
                        children:
                          "运营自媒体「百万张」，持续输出 AI 工具使用技巧、旅行见闻和财经观察。相信好的内容能帮助更多人用好 AI，做出更好的决策。",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "glass-card rounded-xl p-5",
                    children: [
                      i.jsx("div", {
                        className: "text-2xl mb-2",
                        children: "✈️",
                      }),
                      i.jsx("h3", {
                        className: "text-white font-medium mb-2",
                        children: "旅行探索",
                      }),
                      i.jsx("p", {
                        className: "text-sm",
                        children:
                          "热爱旅行，走过亚洲、欧洲多个国家。旅行不只是打卡，更是理解不同文化和生活方式的方式。旅行中的观察常常给我产品设计带来新的灵感。",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "glass-card rounded-xl p-5",
                    children: [
                      i.jsx("div", {
                        className: "text-2xl mb-2",
                        children: "📊",
                      }),
                      i.jsx("h3", {
                        className: "text-white font-medium mb-2",
                        children: "财经研究",
                      }),
                      i.jsx("p", {
                        className: "text-sm",
                        children:
                          "关注宏观经济、汇率走势和投资机会。相信理解经济规律是现代人的必备技能，也是做好产品决策的重要背景知识。",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            children: [
              i.jsx("h2", {
                className: "text-xl font-semibold text-white mb-4",
                children: "本站的故事",
              }),
              i.jsx("p", {
                className: "mb-3",
                children:
                  "100zhang.top 是我的个人实验室。这里的每一个工具都源于我自己的真实需求——当我找不到满意的工具时，我就自己做一个。",
              }),
              i.jsx("p", {
                className: "mb-3",
                children:
                  "从最初的 HTML 预览工具，到后来的提示词管理器、全球电台、亲属称呼计算器……每个工具背后都有一个具体的使用场景和解决的真实问题。",
              }),
              i.jsx("p", {
                children:
                  "我相信，最好的产品来自于对真实需求的深刻理解。这个网站是我践行这一理念的地方，也是我与志同道合的朋友分享想法的空间。",
              }),
            ],
          }),
          i.jsxs("div", {
            className: "glass-card rounded-xl p-6 text-center",
            children: [
              i.jsx("p", {
                className: "text-gray-300 mb-4",
                children:
                  "如果你对 AI 产品、旅行或财经感兴趣，欢迎联系我交流。",
              }),
              i.jsx("a", {
                href: "mailto:zc1018@me.com",
                className:
                  "inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10",
                children: "发邮件给我",
              }),
            ],
          }),
        ],
      }),
    }),
  tx = () => {
    const [s, f] = C.useState(!1),
      d = () => {
        (navigator.clipboard.writeText("zc1018"),
          f(!0),
          setTimeout(() => f(!1), 2e3));
      };
    return i.jsx(Yn, {
      title: "联系方式",
      children: i.jsxs("div", {
        className: "space-y-8 text-gray-400",
        children: [
          i.jsx("p", {
            className: "text-lg",
            children:
              "欢迎通过以下方式与我联系。无论是工具反馈、合作咨询，还是单纯想聊聊 AI、旅行和财经，我都很乐意交流。",
          }),
          i.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
              i.jsxs("a", {
                href: "mailto:zc1018@me.com",
                className:
                  "glass-card rounded-2xl p-6 hover:bg-white/10 transition-all group",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center gap-4 mb-3",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center",
                        children: i.jsx("svg", {
                          className: "w-5 h-5 text-blue-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                          }),
                        }),
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-white font-medium",
                            children: "电子邮件",
                          }),
                          i.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: "工作日 24 小时内回复",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("p", {
                    className:
                      "text-blue-400 group-hover:text-blue-300 transition-colors",
                    children: "zc1018@me.com",
                  }),
                ],
              }),
              i.jsxs("button", {
                onClick: d,
                className:
                  "glass-card rounded-2xl p-6 hover:bg-white/10 transition-all text-left group",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center gap-4 mb-3",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center",
                        children: i.jsx("svg", {
                          className: "w-5 h-5 text-green-400",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: i.jsx("path", {
                            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 19.918 4.636 14.16C2.983 12.784 2 10.977 2 9c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                          }),
                        }),
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-white font-medium",
                            children: "微信",
                          }),
                          i.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: "点击复制微信号",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("p", {
                    className:
                      "text-green-400 group-hover:text-green-300 transition-colors",
                    children: s ? "✓ 已复制！" : "zc1018",
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            className: "glass-card rounded-2xl p-6",
            children: [
              i.jsx("h2", {
                className: "text-white font-semibold mb-4",
                children: "合作方向",
              }),
              i.jsxs("div", {
                className: "space-y-3",
                children: [
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("span", {
                        className: "text-purple-400 mt-0.5",
                        children: "▸",
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-gray-300 font-medium",
                            children: "AI 产品咨询",
                          }),
                          i.jsx("p", {
                            className: "text-sm",
                            children:
                              "AI 能力如何在你的业务中落地？如何设计 AI 产品的用户体验？欢迎探讨。",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("span", {
                        className: "text-blue-400 mt-0.5",
                        children: "▸",
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-gray-300 font-medium",
                            children: "内容合作",
                          }),
                          i.jsx("p", {
                            className: "text-sm",
                            children:
                              "旅行、财经、AI 工具相关的内容合作，包括测评、推广、联名创作等。",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("span", {
                        className: "text-cyan-400 mt-0.5",
                        children: "▸",
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-gray-300 font-medium",
                            children: "工具反馈",
                          }),
                          i.jsx("p", {
                            className: "text-sm",
                            children:
                              "使用本站工具遇到问题，或有功能建议？非常欢迎你的反馈，这是改进的最大动力。",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      i.jsx("span", {
                        className: "text-emerald-400 mt-0.5",
                        children: "▸",
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-gray-300 font-medium",
                            children: "教育产品",
                          }),
                          i.jsx("p", {
                            className: "text-sm",
                            children:
                              "在线教育、AI 辅助学习产品的设计与增长，有丰富的行业经验可以分享。",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            className: "text-center text-sm text-gray-600",
            children: i.jsx("p", {
              children: "通常在 1-2 个工作日内回复邮件。",
            }),
          }),
        ],
      }),
    });
  },
  lx = () =>
    i.jsxs(Yn, {
      title: "文章",
      children: [
        i.jsx("p", {
          className: "text-gray-400 mb-8",
          children: "关于 AI 工具、旅行见闻、财经观察和产品思考的原创内容。",
        }),
        i.jsx("div", {
          className: "space-y-6",
          children: Js.map((s) =>
            i.jsx(
              at,
              {
                to: `/blog/${s.slug}`,
                className: "group block",
                children: i.jsx("article", {
                  className:
                    "glass-card rounded-2xl p-6 hover:bg-white/10 transition-all",
                  children: i.jsxs("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                      i.jsxs("div", {
                        className: "flex-1",
                        children: [
                          i.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                              i.jsx("span", {
                                className: `text-xs font-medium px-2 py-1 rounded-full ${s.categoryColor}`,
                                children: s.category,
                              }),
                              i.jsx("span", {
                                className: "text-xs text-gray-600",
                                children: s.date,
                              }),
                              i.jsxs("span", {
                                className: "text-xs text-gray-600",
                                children: [s.readTime, "阅读"],
                              }),
                            ],
                          }),
                          i.jsx("h2", {
                            className:
                              "text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors",
                            children: s.title,
                          }),
                          i.jsx("p", {
                            className:
                              "text-gray-500 text-sm leading-relaxed line-clamp-2",
                            children: s.summary,
                          }),
                        ],
                      }),
                      i.jsx("svg", {
                        className:
                          "w-5 h-5 text-gray-600 group-hover:text-white transition-colors flex-shrink-0 mt-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M9 5l7 7-7 7",
                        }),
                      }),
                    ],
                  }),
                }),
              },
              s.slug,
            ),
          ),
        }),
      ],
    }),
  ax = (s) => {
    const f = s.trim().split(`
`),
      d = [];
    let r = 0,
      m = 0;
    const v = (S) => {
      const z = [];
      let p = S,
        x = 0;
      for (; p.length > 0;) {
        const M = p.match(/\*\*(.+?)\*\*/),
          A = p.match(/\[(.+?)\]\((.+?)\)/),
          w = p.match(/`(.+?)`/),
          L = [
            M ? { pos: p.indexOf(M[0]), type: "bold", match: M } : null,
            A ? { pos: p.indexOf(A[0]), type: "link", match: A } : null,
            w ? { pos: p.indexOf(w[0]), type: "code", match: w } : null,
          ]
            .filter(Boolean)
            .sort((Y, q) => Y.pos - q.pos);
        if (L.length === 0) {
          z.push(i.jsx("span", { children: p }, x++));
          break;
        }
        const X = L[0];
        (X.pos > 0 &&
          z.push(i.jsx("span", { children: p.slice(0, X.pos) }, x++)),
          X.type === "bold"
            ? (z.push(
              i.jsx(
                "strong",
                { className: "text-gray-200", children: X.match[1] },
                x++,
              ),
            ),
              (p = p.slice(X.pos + X.match[0].length)))
            : X.type === "link"
              ? (z.push(
                i.jsx(
                  "a",
                  {
                    href: X.match[2],
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-400 hover:text-blue-300 underline",
                    children: X.match[1],
                  },
                  x++,
                ),
              ),
                (p = p.slice(X.pos + X.match[0].length)))
              : X.type === "code" &&
              (z.push(
                i.jsx(
                  "code",
                  {
                    className:
                      "bg-white/10 text-amber-300 px-1.5 py-0.5 rounded text-sm font-mono",
                    children: X.match[1],
                  },
                  x++,
                ),
              ),
                (p = p.slice(X.pos + X.match[0].length))));
      }
      return z;
    };
    for (; r < f.length;) {
      const S = f[r];
      if (S.startsWith("## "))
        d.push(
          i.jsx(
            "h2",
            {
              className: "text-2xl font-bold text-white mt-10 mb-4",
              children: S.slice(3),
            },
            m++,
          ),
        );
      else if (S.startsWith("### "))
        d.push(
          i.jsx(
            "h3",
            {
              className: "text-lg font-semibold text-gray-200 mt-6 mb-3",
              children: S.slice(4),
            },
            m++,
          ),
        );
      else if (S.startsWith("```")) {
        const z = [];
        for (r++; r < f.length && !f[r].startsWith("```");)
          (z.push(f[r]), r++);
        d.push(
          i.jsx(
            "pre",
            {
              className:
                "bg-white/5 border border-white/10 rounded-xl p-4 my-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed",
              children: z.join(`
`),
            },
            m++,
          ),
        );
      } else if (S.startsWith("- ") || S.startsWith("* ")) {
        const z = [];
        for (
          ;
          r < f.length && (f[r].startsWith("- ") || f[r].startsWith("* "));
        )
          (z.push(
            i.jsx("li", { className: "mb-1", children: v(f[r].slice(2)) }, r),
          ),
            r++);
        d.push(
          i.jsx(
            "ul",
            {
              className:
                "list-disc list-inside space-y-1 my-3 ml-2 text-gray-400",
              children: z,
            },
            m++,
          ),
        );
        continue;
      } else if (/^\d+\. /.test(S)) {
        const z = [];
        for (; r < f.length && /^\d+\. /.test(f[r]);)
          (z.push(
            i.jsx(
              "li",
              { className: "mb-1", children: v(f[r].replace(/^\d+\. /, "")) },
              r,
            ),
          ),
            r++);
        d.push(
          i.jsx(
            "ol",
            {
              className:
                "list-decimal list-inside space-y-1 my-3 ml-2 text-gray-400",
              children: z,
            },
            m++,
          ),
        );
        continue;
      } else if (S.startsWith("| ")) {
        const z = [];
        for (; r < f.length && f[r].startsWith("|");) (z.push(f[r]), r++);
        const p = z[0]
          .split("|")
          .filter((M) => M.trim())
          .map((M) => M.trim()),
          x = z.slice(2).map((M) =>
            M.split("|")
              .filter((A) => A.trim())
              .map((A) => A.trim()),
          );
        d.push(
          i.jsx(
            "div",
            {
              className: "overflow-x-auto my-4",
              children: i.jsxs("table", {
                className: "w-full text-sm text-gray-400 border-collapse",
                children: [
                  i.jsx("thead", {
                    children: i.jsx("tr", {
                      className: "border-b border-white/10",
                      children: p.map((M, A) =>
                        i.jsx(
                          "th",
                          {
                            className:
                              "text-left py-2 px-3 text-gray-300 font-medium",
                            children: M,
                          },
                          A,
                        ),
                      ),
                    }),
                  }),
                  i.jsx("tbody", {
                    children: x.map((M, A) =>
                      i.jsx(
                        "tr",
                        {
                          className: "border-b border-white/5",
                          children: M.map((w, L) =>
                            i.jsx(
                              "td",
                              { className: "py-2 px-3", children: w },
                              L,
                            ),
                          ),
                        },
                        A,
                      ),
                    ),
                  }),
                ],
              }),
            },
            m++,
          ),
        );
        continue;
      } else
        S.trim() === "" ||
          d.push(
            i.jsx(
              "p",
              {
                className: "text-gray-400 leading-relaxed my-3",
                children: v(S),
              },
              m++,
            ),
          );
      r++;
    }
    return d;
  },
  nx = () => {
    const { slug: s } = kv(),
      f = Fy(s);
    return f
      ? i.jsxs("div", {
        className: "min-h-screen px-4 sm:px-6 lg:px-8 pt-16 pb-20",
        children: [
          i.jsxs("div", {
            className:
              "absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none",
            children: [
              i.jsx("div", {
                className:
                  "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]",
              }),
              i.jsx("div", {
                className:
                  "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]",
              }),
            ],
          }),
          i.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-4 mb-8",
                children: [
                  i.jsx(at, {
                    to: "/",
                    className:
                      "text-gray-400 hover:text-white transition-colors text-sm",
                    children: "首页",
                  }),
                  i.jsx("span", {
                    className: "text-gray-600",
                    children: "/",
                  }),
                  i.jsx(at, {
                    to: "/blog",
                    className:
                      "text-gray-400 hover:text-white transition-colors text-sm",
                    children: "文章",
                  }),
                  i.jsx("span", {
                    className: "text-gray-600",
                    children: "/",
                  }),
                  i.jsx("span", {
                    className: "text-gray-600 text-sm truncate",
                    children: f.title,
                  }),
                ],
              }),
              i.jsxs("header", {
                className: "mb-10",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      i.jsx("span", {
                        className: `text-xs font-medium px-2 py-1 rounded-full ${f.categoryColor}`,
                        children: f.category,
                      }),
                      i.jsx("span", {
                        className: "text-xs text-gray-600",
                        children: f.date,
                      }),
                      i.jsxs("span", {
                        className: "text-xs text-gray-600",
                        children: [f.readTime, "阅读"],
                      }),
                    ],
                  }),
                  i.jsx("h1", {
                    className:
                      "text-3xl md:text-4xl font-bold text-white mb-4 leading-tight",
                    children: f.title,
                  }),
                  i.jsx("p", {
                    className: "text-gray-400 text-lg leading-relaxed",
                    children: f.summary,
                  }),
                ],
              }),
              i.jsx("div", {
                className: "border-t border-white/10 pt-8",
                children: ax(f.content),
              }),
              i.jsxs("div", {
                className: "mt-12 pt-8 border-t border-white/10",
                children: [
                  i.jsxs("p", {
                    className: "text-gray-500 text-sm mb-4",
                    children: [
                      "作者：百万张 | 如有问题或建议，欢迎 ",
                      i.jsx("a", {
                        href: "mailto:zc1018@me.com",
                        className: "text-blue-400 hover:text-blue-300",
                        children: "发邮件",
                      }),
                      " 交流。",
                    ],
                  }),
                  i.jsxs(at, {
                    to: "/blog",
                    className:
                      "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm",
                    children: [
                      i.jsx("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M15 19l-7-7 7-7",
                        }),
                      }),
                      "返回文章列表",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
      : i.jsxs(Yn, {
        title: "文章未找到",
        children: [
          i.jsx("p", {
            className: "text-gray-400",
            children: "抱歉，找不到这篇文章。",
          }),
          i.jsx(at, {
            to: "/blog",
            className: "text-blue-400 hover:text-blue-300 mt-4 inline-block",
            children: "← 返回文章列表",
          }),
        ],
      });
  };
function ux() {
  return i.jsxs("main", {
    className:
      "min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 pb-20",
    children: [
      i.jsxs("div", {
        className:
          "absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none",
        children: [
          i.jsx("div", {
            className:
              "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]",
          }),
          i.jsx("div", {
            className:
              "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]",
          }),
        ],
      }),
      i.jsx(Qy, {}),
      i.jsx(Zy, {}),
      i.jsx(Vy, {}),
      i.jsx(ky, {}),
      i.jsx(Iy, {}),
      i.jsx(Wy, {}),
      i.jsx($y, {}),
    ],
  });
}
function ix() {
  return i.jsxs(ry, {
    children: [
      i.jsx($l, { path: "/", element: i.jsx(ux, {}) }),
      i.jsx($l, { path: "/privacy", element: i.jsx(Py, {}) }),
      i.jsx($l, { path: "/about", element: i.jsx(ex, {}) }),
      i.jsx($l, { path: "/contact", element: i.jsx(tx, {}) }),
      i.jsx($l, { path: "/blog", element: i.jsx(lx, {}) }),
      i.jsx($l, { path: "/blog/:slug", element: i.jsx(nx, {}) }),
    ],
  });
}
fv.createRoot(document.getElementById("root")).render(
  i.jsx(C.StrictMode, { children: i.jsx(Dy, { children: i.jsx(ix, {}) }) }),
);
