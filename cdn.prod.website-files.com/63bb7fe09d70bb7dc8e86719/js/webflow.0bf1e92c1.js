/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var tm = Object.create;
    var Fr = Object.defineProperty;
    var rm = Object.getOwnPropertyDescriptor;
    var nm = Object.getOwnPropertyNames;
    var im = Object.getPrototypeOf,
        om = Object.prototype.hasOwnProperty;
    var me = (e, t) => () => (e && (t = e(e = 0)), t);
    var h = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        De = (e, t) => {
            for (var r in t) Fr(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        va = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of nm(t)) !om.call(e, i) && i !== r && Fr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = rm(t, i)) || n.enumerable
                });
            return e
        };
    var de = (e, t, r) => (r = e != null ? tm(im(e)) : {}, va(t || !e || !e.__esModule ? Fr(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        Qe = e => va(Fr({}, "__esModule", {
            value: !0
        }), e);
    var Qn = h(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, x) {
                var R = new p.Bare;
                return R.init(f, x)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(x) {
                    return "-" + x.toLowerCase()
                })
            }

            function n(f) {
                var x = parseInt(f.slice(1), 16),
                    R = x >> 16 & 255,
                    M = x >> 8 & 255,
                    S = 255 & x;
                return [R, M, S]
            }

            function i(f, x, R) {
                return "#" + (1 << 24 | f << 16 | x << 8 | R).toString(16).slice(1)
            }

            function o() {}

            function a(f, x) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof x + "] " + x)
            }

            function u(f, x, R) {
                l("Units do not match [" + f + "]: " + x + ", " + R)
            }

            function s(f, x, R) {
                if (x !== void 0 && (R = x), f === void 0) return R;
                var M = R;
                return Ie.test(f) || !Ae.test(f) ? M = parseInt(f, 10) : Ae.test(f) && (M = 1e3 * parseFloat(f)), 0 > M && (M = 0), M === M ? M : R
            }

            function l(f) {
                ie.debug && window && window.console.warn(f)
            }

            function I(f) {
                for (var x = -1, R = f ? f.length : 0, M = []; ++x < R;) {
                    var S = f[x];
                    S && M.push(S)
                }
                return M
            }
            var d = function(f, x, R) {
                    function M(ae) {
                        return typeof ae == "object"
                    }

                    function S(ae) {
                        return typeof ae == "function"
                    }

                    function X() {}

                    function ne(ae, ge) {
                        function Z() {
                            var Re = new ue;
                            return S(Re.init) && Re.init.apply(Re, arguments), Re
                        }

                        function ue() {}
                        ge === R && (ge = ae, ae = Object), Z.Bare = ue;
                        var ce, _e = X[f] = ae[f],
                            Ye = ue[f] = Z[f] = new X;
                        return Ye.constructor = Z, Z.mixin = function(Re) {
                            return ue[f] = Z[f] = ne(Z, Re)[f], Z
                        }, Z.open = function(Re) {
                            if (ce = {}, S(Re) ? ce = Re.call(Z, Ye, _e, Z, ae) : M(Re) && (ce = Re), M(ce))
                                for (var ir in ce) x.call(ce, ir) && (Ye[ir] = ce[ir]);
                            return S(Ye.init) || (Ye.init = ae), Z
                        }, Z.open(ge)
                    }
                    return ne
                }("prototype", {}.hasOwnProperty),
                y = {
                    ease: ["ease", function(f, x, R, M) {
                        var S = (f /= M) * f,
                            X = S * f;
                        return x + R * (-2.75 * X * S + 11 * S * S + -15.5 * X + 8 * S + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, x, R, M) {
                        var S = (f /= M) * f,
                            X = S * f;
                        return x + R * (-1 * X * S + 3 * S * S + -3 * X + 2 * S)
                    }],
                    "ease-out": ["ease-out", function(f, x, R, M) {
                        var S = (f /= M) * f,
                            X = S * f;
                        return x + R * (.3 * X * S + -1.6 * S * S + 2.2 * X + -1.8 * S + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, x, R, M) {
                        var S = (f /= M) * f,
                            X = S * f;
                        return x + R * (2 * X * S + -5 * S * S + 2 * X + 2 * S)
                    }],
                    linear: ["linear", function(f, x, R, M) {
                        return R * f / M + x
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, x, R, M) {
                        return R * (f /= M) * f + x
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, x, R, M) {
                        return -R * (f /= M) * (f - 2) + x
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, x, R, M) {
                        return (f /= M / 2) < 1 ? R / 2 * f * f + x : -R / 2 * (--f * (f - 2) - 1) + x
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, x, R, M) {
                        return R * (f /= M) * f * f + x
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, x, R, M) {
                        return R * ((f = f / M - 1) * f * f + 1) + x
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, x, R, M) {
                        return (f /= M / 2) < 1 ? R / 2 * f * f * f + x : R / 2 * ((f -= 2) * f * f + 2) + x
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, x, R, M) {
                        return R * (f /= M) * f * f * f + x
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, x, R, M) {
                        return -R * ((f = f / M - 1) * f * f * f - 1) + x
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, x, R, M) {
                        return (f /= M / 2) < 1 ? R / 2 * f * f * f * f + x : -R / 2 * ((f -= 2) * f * f * f - 2) + x
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, x, R, M) {
                        return R * (f /= M) * f * f * f * f + x
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, x, R, M) {
                        return R * ((f = f / M - 1) * f * f * f * f + 1) + x
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, x, R, M) {
                        return (f /= M / 2) < 1 ? R / 2 * f * f * f * f * f + x : R / 2 * ((f -= 2) * f * f * f * f + 2) + x
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, x, R, M) {
                        return -R * Math.cos(f / M * (Math.PI / 2)) + R + x
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, x, R, M) {
                        return R * Math.sin(f / M * (Math.PI / 2)) + x
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, x, R, M) {
                        return -R / 2 * (Math.cos(Math.PI * f / M) - 1) + x
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, x, R, M) {
                        return f === 0 ? x : R * Math.pow(2, 10 * (f / M - 1)) + x
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, x, R, M) {
                        return f === M ? x + R : R * (-Math.pow(2, -10 * f / M) + 1) + x
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, x, R, M) {
                        return f === 0 ? x : f === M ? x + R : (f /= M / 2) < 1 ? R / 2 * Math.pow(2, 10 * (f - 1)) + x : R / 2 * (-Math.pow(2, -10 * --f) + 2) + x
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, x, R, M) {
                        return -R * (Math.sqrt(1 - (f /= M) * f) - 1) + x
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, x, R, M) {
                        return R * Math.sqrt(1 - (f = f / M - 1) * f) + x
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, x, R, M) {
                        return (f /= M / 2) < 1 ? -R / 2 * (Math.sqrt(1 - f * f) - 1) + x : R / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + x
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, x, R, M, S) {
                        return S === void 0 && (S = 1.70158), R * (f /= M) * f * ((S + 1) * f - S) + x
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, x, R, M, S) {
                        return S === void 0 && (S = 1.70158), R * ((f = f / M - 1) * f * ((S + 1) * f + S) + 1) + x
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, x, R, M, S) {
                        return S === void 0 && (S = 1.70158), (f /= M / 2) < 1 ? R / 2 * f * f * (((S *= 1.525) + 1) * f - S) + x : R / 2 * ((f -= 2) * f * (((S *= 1.525) + 1) * f + S) + 2) + x
                    }]
                },
                m = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                E = document,
                T = window,
                A = "bkwld-tram",
                w = /[\-\.0-9]/g,
                N = /[A-Z]/,
                L = "number",
                F = /^(rgb|#)/,
                k = /(em|cm|mm|in|pt|pc|px)$/,
                q = /(em|cm|mm|in|pt|pc|px|%)$/,
                j = /(deg|rad|turn)$/,
                K = "unitless",
                Q = /(all|none) 0s ease 0s/,
                te = /^(width|height)$/,
                z = " ",
                C = E.createElement("a"),
                b = ["Webkit", "Moz", "O", "ms"],
                P = ["-webkit-", "-moz-", "-o-", "-ms-"],
                G = function(f) {
                    if (f in C.style) return {
                        dom: f,
                        css: f
                    };
                    var x, R, M = "",
                        S = f.split("-");
                    for (x = 0; x < S.length; x++) M += S[x].charAt(0).toUpperCase() + S[x].slice(1);
                    for (x = 0; x < b.length; x++)
                        if (R = b[x] + M, R in C.style) return {
                            dom: R,
                            css: P[x] + f
                        }
                },
                H = t.support = {
                    bind: Function.prototype.bind,
                    transform: G("transform"),
                    transition: G("transition"),
                    backface: G("backface-visibility"),
                    timing: G("transition-timing-function")
                };
            if (H.transition) {
                var ee = H.timing.dom;
                if (C.style[ee] = y["ease-in-back"][0], !C.style[ee])
                    for (var re in m) y[re][0] = m[re]
            }
            var U = t.frame = function() {
                    var f = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                    return f && H.bind ? f.bind(T) : function(x) {
                        T.setTimeout(x, 16)
                    }
                }(),
                V = t.now = function() {
                    var f = T.performance,
                        x = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return x && H.bind ? x.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                g = d(function(f) {
                    function x(oe, fe) {
                        var Ee = I(("" + oe).split(z)),
                            pe = Ee[0];
                        fe = fe || {};
                        var Ce = Y[pe];
                        if (!Ce) return l("Unsupported property: " + pe);
                        if (!fe.weak || !this.props[pe]) {
                            var We = Ce[0],
                                Ne = this.props[pe];
                            return Ne || (Ne = this.props[pe] = new We.Bare), Ne.init(this.$el, Ee, Ce, fe), Ne
                        }
                    }

                    function R(oe, fe, Ee) {
                        if (oe) {
                            var pe = typeof oe;
                            if (fe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && fe) return this.timer = new $({
                                duration: oe,
                                context: this,
                                complete: X
                            }), void(this.active = !0);
                            if (pe == "string" && fe) {
                                switch (oe) {
                                    case "hide":
                                        Z.call(this);
                                        break;
                                    case "stop":
                                        ne.call(this);
                                        break;
                                    case "redraw":
                                        ue.call(this);
                                        break;
                                    default:
                                        x.call(this, oe, Ee && Ee[1])
                                }
                                return X.call(this)
                            }
                            if (pe == "function") return void oe.call(this, this);
                            if (pe == "object") {
                                var Ce = 0;
                                Ye.call(this, oe, function(be, em) {
                                    be.span > Ce && (Ce = be.span), be.stop(), be.animate(em)
                                }, function(be) {
                                    "wait" in be && (Ce = s(be.wait, 0))
                                }), _e.call(this), Ce > 0 && (this.timer = new $({
                                    duration: Ce,
                                    context: this
                                }), this.active = !0, fe && (this.timer.complete = X));
                                var We = this,
                                    Ne = !1,
                                    Mr = {};
                                U(function() {
                                    Ye.call(We, oe, function(be) {
                                        be.active && (Ne = !0, Mr[be.name] = be.nextStyle)
                                    }), Ne && We.$el.css(Mr)
                                })
                            }
                        }
                    }

                    function M(oe) {
                        oe = s(oe, 0), this.active ? this.queue.push({
                            options: oe
                        }) : (this.timer = new $({
                            duration: oe,
                            context: this,
                            complete: X
                        }), this.active = !0)
                    }

                    function S(oe) {
                        return this.active ? (this.queue.push({
                            options: oe,
                            args: arguments
                        }), void(this.timer.complete = X)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function X() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var oe = this.queue.shift();
                            R.call(this, oe.options, !0, oe.args)
                        }
                    }

                    function ne(oe) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var fe;
                        typeof oe == "string" ? (fe = {}, fe[oe] = 1) : fe = typeof oe == "object" && oe != null ? oe : this.props, Ye.call(this, fe, Re), _e.call(this)
                    }

                    function ae(oe) {
                        ne.call(this, oe), Ye.call(this, oe, ir, Zv)
                    }

                    function ge(oe) {
                        typeof oe != "string" && (oe = "block"), this.el.style.display = oe
                    }

                    function Z() {
                        ne.call(this), this.el.style.display = "none"
                    }

                    function ue() {
                        this.el.offsetHeight
                    }

                    function ce() {
                        ne.call(this), e.removeData(this.el, A), this.$el = this.el = null
                    }

                    function _e() {
                        var oe, fe, Ee = [];
                        this.upstream && Ee.push(this.upstream);
                        for (oe in this.props) fe = this.props[oe], fe.active && Ee.push(fe.string);
                        Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[H.transition.dom] = Ee)
                    }

                    function Ye(oe, fe, Ee) {
                        var pe, Ce, We, Ne, Mr = fe !== Re,
                            be = {};
                        for (pe in oe) We = oe[pe], pe in le ? (be.transform || (be.transform = {}), be.transform[pe] = We) : (N.test(pe) && (pe = r(pe)), pe in Y ? be[pe] = We : (Ne || (Ne = {}), Ne[pe] = We));
                        for (pe in be) {
                            if (We = be[pe], Ce = this.props[pe], !Ce) {
                                if (!Mr) continue;
                                Ce = x.call(this, pe)
                            }
                            fe.call(this, Ce, We)
                        }
                        Ee && Ne && Ee.call(this, Ne)
                    }

                    function Re(oe) {
                        oe.stop()
                    }

                    function ir(oe, fe) {
                        oe.set(fe)
                    }

                    function Zv(oe) {
                        this.$el.css(oe)
                    }

                    function Ge(oe, fe) {
                        f[oe] = function() {
                            return this.children ? Jv.call(this, fe, arguments) : (this.el && fe.apply(this, arguments), this)
                        }
                    }

                    function Jv(oe, fe) {
                        var Ee, pe = this.children.length;
                        for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
                        return this
                    }
                    f.init = function(oe) {
                        if (this.$el = e(oe), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ie.keepInherited && !ie.fallback) {
                            var fe = B(this.el, "transition");
                            fe && !Q.test(fe) && (this.upstream = fe)
                        }
                        H.backface && ie.hideBackface && _(this.el, H.backface.css, "hidden")
                    }, Ge("add", x), Ge("start", R), Ge("wait", M), Ge("then", S), Ge("next", X), Ge("stop", ne), Ge("set", ae), Ge("show", ge), Ge("hide", Z), Ge("redraw", ue), Ge("destroy", ce)
                }),
                p = d(g, function(f) {
                    function x(R, M) {
                        var S = e.data(R, A) || e.data(R, A, new g.Bare);
                        return S.el || S.init(R), M ? S.start(M) : S
                    }
                    f.init = function(R, M) {
                        var S = e(R);
                        if (!S.length) return this;
                        if (S.length === 1) return x(S[0], M);
                        var X = [];
                        return S.each(function(ne, ae) {
                            X.push(x(ae, M))
                        }), this.children = X, this
                    }
                }),
                v = d(function(f) {
                    function x() {
                        var X = this.get();
                        this.update("auto");
                        var ne = this.get();
                        return this.update(X), ne
                    }

                    function R(X, ne, ae) {
                        return ne !== void 0 && (ae = ne), X in y ? X : ae
                    }

                    function M(X) {
                        var ne = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(X);
                        return (ne ? i(ne[1], ne[2], ne[3]) : X).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var S = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(X, ne, ae, ge) {
                        this.$el = X, this.el = X[0];
                        var Z = ne[0];
                        ae[2] && (Z = ae[2]), J[Z] && (Z = J[Z]), this.name = Z, this.type = ae[1], this.duration = s(ne[1], this.duration, S.duration), this.ease = R(ne[2], this.ease, S.ease), this.delay = s(ne[3], this.delay, S.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = te.test(this.name), this.unit = ge.unit || this.unit || ie.defaultUnit, this.angle = ge.angle || this.angle || ie.defaultAngle, ie.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + z + this.duration + "ms" + (this.ease != "ease" ? z + y[this.ease][0] : "") + (this.delay ? z + this.delay + "ms" : ""))
                    }, f.set = function(X) {
                        X = this.convert(X, this.type), this.update(X), this.redraw()
                    }, f.transition = function(X) {
                        this.active = !0, X = this.convert(X, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), X == "auto" && (X = x.call(this))), this.nextStyle = X
                    }, f.fallback = function(X) {
                        var ne = this.el.style[this.name] || this.convert(this.get(), this.type);
                        X = this.convert(X, this.type), this.auto && (ne == "auto" && (ne = this.convert(this.get(), this.type)), X == "auto" && (X = x.call(this))), this.tween = new O({
                            from: ne,
                            to: X,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return B(this.el, this.name)
                    }, f.update = function(X) {
                        _(this.el, this.name, X)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, _(this.el, this.name, this.get()));
                        var X = this.tween;
                        X && X.context && X.destroy()
                    }, f.convert = function(X, ne) {
                        if (X == "auto" && this.auto) return X;
                        var ae, ge = typeof X == "number",
                            Z = typeof X == "string";
                        switch (ne) {
                            case L:
                                if (ge) return X;
                                if (Z && X.replace(w, "") === "") return +X;
                                ae = "number(unitless)";
                                break;
                            case F:
                                if (Z) {
                                    if (X === "" && this.original) return this.original;
                                    if (ne.test(X)) return X.charAt(0) == "#" && X.length == 7 ? X : M(X)
                                }
                                ae = "hex or rgb string";
                                break;
                            case k:
                                if (ge) return X + this.unit;
                                if (Z && ne.test(X)) return X;
                                ae = "number(px) or string(unit)";
                                break;
                            case q:
                                if (ge) return X + this.unit;
                                if (Z && ne.test(X)) return X;
                                ae = "number(px) or string(unit or %)";
                                break;
                            case j:
                                if (ge) return X + this.angle;
                                if (Z && ne.test(X)) return X;
                                ae = "number(deg) or string(angle)";
                                break;
                            case K:
                                if (ge || Z && q.test(X)) return X;
                                ae = "number(unitless) or string(unit or %)"
                        }
                        return a(ae, X), X
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                c = d(v, function(f, x) {
                    f.init = function() {
                        x.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), F))
                    }
                }),
                D = d(v, function(f, x) {
                    f.init = function() {
                        x.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(R) {
                        this.$el[this.name](R)
                    }
                }),
                W = d(v, function(f, x) {
                    function R(M, S) {
                        var X, ne, ae, ge, Z;
                        for (X in M) ge = le[X], ae = ge[0], ne = ge[1] || X, Z = this.convert(M[X], ae), S.call(this, ne, Z, ae)
                    }
                    f.init = function() {
                        x.init.apply(this, arguments), this.current || (this.current = {}, le.perspective && ie.perspective && (this.current.perspective = ie.perspective, _(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(M) {
                        R.call(this, M, function(S, X) {
                            this.current[S] = X
                        }), _(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(M) {
                        var S = this.values(M);
                        this.tween = new se({
                            current: this.current,
                            values: S,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var X, ne = {};
                        for (X in this.current) ne[X] = X in S ? S[X] : this.current[X];
                        this.active = !0, this.nextStyle = this.style(ne)
                    }, f.fallback = function(M) {
                        var S = this.values(M);
                        this.tween = new se({
                            current: this.current,
                            values: S,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        _(this.el, this.name, this.style(this.current))
                    }, f.style = function(M) {
                        var S, X = "";
                        for (S in M) X += S + "(" + M[S] + ") ";
                        return X
                    }, f.values = function(M) {
                        var S, X = {};
                        return R.call(this, M, function(ne, ae, ge) {
                            X[ne] = ae, this.current[ne] === void 0 && (S = 0, ~ne.indexOf("scale") && (S = 1), this.current[ne] = this.convert(S, ge))
                        }), X
                    }
                }),
                O = d(function(f) {
                    function x(Z) {
                        ae.push(Z) === 1 && U(R)
                    }

                    function R() {
                        var Z, ue, ce, _e = ae.length;
                        if (_e)
                            for (U(R), ue = V(), Z = _e; Z--;) ce = ae[Z], ce && ce.render(ue)
                    }

                    function M(Z) {
                        var ue, ce = e.inArray(Z, ae);
                        ce >= 0 && (ue = ae.slice(ce + 1), ae.length = ce, ue.length && (ae = ae.concat(ue)))
                    }

                    function S(Z) {
                        return Math.round(Z * ge) / ge
                    }

                    function X(Z, ue, ce) {
                        return i(Z[0] + ce * (ue[0] - Z[0]), Z[1] + ce * (ue[1] - Z[1]), Z[2] + ce * (ue[2] - Z[2]))
                    }
                    var ne = {
                        ease: y.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function(Z) {
                        this.duration = Z.duration || 0, this.delay = Z.delay || 0;
                        var ue = Z.ease || ne.ease;
                        y[ue] && (ue = y[ue][1]), typeof ue != "function" && (ue = ne.ease), this.ease = ue, this.update = Z.update || o, this.complete = Z.complete || o, this.context = Z.context || this, this.name = Z.name;
                        var ce = Z.from,
                            _e = Z.to;
                        ce === void 0 && (ce = ne.from), _e === void 0 && (_e = ne.to), this.unit = Z.unit || "", typeof ce == "number" && typeof _e == "number" ? (this.begin = ce, this.change = _e - ce) : this.format(_e, ce), this.value = this.begin + this.unit, this.start = V(), Z.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = V()), this.active = !0, x(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, M(this))
                    }, f.render = function(Z) {
                        var ue, ce = Z - this.start;
                        if (this.delay) {
                            if (ce <= this.delay) return;
                            ce -= this.delay
                        }
                        if (ce < this.duration) {
                            var _e = this.ease(ce, 0, 1, this.duration);
                            return ue = this.startRGB ? X(this.startRGB, this.endRGB, _e) : S(this.begin + _e * this.change), this.value = ue + this.unit, void this.update.call(this.context, this.value)
                        }
                        ue = this.endHex || this.begin + this.change, this.value = ue + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function(Z, ue) {
                        if (ue += "", Z += "", Z.charAt(0) == "#") return this.startRGB = n(ue), this.endRGB = n(Z), this.endHex = Z, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ce = ue.replace(w, ""),
                                _e = Z.replace(w, "");
                            ce !== _e && u("tween", ue, Z), this.unit = ce
                        }
                        ue = parseFloat(ue), Z = parseFloat(Z), this.begin = this.value = ue, this.change = Z - ue
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ae = [],
                        ge = 1e3
                }),
                $ = d(O, function(f) {
                    f.init = function(x) {
                        this.duration = x.duration || 0, this.complete = x.complete || o, this.context = x.context, this.play()
                    }, f.render = function(x) {
                        var R = x - this.start;
                        R < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                se = d(O, function(f, x) {
                    f.init = function(R) {
                        this.context = R.context, this.update = R.update, this.tweens = [], this.current = R.current;
                        var M, S;
                        for (M in R.values) S = R.values[M], this.current[M] !== S && this.tweens.push(new O({
                            name: M,
                            from: this.current[M],
                            to: S,
                            duration: R.duration,
                            delay: R.delay,
                            ease: R.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(R) {
                        var M, S, X = this.tweens.length,
                            ne = !1;
                        for (M = X; M--;) S = this.tweens[M], S.context && (S.render(R), this.current[S.name] = S.value, ne = !0);
                        return ne ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (x.destroy.call(this), this.tweens) {
                            var R, M = this.tweens.length;
                            for (R = M; R--;) this.tweens[R].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ie = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !H.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!H.transition) return ie.fallback = !0;
                ie.agentTests.push("(" + f + ")");
                var x = new RegExp(ie.agentTests.join("|"), "i");
                ie.fallback = x.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new O(f)
            }, t.delay = function(f, x, R) {
                return new $({
                    complete: x,
                    duration: f,
                    context: R
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var _ = e.style,
                B = e.css,
                J = {
                    transform: H.transform && H.transform.css
                },
                Y = {
                    color: [c, F],
                    background: [c, F, "background-color"],
                    "outline-color": [c, F],
                    "border-color": [c, F],
                    "border-top-color": [c, F],
                    "border-right-color": [c, F],
                    "border-bottom-color": [c, F],
                    "border-left-color": [c, F],
                    "border-width": [v, k],
                    "border-top-width": [v, k],
                    "border-right-width": [v, k],
                    "border-bottom-width": [v, k],
                    "border-left-width": [v, k],
                    "border-spacing": [v, k],
                    "letter-spacing": [v, k],
                    margin: [v, k],
                    "margin-top": [v, k],
                    "margin-right": [v, k],
                    "margin-bottom": [v, k],
                    "margin-left": [v, k],
                    padding: [v, k],
                    "padding-top": [v, k],
                    "padding-right": [v, k],
                    "padding-bottom": [v, k],
                    "padding-left": [v, k],
                    "outline-width": [v, k],
                    opacity: [v, L],
                    top: [v, q],
                    right: [v, q],
                    bottom: [v, q],
                    left: [v, q],
                    "font-size": [v, q],
                    "text-indent": [v, q],
                    "word-spacing": [v, q],
                    width: [v, q],
                    "min-width": [v, q],
                    "max-width": [v, q],
                    height: [v, q],
                    "min-height": [v, q],
                    "max-height": [v, q],
                    "line-height": [v, K],
                    "scroll-top": [D, L, "scrollTop"],
                    "scroll-left": [D, L, "scrollLeft"]
                },
                le = {};
            H.transform && (Y.transform = [W], le = {
                x: [q, "translateX"],
                y: [q, "translateY"],
                rotate: [j],
                rotateX: [j],
                rotateY: [j],
                scale: [L],
                scaleX: [L],
                scaleY: [L],
                skew: [j],
                skewX: [j],
                skewY: [j]
            }), H.transform && H.backface && (le.z = [q, "translateZ"], le.rotateZ = [j], le.scaleZ = [L], le.perspective = [k]);
            var Ie = /ms/,
                Ae = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ea = h((FF, ma) => {
        "use strict";
        var am = window.$,
            sm = Qn() && am.tram;
        ma.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                u = r.concat,
                s = n.toString,
                l = n.hasOwnProperty,
                I = r.forEach,
                d = r.map,
                y = r.reduce,
                m = r.reduceRight,
                E = r.filter,
                T = r.every,
                A = r.some,
                w = r.indexOf,
                N = r.lastIndexOf,
                L = Array.isArray,
                F = Object.keys,
                k = i.bind,
                q = e.each = e.forEach = function(b, P, G) {
                    if (b == null) return b;
                    if (I && b.forEach === I) b.forEach(P, G);
                    else if (b.length === +b.length) {
                        for (var H = 0, ee = b.length; H < ee; H++)
                            if (P.call(G, b[H], H, b) === t) return
                    } else
                        for (var re = e.keys(b), H = 0, ee = re.length; H < ee; H++)
                            if (P.call(G, b[re[H]], re[H], b) === t) return;
                    return b
                };
            e.map = e.collect = function(b, P, G) {
                var H = [];
                return b == null ? H : d && b.map === d ? b.map(P, G) : (q(b, function(ee, re, U) {
                    H.push(P.call(G, ee, re, U))
                }), H)
            }, e.find = e.detect = function(b, P, G) {
                var H;
                return j(b, function(ee, re, U) {
                    if (P.call(G, ee, re, U)) return H = ee, !0
                }), H
            }, e.filter = e.select = function(b, P, G) {
                var H = [];
                return b == null ? H : E && b.filter === E ? b.filter(P, G) : (q(b, function(ee, re, U) {
                    P.call(G, ee, re, U) && H.push(ee)
                }), H)
            };
            var j = e.some = e.any = function(b, P, G) {
                P || (P = e.identity);
                var H = !1;
                return b == null ? H : A && b.some === A ? b.some(P, G) : (q(b, function(ee, re, U) {
                    if (H || (H = P.call(G, ee, re, U))) return t
                }), !!H)
            };
            e.contains = e.include = function(b, P) {
                return b == null ? !1 : w && b.indexOf === w ? b.indexOf(P) != -1 : j(b, function(G) {
                    return G === P
                })
            }, e.delay = function(b, P) {
                var G = a.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, G)
                }, P)
            }, e.defer = function(b) {
                return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(b) {
                var P, G, H;
                return function() {
                    P || (P = !0, G = arguments, H = this, sm.frame(function() {
                        P = !1, b.apply(H, G)
                    }))
                }
            }, e.debounce = function(b, P, G) {
                var H, ee, re, U, V, g = function() {
                    var p = e.now() - U;
                    p < P ? H = setTimeout(g, P - p) : (H = null, G || (V = b.apply(re, ee), re = ee = null))
                };
                return function() {
                    re = this, ee = arguments, U = e.now();
                    var p = G && !H;
                    return H || (H = setTimeout(g, P)), p && (V = b.apply(re, ee), re = ee = null), V
                }
            }, e.defaults = function(b) {
                if (!e.isObject(b)) return b;
                for (var P = 1, G = arguments.length; P < G; P++) {
                    var H = arguments[P];
                    for (var ee in H) b[ee] === void 0 && (b[ee] = H[ee])
                }
                return b
            }, e.keys = function(b) {
                if (!e.isObject(b)) return [];
                if (F) return F(b);
                var P = [];
                for (var G in b) e.has(b, G) && P.push(G);
                return P
            }, e.has = function(b, P) {
                return l.call(b, P)
            }, e.isObject = function(b) {
                return b === Object(b)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/,
                Q = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                te = /\\|'|\r|\n|\u2028|\u2029/g,
                z = function(b) {
                    return "\\" + Q[b]
                },
                C = /^\s*(\w|\$)+\s*$/;
            return e.template = function(b, P, G) {
                !P && G && (P = G), P = e.defaults({}, P, e.templateSettings);
                var H = RegExp([(P.escape || K).source, (P.interpolate || K).source, (P.evaluate || K).source].join("|") + "|$", "g"),
                    ee = 0,
                    re = "__p+='";
                b.replace(H, function(p, v, c, D, W) {
                    return re += b.slice(ee, W).replace(te, z), ee = W + p.length, v ? re += `'+
((__t=(` + v + `))==null?'':_.escape(__t))+
'` : c ? re += `'+
((__t=(` + c + `))==null?'':__t)+
'` : D && (re += `';
` + D + `
__p+='`), p
                }), re += `';
`;
                var U = P.variable;
                if (U) {
                    if (!C.test(U)) throw new Error("variable is not a bare identifier: " + U)
                } else re = `with(obj||{}){
` + re + `}
`, U = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var V;
                try {
                    V = new Function(P.variable || "obj", "_", re)
                } catch (p) {
                    throw p.source = re, p
                }
                var g = function(p) {
                    return V.call(this, p, e)
                };
                return g.source = "function(" + U + `){
` + re + "}", g
            }, e
        }()
    });
    var Oe = h((qF, Aa) => {
        "use strict";
        var he = {},
            St = {},
            Rt = [],
            Zn = window.Webflow || [],
            lt = window.jQuery,
            He = lt(window),
            um = lt(document),
            $e = lt.isFunction,
            Ue = he._ = Ea(),
            _a = he.tram = Qn() && lt.tram,
            kr = !1,
            Jn = !1;
        _a.config.hideBackface = !1;
        _a.config.keepInherited = !0;
        he.define = function(e, t, r) {
            St[e] && Ia(St[e]);
            var n = St[e] = t(lt, Ue, r) || {};
            return ba(n), n
        };
        he.require = function(e) {
            return St[e]
        };

        function ba(e) {
            he.env() && ($e(e.design) && He.on("__wf_design", e.design), $e(e.preview) && He.on("__wf_preview", e.preview)), $e(e.destroy) && He.on("__wf_destroy", e.destroy), e.ready && $e(e.ready) && cm(e)
        }

        function cm(e) {
            if (kr) {
                e.ready();
                return
            }
            Ue.contains(Rt, e.ready) || Rt.push(e.ready)
        }

        function Ia(e) {
            $e(e.design) && He.off("__wf_design", e.design), $e(e.preview) && He.off("__wf_preview", e.preview), $e(e.destroy) && He.off("__wf_destroy", e.destroy), e.ready && $e(e.ready) && lm(e)
        }

        function lm(e) {
            Rt = Ue.filter(Rt, function(t) {
                return t !== e.ready
            })
        }
        he.push = function(e) {
            if (kr) {
                $e(e) && e();
                return
            }
            Zn.push(e)
        };
        he.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var qr = navigator.userAgent.toLowerCase(),
            Ta = he.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            fm = he.env.chrome = /chrome/.test(qr) && /Google/.test(navigator.vendor) && parseInt(qr.match(/chrome\/(\d+)\./)[1], 10),
            dm = he.env.ios = /(ipod|iphone|ipad)/.test(qr);
        he.env.safari = /safari/.test(qr) && !fm && !dm;
        var $n;
        Ta && um.on("touchstart mousedown", function(e) {
            $n = e.target
        });
        he.validClick = Ta ? function(e) {
            return e === $n || lt.contains(e, $n)
        } : function() {
            return !0
        };
        var wa = "resize.webflow orientationchange.webflow load.webflow",
            pm = "scroll.webflow " + wa;
        he.resize = ei(He, wa);
        he.scroll = ei(He, pm);
        he.redraw = ei();

        function ei(e, t) {
            var r = [],
                n = {};
            return n.up = Ue.throttle(function(i) {
                Ue.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Ue.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ue.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        he.location = function(e) {
            window.location = e
        };
        he.env() && (he.location = function() {});
        he.ready = function() {
            kr = !0, Jn ? hm() : Ue.each(Rt, ya), Ue.each(Zn, ya), he.resize.up()
        };

        function ya(e) {
            $e(e) && e()
        }

        function hm() {
            Jn = !1, Ue.each(St, ba)
        }
        var yt;
        he.load = function(e) {
            yt.then(e)
        };

        function xa() {
            yt && (yt.reject(), He.off("load", yt.resolve)), yt = new lt.Deferred, He.on("load", yt.resolve)
        }
        he.destroy = function(e) {
            e = e || {}, Jn = !0, He.triggerHandler("__wf_destroy"), e.domready != null && (kr = e.domready), Ue.each(St, Ia), he.resize.off(), he.scroll.off(), he.redraw.off(), Rt = [], Zn = [], yt.state() === "pending" && xa()
        };
        lt(he.ready);
        xa();
        Aa.exports = window.Webflow = he
    });
    var Ra = h((kF, Sa) => {
        "use strict";
        var Oa = Oe();
        Oa.define("brand", Sa.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                u = /PhantomJS/i.test(navigator.userAgent),
                s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var m = n.attr("data-wf-status"),
                    E = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(E) && a.hostname !== E && (m = !0), m && !u && (l = l || d(), y(), setTimeout(y, 500), e(r).off(s, I).on(s, I))
            };

            function I() {
                var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", m ? "display: none !important;" : "")
            }

            function d() {
                var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    E = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return m.append(E, T), m[0]
            }

            function y() {
                var m = i.children(o),
                    E = m.length && m.get(0) === l,
                    T = Oa.env("editor");
                if (E) {
                    T && m.remove();
                    return
                }
                m.length && m.remove(), T || i.append(l)
            }
            return t
        })
    });
    var La = h((XF, Ca) => {
        "use strict";
        var ti = Oe();
        ti.define("edit", Ca.exports = function(e, t, r) {
            if (r = r || {}, (ti.env("test") || ti.env("frame")) && !r.fixture && !gm()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                u = "hashchange",
                s, l = r.load || y,
                I = !1;
            try {
                I = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            I ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(u, d).triggerHandler(u);

            function d() {
                s || /\?edit/.test(a.hash) && l()
            }

            function y() {
                s = !0, window.WebflowEditor = !0, i.off(u, d), N(function(F) {
                    e.ajax({
                        url: w("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: m(F)
                    })
                })
            }

            function m(F) {
                return function(k) {
                    if (!k) {
                        console.error("Could not load editor data");
                        return
                    }
                    k.thirdPartyCookiesSupported = F, E(A(k.scriptPath), function() {
                        window.WebflowEditor(k)
                    })
                }
            }

            function E(F, k) {
                e.ajax({
                    type: "GET",
                    url: F,
                    dataType: "script",
                    cache: !0
                }).then(k, T)
            }

            function T(F, k, q) {
                throw console.error("Could not load editor script: " + k), q
            }

            function A(F) {
                return F.indexOf("//") >= 0 ? F : w("https://editor-api.webflow.com" + F)
            }

            function w(F) {
                return F.replace(/([^:])\/\//g, "$1/")
            }

            function N(F) {
                var k = window.document.createElement("iframe");
                k.src = "https://webflow.com/site/third-party-cookie-check.html", k.style.display = "none", k.sandbox = "allow-scripts allow-same-origin";
                var q = function(j) {
                    j.data === "WF_third_party_cookies_unsupported" ? (L(k, q), F(!1)) : j.data === "WF_third_party_cookies_supported" && (L(k, q), F(!0))
                };
                k.onerror = function() {
                    L(k, q), F(!1)
                }, window.addEventListener("message", q, !1), window.document.body.appendChild(k)
            }

            function L(F, k) {
                window.removeEventListener("message", k, !1), F.remove()
            }
            return n
        });

        function gm() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Na = h((GF, Pa) => {
        "use strict";
        var vm = Oe();
        vm.define("focus-visible", Pa.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function u(L) {
                    return !!(L && L !== document && L.nodeName !== "HTML" && L.nodeName !== "BODY" && "classList" in L && "contains" in L.classList)
                }

                function s(L) {
                    var F = L.type,
                        k = L.tagName;
                    return !!(k === "INPUT" && a[F] && !L.readOnly || k === "TEXTAREA" && !L.readOnly || L.isContentEditable)
                }

                function l(L) {
                    L.getAttribute("data-wf-focus-visible") || L.setAttribute("data-wf-focus-visible", "true")
                }

                function I(L) {
                    L.getAttribute("data-wf-focus-visible") && L.removeAttribute("data-wf-focus-visible")
                }

                function d(L) {
                    L.metaKey || L.altKey || L.ctrlKey || (u(r.activeElement) && l(r.activeElement), n = !0)
                }

                function y() {
                    n = !1
                }

                function m(L) {
                    u(L.target) && (n || s(L.target)) && l(L.target)
                }

                function E(L) {
                    u(L.target) && L.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), I(L.target))
                }

                function T() {
                    document.visibilityState === "hidden" && (i && (n = !0), A())
                }

                function A() {
                    document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N)
                }

                function w() {
                    document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N)
                }

                function N(L) {
                    L.target.nodeName && L.target.nodeName.toLowerCase() === "html" || (n = !1, w())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("visibilitychange", T, !0), A(), r.addEventListener("focus", m, !0), r.addEventListener("blur", E, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Fa = h((WF, Ma) => {
        "use strict";
        var Da = Oe();
        Da.define("focus", Ma.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var u = a.target,
                    s = u.tagName;
                return /^a$/i.test(s) && u.href != null || /^(button|textarea)$/i.test(s) && u.disabled !== !0 || /^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(s) || /^video$/i.test(s) && u.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type, u))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Da.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Xa = h((UF, ka) => {
        "use strict";
        var ri = window.jQuery,
            Ze = {},
            Xr = [],
            qa = ".w-ix",
            Gr = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, ri(t).triggerHandler(Ze.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, ri(t).triggerHandler(Ze.types.OUTRO))
                }
            };
        Ze.triggers = {};
        Ze.types = {
            INTRO: "w-ix-intro" + qa,
            OUTRO: "w-ix-outro" + qa
        };
        Ze.init = function() {
            for (var e = Xr.length, t = 0; t < e; t++) {
                var r = Xr[t];
                r[0](0, r[1])
            }
            Xr = [], ri.extend(Ze.triggers, Gr)
        };
        Ze.async = function() {
            for (var e in Gr) {
                var t = Gr[e];
                Gr.hasOwnProperty(e) && (Ze.triggers[e] = function(r, n) {
                    Xr.push([t, n])
                })
            }
        };
        Ze.async();
        ka.exports = Ze
    });
    var Ct = h((HF, Ua) => {
        "use strict";
        var ni = Xa();

        function Ga(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var mm = window.jQuery,
            Wr = {},
            Wa = ".w-ix",
            Em = {
                reset: function(e, t) {
                    ni.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    ni.triggers.intro(e, t), Ga(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    ni.triggers.outro(e, t), Ga(t, "COMPONENT_INACTIVE")
                }
            };
        Wr.triggers = {};
        Wr.types = {
            INTRO: "w-ix-intro" + Wa,
            OUTRO: "w-ix-outro" + Wa
        };
        mm.extend(Wr.triggers, Em);
        Ua.exports = Wr
    });
    var ii = h((VF, Ha) => {
        var ym = typeof global == "object" && global && global.Object === Object && global;
        Ha.exports = ym
    });
    var Ve = h((BF, Va) => {
        var _m = ii(),
            bm = typeof self == "object" && self && self.Object === Object && self,
            Im = _m || bm || Function("return this")();
        Va.exports = Im
    });
    var Lt = h((zF, Ba) => {
        var Tm = Ve(),
            wm = Tm.Symbol;
        Ba.exports = wm
    });
    var Ya = h((KF, ja) => {
        var za = Lt(),
            Ka = Object.prototype,
            xm = Ka.hasOwnProperty,
            Am = Ka.toString,
            or = za ? za.toStringTag : void 0;

        function Om(e) {
            var t = xm.call(e, or),
                r = e[or];
            try {
                e[or] = void 0;
                var n = !0
            } catch {}
            var i = Am.call(e);
            return n && (t ? e[or] = r : delete e[or]), i
        }
        ja.exports = Om
    });
    var $a = h((jF, Qa) => {
        var Sm = Object.prototype,
            Rm = Sm.toString;

        function Cm(e) {
            return Rm.call(e)
        }
        Qa.exports = Cm
    });
    var ft = h((YF, es) => {
        var Za = Lt(),
            Lm = Ya(),
            Pm = $a(),
            Nm = "[object Null]",
            Dm = "[object Undefined]",
            Ja = Za ? Za.toStringTag : void 0;

        function Mm(e) {
            return e == null ? e === void 0 ? Dm : Nm : Ja && Ja in Object(e) ? Lm(e) : Pm(e)
        }
        es.exports = Mm
    });
    var oi = h((QF, ts) => {
        function Fm(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        ts.exports = Fm
    });
    var ai = h(($F, rs) => {
        var qm = oi(),
            km = qm(Object.getPrototypeOf, Object);
        rs.exports = km
    });
    var ot = h((ZF, ns) => {
        function Xm(e) {
            return e != null && typeof e == "object"
        }
        ns.exports = Xm
    });
    var si = h((JF, os) => {
        var Gm = ft(),
            Wm = ai(),
            Um = ot(),
            Hm = "[object Object]",
            Vm = Function.prototype,
            Bm = Object.prototype,
            is = Vm.toString,
            zm = Bm.hasOwnProperty,
            Km = is.call(Object);

        function jm(e) {
            if (!Um(e) || Gm(e) != Hm) return !1;
            var t = Wm(e);
            if (t === null) return !0;
            var r = zm.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && is.call(r) == Km
        }
        os.exports = jm
    });
    var as = h(ui => {
        "use strict";
        Object.defineProperty(ui, "__esModule", {
            value: !0
        });
        ui.default = Ym;

        function Ym(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var ss = h((li, ci) => {
        "use strict";
        Object.defineProperty(li, "__esModule", {
            value: !0
        });
        var Qm = as(),
            $m = Zm(Qm);

        function Zm(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Pt;
        typeof self < "u" ? Pt = self : typeof window < "u" ? Pt = window : typeof global < "u" ? Pt = global : typeof ci < "u" ? Pt = ci : Pt = Function("return this")();
        var Jm = (0, $m.default)(Pt);
        li.default = Jm
    });
    var fi = h(ar => {
        "use strict";
        ar.__esModule = !0;
        ar.ActionTypes = void 0;
        ar.default = fs;
        var eE = si(),
            tE = ls(eE),
            rE = ss(),
            us = ls(rE);

        function ls(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var cs = ar.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function fs(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(fs)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                u = a,
                s = !1;

            function l() {
                u === a && (u = a.slice())
            }

            function I() {
                return o
            }

            function d(T) {
                if (typeof T != "function") throw new Error("Expected listener to be a function.");
                var A = !0;
                return l(), u.push(T),
                    function() {
                        if (A) {
                            A = !1, l();
                            var N = u.indexOf(T);
                            u.splice(N, 1)
                        }
                    }
            }

            function y(T) {
                if (!(0, tE.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (s) throw new Error("Reducers may not dispatch actions.");
                try {
                    s = !0, o = i(o, T)
                } finally {
                    s = !1
                }
                for (var A = a = u, w = 0; w < A.length; w++) A[w]();
                return T
            }

            function m(T) {
                if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
                i = T, y({
                    type: cs.INIT
                })
            }

            function E() {
                var T, A = d;
                return T = {
                    subscribe: function(N) {
                        if (typeof N != "object") throw new TypeError("Expected the observer to be an object.");

                        function L() {
                            N.next && N.next(I())
                        }
                        L();
                        var F = A(L);
                        return {
                            unsubscribe: F
                        }
                    }
                }, T[us.default] = function() {
                    return this
                }, T
            }
            return y({
                type: cs.INIT
            }), n = {
                dispatch: y,
                subscribe: d,
                getState: I,
                replaceReducer: m
            }, n[us.default] = E, n
        }
    });
    var pi = h(di => {
        "use strict";
        di.__esModule = !0;
        di.default = nE;

        function nE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var hs = h(hi => {
        "use strict";
        hi.__esModule = !0;
        hi.default = uE;
        var ds = fi(),
            iE = si(),
            n1 = ps(iE),
            oE = pi(),
            i1 = ps(oE);

        function ps(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function aE(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function sE(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: ds.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ds.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function uE(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var u;
            try {
                sE(r)
            } catch (s) {
                u = s
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    I = arguments[1];
                if (u) throw u;
                if (!1) var d;
                for (var y = !1, m = {}, E = 0; E < o.length; E++) {
                    var T = o[E],
                        A = r[T],
                        w = l[T],
                        N = A(w, I);
                    if (typeof N > "u") {
                        var L = aE(T, I);
                        throw new Error(L)
                    }
                    m[T] = N, y = y || N !== w
                }
                return y ? m : l
            }
        }
    });
    var vs = h(gi => {
        "use strict";
        gi.__esModule = !0;
        gi.default = cE;

        function gs(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function cE(e, t) {
            if (typeof e == "function") return gs(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = gs(a, t))
            }
            return n
        }
    });
    var mi = h(vi => {
        "use strict";
        vi.__esModule = !0;
        vi.default = lE;

        function lE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var ms = h(Ei => {
        "use strict";
        Ei.__esModule = !0;
        var fE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Ei.default = gE;
        var dE = mi(),
            pE = hE(dE);

        function hE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function gE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var u = n(i, o, a),
                        s = u.dispatch,
                        l = [],
                        I = {
                            getState: u.getState,
                            dispatch: function(y) {
                                return s(y)
                            }
                        };
                    return l = t.map(function(d) {
                        return d(I)
                    }), s = pE.default.apply(void 0, l)(u.dispatch), fE({}, u, {
                        dispatch: s
                    })
                }
            }
        }
    });
    var yi = h(Xe => {
        "use strict";
        Xe.__esModule = !0;
        Xe.compose = Xe.applyMiddleware = Xe.bindActionCreators = Xe.combineReducers = Xe.createStore = void 0;
        var vE = fi(),
            mE = Nt(vE),
            EE = hs(),
            yE = Nt(EE),
            _E = vs(),
            bE = Nt(_E),
            IE = ms(),
            TE = Nt(IE),
            wE = mi(),
            xE = Nt(wE),
            AE = pi(),
            c1 = Nt(AE);

        function Nt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Xe.createStore = mE.default;
        Xe.combineReducers = yE.default;
        Xe.bindActionCreators = bE.default;
        Xe.applyMiddleware = TE.default;
        Xe.compose = xE.default
    });
    var Be, _i, Je, OE, SE, Ur, RE, bi = me(() => {
        "use strict";
        Be = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, _i = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, Je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, OE = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, SE = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Ur = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, RE = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Me, CE, Hr = me(() => {
        "use strict";
        Me = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, CE = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var LE, Es = me(() => {
        "use strict";
        LE = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var PE, NE, DE, ME, FE, qE, kE, Ii, ys = me(() => {
        "use strict";
        Hr();
        ({
            TRANSFORM_MOVE: PE,
            TRANSFORM_SCALE: NE,
            TRANSFORM_ROTATE: DE,
            TRANSFORM_SKEW: ME,
            STYLE_SIZE: FE,
            STYLE_FILTER: qE,
            STYLE_FONT_VARIATION: kE
        } = Me), Ii = {
            [PE]: !0,
            [NE]: !0,
            [DE]: !0,
            [ME]: !0,
            [FE]: !0,
            [qE]: !0,
            [kE]: !0
        }
    });
    var Te = {};
    De(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => ty,
        IX2_ANIMATION_FRAME_CHANGED: () => YE,
        IX2_CLEAR_REQUESTED: () => zE,
        IX2_ELEMENT_STATE_CHANGED: () => ey,
        IX2_EVENT_LISTENER_ADDED: () => KE,
        IX2_EVENT_STATE_CHANGED: () => jE,
        IX2_INSTANCE_ADDED: () => $E,
        IX2_INSTANCE_REMOVED: () => JE,
        IX2_INSTANCE_STARTED: () => ZE,
        IX2_MEDIA_QUERIES_DEFINED: () => ny,
        IX2_PARAMETER_CHANGED: () => QE,
        IX2_PLAYBACK_REQUESTED: () => VE,
        IX2_PREVIEW_REQUESTED: () => HE,
        IX2_RAW_DATA_IMPORTED: () => XE,
        IX2_SESSION_INITIALIZED: () => GE,
        IX2_SESSION_STARTED: () => WE,
        IX2_SESSION_STOPPED: () => UE,
        IX2_STOP_REQUESTED: () => BE,
        IX2_TEST_FRAME_RENDERED: () => iy,
        IX2_VIEWPORT_WIDTH_CHANGED: () => ry
    });
    var XE, GE, WE, UE, HE, VE, BE, zE, KE, jE, YE, QE, $E, ZE, JE, ey, ty, ry, ny, iy, _s = me(() => {
        "use strict";
        XE = "IX2_RAW_DATA_IMPORTED", GE = "IX2_SESSION_INITIALIZED", WE = "IX2_SESSION_STARTED", UE = "IX2_SESSION_STOPPED", HE = "IX2_PREVIEW_REQUESTED", VE = "IX2_PLAYBACK_REQUESTED", BE = "IX2_STOP_REQUESTED", zE = "IX2_CLEAR_REQUESTED", KE = "IX2_EVENT_LISTENER_ADDED", jE = "IX2_EVENT_STATE_CHANGED", YE = "IX2_ANIMATION_FRAME_CHANGED", QE = "IX2_PARAMETER_CHANGED", $E = "IX2_INSTANCE_ADDED", ZE = "IX2_INSTANCE_STARTED", JE = "IX2_INSTANCE_REMOVED", ey = "IX2_ELEMENT_STATE_CHANGED", ty = "IX2_ACTION_LIST_PLAYBACK_CHANGED", ry = "IX2_VIEWPORT_WIDTH_CHANGED", ny = "IX2_MEDIA_QUERIES_DEFINED", iy = "IX2_TEST_FRAME_RENDERED"
    });
    var Se = {};
    De(Se, {
        ABSTRACT_NODE: () => r_,
        AUTO: () => By,
        BACKGROUND: () => Xy,
        BACKGROUND_COLOR: () => ky,
        BAR_DELIMITER: () => jy,
        BORDER_COLOR: () => Gy,
        BOUNDARY_SELECTOR: () => cy,
        CHILDREN: () => Yy,
        COLON_DELIMITER: () => Ky,
        COLOR: () => Wy,
        COMMA_DELIMITER: () => zy,
        CONFIG_UNIT: () => my,
        CONFIG_VALUE: () => py,
        CONFIG_X_UNIT: () => hy,
        CONFIG_X_VALUE: () => ly,
        CONFIG_Y_UNIT: () => gy,
        CONFIG_Y_VALUE: () => fy,
        CONFIG_Z_UNIT: () => vy,
        CONFIG_Z_VALUE: () => dy,
        DISPLAY: () => Uy,
        FILTER: () => Dy,
        FLEX: () => Hy,
        FONT_VARIATION_SETTINGS: () => My,
        HEIGHT: () => qy,
        HTML_ELEMENT: () => e_,
        IMMEDIATE_CHILDREN: () => Qy,
        IX2_ID_DELIMITER: () => oy,
        OPACITY: () => Ny,
        PARENT: () => Zy,
        PLAIN_OBJECT: () => t_,
        PRESERVE_3D: () => Jy,
        RENDER_GENERAL: () => i_,
        RENDER_PLUGIN: () => a_,
        RENDER_STYLE: () => o_,
        RENDER_TRANSFORM: () => n_,
        ROTATE_X: () => Oy,
        ROTATE_Y: () => Sy,
        ROTATE_Z: () => Ry,
        SCALE_3D: () => Ay,
        SCALE_X: () => Ty,
        SCALE_Y: () => wy,
        SCALE_Z: () => xy,
        SIBLINGS: () => $y,
        SKEW: () => Cy,
        SKEW_X: () => Ly,
        SKEW_Y: () => Py,
        TRANSFORM: () => Ey,
        TRANSLATE_3D: () => Iy,
        TRANSLATE_X: () => yy,
        TRANSLATE_Y: () => _y,
        TRANSLATE_Z: () => by,
        WF_PAGE: () => ay,
        WIDTH: () => Fy,
        WILL_CHANGE: () => Vy,
        W_MOD_IX: () => uy,
        W_MOD_JS: () => sy
    });
    var oy, ay, sy, uy, cy, ly, fy, dy, py, hy, gy, vy, my, Ey, yy, _y, by, Iy, Ty, wy, xy, Ay, Oy, Sy, Ry, Cy, Ly, Py, Ny, Dy, My, Fy, qy, ky, Xy, Gy, Wy, Uy, Hy, Vy, By, zy, Ky, jy, Yy, Qy, $y, Zy, Jy, e_, t_, r_, n_, i_, o_, a_, bs = me(() => {
        "use strict";
        oy = "|", ay = "data-wf-page", sy = "w-mod-js", uy = "w-mod-ix", cy = ".w-dyn-item", ly = "xValue", fy = "yValue", dy = "zValue", py = "value", hy = "xUnit", gy = "yUnit", vy = "zUnit", my = "unit", Ey = "transform", yy = "translateX", _y = "translateY", by = "translateZ", Iy = "translate3d", Ty = "scaleX", wy = "scaleY", xy = "scaleZ", Ay = "scale3d", Oy = "rotateX", Sy = "rotateY", Ry = "rotateZ", Cy = "skew", Ly = "skewX", Py = "skewY", Ny = "opacity", Dy = "filter", My = "font-variation-settings", Fy = "width", qy = "height", ky = "backgroundColor", Xy = "background", Gy = "borderColor", Wy = "color", Uy = "display", Hy = "flex", Vy = "willChange", By = "AUTO", zy = ",", Ky = ":", jy = "|", Yy = "CHILDREN", Qy = "IMMEDIATE_CHILDREN", $y = "SIBLINGS", Zy = "PARENT", Jy = "preserve-3d", e_ = "HTML_ELEMENT", t_ = "PLAIN_OBJECT", r_ = "ABSTRACT_NODE", n_ = "RENDER_TRANSFORM", i_ = "RENDER_GENERAL", o_ = "RENDER_STYLE", a_ = "RENDER_PLUGIN"
    });
    var Is = {};
    De(Is, {
        ActionAppliesTo: () => CE,
        ActionTypeConsts: () => Me,
        EventAppliesTo: () => _i,
        EventBasedOn: () => Je,
        EventContinuousMouseAxes: () => OE,
        EventLimitAffectedElements: () => SE,
        EventTypeConsts: () => Be,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Se,
        InteractionTypeConsts: () => LE,
        QuickEffectDirectionConsts: () => RE,
        QuickEffectIds: () => Ur,
        ReducedMotionTypes: () => Ii
    });
    var Fe = me(() => {
        "use strict";
        bi();
        Hr();
        Es();
        ys();
        _s();
        bs();
        Hr();
        bi()
    });
    var s_, Ts, ws = me(() => {
        "use strict";
        Fe();
        ({
            IX2_RAW_DATA_IMPORTED: s_
        } = Te), Ts = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case s_:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Dt = h(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var u_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ye.clone = Br;
        ye.addLast = Os;
        ye.addFirst = Ss;
        ye.removeLast = Rs;
        ye.removeFirst = Cs;
        ye.insert = Ls;
        ye.removeAt = Ps;
        ye.replaceAt = Ns;
        ye.getIn = zr;
        ye.set = Kr;
        ye.setIn = jr;
        ye.update = Ms;
        ye.updateIn = Fs;
        ye.merge = qs;
        ye.mergeDeep = ks;
        ye.mergeIn = Xs;
        ye.omit = Gs;
        ye.addDefaults = Ws;
        var xs = "INVALID_ARGS";

        function As(e) {
            throw new Error(e)
        }

        function Ti(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var c_ = {}.hasOwnProperty;

        function Br(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Ti(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function qe(e, t, r) {
            var n = r;
            n == null && As(xs);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) a[u - 3] = arguments[u];
            for (var s = 0; s < a.length; s++) {
                var l = a[s];
                if (l != null) {
                    var I = Ti(l);
                    if (I.length)
                        for (var d = 0; d <= I.length; d++) {
                            var y = I[d];
                            if (!(e && n[y] !== void 0)) {
                                var m = l[y];
                                t && Vr(n[y]) && Vr(m) && (m = qe(e, t, n[y], m)), !(m === void 0 || m === n[y]) && (i || (i = !0, n = Br(n)), n[y] = m)
                            }
                        }
                }
            }
            return n
        }

        function Vr(e) {
            var t = typeof e > "u" ? "undefined" : u_(e);
            return e != null && (t === "object" || t === "function")
        }

        function Os(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Ss(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Rs(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Cs(e) {
            return e.length ? e.slice(1) : e
        }

        function Ls(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Ps(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Ns(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function zr(e, t) {
            if (!Array.isArray(t) && As(xs), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Kr(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Br(i);
            return o[t] = r, o
        }

        function Ds(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = Vr(e) && Vr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Ds(a, t, r, n + 1)
            }
            return Kr(e, o, i)
        }

        function jr(e, t, r) {
            return t.length ? Ds(e, t, r, 0) : r
        }

        function Ms(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Kr(e, t, i)
        }

        function Fs(e, t, r) {
            var n = zr(e, t),
                i = r(n);
            return jr(e, t, i)
        }

        function qs(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? qe.call.apply(qe, [null, !1, !1, e, t, r, n, i, o].concat(u)) : qe(!1, !1, e, t, r, n, i, o)
        }

        function ks(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? qe.call.apply(qe, [null, !1, !0, e, t, r, n, i, o].concat(u)) : qe(!1, !0, e, t, r, n, i, o)
        }

        function Xs(e, t, r, n, i, o, a) {
            var u = zr(e, t);
            u == null && (u = {});
            for (var s = void 0, l = arguments.length, I = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++) I[d - 7] = arguments[d];
            return I.length ? s = qe.call.apply(qe, [null, !1, !1, u, r, n, i, o, a].concat(I)) : s = qe(!1, !1, u, r, n, i, o, a), jr(e, t, s)
        }

        function Gs(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (c_.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = Ti(e), u = 0; u < a.length; u++) {
                var s = a[u];
                r.indexOf(s) >= 0 || (o[s] = e[s])
            }
            return o
        }

        function Ws(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? qe.call.apply(qe, [null, !0, !1, e, t, r, n, i, o].concat(u)) : qe(!0, !1, e, t, r, n, i, o)
        }
        var l_ = {
            clone: Br,
            addLast: Os,
            addFirst: Ss,
            removeLast: Rs,
            removeFirst: Cs,
            insert: Ls,
            removeAt: Ps,
            replaceAt: Ns,
            getIn: zr,
            set: Kr,
            setIn: jr,
            update: Ms,
            updateIn: Fs,
            merge: qs,
            mergeDeep: ks,
            mergeIn: Xs,
            omit: Gs,
            addDefaults: Ws
        };
        ye.default = l_
    });
    var Hs, f_, d_, p_, h_, g_, Us, Vs, Bs = me(() => {
        "use strict";
        Fe();
        Hs = de(Dt()), {
            IX2_PREVIEW_REQUESTED: f_,
            IX2_PLAYBACK_REQUESTED: d_,
            IX2_STOP_REQUESTED: p_,
            IX2_CLEAR_REQUESTED: h_
        } = Te, g_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Us = Object.create(null, {
            [f_]: {
                value: "preview"
            },
            [d_]: {
                value: "playback"
            },
            [p_]: {
                value: "stop"
            },
            [h_]: {
                value: "clear"
            }
        }), Vs = (e = g_, t) => {
            if (t.type in Us) {
                let r = [Us[t.type]];
                return (0, Hs.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Le, v_, m_, E_, y_, __, b_, I_, T_, w_, x_, zs, A_, Ks, js = me(() => {
        "use strict";
        Fe();
        Le = de(Dt()), {
            IX2_SESSION_INITIALIZED: v_,
            IX2_SESSION_STARTED: m_,
            IX2_TEST_FRAME_RENDERED: E_,
            IX2_SESSION_STOPPED: y_,
            IX2_EVENT_LISTENER_ADDED: __,
            IX2_EVENT_STATE_CHANGED: b_,
            IX2_ANIMATION_FRAME_CHANGED: I_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: T_,
            IX2_VIEWPORT_WIDTH_CHANGED: w_,
            IX2_MEDIA_QUERIES_DEFINED: x_
        } = Te, zs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, A_ = 20, Ks = (e = zs, t) => {
            switch (t.type) {
                case v_:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Le.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case m_:
                    return (0, Le.set)(e, "active", !0);
                case E_:
                    {
                        let {
                            payload: {
                                step: r = A_
                            }
                        } = t;
                        return (0, Le.set)(e, "tick", e.tick + r)
                    }
                case y_:
                    return zs;
                case I_:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Le.set)(e, "tick", r)
                    }
                case __:
                    {
                        let r = (0, Le.addLast)(e.eventListeners, t.payload);
                        return (0, Le.set)(e, "eventListeners", r)
                    }
                case b_:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Le.setIn)(e, ["eventState", r], n)
                    }
                case T_:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Le.setIn)(e, ["playbackState", r], n)
                    }
                case w_:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: u,
                                min: s,
                                max: l
                            } = n[a];
                            if (r >= s && r <= l) {
                                o = u;
                                break
                            }
                        }
                        return (0, Le.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case x_:
                    return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Qs = h((R1, Ys) => {
        function O_() {
            this.__data__ = [], this.size = 0
        }
        Ys.exports = O_
    });
    var Yr = h((C1, $s) => {
        function S_(e, t) {
            return e === t || e !== e && t !== t
        }
        $s.exports = S_
    });
    var sr = h((L1, Zs) => {
        var R_ = Yr();

        function C_(e, t) {
            for (var r = e.length; r--;)
                if (R_(e[r][0], t)) return r;
            return -1
        }
        Zs.exports = C_
    });
    var eu = h((P1, Js) => {
        var L_ = sr(),
            P_ = Array.prototype,
            N_ = P_.splice;

        function D_(e) {
            var t = this.__data__,
                r = L_(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : N_.call(t, r, 1), --this.size, !0
        }
        Js.exports = D_
    });
    var ru = h((N1, tu) => {
        var M_ = sr();

        function F_(e) {
            var t = this.__data__,
                r = M_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        tu.exports = F_
    });
    var iu = h((D1, nu) => {
        var q_ = sr();

        function k_(e) {
            return q_(this.__data__, e) > -1
        }
        nu.exports = k_
    });
    var au = h((M1, ou) => {
        var X_ = sr();

        function G_(e, t) {
            var r = this.__data__,
                n = X_(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        ou.exports = G_
    });
    var ur = h((F1, su) => {
        var W_ = Qs(),
            U_ = eu(),
            H_ = ru(),
            V_ = iu(),
            B_ = au();

        function Mt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Mt.prototype.clear = W_;
        Mt.prototype.delete = U_;
        Mt.prototype.get = H_;
        Mt.prototype.has = V_;
        Mt.prototype.set = B_;
        su.exports = Mt
    });
    var cu = h((q1, uu) => {
        var z_ = ur();

        function K_() {
            this.__data__ = new z_, this.size = 0
        }
        uu.exports = K_
    });
    var fu = h((k1, lu) => {
        function j_(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        lu.exports = j_
    });
    var pu = h((X1, du) => {
        function Y_(e) {
            return this.__data__.get(e)
        }
        du.exports = Y_
    });
    var gu = h((G1, hu) => {
        function Q_(e) {
            return this.__data__.has(e)
        }
        hu.exports = Q_
    });
    var et = h((W1, vu) => {
        function $_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        vu.exports = $_
    });
    var wi = h((U1, mu) => {
        var Z_ = ft(),
            J_ = et(),
            eb = "[object AsyncFunction]",
            tb = "[object Function]",
            rb = "[object GeneratorFunction]",
            nb = "[object Proxy]";

        function ib(e) {
            if (!J_(e)) return !1;
            var t = Z_(e);
            return t == tb || t == rb || t == eb || t == nb
        }
        mu.exports = ib
    });
    var yu = h((H1, Eu) => {
        var ob = Ve(),
            ab = ob["__core-js_shared__"];
        Eu.exports = ab
    });
    var Iu = h((V1, bu) => {
        var xi = yu(),
            _u = function() {
                var e = /[^.]+$/.exec(xi && xi.keys && xi.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function sb(e) {
            return !!_u && _u in e
        }
        bu.exports = sb
    });
    var Ai = h((B1, Tu) => {
        var ub = Function.prototype,
            cb = ub.toString;

        function lb(e) {
            if (e != null) {
                try {
                    return cb.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Tu.exports = lb
    });
    var xu = h((z1, wu) => {
        var fb = wi(),
            db = Iu(),
            pb = et(),
            hb = Ai(),
            gb = /[\\^$.*+?()[\]{}|]/g,
            vb = /^\[object .+?Constructor\]$/,
            mb = Function.prototype,
            Eb = Object.prototype,
            yb = mb.toString,
            _b = Eb.hasOwnProperty,
            bb = RegExp("^" + yb.call(_b).replace(gb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Ib(e) {
            if (!pb(e) || db(e)) return !1;
            var t = fb(e) ? bb : vb;
            return t.test(hb(e))
        }
        wu.exports = Ib
    });
    var Ou = h((K1, Au) => {
        function Tb(e, t) {
            return e ? .[t]
        }
        Au.exports = Tb
    });
    var dt = h((j1, Su) => {
        var wb = xu(),
            xb = Ou();

        function Ab(e, t) {
            var r = xb(e, t);
            return wb(r) ? r : void 0
        }
        Su.exports = Ab
    });
    var Qr = h((Y1, Ru) => {
        var Ob = dt(),
            Sb = Ve(),
            Rb = Ob(Sb, "Map");
        Ru.exports = Rb
    });
    var cr = h((Q1, Cu) => {
        var Cb = dt(),
            Lb = Cb(Object, "create");
        Cu.exports = Lb
    });
    var Nu = h(($1, Pu) => {
        var Lu = cr();

        function Pb() {
            this.__data__ = Lu ? Lu(null) : {}, this.size = 0
        }
        Pu.exports = Pb
    });
    var Mu = h((Z1, Du) => {
        function Nb(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Du.exports = Nb
    });
    var qu = h((J1, Fu) => {
        var Db = cr(),
            Mb = "__lodash_hash_undefined__",
            Fb = Object.prototype,
            qb = Fb.hasOwnProperty;

        function kb(e) {
            var t = this.__data__;
            if (Db) {
                var r = t[e];
                return r === Mb ? void 0 : r
            }
            return qb.call(t, e) ? t[e] : void 0
        }
        Fu.exports = kb
    });
    var Xu = h((e2, ku) => {
        var Xb = cr(),
            Gb = Object.prototype,
            Wb = Gb.hasOwnProperty;

        function Ub(e) {
            var t = this.__data__;
            return Xb ? t[e] !== void 0 : Wb.call(t, e)
        }
        ku.exports = Ub
    });
    var Wu = h((t2, Gu) => {
        var Hb = cr(),
            Vb = "__lodash_hash_undefined__";

        function Bb(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = Hb && t === void 0 ? Vb : t, this
        }
        Gu.exports = Bb
    });
    var Hu = h((r2, Uu) => {
        var zb = Nu(),
            Kb = Mu(),
            jb = qu(),
            Yb = Xu(),
            Qb = Wu();

        function Ft(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ft.prototype.clear = zb;
        Ft.prototype.delete = Kb;
        Ft.prototype.get = jb;
        Ft.prototype.has = Yb;
        Ft.prototype.set = Qb;
        Uu.exports = Ft
    });
    var zu = h((n2, Bu) => {
        var Vu = Hu(),
            $b = ur(),
            Zb = Qr();

        function Jb() {
            this.size = 0, this.__data__ = {
                hash: new Vu,
                map: new(Zb || $b),
                string: new Vu
            }
        }
        Bu.exports = Jb
    });
    var ju = h((i2, Ku) => {
        function eI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Ku.exports = eI
    });
    var lr = h((o2, Yu) => {
        var tI = ju();

        function rI(e, t) {
            var r = e.__data__;
            return tI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Yu.exports = rI
    });
    var $u = h((a2, Qu) => {
        var nI = lr();

        function iI(e) {
            var t = nI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Qu.exports = iI
    });
    var Ju = h((s2, Zu) => {
        var oI = lr();

        function aI(e) {
            return oI(this, e).get(e)
        }
        Zu.exports = aI
    });
    var tc = h((u2, ec) => {
        var sI = lr();

        function uI(e) {
            return sI(this, e).has(e)
        }
        ec.exports = uI
    });
    var nc = h((c2, rc) => {
        var cI = lr();

        function lI(e, t) {
            var r = cI(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        rc.exports = lI
    });
    var $r = h((l2, ic) => {
        var fI = zu(),
            dI = $u(),
            pI = Ju(),
            hI = tc(),
            gI = nc();

        function qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        qt.prototype.clear = fI;
        qt.prototype.delete = dI;
        qt.prototype.get = pI;
        qt.prototype.has = hI;
        qt.prototype.set = gI;
        ic.exports = qt
    });
    var ac = h((f2, oc) => {
        var vI = ur(),
            mI = Qr(),
            EI = $r(),
            yI = 200;

        function _I(e, t) {
            var r = this.__data__;
            if (r instanceof vI) {
                var n = r.__data__;
                if (!mI || n.length < yI - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new EI(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        oc.exports = _I
    });
    var Oi = h((d2, sc) => {
        var bI = ur(),
            II = cu(),
            TI = fu(),
            wI = pu(),
            xI = gu(),
            AI = ac();

        function kt(e) {
            var t = this.__data__ = new bI(e);
            this.size = t.size
        }
        kt.prototype.clear = II;
        kt.prototype.delete = TI;
        kt.prototype.get = wI;
        kt.prototype.has = xI;
        kt.prototype.set = AI;
        sc.exports = kt
    });
    var cc = h((p2, uc) => {
        var OI = "__lodash_hash_undefined__";

        function SI(e) {
            return this.__data__.set(e, OI), this
        }
        uc.exports = SI
    });
    var fc = h((h2, lc) => {
        function RI(e) {
            return this.__data__.has(e)
        }
        lc.exports = RI
    });
    var pc = h((g2, dc) => {
        var CI = $r(),
            LI = cc(),
            PI = fc();

        function Zr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new CI; ++t < r;) this.add(e[t])
        }
        Zr.prototype.add = Zr.prototype.push = LI;
        Zr.prototype.has = PI;
        dc.exports = Zr
    });
    var gc = h((v2, hc) => {
        function NI(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        hc.exports = NI
    });
    var mc = h((m2, vc) => {
        function DI(e, t) {
            return e.has(t)
        }
        vc.exports = DI
    });
    var Si = h((E2, Ec) => {
        var MI = pc(),
            FI = gc(),
            qI = mc(),
            kI = 1,
            XI = 2;

        function GI(e, t, r, n, i, o) {
            var a = r & kI,
                u = e.length,
                s = t.length;
            if (u != s && !(a && s > u)) return !1;
            var l = o.get(e),
                I = o.get(t);
            if (l && I) return l == t && I == e;
            var d = -1,
                y = !0,
                m = r & XI ? new MI : void 0;
            for (o.set(e, t), o.set(t, e); ++d < u;) {
                var E = e[d],
                    T = t[d];
                if (n) var A = a ? n(T, E, d, t, e, o) : n(E, T, d, e, t, o);
                if (A !== void 0) {
                    if (A) continue;
                    y = !1;
                    break
                }
                if (m) {
                    if (!FI(t, function(w, N) {
                            if (!qI(m, N) && (E === w || i(E, w, r, n, o))) return m.push(N)
                        })) {
                        y = !1;
                        break
                    }
                } else if (!(E === T || i(E, T, r, n, o))) {
                    y = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), y
        }
        Ec.exports = GI
    });
    var _c = h((y2, yc) => {
        var WI = Ve(),
            UI = WI.Uint8Array;
        yc.exports = UI
    });
    var Ic = h((_2, bc) => {
        function HI(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        bc.exports = HI
    });
    var wc = h((b2, Tc) => {
        function VI(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Tc.exports = VI
    });
    var Rc = h((I2, Sc) => {
        var xc = Lt(),
            Ac = _c(),
            BI = Yr(),
            zI = Si(),
            KI = Ic(),
            jI = wc(),
            YI = 1,
            QI = 2,
            $I = "[object Boolean]",
            ZI = "[object Date]",
            JI = "[object Error]",
            eT = "[object Map]",
            tT = "[object Number]",
            rT = "[object RegExp]",
            nT = "[object Set]",
            iT = "[object String]",
            oT = "[object Symbol]",
            aT = "[object ArrayBuffer]",
            sT = "[object DataView]",
            Oc = xc ? xc.prototype : void 0,
            Ri = Oc ? Oc.valueOf : void 0;

        function uT(e, t, r, n, i, o, a) {
            switch (r) {
                case sT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case aT:
                    return !(e.byteLength != t.byteLength || !o(new Ac(e), new Ac(t)));
                case $I:
                case ZI:
                case tT:
                    return BI(+e, +t);
                case JI:
                    return e.name == t.name && e.message == t.message;
                case rT:
                case iT:
                    return e == t + "";
                case eT:
                    var u = KI;
                case nT:
                    var s = n & YI;
                    if (u || (u = jI), e.size != t.size && !s) return !1;
                    var l = a.get(e);
                    if (l) return l == t;
                    n |= QI, a.set(e, t);
                    var I = zI(u(e), u(t), n, i, o, a);
                    return a.delete(e), I;
                case oT:
                    if (Ri) return Ri.call(e) == Ri.call(t)
            }
            return !1
        }
        Sc.exports = uT
    });
    var Jr = h((T2, Cc) => {
        function cT(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Cc.exports = cT
    });
    var we = h((w2, Lc) => {
        var lT = Array.isArray;
        Lc.exports = lT
    });
    var Ci = h((x2, Pc) => {
        var fT = Jr(),
            dT = we();

        function pT(e, t, r) {
            var n = t(e);
            return dT(e) ? n : fT(n, r(e))
        }
        Pc.exports = pT
    });
    var Dc = h((A2, Nc) => {
        function hT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Nc.exports = hT
    });
    var Li = h((O2, Mc) => {
        function gT() {
            return []
        }
        Mc.exports = gT
    });
    var Pi = h((S2, qc) => {
        var vT = Dc(),
            mT = Li(),
            ET = Object.prototype,
            yT = ET.propertyIsEnumerable,
            Fc = Object.getOwnPropertySymbols,
            _T = Fc ? function(e) {
                return e == null ? [] : (e = Object(e), vT(Fc(e), function(t) {
                    return yT.call(e, t)
                }))
            } : mT;
        qc.exports = _T
    });
    var Xc = h((R2, kc) => {
        function bT(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        kc.exports = bT
    });
    var Wc = h((C2, Gc) => {
        var IT = ft(),
            TT = ot(),
            wT = "[object Arguments]";

        function xT(e) {
            return TT(e) && IT(e) == wT
        }
        Gc.exports = xT
    });
    var fr = h((L2, Vc) => {
        var Uc = Wc(),
            AT = ot(),
            Hc = Object.prototype,
            OT = Hc.hasOwnProperty,
            ST = Hc.propertyIsEnumerable,
            RT = Uc(function() {
                return arguments
            }()) ? Uc : function(e) {
                return AT(e) && OT.call(e, "callee") && !ST.call(e, "callee")
            };
        Vc.exports = RT
    });
    var zc = h((P2, Bc) => {
        function CT() {
            return !1
        }
        Bc.exports = CT
    });
    var en = h((dr, Xt) => {
        var LT = Ve(),
            PT = zc(),
            Yc = typeof dr == "object" && dr && !dr.nodeType && dr,
            Kc = Yc && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
            NT = Kc && Kc.exports === Yc,
            jc = NT ? LT.Buffer : void 0,
            DT = jc ? jc.isBuffer : void 0,
            MT = DT || PT;
        Xt.exports = MT
    });
    var tn = h((N2, Qc) => {
        var FT = 9007199254740991,
            qT = /^(?:0|[1-9]\d*)$/;

        function kT(e, t) {
            var r = typeof e;
            return t = t ? ? FT, !!t && (r == "number" || r != "symbol" && qT.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Qc.exports = kT
    });
    var rn = h((D2, $c) => {
        var XT = 9007199254740991;

        function GT(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XT
        }
        $c.exports = GT
    });
    var Jc = h((M2, Zc) => {
        var WT = ft(),
            UT = rn(),
            HT = ot(),
            VT = "[object Arguments]",
            BT = "[object Array]",
            zT = "[object Boolean]",
            KT = "[object Date]",
            jT = "[object Error]",
            YT = "[object Function]",
            QT = "[object Map]",
            $T = "[object Number]",
            ZT = "[object Object]",
            JT = "[object RegExp]",
            ew = "[object Set]",
            tw = "[object String]",
            rw = "[object WeakMap]",
            nw = "[object ArrayBuffer]",
            iw = "[object DataView]",
            ow = "[object Float32Array]",
            aw = "[object Float64Array]",
            sw = "[object Int8Array]",
            uw = "[object Int16Array]",
            cw = "[object Int32Array]",
            lw = "[object Uint8Array]",
            fw = "[object Uint8ClampedArray]",
            dw = "[object Uint16Array]",
            pw = "[object Uint32Array]",
            ve = {};
        ve[ow] = ve[aw] = ve[sw] = ve[uw] = ve[cw] = ve[lw] = ve[fw] = ve[dw] = ve[pw] = !0;
        ve[VT] = ve[BT] = ve[nw] = ve[zT] = ve[iw] = ve[KT] = ve[jT] = ve[YT] = ve[QT] = ve[$T] = ve[ZT] = ve[JT] = ve[ew] = ve[tw] = ve[rw] = !1;

        function hw(e) {
            return HT(e) && UT(e.length) && !!ve[WT(e)]
        }
        Zc.exports = hw
    });
    var tl = h((F2, el) => {
        function gw(e) {
            return function(t) {
                return e(t)
            }
        }
        el.exports = gw
    });
    var nl = h((pr, Gt) => {
        var vw = ii(),
            rl = typeof pr == "object" && pr && !pr.nodeType && pr,
            hr = rl && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
            mw = hr && hr.exports === rl,
            Ni = mw && vw.process,
            Ew = function() {
                try {
                    var e = hr && hr.require && hr.require("util").types;
                    return e || Ni && Ni.binding && Ni.binding("util")
                } catch {}
            }();
        Gt.exports = Ew
    });
    var nn = h((q2, al) => {
        var yw = Jc(),
            _w = tl(),
            il = nl(),
            ol = il && il.isTypedArray,
            bw = ol ? _w(ol) : yw;
        al.exports = bw
    });
    var Di = h((k2, sl) => {
        var Iw = Xc(),
            Tw = fr(),
            ww = we(),
            xw = en(),
            Aw = tn(),
            Ow = nn(),
            Sw = Object.prototype,
            Rw = Sw.hasOwnProperty;

        function Cw(e, t) {
            var r = ww(e),
                n = !r && Tw(e),
                i = !r && !n && xw(e),
                o = !r && !n && !i && Ow(e),
                a = r || n || i || o,
                u = a ? Iw(e.length, String) : [],
                s = u.length;
            for (var l in e)(t || Rw.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Aw(l, s))) && u.push(l);
            return u
        }
        sl.exports = Cw
    });
    var on = h((X2, ul) => {
        var Lw = Object.prototype;

        function Pw(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || Lw;
            return e === r
        }
        ul.exports = Pw
    });
    var ll = h((G2, cl) => {
        var Nw = oi(),
            Dw = Nw(Object.keys, Object);
        cl.exports = Dw
    });
    var an = h((W2, fl) => {
        var Mw = on(),
            Fw = ll(),
            qw = Object.prototype,
            kw = qw.hasOwnProperty;

        function Xw(e) {
            if (!Mw(e)) return Fw(e);
            var t = [];
            for (var r in Object(e)) kw.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        fl.exports = Xw
    });
    var _t = h((U2, dl) => {
        var Gw = wi(),
            Ww = rn();

        function Uw(e) {
            return e != null && Ww(e.length) && !Gw(e)
        }
        dl.exports = Uw
    });
    var gr = h((H2, pl) => {
        var Hw = Di(),
            Vw = an(),
            Bw = _t();

        function zw(e) {
            return Bw(e) ? Hw(e) : Vw(e)
        }
        pl.exports = zw
    });
    var gl = h((V2, hl) => {
        var Kw = Ci(),
            jw = Pi(),
            Yw = gr();

        function Qw(e) {
            return Kw(e, Yw, jw)
        }
        hl.exports = Qw
    });
    var El = h((B2, ml) => {
        var vl = gl(),
            $w = 1,
            Zw = Object.prototype,
            Jw = Zw.hasOwnProperty;

        function ex(e, t, r, n, i, o) {
            var a = r & $w,
                u = vl(e),
                s = u.length,
                l = vl(t),
                I = l.length;
            if (s != I && !a) return !1;
            for (var d = s; d--;) {
                var y = u[d];
                if (!(a ? y in t : Jw.call(t, y))) return !1
            }
            var m = o.get(e),
                E = o.get(t);
            if (m && E) return m == t && E == e;
            var T = !0;
            o.set(e, t), o.set(t, e);
            for (var A = a; ++d < s;) {
                y = u[d];
                var w = e[y],
                    N = t[y];
                if (n) var L = a ? n(N, w, y, t, e, o) : n(w, N, y, e, t, o);
                if (!(L === void 0 ? w === N || i(w, N, r, n, o) : L)) {
                    T = !1;
                    break
                }
                A || (A = y == "constructor")
            }
            if (T && !A) {
                var F = e.constructor,
                    k = t.constructor;
                F != k && "constructor" in e && "constructor" in t && !(typeof F == "function" && F instanceof F && typeof k == "function" && k instanceof k) && (T = !1)
            }
            return o.delete(e), o.delete(t), T
        }
        ml.exports = ex
    });
    var _l = h((z2, yl) => {
        var tx = dt(),
            rx = Ve(),
            nx = tx(rx, "DataView");
        yl.exports = nx
    });
    var Il = h((K2, bl) => {
        var ix = dt(),
            ox = Ve(),
            ax = ix(ox, "Promise");
        bl.exports = ax
    });
    var wl = h((j2, Tl) => {
        var sx = dt(),
            ux = Ve(),
            cx = sx(ux, "Set");
        Tl.exports = cx
    });
    var Mi = h((Y2, xl) => {
        var lx = dt(),
            fx = Ve(),
            dx = lx(fx, "WeakMap");
        xl.exports = dx
    });
    var sn = h((Q2, Pl) => {
        var Fi = _l(),
            qi = Qr(),
            ki = Il(),
            Xi = wl(),
            Gi = Mi(),
            Ll = ft(),
            Wt = Ai(),
            Al = "[object Map]",
            px = "[object Object]",
            Ol = "[object Promise]",
            Sl = "[object Set]",
            Rl = "[object WeakMap]",
            Cl = "[object DataView]",
            hx = Wt(Fi),
            gx = Wt(qi),
            vx = Wt(ki),
            mx = Wt(Xi),
            Ex = Wt(Gi),
            bt = Ll;
        (Fi && bt(new Fi(new ArrayBuffer(1))) != Cl || qi && bt(new qi) != Al || ki && bt(ki.resolve()) != Ol || Xi && bt(new Xi) != Sl || Gi && bt(new Gi) != Rl) && (bt = function(e) {
            var t = Ll(e),
                r = t == px ? e.constructor : void 0,
                n = r ? Wt(r) : "";
            if (n) switch (n) {
                case hx:
                    return Cl;
                case gx:
                    return Al;
                case vx:
                    return Ol;
                case mx:
                    return Sl;
                case Ex:
                    return Rl
            }
            return t
        });
        Pl.exports = bt
    });
    var Gl = h(($2, Xl) => {
        var Wi = Oi(),
            yx = Si(),
            _x = Rc(),
            bx = El(),
            Nl = sn(),
            Dl = we(),
            Ml = en(),
            Ix = nn(),
            Tx = 1,
            Fl = "[object Arguments]",
            ql = "[object Array]",
            un = "[object Object]",
            wx = Object.prototype,
            kl = wx.hasOwnProperty;

        function xx(e, t, r, n, i, o) {
            var a = Dl(e),
                u = Dl(t),
                s = a ? ql : Nl(e),
                l = u ? ql : Nl(t);
            s = s == Fl ? un : s, l = l == Fl ? un : l;
            var I = s == un,
                d = l == un,
                y = s == l;
            if (y && Ml(e)) {
                if (!Ml(t)) return !1;
                a = !0, I = !1
            }
            if (y && !I) return o || (o = new Wi), a || Ix(e) ? yx(e, t, r, n, i, o) : _x(e, t, s, r, n, i, o);
            if (!(r & Tx)) {
                var m = I && kl.call(e, "__wrapped__"),
                    E = d && kl.call(t, "__wrapped__");
                if (m || E) {
                    var T = m ? e.value() : e,
                        A = E ? t.value() : t;
                    return o || (o = new Wi), i(T, A, r, n, o)
                }
            }
            return y ? (o || (o = new Wi), bx(e, t, r, n, i, o)) : !1
        }
        Xl.exports = xx
    });
    var Ui = h((Z2, Hl) => {
        var Ax = Gl(),
            Wl = ot();

        function Ul(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Wl(e) && !Wl(t) ? e !== e && t !== t : Ax(e, t, r, n, Ul, i)
        }
        Hl.exports = Ul
    });
    var Bl = h((J2, Vl) => {
        var Ox = Oi(),
            Sx = Ui(),
            Rx = 1,
            Cx = 2;

        function Lx(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var u = r[i];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++i < o;) {
                u = r[i];
                var s = u[0],
                    l = e[s],
                    I = u[1];
                if (a && u[2]) {
                    if (l === void 0 && !(s in e)) return !1
                } else {
                    var d = new Ox;
                    if (n) var y = n(l, I, s, e, t, d);
                    if (!(y === void 0 ? Sx(I, l, Rx | Cx, n, d) : y)) return !1
                }
            }
            return !0
        }
        Vl.exports = Lx
    });
    var Hi = h((eq, zl) => {
        var Px = et();

        function Nx(e) {
            return e === e && !Px(e)
        }
        zl.exports = Nx
    });
    var jl = h((tq, Kl) => {
        var Dx = Hi(),
            Mx = gr();

        function Fx(e) {
            for (var t = Mx(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, Dx(i)]
            }
            return t
        }
        Kl.exports = Fx
    });
    var Vi = h((rq, Yl) => {
        function qx(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Yl.exports = qx
    });
    var $l = h((nq, Ql) => {
        var kx = Bl(),
            Xx = jl(),
            Gx = Vi();

        function Wx(e) {
            var t = Xx(e);
            return t.length == 1 && t[0][2] ? Gx(t[0][0], t[0][1]) : function(r) {
                return r === e || kx(r, e, t)
            }
        }
        Ql.exports = Wx
    });
    var vr = h((iq, Zl) => {
        var Ux = ft(),
            Hx = ot(),
            Vx = "[object Symbol]";

        function Bx(e) {
            return typeof e == "symbol" || Hx(e) && Ux(e) == Vx
        }
        Zl.exports = Bx
    });
    var cn = h((oq, Jl) => {
        var zx = we(),
            Kx = vr(),
            jx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Yx = /^\w*$/;

        function Qx(e, t) {
            if (zx(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || Kx(e) ? !0 : Yx.test(e) || !jx.test(e) || t != null && e in Object(t)
        }
        Jl.exports = Qx
    });
    var rf = h((aq, tf) => {
        var ef = $r(),
            $x = "Expected a function";

        function Bi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError($x);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(Bi.Cache || ef), r
        }
        Bi.Cache = ef;
        tf.exports = Bi
    });
    var of = h((sq, nf) => {
        var Zx = rf(),
            Jx = 500;

        function e0(e) {
            var t = Zx(e, function(n) {
                    return r.size === Jx && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        nf.exports = e0
    });
    var sf = h((uq, af) => {
        var t0 = of (),
            r0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            n0 = /\\(\\)?/g,
            i0 = t0(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(r0, function(r, n, i, o) {
                    t.push(i ? o.replace(n0, "$1") : n || r)
                }), t
            });
        af.exports = i0
    });
    var zi = h((cq, uf) => {
        function o0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        uf.exports = o0
    });
    var hf = h((lq, pf) => {
        var cf = Lt(),
            a0 = zi(),
            s0 = we(),
            u0 = vr(),
            c0 = 1 / 0,
            lf = cf ? cf.prototype : void 0,
            ff = lf ? lf.toString : void 0;

        function df(e) {
            if (typeof e == "string") return e;
            if (s0(e)) return a0(e, df) + "";
            if (u0(e)) return ff ? ff.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -c0 ? "-0" : t
        }
        pf.exports = df
    });
    var vf = h((fq, gf) => {
        var l0 = hf();

        function f0(e) {
            return e == null ? "" : l0(e)
        }
        gf.exports = f0
    });
    var mr = h((dq, mf) => {
        var d0 = we(),
            p0 = cn(),
            h0 = sf(),
            g0 = vf();

        function v0(e, t) {
            return d0(e) ? e : p0(e, t) ? [e] : h0(g0(e))
        }
        mf.exports = v0
    });
    var Ut = h((pq, Ef) => {
        var m0 = vr(),
            E0 = 1 / 0;

        function y0(e) {
            if (typeof e == "string" || m0(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -E0 ? "-0" : t
        }
        Ef.exports = y0
    });
    var ln = h((hq, yf) => {
        var _0 = mr(),
            b0 = Ut();

        function I0(e, t) {
            t = _0(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[b0(t[r++])];
            return r && r == n ? e : void 0
        }
        yf.exports = I0
    });
    var fn = h((gq, _f) => {
        var T0 = ln();

        function w0(e, t, r) {
            var n = e == null ? void 0 : T0(e, t);
            return n === void 0 ? r : n
        }
        _f.exports = w0
    });
    var If = h((vq, bf) => {
        function x0(e, t) {
            return e != null && t in Object(e)
        }
        bf.exports = x0
    });
    var wf = h((mq, Tf) => {
        var A0 = mr(),
            O0 = fr(),
            S0 = we(),
            R0 = tn(),
            C0 = rn(),
            L0 = Ut();

        function P0(e, t, r) {
            t = A0(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = L0(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && C0(i) && R0(a, i) && (S0(e) || O0(e)))
        }
        Tf.exports = P0
    });
    var Af = h((Eq, xf) => {
        var N0 = If(),
            D0 = wf();

        function M0(e, t) {
            return e != null && D0(e, t, N0)
        }
        xf.exports = M0
    });
    var Sf = h((yq, Of) => {
        var F0 = Ui(),
            q0 = fn(),
            k0 = Af(),
            X0 = cn(),
            G0 = Hi(),
            W0 = Vi(),
            U0 = Ut(),
            H0 = 1,
            V0 = 2;

        function B0(e, t) {
            return X0(e) && G0(t) ? W0(U0(e), t) : function(r) {
                var n = q0(r, e);
                return n === void 0 && n === t ? k0(r, e) : F0(t, n, H0 | V0)
            }
        }
        Of.exports = B0
    });
    var dn = h((_q, Rf) => {
        function z0(e) {
            return e
        }
        Rf.exports = z0
    });
    var Ki = h((bq, Cf) => {
        function K0(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Cf.exports = K0
    });
    var Pf = h((Iq, Lf) => {
        var j0 = ln();

        function Y0(e) {
            return function(t) {
                return j0(t, e)
            }
        }
        Lf.exports = Y0
    });
    var Df = h((Tq, Nf) => {
        var Q0 = Ki(),
            $0 = Pf(),
            Z0 = cn(),
            J0 = Ut();

        function eA(e) {
            return Z0(e) ? Q0(J0(e)) : $0(e)
        }
        Nf.exports = eA
    });
    var pt = h((wq, Mf) => {
        var tA = $l(),
            rA = Sf(),
            nA = dn(),
            iA = we(),
            oA = Df();

        function aA(e) {
            return typeof e == "function" ? e : e == null ? nA : typeof e == "object" ? iA(e) ? rA(e[0], e[1]) : tA(e) : oA(e)
        }
        Mf.exports = aA
    });
    var ji = h((xq, Ff) => {
        var sA = pt(),
            uA = _t(),
            cA = gr();

        function lA(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!uA(t)) {
                    var o = sA(r, 3);
                    t = cA(t), r = function(u) {
                        return o(i[u], u, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Ff.exports = lA
    });
    var Yi = h((Aq, qf) => {
        function fA(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        qf.exports = fA
    });
    var Xf = h((Oq, kf) => {
        var dA = /\s/;

        function pA(e) {
            for (var t = e.length; t-- && dA.test(e.charAt(t)););
            return t
        }
        kf.exports = pA
    });
    var Wf = h((Sq, Gf) => {
        var hA = Xf(),
            gA = /^\s+/;

        function vA(e) {
            return e && e.slice(0, hA(e) + 1).replace(gA, "")
        }
        Gf.exports = vA
    });
    var pn = h((Rq, Vf) => {
        var mA = Wf(),
            Uf = et(),
            EA = vr(),
            Hf = 0 / 0,
            yA = /^[-+]0x[0-9a-f]+$/i,
            _A = /^0b[01]+$/i,
            bA = /^0o[0-7]+$/i,
            IA = parseInt;

        function TA(e) {
            if (typeof e == "number") return e;
            if (EA(e)) return Hf;
            if (Uf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Uf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = mA(e);
            var r = _A.test(e);
            return r || bA.test(e) ? IA(e.slice(2), r ? 2 : 8) : yA.test(e) ? Hf : +e
        }
        Vf.exports = TA
    });
    var Kf = h((Cq, zf) => {
        var wA = pn(),
            Bf = 1 / 0,
            xA = 17976931348623157e292;

        function AA(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = wA(e), e === Bf || e === -Bf) {
                var t = e < 0 ? -1 : 1;
                return t * xA
            }
            return e === e ? e : 0
        }
        zf.exports = AA
    });
    var Qi = h((Lq, jf) => {
        var OA = Kf();

        function SA(e) {
            var t = OA(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        jf.exports = SA
    });
    var Qf = h((Pq, Yf) => {
        var RA = Yi(),
            CA = pt(),
            LA = Qi(),
            PA = Math.max;

        function NA(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : LA(r);
            return i < 0 && (i = PA(n + i, 0)), RA(e, CA(t, 3), i)
        }
        Yf.exports = NA
    });
    var $i = h((Nq, $f) => {
        var DA = ji(),
            MA = Qf(),
            FA = DA(MA);
        $f.exports = FA
    });
    var ed = {};
    De(ed, {
        ELEMENT_MATCHES: () => qA,
        FLEX_PREFIXED: () => Zi,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => ht,
        TRANSFORM_STYLE_PREFIXED: () => gn,
        withBrowser: () => hn
    });
    var Jf, ze, hn, qA, Zi, ht, Zf, gn, vn = me(() => {
        "use strict";
        Jf = de($i()), ze = typeof window < "u", hn = (e, t) => ze ? e() : t, qA = hn(() => (0, Jf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Zi = hn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), ht = hn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Zf = ht.split("transform")[0], gn = Zf ? Zf + "TransformStyle" : "transformStyle"
    });
    var Ji = h((Dq, od) => {
        var kA = 4,
            XA = .001,
            GA = 1e-7,
            WA = 10,
            Er = 11,
            mn = 1 / (Er - 1),
            UA = typeof Float32Array == "function";

        function td(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function rd(e, t) {
            return 3 * t - 6 * e
        }

        function nd(e) {
            return 3 * e
        }

        function En(e, t, r) {
            return ((td(t, r) * e + rd(t, r)) * e + nd(t)) * e
        }

        function id(e, t, r) {
            return 3 * td(t, r) * e * e + 2 * rd(t, r) * e + nd(t)
        }

        function HA(e, t, r, n, i) {
            var o, a, u = 0;
            do a = t + (r - t) / 2, o = En(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > GA && ++u < WA);
            return a
        }

        function VA(e, t, r, n) {
            for (var i = 0; i < kA; ++i) {
                var o = id(t, r, n);
                if (o === 0) return t;
                var a = En(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        od.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = UA ? new Float32Array(Er) : new Array(Er);
            if (t !== r || n !== i)
                for (var a = 0; a < Er; ++a) o[a] = En(a * mn, t, n);

            function u(s) {
                for (var l = 0, I = 1, d = Er - 1; I !== d && o[I] <= s; ++I) l += mn;
                --I;
                var y = (s - o[I]) / (o[I + 1] - o[I]),
                    m = l + y * mn,
                    E = id(m, t, n);
                return E >= XA ? VA(s, m, t, n) : E === 0 ? m : HA(s, l, l + mn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : En(u(l), r, i)
            }
        }
    });
    var _r = {};
    De(_r, {
        bounce: () => AO,
        bouncePast: () => OO,
        ease: () => BA,
        easeIn: () => zA,
        easeInOut: () => jA,
        easeOut: () => KA,
        inBack: () => mO,
        inCirc: () => pO,
        inCubic: () => ZA,
        inElastic: () => _O,
        inExpo: () => lO,
        inOutBack: () => yO,
        inOutCirc: () => gO,
        inOutCubic: () => eO,
        inOutElastic: () => IO,
        inOutExpo: () => dO,
        inOutQuad: () => $A,
        inOutQuart: () => nO,
        inOutQuint: () => aO,
        inOutSine: () => cO,
        inQuad: () => YA,
        inQuart: () => tO,
        inQuint: () => iO,
        inSine: () => sO,
        outBack: () => EO,
        outBounce: () => vO,
        outCirc: () => hO,
        outCubic: () => JA,
        outElastic: () => bO,
        outExpo: () => fO,
        outQuad: () => QA,
        outQuart: () => rO,
        outQuint: () => oO,
        outSine: () => uO,
        swingFrom: () => wO,
        swingFromTo: () => TO,
        swingTo: () => xO
    });

    function YA(e) {
        return Math.pow(e, 2)
    }

    function QA(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function $A(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function ZA(e) {
        return Math.pow(e, 3)
    }

    function JA(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function eO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function tO(e) {
        return Math.pow(e, 4)
    }

    function rO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function nO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function iO(e) {
        return Math.pow(e, 5)
    }

    function oO(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function aO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function sO(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function uO(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function cO(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function lO(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function fO(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function dO(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function pO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function hO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function gO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function vO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function mO(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }

    function EO(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function yO(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function _O(e) {
        let t = at,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function bO(e) {
        let t = at,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function IO(e) {
        let t = at,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function TO(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function wO(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }

    function xO(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function AO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function OO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var yr, at, BA, zA, KA, jA, eo = me(() => {
        "use strict";
        yr = de(Ji()), at = 1.70158, BA = (0, yr.default)(.25, .1, .25, 1), zA = (0, yr.default)(.42, 0, 1, 1), KA = (0, yr.default)(0, 0, .58, 1), jA = (0, yr.default)(.42, 0, .58, 1)
    });
    var sd = {};
    De(sd, {
        applyEasing: () => RO,
        createBezierEasing: () => SO,
        optimizeFloat: () => br
    });

    function br(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function SO(e) {
        return (0, ad.default)(...e)
    }

    function RO(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : br(r ? t > 0 ? r(t) : t : t > 0 && e && _r[e] ? _r[e](t) : t)
    }
    var ad, to = me(() => {
        "use strict";
        eo();
        ad = de(Ji())
    });
    var ld = {};
    De(ld, {
        createElementState: () => cd,
        ixElements: () => HO,
        mergeActionState: () => ro
    });

    function cd(e, t, r, n, i) {
        let o = r === CO ? (0, Ht.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Ht.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function ro(e, t, r, n, i) {
        let o = BO(i);
        return (0, Ht.mergeIn)(e, [t, UO, r], n, o)
    }

    function BO(e) {
        let {
            config: t
        } = e;
        return VO.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                u = t[o];
            return a != null && u != null && (r[o] = u), r
        }, {})
    }
    var Ht, Fq, CO, qq, LO, PO, NO, DO, MO, FO, qO, kO, XO, GO, WO, ud, UO, HO, VO, fd = me(() => {
        "use strict";
        Ht = de(Dt());
        Fe();
        ({
            HTML_ELEMENT: Fq,
            PLAIN_OBJECT: CO,
            ABSTRACT_NODE: qq,
            CONFIG_X_VALUE: LO,
            CONFIG_Y_VALUE: PO,
            CONFIG_Z_VALUE: NO,
            CONFIG_VALUE: DO,
            CONFIG_X_UNIT: MO,
            CONFIG_Y_UNIT: FO,
            CONFIG_Z_UNIT: qO,
            CONFIG_UNIT: kO
        } = Se), {
            IX2_SESSION_STOPPED: XO,
            IX2_INSTANCE_ADDED: GO,
            IX2_ELEMENT_STATE_CHANGED: WO
        } = Te, ud = {}, UO = "refState", HO = (e = ud, t = {}) => {
            switch (t.type) {
                case XO:
                    return ud;
                case GO:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: u
                        } = o,
                        s = e;
                        return (0, Ht.getIn)(s, [r, n]) !== n && (s = cd(s, n, a, r, o)),
                        ro(s, r, u, i, o)
                    }
                case WO:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return ro(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        VO = [
            [LO, MO],
            [PO, FO],
            [NO, qO],
            [DO, kO]
        ]
    });
    var dd = h(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });

        function zO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        zO(no, {
            clearPlugin: function() {
                return JO
            },
            createPluginInstance: function() {
                return $O
            },
            getPluginConfig: function() {
                return KO
            },
            getPluginDestination: function() {
                return QO
            },
            getPluginDuration: function() {
                return jO
            },
            getPluginOrigin: function() {
                return YO
            },
            renderPlugin: function() {
                return ZO
            }
        });
        var KO = e => e.value,
            jO = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let r = parseFloat(e.getAttribute("data-duration"));
                return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            YO = e => e || {
                value: 0
            },
            QO = e => ({
                value: e.value
            }),
            $O = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            ZO = (e, t, r) => {
                if (!e) return;
                let n = t[r.actionTypeId].value / 100;
                e.goToFrame(e.frames * n)
            },
            JO = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var hd = h(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });

        function eS(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        eS(io, {
            clearPlugin: function() {
                return lS
            },
            createPluginInstance: function() {
                return uS
            },
            getPluginConfig: function() {
                return iS
            },
            getPluginDestination: function() {
                return sS
            },
            getPluginDuration: function() {
                return oS
            },
            getPluginOrigin: function() {
                return aS
            },
            renderPlugin: function() {
                return cS
            }
        });
        var tS = e => document.querySelector(`[data-w-id="${e}"]`),
            rS = () => window.Webflow.require("spline"),
            nS = (e, t) => e.filter(r => !t.includes(r)),
            iS = (e, t) => e.value[t],
            oS = () => null,
            pd = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            aS = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = nS(n, o);
                    return a.length ? a.reduce((s, l) => (s[l] = pd[l], s), e) : e
                }
                return n.reduce((o, a) => (o[a] = pd[a], o), {})
            },
            sS = e => e.value,
            uS = (e, t) => {
                let r = t ? .config ? .target ? .pluginElement;
                return r ? tS(r) : null
            },
            cS = (e, t, r) => {
                let n = rS(),
                    i = n.getInstance(e),
                    o = r.config.target.objectId,
                    a = u => {
                        if (!u) throw new Error("Invalid spline app passed to renderSpline");
                        let s = o && u.findObjectById(o);
                        if (!s) return;
                        let {
                            PLUGIN_SPLINE: l
                        } = t;
                        l.positionX != null && (s.position.x = l.positionX), l.positionY != null && (s.position.y = l.positionY), l.positionZ != null && (s.position.z = l.positionZ), l.rotationX != null && (s.rotation.x = l.rotationX), l.rotationY != null && (s.rotation.y = l.rotationY), l.rotationZ != null && (s.rotation.z = l.rotationZ), l.scaleX != null && (s.scale.x = l.scaleX), l.scaleY != null && (s.scale.y = l.scaleY), l.scaleZ != null && (s.scale.z = l.scaleZ)
                    };
                i ? a(i.spline) : n.setLoadHandler(e, a)
            },
            lS = () => null
    });
    var ao = h(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });
        Object.defineProperty(oo, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return fS
            }
        });
        var gd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function fS(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                u = (typeof gd[o] == "string" ? gd[o].toLowerCase() : null) || o;
            if (u.startsWith("#")) {
                let s = u.substring(1);
                s.length === 3 || s.length === 4 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16), s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16), s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255))
            } else if (u.startsWith("rgba")) {
                let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (u.startsWith("rgb")) {
                let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (u.startsWith("hsla")) {
                let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(s[0]),
                    I = parseFloat(s[1].replace("%", "")) / 100,
                    d = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let y = (1 - Math.abs(2 * d - 1)) * I,
                    m = y * (1 - Math.abs(l / 60 % 2 - 1)),
                    E = d - y / 2,
                    T, A, w;
                l >= 0 && l < 60 ? (T = y, A = m, w = 0) : l >= 60 && l < 120 ? (T = m, A = y, w = 0) : l >= 120 && l < 180 ? (T = 0, A = y, w = m) : l >= 180 && l < 240 ? (T = 0, A = m, w = y) : l >= 240 && l < 300 ? (T = m, A = 0, w = y) : (T = y, A = 0, w = m), t = Math.round((T + E) * 255), r = Math.round((A + E) * 255), n = Math.round((w + E) * 255)
            } else if (u.startsWith("hsl")) {
                let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(s[0]),
                    I = parseFloat(s[1].replace("%", "")) / 100,
                    d = parseFloat(s[2].replace("%", "")) / 100,
                    y = (1 - Math.abs(2 * d - 1)) * I,
                    m = y * (1 - Math.abs(l / 60 % 2 - 1)),
                    E = d - y / 2,
                    T, A, w;
                l >= 0 && l < 60 ? (T = y, A = m, w = 0) : l >= 60 && l < 120 ? (T = m, A = y, w = 0) : l >= 120 && l < 180 ? (T = 0, A = y, w = m) : l >= 180 && l < 240 ? (T = 0, A = m, w = y) : l >= 240 && l < 300 ? (T = m, A = 0, w = y) : (T = y, A = 0, w = m), t = Math.round((T + E) * 255), r = Math.round((A + E) * 255), n = Math.round((w + E) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var vd = h(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });

        function dS(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        dS(so, {
            clearPlugin: function() {
                return _S
            },
            createPluginInstance: function() {
                return ES
            },
            getPluginConfig: function() {
                return hS
            },
            getPluginDestination: function() {
                return mS
            },
            getPluginDuration: function() {
                return gS
            },
            getPluginOrigin: function() {
                return vS
            },
            renderPlugin: function() {
                return yS
            }
        });
        var pS = ao(),
            hS = (e, t) => e.value[t],
            gS = () => null,
            vS = (e, t) => {
                if (e) return e;
                let r = t.config.value,
                    n = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(n);
                if (r.size != null) return {
                    size: parseInt(i, 10)
                };
                if (r.red != null && r.green != null && r.blue != null) return (0, pS.normalizeColor)(i)
            },
            mS = e => e.value,
            ES = () => null,
            yS = (e, t, r) => {
                let n = r.config.target.objectId,
                    i = r.config.value.unit,
                    {
                        PLUGIN_VARIABLE: o
                    } = t,
                    {
                        size: a,
                        red: u,
                        green: s,
                        blue: l,
                        alpha: I
                    } = o,
                    d;
                a != null && (d = a + i), u != null && l != null && s != null && I != null && (d = `rgba(${u}, ${s}, ${l}, ${I})`), d != null && document.documentElement.style.setProperty(n, d)
            },
            _S = (e, t) => {
                let r = t.config.target.objectId;
                document.documentElement.style.removeProperty(r)
            }
    });
    var Ed = h(lo => {
        "use strict";
        Object.defineProperty(lo, "__esModule", {
            value: !0
        });
        Object.defineProperty(lo, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return wS
            }
        });
        var uo = (Fe(), Qe(Is)),
            bS = co(dd()),
            IS = co(hd()),
            TS = co(vd());

        function md(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (md = function(n) {
                return n ? r : t
            })(e)
        }

        function co(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = md(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var wS = new Map([
            [uo.ActionTypeConsts.PLUGIN_LOTTIE, { ...bS
            }],
            [uo.ActionTypeConsts.PLUGIN_SPLINE, { ...IS
            }],
            [uo.ActionTypeConsts.PLUGIN_VARIABLE, { ...TS
            }]
        ])
    });
    var yd = {};
    De(yd, {
        clearPlugin: () => mo,
        createPluginInstance: () => AS,
        getPluginConfig: () => po,
        getPluginDestination: () => go,
        getPluginDuration: () => xS,
        getPluginOrigin: () => ho,
        isPluginType: () => It,
        renderPlugin: () => vo
    });

    function It(e) {
        return fo.pluginMethodMap.has(e)
    }
    var fo, Tt, po, ho, xS, go, AS, vo, mo, Eo = me(() => {
        "use strict";
        vn();
        fo = de(Ed());
        Tt = e => t => {
            if (!ze) return () => null;
            let r = fo.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, po = Tt("getPluginConfig"), ho = Tt("getPluginOrigin"), xS = Tt("getPluginDuration"), go = Tt("getPluginDestination"), AS = Tt("createPluginInstance"), vo = Tt("renderPlugin"), mo = Tt("clearPlugin")
    });
    var bd = h((Vq, _d) => {
        function OS(e, t) {
            return e == null || e !== e ? t : e
        }
        _d.exports = OS
    });
    var Td = h((Bq, Id) => {
        function SS(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Id.exports = SS
    });
    var xd = h((zq, wd) => {
        function RS(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), u = a.length; u--;) {
                    var s = a[e ? u : ++i];
                    if (r(o[s], s, o) === !1) break
                }
                return t
            }
        }
        wd.exports = RS
    });
    var Od = h((Kq, Ad) => {
        var CS = xd(),
            LS = CS();
        Ad.exports = LS
    });
    var yo = h((jq, Sd) => {
        var PS = Od(),
            NS = gr();

        function DS(e, t) {
            return e && PS(e, t, NS)
        }
        Sd.exports = DS
    });
    var Cd = h((Yq, Rd) => {
        var MS = _t();

        function FS(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!MS(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Rd.exports = FS
    });
    var _o = h((Qq, Ld) => {
        var qS = yo(),
            kS = Cd(),
            XS = kS(qS);
        Ld.exports = XS
    });
    var Nd = h(($q, Pd) => {
        function GS(e, t, r, n, i) {
            return i(e, function(o, a, u) {
                r = n ? (n = !1, o) : t(r, o, a, u)
            }), r
        }
        Pd.exports = GS
    });
    var Md = h((Zq, Dd) => {
        var WS = Td(),
            US = _o(),
            HS = pt(),
            VS = Nd(),
            BS = we();

        function zS(e, t, r) {
            var n = BS(e) ? WS : VS,
                i = arguments.length < 3;
            return n(e, HS(t, 4), r, i, US)
        }
        Dd.exports = zS
    });
    var qd = h((Jq, Fd) => {
        var KS = Yi(),
            jS = pt(),
            YS = Qi(),
            QS = Math.max,
            $S = Math.min;

        function ZS(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = YS(r), i = r < 0 ? QS(n + i, 0) : $S(i, n - 1)), KS(e, jS(t, 3), i, !0)
        }
        Fd.exports = ZS
    });
    var Xd = h((ek, kd) => {
        var JS = ji(),
            eR = qd(),
            tR = JS(eR);
        kd.exports = tR
    });

    function Gd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function rR(e, t) {
        if (Gd(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Gd(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var bo, Wd = me(() => {
        "use strict";
        bo = rR
    });
    var op = {};
    De(op, {
        cleanupHTMLElement: () => JR,
        clearAllStyles: () => ZR,
        clearObjectCache: () => yR,
        getActionListProgress: () => tC,
        getAffectedElements: () => Ao,
        getComputedStyle: () => OR,
        getDestinationValues: () => DR,
        getElementId: () => TR,
        getInstanceId: () => bR,
        getInstanceOrigin: () => CR,
        getItemConfigByKey: () => NR,
        getMaxDurationItemIndex: () => ip,
        getNamespacedParameterId: () => iC,
        getRenderType: () => tp,
        getStyleProp: () => MR,
        mediaQueriesEqual: () => aC,
        observeStore: () => AR,
        reduceListToGroup: () => rC,
        reifyState: () => wR,
        renderHTMLElement: () => FR,
        shallowEqual: () => bo,
        shouldAllowMediaQuery: () => oC,
        shouldNamespaceEventParameter: () => nC,
        stringifyTarget: () => sC
    });

    function yR() {
        yn.clear()
    }

    function bR() {
        return "i" + _R++
    }

    function TR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + IR++
    }

    function wR({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, Tn.default)(e, (a, u) => {
                let {
                    eventTypeId: s
                } = u;
                return a[s] || (a[s] = {}), a[s][u.id] = u, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function AR({
        store: e,
        select: t,
        onChange: r,
        comparator: n = xR
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(s), u = t(i());

        function s() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, u) || (u = l, r(u, e))
        }
        return a
    }

    function Vd(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            }
        }
        return {}
    }

    function Ao({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((C, b) => C.concat(Ao({
            config: {
                target: b
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: u,
            queryDocument: s,
            getChildElements: l,
            getSiblingElements: I,
            matchSelector: d,
            elementContains: y,
            isSiblingNode: m
        } = i, {
            target: E
        } = e;
        if (!E) return [];
        let {
            id: T,
            objectId: A,
            selector: w,
            selectorGuids: N,
            appliesTo: L,
            useEventTarget: F
        } = Vd(E);
        if (A) return [yn.has(A) ? yn.get(A) : yn.set(A, {}).get(A)];
        if (L === _i.PAGE) {
            let C = a(T);
            return C ? [C] : []
        }
        let q = (t ? .action ? .config ? .affectedElements ? ? {})[T || w] || {},
            j = !!(q.id || q.selector),
            K, Q, te, z = t && u(Vd(t.target));
        if (j ? (K = q.limitAffectedElements, Q = z, te = u(q)) : Q = te = u({
                id: T,
                selector: w,
                selectorGuids: N
            }), t && F) {
            let C = r && (te || F === !0) ? [r] : s(z);
            if (te) {
                if (F === vR) return s(te).filter(b => C.some(P => y(b, P)));
                if (F === Ud) return s(te).filter(b => C.some(P => y(P, b)));
                if (F === Hd) return s(te).filter(b => C.some(P => m(P, b)))
            }
            return C
        }
        return Q == null || te == null ? [] : ze && n ? s(te).filter(C => n.contains(C)) : K === Ud ? s(Q, te) : K === gR ? l(s(Q)).filter(d(te)) : K === Hd ? I(s(Q)).filter(d(te)) : s(te)
    }

    function OR({
        element: e,
        actionItem: t
    }) {
        if (!ze) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case jt:
            case Yt:
            case Qt:
            case $t:
            case xn:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function CR(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (It(a)) return ho(a)(t[a], n);
        switch (n.actionTypeId) {
            case Bt:
            case zt:
            case Kt:
            case xr:
                return t[n.actionTypeId] || Oo[n.actionTypeId];
            case Ar:
                return SR(t[n.actionTypeId], n.config.filters);
            case Or:
                return RR(t[n.actionTypeId], n.config.fontVariations);
            case Zd:
                return {
                    value: (0, st.default)(parseFloat(o(e, bn)), 1)
                };
            case jt:
                {
                    let u = o(e, tt),
                        s = o(e, rt),
                        l, I;
                    return n.config.widthUnit === gt ? l = Bd.test(u) ? parseFloat(u) : parseFloat(r.width) : l = (0, st.default)(parseFloat(u), parseFloat(r.width)),
                    n.config.heightUnit === gt ? I = Bd.test(s) ? parseFloat(s) : parseFloat(r.height) : I = (0, st.default)(parseFloat(s), parseFloat(r.height)),
                    {
                        widthValue: l,
                        heightValue: I
                    }
                }
            case Yt:
            case Qt:
            case $t:
                return YR({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case xn:
                return {
                    value: (0, st.default)(o(e, In), r.display)
                };
            case ER:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function DR({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (It(t.actionTypeId)) return go(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Bt:
            case zt:
            case Kt:
            case xr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case jt:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: u
                    } = t.config,
                    {
                        widthValue: s,
                        heightValue: l
                    } = t.config;
                    if (!ze) return {
                        widthValue: s,
                        heightValue: l
                    };
                    if (a === gt) {
                        let I = n(e, tt);
                        i(e, tt, ""), s = o(e, "offsetWidth"), i(e, tt, I)
                    }
                    if (u === gt) {
                        let I = n(e, rt);
                        i(e, rt, ""), l = o(e, "offsetHeight"), i(e, rt, I)
                    }
                    return {
                        widthValue: s,
                        heightValue: l
                    }
                }
            case Yt:
            case Qt:
            case $t:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a,
                        globalSwatchId: u
                    } = t.config;
                    if (u && u.startsWith("--")) {
                        let {
                            getStyle: s
                        } = r, l = s(e, u), I = (0, jd.normalizeColor)(l);
                        return {
                            rValue: I.red,
                            gValue: I.green,
                            bValue: I.blue,
                            aValue: I.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Ar:
                return t.config.filters.reduce(LR, {});
            case Or:
                return t.config.fontVariations.reduce(PR, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function tp(e) {
        if (/^TRANSFORM_/.test(e)) return Qd;
        if (/^STYLE_/.test(e)) return wo;
        if (/^GENERAL_/.test(e)) return To;
        if (/^PLUGIN_/.test(e)) return $d
    }

    function MR(e, t) {
        return e === wo ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function FR(e, t, r, n, i, o, a, u, s) {
        switch (u) {
            case Qd:
                return WR(e, t, r, i, a);
            case wo:
                return QR(e, t, r, i, o, a);
            case To:
                return $R(e, i, a);
            case $d:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (It(l)) return vo(l)(s, t, i)
                }
        }
    }

    function WR(e, t, r, n, i) {
        let o = GR.map(u => {
                let s = Oo[u],
                    {
                        xValue: l = s.xValue,
                        yValue: I = s.yValue,
                        zValue: d = s.zValue,
                        xUnit: y = "",
                        yUnit: m = "",
                        zUnit: E = ""
                    } = t[u] || {};
                switch (u) {
                    case Bt:
                        return `${oR}(${l}${y}, ${I}${m}, ${d}${E})`;
                    case zt:
                        return `${aR}(${l}${y}, ${I}${m}, ${d}${E})`;
                    case Kt:
                        return `${sR}(${l}${y}) ${uR}(${I}${m}) ${cR}(${d}${E})`;
                    case xr:
                        return `${lR}(${l}${y}, ${I}${m})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        wt(e, ht, i), a(e, ht, o), VR(n, r) && a(e, gn, fR)
    }

    function UR(e, t, r, n) {
        let i = (0, Tn.default)(t, (a, u, s) => `${a} ${s}(${u}${XR(s,r)})`, ""),
            {
                setStyle: o
            } = n;
        wt(e, Ir, n), o(e, Ir, i)
    }

    function HR(e, t, r, n) {
        let i = (0, Tn.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        wt(e, Tr, n), o(e, Tr, i)
    }

    function VR({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === Bt && n !== void 0 || e === zt && n !== void 0 || e === Kt && (t !== void 0 || r !== void 0)
    }

    function jR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function YR({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = xo[t],
            o = n(e, i),
            a = zR.test(o) ? o : r[i],
            u = jR(KR, a).split(wr);
        return {
            rValue: (0, st.default)(parseInt(u[0], 10), 255),
            gValue: (0, st.default)(parseInt(u[1], 10), 255),
            bValue: (0, st.default)(parseInt(u[2], 10), 255),
            aValue: (0, st.default)(parseFloat(u[3]), 1)
        }
    }

    function QR(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case jt:
                {
                    let {
                        widthUnit: u = "",
                        heightUnit: s = ""
                    } = n.config,
                    {
                        widthValue: l,
                        heightValue: I
                    } = r;l !== void 0 && (u === gt && (u = "px"), wt(e, tt, o), a(e, tt, l + u)),
                    I !== void 0 && (s === gt && (s = "px"), wt(e, rt, o), a(e, rt, I + s));
                    break
                }
            case Ar:
                {
                    UR(e, r, n.config, o);
                    break
                }
            case Or:
                {
                    HR(e, r, n.config, o);
                    break
                }
            case Yt:
            case Qt:
            case $t:
                {
                    let u = xo[n.actionTypeId],
                        s = Math.round(r.rValue),
                        l = Math.round(r.gValue),
                        I = Math.round(r.bValue),
                        d = r.aValue;wt(e, u, o),
                    a(e, u, d >= 1 ? `rgb(${s},${l},${I})` : `rgba(${s},${l},${I},${d})`);
                    break
                }
            default:
                {
                    let {
                        unit: u = ""
                    } = n.config;wt(e, i, o),
                    a(e, i, r.value + u);
                    break
                }
        }
    }

    function $R(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case xn:
                {
                    let {
                        value: i
                    } = t.config;i === dR && ze ? n(e, In, Zi) : n(e, In, i);
                    return
                }
        }
    }

    function wt(e, t, r) {
        if (!ze) return;
        let n = ep[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, Vt);
        if (!a) {
            o(e, Vt, n);
            return
        }
        let u = a.split(wr).map(Jd);
        u.indexOf(n) === -1 && o(e, Vt, u.concat(n).join(wr))
    }

    function rp(e, t, r) {
        if (!ze) return;
        let n = ep[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, Vt);
        !a || a.indexOf(n) === -1 || o(e, Vt, a.split(wr).map(Jd).filter(u => u !== n).join(wr))
    }

    function ZR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: u
                } = a.action,
                {
                    actionListId: s
                } = u,
                l = i[s];
            l && zd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            zd({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function zd({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Kd({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(u => {
                Kd({
                    actionGroup: u,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Kd({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, u;
            It(o) ? u = s => mo(o)(s, i) : u = np({
                effect: eC,
                actionTypeId: o,
                elementApi: r
            }), Ao({
                config: a,
                event: t,
                elementApi: r
            }).forEach(u)
        })
    }

    function JR(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === jt) {
            let {
                config: a
            } = t;
            a.widthUnit === gt && n(e, tt, ""), a.heightUnit === gt && n(e, rt, "")
        }
        i(e, Vt) && np({
            effect: rp,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function eC(e, t, r) {
        let {
            setStyle: n
        } = r;
        rp(e, t, r), n(e, t, ""), t === ht && n(e, gn, "")
    }

    function ip(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function tC(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, u = 0;
        return r.forEach((s, l) => {
            if (n && l === 0) return;
            let {
                actionItems: I
            } = s, d = I[ip(I)], {
                config: y,
                actionTypeId: m
            } = d;
            i.id === d.id && (u = a + o);
            let E = tp(m) === To ? 0 : y.duration;
            a += y.delay + E
        }), a > 0 ? br(u / a) : 0
    }

    function rC({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = u => (o.push((0, wn.mergeIn)(u, ["config"], {
            delay: 0,
            duration: 0
        })), u.id === t);
        return n && n.some(({
            actionItems: u
        }) => u.some(a)), i && i.some(u => {
            let {
                continuousActionGroups: s
            } = u;
            return s.some(({
                actionItems: l
            }) => l.some(a))
        }), (0, wn.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function nC(e, {
        basedOn: t
    }) {
        return e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null) || e === Be.MOUSE_MOVE && t === Je.ELEMENT
    }

    function iC(e, t) {
        return e + mR + t
    }

    function oC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function aC(e, t) {
        return bo(e && e.sort(), t && t.sort())
    }

    function sC(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Io + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Io + r + Io + n
    }
    var st, Tn, _n, wn, jd, nR, iR, oR, aR, sR, uR, cR, lR, fR, dR, bn, Ir, Tr, tt, rt, Yd, pR, hR, Ud, gR, Hd, vR, In, Vt, gt, wr, mR, Io, Qd, To, wo, $d, Bt, zt, Kt, xr, Zd, Ar, Or, jt, Yt, Qt, $t, xn, ER, Jd, xo, ep, yn, _R, IR, xR, Bd, SR, RR, LR, PR, NR, Oo, qR, kR, XR, GR, BR, zR, KR, np, ap = me(() => {
        "use strict";
        st = de(bd()), Tn = de(Md()), _n = de(Xd()), wn = de(Dt());
        Fe();
        Wd();
        to();
        jd = de(ao());
        Eo();
        vn();
        ({
            BACKGROUND: nR,
            TRANSFORM: iR,
            TRANSLATE_3D: oR,
            SCALE_3D: aR,
            ROTATE_X: sR,
            ROTATE_Y: uR,
            ROTATE_Z: cR,
            SKEW: lR,
            PRESERVE_3D: fR,
            FLEX: dR,
            OPACITY: bn,
            FILTER: Ir,
            FONT_VARIATION_SETTINGS: Tr,
            WIDTH: tt,
            HEIGHT: rt,
            BACKGROUND_COLOR: Yd,
            BORDER_COLOR: pR,
            COLOR: hR,
            CHILDREN: Ud,
            IMMEDIATE_CHILDREN: gR,
            SIBLINGS: Hd,
            PARENT: vR,
            DISPLAY: In,
            WILL_CHANGE: Vt,
            AUTO: gt,
            COMMA_DELIMITER: wr,
            COLON_DELIMITER: mR,
            BAR_DELIMITER: Io,
            RENDER_TRANSFORM: Qd,
            RENDER_GENERAL: To,
            RENDER_STYLE: wo,
            RENDER_PLUGIN: $d
        } = Se), {
            TRANSFORM_MOVE: Bt,
            TRANSFORM_SCALE: zt,
            TRANSFORM_ROTATE: Kt,
            TRANSFORM_SKEW: xr,
            STYLE_OPACITY: Zd,
            STYLE_FILTER: Ar,
            STYLE_FONT_VARIATION: Or,
            STYLE_SIZE: jt,
            STYLE_BACKGROUND_COLOR: Yt,
            STYLE_BORDER: Qt,
            STYLE_TEXT_COLOR: $t,
            GENERAL_DISPLAY: xn,
            OBJECT_VALUE: ER
        } = Me, Jd = e => e.trim(), xo = Object.freeze({
            [Yt]: Yd,
            [Qt]: pR,
            [$t]: hR
        }), ep = Object.freeze({
            [ht]: iR,
            [Yd]: nR,
            [bn]: bn,
            [Ir]: Ir,
            [tt]: tt,
            [rt]: rt,
            [Tr]: Tr
        }), yn = new Map;
        _R = 1;
        IR = 1;
        xR = (e, t) => e === t;
        Bd = /px/, SR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = qR[n.type]), r), e || {}), RR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = kR[n.type] || n.defaultValue || 0), r), e || {});
        LR = (e, t) => (t && (e[t.type] = t.value || 0), e), PR = (e, t) => (t && (e[t.type] = t.value || 0), e), NR = (e, t, r) => {
            if (It(e)) return po(e)(r, t);
            switch (e) {
                case Ar:
                    {
                        let n = (0, _n.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Or:
                    {
                        let n = (0, _n.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Oo = {
            [Bt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [zt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Kt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [xr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, qR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), kR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), XR = (e, t) => {
            let r = (0, _n.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, GR = Object.keys(Oo);
        BR = "\\(([^)]+)\\)", zR = /^rgb/, KR = RegExp(`rgba?${BR}`);
        np = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case Bt:
                case zt:
                case Kt:
                case xr:
                    e(n, ht, r);
                    break;
                case Ar:
                    e(n, Ir, r);
                    break;
                case Or:
                    e(n, Tr, r);
                    break;
                case Zd:
                    e(n, bn, r);
                    break;
                case jt:
                    e(n, tt, r), e(n, rt, r);
                    break;
                case Yt:
                case Qt:
                case $t:
                    e(n, xo[t], r);
                    break;
                case xn:
                    e(n, In, r);
                    break
            }
        }
    });
    var xt = h(So => {
        "use strict";
        Object.defineProperty(So, "__esModule", {
            value: !0
        });

        function uC(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        uC(So, {
            IX2BrowserSupport: function() {
                return cC
            },
            IX2EasingUtils: function() {
                return fC
            },
            IX2Easings: function() {
                return lC
            },
            IX2ElementsReducer: function() {
                return dC
            },
            IX2VanillaPlugins: function() {
                return pC
            },
            IX2VanillaUtils: function() {
                return hC
            }
        });
        var cC = Zt((vn(), Qe(ed))),
            lC = Zt((eo(), Qe(_r))),
            fC = Zt((to(), Qe(sd))),
            dC = Zt((fd(), Qe(ld))),
            pC = Zt((Eo(), Qe(yd))),
            hC = Zt((ap(), Qe(op)));

        function sp(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (sp = function(n) {
                return n ? r : t
            })(e)
        }

        function Zt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = sp(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
    });
    var On, ut, gC, vC, mC, EC, yC, _C, An, up, bC, IC, Ro, TC, wC, xC, AC, cp, lp = me(() => {
        "use strict";
        Fe();
        On = de(xt()), ut = de(Dt()), {
            IX2_RAW_DATA_IMPORTED: gC,
            IX2_SESSION_STOPPED: vC,
            IX2_INSTANCE_ADDED: mC,
            IX2_INSTANCE_STARTED: EC,
            IX2_INSTANCE_REMOVED: yC,
            IX2_ANIMATION_FRAME_CHANGED: _C
        } = Te, {
            optimizeFloat: An,
            applyEasing: up,
            createBezierEasing: bC
        } = On.IX2EasingUtils, {
            RENDER_GENERAL: IC
        } = Se, {
            getItemConfigByKey: Ro,
            getRenderType: TC,
            getStyleProp: wC
        } = On.IX2VanillaUtils, xC = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: u,
                actionTypeId: s,
                customEasingFn: l,
                skipMotion: I,
                skipToValue: d
            } = e, {
                parameters: y
            } = t.payload, m = Math.max(1 - a, .01), E = y[n];
            E == null && (m = 1, E = u);
            let T = Math.max(E, 0) || 0,
                A = An(T - r),
                w = I ? d : An(r + A * m),
                N = w * 100;
            if (w === r && e.current) return e;
            let L, F, k, q;
            for (let K = 0, {
                    length: Q
                } = i; K < Q; K++) {
                let {
                    keyframe: te,
                    actionItems: z
                } = i[K];
                if (K === 0 && (L = z[0]), N >= te) {
                    L = z[0];
                    let C = i[K + 1],
                        b = C && N !== te;
                    F = b ? C.actionItems[0] : null, b && (k = te / 100, q = (C.keyframe - te) / 100)
                }
            }
            let j = {};
            if (L && !F)
                for (let K = 0, {
                        length: Q
                    } = o; K < Q; K++) {
                    let te = o[K];
                    j[te] = Ro(s, te, L.config)
                } else if (L && F && k !== void 0 && q !== void 0) {
                    let K = (w - k) / q,
                        Q = L.config.easing,
                        te = up(Q, K, l);
                    for (let z = 0, {
                            length: C
                        } = o; z < C; z++) {
                        let b = o[z],
                            P = Ro(s, b, L.config),
                            ee = (Ro(s, b, F.config) - P) * te + P;
                        j[b] = ee
                    }
                }
            return (0, ut.merge)(e, {
                position: w,
                current: j
            })
        }, AC = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: u,
                actionItem: s,
                destination: l,
                destinationKeys: I,
                pluginDuration: d,
                instanceDelay: y,
                customEasingFn: m,
                skipMotion: E
            } = e, T = s.config.easing, {
                duration: A,
                delay: w
            } = s.config;
            d != null && (A = d), w = y ? ? w, a === IC ? A = 0 : (o || E) && (A = w = 0);
            let {
                now: N
            } = t.payload;
            if (r && n) {
                let L = N - (i + w);
                if (u) {
                    let K = N - i,
                        Q = A + w,
                        te = An(Math.min(Math.max(0, K / Q), 1));
                    e = (0, ut.set)(e, "verboseTimeElapsed", Q * te)
                }
                if (L < 0) return e;
                let F = An(Math.min(Math.max(0, L / A), 1)),
                    k = up(T, F, m),
                    q = {},
                    j = null;
                return I.length && (j = I.reduce((K, Q) => {
                    let te = l[Q],
                        z = parseFloat(n[Q]) || 0,
                        b = (parseFloat(te) - z) * k + z;
                    return K[Q] = b, K
                }, {})), q.current = j, q.position = F, F === 1 && (q.active = !1, q.complete = !0), (0, ut.merge)(e, q)
            }
            return e
        }, cp = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case gC:
                    return t.payload.ixInstances || Object.freeze({});
                case vC:
                    return Object.freeze({});
                case mC:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: u,
                            actionListId: s,
                            groupIndex: l,
                            isCarrier: I,
                            origin: d,
                            destination: y,
                            immediate: m,
                            verbose: E,
                            continuous: T,
                            parameterId: A,
                            actionGroups: w,
                            smoothing: N,
                            restingValue: L,
                            pluginInstance: F,
                            pluginDuration: k,
                            instanceDelay: q,
                            skipMotion: j,
                            skipToValue: K
                        } = t.payload,
                        {
                            actionTypeId: Q
                        } = i,
                        te = TC(Q),
                        z = wC(te, Q),
                        C = Object.keys(y).filter(P => y[P] != null && typeof y[P] != "string"),
                        {
                            easing: b
                        } = i.config;
                        return (0, ut.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: d,
                            destination: y,
                            destinationKeys: C,
                            immediate: m,
                            verbose: E,
                            current: null,
                            actionItem: i,
                            actionTypeId: Q,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: u,
                            actionListId: s,
                            groupIndex: l,
                            renderType: te,
                            isCarrier: I,
                            styleProp: z,
                            continuous: T,
                            parameterId: A,
                            actionGroups: w,
                            smoothing: N,
                            restingValue: L,
                            pluginInstance: F,
                            pluginDuration: k,
                            instanceDelay: q,
                            skipMotion: j,
                            skipToValue: K,
                            customEasingFn: Array.isArray(b) && b.length === 4 ? bC(b) : void 0
                        })
                    }
                case EC:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, ut.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case yC:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let u = i[a];
                            u !== r && (n[u] = e[u])
                        }
                        return n
                    }
                case _C:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                u = e[a],
                                s = u.continuous ? xC : AC;
                            r = (0, ut.set)(r, a, s(u, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var OC, SC, RC, fp, dp = me(() => {
        "use strict";
        Fe();
        ({
            IX2_RAW_DATA_IMPORTED: OC,
            IX2_SESSION_STOPPED: SC,
            IX2_PARAMETER_CHANGED: RC
        } = Te), fp = (e = {}, t) => {
            switch (t.type) {
                case OC:
                    return t.payload.ixParameters || {};
                case SC:
                    return {};
                case RC:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var gp = {};
    De(gp, {
        default: () => LC
    });
    var pp, hp, CC, LC, vp = me(() => {
        "use strict";
        pp = de(yi());
        ws();
        Bs();
        js();
        hp = de(xt());
        lp();
        dp();
        ({
            ixElements: CC
        } = hp.IX2ElementsReducer), LC = (0, pp.combineReducers)({
            ixData: Ts,
            ixRequest: Vs,
            ixSession: Ks,
            ixElements: CC,
            ixInstances: cp,
            ixParameters: fp
        })
    });
    var Ep = h((Ek, mp) => {
        var PC = ft(),
            NC = we(),
            DC = ot(),
            MC = "[object String]";

        function FC(e) {
            return typeof e == "string" || !NC(e) && DC(e) && PC(e) == MC
        }
        mp.exports = FC
    });
    var _p = h((yk, yp) => {
        var qC = Ki(),
            kC = qC("length");
        yp.exports = kC
    });
    var Ip = h((_k, bp) => {
        var XC = "\\ud800-\\udfff",
            GC = "\\u0300-\\u036f",
            WC = "\\ufe20-\\ufe2f",
            UC = "\\u20d0-\\u20ff",
            HC = GC + WC + UC,
            VC = "\\ufe0e\\ufe0f",
            BC = "\\u200d",
            zC = RegExp("[" + BC + XC + HC + VC + "]");

        function KC(e) {
            return zC.test(e)
        }
        bp.exports = KC
    });
    var Lp = h((bk, Cp) => {
        var wp = "\\ud800-\\udfff",
            jC = "\\u0300-\\u036f",
            YC = "\\ufe20-\\ufe2f",
            QC = "\\u20d0-\\u20ff",
            $C = jC + YC + QC,
            ZC = "\\ufe0e\\ufe0f",
            JC = "[" + wp + "]",
            Co = "[" + $C + "]",
            Lo = "\\ud83c[\\udffb-\\udfff]",
            eL = "(?:" + Co + "|" + Lo + ")",
            xp = "[^" + wp + "]",
            Ap = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Op = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            tL = "\\u200d",
            Sp = eL + "?",
            Rp = "[" + ZC + "]?",
            rL = "(?:" + tL + "(?:" + [xp, Ap, Op].join("|") + ")" + Rp + Sp + ")*",
            nL = Rp + Sp + rL,
            iL = "(?:" + [xp + Co + "?", Co, Ap, Op, JC].join("|") + ")",
            Tp = RegExp(Lo + "(?=" + Lo + ")|" + iL + nL, "g");

        function oL(e) {
            for (var t = Tp.lastIndex = 0; Tp.test(e);) ++t;
            return t
        }
        Cp.exports = oL
    });
    var Np = h((Ik, Pp) => {
        var aL = _p(),
            sL = Ip(),
            uL = Lp();

        function cL(e) {
            return sL(e) ? uL(e) : aL(e)
        }
        Pp.exports = cL
    });
    var Mp = h((Tk, Dp) => {
        var lL = an(),
            fL = sn(),
            dL = _t(),
            pL = Ep(),
            hL = Np(),
            gL = "[object Map]",
            vL = "[object Set]";

        function mL(e) {
            if (e == null) return 0;
            if (dL(e)) return pL(e) ? hL(e) : e.length;
            var t = fL(e);
            return t == gL || t == vL ? e.size : lL(e).length
        }
        Dp.exports = mL
    });
    var qp = h((wk, Fp) => {
        var EL = "Expected a function";

        function yL(e) {
            if (typeof e != "function") throw new TypeError(EL);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Fp.exports = yL
    });
    var Po = h((xk, kp) => {
        var _L = dt(),
            bL = function() {
                try {
                    var e = _L(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        kp.exports = bL
    });
    var No = h((Ak, Gp) => {
        var Xp = Po();

        function IL(e, t, r) {
            t == "__proto__" && Xp ? Xp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Gp.exports = IL
    });
    var Up = h((Ok, Wp) => {
        var TL = No(),
            wL = Yr(),
            xL = Object.prototype,
            AL = xL.hasOwnProperty;

        function OL(e, t, r) {
            var n = e[t];
            (!(AL.call(e, t) && wL(n, r)) || r === void 0 && !(t in e)) && TL(e, t, r)
        }
        Wp.exports = OL
    });
    var Bp = h((Sk, Vp) => {
        var SL = Up(),
            RL = mr(),
            CL = tn(),
            Hp = et(),
            LL = Ut();

        function PL(e, t, r, n) {
            if (!Hp(e)) return e;
            t = RL(t, e);
            for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o;) {
                var s = LL(t[i]),
                    l = r;
                if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
                if (i != a) {
                    var I = u[s];
                    l = n ? n(I, s, u) : void 0, l === void 0 && (l = Hp(I) ? I : CL(t[i + 1]) ? [] : {})
                }
                SL(u, s, l), u = u[s]
            }
            return e
        }
        Vp.exports = PL
    });
    var Kp = h((Rk, zp) => {
        var NL = ln(),
            DL = Bp(),
            ML = mr();

        function FL(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    u = NL(e, a);
                r(u, a) && DL(o, ML(a, e), u)
            }
            return o
        }
        zp.exports = FL
    });
    var Yp = h((Ck, jp) => {
        var qL = Jr(),
            kL = ai(),
            XL = Pi(),
            GL = Li(),
            WL = Object.getOwnPropertySymbols,
            UL = WL ? function(e) {
                for (var t = []; e;) qL(t, XL(e)), e = kL(e);
                return t
            } : GL;
        jp.exports = UL
    });
    var $p = h((Lk, Qp) => {
        function HL(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Qp.exports = HL
    });
    var Jp = h((Pk, Zp) => {
        var VL = et(),
            BL = on(),
            zL = $p(),
            KL = Object.prototype,
            jL = KL.hasOwnProperty;

        function YL(e) {
            if (!VL(e)) return zL(e);
            var t = BL(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !jL.call(e, n)) || r.push(n);
            return r
        }
        Zp.exports = YL
    });
    var th = h((Nk, eh) => {
        var QL = Di(),
            $L = Jp(),
            ZL = _t();

        function JL(e) {
            return ZL(e) ? QL(e, !0) : $L(e)
        }
        eh.exports = JL
    });
    var nh = h((Dk, rh) => {
        var eP = Ci(),
            tP = Yp(),
            rP = th();

        function nP(e) {
            return eP(e, rP, tP)
        }
        rh.exports = nP
    });
    var oh = h((Mk, ih) => {
        var iP = zi(),
            oP = pt(),
            aP = Kp(),
            sP = nh();

        function uP(e, t) {
            if (e == null) return {};
            var r = iP(sP(e), function(n) {
                return [n]
            });
            return t = oP(t), aP(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        ih.exports = uP
    });
    var sh = h((Fk, ah) => {
        var cP = pt(),
            lP = qp(),
            fP = oh();

        function dP(e, t) {
            return fP(e, lP(cP(t)))
        }
        ah.exports = dP
    });
    var ch = h((qk, uh) => {
        var pP = an(),
            hP = sn(),
            gP = fr(),
            vP = we(),
            mP = _t(),
            EP = en(),
            yP = on(),
            _P = nn(),
            bP = "[object Map]",
            IP = "[object Set]",
            TP = Object.prototype,
            wP = TP.hasOwnProperty;

        function xP(e) {
            if (e == null) return !0;
            if (mP(e) && (vP(e) || typeof e == "string" || typeof e.splice == "function" || EP(e) || _P(e) || gP(e))) return !e.length;
            var t = hP(e);
            if (t == bP || t == IP) return !e.size;
            if (yP(e)) return !pP(e).length;
            for (var r in e)
                if (wP.call(e, r)) return !1;
            return !0
        }
        uh.exports = xP
    });
    var fh = h((kk, lh) => {
        var AP = No(),
            OP = yo(),
            SP = pt();

        function RP(e, t) {
            var r = {};
            return t = SP(t, 3), OP(e, function(n, i, o) {
                AP(r, i, t(n, i, o))
            }), r
        }
        lh.exports = RP
    });
    var ph = h((Xk, dh) => {
        function CP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        dh.exports = CP
    });
    var gh = h((Gk, hh) => {
        var LP = dn();

        function PP(e) {
            return typeof e == "function" ? e : LP
        }
        hh.exports = PP
    });
    var mh = h((Wk, vh) => {
        var NP = ph(),
            DP = _o(),
            MP = gh(),
            FP = we();

        function qP(e, t) {
            var r = FP(e) ? NP : DP;
            return r(e, MP(t))
        }
        vh.exports = qP
    });
    var yh = h((Uk, Eh) => {
        var kP = Ve(),
            XP = function() {
                return kP.Date.now()
            };
        Eh.exports = XP
    });
    var Ih = h((Hk, bh) => {
        var GP = et(),
            Do = yh(),
            _h = pn(),
            WP = "Expected a function",
            UP = Math.max,
            HP = Math.min;

        function VP(e, t, r) {
            var n, i, o, a, u, s, l = 0,
                I = !1,
                d = !1,
                y = !0;
            if (typeof e != "function") throw new TypeError(WP);
            t = _h(t) || 0, GP(r) && (I = !!r.leading, d = "maxWait" in r, o = d ? UP(_h(r.maxWait) || 0, t) : o, y = "trailing" in r ? !!r.trailing : y);

            function m(q) {
                var j = n,
                    K = i;
                return n = i = void 0, l = q, a = e.apply(K, j), a
            }

            function E(q) {
                return l = q, u = setTimeout(w, t), I ? m(q) : a
            }

            function T(q) {
                var j = q - s,
                    K = q - l,
                    Q = t - j;
                return d ? HP(Q, o - K) : Q
            }

            function A(q) {
                var j = q - s,
                    K = q - l;
                return s === void 0 || j >= t || j < 0 || d && K >= o
            }

            function w() {
                var q = Do();
                if (A(q)) return N(q);
                u = setTimeout(w, T(q))
            }

            function N(q) {
                return u = void 0, y && n ? m(q) : (n = i = void 0, a)
            }

            function L() {
                u !== void 0 && clearTimeout(u), l = 0, n = s = i = u = void 0
            }

            function F() {
                return u === void 0 ? a : N(Do())
            }

            function k() {
                var q = Do(),
                    j = A(q);
                if (n = arguments, i = this, s = q, j) {
                    if (u === void 0) return E(s);
                    if (d) return clearTimeout(u), u = setTimeout(w, t), m(s)
                }
                return u === void 0 && (u = setTimeout(w, t)), a
            }
            return k.cancel = L, k.flush = F, k
        }
        bh.exports = VP
    });
    var wh = h((Vk, Th) => {
        var BP = Ih(),
            zP = et(),
            KP = "Expected a function";

        function jP(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(KP);
            return zP(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), BP(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Th.exports = jP
    });
    var Ah = {};
    De(Ah, {
        actionListPlaybackChanged: () => er,
        animationFrameChanged: () => Rn,
        clearRequested: () => yN,
        elementStateChanged: () => Uo,
        eventListenerAdded: () => Sn,
        eventStateChanged: () => Xo,
        instanceAdded: () => Go,
        instanceRemoved: () => Wo,
        instanceStarted: () => Cn,
        mediaQueriesDefined: () => Vo,
        parameterChanged: () => Jt,
        playbackRequested: () => mN,
        previewRequested: () => vN,
        rawDataImported: () => Mo,
        sessionInitialized: () => Fo,
        sessionStarted: () => qo,
        sessionStopped: () => ko,
        stopRequested: () => EN,
        testFrameRendered: () => _N,
        viewportWidthChanged: () => Ho
    });
    var xh, YP, QP, $P, ZP, JP, eN, tN, rN, nN, iN, oN, aN, sN, uN, cN, lN, fN, dN, pN, hN, gN, Mo, Fo, qo, ko, vN, mN, EN, yN, Sn, _N, Xo, Rn, Jt, Go, Cn, Wo, Uo, er, Ho, Vo, Ln = me(() => {
        "use strict";
        Fe();
        xh = de(xt()), {
            IX2_RAW_DATA_IMPORTED: YP,
            IX2_SESSION_INITIALIZED: QP,
            IX2_SESSION_STARTED: $P,
            IX2_SESSION_STOPPED: ZP,
            IX2_PREVIEW_REQUESTED: JP,
            IX2_PLAYBACK_REQUESTED: eN,
            IX2_STOP_REQUESTED: tN,
            IX2_CLEAR_REQUESTED: rN,
            IX2_EVENT_LISTENER_ADDED: nN,
            IX2_TEST_FRAME_RENDERED: iN,
            IX2_EVENT_STATE_CHANGED: oN,
            IX2_ANIMATION_FRAME_CHANGED: aN,
            IX2_PARAMETER_CHANGED: sN,
            IX2_INSTANCE_ADDED: uN,
            IX2_INSTANCE_STARTED: cN,
            IX2_INSTANCE_REMOVED: lN,
            IX2_ELEMENT_STATE_CHANGED: fN,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: dN,
            IX2_VIEWPORT_WIDTH_CHANGED: pN,
            IX2_MEDIA_QUERIES_DEFINED: hN
        } = Te, {
            reifyState: gN
        } = xh.IX2VanillaUtils, Mo = e => ({
            type: YP,
            payload: { ...gN(e)
            }
        }), Fo = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: QP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), qo = () => ({
            type: $P
        }), ko = () => ({
            type: ZP
        }), vN = ({
            rawData: e,
            defer: t
        }) => ({
            type: JP,
            payload: {
                defer: t,
                rawData: e
            }
        }), mN = ({
            actionTypeId: e = Me.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: u,
            rawData: s
        }) => ({
            type: eN,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: u,
                rawData: s
            }
        }), EN = e => ({
            type: tN,
            payload: {
                actionListId: e
            }
        }), yN = () => ({
            type: rN
        }), Sn = (e, t) => ({
            type: nN,
            payload: {
                target: e,
                listenerParams: t
            }
        }), _N = (e = 1) => ({
            type: iN,
            payload: {
                step: e
            }
        }), Xo = (e, t) => ({
            type: oN,
            payload: {
                stateKey: e,
                newState: t
            }
        }), Rn = (e, t) => ({
            type: aN,
            payload: {
                now: e,
                parameters: t
            }
        }), Jt = (e, t) => ({
            type: sN,
            payload: {
                key: e,
                value: t
            }
        }), Go = e => ({
            type: uN,
            payload: { ...e
            }
        }), Cn = (e, t) => ({
            type: cN,
            payload: {
                instanceId: e,
                time: t
            }
        }), Wo = e => ({
            type: lN,
            payload: {
                instanceId: e
            }
        }), Uo = (e, t, r, n) => ({
            type: fN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), er = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: dN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Ho = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: pN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), Vo = () => ({
            type: hN
        })
    });
    var Pe = {};
    De(Pe, {
        elementContains: () => Ko,
        getChildElements: () => CN,
        getClosestElement: () => Sr,
        getProperty: () => xN,
        getQuerySelector: () => zo,
        getRefType: () => jo,
        getSiblingElements: () => LN,
        getStyle: () => wN,
        getValidDocument: () => ON,
        isSiblingNode: () => RN,
        matchSelector: () => AN,
        queryDocument: () => SN,
        setStyle: () => TN
    });

    function TN(e, t, r) {
        e.style[t] = r
    }

    function wN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function xN(e, t) {
        return e[t]
    }

    function AN(e) {
        return t => t[Bo](e)
    }

    function zo({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Oh) !== -1) {
                let n = e.split(Oh),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Rh)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function ON(e) {
        return e == null || e === document.documentElement.getAttribute(Rh) ? document : null
    }

    function SN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Ko(e, t) {
        return e.contains(t)
    }

    function RN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function CN(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function LN(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function jo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? bN : IN : null
    }
    var Sh, Bo, Oh, bN, IN, Rh, Sr, Ch = me(() => {
        "use strict";
        Sh = de(xt());
        Fe();
        ({
            ELEMENT_MATCHES: Bo
        } = Sh.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Oh,
            HTML_ELEMENT: bN,
            PLAIN_OBJECT: IN,
            WF_PAGE: Rh
        } = Se;
        Sr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[Bo] && r[Bo](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var Yo = h((Kk, Ph) => {
        var PN = et(),
            Lh = Object.create,
            NN = function() {
                function e() {}
                return function(t) {
                    if (!PN(t)) return {};
                    if (Lh) return Lh(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Ph.exports = NN
    });
    var Pn = h((jk, Nh) => {
        function DN() {}
        Nh.exports = DN
    });
    var Dn = h((Yk, Dh) => {
        var MN = Yo(),
            FN = Pn();

        function Nn(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        Nn.prototype = MN(FN.prototype);
        Nn.prototype.constructor = Nn;
        Dh.exports = Nn
    });
    var kh = h((Qk, qh) => {
        var Mh = Lt(),
            qN = fr(),
            kN = we(),
            Fh = Mh ? Mh.isConcatSpreadable : void 0;

        function XN(e) {
            return kN(e) || qN(e) || !!(Fh && e && e[Fh])
        }
        qh.exports = XN
    });
    var Wh = h(($k, Gh) => {
        var GN = Jr(),
            WN = kh();

        function Xh(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = WN), i || (i = []); ++o < a;) {
                var u = e[o];
                t > 0 && r(u) ? t > 1 ? Xh(u, t - 1, r, n, i) : GN(i, u) : n || (i[i.length] = u)
            }
            return i
        }
        Gh.exports = Xh
    });
    var Hh = h((Zk, Uh) => {
        var UN = Wh();

        function HN(e) {
            var t = e == null ? 0 : e.length;
            return t ? UN(e, 1) : []
        }
        Uh.exports = HN
    });
    var Bh = h((Jk, Vh) => {
        function VN(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Vh.exports = VN
    });
    var jh = h((eX, Kh) => {
        var BN = Bh(),
            zh = Math.max;

        function zN(e, t, r) {
            return t = zh(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = zh(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var u = Array(t + 1); ++i < t;) u[i] = n[i];
                    return u[t] = r(a), BN(e, this, u)
                }
        }
        Kh.exports = zN
    });
    var Qh = h((tX, Yh) => {
        function KN(e) {
            return function() {
                return e
            }
        }
        Yh.exports = KN
    });
    var Jh = h((rX, Zh) => {
        var jN = Qh(),
            $h = Po(),
            YN = dn(),
            QN = $h ? function(e, t) {
                return $h(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: jN(t),
                    writable: !0
                })
            } : YN;
        Zh.exports = QN
    });
    var tg = h((nX, eg) => {
        var $N = 800,
            ZN = 16,
            JN = Date.now;

        function eD(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = JN(),
                    i = ZN - (n - r);
                if (r = n, i > 0) {
                    if (++t >= $N) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        eg.exports = eD
    });
    var ng = h((iX, rg) => {
        var tD = Jh(),
            rD = tg(),
            nD = rD(tD);
        rg.exports = nD
    });
    var og = h((oX, ig) => {
        var iD = Hh(),
            oD = jh(),
            aD = ng();

        function sD(e) {
            return aD(oD(e, void 0, iD), e + "")
        }
        ig.exports = sD
    });
    var ug = h((aX, sg) => {
        var ag = Mi(),
            uD = ag && new ag;
        sg.exports = uD
    });
    var lg = h((sX, cg) => {
        function cD() {}
        cg.exports = cD
    });
    var Qo = h((uX, dg) => {
        var fg = ug(),
            lD = lg(),
            fD = fg ? function(e) {
                return fg.get(e)
            } : lD;
        dg.exports = fD
    });
    var hg = h((cX, pg) => {
        var dD = {};
        pg.exports = dD
    });
    var $o = h((lX, vg) => {
        var gg = hg(),
            pD = Object.prototype,
            hD = pD.hasOwnProperty;

        function gD(e) {
            for (var t = e.name + "", r = gg[t], n = hD.call(gg, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        vg.exports = gD
    });
    var Fn = h((fX, mg) => {
        var vD = Yo(),
            mD = Pn(),
            ED = 4294967295;

        function Mn(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ED, this.__views__ = []
        }
        Mn.prototype = vD(mD.prototype);
        Mn.prototype.constructor = Mn;
        mg.exports = Mn
    });
    var yg = h((dX, Eg) => {
        function yD(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        Eg.exports = yD
    });
    var bg = h((pX, _g) => {
        var _D = Fn(),
            bD = Dn(),
            ID = yg();

        function TD(e) {
            if (e instanceof _D) return e.clone();
            var t = new bD(e.__wrapped__, e.__chain__);
            return t.__actions__ = ID(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        _g.exports = TD
    });
    var wg = h((hX, Tg) => {
        var wD = Fn(),
            Ig = Dn(),
            xD = Pn(),
            AD = we(),
            OD = ot(),
            SD = bg(),
            RD = Object.prototype,
            CD = RD.hasOwnProperty;

        function qn(e) {
            if (OD(e) && !AD(e) && !(e instanceof wD)) {
                if (e instanceof Ig) return e;
                if (CD.call(e, "__wrapped__")) return SD(e)
            }
            return new Ig(e)
        }
        qn.prototype = xD.prototype;
        qn.prototype.constructor = qn;
        Tg.exports = qn
    });
    var Ag = h((gX, xg) => {
        var LD = Fn(),
            PD = Qo(),
            ND = $o(),
            DD = wg();

        function MD(e) {
            var t = ND(e),
                r = DD[t];
            if (typeof r != "function" || !(t in LD.prototype)) return !1;
            if (e === r) return !0;
            var n = PD(r);
            return !!n && e === n[0]
        }
        xg.exports = MD
    });
    var Cg = h((vX, Rg) => {
        var Og = Dn(),
            FD = og(),
            qD = Qo(),
            Zo = $o(),
            kD = we(),
            Sg = Ag(),
            XD = "Expected a function",
            GD = 8,
            WD = 32,
            UD = 128,
            HD = 256;

        function VD(e) {
            return FD(function(t) {
                var r = t.length,
                    n = r,
                    i = Og.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(XD);
                    if (i && !a && Zo(o) == "wrapper") var a = new Og([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var u = Zo(o),
                        s = u == "wrapper" ? qD(o) : void 0;
                    s && Sg(s[0]) && s[1] == (UD | GD | WD | HD) && !s[4].length && s[9] == 1 ? a = a[Zo(s[0])].apply(a, s[3]) : a = o.length == 1 && Sg(o) ? a[u]() : a.thru(o)
                }
                return function() {
                    var l = arguments,
                        I = l[0];
                    if (a && l.length == 1 && kD(I)) return a.plant(I).value();
                    for (var d = 0, y = r ? t[d].apply(this, l) : I; ++d < r;) y = t[d].call(this, y);
                    return y
                }
            })
        }
        Rg.exports = VD
    });
    var Pg = h((mX, Lg) => {
        var BD = Cg(),
            zD = BD();
        Lg.exports = zD
    });
    var Dg = h((EX, Ng) => {
        function KD(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Ng.exports = KD
    });
    var Fg = h((yX, Mg) => {
        var jD = Dg(),
            Jo = pn();

        function YD(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Jo(r), r = r === r ? r : 0), t !== void 0 && (t = Jo(t), t = t === t ? t : 0), jD(Jo(e), t, r)
        }
        Mg.exports = YD
    });
    var Bg, zg, Kg, jg, QD, $D, ZD, JD, eM, tM, rM, nM, iM, oM, aM, sM, uM, cM, lM, Yg, Qg, fM, dM, pM, $g, hM, gM, Zg, vM, ea, Jg, qg, kg, ev, Cr, mM, nt, tv, EM, ke, Ke, Lr, rv, ta, Xg, ra, yM, Rr, _M, bM, IM, nv, Gg, TM, Wg, wM, xM, AM, Ug, kn, Xn, Hg, Vg, iv, ov = me(() => {
        "use strict";
        Bg = de(Pg()), zg = de(fn()), Kg = de(Fg());
        Fe();
        na();
        Ln();
        jg = de(xt()), {
            MOUSE_CLICK: QD,
            MOUSE_SECOND_CLICK: $D,
            MOUSE_DOWN: ZD,
            MOUSE_UP: JD,
            MOUSE_OVER: eM,
            MOUSE_OUT: tM,
            DROPDOWN_CLOSE: rM,
            DROPDOWN_OPEN: nM,
            SLIDER_ACTIVE: iM,
            SLIDER_INACTIVE: oM,
            TAB_ACTIVE: aM,
            TAB_INACTIVE: sM,
            NAVBAR_CLOSE: uM,
            NAVBAR_OPEN: cM,
            MOUSE_MOVE: lM,
            PAGE_SCROLL_DOWN: Yg,
            SCROLL_INTO_VIEW: Qg,
            SCROLL_OUT_OF_VIEW: fM,
            PAGE_SCROLL_UP: dM,
            SCROLLING_IN_VIEW: pM,
            PAGE_FINISH: $g,
            ECOMMERCE_CART_CLOSE: hM,
            ECOMMERCE_CART_OPEN: gM,
            PAGE_START: Zg,
            PAGE_SCROLL: vM
        } = Be, ea = "COMPONENT_ACTIVE", Jg = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: qg
        } = Se, {
            getNamespacedParameterId: kg
        } = jg.IX2VanillaUtils, ev = e => t => typeof t == "object" && e(t) ? !0 : t, Cr = ev(({
            element: e,
            nativeEvent: t
        }) => e === t.target), mM = ev(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), nt = (0, Bg.default)([Cr, mM]), tv = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !yM[i.eventTypeId]) return i
            }
            return null
        }, EM = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!tv(e, n)
        }, ke = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: u,
                autoStopEventId: s
            } = o.config, l = tv(e, s);
            return l && tr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + qg + n.split(qg)[1],
                actionListId: (0, zg.default)(l, "action.config.actionListId")
            }), tr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }), Pr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }), i
        }, Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Lr = {
            handler: Ke(nt, ke)
        }, rv = { ...Lr,
            types: [ea, Jg].join(" ")
        }, ta = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Xg = "mouseover mouseout", ra = {
            types: ta
        }, yM = {
            PAGE_START: Zg,
            PAGE_FINISH: $g
        }, Rr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, Kg.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), _M = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), bM = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, IM = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Rr(), o = r.scrollOffsetValue, s = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return _M(t.getBoundingClientRect(), {
                left: 0,
                top: s,
                right: n,
                bottom: i - s
            })
        }, nv = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [ea, Jg].indexOf(n) !== -1 ? n === ea : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Gg = e => (t, r) => {
            let n = {
                elementHovered: bM(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, TM = e => (t, r) => {
            let n = { ...r,
                elementVisible: IM(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Wg = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Rr(), {
                event: {
                    config: a,
                    eventTypeId: u
                }
            } = t, {
                scrollOffsetValue: s,
                scrollOffsetUnit: l
            } = a, I = l === "PX", d = i - o, y = Number((n / d).toFixed(2));
            if (r && r.percentTop === y) return r;
            let m = (I ? s : o * (s || 0) / 100) / d,
                E, T, A = 0;
            r && (E = y > r.percentTop, T = r.scrollingDown !== E, A = T ? y : r.anchorTop);
            let w = u === Yg ? y >= A + m : y <= A - m,
                N = { ...r,
                    percentTop: y,
                    inBounds: w,
                    anchorTop: A,
                    scrollingDown: E
                };
            return r && w && (T || N.inBounds !== r.inBounds) && e(t, N) || N
        }, wM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, xM = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, AM = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Ug = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, kn = (e = !0) => ({ ...rv,
            handler: Ke(e ? nt : Cr, nv((t, r) => r.isActive ? Lr.handler(t, r) : r))
        }), Xn = (e = !0) => ({ ...rv,
            handler: Ke(e ? nt : Cr, nv((t, r) => r.isActive ? r : Lr.handler(t, r)))
        }), Hg = { ...ra,
            handler: TM((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Qg === r ? (ke(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Vg = .05, iv = {
            [iM]: kn(),
            [oM]: Xn(),
            [nM]: kn(),
            [rM]: Xn(),
            [cM]: kn(!1),
            [uM]: Xn(!1),
            [aM]: kn(),
            [sM]: Xn(),
            [gM]: {
                types: "ecommerce-cart-open",
                handler: Ke(nt, ke)
            },
            [hM]: {
                types: "ecommerce-cart-close",
                handler: Ke(nt, ke)
            },
            [QD]: {
                types: "click",
                handler: Ke(nt, Ug((e, {
                    clickCount: t
                }) => {
                    EM(e) ? t === 1 && ke(e) : ke(e)
                }))
            },
            [$D]: {
                types: "click",
                handler: Ke(nt, Ug((e, {
                    clickCount: t
                }) => {
                    t === 2 && ke(e)
                }))
            },
            [ZD]: { ...Lr,
                types: "mousedown"
            },
            [JD]: { ...Lr,
                types: "mouseup"
            },
            [eM]: {
                types: Xg,
                handler: Ke(nt, Gg((e, t) => {
                    t.elementHovered && ke(e)
                }))
            },
            [tM]: {
                types: Xg,
                handler: Ke(nt, Gg((e, t) => {
                    t.elementHovered || ke(e)
                }))
            },
            [lM]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: u,
                        continuousParameterGroupId: s,
                        reverse: l,
                        restingState: I = 0
                    } = r, {
                        clientX: d = o.clientX,
                        clientY: y = o.clientY,
                        pageX: m = o.pageX,
                        pageY: E = o.pageY
                    } = n, T = u === "X_AXIS", A = n.type === "mouseout", w = I / 100, N = s, L = !1;
                    switch (a) {
                        case Je.VIEWPORT:
                            {
                                w = T ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(y, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case Je.PAGE:
                            {
                                let {
                                    scrollLeft: F,
                                    scrollTop: k,
                                    scrollWidth: q,
                                    scrollHeight: j
                                } = Rr();w = T ? Math.min(F + m, q) / q : Math.min(k + E, j) / j;
                                break
                            }
                        case Je.ELEMENT:
                        default:
                            {
                                N = kg(i, s);
                                let F = n.type.indexOf("mouse") === 0;
                                if (F && nt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let k = t.getBoundingClientRect(),
                                    {
                                        left: q,
                                        top: j,
                                        width: K,
                                        height: Q
                                    } = k;
                                if (!F && !wM({
                                        left: d,
                                        top: y
                                    }, k)) break;L = !0,
                                w = T ? (d - q) / K : (y - j) / Q;
                                break
                            }
                    }
                    return A && (w > 1 - Vg || w < Vg) && (w = Math.round(w)), (a !== Je.ELEMENT || L || L !== o.elementHovered) && (w = l ? 1 - w : w, e.dispatch(Jt(N, w))), {
                        elementHovered: L,
                        clientX: d,
                        clientY: y,
                        pageX: m,
                        pageY: E
                    }
                }
            },
            [vM]: {
                types: ta,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = Rr(), u = i / (o - a);
                    u = n ? 1 - u : u, e.dispatch(Jt(r, u))
                }
            },
            [pM]: {
                types: ta,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: u,
                        scrollHeight: s,
                        clientHeight: l
                    } = Rr(), {
                        basedOn: I,
                        selectedAxis: d,
                        continuousParameterGroupId: y,
                        startsEntering: m,
                        startsExiting: E,
                        addEndOffset: T,
                        addStartOffset: A,
                        addOffsetValue: w = 0,
                        endOffsetValue: N = 0
                    } = r, L = d === "X_AXIS";
                    if (I === Je.VIEWPORT) {
                        let F = L ? o / u : a / s;
                        return F !== i.scrollPercent && t.dispatch(Jt(y, F)), {
                            scrollPercent: F
                        }
                    } else {
                        let F = kg(n, y),
                            k = e.getBoundingClientRect(),
                            q = (A ? w : 0) / 100,
                            j = (T ? N : 0) / 100;
                        q = m ? q : 1 - q, j = E ? j : 1 - j;
                        let K = k.top + Math.min(k.height * q, l),
                            te = k.top + k.height * j - K,
                            z = Math.min(l + te, s),
                            b = Math.min(Math.max(0, l - K), z) / z;
                        return b !== i.scrollPercent && t.dispatch(Jt(F, b)), {
                            scrollPercent: b
                        }
                    }
                }
            },
            [Qg]: Hg,
            [fM]: Hg,
            [Yg]: { ...ra,
                handler: Wg((e, t) => {
                    t.scrollingDown && ke(e)
                })
            },
            [dM]: { ...ra,
                handler: Wg((e, t) => {
                    t.scrollingDown || ke(e)
                })
            },
            [$g]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Cr, xM(ke))
            },
            [Zg]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Cr, AM(ke))
            }
        }
    });
    var Iv = {};
    De(Iv, {
        observeRequests: () => zM,
        startActionGroup: () => Pr,
        startEngine: () => Bn,
        stopActionGroup: () => tr,
        stopAllActionGroups: () => yv,
        stopEngine: () => zn
    });

    function zM(e) {
        At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: YM
        }), At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: QM
        }), At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: $M
        }), At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: ZM
        })
    }

    function KM(e) {
        At({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                zn(e), gv({
                    store: e,
                    elementApi: Pe
                }), Bn({
                    store: e,
                    allowEvents: !0
                }), vv()
            }
        })
    }

    function jM(e, t) {
        let r = At({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function YM({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Bn({
                store: r,
                rawData: e,
                allowEvents: !0
            }), vv()
        };
        t ? setTimeout(n, 0) : n()
    }

    function vv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function QM(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: u,
            testManual: s,
            verbose: l = !0
        } = e, {
            rawData: I
        } = e;
        if (n && i && I && u) {
            let d = I.actionLists[n];
            d && (I = MM({
                actionList: d,
                actionItemId: i,
                rawData: I
            }))
        }
        if (Bn({
                store: t,
                rawData: I,
                allowEvents: a,
                testManual: s
            }), n && r === Me.GENERAL_START_ACTION || ia(r)) {
            tr({
                store: t,
                actionListId: n
            }), Ev({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = Pr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: u,
                verbose: l
            });
            l && d && t.dispatch(er({
                actionListId: n,
                isPlaying: !u
            }))
        }
    }

    function $M({
        actionListId: e
    }, t) {
        e ? tr({
            store: t,
            actionListId: e
        }) : yv({
            store: t
        }), zn(t)
    }

    function ZM(e, t) {
        zn(t), gv({
            store: t,
            elementApi: Pe
        })
    }

    function Bn({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Mo(t)), i.active || (e.dispatch(Fo({
            hasBoundaryNodes: !!document.querySelector(Wn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (iF(e), JM(), e.getState().ixSession.hasDefinedMediaQueries && KM(e)), e.dispatch(qo()), eF(e, n))
    }

    function JM() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(av) === -1 && (e.className += ` ${av}`)
    }

    function eF(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(Rn(n, o)), t ? jM(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function zn(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(tF), XM(), e.dispatch(ko())
        }
    }

    function tF({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function rF({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: u,
        restingValue: s
    }) {
        let {
            ixData: l,
            ixSession: I
        } = e.getState(), {
            events: d
        } = l, y = d[n], {
            eventTypeId: m
        } = y, E = {}, T = {}, A = [], {
            continuousActionGroups: w
        } = a, {
            id: N
        } = a;
        FM(m, i) && (N = qM(t, N));
        let L = I.hasBoundaryNodes && r ? Sr(r, Wn) : null;
        w.forEach(F => {
            let {
                keyframe: k,
                actionItems: q
            } = F;
            q.forEach(j => {
                let {
                    actionTypeId: K
                } = j, {
                    target: Q
                } = j.config;
                if (!Q) return;
                let te = Q.boundaryMode ? L : null,
                    z = GM(Q) + oa + K;
                if (T[z] = nF(T[z], k, j), !E[z]) {
                    E[z] = !0;
                    let {
                        config: C
                    } = j;
                    Un({
                        config: C,
                        event: y,
                        eventTarget: r,
                        elementRoot: te,
                        elementApi: Pe
                    }).forEach(b => {
                        A.push({
                            element: b,
                            key: z
                        })
                    })
                }
            })
        }), A.forEach(({
            element: F,
            key: k
        }) => {
            let q = T[k],
                j = (0, ct.default)(q, "[0].actionItems[0]", {}),
                {
                    actionTypeId: K
                } = j,
                Q = Vn(K) ? sa(K)(F, j) : null,
                te = aa({
                    element: F,
                    actionItem: j,
                    elementApi: Pe
                }, Q);
            ua({
                store: e,
                element: F,
                eventId: n,
                actionListId: o,
                actionItem: j,
                destination: te,
                continuous: !0,
                parameterId: N,
                actionGroups: q,
                smoothing: u,
                restingValue: s,
                pluginInstance: Q
            })
        })
    }

    function nF(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function iF(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        mv(e), (0, rr.default)(r, (i, o) => {
            let a = iv[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            lF({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && aF(e)
    }

    function aF(e) {
        let t = () => {
            mv(e)
        };
        oF.forEach(r => {
            window.addEventListener(r, t), e.dispatch(Sn(window, [r, t]))
        }), t()
    }

    function mv(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(Ho({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function lF({
        logic: e,
        store: t,
        events: r
    }) {
        fF(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, u = sF(r, cF);
        if (!(0, cv.default)(u)) return;
        (0, rr.default)(u, (d, y) => {
            let m = r[y],
                {
                    action: E,
                    id: T,
                    mediaQueries: A = o.mediaQueryKeys
                } = m,
                {
                    actionListId: w
                } = E.config;
            WM(A, o.mediaQueryKeys) || t.dispatch(Vo()), E.actionTypeId === Me.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(L => {
                let {
                    continuousParameterGroupId: F
                } = L, k = (0, ct.default)(a, `${w}.continuousParameterGroups`, []), q = (0, uv.default)(k, ({
                    id: Q
                }) => Q === F), j = (L.smoothing || 0) / 100, K = (L.restingState || 0) / 100;
                q && d.forEach((Q, te) => {
                    let z = T + oa + te;
                    rF({
                        store: t,
                        eventStateKey: z,
                        eventTarget: Q,
                        eventId: T,
                        eventConfig: L,
                        actionListId: w,
                        parameterGroup: q,
                        smoothing: j,
                        restingValue: K
                    })
                })
            }), (E.actionTypeId === Me.GENERAL_START_ACTION || ia(E.actionTypeId)) && Ev({
                store: t,
                actionListId: w,
                eventId: T
            })
        });
        let s = d => {
                let {
                    ixSession: y
                } = t.getState();
                uF(u, (m, E, T) => {
                    let A = r[E],
                        w = y.eventState[T],
                        {
                            action: N,
                            mediaQueries: L = o.mediaQueryKeys
                        } = A;
                    if (!Hn(L, y.mediaQueryKey)) return;
                    let F = (k = {}) => {
                        let q = i({
                            store: t,
                            element: m,
                            event: A,
                            eventConfig: k,
                            nativeEvent: d,
                            eventStateKey: T
                        }, w);
                        UM(q, w) || t.dispatch(Xo(T, q))
                    };
                    N.actionTypeId === Me.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(F) : F()
                })
            },
            l = (0, pv.default)(s, BM),
            I = ({
                target: d = document,
                types: y,
                throttle: m
            }) => {
                y.split(" ").filter(Boolean).forEach(E => {
                    let T = m ? l : s;
                    d.addEventListener(E, T), t.dispatch(Sn(d, [E, T]))
                })
            };
        Array.isArray(n) ? n.forEach(I) : typeof n == "string" && I(e)
    }

    function fF(e) {
        if (!VM) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = zo(o);
            t[a] || (i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function Ev({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, u = a[r], s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
            let l = (0, ct.default)(s, "actionItemGroups[0].actionItems", []),
                I = (0, ct.default)(u, "mediaQueries", n.mediaQueryKeys);
            if (!Hn(I, i.mediaQueryKey)) return;
            l.forEach(d => {
                let {
                    config: y,
                    actionTypeId: m
                } = d, E = y ? .target ? .useEventTarget === !0 && y ? .target ? .objectId == null ? {
                    target: u.target,
                    targets: u.targets
                } : y, T = Un({
                    config: E,
                    event: u,
                    elementApi: Pe
                }), A = Vn(m);
                T.forEach(w => {
                    let N = A ? sa(m)(w, d) : null;
                    ua({
                        destination: aa({
                            element: w,
                            actionItem: d,
                            elementApi: Pe
                        }, N),
                        immediate: !0,
                        store: e,
                        element: w,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: N
                    })
                })
            })
        }
    }

    function yv({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, rr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                ca(r, e), i && e.dispatch(er({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function tr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), u = a.hasBoundaryNodes && r ? Sr(r, Wn) : null;
        (0, rr.default)(o, s => {
            let l = (0, ct.default)(s, "actionItem.config.target.boundaryMode"),
                I = n ? s.eventStateKey === n : !0;
            if (s.actionListId === i && s.eventId === t && I) {
                if (u && l && !Ko(u, s.element)) return;
                ca(s, e), s.verbose && e.dispatch(er({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Pr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: u
    }) {
        let {
            ixData: s,
            ixSession: l
        } = e.getState(), {
            events: I
        } = s, d = I[t] || {}, {
            mediaQueries: y = s.mediaQueryKeys
        } = d, m = (0, ct.default)(s, `actionLists.${i}`, {}), {
            actionItemGroups: E,
            useFirstGroupAsInitialState: T
        } = m;
        if (!E || !E.length) return !1;
        o >= E.length && (0, ct.default)(d, "config.loop") && (o = 0), o === 0 && T && o++;
        let w = (o === 0 || o === 1 && T) && ia(d.action ? .actionTypeId) ? d.config.delay : void 0,
            N = (0, ct.default)(E, [o, "actionItems"], []);
        if (!N.length || !Hn(y, l.mediaQueryKey)) return !1;
        let L = l.hasBoundaryNodes && r ? Sr(r, Wn) : null,
            F = PM(N),
            k = !1;
        return N.forEach((q, j) => {
            let {
                config: K,
                actionTypeId: Q
            } = q, te = Vn(Q), {
                target: z
            } = K;
            if (!z) return;
            let C = z.boundaryMode ? L : null;
            Un({
                config: K,
                event: d,
                eventTarget: r,
                elementRoot: C,
                elementApi: Pe
            }).forEach((P, G) => {
                let H = te ? sa(Q)(P, q) : null,
                    ee = te ? HM(Q)(P, q) : null;
                k = !0;
                let re = F === j && G === 0,
                    U = NM({
                        element: P,
                        actionItem: q
                    }),
                    V = aa({
                        element: P,
                        actionItem: q,
                        elementApi: Pe
                    }, H);
                ua({
                    store: e,
                    element: P,
                    actionItem: q,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: re,
                    computedStyle: U,
                    destination: V,
                    immediate: a,
                    verbose: u,
                    pluginInstance: H,
                    pluginDuration: ee,
                    instanceDelay: w
                })
            })
        }), k
    }

    function ua(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: u,
            continuous: s,
            restingValue: l,
            eventId: I
        } = n, d = !s, y = CM(), {
            ixElements: m,
            ixSession: E,
            ixData: T
        } = t.getState(), A = RM(m, i), {
            refState: w
        } = m[A] || {}, N = jo(i), L = E.reducedMotion && Ii[o.actionTypeId], F;
        if (L && s) switch (T.events[I] ? .eventTypeId) {
            case Be.MOUSE_MOVE:
            case Be.MOUSE_MOVE_IN_VIEWPORT:
                F = l;
                break;
            default:
                F = .5;
                break
        }
        let k = DM(i, w, r, o, Pe, u);
        if (t.dispatch(Go({
                instanceId: y,
                elementId: A,
                origin: k,
                refType: N,
                skipMotion: L,
                skipToValue: F,
                ...n
            })), _v(document.body, "ix2-animation-started", y), a) {
            dF(t, y);
            return
        }
        At({
            store: t,
            select: ({
                ixInstances: q
            }) => q[y],
            onChange: bv
        }), d && t.dispatch(Cn(y, E.tick))
    }

    function ca(e, t) {
        _v(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === hv && kM(o, n, Pe), t.dispatch(Wo(e.id))
    }

    function _v(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function dF(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(Cn(t, 0)), e.dispatch(Rn(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        bv(n[t], e)
    }

    function bv(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: u,
            renderType: s,
            current: l,
            groupIndex: I,
            eventId: d,
            eventTarget: y,
            eventStateKey: m,
            actionListId: E,
            isCarrier: T,
            styleProp: A,
            verbose: w,
            pluginInstance: N
        } = e, {
            ixData: L,
            ixSession: F
        } = t.getState(), {
            events: k
        } = L, q = k && k[d] ? k[d] : {}, {
            mediaQueries: j = L.mediaQueryKeys
        } = q;
        if (Hn(j, F.mediaQueryKey) && (n || r || i)) {
            if (l || s === SM && i) {
                t.dispatch(Uo(o, u, l, a));
                let {
                    ixElements: K
                } = t.getState(), {
                    ref: Q,
                    refType: te,
                    refState: z
                } = K[o] || {}, C = z && z[u];
                (te === hv || Vn(u)) && LM(Q, z, C, d, a, A, Pe, s, N)
            }
            if (i) {
                if (T) {
                    let K = Pr({
                        store: t,
                        eventId: d,
                        eventTarget: y,
                        eventStateKey: m,
                        actionListId: E,
                        groupIndex: I + 1,
                        verbose: w
                    });
                    w && !K && t.dispatch(er({
                        actionListId: E,
                        isPlaying: !1
                    }))
                }
                ca(e, t)
            }
        }
    }
    var uv, ct, cv, lv, fv, dv, rr, pv, Gn, OM, ia, oa, Wn, hv, SM, av, Un, RM, aa, At, CM, LM, gv, PM, NM, DM, MM, FM, qM, Hn, kM, XM, GM, WM, UM, Vn, sa, HM, sv, VM, BM, oF, sF, uF, cF, na = me(() => {
        "use strict";
        uv = de($i()), ct = de(fn()), cv = de(Mp()), lv = de(sh()), fv = de(ch()), dv = de(fh()), rr = de(mh()), pv = de(wh());
        Fe();
        Gn = de(xt());
        Ln();
        Ch();
        ov();
        OM = Object.keys(Ur), ia = e => OM.includes(e), {
            COLON_DELIMITER: oa,
            BOUNDARY_SELECTOR: Wn,
            HTML_ELEMENT: hv,
            RENDER_GENERAL: SM,
            W_MOD_IX: av
        } = Se, {
            getAffectedElements: Un,
            getElementId: RM,
            getDestinationValues: aa,
            observeStore: At,
            getInstanceId: CM,
            renderHTMLElement: LM,
            clearAllStyles: gv,
            getMaxDurationItemIndex: PM,
            getComputedStyle: NM,
            getInstanceOrigin: DM,
            reduceListToGroup: MM,
            shouldNamespaceEventParameter: FM,
            getNamespacedParameterId: qM,
            shouldAllowMediaQuery: Hn,
            cleanupHTMLElement: kM,
            clearObjectCache: XM,
            stringifyTarget: GM,
            mediaQueriesEqual: WM,
            shallowEqual: UM
        } = Gn.IX2VanillaUtils, {
            isPluginType: Vn,
            createPluginInstance: sa,
            getPluginDuration: HM
        } = Gn.IX2VanillaPlugins, sv = navigator.userAgent, VM = sv.match(/iPad/i) || sv.match(/iPhone/), BM = 12;
        oF = ["resize", "orientationchange"];
        sF = (e, t) => (0, lv.default)((0, dv.default)(e, t), fv.default), uF = (e, t) => {
            (0, rr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + oa + o;
                    t(i, n, a)
                })
            })
        }, cF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Un({
                config: t,
                elementApi: Pe
            })
        }
    });
    var xv = h(fa => {
        "use strict";
        Object.defineProperty(fa, "__esModule", {
            value: !0
        });

        function pF(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        pF(fa, {
            actions: function() {
                return vF
            },
            destroy: function() {
                return wv
            },
            init: function() {
                return _F
            },
            setEnv: function() {
                return yF
            },
            store: function() {
                return Kn
            }
        });
        var hF = yi(),
            gF = mF((vp(), Qe(gp))),
            la = (na(), Qe(Iv)),
            vF = EF((Ln(), Qe(Ah)));

        function mF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Tv(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (Tv = function(n) {
                return n ? r : t
            })(e)
        }

        function EF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = Tv(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var Kn = (0, hF.createStore)(gF.default);

        function yF(e) {
            e() && (0, la.observeRequests)(Kn)
        }

        function _F(e) {
            wv(), (0, la.startEngine)({
                store: Kn,
                rawData: e,
                allowEvents: !0
            })
        }

        function wv() {
            (0, la.stopEngine)(Kn)
        }
    });
    var Rv = h((RX, Sv) => {
        "use strict";
        var Av = Oe(),
            Ov = xv();
        Ov.setEnv(Av.env);
        Av.define("ix2", Sv.exports = function() {
            return Ov
        })
    });
    var Lv = h((CX, Cv) => {
        "use strict";
        var nr = Oe();
        nr.define("links", Cv.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = nr.env(),
                a = window.location,
                u = document.createElement("a"),
                s = "w--current",
                l = /index\.(html|php)$/,
                I = /\/$/,
                d, y;
            r.ready = r.design = r.preview = m;

            function m() {
                i = o && nr.env("design"), y = nr.env("slug") || a.pathname || "", nr.scroll.off(T), d = [];
                for (var w = document.links, N = 0; N < w.length; ++N) E(w[N]);
                d.length && (nr.scroll.on(T), T())
            }

            function E(w) {
                if (!w.getAttribute("hreflang")) {
                    var N = i && w.getAttribute("href-disabled") || w.getAttribute("href");
                    if (u.href = N, !(N.indexOf(":") >= 0)) {
                        var L = e(w);
                        if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                            var F = e(u.hash);
                            F.length && d.push({
                                link: L,
                                sec: F,
                                active: !1
                            });
                            return
                        }
                        if (!(N === "#" || N === "")) {
                            var k = u.href === a.href || N === y || l.test(N) && I.test(y);
                            A(L, s, k)
                        }
                    }
                }
            }

            function T() {
                var w = n.scrollTop(),
                    N = n.height();
                t.each(d, function(L) {
                    if (!L.link.attr("hreflang")) {
                        var F = L.link,
                            k = L.sec,
                            q = k.offset().top,
                            j = k.outerHeight(),
                            K = N * .5,
                            Q = k.is(":visible") && q + j - K >= w && q + K <= w + N;
                        L.active !== Q && (L.active = Q, A(F, s, Q))
                    }
                })
            }

            function A(w, N, L) {
                var F = w.hasClass(N);
                L && F || !L && !F || (L ? w.addClass(N) : w.removeClass(N))
            }
            return r
        })
    });
    var Nv = h((LX, Pv) => {
        "use strict";
        var jn = Oe();
        jn.define("scroll", Pv.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = E() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(C) {
                    window.setTimeout(C, 15)
                },
                s = jn.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
                I = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + I + ")",
                y = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                m = document.createElement("style");
            m.appendChild(document.createTextNode(y));

            function E() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var T = /^#[a-zA-Z0-9][\w:.-]*$/;

            function A(C) {
                return T.test(C.hash) && C.host + C.pathname === r.host + r.pathname
            }
            let w = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function N() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || w.matches
            }

            function L(C, b) {
                var P;
                switch (b) {
                    case "add":
                        P = C.attr("tabindex"), P ? C.attr("data-wf-tabindex-swap", P) : C.attr("tabindex", "-1");
                        break;
                    case "remove":
                        P = C.attr("data-wf-tabindex-swap"), P ? (C.attr("tabindex", P), C.removeAttr("data-wf-tabindex-swap")) : C.removeAttr("tabindex");
                        break
                }
                C.toggleClass("wf-force-outline-none", b === "add")
            }

            function F(C) {
                var b = C.currentTarget;
                if (!(jn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
                    var P = A(b) ? b.hash : "";
                    if (P !== "") {
                        var G = e(P);
                        G.length && (C && (C.preventDefault(), C.stopPropagation()), k(P, C), window.setTimeout(function() {
                            q(G, function() {
                                L(G, "add"), G.get(0).focus({
                                    preventScroll: !0
                                }), L(G, "remove")
                            })
                        }, C ? 0 : 300))
                    }
                }
            }

            function k(C) {
                if (r.hash !== C && n && n.pushState && !(jn.env.chrome && r.protocol === "file:")) {
                    var b = n.state && n.state.hash;
                    b !== C && n.pushState({
                        hash: C
                    }, "", C)
                }
            }

            function q(C, b) {
                var P = i.scrollTop(),
                    G = j(C);
                if (P !== G) {
                    var H = K(C, P, G),
                        ee = Date.now(),
                        re = function() {
                            var U = Date.now() - ee;
                            window.scroll(0, Q(P, G, U, H)), U <= H ? u(re) : typeof b == "function" && b()
                        };
                    u(re)
                }
            }

            function j(C) {
                var b = e(l),
                    P = b.css("position") === "fixed" ? b.outerHeight() : 0,
                    G = C.offset().top - P;
                if (C.data("scroll") === "mid") {
                    var H = i.height() - P,
                        ee = C.outerHeight();
                    ee < H && (G -= Math.round((H - ee) / 2))
                }
                return G
            }

            function K(C, b, P) {
                if (N()) return 0;
                var G = 1;
                return a.add(C).each(function(H, ee) {
                    var re = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (G = re)
                }), (472.143 * Math.log(Math.abs(b - P) + 125) - 2e3) * G
            }

            function Q(C, b, P, G) {
                return P > G ? b : C + (b - C) * te(P / G)
            }

            function te(C) {
                return C < .5 ? 4 * C * C * C : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1
            }

            function z() {
                var {
                    WF_CLICK_EMPTY: C,
                    WF_CLICK_SCROLL: b
                } = t;
                o.on(b, d, F), o.on(C, I, function(P) {
                    P.preventDefault()
                }), document.head.insertBefore(m, document.head.firstChild)
            }
            return {
                ready: z
            }
        })
    });
    var Mv = h((PX, Dv) => {
        "use strict";
        var bF = Oe();
        bF.define("touch", Dv.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    u = !1,
                    s = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, I;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", y, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", E, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", y, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", E, !1);

                function d(A) {
                    var w = A.touches;
                    w && w.length > 1 || (a = !0, w ? (u = !0, l = w[0].clientX) : l = A.clientX, I = l)
                }

                function y(A) {
                    if (a) {
                        if (u && A.type === "mousemove") {
                            A.preventDefault(), A.stopPropagation();
                            return
                        }
                        var w = A.touches,
                            N = w ? w[0].clientX : A.clientX,
                            L = N - I;
                        I = N, Math.abs(L) > s && r && String(r()) === "" && (i("swipe", A, {
                            direction: L > 0 ? "right" : "left"
                        }), E())
                    }
                }

                function m(A) {
                    if (a && (a = !1, u && A.type === "mouseup")) {
                        A.preventDefault(), A.stopPropagation(), u = !1;
                        return
                    }
                }

                function E() {
                    a = !1
                }

                function T() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", y, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", E, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", y, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", E, !1), o = null
                }
                this.destroy = T
            }

            function i(o, a, u) {
                var s = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(s, u)
            }
            return t.instance = t.init(document), t
        })
    });
    var kv = h((NX, qv) => {
        "use strict";
        var Ot = Oe(),
            IF = Ct(),
            je = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Fv = !0,
            TF = /^#[a-zA-Z0-9\-_]+$/;
        Ot.define("dropdown", qv.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Ot.env(),
                o = !1,
                a, u = Ot.env.touch,
                s = ".w-dropdown",
                l = "w--open",
                I = IF.triggers,
                d = 900,
                y = "focusout" + s,
                m = "keydown" + s,
                E = "mouseenter" + s,
                T = "mousemove" + s,
                A = "mouseleave" + s,
                w = (u ? "click" : "mouseup") + s,
                N = "w-close" + s,
                L = "setting" + s,
                F = e(document),
                k;
            n.ready = q, n.design = function() {
                o && b(), o = !1, q()
            }, n.preview = function() {
                o = !0, q()
            };

            function q() {
                a = i && Ot.env("design"), k = F.find(s), k.each(j)
            }

            function j(c, D) {
                var W = e(D),
                    O = e.data(D, s);
                O || (O = e.data(D, s, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })), O.toggle = O.el.children(".w-dropdown-toggle"), O.list = O.el.children(".w-dropdown-list"), O.links = O.list.find("a:not(.w-dropdown .w-dropdown a)"), O.complete = H(O), O.mouseLeave = re(O), O.mouseUpOutside = G(O), O.mouseMoveOutside = U(O), K(O);
                var $ = O.toggle.attr("id"),
                    se = O.list.attr("id");
                $ || ($ = "w-dropdown-toggle-" + c), se || (se = "w-dropdown-list-" + c), O.toggle.attr("id", $), O.toggle.attr("aria-controls", se), O.toggle.attr("aria-haspopup", "menu"), O.toggle.attr("aria-expanded", "false"), O.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), O.toggle.prop("tagName") !== "BUTTON" && (O.toggle.attr("role", "button"), O.toggle.attr("tabindex") || O.toggle.attr("tabindex", "0")), O.list.attr("id", se), O.list.attr("aria-labelledby", $), O.links.each(function(_, B) {
                    B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"), TF.test(B.hash) && B.addEventListener("click", C.bind(null, O))
                }), O.el.off(s), O.toggle.off(s), O.nav && O.nav.off(s);
                var ie = te(O, Fv);
                a && O.el.on(L, Q(O)), a || (i && (O.hovering = !1, C(O)), O.config.hover && O.toggle.on(E, ee(O)), O.el.on(N, ie), O.el.on(m, V(O)), O.el.on(y, v(O)), O.toggle.on(w, ie), O.toggle.on(m, p(O)), O.nav = O.el.closest(".w-nav"), O.nav.on(N, ie))
            }

            function K(c) {
                var D = Number(c.el.css("z-index"));
                c.manageZ = D === d || D === d + 1, c.config = {
                    hover: c.el.attr("data-hover") === "true" && !u,
                    delay: c.el.attr("data-delay")
                }
            }

            function Q(c) {
                return function(D, W) {
                    W = W || {}, K(c), W.open === !0 && z(c, !0), W.open === !1 && C(c, {
                        immediate: !0
                    })
                }
            }

            function te(c, D) {
                return r(function(W) {
                    if (c.open || W && W.type === "w-close") return C(c, {
                        forceClose: D
                    });
                    z(c)
                })
            }

            function z(c) {
                if (!c.open) {
                    P(c), c.open = !0, c.list.addClass(l), c.toggle.addClass(l), c.toggle.attr("aria-expanded", "true"), I.intro(0, c.el[0]), Ot.redraw.up(), c.manageZ && c.el.css("z-index", d + 1);
                    var D = Ot.env("editor");
                    a || F.on(w, c.mouseUpOutside), c.hovering && !D && c.el.on(A, c.mouseLeave), c.hovering && D && F.on(T, c.mouseMoveOutside), window.clearTimeout(c.delayId)
                }
            }

            function C(c, {
                immediate: D,
                forceClose: W
            } = {}) {
                if (c.open && !(c.config.hover && c.hovering && !W)) {
                    c.toggle.attr("aria-expanded", "false"), c.open = !1;
                    var O = c.config;
                    if (I.outro(0, c.el[0]), F.off(w, c.mouseUpOutside), F.off(T, c.mouseMoveOutside), c.el.off(A, c.mouseLeave), window.clearTimeout(c.delayId), !O.delay || D) return c.complete();
                    c.delayId = window.setTimeout(c.complete, O.delay)
                }
            }

            function b() {
                F.find(s).each(function(c, D) {
                    e(D).triggerHandler(N)
                })
            }

            function P(c) {
                var D = c.el[0];
                k.each(function(W, O) {
                    var $ = e(O);
                    $.is(D) || $.has(D).length || $.triggerHandler(N)
                })
            }

            function G(c) {
                return c.mouseUpOutside && F.off(w, c.mouseUpOutside), r(function(D) {
                    if (c.open) {
                        var W = e(D.target);
                        if (!W.closest(".w-dropdown-toggle").length) {
                            var O = e.inArray(c.el[0], W.parents(s)) === -1,
                                $ = Ot.env("editor");
                            if (O) {
                                if ($) {
                                    var se = W.parents().length === 1 && W.parents("svg").length === 1,
                                        ie = W.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (se || ie) return
                                }
                                C(c)
                            }
                        }
                    }
                })
            }

            function H(c) {
                return function() {
                    c.list.removeClass(l), c.toggle.removeClass(l), c.manageZ && c.el.css("z-index", "")
                }
            }

            function ee(c) {
                return function() {
                    c.hovering = !0, z(c)
                }
            }

            function re(c) {
                return function() {
                    c.hovering = !1, c.links.is(":focus") || C(c)
                }
            }

            function U(c) {
                return r(function(D) {
                    if (c.open) {
                        var W = e(D.target),
                            O = e.inArray(c.el[0], W.parents(s)) === -1;
                        if (O) {
                            var $ = W.parents(".w-editor-bem-EditorHoverControls").length,
                                se = W.parents(".w-editor-bem-RTToolbar").length,
                                ie = e(".w-editor-bem-EditorOverlay"),
                                _ = ie.find(".w-editor-edit-outline").length || ie.find(".w-editor-bem-RTToolbar").length;
                            if ($ || se || _) return;
                            c.hovering = !1, C(c)
                        }
                    }
                })
            }

            function V(c) {
                return function(D) {
                    if (!(a || !c.open)) switch (c.selectedIdx = c.links.index(document.activeElement), D.keyCode) {
                        case je.HOME:
                            return c.open ? (c.selectedIdx = 0, g(c), D.preventDefault()) : void 0;
                        case je.END:
                            return c.open ? (c.selectedIdx = c.links.length - 1, g(c), D.preventDefault()) : void 0;
                        case je.ESCAPE:
                            return C(c), c.toggle.focus(), D.stopPropagation();
                        case je.ARROW_RIGHT:
                        case je.ARROW_DOWN:
                            return c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1), g(c), D.preventDefault();
                        case je.ARROW_LEFT:
                        case je.ARROW_UP:
                            return c.selectedIdx = Math.max(-1, c.selectedIdx - 1), g(c), D.preventDefault()
                    }
                }
            }

            function g(c) {
                c.links[c.selectedIdx] && c.links[c.selectedIdx].focus()
            }

            function p(c) {
                var D = te(c, Fv);
                return function(W) {
                    if (!a) {
                        if (!c.open) switch (W.keyCode) {
                            case je.ARROW_UP:
                            case je.ARROW_DOWN:
                                return W.stopPropagation()
                        }
                        switch (W.keyCode) {
                            case je.SPACE:
                            case je.ENTER:
                                return D(), W.stopPropagation(), W.preventDefault()
                        }
                    }
                }
            }

            function v(c) {
                return r(function(D) {
                    var {
                        relatedTarget: W,
                        target: O
                    } = D, $ = c.el[0], se = $.contains(W) || $.contains(O);
                    return se || C(c), D.stopPropagation()
                })
            }
            return n
        })
    });
    var Xv = h(da => {
        "use strict";
        Object.defineProperty(da, "__esModule", {
            value: !0
        });
        Object.defineProperty(da, "default", {
            enumerable: !0,
            get: function() {
                return wF
            }
        });

        function wF(e, t, r, n, i, o, a, u, s, l, I, d, y) {
            return function(m) {
                e(m);
                var E = m.form,
                    T = {
                        name: E.attr("data-name") || E.attr("name") || "Untitled Form",
                        pageId: E.attr("data-wf-page-id") || "",
                        elementId: E.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(E.html()),
                        trackingCookies: n()
                    };
                let A = E.attr("data-wf-flow");
                A && (T.wfFlow = A), i(m);
                var w = o(E, T.fields);
                if (w) return a(w);
                if (T.fileUploads = u(E), s(m), !l) {
                    I(m);
                    return
                }
                d.ajax({
                    url: y,
                    type: "POST",
                    data: T,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(N) {
                    N && N.code === 200 && (m.success = !0), I(m)
                }).fail(function() {
                    I(m)
                })
            }
        }
    });
    var Wv = h((MX, Gv) => {
        "use strict";
        var Yn = Oe();
        Yn.define("forms", Gv.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                u = ".w-form",
                s, l = /e(-)?mail/i,
                I = /^\S+@\S+$/,
                d = window.alert,
                y = Yn.env(),
                m, E, T, A = /list-manage[1-9]?.com/i,
                w = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                N(), !y && !m && F()
            };

            function N() {
                s = e("html").attr("data-wf-site"), E = "https://webflow.com/api/v1/form/" + s, a && E.indexOf("https://webflow.com") >= 0 && (E = E.replace("https://webflow.com", "https://formdata.webflow.com")), T = `${E}/signFile`, i = e(u + " form"), i.length && i.each(L)
            }

            function L(U, V) {
                var g = e(V),
                    p = e.data(V, u);
                p || (p = e.data(V, u, {
                    form: g
                })), k(p);
                var v = g.closest("div.w-form");
                p.done = v.find("> .w-form-done"), p.fail = v.find("> .w-form-fail"), p.fileUploads = v.find(".w-file-upload"), p.fileUploads.each(function(W) {
                    H(W, p)
                });
                var c = p.form.attr("aria-label") || p.form.attr("data-name") || "Form";
                p.done.attr("aria-label") || p.form.attr("aria-label", c), p.done.attr("tabindex", "-1"), p.done.attr("role", "region"), p.done.attr("aria-label") || p.done.attr("aria-label", c + " success"), p.fail.attr("tabindex", "-1"), p.fail.attr("role", "region"), p.fail.attr("aria-label") || p.fail.attr("aria-label", c + " failure");
                var D = p.action = g.attr("action");
                if (p.handler = null, p.redirect = g.attr("data-redirect"), A.test(D)) {
                    p.handler = b;
                    return
                }
                if (!D) {
                    if (s) {
                        p.handler = (() => {
                            let W = Xv().default;
                            return W(k, o, Yn, te, G, j, d, K, q, s, P, e, E)
                        })();
                        return
                    }
                    w()
                }
            }

            function F() {
                m = !0, n.on("submit", u + " form", function(W) {
                    var O = e.data(this, u);
                    O.handler && (O.evt = W, O.handler(O))
                });
                let U = ".w-checkbox-input",
                    V = ".w-radio-input",
                    g = "w--redirected-checked",
                    p = "w--redirected-focus",
                    v = "w--redirected-focus-visible",
                    c = ":focus-visible, [data-wf-focus-visible]",
                    D = [
                        ["checkbox", U],
                        ["radio", V]
                    ];
                n.on("change", u + ' form input[type="checkbox"]:not(' + U + ")", W => {
                    e(W.target).siblings(U).toggleClass(g)
                }), n.on("change", u + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${U})`).map(($, se) => e(se).siblings(V).removeClass(g));
                    let O = e(W.target);
                    O.hasClass("w-radio-input") || O.siblings(V).addClass(g)
                }), D.forEach(([W, O]) => {
                    n.on("focus", u + ` form input[type="${W}"]:not(` + O + ")", $ => {
                        e($.target).siblings(O).addClass(p), e($.target).filter(c).siblings(O).addClass(v)
                    }), n.on("blur", u + ` form input[type="${W}"]:not(` + O + ")", $ => {
                        e($.target).siblings(O).removeClass(`${p} ${v}`)
                    })
                })
            }

            function k(U) {
                var V = U.btn = U.form.find(':input[type="submit"]');
                U.wait = U.btn.attr("data-wait") || null, U.success = !1, V.prop("disabled", !1), U.label && V.val(U.label)
            }

            function q(U) {
                var V = U.btn,
                    g = U.wait;
                V.prop("disabled", !0), g && (U.label = V.val(), V.val(g))
            }

            function j(U, V) {
                var g = null;
                return V = V || {}, U.find(':input:not([type="submit"]):not([type="file"])').each(function(p, v) {
                    var c = e(v),
                        D = c.attr("type"),
                        W = c.attr("data-name") || c.attr("name") || "Field " + (p + 1);
                    W = encodeURIComponent(W);
                    var O = c.val();
                    if (D === "checkbox") O = c.is(":checked");
                    else if (D === "radio") {
                        if (V[W] === null || typeof V[W] == "string") return;
                        O = U.find('input[name="' + c.attr("name") + '"]:checked').val() || null
                    }
                    typeof O == "string" && (O = e.trim(O)), V[W] = O, g = g || z(c, D, W, O)
                }), g
            }

            function K(U) {
                var V = {};
                return U.find(':input[type="file"]').each(function(g, p) {
                    var v = e(p),
                        c = v.attr("data-name") || v.attr("name") || "File " + (g + 1),
                        D = v.attr("data-value");
                    typeof D == "string" && (D = e.trim(D)), V[c] = D
                }), V
            }
            let Q = {
                _mkto_trk: "marketo"
            };

            function te() {
                return document.cookie.split("; ").reduce(function(V, g) {
                    let p = g.split("="),
                        v = p[0];
                    if (v in Q) {
                        let c = Q[v],
                            D = p.slice(1).join("=");
                        V[c] = D
                    }
                    return V
                }, {})
            }

            function z(U, V, g, p) {
                var v = null;
                return V === "password" ? v = "Passwords cannot be submitted." : U.attr("required") ? p ? l.test(U.attr("type")) && (I.test(p) || (v = "Please enter a valid email address for: " + g)) : v = "Please fill out the required field: " + g : g === "g-recaptcha-response" && !p && (v = "Please confirm you\u2019re not a robot."), v
            }

            function C(U) {
                G(U), P(U)
            }

            function b(U) {
                k(U);
                var V = U.form,
                    g = {};
                if (/^https/.test(o.href) && !/^https/.test(U.action)) {
                    V.attr("method", "post");
                    return
                }
                G(U);
                var p = j(V, g);
                if (p) return d(p);
                q(U);
                var v;
                t.each(g, function(O, $) {
                    l.test($) && (g.EMAIL = O), /^((full[ _-]?)?name)$/i.test($) && (v = O), /^(first[ _-]?name)$/i.test($) && (g.FNAME = O), /^(last[ _-]?name)$/i.test($) && (g.LNAME = O)
                }), v && !g.FNAME && (v = v.split(" "), g.FNAME = v[0], g.LNAME = g.LNAME || v[1]);
                var c = U.action.replace("/post?", "/post-json?") + "&c=?",
                    D = c.indexOf("u=") + 2;
                D = c.substring(D, c.indexOf("&", D));
                var W = c.indexOf("id=") + 3;
                W = c.substring(W, c.indexOf("&", W)), g["b_" + D + "_" + W] = "", e.ajax({
                    url: c,
                    data: g,
                    dataType: "jsonp"
                }).done(function(O) {
                    U.success = O.result === "success" || /already/.test(O.msg), U.success || console.info("MailChimp error: " + O.msg), P(U)
                }).fail(function() {
                    P(U)
                })
            }

            function P(U) {
                var V = U.form,
                    g = U.redirect,
                    p = U.success;
                if (p && g) {
                    Yn.location(g);
                    return
                }
                U.done.toggle(p), U.fail.toggle(!p), p ? U.done.focus() : U.fail.focus(), V.toggle(!p), k(U)
            }

            function G(U) {
                U.evt && U.evt.preventDefault(), U.evt = null
            }

            function H(U, V) {
                if (!V.fileUploads || !V.fileUploads[U]) return;
                var g, p = e(V.fileUploads[U]),
                    v = p.find("> .w-file-upload-default"),
                    c = p.find("> .w-file-upload-uploading"),
                    D = p.find("> .w-file-upload-success"),
                    W = p.find("> .w-file-upload-error"),
                    O = v.find(".w-file-upload-input"),
                    $ = v.find(".w-file-upload-label"),
                    se = $.children(),
                    ie = W.find(".w-file-upload-error-msg"),
                    _ = D.find(".w-file-upload-file"),
                    B = D.find(".w-file-remove-link"),
                    J = _.find(".w-file-upload-file-name"),
                    Y = ie.attr("data-w-size-error"),
                    le = ie.attr("data-w-type-error"),
                    Ie = ie.attr("data-w-generic-error");
                if (y || $.on("click keydown", function(S) {
                        S.type === "keydown" && S.which !== 13 && S.which !== 32 || (S.preventDefault(), O.click())
                    }), $.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), y) O.on("click", function(S) {
                    S.preventDefault()
                }), $.on("click", function(S) {
                    S.preventDefault()
                }), se.on("click", function(S) {
                    S.preventDefault()
                });
                else {
                    B.on("click keydown", function(S) {
                        if (S.type === "keydown") {
                            if (S.which !== 13 && S.which !== 32) return;
                            S.preventDefault()
                        }
                        O.removeAttr("data-value"), O.val(""), J.html(""), v.toggle(!0), D.toggle(!1), $.focus()
                    }), O.on("change", function(S) {
                        g = S.target && S.target.files && S.target.files[0], g && (v.toggle(!1), W.toggle(!1), c.toggle(!0), c.focus(), J.text(g.name), M() || q(V), V.fileUploads[U].uploading = !0, ee(g, x))
                    });
                    var Ae = $.outerHeight();
                    O.height(Ae), O.width(1)
                }

                function f(S) {
                    var X = S.responseJSON && S.responseJSON.msg,
                        ne = Ie;
                    typeof X == "string" && X.indexOf("InvalidFileTypeError") === 0 ? ne = le : typeof X == "string" && X.indexOf("MaxFileSizeError") === 0 && (ne = Y), ie.text(ne), O.removeAttr("data-value"), O.val(""), c.toggle(!1), v.toggle(!0), W.toggle(!0), W.focus(), V.fileUploads[U].uploading = !1, M() || k(V)
                }

                function x(S, X) {
                    if (S) return f(S);
                    var ne = X.fileName,
                        ae = X.postData,
                        ge = X.fileId,
                        Z = X.s3Url;
                    O.attr("data-value", ge), re(Z, ae, g, ne, R)
                }

                function R(S) {
                    if (S) return f(S);
                    c.toggle(!1), D.css("display", "inline-block"), D.focus(), V.fileUploads[U].uploading = !1, M() || k(V)
                }

                function M() {
                    var S = V.fileUploads && V.fileUploads.toArray() || [];
                    return S.some(function(X) {
                        return X.uploading
                    })
                }
            }

            function ee(U, V) {
                var g = new URLSearchParams({
                    name: U.name,
                    size: U.size
                });
                e.ajax({
                    type: "GET",
                    url: `${T}?${g}`,
                    crossDomain: !0
                }).done(function(p) {
                    V(null, p)
                }).fail(function(p) {
                    V(p)
                })
            }

            function re(U, V, g, p, v) {
                var c = new FormData;
                for (var D in V) c.append(D, V[D]);
                c.append("file", g, p), e.ajax({
                    type: "POST",
                    url: U,
                    data: c,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    v(null)
                }).fail(function(W) {
                    v(W)
                })
            }
            return r
        })
    });
    var Vv = h((FX, Hv) => {
        "use strict";
        var pa = Oe(),
            Uv = "w-condition-invisible",
            xF = "." + Uv;

        function AF(e) {
            return e.filter(function(t) {
                return !Dr(t)
            })
        }

        function Dr(e) {
            return !!(e.$el && e.$el.closest(xF).length)
        }

        function ha(e, t) {
            for (var r = e; r >= 0; r--)
                if (!Dr(t[r])) return r;
            return -1
        }

        function ga(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!Dr(t[r])) return r;
            return -1
        }

        function OF(e, t) {
            return ha(e - 1, t) === -1
        }

        function SF(e, t) {
            return ga(e + 1, t) === -1
        }

        function Nr(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }

        function RF(e, t, r, n) {
            var i = r.tram,
                o = Array.isArray,
                a = "w-lightbox",
                u = a + "-",
                s = /(^|\s+)/g,
                l = [],
                I, d, y, m = [];

            function E(p, v) {
                return l = o(p) ? p : [p], d || E.build(), AF(l).length > 1 && (d.items = d.empty, l.forEach(function(c, D) {
                    var W = V("thumbnail"),
                        O = V("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(W);
                    Nr(O, `show item ${D+1} of ${l.length}`), Dr(c) && O.addClass(Uv), d.items = d.items.add(O), te(c.thumbnailUrl || c.url, function($) {
                        $.prop("width") > $.prop("height") ? H($, "wide") : H($, "tall"), W.append(H($, "thumbnail-image"))
                    })
                }), d.strip.empty().append(d.items), H(d.content, "group")), i(ee(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), H(d.html, "noscroll"), E.show(v || 0)
            }
            E.build = function() {
                return E.destroy(), d = {
                    html: r(t.documentElement),
                    empty: r()
                }, d.arrowLeft = V("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.arrowRight = V("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.close = V("control close").attr("role", "button"), Nr(d.arrowLeft, "previous image"), Nr(d.arrowRight, "next image"), Nr(d.close, "close lightbox"), d.spinner = V("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), d.strip = V("strip").attr("role", "tablist"), y = new b(d.spinner, P("hide")), d.content = V("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close), d.container = V("container").append(d.content, d.strip), d.lightbox = V("backdrop hide").append(d.container), d.strip.on("click", G("item"), L), d.content.on("swipe", F).on("click", G("left"), A).on("click", G("right"), w).on("click", G("close"), N).on("click", G("image, caption"), w), d.container.on("click", G("view"), N).on("dragstart", G("img"), q), d.lightbox.on("keydown", j).on("focusin", k), r(n).append(d.lightbox), E
            }, E.destroy = function() {
                d && (ee(d.html, "noscroll"), d.lightbox.remove(), d = void 0)
            }, E.show = function(p) {
                if (p !== I) {
                    var v = l[p];
                    if (!v) return E.hide();
                    if (Dr(v)) {
                        if (p < I) {
                            var c = ha(p - 1, l);
                            p = c > -1 ? c : p
                        } else {
                            var D = ga(p + 1, l);
                            p = D > -1 ? D : p
                        }
                        v = l[p]
                    }
                    var W = I;
                    I = p, d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), y.show();
                    var O = v.html && g(v.width, v.height) || v.url;
                    return te(O, function($) {
                        if (p !== I) return;
                        var se = V("figure", "figure").append(H($, "image")),
                            ie = V("frame").append(se),
                            _ = V("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ie),
                            B, J;
                        v.html && (B = r(v.html), J = B.is("iframe"), J && B.on("load", Y), se.append(H(B, "embed"))), v.caption && se.append(V("caption", "figcaption").text(v.caption)), d.spinner.before(_), J || Y();

                        function Y() {
                            if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), y.hide(), p !== I) {
                                _.remove();
                                return
                            }
                            let le = OF(p, l);
                            re(d.arrowLeft, "inactive", le), U(d.arrowLeft, le), le && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                            let Ie = SF(p, l);
                            if (re(d.arrowRight, "inactive", Ie), U(d.arrowRight, Ie), Ie && d.arrowRight.is(":focus") && d.arrowLeft.focus(), d.view ? (i(d.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(z(d.view)), i(_).add("opacity .3s").add("transform .3s").set({
                                    x: p > W ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : _.css("opacity", 1), d.view = _, d.view.prop("tabIndex", 0), d.items) {
                                ee(d.items, "active"), d.items.removeAttr("aria-selected");
                                var Ae = d.items.eq(p);
                                H(Ae, "active"), Ae.attr("aria-selected", !0), C(Ae)
                            }
                        }
                    }), d.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), m.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), d.close.focus()), E
                }
            }, E.hide = function() {
                return i(d.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(Q), E
            }, E.prev = function() {
                var p = ha(I - 1, l);
                p > -1 && E.show(p)
            }, E.next = function() {
                var p = ga(I + 1, l);
                p > -1 && E.show(p)
            };

            function T(p) {
                return function(v) {
                    this === v.target && (v.stopPropagation(), v.preventDefault(), p())
                }
            }
            var A = T(E.prev),
                w = T(E.next),
                N = T(E.hide),
                L = function(p) {
                    var v = r(this).index();
                    p.preventDefault(), E.show(v)
                },
                F = function(p, v) {
                    p.preventDefault(), v.direction === "left" ? E.next() : v.direction === "right" && E.prev()
                },
                k = function() {
                    this.focus()
                };

            function q(p) {
                p.preventDefault()
            }

            function j(p) {
                var v = p.keyCode;
                v === 27 || K(v, "close") ? E.hide() : v === 37 || K(v, "left") ? E.prev() : v === 39 || K(v, "right") ? E.next() : K(v, "item") && r(":focus").click()
            }

            function K(p, v) {
                if (p !== 13 && p !== 32) return !1;
                var c = r(":focus").attr("class"),
                    D = P(v).trim();
                return c.includes(D)
            }

            function Q() {
                d && (d.strip.scrollLeft(0).empty(), ee(d.html, "noscroll"), H(d.lightbox, "hide"), d.view && d.view.remove(), ee(d.content, "group"), H(d.arrowLeft, "inactive"), H(d.arrowRight, "inactive"), I = d.view = void 0, m.forEach(function(p) {
                    var v = p.node;
                    v && (p.hidden ? v.attr("aria-hidden", p.hidden) : v.removeAttr("aria-hidden"), p.tabIndex ? v.attr("tabIndex", p.tabIndex) : v.removeAttr("tabIndex"))
                }), m = [], r(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function te(p, v) {
                var c = V("img", "img");
                return c.one("load", function() {
                    v(c)
                }), c.attr("src", p), c
            }

            function z(p) {
                return function() {
                    p.remove()
                }
            }

            function C(p) {
                var v = p.get(0),
                    c = d.strip.get(0),
                    D = v.offsetLeft,
                    W = v.clientWidth,
                    O = c.scrollLeft,
                    $ = c.clientWidth,
                    se = c.scrollWidth - $,
                    ie;
                D < O ? ie = Math.max(0, D + W - $) : D + W > $ + O && (ie = Math.min(D, se)), ie != null && i(d.strip).add("scroll-left 500ms").start({
                    "scroll-left": ie
                })
            }

            function b(p, v, c) {
                this.$element = p, this.className = v, this.delay = c || 200, this.hide()
            }
            b.prototype.show = function() {
                var p = this;
                p.timeoutId || (p.timeoutId = setTimeout(function() {
                    p.$element.removeClass(p.className), delete p.timeoutId
                }, p.delay))
            }, b.prototype.hide = function() {
                var p = this;
                if (p.timeoutId) {
                    clearTimeout(p.timeoutId), delete p.timeoutId;
                    return
                }
                p.$element.addClass(p.className)
            };

            function P(p, v) {
                return p.replace(s, (v ? " ." : " ") + u)
            }

            function G(p) {
                return P(p, !0)
            }

            function H(p, v) {
                return p.addClass(P(v))
            }

            function ee(p, v) {
                return p.removeClass(P(v))
            }

            function re(p, v, c) {
                return p.toggleClass(P(v), c)
            }

            function U(p, v) {
                return p.attr("aria-hidden", v).attr("tabIndex", v ? -1 : 0)
            }

            function V(p, v) {
                return H(r(t.createElement(v || "div")), p)
            }

            function g(p, v) {
                var c = '<svg xmlns="http://www.w3.org/2000/svg" width="' + p + '" height="' + v + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(c)
            }
            return function() {
                var p = e.navigator.userAgent,
                    v = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    c = p.match(v),
                    D = p.indexOf("Android ") > -1 && p.indexOf("Chrome") === -1;
                if (!D && (!c || c[2] > 7)) return;
                var W = t.createElement("style");
                t.head.appendChild(W), e.addEventListener("resize", O, !0);

                function O() {
                    var $ = e.innerHeight,
                        se = e.innerWidth,
                        ie = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + $ + "px}.w-lightbox-view {width:" + se + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * $ + "px}.w-lightbox-image {max-width:" + se + "px;max-height:" + $ + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * $ + "px}.w-lightbox-strip {padding: 0 " + .01 * $ + "px}.w-lightbox-item {width:" + .1 * $ + "px;padding:" + .02 * $ + "px " + .01 * $ + "px}.w-lightbox-thumbnail {height:" + .1 * $ + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * $ + "px}.w-lightbox-content {margin-top:" + .02 * $ + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * $ + "px}.w-lightbox-image {max-width:" + .96 * se + "px;max-height:" + .96 * $ + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * se + "px;max-height:" + .84 * $ + "px}}";
                    W.textContent = ie
                }
                O()
            }(), E
        }
        pa.define("lightbox", Hv.exports = function(e) {
            var t = {},
                r = pa.env(),
                n = RF(window, document, e, r ? "#lightbox-mountpoint" : "body"),
                i = e(document),
                o, a, u = ".w-lightbox",
                s;
            t.ready = t.design = t.preview = l;

            function l() {
                a = r && pa.env("design"), n.destroy(), s = {}, o = i.find(u), o.webflowLightBox(), o.each(function() {
                    Nr(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var m = this;
                    e.each(m, function(E, T) {
                        var A = e.data(T, u);
                        A || (A = e.data(T, u, {
                            el: e(T),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), A.el.off(u), I(A), a ? A.el.on("setting" + u, I.bind(null, A)) : A.el.on("click" + u, d(A)).on("click" + u, function(w) {
                            w.preventDefault()
                        })
                    })
                }
            });

            function I(m) {
                var E = m.el.children(".w-json").html(),
                    T, A;
                if (!E) {
                    m.items = [];
                    return
                }
                try {
                    E = JSON.parse(E)
                } catch (w) {
                    console.error("Malformed lightbox JSON configuration.", w)
                }
                y(E), E.items.forEach(function(w) {
                    w.$el = m.el
                }), T = E.group, T ? (A = s[T], A || (A = s[T] = []), m.items = A, E.items.length && (m.index = A.length, A.push.apply(A, E.items))) : (m.items = E.items, m.index = 0)
            }

            function d(m) {
                return function() {
                    m.items.length && n(m.items, m.index || 0)
                }
            }

            function y(m) {
                m.images && (m.images.forEach(function(E) {
                    E.type = "image"
                }), m.items = m.images), m.embed && (m.embed.type = "video", m.items = [m.embed]), m.groupId && (m.group = m.groupId)
            }
            return t
        })
    });
    var zv = h((qX, Bv) => {
        "use strict";
        var vt = Oe(),
            CF = Ct(),
            xe = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        vt.define("navbar", Bv.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                u, s, l, I, d = vt.env(),
                y = '<div class="w-nav-overlay" data-wf-ignore />',
                m = ".w-nav",
                E = "w--open",
                T = "w--nav-dropdown-open",
                A = "w--nav-dropdown-toggle-open",
                w = "w--nav-dropdown-list-open",
                N = "w--nav-link-open",
                L = CF.triggers,
                F = e();
            r.ready = r.design = r.preview = k, r.destroy = function() {
                F = e(), q(), s && s.length && s.each(te)
            };

            function k() {
                l = d && vt.env("design"), I = vt.env("editor"), u = e(document.body), s = o.find(m), s.length && (s.each(Q), q(), j())
            }

            function q() {
                vt.resize.off(K)
            }

            function j() {
                vt.resize.on(K)
            }

            function K() {
                s.each(v)
            }

            function Q(_, B) {
                var J = e(B),
                    Y = e.data(B, m);
                Y || (Y = e.data(B, m, {
                    open: !1,
                    el: J,
                    config: {},
                    selectedIdx: -1
                })), Y.menu = J.find(".w-nav-menu"), Y.links = Y.menu.find(".w-nav-link"), Y.dropdowns = Y.menu.find(".w-dropdown"), Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle"), Y.dropdownList = Y.menu.find(".w-dropdown-list"), Y.button = J.find(".w-nav-button"), Y.container = J.find(".w-container"), Y.overlayContainerId = "w-nav-overlay-" + _, Y.outside = g(Y);
                var le = J.find(".w-nav-brand");
                le && le.attr("href") === "/" && le.attr("aria-label") == null && le.attr("aria-label", "home"), Y.button.attr("style", "-webkit-user-select: text;"), Y.button.attr("aria-label") == null && Y.button.attr("aria-label", "menu"), Y.button.attr("role", "button"), Y.button.attr("tabindex", "0"), Y.button.attr("aria-controls", Y.overlayContainerId), Y.button.attr("aria-haspopup", "menu"), Y.button.attr("aria-expanded", "false"), Y.el.off(m), Y.button.off(m), Y.menu.off(m), b(Y), l ? (z(Y), Y.el.on("setting" + m, P(Y))) : (C(Y), Y.button.on("click" + m, U(Y)), Y.menu.on("click" + m, "a", V(Y)), Y.button.on("keydown" + m, G(Y)), Y.el.on("keydown" + m, H(Y))), v(_, B)
            }

            function te(_, B) {
                var J = e.data(B, m);
                J && (z(J), e.removeData(B, m))
            }

            function z(_) {
                _.overlay && (ie(_, !0), _.overlay.remove(), _.overlay = null)
            }

            function C(_) {
                _.overlay || (_.overlay = e(y).appendTo(_.el), _.overlay.attr("id", _.overlayContainerId), _.parent = _.menu.parent(), ie(_, !0))
            }

            function b(_) {
                var B = {},
                    J = _.config || {},
                    Y = B.animation = _.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(Y), B.animDirect = /left$/.test(Y) ? -1 : 1, J.animation !== Y && _.open && t.defer(re, _), B.easing = _.el.attr("data-easing") || "ease", B.easing2 = _.el.attr("data-easing2") || "ease";
                var le = _.el.attr("data-duration");
                B.duration = le != null ? Number(le) : 400, B.docHeight = _.el.attr("data-doc-height"), _.config = B
            }

            function P(_) {
                return function(B, J) {
                    J = J || {};
                    var Y = i.width();
                    b(_), J.open === !0 && $(_, !0), J.open === !1 && ie(_, !0), _.open && t.defer(function() {
                        Y !== i.width() && re(_)
                    })
                }
            }

            function G(_) {
                return function(B) {
                    switch (B.keyCode) {
                        case xe.SPACE:
                        case xe.ENTER:
                            return U(_)(), B.preventDefault(), B.stopPropagation();
                        case xe.ESCAPE:
                            return ie(_), B.preventDefault(), B.stopPropagation();
                        case xe.ARROW_RIGHT:
                        case xe.ARROW_DOWN:
                        case xe.HOME:
                        case xe.END:
                            return _.open ? (B.keyCode === xe.END ? _.selectedIdx = _.links.length - 1 : _.selectedIdx = 0, ee(_), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                    }
                }
            }

            function H(_) {
                return function(B) {
                    if (_.open) switch (_.selectedIdx = _.links.index(document.activeElement), B.keyCode) {
                        case xe.HOME:
                        case xe.END:
                            return B.keyCode === xe.END ? _.selectedIdx = _.links.length - 1 : _.selectedIdx = 0, ee(_), B.preventDefault(), B.stopPropagation();
                        case xe.ESCAPE:
                            return ie(_), _.button.focus(), B.preventDefault(), B.stopPropagation();
                        case xe.ARROW_LEFT:
                        case xe.ARROW_UP:
                            return _.selectedIdx = Math.max(-1, _.selectedIdx - 1), ee(_), B.preventDefault(), B.stopPropagation();
                        case xe.ARROW_RIGHT:
                        case xe.ARROW_DOWN:
                            return _.selectedIdx = Math.min(_.links.length - 1, _.selectedIdx + 1), ee(_), B.preventDefault(), B.stopPropagation()
                    }
                }
            }

            function ee(_) {
                if (_.links[_.selectedIdx]) {
                    var B = _.links[_.selectedIdx];
                    B.focus(), V(B)
                }
            }

            function re(_) {
                _.open && (ie(_, !0), $(_, !0))
            }

            function U(_) {
                return a(function() {
                    _.open ? ie(_) : $(_)
                })
            }

            function V(_) {
                return function(B) {
                    var J = e(this),
                        Y = J.attr("href");
                    if (!vt.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    Y && Y.indexOf("#") === 0 && _.open && ie(_)
                }
            }

            function g(_) {
                return _.outside && o.off("click" + m, _.outside),
                    function(B) {
                        var J = e(B.target);
                        I && J.closest(".w-editor-bem-EditorOverlay").length || p(_, J)
                    }
            }
            var p = a(function(_, B) {
                if (_.open) {
                    var J = B.closest(".w-nav-menu");
                    _.menu.is(J) || ie(_)
                }
            });

            function v(_, B) {
                var J = e.data(B, m),
                    Y = J.collapsed = J.button.css("display") !== "none";
                if (J.open && !Y && !l && ie(J, !0), J.container.length) {
                    var le = D(J);
                    J.links.each(le), J.dropdowns.each(le)
                }
                J.open && se(J)
            }
            var c = "max-width";

            function D(_) {
                var B = _.container.css(c);
                return B === "none" && (B = ""),
                    function(J, Y) {
                        Y = e(Y), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, B)
                    }
            }

            function W(_, B) {
                B.setAttribute("data-nav-menu-open", "")
            }

            function O(_, B) {
                B.removeAttribute("data-nav-menu-open")
            }

            function $(_, B) {
                if (_.open) return;
                _.open = !0, _.menu.each(W), _.links.addClass(N), _.dropdowns.addClass(T), _.dropdownToggle.addClass(A), _.dropdownList.addClass(w), _.button.addClass(E);
                var J = _.config,
                    Y = J.animation;
                (Y === "none" || !n.support.transform || J.duration <= 0) && (B = !0);
                var le = se(_),
                    Ie = _.menu.outerHeight(!0),
                    Ae = _.menu.outerWidth(!0),
                    f = _.el.height(),
                    x = _.el[0];
                if (v(0, x), L.intro(0, x), vt.redraw.up(), l || o.on("click" + m, _.outside), B) {
                    S();
                    return
                }
                var R = "transform " + J.duration + "ms " + J.easing;
                if (_.overlay && (F = _.menu.prev(), _.overlay.show().append(_.menu)), J.animOver) {
                    n(_.menu).add(R).set({
                        x: J.animDirect * Ae,
                        height: le
                    }).start({
                        x: 0
                    }).then(S), _.overlay && _.overlay.width(Ae);
                    return
                }
                var M = f + Ie;
                n(_.menu).add(R).set({
                    y: -M
                }).start({
                    y: 0
                }).then(S);

                function S() {
                    _.button.attr("aria-expanded", "true")
                }
            }

            function se(_) {
                var B = _.config,
                    J = B.docHeight ? o.height() : u.height();
                return B.animOver ? _.menu.height(J) : _.el.css("position") !== "fixed" && (J -= _.el.outerHeight(!0)), _.overlay && _.overlay.height(J), J
            }

            function ie(_, B) {
                if (!_.open) return;
                _.open = !1, _.button.removeClass(E);
                var J = _.config;
                if ((J.animation === "none" || !n.support.transform || J.duration <= 0) && (B = !0), L.outro(0, _.el[0]), o.off("click" + m, _.outside), B) {
                    n(_.menu).stop(), x();
                    return
                }
                var Y = "transform " + J.duration + "ms " + J.easing2,
                    le = _.menu.outerHeight(!0),
                    Ie = _.menu.outerWidth(!0),
                    Ae = _.el.height();
                if (J.animOver) {
                    n(_.menu).add(Y).start({
                        x: Ie * J.animDirect
                    }).then(x);
                    return
                }
                var f = Ae + le;
                n(_.menu).add(Y).start({
                    y: -f
                }).then(x);

                function x() {
                    _.menu.height(""), n(_.menu).set({
                        x: 0,
                        y: 0
                    }), _.menu.each(O), _.links.removeClass(N), _.dropdowns.removeClass(T), _.dropdownToggle.removeClass(A), _.dropdownList.removeClass(w), _.overlay && _.overlay.children().length && (F.length ? _.menu.insertAfter(F) : _.menu.prependTo(_.parent), _.overlay.attr("style", "").hide()), _.el.triggerHandler("w-close"), _.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var Yv = h((kX, jv) => {
        "use strict";
        var mt = Oe(),
            LF = Ct(),
            it = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Kv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        mt.define("slider", jv.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, a, u = mt.env(),
                s = ".w-slider",
                l = '<div class="w-slider-dot" data-wf-ignore />',
                I = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                d = "w-slider-force-show",
                y = LF.triggers,
                m, E = !1;
            r.ready = function() {
                a = mt.env("design"), T()
            }, r.design = function() {
                a = !0, setTimeout(T, 1e3)
            }, r.preview = function() {
                a = !1, T()
            }, r.redraw = function() {
                E = !0, T(), E = !1
            }, r.destroy = A;

            function T() {
                o = i.find(s), o.length && (o.each(L), !m && (A(), w()))
            }

            function A() {
                mt.resize.off(N), mt.redraw.off(r.redraw)
            }

            function w() {
                mt.resize.on(N), mt.redraw.on(r.redraw)
            }

            function N() {
                o.filter(":visible").each(H)
            }

            function L(g, p) {
                var v = e(p),
                    c = e.data(p, s);
                c || (c = e.data(p, s, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: v,
                    config: {}
                })), c.mask = v.children(".w-slider-mask"), c.left = v.children(".w-slider-arrow-left"), c.right = v.children(".w-slider-arrow-right"), c.nav = v.children(".w-slider-nav"), c.slides = c.mask.children(".w-slide"), c.slides.each(y.reset), E && (c.maskWidth = 0), v.attr("role") === void 0 && v.attr("role", "region"), v.attr("aria-label") === void 0 && v.attr("aria-label", "carousel");
                var D = c.mask.attr("id");
                if (D || (D = "w-slider-mask-" + g, c.mask.attr("id", D)), !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(I).appendTo(c.mask)), c.left.attr("role", "button"), c.left.attr("tabindex", "0"), c.left.attr("aria-controls", D), c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"), c.right.attr("role", "button"), c.right.attr("tabindex", "0"), c.right.attr("aria-controls", D), c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"), !n.support.transform) {
                    c.left.hide(), c.right.hide(), c.nav.hide(), m = !0;
                    return
                }
                c.el.off(s), c.left.off(s), c.right.off(s), c.nav.off(s), F(c), a ? (c.el.on("setting" + s, b(c)), C(c), c.hasTimer = !1) : (c.el.on("swipe" + s, b(c)), c.left.on("click" + s, K(c)), c.right.on("click" + s, Q(c)), c.left.on("keydown" + s, j(c, K)), c.right.on("keydown" + s, j(c, Q)), c.nav.on("keydown" + s, "> div", b(c)), c.config.autoplay && !c.hasTimer && (c.hasTimer = !0, c.timerCount = 1, z(c)), c.el.on("mouseenter" + s, q(c, !0, "mouse")), c.el.on("focusin" + s, q(c, !0, "keyboard")), c.el.on("mouseleave" + s, q(c, !1, "mouse")), c.el.on("focusout" + s, q(c, !1, "keyboard"))), c.nav.on("click" + s, "> div", b(c)), u || c.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var W = v.filter(":hidden");
                W.addClass(d);
                var O = v.parents(":hidden");
                O.addClass(d), E || H(g, p), W.removeClass(d), O.removeClass(d)
            }

            function F(g) {
                var p = {};
                p.crossOver = 0, p.animation = g.el.attr("data-animation") || "slide", p.animation === "outin" && (p.animation = "cross", p.crossOver = .5), p.easing = g.el.attr("data-easing") || "ease";
                var v = g.el.attr("data-duration");
                if (p.duration = v != null ? parseInt(v, 10) : 500, k(g.el.attr("data-infinite")) && (p.infinite = !0), k(g.el.attr("data-disable-swipe")) && (p.disableSwipe = !0), k(g.el.attr("data-hide-arrows")) ? p.hideArrows = !0 : g.config.hideArrows && (g.left.show(), g.right.show()), k(g.el.attr("data-autoplay"))) {
                    p.autoplay = !0, p.delay = parseInt(g.el.attr("data-delay"), 10) || 2e3, p.timerMax = parseInt(g.el.attr("data-autoplay-limit"), 10);
                    var c = "mousedown" + s + " touchstart" + s;
                    a || g.el.off(c).one(c, function() {
                        C(g)
                    })
                }
                var D = g.right.width();
                p.edge = D ? D + 40 : 100, g.config = p
            }

            function k(g) {
                return g === "1" || g === "true"
            }

            function q(g, p, v) {
                return function(c) {
                    if (p) g.hasFocus[v] = p;
                    else if (e.contains(g.el.get(0), c.relatedTarget) || (g.hasFocus[v] = p, g.hasFocus.mouse && v === "keyboard" || g.hasFocus.keyboard && v === "mouse")) return;
                    p ? (g.ariaLiveLabel.attr("aria-live", "polite"), g.hasTimer && C(g)) : (g.ariaLiveLabel.attr("aria-live", "off"), g.hasTimer && z(g))
                }
            }

            function j(g, p) {
                return function(v) {
                    switch (v.keyCode) {
                        case it.SPACE:
                        case it.ENTER:
                            return p(g)(), v.preventDefault(), v.stopPropagation()
                    }
                }
            }

            function K(g) {
                return function() {
                    G(g, {
                        index: g.index - 1,
                        vector: -1
                    })
                }
            }

            function Q(g) {
                return function() {
                    G(g, {
                        index: g.index + 1,
                        vector: 1
                    })
                }
            }

            function te(g, p) {
                var v = null;
                p === g.slides.length && (T(), ee(g)), t.each(g.anchors, function(c, D) {
                    e(c.els).each(function(W, O) {
                        e(O).index() === p && (v = D)
                    })
                }), v != null && G(g, {
                    index: v,
                    immediate: !0
                })
            }

            function z(g) {
                C(g);
                var p = g.config,
                    v = p.timerMax;
                v && g.timerCount++ > v || (g.timerId = window.setTimeout(function() {
                    g.timerId == null || a || (Q(g)(), z(g))
                }, p.delay))
            }

            function C(g) {
                window.clearTimeout(g.timerId), g.timerId = null
            }

            function b(g) {
                return function(p, v) {
                    v = v || {};
                    var c = g.config;
                    if (a && p.type === "setting") {
                        if (v.select === "prev") return K(g)();
                        if (v.select === "next") return Q(g)();
                        if (F(g), ee(g), v.select == null) return;
                        te(g, v.select);
                        return
                    }
                    if (p.type === "swipe") return c.disableSwipe || mt.env("editor") ? void 0 : v.direction === "left" ? Q(g)() : v.direction === "right" ? K(g)() : void 0;
                    if (g.nav.has(p.target).length) {
                        var D = e(p.target).index();
                        if (p.type === "click" && G(g, {
                                index: D
                            }), p.type === "keydown") switch (p.keyCode) {
                            case it.ENTER:
                            case it.SPACE:
                                {
                                    G(g, {
                                        index: D
                                    }),
                                    p.preventDefault();
                                    break
                                }
                            case it.ARROW_LEFT:
                            case it.ARROW_UP:
                                {
                                    P(g.nav, Math.max(D - 1, 0)),
                                    p.preventDefault();
                                    break
                                }
                            case it.ARROW_RIGHT:
                            case it.ARROW_DOWN:
                                {
                                    P(g.nav, Math.min(D + 1, g.pages)),
                                    p.preventDefault();
                                    break
                                }
                            case it.HOME:
                                {
                                    P(g.nav, 0),
                                    p.preventDefault();
                                    break
                                }
                            case it.END:
                                {
                                    P(g.nav, g.pages),
                                    p.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function P(g, p) {
                var v = g.children().eq(p).focus();
                g.children().not(v)
            }

            function G(g, p) {
                p = p || {};
                var v = g.config,
                    c = g.anchors;
                g.previous = g.index;
                var D = p.index,
                    W = {};
                D < 0 ? (D = c.length - 1, v.infinite && (W.x = -g.endX, W.from = 0, W.to = c[0].width)) : D >= c.length && (D = 0, v.infinite && (W.x = c[c.length - 1].width, W.from = -c[c.length - 1].x, W.to = W.from - W.x)), g.index = D;
                var O = g.nav.children().eq(D).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                g.nav.children().not(O).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), v.hideArrows && (g.index === c.length - 1 ? g.right.hide() : g.right.show(), g.index === 0 ? g.left.hide() : g.left.show());
                var $ = g.offsetX || 0,
                    se = g.offsetX = -c[g.index].x,
                    ie = {
                        x: se,
                        opacity: 1,
                        visibility: ""
                    },
                    _ = e(c[g.index].els),
                    B = e(c[g.previous] && c[g.previous].els),
                    J = g.slides.not(_),
                    Y = v.animation,
                    le = v.easing,
                    Ie = Math.round(v.duration),
                    Ae = p.vector || (g.index > g.previous ? 1 : -1),
                    f = "opacity " + Ie + "ms " + le,
                    x = "transform " + Ie + "ms " + le;
                if (_.find(Kv).removeAttr("tabindex"), _.removeAttr("aria-hidden"), _.find("*").removeAttr("aria-hidden"), J.find(Kv).attr("tabindex", "-1"), J.attr("aria-hidden", "true"), J.find("*").attr("aria-hidden", "true"), a || (_.each(y.intro), J.each(y.outro)), p.immediate && !E) {
                    n(_).set(ie), S();
                    return
                }
                if (g.index === g.previous) return;
                if (a || g.ariaLiveLabel.text(`Slide ${D+1} of ${c.length}.`), Y === "cross") {
                    var R = Math.round(Ie - Ie * v.crossOver),
                        M = Math.round(Ie - R);
                    f = "opacity " + R + "ms " + le, n(B).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }), n(_).set({
                        visibility: "",
                        x: se,
                        opacity: 0,
                        zIndex: g.depth++
                    }).add(f).wait(M).then({
                        opacity: 1
                    }).then(S);
                    return
                }
                if (Y === "fade") {
                    n(B).set({
                        visibility: ""
                    }).stop(), n(_).set({
                        visibility: "",
                        x: se,
                        opacity: 0,
                        zIndex: g.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(S);
                    return
                }
                if (Y === "over") {
                    ie = {
                        x: g.endX
                    }, n(B).set({
                        visibility: ""
                    }).stop(), n(_).set({
                        visibility: "",
                        zIndex: g.depth++,
                        x: se + c[g.index].width * Ae
                    }).add(x).start({
                        x: se
                    }).then(S);
                    return
                }
                v.infinite && W.x ? (n(g.slides.not(B)).set({
                    visibility: "",
                    x: W.x
                }).add(x).start({
                    x: se
                }), n(B).set({
                    visibility: "",
                    x: W.from
                }).add(x).start({
                    x: W.to
                }), g.shifted = B) : (v.infinite && g.shifted && (n(g.shifted).set({
                    visibility: "",
                    x: $
                }), g.shifted = null), n(g.slides).set({
                    visibility: ""
                }).add(x).start({
                    x: se
                }));

                function S() {
                    _ = e(c[g.index].els), J = g.slides.not(_), Y !== "slide" && (ie.visibility = "hidden"), n(J).set(ie)
                }
            }

            function H(g, p) {
                var v = e.data(p, s);
                if (v) {
                    if (U(v)) return ee(v);
                    a && V(v) && ee(v)
                }
            }

            function ee(g) {
                var p = 1,
                    v = 0,
                    c = 0,
                    D = 0,
                    W = g.maskWidth,
                    O = W - g.config.edge;
                O < 0 && (O = 0), g.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], g.slides.each(function(se, ie) {
                    c - v > O && (p++, v += W, g.anchors[p - 1] = {
                        els: [],
                        x: c,
                        width: 0
                    }), D = e(ie).outerWidth(!0), c += D, g.anchors[p - 1].width += D, g.anchors[p - 1].els.push(ie);
                    var _ = se + 1 + " of " + g.slides.length;
                    e(ie).attr("aria-label", _), e(ie).attr("role", "group")
                }), g.endX = c, a && (g.pages = null), g.nav.length && g.pages !== p && (g.pages = p, re(g));
                var $ = g.index;
                $ >= p && ($ = p - 1), G(g, {
                    immediate: !0,
                    index: $
                })
            }

            function re(g) {
                var p = [],
                    v, c = g.el.attr("data-nav-spacing");
                c && (c = parseFloat(c) + "px");
                for (var D = 0, W = g.pages; D < W; D++) v = e(l), v.attr("aria-label", "Show slide " + (D + 1) + " of " + W).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), g.nav.hasClass("w-num") && v.text(D + 1), c != null && v.css({
                    "margin-left": c,
                    "margin-right": c
                }), p.push(v);
                g.nav.empty().append(p)
            }

            function U(g) {
                var p = g.mask.width();
                return g.maskWidth !== p ? (g.maskWidth = p, !0) : !1
            }

            function V(g) {
                var p = 0;
                return g.slides.each(function(v, c) {
                    p += e(c).outerWidth(!0)
                }), g.slidesWidth !== p ? (g.slidesWidth = p, !0) : !1
            }
            return r
        })
    });
    var $v = h((XX, Qv) => {
        "use strict";
        var Et = Oe(),
            PF = Ct();
        Et.define("tabs", Qv.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, a = Et.env,
                u = a.safari,
                s = a(),
                l = "data-w-tab",
                I = "data-w-pane",
                d = ".w-tabs",
                y = "w--current",
                m = "w--tab-active",
                E = PF.triggers,
                T = !1;
            t.ready = t.design = t.preview = A, t.redraw = function() {
                T = !0, A(), T = !1
            }, t.destroy = function() {
                i = n.find(d), i.length && (i.each(L), w())
            };

            function A() {
                o = s && Et.env("design"), i = n.find(d), i.length && (i.each(F), Et.env("preview") && !T && i.each(L), w(), N())
            }

            function w() {
                Et.redraw.off(t.redraw)
            }

            function N() {
                Et.redraw.on(t.redraw)
            }

            function L(z, C) {
                var b = e.data(C, d);
                b && (b.links && b.links.each(E.reset), b.panes && b.panes.each(E.reset))
            }

            function F(z, C) {
                var b = d.substr(1) + "-" + z,
                    P = e(C),
                    G = e.data(C, d);
                if (G || (G = e.data(C, d, {
                        el: P,
                        config: {}
                    })), G.current = null, G.tabIdentifier = b + "-" + l, G.paneIdentifier = b + "-" + I, G.menu = P.children(".w-tab-menu"), G.links = G.menu.children(".w-tab-link"), G.content = P.children(".w-tab-content"), G.panes = G.content.children(".w-tab-pane"), G.el.off(d), G.links.off(d), G.menu.attr("role", "tablist"), G.links.attr("tabindex", "-1"), k(G), !o) {
                    G.links.on("click" + d, j(G)), G.links.on("keydown" + d, K(G));
                    var H = G.links.filter("." + y),
                        ee = H.attr(l);
                    ee && Q(G, {
                        tab: ee,
                        immediate: !0
                    })
                }
            }

            function k(z) {
                var C = {};
                C.easing = z.el.attr("data-easing") || "ease";
                var b = parseInt(z.el.attr("data-duration-in"), 10);
                b = C.intro = b === b ? b : 0;
                var P = parseInt(z.el.attr("data-duration-out"), 10);
                P = C.outro = P === P ? P : 0, C.immediate = !b && !P, z.config = C
            }

            function q(z) {
                var C = z.current;
                return Array.prototype.findIndex.call(z.links, b => b.getAttribute(l) === C, null)
            }

            function j(z) {
                return function(C) {
                    C.preventDefault();
                    var b = C.currentTarget.getAttribute(l);
                    b && Q(z, {
                        tab: b
                    })
                }
            }

            function K(z) {
                return function(C) {
                    var b = q(z),
                        P = C.key,
                        G = {
                            ArrowLeft: b - 1,
                            ArrowUp: b - 1,
                            ArrowRight: b + 1,
                            ArrowDown: b + 1,
                            End: z.links.length - 1,
                            Home: 0
                        };
                    if (P in G) {
                        C.preventDefault();
                        var H = G[P];
                        H === -1 && (H = z.links.length - 1), H === z.links.length && (H = 0);
                        var ee = z.links[H],
                            re = ee.getAttribute(l);
                        re && Q(z, {
                            tab: re
                        })
                    }
                }
            }

            function Q(z, C) {
                C = C || {};
                var b = z.config,
                    P = b.easing,
                    G = C.tab;
                if (G !== z.current) {
                    z.current = G;
                    var H;
                    z.links.each(function(v, c) {
                        var D = e(c);
                        if (C.immediate || b.immediate) {
                            var W = z.panes[v];
                            c.id || (c.id = z.tabIdentifier + "-" + v), W.id || (W.id = z.paneIdentifier + "-" + v), c.href = "#" + W.id, c.setAttribute("role", "tab"), c.setAttribute("aria-controls", W.id), c.setAttribute("aria-selected", "false"), W.setAttribute("role", "tabpanel"), W.setAttribute("aria-labelledby", c.id)
                        }
                        c.getAttribute(l) === G ? (H = c, D.addClass(y).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(E.intro)) : D.hasClass(y) && D.removeClass(y).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(E.outro)
                    });
                    var ee = [],
                        re = [];
                    z.panes.each(function(v, c) {
                        var D = e(c);
                        c.getAttribute(l) === G ? ee.push(c) : D.hasClass(m) && re.push(c)
                    });
                    var U = e(ee),
                        V = e(re);
                    if (C.immediate || b.immediate) {
                        U.addClass(m).each(E.intro), V.removeClass(m), T || Et.redraw.up();
                        return
                    } else {
                        var g = window.scrollX,
                            p = window.scrollY;
                        H.focus(), window.scrollTo(g, p)
                    }
                    V.length && b.outro ? (V.each(E.outro), r(V).add("opacity " + b.outro + "ms " + P, {
                        fallback: u
                    }).start({
                        opacity: 0
                    }).then(() => te(b, V, U))) : te(b, V, U)
                }
            }

            function te(z, C, b) {
                if (C.removeClass(m).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), b.addClass(m).each(E.intro), Et.redraw.up(), !z.intro) return r(b).set({
                    opacity: 1
                });
                r(b).set({
                    opacity: 0
                }).redraw().add("opacity " + z.intro + "ms " + z.easing, {
                    fallback: u
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Ra();
    La();
    Na();
    Fa();
    Ct();
    Rv();
    Lv();
    Nv();
    Mv();
    kv();
    Wv();
    Vv();
    zv();
    Yv();
    $v();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".dropdown",
                "originalId": "f4e8184d-ed95-3f5d-486e-5c987b67c968",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown",
                "originalId": "f4e8184d-ed95-3f5d-486e-5c987b67c968",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1602798230428
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".dropdown",
                "originalId": "f4e8184d-ed95-3f5d-486e-5c987b67c968",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown",
                "originalId": "f4e8184d-ed95-3f5d-486e-5c987b67c968",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1602798230429
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accordion-header",
                "originalId": "63f4577b605c2a3fb76a9b83|b6117b45-3e39-71f7-6c2b-45c5c8fe31d2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accordion-header",
                "originalId": "63f4577b605c2a3fb76a9b83|b6117b45-3e39-71f7-6c2b-45c5c8fe31d2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603071066188
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accordion-header",
                "originalId": "63f4577b605c2a3fb76a9b83|b6117b45-3e39-71f7-6c2b-45c5c8fe31d2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accordion-header",
                "originalId": "63f4577b605c2a3fb76a9b83|b6117b45-3e39-71f7-6c2b-45c5c8fe31d2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603071066188
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".img-hero",
                "originalId": "63f4577b605c2a3fb76a9b83|bb614453-6186-4262-0067-d7679cdc8aa0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".img-hero",
                "originalId": "63f4577b605c2a3fb76a9b83|bb614453-6186-4262-0067-d7679cdc8aa0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603659391688
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".img-hero",
                "originalId": "63f4577b605c2a3fb76a9b83|bb614453-6186-4262-0067-d7679cdc8aa0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".img-hero",
                "originalId": "63f4577b605c2a3fb76a9b83|bb614453-6186-4262-0067-d7679cdc8aa0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603659391688
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content",
                "originalId": "d2535f60-8a47-917e-adf0-e29ddb4be1f1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content",
                "originalId": "d2535f60-8a47-917e-adf0-e29ddb4be1f1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1603661800327
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".group",
                "originalId": "63f4577b605c2a3fb76a9b83|0f31b621-33ba-2b6c-f7a6-af4bea6f24e9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".group",
                "originalId": "63f4577b605c2a3fb76a9b83|0f31b621-33ba-2b6c-f7a6-af4bea6f24e9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603663886818
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".food-blob-group",
                "originalId": "4e7fc60f-1a3f-5e0c-ba09-2c8f2e634bfb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".food-blob-group",
                "originalId": "4e7fc60f-1a3f-5e0c-ba09-2c8f2e634bfb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603664291847
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".block-full-text",
                "originalId": "63f4577b605c2a3fb76a9b83|84da0ae2-85b7-0bf4-ffa3-879c1087a0f8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".block-full-text",
                "originalId": "63f4577b605c2a3fb76a9b83|84da0ae2-85b7-0bf4-ffa3-879c1087a0f8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603667858145
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".block-contact",
                "originalId": "63f4577b605c2a86076a9ba3|35ea77fc-ff5e-e04e-c693-1bbe1220cd1d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".block-contact",
                "originalId": "63f4577b605c2a86076a9ba3|35ea77fc-ff5e-e04e-c693-1bbe1220cd1d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603669524691
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-get-started",
                "originalId": "63f4577b605c2a880e6a9bbf|35ea77fc-ff5e-e04e-c693-1bbe1220cd1d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-get-started",
                "originalId": "63f4577b605c2a880e6a9bbf|35ea77fc-ff5e-e04e-c693-1bbe1220cd1d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603669560564
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".utility-page-content",
                "originalId": "63f4577b605c2aff5b6a9b98|5f94d7e179551c67fb1370f000000000000b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".utility-page-content",
                "originalId": "63f4577b605c2aff5b6a9b98|5f94d7e179551c67fb1370f000000000000b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603669735694
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".orange-texture",
                "originalId": "63f4577b605c2a54186a9bc0|b182ff71-176c-791a-66fd-af74a7686386",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".orange-texture",
                "originalId": "63f4577b605c2a54186a9bc0|b182ff71-176c-791a-66fd-af74a7686386",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603669843306
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a8ddf6a9bc1|c8cee527-cae4-31c6-ab18-cd84f9d2f7ea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a8ddf6a9bc1|c8cee527-cae4-31c6-ab18-cd84f9d2f7ea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603669870971
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".hero-grid-image",
                "originalId": "63f4577b605c2a54186a9bc0|13413550-56c3-fbc8-f686-2fdba40d8247",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".hero-grid-image",
                "originalId": "63f4577b605c2a54186a9bc0|13413550-56c3-fbc8-f686-2fdba40d8247",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670337433
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accent-a",
                "originalId": "63f4577b605c2a54186a9bc0|aade9f77-09b2-a3ca-5e2b-1f7269a0844c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accent-a",
                "originalId": "63f4577b605c2a54186a9bc0|aade9f77-09b2-a3ca-5e2b-1f7269a0844c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670409060
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-full",
                "originalId": "63f4577b605c2a3fb76a9b83|c466d106-585b-0d97-1a9b-e8e6028b4c18",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-full",
                "originalId": "63f4577b605c2a3fb76a9b83|c466d106-585b-0d97-1a9b-e8e6028b4c18",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670475818
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accent-b",
                "originalId": "63f4577b605c2a3fb76a9b83|d9e84010-ad22-d3df-8ae8-47b245a4bf6a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accent-b",
                "originalId": "63f4577b605c2a3fb76a9b83|d9e84010-ad22-d3df-8ae8-47b245a4bf6a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670506571
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accent-c",
                "originalId": "63f4577b605c2a54186a9bc0|d9e84010-ad22-d3df-8ae8-47b245a4bf6a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accent-c",
                "originalId": "63f4577b605c2a54186a9bc0|d9e84010-ad22-d3df-8ae8-47b245a4bf6a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670632095
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".hero-grid",
                "originalId": "63f4577b605c2a8ddf6a9bc1|03db8a4d-eae8-ae7a-2071-b10001bb5e78",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".hero-grid",
                "originalId": "63f4577b605c2a8ddf6a9bc1|03db8a4d-eae8-ae7a-2071-b10001bb5e78",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670704587
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-banner",
                "originalId": "7aef1758-d8f9-4361-5046-82edef5c0b5c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-banner",
                "originalId": "7aef1758-d8f9-4361-5046-82edef5c0b5c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670730250
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670835074
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b92f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b92f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670855972
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b9304",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b9304",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670865922
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b930f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "31ad9636-51b1-4f61-cf0d-2aeb379b930f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603670874732
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b071",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b071",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671030954
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b080",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b080",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671048093
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b08d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b08d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671060420
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b09a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "944db34c-7cc2-98a1-72cf-e0bf1966b09a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671072858
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".image-section-full",
                "originalId": "63f4577b605c2a996a6a9b9b|578ecc32-c464-ed54-6c8e-684082478040",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".image-section-full",
                "originalId": "63f4577b605c2a996a6a9b9b|578ecc32-c464-ed54-6c8e-684082478040",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671127894
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-4-columns-full",
                "originalId": "63f4577b605c2a130d6a9b9d|e6396e52-9c70-c263-f931-12dc89c6adeb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-4-columns-full",
                "originalId": "63f4577b605c2a130d6a9b9d|e6396e52-9c70-c263-f931-12dc89c6adeb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671401799
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".block-contact-img",
                "originalId": "63f4577b605c2a86076a9ba3|58cad207-a938-2be2-053e-7bdd6924dbea",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".block-contact-img",
                "originalId": "63f4577b605c2a86076a9ba3|58cad207-a938-2be2-053e-7bdd6924dbea",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671488714
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a880e6a9bbf|a360f723-f2b2-ceef-ae25-4c5f90dd0d98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a880e6a9bbf|a360f723-f2b2-ceef-ae25-4c5f90dd0d98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603671559157
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".image-head-page",
                "originalId": "63f4577b605c2a130d6a9b9d|9497e9e1-070b-7f7e-cbb9-159b4372291c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".image-head-page",
                "originalId": "63f4577b605c2a130d6a9b9d|9497e9e1-070b-7f7e-cbb9-159b4372291c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603672420305
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-252"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".cf-review-slide",
                "originalId": "29abfa0b-78b1-29e7-ea40-87bdc14c49dc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".cf-review-slide",
                "originalId": "29abfa0b-78b1-29e7-ea40-87bdc14c49dc",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1644770083398
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a3fb76a9b83|a5e94e8e-86a5-3727-cf35-445fed5b832b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a3fb76a9b83|a5e94e8e-86a5-3727-cf35-445fed5b832b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673407806401
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a3fb76a9b83|a5e94e8e-86a5-3727-cf35-445fed5b8330",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a3fb76a9b83|a5e94e8e-86a5-3727-cf35-445fed5b8330",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673407806401
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".combine-faq4_question",
                "originalId": "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".combine-faq4_question",
                "originalId": "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663936352607
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".combine-faq4_question",
                "originalId": "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".combine-faq4_question",
                "originalId": "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663936352608
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".food-blob-group",
                "originalId": "63f4577b605c2a3fb76a9b83|609e67fe-312e-872d-1424-c394c72b925e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".food-blob-group",
                "originalId": "63f4577b605c2a3fb76a9b83|609e67fe-312e-872d-1424-c394c72b925e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673416010925
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".food-blob-group",
                "originalId": "63f4577b605c2a3fb76a9b83|8e80b955-52b4-6a2a-244e-522d8ae587c8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".food-blob-group",
                "originalId": "63f4577b605c2a3fb76a9b83|8e80b955-52b4-6a2a-244e-522d8ae587c8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673423248471
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a3fb76a9b83|8e80b955-52b4-6a2a-244e-522d8ae587cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a3fb76a9b83|8e80b955-52b4-6a2a-244e-522d8ae587cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673423248471
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content-2",
                "originalId": "63bf44688ab6b43efb9edc7f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content-2",
                "originalId": "63bf44688ab6b43efb9edc7f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1603661800327
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".food-blob-group",
                "originalId": "63bf44688ab6b43efb9edc7f|b7f95260-069c-b58d-c5ff-8a5e2263f10d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".food-blob-group",
                "originalId": "63bf44688ab6b43efb9edc7f|b7f95260-069c-b58d-c5ff-8a5e2263f10d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603664291847
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".group",
                "originalId": "63bf44688ab6b43efb9edc7f|0f31b621-33ba-2b6c-f7a6-af4bea6f24e9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".group",
                "originalId": "63bf44688ab6b43efb9edc7f|0f31b621-33ba-2b6c-f7a6-af4bea6f24e9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1603663886818
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c2977e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c2977e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1665023263435
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-banner",
                "originalId": "63f4577b605c2ad4926a9b9f|a2e7036c-4bb5-a7dd-3ae9-b7ad7df8311b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-banner",
                "originalId": "63f4577b605c2ad4926a9b9f|a2e7036c-4bb5-a7dd-3ae9-b7ad7df8311b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673596622982
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1665025696404
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1637647759989
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-banner",
                "originalId": "63f4577b605c2aec3f6a9bdd|6ea5f6e6-71f1-e474-cf9a-123dbc47cdbc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-banner",
                "originalId": "63f4577b605c2aec3f6a9bdd|6ea5f6e6-71f1-e474-cf9a-123dbc47cdbc",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673758895776
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665076683139
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665076683139
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665076683139
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665076683139
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a94766a9bec|c57082d5-722d-132c-a0bc-7a3e2751ce48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 8,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1665517141647
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eea0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eea0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673921876639
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eeaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eeaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673921876639
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eebc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eebc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673921876639
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eec9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|882e34f1-2b22-0b98-c509-d51377c1eec9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673921876639
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|2dbb8f3d-a905-4b56-d7c5-a9c4a5e40552",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|2dbb8f3d-a905-4b56-d7c5-a9c4a5e40552",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1673922957643
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|7104a407-55db-1a81-1202-84f764a6777c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|7104a407-55db-1a81-1202-84f764a6777c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673926348170
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2acb946a9be1|d763a12e-86ab-d4f3-8e41-ae1d47170652",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2acb946a9be1|d763a12e-86ab-d4f3-8e41-ae1d47170652",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1664945547268
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2acb946a9be1|d763a12e-86ab-d4f3-8e41-ae1d4717065c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2acb946a9be1|d763a12e-86ab-d4f3-8e41-ae1d4717065c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1637553766930
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674610787361
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674610787361
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674610787361
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec256a9be2|d2bfb930-280f-5fef-25f5-0a14ffb7fa47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674610787361
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content",
                "originalId": "63f4577b605c2a3fb76a9b83|78af098b-52a1-0469-79a8-69f339698ae8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content",
                "originalId": "63f4577b605c2a3fb76a9b83|78af098b-52a1-0469-79a8-69f339698ae8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1674780743923
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c29799",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c29799",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674783418310
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c29788",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c29788",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787546547
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787560780
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787579649
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787594836
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2ad4926a9b9f|c6812530-b8e3-674a-dcb4-187f41c297cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787605931
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787638296
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787653247
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787663568
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787675601
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787687392
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|5ff1b12d-59e2-e429-713f-ffbee88565f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674787699069
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-216"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2aec3f6a9bdd|9a2ee036-b511-b3f9-4ea9-627dc894f9f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2aec3f6a9bdd|9a2ee036-b511-b3f9-4ea9-627dc894f9f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674813604288
        },
        "e-217": {
            "id": "e-217",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a86076a9ba3|8dbe2613-0595-88d0-7074-7e67d8222f7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a86076a9ba3|8dbe2613-0595-88d0-7074-7e67d8222f7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1675230460536
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".walsh-link-wrapper",
                "originalId": "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".walsh-link-wrapper",
                "originalId": "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625015493372
        },
        "e-220": {
            "id": "e-220",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".walsh-link-wrapper",
                "originalId": "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".walsh-link-wrapper",
                "originalId": "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625015493377
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-222"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a374e6a9bdf|d53b3cf8-a763-9b30-23ae-f6975a92177d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a374e6a9bdf|d53b3cf8-a763-9b30-23ae-f6975a92177d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1664944015303
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a374e6a9bdf|d53b3cf8-a763-9b30-23ae-f6975a921787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a374e6a9bdf|d53b3cf8-a763-9b30-23ae-f6975a921787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1637550419398
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a19a56a9bbe|a19bdbd8-68cc-6bab-7ead-d411dc3184c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a19a56a9bbe|a19bdbd8-68cc-6bab-7ead-d411dc3184c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676597873118
        },
        "e-227": {
            "id": "e-227",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a3fb76a9b83|9bf8a95c-8f75-fe86-f712-c5361b731696",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a3fb76a9b83|9bf8a95c-8f75-fe86-f712-c5361b731696",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1636763549876
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63f4577b605c2a3fb76a9b83|9bf8a95c-8f75-fe86-f712-c5361b73169f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63f4577b605c2a3fb76a9b83|9bf8a95c-8f75-fe86-f712-c5361b73169f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1663855808979
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Dropdown Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-dropdown",
                            "selectorGuids": ["61b2e600-b77b-d844-2d5e-6ca71c436c8d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-toggle",
                            "selectorGuids": ["dc346dd9-4093-f183-50cd-88e670213e7b"]
                        },
                        "globalSwatchId": "ef467fc3",
                        "rValue": 31,
                        "bValue": 26,
                        "gValue": 27,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-dropdown",
                            "selectorGuids": ["61b2e600-b77b-d844-2d5e-6ca71c436c8d"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-toggle",
                            "selectorGuids": ["dc346dd9-4093-f183-50cd-88e670213e7b"]
                        },
                        "globalSwatchId": "8b53935f",
                        "rValue": 251,
                        "bValue": 35,
                        "gValue": 140,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1602798249541
        },
        "a-2": {
            "id": "a-2",
            "title": "Dropdown Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-dropdown",
                            "selectorGuids": ["61b2e600-b77b-d844-2d5e-6ca71c436c8d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-2-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-toggle",
                            "selectorGuids": ["dc346dd9-4093-f183-50cd-88e670213e7b"]
                        },
                        "globalSwatchId": "ef467fc3",
                        "rValue": 31,
                        "bValue": 26,
                        "gValue": 27,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1602798262051
        },
        "a-3": {
            "id": "a-3",
            "title": "Accordion Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion-content",
                            "selectorGuids": ["aeba3a04-4cd1-3de5-bd22-e99a60599a14"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion-content",
                            "selectorGuids": ["aeba3a04-4cd1-3de5-bd22-e99a60599a14"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-arrow",
                            "selectorGuids": ["2fe79df6-ac2d-ac45-346c-93e5469c4f67"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion-content",
                            "selectorGuids": ["aeba3a04-4cd1-3de5-bd22-e99a60599a14"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion-content",
                            "selectorGuids": ["aeba3a04-4cd1-3de5-bd22-e99a60599a14"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-arrow",
                            "selectorGuids": ["2fe79df6-ac2d-ac45-346c-93e5469c4f67"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603071073639
        },
        "a-4": {
            "id": "a-4",
            "title": "Accordion Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion-content",
                            "selectorGuids": ["aeba3a04-4cd1-3de5-bd22-e99a60599a14"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-arrow",
                            "selectorGuids": ["2fe79df6-ac2d-ac45-346c-93e5469c4f67"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".accordion-content",
                            "selectorGuids": ["aeba3a04-4cd1-3de5-bd22-e99a60599a14"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1603071129147
        },
        "a-5": {
            "id": "a-5",
            "title": "Image Food Into",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-1",
                            "selectorGuids": ["8c55e9db-aab4-f6c8-b406-2dac7bbdcc40"]
                        },
                        "xValue": -161,
                        "yValue": 326,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-1",
                            "selectorGuids": ["19f83915-984b-df7d-517a-c36bda426636"]
                        },
                        "xValue": -161,
                        "yValue": 326,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-1",
                            "selectorGuids": ["8c55e9db-aab4-f6c8-b406-2dac7bbdcc40"]
                        },
                        "zValue": 98,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-5-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-2",
                            "selectorGuids": ["ef3cd7dd-f969-a508-ec47-515a9de05ee0"]
                        },
                        "xValue": 143,
                        "yValue": -457,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-2",
                            "selectorGuids": ["ef3cd7dd-f969-a508-ec47-515a9de05ee0"]
                        },
                        "zValue": -72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-5-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-2",
                            "selectorGuids": ["90c6de42-2e87-4f97-5dfa-5d0e122e72c1"]
                        },
                        "xValue": 143,
                        "yValue": -457,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-3",
                            "selectorGuids": ["21c64280-8431-c0c5-7f94-63f7d6c68cb2"]
                        },
                        "xValue": -57,
                        "yValue": -230,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-17",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-3",
                            "selectorGuids": ["21c64280-8431-c0c5-7f94-63f7d6c68cb2"]
                        },
                        "zValue": 79,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-5-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-3",
                            "selectorGuids": ["b8526be6-39f1-c121-b82e-ef9be58a1141"]
                        },
                        "xValue": -57,
                        "yValue": -230,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-1",
                            "selectorGuids": ["8c55e9db-aab4-f6c8-b406-2dac7bbdcc40"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-1",
                            "selectorGuids": ["19f83915-984b-df7d-517a-c36bda426636"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-1",
                            "selectorGuids": ["8c55e9db-aab4-f6c8-b406-2dac7bbdcc40"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-5-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-2",
                            "selectorGuids": ["ef3cd7dd-f969-a508-ec47-515a9de05ee0"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-2",
                            "selectorGuids": ["90c6de42-2e87-4f97-5dfa-5d0e122e72c1"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-12",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-2",
                            "selectorGuids": ["ef3cd7dd-f969-a508-ec47-515a9de05ee0"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-5-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-3",
                            "selectorGuids": ["21c64280-8431-c0c5-7f94-63f7d6c68cb2"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-3",
                            "selectorGuids": ["b8526be6-39f1-c121-b82e-ef9be58a1141"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-18",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 400,
                        "easing": "outCubic",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-3",
                            "selectorGuids": ["21c64280-8431-c0c5-7f94-63f7d6c68cb2"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603658834422
        },
        "a-8": {
            "id": "a-8",
            "title": "Image Food Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-1",
                            "selectorGuids": ["8c55e9db-aab4-f6c8-b406-2dac7bbdcc40"]
                        },
                        "xValue": -161,
                        "yValue": 326,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-1",
                            "selectorGuids": ["19f83915-984b-df7d-517a-c36bda426636"]
                        },
                        "xValue": -161,
                        "yValue": 326,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-1",
                            "selectorGuids": ["8c55e9db-aab4-f6c8-b406-2dac7bbdcc40"]
                        },
                        "zValue": 98,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-2",
                            "selectorGuids": ["ef3cd7dd-f969-a508-ec47-515a9de05ee0"]
                        },
                        "xValue": 143,
                        "yValue": -457,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-2",
                            "selectorGuids": ["ef3cd7dd-f969-a508-ec47-515a9de05ee0"]
                        },
                        "zValue": -72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-2",
                            "selectorGuids": ["90c6de42-2e87-4f97-5dfa-5d0e122e72c1"]
                        },
                        "xValue": 143,
                        "yValue": -457,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-3",
                            "selectorGuids": ["21c64280-8431-c0c5-7f94-63f7d6c68cb2"]
                        },
                        "xValue": -57,
                        "yValue": -230,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-3",
                            "selectorGuids": ["21c64280-8431-c0c5-7f94-63f7d6c68cb2"]
                        },
                        "zValue": 79,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".food-shadow-3",
                            "selectorGuids": ["b8526be6-39f1-c121-b82e-ef9be58a1141"]
                        },
                        "xValue": -57,
                        "yValue": -230,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1603658834422
        },
        "a-6": {
            "id": "a-6",
            "title": "Content View",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "d2535f60-8a47-917e-adf0-e29ddb4be1f1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "d2535f60-8a47-917e-adf0-e29ddb4be1f1"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "d2535f60-8a47-917e-adf0-e29ddb4be1f1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "d2535f60-8a47-917e-adf0-e29ddb4be1f1"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-7": {
            "id": "a-7",
            "title": "Food Blob Group",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob",
                            "selectorGuids": ["01847e6d-ebec-6c11-bd1f-c62b70a47ca7"]
                        },
                        "zValue": 800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob",
                            "selectorGuids": ["01847e6d-ebec-6c11-bd1f-c62b70a47ca7"]
                        },
                        "zValue": -800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1603664296065
        },
        "a-9": {
            "id": "a-9",
            "title": "👉  Slide To Right 0.6s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "xValue": -32,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "zValue": -4,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 600,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1637901616113
        },
        "a-10": {
            "id": "a-10",
            "title": "👈 Slide To Left 0.8s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "xValue": 32,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "zValue": 4,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 800,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bb8043b73c8b2df61cfff8|03dc96b0-1839-8e38-c79d-e2524e050dcf"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1637901616113
        },
        "a-19": {
            "id": "a-19",
            "title": "faq4_question Reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".combine-faq4_expander",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab49"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".combine-faq4_answer",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab46"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".combine-faq4_answer",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab46"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".combine-faq4_answer",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab46"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".combine-faq4_expander",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab49"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".combine-faq4_answer",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab46"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1663928430946
        },
        "a-20": {
            "id": "a-20",
            "title": "faq4_question Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".combine-faq4_expander",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab49"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".combine-faq4_answer",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab46"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".combine-faq4_answer",
                            "selectorGuids": ["50a93b84-5ccd-f798-b41a-5e81900fab46"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1663928740230
        },
        "a-21": {
            "id": "a-21",
            "title": "Food Blob Group 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob",
                            "selectorGuids": ["01847e6d-ebec-6c11-bd1f-c62b70a47ca7"]
                        },
                        "zValue": 800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob",
                            "selectorGuids": ["01847e6d-ebec-6c11-bd1f-c62b70a47ca7"]
                        },
                        "zValue": -800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1603664296065
        },
        "a-23": {
            "id": "a-23",
            "title": "Food Blob Group 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob",
                            "selectorGuids": ["01847e6d-ebec-6c11-bd1f-c62b70a47ca7"]
                        },
                        "zValue": 800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob",
                            "selectorGuids": ["01847e6d-ebec-6c11-bd1f-c62b70a47ca7"]
                        },
                        "zValue": -800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1603664296065
        },
        "a-24": {
            "id": "a-24",
            "title": "Dropdown Open 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-dropdown",
                            "selectorGuids": ["61b2e600-b77b-d844-2d5e-6ca71c436c8d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-24-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-toggle",
                            "selectorGuids": ["dc346dd9-4093-f183-50cd-88e670213e7b"]
                        },
                        "globalSwatchId": "ef467fc3",
                        "rValue": 31,
                        "bValue": 26,
                        "gValue": 27,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-dropdown",
                            "selectorGuids": ["61b2e600-b77b-d844-2d5e-6ca71c436c8d"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-24-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-toggle",
                            "selectorGuids": ["dc346dd9-4093-f183-50cd-88e670213e7b"]
                        },
                        "globalSwatchId": "8b53935f",
                        "rValue": 251,
                        "bValue": 35,
                        "gValue": 140,
                        "aValue": 1
                    }
                }, {
                    "id": "a-24-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-24-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["0ead40a5-dc30-b9ad-b66d-487e701ba705"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1602798249541
        },
        "a-25": {
            "id": "a-25",
            "title": "Content View 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bf44688ab6b43efb9edc7f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bf44688ab6b43efb9edc7f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bf44688ab6b43efb9edc7f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63bf44688ab6b43efb9edc7f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-26": {
            "id": "a-26",
            "title": "Food Blob Group 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob-2",
                            "selectorGuids": ["fdf966e0-42fa-7456-575c-55d4385678ce"]
                        },
                        "zValue": 800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-food-blob-2",
                            "selectorGuids": ["fdf966e0-42fa-7456-575c-55d4385678ce"]
                        },
                        "zValue": -800,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1603664296065
        },
        "a-16": {
            "id": "a-16",
            "title": "☝️ BRIX - Slide To Top - 0.2s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1637117977426
        },
        "a-39": {
            "id": "a-39",
            "title": "Content View 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2ad4926a9b9f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2ad4926a9b9f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2ad4926a9b9f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2ad4926a9b9f|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-18": {
            "id": "a-18",
            "title": "☝️ BRIX - Slide To Top - 0.4s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b381a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1637117977426
        },
        "a-46": {
            "id": "a-46",
            "title": "Content View 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec3f6a9bdd|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec3f6a9bdd|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec3f6a9bdd|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec3f6a9bdd|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-54": {
            "id": "a-54",
            "title": "▶️ BRIX - Light Box Video Overlay Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".brix---video-bg-image",
                            "selectorGuids": ["da8afe02-a85c-9797-e948-56d433030012"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".brix---video-bg-image",
                            "selectorGuids": ["da8afe02-a85c-9797-e948-56d433030012"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1637196743334
        },
        "a-55": {
            "id": "a-55",
            "title": "▶️ BRIX -Light Box Video Overlay Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".brix---video-bg-image",
                            "selectorGuids": ["da8afe02-a85c-9797-e948-56d433030012"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1637196848267
        },
        "a-56": {
            "id": "a-56",
            "title": "👻 BRIX - Fade In - 0.6s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b382d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "2b842a8b-4216-fa87-f566-5c75c66b382d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1637118496510
        },
        "a-57": {
            "id": "a-57",
            "title": "Content View 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a19a56a9bbe|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a19a56a9bbe|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a19a56a9bbe|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a19a56a9bbe|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-62": {
            "id": "a-62",
            "title": "Content View 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec256a9be2|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-62-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec256a9be2|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-62-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec256a9be2|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-62-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2aec256a9be2|8a2e21b2-a8c6-da6e-da32-d2a6943799dc"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-63": {
            "id": "a-63",
            "title": "Content View 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a3fb76a9b83|78af098b-52a1-0469-79a8-69f339698ae8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-63-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a3fb76a9b83|78af098b-52a1-0469-79a8-69f339698ae8"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a3fb76a9b83|78af098b-52a1-0469-79a8-69f339698ae8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-63-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "63f4577b605c2a3fb76a9b83|78af098b-52a1-0469-79a8-69f339698ae8"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1603663645266
        },
        "a-64": {
            "id": "a-64",
            "title": "Button CTA Arrow - Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".walsh-icon-arrow",
                            "selectorGuids": ["c93ebbe5-6078-8a5f-6aa8-3ac42ce1f91d"]
                        },
                        "xValue": 6,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625015496555
        },
        "a-65": {
            "id": "a-65",
            "title": "Button CTA Arrow - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".walsh-icon-arrow",
                            "selectorGuids": ["c93ebbe5-6078-8a5f-6aa8-3ac42ce1f91d"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625015496555
        },
        "a-71": {
            "id": "a-71",
            "title": "👓 BRIX - Top Bar Reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".brix---top-bar-wrapper",
                            "selectorGuids": ["bc5dec20-ee97-a968-ca56-037a40cdc3b2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".brix---top-bar-wrapper",
                            "selectorGuids": ["bc5dec20-ee97-a968-ca56-037a40cdc3b2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1636763260837
        },
        "a-70": {
            "id": "a-70",
            "title": "❌ BRIX - Top Bar Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-70-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".brix---top-bar-wrapper",
                            "selectorGuids": ["bc5dec20-ee97-a968-ca56-037a40cdc3b2"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1636685387979
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});

Webflow.require('commerce') && Webflow.require('commerce').init({
    siteId: "63bb7fe09d70bb7dc8e86719",
    apiUrl: "https://render.webflow.com"
});