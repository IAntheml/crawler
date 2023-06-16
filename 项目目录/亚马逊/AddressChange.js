(function(y) {
    var f = window.AmazonUIPageJS || window.P
      , n = f._namespace || f.attributeErrors
      , e = n ? n("NavSharedAssets", "") : f;
    e.guardFatal ? e.guardFatal(y)(e, window) : e.execute(function() {
        y(e, window)
    })
}
)(function(y, f, n) {
    (function(e) {
        if (!e.$Nav || e.$Nav._replay) {
            document.createElement("header");
            var a = function() {
                this.data = {}
            }
              , d = function(a) {
                d.manager.add(a)
            };
            a.arrayAdder = function(a) {
                return function() {
                    this.data[a] = (this.data[a] || []).concat([].slice.call(arguments));
                    return this
                }
            }
            ;
            a.prototype = {
                build: function(a, b) {
                    this.data.name = a;
                    this.data.value = b;
                    this.data.immediate = !1;
                    this.data.process = !0;
                    d.manager.add(this.data)
                },
                run: function(a, b) {
                    b && (this.data.name = a);
                    this.data.value = b || a;
                    this.data.process = !0;
                    d.manager.add(this.data)
                },
                publish: function(a, b) {
                    this.data.name = a;
                    this.data.value = b;
                    d.manager.publish(this.data)
                },
                declare: function(a, b) {
                    this.data.name = a;
                    this.data.value = b;
                    d.manager.add(this.data)
                },
                when: a.arrayAdder("when"),
                iff: a.arrayAdder("iff"),
                filter: a.arrayAdder("filter"),
                observe: a.arrayAdder("observe")
            };
            var g = function(b) {
                d[b] = function() {
                    var c = new a;
                    return c[b].apply(c, arguments)
                }
            };
            for (c in a.prototype)
                a.prototype.hasOwnProperty(c) && g(c);
            d.make = function() {
                return d
            }
            ;
            d.getNow = function(a, b) {
                return d.manager.get(a, b)
            }
            ;
            d.stats = function(a) {
                return d.manager.stats(a)
            }
            ;
            d.importEvent = function(a, b) {
                b = b || {};
                b.name = a;
                d.manager.importEvent(b)
            }
            ;
            d.manager = {
                pending: [],
                add: function(a) {
                    this.pending.push({
                        m: "add",
                        data: a
                    })
                },
                publish: function(a) {
                    this.pending.push({
                        m: "publish",
                        data: a
                    })
                },
                importEvent: function(a) {
                    this.pending.push({
                        m: "importEvent",
                        data: a
                    })
                },
                get: function(a, b) {
                    return b
                },
                stats: function() {
                    return {}
                }
            };
            if (e.$Nav && e.$Nav.make && e.$Nav.make._shims) {
                g = function(b) {
                    for (var c = new a, g = 0; g < b.length; g++) {
                        var e = b[g];
                        if ("importEvent" === e.m) {
                            b = e.a[1] || {};
                            b.name = e.a[0];
                            d.manager.importEvent(b);
                            break
                        } else if (!c[e.m])
                            break;
                        c[e.m].apply(c, e.a)
                    }
                }
                ;
                var c = e.$Nav.make._shims;
                for (var b = 0; b < c.length; b++) {
                    for (var f = 0; f < c[b]._replay.length; f++)
                        g(c[b]._replay[f]);
                    for (var k in c[b])
                        c[b].hasOwnProperty(k) && d.hasOwnProperty(k) && (c[b][k] = d[k])
                }
            }
            e.$Nav = d
        }
    }
    )(f);
    (function(e, a, d, g) {
        if ((a = e.$Nav) && a.manager && a.manager.pending) {
            var c = d.now || function() {
                return +new d
            }
              , b = function(a) {
                return "function" === typeof a
            }
              , f = "object" === typeof e.P && "function" === typeof e.P.when && "function" === typeof e.P.register && "function" === typeof e.P.execute
              , k = "object" === typeof e.AmazonUIPageJS && "function" === typeof e.AmazonUIPageJS.when && "function" === typeof e.AmazonUIPageJS.register && "function" === typeof e.AmazonUIPageJS.execute
              , h = function(a, b) {
                b = b || {};
                var c = b.start || 50
                  , d = function() {
                    c <= (b.max || 2E4) && !a() && (setTimeout(d, c),
                    c *= b.factor || 2)
                };
                return d
            }
              , u = function(a, b) {
                if (1 === arguments.length && "string" === typeof a)
                    u({
                        message: "rcx-nav: " + a
                    });
                else if (e.console && e.console.error && e.console.error(a, b),
                e.ueLogError)
                    e.ueLogError(a, b);
                else
                    throw a;
            }
              , q = function(a, b) {
                try {
                    return a()
                } catch (z) {
                    "object" === typeof b && (b.message = b.message || z.message,
                    b.message = "rcx-nav: " + b.message),
                    u(z, b)
                }
            }
              , v = function() {
                function b() {
                    return setTimeout(a, 0)
                }
                function a() {
                    for (var a = b(), e = c(); d.length; )
                        if (d.shift()(),
                        50 < c() - e)
                            return;
                    clearTimeout(a);
                    g = !1
                }
                var d = []
                  , g = !1;
                try {
                    /OS 6_[0-9]+ like Mac OS X/i.test(navigator.userAgent) && e.addEventListener && e.addEventListener("scroll", b, !1)
                } catch (A) {}
                return function(a) {
                    d.push(a);
                    g || (b(),
                    g = !0)
                }
            }()
              , m = function() {
                var a = {};
                return {
                    run: function(b) {
                        if (a[b]instanceof Array)
                            for (var c = 0; c < a[b].length; c++)
                                a[b][c]();
                        a[b] = !0
                    },
                    add: function(b, c) {
                        for (var d = 1, g = function() {
                            0 >= --d && v(c)
                        }, e = b.length; e--; )
                            !0 !== a[b[e]] && ((a[b[e]] = a[b[e]] || []).push(g),
                            d++);
                        g()
                    }
                }
            }
              , t = function(b) {
                b = b || {};
                this.context = b.context || e;
                this.once = b.once || !1;
                this.async = b.async || !1;
                this.observers = [];
                this.notifyCount = 0;
                this.notifyArgs = []
            };
            t.prototype = {
                notify: function() {
                    this.notifyCount++;
                    if (!(this.once && 1 < this.notifyCount)) {
                        this.notifyArgs = [].slice.call(arguments);
                        for (var b = 0; b < this.observers.length; b++)
                            this._run(this.observers[b])
                    }
                },
                observe: function(a) {
                    if (b(a))
                        if (this.once && this.isNotified())
                            this._run(a);
                        else
                            return this.observers.push(a),
                            this.observers.length - 1
                },
                remove: function(b) {
                    return -1 < b && b < this.observers.length ? (this.observers[b] = function() {}
                    ,
                    !0) : !1
                },
                boundObserve: function() {
                    var b = this;
                    return function() {
                        b.observe.apply(b, arguments)
                    }
                },
                isNotified: function() {
                    return 0 < this.notifyCount
                },
                _run: function(b) {
                    var a = this.notifyArgs
                      , c = this.context;
                    this.async ? v(function() {
                        b.apply(c, a)
                    }) : b.apply(c, a)
                }
            };
            var x = function() {
                var a = {}
                  , d = 0
                  , l = {}
                  , x = m()
                  , u = {}
                  , r = function(a) {
                    this.data = {
                        name: "nav:" + d++,
                        group: "rcx-nav",
                        value: null,
                        result: null,
                        immediate: !0,
                        process: !1,
                        override: !1,
                        resolved: !1,
                        watched: !1,
                        context: l,
                        when: [],
                        iff: [],
                        filter: [],
                        observe: [],
                        stats: {
                            defined: c(),
                            resolved: -1,
                            buildStarted: -1,
                            buildCompleted: -1,
                            callCount: 0,
                            executionTime: 0
                        }
                    };
                    for (var b in a)
                        a.hasOwnProperty(b) && (this.data[b] = a[b]);
                    -1 < this.data.name.indexOf("]") && (a = this.data.name.split("]"),
                    2 === a.length && 1 < a[0].length && 0 < a[1].length && (this.data.name = a[1],
                    this.data.group = a[0].replace("[", "")))
                };
                r.prototype = {
                    getDependencyNames: function() {
                        for (var a = [].concat(this.data.when, this.data.filter), b = 0; b < this.data.iff.length; b++)
                            "string" === typeof this.data.iff[b] ? a.push(this.data.iff[b]) : this.data.iff[b].name && a.push(this.data.iff[b].name);
                        return a
                    },
                    checkIff: function(b) {
                        b = function(b) {
                            b = "string" === typeof b ? {
                                name: b
                            } : b;
                            var c = a[b.name];
                            if (!c || !c.data.resolved)
                                return !1;
                            c = c.getResult();
                            c = b.prop && c ? c[b.prop] : c;
                            var d = b.value || !0;
                            switch (b.op || "truthy") {
                            case "truthy":
                                return !!c;
                            case "falsey":
                                return !c;
                            case "eq":
                                return c === d;
                            case "ne":
                                return c !== d;
                            case "gt":
                                return c > d;
                            case "lt":
                                return c < d;
                            case "gte":
                                return c >= d;
                            case "lte":
                                return c <= d
                            }
                            return !1
                        }
                        ;
                        for (var c = 0; c < this.data.iff.length; c++)
                            if (!b(this.data.iff[c]))
                                return !1;
                        return !0
                    },
                    watchModule: function(c) {
                        var d = this;
                        u[c] || (u[c] = new t);
                        u[c].observe(function() {
                            var a = d.getResult();
                            if (b(a))
                                return a.apply(d.data.context, arguments)
                        });
                        a[c] && a[c].applyObserverWrapper()
                    },
                    applyObserverWrapper: function() {
                        var a = this;
                        if (u[this.data.name] && !this.data.watched && this.data.resolved && this.data.result) {
                            if (b(this.data.result)) {
                                var c = this.data.result;
                                this.data.result = function() {
                                    var b = c.apply(a.data.context, arguments);
                                    u[a.data.name].notify(b)
                                }
                                ;
                                for (var d in c)
                                    c.hasOwnProperty(d) && (this.data.result[d] = c[d])
                            }
                            this.data.watched = !0
                        }
                    },
                    applyFilterWrapper: function() {
                        var c = this;
                        if (0 !== this.data.filter.length && b(this.data.result)) {
                            for (var d = [], g = [], e = 0; e < this.data.filter.length; e++)
                                if (a.hasOwnProperty(this.data.filter[e])) {
                                    var f = a[this.data.filter[e]].getResult();
                                    b(f.request) && d.push(f.request);
                                    b(f.response) && g.push(f.response)
                                }
                            var h = function(a, b) {
                                for (var d = 0; d < a.length; d++)
                                    if (b = a[d].call(c.data.context, b),
                                    !1 === b)
                                        return !1;
                                return b
                            }
                              , k = this.data.result;
                            this.data.result = function(b) {
                                if (!1 !== (b = h(d, b)) && (b = k.call(l, b),
                                !1 !== (b = h(g, b))))
                                    return b
                            }
                        }
                    },
                    execute: function() {
                        if (this.checkIff()) {
                            for (var b = 0; b < this.data.observe.length; b++)
                                this.watchModule(this.data.observe[b]);
                            x.run(this.data.name);
                            this.data.resolved = !0;
                            this.data.stats.resolved = c();
                            this.data.immediate && this.getResult()
                        }
                    },
                    getResult: function() {
                        var d = this
                          , g = c();
                        this.data.stats.callCount++;
                        if (null !== this.data.result || !this.data.resolved)
                            return this.data.result;
                        this.data.stats.buildStarted = c();
                        if (this.data.process) {
                            for (var e = [], f = 0; f < this.data.when.length; f++)
                                e.push(a.hasOwnProperty(this.data.when[f]) ? a[this.data.when[f]].getResult() : null);
                            var h = this.data.group + ":" + this.data.name;
                            if ("string" === typeof this.data.value) {
                                var l = this.data.when;
                                for (f = 0; f < l.length; f++) {
                                    var k = l[f].indexOf(".");
                                    -1 < k && k < l[f].length && (l[f] = l[f].substr(k + 1));
                                    l[f] = l[f].replace(/[^0-9a-zA-Z_$]/g, "");
                                    l[f].length || (l[f] = String.fromCharCode(97 + f))
                                }
                                this.data.value = q(new Function("return function (" + l.join(", ") + ") { " + this.data.value + "};"), {
                                    attribution: h,
                                    logLevel: "ERROR",
                                    message: "$Nav module eval failed: " + h
                                })
                            }
                            b(this.data.value) && (this.data.result = q(function() {
                                return d.data.value.apply(d.data.context, e)
                            }, {
                                attribution: h,
                                logLevel: "ERROR",
                                message: "$Nav module execution failed: " + h
                            }))
                        } else
                            this.data.result = this.data.value;
                        this.applyFilterWrapper();
                        this.applyObserverWrapper();
                        this.data.stats.buildCompleted = c();
                        this.data.stats.executionTime += c() - g;
                        return this.data.result
                    }
                };
                return {
                    add: function(b) {
                        if (!a.hasOwnProperty(b.name) || b.override) {
                            var c = new r(b);
                            a[c.data.name] = c;
                            b = function() {
                                c.execute()
                            }
                            ;
                            var d = c.getDependencyNames();
                            0 === d.length ? v(b) : x.add(d, b)
                        }
                    },
                    publish: function(b) {
                        this.add(b);
                        f ? g.register(b.name, function() {
                            return b.value
                        }) : k && e.AmazonUIPageJS.register(b.name, function() {
                            return b.value
                        });
                        e.amznJQ && e.amznJQ.declareAvailable(b.name)
                    },
                    importEvent: function(b) {
                        var a = this;
                        b = b || {};
                        f && g.when(b.name).execute("importEvent", function(c) {
                            c = void 0 === c || null === c ? b.otherwise : c;
                            a.add({
                                name: b.as || b.name,
                                value: c
                            })
                        });
                        if (e.amznJQ)
                            e.amznJQ[b.useOnCompletion ? "onCompletion" : "available"](b.amznJQ || b.name, h(function() {
                                if (b.global) {
                                    var c = e;
                                    for (var d = (b.global || "").split("."), g = 0, f = d.length; g < f; g++)
                                        c && d[g] && (c = c[d[g]])
                                } else
                                    c = b.otherwise;
                                if (b.retry && (void 0 === c || null === c))
                                    return !1;
                                a.add({
                                    name: b.as || b.name,
                                    value: c
                                });
                                return !0
                            }))
                    },
                    get: function(b, c) {
                        return a[b] && a[b].data.resolved ? a[b].getResult() : c
                    },
                    stats: function(b) {
                        var c = {}, d;
                        for (d in a)
                            if (a.hasOwnProperty(d) && (!b || !a[d].data.resolved)) {
                                c[d] = a[d].data;
                                c[d].blocked = [];
                                for (var g = a[d].getDependencyNames(), e = 0; e < g.length; e++)
                                    a[g[e]] && a[g[e]].data.resolved || c[d].blocked.push(g[e])
                            }
                        return c
                    }
                }
            }();
            if (a && a.manager && a.manager.pending)
                for (var r = 0; r < a.manager.pending.length; r++)
                    x[a.manager.pending[r].m](a.manager.pending[r].data);
            a.manager = x;
            a.declare("now", c);
            a.declare("async", v);
            a.declare("eventGraph", m);
            a.declare("logError", function(b, a) {
                a = "rcx-nav: " + (a || "");
                b && b.message ? b.message = a + b.message : "object" === typeof b ? b.message = a : b = {
                    message: a + b
                };
                e.console && e.console.error && e.console.error(b);
                if (e.ueLogError)
                    e.ueLogError(b);
                else
                    throw b;
            });
            a.declare("logUeError", u);
            a.declare("Observer", t);
            a.declare("isAuiP", f);
            a.declare("isAuiPJS", k)
        }
    }
    )(f, document, Date, y);
    (function(e) {
        e.build("$F", function() {
            function a(a, c) {
                this.up = a;
                this.action = c
            }
            function d(d) {
                return function() {
                    var c = [].slice.call(arguments);
                    return new a(this,function(b) {
                        return d.apply(this, [b].concat(c))
                    }
                    )
                }
            }
            a.prototype.noOp = function() {}
            ;
            a.prototype.on = function(a) {
                a = "function" === typeof a ? a : function() {
                    return a
                }
                ;
                return this.up ? this.up.on(this.action(a)) : a
            }
            ;
            a.prototype.run = function(a) {
                return this.on(a)()
            }
            ;
            a.prototype.bind = d(function(a, c) {
                return function() {
                    return a.apply(c, arguments)
                }
            });
            a.prototype.memoize = d(function(a) {
                var c, b = !1;
                return function() {
                    b || (b = !0,
                    c = a.apply(this, arguments),
                    a = null);
                    return c
                }
            });
            a.prototype.once = d(function(a) {
                var c = !1;
                return function() {
                    if (!c) {
                        c = !0;
                        var b = a.apply(this, arguments);
                        a = null;
                        return b
                    }
                }
            });
            a.prototype.debounce = d(function(a, c, b) {
                var d;
                return function() {
                    var g, e = arguments, f = this;
                    b && !d && (g = a.apply(f, e));
                    d && clearTimeout(d);
                    d = setTimeout(function() {
                        d = null;
                        b || a.apply(f, e)
                    }, c);
                    return g
                }
            });
            a.prototype.after = d(function(a, c, b) {
                return function() {
                    (b && 0 < c || !b && 0 >= c) && a();
                    c--
                }
            });
            a.prototype.delay = d(function(a, c) {
                var b = void 0 === c ? 0 : c;
                return function() {
                    return setTimeout(a, b)
                }
            });
            a.prototype.partial = d(function(a) {
                var c = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return a.apply(this, c.concat([].slice.call(arguments)))
                }
            });
            a.prototype.rpartial = d(function(a) {
                var c = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return a.apply(this, [].slice.call(arguments).concat(c))
                }
            });
            a.prototype.throttle = d(function(a, c) {
                function b() {
                    e ? (e = !1,
                    setTimeout(b, c),
                    a()) : d = !1
                }
                var d = !1
                  , e = !1;
                return function() {
                    d ? e = !0 : (d = !0,
                    setTimeout(b, c),
                    a())
                }
            });
            a.prototype.iff = d(function(a, c) {
                return "function" === typeof c ? function() {
                    if (c())
                        return a.apply(this, arguments)
                }
                : c ? a : this.noOp
            });
            a.prototype.tap = d(function(a, c) {
                var b = Array.prototype.slice.call(arguments, 2);
                return function() {
                    c.apply(this, b.concat([].slice.call(arguments)));
                    return a.apply(this, arguments)
                }
            });
            return new a
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$", "now", "async", "Observer", "debugStream", "debug.param").build("data", function(a, d, e, c, b, f) {
            var g = {}
              , h = f.value("navDisableDataKey")
              , l = {}
              , q = null
              , v = null
              , m = new c({
                async: !0
            })
              , t = function() {
                b("Data Batch", l);
                m.notify(l);
                q = v = null;
                for (var a in l)
                    l.hasOwnProperty(a) && (g[a] = l[a]);
                l = {}
            };
            c = function(c) {
                h && h in c && delete c[h];
                b("Data Added", c);
                l = a.extend(l, c);
                v && clearTimeout(v);
                q || (q = d());
                50 < q - d() ? t() : v = setTimeout(t, 10);
                return c
            }
            ;
            c.get = function(b) {
                return g[b]
            }
            ;
            c.getCache = function() {
                return g
            }
            ;
            c.observe = function(a, c, d) {
                var f = -1;
                c && "function" === typeof c ? (f = m.observe(function(d) {
                    a in d && (b("Data Observed", {
                        name: a,
                        data: d[a]
                    }),
                    c(d[a]))
                }),
                !d && a in g && e(function() {
                    c(g[a])
                })) : f = m.observe(a);
                return f
            }
            ;
            c.remove = function(b) {
                return m.remove(b)
            }
            ;
            return c
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("log").build("metrics", function(a) {
            return new function() {
                var d = this;
                this.count = function(d, c) {
                    if (f.ue && f.ue.count) {
                        var b = f.ue.count(d);
                        b || (b = 0);
                        c = b + c;
                        f.ue.count(d, c);
                        a("Nav-Metrics: Incremented " + d + " to " + c);
                        return c
                    }
                    a("Nav-Metrics: UE not setup. Unable to send Metrics")
                }
                ;
                this.increment = function(a) {
                    return d.count(a, 1)
                }
                ;
                this.decrement = function(a) {
                    return d.count(a, -1)
                }
            }
        });
        e.build("managerStats", function() {
            return function() {
                var a = {
                    totalCallCount: 0,
                    totalExecutionTime: 0
                }, d = e.stats(), f;
                for (f in d)
                    if (d.hasOwnProperty(f)) {
                        var c = d[f].stats;
                        a.totalCallCount += c.callCount;
                        a.totalExecutionTime += c.executionTime
                    }
                return a
            }
        });
        e.when("metrics", "managerStats", "config", "sharedconstants", "page.ATF").run("jsMetrics.ATF", function(a, d, e, c) {
            d = d();
            a.count(c.TIME_UP_TO + "ATF:" + e.navDeviceType, d.totalExecutionTime)
        });
        e.when("metrics", "managerStats", "config", "sharedconstants", "page.CF").run("jsMetrics.CF", function(a, d, e, c) {
            d = d();
            a.count(c.TIME_UP_TO + "CF:" + e.navDeviceType, d.totalExecutionTime)
        });
        e.when("metrics", "managerStats", "config", "sharedconstants", "page.loaded").run("jsMetrics.PageLoaded", function(a, d, e, c) {
            d = d();
            e = e.navDeviceType;
            a.count(c.TIME_UP_TO + "PageLoaded:" + e, d.totalExecutionTime);
            a.count(c.TOTAL_CALL_COUNT + "PageLoaded:" + e, d.totalCallCount)
        });
        e.when("metrics", "config", "sharedconstants", "page.loaded").run("jsMetrics.collector", function(a, d, e) {
            var c = f.navmet;
            if (c !== n && c.length !== n && (d = d.navDeviceType,
            f.ue_t0 !== n)) {
                var b = {}, g = [], k;
                for (k = 0; k < c.length; ++k) {
                    var h = c[k];
                    b[h.key] !== n ? (b[h.key].key = h.key,
                    b[h.key].delta += h.end - h.begin,
                    b[h.key].completed = h.end - f.ue_t0,
                    g[b[h.key].index] = n,
                    b[h.key].index = k) : b[h.key] = {
                        key: h.key,
                        delta: h.end - h.begin,
                        completed: h.end - f.ue_t0,
                        index: k
                    };
                    g.push(h.key)
                }
                c.basic && (a.count(e.CSM_LATENCY_V2 + ":network:D:" + d, c.basic.networkLatency),
                a.count(e.CSM_LATENCY_V2 + ":navFirstPaint:D:" + d, c.basic.navFirstPaint),
                a.count(e.CSM_LATENCY_V2 + ":NavStart:C:" + d, c.basic.NavStart));
                for (k = 0; k < g.length; ++k)
                    g[k] !== n && (h = b[g[k]],
                    a.count(e.CSM_LATENCY_V2 + ":" + h.key + ":D:" + d, h.delta),
                    a.count(e.CSM_LATENCY_V2 + ":" + h.key + ":C:" + d, h.completed))
            }
        });
        e.when("metrics", "sharedconstants", "config").run("metrics.csm", function(a, d, e) {
            if (e = e.navDeviceType) {
                var c = {
                    UpNavBanner: {
                        since: "ue_t0",
                        by: "nav_t_upnav_begin"
                    },
                    BeginNav: {
                        since: "ue_t0",
                        by: "nav_t_begin_nav"
                    },
                    InlineCSS: {
                        since: "ue_t0",
                        by: "nav_t_after_inline_CSS"
                    },
                    PreloadJS: {
                        since: "ue_t0",
                        by: "nav_t_after_preload_JS"
                    },
                    PreloadSprite: {
                        since: "ue_t0",
                        by: "nav_t_after_preload_sprite"
                    },
                    ANI: {
                        since: "ue_t0",
                        by: "nav_t_after_ANI"
                    },
                    Config: {
                        since: "ue_t0",
                        by: "nav_t_after_config_declaration"
                    },
                    NavBar: {
                        since: "ue_t0",
                        by: "nav_t_after_navbar"
                    },
                    SearchBar: {
                        since: "ue_t0",
                        by: "nav_t_after_searchbar"
                    },
                    EndNav: {
                        since: "ue_t0",
                        by: "nav_t_end_nav"
                    }
                }, b;
                for (b in c)
                    if (c.hasOwnProperty(b)) {
                        var g = c[b];
                        if (g) {
                            var k = f[g.by];
                            g = f[g.since];
                            k && g && a.count(d.CSM_LATENCY + ":" + b + ":" + e, k - g)
                        }
                    }
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$").build("agent", function(a) {
            var d = function() {
                var b = Array.prototype.slice.call(arguments, 0);
                return (new RegExp("(" + b.join("|") + ")","i")).test(navigator.userAgent)
            }
              , e = !!("ontouchstart"in f) || d("\\bTouch\\b") || 0 < f.navigator.msMaxTouchPoints
              , c = {
                iPhone: d("iPhone"),
                iPad: d("iPad"),
                kindleFire: d("Kindle Fire", "Silk/"),
                android: d("Android"),
                windowsPhone: d("Windows Phone"),
                webkit: d("WebKit"),
                ie11: d("Trident/7"),
                ie10: d("MSIE 10"),
                ie7: d("MSIE 7"),
                ie6: a.browser ? a.browser.msie && 6 >= parseInt(a.browser.version, 10) : d("MSIE 6"),
                opera: d("Opera"),
                firefox: d("Firefox"),
                mac: d("Macintosh"),
                iOS: d("iPhone") || d("iPad")
            };
            c.ie = a.browser ? a.browser.msie : c.ie11 || d("MSIE");
            c.touch = c.iPhone || c.iPad || c.android || c.kindleFire || e;
            c.quirks = c.ie && document && "CSS1Compat" !== document.compatMode;
            return c
        })
    }
    )(f.$Nav);
    f.$Nav.declare("sharedconstants", {
        ADVANCED_PREFIX: "aj:",
        TIME_UP_TO: "NavJS:TimeUpTo:",
        CSM_LATENCY: "NavJS:CSM:Latency",
        CSM_LATENCY_V2: "Nav:CSM:Latency",
        TOTAL_CALL_COUNT: "NavJS:TotalCallCount:",
        DWELLTIME_MIN: 200
    });
    (function(e) {
        e.build("util.addCssRule", function() {
            var a = null;
            return function(d, e, c) {
                if (!a) {
                    var b = document.getElementsByTagName("head")[0];
                    if (!b)
                        return;
                    var f = document.createElement("style");
                    f.appendChild(document.createTextNode(""));
                    b.appendChild(f);
                    a = f.sheet || {}
                }
                a.insertRule ? a.insertRule(d + "{" + e + "}", c) : a.addRule && a.addRule(d, e, c)
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.build("getRefTag", function() {
            return function(a) {
                if (a) {
                    a = a.split("?");
                    var d = a[0].split("/ref\x3d");
                    if (d[1])
                        return d[1];
                    if (a = a[1])
                        return a = a.split("\x26").reduce(function(a, c) {
                            c = c.split("\x3d");
                            return a[c[0]] = c[1],
                            a
                        }, {}),
                        a.ref_ || a.ref
                }
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("config").build("signInRedirect", function(a) {
            return function(d, e, c) {
                if (!a.isRecognized && !a.isBackup) {
                    var b = a.signInUrlWithRefTag;
                    if (b) {
                        d = "ref_%3D".concat(d);
                        b = b.replace(/ref_%3DnavSignInUrlRefTagPlaceHolder/g, d);
                        c && (b = b.concat("\x26ref_%3D", c));
                        location.href = b;
                        return
                    }
                }
                location.href = e
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$").run("hamburgerIosScrollSpy", function(a) {
            var d;
            return {
                touchStartHandler: function(a) {
                    if (!a)
                        return !1;
                    d = a.touches[0].clientY
                },
                touchMoveHandler: function(e) {
                    if (!e || !d)
                        return !1;
                    var c = e.touches[0].clientY;
                    var b = a(".hmenu.hmenu-visible");
                    var f = b[0].scrollHeight;
                    var g = b.scrollTop();
                    b = b.outerHeight();
                    c < d && f - g <= b && (d = n,
                    e.cancelable && e.preventDefault());
                    c > d && 0 >= g && (d = n,
                    e.cancelable && e.preventDefault())
                },
                preventCurrentEvent: function(a) {
                    a.preventDefault()
                }
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$", "metrics", "getRefTag").build("bindFlyoutAnchorReftagMetrics", function(a, d, e) {
            return function(c, b, f, g, h) {
                0 !== c.length && c.each(function() {
                    var c = a(this)
                      , l = e(c.attr("href"));
                    if (l) {
                        var k = "Nav:" + b + "Flyout:" + h;
                        f && d.increment(k + "Impression:" + l);
                        g && c.click(function() {
                            d.increment(k + "Click:" + l)
                        })
                    }
                })
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.declare("util.getQueryString", function() {
            return f.location && f.location.search ? f.location.search : n
        });
        e.when("config", "util.getQueryString").build("util.getQueryStringForHMenuAjax", function(a, d) {
            return function() {
                return a.hasOwnProperty("isHMenuBrowserCacheDisable") && !a.isHMenuBrowserCacheDisable ? n : d()
            }
        })
    }
    )(f.$Nav);
    (function(e, a) {
        e.when("jQuery", "hamburgerMenuInteractionJS", "util.ajax", "config", "metrics", "util.getQueryStringForHMenuAjax").build("HamburgerMenuFirstLayerAJAXCall", function(a, e, c, b, l, k) {
            return function(d, g) {
                function h(a) {
                    return "".concat(m ? "navm" : "nav", a)
                }
                function v() {
                    a("#nav-hamburger-menu").attr("href", "/gp/site-directory?ref\x3d".concat(h("_em_ajax_fail")))
                }
                var m = "mobile" === d.toLowerCase()
                  , t = {
                    attribution: "AmazonNavigationCards",
                    logLevel: "ERROR"
                };
                l.increment("".concat(m ? "Navm" : "Nav", ":Hmenu:FirstLayerAjax"));
                var x = Date.now()
                  , r = {
                    ajaxTemplate: m ? "hMenuFirstLayer" : "hMenuDesktopFirstLayer",
                    pageType: f.ue_pty ? f.ue_pty : "NavUnknownPageType",
                    hmDataAjaxHint: 1,
                    isFreshRegion: b.isFreshRegion,
                    isFreshCustomer: m ? b.isFreshCustomer : b.navfresh,
                    isPrimeMember: m ? b.isPrimeCustomer : b.isPrimeMember,
                    isPrimeDay: m ? b.isPrimeDay : b.primeDay,
                    isSmile: b.isSmile,
                    regionalStores: b.regionalStores,
                    isBackup: b.isBackup,
                    firstName: m ? b.firstName : b.customerName,
                    currentQueryString: k(),
                    navDeviceType: b.navDeviceType,
                    hashCustomerAndSessionId: b.hashCustomerAndSessionId,
                    environmentVFI: b.environmentVFI,
                    languageCode: b.languageCode,
                    isInlineHMenuEnabled: b.isInlineHMenuEnabled,
                    customerCountryCode: b.customerCountryCode
                }
                  , w = function(c) {
                    b.isAjaxMigrated && (c = JSON.parse(c).data);
                    var d = c && c.trim();
                    d && a(d).is("#hmenu-container") ? (a("body").append(c),
                    e(),
                    "function" === typeof g && g(),
                    x && l.count("".concat(m ? "Navm" : "Nav", ":Hmenu:FirstLayerSuccessTotalTime"), Math.floor((Date.now() - x) / 1E3))) : (f.ueLogError && (t.message = " HamburgerMenu Empty or Malformed AJAX response. AJAX Request Data: " + JSON.stringify(r) + (c ? c.toString() : " Empty html response."),
                    f.ueLogError(t)),
                    v())
                };
                d = b.isAjaxMigrated ? "/nav/ajax/" + r.ajaxTemplate : "/gp/navigation/ajax/generic.html";
                c({
                    retryMetric: h("-hmenu-ajax-retry"),
                    errorMetric: h("-hmenu-ajax-error"),
                    url: d,
                    dataType: "html",
                    cache: !b.isHMenuBrowserCacheDisable,
                    data: r,
                    error: function(a, c, d) {
                        if (b.isAjaxMigrated) {
                            var e = (a.responseText || "").split("\x3c!-- sp:error_pages --\x3e")[0];
                            try {
                                if (JSON.parse(e).data && w && "function" === typeof w) {
                                    w(e);
                                    return
                                }
                            } catch (B) {}
                        }
                        a = " HamburgerMenu AJAX Call failed. RID: " + (f.ue && f.ue.rid ? f.ue.rid : n) + " Status Code : " + a.status + " Status text : " + c + " Exception : " + d + " Response text : " + a.responseText + "AJAX request data : " + JSON.stringify(r);
                        f.ueLogError && (t.message = a,
                        f.ueLogError(t));
                        v()
                    },
                    success: w
                })
            }
        })
    }
    )(f.$Nav, y);
    (function(e) {
        e.when("$", "util.ajaxReftagLogger", "metrics", "config").run("hMenuItemClickHandler", function(a, d, e, c) {
            return function(b) {
                function g(a, b, d) {
                    var g = k.children("ul.hmenu[data-menu-id\x3d" + b + "]");
                    0 === g.length ? (e.increment("Navm:Hmenu:CustomerClickWithSelectedLayerError"),
                    f.location = "mobile" === c.navDeviceType ? "/?ref\x3dnavm_em_linktree_fail" : "/?ref\x3dnav_em_linktree_fail") : (a.removeClass("hmenu-translateX").bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        a.removeClass("hmenu-visible");
                        a.removeClass("hmenu-transition").unbind("transitionend webkitTransitionEnd oTransitionEnd")
                    }).addClass("hmenu-transition " + (d ? "hmenu-translateX-left" : "hmenu-translateX-right")),
                    g.removeClass(d ? "hmenu-translateX-right" : "hmenu-translateX-left").bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        g.removeClass("hmenu-transition").unbind("transitionend webkitTransitionEnd oTransitionEnd");
                        if (d) {
                            var a = k.children("ul.hmenu.hmenu-hidden[data-parent-menu-id\x3d'" + b + "']");
                            a && a.removeClass("hmenu-hidden")
                        }
                    }).addClass("hmenu-visible hmenu-transition hmenu-translateX").scrollTop(0),
                    k.attr("tabIndex", 0).focus().removeAttr("tabIndex"))
                }
                var k = a("#hmenu-content");
                b = a(b.currentTarget);
                var h = b.closest("ul.hmenu")
                  , u = "";
                if (b.data("menu-id"))
                    return g(h, b.data("menu-id"), !0),
                    (u = b.data("ref-tag")) && d(b.data("ref-tag")),
                    !1;
                if (b.hasClass("hmenu-back-button"))
                    return g(h, h.data("parent-menu-id")),
                    (u = b.data("ref-tag")) && d(b.data("ref-tag")),
                    !1
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$", "metrics", "util.ajaxReftagLogger", "hamburgerIosScrollSpy", "agent", "hMenuItemClickHandler", "hMenuCompressibleSectionsHandler", "config", "HamburgerMenuMainContentAJAXCall", "hMenuUpdatedEvent").run("hamburgerMenuInteractionJS", function(a, d, g, c, b, l, k, h, u, q) {
            return function() {
                function g(a) {
                    a.removeClass(p.transition).unbind("transitionend webkitTransitionEnd oTransitionEnd")
                }
                e.when("updateIcpReturnUrl").run("updateHamburgerMenuMozartUpdateUrl", function(a) {
                    a("#hmenu-icp-language")
                });
                var m = a("body"), t = a("#nav-hamburger-menu"), x = a("#hmenu-container"), r = a("#hmenu-canvas"), w = a("#hmenu-canvas-background"), n = a("#hmenu-content"), z = a("#hmenu-close-menu"), y = a("#a-page"), A = a("#hmenu-header-account"), B, p = {
                    transition: "hmenu-transition",
                    visible: "hmenu-visible",
                    translateX: "hmenu-translateX",
                    translateXLeft: "hmenu-translateX-left",
                    translateXRight: "hmenu-translateX-right",
                    transparent: "hmenu-transparent",
                    opaque: "hmenu-opaque",
                    lockPosition: "lock-position"
                }, C = document.getElementById("nav-hamburger-menu");
                C && C.removeEventListener("click", f.navHamburgerMetricLogger);
                t.one("click", function() {
                    f.ue_t0 && d.count("mobile" === h.navDeviceType ? "Navm:Hmenu:IconFirstClickTime" : "Nav:Hmenu:IconFirstClickTime", Math.floor((Date.now() - f.ue_t0) / 1E3));
                    var b = e.getNow("navHMenuIconClickedNotReadyTimeStamp");
                    d.count("mobile" === h.navDeviceType ? "Navm:Hmenu:IconFirstClickWaitTime" : "Nav:Hmenu:IconFirstClickWaitTime", b ? Date.now() - b : 0);
                    r.bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        a("ul.hmenu[data-parent-menu-id\x3d'1']").removeClass("hmenu-hidden")
                    });
                    u()
                });
                t.click(function() {
                    n.children("ul.hmenu[data-menu-id\x3d'1']").addClass(p.visible);
                    x.addClass(p.visible);
                    r.removeClass(p.translateXLeft).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        g(r)
                    }).addClass(p.transition + " " + p.translateX);
                    w.removeClass(p.transparent).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        g(w)
                    }).addClass(p.transition + " " + p.opaque);
                    B = f.scrollY;
                    m.css({
                        top: "-" + B + "px"
                    });
                    m.addClass(p.lockPosition);
                    y.attr("aria-hidden", "true");
                    z.focus();
                    "mobile" === h.navDeviceType && b.iPhone && (m[0].addEventListener("touchstart", c.touchStartHandler, {
                        passive: !1
                    }),
                    m[0].addEventListener("touchmove", c.touchMoveHandler, {
                        passive: !1
                    }),
                    w.bind("touchmove", c.preventCurrentEvent));
                    d.increment("mobile" === h.navDeviceType ? "Navm:Hmenu:IconClickActionComplete" : "Nav:Hmenu:IconClickActionComplete")
                });
                f.ue_t0 && d.count("mobile" === h.navDeviceType ? "Navm:Hmenu:MenuAccessibleLatency" : "Nav:Hmenu:MenuAccessibleLatency", Date.now() - f.ue_t0);
                w.click(function(e) {
                    if (e.target === this || e.target.parentElement === this)
                        if (d.increment("mobile" === h.navDeviceType ? "Navm:Hmenu:MenuAbandon" : "Nav:Hmenu:MenuAbandon"),
                        w.removeClass(p.opaque).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                            g(w)
                        }).addClass(p.transition + " " + p.transparent),
                        r.removeClass(p.translateX).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                            x.removeClass(p.visible);
                            n.children("ul.hmenu:not([data-menu-id\x3d'1'])").removeClass(p.translateX + " " + p.translateXLeft + " " + p.visible).addClass(p.translateXRight);
                            n.children("ul.hmenu[data-menu-id\x3d'1']").removeClass(p.translateXLeft + " " + p.visible).scrollTop(0);
                            g(r)
                        }).addClass(p.transition + " " + p.translateXLeft),
                        y.removeAttr("aria-hidden"),
                        "mobile" === h.navDeviceType && b.iPhone && (m[0].removeEventListener("touchstart", c.touchStartHandler),
                        m[0].removeEventListener("touchmove", c.touchMoveHandler),
                        w.unbind("touchmove", c.preventCurrentEvent)),
                        m.attr("tabIndex", 0).focus().removeAttr("tabIndex").removeClass(p.lockPosition),
                        m.css("top", ""),
                        f.scrollTo(f.scrollX, B),
                        "mobile" === h.navDeviceType) {
                            var k = m.is(".fixed-navbar");
                            f.setTimeout(function() {
                                k && m.addClass("fixed-navbar")
                            }, 1)
                        } else
                            a(document).unbind("keyup.hamburgerEscape")
                });
                z.click(function() {
                    w.click()
                });
                a("#hmenu-container .nav-side-menu-back-to-top").click(function() {
                    var a = n.children("ul.hmenu.hmenu-visible");
                    a.scrollTop(0);
                    "1" === a.attr("data-menu-id") ? z.focus() : a.find(".hmenu-back-button").focus()
                });
                a(".hmenu-item").click(function(a) {
                    return l(a)
                });
                A && A.click(function() {
                    if (1 === A.data("recognized")) {
                        var b = a("#hmenu-canvas-background")
                          , c = a("#nav-button-avatar");
                        b && b.click();
                        c && c.click()
                    }
                });
                k();
                document.getElementById("hmenu-container").style.display = "block";
                q();
                f.csa && csa("Content", {
                    element: document.getElementById("nav-hamburger-menu")
                })("mark", "functional:click")
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$", "util.ajaxReftagLogger").run("hMenuCompressibleSectionsHandler", function(a, d) {
            var e = function(b) {
                var c = a(b.currentTarget).parent().prev(".hmenu-compress-section");
                c.find(".hmenu-item").removeAttr("tabindex");
                requestAnimationFrame(function() {
                    var a = c.prop("scrollHeight");
                    c.css("height", a + "px");
                    c.removeClass("compressed");
                    c.bind("transitionend.menuSection webkitTransitionEnd.menuSection oTransitionEnd.menuSection", function(a) {
                        "height" === a.originalEvent.propertyName && (c.unbind("transitionend.menuSection webkitTransitionEnd.menuSection oTransitionEnd.menuSection"),
                        c.css("height", ""),
                        c.find(".hmenu-item").first().focus())
                    })
                });
                d("nav_em_seemore");
                return !1
            }
              , c = function(b) {
                var c = a(b.currentTarget)
                  , e = c.parent().prev(".hmenu-compress-section");
                e.find(".hmenu-item").attr("tabindex", -1);
                requestAnimationFrame(function() {
                    var a = e.prop("scrollHeight");
                    e.css("height", a + "px");
                    requestAnimationFrame(function() {
                        e.addClass("compressed");
                        e.css("height", "");
                        c.siblings(".hmenu-compressed-btn").focus()
                    })
                });
                d("nav_em_seeless");
                return !1
            };
            return function() {
                a(".hmenu-compressed-btn").click(e);
                a(".hmenu-expanded-btn").click(c)
            }
        })
    }
    )(f.$Nav);
    (function(e, a) {
        e.when("jQuery", "util.ajax", "hMenuItemClickHandler", "config", "metrics", "hMenuUpdatedEvent", "util.getQueryStringForHMenuAjax").build("HamburgerMenuMainContentAJAXCall", function(a, g, c, b, l, k, h) {
            return function() {
                var d = {
                    attribution: "AmazonNavigationCards",
                    logLevel: "ERROR"
                }
                  , q = e.getNow("HMenuSecondLayerVariables");
                if (q && Array.isArray(q.secondLayerTreeName) && q.secondLayerTreeName.length) {
                    l.increment("mobile" === b.navDeviceType ? "Navm:Hmenu:MainContentAjax" : "Nav:Hmenu:MainContentAjax");
                    var n = Date.now();
                    q = {
                        ajaxTemplate: "hamburgerMainContent",
                        pageType: f.ue_pty ? f.ue_pty : "NavUnknownPageType",
                        hmDataAjaxHint: 1,
                        navDeviceType: b.navDeviceType,
                        isSmile: q.isSmile,
                        RegionalStores: q.RegionalStores,
                        isPrime: q.isPrime,
                        isBackup: b.isBackup,
                        hashCustomerAndSessionId: b.hashCustomerAndSessionId,
                        languageCode: b.languageCode,
                        environmentVFI: b.environmentVFI,
                        secondLayerTreeName: q.slt || q.secondLayerTreeName,
                        currentQueryString: h(),
                        customerCountryCode: b.customerCountryCode
                    };
                    var m = function(d) {
                        b.isAjaxMigrated && (d = JSON.parse(d).data);
                        var f = d && d.trim();
                        f && a(f).hasClass("hmenu-translateX-right") && (a("#hmenu-content").append(d),
                        k(),
                        e.declare("NavHmenuMainContentAdded", !0),
                        a(".hmenu-item").click(function(a) {
                            return c(a)
                        }),
                        n && l.count("mobile" === b.navDeviceType ? "Navm:Hmenu:MainContentSuccessTotalTime" : "Nav:Hmenu:MainContentSuccessTotalTime", Math.floor((Date.now() - n) / 1E3)))
                    };
                    g({
                        retryMetric: "mobile" === b.navDeviceType ? "navm-hmenu-main-content-ajax-retry" : "nav-hmenu-main-content-ajax-retry",
                        errorMetric: "mobile" === b.navDeviceType ? "navm-hmenu-main-content-ajax-error" : "nav-hmenu-main-content-ajax-error",
                        url: b.isAjaxMigrated ? "/nav/ajax/" + q.ajaxTemplate : "/gp/navigation/ajax/generic.html",
                        cache: !b.isHMenuBrowserCacheDisable,
                        dataType: "html",
                        data: q,
                        error: function(a, c, e) {
                            if (b.isAjaxMigrated) {
                                var g = (a.responseText || "").split("\x3c!-- sp:error_pages --\x3e")[0];
                                try {
                                    if (JSON.parse(g).data && m && "function" === typeof m) {
                                        m(g);
                                        return
                                    }
                                } catch (D) {}
                            }
                            a = " HamburgerMenu Main Content AJAX Call failed. Status Code : " + a.status + " Status text : " + c + " Exception : " + e;
                            f.ueLogError && (d.message = a,
                            f.ueLogError(d))
                        },
                        success: m
                    })
                }
            }
        })
    }
    )(f.$Nav, y);
    (function(e) {
        e.when("$", "config").run("hMenuUpdatedEvent", function(a, d) {
            return function() {
                if ("mobile" === d.navDeviceType) {
                    var a = new Event("nav:hbm:updated",{
                        bubbles: !0,
                        cancelable: !1
                    });
                    document.dispatchEvent(a)
                }
            }
        })
    }
    )(f.$Nav);
    (function(e) {
        e.declare("hMenuShouldSwipeClose", function(a) {
            return "left" === a
        })
    }
    )(f.$Nav);
    (function(e) {
        e.when("$", "util.ajax", "metrics", "config").run("notificationInteractionJS", function(a, d, e, c) {
            function b(a) {
                return "".concat(t ? "Navm" : "Nav", a)
            }
            function g(a) {
                return "".concat(t ? "navm" : "nav", a)
            }
            function k(a, b, c, g, k) {
                var l = Date.now();
                f.ue_t0 && e.count(a, Math.floor((l - f.ue_t0) / 1E3));
                a = {
                    "client-id": "GlobalNav",
                    type: "Payments",
                    "sub-type": "MFA",
                    "source-action": k,
                    "suppression-timestamp": Date.now(),
                    "page-type": f.ue_pty,
                    "sub-page-type": f.ue_spty
                };
                d({
                    retryMetric: b,
                    errorMetric: c,
                    url: "/gp/navigation/notifications/1.0/suppress",
                    data: a,
                    method: "POST",
                    error: function(a, b, c) {
                        var d = {
                            attribution: "AmazonNavigationCards",
                            logLevel: "ERROR"
                        };
                        a = " Notification Suppression AJAX Call failed. Status Code : " + a.status + " Status text : " + b + " Exception : " + c;
                        f.ueLogError && (d.message = a,
                        f.ueLogError(d))
                    },
                    success: function() {
                        h.length && h.hide();
                        m.length && h.length && !1 === n && m.show();
                        l && e.count(g, Math.floor((Date.now() - l) / 1E3))
                    }
                })
            }
            var h = a("#nav-notification")
              , n = 0 !== a("#nav-notification.nav-notification-bottom").length
              , q = a("a#nav-notification-right, #nav-notification-right \x3e a")
              , v = a("a#nav-notification-action, a#nav-notification-left")
              , m = a("#nav-upnav")
              , t = "mobile" === c.navDeviceType.toLowerCase();
            m.length && h.length && !1 === n && m.hide();
            q.click(function() {
                var a = b(":Notification:Suppress:ClickTime")
                  , c = g("-notification-suppress-retry")
                  , d = g("-notification-suppress-error")
                  , e = b(":Notification:Suppress:TotalTime");
                k(a, c, d, e, "CloseButton")
            });
            v.click(function() {
                var a = b(":Notification:Action:ClickTime")
                  , c = g("-notification-action-retry")
                  , d = g("-notification-action-error")
                  , e = b(":Notification:Action:TotalTime");
                k(a, c, d, e, "CallToAction")
            })
        })
    }
    )(f.$Nav)
});
/* ******** */
(function(I) {
    var k = window.AmazonUIPageJS || window.P
      , G = k._namespace || k.attributeErrors
      , e = G ? G("NavDesktopAssets", "") : k;
    e.guardFatal ? e.guardFatal(I)(e, window) : e.execute(function() {
        I(e, window)
    })
}
)(function(I, k, G) {
    (function(e) {
        e.when("sharedconstants").build("constants", function(a) {
            a.CAROUSEL_WIDTH_BUFFER = 45;
            a.PINNED_NAV_SEARCH_SPACING = 140;
            a.REMOVE_COVER_SCROLL_HEIGHT = 200;
            a.COMMUNICATION_CHANNEL_TYPE = "NAV_BAR";
            return a
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config", "provider.ajax").iff({
            name: "config",
            prop: "searchapiEndpoint"
        }).run("searchApiAjax", function(a, b, d) {
            d({
                url: b.searchapiEndpoint,
                dataKey: "searchAjaxContent",
                success: function(a) {
                    a && a.searchAjaxContent && a.searchAjaxContent.js && (a = "var P \x3d window.AmazonUIPageJS || window.P; " + a.searchAjaxContent.js,
                    e.when("$", "iss.flyout", "searchApi", "util.templates").run("[sx]iss", a))
                },
                error: function() {
                    throw "ISS failed to load.";
                }
            }).fetch()
        })
    }
    )(k.$Nav);
    (function(e, a) {
        a.importEvent("jQuery", {
            as: "$",
            global: "jQuery"
        });
        a.importEvent("jQuery", {
            global: "jQuery"
        });
        a.when("$").run("PageEventSetup", function(b) {
            var d = function() {
                a.declare("page.domReady");
                a.declare("page.ATF");
                a.declare("page.CF");
                a.declare("page.loaded");
                a.declare("btf.full")
            };
            b(function() {
                a.declare("page.domReady")
            });
            b(e).load(d);
            "complete" === document.readyState ? d() : "interactive" === document.readyState && a.declare("page.domReady")
        });
        a.when("log", "Observer", "$F").run("setupPageReady", function(b, d, c) {
            function f() {
                return "complete" !== document.readyState
            }
            var g = new d;
            g.observe(function(c) {
                b("page.ready triggered by: " + c);
                a.declare("page.ready")
            });
            d = function(a) {
                g.notify(a)
            }
            ;
            "complete" === document.readyState ? d("immediate") : (a.when("page.ATF").run("page.TriggerATF", c.partial("Event: page.ATF").tap(b).iff(f).iff(function() {
                return !!a.getNow("config.readyOnATF")
            }).on(d)),
            a.when("page.CF").run("page.TriggerCF", c.partial("Event: page.CF").tap(b).iff(f).on(d)),
            a.when("page.domReady").run("page.TriggerDom+", c.delay(1E4).partial("Event: page.domReady+").tap(b).iff(f).on(d)),
            a.when("page.loaded").run("page.TriggerLoaded", c.delay(100).partial("Event: page.loaded+").tap(b).on(d)))
        });
        a.declare("noOp", function() {});
        a.when("$", "img.sprite", "util.preload", "config", "util.addCssRule", "page.ready").run("ApplyHighResImage", function(a, d, c, f, g) {
            a = e.devicePixelRatio || 1;
            f.navDebugHighres && (a = 2);
            if (!(1 >= a)) {
                var b = f.upnavHighResImgInfo
                  , m = f.upnav2xAiryPreloadImgInfo
                  , p = f.upnav2xAiryPostSlateImgInfo;
                d["png32-2x"] && c(d["png32-2x"], function(a) {
                    1 < a.width && (g("#navbar .nav-sprite", "background-image: url(" + d["png32-2x"] + "); background-size: " + Math.floor(a.width / 2) + "px;"),
                    g("#hmenu-container .nav-sprite", "background-image: url(" + d["png32-2x"] + "); background-size: " + Math.floor(a.width / 2) + "px;"))
                });
                if (b && b.upnav2xImagePath && b.upnav2xImageHeight) {
                    var h = b.upnav2xImagePath;
                    c(h, function(a) {
                        1 < a.width && g("#nav-upnav", "background-image: url(" + h + ") !important;" + b.upnav2xImageHeight + " !important;")
                    })
                }
                if (b && b.upnav2xImagePath && b.upnav2xImageHeight) {
                    var q = b.upnav2xImagePath;
                    c(q, function(a) {
                        1 < a.width && (a = document.getElementById("nav-upnav")) && (a = a.getElementsByTagName("img"),
                        a[0] && a[0].src && (a[0].src = q))
                    })
                }
                if (m && m.preloadImgPath && m.preloadImgHeight) {
                    var n = m.preloadImgPath;
                    c(n, function(a) {
                        1 < a.width && g("#nav-airy-preload-slate-image", "background-image: url(" + n + ") !important;height:" + m.preloadImgHeight + " !important;")
                    })
                }
                if (p && p.postslateImgPath && p.postslateImgHeight) {
                    var u = p.postslateImgPath;
                    c(u, function(a) {
                        1 < a.width && g("#nav-airy-post-media-slate-image", "background-image: url(" + u + ") !important;height:" + p.postslateImgHeight + " !important;")
                    })
                }
            }
        });
        a.when("config", "now", "Observer", "noOp").build("debugStream", function(a, d, c, f) {
            if (!a.isInternal)
                return a = function() {}
                ,
                a.observe = f,
                a.getHistory = f,
                a;
            var b = []
              , l = new c;
            f = function(a, c) {
                a = {
                    data: c,
                    msg: a,
                    timestamp: d()
                };
                b.push(a);
                l.notify(a)
            }
            ;
            f.observe = l.boundObserve();
            f.getHistory = function() {
                return b
            }
            ;
            return f
        });
        a.when("debug.param", "debugStream").build("log", function(a, d) {
            return e.console && e.console.log && a("navDebug") ? function(a) {
                d("Log", a);
                e.console.log(a)
            }
            : function() {}
        });
        a.when("config", "util.getQueryString").build("debug.param", function(a, d) {
            if (!a.isInternal)
                return a = function() {
                    return !1
                }
                ,
                a.value = function() {
                    return null
                }
                ,
                a;
            var b = function() {
                var a = {}
                  , b = d();
                if (!b)
                    return a;
                b = b.substring(1).split("\x26");
                for (var c = 0; c < b.length; c++) {
                    var m = b[c].split("\x3d");
                    try {
                        a[decodeURIComponent(m[0])] = decodeURIComponent(m[1])
                    } catch (p) {}
                }
                return a
            }();
            a = function(a, c) {
                return 1 === arguments.length ? a in b : b[a] === c
            }
            ;
            a.value = function(a) {
                return a in b ? b[a] : null
            }
            ;
            return a
        });
        a.when("$").iff({
            name: "config",
            prop: "isInternal"
        }, {
            name: "agent",
            prop: "quirks"
        }).run(function(a) {
            a("#nav-debug-quirks-warning").show();
            a("#nav-debug-quirks-warning-close").click(function() {
                a("#nav-debug-quirks-warning").hide()
            })
        });
        a.when("$", "$F", "config").iff({
            name: "config",
            prop: "windowWidths"
        }).run("windowResizeHandler", function(a, d, c) {
            var b = a("#navbar").parent("header")
              , g = a(e)
              , l = c.windowWidths;
            a = d.throttle(300).on(function() {
                for (var a = g.width(), c = 0; c < l.length; c++) {
                    var d = l[c]
                      , f = "nav-w" + d;
                    a >= d ? b.addClass(f) : b.removeClass(f)
                }
            });
            g.resize(a);
            a()
        });
        a.when("$", "$F", "config.fixedBarBeacon", "fixedBar", "flyouts", "page.ready", "nav.inline").run("fixedBarResize", function(a, d, c, f, g) {
            if (c) {
                var b = a(e)
                  , m = 0;
                a.each(g.getAll(), function(a, b) {
                    b.elem().height() > m && (m = b.elem().height())
                });
                a = d.throttle(300).on(function() {
                    var a = b.width()
                      , c = b.height();
                    1E3 <= a && c >= m + 30 ? f.enable() : f.disable()
                });
                b.resize(a);
                a()
            }
        });
        a.when("$", "$F", "config.fixedSubBarBeacon", "fixedSubBar", "flyouts", "page.ready", "nav.inline").run("fixedSubBarResize", function(a, d, c, f, g) {
            if (c) {
                var b = a(e)
                  , m = 0;
                a.each(g.getAll(), function(a, b) {
                    b.elem().height() > m && (m = b.elem().height())
                });
                a = d.throttle(300).on(function() {
                    var a = b.width()
                      , c = b.height();
                    1E3 <= a && c >= m + 30 ? f.enable() : f.disable()
                });
                b.resize(a);
                a()
            }
        });
        a.when("$", "$F", "config.stickySubnavConfig", "stickySubNav", "page.ready", "nav.inline").run("stickySubNavResize", function(a, d, c, f) {
            c && (f.enable(),
            a = a(e),
            d = d.throttle(300).on(function() {
                f.setWidth()
            }),
            a.resize(d),
            d())
        });
        a.when("$", "$F", "config", "pinnedNav", "flyouts", "page.ready", "nav.inline").run("pinnedNavResize", function(a, d, c, f, g) {
            if (c.pinnedNav) {
                var b = a(e)
                  , m = 0
                  , p = 1E3;
                a.each(g.getAll(), function(a, b) {
                    b.elem().height() > m && (m = b.elem().height())
                });
                m = c.pinnedNavMinHeight ? c.pinnedNavMinHeight : m + 30;
                c.pinnedNavMinWidth && (p = c.pinnedNavMinWidth);
                a = d.throttle(300).on(function() {
                    var a = b.width()
                      , c = b.height();
                    a >= p && c >= m ? f.enable() : f.disable()
                });
                b.resize(a);
                a()
            }
        });
        a.when("PublishAPIs").publish("navbarJSInteraction")
    }
    )(k, k.$Nav);
    (function(e, a) {
        a.when("$", "img.sprite", "util.preload", "config", "util.addCssRule", "page.ready").run("ApplyHighResImageDesktop", function(a, d, c, f, g) {
            a = e.devicePixelRatio || 1;
            f.navDebugHighres && (a = 2);
            if (!(1 >= a)) {
                var b = f.transientMenuImage2xHover
                  , m = f.transientMenuImage2x;
                m && c(m, function(a) {
                    1 < a.width && g("#nav-transient-flyout-trigger", "background: url(" + m + ") no-repeat !important;background-size: " + Math.floor(a.width / 2) + "px !important;")
                });
                b && c(m, function(a) {
                    1 < a.width && (g("#nav-transient-flyout-trigger:focus", "background: url(" + b + ") no-repeat !important; background-size: " + Math.floor(a.width / 2) + "px !important;"),
                    g("#nav-transient-flyout-trigger:hover", "background: url(" + b + ") no-repeat !important; background-size: " + Math.floor(a.width / 2) + "px !important;"))
                })
            }
        })
    }
    )(k, k.$Nav);
    (function(e) {
        e.when("logEvent.enabled", "$F").build("logEvent", function(a, b) {
            var d = {};
            return function(c, f) {
                var g = [], l;
                for (l in c)
                    c.hasOwnProperty(l) && g.push(l + ":" + c[l]);
                g.sort();
                g = g.join("|");
                d[g] || (d[g] = !0,
                e.getNow("log", b.noOp)("logEv:" + g),
                a && k.ue && k.ue.log && k.ue.log(c, "navigation", f))
            }
        });
        e.when("agent", "logEvent", "btf.lite").run("logQuirks", function(a, b) {
            b({
                quirks: a.quirks ? 1 : 0
            })
        });
        e.when("$F", "log").build("phoneHome", function(a, b) {
            function d() {
                f = {
                    t: [],
                    e: []
                };
                g = {
                    t: {},
                    e: {}
                };
                l = !0
            }
            function c(a, c) {
                !c || c in g[a] || (f[a].push(c),
                b("PhoneHome: " + a + " " + c),
                g[a][c] = !0,
                l = !1)
            }
            var f, g, l;
            e.when("$", "config.recordEvUrl", "config.recordEvInterval", "config.sessionId", "config.requestId", "eventing.onunload").run("recordEvLoop", function(a, b, c, g, n, e) {
                function h(a, b) {
                    a = f[a].join(b);
                    return k.encodeURIComponent(a)
                }
                function m(a) {
                    p++;
                    if (!l) {
                        a = a || p;
                        var c = h("t", ":")
                          , f = h("e", ":");
                        a = "trigger\x3d" + c + "\x26exposure\x3d" + f + "\x26when\x3d" + a + "\x26sid\x3d" + (k.ue && k.ue.sid || g || "") + "\x26rid\x3d" + (k.ue && k.ue.rid || n || "");
                        c = 0 < b.indexOf("?") ? "\x26" : "?";
                        (new Image).src = b + c + a;
                        d()
                    }
                }
                if (b) {
                    var p = 0;
                    k.setInterval(m, c);
                    e(function() {
                        m("beforeunload")
                    })
                }
            });
            d();
            return {
                trigger: a.partial("t").on(c),
                exposure: a.partial("e").on(c)
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "debugStream", "util.checkedObserver", "util.node", "util.randomString").build("panels", function(a, b, d, c, f) {
            var g = {}
              , l = 0
              , m = function(a) {
                return function(b) {
                    for (var c in g)
                        g.hasOwnProperty(c) && a.call(g[c], b || {})
                }
            }
              , p = {
                create: function(h) {
                    var m = {
                        name: "panel-" + l++,
                        visible: !1,
                        sidePanelCallback: [],
                        locked: !1,
                        rendered: !1,
                        interactionDelay: 750,
                        elem: null,
                        groups: [],
                        locks: []
                    };
                    h = a.extend({}, m, h);
                    if (g[h.name])
                        return g[h.name];
                    var n = {}
                      , e = !0;
                    n.elem = function(b) {
                        if (b || e)
                            h.elem = a(c.create(b || h.elem)),
                            e = !1;
                        return h.elem
                    }
                    ;
                    var w = !1;
                    n.interact = d({
                        context: n,
                        observe: function() {
                            b("Panel Interact", n);
                            w = !0
                        }
                    });
                    n.hasInteracted = function() {
                        return w
                    }
                    ;
                    var r = null
                      , k = function() {
                        r && (clearTimeout(r),
                        r = null)
                    }
                      , v = function() {
                        k();
                        h.rendered && h.visible && (r = setTimeout(n.interact, h.interactionDelay))
                    };
                    n.render = d({
                        context: n,
                        check: function(a) {
                            if (h.rendered)
                                return !1
                        },
                        observe: function(a) {
                            h.rendered = !0;
                            v();
                            b("Panel Render", n)
                        }
                    });
                    n.reset = d({
                        context: n,
                        observe: function(a) {
                            h.rendered = !1;
                            k();
                            b("Panel Reset", n)
                        }
                    });
                    n.show = d({
                        context: n,
                        check: function(a) {
                            if (h.visible || h.locked || !n.groups.has(a.group))
                                return !1
                        },
                        observe: function(a) {
                            if (0 < h.groups.length)
                                for (var c = 0; c < h.groups.length; c++)
                                    p.hideAll({
                                        group: h.groups[c]
                                    });
                            h.rendered || n.render(a);
                            h.visible = !0;
                            v();
                            b("Panel Show", n)
                        }
                    });
                    n.hide = d({
                        context: n,
                        check: function(a) {
                            if (!h.visible || h.locked || !n.groups.has(a.group))
                                return !1
                        },
                        observe: function(a) {
                            h.visible = !1;
                            k();
                            b("Panel Hide", n)
                        }
                    });
                    n.lockRequest = d({
                        context: n
                    });
                    n.lock = d({
                        context: n,
                        check: function(a) {
                            var b = h.locked;
                            n.locks.add(a.lockKey || "global");
                            n.lockRequest();
                            if (b)
                                return !1
                        },
                        observe: function() {
                            b("Panel Lock", n)
                        }
                    });
                    n.unlockRequest = d({
                        context: n
                    });
                    n.unlock = d({
                        context: n,
                        check: function(a) {
                            n.unlockRequest();
                            n.locks.remove(a.lockKey || "global");
                            if (h.locked)
                                return !1
                        },
                        observe: function() {
                            b("Panel Unlock", n)
                        }
                    });
                    n.groups = {
                        add: function(a) {
                            h.groups.push(a)
                        },
                        remove: function(b) {
                            b = a.inArray(b, h.groups);
                            -1 < b && h.groups.splice(b, 1)
                        },
                        has: function(b) {
                            return !b || -1 < a.inArray(b, h.groups) ? !0 : !1
                        },
                        clear: function() {
                            h.groups = []
                        }
                    };
                    n.locks = {
                        add: function(a) {
                            h.locks.push(a || f());
                            h.locked = !0
                        },
                        remove: function(b) {
                            b = a.inArray(b, h.locks);
                            -1 < b && h.locks.splice(b, 1);
                            0 === h.locks.length && (h.locked = !1)
                        },
                        has: function(b) {
                            return !b || -1 < a.inArray(b, h.locks) ? !0 : !1
                        },
                        clear: function() {
                            h.locked = !1;
                            h.locks = []
                        }
                    };
                    n.isVisible = function() {
                        return h.visible
                    }
                    ;
                    n.isSideCallbackSet = function() {
                        return null !== h.sidePanelCallback
                    }
                    ;
                    n.setSidePanelCallback = function(a) {
                        h.sidePanelCallback.push(a)
                    }
                    ;
                    n.initiateSidePanel = function() {
                        if (null !== h.sidePanelCallback)
                            for (var a = 0; a < h.sidePanelCallback.length; a++)
                                h.sidePanelCallback[a]()
                    }
                    ;
                    n.isLocked = function() {
                        return 0 < h.locks.length
                    }
                    ;
                    n.isRendered = function() {
                        return h.rendered
                    }
                    ;
                    n.isGrouped = function() {
                        return 0 < h.groups.length
                    }
                    ;
                    n.getName = function() {
                        return h.name
                    }
                    ;
                    n.destroy = d({
                        context: n,
                        observe: function() {
                            k();
                            var a = n.elem();
                            a && a.remove();
                            b("Panel destroy", n)
                        }
                    });
                    n.onReset = n.reset.observe;
                    n.onRender = n.render.observe;
                    n.onInteract = n.interact.observe;
                    n.onShow = n.show.observe;
                    n.onHide = n.hide.observe;
                    n.onLock = n.lock.observe;
                    n.onUnlock = n.unlock.observe;
                    n.onLockRequest = n.lockRequest.observe;
                    n.onUnlockRequest = n.unlockRequest.observe;
                    n.onDestroy = n.destroy.observe;
                    a.each(h, function(a, b) {
                        a in m || a in n || (n[a] = b)
                    });
                    b("Panel Create", n);
                    return g[h.name] = n
                },
                destroy: function(a) {
                    return g[a] ? (g[a].destroy(),
                    delete g[a],
                    !0) : !1
                },
                hideAll: m(function(a) {
                    this.hide(a)
                }),
                showAll: m(function(a) {
                    this.show(a)
                }),
                lockAll: m(function(a) {
                    this.lock(a)
                }),
                unlockAll: m(function(a) {
                    this.unlock(a)
                }),
                getAll: function(a) {
                    a = a || {};
                    var b = [], c;
                    for (c in g)
                        "locked"in a && g[c].isLocked() !== a.locked || "visible"in a && g[c].isVisible() !== a.visible || "rendered"in a && g[c].isRendered() !== a.rendered || "group"in a && !g[c].groups.has(a.group) || "lockKey"in a && !g[c].locks.has(a.lockKey) || b.push(g[c]);
                    return b
                },
                get: function(a) {
                    return g[a]
                }
            };
            return p
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "data", "debugStream", "panels", "util.templates", "metrics", "util.checkedObserver").build("dataPanel", function(a, b, d, c, f, g, l) {
            var m = 0;
            return function(p) {
                var h = c.create(a.extend({
                    id: "dataPanel-" + p.dataKey + "-" + m++,
                    className: null,
                    dataKey: null,
                    groups: [],
                    spinner: !1,
                    visible: !0,
                    timeoutDataKey: null,
                    timeoutDelay: 5E3,
                    elem: function() {
                        var b = a("\x3cdiv class\x3d'nav-template'\x3e\x3c/div\x3e");
                        p.id && b.attr("id", p.id);
                        p.className && b.addClass(p.className);
                        p.spinner && b.addClass("nav-spinner");
                        return b
                    }
                }, p))
                  , q = f.renderer();
                q.onRender(function(a) {
                    h.reset();
                    h.render({
                        html: a,
                        templateName: q.templateName,
                        data: q.data
                    })
                });
                var n = null;
                h.timeout = l({
                    context: h,
                    check: function() {
                        if (h.isRendered())
                            return !1
                    },
                    observe: function() {
                        if (p.timeoutDataKey) {
                            var a = b.get(p.timeoutDataKey);
                            if (a) {
                                a.isTimeout = !0;
                                var c = {};
                                c[p.dataKey] = a;
                                b(c)
                            }
                            g.increment("nav-panel-" + p.timeoutDataKey);
                            d("Panel Timeout", h)
                        }
                    }
                });
                h.onTimeout = h.timeout.observe;
                h.startTimeout = function() {
                    n && clearTimeout(n);
                    h.isRendered() || (n = setTimeout(h.timeout, h.timeoutDelay))
                }
                ;
                h.render.check(function(a) {
                    if (!a.html)
                        return !1
                });
                h.onRender(function(a) {
                    var b = this.elem();
                    b[0].className = "nav-template" + (p.className ? " " + p.className : "") + (a.templateName ? " nav-tpl-" + a.templateName : "") + (a.noTemplate ? " nav-tpl-itemList" : "");
                    p.doNotExecuteScripts ? b[0].innerHTML = a.html || "" : b.html(a.html || "")
                });
                h.onReset(function() {
                    var a = this.elem();
                    a[0].className = "nav-template" + (p.className ? " " + p.className : "") + (p.spinner ? " nav-spinner" : "");
                    a.html("")
                });
                h.data = l({
                    context: h
                });
                h.onData = h.data.observe;
                h.onShow(function() {
                    this.elem().show()
                });
                h.onHide(function() {
                    this.elem().hide()
                });
                var e = function(c) {
                    c && (c.css && (h.styleSheet && h.styleSheet.attr("disabled", "disabled").remove(),
                    h.styleSheet = a("\x3cstyle type\x3d'text/css' /\x3e").appendTo("head"),
                    h.styleSheet[0].styleSheet ? h.styleSheet[0].styleSheet.cssText = c.css : h.styleSheet[0].appendChild(document.createTextNode(c.css))),
                    c.event && "string" === typeof c.event && a.isFunction(h[c.event]) ? h[c.event].call(h) : c.event && "string" === typeof c.event.name && a.isFunction(h[c.event.name]) ? h[c.event.name].apply(h, "[object Array]" === Object.prototype.toString.call(c.event.args) ? c.event.args : []) : c.template ? (q.templateName = c.template.name,
                    q.data = c.template.data,
                    q.render()) : c.html ? (h.reset(),
                    h.render({
                        html: c.html,
                        noTemplate: c.noTemplate
                    })) : c.dataKey && b.get(c.dataKey) && e(b.get(c.dataKey)),
                    h.data(c))
                }
                  , w = b.observe(p.dataKey, e);
                h.onDestroy(function() {
                    b.remove(w)
                });
                return h
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "util.parseQueryString", "config.isInternal", "log", "metrics", "onOptionClick", "eventing.onunload").build("searchMetrics", function(a, b, d, c, f, g, l, m) {
            return function(p) {
                var h = this;
                this.elements = p;
                this.debug = !1;
                this.trigger = "TN";
                this.scopeChanged = !1;
                this.setTrigger = b.once().on(function(a) {
                    h.trigger = a
                });
                this.queryFirst = "N";
                this.setQueryFirst = b.once().on(function(a) {
                    h.queryFirst = a ? 0 : 1
                });
                this.TRIGGERS = {
                    BUTTON: "TB",
                    ENTER_KEY: "TE",
                    ISS_KEYBOARD: "ISSK",
                    ISS_MOUSE: "ISSM"
                };
                this._getState = function() {
                    var a = h.elements.scopeSelect[0].selectedIndex || null
                      , b = h.elements.inputTextfield.val();
                    "" === b && (b = null);
                    return {
                        scope: a,
                        query: b
                    }
                }
                ;
                this._computeAction = function(a, b, c) {
                    var d = "N";
                    a ? (d = "R",
                    b && (d = "NC",
                    a !== b && (d = "M"))) : b && (d = "A");
                    return c + d
                }
                ;
                this._computeKey = function() {
                    var a = h._getState()
                      , b = h._computeAction(h.initial.scope, a.scope, "S");
                    a = h._computeAction(h.initial.query, a.query, "Q");
                    return ["QF-" + h.queryFirst, b, a, h.trigger].join(":")
                }
                ;
                this.log = function(a) {
                    h.debug && f(a)
                }
                ;
                this.printKey = function() {
                    if (h.debug) {
                        var a = h._computeKey();
                        h.log("SM: key is: " + a);
                        return a
                    }
                }
                ;
                this._sendMetric = b.once().on(function() {
                    var a = h._computeKey();
                    g.increment(a)
                });
                this._setupScopeSelectListener = function() {
                    l(this.elements.scopeSelect, function() {
                        h.log("SM: scope changed");
                        h.scopeChanged = !0
                    })
                }
                ;
                this.updateScopeSelect = function(a) {
                    this.elements.scopeSelect = a;
                    h._setupScopeSelectListener()
                }
                ;
                this.init = function() {
                    this.debug = c && "1" === d().navTestSearchMetrics;
                    this.initial = this._getState();
                    this.log("SM: initial state");
                    this.log(this.initial);
                    h._setupScopeSelectListener();
                    this.elements.inputTextfield.keypress(function(a) {
                        13 === a.which ? h.setTrigger(h.TRIGGERS.ENTER_KEY) : (h.scopeChanged && h.setQueryFirst(!0),
                        h.setQueryFirst(!1))
                    });
                    this.elements.submitButton.click(function() {
                        h.setTrigger(h.TRIGGERS.BUTTON)
                    });
                    e.when("flyoutAPI.SearchSuggest").run(function(b) {
                        b.onShow(function() {
                            a(".srch_sggst_flyout").one("mousedown", function() {
                                h.setTrigger(h.TRIGGERS.ISS_MOUSE)
                            })
                        })
                    });
                    m(function(a) {
                        if (h.debug)
                            return h.printKey(),
                            a.preventDefault(),
                            a.stopPropagation(),
                            !1;
                        h._sendMetric()
                    })
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("log", "sharedconstants").build("flyoutMetrics", function(a, b) {
            function d(a) {
                var d = 0, f = !1, m, p = a.getName().split("/");
                p = p[p.length - 1];
                if (k && k.navmet) {
                    var h = k.navmet.MainEnd;
                    h && c("nav-flyout-" + p + "-attach-latency", new Date - h)
                }
                a.elem().click(function() {
                    var a = m ? new Date - m : void 0;
                    c("nav-flyout-" + p + "-dwellTime", a);
                    f = !1
                });
                a.onShow(function() {
                    m = new Date;
                    f = !0
                });
                a.onHide(function() {
                    if (f) {
                        var a = m ? new Date - m : void 0;
                        a > b.DWELLTIME_MIN && (d++,
                        c("nav-flyout-" + p + "-dwellTime", a),
                        c("nav-flyout-" + p + "-bounceCount", d))
                    }
                    f = !1
                })
            }
            function c(b, c) {
                k.ue && k.ue.count && (k.ue.count(b, c),
                a("Nav-Flyout-Metrics: " + b + " to " + c))
            }
            a("flyout metrics");
            return {
                attachTo: function(a) {
                    d(a)
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "Observer").build("util.ajax", function(a, b) {
            return function(b) {
                b = a.extend({
                    url: null,
                    data: {},
                    type: "GET",
                    dataType: "json",
                    cache: !1,
                    timeout: 5E3,
                    retryLimit: 3
                }, b);
                var c = b.error;
                b.error = function() {
                    0 <= --this.retryLimit ? (a.ajax(this),
                    b.retry && b.retry(this)) : c && c.apply(this, arguments)
                }
                ;
                return a.ajax(b)
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "agent", "util.bean", "util.class", "config").build("util.Aligner", function(a, b, d, c, f, g) {
            var l = {
                top: {
                    direction: "vert",
                    size: 0
                },
                middle: {
                    direction: "vert",
                    size: .5
                },
                bottom: {
                    direction: "vert",
                    size: 1
                },
                left: {
                    direction: "horiz",
                    size: 0
                },
                center: {
                    direction: "horiz",
                    size: .5
                },
                right: {
                    direction: "horiz",
                    size: 1
                }
            };
            g.rightMarginAlignEnabled && (l.rightArrow = {
                direction: "horiz",
                size: .9
            });
            var m = {
                top: "vert",
                bottom: "vert",
                left: "horiz",
                right: "horiz"
            }
              , p = function(a, b, c) {
                try {
                    return a[b ? "outerHeight" : "outerWidth"](c) || 0
                } catch (w) {
                    return 0
                }
            }
              , h = function(a, b) {
                b = b ? "top" : "left";
                try {
                    var c = a.offset();
                    return c ? c[b] : 0
                } catch (w) {
                    return 0
                }
            };
            d = f();
            d.prototype.alignTo = c({
                value: a.fn
            });
            d.prototype.offsetTo = c({
                value: a.fn
            });
            d.prototype.base = c({
                value: a.fn
            });
            d.prototype.target = c({
                value: a.fn
            });
            d.prototype.fullWidth = c({
                value: !1
            });
            d.prototype.constrainTo = c({
                value: a.fn
            });
            d.prototype.constrainBuffer = c({
                value: [0, 0, 0, 0]
            });
            d.prototype.constrainChecks = c({
                value: [!0, !0, !0, !0]
            });
            d.prototype.fullWidthCss = c({
                get: function(b) {
                    return a.extend({
                        left: "0px",
                        right: "0px",
                        width: "auto"
                    }, b)
                },
                value: function() {
                    return {}
                }
            });
            d.prototype.anchor = c({
                value: {
                    vert: "top",
                    horiz: "left"
                },
                set: function(a) {
                    a = a.split(" ");
                    for (var b = {
                        vert: "top",
                        horiz: "left"
                    }, c = 0; c < a.length; c++)
                        m[a[c]] && (b[m[a[c]]] = a[c]);
                    return b
                }
            });
            d.prototype.getAlignment = function(a) {
                var c = l[a];
                if (c) {
                    var d = "vert" === c.direction ? !0 : !1
                      , f = d ? "top" : "left"
                      , g = d ? "bottom" : "right";
                    return {
                        offset: b.bind(this).on(function() {
                            return h(this.base(), d) - h(this.offsetTo(), d) + p(this.base(), d) * c.size
                        }),
                        align: b.bind(this).on(function() {
                            var a = this.from()[c.direction].offset() + this.nudgeFrom()[f]
                              , b = h(this.alignTo(), d)
                              , m = b - h(this.offsetTo(), d) + this.nudgeTo()[f]
                              , l = p(this.target(), d);
                            a = a - m - l * c.size;
                            var n = this.constrainTo();
                            if (1 === n.length) {
                                m = this.constrainChecks();
                                var q = this.constrainBuffer()
                                  , e = p(n, d) - (d ? q[0] + q[2] : q[1] + q[3]);
                                n = h(n, d) + (d ? q[0] : q[3]);
                                (d && m[0] || !d && m[3]) && a + b < n ? a = n - b : (d && m[2] || !d && m[1]) && a + b + l > n + e && (a = n + e - l - b)
                            }
                            b = {};
                            this.anchor()[c.direction] === f ? b[f] = a : (m = p(this.alignTo(), d),
                            b[g] = m - a - l);
                            return b
                        })
                    }
                }
                return {
                    offset: function() {
                        return 0
                    },
                    align: function() {
                        return {}
                    }
                }
            }
            ;
            d.prototype.from = c({
                set: function(a) {
                    a = a.split(" ");
                    for (var b = {
                        vert: this.getAlignment(),
                        horiz: this.getAlignment()
                    }, c = 0; c < a.length; c++) {
                        var d = l[a[c]];
                        d && (b["vert" === d.direction ? "vert" : "horiz"] = this.getAlignment(a[c]))
                    }
                    return b
                },
                value: function() {
                    return {
                        vert: this.getAlignment(),
                        horiz: this.getAlignment()
                    }
                }
            });
            d.prototype.to = c({
                set: function(a) {
                    a = a.split(" ");
                    for (var b = {
                        vert: this.getAlignment(),
                        horiz: this.getAlignment()
                    }, c = 0; c < a.length; c++) {
                        var d = l[a[c]];
                        d && (b["vert" === d.direction ? "vert" : "horiz"] = this.getAlignment(a[c]))
                    }
                    return b
                },
                value: function() {
                    return {
                        vert: this.getAlignment(),
                        horiz: this.getAlignment()
                    }
                }
            });
            d.prototype.nudgeFrom = c({
                set: function(a) {
                    return {
                        top: a.top || 0,
                        left: a.left || 0
                    }
                },
                value: {
                    top: 0,
                    left: 0
                }
            });
            d.prototype.nudgeTo = c({
                set: function(a) {
                    return {
                        top: a.top || 0,
                        left: a.left || 0
                    }
                },
                value: {
                    top: 0,
                    left: 0
                }
            });
            d.prototype.align = function(b) {
                b && this.target(b);
                this.target().css("position", "absolute");
                b = this.to();
                this.target().css(a.extend({}, b.vert.align(), this.fullWidth() ? this.fullWidthCss() : b.horiz.align()));
                return this
            }
            ;
            return d
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F").build("util.bean", function(a, b) {
            var d = 0;
            return function(c) {
                c = a.extend({
                    name: "__bean_storage_" + d++,
                    set: function(a) {
                        return a
                    },
                    get: function(a) {
                        return a
                    }
                }, c);
                return function(a) {
                    var d = c.context || this;
                    d[c.name] || (d[c.name] = {},
                    "undefined" !== typeof c.value && (d[c.name].value = c.value instanceof Function ? b.bind(d).on(c.value)() : c.value));
                    var f = d[c.name].value;
                    if ("undefined" !== typeof a)
                        return d[c.name].set || (d[c.name].set = b.bind(d).on(c.set)),
                        d[c.name].value = d[c.name].set(a, f),
                        d;
                    "undefined" === typeof f && "undefined" !== typeof c.empty && (d[c.name].empty || (d[c.name].empty = c.empty instanceof Function ? b.bind(d).on(c.empty) : function() {
                        return c.empty
                    }
                    ),
                    f = d[c.name].empty());
                    d[c.name].get || (d[c.name].get = b.bind(d).on(c.get));
                    return d[c.name].get(f)
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.declare("util.checkedObserver", function(a) {
            function b(a) {
                a = a || {};
                !1 !== b.check(a) && (d++,
                b.observe(a))
            }
            var d = 0
              , c = {}
              , f = []
              , g = [];
            b.observe = function(a) {
                a = a || {};
                if ("function" === typeof a)
                    return f.push(a),
                    b;
                for (var d = 0; d < f.length; d++)
                    f[d].call(c, a)
            }
            ;
            b.check = function(a) {
                a = a || {};
                if ("function" === typeof a)
                    return g.push(a),
                    b;
                for (var d = 0; d < g.length; d++)
                    if (!1 === g[d].call(c, a))
                        return !1;
                return !0
            }
            ;
            b.context = function(a) {
                return a ? (c = a,
                b) : c
            }
            ;
            b.count = function(a) {
                return a ? (d = a,
                b) : d
            }
            ;
            if (a)
                for (var l in a)
                    if (a.hasOwnProperty(l) && b[l])
                        b[l](a[l]);
            return b
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F").build("util.class", function(a, b) {
            return function(d) {
                d = a.extend({
                    construct: b.noOp
                }, d);
                var c = function(a) {
                    for (var b in a)
                        this[b](a[b]);
                    d.construct.apply(this, arguments)
                };
                c.newInstance = function() {
                    var a = Array.prototype.slice.call(arguments)
                      , b = function() {
                        return c.apply(this, a)
                    };
                    b.prototype = c.prototype;
                    return new b
                }
                ;
                c.isInstance = function(a) {
                    return a instanceof this
                }
                ;
                return c
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "util.bean", "util.class").build("util.Ellipsis", function(a, b, d, c) {
            b = c();
            b.prototype._storage = [];
            b.prototype.elem = function(b) {
                var c = this;
                b instanceof a && b.get && (b = b.get());
                var d = function(b) {
                    b = a(b);
                    c._storage.push({
                        $elem: b,
                        text: b.text(),
                        isTruncated: !1
                    })
                };
                if (b instanceof Array)
                    for (var f = 0; f < b.length; f++)
                        d(b[f]);
                else
                    d(b);
                return this
            }
            ;
            b.prototype.lines = d({
                value: !1
            });
            b.prototype.external = d({
                value: !1
            });
            b.prototype.lastCharacter = d({
                value: "..."
            });
            b.prototype.dimensions = d({
                empty: function() {
                    var a = this.lines();
                    return function(b) {
                        return {
                            width: b.innerWidth(),
                            height: a ? parseInt(b.css("line-height"), 10) * a : b.parent().height()
                        }
                    }
                },
                set: function(a) {
                    var b = this;
                    return function(c) {
                        c = a.call(b, c);
                        return {
                            width: c.width || 0,
                            height: c.height || 0
                        }
                    }
                }
            });
            b.prototype.refresh = function() {
                this.reset();
                this.truncate();
                return this
            }
            ;
            b.prototype.truncate = function() {
                var b = this.lastCharacter(), c = this.external(), d = this.dimensions(), m;
                c && (m = a("\x3cdiv\x3e\x3c/div\x3e").css({
                    position: "absolute",
                    left: "-10000px",
                    visibility: "hidden"
                }).appendTo(document.body));
                a.each(this._storage, function(a, f) {
                    if (!f.isTruncated) {
                        f.isTruncated = !0;
                        a = d(f.$elem);
                        c && m.css({
                            width: a.width + "px",
                            lineHeight: f.$elem.css("line-height")
                        });
                        var g = c ? m : f.$elem;
                        g.text("");
                        for (var h = g.height(), l = f.text.split(" "), p = 0, e = ""; h <= a.height; ) {
                            var k = l.slice(0, ++p).join(" ");
                            if ("" !== l[p]) {
                                if (k.length === e.length) {
                                    f.$elem.text(f.text);
                                    return
                                }
                                g.text(k + b);
                                h = g.height();
                                e = k
                            }
                        }
                        f.$elem.text(l.slice(0, p - 1).join(" ") + b)
                    }
                });
                c && m.remove();
                return this
            }
            ;
            b.prototype.reset = function() {
                a.each(this._storage, function(a, b) {
                    b.isTruncated && (b.isTruncated = !1,
                    b.$elem.text(b.text))
                });
                return this
            }
            ;
            return b
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$").build("eventing.onunload", function(a) {
            var b = e.getNow("config.pageHideEnabled");
            return function(d) {
                b && k.addEventListener && (k.onpagehide || null === k.onpagehide) ? k.addEventListener("pagehide", d, !1) : a(k).bind("beforeunload", d)
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.build("util.getComputedStyle", function() {
            return k.getComputedStyle || function(a, b) {
                return {
                    el: a,
                    getPropertyValue: function(b) {
                        var c = /(\-([a-z]){1})/g;
                        "float" === b && (b = "styleFloat");
                        c.test(b) && (b = b.replace(c, function(a, b, c) {
                            return c.toUpperCase()
                        }));
                        return a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null
                    }
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "img.pixel", "util.getComputedStyle").build("util.highContrast", function(a, b, d) {
            var c = document.createElement("div");
            c.style.cssText = "position:absolute; left:-1000px; height:10px; width:10px; border-left:1px solid black; border-right:1px solid white; background-image: url('" + b + "')";
            document.body.appendChild(c);
            b = d(c, "backgroundImage");
            d = "none" === b || "url(invalid-url:)" === b || d(c, "borderLeftColor") === d(c, "borderRightColor");
            a.browser && a.browser.msie && 7 >= parseInt(a.browser.version, 10) ? c.outerHTML = "" : document.body.removeChild(c);
            return d
        })
    }
    )(k.$Nav);
    (function(e) {
        e.build("util.highRes", function() {
            return 1 < k.devicePixelRatio ? !0 : !1
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("agent").build("util.inlineBlock", function(a) {
            return function(b) {
                a.ie6 || a.quirks ? b.css({
                    display: "inline",
                    zoom: "1"
                }) : b.css({
                    display: "inline-block"
                })
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$F", "util.Keycode").build("util.onKey", function(a, b) {
            return function(d, c, f, g) {
                if (!d || !c)
                    return {
                        bind: a.noOp,
                        unbind: a.noOp
                    };
                f = f || "keydown";
                g = !1 === g ? !1 : !0;
                var l = function(a) {
                    var d = new b(a);
                    return c.call(d, a)
                };
                g && d.bind(f, l);
                return {
                    bind: function() {
                        g || (d.bind(f, l),
                        g = !0)
                    },
                    unbind: function() {
                        g && (d.unbind(f, l),
                        g = !1)
                    }
                }
            }
        });
        e.when("$").build("util.Keycode", function(a) {
            function b(a) {
                this.evt = a;
                this.code = a.keyCode || a.which
            }
            b.prototype.isAugmented = function() {
                return this.evt.altKey || this.evt.ctrlKey || this.evt.metaKey
            }
            ;
            b.prototype.isAugmentor = function() {
                return 0 <= a.inArray(this.code, [0, 16, 20, 17, 18, 224, 91, 93])
            }
            ;
            b.prototype.isTextFieldControl = function() {
                return 0 <= a.inArray(this.code, [8, 9, 13, 32, 35, 36, 37, 38, 39, 40, 45, 46])
            }
            ;
            b.prototype.isControl = function() {
                return 46 >= this.code || 91 <= this.code && 95 >= this.code || 112 <= this.code && 145 >= this.code ? !0 : !1
            }
            ;
            b.prototype.isShiftTab = function() {
                return 9 === this.code && this.evt.shiftKey
            }
            ;
            b.prototype.isTab = function() {
                return 9 === this.code
            }
            ;
            b.prototype.isEnter = function() {
                return 13 === this.code
            }
            ;
            b.prototype.isBackspace = function() {
                return 8 === this.code
            }
            ;
            b.prototype.isSpace = function() {
                return 32 === this.code
            }
            ;
            b.prototype.isEscape = function() {
                return 27 === this.code
            }
            ;
            return b
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "now", "agent").build("util.MouseTracker", function(a, b, d) {
            function c(a) {
                var c = g.length;
                if (c && (c = g[c - 1],
                c.x === a.pageX && c.y === a.pageY))
                    return;
                g.push({
                    x: a.pageX,
                    y: a.pageY,
                    when: l ? a.timeStamp : b()
                });
                100 < g.length && (g = g.slice(-10))
            }
            function f() {
                this.active = !0;
                0 === m && a(document).mousemove(c);
                m++
            }
            var g = []
              , l = !d.firefox
              , m = 0;
            f.prototype.stop = function() {
                this.active && (m--,
                0 === m && (a(document).unbind("mousemove", c),
                this.active = !1,
                g = []))
            }
            ;
            f.prototype.position = function() {
                var b = g.length;
                return b ? a.extend(!0, {}, g[b - 1]) : null
            }
            ;
            f.prototype.velocity = function() {
                var a = g.length;
                if (1 < a && 75 >= b() - g[a - 1].when)
                    for (var c = g[a - 1], d = 2; d <= a; d++) {
                        var f = g[a - d]
                          , l = c.when - f.when;
                        f = Math.abs(c.x - f.x) + Math.abs(c.y - f.y);
                        if (0 < f && 0 < l)
                            return f / l * 1E3
                    }
                return 0
            }
            ;
            f.prototype.history = function(b) {
                var c = g.length;
                if (0 === c)
                    return [];
                var d = Math.min(c, 10);
                0 < arguments.length && (d = Math.min(d, b));
                var f = []
                  , l = c - 1;
                for (c -= d; l >= c; l--)
                    f.push(a.extend(!0, {}, g[l]));
                return f
            }
            ;
            return {
                start: function() {
                    return new f
                }
            }
        });
        e.when("$", "$F", "util.MouseTracker", "debug.param").build("util.Proximity", function(a, b, d, c) {
            function f(b, c) {
                var d = []
                  , f = []
                  , g = []
                  , m = [];
                b.each(function(b, c) {
                    c = a(c);
                    b = c.offset();
                    g.push(b.top);
                    m.push(b.top + c.height());
                    l ? (d.push(a(k).width() - (b.left + c.width())),
                    f.push(a(k).width() - b.left)) : (d.push(b.left),
                    f.push(b.left + c.width()))
                });
                return {
                    left: Math.min.apply(Math, d) - c[3],
                    top: Math.min.apply(Math, g) - c[0],
                    right: Math.max.apply(Math, f) + c[1],
                    bottom: Math.max.apply(Math, m) + c[2]
                }
            }
            var g = c("navDebugProximity")
              , l = "rtl" === a("body").css("direction");
            return {
                onEnter: function(c, p, h, e, n) {
                    function m() {
                        g && t.show().css({
                            background: "rgba(255,0,0,0.1)"
                        });
                        z && (k.clearInterval(z),
                        z = null);
                        q && (q.stop(),
                        q = null);
                        r = null
                    }
                    var q = d.start()
                      , r = f(c, p);
                    if (g) {
                        var t = a("\x3cdiv\x3e\x3c/div\x3e").css({
                            position: "absolute",
                            top: r.top,
                            left: l ? "auto" : r.left,
                            right: l ? r.left : "auto",
                            width: r.right - r.left,
                            height: r.bottom - r.top,
                            background: "rgba(0,255,0,0.1)",
                            zIndex: 1E3,
                            clickEvents: "none"
                        });
                        t.click(function() {
                            t.hide().remove()
                        });
                        t.show();
                        a("body").append(t)
                    }
                    var v = e ? b.throttle(e).on(h) : b.once().on(function() {
                        m();
                        h()
                    });
                    var x, A, y, D, B, C, z = k.setInterval(function() {
                        n && (y = k.scrollX,
                        D = k.scrollY,
                        C = a(k).width(),
                        y !== x || D !== A || C !== B) && (r = f(c, p),
                        g && t.show().css({
                            top: r.top,
                            left: l ? "auto" : r.left,
                            right: l ? r.left : "auto",
                            width: r.right - r.left,
                            height: r.bottom - r.top
                        }),
                        x = y,
                        A = D,
                        B = C);
                        var b = q.position();
                        b && b.x >= r.left && b.x <= r.right && b.y >= r.top && b.y <= r.bottom && v()
                    }, 100);
                    return {
                        unbind: function() {
                            m()
                        }
                    }
                }
            }
        });
        e.when("$", "$F", "Observer", "util.MouseTracker").build("util.MouseIntent", function(a, b, d, c) {
            function f(a, b, c, d) {
                var f = (c.x - b.x) * (d.y - b.y) - (d.x - b.x) * (c.y - b.y)
                  , g = ((d.x - a.x) * (b.y - a.y) - (b.x - a.x) * (d.y - a.y)) / f;
                b = ((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / f;
                return 0 < ((c.x - a.x) * (d.y - a.y) - (d.x - a.x) * (c.y - a.y)) / f && 0 < g && 0 < b
            }
            function g(f, g) {
                f = a(f);
                g = a.extend({
                    slop: 25,
                    minorDelay: 200,
                    majorDelay: 100
                }, g);
                this._onStrayEvent = new d({
                    once: !0,
                    async: !0
                });
                this._onArriveEvent = new d({
                    once: !0,
                    async: !0
                });
                this._tracker = c.start();
                this.onArrive(b.bind(this._tracker).on(this._tracker.stop));
                this.onStray(b.bind(this._tracker).on(this._tracker.stop));
                this._minorDelay = g.minorDelay;
                this._majorDelay = g.majorDelay;
                var l = g.slop
                  , h = f.offset();
                g = {
                    x: h.left,
                    y: h.top - l
                };
                f = {
                    x: h.left + f.outerWidth(),
                    y: h.top + f.outerHeight() + l
                };
                this._upperLeft = g;
                this._lowerRight = f;
                this._minor = 0;
                this._tick()
            }
            g.prototype.onArrive = function(a) {
                this._onArriveEvent.observe(a);
                return this
            }
            ;
            g.prototype.onStray = function(a) {
                this._onStrayEvent.observe(a);
                return this
            }
            ;
            g.prototype._scheduleTick = function(a) {
                this._timer = b.delay(a).bind(this).run(this._tick)
            }
            ;
            g.prototype.cancel = function() {
                this._timer && k.clearTimeout(this._timer)
            }
            ;
            g.prototype._tick = function() {
                if (!this._onStrayEvent.isNotified() && !this._onArriveEvent.isNotified()) {
                    var a = this._tracker.history(10);
                    if (2 > a.length)
                        this._scheduleTick(this._minorDelay);
                    else {
                        for (var b = a.shift(), c = null; a.length && (c = a.shift(),
                        2 > Math.abs(c.x - b.x) && 2 > Math.abs(c.y - b.y)); )
                            ;
                        if (c) {
                            a = this._upperLeft;
                            var d = this._lowerRight;
                            b.x >= a.x && b.x <= d.x && b.y >= a.y && b.y <= d.y ? this._onArriveEvent.notify() : f(b, c, this._upperLeft, this._lowerRight) || f(b, c, {
                                x: this._lowerRight.x,
                                y: this._upperLeft.y
                            }, {
                                x: this._upperLeft.x,
                                y: this._lowerRight.y
                            }) ? 2 > Math.abs(b.x - c.x) && 2 > Math.abs(b.y - c.y) ? 2 <= this._minor ? this._onStrayEvent.notify() : (this._minor++,
                            this._scheduleTick(this._minorDelay)) : (this._minor = 0,
                            this._scheduleTick(this._majorDelay)) : this._onStrayEvent.notify()
                        } else
                            this._scheduleTick(this._minorDelay)
                    }
                }
            }
            ;
            return g
        });
        e.when("$", "agent", "Observer", "util.bean", "util.class").build("util.ClickOut", function(a, b, d, c, f) {
            b = f({
                construct: function() {
                    var b = this;
                    this._isEnabled = !1;
                    this._clickHandler = function(c) {
                        var d = b.ignore()
                          , f = d.length;
                        c = c.target;
                        0 === a(c).parents().add(c).filter(function() {
                            for (var a = 0; a < f; a++)
                                if (this === d[a])
                                    return !0;
                            return !1
                        }).length && b.action()
                    }
                }
            });
            b.prototype.attachTo = c({
                value: function() {
                    return a(document.body)
                }
            });
            b.prototype.ignore = c({
                value: function() {
                    return []
                },
                set: function(b, c) {
                    c.push(b instanceof a ? b.get(0) : b);
                    return c
                }
            });
            b.prototype.action = c({
                value: function() {
                    return new d
                },
                set: function(a, b) {
                    b.observe(a);
                    return b
                },
                get: function(a) {
                    a.notify()
                }
            });
            b.prototype.enable = function() {
                if (!this._isEnabled)
                    return this.attachTo().bind("click touchstart", this._clickHandler),
                    this._isEnabled = !0,
                    this
            }
            ;
            b.prototype.disable = function() {
                if (this._isEnabled)
                    return this.attachTo().unbind("click touchstart", this._clickHandler),
                    this._isEnabled = !1,
                    this
            }
            ;
            return b
        });
        e.when("$", "Observer").build("util.mouseOut", function(a, b) {
            return function(a) {
                a = a || 10;
                var c = new b
                  , d = c.boundObserve()
                  , g = new b
                  , l = []
                  , m = !1
                  , p = null
                  , h = !1
                  , e = function() {
                    p && (clearTimeout(p),
                    p = null)
                }
                  , n = function() {
                    e();
                    p = setTimeout(function() {
                        c.notify();
                        e();
                        h = !1
                    }, a)
                }
                  , k = function() {
                    h || g.notify();
                    h = !0;
                    e()
                };
                return {
                    add: function(a) {
                        m && a.hover(e, n);
                        l.push(a)
                    },
                    enable: function() {
                        if (!m) {
                            for (var a = 0; a < l.length; a++)
                                l[a].hover(k, n);
                            m = !0
                        }
                    },
                    changeTimeout: function(b) {
                        a = b
                    },
                    disable: function() {
                        if (m) {
                            e();
                            for (var a = 0; a < l.length; a++)
                                l[a].unbind("mouseenter mouseleave");
                            h = m = !1
                        }
                    },
                    onEnter: g.boundObserve(),
                    onLeave: d,
                    action: d
                }
            }
        });
        e.when("$", "Observer", "util.MouseTracker").build("util.velocityTracker", function(a, b, d) {
            return function() {
                var a = {}
                  , f = null
                  , g = !1
                  , l = null
                  , m = new b({
                    context: a
                });
                a.enable = function() {
                    g || (f = d.start(),
                    l = k.setInterval(function() {
                        m.notify(f.velocity())
                    }, 25),
                    g = !0)
                }
                ;
                a.disable = function() {
                    g && (k.clearInterval(l),
                    l = null,
                    f.stop(),
                    f = null,
                    g = !1)
                }
                ;
                a.addThreshold = function(b, c) {
                    b && c && m.observe(function(d) {
                        (!b.above || d > b.above) && (!b.below || d < b.below) && c.call(a, d)
                    })
                }
                ;
                return a
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$").build("util.node", function(a) {
            function b(a) {
                return "object" === typeof k.Node ? a instanceof k.Node : a && "object" === typeof a && "number" === typeof a.nodeType && "string" === typeof a.nodeName
            }
            function d(c) {
                if (b(c))
                    return c;
                if (c instanceof a)
                    return c[0];
                if ("function" === typeof c)
                    return d(c());
                if ("string" === typeof c) {
                    var f = document.createElement("div");
                    f.innerHTML = c;
                    return f.firstChild
                }
                return c && "string" === typeof c.jquery ? c[0] : null
            }
            return {
                is: b,
                create: d
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("util.getQueryString").build("util.parseQueryString", function(a) {
            return function(b) {
                b = b || {};
                var d = a();
                if (d) {
                    d = d.substring(1).split("\x26");
                    for (var c = 0; c < d.length; c++) {
                        var f = d[c].split("\x3d");
                        1 < f.length && (b[f[0]] = f[1])
                    }
                }
                return b
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.build("util.preload", function() {
            return function(a, b) {
                var d = new Image;
                b && (d.onload = function() {
                    b(d)
                }
                );
                d.src = a;
                return d
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.declare("util.randomString", function(a) {
            a = a || {};
            var b = ""
              , d = a.charset || "1234567890abcdefghijklmnopqurstuvwxyz";
            a = a.length || 10;
            for (var c = 0; c < a; c++)
                b += d.substr(Math.floor(Math.random() * d.length), 1);
            return b
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "Observer", "debugStream").build("util.templates", function(a, b, d) {
            var c = {}
              , f = []
              , g = function(b) {
                var c = new Function("obj","var p\x3d[],print\x3dfunction(){p.push.apply(p,arguments);};with(obj){p.push('" + b.replace(/[\r\t\n]/g, " ").replace(/'(?=[^#]*#>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<#=(.+?)#>/g, "',$1,'").split("\x3c#").join("');").split("#\x3e").join("p.push('") + "');}return p.join('');");
                return function(b) {
                    try {
                        return b.jQuery = a,
                        c(b)
                    } catch (h) {
                        return ""
                    }
                }
            };
            return {
                add: function(a, b) {
                    if (a && b && !c[a]) {
                        c[a] = g(b);
                        d("Template Added", {
                            name: a,
                            template: c[a]
                        });
                        for (b = 0; b < f.length; b++)
                            f[b].templateName === a && f[b].render();
                        "cart" === a && e.declare("cartTemplateAvailable");
                        return c[a]
                    }
                },
                use: function(a, b) {
                    if (c[a])
                        return c[a](b)
                },
                get: function(a) {
                    return c[a]
                },
                getAll: function() {
                    return c
                },
                build: g,
                renderer: function(a) {
                    a = a || {};
                    var g = {
                        data: a.data || {},
                        templateName: a.templateName || null,
                        disabled: !1
                    }
                      , l = new b({
                        context: g
                    });
                    g.onRender = l.boundObserve();
                    g.render = function() {
                        if (c[g.templateName] && g.data && !g.disabled) {
                            var a = c[g.templateName](g.data);
                            a && (d("Renderer Rendered", {
                                html: a,
                                renderer: g
                            }),
                            l.notify(a))
                        }
                    }
                    ;
                    if (a.onRender)
                        g.onRender(a.onRender);
                    d("Renderer Created", g);
                    g.render();
                    f.push(g);
                    return g
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F").build("util.tabbing", function(a, b) {
            var d = {
                isEnabled: b.noOp,
                enable: b.noOp,
                disable: b.noOp,
                focus: b.noOp,
                destroy: b.noOp,
                bind: b.noOp,
                unbind: b.noOp,
                tailAction: b.noOp
            }
              , c = [];
            return function(b) {
                if (!b || 1 > b.length)
                    return d;
                b.attr("tabindex", 1);
                var f = ".navTabbing" + c.length
                  , l = -1
                  , m = "natural"
                  , p = !1
                  , h = function(c) {
                    var d = l;
                    l = -1;
                    -1 < d && (c || b.eq(d).blur());
                    a(document).unbind(f)
                }
                  , e = function(a) {
                    var c = a.keyCode || a.which;
                    if (-1 !== l && 9 === c) {
                        c = l;
                        h();
                        if (a.shiftKey && 0 === c)
                            if ("loop" === m)
                                b.eq(b.length - 1).focus();
                            else {
                                if ("natural" === m)
                                    return
                            }
                        else if (a.shiftKey)
                            b.eq(c - 1).focus();
                        else if (c === b.length - 1)
                            if ("loop" === m)
                                b.eq(0).focus();
                            else {
                                if ("natural" === m) {
                                    b.attr("tabindex", -1);
                                    setTimeout(function() {
                                        b.attr("tabindex", 1)
                                    }, 1);
                                    return
                                }
                            }
                        else
                            b.eq(c + 1).focus();
                        a.preventDefault();
                        return !1
                    }
                }
                  , n = {
                    isEnabled: function() {
                        return p
                    },
                    bind: function(b) {
                        for (var d = 0; d < c.length; d++)
                            c[d].unbind();
                        l = b;
                        a(document).bind("keydown" + f, e)
                    },
                    unbind: h,
                    focus: function() {
                        if (p) {
                            for (var a = !1, c = 0; c < b.length; c++)
                                if (b.get(c) === document.activeElement) {
                                    a = !0;
                                    break
                                }
                            a || b.eq(0).focus()
                        }
                    },
                    enable: function() {
                        if (!p)
                            return a.each(b, function(b) {
                                a(this).bind("focus" + f + " focusin" + f, function() {
                                    b !== l && n.bind(b)
                                }).bind("blur" + f + " focusout" + f, function() {
                                    n.unbind(!0)
                                })
                            }),
                            p = !0,
                            n
                    },
                    disable: function() {
                        if (p)
                            return a.each(b, function() {
                                a(this).unbind(f)
                            }),
                            n.unbind(),
                            p = !1,
                            n
                    },
                    destroy: function() {
                        n.disable();
                        b = null;
                        n = d
                    },
                    tailAction: function(a) {
                        m = "block" === a ? "block" : "loop" === a ? "loop" : "natural";
                        return n
                    }
                };
                c.push(n);
                return n
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.build("util.cleanUrl", function() {
            return function(a, b) {
                b.https && (a = a.replace(/^http:\/\//i, "https://"));
                b.ref && (a.match(/ref=/g) ? a = a.replace(/(ref=)[^&\?]+/g, "ref\x3d" + b.ref) : a.match(/ref_=/g) ? a = a.replace(/(ref_=)[^&\?]+/g, "ref_\x3d" + b.ref) : (a += a.match(/\?/g) ? "\x26" : "?",
                a += "ref_\x3d" + b.ref));
                b.encode && (a = encodeURIComponent(a));
                return a
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$").run("util.session.builder", function() {
            try {
                if (!k.sessionStorage)
                    return;
                k.sessionStorage.setItem("testKey", 1);
                k.sessionStorage.removeItem("testKey")
            } catch (a) {
                return
            }
            e.declare("util.session", {
                get: function(a) {
                    return k.JSON.parse(k.sessionStorage.getItem(a))
                },
                set: function(a, b) {
                    k.sessionStorage.setItem(a, k.JSON.stringify(b))
                },
                getString: function(a) {
                    return k.sessionStorage.getItem(a)
                },
                setString: function(a, b) {
                    k.sessionStorage.setItem(a, b)
                }
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        k.navbar = {};
        e.build("api.publish", function() {
            k.navbar.use = function(a, b) {
                e.when("api." + a).run(b)
            }
            ;
            return function(a, b) {
                k.navbar[a] = b;
                e.publish("nav." + a, b);
                e.declare("api." + a, b)
            }
        });
        e.when("$", "$F", "config", "agent", "data", "async", "api.publish", "util.node", "util.Proximity", "util.Aligner", "util.ajax", "phoneHome", "flyouts", "flyouts.anchor", "subnav.builder", "searchBar", "provider.dynamicMenu", "util.ClickOut", "SignInRedirect", "fixedBar", "pinnedNav", "constants", "flyouts.cover", "nav.inline").run("PublishAPIs", function(a, b, d, c, f, g, l, m, p, h, q, n, u, w, r, t, v, x, A, y, D, B, C) {
            var z = a("#navbar"), E = a(k), F = {
                getFlyout: u.get,
                lockFlyouts: function(a) {
                    a && u.hideAll();
                    u.lockAll()
                },
                unlockFlyouts: u.unlockAll,
                toggleFlyout: function(a, b, c) {
                    if (a = u.get(a))
                        a.unlock(),
                        !0 === b ? a.show() : !1 === b ? a.hide() : a.isVisible() ? a.hide() : a.show(),
                        c && a.lock()
                },
                setCartCount: function(a, b) {
                    f({
                        cartCount: a
                    });
                    d.ewc && (e.when("ewc.flyout").run(function(b) {
                        b && (d.ewc.cartCount = parseInt(a, 10),
                        b.ableToPersist() && b.persist({
                            noAnimation: !0
                        }))
                    }),
                    d.ewc.isCompactEWCRendered && !b && I.when("EWC").execute(function(a) {
                        a.refresh()
                    }))
                },
                overrideCartButtonClick: function(b) {
                    d.ewc || (a("#nav-cart").click(b),
                    a("#nav-cart-menu-button").click(b))
                },
                getLightningDealsData: function() {
                    return d.lightningDeals || {}
                },
                unHideSWM: function() {
                    var b = a("#navHiddenSwm")
                      , c = d.swmStyleData;
                    if (b.length && c) {
                        var f = a("#nav-swmslot");
                        f.parent().attr("style", c.style || "");
                        f.children().css("display", "none");
                        b.css("display", "");
                        n.exposure(b.attr("data-selection-id"))
                    }
                },
                navDimensions: function() {
                    var b = z.offset();
                    b.height = z.height();
                    b.bottom = b.top + b.height;
                    b.fixedBottom = z.hasClass("nav-fixed") ? Math.max(E.scrollTop() + a("#nav-belt").height(), b.bottom) : b.bottom;
                    return b
                },
                fixedBar: function(a) {
                    y && (!1 === a ? y.disable() : y.enable())
                },
                pinnedNav: function(a) {
                    D && (!1 === a ? D.disable() : D.enable())
                },
                sidePanel: function(c) {
                    if (!d.primeDay) {
                        c = a.extend({
                            flyoutName: null,
                            data: null,
                            dataAjaxUrl: null
                        }, c);
                        var g = c.flyoutName;
                        "yourAccount" === g && d.accountList && (g = "accountList");
                        var h = u.get(g)
                          , l = function(a) {
                            if (a) {
                                var b = {};
                                b[h.sidePanel.dataKey] = a;
                                f(b)
                            }
                        };
                        if (h && h.sidePanel && h.sidePanel.dataKey) {
                            if (c.data)
                                return l(c.data),
                                !0;
                            if (c.dataAjaxUrl && h.link)
                                return g = b.once().on(function() {
                                    q({
                                        url: c.dataAjaxUrl,
                                        dataType: "json",
                                        success: function(a) {
                                            l(a)
                                        }
                                    })
                                }),
                                h.isVisible() ? g() : (p.onEnter(h.link, [20, 100, 60, 100], g),
                                h.onShow(g),
                                h.link.focus(g)),
                                !0
                        }
                        return !1
                    }
                },
                createTooltip: function(b) {
                    b = a.extend({
                        arrow: "top",
                        timeout: 1E4,
                        cover: !1,
                        addCloseX: !1,
                        disableCoverPinned: !0,
                        clickCallback: null,
                        closeOnMouseOut: !1
                    }, b);
                    var c = F.createFlyout(b);
                    if (c) {
                        var d = a.extend(c, {
                            addCloseX: function() {
                                d.elem().append('\x3cdiv class\x3d"nav-tooltip-close nav-timeline-icon"\x3e\x3c/div\x3e')
                            },
                            fadeIn: function(a, b) {
                                d.isVisible() || (d.show(),
                                d.elem().css("opacity", 0).fadeTo(a || 400, 1, b))
                            },
                            fadeOut: function(a, b) {
                                if (d.isVisible()) {
                                    d.hide();
                                    var c = d.elem();
                                    c.show();
                                    c.css("opacity", 1).fadeTo(a || 400, 0, function() {
                                        b && b();
                                        c.hide().css("opacity", 1)
                                    })
                                }
                            }
                        });
                        b.addCloseX && d.addCloseX();
                        b.cover && C(d, b.disableCoverPinned);
                        b.clickCallback && d.elem().click(function(c) {
                            a(c.target).hasClass("nav-tooltip-close") ? d.hide() : b.clickCallback()
                        });
                        var f = null
                          , g = b.timeout
                          , h = x.newInstance()
                          , l = function() {
                            clearTimeout(f);
                            d.fadeOut(400, function() {
                                h.disable()
                            })
                        };
                        d.elem().hover(function() {
                            d.show();
                            d.elem().stop().css("opacity", 1);
                            clearTimeout(f)
                        }, function() {
                            "none" !== g ? f = setTimeout(l, g) : b.closeOnMouseOut && l()
                        });
                        h.ignore(d.elem()).action(l).enable();
                        d.onShow(function() {
                            if ("none" !== g)
                                f = setTimeout(l, g);
                            else {
                                var b = a(document);
                                b.scroll(function() {
                                    b.scrollTop() > B.REMOVE_COVER_SCROLL_HEIGHT && l()
                                })
                            }
                        });
                        e.when("navDismissTooltip").run(function() {
                            d.hide();
                            d.lock()
                        });
                        return d
                    }
                },
                createFlyout: function(c) {
                    c = a.extend(!0, {
                        name: null,
                        content: "\x3cdiv\x3e\x3c/div\x3e",
                        arrow: null,
                        className: "",
                        align: {
                            from: "bottom center",
                            to: "top center",
                            base: "#navbar",
                            alignTo: null,
                            offsetTo: "#navbar"
                        },
                        onAlign: b.noOp
                    }, c);
                    if (c.name && c.content) {
                        var d = u.create({
                            name: c.name,
                            buildNode: function() {
                                var b = a("\x3cdiv class\x3d'" + c.className + "'\x3e\x3c/div\x3e");
                                "top" === c.arrow && b.append("\x3cdiv class\x3d'nav-arrow'\x3e\x3cdiv class\x3d'nav-arrow-inner'\x3e\x3c/div\x3e\x3c/div\x3e");
                                b.append(m.create(c.content));
                                return b
                            }
                        })
                          , f = null;
                        d.onAlign(function() {
                            if (!f) {
                                c.align.target = d.elem();
                                c.align.base = a(c.align.base);
                                c.align.alignTo = a(c.align.alignTo || w());
                                c.align.offsetTo = a(c.align.offsetTo);
                                var b = new h(c.align);
                                f = function() {
                                    b.align();
                                    c.onAlign.apply(d, arguments)
                                }
                            }
                            f()
                        });
                        e.declare("flyoutAPI." + c.name.replace(" ", ""), d);
                        return d
                    }
                },
                update: function(b) {
                    if (d.signInOverride) {
                        var c = a('#navbar [data-nav-role\x3d"signin"]');
                        a.each(c, function(b, c) {
                            A.setRedirectUrl(a(c), null, null)
                        })
                    }
                    return b instanceof Object ? (b.cart && b.cart.data && "count" === b.cart.type && F.setCartCount(b.cart.data.count),
                    b.catsubnav && r(b.catsubnav),
                    b.searchbar && "searchbar" === b.searchbar.type && f({
                        searchbar: b.searchbar.data
                    }),
                    b.swmSlot && (b = b.swmSlot.swmContent,
                    c = a("#nav-swmslot"),
                    b.data && "html" === b.type && 1 === c.length && c.html(b.data)),
                    !0) : !1
                },
                updateSearchDropdown: function(a) {
                    return t.updateSearchDropdownCard(a)
                },
                showSubnav: function() {
                    var b = a("#nav-subnav");
                    b && (b.style.display = "block")
                },
                hideSubnav: function() {
                    var b = a("#nav-subnav");
                    b && (b.style.display = "none")
                },
                hasSubnav: function() {
                    return !!a("#nav-subnav")
                },
                getSearchBackState: function() {
                    return d.searchBackState || {}
                },
                removePrimeExperience: function() {
                    f({
                        isPrime: !1
                    })
                }
            }, H;
            for (H in F)
                F.hasOwnProperty(H) && l(H, F[H]);
            e.publish("navbarJSLoaded")
        });
        e.when("$", "data").run("setupRefreshPrime", function(a, b) {
            b.observe("isPrime", function(b) {
                b || (a("#nav-logo").removeClass("nav-prime-1"),
                a(".nav-logo-tagline").text("Try Prime"),
                a(".nav-logo-tagline").attr("href", "/gp/prime/ref\x3dnav_logo_prime_join"),
                a("#nav-link-amazonprime .nav-line-1").text("Try"))
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "subnav.initFlyouts", "nav.inline").run("subnav.init", function(a, b) {
            var d = a("#nav-subnav");
            0 < d.length && b();
            var c = location.href.toLowerCase().split("?");
            a("a[data-nav-link-highlight]", d).each(function() {
                var b = this.href.toLowerCase().split("?")
                  , d = 0;
                2 === c.length && 2 === b.length ? -1 < c[0].indexOf(b[0]) && c[1] === b[1] && (d = 1) : 1 === c.length && 1 === b.length && -1 < c[0].indexOf(b[0]) && (d = 1);
                d && (b = a(this),
                b.attr("data-nav-link-bold") && b.css({
                    "font-weight": "bold"
                }),
                b.attr("data-nav-link-color") && b.css({
                    color: b.attr("data-nav-link-color")
                }),
                b.attr("data-nav-link-bottom-style") && b.css({
                    "border-bottom": b.attr("data-nav-link-bottom-style")
                }))
            })
        });
        e.when("$", "subnav.initFlyouts", "constants", "nav.inline").build("subnav.builder", function(a, b, d) {
            a("#navbar");
            return function(c) {
                var f = a("#nav-subnav");
                0 === f.length && (f = a("\x3cdiv id\x3d'nav-subnav'\x3e\x3c/div\x3e").appendTo("#navbar"));
                var g = location.href.toLowerCase().split("?");
                f.html("");
                f.hide();
                if (c.categoryKey && c.digest) {
                    f.attr("data-category", c.categoryKey).attr("data-digest", c.digest).attr("class", c.category.data.categoryStyle);
                    c.style ? f.attr("style", c.style) : f.attr("style") && f.removeAttr("style");
                    var l = function(b) {
                        if (b && b.href) {
                            var c = "nav-a"
                              , l = b.text
                              , n = b.dataKey;
                            if (!l && !b.image)
                                if (n && 0 === n.indexOf(d.ADVANCED_PREFIX))
                                    l = "",
                                    c += " nav-aText";
                                else
                                    return;
                            l = b.image ? "\x3cimg src\x3d'" + b.image + "'class\x3d'nav-categ-image' \x3e\x3c/a\x3e" : l;
                            c = a("\x3ca href\x3d'" + b.href + "' class\x3d'" + c + "'\x3e\x3c/a\x3e");
                            l = a("\x3cspan class\x3d'nav-a-content'\x3e" + l + "\x3c/span\x3e");
                            "image" === b.type && (l.html(""),
                            c.addClass("nav-hasImage"),
                            b.rightText = "");
                            b.bold && !b.image && c.addClass("nav-b");
                            b.floatRight && c.addClass("nav-right");
                            b.flyoutFullWidth && "0" !== b.flyoutFullWidth && c.attr("data-nav-flyout-full-width", "1");
                            if (b.src) {
                                var m = ["nav-image"];
                                b["absolute-right"] && m.push("nav-image-abs-right");
                                b["absolute-right"] && m.push("nav-image-abs-right");
                                a("\x3cimg src\x3d'" + b.src + "' class\x3d'" + m.join(" ") + "' alt\x3d'" + (b.alt || "") + "' /\x3e").appendTo(l)
                            }
                            b.rightText && l.append(b.rightText);
                            l.appendTo(c);
                            n && (a("\x3cspan class\x3d'nav-arrow'\x3e\x3c/span\x3e").appendTo(c),
                            c.attr("data-nav-key", n).addClass("nav-hasArrow"));
                            b.highlightLink && (c.attr("data-nav-link-highlight", b.highlightLink),
                            n = b.href.toLowerCase().split("?"),
                            l = 0,
                            2 === g.length && 2 === n.length ? -1 < g[0].indexOf(n[0]) && g[1] === n[1] && (l = 1) : 1 === g.length && 1 === n.length && -1 < g[0].indexOf(n[0]) && (l = 1),
                            l && (b.highlightLinkBold && c.css({
                                "font-weight": "bold"
                            }),
                            b.highlightLinkColor && c.css({
                                color: b.highlightLinkColor
                            }),
                            b.highlightLinkBottomStyle && c.css({
                                "border-bottom": b.highlightLinkBottomStyle
                            })));
                            c.appendTo(f);
                            f.append(document.createTextNode(" "))
                        }
                    };
                    c.category && c.category.data && (c.category.data.bold = !0,
                    l(c.category.data));
                    if (c.subnav && "linkSequence" === c.subnav.type)
                        for (var m = 0; m < c.subnav.data.length; m++)
                            l(c.subnav.data[m]);
                    f.show();
                    b()
                }
            }
        });
        e.when("$", "$F", "panels", "debugStream", "util.Proximity", "provider.subnavFlyouts", "util.mouseOut", "flyouts.create", "cover", "flyouts.accessibility", "provider.advancedSubnavFlyouts", "advKeyDecoder", "constants", "util.Aligner", "flyouts.anchor", "flyouts", "config").build("subnav.initFlyouts", function(a, b, d, c, f, g, l, m, p, h, k, n, u, w, r, t, v) {
            var q = null
              , A = l()
              , y = !1
              , D = null
              , B = u.ADVANCED_PREFIX
              , C = a("#navbar")
              , z = function() {
                g.fetch();
                k.fetchLazy()
            }
              , E = {}
              , F = function(c) {
                var d = c.attr("data-nav-key")
                  , f = c.attr("data-event")
                  , g = c.attr("data-nav-flyout-full-width")
                  , l = c.attr("data-nav-asinsubnav-flyout");
                if (d) {
                    l = g && l ? "nav-fullWidthSubnavFlyout nav-asinsubnav-flyout" : g ? "nav-fullWidthSubnavFlyout" : "nav-subnavFlyout";
                    t.destroy(d);
                    var k = n(d)
                      , q = m({
                        key: d,
                        panelDataKey: k ? B + k.jsonkey + "Content" : d,
                        link: c,
                        event: {
                            t: "subnav",
                            id: f
                        },
                        fullWidth: !!g,
                        className: l,
                        arrow: "top",
                        suspendTabbing: !0,
                        aligner: g ? G : function(b) {
                            var c = b.$link.find(".nav-arrow, .nav-icon")
                              , d = v.rightMarginAlignEnabled && b.$flyout.find(".right-margin-subnav-flyout").length ? "top rightArrow" : "top center"
                              , f = new w({
                                base: c,
                                target: b.$flyout,
                                from: "bottom center",
                                to: d,
                                anchor: "top",
                                alignTo: r(),
                                constrainTo: C,
                                constrainBuffer: [3, 0, 0, 3],
                                constrainChecks: [!0, !1, !1, !0],
                                offsetTo: C
                            })
                              , g = new w({
                                base: c,
                                target: a(".nav-arrow", b.$flyout),
                                offsetTo: C,
                                alignTo: b.$flyout,
                                anchor: "top center",
                                from: "center",
                                to: "center"
                            });
                            return function() {
                                f.align();
                                g.align();
                                b.$flyout.addClass("nav-subnavFlyout-nudged")
                            }
                        }
                    });
                    if (k) {
                        d = k.jsonkey;
                        c.setSubnavText = function(a) {
                            var b = c.find(".nav-arrow");
                            c.html(a).removeClass("nav-hasAtext").append(b)
                        }
                        ;
                        var u = B + d;
                        E[u] = {
                            flyout: q,
                            link: c
                        };
                        e.declare(B + d + ".flyout", function() {
                            return E[u].flyout
                        });
                        e.declare(B + d + ".toplink", function() {
                            return E[u].link
                        })
                    }
                    var H = h({
                        link: c,
                        onEscape: function() {
                            q.hide();
                            c.focus()
                        }
                    });
                    q.groups.add("subnavFlyoutGroup");
                    A.add(c);
                    A.add(q.elem());
                    q.getPanel().onData(function(a) {
                        a.flyoutWidth && q.elem().css({
                            width: a.flyoutWidth
                        })
                    });
                    q.getPanel().onRender(b.once().on(function() {
                        H.elems(a(".nav-hasPanel, a", q.elem()))
                    }));
                    q.onHide(function() {
                        H.disable()
                    });
                    q.hide.check(function() {
                        if (y && D === this)
                            return !1
                    });
                    q.onShow(function() {
                        var a = D;
                        D = this;
                        a && a !== this && a.hide();
                        p.hide()
                    });
                    q.onShow(z)
                }
            };
            return function() {
                k.refresh();
                k.fetchOnload();
                var b = a("#nav-subnav");
                q && q.unbind();
                q = f.onEnter(b, [20, 40, 40, 40], z);
                a("a[data-nav-key]", b).each(function() {
                    F(a(this))
                });
                A.onEnter(function() {
                    y = !0
                });
                A.onLeave(function() {
                    y = !1;
                    D && D.hide();
                    D = null
                });
                A.enable()
            }
        });
        e.when("$", "dataPanel", "advKeyDecoder", "constants", "metrics", "subnav.initShelf").run("subnav.shelf.create", function(a, b, d, c, f, g) {
            var l = a("#nav-subnav-content-shelf");
            if (0 !== l.length) {
                l = l.data("nav-key");
                d = d(l);
                var m = new Date;
                b = b({
                    dataKey: d ? c.ADVANCED_PREFIX + d.jsonkey + "Content" : l,
                    className: "subnav-shelf-content",
                    spinner: !0,
                    visible: !0,
                    timeoutDataKey: null,
                    timeoutDelay: 5E3
                });
                b.onRender(function() {
                    f.count("subnav_shelf_render_latency", new Date - m)
                });
                a("#nav-subnav-content-shelf").html(b.elem());
                g()
            }
        });
        e.when("$", "provider.subnavContentShelf", "provider.advancedSubnavShelf").build("subnav.initShelf", function(a, b, d) {
            if (0 !== a("#nav-subnav-content-shelf").length)
                return function() {
                    b.fetch();
                    d.refresh();
                    d.fetchAll()
                }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("constants").build("advKeyDecoder", function(a) {
            return function(b) {
                if (!b || 0 !== b.indexOf(a.ADVANCED_PREFIX))
                    return !1;
                b = b.split(":");
                var d = b.length;
                return 4 > d ? !1 : {
                    jsonkey: b[d - 2],
                    endpoint: b.slice(1, -2).join(":"),
                    onload: "1" === b[d - 1]
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("Observer").build("searchBar.observers", function(a) {
            return {
                scopeChanged: new a
            }
        });
        e.when("$", "$F", "agent", "config", "onOptionClick", "async", "searchMetrics", "searchBar.observers", "nav.inline").run("searchBar", function(a, b, d, c, f, g, l, m) {
            function e() {
                f(t, function() {
                    z.clearBlur();
                    C.update();
                    C.select();
                    x.focus()
                });
                t.change(C.update).keyup(z.keyListener).blur(z.blur);
                t.focus(function() {
                    h.length || z.clearBlur();
                    u.addClass("nav-focus")
                }).blur(function() {
                    u.removeClass("nav-focus")
                });
                w.click(function(a) {
                    x.focus();
                    return !1
                })
            }
            c = b.noOp;
            if (d.ie6)
                return {
                    active: c,
                    inactive: c,
                    clearBlur: c,
                    focus: c,
                    blur: c,
                    keyListener: c,
                    form: a(),
                    input: {
                        hasValue: c,
                        val: c,
                        el: a()
                    },
                    scope: {
                        prevIndex: null,
                        init: c,
                        hasTextChanged: c,
                        text: c,
                        value: c,
                        digest: c,
                        selectedIndex: c,
                        set: c,
                        getOptions: function() {
                            return a()
                        },
                        appendOption: c
                    },
                    facade: {
                        init: c,
                        resize: c,
                        text: c,
                        update: c,
                        select: c
                    }
                };
            c = a(k);
            var h = a("#navbar.layout2")
              , q = a("#nav-search")
              , n = a(".nav-searchbar", q)
              , u = a(".nav-search-scope", q)
              , w = a(".nav-search-facade", q)
              , r = a(".nav-search-label", w)
              , t = a(".nav-search-dropdown", q)
              , v = a(".nav-search-submit", q);
            q = a(".nav-search-submit .nav-input", q);
            var x = a("#twotabsearchtextbox")
              , A = a(".srch_sggst_flyout")
              , y = new l({
                scopeSelect: t,
                inputTextfield: x,
                submitButton: q,
                issContainer: A
            });
            y.init();
            var D = null;
            l = {
                hasValue: function() {
                    var a = !!x.val();
                    n[a ? "addClass" : "removeClass"]("nav-hasTerm");
                    return a
                },
                val: function(a) {
                    if (a)
                        x.val(a);
                    else
                        return x.val()
                },
                el: x
            };
            var B = {
                prevIndex: null,
                init: b.once().on(function() {
                    B.prevIndex = t[0].selectedIndex
                }),
                hasTextChanged: function() {
                    return B.prevIndex !== t[0].selectedIndex
                },
                text: function() {
                    B.prevIndex = t[0].selectedIndex;
                    var b = a("option:selected", t);
                    return 0 === b.length ? null : b.html()
                },
                value: function() {
                    var b = a("option:selected", t);
                    return 0 === b.length ? null : b.val()
                },
                digest: function(a) {
                    return a ? (t.attr("data-nav-digest", a),
                    a) : t.attr("data-nav-digest")
                },
                selectedIndex: function(b) {
                    if (0 < b || 0 === b) {
                        t.attr("data-nav-selected", b);
                        a("option", t).eq(b).attr("selected", "selected");
                        var c = a("option", t).eq(b).text()
                          , d = t.attr("title");
                        x.attr("placeholder") && d && c && x.attr("placeholder", d + " " + c.trim());
                        return b
                    }
                    return t.attr("data-nav-selected")
                },
                set: function(b, c, d) {
                    B.prevIndex = null;
                    if (c && c === B.digest())
                        d !== B.selectedIndex() && B.selectedIndex(d || 0);
                    else {
                        t.blur().empty();
                        for (var f = 0; f < b.length; f++) {
                            var g = b[f]
                              , h = g._display || "";
                            delete g._display;
                            a("\x3coption /\x3e").html(h).attr(g).appendTo(t)
                        }
                        B.digest(c || " ");
                        B.selectedIndex(d || 0)
                    }
                },
                getOptions: function() {
                    return a("option", t)
                },
                appendOption: function(a) {
                    a.appendTo(t);
                    C.update()
                }
            };
            var C = {
                formAction: "/s/ref\x3d",
                searchAlias: "search-alias",
                init: b.once().on(function() {
                    w.attr("data-value") !== B.value() && C.update();
                    B.init()
                }),
                resize: function() {
                    if (u.is(":visible")) {
                        var a = u.outerHeight()
                          , b = t.outerHeight();
                        t.css({
                            top: (a - b) / 2
                        });
                        r.css({
                            width: "auto"
                        });
                        a = h.length ? 150 : 140;
                        x.width() < a && (a = Math.max(0, n.width() - a - v.width() - (u.outerWidth(!0) - r.width())),
                        r.css({
                            width: a.toString() + "px"
                        }));
                        a = u.width();
                        (d.iOS || t.width() < a) && t.width(a)
                    }
                },
                text: function(a) {
                    if (!a)
                        return r.text();
                    r.html(a);
                    m.scopeChanged.notify(a);
                    C.resize()
                },
                update: function() {
                    B.hasTextChanged() && C.text(B.text())
                },
                select: function() {
                    if (z && z.form && z.form.attr("dd-ref")) {
                        var a = z.form.attr("action");
                        if (a && a.startsWith(C.formAction)) {
                            var b = B.value();
                            if (b && b.startsWith(C.searchAlias) && (b = b.split("\x3d"),
                            2 === b.length && (b = b[1],
                            a = a.split("\x3d"),
                            2 === a.length))) {
                                a = a[1];
                                var c = C.formAction;
                                a.match(/^nb_sb_(no)?ss(?!.*_sa_)/) ? c += a + "_sa_" + b : a.match(/^nb_sb_(no)?ss.*_sa_/) && (c += a.replace(/^(.*_sa_).*$/, "$1" + b));
                                z.form.attr("action", c)
                            }
                        }
                    }
                }
            };
            var z = {
                active: function() {
                    n.addClass("nav-active")
                },
                inactive: function() {
                    n.removeClass("nav-active")
                },
                clearBlur: function() {
                    D && (clearTimeout(D),
                    D = null)
                },
                focus: function() {
                    z.active();
                    z.clearBlur()
                },
                blur: function() {
                    D && (clearTimeout(D),
                    D = null);
                    D = setTimeout(function() {
                        z.inactive();
                        z.clearBlur()
                    }, 300)
                },
                keyListener: function(a) {
                    13 === a.which && x.focus();
                    9 !== a.which && 16 !== a.which && C.update()
                },
                updateSearchDropdownCard: function(b) {
                    b = a("\x3cdiv/\x3e").append(b);
                    var c = a(".nav-search-scope", b)
                      , d = a(".nav-search-facade", b)
                      , f = a(".nav-search-label", b)
                      , g = a(".nav-search-dropdown", b);
                    return 0 < c.length && 0 < d.length && 0 < f.length && 0 < g.length ? (u = c,
                    w = d,
                    r = f,
                    t = g,
                    a("#nav-search-dropdown-card").empty().append(b.children()),
                    y.updateScopeSelect(t),
                    e(),
                    !0) : !1
                },
                form: n,
                input: l,
                scope: B,
                facade: C
            };
            e();
            x.focus(z.focus).blur(z.blur);
            q.blur(z.blur);
            q.focus(function() {
                h.length || z.clearBlur();
                v.addClass("nav-focus")
            }).blur(function() {
                v.removeClass("nav-focus")
            });
            c.resize(b.throttle(300).on(C.resize));
            x[0] === document.activeElement && z.focus();
            g(C.init);
            return z
        });
        e.when("data", "searchBar").run("searchBarUpdater", function(a, b) {
            a.observe("searchbar", function(a) {
                var c = a["nav-metadata"] || {};
                a.options && (b.scope.set(a.options, c.digest, c.selected),
                b.facade.update(),
                b.facade.resize())
            })
        });
        e.when("searchBar", "search-js-autocomplete").run("SddIss", function(a, b) {
            b.keydown(function(b) {
                setTimeout(function() {
                    a.keyListener(b)
                }, 10)
            });
            e.declare("SddIssComplete")
        });
        e.when("$", "agent").build("onOptionClick", function(a, b) {
            return function(d, c) {
                var f = a(d);
                if (b.mac && b.webkit || b.touch && !b.ie10)
                    f.change(function() {
                        c.apply(f)
                    });
                else {
                    var g = {
                        click: 0,
                        change: 0
                    };
                    d = function(a, b) {
                        return function() {
                            g[a] = (new Date).getTime();
                            100 >= g[a] - g[b] && c.apply(f)
                        }
                    }
                    ;
                    f.click(d("click", "change")).change(d("change", "click"))
                }
            }
        });
        e.when("$", "searchBar", "iss.flyout", "searchBar.observers").build("searchApi", function(a, b, d, c) {
            var f = {};
            f.val = b.input.val;
            f.on = function(a, f) {
                if (a && f && "function" === typeof f)
                    switch (a) {
                    case "scopeChanged":
                        c.scopeChanged.observe(f);
                        break;
                    case "issShown":
                        d.onShow(f);
                        break;
                    case "issHidden":
                        d.onHide(f);
                        break;
                    default:
                        b.input.el.bind(a, f)
                    }
            }
            ;
            f.scope = function(a) {
                if (a)
                    b.facade.text(a);
                else
                    return b.facade.text()
            }
            ;
            f.options = function(c, d) {
                c && (c = a(c),
                d && c.attr("selected", "selected"),
                b.scope.appendOption(c));
                return b.scope.getOptions()
            }
            ;
            f.action = function(a) {
                if (a)
                    b.form.attr("action", a);
                else
                    return b.form.attr("action")
            }
            ;
            f.submit = function(a) {
                a && "function" !== typeof a ? b.form.submit(a) : b.form.submit()
            }
            ;
            f.flyout = d;
            return f
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "flyoutAPI.SearchSuggest", "config", "cover", "nav.inline").run("issHackery", function(a, b, d, c) {
            var f = a("#nav-iss-attach")
              , g = a("#nav-search .nav-searchbar");
            b.onAlign(function() {
                a("div:first-child", this.elem()).css({
                    width: f.width()
                })
            });
            b.onShow(function() {
                c.show();
                g.addClass("nav-issOpen")
            });
            b.onHide(function() {
                c.hide();
                g.removeClass("nav-issOpen")
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "panels", "config", "debugStream", "nav.inline").build("cover", function(a, b, d, c, f) {
            var g = a(document)
              , l = a(k)
              , m = a("#navbar")
              , e = function() {}
              , h = d.create({
                name: "cover",
                visible: !1,
                rendered: !0,
                elem: function() {
                    return a("\x3cdiv id\x3d'nav-cover'\x3e\x3c/div\x3e").click(function() {
                        return e.apply(this, arguments)
                    }).appendTo(m)
                }
            });
            h.LAYERS = {
                ALL: 6,
                BELT: 5,
                MAIN: 2,
                SUB: 1,
                NONE: "auto"
            };
            h.setLayer = function(a) {
                a && a in h.LAYERS || (a = "NONE");
                h.elem().css({
                    zIndex: h.LAYERS[a]
                })
            }
            ;
            h.setClick = function(a) {
                a && "function" === typeof a || (a = b.noOp);
                e = a
            }
            ;
            var q = function() {
                var b = Math.max(g.height(), l.height()) - m.offset().top
                  , c = a(".nav-ewc-persistent-hover").hasClass("nav-ewc-full-height-persistent-hover")
                  , d = a(".nav-ewc-persistent-hover").hasClass("nav-ewc-compact-view");
                c || d ? h.elem().css({
                    height: b,
                    width: m.outerWidth() + a("#nav-flyout-ewc").outerWidth()
                }) : h.elem().css({
                    height: b
                })
            };
            h.onShow(function(a) {
                a = a || {};
                f("Cover: Show");
                h.setLayer(a.layer);
                h.setClick(a.click);
                q();
                a = 100;
                if (c.fullWidthCoreFlyout || c.flyoutAnimation)
                    a = 550;
                h.elem().fadeIn(a, function() {
                    var a = h.elem().get(0);
                    a.style.removeAttribute && a.style.removeAttribute("filter")
                });
                l.resize(q)
            });
            h.onHide(function() {
                f("Cover: Hide");
                h.elem().stop().fadeOut(100, function() {
                    h.elem().css("opacity", "0.6")
                });
                l.unbind("resize", q)
            });
            return h
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "data", "config", "flyout.yourAccount", "provider.ajax", "util.Proximity", "logEvent", "sidepanel.yaNotis").iff({
            name: "sidepanel.yaNotis",
            op: "falsey"
        }).run("sidepanel.csYourAccount", function(a, b, d, c, f, g, l, m) {
            if (!c.primeDay) {
                var e = !0, h = !1, k, n, u, w, r = !1, t = !0, v = function() {
                    h || (t = !1,
                    k && (k(n),
                    h = !0))
                }, x = function() {
                    e = !1;
                    t ? r || (u ? (u(w),
                    r = !0) : c.sdaYourAccount && c.sdaYourAccount.url || v()) : v()
                };
                b = function() {
                    return {
                        register: function(a, b) {
                            h || (k = a,
                            n = b);
                            e || t || v()
                        },
                        sdaRegister: function(a, b) {
                            r || (u = a,
                            w = b);
                            e || x()
                        },
                        biaFallback: v,
                        sdaNotRendering: function() {
                            t = !1;
                            v()
                        }
                    }
                }();
                var A = {
                    count: 0,
                    decrement: function() {
                        A.count = Math.max(A.count - 1, 0)
                    }
                }
                  , y = function() {
                    var b = a("#csr-hcb-wrapper")
                      , c = a(".csr-hcb-content", b);
                    b.remove();
                    if (1 !== c.length)
                        return x(),
                        !1;
                    m({
                        t: "hcb"
                    });
                    d({
                        "yourAccount-sidePanel": {
                            html: c[0].outerHTML
                        }
                    });
                    return !0
                };
                if (!c.csYourAccount || !c.csYourAccount.url)
                    return e = y(),
                    b;
                var D = g({
                    url: c.csYourAccount.url,
                    data: {
                        rid: c.requestId
                    },
                    success: function(b) {
                        if (b)
                            if (1 > (((b.template || {}).data || {}).items || []).length)
                                y();
                            else {
                                var g = b.template.name;
                                if (g) {
                                    b = {
                                        "yourAccount-sidePanel": b
                                    };
                                    "notificationsList" === g ? m({
                                        t: "csnoti"
                                    }) : ("discoveryPanelList" === g || "discoveryPanelSummary" === g) && m({
                                        t: "discoverypanel"
                                    });
                                    if ("notificationsList" === g)
                                        f.sidePanel.onRender(function() {
                                            var b = this.elem()
                                              , d = a(".nav-item", b).not(".nav-title");
                                            A.count = d.length;
                                            var g = function() {
                                                var c = b.height();
                                                a(".nav-item", b).each(function() {
                                                    var b = a(this);
                                                    c -= b.outerHeight(!0);
                                                    b[0 <= c ? "show" : "hide"]()
                                                })
                                            }
                                              , h = function(b) {
                                                a.ajax({
                                                    url: c.csYourAccount.url,
                                                    type: "POST",
                                                    data: {
                                                        dismiss: b.attr("data-noti-id"),
                                                        rid: c.requestId
                                                    },
                                                    cache: !1,
                                                    timeout: 500
                                                });
                                                var d = b.parent();
                                                d.slideUp(300, function() {
                                                    d.remove();
                                                    g()
                                                });
                                                A.decrement();
                                                0 === A.count && (f.sidePanel.hide(),
                                                y() || (b = a("#nav-flyout-profile").find(".nav-column"),
                                                b = b.eq(3),
                                                b.removeClass("nav-column-break")))
                                            };
                                            b.bind("click", function(b) {
                                                var c = a(b.target);
                                                if (c.is(".nav-noti-list-x"))
                                                    return h(c),
                                                    b.preventDefault(),
                                                    !1
                                            })
                                        });
                                    d(b)
                                } else
                                    y()
                            }
                        else
                            y()
                    },
                    error: y
                });
                g = function() {
                    D.fetch()
                }
                ;
                f.onShow(g);
                f.link.focus(g);
                l.onEnter(f.link, [20, 40, 40, 40], g);
                return b
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "config", "flyout.yourAccount", "util.Proximity", "sidepanel.csYourAccount", "api.sidePanel", "metrics", "constants", "debug.param").run("sdaSidePanel", function(a, b, d, c, f, g, l, m, e, h) {
            if (!d.primeDay && d.sdaYourAccount && d.sdaYourAccount.url) {
                var p = !1
                  , n = !1
                  , u = !0
                  , w = 2500
                  , r = function() {
                    m.increment("SDA:YourAccount:SidePanel:FallbackCalled");
                    g && !p && u ? (u = !1,
                    g.sdaNotRendering()) : g && !n && (g.biaFallback(),
                    n = !0)
                }
                  , t = d.sdaYourAccount.url
                  , v = function(a) {
                    a.status && "ok" !== a.status ? (m.increment("SDA:YourAccount:SidePanel:NotificationStatusError"),
                    r()) : (a.impressionThreshold && (w = a.impressionThreshold),
                    l({
                        flyoutName: "yourAccount",
                        data: a
                    }) || r())
                };
                b = b.once().on(function() {
                    h("SDAYourAccountNoNotification") ? r() : (m.increment("SDA:YourAccount:SidePanel:RequestNotification"),
                    a.ajax({
                        url: t,
                        type: "GET",
                        dataType: "json",
                        cache: !1,
                        timeout: 5E3,
                        data: {
                            communicationChannelType: e.COMMUNICATION_CHANNEL_TYPE
                        },
                        success: function(a) {
                            a && a.html ? null === a.html || "" === a.html ? (m.increment("SDA:YourAccount:SidePanel:NotificationNotReceived"),
                            r()) : (m.increment("SDA:YourAccount:SidePanel:NotificationReceived"),
                            g && (g.sdaRegister(v, a),
                            p = !0)) : (m.increment("SDA:YourAccount:SidePanel:NotificationNotReceived"),
                            r())
                        },
                        error: function(a, b, c) {
                            404 === a.status ? m.increment("SDA:YourAccount:SidePanel:RequestNotificationError404") : 500 === a.status ? m.increment("SDA:YourAccount:SidePanel:RequestNotificationError500") : "timeout" === b ? m.increment("SDA:YourAccount:SidePanel:RequestNotificationErrorTimeout") : m.increment("SDA:YourAccount:SidePanel:RequestNotificationErrorUnknown");
                            m.increment("SDA:YourAccount:SidePanel:NotificationReceivedError");
                            r()
                        }
                    }))
                });
                c.isVisible() ? b() : (f.onEnter(c.link, [20, 40, 40, 40], b),
                c.onShow(b),
                c.link.focus(b));
                var x = new function() {
                    var b, f, g, l;
                    this.initializeVariables = function() {
                        b = a("#sda-side-panel-content #sda-side-panel-issue");
                        f = b.attr("data-address-issue-id");
                        g = b.attr("data-address-issue-type");
                        var c = a('#sda-side-panel-content input[name\x3d"appActionToken"]')
                          , d = {};
                        d.appActionToken = c.val();
                        d.value = "csrfTokenValue";
                        l = a.param(d)
                    }
                    ;
                    this.postImpression = function() {
                        m.increment("SDA:YourAccount:SidePanel:Impression");
                        a.ajax({
                            url: "/ma/api/impression?" + l,
                            type: "POST",
                            contentType: "application/json",
                            dataType: "json",
                            data: k.JSON.stringify({
                                addressIssueId: f,
                                addressIssueType: g,
                                communicationChannelType: e.COMMUNICATION_CHANNEL_TYPE
                            }),
                            cache: !1,
                            timeout: 5E3
                        })
                    }
                    ;
                    this.postAcceptNotification = function(b) {
                        var n = function(b) {
                            "ok" === b ? a("#sda-side-panel-thanks").show() : a("#sda-side-panel-error").show();
                            setTimeout(function() {
                                c.sidePanel.hide();
                                if (d.fullWidthCoreFlyout) {
                                    var b = a("#nav-flyout-profile").find(".nav-column");
                                    b = b.eq(3);
                                    b.removeClass("nav-column-break")
                                }
                                r()
                            }, 3E3)
                        }
                          , p = function(b) {
                            a("#sda-side-panel-content").hide("fast", function() {
                                a("#sda-side-panel-content").remove();
                                n(b)
                            })
                        };
                        a("#sda-side-panel-buttons \x3e button").removeClass("sda-button");
                        h("SDAYourAccountNoThanks") ? p("error") : (m.increment("SDA:YourAccount:SidePanel:AcceptNotification"),
                        a.ajax({
                            url: "/ma/api/customerResponse?" + l,
                            type: "POST",
                            contentType: "application/json",
                            dataType: "json",
                            data: k.JSON.stringify({
                                addressIssueId: f,
                                addressIssueType: g,
                                communicationChannelType: e.COMMUNICATION_CHANNEL_TYPE,
                                customerResponseType: b,
                                customerResponseValue: null
                            }),
                            cache: !1,
                            timeout: 5E3,
                            success: function(a) {
                                a && "ok" === a.status ? (m.increment("SDA:YourAccount:SidePanel:AcceptNotificationStatusSuccess"),
                                p("ok")) : (m.increment("SDA:YourAccount:SidePanel:AcceptNotificationStatusError"),
                                p("error"))
                            },
                            error: function(a, b, c) {
                                404 === a.status ? m.increment("SDA:YourAccount:SidePanel:AcceptNotificationError404") : 500 === a.status ? m.increment("SDA:YourAccount:SidePanel:AcceptNotificationError500") : "timeout" === b ? m.increment("SDA:YourAccount:SidePanel:AcceptNotificationErrorTimeout") : m.increment("SDA:YourAccount:SidePanel:AcceptNotificationUnknown");
                                p("error")
                            }
                        }))
                    }
                    ;
                    this.redirectNotification = function() {
                        m.increment("SDA:YourAccount:SidePanel:RedirectNotification");
                        a("#sda-side-panel-buttons \x3e button").removeClass("sda-button");
                        k.location = "/ma/addressIssuePage/addressIssueDetails?addressIssueId\x3d" + f
                    }
                }
                  , A = null
                  , y = function() {
                    a("#sda-side-panel-content").length && (m.increment("SDA:YourAccount:SidePanel:NotificationDisplayed"),
                    A = setTimeout(x.postImpression, w))
                };
                c.onShow(function() {
                    y()
                });
                c.onHide(function() {
                    clearTimeout(A)
                });
                c.sidePanel.onRender(function() {
                    0 !== a("#sda-side-panel-content").length && (m.increment("SDA:YourAccount:SidePanel:NotificationRendered"),
                    x.initializeVariables(),
                    y(),
                    a("#sda-side-panel-content").bind("click", function(b) {
                        b.preventDefault();
                        b = a(b.target);
                        b.is("#sda-redirect-notification.sda-button") ? x.redirectNotification() : b.is("#sda-accept-notification.sda-button") && (x.postAcceptNotification(b.attr("data-customer-response-type")),
                        clearTimeout(A),
                        A = null);
                        return !1
                    }))
                })
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "agent", "flyouts", "fixedBarWithEwcHandling").build("fixedBar", function(a, b, d, c, f) {
            var g = !1, l = !1, m, e, h, q, n, u, w, r, t, v, x, A, y = b.once().on(function() {
                m = a(k);
                e = a("#navbar");
                h = a("#nav-main");
                n = a("#nav-shop");
                u = a("#nav-search");
                r = a("#nav-tools");
                t = a("#nav-swmslot");
                w = a("#nav-xshop-container");
                v = a("#nav-main \x3e .nav-left");
                a("#nav-main \x3e .nav-right");
                x = a("#nav-main \x3e .nav-fill");
                A = a("#nav-belt \x3e .nav-right");
                q = a("\x3cdiv\x3e\x3c/div\x3e").css({
                    position: "relative",
                    display: "none",
                    width: "100%",
                    height: h.height() + "px"
                }).insertBefore(h);
                0 < x.find("#nav-shop").length && n.detach().appendTo(v)
            }), D = function() {
                e.removeClass("nav-fixed");
                u.removeClass("nav-fixed");
                r.removeClass("nav-fixed");
                r.css({
                    right: ""
                });
                t.show();
                u.css({
                    left: 0,
                    right: 0
                });
                w.removeClass("nav-fixed");
                a("#navbar").hasClass("layout3") || a("#nav-belt \x3e .nav-left").css({
                    width: a("#nav-logo").outerWidth(!0) + a("#nav-hamburger-menu").outerWidth(!0)
                });
                f.setRelative();
                q.hide();
                l = !1
            }, B = function() {
                var a = m.scrollTop();
                0 < a && c.hideAll();
                l && q.offset().top >= a ? D() : !l && h.offset().top < a && (a = A[0].getBoundingClientRect().width,
                e.addClass("nav-fixed"),
                u.addClass("nav-fixed"),
                r.addClass("nav-fixed"),
                f.setFixed(v.width(), a),
                t.hide(),
                w.addClass("nav-fixed"),
                q.show(),
                l = !0)
            };
            return {
                enable: function() {
                    g || d.ie6 || d.quirks || (y(),
                    m.bind("scroll.navFixed", B),
                    B(),
                    g = !0)
                },
                disable: function() {
                    g && (m.unbind("scroll.navFixed"),
                    D(),
                    g = !1)
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "constants", "metrics", "config", "agent", "page.domReady").build("carousel", function(a, b, d, c, f, g) {
            function l(a) {
                a = a.children();
                for (var b = a.length, c = 0, f = 0; f < b; f++)
                    c += a.eq(f).width();
                return c + d.CAROUSEL_WIDTH_BUFFER
            }
            function m() {
                r.css({
                    width: B,
                    "float": "left"
                })
            }
            function e(c) {
                t.hover(function() {
                    v.fadeIn()
                }, function() {
                    v.fadeOut()
                });
                E.resize(b.throttle(300).on(function() {
                    C = a("#navbar").width();
                    r.css("left", "0");
                    A.removeClass("nav-feed-control-disabled");
                    x.addClass("nav-feed-control-disabled");
                    m()
                }));
                x.click(function(a) {
                    a.preventDefault();
                    u(c);
                    return !1
                });
                A.click(function(a) {
                    a.preventDefault();
                    n(c);
                    return !1
                });
                g.touch && k.addEventListener("touchstart", w, !1)
            }
            function h(a) {
                y.bind("mouseenter", function() {
                    a.mouseOutUtility && a.mouseOutUtility.changeTimeout(600)
                });
                t.bind("mouseenter", function() {
                    a.mouseOutUtility && a.mouseOutUtility.changeTimeout(0)
                })
            }
            function q(a, b) {
                c.increment("nav-" + a.getName() + "-" + b + "-arrow-clicked");
                f.pageType && c.increment("nav-" + a.getName() + "-" + b + "-arrow-clicked-" + f.pageType.toLowerCase())
            }
            function n(a) {
                x.removeClass("nav-feed-control-disabled");
                var b = parseInt(r.css("left"), 10);
                if (isNaN(b) || null === b)
                    b = 0;
                var c = C - B;
                b -= z;
                b < c && (b = c);
                r.animate({
                    left: b
                }, 300, function() {
                    b === c && A.addClass("nav-feed-control-disabled")
                });
                q(a, "right")
            }
            function u(a) {
                A.removeClass("nav-feed-control-disabled");
                var b = r.css("left");
                b = parseInt(b, 10) + z;
                0 < b && (b = 0);
                r.animate({
                    left: b
                }, 300, function() {
                    0 === b && x.addClass("nav-feed-control-disabled")
                });
                q(a, "left")
            }
            function w() {
                t.addClass("nav-carousel-swipe");
                v.remove()
            }
            var r, t, v, x, A, y, D, B, C, z, E;
            return {
                create: function(b, c) {
                    var d = l(b);
                    0 === b.parent(".nav-carousel-container").length && d >= a(k).width() && 0 < a(".nav-timeline-item").length && (r = b,
                    r.wrap('\x3cdiv class\x3d"nav-carousel-container"\x3e\x3c/div\x3e'),
                    r.after('\x3cdiv class\x3d"nav-control-hidden"\x3e\x3ca class\x3d"nav-feed-carousel-control nav-feed-left nav-feed-control-disabled " href\x3d"#"\x3e\x3cspan class\x3d"nav-timeline-icon nav-feed-arrow"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"nav-control-hidden nav-control-hidden-right"\x3e\x3ca class\x3d"nav-feed-carousel-control nav-feed-right" href\x3d"#"\x3e\x3cspan class\x3d"nav-timeline-icon nav-feed-arrow"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e'),
                    t = r.parent(".nav-carousel-container"),
                    v = t.find(".nav-feed-carousel-control"),
                    x = t.find(".nav-feed-left"),
                    A = t.find(".nav-feed-right"),
                    y = t.find(".nav-control-hidden"),
                    D = r.children(":first").width(),
                    B = l(r),
                    C = t.width(),
                    z = C - D,
                    E = a(k),
                    m(),
                    e(c),
                    h(c))
                },
                readjust: function(a) {
                    r = a;
                    B = l(r);
                    B <= C && (a = t.parent(),
                    a.append(r),
                    a.css("width", "100%"),
                    t.remove(),
                    r.css("left", 0))
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "metrics", "page.domReady").run("navbackToTopCounter", function(a, b) {
            a("#navBackToTop").click(function() {
                b.increment("nav-backToTop")
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "getRefTag", "metrics").run("xshopImpressions", function(a, b, d) {
            var c = a("#nav-xshop")
              , f = c.offset().top + c.outerHeight();
            a("#nav-xshop \x3e .nav-a").each(function() {
                var c = b(a(this).attr("href"));
                c && a(this).offset().top + a(this).outerHeight() < f && d.increment("Nav:Xshop:Impression:" + c)
            })
        })
    }
    )(k.$Nav);
    (function(e, a) {
        "object" === typeof k.P && "function" === typeof k.P.when && "function" === typeof k.P.register && "function" === typeof k.P.execute && a.when("A").register("navDesktopAssetsGlowWidgetConstants", function(a) {
            return {
                ADDRESS_SELECTIONS_ENDPOINT: "/portal-migration/hz/glow/get-rendered-address-selections"
            }
        })
    }
    )(k.$Nav, I);
    (function(e) {
        e.when("configComplete").run("buildConfigObject", function() {
            if (!e.getNow("config")) {
                var a = {}, b = e.stats(), d;
                for (d in b)
                    if (b.hasOwnProperty(d)) {
                        var c = d.split("config.");
                        2 === c.length && (a[c[1]] = b[d].value)
                    }
                e.declare("config", a)
            }
        });
        e.when("$", "data", "debug.param", "page.domReady").build("dataProviders.primeTooltip", function(a, b, d) {
            var c = !1
              , f = {
                load: function() {
                    if (!c) {
                        var d = a("#nav-prime-tooltip").html();
                        return d ? (b({
                            primeTooltipContent: {
                                html: d
                            }
                        }),
                        c = !0) : !1
                    }
                }
            };
            d("navDisablePrimeTooltipData") || f.load();
            return f
        });
        e.when("$", "now", "debugStream", "data", "util.ajax", "debug.param", "metrics", "logUeError").build("provider.ajax", function(a, b, d, c, f, g, l, m) {
            var e = function(a) {
                var c = {}
                  , d = function(a) {
                    a = a || {};
                    var b = "";
                    try {
                        b = k.JSON.stringify(a)
                    } catch (t) {
                        b = a.url + "?";
                        a = a.data || {};
                        for (var c in a)
                            a.hasOwnProperty(c) && "string" === typeof a[c] && (b += c + ":" + a[c] + ";")
                    }
                    return b
                };
                return {
                    add: function(a) {
                        c[d(a)] = b()
                    },
                    ok: function(f) {
                        return (f = c[d(f)]) ? f < b() - a : !0
                    },
                    reset: function() {
                        c = {}
                    }
                }
            };
            return function(b) {
                b = a.extend({
                    throttle: 24E4
                }, b);
                var h = null
                  , n = e(b.throttle);
                b.dataType = "json";
                var p = {
                    fetch: function(e) {
                        e = a.extend(!0, {}, e || {}, b);
                        if (h)
                            setTimeout(function() {
                                p.fetch(e)
                            }, 250);
                        else {
                            if (e.isNavyaanContent || e.isRawHTMLContent || e.isNavyaanData)
                                e.dataType = "html";
                            if (n.ok(e)) {
                                var k = new Date
                                  , q = e.success
                                  , v = e.error;
                                e.error = function(a, b, c) {
                                    if (e.isShoppingPortalAjax) {
                                        var d = (a.responseText || "").split("\x3c!-- sp:error_pages --\x3e")[0];
                                        try {
                                            if (JSON.parse(d).data && q && "function" === typeof q) {
                                                q(d);
                                                return
                                            }
                                        } catch (B) {}
                                    }
                                    m({
                                        logLevel: "ERROR",
                                        message: "AJAX call failed for " + e.url + " with " + b + ": " + c
                                    });
                                    e.data && (d = e.data.metricKey || "") && l.increment(d + "-AjaxCallCountError");
                                    v && "function" === typeof v && v(a, b, c)
                                }
                                ;
                                e.success = function(a) {
                                    if (g("navDisableAjax"))
                                        e.error && "function" === typeof e.error && e.error();
                                    else {
                                        h = null;
                                        n.add(e);
                                        e.isShoppingPortalAjax && (a = JSON.parse(a).data);
                                        if (a) {
                                            var b = /\x3c!--.*--\x3e/g;
                                            e.isNavyaanContent ? eval(a.replace(b, "")) : e.isNavyaanData && c(JSON.parse(a.replace(b, "")));
                                            e.dataKey && (b = {},
                                            b[e.dataKey] = a,
                                            a = b);
                                            e.data && (b = e.data.metricKey || "") && (l.increment(b + "-AjaxCallCount"),
                                            l.count(b + "-AjaxLatency", new Date - k));
                                            e.isRawHTMLContent || c(a)
                                        }
                                        q && q(a)
                                    }
                                }
                                ;
                                d("Ajax Data Provider Fired", e);
                                h = f(e)
                            }
                        }
                    },
                    boundFetch: function(a) {
                        return function() {
                            p.fetch(a)
                        }
                    },
                    reset: function() {
                        h && (h.abort(),
                        h = null);
                        n.reset()
                    }
                };
                return p
            }
        });
        e.when("$", "provider.generic.subnav.flyoutAndShelf", "constants").build("provider.subnavFlyouts", function(a, b, d) {
            return b(G, function(b) {
                var c = [];
                a("a[data-nav-key]", b).each(function() {
                    var b = a(this).data("nav-key");
                    0 !== b.indexOf(d.ADVANCED_PREFIX) && c.push(b)
                });
                return c
            }, G)
        });
        e.when("$", "provider.generic.subnav.flyoutAndShelf", "constants").build("provider.subnavContentShelf", function(a, b, d) {
            var c = a("#nav-subnav-content-shelf");
            if (0 !== c.length)
                return b(c, function(b) {
                    b = a(b).data("nav-key");
                    var c = [];
                    if (0 === b.indexOf(d.ADVANCED_PREFIX))
                        return c;
                    c.push(b);
                    return c
                }, "_nav_shelf_cs")
        });
        e.when("$", "config", "provider.ajax").build("provider.generic.subnav.flyoutAndShelf", function(a, b, d) {
            return function(c, f, g) {
                var l = d({
                    url: b.subnavFlyoutUrl
                })
                  , e = l.fetch;
                l.fetch = function(b) {
                    var d = a("#nav-subnav");
                    if (0 !== d.length) {
                        var l = d.data("category");
                        l && (d = f(c ? c : d),
                        0 !== d.length && (b = a.extend(!0, b || {}, {
                            isNavyaanData: !0,
                            dataKey: "subnavFlyout",
                            data: {
                                ajaxTemplate: "subnavFlyout",
                                subnavCategory: l,
                                keys: 1 === d.length ? d[0] : d.join(";"),
                                metricKey: g ? l + g : G
                            },
                            isShoppingPortalAjax: !0
                        }),
                        e(b)))
                    }
                }
                ;
                return l
            }
        });
        e.when("$", "provider.generic.advanced.subnav.flyoutAndShelf", "constants").build("provider.advancedSubnavFlyouts", function(a, b, d) {
            return b(G, function(b) {
                var c = [];
                a("a[data-nav-key]", b).each(function() {
                    var b = a(this).data("nav-key");
                    0 === b.indexOf(d.ADVANCED_PREFIX) && c.push(b)
                });
                return c
            }, G)
        });
        e.when("$", "provider.generic.advanced.subnav.flyoutAndShelf", "constants").build("provider.advancedSubnavShelf", function(a, b, d) {
            var c = a("#nav-subnav-content-shelf");
            if (0 !== c.length)
                return b(c, function(b) {
                    b = a(b).data("nav-key");
                    var c = [];
                    0 === b.indexOf(d.ADVANCED_PREFIX) && c.push(b);
                    return c
                }, "_nav_shelf_cs")
        });
        e.when("$", "$F", "data", "provider.ajax", "constants", "advKeyDecoder").build("provider.generic.advanced.subnav.flyoutAndShelf", function(a, b, d, c, f, g) {
            return function(b, m, p) {
                var h = f.ADVANCED_PREFIX, l, n, k, w = function() {
                    l = [];
                    n = [];
                    k = [];
                    var f = a("#nav-subnav");
                    if (0 !== f.length) {
                        var q = f.data("category");
                        f = m(b ? b : f);
                        if (0 !== f.length)
                            for (var r = function(a) {
                                if (a = g(a)) {
                                    var b = a.endpoint
                                      , f = {
                                        jsonkey: a.jsonkey
                                    };
                                    k[b] ? k[b].push(f) : (k[b] = [f],
                                    f = c({
                                        data: {
                                            metricKey: q && p ? q + p : G
                                        },
                                        url: b,
                                        timeout: 1E4,
                                        error: function() {
                                            for (var a = k[b], c = 0; c < a.length; c++) {
                                                var f = {};
                                                f[h + a[c].jsonkey + "Content"] = d.get("genericError");
                                                d(f)
                                            }
                                        },
                                        success: function(a) {
                                            if (a && "object" === typeof a)
                                                for (var b in a)
                                                    if (a.hasOwnProperty(b)) {
                                                        var c = h + b + ".flyout"
                                                          , f = h + b + ".toplink"
                                                          , g = {};
                                                        g[h + b + "Content"] = a[b];
                                                        d(g);
                                                        a && a[b] && a[b].js && e.when("$", c, f).run("[rcx-nav] adv-panel-" + c, a[b].js)
                                                    }
                                        }
                                    }),
                                    a.onload ? n.push(f) : l.push(f))
                                }
                            }, u = 0; u < f.length; u++)
                                r(f[u])
                    }
                }, r = {
                    refresh: function() {
                        w()
                    },
                    fetchOnload: function() {
                        for (var a = 0; a < n.length; a++)
                            n[a].fetch()
                    },
                    fetchLazy: function() {
                        for (var a = 0; a < l.length; a++)
                            l[a].fetch()
                    },
                    fetchAll: function() {
                        r.fetchOnload();
                        r.fetchLazy()
                    }
                };
                return r
            }
        });
        e.when("util.templates", "data").run("provider.templates", function(a, b) {
            b.observe("templates", function(b) {
                for (var c in b)
                    b.hasOwnProperty(c) && b[c] && a.add(c, b[c])
            })
        });
        e.when("config", "provider.ajax").build("provider.dynamicMenu", function(a, b) {
            return b({
                url: a.dynamicMenuUrl,
                data: a.dynamicMenuArgs
            })
        });
        e.when("config", "provider.ajax").build("provider.genericMenu", function(a, b) {
            return b({
                url: "/gp/navigation/ajax/generic.html",
                data: {
                    rid: a.requestId
                },
                isNavyaanContent: !0
            })
        });
        e.when("config", "provider.ajax").build("provider.genericNavyaanData", function(a, b) {
            return b({
                url: "/gp/navigation/ajax/generic.html",
                data: {
                    rid: a.requestId
                },
                isNavyaanData: !0
            })
        });
        e.when("config", "provider.ajax").build("provider.spAjaxEndpoint", function(a, b) {
            return function(d, c) {
                return b({
                    url: "/nav/ajax/" + d,
                    data: {
                        rid: a.requestId
                    },
                    isNavyaanContent: !c,
                    isNavyaanData: c,
                    isShoppingPortalAjax: !0
                })
            }
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.amazonfresh", function(a, b, d, c) {
            return d({
                url: "/fsx/storeingress/fresh/flyout/desktop",
                data: {
                    rid: a.requestId
                },
                success: function(a) {
                    b({
                        amazonfreshContent: {
                            html: a.html || ""
                        }
                    })
                },
                error: function() {
                    var c = document.createElement("a");
                    c.href = "/alm/storefront?almBrandId\x3dQW1hem9uIEZyZXNo\x26ref\x3dnav_primefresh_startshop";
                    c.innerHTML = {
                        en_US: "Start shopping",
                        es_US: "Comenzar a comprar",
                        en_GB: "Start shopping",
                        de_DE: "Einkauf beginnen",
                        nl_NL: "Begin met winkelen",
                        pl_PL: "Rozpocznij zakupy",
                        tr_TR: "Alışverişe başla",
                        cs_CZ: "Začít s nákupem",
                        fr_FR: "Commencer à acheter",
                        it_IT: "Inizia lo shopping",
                        es_ES: "Empezar a comprar",
                        pt_PT: "Começar a comprar",
                        ja_JP: "ショッピングを開始",
                        zh_CN: "开始购物",
                        en_SG: "Start shopping"
                    }[a.languageCode] || "Start shopping";
                    b({
                        amazonfreshContent: {
                            html: c.outerHTML
                        }
                    })
                }
            })
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.groceries", function(a, b, d, c) {
            var f = {
                en_US: "Explore grocery shopping options",
                es_US: "Explore las opciones de compra de comestibles",
                cs_CZ: "Prozkoumejte možnosti nákupu potravin",
                de_DE: "Entdecken Sie Einkaufsmöglichkeiten",
                fr_FR: "Explorez les options d'achat d'épicerie",
                zh_CN: "探索杂货店购物选择",
                pt_PT: "Explore as opções de compras de supermercado",
                it_IT: "Esplora le opzioni per fare la spesa",
                es_ES: "Explore las opciones de compra de comestibles",
                ja_JP: "食料品の買い物オプションを探す",
                en_GB: "Explore grocery shopping options",
                nl_NL: "Ontdek mogelijkheden om boodschappen te doen",
                tr_TR: "Market alışverişi seçeneklerini keşfedin",
                pl_PL: "Przeglądaj opcje zakupów spożywczych",
                en_SG: "Explore grocery shopping options",
                en_AE: "Explore grocery shopping options",
                ar_AE: "اكتشف خيارات تسوق البقالة"
            }
              , g = function() {
                var b = a.languageCode.toString()
                  , c = function(a) {
                    return '\x3ca href\x3d"/fmc/learn-more?ref\x3dnav_cs_dsk_grfl_lm"\x3e' + a + "\x3c/a\x3e"
                };
                return f.hasOwnProperty(b) ? {
                    html: c(f[b])
                } : {
                    html: c("Explore grocery shopping options")
                }
            };
            return d({
                url: "/fsx/storeingress/groceries/flyout/desktop",
                data: {
                    rid: a.requestId
                },
                success: function(a) {
                    var c = "";
                    a.html && (c = a.html);
                    b({
                        groceriesContent: {
                            html: c
                        }
                    })
                },
                error: function() {
                    b({
                        groceriesContent: g()
                    })
                }
            })
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.amazonprime", function(a, b, d, c) {
            return d({
                url: "/hz/primenavigation/primeflyout",
                data: {
                    isPrime: a.isPrimeMember,
                    rid: a.requestId
                },
                success: function(a) {
                    b({
                        amazonprimeContent: {
                            html: a.content || ""
                        }
                    })
                },
                error: function() {
                    var c = document.createElement("a");
                    c.href = a.isPrimeMember ? "/amazonprime?_encoding\x3dUTF8\x26ref\x3dprime_flyout_err" : "/gp/prime/pipeline/membersignup";
                    c.innerHTML = "Prime Flyout";
                    b({
                        amazonprimeContent: {
                            html: c.outerHTML
                        }
                    })
                }
            })
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.abCatAccountLink", function(a, b, d, c) {
            return d({
                url: "/abcatflyout/accountLinking",
                success: function(a) {
                    b({
                        abCatAccountLinkContent: {
                            html: a.html || ""
                        }
                    })
                },
                error: function() {
                    var a = document.createElement("a");
                    a.href = "/business/register/welcome?return_to\x3d%2F\x26ref_\x3dnav_ab_acc_link";
                    a.innerHTML = "Check the latest status of your verification";
                    b({
                        abCatAccountLinkContent: {
                            html: a.outerHTML
                        }
                    })
                }
            })
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.abCatAcquisition", function(a, b, d, c) {
            return d({
                url: "/abcatflyout/acquisition",
                success: function(a) {
                    b({
                        abCatAcquisitionContent: {
                            html: a.html || ""
                        }
                    })
                },
                error: function() {
                    var a = document.createElement("a");
                    a.href = "/business/register/org/landing?ref_\x3dnav_ab_acq_flyout_image";
                    a.innerHTML = "Find work supplies with exclusive deals at Amazon Business";
                    b({
                        abCatAcquisitionContent: {
                            html: a.outerHTML
                        }
                    })
                }
            })
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.abCatActivation", function(a, b, d, c) {
            return d({
                url: "/abcatflyout/activation",
                success: function(a) {
                    b({
                        abCatActivationContent: {
                            html: a.html || ""
                        }
                    })
                },
                error: function() {
                    var a = document.createElement("a");
                    a.href = "/business/register/org/status?ref_\x3dnav_ab_activation_flyout";
                    a.innerHTML = "Check the latest status of your verification";
                    b({
                        abCatActivationContent: {
                            html: a.outerHTML
                        }
                    })
                }
            })
        });
        e.when("config", "data", "provider.ajax", "debug.param").build("provider.health", function(a, b, d, c) {
            var f = {
                en_US: "Shop all health on Amazon",
                es_US: "Compra todo en Salud en Amazon",
                en_GB: "Shop all health on Amazon",
                de_DE: "Alle Gesundheitsprodukte bei Amazon entdecken",
                nl_NL: "Winkel alle gezondheidsproducten op Amazon",
                pl_PL: "Przeglądaj wszystkie oferty w kategorii Zdrowie na Amazon",
                tr_TR: "Tüm sağlık ürünlerini Amazon'da satın alabilirsiniz",
                cs_CZ: "Nakupujte veškeré produkty pro své zdraví na Amazonu",
                fr_FR: "Acheter dans toute la section santé sur Amazon",
                it_IT: "Acquista tutti i prodotti per la salute su Amazon",
                es_ES: "Compra todo tipo de productos de salud en Amazon",
                pt_PT: "Comprar todos os produtos de saúde na Amazon",
                ja_JP: "Amazonですべてのヘルスケアから購入する",
                zh_CN: "在亚马逊上购买所有保健商品",
                en_SG: "Shop all health on Amazon"
            }
              , g = function() {
                var b = a.languageCode.toString()
                  , c = function(a) {
                    var b = document.createElement("a");
                    b.href = "/b?node\x3d82896154011?ref\x3dnav_cs_dsk_grfl_lm";
                    b.innerText = a;
                    return b
                };
                return f.hasOwnProperty(b) ? {
                    html: c(f[b])
                } : {
                    html: c(f.en_US)
                }
            };
            return d({
                url: "/hst/healthingress/flyout/desktop",
                data: {
                    rid: a.requestId
                },
                success: function(a) {
                    var c = "";
                    a.html && (c = a.html);
                    b({
                        healthContent: {
                            html: c
                        }
                    })
                },
                error: function() {
                    b({
                        healthContent: g()
                    })
                }
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "config", "dataPanel", "flyout.yourAccount", "provider.ajax", "util.Proximity").iff({
            name: "config",
            prop: "carnac"
        }).run("carnac", function(a, b, d, c, f, g, l) {
            if (d.carnac.url) {
                var e = c({
                    id: "nav-carnac-panel",
                    dataKey: "yourAccountCarnacContent",
                    className: "nav-flyout-content",
                    spinner: !0,
                    visible: !0
                });
                f.elem().append(e.elem());
                var p = f.getPanel();
                p.elem().remove();
                f.getPanel = function() {
                    return e
                }
                ;
                var h = g({
                    url: d.carnac.url,
                    dataKey: "yourAccountCarnacContent",
                    data: {
                        rid: d.requestId
                    }
                })
                  , k = b.once().delay(5E3).on(function() {
                    e.isRendered() || (e.elem().remove(),
                    f.elem().append(p.elem()),
                    f.getPanel = function() {
                        return p
                    }
                    )
                });
                a = function() {
                    h.fetch();
                    k()
                }
                ;
                f.onShow(a);
                f.link.focus(a);
                l.onEnter(f.link, [20, 40, 40, 40], a)
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("config.flyoutURL", "debug.param", "btf.full").run("provider.remote", function(a, b) {
            a && !b("navDisableJsonp") && (b = document.createElement("script"),
            b.setAttribute("type", "text/javascript"),
            b.setAttribute("src", a),
            (document.head || document.getElementsByTagName("head")[0]).appendChild(b))
        });
        e.when("$", "$F", "provider.dynamicMenu", "provider.genericMenu", "provider.genericNavyaanData", "provider.spAjaxEndpoint", "provider.amazonprime", "provider.abCatAccountLink", "provider.abCatAcquisition", "provider.abCatActivation", "provider.amazonfresh", "provider.groceries", "provider.health", "util.Proximity", "config", "flyout.amazonfresh", "flyout.groceries", "flyout.amazonprime", "flyout.wishlist", "flyout.accountList", "flyout.timeline", "flyout.abCatAccountLink", "flyout.abCatAcquisition", "flyout.abCatActivation", "flyout.health", "bindFlyoutAnchorReftagMetrics").run("bindProvidersToEvents", function(a, b, d, c, f, g, e, m, p, h, k, n, u, w, r, t, v, x, A, y, D, B, C, z, E, F) {
            if (!r.primeDay) {
                var l = {
                    prefetchGatewayHero: b.once().on(function() {
                        r.prefetchGatewayHero && "function" === typeof r.prefetchGatewayHero && r.prefetchGatewayHero()
                    }),
                    setupAmazonFreshFlyout: function() {
                        if (t) {
                            var a = k.boundFetch({
                                data: {
                                    amazonfreshContent: "amazonfresh",
                                    metricKey: "amazonfreshMetric"
                                }
                            });
                            l._bindProviderToEvents(t, t.link, a);
                            w.onEnter(t.link, [20, 40, 40, 40], function() {
                                a();
                                l.prefetchGatewayHero()
                            })
                        }
                    },
                    setupGroceriesFlyout: function() {
                        if (v) {
                            var a = n.boundFetch({
                                data: {
                                    groceriesContent: "groceries",
                                    metricKey: "groceriesMetric"
                                }
                            });
                            l._bindProviderToEvents(v, v.link, a);
                            w.onEnter(v.link, [20, 40, 40, 40], function() {
                                a();
                                v.onShow(function() {
                                    F(v.elem().find(".f3-cgi-flyout-section a"), "Grocery", !0, !0, "Store");
                                    F(v.elem().find(".f3-cgi-flyout-static-links-section a"), "Grocery", !0, !0, "Store")
                                });
                                l.prefetchGatewayHero()
                            })
                        }
                    },
                    _getWishlistFetch: function() {
                        var a = {
                            wishlistItems: "wishlist",
                            metricKey: "wishlistMetric",
                            ajaxTemplate: "wishlist"
                        };
                        r.alexaListEnabled && (a.alexaItems = "alexa",
                        a.metricKey = "alexaMetric");
                        return (r.isAjaxMigrated ? g("wishlist", !0) : f).boundFetch({
                            data: a
                        })
                    },
                    setupTimeline: function() {
                        var a = [100, 100, 100, 100];
                        r.timelineAsinPriceEnabled && (a = [20, 50, 30, 30]);
                        var b = (r.isAjaxMigrated ? g("timeline", !1) : c).boundFetch({
                            data: {
                                timelineContent: "timeline",
                                pageType: r.pageType,
                                subPageType: r.subPageType,
                                metricKey: "timelineMetric",
                                ajaxTemplate: "timeline"
                            }
                        });
                        l._bindProviderToEvents(D, D.link, b);
                        w.onEnter(D.link, a, function() {
                            b();
                            l.prefetchGatewayHero()
                        })
                    },
                    setupWishlistFlyout: function() {
                        var a = l._getWishlistFetch()
                          , b = A;
                        r.accountList && (b = y);
                        l._bindProviderToEvents(b, b.link, a);
                        w.onEnter(b.link, [20, 20, 40, 100], function() {
                            a();
                            l.prefetchGatewayHero()
                        })
                    },
                    setupAmazonPrimeFlyout: function() {
                        if (x) {
                            var a = e.boundFetch({
                                data: {
                                    amazonprimeflyoutContent: "amazonprime",
                                    metricKey: "primeMetric"
                                }
                            });
                            l._bindProviderToEvents(x, x.link, a);
                            w.onEnter(x.link, [20, 40, 40, 40], function() {
                                a();
                                l.prefetchGatewayHero()
                            })
                        }
                    },
                    setupAccountListFlyout: function() {
                        if (y)
                            if (r.accountListFlyoutRedesign) {
                                var a = c.boundFetch({
                                    data: {
                                        accountListRedesignContent: "accountListRedesign",
                                        metricKey: "accountListRedesignMetric",
                                        ajaxTemplate: "accountListFlyoutRedesign"
                                    }
                                });
                                l._bindProviderToEvents(y, y.link, a);
                                w.onEnter(y.link, [20, 40, 40, 40], function() {
                                    a();
                                    l.prefetchGatewayHero()
                                })
                            } else {
                                var b = c.boundFetch({
                                    data: {
                                        accountListContent: "accountList",
                                        metricKey: "accountListMetric",
                                        ajaxTemplate: "accountListFlyout"
                                    }
                                });
                                l._bindProviderToEvents(y, y.link, b);
                                w.onEnter(y.link, [20, 40, 40, 40], function() {
                                    b();
                                    l.prefetchGatewayHero()
                                })
                            }
                    },
                    setupABCATAccountLink: function() {
                        if (B) {
                            var a = m.boundFetch({
                                data: {
                                    abCatAccountLinkContent: "abCatAccountLink",
                                    metricKey: "abCatAccountLinkMetric",
                                    pageType: r.pageType,
                                    subPageType: r.subPageType
                                }
                            });
                            l._bindProviderToEvents(B, B.link, a);
                            w.onEnter(B.link, [15, 15, 15, 15], function() {
                                a()
                            })
                        }
                    },
                    setupABCATAcquisition: function() {
                        if (C) {
                            var a = p.boundFetch({
                                data: {
                                    abCatAcquisitionContent: "abCatAcquisition",
                                    metricKey: "abCatAcquisitionMetric",
                                    pageType: r.pageType,
                                    subPageType: r.subPageType
                                }
                            });
                            l._bindProviderToEvents(C, C.link, a);
                            w.onEnter(C.link, [15, 15, 15, 15], function() {
                                a()
                            })
                        }
                    },
                    setupABCATActivation: function() {
                        if (z) {
                            var a = h.boundFetch({
                                data: {
                                    abCatActivationContent: "abCatActivation",
                                    metricKey: "abCatActivationMetric",
                                    pageType: r.pageType,
                                    subPageType: r.subPageType
                                }
                            });
                            l._bindProviderToEvents(z, z.link, a);
                            w.onEnter(z.link, [15, 15, 15, 15], function() {
                                a()
                            })
                        }
                    },
                    setupHealthFlyout: function() {
                        if (E) {
                            var a = u.boundFetch({
                                data: {
                                    healthContent: "health",
                                    metricKey: "healthMetric"
                                }
                            });
                            l._bindProviderToEvents(E, E.link, a);
                            w.onEnter(E.link, [20, 40, 40, 40], function() {
                                a();
                                E.onShow(function() {
                                    F(E.elem().find(".ahi-flyout-section a"), "Health", !0, !0, "Store");
                                    F(E.elem().find(".ahi-flyout-static-links-section a"), "Health", !0, !0, "Store")
                                });
                                l.prefetchGatewayHero()
                            })
                        }
                    },
                    _bindProviderToEvents: function(a, b, c) {
                        a.onShow(c);
                        b.focus(c)
                    },
                    init: function() {
                        l.setupAmazonPrimeFlyout();
                        l.setupWishlistFlyout();
                        l.setupABCATAccountLink();
                        l.setupABCATAcquisition();
                        l.setupABCATActivation();
                        l.setupAmazonFreshFlyout();
                        l.setupGroceriesFlyout();
                        l.setupHealthFlyout();
                        r.isPureAjaxALF && l.setupAccountListFlyout();
                        r.timeline && l.setupTimeline()
                    }
                };
                l.init()
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "panels", "util.checkedObserver", "flyouts.anchor", "flyouts.fixers", "metrics", "config", "nav.inline").run("flyouts", function(a, b, d, c, f, g, l, e) {
            var m = {};
            a(k).bind("resize", function() {
                for (var a in m)
                    m.hasOwnProperty(a) && m[a].align()
            });
            return {
                create: function(b) {
                    b = a.extend({
                        enableFlyoutBuffer: !0,
                        elem: function() {
                            var c = b.buildNode ? b.buildNode() : a("\x3cdiv\x3e\x3c/div\x3e");
                            c.addClass("nav-flyout").appendTo(b.anchor || f());
                            b.enableFlyoutBuffer && c.append("\x3cdiv class\x3d'nav-flyout-buffer-left'\x3e\x3c/div\x3e\x3cdiv class\x3d'nav-flyout-buffer-right'\x3e\x3c/div\x3e\x3cdiv class\x3d'nav-flyout-buffer-top'\x3e\x3c/div\x3e\x3cdiv class\x3d'nav-flyout-buffer-bottom'\x3e\x3c/div\x3e");
                            return c
                        },
                        groups: ["flyouts"],
                        transition: {
                            show: function() {
                                h.elem().show();
                                h.flyoutFullyAnimated = !1;
                                if (h.animateDown) {
                                    a.extend(a.easing, {
                                        easeOutCubic: function(a, b, c, d, f) {
                                            return d * ((b = b / f - 1) * b * b + 1) + c
                                        },
                                        easeInCubic: function(a, b, c, d, f) {
                                            return d * (b /= f) * b * b + c
                                        }
                                    });
                                    var b = h.elem().height();
                                    h.elem().stop(!0, !0).css({
                                        height: "10px"
                                    }).animate({
                                        height: b
                                    }, 250, "easeOutCubic", function() {
                                        a(this).css("height", "auto");
                                        h.initiateSidePanel();
                                        h.flyoutFullyAnimated = !0
                                    });
                                    h.elem().find(".nav-flyout-content, #nav-flyout-wl-items, #nav-profile-bottom-bia-wrapper").hide().addClass("nav-add-filter").stop(!0, !0).fadeIn({
                                        duration: 300,
                                        easing: "easeInCubic"
                                    }, function() {
                                        a(this).removeClass("nav-add-filter")
                                    })
                                }
                                h.align();
                                l.increment("nav-flyout-" + h.getName() + "-show");
                                l.increment("nav-flyout-aggregate-show");
                                e.pageType && l.increment("nav-flyout-" + h.getName() + "-" + e.pageType.toLowerCase() + "-show")
                            },
                            hide: function() {
                                h.elem().stop(!0, !0).hide()
                            }
                        }
                    }, b);
                    var h = d.create(b);
                    h.align = c({
                        context: h,
                        check: function() {
                            if (!h.isVisible())
                                return !1
                        }
                    });
                    h.onAlign = h.align.observe;
                    h.show.observe(function() {
                        b.transition.show.apply(h, arguments)
                    });
                    h.hide.observe(function() {
                        b.transition.hide.apply(h, arguments)
                    });
                    h.lock.observe(function() {
                        h.elem().addClass("nav-locked")
                    });
                    h.unlock.observe(function() {
                        h.elem().removeClass("nav-locked")
                    });
                    g(h);
                    return m[b.name] = h
                },
                destroy: function(a) {
                    return m[a] ? (m[a].destroy(),
                    delete m[a],
                    d.destroy(a),
                    !0) : !1
                },
                hideAll: function() {
                    d.hideAll({
                        group: "flyouts"
                    })
                },
                lockAll: function() {
                    d.lockAll({
                        group: "flyouts",
                        lockKey: "global-flyout-lock-key"
                    })
                },
                unlockAll: function() {
                    d.unlockAll({
                        group: "flyouts",
                        lockKey: "global-flyout-lock-key"
                    })
                },
                get: function(a) {
                    return m[a]
                },
                getAll: function() {
                    return m
                }
            }
        });
        e.when("$", "$F").build("flyouts.anchor", function(a, b) {
            return b.memoize().on(function() {
                return a("\x3cdiv id\x3d'nav-flyout-anchor' /\x3e").insertAfter("#nav-belt")
            })
        });
        e.when("$", "$F", "cover", "debugStream").build("flyouts.cover", function(a, b, d, c) {
            var f = null
              , g = !1
              , l = function() {
                f && (clearTimeout(f),
                f = null)
            }
              , e = function() {
                l();
                g || (f = setTimeout(function() {
                    g || (l(),
                    d.hide(),
                    g = !1);
                    f = null
                }, 10))
            }
              , k = function() {
                l();
                d.show({
                    layer: "SUB",
                    click: function() {
                        e();
                        g = !1
                    }
                })
            };
            return function(b, c) {
                b.onShow(function() {
                    0 < a("#navbar.nav-pinned").length && c || k()
                });
                b.onHide(e)
            }
        });
        e.when("$", "$F", "agent").build("flyouts.fixers", function(a, b, d) {
            return function(c) {
                if (d.kindleFire) {
                    var f = a([]);
                    c.onShow(function() {
                        var b = this.elem()
                          , c = a("img[usemap]").filter(function() {
                            return 0 === a(this).parents(b).length
                        });
                        f = f.add(c);
                        c.each(function() {
                            this.disabledUseMap = a(this).attr("usemap");
                            a(this).attr("usemap", "")
                        })
                    });
                    c.onHide(function() {
                        f.each(function() {
                            a(this).attr("usemap", this.disabledUseMap)
                        });
                        f = a([])
                    })
                }
                if (d.touch)
                    c.onShow(function() {
                        var c = a("video");
                        c.css("visibility", "hidden");
                        b.delay(10).run(function() {
                            c.css("visibility", "")
                        })
                    })
            }
        });
        e.when("$", "$F", "agent", "config", "util.ClickOut", "util.mouseOut", "util.velocityTracker", "util.MouseIntent", "debug.param", "util.onKey").build("flyouts.linkTrigger", function(a, b, d, c, f, g, l, e, k, h) {
            var m = k("navFlyoutClick");
            return function(c, d, k, p, q, v, x) {
                v = m || v;
                var n = new f
                  , r = l()
                  , u = x ? g(x) : g()
                  , w = null
                  , t = !1
                  , z = function() {
                    w && (w.cancel(),
                    w = null,
                    t = !1)
                };
                a(d).bind("mouseleave", function() {
                    z();
                    c.isVisible() && (w = (new e(c.elem(),{
                        slop: 0
                    })).onArrive(function() {
                        z()
                    }).onStray(function() {
                        t && c.hide();
                        z()
                    }))
                });
                k ? u.add(k) : u.add(d);
                v || u.action(function() {
                    w ? t = !0 : c.hide()
                });
                n.action(function() {
                    c.hide()
                });
                c.onShow(b.once().on(function() {
                    var a = c.elem();
                    n.ignore(a);
                    n.ignore(d);
                    v || (u.add(a),
                    u.enable())
                }));
                c.onShow(function() {
                    d.addClass("nav-active");
                    n.enable();
                    r.disable()
                });
                c.onHide(function() {
                    d.removeClass("nav-active");
                    n.disable();
                    z()
                });
                c.onLock(function() {
                    c.isVisible() || a(".nav-icon, .nav-arrow", d).css({
                        visibility: "hidden"
                    })
                });
                c.onUnlock(function() {
                    a(".nav-icon, .nav-arrow", d).css({
                        visibility: "visible"
                    })
                });
                var E = !1
                  , F = b.debounce(500, !0).on(function() {
                    if (c.isVisible() || c.isLocked()) {
                        if (q || c.isLocked()) {
                            E = !1;
                            return
                        }
                        c.hide()
                    } else
                        c.show();
                    E = !0
                })
                  , H = function(a) {
                    F();
                    if (E || !q)
                        return a.stopPropagation(),
                        a.preventDefault(),
                        !1
                };
                d.bind("touchstart", H);
                h(d, function() {
                    if (this.isEnter())
                        return H(this.evt)
                }, "keydown");
                v || d.hover(function(a) {
                    a.originalEvent.acknowledge && a.originalEvent.acknowledge();
                    r.enable();
                    p && p()
                }, function() {
                    r.disable()
                });
                var J = b.debounce(500, !0).on(function() {
                    c.show()
                });
                r.addThreshold({
                    below: 40
                }, function() {
                    c.isVisible() || setTimeout(function() {
                        J()
                    }, 1);
                    r.disable()
                });
                a(".nav-icon", d).show().css({
                    visibility: "visible"
                });
                return u
            }
        });
        e.when("$", "$F", "noOp", "Observer", "util.tabbing", "util.onKey").build("flyouts.accessibility", function(a, b, d, c, f, g) {
            var l = b.memoize().on(function() {
                var b = new c;
                g(a(document), function() {
                    this.isEscape() && b.notify()
                }, "keydown");
                return b.boundObserve()
            });
            return function(b) {
                b = a.extend({
                    link: null,
                    onEscape: d
                }, b);
                var c = {}
                  , h = !1
                  , e = !1
                  , m = null
                  , k = !1
                  , w = a([]);
                l()(function() {
                    h && e && (b.onEscape(),
                    c.disable())
                });
                g(b.link, function() {
                    (this.isEnter() || this.isSpace()) && c.enable()
                }, "keyup");
                var r = null
                  , t = function() {
                    m && (clearTimeout(m),
                    m = null);
                    e = !0
                }
                  , v = function() {
                    m && (clearTimeout(m),
                    m = null);
                    m = setTimeout(function() {
                        e = !1
                    }, 10)
                }
                  , x = function() {
                    !k && h && (r = f(w),
                    r.tailAction("loop"),
                    r.enable(),
                    w.focus(t),
                    w.blur(v),
                    r.focus(),
                    k = !0)
                };
                c.elems = function(a) {
                    k = !1;
                    w.unbind("focus blur");
                    r && (r.destroy(),
                    r = null);
                    w = a;
                    x()
                }
                ;
                c.disable = function() {
                    h = !1;
                    r && r.disable()
                }
                ;
                c.enable = function() {
                    h = !0;
                    x();
                    r && !r.isEnabled() && (r.enable(),
                    r.focus())
                }
                ;
                return c
            }
        });
        e.when("$", "$F", "agent", "dataPanel", "config").build("flyouts.sidePanel", function(a, b, d, c, f) {
            return function(g) {
                var l = g.getName();
                "accountList" === l && (l = "yourAccount");
                var e = c({
                    dataKey: l + "-sidePanel",
                    className: "nav-flyout-sidePanel-content",
                    spinner: !1,
                    visible: !1,
                    doNotExecuteScripts: !0
                })
                  , k = b.memoize().on(function() {
                    var b = a("\x3cdiv class\x3d'nav-flyout-sidePanel' /\x3e").appendTo(g.elem()).append(e.elem())
                      , c = -b.width();
                    g.elem().find(".nav-flyout-buffer-left").css({
                        left: c - 10
                    });
                    g.elem().find(".nav-flyout-buffer-top, .nav-flyout-buffer-bottom").css({
                        left: c
                    });
                    return b
                })
                  , h = function() {
                    if (e.isVisible() && g.isVisible()) {
                        var b = function() {
                            var b = e.elem().height();
                            a(".nav-item", e.elem()).each(function() {
                                var c = a(this);
                                b -= c.outerHeight(!0);
                                c[0 <= b ? "show" : "hide"]()
                            });
                            g.a11ysetup()
                        };
                        f.flyoutAnimation ? g.setSidePanelCallback(b) : b()
                    }
                };
                g.onShow(h);
                g.onRender(h);
                e.onShow(function() {
                    k().css({
                        width: "0px",
                        display: "block"
                    }).animate({
                        width: "240px"
                    }, 300, "swing", h)
                });
                e.onHide(function() {
                    k().animate({
                        width: "0px"
                    }, 300, function() {
                        a(this).hide()
                    })
                });
                e.onRender(e.show);
                e.onReset(e.hide);
                if (d.quirks)
                    g.onShow(function() {
                        k().css({
                            height: g.elem().outerHeight()
                        })
                    });
                g.sidePanel = e
            }
        });
        e.when("$", "$F", "config", "data", "dataPanel", "logEvent", "phoneHome", "flyouts", "flyouts.cover", "flyouts.linkTrigger", "flyouts.aligner", "flyouts.accessibility", "flyouts.sidePanel", "debugStream", "panels", "flyoutMetrics", "btf.exists").build("flyouts.create", function(a, b, d, c, f, g, l, e, k, h, q, n, u, w, r, t) {
            return function(d) {
                d = a.extend({
                    key: null,
                    panelDataKey: null,
                    event: {},
                    elem: null,
                    link: null,
                    altMouseoutElem: null,
                    mouseEnterCallback: null,
                    arrow: null,
                    fullWidth: !1,
                    animateDown: !1,
                    cover: !1,
                    aligner: null,
                    sidePanel: !1,
                    linkCounter: !1,
                    clickThrough: !0,
                    clickTrigger: !1,
                    spinner: !0,
                    className: "nav-coreFlyout",
                    suspendTabbing: !1,
                    disableCoverPinned: !1,
                    timeoutDelay: 5E3,
                    mouseoutTimeOut: 250,
                    enableFlyoutBuffer: !0
                }, d);
                d.key && d.link && 0 !== d.link.length || w("Bad Flyout Config (key: " + d.key + ")");
                "string" === typeof d.event && (d.event = {
                    t: d.event
                });
                var m = f({
                    dataKey: d.panelDataKey || d.key + "Content",
                    className: "nav-flyout-content",
                    spinner: d.spinner,
                    visible: !0,
                    timeoutDataKey: d.key + "Timeout",
                    timeoutDelay: d.timeoutDelay
                })
                  , p = e.create({
                    name: d.key,
                    link: d.link,
                    buildNode: function() {
                        var b = d.elem || a("\x3cdiv id\x3d'nav-flyout-" + d.key + "'\x3e\x3c/div\x3e");
                        b.addClass(d.className);
                        d.arrow && b.append("\x3cdiv class\x3d'nav-arrow'\x3e\x3cdiv class\x3d'nav-arrow-inner'\x3e\x3c/div\x3e\x3c/div\x3e");
                        b.append(m.elem());
                        return b
                    },
                    anchor: d.anchor,
                    transition: d.transition,
                    enableFlyoutBuffer: d.enableFlyoutBuffer
                })
                  , y = null;
                p.onAlign(function() {
                    y || (y = (d.aligner || q)({
                        $flyout: p.elem(),
                        $link: d.link,
                        $key: d.key,
                        arrow: d.arrow,
                        fullWidth: d.fullWidth
                    }));
                    y()
                });
                if (d.link) {
                    var v = n({
                        link: d.link,
                        onEscape: function() {
                            p.hide();
                            d.link.focus()
                        }
                    });
                    p.a11y = v;
                    t.attachTo(p);
                    p.a11ysetup = function() {
                        if (!d.suspendTabbing) {
                            var b = a(p.elem().find(".nav-flyout-content").find(".nav-link,\x3ea,\x3espan"));
                            0 < b.length ? v.elems(b) : v.elems(a(p.elem().find("a")))
                        }
                    }
                    ;
                    p.onShow(b.once().on(function() {
                        p.a11ysetup()
                    }));
                    p.onShow(function() {
                        d.link.addClass("nav-active")
                    });
                    p.onHide(function() {
                        d.link.removeClass("nav-active");
                        v.disable()
                    });
                    p.onShow(function() {
                        if ("ewc" !== p.getName()) {
                            var b = e.get("ewc");
                            b && b.isPersistent() && b.elem().css({
                                zIndex: "1"
                            });
                            (b = a(".nav-ewc-arrow")) && b.css({
                                borderRight: "6px solid #666666"
                            })
                        }
                    });
                    p.onHide(function() {
                        if ("ewc" !== p.getName()) {
                            var b = e.get("ewc")
                              , c = a(".nav-ewc-arrow");
                            b && b.isPersistent() && b.elem().css({
                                zIndex: ""
                            });
                            c && c.css({
                                borderRight: ""
                            })
                        }
                    })
                }
                p.onShow(function() {
                    m.startTimeout()
                });
                p.onInteract(b.once().on(function() {
                    g(d.event)
                }));
                m.onData(function(a) {
                    if ("wlTriggers"in a)
                        if (p.hasInteracted() && p.isVisible())
                            l.trigger(a.wlTriggers);
                        else
                            p.onInteract(b.once().on(function() {
                                l.trigger(a.wlTriggers)
                            }))
                });
                p.getPanel = function() {
                    return m
                }
                ;
                d.sidePanel && u(p);
                if (d.link) {
                    d.cover && k(p, d.disableCoverPinned);
                    if (d.linkCounter) {
                        var B = b.memoize().on(function() {
                            return a("\x3cspan class\x3d'nav-counter'\x3e\x3c/span\x3e").insertBefore(a(".nav-icon", d.link))
                        });
                        c.observe(d.key + "-counter", function(a) {
                            0 >= a ? (B().hide(),
                            d.link.removeClass("nav-hasCounter")) : (B().show().text(a),
                            d.link.addClass("nav-hasCounter"))
                        })
                    }
                    var C = h(p, d.link, d.altMouseoutElem, d.mouseEnterCallback, d.clickThrough, d.clickTrigger, d.mouseoutTimeOut);
                    p.mouseOutUtility = C;
                    p.animateDown = d.animateDown
                }
                p.onDestroy(function() {
                    r.destroy(m.getName())
                });
                return p
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "flyouts.anchor", "util.Aligner", "config").build("flyouts.aligner", function(a, b, d, c) {
            var f = a("#navbar");
            return function(c) {
                c = a.extend({
                    $flyout: null,
                    $link: null,
                    arrow: null,
                    fullWidth: !1
                }, c);
                var g = new d({
                    base: c.$link,
                    target: c.$flyout,
                    offsetTo: f,
                    constrainTo: f,
                    constrainBuffer: [3, 3, 0, 3],
                    constrainChecks: [!0, !0, !1, !0],
                    alignTo: b(),
                    anchor: "top left",
                    from: "bottom left",
                    to: "nav-flyout-accountList" === c.$flyout.context.id ? "top center" : "top left",
                    fullWidth: c.fullWidth,
                    fullWidthCss: {
                        "border-radius": "0px",
                        "border-right": "0px",
                        "border-left": "0px",
                        "padding-left": "0px",
                        "padding-right": "0px",
                        "min-width": "1000px",
                        "max-width": f.width()
                    }
                })
                  , e = null;
                "top" === c.arrow && (e = new d({
                    base: a(".nav-arrow, .nav-icon", c.$link).filter(":visible"),
                    target: a(".nav-arrow", c.$flyout),
                    offsetTo: f,
                    alignTo: c.$flyout,
                    anchor: "top left",
                    from: "center",
                    to: "center"
                }));
                return function() {
                    "accountListRedesign" !== c.$key && g.align();
                    e && e.align()
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "data", "config", "nav.createTooltip", "SignInRedirect").iff({
            name: "config",
            prop: "signInTooltip"
        }).run("tooltip.signin", function(a, b, d, c, f) {
            b.observe("signinContent", function(b) {
                if (b.html && !d.primeDay) {
                    var g = a("#navbar")
                      , e = a("#nav-link-yourAccount");
                    d.accountList && (e = a("#nav-link-accountList"));
                    var k = c({
                        name: "signinTT",
                        content: b.html,
                        className: "nav-signin-tt",
                        timeout: 1E4,
                        align: {
                            base: e,
                            from: "bottom center",
                            to: "top center",
                            constrainTo: g,
                            constrainBuffer: [3, 3, 0, 3],
                            constrainChecks: [!0, !0, !1, !0]
                        },
                        arrow: "top"
                    });
                    if (d.signInOverride)
                        k.onRender(function() {
                            var b = a('[data-nav-role\x3d"signin"]', k.elem());
                            a.each(b, function(b, c) {
                                f.setRedirectUrl(a(c), null, null)
                            })
                        });
                    k.fadeIn()
                }
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "config", "flyouts.create", "SignInRedirect", "dataPanel", "util.addCssRule", "flyout.accountList").run("flyout.yourAccount", function(a, b, d, c, f, g, e, m) {
            return d.accountList ? m : function() {
                var b = {
                    t: "ya"
                };
                1 === a("#nav-noti-wrapper .nav-noti-content").length && (b.noti = 1);
                var g = !1
                  , e = !1;
                d.primeDay || (e = g = !0);
                var l = c({
                    key: "yourAccount",
                    link: a("#nav-link-yourAccount"),
                    event: b,
                    sidePanel: !0,
                    linkCounter: !0,
                    arrow: "top",
                    cover: g,
                    disableCoverPinned: e,
                    animateDown: d.flyoutAnimation
                })
                  , m = !1;
                l.getPanel().onData(function(b) {
                    b.signInHtml && !m && (l.elem().prepend(b.signInHtml),
                    m = !0,
                    d.signInOverride && (b = a('[data-nav-role\x3d"signin"]', l.elem()),
                    a.each(b, function(b, c) {
                        f.setRedirectUrl(a(c), null, null)
                    })))
                });
                return l
            }()
        });
        e.when("$", "agent", "$F", "data", "flyout.yourAccount", "config.dismissNotificationUrl", "config", "page.domReady").run("sidepanel.yaNotis", function(a, b, d, c, f, g, e) {
            if (!e.primeDay) {
                var l = a("#nav-noti-wrapper")
                  , k = a(".nav-noti-content", l)
                  , h = {
                    count: parseInt(k.attr("data-noti-count") || "0", 10),
                    render: function() {
                        var a = h.count;
                        1 > a && (a = 0);
                        9 < a && (a = "9+");
                        c({
                            "yourAccount-counter": a
                        })
                    },
                    decrement: function() {
                        h.count = Math.max(h.count - 1, 0);
                        h.render()
                    }
                };
                l.remove();
                if (1 !== k.length || 1 > h.count)
                    return !1;
                f.sidePanel.onRender(function() {
                    var c = this.elem()
                      , l = a(".nav-noti-item", c).not("#nav-noti-empty")
                      , m = function() {
                        var b = function() {
                            var b = a("#nav-noti-all", c);
                            a(".nav-noti-title");
                            var d = c.height() - b.outerHeight(!0)
                              , f = !1;
                            l.each(function() {
                                var b = a(this);
                                f ? b.hide() : (d -= a(this).outerHeight(),
                                0 < d ? b.show() : (f = !0,
                                b.hide()))
                            })
                        };
                        e.flyoutAnimation ? f.setSidePanelCallback(b) : b()
                    };
                    l.each(function() {
                        var c = a(this);
                        b.touch ? c.addClass("nav-noti-touch") : c.hover(function() {
                            a(this).addClass("nav-noti-hover")
                        }, function() {
                            a(this).removeClass("nav-noti-hover")
                        });
                        a(".nav-noti-x", c).click(function(b) {
                            a.ajax({
                                url: g,
                                type: "POST",
                                data: {
                                    id: c.attr("data-noti-id")
                                },
                                cache: !1,
                                timeout: 500
                            });
                            c.slideUp(300, function() {
                                c.remove();
                                m()
                            });
                            h.decrement();
                            0 === h.count && f.sidePanel.hide();
                            b.preventDefault();
                            return !1
                        }).hover(function() {
                            a(this).addClass("nav-noti-x-hover")
                        }, function() {
                            a(this).removeClass("nav-noti-x-hover")
                        })
                    });
                    if (f.isVisible())
                        m();
                    else
                        f.onShow(d.once().on(m))
                });
                c({
                    "yourAccount-sidePanel": {
                        html: k[0].outerHTML
                    }
                });
                h.render();
                return !0
            }
        });
        e.when("$", "data", "logEvent", "sidepanel.csYourAccount", "page.domReady").iff({
            name: "sidepanel.csYourAccount",
            op: "falsey"
        }).run("sidepanel.yaHighConf", function(a, b, d) {
            var c = a("#csr-hcb-wrapper");
            a = a(".csr-hcb-content", c);
            c.remove();
            if (1 !== a.length)
                return !1;
            d({
                t: "hcb"
            });
            b({
                "yourAccount-sidePanel": {
                    html: a[0].outerHTML
                }
            });
            return !0
        });
        e.when("$", "$F", "config", "flyout.yourAccount", "SignInRedirect").run(function(a, b, d, c, f) {
            c.onRender(function() {
                a("#nav-item-switch-account").click(function() {
                    var b = a("#nav-item-switch-account");
                    f.setRedirectUrl(a(b), null, null)
                })
            });
            if (d.yourAccountPrimeURL) {
                var g = b.once().on(function() {
                    (new Image).src = d.yourAccountPrimeURL
                });
                c.onRender(function() {
                    a("#nav_prefetch_yourorders").mousedown(function() {
                        g()
                    });
                    if (d.yourAccountPrimeHover) {
                        var b = null;
                        a("#nav_prefetch_yourorders").hover(function() {
                            b = k.setTimeout(function() {
                                g()
                            }, 75)
                        }, function() {
                            b && (k.clearTimeout(b),
                            b = null)
                        })
                    }
                })
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config").build("prime.presentation", function(a, b) {
            var d = {};
            return function(b, f, g) {
                b = {
                    id: b,
                    pt: f,
                    et: (new Date).getTime()
                };
                b = a.extend(b, g);
                g = b;
                f = [];
                for (c in g)
                    g.hasOwnProperty(c) && "et" !== c && f.push(c + ":" + g[c]);
                f.sort();
                var c = f.join("|");
                d[c] || (d[c] = !0,
                k.ue && k.ue.log && k.ue.log(b, "prime-presentation-metrics"))
            }
        });
        e.when("$", "config").build("prime.metadata", function(a, b) {
            return function(d) {
                var c = {};
                b.requestId && (c.r = b.requestId);
                b.sessionId && (c.s = b.sessionId);
                a(d).each(function(b) {
                    b = a(this).attr("data-metadata");
                    "string" === typeof b && Object.prototype.hasOwnProperty.call(k, "JSON") && (b = k.JSON.parse(b));
                    var d = {};
                    b && b.hasOwnProperty("customerID") && (d.cid = b.customerID);
                    b && b.hasOwnProperty("marketplaceID") && (d.mid = b.marketplaceID);
                    b && b.hasOwnProperty("containerRequestID") && (d.mgid = b.containerRequestID);
                    c = a.extend(c, d);
                    return !1
                });
                return c
            }
        });
        e.when("$", "$F", "config", "data", "prime.presentation", "prime.metadata", "flyouts.create", "flyouts.accessibility", "util.checkedObserver").run("flyout.amazonprime", function(a, b, d, c, f, g, e, m, k) {
            if (!(d.genz && d.genzMap && d.genzMap.genzPrime)) {
                var l = a("#nav-link-amazonprime")
                  , p = function(c) {
                    var e = m({
                        link: l,
                        onEscape: function() {
                            c.hide();
                            l.focus()
                        }
                    })
                      , h = 0
                      , n = k({
                        check: function(a) {
                            return 2 === h
                        },
                        observe: function(a) {
                            f(1, "PrimeNavigationMenu", g("div#prime-ms3-nav-metadata"))
                        }
                    });
                    c.getPanel().onRender(b.once().on(function() {
                        d.dynamicMenuArgs && d.dynamicMenuArgs.primeMenuWidth && c.elem().css({
                            width: d.dynamicMenuArgs.primeMenuWidth + "px"
                        });
                        e.elems(a(".nav-hasPanel, a", c.elem()));
                        c.align();
                        h++;
                        n()
                    }));
                    c.onInteract(b.once().on(function() {
                        h++;
                        n()
                    }));
                    c.onShow(b.once().on(function() {
                        e.elems(a(".nav-hasPanel, a", c.elem()))
                    }))
                };
                return function() {
                    c.observe("primeMenu", function(a) {
                        c({
                            primeContent: {
                                html: a
                            }
                        })
                    });
                    var a = e({
                        key: "amazonprime",
                        link: l,
                        clickThrough: !0,
                        event: "amazonprime",
                        arrow: "top",
                        suspendTabbing: !0,
                        cover: !0,
                        animateDown: d.flyoutAnimation
                    });
                    p(a);
                    return a
                }()
            }
        });
        e.when("$", "$F", "flyouts.create", "util.Aligner", "flyouts.anchor", "dataProviders.primeTooltip").run("flyout.primeTooltip", function(a, b, d, c, f, g) {
            if (a("#nav-logo .nav-prime-try").html()) {
                var e = d({
                    key: "primeTooltip",
                    link: a("#nav-logo .nav-logo-tagline"),
                    event: "prime-tt",
                    arrow: "top",
                    className: "",
                    aligner: function(b) {
                        var d = new c({
                            base: b.$link,
                            target: b.$flyout,
                            from: "middle right",
                            to: "middle left",
                            anchor: "top left",
                            alignTo: f(),
                            constrainTo: a("#navbar"),
                            constrainBuffer: [3, 0, 0, 3],
                            constrainChecks: [!0, !1, !1, !0],
                            offsetTo: a("#navbar")
                        });
                        return function() {
                            d.align()
                        }
                    }
                });
                e.getPanel().onRender(b.once().on(function() {
                    e.getPanel().elem().attr("id", "nav-prime-tooltip")
                }));
                e.show.check(function() {
                    if (!this.getPanel().isRendered())
                        return g.load() && setTimeout(function() {
                            e.show()
                        }, 10),
                        !1
                });
                a("#nav-prime-tooltip").remove();
                return e
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "flyouts.create", "util.Aligner", "config", "cover").build("iss.flyout", function(a, b, d, c, f, g) {
            a("#navbar");
            var l = a("#nav-search")
              , m = a("#twotabsearchtextbox")
              , p = a(".nav-search-field", l)
              , h = a(".nav-search-submit")
              , q = a(k)
              , n = !f.primeDay
              , u = b.memoize().on(function() {
                return a("\x3cdiv id\x3d'nav-flyout-iss-anchor' /\x3e").insertAfter("#nav-belt")
            })
              , w = d({
                key: "searchAjax",
                className: "nav-issFlyout",
                event: "searchAjax",
                spinner: !1,
                enableFlyoutBuffer: !1,
                anchor: u(),
                aligner: function(a) {
                    var b = new c({
                        base: m,
                        target: a.$flyout,
                        from: "bottom left",
                        to: "top left",
                        anchor: "top left",
                        alignTo: u()
                    });
                    return function() {
                        b.align()
                    }
                }
            })
              , r = function() {
                var b = p.width();
                b += h.width();
                a(w.elem()).width(b)
            };
            w.onShow(function() {
                q.bind("resize", r);
                r();
                n && g.show()
            });
            w.onHide(function() {
                q.unbind("resize", r);
                n && g.hide()
            });
            e.declare("search.flyout", w);
            return w
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "config", "nav.createTooltip", "util.ajax", "data", "logUeError", "now", "util.Aligner", "metrics", "page.domReady").iff({
            name: "config",
            prop: "primeTooltip"
        }).run("tooltip.prime", function(a, b, d, c, f, e, l, m, p, h) {
            e = {
                type: "load",
                isPrime: d.isPrimeMember,
                referrer: document.referrer,
                height: a(k).height(),
                width: a(k).width()
            };
            d = d.primeTooltip.url;
            var g = a("#navbar")
              , n = a("#nav-link-amazonprime")
              , u = null
              , w = b.memoize().on(function(b) {
                var c = a(".nav-arrow", b);
                return 0 < c.length ? new p({
                    base: n,
                    target: c,
                    offsetTo: g,
                    alignTo: b,
                    anchor: "top left",
                    from: "center",
                    to: "center"
                }) : {
                    align: function() {}
                }
            });
            l = a("#nav-xshop");
            b = a("#nav-link-amazonprime");
            if (b.length && l.length)
                return l = l.offset().top + l.outerHeight(),
                b.offset().top + b.outerHeight() < l && f({
                    url: d,
                    data: e,
                    error: function() {
                        h.increment("nav-tooltip-Prime-errorCount")
                    },
                    success: function(b) {
                        b && b.content && (u = c({
                            key: "primeFlyoutTT",
                            event: "primeFlyoutTT",
                            content: a("\x3cdiv\x3e\x3c/div\x3e").html(b.content),
                            name: "primeFlyoutTT",
                            className: "nav-prime-tt",
                            timeout: 1E4,
                            align: {
                                base: n,
                                from: "bottom center",
                                to: "top center",
                                constrainTo: g,
                                constrainBuffer: [3, 3, 0, 3],
                                constrainChecks: [!0, !0, !1, !0]
                            },
                            arrow: "top",
                            onAlign: function() {
                                w(this.elem()).align()
                            }
                        }),
                        u.fadeIn())
                    }
                }),
                u
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config", "flyouts.create", "util.ajax", "metrics", "page.domReady").iff({
            name: "config",
            prop: "pseudoPrimeFirstBrowse"
        }).run("tooltip.pseudoPrime", function(a, b, d, c, f) {
            var e = {
                triggerType: "load",
                referrer: document.referrer,
                height: a(k).height(),
                width: a(k).width()
            }
              , l = b.pseudoPrimeFirstBrowse.url
              , m = a("#nav-cart")
              , p = null;
            c({
                url: l,
                data: e,
                error: function() {
                    f.increment("nav-pseudo-prime-first-browse-errorCount")
                },
                success: function(c) {
                    c && c.content && (p = d({
                        key: "pseudoPrimeFirstBrowseMessage",
                        link: m,
                        event: "pseudoPrimeFirstBrowseMessage",
                        arrow: "top",
                        elem: a("\x3cdiv\x3e\x3c/div\x3e").html("\x3cdiv\x3e" + c.content + "\x3c/div\x3e"),
                        className: "nav-pseudo-prime-first-browse-message",
                        spinner: !1,
                        animateDown: b.flyoutAnimation
                    }),
                    p.show())
                }
            });
            return p
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "data", "config", "flyouts.create", "flyouts.accessibility", "debug.param").run("flyout.cart", function(a, b, d, c, f, g, l) {
            if (!l("navShowCart") && (c.cartFlyoutDisabled || c.ewc))
                return !1;
            var m = a("#nav-cart")
              , k = f({
                key: "cart",
                link: m,
                event: "cart",
                className: "nav-cartFlyout",
                arrow: "top",
                suspendTabbing: !0,
                cover: !0,
                disableCoverPinned: !0
            })
              , h = g({
                link: m,
                onEscape: function() {
                    k.hide();
                    m.focus()
                }
            });
            k.getPanel().onRender(function() {
                a("#nav-cart-flyout").removeClass("nav-empty");
                a(".nav-dynamic-full", k.elem()).addClass("nav-spinner");
                e.when("CartContent").run("CartContentApply", function(b) {
                    d.observe("cartItems", function(c) {
                        b.render(c);
                        var f = 0;
                        c.count && (f = parseInt(c.count, 10));
                        c.fresh && c.fresh.count ? f += parseInt(c.fresh.count, 10) : c.cart && c.cart.fresh && c.cart.fresh.count && (f += parseInt(c.cart.fresh.count, 10));
                        d({
                            cartCount: f
                        });
                        a(".nav-dynamic-full", k.elem()).removeClass("nav-spinner");
                        h.elems(a(".nav-hasPanel, a", k.elem()));
                        k.isVisible() && k.align()
                    })
                })
            });
            k.onShow(b.once().on(function() {
                h.elems(a(".nav-hasPanel, a", k.elem()))
            }));
            k.onShow(function() {
                0 < a("#navbar.nav-pinned").length && k.hide()
            });
            return k
        });
        e.when("$", "data", "nav.inline").run("setupCartCount", function(a, b) {
            b.observe("cartCount", function(b) {
                var c = a("#nav-cart-menu-button-count .nav-cart-count, #nav-cart .nav-cart-count")
                  , d = a("#nav-cart .nav-cart-count");
                b += "";
                b.match(/^(|0|[1-9][0-9]*|99\+)$/) || (b = 0);
                b = parseInt(b, 10) || 0;
                d.removeClass("nav-cart-0 nav-cart-1 nav-cart-10 nav-cart-20 nav-cart-100");
                var e = 0 === b ? "nav-cart-0" : 10 > b ? "nav-cart-1" : 20 > b ? "nav-cart-10" : 100 > b ? "nav-cart-20" : "nav-cart-100";
                c.html(100 <= b ? "99+" : b.toString());
                d.addClass(e);
                0 === b ? (a("#nav-cart-one, #nav-cart-many").hide(),
                a("#nav-cart-zero").show()) : 1 >= b ? (a("#nav-cart-zero, #nav-cart-many").hide(),
                a("#nav-cart-one").show()) : (a("#nav-cart-zero, #nav-cart-one").hide(),
                a("#nav-cart-many").show())
            })
        });
        e.when("$", "$F", "util.templates", "util.Ellipsis", "util.inlineBlock", "nav.inline", "cartTemplateAvailable").build("CartContent", function(a, b, d, c, f) {
            var g = e.getNow("config.doubleCart")
              , l = a("#nav-cart-flyout")
              , m = {
                content: a("#nav-cart-standard")
            };
            m.title = a(".nav-cart-title", m.content);
            m.subtitle = a(".nav-cart-subtitle", m.content);
            m.items = a(".nav-cart-items", m.content);
            var k = {
                content: a("#nav-cart-pantry")
            };
            k.title = a(".nav-cart-title", k.content);
            k.subtitle = a(".nav-cart-subtitle", k.content);
            k.items = a(".nav-cart-items", k.content);
            var h = {
                content: a("#nav-cart-fresh")
            };
            h.title = a(".nav-cart-title", h.content);
            h.subtitle = a(".nav-cart-subtitle", h.content);
            h.items = a(".nav-cart-items", h.content);
            var q = l.attr("data-one")
              , n = l.attr("data-many")
              , u = k.content.attr("data-box")
              , w = k.content.attr("data-boxes")
              , r = k.content.attr("data-box-filled")
              , t = k.content.attr("data-boxes-filled")
              , v = function(b) {
                b = a.extend(!0, {
                    title: !0,
                    subtitle: !0,
                    boxes: 0,
                    items: [],
                    count: 0,
                    $parent: null,
                    doubleWide: !1
                }, b);
                var e = b.$parent;
                b.title && b.doubleWide ? f(e.title) : b.title ? e.title.css({
                    display: "block"
                }) : e.title.hide();
                e.subtitle.html("").hide();
                if (b.subtitle) {
                    var g = []
                      , l = "";
                    if (0 < b.boxes) {
                        var h = Math.ceil(b.boxes);
                        1 === h ? g.push(u.replace("{count}", h)) : g.push(w.replace("{count}", h))
                    }
                    1 === b.count ? g.push(q.replace("{count}", b.count)) : 1 < b.count && g.push(n.replace("{count}", b.count));
                    if (0 < b.boxes) {
                        h = Math.floor(b.boxes);
                        var k = Math.round(1E3 * (b.boxes - h)) / 10;
                        0 === h || 0 === k ? g.push(r.replace("{pct}", 0 === k ? 100 : k)) : g.push(t.replace("{pct}", k))
                    }
                    for (h = 0; h < g.length; h++)
                        l += "\x3cspan class\x3d'nav-cart-subtitle-item " + (0 === h ? "nav-firstChild " : "") + (h === g.length - 1 ? "nav-lastChild " : "") + "'\x3e" + g[h] + "\x3c/span\x3e";
                    e.subtitle.html(l);
                    b.doubleWide ? f(e.subtitle) : e.subtitle.css({
                        display: "block"
                    })
                }
                0 < b.items.length && e.items && e.items.html(d.use("cart", {
                    items: b.items
                }));
                c.newInstance().elem(a(".nav-cart-item-title", e.content)).external(!0).dimensions(function(a) {
                    return {
                        width: parseInt(a.css("width"), 10),
                        height: 2 * parseInt(a.css("line-height"), 10)
                    }
                }).truncate();
                e.content.show()
            }
              , x = b.once().on(function() {
                l.addClass("nav-cart-double")
            })
              , A = b.once().on(function() {
                l.addClass("nav-cart-dividers")
            });
            return {
                render: function(b) {
                    b = a.extend(!0, {
                        status: !1,
                        count: 0,
                        items: [],
                        pantry: {
                            status: !1,
                            count: 0,
                            weight: {
                                unit: "",
                                value: -1
                            },
                            boxes: 0,
                            items: []
                        },
                        fresh: {
                            status: !1,
                            count: 0,
                            items: []
                        }
                    }, b);
                    l.removeClass("nav-cart-double nav-cart-dividers");
                    var c = {
                        title: !1,
                        subtitle: !1,
                        count: b.count - b.pantry.count,
                        items: b.items,
                        $parent: m
                    }
                      , d = {
                        count: b.pantry.count,
                        boxes: parseFloat(b.pantry.boxes, 10),
                        items: b.pantry.items,
                        $parent: k
                    }
                      , f = {
                        count: b.fresh.count,
                        items: b.fresh.items,
                        $parent: h
                    };
                    if (b.status)
                        l.addClass("nav-ajax-success");
                    else
                        return l.addClass("nav-ajax-error"),
                        !1;
                    if (0 === b.items.length && 0 === b.pantry.items.length && 0 === b.fresh.items.length)
                        return l.addClass("nav-empty").removeClass("nav-full"),
                        !0;
                    l.removeClass("nav-empty").addClass("nav-full");
                    if (0 < b.items.length && 0 === b.pantry.items.length && 0 === b.fresh.items.length)
                        5 >= b.items.length ? v(c) : g ? (x(),
                        v(a.extend(c, {
                            items: b.items.slice(0, 10),
                            doubleWide: !0
                        }))) : v(a.extend(c, {
                            items: b.items.slice(0, 5)
                        }));
                    else if (0 === b.items.length && 0 < b.pantry.items.length && 0 === b.fresh.items.length)
                        5 >= b.pantry.items.length ? v(d) : (x(),
                        v(a.extend(d, {
                            items: b.pantry.items.slice(0, 10),
                            doubleWide: !0
                        })));
                    else if (0 === b.items.length && 0 === b.pantry.items.length && 0 < b.fresh.items.length)
                        v(a.extend(f, {
                            items: b.fresh.items.slice(0, 5),
                            doubleWide: !0
                        }));
                    else if (0 < b.fresh.items.length && 0 < b.items.length && 0 === b.pantry.items.length)
                        A(),
                        v(a.extend(c, {
                            items: b.items.slice(0, 4),
                            title: !0,
                            subtitle: !0,
                            doubleWide: !0
                        })),
                        v(a.extend(f, {
                            items: b.fresh.items.slice(0, 4),
                            doubleWide: !0
                        }));
                    else if (0 < b.fresh.items.length && 0 === b.items.length && 0 < b.pantry.items.length)
                        A(),
                        v(a.extend(d, {
                            items: b.pantry.items.slice(0, 4),
                            doubleWide: !0
                        })),
                        v(a.extend(f, {
                            items: b.fresh.items.slice(0, 4),
                            doubleWide: !0
                        }));
                    else if (0 < b.items.length && 0 < b.pantry.items.length && 0 === b.fresh.items.length)
                        if (A(),
                        4 >= b.items.length + b.pantry.items.length)
                            v(a.extend(c, {
                                title: !0,
                                subtitle: !0
                            })),
                            v(d);
                        else {
                            x();
                            f = Math.ceil(b.items.length / 2);
                            var e = Math.ceil(b.pantry.items.length / 2);
                            2 >= f || 1 >= e && 3 === f ? v(a.extend(c, {
                                title: !0,
                                subtitle: !0,
                                doubleWide: !0
                            })) : v(a.extend(c, {
                                items: b.items.slice(0, 1 >= e ? 6 : 4),
                                title: !0,
                                subtitle: !0,
                                doubleWide: !0
                            }));
                            2 >= e || 1 >= f && 3 === e ? v(a.extend(d, {
                                doubleWide: !0
                            })) : v(a.extend(d, {
                                items: b.pantry.items.slice(0, 1 >= f ? 6 : 4),
                                doubleWide: !0
                            }))
                        }
                    else
                        0 < b.fresh.items.length && 0 < b.items.length && 0 < b.pantry.items.length && (A(),
                        v(a.extend(c, {
                            items: b.items.slice(0, 4),
                            title: !0,
                            subtitle: !0,
                            doubleWide: !0
                        })),
                        v(a.extend(d, {
                            items: b.pantry.items.slice(0, 4),
                            doubleWide: !0
                        })),
                        v(a.extend(f, {
                            items: b.fresh.items.slice(0, 4),
                            doubleWide: !0
                        })));
                    return !0
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config", "flyouts.create", "dataPanel").run("flyout.wishlist", function(a, b, d, c) {
            if (!b.accountList) {
                var f = {
                    createFlyout: function() {
                        return d({
                            key: "wishlist",
                            link: a("#nav-link-wishlist"),
                            event: "wishlist",
                            arrow: "top",
                            cover: !0,
                            animateDown: b.flyoutAnimation
                        })
                    },
                    createWishlistDataPanel: function() {
                        return c({
                            id: "nav-flyout-wl-items",
                            dataKey: "wishlistItems",
                            spinner: !0,
                            visible: !1
                        })
                    },
                    createAlexaListDataPanel: function() {
                        return c({
                            id: "nav-flyout-wl-alexa",
                            dataKey: "alexaItems",
                            spinner: !1,
                            visible: !1
                        })
                    },
                    setPanelVisibilityRules: function(a) {
                        a.onData(function(a) {
                            0 === a.count ? this.hide() : this.show()
                        });
                        a.onTimeout(function() {
                            this.hide()
                        })
                    },
                    onFlyoutPanelRender: function(a) {
                        f.flyout.getPanel().onRender(function(c) {
                            if (!c.data || !c.data.isTimeout) {
                                var d = f.flyout.elem();
                                c = d;
                                b.fullWidthCoreFlyout && (c = d.find(".nav-column:first-child .nav-panel"));
                                for (d = 0; d < a.length; d++) {
                                    var e = a[d];
                                    e.elem().prependTo(c).show();
                                    e.startTimeout()
                                }
                            }
                        })
                    },
                    init: function() {
                        var a = [];
                        f.flyout = f.createFlyout();
                        if (b.isRecognized) {
                            var c = f.createWishlistDataPanel();
                            f.setPanelVisibilityRules(c);
                            a.push(c);
                            b.alexaListEnabled && (c = f.createAlexaListDataPanel(),
                            f.setPanelVisibilityRules(c),
                            a.push(c))
                        }
                        f.onFlyoutPanelRender(a)
                    }
                };
                f.init();
                return f.flyout
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "flyouts.create", "config", "dataPanel", "SignInRedirect", "nav.inline").run("flyout.accountList", function(a, b, d, c, f) {
            if (d.accountList) {
                var e = {
                    createAndShowListDataPanel: function(b, d, f, e, g, h) {
                        b = c({
                            id: b,
                            className: f,
                            dataKey: d,
                            spinner: e,
                            visible: !1
                        });
                        this.setPanelVisibilityRules(b);
                        this.setA11yRules(h, b);
                        g ? b.elem().appendTo(a("#nav-al-wishlist")) : b.elem().insertAfter(a("#nav-al-title"));
                        this.showListPanel(b);
                        return b
                    },
                    showListPanel: function(a) {
                        a.show();
                        a.startTimeout()
                    },
                    setPanelVisibilityRules: function(a) {
                        a.onData(function(a) {
                            0 === a.count ? this.hide() : this.show()
                        });
                        a.onTimeout(function() {
                            this.hide()
                        })
                    },
                    setA11yRules: function(a, b) {
                        b.onRender(function(b) {
                            a.a11ysetup && a.a11ysetup()
                        })
                    }
                }
                  , l = a("#a-page")
                  , m = a("body")
                  , p = 0
                  , h = 0
                  , q = b({
                    key: d.accountListFlyoutRedesign ? "accountListRedesign" : "accountList",
                    className: "nav-coreFlyout",
                    link: a("#nav-link-accountList"),
                    cover: !d.primeDay,
                    clickThrough: !0,
                    sidePanel: !0,
                    event: {
                        t: "ya"
                    },
                    arrow: "top",
                    animateDown: d.flyoutAnimation
                });
                q.getPanel().onData(function(b) {
                    d.signInOverride && (b = a('[data-nav-role\x3d"signin"]', q.elem()),
                    a.each(b, function(b, c) {
                        f.setRedirectUrl(a(c), null, null)
                    }))
                });
                q.a11ysetup = function() {
                    if (!opts.suspendTabbing) {
                        var b = a([]);
                        a.each(["#nav-flyout-ya-signin", "#nav-flyout-ya-newCust", "#nav-al-your-account", "#nav-al-wishlist", "#bia-hcb-widget"], function(c, d) {
                            b = a.merge(b, q.elem().find(d).find(".nav-link,\x3ea,\x3espan,.a-link-normal,.a-button-input"))
                        });
                        0 < b.length ? q.a11y.elems(b) : q.a11y.elems(a(q.elem().find("a")))
                    }
                }
                ;
                q.getPanel().onRender(function(a) {
                    d.isRecognized && (e.createAndShowListDataPanel("nav-flyout-wl-items", "wishlistItems", d.isNavALFRegistryGiftList ? null : "have-bot-border", !0, !1, q),
                    d.alexaListEnabled && e.createAndShowListDataPanel("nav-flyout-wl-alexa", "alexaItems", d.isALFRedesignPT2 ? null : "have-bot-border", !1, d.isALFRedesignPT2, q))
                });
                d.accountListFlyoutRedesign && (q.onShow(function() {
                    var b = a("#nav-link-accountList");
                    b = b.offset().top + b.outerHeight();
                    a("#nav-flyout-accountListRedesign").css("top", b - k.pageYOffset);
                    p = k.pageYOffset;
                    h = k.pageXOffset;
                    m.addClass("lock-position").css({
                        top: "-" + p + "px",
                        width: "100%"
                    });
                    d.isTabletBrowser || m.css({
                        position: "fixed",
                        "overflow-y": "scroll"
                    });
                    0 != h && m.css({
                        left: "-" + h + "px"
                    });
                    l.attr("aria-hidden", "true")
                }),
                q.onHide(function() {
                    m.attr("tabIndex", 0).focus().removeAttr("tabIndex").removeClass("lock-position").css({
                        position: "static",
                        top: "",
                        left: ""
                    });
                    d.isTabletBrowser || m.css({
                        "overflow-y": "auto"
                    });
                    k.scrollTo(h, p)
                }));
                return q
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config", "util.cleanUrl").run("SignInRedirect", function(a, b, d) {
            var c = {
                setRedirectUrl: function(a, c, f) {
                    var e = a.attr("href");
                    if (!e)
                        return !0;
                    c = c ? c : k.location.href;
                    var g = a.attr("data-nav-ref") || !1;
                    "nav-item-switch-account" === a.attr("id") && (g = "nav_youraccount_switchacct");
                    c = d(c, {
                        https: !0,
                        encode: !0,
                        ref: g
                    });
                    e = -1 === e.indexOf("currentPageURL") ? e.replace(/(openid.return_to(%3D|=))[^&\?]+/g, "openid.return_to\x3d" + c) : e.replace(/(currentPageURL(%3D|=))[^&\?]+/g, "currentPageURL\x3d" + c);
                    e = e.replace(/(pageType(%3D|=))[^&\?]*/g, "pageType\x3d" + b.pageType);
                    a.attr("href", e);
                    f && f(e)
                }
            }
              , f = a('#navbar [data-nav-role\x3d"signin"]');
            a.each(f, function(b, d) {
                c.setRedirectUrl(a(d), null, null)
            });
            return c
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "data", "config", "page.domReady").run("timelineContent", function(a, b, d) {
            if (d.timeline) {
                d = a("#nav-timeline-wrapper");
                var c = a("#nav-timeline", d);
                b.observe("flyoutErrorContent", function(d) {
                    d = a("#nav-timeline-error", a(d)[0]);
                    var f = "\x3cdiv id\x3d'nav-timeline'\x3e\x3cdiv id\x3d'nav-timeline-data' class\x3d'nav-center'\x3e" + d[0].outerHTML + "\x3c/div\x3e\x3c/div\x3e";
                    0 === c.length && 1 === d.length && b({
                        timelineContent: {
                            html: f
                        }
                    })
                });
                1 > c.length || (d.remove(),
                b({
                    timelineContent: {
                        html: c[0].outerHTML
                    }
                }))
            }
        });
        e.when("$", "$F", "flyouts.create", "config", "util.Aligner", "flyouts.anchor", "carousel", "util.Ellipsis", "data", "provider.dynamicMenu", "provider.genericNavyaanData", "agent", "log").run("flyout.timeline", function(a, b, d, c, f, e, l, k, p, h, q, n, u) {
            if (c.timeline) {
                b = a("#nav-recently-viewed");
                var g = d({
                    key: "timeline",
                    className: "nav-coreFlyout nav-fullWidthFlyout",
                    link: b,
                    cover: !0,
                    clickThrough: !0,
                    event: "timeline",
                    arrow: "top",
                    fullWidth: 1,
                    animateDown: c.flyoutAnimation
                })
                  , m = !1;
                b.hover(function() {
                    m = !0
                }, function() {
                    m = !1
                });
                b.click(function() {
                    a(this).blur();
                    m && (g.show(),
                    m = !1)
                });
                var t = function() {
                    k.newInstance().elem(a(".nav-timeline-asin-title", ".nav-timeline-asin")).external(!0).dimensions(function(a) {
                        return {
                            width: parseInt(a.css("width"), 10),
                            height: 2 * parseInt(a.css("line-height"), 10)
                        }
                    }).truncate()
                }
                  , v = function() {
                    p.observe("timelineContent", function(b) {
                        l.create(a("#nav-timeline-data"), g);
                        c.timelineAsinPriceEnabled || t()
                    })
                }
                  , x = function() {
                    var b = function(b) {
                        var c = a(this)
                          , d = a(b.target)
                          , f = c.find(".nav-timeline-remove-item")
                          , e = c.find(".nav-timeline-remove-error-msg")
                          , g = c.find(".nav-timeline-date");
                        "mouseover" === b.type ? (c.addClass("nav-change-dot"),
                        b = e.css("display"),
                        (d.hasClass("nav-timeline-remove-container") || 0 < d.parents(".nav-timeline-remove-container").length) && "none" === b ? (f.show(),
                        g.hide()) : "block" === b ? (f.hide(),
                        g.hide()) : (f.hide(),
                        g.show())) : (c.removeClass("nav-change-dot"),
                        f.hide(),
                        e.hide(),
                        g.show())
                    }
                      , d = 0;
                    c.dynamicTimelineDeleteArgs && (d = c.dynamicTimelineDeleteArgs);
                    var f = function(a) {
                        a.ajaxTemplate = "timelineDeleteAsin";
                        q.boundFetch({
                            data: a
                        })()
                    }
                      , e = function(a, b, d, e) {
                        b = {
                            lastItemTimeStamp: b,
                            isCalledFromTimelineDelete: 1,
                            fetchEmptyContent: d,
                            pageType: c.pageType,
                            subPageType: c.subPageType,
                            asinId: e,
                            metricKey: "timelineRefillMetric"
                        };
                        b[a] = "timeline";
                        f(b)
                    }
                      , g = function(a, b) {
                        b = {
                            asin: b,
                            navDebugTimelineDeleteError: d,
                            metricKey: "timelineDeleteMetric",
                            pageType: c.pageType
                        };
                        u("Timeline delete on page: " + c.pageType);
                        b[a] = "timelineDelete";
                        f(b)
                    }
                      , h = function(c) {
                        var d = a(this)
                          , f = d.parents(".nav-timeline-item")
                          , k = d.find(".nav-timeline-remove-error-msg")
                          , m = d.find(".nav-timeline-remove-item")
                          , n = f.attr("data-nav-timeline-item")
                          , q = a("#nav-timeline-data")
                          , r = q.attr("data-nav-timeline-length")
                          , t = q.attr("data-nav-timeline-max-items-shown")
                          , u = a(".nav-timeline-item:last")
                          , w = u.prev().attr("data-nav-timeline-item-timestamp")
                          , v = a(".nav-timeline-item \x3e .nav-timeline-dummy").length
                          , x = "timelineRefillContent" + n
                          , y = "timelineDeleteContent" + n
                          , B = a(".nav-timeline-item");
                        c = B.length;
                        var z = a("#nav-timeline")
                          , A = 0;
                        3 === c ? A = 0 < v ? 1 : 0 : 2 === c && (A = 1);
                        var C = a(".nav-carousel-container").length
                          , D = function() {
                            g(y, n);
                            p.observe(y, function(b) {
                                if (parseInt(b.html, 10)) {
                                    b = a(".nav-timeline-item");
                                    var c = b.length
                                      , e = f.find(".nav-start").length
                                      , g = f.find(".nav-timeline-date")
                                      , n = f.next()
                                      , p = n.find(".nav-timeline-date")
                                      , r = n.find(".nav-timeline-line")
                                      , u = a(".nav-timeline-hidden-item")
                                      , t = u.length;
                                    if (0 < t && (0 < v || 2 === c) && 3 >= c)
                                        b.remove(),
                                        q.addClass("nav-center"),
                                        q.css({
                                            width: "auto",
                                            "float": "none"
                                        }),
                                        z.removeClass("nav-timeline-delete-enabled"),
                                        u.removeClass("nav-timeline-hidden-item");
                                    else {
                                        if (0 < e)
                                            f.hide(),
                                            0 < t && u.removeClass("nav-timeline-hidden-item");
                                        else {
                                            f.addClass("nav-timeline-shift");
                                            for (var w = !1, x, y = 0; y < c; y++)
                                                x = B.eq(y),
                                                !w && x.hasClass("nav-timeline-shift") && (w = !0),
                                                w && x.css({
                                                    left: "-165px"
                                                })
                                        }
                                        0 < t && (c = u.attr("data-nav-timeline-length"),
                                        t = u.attr("data-nav-timeline-max-items-shown"),
                                        q.attr("data-nav-timeline-length", c - 1),
                                        q.attr("data-nav-timeline-max-items-shown", t),
                                        u.removeAttr("data-nav-timeline-length"),
                                        u.removeAttr("data-nav-timeline-max-items-shown"),
                                        u.removeClass("nav-timeline-hidden-item"));
                                        f.remove();
                                        b.css({
                                            left: "0"
                                        });
                                        0 < C && l.readjust(q)
                                    }
                                    0 < g.length && 0 === p.length && n.find(".nav-timeline-remove-container").append('\x3cdiv class\x3d"nav-timeline-date"\x3e' + g.text() + "\x3c/div\x3e");
                                    0 < e && r.addClass("nav-start nav-edge")
                                } else
                                    b = a(".nav-timeline-hidden-item"),
                                    0 < b.length && b.remove(),
                                    m.hide(),
                                    k.show(),
                                    d.bind("click", h)
                            })
                        };
                        (function() {
                            d.unbind("click");
                            parseInt(r, 10) > parseInt(t, 10) || 0 < A ? (e(x, w, A, n),
                            p.observe(x, function(c) {
                                a(c.html).insertBefore(u);
                                0 === A && (c = u.prev(),
                                c.bind("mouseover mouseleave", b),
                                c.find(".nav-timeline-remove-container").bind("click", h));
                                D()
                            })) : D()
                        }
                        )()
                    };
                    a(".nav-timeline-item").bind("mouseover mouseleave", b);
                    a(".nav-timeline-remove-container").bind("click", h)
                };
                g.getPanel().onRender(function() {
                    c.timelineDeleteEnabled && !n.touch && x()
                });
                g.onShow(function() {
                    v()
                });
                return g
            }
        });
        e.when("$", "nav.createTooltip", "config", "flyout.timeline", "data", "page.domReady").run("timelineTooltipDynamic", function(a, b, d, c, f) {
            d.timeline && f.observe("timelineTooltipContent", function(c) {
                if (c.html) {
                    var d = a("#navbar")
                      , f = a("#nav-recently-viewed")
                      , e = b({
                        name: "timelineTT",
                        content: c.html,
                        className: "nav-timeline-tt",
                        timeout: "none",
                        cover: !0,
                        addCloseX: !0,
                        align: {
                            base: f,
                            from: "bottom center",
                            to: "top center",
                            constrainTo: d,
                            constrainBuffer: [3, 3, 0, 3],
                            constrainChecks: [!0, !0, !1, !0]
                        },
                        arrow: "top",
                        clickCallback: function() {
                            e.hide();
                            f.trigger("mouseover")
                        }
                    });
                    e.fadeIn()
                }
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "flyouts.create", "config").run("flyout.amazonfresh", function(a, b, d) {
            return b({
                key: "amazonfresh",
                link: a("#nav-link-amazonfresh"),
                cover: !0,
                clickThrough: !0,
                sidePanel: !0,
                event: "amazonfresh",
                arrow: "top",
                animateDown: d.flyoutAnimation
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "flyouts.create", "config", "flyouts.accessibility").run("flyout.groceries", function(a, b, d, c, f) {
            var e = a("#nav-link-groceries")
              , l = d({
                key: "groceries",
                link: e,
                cover: !0,
                clickThrough: !0,
                sidePanel: !0,
                event: "groceries",
                arrow: "top",
                suspendTabbing: !0,
                animateDown: c.flyoutAnimation
            })
              , k = f({
                link: e,
                onEscape: function() {
                    l.hide();
                    e.focus()
                }
            });
            l.getPanel().onRender(b.once().on(function() {
                k.elems(a(".nav-hasPanel, a", l.elem()));
                l.align()
            }));
            l.onShow(b.once().on(function() {
                k.elems(a(".nav-hasPanel, a", l.elem()))
            }));
            return l
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "util.Proximity", "config", "flyout.accountList").run("flyout.profilePicker", function(a, b, d, c, f) {
            if (f) {
                var e = !1
                  , l = function(a) {
                    k.ue && "function" === typeof k.ue.count && k.ue.count(a, (k.ue.count(a) || 0) + 1)
                }
                  , m = function(b) {
                    "function" === typeof k.uex && k.uex("ld", "p13nprofilepicker:nav:fetch-flyout-desktop", {
                        wb: 1
                    });
                    l("p13nprofilepicker:nav:fetch-flyout-desktop:success");
                    a("#nav-al-profile").append(b)
                }
                  , p = function() {
                    l("p13nprofilepicker:nav:fetch-flyout-desktop:failure")
                }
                  , h = b.once().on(function() {
                    l("p13nprofilepicker:nav:fetch-flyout-desktop");
                    "function" === typeof k.uet && k.uet("bb", "p13nprofilepicker:nav:fetch-flyout-desktop", {
                        wb: 1
                    });
                    a.ajax({
                        type: "GET",
                        url: "/hz/profilepicker",
                        success: m,
                        error: p
                    });
                    e = !0
                })
                  , q = function() {
                    0 !== a("#nav-al-profile").length && h()
                };
                if (!d || c.isTabletBrowser)
                    k.addEventListener ? k.addEventListener("load", q, !1) : k.attachEvent("onload", q),
                    c.isTabletBrowser ? l("p13nprofilepicker:nav:fetch-flyout-desktop:tablet") : l("p13nprofilepicker:nav:fetch-flyout-desktop:no-proximity");
                else
                    d.onEnter(f.link, [100, 100, 100, 100], q);
                f.onRender(function() {
                    e || (q(),
                    l("p13nprofilepicker:nav:fetch-flyout-desktop:onRender"))
                })
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config", "nav.inline").run("enableNavbarTabbing", function(a, b) {
            if (!(2 > a("#navbar [tabindex]").get().length)) {
                a("#nav-upnav").find("map area, a").each(function() {
                    a(this).attr("tabindex", 0)
                });
                a("#nav-swmslot").find("map area, a").each(function() {
                    a(this).attr("tabindex", 0)
                }).focus(function() {
                    a("#navSwmHoliday").addClass("nav-focus")
                }).blur(function() {
                    a("#navSwmHoliday").removeClass("nav-focus")
                });
                b = a("#nav-subnav");
                var d = b.children(".nav-a");
                b.length && 2 <= d.length && d.attr("tabindex", 0)
            }
        });
        e.when("$", "$F", "config", "now", "logEvent", "util.Proximity").run("setupSslTriggering", function(a, b, d, c, f, g) {
            var l = d.sslTriggerType
              , m = d.sslTriggerRetry;
            if ("pageReady" === l || "flyoutProximityLarge" === l) {
                var p = "https://" + k.location.hostname + "/empty.gif"
                  , h = 0;
                d = b.after(m + 1, !0).on(function() {
                    (new Image).src = p + "?" + c();
                    h++;
                    f({
                        t: "ssl",
                        id: h + "-" + l
                    })
                });
                var q = m ? b.debounce(45E3, !0).on(d) : b.once().on(d);
                "pageReady" === l && e.when("btf.full").run("NavbarSSLPageReadyTrigger", function() {
                    if (m) {
                        var a = m
                          , b = function() {
                            q();
                            0 < a && (a--,
                            setTimeout(function() {
                                b()
                            }, 45100))
                        };
                        b()
                    } else
                        q()
                });
                if ("flyoutProximityLarge" === l)
                    var n = g.onEnter(a("#navbar"), [0, 0, 250, 0], function() {
                        n.unbind();
                        q()
                    }, m ? 45E3 : 0)
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "metrics", "page.domReady").run("upnavMetrics", function(a, b) {
            var d = a("#nav-upnav");
            if (0 !== d.length) {
                a = d.find("a");
                d = d.find("map area");
                var c = a.length
                  , f = d.length;
                if (0 !== c || 0 !== f)
                    if (a = 0 < c ? a.attr("href") : d.attr("href"))
                        a = a.split("/"),
                        1 < a.length && ((a = a[a.length - 1].split("?")[0].split("\x3d")) && 1 < a.length && "ref" === a[0] ? b.increment("upnav-" + a[1] + "-show") : b.increment("upnav show"))
            }
        });
        e.when("$", "config.upnavAiryVideoPlayerAlignment", "page.domReady", "Airy.PlayerReady").run("upnavAiryVideoAlignment", function(a, b) {
            if (b) {
                var d = a("#nav-airy-player-container .airy-renderer-container");
                if (0 !== d.length) {
                    var c = a(".nav-airy-widget-wrapper")
                      , f = function() {
                        var a = c.width() / 2
                          , b = d.width() / 2;
                        d.css("left", Math.floor(a - b))
                    };
                    a(k).resize(function() {
                        f()
                    });
                    f()
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "util.ajax", "metrics", "config").run("upnavSuppressionJS", function(a, b, d, c) {
            function f() {
                var a = Date.now();
                k.ue_t0 && d.count("Nav:Upnav:Suppress:ClickTime", Math.floor((a - k.ue_t0) / 1E3));
                d.increment("Nav:Upnav:Suppression:Click");
                b({
                    retryMetric: "nav-upnav-suppression-ajax-retry",
                    errorMetric: "nav-upnav-suppression-ajax-error",
                    url: "/gp/navigation/ajax/generic.html",
                    dataType: "html",
                    data: {
                        ajaxTemplate: "upnavSuppression"
                    },
                    error: function(a, b, c) {
                        var d = {
                            attribution: "AmazonNavigationCards",
                            logLevel: "ERROR"
                        };
                        a = " Upnav Suppression AJAX Call failed. Status Code : " + a.status + " Status text : " + b + " Exception : " + c;
                        k.ueLogError && (d.message = a,
                        k.ueLogError(d))
                    },
                    success: function(b) {
                        d.increment("Nav:Upnav:Suppression:Success");
                        a && d.count("Nav:Upnav:Suppress:TotalTime", Math.floor((Date.now() - a) / 1E3))
                    }
                })
            }
            c = a("#nav-upnav-close");
            var e = a("#nav-upnav");
            c.click(function() {
                f();
                e.hide()
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "config").iff({
            name: "config",
            prop: "newTabClick"
        }).run("newTabClick", function(a, b, d) {
            var c = d.newTabClick.targetUrlPatterns;
            if (c && 0 !== c.length) {
                for (b = 0; b < c.length; b++)
                    c[b] = new RegExp(c[b]);
                var f = document.location.href.split(/#/)[0];
                a(document).click(function(b) {
                    var d = b.target || b.srcElement;
                    if (!b.which || 1 === b.which)
                        if (d = a(d).parents("a:first, area:first").andSelf().filter("a:first, area:first").eq(0),
                        0 !== d.length) {
                            b = d.attr("href");
                            var e;
                            (e = 0 !== (d.attr("target") || "").length || !b || b.match(/^javascript:/i)) || (e = b.split(/#/)[0],
                            e = 0 <= f.indexOf(e) ? 1 : 0);
                            if (!(e = e || d.parents("#navbar").length)) {
                                a: {
                                    b = b.split("?")[0];
                                    for (e = 0; e < c.length; e++)
                                        if (b.match(c[e])) {
                                            b = 1;
                                            break a
                                        }
                                    b = 0
                                }
                                e = !b
                            }
                            e || d.attr("target", "_blank")
                        }
                })
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "data", "flyouts.create", "flyouts.anchor", "util.Aligner", "config.transientFlyoutTrigger").iff({
            name: "config",
            prop: "transientFlyoutTrigger"
        }).run("flyout.transient", function(a, b, d, c, f, e, l) {
            var g = a("#navbar")
              , k = a(l)
              , h = function() {
                var a = k.offset().left
                  , b = a + k.innerWidth();
                a = (a + b) / 2;
                q.elem().find(".nav-arrow").css({
                    position: "absolute",
                    left: a - q.elem().offset().left
                });
                q.align()
            }
              , q = c({
                key: "transientFlyout",
                link: k,
                arrow: "top",
                aligner: function(a) {
                    var b = new e({
                        base: a.$link,
                        target: a.$flyout,
                        from: "bottom right",
                        to: "top center",
                        anchor: "top",
                        alignTo: f(),
                        constrainTo: g,
                        constrainBuffer: [3, 0, 0, 3],
                        constrainChecks: [!0, !1, !1, !0],
                        offsetTo: g
                    });
                    return function() {
                        b.align()
                    }
                }
            });
            q.onRender(b.once().on(function() {
                d.observe("transientFlyoutContent", function() {
                    h()
                })
            }));
            q.onShow(function() {
                h()
            });
            return q
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "agent", "flyouts", "config", "constants", "metrics", "flyout.yourAccount", "nav.inline").build("pinnedNav", function(a, b, d, c, f, e, l, m) {
            if (f.pinnedNav) {
                var g = !1, h = !1, q = "nav-pinned", n, u, w, r, t, v = 700, x, A, y, D, B, C, z, E;
                f.pinnedNavStart && (v = f.pinnedNavStart);
                if (f.iPadTablet)
                    var F = f.iPadTablet;
                f.pinnedNavWithEWC && (q = "nav-pinned nav-pinned-ewc");
                var H = b.once().on(function() {
                    n = a(k);
                    u = a("#navbar");
                    y = a("#nav-belt");
                    a("#nav-main");
                    r = a("#nav-subnav");
                    w = a("#nav-tools");
                    A = a("#nav-shop");
                    D = a("#nav-search");
                    B = a("#nav-logo");
                    x = "\x3cdiv class\x3d'nav-divider'\x3e\x3c/div\x3e";
                    t = "\x3cdiv id\x3d'nav-sbd-pinned'\x3e\x3cspan class\x3d'nav-line1'\x3e\x3c/span\x3e\x3cspan class\x3d'nav-line2'\x3e\x3c/span\x3e\x3cspan class\x3d'nav-line3'\x3e\x3c/span\x3e\x3c/div\x3e";
                    C = a(".nav-search-field \x3e input");
                    z = a("#searchDropdownBox");
                    E = c.get("cart") || N
                })
                  , J = function() {
                    var b = "Search" === f.pageType;
                    (!b && 0 < r.children().length || b && 0 === r.find(".nav-category-button").length) && r.show();
                    u.removeClass(q);
                    y.css("width", "100%");
                    a("div", A).remove("#nav-sbd-pinned");
                    a("div", w).remove(".nav-divider");
                    F && (C.unbind("focus"),
                    z.unbind("click"));
                    a("#navbar").hasClass("layout3") || a("#nav-belt \x3e .nav-left").css({
                        width: a("#nav-logo").outerWidth()
                    });
                    m.unlock();
                    E.unlock();
                    h = !1
                }
                  , G = function() {
                    F && ("twotabsearchtextbox" === document.activeElement.id && C.blur(),
                    C.bind("focus", function(a) {
                        n.scrollTop(0, 0)
                    }),
                    z.bind("click", function(a) {
                        n.scrollTop(0, 0);
                        z.blur()
                    }));
                    r.hide();
                    u.addClass(q);
                    y.css("width", K());
                    u.css({
                        top: "-55px"
                    });
                    B.css({
                        top: "-55px"
                    });
                    D.css({
                        top: "-55px"
                    });
                    u.animate({
                        top: "0"
                    }, 300);
                    D.animate({
                        top: "0"
                    }, 300);
                    B.animate({
                        top: "0"
                    }, 300);
                    a("a", A).append(t);
                    a(x).insertBefore("#nav-cart");
                    m.lock();
                    if (E.isVisible())
                        E.onHide(b.once().on(function() {
                            E.isVisible() || E.isLocked() || !h || E.lock()
                        }));
                    else
                        E.lock();
                    h = !0;
                    a("#nav-search, #nav-link-yourAccount, #nav-cart").click(function() {
                        var b = a(this).attr("id");
                        l.increment("nav-pinned-" + b + "-clicked")
                    });
                    a("#nav-link-shopall").hover(function() {
                        var b = a(this).attr("id");
                        l.increment("nav-pinned-" + b + "-hovered")
                    }, function() {})
                }
                  , N = {
                    lock: b.noOp,
                    unlock: b.noOp,
                    isVisible: b.noOp,
                    onHide: b.noOp
                }
                  , M = function() {
                    var b = a("#nav-flyout-ewc");
                    0 < b.length ? "0px" !== b.css("right") && c.hideAll() : c.hideAll()
                }
                  , K = function() {
                    var a = w.width()
                      , b = A.width();
                    return n.width() - a - b + e.PINNED_NAV_SEARCH_SPACING
                }
                  , L = function() {
                    var a = n.scrollTop();
                    h && a < v ? (M(),
                    J()) : !h && a >= v && (M(),
                    G())
                };
                return {
                    enable: function() {
                        g || d.ie6 || d.quirks || (H(),
                        n.bind("scroll.navFixed", L),
                        n.resize(b.throttle(300).on(function() {
                            u.hasClass(q) && y.css("width", K())
                        })),
                        L(),
                        g = !0)
                    },
                    disable: function() {
                        g && (n.unbind("scroll.navFixed"),
                        J(),
                        g = !1)
                    }
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("page.loaded", "$").run("registerMoment", function(a, b) {
            document.getElementById("countdown") && b.getScript("https://images-na.ssl-images-amazon.com/images/G/01/poppin/JavaScript/moment.min._TTD_.js", function() {
                b.getScript("https://images-na.ssl-images-amazon.com/images/G/01/poppin/JavaScript/moment-timezone-with-data.min._TTD_.js", function() {
                    e.declare("moment", k.moment)
                })
            })
        });
        e.when("page.loaded", "moment").run("countdowntimer", function(a, b) {
            var d = {
                log: function(a) {},
                warn: function(a) {}
            }
              , c = document.getElementById("countdown");
            a = c.getAttribute("data-server-time-str");
            var f = c.getAttribute("data-timer-start-at")
              , e = c.getAttribute("data-live-start-at")
              , l = c.getAttribute("data-live-end-at")
              , k = c.getAttribute("data-live-days")
              , p = c.getAttribute("data-standby-text")
              , h = c.getAttribute("data-countdown-text-prefix");
            c = c.getAttribute("data-live-text");
            (function(a, c, f, e, g, h, l, k) {
                var m = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
                  , n = new Date(a);
                d.log("[poppinCountDown] loadServerTime: " + n);
                var p = new Date
                  , q = function(a, c) {
                    var d = a.split(" ")
                      , f = d[0].split(":");
                    a = n.getFullYear();
                    var e = parseInt(n.getMonth(), 10) + 1
                      , g = n.getDate()
                      , h = "pm" === d[1].toLowerCase() ? parseInt(f[0], 10) % 12 + 12 : parseInt(f[0], 10) % 12;
                    f = f[1];
                    d = d[2];
                    var l = b.tz("" + a + "-01-01T12:00:00", "America/Los_Angeles").format("Z");
                    e = b.tz("" + a + "-" + (10 > e ? "0" : "") + e + "-" + (10 > g ? "0" : "") + g + "T12:00:00", "America/Los_Angeles").format("Z");
                    d = l !== e ? d[0] + "D" + d[1] : d[0] + "S" + d[1];
                    for (a = new Date("" + m[parseInt(n.getMonth(), 10)] + " " + g + " " + a + " " + h + ":" + f + ":0 " + d); c && a.getTime() <= c.getTime(); )
                        a = new Date(a.getTime() + 864E5);
                    return a
                };
                a = q(c);
                var r = q(f, a);
                q = q(e, r);
                d.log("[csTimeStrTimerStartAt] csTimeStrTimerStartAt: " + c);
                d.log("[countdownStart] countdownStart: " + a);
                d.log("[csTimeStrLiveStartAt] csTimeStrLiveStartAt: " + f);
                d.log("[liveStart] liveStart: " + r);
                d.log("[csTimeStrLiveEndAt] csTimeStrLiveEndAt: " + e);
                d.log("[liveEnd] liveEnd: " + q);
                var t = a.getTime()
                  , u = r.getTime()
                  , w = q.getTime()
                  , v = function() {
                    var a = function(a) {
                        document.getElementById("countdown-text").innerHTML = a
                    }
                      , b = function(a) {
                        document.getElementById("countdown-timer").innerHTML = a
                    }
                      , c = (new Date).getTime() - p.getTime()
                      , d = function(a) {
                        a = "UMTWRFS".charAt(a.getDay());
                        var b;
                        for (b = 0; b < g.length; b++)
                            if (g.charAt(b) === a)
                                return !0;
                        return !1
                    }
                      , f = new Date(n.getTime() + c);
                    c = f.getTime();
                    if (c < t || g && !d(f))
                        setTimeout(v, t - c),
                        a(h),
                        b("");
                    else if (c < u) {
                        d = Math.round((u - c) / 1E3);
                        f = Math.floor(d / 3600);
                        var e = Math.floor(d % 3600 / 60);
                        e = 10 > e ? "0" + e : e;
                        d %= 60;
                        d = 10 > d ? "0" + d : d;
                        a(l);
                        b(" " + f + ":" + e + ":" + d);
                        setTimeout(v, 1E3 * (Math.floor((c - t) / 1E3) + 1) - (c - t))
                    } else
                        c < w ? (setTimeout(v, w - c),
                        a(k)) : a(h),
                        b("")
                };
                v()
            }
            )(a, f, e, l, k, p, h, c)
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config", "flyout.yourAccount", "flyout.amazonprime", "flyout.wishlist", "nav.inline").run("primeDayNav", function(a, b, d, c, f) {
            b.primeDay && (c.lock(),
            f.lock())
        })
    }
    )(k.$Nav);
    (function(e, a) {
        "object" === typeof k.P && "function" === typeof k.P.when && "function" === typeof k.P.register && "function" === typeof k.P.execute && (a.when("A", "a-modal", "packardGlowIngressJsEnabled", "packardGlowStoreName", "navDesktopAssetsGlowWidgetConstants").execute("GLOWWidget", function(a, d, c, f, e) {
            function b(a) {
                k.ue && "function" === typeof k.ue.count && k.ue.count(a, (k.ue.count(a) || 0) + 1)
            }
            if (c) {
                var g = a.$;
                a.on("packard:glow:destinationChangeNav", function() {
                    g.ajax({
                        type: "GET",
                        url: "/portal-migration/hz/glow/get-location-label",
                        data: {
                            storeContext: f,
                            pageType: k.ue_pty ? k.ue_pty : "NoPageType",
                            actionSource: "desktop-modal"
                        },
                        success: function(c) {
                            a: {
                                var h = c;
                                try {
                                    c = h && "object" === typeof h ? h : k.JSON.parse(h);
                                    break a
                                } catch (q) {
                                    b("GLOW:parse-glow-label-response:failure")
                                }
                                c = h
                            }
                            c.deliveryLine1 && g("#glow-ingress-line1").html(c.deliveryLine1);
                            c.deliveryLine2 && g("#glow-ingress-line2").html(c.deliveryLine2);
                            c.deliveryShortLine && (g("#nav-packard-delivery").html(c.deliveryShortLine),
                            c.customerIntent && "REALM_DEFAULT" !== c.customerIntent.locationType && g("#nav-packard-glow-fy-header").removeClass("aok-hidden"));
                            c.selectedDestination && (c.selectedDestination.destinationObfuscatedAddressId && g("#unifiedLocation1ClickAddress").val(c.selectedDestination.destinationObfuscatedAddressId),
                            c.selectedDestination.destinationType && c.selectedDestination.destinationValue && (h = d.get("glow-modal")) && h.attrs("url", e.ADDRESS_SELECTIONS_ENDPOINT + "?selectedLocationType\x3d" + c.selectedDestination.destinationType + "\x26selectedLocationValue\x3d" + c.selectedDestination.destinationValue + "\x26deviceType\x3ddesktop\x26pageType\x3d" + (k.ue_pty ? k.ue_pty : "NoPageType") + "\x26storeContext\x3d" + f + "\x26actionSource\x3ddesktop-modal"));
                            a.trigger("packard:glow:destinationChangeNavAck")
                        }
                    })
                });
                a.on("a:popover:beforeShow:glow-modal", function() {
                    "function" === typeof k.uet && k.uet("bb", "glow-modal-api-timer:desktop", {
                        wb: 1
                    })
                });
                a.on("a:popover:ajaxContentLoaded:glow-modal", function() {
                    "function" === typeof k.uex && k.uex("ld", "glow-modal-api-timer:desktop", {
                        wb: 1
                    })
                });
                a.on("a:popover:ajaxSuccess:glow-modal", function() {
                    b("GLOW:fetch-modal:DESKTOP:success")
                });
                a.on("a:popover:ajaxFail:glow-modal", function() {
                    b("GLOW:fetch-modal:DESKTOP:failure")
                });
                g("#nav-packard-glow-fy").click(function() {
                    g("#nav-global-location-slot").click()
                })
            }
        }),
        e.when("$", "nav.createTooltip", "config", "util.session", "metrics", "util.ajax", "page.domReady").iff({
            name: "config",
            prop: "packardGlowTooltip"
        }).run("packardGlowTooltip", function(a, d, c, f, e, l) {
            var b = f.get("nav-packard-tt")
              , g = (new Date).getDate()
              , h = !0
              , k = 0;
            b && (h = g >= b.date + 3,
            k = b.count);
            if (!b || 3 > k && h)
                f.set("nav-packard-tt", {
                    count: k + 1,
                    date: g
                }),
                l({
                    url: c.dynamicMenuUrl,
                    data: {
                        packardContent: "packardGlowFlyout",
                        pageType: c.pageType,
                        subPageType: c.subPageType
                    },
                    error: function() {
                        e.increment("nav-tooltip-packard-errorCount")
                    },
                    success: function(b) {
                        if (b && b.packardContent.html) {
                            var f = d({
                                content: a("\x3cdiv\x3e\x3c/div\x3e").html(b.packardContent.html),
                                name: "packardTT",
                                className: "nav-packard-tt",
                                timeout: 7E3,
                                cover: !1,
                                align: {
                                    base: a("#nav-packard-glow-fy"),
                                    from: "bottom center",
                                    to: "top center",
                                    constrainTo: a("#navbar"),
                                    constrainBuffer: [3, 3, 0, 0],
                                    constrainChecks: [!0, !0, !1, !0]
                                },
                                arrow: "top",
                                clickCallback: function() {
                                    f.hide();
                                    a("#nav-packard-glow-fy").trigger("mouseover")
                                }
                            });
                            f.fadeIn();
                            e.increment("nav-tooltip-packard-show");
                            c.pageType && e.increment("nav-tooltip-packard-" + c.pageType.toLowerCase() + "-show")
                        }
                    }
                })
        }))
    }
    )(k.$Nav, I);
    (function(e) {
        e.when("$", "$F", "flyouts.create", "config").run("flyout.packardGlow", function(a, b, d, c) {
            if (c.packardGlowFlyout)
                return a = a("#nav-packard-glow-fy"),
                d({
                    key: "packard",
                    className: "nav-coreFlyout",
                    link: a,
                    cover: !0,
                    clickThrough: !1,
                    arrow: "top",
                    event: "packard"
                })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "agent", "flyouts", "config.fixedBarBeacon", "nav.inline").build("fixedSubBar", function(a, b, d, c, f) {
            var e = !1, l = !1, m, p, h, q, n, u = b.once().on(function() {
                m = a(k);
                p = a("#navbar");
                h = a("#nav-main");
                n = a("#nav-subnav");
                q = a("\x3cdiv\x3e\x3c/div\x3e").css({
                    position: "relative",
                    display: "none",
                    width: "100%",
                    height: n.height() + "px"
                }).insertBefore(n)
            }), w = function() {
                p.removeClass("subnav-fixed");
                n.css({
                    top: 0
                });
                q.hide();
                l = !1
            }, r = function() {
                var a = m.scrollTop();
                c.hideAll();
                f && (a += h.height());
                l && q.offset().top >= a ? w() : !l && n.offset().top < a && (p.addClass("subnav-fixed"),
                a = f ? h.height() : 0,
                n.css({
                    top: a
                }),
                q.show(),
                l = !0)
            };
            return {
                enable: function() {
                    e || d.ie6 || d.quirks || (u(),
                    m.bind("scroll.navFixed", r),
                    r(),
                    e = !0)
                },
                disable: function() {
                    e && (m.unbind("scroll.navFixed"),
                    w(),
                    e = !1)
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "agent", "flyouts", "config.stickySubnavConfig", "nav.inline").build("stickySubNav", function(a, b, d, c) {
            var e = !1, g = !1, l, m, p, h, q = b.once().on(function() {
                l = a(k);
                m = a("#navbar");
                h = a("#nav-subnav");
                p = a("\x3cdiv\x3e\x3c/div\x3e").css({
                    position: "relative",
                    display: "none",
                    width: "100%",
                    height: h.height() + "px"
                }).insertBefore(h)
            }), n = function() {
                m.removeClass("subnav-sticky");
                h.css({
                    top: 0
                });
                p.hide();
                g = !1
            }, u = function() {
                var a = l.scrollTop();
                c.hideAll();
                g && p.offset().top >= a ? n() : !g && h.offset().top < a && (m.addClass("subnav-sticky"),
                h.css({
                    top: 0
                }),
                h.css({
                    width: m.width()
                }),
                p.show(),
                g = !0)
            };
            return {
                enable: function() {
                    e || d.ie6 || d.quirks || (q(),
                    l.bind("scroll.navFixed", u),
                    u(),
                    e = !0)
                },
                disable: function() {
                    e && (l.unbind("scroll.navFixed"),
                    n(),
                    e = !1)
                },
                setWidth: function() {
                    m = a("#navbar");
                    h = a("#nav-subnav");
                    h.css({
                        width: m.width()
                    })
                }
            }
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "config").run("genzXshopAlign", function(a, b) {
            function d() {
                for (var b = a("#nav-xshop").children("a"), d = b.get(0).offsetTop, e = b.length - 1; 0 < e; e--)
                    b.get(e).offsetTop > d && a(b.get(e)).addClass("nav-a-removed")
            }
            b.genz && (a(k).resize(function() {
                for (var b = a("#nav-xshop").children("a"), e = 0; e < b.length; e++)
                    a(b.get(e)).removeClass("nav-a-removed");
                d()
            }),
            a(document).ready(function() {
                d();
                for (var b = a("#nav-xshop").children("a"), e = 0; e < b.length; e++)
                    a(b.get(e)).removeClass("nav-a-hidden")
            }))
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("util.ajax", "config").build("util.ajaxReftagLogger", function(a, b) {
            return function(b) {
                var c = {
                    attribution: "AmazonNavigationCards",
                    logLevel: "ERROR"
                };
                b = ["hitType\x3dpageTouch", "pageType\x3d" + (k.ue_pty ? k.ue_pty : "NavUnknownPageType"), "ref_\x3d" + b].join("\x26");
                return a({
                    type: "POST",
                    url: "/acp/navigation/v1/ajax-reftag-logger/track?" + b,
                    headers: {
                        "x-amz-acp-params": "ajax-reftag-logger"
                    },
                    retryMetric: "nav-ajax-reftag-logger-retry",
                    errorMetric: "nav-ajax-reftag-logger-error",
                    error: function(a, b, d) {
                        a = " Reftag logger AJAX Call failed. Status Code : " + a.status + " Status text : " + b + " Exception : " + d;
                        k.ueLogError && k.ueLogError(a, c)
                    }
                })
            }
        })
    }
    )(k.$Nav);
    (function(e, a) {
        e.when("$", "HamburgerMenuFirstLayerAJAXCall", "SignInRedirect", "metrics").run("HamburgerMenuFirstLayerAJAXCallDesktop", function(a, d, c, f) {
            var b = function() {
                var b = a("#hmenu-customer-profile-link");
                c.setRedirectUrl(a(b), null, null);
                !0 === e.getNow("navHMenuIconClicked") && (f.increment("Nav:Hmenu:HMenuIconClickDelayedComplete"),
                setTimeout(function() {
                    a("#nav-hamburger-menu").click()
                }, 50))
            };
            return function() {
                d("desktop", b)
            }
        })
    }
    )(k.$Nav, I);
    (function(e, a) {
        e.when("jQuery", "hamburgerMenuIconAvailableOnLoad", "config", "HamburgerMenuFirstLayerAJAXCallDesktop", "util.Proximity", "agent").run("HamburgerMenuAJAXCall", function(a, d, c, e, g, l) {
            var b = "rtl" === a("body").css("direction")
              , f = function() {
                g.onEnter(a("#nav-hamburger-menu"), c.HmenuProximityArea, function() {
                    e()
                }, !1, c.fixedBarBeacon || b)
            };
            c.isTabletBrowser || l.touch || !c.HMenuIsProximity ? d ? k.onload = hamburgerAjaxCall : e() : f()
        })
    }
    )(k.$Nav, I);
    (function(e) {
        e.when("$", "metrics").run("searchDropdownMetrics", function(a, b) {
            a(".nav-search-dropdown").change(function() {
                b.increment("Nav:SearchDropdown:Change")
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "metrics").run("accessibilityNav", function(a, b) {
            document.body.addEventListener("keydown", function() {
                a("#navbar").removeClass("using-mouse")
            });
            document.body.addEventListener("mousedown", function() {
                a("#navbar").addClass("using-mouse")
            });
            a("#skiplink").focus(function() {
                b.increment("Nav:SkipLink:SkipLinkShow")
            });
            a("#skiplink").blur(function() {
                b.increment("Nav:SkipLink:SkipLinkAbandon")
            });
            a("#skiplink").keyup(function(b) {
                13 === b.keyCode && a("#skiplink").click()
            });
            a("#skiplink").click(function() {
                var a = document.getElementById("skippedLink");
                a.scrollIntoView(!0);
                a.focus();
                b.increment("Nav:SkipLink:SkipLinkClick")
            })
        })
    }
    )(k.$Nav);
    (function(e) {
        e.when("$", "$F", "flyouts.create", "config", "flyouts.accessibility").run("flyout.health", function(a, b, d, c, e) {
            var f = a("#nav_link_allhealthingress")
              , k = d({
                key: "health",
                link: f,
                cover: !0,
                clickThrough: !0,
                sidePanel: !0,
                event: "health",
                arrow: "top",
                animateDown: c.flyoutAnimation
            })
              , m = e({
                link: f,
                onEscape: function() {
                    k.hide();
                    f.focus()
                }
            });
            k.getPanel().onRender(b.once().on(function() {
                m.elems(a(".nav-hasPanel, a", k.elem()));
                k.align()
            }));
            k.onShow(b.once().on(function() {
                m.elems(a(".nav-hasPanel, a", k.elem()))
            }));
            return k
        })
    }
    )(k.$Nav)
});
/* ******** */
(function(a) {
    var c = window.AmazonUIPageJS || window.P
      , d = c._namespace || c.attributeErrors
      , b = d ? d("SearchAutocompleteConfig", "") : c;
    b.guardFatal ? b.guardFatal(a)(b, window) : b.execute(function() {
        a(b, window)
    })
}
)(function(a, c, d) {
    a.register("autocomplete-endpoints", function() {
        return {
            completion: "completion.amazon.com"
        }
    });
    "use strict";
    a.register("autocomplete-config", function() {
        return {
            endpoints: {
                completion: "completion.amazon.com"
            },
            marketplaceId: "ATVPDKIKX0DER"
        }
    })
});
/* ******** */
(function(b) {
    var c = window.AmazonUIPageJS || window.P
      , d = c._namespace || c.attributeErrors
      , a = d ? d("SearchAutocompleteStrings", "") : c;
    a.guardFatal ? a.guardFatal(b)(a, window) : a.execute(function() {
        b(a, window)
    })
}
)(function(b, c, d) {
    b.register("autocomplete-translations-localizedStrings", function() {
        return {
            crossCategoryString: "${query} in ${category}",
            filterByString: "filter ${keyword} by ${refinement}"
        }
    })
});
/* ******** */
(function(b) {
    var c = window.AmazonUIPageJS || window.P
      , d = c._namespace || c.attributeErrors
      , a = d ? d("SearchAutocompleteFosAssets", "") : c;
    a.guardFatal ? a.guardFatal(b)(a, window) : a.execute(function() {
        b(a, window)
    })
}
)(function(b, c, d) {
    b.when("sx.iss.FOSContext").execute("sx.iss.FOSPrefetch", function(a) {
        a.prefetch()
    });
    "use strict";
    "use strict";
    b.when("A", "3p-promise").register("sx.iss.FOSContext", function(a, b) {
        return {
            prefetch: function() {},
            renderAsync: function() {
                return b.resolve({})
            }
        }
    })
});
/* ******** */
(function(Q) {
    var n = window.AmazonUIPageJS || window.P
      , k = n._namespace || n.attributeErrors
      , J = k ? k("RetailSearchAutocompleteAssets", "") : n;
    J.guardFatal ? J.guardFatal(Q)(J, window) : J.execute(function() {
        Q(J, window)
    })
}
)(function(Q, n, k) {
    n.$Nav.when("$", "nav.inline").run(function(k) {
        n.$Nav.declare("config.blackbelt", 0 < k("#nav-belt").length)
    });
    n.$Nav.when("config.blackbelt").run(function(k) {
        k ? n.$Nav.when("searchApi").run(function(k) {
            n.$Nav.declare("sxSearchApi", k)
        }) : n.$Nav.declare("sxSearchApi")
    });
    n.$Nav.when("$", "sxSearchApi", "sx.iss.AttributionUtil").build("NavDomApi", function(t, q, A) {
        function y() {
            if (N)
                return B().find('input[type\x3d"text"]');
            "undefined" === typeof L && (L = t(I.searchBox));
            return L
        }
        function G() {
            if (N)
                return q.flyout.elem();
            "undefined" === typeof O && (O = t(a),
            B().after(O));
            return O
        }
        function w() {
            if (N)
                return q.options().parents("select");
            "undefined" === typeof R && (R = t(I.aliasDropdown));
            return R
        }
        function C() {
            N ? q.flyout.hide() : G().hide()
        }
        function B() {
            return N ? q.options().parents("form") : t(I.form)
        }
        function E(a) {
            if (!a)
                return w().find("option:selected");
            a = w().find('option[value$\x3d"search-alias\x3d' + a + '"]');
            return 0 < a.length ? t(a[0]) : t()
        }
        function J() {
            return y().get(0) === document.activeElement
        }
        function T() {
            var a = S()
              , b = G();
            !G().is(":visible") || 1 > b.html().length || b.css({
                left: a.offset().left,
                width: a.width()
            })
        }
        function S() {
            d === k && (d = t("#nav-iss-attach"));
            return d
        }
        var N = q !== k, I = {
            searchBox: "#twotabsearchtextbox",
            searchSuggestions: "#srch_sggst",
            navBar: "#navbar",
            aliasDropdown: "#searchDropdownBox",
            dropdownId: "search-dropdown",
            form: "#nav-search-bar-form",
            issPrefixEl: "#issprefix",
            issFieldRestriction: "#issFieldRestriction",
            browseNodeId: "#issBrowseNodeId",
            issCridEl: "#isscrid",
            suggestion: ".s-suggestion"
        }, L, M, O, R, d, a = '\x3cdiv id\x3d"' + I.dropdownId + '" class\x3d"search-dropdown"\x3e\x3c/div\x3e', b = /search-alias\s*=\s*([\w-]+)/, g = /^\s+/;
        q === k && t(n).resize(T);
        return {
            setAttribution: function(a, b, m) {
                A.setRefTag(B(), a);
                A.setCompletionResponseId(B(), b);
                A.setPrefix(B(), m)
            },
            getAliasDropdown: w,
            getSearchBox: y,
            setRefTag: function(a) {
                A.setRefTag(B(), a)
            },
            getSearchInput: function() {
                return y()[0]
            },
            getSearchBoxId: function() {
                return I.searchBox
            },
            getSearchSuggestions: function() {
                "undefined" === typeof M && (M = t(I.searchSuggestions));
                return M
            },
            getKeyword: function() {
                var a = (q !== k ? q : y()).val();
                return a ? a.replace(g, "") : a
            },
            getCursorPosition: function() {
                var a = y();
                return a ? a[0].selectionStart || (a.val() ? a.val().length : 0) : 0
            },
            setKeyword: function(a) {
                if (q !== k)
                    q.val(a);
                else
                    return y().val(a)
            },
            getAliasFromDropdown: function() {
                var a = w().val();
                return (a = a && a.match(b)) ? a[1] : k
            },
            setAlias: function(a, b, m) {
                var c = E(a)
                  , f = w()
                  , l = void 0;
                0 !== c.length ? l = c.val() : m && b && a && (b = m({
                    value: a,
                    display: b
                }),
                f.append(b),
                l = "search-alias\x3d" + a);
                l && f.val(l).trigger("change")
            },
            getCategoryNameFromDropdown: function(a) {
                var b = "";
                a ? (a = w().find('option[value$\x3d"search-alias\x3d' + a + '"]'),
                b = 0 < a.length ? t(a[0]).text() : b) : b = w().find("option:selected").text();
                return t.trim(b)
            },
            getDropdown: G,
            showDropdown: function(a) {
                J() && (N ? ("undefined" !== typeof a && q.flyout.elem().html(a),
                q.flyout.show()) : ("undefined" !== typeof a && G().hide().html(a),
                a = S(),
                G().css({
                    left: a.offset().left,
                    width: a.width()
                }).show()))
            },
            hideDropdown: C,
            getOption: E,
            getForm: B,
            getIssPrefixElem: function() {
                return t(I.issPrefixEl)
            },
            getIssFieldRestrictionElem: function() {
                return t(I.issFieldRestriction)
            },
            getIssBrowseNodeIdElem: function() {
                return t(I.browseNodeId)
            },
            getIssCridElem: function() {
                return t(I.issCridEl)
            },
            getSuggestions: function() {
                return t(I.suggestion)
            },
            submitForm: function() {
                B().submit()
            },
            getOriginalSearchTerm: function() {
                return B().data("originalSearchTerm")
            },
            getOriginalAlias: function() {
                return B().data("originalAlias")
            },
            isSearchBoxFocused: J,
            activateSearchBox: function() {
                B().addClass("nav-active")
            },
            deactivateSearchBox: function() {
                B().removeClass("nav-active")
            },
            getSearchApi: function() {
                return q
            },
            blurAutocomplete: function() {
                C();
                y()[0].blur()
            },
            getSelectedSearchDropdownUrl: function() {
                return w().val() || k
            },
            setSelectedSearchDropdownUrl: function(a) {
                w().has("option[value\x3d'" + a + "']").val(a).trigger("change")
            }
        }
    });
    "use strict";
    n.$Nav.when("$", "NavDomApi").build("sx.iss.PublicApi", function(n, q) {
        function t(k) {
            q.getSearchBox().focus(k)
        }
        function y(n) {
            n === k ? q.getSearchBox().blur() : q.getSearchBox().blur(n)
        }
        var G = /node\s*=\s*([\d]+)/
          , w = /bbn\s*=\s*([\d]+)/
          , C = /^me=([0-9A-Z]*)/
          , B = /^\s+/
          , E = /\s+/g
          , J = /gp\/help\/customer\/display\.html/;
        return {
            searchAlias: function() {
                return q.getAliasFromDropdown()
            },
            searchNode: function() {
                var k = q.getAliasDropdown().val().match(G);
                return k ? k[1] : null
            },
            bbn: function() {
                var k = q.getAliasDropdown().val().match(w);
                return k ? k[1] : null
            },
            merchant: function() {
                var k = q.getAliasDropdown().val().match(C);
                return k ? k[1] : null
            },
            encoding: function() {
                var k = q.getForm().find('input[name^\x3d"__mk_"]');
                if (k.length)
                    return [k.attr("name"), k.val()]
            },
            keyword: function(n) {
                return n !== k ? q.setKeyword(n) : q.getKeyword().replace(B, "").replace(E, " ")
            },
            submit: function(k) {
                var n = q.getForm();
                n.submit(function(q) {
                    if (!(n && n[0] && n[0].action && n[0].action.match(J)))
                        return console.log("Attaching the submit event handler to the form..."),
                        k.call(this, q)
                })
            },
            onFocus: t,
            onBlur: y,
            focus: t,
            blur: y,
            keydown: function(k) {
                var n = "#" + q.getSearchBox().attr("id");
                q.getForm().delegate(n, "keydown", k)
            },
            keyup: function(k) {
                var n = "#" + q.getSearchBox().attr("id");
                q.getForm().delegate(n, "keyup", k)
            },
            setupFastLab: function(k) {
                console.log("Weblabs are no longer triggered in the front end. Fastlab", k)
            }
        }
    });
    "use strict";
    n.$Nav.importEvent("jQuery", {
        as: "$",
        global: "jQuery"
    });
    n.$Nav.importEvent("sx.iss.FOSContext");
    n.$Nav.when("$", "sx.iss.IssParentCoordinator", "sx.iss.PublicApi").build("sx.iss", function(k, n, A) {
        n = {
            IssParentCoordinator: n,
            isNewIss: !0
        };
        k.extend(n, n, A);
        return n
    });
    n.$Nav.when("sx.iss").run(function(k) {
        n.$Nav.publish("sx.iss", k);
        n.$Nav.publish("search-js-autocomplete", k)
    });
    "use strict";
    n.$Nav.build("sx.iss.Platform", function() {
        return {
            name: "desktop",
            cid: "amazon-search-ui",
            maxSuggestions: 11
        }
    });
    "use strict";
    n.$Nav.build("sx.iss.Defaults", function() {
        return {}
    });
    "use strict";
    var J = function() {
        return function(n, q) {
            if (Array.isArray(n))
                return n;
            if (Symbol.iterator in Object(n)) {
                var t = []
                  , y = !0
                  , G = !1
                  , w = k;
                try {
                    for (var C = n[Symbol.iterator](), B; !(y = (B = C.next()).done) && (t.push(B.value),
                    !q || t.length !== q); y = !0)
                        ;
                } catch (X) {
                    G = !0,
                    w = X
                } finally {
                    try {
                        if (!y && C["return"])
                            C["return"]()
                    } finally {
                        if (G)
                            throw w;
                    }
                }
                return t
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    }()
      , Y = function() {
        function k(k, n) {
            for (var q = 0; q < n.length; q++) {
                var t = n[q];
                t.enumerable = t.enumerable || !1;
                t.configurable = !0;
                "value"in t && (t.writable = !0);
                Object.defineProperty(k, t.key, t)
            }
        }
        return function(n, t, y) {
            t && k(n.prototype, t);
            y && k(n, y);
            return n
        }
    }()
      , E = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(k) {
        return typeof k
    }
    : function(k) {
        return k && "function" === typeof Symbol && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k
    }
      , U = function(t, q) {
        var A = 2 < arguments.length && arguments[2] !== k ? arguments[2] : {}
          , y = 3 < arguments.length && arguments[3] !== k ? arguments[3] : {}
          , G = 4 < arguments.length && arguments[4] !== k ? arguments[4] : {};
        return function(w, C, B, Q, U) {
            function T(d) {
                d.$searchbox[0].addEventListener("focus", function() {
                    return C.showDropdown()
                });
                var a = function(a) {
                    a: {
                        for (a = a.target; a; ) {
                            if (a === d.$form[0] || a === L) {
                                a = !0;
                                break a
                            }
                            a = a.parentElement
                        }
                        a = !1
                    }
                    a || (d.$form.find("input")[0].blur(),
                    C.hideDropdown())
                };
                (y.focusOutDismissEvents || ["click", "touch"]).forEach(function(b) {
                    return document.addEventListener(b, a)
                });
                C.getForm().submit(function() {
                    return C.hideDropdown()
                })
            }
            var S = function(d) {
                function a(g) {
                    if (b[g])
                        return b[g].exports;
                    var e = b[g] = {
                        i: g,
                        l: !1,
                        exports: {}
                    };
                    d[g].call(e.exports, e, e.exports, a);
                    e.l = !0;
                    return e.exports
                }
                var b = {};
                a.m = d;
                a.c = b;
                a.d = function(b, e, h) {
                    a.o(b, e) || Object.defineProperty(b, e, {
                        enumerable: !0,
                        get: h
                    })
                }
                ;
                a.r = function(a) {
                    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                        value: "Module"
                    });
                    Object.defineProperty(a, "__esModule", {
                        value: !0
                    })
                }
                ;
                a.t = function(b, e) {
                    e & 1 && (b = a(b));
                    if (e & 8 || e & 4 && "object" === ("undefined" === typeof b ? "undefined" : E(b)) && b && b.__esModule)
                        return b;
                    var h = Object.create(null);
                    a.r(h);
                    Object.defineProperty(h, "default", {
                        enumerable: !0,
                        value: b
                    });
                    if (e & 2 && "string" != typeof b)
                        for (var m in b)
                            a.d(h, m, function(c) {
                                return b[c]
                            }
                            .bind(null, m));
                    return h
                }
                ;
                a.n = function(b) {
                    var e = b && b.__esModule ? function() {
                        return b["default"]
                    }
                    : function() {
                        return b
                    }
                    ;
                    a.d(e, "a", e);
                    return e
                }
                ;
                a.o = function(a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                }
                ;
                a.p = "";
                return a(a.s = 72)
            }([function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, b, m, c) {
                    c === k && (c = m);
                    Object.defineProperty(a, c, {
                        enumerable: !0,
                        get: function() {
                            return b[m]
                        }
                    })
                }
                : function(a, b, m, c) {
                    c === k && (c = m);
                    a[c] = b[m]
                }
                );
                d = this && this.__exportStar || function(a, b) {
                    for (var e in a)
                        "default" === e || Object.prototype.hasOwnProperty.call(b, e) || g(b, a, e)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d(b(119), a);
                d(b(123), a);
                d(b(10), a);
                d(b(145), a);
                d(b(66), a)
            }
            , function(d, a, b) {
                d.exports = {
                    SbMBCVerticalAligned: b(149),
                    SbMBCHorizontalAligned: b(150),
                    Stores: b(151),
                    MultiAsins: b(152),
                    MultiKeywordSuggestions: b(154),
                    CarouselControl: b(20),
                    AsinHeader: b(67),
                    WidgetAsin: b(155),
                    LowercaseHeader: b(21),
                    UppercaseHeader: b(9),
                    CardsWidget: b(156),
                    ImageRefinement: b(157),
                    TextRefinement: b(158),
                    ImageSuggestion: b(159),
                    ImageAndTextSuggestion: b(160),
                    Highlighted: b(22),
                    TextWithLink: b(161),
                    DisplayString: b(35),
                    TrendingSearchSuggestion: b(162),
                    KeywordSuggestion: b(36),
                    KeywordImageSuggestion: b(163),
                    RecentSearchSuggestion: b(164),
                    DisplayKeywordWithByline: b(68),
                    KeywordWithByline: b(165),
                    Options: b(166),
                    Separator: b(69),
                    NileSearchSuggestionsWidget: b(167)
                }
            }
            , function(d, a, b) {
                (function(a) {
                    var b = function(a) {
                        return a && a.Math == Math && a
                    };
                    d.exports = b("object" == ("undefined" === typeof globalThis ? "undefined" : E(globalThis)) && globalThis) || b("object" == ("undefined" === typeof n ? "undefined" : E(n)) && n) || b("object" == ("undefined" === typeof self ? "undefined" : E(self)) && self) || b("object" == ("undefined" === typeof a ? "undefined" : E(a)) && a) || function() {
                        return this
                    }() || Function("return this")()
                }
                ).call(this, b(77))
            }
            , function(d, a, b) {
                a = b(5);
                d.exports = !a(function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })
            }
            , function(d, a, b) {
                var g = b(2)
                  , e = b(38).f
                  , h = b(28)
                  , m = b(83)
                  , c = b(27)
                  , f = b(86)
                  , l = b(90);
                d.exports = function(a, b) {
                    var p = a.target, r = a.global, d = a.stat, x, P, F;
                    if (P = r ? g : d ? g[p] || c(p, {}) : (g[p] || {}).prototype)
                        for (F in b) {
                            var K = b[F];
                            var n = a.noTargetGet ? (x = e(P, F)) && x.value : P[F];
                            x = l(r ? F : p + (d ? "." : "#") + F, a.forced);
                            if (!x && n !== k) {
                                if (("undefined" === typeof K ? "undefined" : E(K)) === ("undefined" === typeof n ? "undefined" : E(n)))
                                    continue;
                                f(K, n)
                            }
                            (a.sham || n && n.sham) && h(K, "sham", !0);
                            m(P, F, K, a)
                        }
                }
            }
            , function(d, a) {
                d.exports = function(a) {
                    try {
                        return !!a()
                    } catch (g) {
                        return !0
                    }
                }
            }
            , function(d, a) {
                d.exports = function(a) {
                    return "object" === ("undefined" === typeof a ? "undefined" : E(a)) ? null !== a : "function" === typeof a
                }
            }
            , function(d, a, b) {
                var g = b(13)
                  , e = {}.hasOwnProperty;
                d.exports = Object.hasOwn || function(a, b) {
                    return e.call(g(a), b)
                }
            }
            , function(d, a, b) {
                function g(c, a) {
                    return c.replace(/\${(.+?)}/g, function(c, f) {
                        return "undefined" === typeof a[f] ? c : a[f]
                    })
                }
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.guardError = a.onScroll = a.onResize = a.createThrottledEventHandler = a.throttle = a.getDocument = a.getWindow = a.getElement = a.getElements = a.getVisibleArea = a.setDefaultMetadata = a.getQuerySuffix = a.getQueryPrefix = a.buildCrossCategoryString = a.substituteStringInterpolations = a.paramsToURLParameters = a.shouldWarmUp = void 0;
                b(135);
                var e = b(0)
                  , h = ["CreRedTeamBotThatsSignedIn"];
                a.shouldWarmUp = function() {
                    return navigator ? !h.some(function(c) {
                        return navigator.userAgent.includes(c)
                    }) : !0
                }
                ;
                a.paramsToURLParameters = function(c) {
                    return Object.entries(c).filter(function(c) {
                        c = c[1];
                        return c !== k && null !== c
                    }).flatMap(function(c) {
                        var a = c[0];
                        c = c[1];
                        return Array.isArray(c) ? c.map(function(c) {
                            return [a, c]
                        }) : [[a, c]]
                    }).map(function(c) {
                        var a = c[1];
                        return encodeURIComponent(c[0]) + "\x3d" + encodeURIComponent(a)
                    }).join("\x26")
                }
                ;
                a.substituteStringInterpolations = g;
                a.buildCrossCategoryString = function(c, a) {
                    return a && 0 < a.length ? g(c, {
                        query: "",
                        category: a[0].display
                    }).trim() : k
                }
                ;
                a.getQueryPrefix = function(c, a) {
                    return c && a !== k && a < c.length && 0 <= a ? c.substring(0, a) : c
                }
                ;
                a.getQuerySuffix = function(c, a) {
                    return c && a !== k && a < c.length && 0 <= a ? c.substring(a, c.length) : ""
                }
                ;
                a.setDefaultMetadata = function(c) {
                    var a, b, p, e;
                    c == k && (c = {});
                    c.headerPrefix = null !== (a = c.headerPrefix) && void 0 !== a ? a : "";
                    c.header = null !== (b = c.header) && void 0 !== b ? b : "";
                    c.headerSuffix = null !== (p = c.headerSuffix) && void 0 !== p ? p : "";
                    c.title = null !== (e = c.title) && void 0 !== e ? e : "";
                    return c
                }
                ;
                a.getVisibleArea = function(c) {
                    var f = c.top
                      , b = c.bottom
                      , p = c.left
                      , e = c.right
                      , h = a.getWindow();
                    c = h.innerHeight;
                    p = m(p, e, h.innerWidth);
                    f = m(f, b, c);
                    return p * f
                }
                ;
                var m = function(c, a, b) {
                    return 0 <= c ? Math.min(b - c, a - c) : 0 < a ? Math.min(Math.min(a, b), a - c) : 0
                };
                a.getElements = function(c, a) {
                    return Array.prototype.slice.call((a || document.body).querySelectorAll(c))
                }
                ;
                a.getElement = function(c, b) {
                    b = b || document.body;
                    var f;
                    (f = !c) || (f = b,
                    f = "matches"in f ? f.matches(c) : "msMatchesSelector"in f ? f.msMatchesSelector(c) : "webkitMatchesSelector"in f ? f.webkitMatchesSelector(c) : 0 <= a.getElements(c, a.getDocument().body).indexOf(f));
                    return f ? b : b.querySelector(c)
                }
                ;
                a.getWindow = function() {
                    return a.getDocument().defaultView
                }
                ;
                a.getDocument = function() {
                    return document.body.ownerDocument
                }
                ;
                a.throttle = function(c, b) {
                    var f = !1
                      , p = a.getWindow();
                    return function() {
                        for (var a = [], l = 0; l < arguments.length; l++)
                            a[l] = arguments[l];
                        f || (c.apply(void 0, a),
                        f = !0,
                        p.setTimeout(function() {
                            f = !1
                        }, b))
                    }
                }
                ;
                a.createThrottledEventHandler = function(c, b, l) {
                    var f = (null === l || void 0 === l ? void 0 : l.ms) || 25
                      , e = (null === l || void 0 === l ? void 0 : l.el) || a.getWindow()
                      , m = a.throttle(b, f);
                    e.addEventListener(c, m);
                    return function() {
                        e.removeEventListener(c, m)
                    }
                }
                ;
                a.onResize = function(c, b) {
                    return a.createThrottledEventHandler("resize", c, b)
                }
                ;
                a.onScroll = function(c, b) {
                    return a.createThrottledEventHandler("scroll", c, b)
                }
                ;
                a.guardError = function(c, a) {
                    return function() {
                        for (var b = [], f = 0; f < arguments.length; f++)
                            b[f] = arguments[f];
                        try {
                            a.apply(void 0, b)
                        } catch (r) {
                            e.logJsError(r, c)
                        }
                    }
                }
            }
            , function(d, a) {
                function b(a, b, c) {
                    a.assertNotNull(b, ["header", "cssPrefix"]);
                    return a.root("autocomplete", "UppercaseHeader", [a.createElement("div", {
                        "class": e(["s-heavy", b.cssPrefix + "-suggestion-header"]),
                        role: "text",
                        "aria-label": b.header
                    }, b.header)])
                }
                function g(a) {
                    return null !== a && a !== k && "" !== a
                }
                function e(a) {
                    a = a.join(" ").split(" ").filter(g).join(" ");
                    return 0 < a.length ? a : k
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.UppercaseHeader = b
            }
            , function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, b, m, c) {
                    c === k && (c = m);
                    Object.defineProperty(a, c, {
                        enumerable: !0,
                        get: function() {
                            return b[m]
                        }
                    })
                }
                : function(a, b, m, c) {
                    c === k && (c = m);
                    a[c] = b[m]
                }
                );
                d = this && this.__exportStar || function(a, b) {
                    for (var e in a)
                        "default" === e || Object.prototype.hasOwnProperty.call(b, e) || g(b, a, e)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d(b(61), a);
                d(b(127), a);
                d(b(33), a);
                d(b(142), a);
                d(b(143), a);
                d(b(144), a)
            }
            , function(d, a, b) {
                var g = b(24)
                  , e = b(41);
                d.exports = function(a) {
                    return g(e(a))
                }
            }
            , function(d, a, b) {
                var g = b(2);
                d.exports = function(a, b) {
                    if (2 > arguments.length) {
                        var e = g[a];
                        e = "function" == typeof e ? e : k
                    } else
                        e = g[a] && g[a][b];
                    return e
                }
            }
            , function(d, a, b) {
                var g = b(41);
                d.exports = function(a) {
                    return Object(g(a))
                }
            }
            , function(d, a, b) {
                d = b(3);
                var g = b(48)
                  , e = b(15)
                  , h = b(42)
                  , m = Object.defineProperty;
                a.f = d ? m : function(c, a, b) {
                    e(c);
                    a = h(a);
                    e(b);
                    if (g)
                        try {
                            return m(c, a, b)
                        } catch (p) {}
                    if ("get"in b || "set"in b)
                        throw TypeError("Accessors not supported");
                    "value"in b && (c[a] = b.value);
                    return c
                }
            }
            , function(d, a, b) {
                var g = b(6);
                d.exports = function(a) {
                    if (!g(a))
                        throw TypeError(String(a) + " is not an object");
                    return a
                }
            }
            , function(d, a, b) {
                var g = b(54)
                  , e = Math.min;
                d.exports = function(a) {
                    return 0 < a ? e(g(a), 9007199254740991) : 0
                }
            }
            , function(d, a, b) {
                a = b(25);
                var g = b(92);
                b = b(14);
                var e = a("unscopables")
                  , h = Array.prototype;
                h[e] == k && b.f(h, e, {
                    configurable: !0,
                    value: g(null)
                });
                d.exports = function(a) {
                    h[e][a] = !0
                }
            }
            , function(d, a, b) {
                var g = b(2)
                  , e = b(31)
                  , h = Function.call;
                d.exports = function(a, c, b) {
                    return e(h, g[a].prototype[c], b)
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.getSiteVariant = void 0;
                var g = null
                  , e = {
                    Android: function() {
                        var a;
                        try {
                            var b = (new RegExp(/amzn-app-id\s*=\s*([^;]*)?;/g)).exec("; " + document.cookie);
                            if (b && 2 === b.length)
                                return "850" === (null === (a = b[1].split("/")[1].split(".").pop()) || void 0 === a ? void 0 : a.trim())
                        } catch (c) {
                            console.error("Invalid Version Number")
                        }
                        return !1
                    }() ? "android-tablet-mshop" : "android-mshop",
                    iOS: "ios-iphone-mshop"
                };
                a.getSiteVariant = function() {
                    if (!g) {
                        var a = (a = (new RegExp(/amzn-app-ctxt\s*=\s*([^;]*)?;/g)).exec("; " + document.cookie)) && 2 === a.length ? a[1] : "";
                        a ? (a = decodeURIComponent(a),
                        g = (a = (new RegExp(/"os"\s*:\s*"([^"]*)?"/g)).exec(a)) && 2 === a.length && a[1] ? a[1]in e ? e[a[1]] : "unknown" : "unknown") : g = document.documentElement.classList.contains("a-mobile") ? "mobile" : "desktop"
                    }
                    return g
                }
            }
            , function(d, a) {
                function b(a, b, h) {
                    return a.root("autocomplete", "CarouselControl", [[a.createElement("div", {
                        "class": "discover-tr-carousel-control discover-tr-carousel-control-left discover-tr-prevent-close"
                    }, a.createElement("img", {
                        alt: "",
                        "class": "discover-tr-carousel-control-left discover-tr-prevent-close",
                        src: "https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/next_tab_control._CB416468320_.svg"
                    })), a.createElement("div", {
                        "class": "discover-tr-carousel-control discover-tr-carousel-control-right discover-tr-prevent-close"
                    }, a.createElement("img", {
                        alt: "",
                        "class": "discover-tr-carousel-control-right discover-tr-prevent-close",
                        src: "https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/next_tab_control._CB416468320_.svg"
                    }))]])
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.CarouselControl = b
            }
            , function(d, a) {
                function b(a, b, c) {
                    a.assertNotNull(b, ["headerPrefix", "header", "headerSuffix", "cssPrefix"]);
                    return a.root("autocomplete", "LowercaseHeader", [a.createElement("div", {
                        "class": e([b.cssPrefix + "-suggestion-header"]),
                        role: "text",
                        "aria-label": b.headerPrefix + b.header + b.headerSuffix
                    }, a.createElement("span", {
                        "class": "s-heavy"
                    }, b.headerPrefix), b.header, a.createElement("span", {
                        "class": "s-heavy"
                    }, b.headerSuffix))])
                }
                function g(a) {
                    return null !== a && a !== k && "" !== a
                }
                function e(a) {
                    a = a.join(" ").split(" ").filter(g).join(" ");
                    return 0 < a.length ? a : k
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.LowercaseHeader = b
            }
            , function(d, a) {
                function b(a, b, m) {
                    a.assertNotNull(b, ["highlightFragments"]);
                    return a.root("autocomplete", "Highlighted", [g(b.highlightFragments).map(function(c, b) {
                        return [c.hit ? "" + c.text : a.createElement("span", {
                            "class": "s-heavy"
                        }, "" + c.text)]
                    })])
                }
                function g(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.Highlighted = b
            }
            , function(d, a, b) {
                d = {}.propertyIsEnumerable;
                var g = Object.getOwnPropertyDescriptor;
                b = g && !d.call({
                    1: 2
                }, 1);
                a.f = b ? function(a) {
                    a = g(this, a);
                    return !!a && a.enumerable
                }
                : d
            }
            , function(d, a, b) {
                a = b(5);
                var g = b(40)
                  , e = "".split;
                d.exports = a(function() {
                    return !Object("z").propertyIsEnumerable(0)
                }) ? function(a) {
                    return "String" == g(a) ? e.call(a, "") : Object(a)
                }
                : Object
            }
            , function(d, a, b) {
                a = b(2);
                var g = b(46)
                  , e = b(7)
                  , h = b(47)
                  , m = b(45);
                b = b(44);
                var c = g("wks")
                  , f = a.Symbol
                  , l = b ? f : f && f.withoutSetter || h;
                d.exports = function(a) {
                    if (!e(c, a) || !m && "string" != typeof c[a])
                        m && e(f, a) ? c[a] = f[a] : c[a] = l("Symbol." + a);
                    return c[a]
                }
            }
            , function(d, a, b) {
                a = b(2);
                b = b(27);
                b = a["__core-js_shared__"] || b("__core-js_shared__", {});
                d.exports = b
            }
            , function(d, a, b) {
                var g = b(2);
                d.exports = function(a, b) {
                    try {
                        Object.defineProperty(g, a, {
                            value: b,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (m) {
                        g[a] = b
                    }
                    return b
                }
            }
            , function(d, a, b) {
                a = b(3);
                var g = b(14)
                  , e = b(39);
                d.exports = a ? function(a, b, c) {
                    return g.f(a, b, e(1, c))
                }
                : function(a, b, c) {
                    a[b] = c;
                    return a
                }
            }
            , function(d, a) {
                d.exports = {}
            }
            , function(d, a) {
                d.exports = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
            }
            , function(d, a, b) {
                var g = b(57);
                d.exports = function(a, b, m) {
                    g(a);
                    if (b === k)
                        return a;
                    switch (m) {
                    case 0:
                        return function() {
                            return a.call(b)
                        }
                        ;
                    case 1:
                        return function(c) {
                            return a.call(b, c)
                        }
                        ;
                    case 2:
                        return function(c, f) {
                            return a.call(b, c, f)
                        }
                        ;
                    case 3:
                        return function(c, f, l) {
                            return a.call(b, c, f, l)
                        }
                    }
                    return function() {
                        return a.apply(b, arguments)
                    }
                }
            }
            , function(d, a, b) {
                var g = b(52)
                  , e = b(30);
                d.exports = Object.keys || function(a) {
                    return g(a, e)
                }
            }
            , function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, c, b, f) {
                    f === k && (f = b);
                    Object.defineProperty(a, f, {
                        enumerable: !0,
                        get: function() {
                            return c[b]
                        }
                    })
                }
                : function(a, c, b, f) {
                    f === k && (f = b);
                    a[f] = c[b]
                }
                );
                d = this && this.__exportStar || function(a, c) {
                    for (var b in a)
                        "default" === b || Object.prototype.hasOwnProperty.call(c, b) || g(c, a, b)
                }
                ;
                var e = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.constructPrefixAttribution = a.implicitRefTag = a.textSuggestionSelectionHandler = a.highlightText = a.normalizeInputObject = a.buildNileSearchLinkURL = a.buildSearchLinkUrl = void 0;
                var h = b(62);
                d(b(34), a);
                d(b(63), a);
                var m = b(134);
                Object.defineProperty(a, "buildSearchLinkUrl", {
                    enumerable: !0,
                    get: function() {
                        return e(m).default
                    }
                });
                var c = b(64);
                Object.defineProperty(a, "buildNileSearchLinkURL", {
                    enumerable: !0,
                    get: function() {
                        return e(c).default
                    }
                });
                var f = b(136);
                Object.defineProperty(a, "normalizeInputObject", {
                    enumerable: !0,
                    get: function() {
                        return e(f).default
                    }
                });
                d(b(8), a);
                var l = b(137);
                Object.defineProperty(a, "highlightText", {
                    enumerable: !0,
                    get: function() {
                        return e(l).default
                    }
                });
                d(b(62), a);
                var p = b(138);
                Object.defineProperty(a, "textSuggestionSelectionHandler", {
                    enumerable: !0,
                    get: function() {
                        return e(p).default
                    }
                });
                d(b(19), a);
                d(b(139), a);
                var r = b(140);
                Object.defineProperty(a, "implicitRefTag", {
                    enumerable: !0,
                    get: function() {
                        return e(r).default
                    }
                });
                d(b(141), a);
                a.constructPrefixAttribution = function(a, c) {
                    return (a || "") + "," + (c || "aps") + "," + Math.ceil(h.getAverageResponseTime())
                }
            }
            , function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, c, b, l) {
                    l === k && (l = b);
                    Object.defineProperty(a, l, {
                        enumerable: !0,
                        get: function() {
                            return c[b]
                        }
                    })
                }
                : function(a, c, b, l) {
                    l === k && (l = b);
                    a[l] = c[b]
                }
                )
                  , e = this && this.__setModuleDefault || (Object.create ? function(a, c) {
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: c
                    })
                }
                : function(a, c) {
                    a["default"] = c
                }
                )
                  , h = this && this.__importStar || function(a) {
                    if (a && a.__esModule)
                        return a;
                    var c = {};
                    if (null != a)
                        for (var b in a)
                            "default" !== b && Object.prototype.hasOwnProperty.call(a, b) && g(c, a, b);
                    e(c, a);
                    return c
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.autocompleteServiceDomain = a.domainSuffix = a.searchDomain = void 0;
                d = b(63);
                b = h(b(61));
                a.searchDomain = d.getSearchDomain(b.location.hostname);
                a.domainSuffix = d.getAmazonDomainSuffix(a.searchDomain);
                a.autocompleteServiceDomain = "completion" + a.domainSuffix
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["highlightFragments"]);
                    c = e.Highlighted;
                    return a.root("autocomplete", "DisplayString", [c(a, {
                        highlightFragments: b.highlightFragments
                    }, []), null !== b.crossCategoryString && "undefined" !== typeof b.crossCategoryString ? [" ", a.createElement("span", {
                        "class": "s-store s-highlight-secondary"
                    }, b.crossCategoryString)] : k])
                }
                var e = b(22);
                d.exports = {};
                d.exports.default = g;
                d.exports.DisplayString = g
            }
            , function(d, a, b) {
                function g(a, b, l) {
                    a.assertNotNull(b, ["suggestion", "enabledFeatures"]);
                    var c = m.DisplayString;
                    return a.root("autocomplete", "KeywordSuggestion", [a.createElement("div", {
                        "class": "s-suggestion-container"
                    }, b.enabledFeatures.autofill && !b.enabledFeatures.invertDeleteRecentSuggestionIcon ? a.createElement("div", {
                        "class": "s-suggestion-autofillDistinct",
                        autofill: !0,
                        role: "button",
                        "aria-label": "append suggestion"
                    }, a.createElement("i", {
                        "class": "icon-autofill",
                        autofill: !0
                    })) : k, a.createElement("div", {
                        "class": h(["s-suggestion" + (null !== b.suggestionClasses && "undefined" !== typeof b.suggestionClasses ? " " + b.suggestionClasses : ""), "s-suggestion-ellipsis-direction"]),
                        role: "button",
                        "aria-label": b.suggestion.value
                    }, c(a, {
                        highlightFragments: b.suggestion.highlightFragments,
                        crossCategoryString: b.suggestion.crossCategoryString
                    }, [])), b.enabledFeatures.useSuggestionsIcons ? null !== b.suggestionClasses && "undefined" !== typeof b.suggestionClasses ? ["s-recentSearchDistinct" === b.suggestionClasses ? a.createElement("div", {
                        "class": "icon-suggestion-div past-icon-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-past-search-suggestion",
                        "past-icon": !0
                    })) : k, "s-recentSearchDistinct" !== b.suggestionClasses ? a.createElement("div", {
                        "class": "icon-suggestion-div search-icon-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-search-suggestion",
                        "suggestion-icon": !0
                    })) : k] : a.createElement("div", {
                        "class": "icon-suggestion-div search-icon-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-search-suggestion",
                        "suggestion-icon": !0
                    })) : k, l)])
                }
                function e(a) {
                    return null !== a && a !== k && "" !== a
                }
                function h(a) {
                    a = a.join(" ").split(" ").filter(e).join(" ");
                    return 0 < a.length ? a : k
                }
                var m = b(35);
                d.exports = {};
                d.exports.default = g;
                d.exports.KeywordSuggestion = g
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.leftCarouselControl = a.rightCarouselControl = void 0;
                var g = b(0)
                  , e = b(66);
                a.rightCarouselControl = "discover-tr-carousel-control-right";
                a.leftCarouselControl = "discover-tr-carousel-control-left";
                d = function() {
                    function b(b, c, f) {
                        var l = this;
                        this.click = function() {
                            var a, c, b, f = null === (b = null === (c = null === (a = l.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === c ? void 0 : c.find("." + e.highlightSuggestion)) || void 0 === b ? void 0 : b.find("a");
                            return 0 < (null === f || void 0 === f ? void 0 : f.length) ? (g.logOneTimeEvent(g.SearchAcceptanceMetric),
                            g.emitCounter(g.SearchAcceptanceMetric),
                            l.clickLink(f[0]),
                            !0) : !1
                        }
                        ;
                        this.scrollToHighlightedSuggestion = function(a) {
                            var c, b, f, p;
                            (null === (c = l.elements) || void 0 === c ? 0 : c.scrollableArea.length) && a.length && (null === (b = l.elements) || void 0 === b ? void 0 : b.scrollableArea.stop(),
                            c = (null === (f = l.elements) || void 0 === f ? NaN : f.scrollableArea.outerWidth(!0)) / 2,
                            a = a.get(0).offsetLeft + a.get(0).offsetWidth / 2,
                            null === (p = l.elements) || void 0 === p ? void 0 : p.scrollableArea.animate({
                                scrollLeft: a - c
                            }))
                        }
                        ;
                        this.arrowClickHandler = function(c) {
                            var b = c.target || c.srcElement;
                            if (!b)
                                return !0;
                            b.className && -1 !== b.className.indexOf(a.rightCarouselControl) ? l.scrollTo("right") : b.className && -1 !== b.className.indexOf(a.leftCarouselControl) && l.scrollTo("left");
                            c.preventDefault();
                            return !1
                        }
                        ;
                        this.carouselClickHandler = function(a) {
                            var c, b;
                            a = null === (b = null === (c = l.elements) || void 0 === c ? void 0 : c.scrollableArea) || void 0 === b ? void 0 : b.find(a.target);
                            if (0 < a.length) {
                                c = a.closest("a", l.scrollableAreaSelector);
                                var f = 0 < c.length ? c : a.find("a")
                            }
                            return 0 < (null === f || void 0 === f ? void 0 : f.length) ? (l.api.hideDropdown(),
                            !0) : !1
                        }
                        ;
                        this.updateControlVisibility = function() {
                            var a, c, b, f, e, m, d, h, g = l.getControlVisibility();
                            g.left ? null === (c = null === (a = l.elements) || void 0 === a ? void 0 : a.scrollArrowLeft) || void 0 === c ? void 0 : c.show() : null === (f = null === (b = l.elements) || void 0 === b ? void 0 : b.scrollArrowLeft) || void 0 === f ? void 0 : f.hide();
                            g.right ? null === (m = null === (e = l.elements) || void 0 === e ? void 0 : e.scrollArrowRight) || void 0 === m ? void 0 : m.show() : null === (h = null === (d = l.elements) || void 0 === d ? void 0 : d.scrollArrowRight) || void 0 === h ? void 0 : h.hide()
                        }
                        ;
                        this.getControlVisibility = function() {
                            var a, c, b, f, e = 0 !== (null === (a = l.elements) || void 0 === a ? void 0 : a.scrollableArea.scrollLeft());
                            a = (null === (c = l.elements) || void 0 === c ? void 0 : c.scrollableArea.scrollLeft()) < (null === (b = l.elements) || void 0 === b ? NaN : b.scrollableArea.get(0).scrollWidth) - (null === (f = l.elements) || void 0 === f ? NaN : f.scrollableArea.outerWidth(!0));
                            return {
                                left: e,
                                right: a
                            }
                        }
                        ;
                        this.scrollTo = function(a) {
                            var c, b, f;
                            null === (b = null === (c = l.elements) || void 0 === c ? void 0 : c.scrollableArea) || void 0 === b ? void 0 : b.animate({
                                scrollLeft: (null === (f = l.elements) || void 0 === f ? void 0 : f.scrollableArea.scrollLeft()) + 250 * ("right" === a ? 1 : -1)
                            })
                        }
                        ;
                        this.clickLink = function(a) {
                            var c = new MouseEvent("click",{
                                view: n,
                                bubbles: !0,
                                cancelable: !0,
                                clientX: 20
                            });
                            a.dispatchEvent(c)
                        }
                        ;
                        this.api = b;
                        this.$ = c;
                        this.scrollableAreaSelector = f
                    }
                    b.prototype.attachEventHandlers = function(b) {
                        var c = this, f, l, p, e, m, d, h, g;
                        this.elements = {
                            scrollableArea: this.$(b).find(this.scrollableAreaSelector),
                            scrollArrowLeft: this.$(b).find("." + a.leftCarouselControl),
                            scrollArrowRight: this.$(b).find("." + a.rightCarouselControl)
                        };
                        null === (l = null === (f = this.elements) || void 0 === f ? void 0 : f.scrollableArea) || void 0 === l ? void 0 : l.scroll(function() {
                            c.updateControlVisibility()
                        });
                        null === (e = null === (p = this.elements) || void 0 === p ? void 0 : p.scrollArrowLeft) || void 0 === e ? void 0 : e.bind("click", this.arrowClickHandler);
                        null === (d = null === (m = this.elements) || void 0 === m ? void 0 : m.scrollArrowRight) || void 0 === d ? void 0 : d.bind("click", this.arrowClickHandler);
                        null === (g = null === (h = this.elements) || void 0 === h ? void 0 : h.scrollableArea) || void 0 === g ? void 0 : g.bind("click", this.carouselClickHandler)
                    }
                    ;
                    b.prototype.onRendered = function() {
                        this.updateControlVisibility()
                    }
                    ;
                    b.prototype.onResized = function() {
                        var a;
                        (null === (a = this.elements) || void 0 === a ? 0 : a.scrollableArea.length) && this.updateControlVisibility()
                    }
                    ;
                    return b
                }();
                a.default = d
            }
            , function(d, a, b) {
                d = b(3);
                var g = b(23)
                  , e = b(39)
                  , h = b(11)
                  , m = b(42)
                  , c = b(7)
                  , f = b(48)
                  , l = Object.getOwnPropertyDescriptor;
                a.f = d ? l : function(a, b) {
                    a = h(a);
                    b = m(b);
                    if (f)
                        try {
                            return l(a, b)
                        } catch (v) {}
                    if (c(a, b))
                        return e(!g.f.call(a, b), a[b])
                }
            }
            , function(d, a) {
                d.exports = function(a, d) {
                    return {
                        enumerable: !(a & 1),
                        configurable: !(a & 2),
                        writable: !(a & 4),
                        value: d
                    }
                }
            }
            , function(d, a) {
                var b = {}.toString;
                d.exports = function(a) {
                    return b.call(a).slice(8, -1)
                }
            }
            , function(d, a) {
                d.exports = function(a) {
                    if (a == k)
                        throw TypeError("Can't call method on " + a);
                    return a
                }
            }
            , function(d, a, b) {
                var g = b(78)
                  , e = b(43);
                d.exports = function(a) {
                    a = g(a, "string");
                    return e(a) ? a : String(a)
                }
            }
            , function(d, a, b) {
                var g = b(12);
                a = b(44);
                d.exports = a ? function(a) {
                    return "symbol" == ("undefined" === typeof a ? "undefined" : E(a))
                }
                : function(a) {
                    var b = g("Symbol");
                    return "function" == typeof b && Object(a)instanceof b
                }
            }
            , function(d, a, b) {
                a = b(45);
                d.exports = a && !Symbol.sham && "symbol" == E(Symbol.iterator)
            }
            , function(d, a, b) {
                var g = b(79);
                a = b(5);
                d.exports = !!Object.getOwnPropertySymbols && !a(function() {
                    var a = Symbol();
                    return !String(a) || !(Object(a)instanceof Symbol) || !Symbol.sham && g && 41 > g
                })
            }
            , function(d, a, b) {
                a = b(82);
                var g = b(26);
                (d.exports = function(a, b) {
                    return g[a] || (g[a] = b !== k ? b : {})
                }
                )("versions", []).push({
                    version: "3.17.3",
                    mode: a ? "pure" : "global",
                    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                })
            }
            , function(d, a) {
                var b = 0
                  , g = Math.random();
                d.exports = function(a) {
                    return "Symbol(" + String(a === k ? "" : a) + ")_" + (++b + g).toString(36)
                }
            }
            , function(d, a, b) {
                a = b(3);
                var g = b(5)
                  , e = b(49);
                d.exports = !a && !g(function() {
                    return 7 != Object.defineProperty(e("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            }
            , function(d, a, b) {
                a = b(2);
                b = b(6);
                var g = a.document
                  , e = b(g) && b(g.createElement);
                d.exports = function(a) {
                    return e ? g.createElement(a) : {}
                }
            }
            , function(d, a, b) {
                a = b(26);
                var g = Function.toString;
                "function" != typeof a.inspectSource && (a.inspectSource = function(a) {
                    return g.call(a)
                }
                );
                d.exports = a.inspectSource
            }
            , function(d, a, b) {
                a = b(46);
                var g = b(47)
                  , e = a("keys");
                d.exports = function(a) {
                    return e[a] || (e[a] = g(a))
                }
            }
            , function(d, a, b) {
                var g = b(7)
                  , e = b(11)
                  , h = b(53).indexOf
                  , m = b(29);
                d.exports = function(a, b) {
                    a = e(a);
                    var c = 0, f = [], r;
                    for (r in a)
                        !g(m, r) && g(a, r) && f.push(r);
                    for (; b.length > c; )
                        g(a, r = b[c++]) && (~h(f, r) || f.push(r));
                    return f
                }
            }
            , function(d, a, b) {
                var g = b(11)
                  , e = b(16)
                  , h = b(89);
                a = function(a) {
                    return function(c, b, l) {
                        c = g(c);
                        var f = e(c.length);
                        l = h(l, f);
                        if (a && b != b)
                            for (; f > l; ) {
                                if (b = c[l++],
                                b != b)
                                    return !0
                            }
                        else
                            for (; f > l; l++)
                                if ((a || l in c) && c[l] === b)
                                    return a || l || 0;
                        return !a && -1
                    }
                }
                ;
                d.exports = {
                    includes: a(!0),
                    indexOf: a(!1)
                }
            }
            , function(d, a) {
                var b = Math.ceil
                  , g = Math.floor;
                d.exports = function(a) {
                    return isNaN(a = +a) ? 0 : (0 < a ? g : b)(a)
                }
            }
            , function(d, a) {
                a.f = Object.getOwnPropertySymbols
            }
            , function(d, a, b) {
                var g = b(31)
                  , e = b(24)
                  , h = b(13)
                  , m = b(16)
                  , c = b(58)
                  , f = [].push;
                a = function(a) {
                    var b = 1 == a
                      , l = 2 == a
                      , d = 3 == a
                      , u = 4 == a
                      , D = 6 == a
                      , x = 7 == a
                      , P = 5 == a || D;
                    return function(p, r, v, n) {
                        var F = h(p)
                          , K = e(F);
                        r = g(r, v, 3);
                        v = m(K.length);
                        var H = 0;
                        n = n || c;
                        p = b ? n(p, v) : l || x ? n(p, 0) : k;
                        for (var z; v > H; H++)
                            if (P || H in K)
                                if (n = K[H],
                                z = r(n, H, F),
                                a)
                                    if (b)
                                        p[H] = z;
                                    else if (z)
                                        switch (a) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return n;
                                        case 6:
                                            return H;
                                        case 2:
                                            f.call(p, n)
                                        }
                                    else
                                        switch (a) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            f.call(p, n)
                                        }
                        return D ? -1 : d || u ? u : p
                    }
                }
                ;
                d.exports = {
                    forEach: a(0),
                    map: a(1),
                    filter: a(2),
                    some: a(3),
                    every: a(4),
                    find: a(5),
                    findIndex: a(6),
                    filterReject: a(7)
                }
            }
            , function(d, a) {
                d.exports = function(a) {
                    if ("function" != typeof a)
                        throw TypeError(String(a) + " is not a function");
                    return a
                }
            }
            , function(d, a, b) {
                var g = b(91);
                d.exports = function(a, b) {
                    return new (g(a))(0 === b ? 0 : b)
                }
            }
            , function(d, a, b) {
                var g = b(40);
                d.exports = Array.isArray || function(a) {
                    return "Array" == g(a)
                }
            }
            , function(d, a, b) {
                a = b(2);
                d.exports = a
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.location = void 0;
                a.location = n.location
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.recordResponseTime = a.getAverageResponseTime = void 0;
                var g = 0
                  , e = 0;
                a.getAverageResponseTime = function() {
                    return e ? g / e : 0
                }
                ;
                a.recordResponseTime = function(a) {
                    e += 1;
                    g += a
                }
            }
            , function(d, a, b) {
                function g(a) {
                    return a.substr(a.indexOf(".amazon."))
                }
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.getSearchDomain = a.getAmazonDomainSuffix = void 0;
                a.getAmazonDomainSuffix = g;
                a.getSearchDomain = function(a) {
                    return a && (/.*\bdev-dsk\b.*/.test(a) || /.*\bhp-shoppingportal\b.*/.test(a)) ? "www" + g(a) : a
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(8)
                  , e = b(34)
                  , h = b(33);
                a.default = function(a, c) {
                    var b = a.value
                      , l = a.refTag;
                    a = a.crid;
                    var p = c.searchContext.context
                      , m = p.bbn
                      , d = p.node;
                    p = p.rh;
                    var u = c.getContextField("prefix")
                      , D = c.getContextField("n")
                      , x = c.getContextField("alias");
                    c = c.getContextField("srs");
                    return "https://" + e.searchDomain + "/s?" + g.paramsToURLParameters({
                        bbn: m,
                        node: d,
                        rh: p,
                        k: b,
                        i: x,
                        ref: l,
                        srs: c,
                        n: D,
                        crid: a,
                        sprefix: h.constructPrefixAttribution(u, x),
                        qis: "NileOptionInAutocomplete"
                    })
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0);
                d = function() {
                    function a() {}
                    a.prototype.deSelect = function(a) {
                        a.classList.remove(g.highlightSuggestion)
                    }
                    ;
                    a.prototype.select = function(a, b, c) {
                        a.classList.add(g.highlightSuggestion);
                        b.preventDefault()
                    }
                    ;
                    a.prototype.isSelected = function(a) {
                        return a.classList.contains(g.highlightSuggestion)
                    }
                    ;
                    a.prototype.matchesSearchQuery = function(a, b) {
                        return a === b.value
                    }
                    ;
                    a.prototype.isDelimited = function() {
                        return !1
                    }
                    ;
                    a.prototype.click = function(a) {
                        return !1
                    }
                    ;
                    a.prototype.resize = function(a) {}
                    ;
                    return a
                }();
                a.default = d
            }
            , function(d, a, b) {
                function g(a) {
                    for (var b = {}, c = 0; c < a.length; c++)
                        for (var f = a[c], l = 0, p = f.type(); l < p.length; l++) {
                            var e = p[l];
                            if (b[e])
                                throw Error("Multiple template registrations for " + e);
                            b[e] = f
                        }
                    return b
                }
                var e = this && this.__createBinding || (Object.create ? function(a, b, c, f) {
                    f === k && (f = c);
                    Object.defineProperty(a, f, {
                        enumerable: !0,
                        get: function() {
                            return b[c]
                        }
                    })
                }
                : function(a, b, c, f) {
                    f === k && (f = c);
                    a[f] = b[c]
                }
                );
                d = this && this.__exportStar || function(a, b) {
                    for (var c in a)
                        "default" === c || Object.prototype.hasOwnProperty.call(b, c) || e(b, a, c)
                }
                ;
                var h = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.renderingFunctions = a.dispatchTable = a.delimiter = a.options = void 0;
                var m = h(b(148))
                  , c = h(b(168))
                  , f = h(b(169))
                  , l = h(b(170))
                  , p = h(b(171))
                  , r = h(b(172))
                  , v = h(b(173))
                  , u = h(b(174))
                  , D = h(b(175))
                  , x = h(b(176))
                  , P = h(b(177))
                  , F = h(b(178))
                  , n = h(b(179))
                  , H = h(b(180))
                  , q = h(b(181))
                  , t = h(b(182))
                  , y = h(b(183))
                  , w = h(b(184));
                d(b(185), a);
                var z = new (b(193).DomKataRuntime);
                b = b(1);
                var G = b.Separator
                  , A = b.Options;
                a.options = function(a) {
                    return A.default(z, a)
                }
                ;
                a.delimiter = function() {
                    return G.default(z, {})
                }
                ;
                a.dispatchTable = g;
                a.renderingFunctions = function(a) {
                    var b = a.getContext();
                    a = [new m.default(z,a,b), new c.default(z,a,b), new f.default(z,a,b), new l.default(z,a,b), new p.default(z,a), new r.default(z,a), new v.default(z,a), new u.default(z), new D.default(z), new x.default(z), new P.default(z), new H.default(z), new F.default(z,a), new n.default(z,a,b), new q.default(z,a), new t.default(z), new y.default(z), new w.default(z,a,b)];
                    return g(a)
                }
            }
            , function(d, a) {
                function b(a, b, d) {
                    a.assertNotNull(b, ["header"]);
                    return a.root("autocomplete", "AsinHeader", [null !== b.brandingPrefix && "undefined" !== typeof b.brandingPrefix ? [a.createElement("div", {
                        "class": "s-size-mini s-asin-branding-prefix"
                    }, b.brandingPrefix), a.createElement("div", {
                        "class": "s-size-mini s-sug-pp-caption-with-branding"
                    }, b.header)] : a.createElement("div", {
                        "class": "s-size-mini s-sug-pp-caption"
                    }, b.header)])
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.AsinHeader = b
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["highlightFragments", "byline"]);
                    c = e.Highlighted;
                    return a.root("autocomplete", "DisplayKeywordWithByline", [c(a, {
                        highlightFragments: b.highlightFragments
                    }, []), " ", a.createElement("span", {
                        "class": "s-store s-highlight-secondary"
                    }, b.byline)])
                }
                var e = b(22);
                d.exports = {};
                d.exports.default = g;
                d.exports.DisplayKeywordWithByline = g
            }
            , function(d, a) {
                function b(a, b, d) {
                    return a.root("autocomplete", "Separator", [a.createElement("div", {
                        "class": "s-separator"
                    })])
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.Separator = b
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.setTitle = void 0;
                var g = b(0);
                a.setTitle = function(a, b) {
                    a.metadata.title = g.substituteStringInterpolations(b, {
                        keyword: a.value,
                        refinement: a.metadata.refinement
                    });
                    return a
                }
            }
            , function(d, a, b) {
                var g = this && this.__awaiter || function(a, b, c, e) {
                    function f(a) {
                        return a instanceof c ? a : new c(function(b) {
                            b(a)
                        }
                        )
                    }
                    return new (c || (c = Promise))(function(c, l) {
                        function p(a) {
                            try {
                                r(e.next(a))
                            } catch (H) {
                                l(H)
                            }
                        }
                        function m(a) {
                            try {
                                r(e["throw"](a))
                            } catch (H) {
                                l(H)
                            }
                        }
                        function r(a) {
                            a.done ? c(a.value) : f(a.value).then(p, m)
                        }
                        r((e = e.apply(a, b || [])).next())
                    }
                    )
                }
                  , e = this && this.__generator || function(a, b) {
                    function c(a) {
                        return function(b) {
                            return f([a, b])
                        }
                    }
                    function f(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; l; )
                            try {
                                if (e = 1,
                                m && (d = c[0] & 2 ? m["return"] : c[0] ? m["throw"] || ((d = m["return"]) && d.call(m),
                                0) : m.next) && !(d = d.call(m, c[1])).done)
                                    return d;
                                if (m = 0,
                                d)
                                    c = [c[0] & 2, d.value];
                                switch (c[0]) {
                                case 0:
                                case 1:
                                    d = c;
                                    break;
                                case 4:
                                    return l.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++;
                                    m = c[1];
                                    c = [0];
                                    continue;
                                case 7:
                                    c = l.ops.pop();
                                    l.trys.pop();
                                    continue;
                                default:
                                    if (!(d = l.trys,
                                    d = 0 < d.length && d[d.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!d || c[1] > d[0] && c[1] < d[3]))
                                        l.label = c[1];
                                    else if (6 === c[0] && l.label < d[1])
                                        l.label = d[1],
                                        d = c;
                                    else if (d && l.label < d[2])
                                        l.label = d[2],
                                        l.ops.push(c);
                                    else {
                                        d[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                    }
                                }
                                c = b.call(a, l)
                            } catch (K) {
                                c = [6, K],
                                m = 0
                            } finally {
                                e = d = 0
                            }
                        if (c[0] & 5)
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }
                    var l = {
                        label: 0,
                        sent: function() {
                            if (d[0] & 1)
                                throw d[1];
                            return d[1]
                        },
                        trys: [],
                        ops: []
                    }, e, m, d, h;
                    return h = {
                        next: c(0),
                        "throw": c(1),
                        "return": c(2)
                    },
                    "function" === typeof Symbol && (h[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    h
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.handleOffScreenPixels = a.fireInBoundaryPixels = a.firePixel = a.isWithinBoundary = a.attachClickHandler = a.clickHandler = a.getClient = a.BRANDLOGO_URL_PREFIX = a.IMPRESSION_URL_PREFIX = void 0;
                var h = b(8)
                  , m = b(0);
                a.IMPRESSION_URL_PREFIX = "https:";
                a.BRANDLOGO_URL_PREFIX = "https://";
                a.getClient = function(c) {
                    return g(void 0, void 0, void 0, function() {
                        var b;
                        return e(this, function(f) {
                            switch (f.label) {
                            case 0:
                                return (b = (c || {}).onLoad) ? [4, new Promise(function(a) {
                                    return setTimeout(a, 1E3)
                                }
                                )] : [3, 2];
                            case 1:
                                f.sent(),
                                b(),
                                a.attachClickHandler(),
                                f.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }
                ;
                a.clickHandler = function(a) {
                    if (a.currentTarget) {
                        var c = a.currentTarget;
                        a = c.getAttribute("data-slot");
                        var b = c.getAttribute("data-template");
                        c = c.getAttribute("data-index");
                        m.logEvent("c_" + a + "_" + b + "_" + c);
                        m.emitCounter("c_" + a + "_" + b + "_" + c)
                    }
                }
                ;
                a.attachClickHandler = function() {
                    var c = h.getElements("[data-index]");
                    Array.prototype.forEach.call(c, function(c) {
                        c.addEventListener("click", a.clickHandler, {
                            once: !0
                        })
                    })
                }
                ;
                a.isWithinBoundary = function(a, c) {
                    a = a.getBoundingClientRect();
                    return (c = a.width * a.height) ? .5 <= h.getVisibleArea(a) / c : !1
                }
                ;
                a.firePixel = function(a) {
                    return a && a.length ? ((new Image).src = a,
                    !0) : !1
                }
                ;
                a.fireInBoundaryPixels = function(c, b) {
                    for (var f = h.getElements("[data-pixel]"), l = 0, e = 0; e < f.length; e++) {
                        var d = f[e]
                          , g = d.getAttribute("data-slot")
                          , x = d.getAttribute("data-template")
                          , k = d.getAttribute("data-index");
                        a.isWithinBoundary(d, c) && (a.firePixel(d.getAttribute("data-pixel")) ? (m.logEvent("i_" + g + "_" + x + "_" + k),
                        m.emitCounter("i_" + g + "_" + x + "_" + k),
                        d.removeAttribute("data-pixel"),
                        ++l) : (m.logEvent("e_" + g + "_" + x + "_" + k),
                        m.emitCounter("e_" + g + "_" + x + "_" + k)))
                    }
                    l === f.length && b()
                }
                ;
                var c = function(c, b) {
                    return function() {
                        return a.fireInBoundaryPixels(c, b)
                    }
                };
                a.handleOffScreenPixels = function(a, b) {
                    var f = c(a, function() {
                        l();
                        e();
                        "function" === typeof b && b()
                    })
                      , l = h.onScroll(f, {
                        el: a
                    })
                      , e = h.onResize(f);
                    f();
                    return f
                }
            }
            , function(d, a, b) {
                function g(a, c) {
                    var b = a("#marketplace")
                      , f = a("#alias");
                    f.length && b.length && (c.getContext().autocompleteContext.updateContext({
                        alias: f.val(),
                        mid: b.val()
                    }),
                    f.bind("input", function(a) {
                        return c.getContext().autocompleteContext.updateContext({
                            alias: f.val()
                        })
                    }),
                    b.bind("input", function(a) {
                        return c.getContext().autocompleteContext.updateContext({
                            mid: b.val()
                        })
                    }))
                }
                var e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var c, b = 1, f = arguments.length; b < f; b++) {
                            c = arguments[b];
                            for (var l in c)
                                Object.prototype.hasOwnProperty.call(c, l) && (a[l] = c[l])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.component = void 0;
                b(73);
                b(95);
                b(99);
                b(105);
                b(109);
                b(114);
                var h = b(0)
                  , m = b(186)
                  , c = d(b(187))
                  , f = d(b(190))
                  , l = d(b(191))
                  , p = d(b(192));
                a.component = function(a) {
                    var b, d, r = a.$, x = a.AutocompletePlugin, k = a.JSON, F = a.localizedStrings || k.parse(r("#autocomplete-string-localizations")[0].innerHTML);
                    x = new l.default(x);
                    var n = a.inputBox ? a.inputBox : new f.default(r("#search-box")[0],x)
                      , H = a.resultsContainer || r("#attach-to-me")[0]
                      , q = a.leftPaneResultsContainer || r("#attach-to-me")[0]
                      , t = a.rightPaneResultsContainer || r("#attach-to-me")[0]
                      , y = new p.default(r,e(e(e({}, (null === (b = null === a || void 0 === a ? void 0 : a.platform) || void 0 === b ? 0 : b.maxSuggestions) ? {
                        maxSuggestions: a.platform.maxSuggestions
                    } : {}), (null === (d = null === a || void 0 === a ? void 0 : a.endpoints) || void 0 === d ? 0 : d.completion) ? {
                        completion: a.endpoints.completion
                    } : {}), (null === a || void 0 === a ? 0 : a.config) ? {
                        config: a.config
                    } : {}));
                    b = (new h.AutocompleteContext(a.cfg,a.platform,a.autocompleteContextOverrides)).context;
                    var w = new c.default(r,y,x,n,H,q,t,F,b,a.flags || {});
                    w.getContext().autocompleteContext.updateContext((new h.AutocompleteContext(a.cfg,a.platform,a.autocompleteContextOverrides)).context);
                    g(r, w);
                    a.warmup && h.shouldWarmUp() && y.warmupRequest();
                    return {
                        setSearchUrlContext: function(a) {
                            w.getContext().searchContext.updateContext(a)
                        },
                        logMetric: function(a) {
                            m.logMShopMetric(a)
                        },
                        searchQuery: function(a) {
                            a = k.parse(a);
                            a.query && n.setKeyword(a.query);
                            "searchUrlContext"in a && (this.setSearchUrlContext(a.searchUrlContext),
                            delete a.searchUrlContext);
                            "webviewHeight"in a && (w.getContext().updateWebviewHeight(a.webviewHeight),
                            delete a.webviewHeight);
                            "keyboardEnabled"in a && (w.getContext().updateKeyboardEnabled(a.keyboardEnabled),
                            delete a.keyboardEnabled);
                            w.getSuggestions(m.searchQueryToSuggestionsRequest(a))
                        },
                        navigationListener: function(a) {
                            return w.navigation(a)
                        },
                        listener: w.onInput,
                        logPrefixSearch: function() {
                            h.logOneTimeEvent(h.SearchNonAcceptanceMetric);
                            h.emitCounter(h.SearchNonAcceptanceMetric)
                        }
                    }
                }
            }
            , function(d, a, b) {
                a = b(74);
                d.exports = a
            }
            , function(d, a, b) {
                a = b(75);
                d.exports = a
            }
            , function(d, a, b) {
                b(76);
                a = b(18);
                d.exports = a("Array", "find")
            }
            , function(d, a, b) {
                d = b(4);
                var g = b(56).find;
                b = b(17);
                var e = !0;
                "find"in [] && Array(1).find(function() {
                    e = !1
                });
                d({
                    target: "Array",
                    proto: !0,
                    forced: e
                }, {
                    find: function(a) {
                        return g(this, a, 1 < arguments.length ? arguments[1] : k)
                    }
                });
                b("find")
            }
            , function(d, a) {
                a = function() {
                    return this
                }();
                try {
                    a = a || (new Function("return this"))()
                } catch (b) {
                    "object" === ("undefined" === typeof n ? "undefined" : E(n)) && (a = n)
                }
                d.exports = a
            }
            , function(d, a, b) {
                var g = b(6)
                  , e = b(43)
                  , h = b(81)
                  , m = b(25)("toPrimitive");
                d.exports = function(a, b) {
                    if (!g(a) || e(a))
                        return a;
                    var c = a[m];
                    if (c !== k) {
                        b === k && (b = "default");
                        a = c.call(a, b);
                        if (!g(a) || e(a))
                            return a;
                        throw TypeError("Can't convert object to primitive value");
                    }
                    b === k && (b = "number");
                    return h(a, b)
                }
            }
            , function(d, a, b) {
                a = b(2);
                b = b(80);
                var g = a.process;
                a = a.Deno;
                a = (a = g && g.versions || a && a.version) && a.v8;
                if (a) {
                    a = a.split(".");
                    var e = 4 > a[0] ? 1 : a[0] + a[1]
                } else
                    b && (a = b.match(/Edge\/(\d+)/),
                    (!a || 74 <= a[1]) && (a = b.match(/Chrome\/(\d+)/)) && (e = a[1]));
                d.exports = e && +e
            }
            , function(d, a, b) {
                a = b(12);
                d.exports = a("navigator", "userAgent") || ""
            }
            , function(d, a, b) {
                var g = b(6);
                d.exports = function(a, b) {
                    var e, c;
                    if ("string" === b && "function" == typeof (e = a.toString) && !g(c = e.call(a)) || "function" == typeof (e = a.valueOf) && !g(c = e.call(a)) || "string" !== b && "function" == typeof (e = a.toString) && !g(c = e.call(a)))
                        return c;
                    throw TypeError("Can't convert object to primitive value");
                }
            }
            , function(d, a) {
                d.exports = !1
            }
            , function(d, a, b) {
                var g = b(2)
                  , e = b(28)
                  , h = b(7)
                  , m = b(27)
                  , c = b(50);
                a = b(84);
                var f = a.get
                  , l = a.enforce
                  , p = String(String).split("String");
                (d.exports = function(a, b, c, f) {
                    var d = f ? !!f.unsafe : !1
                      , r = f ? !!f.enumerable : !1;
                    f = f ? !!f.noTargetGet : !1;
                    if ("function" == typeof c) {
                        "string" != typeof b || h(c, "name") || e(c, "name", b);
                        var v = l(c);
                        v.source || (v.source = p.join("string" == typeof b ? b : ""))
                    }
                    a === g ? r ? a[b] = c : m(b, c) : (d ? !f && a[b] && (r = !0) : delete a[b],
                    r ? a[b] = c : e(a, b, c))
                }
                )(Function.prototype, "toString", function() {
                    return "function" == typeof this && f(this).source || c(this)
                })
            }
            , function(d, a, b) {
                a = b(85);
                var g = b(2)
                  , e = b(6)
                  , h = b(28)
                  , m = b(7)
                  , c = b(26)
                  , f = b(51);
                b = b(29);
                g = g.WeakMap;
                if (a || c.state) {
                    var l = c.state || (c.state = new g)
                      , p = l.get
                      , r = l.has
                      , v = l.set;
                    var u = function(a, b) {
                        if (r.call(l, a))
                            throw new TypeError("Object already initialized");
                        b.facade = a;
                        v.call(l, a, b);
                        return b
                    };
                    var D = function(a) {
                        return p.call(l, a) || {}
                    };
                    var x = function(a) {
                        return r.call(l, a)
                    }
                } else {
                    var k = f("state");
                    b[k] = !0;
                    u = function(a, b) {
                        if (m(a, k))
                            throw new TypeError("Object already initialized");
                        b.facade = a;
                        h(a, k, b);
                        return b
                    }
                    ;
                    D = function(a) {
                        return m(a, k) ? a[k] : {}
                    }
                    ;
                    x = function(a) {
                        return m(a, k)
                    }
                }
                d.exports = {
                    set: u,
                    get: D,
                    has: x,
                    enforce: function(a) {
                        return x(a) ? D(a) : u(a, {})
                    },
                    getterFor: function(a) {
                        return function(b) {
                            var c;
                            if (!e(b) || (c = D(b)).type !== a)
                                throw TypeError("Incompatible receiver, " + a + " required");
                            return c
                        }
                    }
                }
            }
            , function(d, a, b) {
                a = b(2);
                b = b(50);
                a = a.WeakMap;
                d.exports = "function" === typeof a && /native code/.test(b(a))
            }
            , function(d, a, b) {
                var g = b(7)
                  , e = b(87)
                  , h = b(38)
                  , m = b(14);
                d.exports = function(a, b) {
                    for (var c = e(b), f = m.f, d = h.f, v = 0; v < c.length; v++) {
                        var u = c[v];
                        g(a, u) || f(a, u, d(b, u))
                    }
                }
            }
            , function(d, a, b) {
                a = b(12);
                var g = b(88)
                  , e = b(55)
                  , h = b(15);
                d.exports = a("Reflect", "ownKeys") || function(a) {
                    var b = g.f(h(a))
                      , f = e.f;
                    return f ? b.concat(f(a)) : b
                }
            }
            , function(d, a, b) {
                var g = b(52)
                  , e = b(30).concat("length", "prototype");
                a.f = Object.getOwnPropertyNames || function(a) {
                    return g(a, e)
                }
            }
            , function(d, a, b) {
                var g = b(54)
                  , e = Math.max
                  , h = Math.min;
                d.exports = function(a, b) {
                    a = g(a);
                    return 0 > a ? e(a + b, 0) : h(a, b)
                }
            }
            , function(d, a, b) {
                var g = b(5)
                  , e = /#|\.prototype\./;
                a = function(a, b) {
                    a = m[h(a)];
                    return a == f ? !0 : a == c ? !1 : "function" == typeof b ? g(b) : !!b
                }
                ;
                var h = a.normalize = function(a) {
                    return String(a).replace(e, ".").toLowerCase()
                }
                  , m = a.data = {}
                  , c = a.NATIVE = "N"
                  , f = a.POLYFILL = "P";
                d.exports = a
            }
            , function(d, a, b) {
                var g = b(6)
                  , e = b(59)
                  , h = b(25)("species");
                d.exports = function(a) {
                    if (e(a)) {
                        var b = a.constructor;
                        "function" != typeof b || b !== Array && !e(b.prototype) ? g(b) && (b = b[h],
                        null === b && (b = k)) : b = k
                    }
                    return b === k ? Array : b
                }
            }
            , function(d, a, b) {
                var g = b(15)
                  , e = b(93)
                  , h = b(30);
                a = b(29);
                var m = b(94), c = b(49), f = b(51)("IE_PROTO"), l = function() {}, p = function(a) {
                    a.write("\x3cscript\x3e\x3c/script\x3e");
                    a.close();
                    return a.parentWindow.Object
                }, r, v = function() {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (D) {}
                    if ("undefined" != typeof document)
                        if (document.domain && r)
                            var a = p(r);
                        else
                            a = c("iframe"),
                            a.style.display = "none",
                            m.appendChild(a),
                            a.src = "javascript:",
                            a = a.contentWindow.document,
                            a.open(),
                            a.write("\x3cscript\x3edocument.F\x3dObject\x3c/script\x3e"),
                            a.close(),
                            a = a.F;
                    else
                        a = p(r);
                    v = a;
                    for (a = h.length; a--; )
                        delete v.prototype[h[a]];
                    return v()
                };
                a[f] = !0;
                d.exports = Object.create || function(a, b) {
                    if (null !== a) {
                        l.prototype = g(a);
                        var c = new l;
                        l.prototype = null;
                        c[f] = a
                    } else
                        c = v();
                    return b === k ? c : e(c, b)
                }
            }
            , function(d, a, b) {
                a = b(3);
                var g = b(14)
                  , e = b(15)
                  , h = b(32);
                d.exports = a ? Object.defineProperties : function(a, b) {
                    e(a);
                    for (var c = h(b), l = c.length, p = 0, d; l > p; )
                        g.f(a, d = c[p++], b[d]);
                    return a
                }
            }
            , function(d, a, b) {
                a = b(12);
                d.exports = a("document", "documentElement")
            }
            , function(d, a, b) {
                a = b(96);
                d.exports = a
            }
            , function(d, a, b) {
                a = b(97);
                d.exports = a
            }
            , function(d, a, b) {
                b(98);
                a = b(18);
                d.exports = a("Array", "findIndex")
            }
            , function(d, a, b) {
                d = b(4);
                var g = b(56).findIndex;
                b = b(17);
                var e = !0;
                "findIndex"in [] && Array(1).findIndex(function() {
                    e = !1
                });
                d({
                    target: "Array",
                    proto: !0,
                    forced: e
                }, {
                    findIndex: function(a) {
                        return g(this, a, 1 < arguments.length ? arguments[1] : k)
                    }
                });
                b("findIndex")
            }
            , function(d, a, b) {
                a = b(100);
                d.exports = a
            }
            , function(d, a, b) {
                a = b(101);
                d.exports = a
            }
            , function(d, a, b) {
                b(102);
                b(104);
                a = b(18);
                d.exports = a("Array", "flatMap")
            }
            , function(d, a, b) {
                d = b(4);
                var g = b(103)
                  , e = b(13)
                  , h = b(16)
                  , m = b(57)
                  , c = b(58);
                d({
                    target: "Array",
                    proto: !0
                }, {
                    flatMap: function(a) {
                        var b = e(this)
                          , f = h(b.length);
                        m(a);
                        var d = c(b, 0);
                        d.length = g(d, b, b, f, 0, 1, a, 1 < arguments.length ? arguments[1] : k);
                        return d
                    }
                })
            }
            , function(d, a, b) {
                var g = b(59)
                  , e = b(16)
                  , h = b(31);
                d.exports = function x(a, b, l, p, d, v, u, k) {
                    var c = 0;
                    for (u = u ? h(u, k, 3) : !1; c < p; ) {
                        if (c in l) {
                            k = u ? u(l[c], c, b) : l[c];
                            if (0 < v && g(k))
                                d = x(a, b, k, e(k.length), d, v - 1) - 1;
                            else {
                                if (9007199254740991 <= d)
                                    throw TypeError("Exceed the acceptable array length");
                                a[d] = k
                            }
                            d++
                        }
                        c++
                    }
                    return d
                }
            }
            , function(d, a, b) {
                b(17)("flatMap")
            }
            , function(d, a, b) {
                a = b(106);
                d.exports = a
            }
            , function(d, a, b) {
                a = b(107);
                d.exports = a
            }
            , function(d, a, b) {
                b(108);
                a = b(18);
                d.exports = a("Array", "includes")
            }
            , function(d, a, b) {
                d = b(4);
                var g = b(53).includes;
                b = b(17);
                d({
                    target: "Array",
                    proto: !0
                }, {
                    includes: function(a) {
                        return g(this, a, 1 < arguments.length ? arguments[1] : k)
                    }
                });
                b("includes")
            }
            , function(d, a, b) {
                a = b(110);
                d.exports = a
            }
            , function(d, a, b) {
                a = b(111);
                d.exports = a
            }
            , function(d, a, b) {
                b(112);
                a = b(60);
                d.exports = a.Object.assign
            }
            , function(d, a, b) {
                d = b(4);
                b = b(113);
                d({
                    target: "Object",
                    stat: !0,
                    forced: Object.assign !== b
                }, {
                    assign: b
                })
            }
            , function(d, a, b) {
                var g = b(3);
                a = b(5);
                var e = b(32)
                  , h = b(55)
                  , m = b(23)
                  , c = b(13)
                  , f = b(24)
                  , l = Object.assign
                  , p = Object.defineProperty;
                d.exports = !l || a(function() {
                    if (g && 1 !== l({
                        b: 1
                    }, l(p({}, "a", {
                        enumerable: !0,
                        get: function() {
                            p(this, "b", {
                                value: 3,
                                enumerable: !1
                            })
                        }
                    }), {
                        b: 2
                    })).b)
                        return !0;
                    var a = {}
                      , b = {}
                      , c = Symbol();
                    a[c] = 7;
                    "abcdefghijklmnopqrst".split("").forEach(function(a) {
                        b[a] = a
                    });
                    return 7 != l({}, a)[c] || "abcdefghijklmnopqrst" != e(l({}, b)).join("")
                }) ? function(a, b) {
                    for (var l = c(a), p = arguments.length, d = 1, r = h.f, v = m.f; p > d; )
                        for (var k = f(arguments[d++]), n = r ? e(k).concat(r(k)) : e(k), q = n.length, t = 0, w; q > t; )
                            if (w = n[t++],
                            !g || v.call(k, w))
                                l[w] = k[w];
                    return l
                }
                : l
            }
            , function(d, a, b) {
                a = b(115);
                d.exports = a
            }
            , function(d, a, b) {
                a = b(116);
                d.exports = a
            }
            , function(d, a, b) {
                b(117);
                a = b(60);
                d.exports = a.Object.entries
            }
            , function(d, a, b) {
                d = b(4);
                var g = b(118).entries;
                d({
                    target: "Object",
                    stat: !0
                }, {
                    entries: function(a) {
                        return g(a)
                    }
                })
            }
            , function(d, a, b) {
                var g = b(3)
                  , e = b(32)
                  , h = b(11)
                  , m = b(23).f;
                a = function(a) {
                    return function(b) {
                        b = h(b);
                        for (var c = e(b), f = c.length, d = 0, v = [], u; f > d; )
                            u = c[d++],
                            g && !m.call(b, u) || v.push(a ? [u, b[u]] : b[u]);
                        return v
                    }
                }
                ;
                d.exports = {
                    entries: a(!0),
                    values: a(!1)
                }
            }
            , function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, b, d, c) {
                    c === k && (c = d);
                    Object.defineProperty(a, c, {
                        enumerable: !0,
                        get: function() {
                            return b[d]
                        }
                    })
                }
                : function(a, b, d, c) {
                    c === k && (c = d);
                    a[c] = b[d]
                }
                );
                d = this && this.__exportStar || function(a, b) {
                    for (var e in a)
                        "default" === e || Object.prototype.hasOwnProperty.call(b, e) || g(b, a, e)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d(b(120), a);
                d(b(121), a);
                d(b(122), a)
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.getEventType = void 0;
                a.getEventType = function(a, b) {
                    return !b || 0 >= b.length ? "onfocus" : "input" === a ? "onkeypress" : "focus" === a && b && 0 < b.length ? "onfocuswithsearchterm" : "none"
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.isMobileWeb = a.isMShop = void 0;
                a.isMShop = function(a) {
                    return a ? a.includes("mshop") : !1
                }
                ;
                a.isMobileWeb = function(a) {
                    return a ? a.includes("mobile") : !1
                }
            }
            , function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, b, d, c) {
                    c === k && (c = d);
                    Object.defineProperty(a, c, {
                        enumerable: !0,
                        get: function() {
                            return b[d]
                        }
                    })
                }
                : function(a, b, d, c) {
                    c === k && (c = d);
                    a[c] = b[d]
                }
                );
                d = this && this.__exportStar || function(a, b) {
                    for (var d in a)
                        "default" === d || Object.prototype.hasOwnProperty.call(b, d) || g(b, a, d)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d(b(124), a);
                d(b(125), a);
                d(b(126), a)
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function f() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (f.prototype = c.prototype,
                        new f)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, f = arguments.length; c < f; c++) {
                            b = arguments[c];
                            for (var l in b)
                                Object.prototype.hasOwnProperty.call(b, l) && (a[l] = b[l])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.logError = a.logEvent = a.logOneTimeEvent = a.timedPromiseWrapper = a.latencyWrapper = a.timedFunctionWrapper = a.CSMCounterLatencyMetric = a.CSMLatencyMetric = a.logJsError = void 0;
                var h = b(19);
                a.logJsError = function(a, b) {
                    void 0 === b && (b = {});
                    if ("function" === typeof ueLogError) {
                        var c = b.attribution && 0 !== b.attribution.length ? "SearchAutocomplete:" + b.attribution : "SearchAutocomplete";
                        ueLogError(a, e(e({}, b), {
                            attribution: c
                        }))
                    }
                }
                ;
                var m = function() {
                    return function(a) {
                        var b = this;
                        this.record = function(a) {
                            b.isEnabled() && (0 >= a ? b.consoleError("cannot log " + b.metricName + " with value " + a + ", it is negative or 0") : n.ue.count(b.metricName + ":" + h.getSiteVariant(), a))
                        }
                        ;
                        this.consoleError = function(a) {
                            console.error("CSM logging failed for " + b.metricName + " - " + a)
                        }
                        ;
                        this.isEnabled = function() {
                            var a = !!n.ue;
                            a || b.consoleError("CSM not found in window");
                            return a
                        }
                        ;
                        this.metricName = a
                    }
                }()
                  , c = function(a) {
                    function b(b) {
                        var c = a.call(this, b) || this;
                        c.start = function() {
                            c.isCSMTimingEnabled() && (0,
                            n.uet)("bb", c.scope, {
                                wb: 1
                            })
                        }
                        ;
                        c.setRequestId = function(a) {
                            c.isCSMTimingEnabled() && a && (0,
                            n.ues)("id", c.scope, a)
                        }
                        ;
                        c.finish = function() {
                            c.isCSMTimingEnabled() && ((0,
                            n.uet)("be", c.scope, {
                                wb: 1
                            }),
                            (0,
                            n.uex)("ld", c.scope, {
                                wb: 1
                            }))
                        }
                        ;
                        c.isCSMTimingEnabled = function() {
                            var a = n.uet && n.ues && n.uex;
                            a || c.consoleError("CSM not found in window");
                            return a
                        }
                        ;
                        c.scope = c.metricName + ":" + h.getSiteVariant();
                        return c
                    }
                    g(b, a);
                    return b
                }(m);
                a.CSMLatencyMetric = c;
                var f = function(a) {
                    function b(b) {
                        var c = a.call(this, b) || this;
                        c.finish = function() {
                            return c.record((new Date).getTime() - c.startTime)
                        }
                        ;
                        c.startTime = (new Date).getTime();
                        return c
                    }
                    g(b, a);
                    return b
                }(m);
                a.CSMCounterLatencyMetric = f;
                a.timedFunctionWrapper = function(a, b) {
                    return function() {
                        for (var c = [], l = 0; l < arguments.length; l++)
                            c[l] = arguments[l];
                        l = new f(a);
                        c = b.apply(void 0, c);
                        l.finish();
                        return c
                    }
                }
                ;
                a.latencyWrapper = function(a, b) {
                    return function() {
                        for (var f = [], l = 0; l < arguments.length; l++)
                            f[l] = arguments[l];
                        l = new c(a);
                        l.start();
                        f = b.apply(void 0, f);
                        l.finish();
                        return f
                    }
                }
                ;
                a.timedPromiseWrapper = function(a, b) {
                    var c = new f(a);
                    return b.then(function(a) {
                        c.finish();
                        return Promise.resolve(a)
                    }, function(a) {
                        c.finish();
                        return Promise.reject(a)
                    })
                }
                ;
                a.logOneTimeEvent = function(a) {
                    a = new c(a);
                    a.start();
                    a.finish()
                }
                ;
                a.logEvent = function(a, b) {
                    void 0 === b && (b = 1);
                    (new m(a)).record(b)
                }
                ;
                a.logError = function(a) {
                    (new m("Error:" + a)).record(1)
                }
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function f() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (f.prototype = c.prototype,
                        new f)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.emitError = a.emitLatency = a.emitCounter = a.measuredMethod = a.measuredPromise = a.LatencyMetric = a.emitEvents = a.eventsQueue = void 0;
                var e = b(0)
                  , h = b(19)
                  , m = {};
                a.eventsQueue = [];
                a.emitEvents = function() {
                    if (!(1 > a.eventsQueue.length)) {
                        for (var b = []; 0 < a.eventsQueue.length; ) {
                            var c = a.eventsQueue.pop();
                            b.push({
                                data: c
                            })
                        }
                        c = n.AutocompleteAPI;
                        null === c || void 0 === c ? void 0 : c.getJQuery().ajax({
                            url: "https://unagi" + e.domainSuffix + "/1/events/com.amazon.eel.SearchAutocompleteUIServiceMetrics.nexus",
                            type: "POST",
                            contentType: "application/json",
                            data: JSON.stringify({
                                events: b
                            }),
                            error: function(a, b, c) {
                                console.error("Metric emission failed with message: " + b + ", errorThrown: " + c)
                            }
                        })
                    }
                }
                ;
                setInterval(function() {
                    n.AutocompleteAPI && a.emitEvents()
                }, 3E3);
                d = function() {
                    return function(b, c, f) {
                        var l = this, d, e, p;
                        this.emit = function() {
                            var b = m[l.metricName] || 0
                              , c = l.timestamp || (new Date).getTime();
                            3E3 > c - b || (m[l.metricName] = c,
                            b = {
                                metricName: l.metricName,
                                platform: l.platform,
                                marketplaceId: l.marketplaceId,
                                isError: l.isError,
                                timestamp: c
                            },
                            l.count ? b.count = l.count : l.latency && (b.latency = l.latency),
                            a.eventsQueue.push(b))
                        }
                        ;
                        this.isEnabled = function() {
                            var a = !!l.api;
                            a || l.consoleError("Emit called before API is ready");
                            return a
                        }
                        ;
                        this.consoleError = function(a) {
                            console.error("Unagi logging failed for " + l.metricName + " - " + a)
                        }
                        ;
                        this.metricName = b;
                        this.platform = h.getSiteVariant();
                        this.api = n.AutocompleteAPI;
                        this.marketplaceId = null === (p = null === (e = null === (d = this.api) || void 0 === d ? void 0 : d.getContext().autocompleteContext) || void 0 === e ? void 0 : e.context) || void 0 === p ? void 0 : p.mid;
                        this.isError = c || !1;
                        this.timestamp = f
                    }
                }();
                var c = function(a) {
                    function b(b, c, f, l) {
                        void 0 === c && (c = 1);
                        b = a.call(this, b, f, l) || this;
                        b.count = c;
                        return b
                    }
                    g(b, a);
                    return b
                }(d)
                  , f = function(a) {
                    function b(b, c, f, l) {
                        var d = a.call(this, b, f, l) || this;
                        d.start = function() {
                            d.startTime || (d.startTime = (new Date).getTime())
                        }
                        ;
                        d.finish = function() {
                            d.startTime && !d.endTime && (d.endTime = (new Date).getTime(),
                            d.latency = d.endTime - d.startTime,
                            d.emit())
                        }
                        ;
                        c && (d.latency = c);
                        return d
                    }
                    g(b, a);
                    return b
                }(d);
                a.LatencyMetric = f;
                a.measuredPromise = function(a, b) {
                    var c = new f(a);
                    c.start();
                    b.then(function(a) {
                        c.finish();
                        return Promise.resolve(a)
                    }).catch(function(a) {
                        c.finish();
                        return Promise.reject(a)
                    });
                    return b
                }
                ;
                a.measuredMethod = function(a, b) {
                    return function() {
                        for (var c = [], l = 0; l < arguments.length; l++)
                            c[l] = arguments[l];
                        l = new f(a);
                        l.start();
                        c = b.apply(void 0, c);
                        l.finish();
                        return c
                    }
                }
                ;
                a.emitCounter = function(a, b, f) {
                    void 0 === b && (b = 1);
                    (new c(a,b,!1,f)).emit()
                }
                ;
                a.emitLatency = function(a, b, c) {
                    (new f(a,b,!1,c)).emit()
                }
                ;
                a.emitError = function(a) {
                    (new c(a,1,!0)).emit()
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.SearchNonAcceptanceMetric = a.SearchAcceptanceMetric = a.AutofillLatencyMetricName = void 0;
                a.AutofillLatencyMetricName = "AutofillLatency";
                a.SearchAcceptanceMetric = "SearchAcceptance";
                a.SearchNonAcceptanceMetric = "SearchNonAcceptance"
            }
            , function(d, a, b) {
                var g = this && this.__createBinding || (Object.create ? function(a, b, c, f) {
                    f === k && (f = c);
                    Object.defineProperty(a, f, {
                        enumerable: !0,
                        get: function() {
                            return b[c]
                        }
                    })
                }
                : function(a, b, c, f) {
                    f === k && (f = c);
                    a[f] = b[c]
                }
                );
                d = this && this.__exportStar || function(a, b) {
                    for (var c in a)
                        "default" === c || Object.prototype.hasOwnProperty.call(b, c) || g(b, a, c)
                }
                ;
                var e = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.keyboardVerticalNavHandler = a.keyboardScrollHandler = a.AutocompleteView = a.AutocompleteListTwoPane = a.AutocompleteList = void 0;
                var h = b(128);
                Object.defineProperty(a, "AutocompleteList", {
                    enumerable: !0,
                    get: function() {
                        return e(h).default
                    }
                });
                var m = b(129);
                Object.defineProperty(a, "AutocompleteListTwoPane", {
                    enumerable: !0,
                    get: function() {
                        return e(m).default
                    }
                });
                var c = b(130);
                Object.defineProperty(a, "AutocompleteView", {
                    enumerable: !0,
                    get: function() {
                        return e(c).default
                    }
                });
                var f = b(131);
                Object.defineProperty(a, "keyboardScrollHandler", {
                    enumerable: !0,
                    get: function() {
                        return e(f).default
                    }
                });
                var l = b(132);
                Object.defineProperty(a, "keyboardVerticalNavHandler", {
                    enumerable: !0,
                    get: function() {
                        return e(l).default
                    }
                });
                d(b(133), a)
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0);
                d = function() {
                    return function(a, b) {
                        var d = this;
                        this.render = function(a) {
                            var b = 0, c = !1, e, m;
                            d.autocompleteContainer.style.position = "auto";
                            d.autocompleteContainer.style.height = "auto";
                            a.suggestions.forEach(function(f, l) {
                                var p, h = "WIDGET" === f.type ? f.template : f.type;
                                try {
                                    var r = d.dataToTemplate(f);
                                    if (r) {
                                        var v = (new Date).getTime()
                                          , u = r.render(f, a);
                                        if (u && 0 < u.childNodes.length) {
                                            b >= d.autocompleteContainer.children.length ? d.autocompleteContainer.appendChild(u) : (null === (p = d.autocompleteListElements[b]) || void 0 === p ? void 0 : p.data) !== f && d.autocompleteContainer.replaceChild(u, d.autocompleteContainer.children[b]);
                                            d.autocompleteListElements[b] = new g.AutocompleteListElement(u,f,r);
                                            if (r.isDelimited() && a.suggestions.length > l + 1) {
                                                var k = d.$(u);
                                                g.delimiter().forEach(function(a) {
                                                    k.append(a)
                                                })
                                            }
                                            b += 1;
                                            "WIDGET" === f.type && (m = f,
                                            "PIN_TO_BOTTOM" === m.slot && (c = !0,
                                            e = u));
                                            r.onRendered(u, f);
                                            "WIDGET" === f.type && (g.logEvent("WidgetGenerated::" + f.strategyId, 1),
                                            g.logEvent("TimeToRenderSuggestion::" + f.strategyId, (new Date).getTime() - v))
                                        } else
                                            g.logError("LoadingFailure::" + f.strategyId),
                                            g.logJsError({
                                                message: "LoadingFailure"
                                            }, {
                                                logLevel: "ERROR",
                                                attribution: "render:" + f.strategyId + ":" + h
                                            })
                                    }
                                } catch (V) {
                                    g.logError("RenderingFailure::" + f.strategyId + "::" + V.name),
                                    g.logJsError(V, {
                                        attribution: "render:" + f.strategyId + ":" + h
                                    })
                                }
                            });
                            a.suggestions && 0 < a.suggestions.length && d.api.getAutocompletePluginCall("searchSuggestionRendered")({});
                            var h = d.autocompleteContainer.children.length - b;
                            d.autocompleteListElements = d.autocompleteListElements.slice(0, b);
                            for (var u = 0; u < h; u += 1)
                                d.autocompleteContainer.removeChild(d.autocompleteContainer.children[b]);
                            if (c && m && e)
                                if (h = d.api.getContext().webviewHeight,
                                d.api.getContext().keyboardEnabled) {
                                    d.autocompleteContainer.style.height = h + "px";
                                    u = d.getContainerTotalHeight();
                                    var k = e.offsetHeight;
                                    u >= h ? (e.style.position = "sticky",
                                    e.style.bottom = "0",
                                    e.style.marginTop = h - k + "px",
                                    n.addEventListener("scroll", g.guardError({
                                        attribution: "AutocompleteList"
                                    }, function() {
                                        e && (e.style.marginTop = "0")
                                    }), {
                                        once: !0
                                    })) : (e.style.position = "absolute",
                                    e.style.bottom = "0",
                                    e.style.width = "100%",
                                    d.autocompleteContainer.style.position = "relative")
                                } else
                                    d.autocompleteContainer.removeChild(e);
                            a.prefix.length || d.applyButtonHeight();
                            d.resetSelection()
                        }
                        ;
                        this.resizeListElements = function() {
                            d.autocompleteListElements.forEach(function(a) {
                                return a.resize()
                            })
                        }
                        ;
                        this.resetSelection = function() {
                            d.autocompleteListElements.forEach(function(a) {
                                return a.deSelect()
                            })
                        }
                        ;
                        this.getSelectedElement = function() {
                            return d.autocompleteListElements.find(function(a) {
                                return a.isSelected()
                            })
                        }
                        ;
                        this.moveSelectionUp = function(a) {
                            var b = d.findSelectedElementIndex();
                            0 <= b && b < d.autocompleteContainer.children.length && d.autocompleteListElements[b].deSelect();
                            return 0 !== b ? (d.autocompleteListElements[b - 1].select(a),
                            !0) : !1
                        }
                        ;
                        this.moveSelectionDown = function(a) {
                            var b = d.findSelectedElementIndex();
                            0 <= b && b < d.autocompleteContainer.children.length && d.autocompleteListElements[b].deSelect();
                            return b !== d.autocompleteContainer.children.length - 1 ? (d.autocompleteListElements[b + 1].select(a),
                            !0) : !1
                        }
                        ;
                        this.selectLast = function(a) {
                            d.autocompleteListElements[d.autocompleteListElements.length - 1].select(a);
                            return !0
                        }
                        ;
                        this.dataToTemplate = function(a) {
                            return d.renderingFunctions["WIDGET" === a.type ? a.template : a.type]
                        }
                        ;
                        this.findSelectedElementIndex = function() {
                            return d.autocompleteListElements.findIndex(function(a) {
                                return a.isSelected()
                            })
                        }
                        ;
                        this.applyButtonHeight = function() {
                            switch (g.getSiteVariant()) {
                            case "ios-iphone-mshop":
                                d.autocompleteContainer.style.paddingBottom = "60px";
                                break;
                            case "android-mshop":
                                d.autocompleteContainer.style.paddingBottom = "64px"
                            }
                        }
                        ;
                        this.getContainerTotalHeight = function() {
                            for (var a = 0, b = 0; b < d.autocompleteContainer.children.length; b += 1)
                                a += parseInt(n.getComputedStyle(d.autocompleteContainer.children[b], null).getPropertyValue("height"), 10);
                            return a
                        }
                        ;
                        this.autocompleteContainer = a;
                        this.autocompleteListElements = [];
                        this.renderingFunctions = g.renderingFunctions(b);
                        this.api = b;
                        this.$ = b.getJQuery()
                    }
                }();
                a.default = d
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0);
                d = function() {
                    return function(a, b, d) {
                        var c = this;
                        this.render = function(a) {
                            var b = 0
                              , f = 0;
                            c.autocompleteRightContainer.removeAttribute("style");
                            c.autocompleteLeftContainer.setAttribute("style", "flex: 0 0 40%");
                            a.suggestions.forEach(function(d, l) {
                                var e, p = "WIDGET" === d.type ? d.template : d.type;
                                try {
                                    var m = "WIDGET" === d.type && "RIGHT_SLOT" === d.slot
                                      , h = m ? c.autocompleteRightContainer : c.autocompleteLeftContainer
                                      , r = m ? c.autocompleteRightListElements : c.autocompleteLeftListElements
                                      , v = m ? f : b
                                      , u = c.dataToTemplate(d);
                                    if (u) {
                                        var k = (new Date).getTime()
                                          , D = u.render(d, a);
                                        if (D && 0 < D.childNodes.length) {
                                            v >= h.children.length ? h.appendChild(D) : (null === (e = r[v]) || void 0 === e ? void 0 : e.data) !== d && h.replaceChild(D, h.children[v]);
                                            r[v] = new g.AutocompleteListElement(D,d,u);
                                            if (u.isDelimited() && a.suggestions.length > l + 1) {
                                                var n = c.$(D);
                                                g.delimiter().forEach(function(a) {
                                                    n.append(a)
                                                })
                                            }
                                            m ? f += 1 : b += 1;
                                            u.onRendered(D, d);
                                            "WIDGET" === d.type && (g.logEvent("WidgetGenerated::" + d.strategyId, 1),
                                            g.logEvent("TimeToRenderTwoPaneSuggestion::" + d.strategyId, (new Date).getTime() - k))
                                        } else
                                            g.logError("LoadingFailure::" + d.strategyId),
                                            g.logJsError({
                                                message: "LoadingFailure"
                                            }, {
                                                logLevel: "ERROR",
                                                attribution: "render:" + d.strategyId + ":" + p
                                            })
                                    }
                                } catch (W) {
                                    g.logError("RenderingFailure::" + d.strategyId + "::" + W.name),
                                    g.logJsError(W, {
                                        attribution: "render:" + d.strategyId + ":" + p
                                    })
                                }
                            });
                            a.suggestions && 0 < a.suggestions.length && c.api.getAutocompletePluginCall("searchSuggestionRendered")({});
                            var d = c.autocompleteLeftContainer.children.length - b;
                            c.autocompleteLeftListElements = c.autocompleteLeftListElements.slice(0, b);
                            for (var e = 0; e < d; e += 1)
                                c.autocompleteLeftContainer.removeChild(c.autocompleteLeftContainer.children[b]);
                            c.resetSelection()
                        }
                        ;
                        this.clearContent = function() {
                            for (; c.autocompleteRightContainer.firstChild; )
                                c.autocompleteRightContainer.removeChild(c.autocompleteRightContainer.firstChild);
                            c.autocompleteRightContainer.setAttribute("style", "display:none");
                            c.autocompleteLeftContainer.setAttribute("style", "flex: 1")
                        }
                        ;
                        this.resizeListElements = function() {
                            c.autocompleteLeftListElements.forEach(function(a) {
                                return a.resize()
                            });
                            c.autocompleteRightListElements.forEach(function(a) {
                                return a.resize()
                            })
                        }
                        ;
                        this.resetSelection = function() {
                            c.autocompleteLeftListElements.forEach(function(a) {
                                return a.deSelect()
                            });
                            c.autocompleteRightListElements.forEach(function(a) {
                                return a.deSelect()
                            })
                        }
                        ;
                        this.getSelectedElement = function() {
                            return c.getSelectedListElements().find(function(a) {
                                return a.isSelected()
                            })
                        }
                        ;
                        this.moveSelectionUp = function(a) {
                            var b, f = c.getSelectedContainer(), d = c.getSelectedListElements(), e = c.findSelectedElementIndex();
                            if (c.$(null === (b = d[e]) || void 0 === b ? void 0 : b.domElement).find("." + g.highlightMultiItemsWidgetSuggestion).length)
                                return d[e].select(a),
                                !0;
                            0 <= e && e < f.children.length && d[e].deSelect();
                            return 0 !== e ? (d[e - 1].select(a),
                            !0) : !1
                        }
                        ;
                        this.moveSelectionDown = function(a) {
                            var b, f = c.getSelectedContainer(), d = c.getSelectedListElements(), e = c.findSelectedElementIndex();
                            if (c.$(null === (b = d[e]) || void 0 === b ? void 0 : b.domElement).find("." + g.highlightMultiItemsWidgetSuggestion).length)
                                return d[e].select(a),
                                !0;
                            0 <= e && e < f.children.length && d[e].deSelect();
                            return e !== f.children.length - 1 ? (d[e + 1].select(a),
                            !0) : !1
                        }
                        ;
                        this.moveSelectionHorizontal = function(a) {
                            var b = c.getSelectedListElements()
                              , f = c.findSelectedElementIndex()
                              , d = c.getNextSelectedListElements();
                            b[f].deSelect();
                            d[0].select(a);
                            return !0
                        }
                        ;
                        this.selectLast = function(a) {
                            var b = c.getSelectedListElements();
                            b[b.length - 1].select(a);
                            return !0
                        }
                        ;
                        this.dataToTemplate = function(a) {
                            return c.renderingFunctions["WIDGET" === a.type ? a.template : a.type]
                        }
                        ;
                        this.findSelectedElementIndex = function() {
                            return c.getSelectedListElements().findIndex(function(a) {
                                return a.isSelected()
                            })
                        }
                        ;
                        this.isRightPaneSelected = function() {
                            return c.autocompleteRightListElements.find(function(a) {
                                return a.isSelected()
                            }) !== k
                        }
                        ;
                        this.getSelectedListElements = function() {
                            return c.isRightPaneSelected() ? c.autocompleteRightListElements : c.autocompleteLeftListElements
                        }
                        ;
                        this.getNextSelectedListElements = function() {
                            return c.isRightPaneSelected() ? c.autocompleteLeftListElements : c.autocompleteRightListElements
                        }
                        ;
                        this.getSelectedContainer = function() {
                            return c.isRightPaneSelected() ? c.autocompleteRightContainer : c.autocompleteLeftContainer
                        }
                        ;
                        this.autocompleteLeftContainer = a;
                        this.autocompleteRightContainer = b;
                        this.autocompleteLeftListElements = [];
                        this.autocompleteRightListElements = [];
                        this.renderingFunctions = g.renderingFunctions(d);
                        this.api = d;
                        this.$ = d.getJQuery()
                    }
                }();
                a.default = d
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0);
                d = function() {
                    return function(a, b, d) {
                        var c = this;
                        this.render = function(a, b) {
                            c.input.showDropdown();
                            c.enableTwoPane = a.suggestions.some(function(a) {
                                if ("WIDGET" === a.type && "RIGHT_SLOT" === a.slot)
                                    return !0
                            });
                            c.enableTwoPane ? c.twoPanelists.render(a) : (c.twoPanelists.clearContent(),
                            c.list.render(a));
                            g.finishTimeToFirstSuggestion();
                            a.startTime && g.recordResponseTime((new Date).getTime() - a.startTime);
                            c.input.setAttribution(g.implicitRefTag(c.enableTwoPane ? c.twoPanelists.autocompleteLeftListElements : c.list.autocompleteListElements, a.prefix), a.responseId, g.constructPrefixAttribution(a.prefix, b.getContextField("alias")), a.startTime)
                        }
                        ;
                        this.resetSelection = function() {
                            c.enableTwoPane ? c.twoPanelists.resetSelection() : c.list.resetSelection()
                        }
                        ;
                        this.handleWindowResizeEvent = function() {
                            c.enableTwoPane ? c.twoPanelists.resizeListElements() : c.list.resizeListElements()
                        }
                        ;
                        this.handleNavigationEvent = function(a) {
                            var b, f;
                            switch (a.key) {
                            case "Enter":
                                return c.enableTwoPane && (null === (b = c.twoPanelists.getSelectedElement()) || void 0 === b ? 0 : b.click()) || (null === (f = c.list.getSelectedElement()) || void 0 === f ? 0 : f.click()) ? (a.preventDefault(),
                                !0) : !1;
                            case "Up":
                            case "ArrowUp":
                                c.input.isSelected() ? (c.input.toggleIsSelected(),
                                c.enableTwoPane ? c.twoPanelists.selectLast(a) : c.list.selectLast(a)) : (c.enableTwoPane && !c.twoPanelists.moveSelectionUp(a) || !c.enableTwoPane && !c.list.moveSelectionUp(a)) && c.input.toggleIsSelected();
                                break;
                            case "Down":
                            case "ArrowDown":
                                c.input.isSelected() && c.input.toggleIsSelected();
                                (c.enableTwoPane && !c.twoPanelists.moveSelectionDown(a) || !c.enableTwoPane && !c.list.moveSelectionDown(a)) && c.input.toggleIsSelected();
                                break;
                            case "Right":
                            case "ArrowRight":
                            case "Left":
                            case "ArrowLeft":
                                if (c.enableTwoPane) {
                                    c.input.isSelected() && c.input.toggleIsSelected();
                                    c.twoPanelists.moveSelectionHorizontal(a) || c.input.toggleIsSelected();
                                    break
                                }
                            default:
                                if (b = c.enableTwoPane ? c.twoPanelists.getSelectedElement() : c.list.getSelectedElement())
                                    b.select(a);
                                else
                                    return !1
                            }
                            a.preventDefault();
                            return !0
                        }
                        ;
                        this.input = a;
                        this.list = b;
                        this.twoPanelists = d;
                        this.enableTwoPane = !1;
                        n.addEventListener("resize", g.guardError({
                            attribution: "AutocompleteView"
                        }, function() {
                            c.handleWindowResizeEvent()
                        }))
                    }
                }();
                a.default = d
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0)
                  , e = function(a, b) {
                    b.length && (null === a || void 0 === a ? void 0 : a.removeClass(g.highlightSuggestion),
                    b.addClass(g.highlightSuggestion))
                };
                a.default = function(a, b, c, f) {
                    var d, p;
                    switch (a) {
                    case "ArrowRight":
                    case "Right":
                        return b = null === b || void 0 === b ? void 0 : b.find("." + g.highlightSuggestion),
                        c = null === b || void 0 === b ? void 0 : b.parents(f).next().find(c),
                        e(b, c),
                        c;
                    case "ArrowLeft":
                    case "Left":
                        return b = null === b || void 0 === b ? void 0 : b.find("." + g.highlightSuggestion),
                        c = null === b || void 0 === b ? void 0 : b.parents(f).prev().find(c),
                        e(b, c),
                        c;
                    default:
                        return f = null === b || void 0 === b ? void 0 : b.find("." + g.highlightSuggestionInactive),
                        f.length ? (f.removeClass(g.highlightSuggestionInactive),
                        f.addClass(g.highlightSuggestion),
                        f) : null === (p = null === (d = null === b || void 0 === b ? void 0 : b.find(c)) || void 0 === d ? void 0 : d.first()) || void 0 === p ? void 0 : p.addClass(g.highlightSuggestion)
                    }
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0)
                  , e = function(a, b) {
                    b.length && (null === a || void 0 === a ? void 0 : a.removeClass(g.highlightSuggestion),
                    b.addClass(g.highlightSuggestion))
                };
                a.default = function(a, b, c, f) {
                    var d, p, m, h, u, k, x;
                    switch (a) {
                    case "ArrowDown":
                    case "Down":
                        var n = null === b || void 0 === b ? void 0 : b.find("." + g.highlightSuggestion);
                        f = null === n || void 0 === n ? void 0 : n.parents(f).next().find(c);
                        0 === f.length && (f = null === (p = null === (d = null === b || void 0 === b ? void 0 : b.find(c)) || void 0 === d ? void 0 : d.first()) || void 0 === p ? void 0 : p.addClass(g.highlightSuggestion));
                        e(n, f);
                        return f;
                    case "ArrowUp":
                    case "Up":
                        return n = null === b || void 0 === b ? void 0 : b.find("." + g.highlightSuggestion),
                        f = null === n || void 0 === n ? void 0 : n.parents(f).prev().find(c),
                        0 === f.length && (f = null === (h = null === (m = null === b || void 0 === b ? void 0 : b.find(c)) || void 0 === m ? void 0 : m.last()) || void 0 === h ? void 0 : h.addClass(g.highlightSuggestion)),
                        e(n, f),
                        f;
                    default:
                        return d = null === b || void 0 === b ? void 0 : b.find("." + g.highlightMultiItemsWidgetSuggestion),
                        d.length ? d.removeClass(g.highlightMultiItemsWidgetSuggestion) : null === (u = null === (n = null === b || void 0 === b ? void 0 : b.find(c)) || void 0 === n ? void 0 : n.first()) || void 0 === u ? void 0 : u.addClass(g.highlightMultiItemsWidgetSuggestion),
                        null === (x = null === (k = null === b || void 0 === b ? void 0 : b.find(c)) || void 0 === k ? void 0 : k.first()) || void 0 === x ? void 0 : x.addClass(g.highlightSuggestion)
                    }
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(8)
                  , e = b(34)
                  , h = b(33);
                a.default = function(a, b) {
                    var c, d = a.value, p = a.refTag, m = a.scopes;
                    a = a.crid;
                    var v = b.searchContext.context
                      , u = v.bbn
                      , k = v.node;
                    v = v.rh;
                    var x = b.getContextField("prefix")
                      , n = b.getContextField("n")
                      , F = b.getContextField("alias");
                    b = b.getContextField("srs");
                    m && 0 !== m.length ? (F = m[0].value,
                    m = null === (c = m[1]) || void 0 === c ? void 0 : c.value) : m = b;
                    return "https://" + e.searchDomain + "/s?" + g.paramsToURLParameters({
                        bbn: u,
                        node: k,
                        rh: v,
                        k: d,
                        i: F,
                        ref: p,
                        srs: m,
                        n: n,
                        crid: a,
                        sprefix: h.constructPrefixAttribution(x, F)
                    })
                }
            }
            , function(d, a, b) {
                b.r(a);
                Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
                    configurable: !0,
                    value: function h(a) {
                        var b = isNaN(a) ? 1 : Number(a);
                        return b ? Array.prototype.reduce.call(this, function(a, f) {
                            return Array.isArray(f) ? a.push.apply(a, h.call(f, b - 1)) : a.push(f),
                            a
                        }, []) : Array.prototype.slice.call(this)
                    },
                    writable: !0
                });
                Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
                    configurable: !0,
                    value: function(a) {
                        return Array.prototype.map.apply(this, arguments).flat()
                    },
                    writable: !0
                })
            }
            , function(d, a, b) {
                function g(a) {
                    return Object.keys(a).reduce(function(b, d) {
                        if (d.includes("_")) {
                            var c = d.split("_");
                            for (var f = 1; f < c.length; f += 1)
                                0 < c[f].length && (c[f] = c[f].charAt(0).toUpperCase() + c[f].slice(1));
                            c = c.join("")
                        } else
                            c = d;
                        d = a[d];
                        f = "undefined" === typeof d ? "undefined" : E(d);
                        d && "object" === f ? d = Array.isArray(d) ? d.map(function(a) {
                            return g(a)
                        }) : g(d) : "string" === f && (d = d.replace(/&amp;/g, "\x26"));
                        b[c] = d;
                        return b
                    }, {})
                }
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.default = g
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.default = function(a, b) {
                    if (!b || 0 === b.length)
                        return [{
                            text: a,
                            hit: !1
                        }];
                    var d = a.toLowerCase().indexOf(b.toLowerCase());
                    if (-1 === d)
                        return [{
                            text: a,
                            hit: !1
                        }];
                    var e = [];
                    0 !== d && e.push({
                        text: a.substr(0, d),
                        hit: !1
                    });
                    e.push({
                        text: a.substr(d, b.length),
                        hit: !0
                    });
                    d + b.length !== a.length && e.push({
                        text: a.substr(d + b.length),
                        hit: !1
                    });
                    return e
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.default = function(a, b) {
                    var d, e, c = null === (d = b.getAutocompleteView()) || void 0 === d ? void 0 : d.input;
                    c && (c.setKeyword(a.value),
                    b = null === (e = b.getContext()) || void 0 === e ? void 0 : e.getContextField("alias"),
                    c.setAlias(a.scopes ? a.scopes[0].value : b || "aps", a.scopes ? a.scopes[0].display : k))
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.finishTimeToFirstSuggestion = a.startTimeToFirstSuggestion = a.timeToFirstSuggestionMetricName = void 0;
                var g = b(0)
                  , e = !0
                  , h = !0;
                a.timeToFirstSuggestionMetricName = "TimeToFirstSuggestion";
                var m = new g.CSMLatencyMetric(a.timeToFirstSuggestionMetricName)
                  , c = 0;
                a.startTimeToFirstSuggestion = function() {
                    e && (e = !1,
                    m.start(),
                    c = (new Date).getTime())
                }
                ;
                a.finishTimeToFirstSuggestion = function() {
                    h && !e && (h = !1,
                    m.finish(),
                    g.emitLatency(a.timeToFirstSuggestionMetricName, (new Date).getTime() - c))
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.default = function(a, b) {
                    return a.length ? a.find(function(a) {
                        return a.matchesSearchQuery(b)
                    }) ? "nb_sb_noss_1" : "nb_sb_noss_2" : "nb_sb_noss"
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.decodeSearchDropdownUrl = void 0;
                a.decodeSearchDropdownUrl = function(a) {
                    var b = Object.create(null);
                    a.split("\x26").forEach(function(a) {
                        var d = a.indexOf("\x3d")
                          , c = a.slice(0, d);
                        a = a.slice(d + 1);
                        b[c] = a
                    });
                    return b
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.suffixFieldName = a.prefixFieldName = void 0;
                a.prefixFieldName = "prefix";
                a.suffixFieldName = "suffix"
            }
            , function(d, a, b) {
                var g = this && this.__assign || function() {
                    g = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return g.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.Context = a.SearchContext = a.AutocompleteContext = void 0;
                var e = b(0)
                  , h = function() {
                    function a(a, b, c) {
                        var d, f = this;
                        this._context = (d = {},
                        d[e.prefixFieldName] = "",
                        d["page-type"] = "Search",
                        d.alias = k,
                        d["site-variant"] = "desktop",
                        d.version = "2",
                        d.event = "onkeypress",
                        d.wc = "",
                        d.lop = "en_US",
                        d["last-prefix"] = "\x00",
                        d["avg-ks-time"] = 0,
                        d.fb = "1",
                        d.srs = k,
                        d);
                        this.updateContext = function(a) {
                            void 0 === a && (a = {});
                            Object.keys(a).forEach(function(b) {
                                var c = a[b];
                                if (c || -1 !== [e.prefixFieldName, e.suffixFieldName].indexOf(b) && "" === c)
                                    f._context[b] = c
                            });
                            return f._context
                        }
                        ;
                        a && b && this.updateContext(g(g({}, this._context), {
                            alias: a.alias,
                            "session-id": a.sessionId,
                            "customer-id": a.customerId,
                            "request-id": a.requestId,
                            "page-type": a.pageType,
                            lop: a.language,
                            mid: a.obfMkt,
                            "plain-mid": a.mkt,
                            "site-variant": b.name,
                            "client-info": b.cid,
                            b2b: a.b2b,
                            fresh: a.fresh,
                            fb: a.fb,
                            n: a.n,
                            asin: a.asin
                        }));
                        c && (this._context = g(g({}, this._context), c))
                    }
                    Object.defineProperty(a.prototype, "context", {
                        get: function() {
                            return this._context
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    return a
                }();
                a.AutocompleteContext = h;
                var m = function() {
                    function a() {
                        var a = this;
                        this.searchParameterDefaults = "search-url-context";
                        this.validSearchContextUrlPrefix = "/s";
                        this._context = {
                            bbn: "",
                            node: "",
                            rh: ""
                        };
                        this.updateField = function(b, c) {
                            return Object.prototype.hasOwnProperty.call(a._context, b) ? (a._context[b] = c,
                            !0) : !1
                        }
                    }
                    a.prototype.updateContext = function(a) {
                        var b = this;
                        a.startsWith(this.validSearchContextUrlPrefix) && a.includes("?") && (new URLSearchParams(a.split("?")[1])).forEach(function(a, c) {
                            c && c in b._context && a && (b._context[c] = a)
                        })
                    }
                    ;
                    Object.defineProperty(a.prototype, "context", {
                        get: function() {
                            var a = {};
                            Object.entries(this._context).filter(function(a) {
                                return a[1]
                            }).forEach(function(b) {
                                a[b[0]] = b[1]
                            });
                            return a
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    return a
                }();
                a.SearchContext = m;
                d = function() {
                    function a(a, b, c, d) {
                        var f = this;
                        void 0 === b && (b = {});
                        this.getContextField = function(a) {
                            return f._autocompleteContext.context[a]
                        }
                        ;
                        this.updateEnabledFeatures = function(a) {
                            Object.keys(a).forEach(function(b) {
                                f.enabledFeatures[b] = a[b]
                            });
                            return f.enabledFeatures
                        }
                        ;
                        this.localizationContext = a;
                        this.enabledFeatures = b;
                        this._autocompleteContext = new h(c,d);
                        this._searchContext = new m;
                        this._webviewHeight = 0;
                        this._keyboardEnabled = !0
                    }
                    Object.defineProperty(a.prototype, "autocompleteContext", {
                        get: function() {
                            return this._autocompleteContext
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    Object.defineProperty(a.prototype, "searchContext", {
                        get: function() {
                            return this._searchContext
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    Object.defineProperty(a.prototype, "filterByString", {
                        get: function() {
                            return this.localizationContext.filterByString
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    Object.defineProperty(a.prototype, "crossCategoryString", {
                        get: function() {
                            return this.localizationContext.crossCategoryString
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    Object.defineProperty(a.prototype, "webviewHeight", {
                        get: function() {
                            return this._webviewHeight
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    Object.defineProperty(a.prototype, "keyboardEnabled", {
                        get: function() {
                            return this._keyboardEnabled
                        },
                        enumerable: !1,
                        configurable: !0
                    });
                    a.prototype.updateWebviewHeight = function(a) {
                        this._webviewHeight = a
                    }
                    ;
                    a.prototype.updateKeyboardEnabled = function(a) {
                        this._keyboardEnabled = a
                    }
                    ;
                    return a
                }();
                a.Context = d
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }
            , function(d, a, b) {
                var g = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.InstrumentedSuggestion = a.AutocompleteListElement = a.AutocompleteSuggestion = void 0;
                var e = b(65);
                Object.defineProperty(a, "AutocompleteSuggestion", {
                    enumerable: !0,
                    get: function() {
                        return g(e).default
                    }
                });
                var h = b(146);
                Object.defineProperty(a, "AutocompleteListElement", {
                    enumerable: !0,
                    get: function() {
                        return g(h).default
                    }
                });
                var m = b(147);
                Object.defineProperty(a, "InstrumentedSuggestion", {
                    enumerable: !0,
                    get: function() {
                        return g(m).default
                    }
                })
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d = function() {
                    return function(a, b, d) {
                        var e = this;
                        this.isSelected = function() {
                            return e.suggestion.isSelected(e.domElement)
                        }
                        ;
                        this.select = function(a) {
                            e.suggestion.select(e.domElement, a, e.data)
                        }
                        ;
                        this.deSelect = function() {
                            e.suggestion.deSelect(e.domElement)
                        }
                        ;
                        this.matchesSearchQuery = function(a) {
                            return e.suggestion.matchesSearchQuery(a, e.data)
                        }
                        ;
                        this.click = function() {
                            return e.suggestion.click(e.data)
                        }
                        ;
                        this.resize = function() {
                            return e.suggestion.resize(e.domElement)
                        }
                        ;
                        this.domElement = a;
                        this.data = b;
                        this.suggestion = d
                    }
                }();
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, d) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, d)
                    };
                    return function(b, d) {
                        function c() {
                            this.constructor = b
                        }
                        a(b, d);
                        b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype,
                        new c)
                    }
                }();
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                b = function(a) {
                    function b() {
                        var b = null !== a && a.apply(this, arguments) || this;
                        b.onRendered = function(a, b) {}
                        ;
                        b.render = function(a, d) {
                            a = b.accept(a, d);
                            d = b.generateHtml(a);
                            var c = document.createElement("div");
                            if (c.append)
                                c.append.apply(c, d);
                            else
                                for (var f = 0; f < d.length; f++)
                                    c.appendChild(d[f]);
                            b.attachEventHandlers(c, a);
                            return c
                        }
                        ;
                        return b
                    }
                    g(b, a);
                    b.prototype.attachEventHandlers = function(a, b) {}
                    ;
                    return b
                }(d(b(65)).default);
                a.default = b
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0)
                  , m = b(1).KeywordWithByline;
                d = function(a) {
                    function b(b, c, d) {
                        var f = a.call(this) || this;
                        f.isDelimited = function() {
                            var a = f.context.enabledFeatures;
                            if (a.useSuggestionDelimiter !== k)
                                return a.useSuggestionDelimiter;
                            a = f.api.getContext().getContextField("site-variant");
                            return h.isMShop(a) || h.isMobileWeb(a) && f.api.isUsingFullScreen()
                        }
                        ;
                        f.select = function(b, c, d) {
                            a.prototype.select.call(f, b, c, d);
                            h.textSuggestionSelectionHandler(d, f.api)
                        }
                        ;
                        f.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", h.guardError({}, function(a) {
                                a.target instanceof Element && a.target.hasAttribute("autofill") ? f.api.autofillSuggestion(b.value) : f.click(b)
                            }))
                        }
                        ;
                        f.generateHtml = function(a) {
                            return m.default(f.kataRuntime, e({
                                suggestion: a
                            }, f.context))
                        }
                        ;
                        f.api = c;
                        f.context = d;
                        f.kataRuntime = b;
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        return e(e({}, a), {
                            crid: b.responseId,
                            highlightFragments: a.highlightFragments || h.highlightText(a.value, b.prefix)
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["keyword-with-byline"]
                    }
                    ;
                    b.prototype.click = function(a) {
                        h.logOneTimeEvent(h.SearchAcceptanceMetric);
                        h.emitCounter(h.SearchAcceptanceMetric);
                        var b = this.getRefinementSelection(a);
                        b && this.api.getContext().searchContext.updateField("rh", b);
                        n.location.assign(h.buildSearchLinkUrl(a, this.api.getContext()));
                        return !0
                    }
                    ;
                    b.prototype.getRefinementSelection = function(a) {
                        var b;
                        return (null === (b = a.metadata) || void 0 === b ? 0 : b.refinement) ? a.metadata.refinement : null
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a) {
                function b(a, b, d) {
                    a.assertNotNull(b, ["suggestion"]);
                    return a.root("autocomplete", "SbMBCVerticalAligned", [a.createElement("div", {
                        "class": "multiBrandContainer",
                        id: "sb_va"
                    }, a.createElement("div", {
                        "class": "headerContainer"
                    }, a.createElement("div", {
                        "class": "a-section a-spacing-small block col contentSpaceBetween"
                    }, a.createElement("span", {
                        "aria-label": b.suggestion.metadata.header,
                        "class": "a-size-base medium a-text-caps"
                    }, b.suggestion.metadata.header), a.createElement("span", {
                        "class": "sponsored"
                    }, a.createElement("span", {
                        "class": "a-size-mini a-color-secondary adLabel"
                    }, b.suggestion.metadata.headerSuffix)))), a.createElement("div", {
                        "class": "carouselContainer"
                    }, a.createElement("div", {
                        "class": "carousel",
                        "data-track-swipe": "true",
                        "data-id": "carousel"
                    }, g(b.suggestion.widgetItems).map(function(c) {
                        return [a.createElement("div", {
                            "class": "adContainer"
                        }, a.createElement("div", {
                            "class": "contentContainer sbx-mobile",
                            "data-aid": "" + c.metadata.adId,
                            "data-cid": "" + c.metadata.campaignId,
                            "data-mrkt": "" + b.suggestion.metadata.marketplaceId,
                            "data-slot": "" + b.suggestion.metadata.slot,
                            "data-pixel": "" + c.metadata.impressionUrl,
                            "data-index": c.id,
                            "data-template": "va"
                        }, a.createElement("div", {
                            "class": "content"
                        }, a.createElement("div", {
                            "class": "cardContainer"
                        }, a.createElement("div", {
                            "class": "imageContainer"
                        }, a.createElement("div", {
                            "class": "a-section a-spacing-none block imageRow itemsCenter contentCenter"
                        }, a.createElement("a", {
                            "aria-hidden": "true",
                            "aria-label": "",
                            "class": "a-spacing-none a-link-normal logoImage link",
                            tabindex: "-1",
                            href: "" + c.metadata.clickUrl
                        }, a.createElement("div", {
                            "class": "a-section a-spacing-none contentContainer block hFull wFull row itemsCenter contentCenter"
                        }, a.createElement("img", {
                            alt: "",
                            src: "" + c.metadata.brandLogo,
                            "class": "logoImage"
                        }), a.createElement("div", {
                            "class": "imageOverlay"
                        }))))), a.createElement("div", {
                            "class": "brandContentContainer"
                        }, a.createElement("div", {
                            "class": "a-section a-spacing-none ctaContainer block row itemsCenter contentCenter"
                        }, a.createElement("a", {
                            "aria-hidden": "true",
                            "aria-label": "",
                            "class": "a-size-mini a-spacing-none a-link-normal link",
                            tabindex: "-1",
                            href: "" + c.metadata.clickUrl
                        }, a.createElement("span", {
                            "class": "cta",
                            "data-id": "cta"
                        }, a.createElement("span", {
                            "class": "brandTitle a-size-small a-color-secondary"
                        }, "" + c.metadata.brandTitle)))))))))]
                    }))))])
                }
                function g(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.SbMBCVerticalAligned = b
            }
            , function(d, a) {
                function b(a, b, d) {
                    a.assertNotNull(b, ["suggestion"]);
                    return a.root("autocomplete", "SbMBCHorizontalAligned", [a.createElement("div", {
                        "class": "multiBrandContainer",
                        id: "sb_ha"
                    }, a.createElement("div", {
                        "class": "headerContainer"
                    }, a.createElement("div", {
                        "class": "a-section a-spacing-small block col contentSpaceBetween"
                    }, a.createElement("span", {
                        "aria-label": b.suggestion.metadata.header,
                        "class": "a-size-base medium a-text-caps"
                    }, b.suggestion.metadata.header), a.createElement("span", {
                        "class": "sponsored"
                    }, a.createElement("span", {
                        "class": "a-size-mini a-color-secondary adLabel"
                    }, b.suggestion.metadata.headerSuffix)))), a.createElement("div", {
                        "class": "carouselContainer"
                    }, a.createElement("div", {
                        "class": "carousel",
                        "data-track-swipe": "true",
                        "data-id": "carousel"
                    }, g(b.suggestion.widgetItems).map(function(c) {
                        return [a.createElement("div", {
                            "class": "h-adContainer"
                        }, a.createElement("div", {
                            "class": "contentContainer sbx-mobile",
                            "data-aid": "" + c.metadata.adId,
                            "data-cid": "" + c.metadata.campaignId,
                            "data-mrkt": "" + b.suggestion.metadata.marketplaceId,
                            "data-slot": "" + b.suggestion.metadata.slot,
                            "data-pixel": "" + c.metadata.impressionUrl,
                            "data-index": c.id,
                            "data-template": "ha"
                        }, a.createElement("div", {
                            "class": "content"
                        }, a.createElement("div", {
                            "class": "hcardContainer"
                        }, a.createElement("div", {
                            "class": "himageContainer"
                        }, a.createElement("div", {
                            "class": "a-section a-spacing-none block itemsCenter contentCenter"
                        }, a.createElement("a", {
                            "aria-hidden": "true",
                            "aria-label": "",
                            "class": "a-spacing-none a-link-normal link",
                            tabindex: "-1",
                            href: "" + c.metadata.clickUrl
                        }, a.createElement("div", {
                            "class": "a-section a-spacing-none contentContainer block hFull wFull row itemsCenter contentCenter"
                        }, a.createElement("img", {
                            alt: "",
                            src: "" + c.metadata.brandLogo,
                            "class": "hlogoImage"
                        }), a.createElement("div", {
                            "class": "imageOverlay"
                        }))))), a.createElement("div", {
                            "class": "hbrandContentContainer"
                        }, a.createElement("div", {
                            "class": "a-section a-spacing-none hctaContainer block col itemsCenter contentCenter"
                        }, a.createElement("a", {
                            "aria-hidden": "true",
                            "aria-label": "",
                            "class": "a-size-mini a-spacing-none a-link-normal link",
                            tabindex: "-1",
                            href: "" + c.metadata.clickUrl
                        }, a.createElement("span", {
                            "class": "cta",
                            "data-id": "cta"
                        }, a.createElement("span", {
                            "class": "hbrandTitle a-color-primary a-size-small"
                        }, "" + c.metadata.brandTitle), a.createElement("span", {
                            "class": "hbrandHeadline a-color-secondary"
                        }, "" + c.metadata.brandHeadline)))))))))]
                    }))))])
                }
                function g(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.SbMBCHorizontalAligned = b
            }
            , function(d, a) {
                function b(a, b, d) {
                    a.assertNotNull(b, ["suggestion"]);
                    var c;
                    return a.root("autocomplete", "Stores", [g(b.suggestion.widgetItems).map(function(b) {
                        return [(c = b.metadata,
                        [a.createElement("div", {
                            "class": "s-suggestion s-store-suggestion",
                            "data-keyword": "" + c.text,
                            role: "button",
                            "aria-label": "" + c.text
                        }, a.createElement("a", {
                            "class": "s-store-sug-link",
                            "aria-label": "" + c.text,
                            href: "" + c.linkUrl
                        }, a.createElement("div", {
                            "class": "s-store-sug-logo-container",
                            style: "opacity: 1;"
                        }, a.createElement("img", {
                            "class": "s-store-sug-logo",
                            alt: "" + c.text,
                            src: "" + c.imageUrl
                        })), a.createElement("div", {
                            "class": "s-store-sug-text-container"
                        }, a.createElement("div", {
                            "class": "s-store-sug-text"
                        }, "" + c.text))))])]
                    })])
                }
                function g(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.Stores = b
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    var c = h(a.context || {});
                    a.assertNotNull(b, ["suggestion"]);
                    var f;
                    return a.root("autocomplete", "MultiAsins", ["" !== b.suggestion.metadata.header ? a.createElement("div", {
                        "class": "s-bia-widget-header"
                    }, b.suggestion.metadata.header) : k, a.createElement("div", {
                        "class": "s-bia-suggestion"
                    }, e(b.suggestion.widgetItems).map(function(d, l) {
                        return [(f = d.metadata,
                        [a.createElement("div", {
                            "class": "s-asin-sug-container"
                        }, a.createElement("div", {
                            "class": "s-asin-suggestion s-suggestion"
                        }, a.createElement("a", {
                            "class": "s-asin-sug-link",
                            href: "" + f.linkUrl
                        }, a.createElement("div", {
                            "class": "s-asin-sug-left"
                        }, a.createElement("div", {
                            "class": "s-asin-image-container",
                            style: "opacity: 1;"
                        }, a.createElement("img", {
                            "class": "s-asin-image",
                            src: "" + f.imageUrl
                        }))), a.createElement("div", {
                            "class": "s-asin-sug-right"
                        }, a.createElement("div", {
                            "class": "s-size-mini s-sug-pp-caption"
                        }, "" + f.asinHeader), a.createElement("div", {
                            "class": "s-asin-title"
                        }, "" + f.asinTitle)))), l < c.size(b.suggestion.widgetItems) - 1 ? a.createElement("hr", {
                            "class": "s-top-line-separator"
                        }) : k)])]
                    }))])
                }
                function e(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                var h = b(153).default;
                d.exports = {};
                d.exports.default = g;
                d.exports.MultiAsins = g
            }
            , function(d, a, b) {
                function g(a) {
                    return a && a.length !== k ? a.length : "object" === ("undefined" === typeof a ? "undefined" : E(a)) && null !== a ? Object.keys(a).length : 0
                }
                function e(a) {
                    return 0 === g(a)
                }
                function h(a) {
                    return e(a) ? a : a.trim()
                }
                b.r(a);
                var m = {
                    toJSON: function(a) {
                        return JSON.stringify(a)
                    },
                    size: g,
                    isEmpty: e,
                    trim: h,
                    isBlank: function(a) {
                        a = h(a);
                        return e(a)
                    },
                    toUpperCase: function(a) {
                        return e(a) ? a : a.toLocaleUpperCase()
                    },
                    toLowerCase: function(a) {
                        return e(a) ? a : a.toLocaleLowerCase()
                    },
                    range: function(a, b) {
                        var c = [];
                        if (a === k || null === a || b === k || null === b)
                            return c;
                        for (; a <= b; )
                            c.push(a),
                            a++;
                        return c
                    },
                    renameKeys: function(a, b) {
                        var c = {};
                        Object.keys(b).forEach(function(d) {
                            c[a[d] || d] = b[d]
                        });
                        return c
                    },
                    keys: function(a) {
                        return Object.keys(a)
                    },
                    contains: function(a, b) {
                        return e(a) ? !1 : 0 <= a.indexOf(b)
                    }
                };
                a["default"] = function() {
                    return m
                }
            }
            , function(d, a) {
                function b(a, b, d) {
                    a.assertNotNull(b, ["suggestion"]);
                    return a.root("autocomplete", "MultiKeywordSuggestions", ["" !== b.suggestion.label ? a.createElement("div", {
                        "class": "s-onfocus-label"
                    }, b.suggestion.label) : k, g(b.suggestion.suggestions).map(function(b, c) {
                        return [a.createElement("div", {
                            "class": h(["s-suggestion-container", "s-onfocus", "s-onfocus-" + c])
                        }, a.createElement("div", {
                            "class": "s-suggestion s-suggestion-ellipsis-direction",
                            role: "button",
                            "aria-label": b.value
                        }, b.value))]
                    })])
                }
                function g(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                function e(a) {
                    return null !== a && a !== k && "" !== a
                }
                function h(a) {
                    a = a.join(" ").split(" ").filter(e).join(" ");
                    return 0 < a.length ? a : k
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.MultiKeywordSuggestions = b
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["asin"]);
                    c = e.AsinHeader;
                    return a.root("autocomplete", "WidgetAsin", [b.asin.topLineSeparator ? a.createElement("hr", {
                        "class": "s-top-line-separator"
                    }) : k, a.createElement("div", {
                        "class": "s-asin-suggestion s-suggestion"
                    }, a.createElement("a", {
                        "class": "s-asin-sug-link",
                        href: b.asin.link
                    }, a.createElement("div", {
                        "class": "s-asin-sug-left"
                    }, a.createElement("div", {
                        "class": "s-asin-image-container",
                        style: "opacity: 1;"
                    }, a.createElement("img", {
                        "class": "s-asin-image",
                        src: b.asin.image
                    }))), a.createElement("div", {
                        "class": "s-asin-sug-right"
                    }, c(a, {
                        brandingPrefix: b.asin.brandingPrefix,
                        header: b.asin.header
                    }, []), a.createElement("div", {
                        "class": "s-asin-title"
                    }, b.asin.title))))])
                }
                var e = b(67);
                d.exports = {};
                d.exports.default = g;
                d.exports.WidgetAsin = g
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    a.assertNotNull(b, ["suggestion", "prefix", "showCarouselControl"]);
                    d = c.LowercaseHeader;
                    var p = f.UppercaseHeader
                      , g = l.CarouselControl;
                    return a.root("autocomplete", "CardsWidget", [a.createElement("div", {
                        "class": m([b.prefix + "_widget-suggestion"])
                    }, b.suggestion.metadata.separator ? a.createElement("hr", {
                        "class": "cards_discover_widget-hr"
                    }) : k, "" !== b.suggestion.metadata.headerPrefix || "" !== b.suggestion.metadata.headerSuffix ? d(a, {
                        headerPrefix: b.suggestion.metadata.headerPrefix,
                        header: b.suggestion.metadata.header,
                        headerSuffix: b.suggestion.metadata.headerSuffix,
                        cssPrefix: "cards-carousel"
                    }, []) : "" !== b.suggestion.metadata.title || "" !== b.suggestion.metadata.header ? p(a, {
                        header: "" !== b.suggestion.metadata.title ? b.suggestion.metadata.title : b.suggestion.metadata.header,
                        cssPrefix: "cards_carousel_widget"
                    }, []) : k, a.createElement("div", {
                        "class": m([b.prefix + "_widget-sug-container-top"])
                    }, e(b.suggestion.widgetItems).map(function(c) {
                        return [a.createElement("div", {
                            "class": m([b.prefix + "_widget-sug-column"])
                        }, a.createElement("div", {
                            "class": m([b.prefix + "_widget-sug-card"]),
                            role: "button",
                            "aria-label": "" + c.metadata.text
                        }, a.createElement("a", {
                            "class": m([b.prefix + "_widget-sug-link"]),
                            href: "" + c.metadata.linkUrl
                        }, a.createElement("div", {
                            "class": m([b.prefix + "_widget-sug-image-container"])
                        }, a.createElement("img", {
                            "class": m([b.prefix + "_widget-sug-image"]),
                            src: "" + c.metadata.imageUrl
                        }), a.createElement("div", {
                            "class": m([b.prefix + "_widget-sug-image-background", b.prefix + "_widget-sug-image-grey-shield"])
                        })), c.metadata.text ? a.createElement("div", {
                            "class": m([b.prefix + "_widget-sug-text"])
                        }, "" + c.metadata.text) : k)))]
                    })), b.showCarouselControl ? g(a, {}, []) : k)])
                }
                function e(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                function h(a) {
                    return null !== a && a !== k && "" !== a
                }
                function m(a) {
                    a = a.join(" ").split(" ").filter(h).join(" ");
                    return 0 < a.length ? a : k
                }
                var c = b(21)
                  , f = b(9)
                  , l = b(20);
                d.exports = {};
                d.exports.default = g;
                d.exports.CardsWidget = g
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    a.assertNotNull(b, ["suggestion", "showCarouselControl"]);
                    d = h.LowercaseHeader;
                    var f = m.UppercaseHeader
                      , l = c.CarouselControl;
                    return a.root("autocomplete", "ImageRefinement", [a.createElement("div", {
                        "class": "image_refinement_widget-suggestion"
                    }, b.suggestion.metadata.headerPrefix || b.suggestion.metadata.headerSuffix ? d(a, {
                        headerPrefix: b.suggestion.metadata.headerPrefix,
                        header: b.suggestion.metadata.header,
                        headerSuffix: b.suggestion.metadata.headerSuffix,
                        cssPrefix: "image-refinement"
                    }, []) : f(a, {
                        header: b.suggestion.metadata.title,
                        cssPrefix: "image_refinement_widget"
                    }, []), a.createElement("div", {
                        "class": "image_refinement_widget-sug-container"
                    }, e(b.suggestion.widgetItems).map(function(b) {
                        return [b.metadata.imageUrl ? a.createElement("div", {
                            "class": "image_refinement_widget-sug-column"
                        }, a.createElement("div", {
                            "class": "s-suggestion image_refinement_widget-sug-item",
                            role: "button",
                            "aria-label": "" + b.metadata.text
                        }, a.createElement("a", {
                            "class": "image_refinement_widget-sug-link",
                            href: "" + b.metadata.linkUrl
                        }, a.createElement("div", {
                            "class": "image_refinement_widget-sug-image-container",
                            style: "padding: " + b.metadata.imagePadding
                        }, a.createElement("img", {
                            "class": "image_refinement_widget-sug-image",
                            src: "" + b.metadata.imageUrl
                        })), a.createElement("div", {
                            "class": "image_refinement_widget-sug-text"
                        }, "" + b.metadata.text)))) : k]
                    })), b.showCarouselControl ? l(a, {}, []) : k)])
                }
                function e(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                var h = b(21)
                  , m = b(9)
                  , c = b(20);
                d.exports = {};
                d.exports.default = g;
                d.exports.ImageRefinement = g
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    a.assertNotNull(b, ["suggestion", "showCarouselControl", "prefix"]);
                    d = c.UppercaseHeader;
                    var g = f.LowercaseHeader
                      , p = l.CarouselControl;
                    return a.root("autocomplete", "TextRefinement", [a.createElement("div", {
                        "class": m([b.prefix])
                    }, "" !== b.suggestion.metadata.title ? d(a, {
                        header: b.suggestion.metadata.title,
                        cssPrefix: "text_refinement_widget"
                    }, []) : k, "" !== b.suggestion.metadata.headerPrefix || "" !== b.suggestion.metadata.headerSuffix ? g(a, {
                        headerPrefix: b.suggestion.metadata.headerPrefix,
                        header: b.suggestion.metadata.header,
                        headerSuffix: b.suggestion.metadata.headerSuffix,
                        cssPrefix: b.prefix
                    }, []) : k, a.createElement("ol", {
                        "class": m([b.prefix + "-carousel-container"])
                    }, e(b.suggestion.widgetItems).map(function(c) {
                        return [a.createElement("li", {
                            "class": m([b.prefix + "-carousel-card", "discover-textnav-pill"])
                        }, a.createElement("div", {
                            "class": m([b.prefix + "-carousel-sug-item"])
                        }, a.createElement("a", {
                            href: "" + c.metadata.linkUrl
                        }, a.createElement("div", {
                            "class": "discover-textnav-pill"
                        }, a.createElement("div", {
                            "class": m(["s-suggestion", b.prefix + "-suggestion"]),
                            role: "button",
                            "aria-label": "" + c.metadata.text
                        }, "" + c.metadata.text)))))]
                    })), b.showCarouselControl ? p(a, {}, []) : k)])
                }
                function e(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                function h(a) {
                    return null !== a && a !== k && "" !== a
                }
                function m(a) {
                    a = a.join(" ").split(" ").filter(h).join(" ");
                    return 0 < a.length ? a : k
                }
                var c = b(9)
                  , f = b(21)
                  , l = b(20);
                d.exports = {};
                d.exports.default = g;
                d.exports.TextRefinement = g
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    a.assertNotNull(b, ["suggestion"]);
                    d = h.UppercaseHeader;
                    return a.root("autocomplete", "ImageSuggestion", [a.createElement("div", {
                        "class": "image_suggestion_widget-suggestion"
                    }, "" !== b.suggestion.metadata.header ? d(a, {
                        header: b.suggestion.metadata.header,
                        cssPrefix: "image_suggestion"
                    }, []) : k, a.createElement("div", {
                        "class": "image_suggestion_widget-sug-container-top"
                    }, e(b.suggestion.widgetItems).map(function(b) {
                        return [b.metadata.imageUrl ? a.createElement("div", {
                            "class": "image_suggestion_widget-sug-column"
                        }, a.createElement("div", {
                            "class": "image_suggestion_widget-sug-card",
                            role: "button"
                        }, a.createElement("a", {
                            "class": "image_suggestion_widget-sug-link",
                            href: "" + b.metadata.linkUrl
                        }, a.createElement("div", {
                            "class": "image_suggestion_widget-sug-image-container"
                        }, a.createElement("img", {
                            "class": "image_suggestion_widget-sug-image",
                            src: "" + b.metadata.imageUrl
                        }))))) : k]
                    })))])
                }
                function e(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                var h = b(9);
                d.exports = {};
                d.exports.default = g;
                d.exports.ImageSuggestion = g
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    a.assertNotNull(b, ["suggestion"]);
                    d = h.UppercaseHeader;
                    return a.root("autocomplete", "ImageAndTextSuggestion", [a.createElement("div", {
                        "class": "image_text_suggestion_widget-suggestion"
                    }, "" !== b.suggestion.metadata.header ? d(a, {
                        header: b.suggestion.metadata.header,
                        cssPrefix: "image_text_suggestion"
                    }, []) : k, a.createElement("div", {
                        "class": "image_text_suggestion_widget-sug-container"
                    }, e(b.suggestion.widgetItems).map(function(b) {
                        return [b.metadata.imageUrl ? a.createElement("div", {
                            "class": "image_text_suggestion_widget-sug-column"
                        }, a.createElement("div", {
                            "class": "s-suggestion image_text_suggestion_widget-sug-item",
                            role: "button",
                            "aria-label": "" + b.metadata.text
                        }, a.createElement("a", {
                            "class": "image_text_suggestion_widget-sug-link",
                            href: "" + b.metadata.linkUrl
                        }, a.createElement("div", {
                            "class": "image_text_suggestion_widget-sug-image-container"
                        }, a.createElement("img", {
                            "class": "image_text_suggestion_widget-sug-image",
                            src: "" + b.metadata.imageUrl
                        })), a.createElement("div", {
                            "class": "image_text_suggestion_widget-sug-text"
                        }, "" + b.metadata.text)))) : k]
                    })))])
                }
                function e(a) {
                    return !a.map && Java.from ? Java.from(a) : a
                }
                var h = b(9);
                d.exports = {};
                d.exports.default = g;
                d.exports.ImageAndTextSuggestion = g
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["twl"]);
                    c = e.Highlighted;
                    return a.root("autocomplete", "TextWithLink", [a.createElement("div", {
                        "class": "s-suggestion s-suggestion-link-template"
                    }, a.createElement("a", {
                        href: b.twl.linkUrl
                    }, c(a, {
                        highlightFragments: b.twl.highlightFragments
                    }, [])))])
                }
                var e = b(22);
                d.exports = {};
                d.exports.default = g;
                d.exports.TextWithLink = g
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["suggestion", "enabledFeatures"]);
                    c = e.DisplayString;
                    return a.root("autocomplete", "TrendingSearchSuggestion", [a.createElement("div", {
                        "class": "s-suggestion-trending-container"
                    }, a.createElement("div", {
                        "class": "s-suggestion-trending-icon-container"
                    }, a.createElement("i", {
                        "class": "s-suggestion-trending-icon"
                    })), a.createElement("div", {
                        "class": "s-suggestion-trending s-suggestion-ellipsis-direction",
                        role: "button",
                        "aria-label": b.suggestion.value
                    }, c(a, {
                        highlightFragments: b.suggestion.highlightFragments,
                        crossCategoryString: b.suggestion.crossCategoryString
                    }, [])), b.enabledFeatures.autofill || b.enabledFeatures.fullScreenMobileWeb ? a.createElement("div", {
                        "class": "s-suggestion-autofillDistinct",
                        autofill: !0,
                        role: "button",
                        "aria-label": "append suggestion"
                    }, a.createElement("i", {
                        "class": "icon-autofill",
                        autofill: !0
                    })) : k)])
                }
                var e = b(35);
                d.exports = {};
                d.exports.default = g;
                d.exports.TrendingSearchSuggestion = g
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["suggestion", "enabledFeatures"]);
                    c = e.KeywordSuggestion;
                    return a.root("autocomplete", "KeywordImageSuggestion", [c(a, {
                        suggestion: b.suggestion,
                        enabledFeatures: b.enabledFeatures,
                        suggestionClasses: b.suggestionClasses
                    }, [a.createElement("div", {
                        "class": "s-suggestion-image-container"
                    }, a.createElement("img", {
                        "class": "s-suggestion-image-left",
                        src: b.suggestion.metadata.imageUrl
                    }), a.createElement("div", {
                        "class": "s-sugg-image-background s-suggestion-image-background-grey-shield"
                    }))])])
                }
                var e = b(36);
                d.exports = {};
                d.exports.default = g;
                d.exports.KeywordImageSuggestion = g
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["suggestion", "enabledFeatures"]);
                    c = e.KeywordSuggestion;
                    return a.root("autocomplete", "RecentSearchSuggestion", [c(a, {
                        suggestion: b.suggestion,
                        enabledFeatures: b.enabledFeatures,
                        suggestionClasses: "s-recentSearchDistinct"
                    }, [a.createElement("div", {
                        "class": "s-suggestion-deleteDistinct",
                        deleteurl: !0,
                        role: "button",
                        "aria-label": "delete"
                    }, a.createElement("i", {
                        "class": "a-icon a-icon-close s-suggestion-delete-icon",
                        deleteurl: !0
                    }))])])
                }
                var e = b(36);
                d.exports = {};
                d.exports.default = g;
                d.exports.RecentSearchSuggestion = g
            }
            , function(d, a, b) {
                function g(a, b, d) {
                    a.assertNotNull(b, ["suggestion", "enabledFeatures"]);
                    var c = m.DisplayKeywordWithByline;
                    return a.root("autocomplete", "KeywordWithByline", [a.createElement("div", {
                        "class": "s-suggestion-container"
                    }, b.enabledFeatures.autofill && !b.enabledFeatures.invertDeleteRecentSuggestionIcon ? a.createElement("div", {
                        "class": "s-suggestion-autofillDistinct",
                        autofill: !0,
                        role: "button",
                        "aria-label": "append suggestion"
                    }, a.createElement("i", {
                        "class": "icon-autofill",
                        autofill: !0
                    })) : k, a.createElement("div", {
                        "class": h(["s-suggestion" + (null !== b.suggestionClasses && "undefined" !== typeof b.suggestionClasses ? " " + b.suggestionClasses : "")]),
                        role: "button",
                        "aria-label": b.suggestion.value
                    }, c(a, {
                        highlightFragments: b.suggestion.highlightFragments,
                        byline: b.suggestion.metadata.byline
                    }, [])), b.enabledFeatures.useSuggestionsIcons ? null !== b.suggestionClasses && "undefined" !== typeof b.suggestionClasses ? ["s-recentSearchDistinct" === b.suggestionClasses ? a.createElement("div", {
                        "class": "icon-suggestion-div past-icon-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-past-search-suggestion",
                        "past-icon": !0
                    })) : k, "s-recentSearchDistinct" !== b.suggestionClasses ? a.createElement("div", {
                        "class": "icon-suggestion-div search-icon-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-search-suggestion",
                        "suggestion-icon": !0
                    })) : k] : a.createElement("div", {
                        "class": "icon-suggestion-div search-icon-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-search-suggestion",
                        "suggestion-icon": !0
                    })) : k, d)])
                }
                function e(a) {
                    return null !== a && a !== k && "" !== a
                }
                function h(a) {
                    a = a.join(" ").split(" ").filter(e).join(" ");
                    return 0 < a.length ? a : k
                }
                var m = b(68);
                d.exports = {};
                d.exports.default = g;
                d.exports.KeywordWithByline = g
            }
            , function(d, a) {
                function b(a, b, d) {
                    a.assertNotNull(b, ["value", "display"]);
                    return a.root("autocomplete", "Options", [a.createElement("option", {
                        value: "search-alias\x3d" + b.value
                    }, b.display)])
                }
                d.exports = {};
                d.exports.default = b;
                d.exports.Options = b
            }
            , function(d, a, b) {
                function g(a, b, c) {
                    a.assertNotNull(b, ["suggestion", "enabledFeatures"]);
                    var d = e.Separator;
                    return a.root("autocomplete", "NileSearchSuggestionsWidget", [a.createElement("div", {
                        "class": "nile-suggestion-container"
                    }, a.createElement("div", {
                        "class": "s-nile-suggestion-container"
                    }, b.enabledFeatures.autofill || b.enabledFeatures.fullScreenMobileWeb ? a.createElement("div", {
                        "class": "s-suggestion-autofillDistinct",
                        autofill: !0,
                        role: "button",
                        "aria-label": "append suggestion"
                    }, a.createElement("i", {
                        "class": "icon-autofill",
                        autofill: !0
                    })) : k, a.createElement("div", {
                        "class": "s-nile-suggestion s-suggestion-ellipsis-direction",
                        role: "button",
                        "aria-label": b.suggestion.value
                    }, a.createElement("div", {
                        "class": "nile-suggestion-value"
                    }, b.suggestion.value)), a.createElement("div", {
                        "class": "nile-icon-suggestion-div",
                        "suggestion-icon-div": !0
                    }, a.createElement("i", {
                        "class": "icon-nile-search-suggestion",
                        "nile-suggestion-icon": !0
                    })), c), d(a, {}, []))])
                }
                var e = b(69);
                d.exports = {};
                d.exports.default = g;
                d.exports.NileSearchSuggestionsWidget = g
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0)
                  , m = b(1).KeywordSuggestion;
                d = function(a) {
                    function b(b, c, d) {
                        var f = a.call(this) || this;
                        f.isDelimited = function() {
                            var a = f.context.enabledFeatures;
                            if (a.useSuggestionDelimiter !== k)
                                return a.useSuggestionDelimiter;
                            a = f.api.getContext().getContextField("site-variant");
                            return h.isMShop(a) || h.isMobileWeb(a) && f.api.isUsingFullScreen()
                        }
                        ;
                        f.select = function(b, c, d) {
                            a.prototype.select.call(f, b, c, d);
                            h.textSuggestionSelectionHandler(d, f.api)
                        }
                        ;
                        f.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", h.guardError({}, function(a) {
                                a.target instanceof Element && a.target.hasAttribute("autofill") ? f.api.autofillSuggestion(b.value) : f.click(b)
                            }))
                        }
                        ;
                        f.generateHtml = function(a) {
                            return m.default(f.kataRuntime, {
                                suggestion: a,
                                enabledFeatures: f.context.enabledFeatures
                            })
                        }
                        ;
                        f.api = c;
                        f.context = d;
                        f.kataRuntime = b;
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        return e(e({}, a), {
                            crid: b.responseId,
                            highlightFragments: a.highlightFragments || h.highlightText(a.value, b.prefix),
                            crossCategoryString: h.buildCrossCategoryString(this.context.crossCategoryString, a.scopes)
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["KEYWORD"]
                    }
                    ;
                    b.prototype.click = function(a) {
                        h.logOneTimeEvent(h.SearchAcceptanceMetric);
                        h.emitCounter(h.SearchAcceptanceMetric);
                        n.location.assign(h.buildSearchLinkUrl(a, this.api.getContext()));
                        return !0
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0)
                  , m = b(1).KeywordImageSuggestion;
                d = function(a) {
                    function b(b, c, d) {
                        var f = a.call(this) || this;
                        f.isDelimited = function() {
                            var a = f.context.enabledFeatures;
                            if (a.useSuggestionDelimiter !== k)
                                return a.useSuggestionDelimiter;
                            a = f.api.getContext().getContextField("site-variant");
                            return h.isMShop(a) || h.isMobileWeb(a) && f.api.isUsingFullScreen()
                        }
                        ;
                        f.select = function(b, c, d) {
                            a.prototype.select.call(f, b, c, d);
                            h.textSuggestionSelectionHandler(d, f.api)
                        }
                        ;
                        f.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", h.guardError({}, function(a) {
                                a.target instanceof Element && a.target.hasAttribute("autofill") ? f.api.autofillSuggestion(b.value) : f.click(b)
                            }))
                        }
                        ;
                        f.generateHtml = function(a) {
                            return m.default(f.kataRuntime, {
                                suggestion: a,
                                enabledFeatures: e(e({}, f.context.enabledFeatures), {
                                    useSuggestionsIcons: !1
                                })
                            })
                        }
                        ;
                        f.api = c;
                        f.context = d;
                        f.kataRuntime = b;
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        return e(e({}, a), {
                            crid: b.responseId,
                            highlightFragments: a.highlightFragments || h.highlightText(a.value, b.prefix),
                            crossCategoryString: h.buildCrossCategoryString(this.context.crossCategoryString, a.scopes)
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["kw-img-l"]
                    }
                    ;
                    b.prototype.click = function(a) {
                        h.logOneTimeEvent(h.SearchAcceptanceMetric);
                        h.emitCounter(h.SearchAcceptanceMetric);
                        n.location.assign(h.buildSearchLinkUrl(a, this.api.getContext()));
                        return !0
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0)
                  , m = b(1).RecentSearchSuggestion;
                d = function(a) {
                    function b(b, c, d) {
                        var f = a.call(this) || this;
                        f.generateHtml = function(a) {
                            return m.default(f.kataRuntime, {
                                suggestion: a,
                                enabledFeatures: f.context.enabledFeatures
                            })
                        }
                        ;
                        f.select = function(b, c, d) {
                            a.prototype.select.call(f, b, c, d);
                            h.textSuggestionSelectionHandler(d, f.api)
                        }
                        ;
                        f.isDelimited = function() {
                            var a = f.context.enabledFeatures;
                            if (a.useSuggestionDelimiter !== k)
                                return a.useSuggestionDelimiter;
                            a = f.api.getContext().getContextField("site-variant");
                            return h.isMShop(a) || h.isMobileWeb(a) && f.api.isUsingFullScreen()
                        }
                        ;
                        f.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", h.guardError({}, function(a) {
                                a.target instanceof Element && a.target.hasAttribute("deleteurl") ? f.api.deleteSuggestion(b.deleteUrl) : a.target instanceof Element && a.target.hasAttribute("autofill") ? f.api.autofillSuggestion(b.value) : f.click(b)
                            }))
                        }
                        ;
                        f.api = c;
                        f.kataRuntime = b;
                        f.context = d;
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        return e(e({}, a), {
                            crid: b.responseId,
                            highlightFragments: h.highlightText(a.value, b.prefix),
                            crossCategoryString: h.buildCrossCategoryString(this.context.crossCategoryString, a.scopes)
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["PAST_SEARCHES"]
                    }
                    ;
                    b.prototype.click = function(a) {
                        h.logOneTimeEvent(h.SearchAcceptanceMetric);
                        h.emitCounter(h.SearchAcceptanceMetric);
                        n.location.assign(h.buildSearchLinkUrl(a, this.api.getContext()));
                        return !0
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }();
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(10)
                  , m = d(b(37))
                  , c = b(19)
                  , f = b(1).CardsWidget
                  , l = {
                    cards: "cards_discover",
                    "discover-top-grey": "cards_discover",
                    "discover-bot-grey": "cards_discover",
                    "card-carousel": "cards_carousel",
                    cardCarousel: "cards_carousel"
                }
                  , p = function(a) {
                    return {
                        cardsRowContainer: "." + a + "_widget-sug-container-top",
                        cardContainer: "." + a + "_widget-sug-column",
                        selectionClass: "." + a + "_widget-sug-card",
                        prefix: a
                    }
                };
                b = function(a) {
                    function b(b, d) {
                        var f = a.call(this) || this;
                        f.isDelimited = function() {
                            return !0
                        }
                        ;
                        f.attachEventHandlers = function(a) {
                            f.carouselControl.attachEventHandlers(a)
                        }
                        ;
                        f.select = function(a, b) {
                            var c;
                            a = e.keyboardScrollHandler(b.key, null === (c = f.carouselControl.elements) || void 0 === c ? void 0 : c.scrollableArea, f.classes.selectionClass, f.classes.cardContainer);
                            f.carouselControl.scrollToHighlightedSuggestion(a)
                        }
                        ;
                        f.click = function() {
                            return f.isSelected() && f.carouselControl.click()
                        }
                        ;
                        f.isSelected = function() {
                            var a, b;
                            return 0 < (null === (b = null === (a = f.carouselControl.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === b ? void 0 : b.find("." + e.highlightSuggestion).length)
                        }
                        ;
                        f.deSelect = function() {
                            var a, b;
                            null === (b = null === (a = f.carouselControl.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === b ? void 0 : b.find(f.classes.selectionClass).each(function(a, b) {
                                if (null === b || void 0 === b ? 0 : b.classList.contains(e.highlightSuggestion))
                                    null === b || void 0 === b ? void 0 : b.classList.remove(e.highlightSuggestion),
                                    null === b || void 0 === b ? void 0 : b.classList.add(e.highlightSuggestionInactive)
                            })
                        }
                        ;
                        f.onRendered = function() {
                            f.carouselControl.onRendered()
                        }
                        ;
                        f.showCarouselControl = function() {
                            return "desktop" === c.getSiteVariant() && "cards_carousel" === f.classes.prefix
                        }
                        ;
                        f.api = d;
                        f.$ = d.getJQuery();
                        f.kataRuntime = b;
                        f.classes = p(l.cards);
                        f.carouselControl = new m.default(d,f.$,f.classes.cardsRowContainer);
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        var b = this.classes.cardsRowContainer;
                        this.classes = p(l[a.template]);
                        b !== this.classes.cardsRowContainer && (this.carouselControl = new m.default(this.api,this.$,this.classes.cardsRowContainer));
                        a.metadata = h.setDefaultMetadata(a.metadata);
                        return e.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return f.default(this.kataRuntime, {
                            suggestion: a,
                            prefix: this.classes.prefix,
                            showCarouselControl: this.showCarouselControl()
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["cards", "discover-top-grey", "discover-bot-grey", "card-carousel", "cardCarousel"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = b
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }();
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(10)
                  , m = d(b(37))
                  , c = b(70)
                  , f = b(1).ImageRefinement;
                b = function(a) {
                    function b(b, c) {
                        var d = a.call(this) || this;
                        d.select = function(a, b) {
                            var c;
                            a = e.keyboardScrollHandler(b.key, null === (c = d.carouselControl.elements) || void 0 === c ? void 0 : c.scrollableArea, ".image_refinement_widget-sug-item", ".image_refinement_widget-sug-column");
                            d.carouselControl.scrollToHighlightedSuggestion(a);
                            b.preventDefault()
                        }
                        ;
                        d.isDelimited = function() {
                            return !0
                        }
                        ;
                        d.deSelect = function() {
                            var a, b;
                            null === (b = null === (a = d.carouselControl.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === b ? void 0 : b.find(".image_refinement_widget-sug-item").each(function(a, b) {
                                if (null === b || void 0 === b ? 0 : b.classList.contains(e.highlightSuggestion))
                                    null === b || void 0 === b ? void 0 : b.classList.remove(e.highlightSuggestion),
                                    null === b || void 0 === b ? void 0 : b.classList.add(e.highlightSuggestionInactive)
                            })
                        }
                        ;
                        d.isSelected = function() {
                            var a, b;
                            return 0 < (null === (b = null === (a = d.carouselControl.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === b ? void 0 : b.find("." + e.highlightSuggestion).length)
                        }
                        ;
                        d.attachEventHandlers = function(a) {
                            d.carouselControl.attachEventHandlers(a)
                        }
                        ;
                        d.click = function() {
                            return d.isSelected() && d.carouselControl.click()
                        }
                        ;
                        d.onRendered = function() {
                            d.carouselControl.onRendered()
                        }
                        ;
                        d.showCarouselControl = function() {
                            return "desktop" === e.getSiteVariant()
                        }
                        ;
                        d.$ = c.getJQuery();
                        d.api = c;
                        d.filterByString = c.getContext().filterByString;
                        d.kataRuntime = b;
                        d.carouselControl = new m.default(c,d.$,".image_refinement_widget-sug-container");
                        return d
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        var b, d;
                        this.filterByString && (null === (b = a.metadata) || void 0 === b ? 0 : b.refinement) && (a = c.setTitle(a, this.filterByString));
                        a.metadata = h.setDefaultMetadata(a.metadata);
                        for (b = 0; b < a.widgetItems.length; b += 1) {
                            var f = a.widgetItems[b];
                            f.metadata.image_url && (f.metadata.imagePadding = null !== (d = f.metadata.image_padding) && void 0 !== d ? d : "0")
                        }
                        return e.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.resize = function(a) {
                        this.carouselControl.onResized()
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return f.default(this.kataRuntime, {
                            suggestion: a,
                            showCarouselControl: this.showCarouselControl()
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["image-refinement"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = b
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }();
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                var e;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0), m = b(10), c = d(b(37)), f = b(70), l = b(1).TextRefinement, p;
                (function(a) {
                    a.DISCOVER = "discover-top-refinement-desktop-top";
                    a.TEXT_REFINEMENT = "text-refinement"
                }
                )(p || (p = {}));
                var r = (e = {},
                e[p.DISCOVER] = "discover-tr",
                e[p.TEXT_REFINEMENT] = "text-refinement",
                e)
                  , k = function(a) {
                    return {
                        cardsRowContainer: "." + a + "-carousel-container",
                        cardContainer: "." + a + "-carousel-card",
                        selectionClass: "." + a + "-carousel-sug-item",
                        prefix: a
                    }
                };
                b = function(a) {
                    function b(b, d) {
                        var f = a.call(this) || this;
                        f.select = function(a, b) {
                            var c;
                            a = h.keyboardScrollHandler(b.key, null === (c = f.carouselControl.elements) || void 0 === c ? void 0 : c.scrollableArea, f.classes.selectionClass, f.classes.cardContainer);
                            f.carouselControl.scrollToHighlightedSuggestion(a);
                            b.preventDefault()
                        }
                        ;
                        f.isDelimited = function() {
                            return !0
                        }
                        ;
                        f.deSelect = function() {
                            var a, b;
                            null === (b = null === (a = f.carouselControl.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === b ? void 0 : b.find(f.classes.selectionClass).each(function(a, b) {
                                if (null === b || void 0 === b ? 0 : b.classList.contains(h.highlightSuggestion))
                                    null === b || void 0 === b ? void 0 : b.classList.remove(h.highlightSuggestion),
                                    null === b || void 0 === b ? void 0 : b.classList.add(h.highlightSuggestionInactive)
                            })
                        }
                        ;
                        f.isSelected = function() {
                            var a, b;
                            return 0 < (null === (b = null === (a = f.carouselControl.elements) || void 0 === a ? void 0 : a.scrollableArea) || void 0 === b ? void 0 : b.find("." + h.highlightSuggestion).length)
                        }
                        ;
                        f.attachEventHandlers = function(a) {
                            f.carouselControl.attachEventHandlers(a)
                        }
                        ;
                        f.click = function() {
                            return f.isSelected() && f.carouselControl.click()
                        }
                        ;
                        f.onRendered = function() {
                            f.carouselControl.onRendered()
                        }
                        ;
                        f.generateHtml = function(a) {
                            return l.default(f.kataRuntime, {
                                suggestion: a,
                                showCarouselControl: f.showCarouselControl(),
                                prefix: f.classes.prefix
                            })
                        }
                        ;
                        f.showCarouselControl = function() {
                            return "desktop" === h.getSiteVariant()
                        }
                        ;
                        f.$ = d.getJQuery();
                        f.api = d;
                        f.filterByString = d.getContext().filterByString;
                        f.kataRuntime = b;
                        f.classes = k(r[p.DISCOVER]);
                        f.carouselControl = new c.default(d,f.$,f.classes.cardsRowContainer);
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        var b, d = this.classes.cardsRowContainer;
                        this.classes = k(r[a.template]);
                        d !== this.classes.cardsRowContainer && (this.carouselControl = new c.default(this.api,this.$,this.classes.cardsRowContainer));
                        this.filterByString && (null === (b = a.metadata) || void 0 === b ? 0 : b.refinement) && (a = f.setTitle(a, this.filterByString));
                        a.metadata = m.setDefaultMetadata(a.metadata);
                        return h.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.resize = function(a) {
                        this.carouselControl.onResized()
                    }
                    ;
                    b.prototype.type = function() {
                        return [p.DISCOVER, p.TEXT_REFINEMENT]
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = b
            }
            , function(d, a, b) {
                function g(a, b) {
                    var c, d, f;
                    return {
                        highlightFragments: a.highlightFragments || h.highlightText(null === (d = null === (c = null === a || void 0 === a ? void 0 : a.widgetItems[0]) || void 0 === c ? void 0 : c.metadata) || void 0 === d ? void 0 : d.text, b.prefix),
                        linkUrl: null === (f = null === a || void 0 === a ? void 0 : a.widgetItems[0]) || void 0 === f ? void 0 : f.metadata.link_url
                    }
                }
                var e = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.translate = void 0;
                var h = b(0)
                  , m = b(1).TextWithLink;
                a.translate = g;
                d = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.isDelimited = function() {
                            return !0
                        }
                        ;
                        c.click = function() {
                            var a = document.querySelectorAll(".s-suggestion-link-template a");
                            if (0 === a.length)
                                return h.logError("ClickedNonExistingWidget"),
                                h.emitError("ClickedNonExistingWidget"),
                                !1;
                            a[0].click();
                            return !0
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    e(b, a);
                    b.prototype.accept = function(a, b) {
                        return g(a, b)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return m.default(this.kataRuntime, {
                            twl: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["keywords-link", "promoted-suggestion"]
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                function g(a) {
                    var b, c = null === (b = null === a || void 0 === a ? void 0 : a.widgetItems[0]) || void 0 === b ? void 0 : b.metadata;
                    return {
                        header: c.asin_header,
                        image: c.image_url,
                        link: c.link_url,
                        title: c.asin_title,
                        topLineSeparator: "storefront" === (null === a || void 0 === a ? void 0 : a.template) ? !0 : !1,
                        brandingPrefix: c.branding_prefix
                    }
                }
                var e = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.translate = void 0;
                var h = b(0)
                  , m = b(1).WidgetAsin;
                a.translate = g;
                d = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.isDelimited = function() {
                            return !0
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    e(b, a);
                    b.prototype.accept = function(a) {
                        return g(a)
                    }
                    ;
                    b.prototype.click = function(a) {
                        a = document.getElementsByClassName("s-asin-sug-link");
                        if (0 === a.length)
                            return h.logError("ClickedNonExistingWidget"),
                            h.emitError("ClickedNonExistingWidget"),
                            !1;
                        a[0].click();
                        return !0
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return m.default(this.kataRuntime, {
                            asin: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["asin", "storefront"]
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, d) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, d)
                    };
                    return function(b, d) {
                        function c() {
                            this.constructor = b
                        }
                        a(b, d);
                        b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype,
                        new c)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(1).Stores;
                d = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.click = function() {
                            var a = document.getElementsByClassName("s-store-sug-link");
                            if (0 === a.length)
                                return e.logError("ClickedNonExistingWidget"),
                                e.emitError("ClickedNonExistingWidget"),
                                !1;
                            a[0].click();
                            return !0
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        return e.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return h.default(this.kataRuntime, {
                            suggestion: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["stores"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, d) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, d)
                    };
                    return function(b, d) {
                        function c() {
                            this.constructor = b
                        }
                        a(b, d);
                        b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype,
                        new c)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(1).ImageAndTextSuggestion;
                d = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.onRendered = function(a) {
                            a.style.width = "100%"
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        return e.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return h.default(this.kataRuntime, {
                            suggestion: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["image-text-suggestion"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, d) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, d)
                    };
                    return function(b, d) {
                        function c() {
                            this.constructor = b
                        }
                        a(b, d);
                        b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype,
                        new c)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(1).MultiKeywordSuggestions;
                d = function(a) {
                    function b(b, c) {
                        var d = a.call(this) || this;
                        d.isDelimited = function() {
                            return !0
                        }
                        ;
                        d.select = function(b, c, f) {
                            a.prototype.select.call(d, b, c, f);
                            e.textSuggestionSelectionHandler(f, d.api)
                        }
                        ;
                        d.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", e.guardError({}, function(c) {
                                if (c.target instanceof Element) {
                                    c = c.target.closest(".s-onfocus");
                                    for (var f = 0 < d.$(a).children(".s-onfocus-label").length, g = 0; g < a.childNodes.length; g += 1)
                                        if (a.childNodes[g].isEqualNode(c))
                                            return e.logOneTimeEvent(e.SearchAcceptanceMetric),
                                            e.emitCounter(e.SearchAcceptanceMetric),
                                            n.location.assign(e.buildSearchLinkUrl(b.suggestions[g - (f ? 1 : 0)], d.api.getContext())),
                                            !0
                                }
                                return !1
                            }))
                        }
                        ;
                        d.generateHtml = function(a) {
                            return h.default(d.kataRuntime, {
                                suggestion: a
                            })
                        }
                        ;
                        d.api = c;
                        d.kataRuntime = b;
                        d.$ = c.getJQuery();
                        return d
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        var b, c, d = {
                            label: null !== (c = null === (b = a.metadata) || void 0 === b ? void 0 : b.header) && void 0 !== c ? c : "",
                            suggestions: []
                        };
                        b = 0;
                        for (a = a.widgetItems; b < a.length; b++)
                            c = a[b],
                            d.suggestions.push({
                                value: c.metadata.value,
                                type: c.metadata.type,
                                refTag: c.metadata.reftag,
                                strategyId: c.metadata.strategyid,
                                crid: c.metadata.crid
                            });
                        return d
                    }
                    ;
                    b.prototype.type = function() {
                        return ["MultiKeywordSuggestions"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0)
                  , m = b(1).TrendingSearchSuggestion;
                d = function(a) {
                    function b(b, c, d) {
                        var f = a.call(this) || this;
                        f.isDelimited = function() {
                            var a = f.context.enabledFeatures;
                            if (a.useSuggestionDelimiter !== k)
                                return a.useSuggestionDelimiter;
                            a = f.api.getContext().getContextField("site-variant");
                            return h.isMShop(a) || h.isMobileWeb(a) && f.api.isUsingFullScreen()
                        }
                        ;
                        f.select = function(b, c, d) {
                            a.prototype.select.call(f, b, c, d);
                            h.textSuggestionSelectionHandler(d, f.api)
                        }
                        ;
                        f.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", h.guardError({}, function(a) {
                                a.target instanceof Element && a.target.hasAttribute("autofill") ? f.api.autofillSuggestion(b.value) : f.click(b)
                            }))
                        }
                        ;
                        f.generateHtml = function(a) {
                            return m.default(f.kataRuntime, {
                                suggestion: a,
                                enabledFeatures: f.context.enabledFeatures
                            })
                        }
                        ;
                        f.api = c;
                        f.context = d;
                        f.kataRuntime = b;
                        return f
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        return e(e({}, a), {
                            crid: b.responseId,
                            highlightFragments: a.highlightFragments || h.highlightText(a.value, b.prefix),
                            crossCategoryString: h.buildCrossCategoryString(this.context.crossCategoryString, a.scopes)
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["TRENDING_SEARCHES"]
                    }
                    ;
                    b.prototype.click = function(a) {
                        h.logOneTimeEvent(h.SearchAcceptanceMetric);
                        h.emitCounter(h.SearchAcceptanceMetric);
                        n.location.assign(h.buildSearchLinkUrl(a, this.api.getContext()));
                        return !0
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, d) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, d)
                    };
                    return function(b, d) {
                        function c() {
                            this.constructor = b
                        }
                        a(b, d);
                        b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype,
                        new c)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(1).ImageSuggestion;
                d = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.onRendered = function(a) {
                            a.style.width = "100%"
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        return e.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return h.default(this.kataRuntime, {
                            suggestion: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["image-suggestion"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }();
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = b(10)
                  , m = b(1).MultiAsins;
                d = function(a) {
                    function b(b, c) {
                        var d = a.call(this) || this;
                        d.attachEventHandlers = function(a) {
                            d.navigationArea = d.$(a).find(d.classes.widgetSuggestionContainer)
                        }
                        ;
                        d.select = function(a, b) {
                            e.keyboardVerticalNavHandler(b.key, d.navigationArea, d.classes.asinSuggestion, d.classes.asinSuggestionContainer)
                        }
                        ;
                        d.isSelected = function() {
                            var a;
                            return 0 < (null === (a = d.navigationArea) || void 0 === a ? void 0 : a.find("." + e.highlightSuggestion).length)
                        }
                        ;
                        d.deSelect = function() {
                            var a;
                            null === (a = d.navigationArea) || void 0 === a ? void 0 : a.find(d.classes.asinSuggestion).each(function(a, b) {
                                if (null === b || void 0 === b ? 0 : b.classList.contains(e.highlightSuggestion))
                                    null === b || void 0 === b ? void 0 : b.classList.remove(e.highlightSuggestion),
                                    null === b || void 0 === b ? void 0 : b.classList.add(e.highlightSuggestionInactive);
                                if (null === b || void 0 === b ? 0 : b.classList.contains(e.highlightMultiItemsWidgetSuggestion))
                                    null === b || void 0 === b ? void 0 : b.classList.remove(e.highlightMultiItemsWidgetSuggestion)
                            })
                        }
                        ;
                        d.api = c;
                        d.$ = c.getJQuery();
                        d.kataRuntime = b;
                        d.classes = {
                            widgetSuggestionContainer: ".s-bia-suggestion",
                            asinSuggestion: ".s-asin-suggestion",
                            asinSuggestionContainer: ".s-asin-sug-container"
                        };
                        return d
                    }
                    g(b, a);
                    b.prototype.accept = function(a) {
                        a.metadata = h.setDefaultMetadata(a.metadata);
                        return e.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return m.default(this.kataRuntime, {
                            suggestion: a
                        })
                    }
                    ;
                    b.prototype.click = function(a) {
                        var b, c;
                        a = null === (c = null === (b = this.navigationArea) || void 0 === b ? void 0 : b.find("." + e.highlightSuggestion)) || void 0 === c ? void 0 : c.find("a");
                        return 0 < (null === a || void 0 === a ? void 0 : a.length) ? (a[0].click(),
                        !0) : !1
                    }
                    ;
                    b.prototype.type = function() {
                        return ["multiAsins"]
                    }
                    ;
                    return b
                }(e.InstrumentedSuggestion);
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var f in b)
                                Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d = b(0);
                var h = b(71)
                  , m = b(8)
                  , c = b(1).SbMBCHorizontalAligned;
                b = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.onRendered = function() {
                            h.getClient({
                                onLoad: function() {
                                    var a = m.getElement('[data-id\x3d"carousel"]');
                                    a && h.handleOffScreenPixels(a)
                                }
                            })
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        a && a.widgetItems && a.widgetItems.forEach(function(a) {
                            a.metadata.impressionUrl = h.IMPRESSION_URL_PREFIX + a.metadata.impressionUrl;
                            a.metadata.brandLogo = h.BRANDLOGO_URL_PREFIX + a.metadata.brandLogo
                        });
                        return e({}, a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return c.default(this.kataRuntime, {
                            suggestion: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["sb-mbc-mobile-ha"]
                    }
                    ;
                    return b
                }(d.InstrumentedSuggestion);
                a.default = b
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var f in b)
                                Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                d = b(0);
                var h = b(71)
                  , m = b(8)
                  , c = b(1).SbMBCVerticalAligned;
                b = function(a) {
                    function b(b) {
                        var c = a.call(this) || this;
                        c.onRendered = function() {
                            h.getClient({
                                onLoad: function() {
                                    var a = m.getElement('[data-id\x3d"carousel"]');
                                    a && h.handleOffScreenPixels(a)
                                }
                            })
                        }
                        ;
                        c.kataRuntime = b;
                        return c
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        a && a.widgetItems && a.widgetItems.forEach(function(a) {
                            a.metadata.impressionUrl = h.IMPRESSION_URL_PREFIX + a.metadata.impressionUrl;
                            a.metadata.brandLogo = h.BRANDLOGO_URL_PREFIX + a.metadata.brandLogo
                        });
                        return e({}, a)
                    }
                    ;
                    b.prototype.generateHtml = function(a) {
                        return c.default(this.kataRuntime, {
                            suggestion: a
                        })
                    }
                    ;
                    b.prototype.type = function() {
                        return ["sb-mbc-mobile-va"]
                    }
                    ;
                    return b
                }(d.InstrumentedSuggestion);
                a.default = b
            }
            , function(d, a, b) {
                var g = this && this.__extends || function() {
                    var a = function(b, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(a, b) {
                            a.__proto__ = b
                        }
                        || function(a, b) {
                            for (var c in b)
                                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                        }
                        ;
                        return a(b, c)
                    };
                    return function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        a(b, c);
                        b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                        new d)
                    }
                }()
                  , e = this && this.__assign || function() {
                    e = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var f in b)
                                Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f])
                        }
                        return a
                    }
                    ;
                    return e.apply(this, arguments)
                }
                ;
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var h = b(0)
                  , m = d(b(64))
                  , c = b(1).NileSearchSuggestionsWidget;
                b = function(a) {
                    function b(b, d, f) {
                        var e = a.call(this) || this;
                        e.generateHtml = function(a) {
                            return c.default(e.kataRuntime, {
                                suggestion: a,
                                enabledFeatures: e.context.enabledFeatures
                            })
                        }
                        ;
                        e.attachEventHandlers = function(a, b) {
                            a.addEventListener("click", h.guardError({}, function(a) {
                                a.target instanceof Element && a.target.hasAttribute("autofill") ? e.api.autofillSuggestion(b.value) : e.click(b)
                            }))
                        }
                        ;
                        e.api = d;
                        e.context = f;
                        e.kataRuntime = b;
                        return e
                    }
                    g(b, a);
                    b.prototype.accept = function(a, b) {
                        a = e(e({}, a), {
                            crid: b.responseId
                        });
                        return h.normalizeInputObject(a)
                    }
                    ;
                    b.prototype.click = function(a) {
                        h.logOneTimeEvent(h.SearchAcceptanceMetric);
                        h.emitCounter(h.SearchAcceptanceMetric);
                        n.location.assign(m.default(a, this.api.getContext()));
                        return !0
                    }
                    ;
                    b.prototype.type = function() {
                        return ["nile-keyword-suggestions"]
                    }
                    ;
                    return b
                }(h.InstrumentedSuggestion);
                a.default = b
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.highlightMultiItemsWidgetSuggestion = a.highlightSuggestionInactive = a.highlightSuggestion = void 0;
                a.highlightSuggestion = "s-selected";
                a.highlightSuggestionInactive = "s-selected-inactive";
                a.highlightMultiItemsWidgetSuggestion = "s-widget-selected"
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.logMShopMetric = a.searchQueryToSuggestionsRequest = void 0;
                var g = b(0)
                  , e = !0
                  , h = 6E4 * (new Date).getTimezoneOffset()
                  , m = {
                    query: g.prefixFieldName
                }
                  , c = function(a) {
                    return a.split("").map(function(a, b) {
                        var c = a.toLowerCase();
                        return c === a || 0 === b ? c : "-" + c
                    }).join("")
                };
                a.searchQueryToSuggestionsRequest = function(a) {
                    a = Object.entries(a).reduce(function(a, b) {
                        var d = b[0];
                        b = b[1];
                        m[d] ? a[m[d]] = b : a[c(d)] = b;
                        return a
                    }, {});
                    e ? (e = !1,
                    a.event = a.prefix ? "onfocuswithsearchterm" : "onfocus") : a.event = "onkeypress";
                    a["site-variant"] = g.getSiteVariant().startsWith("android") ? g.getSiteVariant() : a["site-variant"];
                    return a
                }
                ;
                a.logMShopMetric = function(a) {
                    a && a.metricName && (a.timestamp && (a.timestamp -= h),
                    a.latency ? g.emitLatency(a.metricName, a.latency, a.timestamp) : a.count && g.emitCounter(a.metricName, a.count, a.timestamp))
                }
            }
            , function(d, a, b) {
                var g = this && this.__assign || function() {
                    g = Object.assign || function(a) {
                        for (var b, c = 1, d = arguments.length; c < d; c++) {
                            b = arguments[c];
                            for (var e in b)
                                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                        }
                        return a
                    }
                    ;
                    return g.apply(this, arguments)
                }
                ;
                d = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = d(b(188))
                  , m = b(189);
                b = function() {
                    function a(a, b, c, d, v, u, q, t, w, y) {
                        var f = this;
                        this.onInput = function(a) {
                            var b;
                            void 0 === a && (a = "input");
                            var c = f.autocompleteView.input.getKeyword()
                              , d = f.autocompleteView.input.getAliasFromDropdown()
                              , g = f.autocompleteView.input.getSelectedSearchDropdownUrl();
                            if (g && (g = e.decodeSearchDropdownUrl(g),
                            g.srs)) {
                                var h = g.srs;
                                d = g["search-alias"]
                            }
                            f.getSuggestions(f.context.autocompleteContext.updateContext((b = {
                                prefix: c,
                                alias: d,
                                srs: h,
                                event: e.getEventType(a, c)
                            },
                            b["cursor-position"] = f.autocompleteView.input.getCursorPosition(),
                            b)))
                        }
                        ;
                        this.renderSuggestions = function(a) {
                            return function(b) {
                                e.measuredMethod("TimeToRedraw", function(a, b) {
                                    return e.timedFunctionWrapper("TimeToRedraw", f.autocompleteView.render)(a, b)
                                })(b, f.context);
                                f.context.autocompleteContext.updateContext({
                                    "last-prefix": a.prefix
                                })
                            }
                        }
                        ;
                        this.getSuggestions = function(a) {
                            m.recordKeyPress();
                            e.startTimeToFirstSuggestion();
                            return f.handler.getSuggestions(f.getSuggestionsRequestParameters(a), f.renderSuggestions(a))
                        }
                        ;
                        this.deleteSuggestion = function(a) {
                            var b = f.getSuggestionsRequestParameters();
                            return f.handler.deleteSuggestion(a, b, f.updateSuggestionList, f.renderSuggestions(b))
                        }
                        ;
                        this.getSuggestionsRequestParameters = function(a) {
                            var b = a ? a["cursor-position"] : k;
                            return f.context.autocompleteContext.updateContext(f.flags.useSuffix && b !== k ? g(g({}, a), {
                                "avg-ks-time": m.getAverageKeyPressTime(),
                                prefix: e.getQueryPrefix(a.prefix, b),
                                suffix: e.getQuerySuffix(a.prefix, b)
                            }) : g(g({}, a), {
                                "avg-ks-time": m.getAverageKeyPressTime()
                            }))
                        }
                        ;
                        this.autofillSuggestion = function(a) {
                            var b = new e.CSMCounterLatencyMetric(e.AutofillLatencyMetricName)
                              , c = new e.LatencyMetric(e.AutofillLatencyMetricName);
                            c.start();
                            f.flags.useFullScreen ? f.autocompleteView.input.autoFill(a) : f.autocompletePluginHandler.call("autofill")({
                                text: a
                            }, function() {
                                b.finish();
                                c.finish()
                            });
                            e.logEvent("AutoFillSelected");
                            e.emitCounter("AutoFillSelected")
                        }
                        ;
                        this.updateSuggestionList = function() {
                            var a = f.context.autocompleteContext;
                            f.getSuggestions(a.updateContext(a))
                        }
                        ;
                        this.getAutocompleteView = function() {
                            return f.autocompleteView
                        }
                        ;
                        this.navigation = function(a) {
                            return f.autocompleteView.handleNavigationEvent(a)
                        }
                        ;
                        this.getJQuery = function() {
                            return f.$
                        }
                        ;
                        this.getAutocompletePluginCall = function(a) {
                            return f.autocompletePluginHandler.call(a)
                        }
                        ;
                        this.hideDropdown = function() {
                            f.searchInput.hideDropdown()
                        }
                        ;
                        this.isUsingFullScreen = function() {
                            return f.flags.useFullScreen
                        }
                        ;
                        this.$ = a;
                        this.handler = b;
                        this.autocompletePluginHandler = c;
                        this.resultsContainer = v;
                        this.leftPaneResultsContainer = u;
                        this.rightPaneResultsContainer = q;
                        this.flags = y;
                        this.context = new e.Context(t,this.autocompletePluginHandler.getCordovaEnabledFeatures());
                        this.flags.useFullScreen && "mobile" === e.getSiteVariant() && this.context.updateEnabledFeatures({
                            fullScreenMobileWeb: !0
                        });
                        this.flags.invertDeleteRecentSuggestionIcon && this.context.updateEnabledFeatures({
                            invertDeleteRecentSuggestionIcon: !0
                        });
                        this.flags.useSuggestionsIcons && this.context.updateEnabledFeatures({
                            useSuggestionsIcons: !0
                        });
                        this.flags.useSuggestionDelimiter !== k && this.context.updateEnabledFeatures({
                            useSuggestionDelimiter: this.flags.useSuggestionDelimiter
                        });
                        this.context.autocompleteContext.updateContext(w);
                        this.searchInput = "desktop" === e.getSiteVariant() || "mobile" === e.getSiteVariant() ? new h.default(d,this) : d;
                        this.autocompleteView = new e.AutocompleteView(this.searchInput,new e.AutocompleteList(this.leftPaneResultsContainer,this),new e.AutocompleteListTwoPane(this.leftPaneResultsContainer,this.rightPaneResultsContainer,this));
                        ["focus", "input"].forEach(function(a) {
                            return f.autocompleteView.input.getSearchInput().addEventListener(a, e.guardError({
                                attribution: "ApiImpl:input"
                            }, function() {
                                return f.onInput(a)
                            }))
                        });
                        this.autocompleteView.input.getSearchInput().addEventListener("keydown", e.guardError({
                            attribution: "ApiImpl:enter"
                        }, function(a) {
                            "Enter" === a.key && f.autocompleteView.input.getKeyword() && f.autocompleteView.input.isSelected() && (e.logOneTimeEvent(e.SearchNonAcceptanceMetric),
                            e.emitCounter(e.SearchNonAcceptanceMetric))
                        }));
                        n.AutocompleteAPI = this
                    }
                    a.prototype.getContext = function() {
                        return this.context
                    }
                    ;
                    return a
                }();
                a.default = b
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0);
                d = function() {
                    function a(a, b) {
                        var c = this;
                        this._isSelected = !0;
                        this.showDropdown = function() {
                            return c.delegateSearchInput.showDropdown()
                        }
                        ;
                        this.hideDropdown = function() {
                            return c.delegateSearchInput.hideDropdown()
                        }
                        ;
                        this.isSelected = function() {
                            return c._isSelected
                        }
                        ;
                        this.toggleIsSelected = function() {
                            var a;
                            c._isSelected = !c._isSelected;
                            c._isSelected && (c.setKeyword(c.typedInputValue),
                            c.api && c.setAlias(null === (a = c.api.getContext()) || void 0 === a ? void 0 : a.getContextField("alias")));
                            return c._isSelected
                        }
                        ;
                        this.delegateSearchInput = a;
                        this.api = b;
                        var d = this.delegateSearchInput.getSearchInput();
                        this.typedInputValue = d.value;
                        d.addEventListener("input", g.guardError({
                            attribution: "BrowserSearchInput"
                        }, function(a) {
                            c.typedInputValue = d.value
                        }))
                    }
                    a.prototype.setAttribution = function(a, b, c, d) {
                        this.delegateSearchInput.setAttribution(a, b, c, d)
                    }
                    ;
                    a.prototype.getAliasFromDropdown = function() {
                        return this.delegateSearchInput.getAliasFromDropdown()
                    }
                    ;
                    a.prototype.getKeyword = function() {
                        return this.delegateSearchInput.getKeyword()
                    }
                    ;
                    a.prototype.getCursorPosition = function() {
                        return this.delegateSearchInput.getCursorPosition()
                    }
                    ;
                    a.prototype.getSearchInput = function() {
                        return this.delegateSearchInput.getSearchInput()
                    }
                    ;
                    a.prototype.setAlias = function(a, b) {
                        this.delegateSearchInput.setAlias(a, b, g.options)
                    }
                    ;
                    a.prototype.setKeyword = function(a) {
                        this.delegateSearchInput.setKeyword(a)
                    }
                    ;
                    a.prototype.autoFill = function(a) {
                        this.delegateSearchInput.autoFill(a)
                    }
                    ;
                    a.prototype.getSelectedSearchDropdownUrl = function() {
                        return this.delegateSearchInput.getSelectedSearchDropdownUrl()
                    }
                    ;
                    a.prototype.setSelectedSearchDropdownUrl = function(a) {
                        return this.delegateSearchInput.setSelectedSearchDropdownUrl(a)
                    }
                    ;
                    return a
                }();
                a.default = d
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                a.recordKeyPress = a.getAverageKeyPressTime = void 0;
                var g = 0
                  , e = 0
                  , h = -1;
                a.getAverageKeyPressTime = function() {
                    return e ? Math.round(g / e) : 0
                }
                ;
                a.recordKeyPress = function() {
                    e += 1;
                    var a = (new Date).getTime();
                    0 <= h && (g += a - h);
                    h = a
                }
            }
            , function(d, a, b) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var g = b(0);
                d = function() {
                    function a(a, b) {
                        var c = this, d;
                        this._isSelected = !0;
                        this.setKeyword = function(a) {
                            c.input.value = a
                        }
                        ;
                        this.isSelected = function() {
                            return c._isSelected
                        }
                        ;
                        this.toggleIsSelected = function() {
                            c._isSelected = !c._isSelected;
                            c._isSelected && (c.input.value = c.typedInputValue,
                            setTimeout(function() {
                                c.input.selectionStart = c.typedInputValue.length;
                                c.input.selectionEnd = c.typedInputValue.length
                            }, 0));
                            return c._isSelected
                        }
                        ;
                        this.showDropdown = function() {}
                        ;
                        this.hideDropdown = function() {}
                        ;
                        this.getAliasFromDropdown = function() {
                            return ""
                        }
                        ;
                        this.setAlias = function(a) {}
                        ;
                        this.autoFill = function(a) {}
                        ;
                        this.input = a;
                        this.typedInputValue = a.value;
                        this.autocompletePluginHandler = b;
                        this.cursorPosition = (null === (d = a.value) || void 0 === d ? void 0 : d.length) || 0;
                        a.addEventListener("input", g.guardError({
                            attribution: "MShopSearchInput"
                        }, function(b) {
                            var d;
                            c.typedInputValue = a.value;
                            c.cursorPosition = a.selectionStart || (null === (d = a.value) || void 0 === d ? void 0 : d.length) || 0
                        }))
                    }
                    a.prototype.setAttribution = function(a, b, c, d) {
                        var f;
                        null === (f = this.autocompletePluginHandler) || void 0 === f ? void 0 : f.call("setAttribution")({
                            refTag: a,
                            crid: b,
                            prefix: c,
                            timeStamp: d || (new Date).getTime()
                        })
                    }
                    ;
                    a.prototype.getKeyword = function() {
                        return this.input.value
                    }
                    ;
                    a.prototype.getCursorPosition = function() {
                        return this.cursorPosition
                    }
                    ;
                    a.prototype.getSearchInput = function() {
                        return this.input
                    }
                    ;
                    a.prototype.getSelectedSearchDropdownUrl = function() {
                        return k
                    }
                    ;
                    a.prototype.setSelectedSearchDropdownUrl = function(a) {}
                    ;
                    return a
                }();
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__assign || function() {
                    g = Object.assign || function(a) {
                        for (var b, d = 1, e = arguments.length; d < e; d++) {
                            b = arguments[d];
                            for (var g in b)
                                Object.prototype.hasOwnProperty.call(b, g) && (a[g] = b[g])
                        }
                        return a
                    }
                    ;
                    return g.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = {
                    setSearchEntryText: "autofill",
                    setAttribution: "setAttribution",
                    searchSuggestionRendered: "searchSuggestionRendered"
                };
                d = function() {
                    return function(a) {
                        var b = this;
                        void 0 === a && (a = {});
                        this.featureToCordovaCall = {};
                        this.getCordovaEnabledFeatures = function() {
                            return b.cordovaEnabledFeatures
                        }
                        ;
                        this.call = function(a) {
                            return function(c, d, f) {
                                void 0 === d && (d = function(a) {}
                                );
                                void 0 === f && (f = function(a) {}
                                );
                                a in b.cordovaEnabledFeatures && (["android-mshop", "android-tablet-mshop"].includes(e.getSiteVariant()) && (c = g(g({}, c), {
                                    successCallback: function(a) {
                                        d(a)
                                    },
                                    failCallback: function(b) {
                                        e.logError("Plugin:" + a);
                                        e.emitError("Plugin:" + a);
                                        f(b)
                                    }
                                })),
                                b.AutocompletePlugin[b.featureToCordovaCall[a]](c))
                            }
                        }
                        ;
                        this.AutocompletePlugin = a;
                        this.cordovaEnabledFeatures = Object.keys(this.AutocompletePlugin).reduce(function(a, c) {
                            var d = h[c];
                            a[d] = !0;
                            d in b.featureToCordovaCall && (e.logError("Plugin:Conflict"),
                            e.emitError("Plugin:Conflict"));
                            b.featureToCordovaCall[d] = c;
                            return a
                        }, {})
                    }
                }();
                a.default = d
            }
            , function(d, a, b) {
                var g = this && this.__assign || function() {
                    g = Object.assign || function(a) {
                        for (var b, d = 1, e = arguments.length; d < e; d++) {
                            b = arguments[d];
                            for (var g in b)
                                Object.prototype.hasOwnProperty.call(b, g) && (a[g] = b[g])
                        }
                        return a
                    }
                    ;
                    return g.apply(this, arguments)
                }
                ;
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var e = b(0)
                  , h = "_ alias avg-ks-time b2b client-info event fb fresh ks last-prefix limit lop mid page-type plain-mid prefix suffix request-id session-id site-variant version wc asin client-version".split(" ");
                d = function() {
                    function a(a, b) {
                        var c, d, f;
                        this.$ = a;
                        this.completionDomain = b.completion || (null === (d = null === (c = b.config) || void 0 === c ? void 0 : c.endpoints) || void 0 === d ? void 0 : d.completion) || e.autocompleteServiceDomain;
                        this.suggestionParams = g(g(g({}, b.maxSuggestions ? {
                            limit: b.maxSuggestions
                        } : {}), (null === (f = b.config) || void 0 === f ? 0 : f.marketplaceId) ? {
                            mid: b.config.marketplaceId
                        } : {}), {
                            prefix: "",
                            "suggestion-type": ["WIDGET", "KEYWORD"]
                        });
                        this.isCDNEnabled = !this.completionDomain.includes("completion");
                        this.lastRequest = (new Date).getTime()
                    }
                    a.prototype.warmupRequest = function() {
                        var a = this;
                        return this.ajaxAction("HeadLatency", function() {
                            return {
                                type: "HEAD",
                                url: "https://" + a.completionDomain + "/api/2017/suggestions",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                error: function(a) {}
                            }
                        }, {}, function() {})
                    }
                    ;
                    a.prototype.getSuggestions = function(a, b) {
                        var c = this;
                        return a.alias ? this.ajaxAction("RetrieveSuggestionsLatency", function(a) {
                            return c.suggestionRequest(a)
                        }, a, b) : Promise.resolve()
                    }
                    ;
                    a.prototype.deleteSuggestion = function(a, b, d, e) {
                        var c = this;
                        return this.ajaxAction("DeleteRecentSearchSuggestionLatency", function(a) {
                            return c.deleteRecentSearchSuggestionRequest(a, b)
                        }, a, this.isCDNEnabled ? e : d)
                    }
                    ;
                    a.prototype.filterSuggestionsRequestParameters = function(a) {
                        return Object.keys(a).map(function(b) {
                            return [b, a[b]]
                        }).filter(function(a) {
                            return h.includes(a[0])
                        }).reduce(function(a, b) {
                            var c, d = b[0];
                            b = b[1];
                            return g(g({}, a), (c = {},
                            c[d] = b,
                            c))
                        }, this.suggestionParams)
                    }
                    ;
                    a.prototype.suggestionRequest = function(a) {
                        a = this.filterSuggestionsRequestParameters(a);
                        return {
                            url: "https://" + this.completionDomain + "/api/2017/suggestions?" + e.paramsToURLParameters(a),
                            dataType: "json",
                            startTime: (new Date).getTime(),
                            xhrFields: {
                                withCredentials: !0
                            },
                            error: function(a) {
                                e.logError("RetrieveSuggestionsFailure");
                                e.emitError("RetrieveSuggestionsFailure")
                            }
                        }
                    }
                    ;
                    a.prototype.deleteRecentSearchSuggestionRequest = function(a, b) {
                        this.isCDNEnabled ? (b = e.paramsToURLParameters(this.filterSuggestionsRequestParameters(b)),
                        a = a.replace(/mid=[A-z0-9]{14}&/, ""),
                        a = "https://" + this.completionDomain + "/api/2017/suggestions?" + b + "\x26" + a,
                        b = "GET") : (a = "https://" + this.completionDomain + "/api/2017/recentsearches?" + a,
                        b = "DELETE");
                        return {
                            type: b,
                            url: a,
                            dataType: "json",
                            startTime: (new Date).getTime(),
                            xhrFields: {
                                withCredentials: !0
                            },
                            error: function(a) {
                                e.logError("DeleteRecentSearchSuggestionFailure");
                                e.emitError("DeleteRecentSearchSuggestionFailure")
                            }
                        }
                    }
                    ;
                    a.prototype.request = function(a) {
                        var b = this;
                        return new Promise(function(c, d) {
                            b.$.ajax(a).then(c, function(a, b, c) {
                                d(c)
                            })
                        }
                        )
                    }
                    ;
                    a.prototype.ajaxAction = function(a, b, d, g) {
                        function c(a) {
                            try {
                                g(a)
                            } catch (x) {
                                e.logJsError(x, {
                                    attribution: "ajaxAction:callback"
                                })
                            }
                        }
                        var f = this
                          , h = b(d);
                        b = h.error || k;
                        delete h.error;
                        return e.measuredPromise(a, e.timedPromiseWrapper(a, this.request(h))).then(h.startTime ? function(a) {
                            h.startTime > f.lastRequest && (f.lastRequest = h.startTime,
                            a.startTime = h.startTime,
                            c(a))
                        }
                        : c, b).catch(function(a) {
                            e.logJsError(a, {
                                attribution: "ajaxAction"
                            })
                        })
                    }
                    ;
                    return a
                }();
                a.default = d
            }
            , function(d, a, b) {
                function g(a) {
                    return a.reduce(function(a, b) {
                        return a.concat(Array.isArray(b) ? g(b) : b)
                    }, [])
                }
                function e(a) {
                    return a instanceof Node ? a.parentNode ? a.cloneNode(!0) : a : document.createTextNode(a === k || null === a ? "" : a)
                }
                b.r(a);
                b.d(a, "DomKataRuntime", function() {
                    return m
                });
                var h = 0
                  , m = function() {
                    function a() {
                        if (!(this instanceof a))
                            throw new TypeError("Cannot call a class as a function");
                        this.context = {}
                    }
                    Y(a, [{
                        key: "generateInstanceId",
                        value: function() {
                            return "inst" + h++
                        }
                    }, {
                        key: "root",
                        value: function(a, b, c) {
                            var d = new Set;
                            return g(c).filter(function(a) {
                                return !!a
                            }).map(function(a) {
                                a = e(a);
                                if (d.has(a))
                                    return a.cloneNode(!0);
                                d.add(a);
                                return a
                            })
                        }
                    }, {
                        key: "createElement",
                        value: function(a, b) {
                            var c = document.createElement(a);
                            Object.entries(b).forEach(function(a) {
                                a = J(a, 2);
                                return c.setAttribute(a[0], a[1])
                            });
                            for (var d = arguments.length, f = Array(2 < d ? d - 2 : 0), h = 2; h < d; h++)
                                f[h - 2] = arguments[h];
                            g(f).forEach(function(a) {
                                return c.appendChild(e(a))
                            });
                            return c
                        }
                    }, {
                        key: "assertNotNull",
                        value: function(a, b) {
                            for (var c = 0; c < b.length; c++) {
                                var d = b[c];
                                if (!a.hasOwnProperty(d) || null === d || d === k)
                                    throw Error("Required template key is undefined: " + d);
                            }
                        }
                    }, {
                        key: "createComment",
                        value: function(a) {
                            return document.createComment(a)
                        }
                    }, {
                        key: "createDoctype",
                        value: function(a) {
                            return document.implementation.createDocumentType(a, "", "")
                        }
                    }, {
                        key: "shallowMerge",
                        value: function(a, b) {
                            return Object.assign(Object.assign({}, a), b)
                        }
                    }, {
                        key: "dynamicInstance",
                        value: function(a, b, c) {}
                    }, {
                        key: "testCondition",
                        value: function(a) {
                            return !1
                        }
                    }]);
                    return a
                }()
            }
            ])
              , N = "Down ArrowDown Up ArrowUp Left ArrowLeft Right ArrowRight Enter".split(" ")
              , I = ["Esc", "Escape"]
              , L = document.createElement("div");
            L.className = "autocomplete-results-container";
            var M = document.createElement("div");
            M.className = "two-pane-results-container";
            var O = document.createElement("div");
            O.className = "left-pane-results-container";
            var R = document.createElement("div");
            R.className = "right-pane-results-container";
            return {
                init: function(d, a) {
                    L.appendChild(M);
                    M.appendChild(O);
                    M.appendChild(R);
                    a.$dropdown[0].appendChild(L);
                    U.renderAsync(w(L), 1E3).then(function(b) {
                        b.density && (B.maxSuggestions = parseInt(b.density, 10) || B.maxSuggestions);
                        b.lineSeparator && (G.useSuggestionDelimiter = "line" === b.lineSeparator);
                        T(a);
                        var g = S.component({
                            $: w,
                            JSON: JSON,
                            localizedStrings: q,
                            inputBox: C,
                            resultsContainer: L,
                            twoPaneResultsContainer: M,
                            leftPaneResultsContainer: O,
                            rightPaneResultsContainer: R,
                            cfg: Object.assign({}, Q, d),
                            endpoints: t,
                            warmup: !0,
                            platform: B,
                            autocompleteContextOverrides: A,
                            flags: G
                        });
                        n.addEventListener("keydown", function(a) {
                            C.isSearchBoxFocused() && (!a.defaultPrevented && N.includes(a.key) ? g.navigationListener(a) : I.includes(a.key) && C.blurAutocomplete())
                        }, !1);
                        n.addEventListener("keyup", function(a) {
                            9 === a.keyCode && document.activeElement.id !== C.getSearchBox().attr("id") && C.hideDropdown()
                        }, !1);
                        C.isSearchBoxFocused() && (g.listener(),
                        C.showDropdown())
                    })
                }
            }
        }
    };
    Q.when("autocomplete-endpoints", "autocomplete-translations-localizedStrings", "autocomplete-icons-handler").execute("load autocomplete", function(k, q, A) {
        n.$Nav.when("$", "NavDomApi", "sx.iss.Platform", "sx.iss.Defaults", "sx.iss.FOSContext").build("sx.iss.AutocompleteUXFramework", U(k, q, {
            version: 3
        }, {}, {
            useSuggestionsIcons: A()
        }))
    });
    "use strict";
    n.$Nav.when("$", "sx.iss.AutocompleteUXFramework", "NavDomApi").build("sx.iss.IssParentCoordinator", function(k, n, A) {
        return function(q) {
            "undefined" !== typeof q && q || (q = {});
            var t = {
                $form: A.getForm(),
                $dropdown: A.getDropdown(),
                $searchbox: A.getSearchBox(),
                $aliasDropDown: A.getAliasDropdown()
            };
            q.useAmazonEmberFontFamily && k("head").append('\x3cstyle\x3e.s-suggestion { padding: 8px 10px; font-size: 16px; font-family: "Amazon Ember"; cursor: pointer; }\x3c/style\x3e');
            A.getForm().data("originalSearchTerm", A.getKeyword());
            A.getForm().data("originalAlias", A.getAliasFromDropdown());
            n.init(q, t)
        }
    });
    "use strict";
    "use strict";
    n.$Nav.when("$").build("sx.iss.AttributionUtil", function(k) {
        function n(n, q, w, t) {
            q = k('\x3cinput type\x3d"hidden" /\x3e').attr("id", q).attr("name", w).attr("value", t);
            n.append(q)
        }
        var t = /(ref=[\-\w]+)/;
        return {
            setRefTag: function(k, n) {
                var q = k.attr("action");
                t.test(q) ? q = q.replace(t, "ref\x3d" + n) : ("/" !== q.charAt(q.length - 1) && (q += "/"),
                q += n);
                k.attr("action", q)
            },
            setCompletionResponseId: function(q, t) {
                if (t) {
                    var w = k("#isscrid");
                    0 < w.length ? w.attr("value", t) : n(q, "isscrid", "crid", t)
                }
            },
            setPrefix: function(q, t) {
                var w = k("#issprefix");
                0 < w.length ? w.attr("value", t) : n(q, "issprefix", "sprefix", t)
            }
        }
    });
    "use strict";
    Q.register("autocomplete-icons-handler", function() {
        return function() {
            return !1
        }
    })
});
/* ******** */
(function(h) {
    var p = window.AmazonUIPageJS || window.P
      , t = p._namespace || p.attributeErrors
      , a = t ? t("P13NSharedSitewideJS", "") : p;
    a.guardFatal ? a.guardFatal(h)(a, window) : a.execute(function() {
        h(a, window)
    })
}
)(function(h, p, t) {
    (function(a) {
        h.register("p13n-sc-math", function() {
            return Math
        });
        h.register("p13n-sc-document", function() {
            return a
        });
        h.register("p13n-sc-window", function() {
            return p
        });
        h.register("p13n-sc-undefined", function() {});
        var e = function() {
            return "undefined" !== typeof a.hidden ? function() {
                return a.hidden
            }
            : "undefined" !== typeof a.msHidden ? function() {
                return a.msHidden
            }
            : "undefined" !== typeof a.webkitHidden ? function() {
                return a.webkitHidden
            }
            : function() {
                return !1
            }
        }()
          , l = function() {
            return p.P && p.P.AUI_BUILD_DATE
        };
        l() ? (h.when("jQuery").register("p13n-sc-jQuery", function(a) {
            return a
        }),
        h.when("ready").register("p13n-sc-ready", function() {})) : p.amznJQ && (p.amznJQ.available("jQuery", function() {
            h.register("p13n-sc-jQuery", function() {
                return p.amznJQ.jQuery
            })
        }),
        p.amznJQ.onReady("jQuery", function() {
            h.register("p13n-sc-ready", function() {})
        }),
        p.amznJQ.available("amazonShoveler", function() {
            h.register("p13n-sc-amznJQ-shoveler", function() {})
        }));
        var f = function(a, k) {
            var c = k.getCarousel(a).dom.$container.data("aCarouselOptions");
            return c && c.name ? c.name : null
        }
          , k = function(a, k, c) {
            k = c.getCarousel(k);
            c = k.dom.$container.data("aCarouselOptions");
            if (!c)
                return "p13n-sc-carousel-" + a;
            c.name || (a = "p13n-sc-carousel-" + a,
            c.name = a,
            k.setAttr("name", a));
            return c.name
        };
        h.register("p13n-sc-util", function() {
            var a = p.ueLogError;
            "function" !== typeof a && (a = function(a, d) {
                if (d && d.message)
                    throw Error(d.message);
                if (a && a.message)
                    throw Error(a.message);
            }
            );
            var m = function(c, d) {
                a({
                    logLevel: c,
                    attribution: "P13NSharedSitewideJS",
                    message: "[p13n-sc] " + d
                })
            };
            return {
                constants: {
                    DATA_ATTR_P13N_FEATURE_NAME: "p13nFeatureName"
                },
                count: p.ue && p.ue.count || function() {}
                ,
                isAUI: l,
                isPageHidden: e,
                getCarouselName: f,
                createCarouselName: k,
                log: {
                    warn: function(a) {
                        m("WARN", a)
                    },
                    error: function(a) {
                        m("ERROR", a)
                    }
                },
                parseInt: function(a) {
                    return parseInt(a, 10)
                }
            }
        })
    }
    )(document);
    h.when("p13n-sc-jQuery", "p13n-sc-window", "p13n-sc-util", "p13n-sc-undefined").register("p13n-sc-heartbeat", function(a, e, l, f) {
        var k = e.clearInterval, n = {}, m, c, d = function() {
            if (!m) {
                var a = e.setInterval(function() {
                    if (a !== m)
                        k(a);
                    else if (!l.isPageHidden()) {
                        var d = (new Date).getTime();
                        (!c || 200 < d - c) && g();
                        c = (new Date).getTime()
                    }
                }, 200);
                m = a
            }
        }, g = function() {
            a.each(n, function(a, d) {
                d.call(e)
            })
        };
        return {
            subscribe: function(a, g) {
                n[a] || (n[a] = g,
                d())
            },
            unsubscribe: function(a) {
                n[a] && delete n[a];
                a = !0;
                for (var d in n)
                    n.hasOwnProperty(d) && (a = !1);
                a && (k(m),
                m = f)
            }
        }
    });
    h.when("p13n-sc-jQuery", "p13n-sc-heartbeat").register("p13n-sc-call-on-visible", function(a, e) {
        var l = []
          , f = a(p)
          , k = function() {
            for (var a = f.scrollTop() + f.height(), k = f.scrollLeft() + f.width(), c = l.length - 1; 0 <= c; c--) {
                var d = l[c]
                  , g = d.callback
                  , b = d.$element
                  , r = d.distanceY
                  , d = d.distanceX;
                if (0 === b.parents("body").size())
                    l.splice(c, 1);
                else if (!b.is(":hidden")) {
                    var h = b.offset();
                    a - r > h.top && k - d > h.left && (l.splice(c, 1),
                    g.call(null, b[0]))
                }
            }
            0 === l.length && e.unsubscribe("p13n-sc-call-on-visible")
        };
        return {
            register: function(n, f, c) {
                var d = c && "undefined" !== typeof c.distance ? c.distance : 0
                  , g = c && "undefined" !== typeof c.distanceY ? c.distanceY : d
                  , b = c && "undefined" !== typeof c.distanceX ? c.distanceX : 0;
                a(n).each(function() {
                    l.push({
                        $element: a(this),
                        callback: f,
                        distanceY: g,
                        distanceX: b
                    })
                });
                e.subscribe("p13n-sc-call-on-visible", k)
            }
        }
    });
    h.when("A", "jQuery", "p13n-sc-call-on-visible", "p13n-sc-util", "p13n-sc-math").register("p13n-sc-view-trigger", function(a, e, l, f, k) {
        var n = function(c) {
            var d = e(c);
            c = d.attr("data-params");
            var g = d.attr("data-url");
            if (c && g) {
                c = a.parseJSON(c);
                var b = d.offset()
                  , d = [b.top, b.left, d.height(), e(p).width()];
                c.elementRect = d.join(",");
                var f = 0
                  , l = {
                    cache: !0,
                    crossDomain: !1,
                    data: e.param(c, !1),
                    error: function(a) {
                        a = a.status || 0;
                        3 <= f || 400 <= a && 500 > a || setTimeout(n, 200 * k.pow(2, f))
                    },
                    global: !1,
                    url: g
                }
                  , n = function() {
                    f += 1;
                    e.ajax(l)
                };
                n()
            }
        }
          , m = function(c) {
            var d = e(c);
            if (1 === d.size()) {
                var g = d.attr("data-params")
                  , g = g ? a.parseJSON(g) : {};
                if (!0 === g.allowEmpty || 0 !== e.trim(d.text()).length) {
                    var b = d.height();
                    !0 !== g.allowEmpty && 5 > b || (b = 0,
                    "number" === typeof g.distance && (b = g.distance),
                    d.attr("data-p13n-sc-vt-initialized") || (d.attr("data-p13n-sc-vt-initialized", !0),
                    l.register(c, function() {
                        n(c)
                    }, {
                        distance: b
                    })))
                }
            }
        };
        f = function() {
            a.each(e(".p13n-sc-vt:not([data-p13n-sc-vt-initialized])"), function(a) {
                m(a)
            })
        }
        ;
        h.execute(f);
        h.when("afterReady").execute("p13n-sc-view-trigger:init", f);
        return {
            initializeElement: m
        }
    });
    h.when("p13n-sc-jQuery", "p13n-sc-util", "p13n-sc-window", "p13n-sc-document", "p13n-sc-ready").register("p13n-sc-logger", function(a, e, l, f) {
        function k(a) {
            return a.join("")
        }
        function n(d, g) {
            var b = d.attr(g)
              , c = {};
            b !== t && null !== b && (c = "undefined" !== typeof a.parseJSON ? a.parseJSON(b) : eval("(" + b + ")"));
            return c
        }
        function m(d, b) {
            for (var g = [d.widget, ":"], c = 0; c < d.asins.length; c++) {
                var e = d.asins[c];
                g.push(e.asin, "@");
                a.each(e, function(a, d) {
                    "asin" !== a && g.push(a, "\x3d", d, "|")
                });
                g.splice(g.length - 1, 1);
                g.push(",")
            }
            0 < d.asins.length && g.splice(g.length - 1, 1);
            b && (g.push(":", "action\x3d", d.action),
            a.each(d.meta, function(a, d) {
                g.push(",", a, "\x3d", d)
            }));
            return k(g)
        }
        function c(d, g) {
            var b = n(a(g), "data-p13n-asin-metadata");
            if (b && b.asin) {
                var c = b.asin
                  , k = n(a(d), "data-p13n-asin-metadata");
                k && a.extend(!0, b, k[c]);
                return b
            }
        }
        function d(d, g) {
            var c = new Image;
            e.count("p13n:logger:attempt", 1);
            c.onerror = function() {
                b++;
                e.count("p13n:logger:error", 1)
            }
            ;
            c.src = k(["https:" === f.location.protocol ? "https://" : "http://", l.ue_furl || "fls-na.amazon.com", "/1/", "p13n-shared-components", "/1/OP/p13n/", g, k(["?", a.param(n(a(d.featureElement), "data-p13n-global"))])])
        }
        function g() {
            return 3 < b ? (h || (e.count("p13n:logger:abort", 1),
            h = !0),
            !0) : !1
        }
        var b = 0
          , h = !1
          , u = {}
          , q = {}
          , y = {
            logAction: function(b) {
                if (!g())
                    if ("featureElement"in b)
                        if ("action"in b) {
                            var f = a(b.featureElement);
                            b.widgetViewport && a(b.widgetViewport);
                            var l = f.offset().left
                              , h = f.width() + l;
                            b.asins = a.map(a(b.featureElement).find(".p13n-asin").filter(":visible"), function(b) {
                                var d = a(b).offset().left;
                                if (!(d < l || d > h))
                                    return c(f, b)
                            });
                            b.meta = b.meta || {};
                            var q = n(f, "data-p13n-feature-metadata");
                            a.extend(!0, b.meta, q);
                            b.widget = f.attr("data-p13n-feature-name");
                            b.widget in u || (u[b.widget] = {});
                            if (0 !== b.asins.length) {
                                for (var q = [], r = 0; r < b.asins.length; r++)
                                    b.asins[r].asin in u[b.widget] || (u[b.widget][b.asins[r].asin] = !0,
                                    q.push(b.asins[r]));
                                b.logOnlyOnNew && 0 === q.length || (b.logOnlyNew && 0 < q.length && (b.asins = q),
                                q = k(["action/", k([b.widget, "_:", b.action, "@v\x3d", b.eventtime || 0, ",impressed@v\x3d", b.asins.length]), "/", m(b, !0)]),
                                b.replicateAsinImpressions && (r = k(["asin/", m(b, !1)]),
                                q = k(["batch/", q, "$", r])),
                                d(b, q))
                            }
                        } else
                            e.log.warn("action missing in eventData for logAction");
                    else
                        e.log.warn("featureElement missing in eventData for logAction")
            },
            logAsyncAction: function(b) {
                var d = (new Date).getTime()
                  , g = "number" === typeof b.initialDelay ? b.initialDelay : 400
                  , c = "number" === typeof b.timeout ? b.timeout : 5E3
                  , k = a(b.featureElement);
                b.widget = k.attr("data-p13n-feature-name");
                b.widget in q && l.clearTimeout(q[b.widget]);
                var f = function() {
                    var a = b.isEventComplete()
                      , g = (new Date).getTime();
                    g - d < c && !a ? q[b.widget] = l.setTimeout(f, 150) : (a || ("meta"in b || (b.meta = {}),
                    b.meta.err = "notfinished"),
                    b.eventtime = g - d,
                    delete q[b.widget],
                    y.logAction(b))
                };
                q[b.widget] = l.setTimeout(f, g)
            },
            eventPending: function(b) {
                return a(b).attr("data-p13n-feature-name")in q
            },
            impressAsin: function(b) {
                if (!g())
                    if ("featureElement"in b)
                        if ("faceoutElement"in b) {
                            var f = a(b.faceoutElement)
                              , l = a(b.featureElement);
                            b.widget = l.attr("data-p13n-feature-name");
                            b.asins = [c(l, f)];
                            f = k(["asin/", m(b, !1)]);
                            d(b, f)
                        } else
                            e.log.warn("faceoutElement missing in eventData for logAction");
                    else
                        e.log.warn("featureElement missing in eventData for logAction")
            },
            resetImpressions: function(b) {
                b in u && (u[b] = {})
            }
        };
        return y
    });
    h.when("jQuery", "A", "p13n-sc-call-on-visible", "p13n-sc-logger", "ready").register("p13n-sc-faceout-logger", function(a, e, l, f) {
        var k = function(k, e) {
            var c = a(k)
              , d = a(e);
            1 !== c.length || c.attr("data-p13n-sc-fl-initialized") || (c.attr("data-p13n-sc-fl-initialized", !0),
            l.register(c, function() {
                f.logAction({
                    featureElement: d,
                    action: "view",
                    replicateAsinImpressions: !0
                })
            }))
        };
        e.on("p13n:faceoutsloaded", function(f) {
            a(f).find(".p13n-asin:not([data-p13n-sc-fl-initialized])").each(function(a, c) {
                k(c, f)
            })
        })
    });
    h.when("A", "jQuery").register("p13n-sc-lazy-image-loader", function(a, e) {
        return {
            loadImages: function(l) {
                a.executeDeferred();
                l.find(".p13n-sc-lazy-loaded-img").each(function(f, k) {
                    var l = e(k)
                      , m = l.find(".a-dynamic-image");
                    m.load(function() {
                        l.removeClass("p13n-sc-lazy-loaded-img")
                    });
                    a.loadDynamicImage(m)
                })
            }
        }
    });
    h.when("A", "jQuery", "p13n-sc-call-on-visible").register("p13n-sc-lazy-widget-loader", function(a, e, l) {
        function f(a, f, l) {
            a.find("." + f).each(function(a, d) {
                var g = e(d)
                  , b = g.find(".lazy-widget-template");
                if (b.length) {
                    g.append(b.html());
                    b.remove();
                    b = g.find(".lazy-widget-encoded-content");
                    if (b.length)
                        try {
                            var k = decodeURIComponent(b.html());
                            b.html(k);
                            b.removeClass("lazy-widget-encoded-content")
                        } catch (f) {
                            g.addClass("aok-hidden")
                        }
                    l && l(g)
                }
            })
        }
        return {
            revealWidgets: function() {
                f(e(document), "js-revealed-widget")
            },
            revealWhenVisible: function(a, n, m) {
                l.register(a, function(a) {
                    f(e(a), "js-onvisible-widget", n)
                }, m)
            }
        }
    });
    h.when("p13n-sc-jQuery", "p13n-sc-util", "p13n-sc-math").register("p13n-sc-line-truncator", function(a, e, l) {
        function f(d) {
            this.$element = d;
            this.$experimentElement = a("\x3cdiv\x3e").addClass("p13n-sc-offscreen-truncate");
            this.maxRows = d.attr("data-rows");
            this.lineHeight = this.getLineHeight();
            this.maxRows ? this.lineHeight || e.log.error("Truncation element does not have a line height or it is zero") : e.log.error("Truncation element missing necessary line number data")
        }
        var k = /(?=[ \-\/])|(?=[\u3105-\u312F])|(?=[\u31A0-\u31BA])|(?=[\u4E00-\u9FD5])|(?=[\u3400-\u4DB5])|(?=[\uF900-\uFAFF])|(?=[\u3040-\u309F])|(?=[\u30A0-\u30FF])|(?=[\u3190-\u319F])/
          , n = /[^\/\-\[\]():\s]/;
        f.prototype.truncate = function() {
            var d = a.trim(this.$element.html())
              , g = a.trim(this.$element.text())
              , d = m(d, this.$element, k);
            this.$element.append(this.$experimentElement);
            if (this.checkLineFit(d))
                this.$experimentElement.remove(),
                this.$element.html(d);
            else {
                var b = this.truncateByToken(d);
                b ? (this.$element.html(b),
                this.$element.attr({
                    title: g
                })) : e.log.error("Unable to successfully truncate line " + d);
                this.$experimentElement.remove()
            }
        }
        ;
        f.prototype.getLineHeight = function() {
            var a = this.$element.html();
            this.$element.html("\x26hellip;");
            var g = this.$element.innerHeight();
            this.$element.html(a);
            return g
        }
        ;
        f.prototype.checkLineFit = function(a) {
            this.$experimentElement.html(a);
            a = this.$experimentElement.get(0).clientHeight / this.lineHeight;
            return l.round(a) <= this.maxRows
        }
        ;
        f.prototype.truncateByToken = function(a) {
            a = a.split(k);
            for (var g = 1, b = a.length, c, f, e = 0; g !== b; )
                if (c = l.floor((b + g) / 2),
                f = a.slice(0, c).join("") + "\x26hellip;",
                this.checkLineFit(f)) {
                    if (1 >= b - c) {
                        for (e = c; 0 < e && !n.test(a[e - 1]); )
                            e--;
                        break
                    }
                    g = c
                } else
                    b = c;
            if (0 !== e)
                return a.slice(0, e).join("") + "\x26hellip;"
        }
        ;
        var m = function(d, g, b) {
            d = d.split(b);
            var c = l.floor(g.width() / parseInt(g.css("font-size"), 10))
              , f = function(b) {
                b = a("\x3cdiv\x3e").addClass("p13n-sc-offscreen-truncate").css("overflow", "hidden").text(b).appendTo(g);
                var c = b[0].clientWidth >= b[0].scrollWidth;
                b.remove();
                return c
            }
              , k = function(b) {
                var g = b.length - c;
                a.trim(b).length > c && !f(b) && (b = a.map(b, function(b, a) {
                    return a > c && a <= g && n.test(b) ? "\x26shy;" + b : b
                }));
                return b
            };
            d = a.map(d, function(b) {
                return k(b)
            });
            return d.join("")
        }
          , c = function() {};
        h.when("A").execute("trigger-linestruncated", function(a) {
            c = function() {
                a.trigger("p13n:linestruncated")
            }
        });
        return {
            truncateLines: function(d) {
                d.find(".p13n-sc-truncate:visible, .p13n-sc-truncate-medium:visible, .p13n-sc-truncate-sky:visible").each(function() {
                    var g = new f(a(this));
                    g && (g.truncate(),
                    a(this).addClass("p13n-sc-truncated").removeClass("p13n-sc-truncate p13n-sc-truncate-medium p13n-sc-truncate-sky"),
                    a(this).removeClass(function(b, a) {
                        return (a.match(/p13n-sc-line-clamp-\d/g) || []).join(" ")
                    }))
                });
                c()
            }
        }
    });
    h.when("A", "jQuery", "p13n-sc-call-on-visible", "p13n-sc-logger", "p13n-sp-logging").register("p13n-sc-list-logger", function(a, e, l, f, k) {
        a.on("p13n-sc-list-log", function(a, e) {
            f.logAction({
                featureElement: a,
                action: e,
                replicateAsinImpressions: !0
            });
            k.logHiddenSponsoredProducts(a)
        })
    });
    h.when("jQuery", "A", "p13n-sc-line-truncator", "a-carousel-framework", "p13n-sc-util").register("p13n-sc-carousel", function(a, e, l, f, k) {
        function n(a) {
            l.truncateLines(a.carousel.dom.$container)
        }
        function m(a) {
            e.loadDynamicImage(a.carousel.dom.$container.find(".p13n-sc-dynamic-image"))
        }
        var c = function(a, b) {
            var c = k.getCarouselName(b, f);
            c || (c = k.createCarouselName(a, b, f));
            var h = f.getCarousel(b).dom.$container;
            l.truncateLines(h);
            e.loadDynamicImage(h.find(".p13n-sc-dynamic-image"));
            d(b);
            e.on("a:carousel:" + c + ":change:animating", function(a) {
                n(a);
                m(a);
                !1 === a.newValue && d(b)
            });
            e.on("a:carousel:" + c + ":change:pageSize", function(a) {
                n(a);
                m(a);
                d(b)
            });
            e.on("a:carousel:" + c + ":change:loading", function(a) {
                n(a);
                m(a);
                !1 === a.newValue && d(b)
            })
        }
          , d = function(c) {
            c = a(c);
            var b = c.find(".a-carousel-viewport")
              , d = 0;
            b.find(".a-carousel-card").each(function(b, c) {
                d = Math.max(d, a(c).height())
            });
            0 < d && (b.height(d),
            c.find(".p13n-sc-sunk-container").addClass("p13n-sc-sunken"))
        };
        h.when("afterReady", "a-carousel-framework").execute("p13n-sc-carousel-add-truncation", function() {
            a(".p13n-sc-carousel").each(c)
        });
        return {
            initializeElement: c
        }
    });
    h.when("A", "jQuery", "a-carousel-framework", "p13n-sc-call-on-visible", "p13n-sc-logger", "p13n-sc-util", "p13n-sp-logging", "ready").register("p13n-sc-carousel-logger", function(a, e, l, f, k, n, h) {
        function c(a, c) {
            var d = a.getAttr("pageNumber")
              , g = a.dom.$container
              , f = g;
            g.find(".a-carousel-viewport") && (f = g.find(".a-carousel-viewport"));
            g.data("p13nPreviousPage", d);
            k.logAsyncAction(e.extend(!0, {}, {
                featureElement: g,
                widgetViewport: f,
                isEventComplete: function() {
                    return 0 === g.find(".a-carousel-card-empty").size() && !a.getAttr("animating")
                },
                meta: {
                    p: d
                },
                replicateAsinImpressions: !0
            }, c))
        }
        function d(a) {
            g(a) && f.register(a.dom.$container, function() {
                c(a, {
                    action: "view"
                });
                h.logHiddenSponsoredProducts(a.dom.$container)
            })
        }
        var g = function(a) {
            return "undefined" === typeof a ? !1 : a.dom.$container.data(n.constants.DATA_ATTR_P13N_FEATURE_NAME) ? !0 : !1
        };
        a.each(l.getAllCarousels(), function(a) {
            a.dom.$container.hasClass("a-carousel-initialized") && d(a)
        });
        a.on("a:carousel:init", function(a) {
            d(a.carousel)
        });
        e(document).delegate(".a-carousel-container[data-p13n-feature-name] .a-carousel-goto-nextpage", "click", function(a) {
            a = l.getCarousel(a.target);
            c(a, {
                action: "shovel_right",
                logOnlyOnNew: !0
            })
        });
        e(document).delegate(".a-carousel-container[data-p13n-feature-name] .a-carousel-goto-prevpage", "click", function(a) {
            a = l.getCarousel(a.target);
            c(a, {
                action: "shovel_left",
                logOnlyOnNew: !0
            })
        });
        e(document).delegate(".a-carousel-container[data-p13n-feature-name] .a-carousel-restart", "click", function(a) {
            a = l.getCarousel(a.target);
            c(a, {
                action: "start_over",
                logOnlyOnNew: !0,
                meta: {
                    op: a.dom.$container.data("p13nPreviousPage")
                }
            })
        });
        a.on("a:carousel:change:pageSize", function(a) {
            a = a.carousel;
            g(a) && a.dom.$container.hasClass("a-carousel-initialized") && c(a, {
                action: "resize",
                logOnlyOnNew: !0
            })
        })
    });
    h.when("p13n-sc-jQuery", "p13n-sc-window", "p13n-sc-document", "p13n-sc-call-on-visible", "p13n-sc-logger", "p13n-sc-util", "p13n-sc-amznJQ-shoveler").register("p13n-sc-non-aui-carousel", function(a, e, l, f, k, n) {
        var m = function(c) {
            n.count("p13n-sc-non-aui-carousel:init", 1);
            var b = c.attr("data-widgetname")
              , d = a("#" + b + "Data");
            if (1 !== d.length || c.attr("data-p13n-sc-carousel-initialized"))
                return !1;
            c.attr("data-p13n-sc-carousel-initialized", !0);
            var f = d.text().split(",")
              , l = c.find(".shoveler-content \x3e ul")
              , h = "input#" + b + "ShvlState"
              , m = function() {}
              , p = 200
              , t = !1
              , A = function() {
                var b = p;
                c.find(".p13nimp, .p13n-asin").each(function() {
                    var c = a(this).outerHeight(!0);
                    c > b && (b = c)
                });
                b > p && (p = b,
                l.animate({
                    height: b
                }, 200, "linear"));
                t || B()
            }
              , B = function() {
                var a = p / 2;
                c.find("a.next-button, a.back-button").css("top", a);
                t = !0
            }
              , v = c.find(".shoveler").shoveler(function(b, c) {
                var g = ""
                  , g = "undefined" !== typeof e.JSON ? JSON.parse(d.attr("data-ajax")) : eval("(" + d.attr("data-ajax") + ")");
                g.asins = f.slice(b, b + c).join(",");
                g.count = c;
                g.offset = b;
                g = a.param(g);
                return d.attr("data-url") + "?" + g
            }, f.length, {
                cellTransformer: function(a) {
                    return null === a ? "" : a
                },
                cellChangeSpeedInMs: 30,
                preloadNextPage: !0,
                prevButtonSelector: "a.back-button",
                nextButtonSelector: "a.next-button",
                startOverSelector: "span.start-over",
                startOverLinkSelector: "a",
                horizPadding: 14,
                state: {
                    ready: function() {
                        return 0 < a(h).val().length
                    },
                    get: function() {
                        return parseInt(a(h).val(), 10)
                    },
                    set: function(b) {
                        a(h).val(b)
                    }
                },
                onUpdateUIHandler: function() {
                    A();
                    m()
                }
            })
              , z = 0
              , C = function() {
                var b = a(e).width();
                z !== b && (v.updateUI(),
                z = b)
            }
              , x = null;
            c.resize(function() {
                x && e.clearTimeout(x);
                x = e.setTimeout(C, 100)
            });
            var w = function(b) {
                k.logAsyncAction(a.extend(!0, {}, {
                    featureElement: c,
                    isEventComplete: function() {
                        return 0 === c.find("li.shoveler-cell.shoveler-progress").size()
                    },
                    replicateAsinImpressions: !0
                }, b))
            };
            w({
                action: "view",
                meta: {
                    p: v.getCurrentPage() + 1
                }
            });
            c.find(".back-button").click(function() {
                w({
                    action: "shovel_left",
                    meta: {
                        p: v.getCurrentPage() + 1
                    }
                })
            });
            c.find(".next-button").click(function() {
                w({
                    action: "shovel_right",
                    meta: {
                        p: v.getCurrentPage() + 1
                    }
                })
            });
            c.find(".start-over-link").mousedown(function() {
                w({
                    action: "start_over",
                    meta: {
                        p: 1,
                        op: v.getCurrentPage() + 1
                    }
                })
            });
            m = function() {
                k.eventPending(c) || w({
                    action: "resize",
                    page: v.getCurrentPage() + 1,
                    logOnlyOnNew: !0,
                    initialDelay: 2E3
                })
            }
        }
          , c = function(c) {
            var b = {
                distanceY: -250,
                distanceX: 0
            };
            a(c).find(".p13n-sc-nonAUI-carousel").andSelf().filter(".p13n-sc-nonAUI-carousel").each(function(c, d) {
                f.register(d, function() {
                    m(a(d))
                }, b)
            })
        }
          , d = function() {
            c(l)
        };
        d();
        h.when("p13n-sc-ready").execute("p13n-sc-non-aui-carousel:readyInit", d);
        return {
            init: c
        }
    });
    h.when("p13n-sc-jQuery", "p13n-sc-util").execute("p13n-sc-carousel-initialization-setup", function(a, e) {
        e.isAUI() ? h.when("a-carousel-framework").register("p13n-sc-carousel-init", function(a) {
            return {
                init: function() {
                    a.createAll()
                }
            }
        }) : h.when("p13n-sc-non-aui-carousel").register("p13n-sc-carousel-init", function(a) {
            return {
                init: function(f) {
                    a.init(f)
                }
            }
        })
    });
    h.when("jQuery", "A", "p13n-sc-call-on-visible", "p13n-sc-lazy-image-loader", "p13n-sc-line-truncator", "p13n-sc-list-logger").register("p13n-sc-static-list", function(a, e, l, f, k) {
        function n(e) {
            this.$container = a(e);
            f.loadImages(this.$container);
            k.truncateLines(this.$container)
        }
        h.when("afterReady").execute("p13n-sc-static-list:init", function() {
            function f(a) {
                l.register(a, function() {
                    var c = new n(a);
                    e.trigger("p13n-sc-list-log", c.$container, "view")
                }, c)
            }
            var c = {
                distanceY: -500,
                distanceX: 0
            };
            a(".p13n-sc-static-list").each(function(a, c) {
                f(c)
            })
        });
        return n
    });
    h.when("A", "jQuery", "p13n-sc-util").execute("updateDpLink", function(a, e, l) {
        var f = /([?&]preST=)([^&]*)/;
        a.on("a:image:load:p13nImage", function(a) {
            var h = a.$imageElement[0];
            if ("undefined" !== typeof h && (l.count("p13n:dynImgCallback", (l.count("p13n:dynImgCallback") || 0) + 1),
            h = e(h).closest("a"),
            0 < h.length)) {
                var m = e(h).attr("href")
                  , c = m.match(f);
                a = a.url.split("/").pop().split(".");
                e.isArray(a) && 3 === a.length && (a = encodeURIComponent(a[1]),
                null !== c && e.isArray(c) && 3 === c.length && c[2] !== a && (a = m.replace(f, "$1" + a),
                e(h).attr("href", a)))
            }
        })
    });
    h.when("fresh-add-to-cart", "a-carousel-framework").execute(function(a, e) {
        a.attachCallbacks({
            success: function(a, f) {
                var k = a.$target.parents(".p13n-asin").find(".s-add-to-cart-badge-position");
                k && k.removeClass("aok-hidden");
                if ((k = a.$declarativeParent.parents(".p13n-sc-carousel")) && k.data() && k.data("a-carousel-options") && k.data("a-carousel-options").name && (k = k.data("a-carousel-options").name,
                k = e.getCarouselByName(k),
                null !== k)) {
                    var h = k.getAttr("fetchedItems")
                      , m = a.data.position - 1;
                    0 <= m && (h[m] = h[m].replace("aok-hidden", ""),
                    k.setAttr("fetchedItems", h))
                }
            },
            error: function(a, f, e, h) {
                a.$target.parents(".p13n-asin").find(".s-add-to-cart-badge-position").addClass("aok-hidden")
            },
            clientID: "p13n"
        })
    });
    h.when("A", "p13n-sc-heartbeat", "a-carousel-framework", "p13n-sc-util").execute("p13n-sc-carousel-resize-detector", function(a, e, h, f) {
        var k = a.$;
        e.subscribe("p13n-sc-carousel-resize-detector", a.throttle(function() {
            for (var a = k(".p13n-sc-carousel"), e = a.length - 1; 0 <= e; e--) {
                var c = k(a[e])
                  , d = c.width();
                if (d) {
                    var g = c.data("previous-width");
                    c.data("previous-width", d);
                    g && d !== g && (f.count("p13n:carousel:resize", (f.count("p13n:carousel:resize") || 0) + 1),
                    (c = h.getCarousel(c)) && c.resize())
                }
            }
        }, 500))
    });
    h.when("A", "p13n-sc-jQuery", "a-modal").execute("desktop-carousel-add-to-list", function(a, e, h) {
        a.declarative("p13n-sc-atl", "click", function(f) {
            var e = f.$declarativeParent.parents(".p13n-asin")
              , n = f.data.spinnerHTML
              , m = e.find(".p13n-sc-atl-alert-row")
              , c = e.find(".p13n-sc-atl-button");
            c.hide();
            m.html(n);
            h.remove(m);
            var d = function() {
                var a = f.data.modalFailureMsg;
                e.find(".p13n-sc-atl-in-progress").hide();
                c.show();
                h.create(m, {
                    name: "p13n-sc-failure-modal",
                    content: a,
                    width: 400
                }).show()
            };
            a.post(f.data.addToListURL, {
                success: function(a) {
                    var b = f.data.inlineSuccessHTML
                      , c = f.data.viewListText
                      , h = a.listName
                      , l = a.listExternalId;
                    !a.hasError && h && l ? (e.find(".p13n-sc-atl-in-progress").hide(),
                    m.html(b),
                    13 < h.length && (h = h.substring(0, 10).concat("...")),
                    a = e.find(".p13n-sc-atl-link"),
                    a.attr("href", "/hz/wishlist/ls/".concat(l).concat("/ref\x3dsc-atl-lists")),
                    a.attr("title", c),
                    a.attr("alt", c),
                    a.text(h)) : a.hasError && "INVALID_SESSION_ID" === a.error ? p.location.href = a.loginUrl : d()
                },
                error: d,
                params: f.data.listArgs
            })
        })
    });
    h.when("A", "jQuery", "p13n-sc-util").register("p13n-sp-logging", function(a, e, h) {
        return {
            logHiddenSponsoredProducts: function(a) {
                a = a.find(".p13n-sp-log");
                0 < a.length && (0 === a.height() ? h.count("p13n:desktop:adblocked", 1) : h.count("p13n:desktop:adallowed", 1))
            }
        }
    })
});
/* ******** */
(function(f) {
    var c = window.AmazonUIPageJS || window.P
      , d = c._namespace || c.attributeErrors
      , b = d ? d("RecentHistoryFooterJS", "") : c;
    b.guardFatal ? b.guardFatal(f)(b, window) : b.execute(function() {
        f(b, window)
    })
}
)(function(f, c, d) {
    f.when("p13n-sc-jQuery", "p13n-sc-call-on-visible", "p13n-sc-carousel-init", "p13n-sc-util", "p13n-sc-carousel", "p13n-sc-ready").execute(function(b, u, v, n, p) {
        var g, e, k, l, m, h = !1, x = function() {
            u.register(m, q, {
                distance: "-400"
            });
            f.when("A").execute(function(a) {
                a.on("clickstream-changed", w)
            })
        }, w = function() {
            h && q()
        }, q = function() {
            var a = g.rhfHandlerParams;
            a.isAUI = c.P && c.P.AUI_BUILD_DATE && r(c.P.AUI_BUILD_DATE) ? 1 : 0;
            a.cardJSPresent = c.mix_d !== d;
            c.location !== d && (a.pageUrl = c.location.pathname);
            a.cardJSPresent && (h || l.show(),
            a = b.param(a),
            b.ajax({
                url: "/hz/rhf?" + a,
                timeout: 5E3,
                type: "GET",
                success: y,
                error: t
            }))
        }, y = function(a) {
            a && a.success && "object" === typeof a && "string" === typeof a.html ? (e.html(a.html),
            v.init(e),
            e.find(".p13n-sc-carousel").each(p.initializeElement),
            z(),
            a = e.find(".rvi-with-titles"),
            a.length && p.initializeElement(0, a.find(".a-carousel-container"))) : t();
            h = !0
        }, t = function() {
            h || (e.hide(),
            k.show())
        }, z = function() {
            b("#ybh-link").click(function() {
                b.ajax({
                    url: "/gp/recent-history-footer/external/ybh-handler.html",
                    timeout: 2E3,
                    type: "POST",
                    dataType: "text",
                    data: g.ybhHandlerParams,
                    success: A
                })
            })
        }, A = function() {
            b("#ybh-link").hide();
            b("#ybh-text-off").hide();
            b("#ybh-text-on").show()
        }, r = function(a) {
            a = a.split("-")[0].split(".").slice(0, 3);
            for (var b = [3, 15, 8], c = Math.min(a.length, b.length), e = 0; e < c; e++) {
                var d = parseInt(a[e], 10)
                  , f = b[e];
                if (d !== f)
                    return d > f
            }
            return -1 < a.length - b.length
        };
        g = function(a) {
            try {
                return "undefined" === typeof b.parseJSON ? eval("(" + a + ")") : b.parseJSON(a)
            } catch (c) {
                return d
            }
        }(b("#rhf-context script").html());
        e = b("#rhf-container");
        k = b("#rhf-error");
        l = b(".rhf-frame");
        m = b("#rhf");
        (function() {
            if ("object" !== typeof g || null === g)
                return n.count("p13n:rhf:invalidPage", 1),
                !1;
            if (!(c.P && c.P.AUI_BUILD_DATE && r(c.P.AUI_BUILD_DATE)))
                return n.count("p13n:rhf:unsupportedAUIVersion", 1),
                !1;
            for (var a = [e, k, l, m], b = 0; b < a.length; b++) {
                var d = a[b];
                if ("undefined" === typeof d || "undefined" === typeof d.size || 0 === d.size())
                    return !1
            }
            return !0
        }
        )() && x()
    })
});
/* ******** */
(function(c) {
    var a = window.AmazonUIPageJS || window.P
      , d = a._namespace || a.attributeErrors
      , b = d ? d("InternationalCustomerPreferencesNavAssets", "") : a;
    b.guardFatal ? b.guardFatal(c)(b, window) : b.execute(function() {
        c(b, window)
    })
}
)(function(c, a, d) {
    a.$Nav && (new MutationObserver(function(b, c) {
        a.google && a.google.translate && (ue && ue.count("googleTranslation", 1),
        c.disconnect())
    }
    )).observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0
    })
});
/* ******** */
(function(n) {
    var b = window.AmazonUIPageJS || window.P
      , m = b._namespace || b.attributeErrors
      , a = m ? m("InternationalCustomerPreferencesNavDesktopAssets", "") : b;
    a.guardFatal ? a.guardFatal(n)(a, window) : a.execute(function() {
        n(a, window)
    })
}
)(function(n, b, m) {
    b.$Nav && b.$Nav.when("$").run("icp.main", function(a) {
        function c(b, k) {
            if (b = a(k).attr("href"))
                b = b.replace("preferencesReturnUrl\x3d%2F", "preferencesReturnUrl\x3d" + d),
                a(k).attr("href", b)
        }
        var d = encodeURIComponent(b.location.pathname + b.location.search);
        a("#icp-nav-dialog, #icp-nav-flyout").each(c);
        a("#icp-touch-link-language, #icp-touch-link-country, #icp-touch-link-cop").each(c);
        a("*[id*\x3dicp-flyout-mkt-change]").each(c);
        b.$Nav.when("$", "page.loaded").run("icp.latency_exp", function(b) {
            if (b("#icp-country-button-experiment").length) {
                var a = b("#icp-country-button-experiment").html()
                  , c = b("#icp-country-button-experiment-url").html();
                c = c.replace("preferencesReturnUrl\x3d%2F", "preferencesReturnUrl\x3d" + d);
                a = '\x3ca href\x3d"' + c + '" class\x3d"icp-button a-declarative" id\x3d"icp-touch-link-country"\x3e \x3cspan class\x3d"icp-flag-3 icp-flag-3-jp"\x3e\x3c/span\x3e\x3cspan class\x3d"icp-color-base"\x3e' + a + "\x3c/span\x3e \x3c/a\x3e";
                b("#icp-country-button-experiment").replaceWith(b(a));
                b("#icp-country-button-experiment-url").remove()
            }
        })
    });
    n = {
        flyoutDataEndpoint: "/customer-preferences/api/flyout/xop-and-country",
        saveSettingsEndpoint: "/customer-preferences/api/xop",
        isGurupa: !1
    };
    "use strict";
    b.$Nav && (b.$Nav.when("$", "data", "flyouts.create", "flyouts.accessibility", "flyout.icp.language.endpointConfig", "flyout.icp.language.saveLanguageAndReloadPage").build("flyout.icp.language.builder", function(a, c, d, h, k, n) {
        var p = k || {}, t = function() {
            return {
                extractLanguage: function(b) {
                    var a = (b || "").indexOf("#switch-lang\x3d");
                    return -1 === a ? "" : b.substr(a + 13)
                },
                insertLanguage: function(b) {
                    return "#switch-lang\x3d" + b
                }
            }
        }(), r, u;
        c.observe("data", function(a) {
            a = a || {};
            var f = a.languages
              , e = a.languages && a.languages.strings || {}
              , k = a.inputs || {}
              , l = e.disclaimer || {}
              , d = [];
            if (f !== m && f.all !== m && 1 < f.all.length) {
                var g = f.strings;
                a.cop && g && d.push({
                    text: g.changeText + (g.helpLinkText ? ' \x3ca href\x3d"' + g.helpLinkHref + '" class\x3d"icp-flyout-learn-more"\x3e' + g.helpLinkText + "\x3c/a\x3e" : "")
                });
                for (g = 0; g < f.all.length; g++) {
                    var h = f.all[g];
                    var n = h.current ? '\x3ci class\x3d"icp-radio icp-radio-active"\x3e\x3c/i\x3e' : '\x3ci class\x3d"icp-radio"\x3e\x3c/i\x3e'
                      , q = t.insertLanguage(h.code);
                    h = {
                        text: n + h.name,
                        url: q
                    };
                    1 === g && (h.dividerBefore = !f.localeDividerHidden,
                    u = !0);
                    d.push(h)
                }
            }
            l.text ? r = '\x3cdiv class\x3d"icp-flyout-bottom"\x3e\x3cdiv class\x3d"icp-flyout-disclaimer"\x3e' + l.text + "\x3c/div\x3e\x3c/div\x3e" : !a.cop && e.helpLinkHref && e.helpLinkText && d.push({
                text: '\x3cdiv class\x3d"icp-helplink"\x3e' + e.helpLinkText + "\x3c/div\x3e",
                url: e.helpLinkHref
            });
            a.cop && a.currency && (e = a.currency,
            e.strings && (e = e.strings,
            d.push({
                text: e.changeText + (e.helpLinkText ? ' \x3ca href\x3d"' + e.helpLinkHref + '" class\x3d"icp-flyout-learn-more"\x3e' + e.helpLinkText + "\x3c/a\x3e" : ""),
                dividerBefore: f !== m && f.all !== m && 1 < f.all.length
            }),
            l = "\x3cspan\x3e" + e.currencyName + "\x3c/span\x3e",
            g = encodeURIComponent(b.location.pathname + b.location.search),
            l += '\x3ca href\x3d"' + e.changeHref.replace("%s", g) + '" class\x3d"icp-flyout-change"\x3e' + e.changeShortText + "\x3c/a\x3e",
            d.push({
                text: l
            })));
            a.marketplace && (e = a.marketplace,
            l = e.strings,
            e.country && l.text && (d.push({
                text: '\x3ci class\x3d"icp-flyout-flag icp-flyout-flag-' + e.country + '"\x3e\x3c/i\x3e' + l.text,
                dividerBefore: f !== m || a.cop && a.currency !== m
            }),
            e.href && l.link && d.push({
                text: '\x3cdiv class\x3d"icp-mkt-change-lnk"\x3e' + l.link + "\x3c/div\x3e",
                url: e.href,
                id: "icp-flyout-mkt-change"
            })));
            c({
                icpContent: {
                    template: {
                        name: "itemList",
                        data: {
                            items: d,
                            inputs: k
                        }
                    }
                }
            })
        });
        return function(c) {
            c = c || {};
            var f = d({
                key: c.name,
                panelDataKey: "icpContent",
                link: c.target,
                event: "icp",
                arrow: "top",
                cover: c.isCoverEnabled
            })
              , e = p.isGurupa ? "LOP" : "lop"
              , h = null;
            p.isGurupa && (h = a('\x3cform method\x3d"post" style\x3d"display:none"\x3e\x3cinput type\x3d"hidden" name\x3d"_url" value\x3d"" /\x3e\x3cinput type\x3d"text" name\x3d"' + e + '" value\x3d"" /\x3e\x3c/form\x3e'));
            f.getPanel().onData(function(d) {
                p.isGurupa && (f.elem().find("form").length || f.elem().append(h));
                r && !f.elem().find(".icp-flyout-bottom").length && f.elem().append(r);
                var k = f.elem().find(".nav-divider")
                  , g = u ? 1 : 0;
                if (k.length > 1 + g)
                    for (; g <= k.length; g++) {
                        var l = k.eq(g);
                        l.addClass("icp-flyout-curr-divider");
                        c.isHeader || (l.hide(),
                        l.nextAll().hide())
                    }
                if (d && d.template && d.template.data && d.template.data.inputs && p.isGurupa)
                    for (var m in d.template.data.inputs)
                        h.append('\x3cinput name\x3d"' + m + '" value\x3d"' + d.template.data.inputs[m] + '"/\x3e');
                var q = c.isHeader ? "tn" : "fo";
                f.elem().find('a[href*\x3d"#switch-lang"]').each(function(c, k) {
                    var f = a(k);
                    f.click(function(c) {
                        c.preventDefault();
                        c = t.extractLanguage(f.attr("href"));
                        var k = b.location.pathname + b.location.search
                          , g = "icp_lop_" + c.replace("_", "-") + "_" + q;
                        g = p.saveSettingsEndpoint + "?ref_\x3d" + g;
                        p.isGurupa ? (h.attr("action", g),
                        h.find('input[name\x3d"_url"]').val(k),
                        h.find('input[name\x3d"' + e + '"]').val(c),
                        h.submit()) : n(a, g, c, d.template.data.inputs.token)
                    })
                })
            });
            return f
        }
    }),
    b.$Nav.when("provider.ajax", "util.Proximity", "flyout.icp.language.endpointConfig").build("flyout.icp.language.ajax", function(a, b, d) {
        var c = a({
            url: d && d.flyoutDataEndpoint,
            data: {
                icpContent: "icp"
            }
        }).boundFetch();
        return function(a) {
            a.onShow(c);
            a.link.focus(c);
            b.onEnter(a.link, [20, 40, 40, 40], c)
        }
    }),
    b.$Nav.declare && b.$Nav.declare("flyout.icp.language.endpointConfig", n),
    b.$Nav.when("$", "flyout.icp.language.builder", "flyout.icp.language.ajax", "config", "page.loaded").run("flyout.icp.language", function(a, b, d, h) {
        var c = a("#icp-nav-flyout");
        h = !h.primeDay;
        1 === c.length && d(b({
            name: "icp",
            target: c,
            isHeader: !0,
            isCoverEnabled: h
        }));
        a = a("#icp-touch-link-language");
        1 === a.find(".icp-up-down-arrow").length && d(b({
            name: "icp-footer-flyout",
            target: a,
            isHeader: !1
        }))
    }));
    b.$Nav.declare && b.$Nav.declare("flyout.icp.language.saveLanguageAndReloadPage", function(a, c, d, h) {
        a.ajax({
            url: c,
            type: "POST",
            contentType: "application/json; charset\x3dUTF-8",
            data: JSON.stringify({
                lop: d
            }),
            headers: {
                "anti-csrftoken-a2z": h
            },
            success: function(a) {
                a = new URLSearchParams(b.location.search);
                a.set("language", d);
                b.location.search = a.toString()
            }
        })
    })
});
/* ******** */
(function(k) {
    var l = window.AmazonUIPageJS || window.P
      , r = l._namespace || l.attributeErrors
      , a = r ? r("GLUXAssets", "") : l;
    a.guardFatal ? a.guardFatal(k)(a, window) : a.execute(function() {
        k(a, window)
    })
}
)(function(k, l, r) {
    k.when("A", "GLUXConfig", "GLUXWidget", "GLUXWidgetController", "GLUXRegionData", "LocationTypes", "GLUXMetrics", "GLUXWeblabUtil", "GLUXCartConflict", "addressChangeConstants").register("GLUXActionHandler", function(a, g, b, d, h, e, c, C, n, q) {
        var u = C.doesWeblabMatchTreatment("PACKARD_GLOBAL_DESKTOP_124721", C.TREATMENTS.T1)
          , v = a.$("#" + b.IDs.ADDRESS_LIST + " li").length
          , G = a.$("#" + b.IDs.ADDRESS_LIST_DELIVERY + " li").length
          , x = a.$("#" + b.IDs.ADDRESS_LIST_PICKUP + " li").length
          , p = b.INITIAL_DISPLAY_ADDRESS_INDEX && u ? b.INITIAL_DISPLAY_ADDRESS_INDEX : 4
          , m = p
          , z = p
          , H = p
          , D = g.ADDRESS_BOOK_URL
          , I = q.ENDPOINT
          , J = g.SIGNIN_URL
          , A = "input[id^\x3d" + b.IDs.ZIP_UPDATE_INPUT + "]"
          , B = function(b, d, e, c) {
            a.$("#" + b + " li").show();
            e = c - 1;
            a.$("#" + d).hide();
            return e
        }
          , w = function(b, d) {
            a.$("#" + b).show();
            a.$("[id\x3d" + d + "]").hide()
        }
          , E = function() {
            var a = {};
            l.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi, function(b, d, e) {
                a[d] = e
            });
            return a
        }
          , t = function(f, e) {
            k.now("packardGlowStoreName").execute("setStoreContext", function(a) {
                a && (f.storeContext = a)
            });
            f.deviceType = "web";
            f.pageType = l.ue_pty;
            f.actionSource = "glow";
            f.almBrandId = E().almBrandId;
            d.resetErrors();
            a.post(I, {
                headers: {
                    "anti-csrftoken-a2z": b ? b.CSRF_TOKEN : "",
                    "Content-Type": q.CONTENT_TYPE
                },
                params: f,
                paramsFormat: q.PARAMS_FORMAT,
                success: function(a) {
                    d.handleLocationUpdateResponse(a.sembuUpdated, a.isTransitOutOfAis, e)
                },
                error: function(a) {
                    d.handleLocationUpdateResponseError()
                }
            })
        }
          , F = function(a) {
            k.now("GLUXExternalConfig").execute("updateDestinationHandler", function(b) {
                b !== r && b.updateDestinationHandler ? b.updateDestinationHandler(addressID) : t(a, e.TYPE_ADDRESS_ID)
            })
        }
          , y = function(a) {
            return a.replace(/[^A-Za-z0-9\- ]/g, "")
        }
          , K = function() {
            [b.IDs.ADDRESS_LIST, b.IDs.ADDRESS_LIST_DELIVERY, b.IDs.ADDRESS_LIST_PICKUP].forEach(function(b) {
                a.$("#" + b).find(".a-button-selected input").each(function() {
                    this.setAttribute("disabled", "disabled")
                })
            })
        };
        a.on("a:button-group:GLUXAddresses:toggle", function(f) {
            var c = f.selectedButton.buttonName;
            f = c.split(":")[0];
            var h = c.split(":")[1]
              , c = a.$('input[name\x3d"' + String(c) + '"]');
            c.attr("deliverydestinationtype");
            if ("MANAGE_ADDRESS" !== f) {
                d.resetAddressRowState();
                u && K();
                var m = e.TYPE_ACCOUNT_ADDRESS;
                0 === parseInt(h, 10) && a.$("#" + b.IDs.DEAFULT_ADDRESS_TEXT).length && (m = e.TYPE_DEFAULT_ADDRESS);
                var g = {
                    locationType: m,
                    addressId: f,
                    totalCustomerAddresses: v,
                    selectedAddressIndex: h,
                    almBrandId: E().almBrandId,
                    storeRegionId: c.attr("storeregionid")
                };
                n.reset();
                d.clearPostalSelection();
                d.clearCountrySelection();
                d.clearCitySelection();
                f = c.next().html();
                a.$("#" + b.IDs.ADDRESS_SUCCESS_PLACEHOLDER).html(f);
                c.blur();
                g.almBrandId && g.storeRegionId ? (k.now("packardGlowStoreName").execute("setStoreContext", function(a) {
                    a && (g.storeContext = a)
                }),
                g.deviceType = "web",
                n.getConflictSummary({
                    data: g,
                    updateDestination: F,
                    hideWidget: d.hideWidget
                })) : F(g)
            }
        });
        a.on("a:dropdown:GLUXCityList:select", function(f) {
            f = f.value;
            var c = a.$("#" + b.IDs.CITY_VALUE).text()
              , h = {
                locationType: e.TYPE_CITY,
                city: f,
                cityName: c
            };
            n.reset();
            d.clearAddressSelection();
            d.clearAndReselectCityDropdown(f);
            d.clearPostalSelection();
            d.clearCountrySelection();
            a.$("#" + b.IDs.ADDRESS_SUCCESS_PLACEHOLDER).html(c);
            t(h, e.TYPE_CITY)
        });
        a.on("a:dropdown:GLUXCountryList:select", function(f) {
            f = f.value;
            var c = a.$("#" + b.IDs.COUNTRY_VALUE).text(), m;
            2 < f.length ? (m = h.mapRegionCodeToLocationData(f)) || (m = {
                locationType: e.TYPE_REGION,
                addressLabel: f,
                countryCode: b.COUNTRY_CODE
            }) : m = {
                locationType: e.TYPE_COUNTRY,
                district: f,
                countryCode: f
            };
            n.reset();
            d.clearPostalSelection();
            d.clearAddressSelection();
            d.clearAndReselectCountryDropdown(f);
            a.$("#" + b.IDs.ADDRESS_SUCCESS_PLACEHOLDER).html(c);
            t(m, e.TYPE_COUNTRY)
        });
        a.declarative(b.ACTIONS.MOBILE_BACK, "click touchstart", function() {
            d.restoreWidget(!0)
        });
        a.declarative(b.ACTIONS.MOBILE_CLOSE, "click touchstart", function() {
            d.hideWidget();
            c.logEvent(c.getEvents().view.close)
        });
        a.declarative(b.ACTIONS.DELIVERY_TAB, "click", function() {
            w(b.IDs.LINKS_DELIVERY, b.IDs.LINKS_PICKUP);
            c.logEvent(c.getEvents().click.tabChangeDelivery)
        });
        a.declarative(b.ACTIONS.DELIVERY_TAB, "keyup", function(a) {
            13 === a.$event.which && (w(b.IDs.LINKS_DELIVERY, b.IDs.LINKS_PICKUP),
            c.logEvent(c.getEvents().click.tabChangeDelivery))
        });
        a.declarative(b.ACTIONS.PICKUP_TAB, "click", function() {
            w(b.IDs.LINKS_PICKUP, b.IDs.LINKS_DELIVERY);
            c.logEvent(c.getEvents().click.tabChangePickup)
        });
        a.declarative(b.ACTIONS.PICKUP_TAB, "keyup", function(a) {
            13 === a.$event.which && (w(b.IDs.LINKS_PICKUP, b.IDs.LINKS_DELIVERY),
            c.logEvent(c.getEvents().click.tabChangePickup))
        });
        a.declarative(b.ACTIONS.MORE_LINK, "click", function() {
            p = B(b.IDs.ADDRESS_LIST, b.IDs.MORE_LINK, p, v);
            c.logEvent(c.getEvents().click.seeMore)
        });
        a.declarative(b.ACTIONS.MORE_LINK, "keyup", function(f) {
            13 === f.$event.which && a.$("#" + b.IDs.MORE_LINK).click()
        });
        a.declarative(b.ACTIONS.MORE_LINK_DELIVERY, "click", function() {
            m = B(b.IDs.ADDRESS_LIST_DELIVERY, b.IDs.MORE_LINK_DELIVERY, m, G);
            c.logEvent(c.getEvents().click.seeMoreDelivery)
        });
        a.declarative(b.ACTIONS.MORE_LINK_DELIVERY, "keyup", function(f) {
            13 === f.$event.which && a.$("#" + b.IDs.MORE_LINK_DELIVERY).click()
        });
        a.declarative(b.ACTIONS.MORE_LINK_PICKUP, "click", function() {
            z = B(b.IDs.ADDRESS_LIST_PICKUP, b.IDs.MORE_LINK_PICKUP, z, x);
            c.logEvent(c.getEvents().click.seeMorePickup)
        });
        a.declarative(b.ACTIONS.MORE_LINK_PICKUP, "keyup", function(f) {
            13 === f.$event.which && a.$("#" + b.IDs.MORE_LINK_PICKUP).click()
        });
        a.declarative(b.ACTIONS.MANAGE_ADDRESS_BOOK_LINK, "click touchstart", function() {
            l.location.href = D;
            c.logEvent(c.getEvents().click.manageAddressBook)
        });
        a.declarative(b.ACTIONS.MANAGE_ADDRESS_BOOK_LINK, "keyup", function(a) {
            13 === a.$event.which && (l.location.href = D,
            c.logEvent(c.getEvents().click.manageAddressBook))
        });
        a.declarative(b.ACTIONS.SPECIFY_LOCATION_LINK, "click", function() {
            w(b.IDs.SPECIFY_LOCATION_DIV, b.IDs.SPECIFY_LOCATION_LINK);
            c.logEvent(c.getEvents().click.showSpecifyLocation)
        });
        a.declarative(b.ACTIONS.SPECIFY_LOCATION_LINK, "keyup", function(f) {
            13 === f.$event.which && a.$("#" + b.IDs.SPECIFY_LOCATION_LINK).click()
        });
        a.declarative(b.ACTIONS.POSTAL_UPDATE, "click touchstart", function() {
            var f = a.$(A);
            if (2 === f.length) {
                var c;
                c = [];
                for (var m = 0; m < f.length; m++) {
                    var h = y(a.$(f[m]).val().toUpperCase());
                    c.push(h);
                    a.$(f[m]).attr("value", h)
                }
                f = y(a.$("#" + b.IDs.ZIP_DELIMITER).text() || "");
                c = c.join(f);
                f = {
                    locationType: e.TYPE_LOCATION_INPUT,
                    zipCode: c
                }
            } else
                c = y(a.$("#" + b.IDs.ZIP_UPDATE_INPUT).val()),
                f = {
                    locationType: e.TYPE_LOCATION_INPUT,
                    zipCode: c
                },
                a.$("#" + b.IDs.ZIP_UPDATE_INPUT).attr("value", c);
            n.reset();
            d.clearAddressSelection();
            d.clearCountrySelection();
            a.$("#" + b.IDs.ADDRESS_SUCCESS_PLACEHOLDER).html(c);
            a.$("#" + b.IDs.ZIP_BUTTON).removeClass("a-button-focus");
            u && a.$("#" + b.IDs.ZIP_CONFIRMATION_VALUE).html(c);
            t(f, e.TYPE_POSTAL_CODE)
        });
        a.declarative(b.ACTIONS.POSTAL_INPUT, "keyup", function(f) {
            var d = a.$(A);
            if (13 === f.$event.which)
                a.$("#" + b.IDs.ZIP_BUTTON).find("input").click(),
                c.logEvent(c.getEvents().click.keypressEnterPostal);
            else if (2 === d.length) {
                var e = a.$(d[0])
                  , m = a.$(d[1]);
                f = f.$event.which;
                String.fromCharCode(f).match(/\w/) ? (d = a.$(A),
                2 === d.length && (f = parseInt(e.attr("maxlength"), 10),
                e = e.val().length,
                f === e && m.focus())) : 8 === f && 0 === m.val().length && e.focus()
            }
        });
        a.declarative(b.ACTIONS.MOBILE_COUNTRY_SELECT, "click", function(a) {
            var b = a.data.value
              , b = {
                locationType: e.TYPE_COUNTRY,
                district: b,
                countryCode: b
            };
            a.$currentTarget.addClass("a-active");
            d.clearPostalSelection();
            n.reset();
            d.clearAddressSelection();
            d.clearAndReselectCountryDropdown(a);
            t(b, e.TYPE_COUNTRY)
        });
        a.on("a:popover:beforeHide:glow-modal", function() {
            d.restoreWidget();
            c.logEvent(c.getEvents().view.close);
            m = z = p = H;
            n.substitute()
        });
        a.declarative(b.ACTIONS.MOBILE_CITY_SELECT, "click", function(a) {
            var b = {
                locationType: e.TYPE_CITY,
                city: a.data.value,
                cityName: a.data.name
            };
            a.$currentTarget.addClass("a-active");
            n.reset();
            d.clearAddressSelection();
            d.clearAndReselectCityDropdown(a);
            d.clearPostalSelection();
            d.clearCountrySelection();
            t(b, e.TYPE_CITY)
        });
        a.declarative(b.IDs.MOBILE_CITY_LINK, "touchend", function(a) {
            a.$event.stopPropagation();
            a.$event.preventDefault();
            d.showCitySelection();
            c.logEvent(c.getEvents().click.citySelector)
        });
        a.declarative(b.IDs.MOBILE_POSTAL_CODE_LINK, "touchend", function(a) {
            a.$event.stopPropagation();
            a.$event.preventDefault();
            d.showZipCodeInput();
            c.logEvent(c.getEvents().click.postalInput)
        });
        a.declarative(b.IDs.MOBILE_COUNTRY_LINK, "touchend", function(a) {
            a.$event.stopPropagation();
            a.$event.preventDefault();
            d.showCountrySelection();
            c.logEvent(c.getEvents().click.countrySelector)
        });
        a.declarative(b.ACTIONS.SIGNIN, "click touchstart", function() {
            var a = J + l.location.pathname
              , b = l.ue_pty;
            if ("Search" === b || "Detail" === b)
                a += l.location.search;
            l.location.href = a;
            c.logEvent(c.getEvents().click.signIn)
        });
        a.declarative(b.ACTIONS.CHANGE_POSTAL_CODE_LINK, "click", function() {
            d.replacePostalCodeConfirmationWithInput();
            c.logEvent(c.getEvents().click.changePostalCodeFromConfirm)
        });
        a.declarative(b.ACTIONS.CHANGE_POSTAL_CODE_LINK, "keyup", function(c) {
            13 === c.$event.which && a.$("#" + b.IDs.CHANGE_POSTAL_CODE_LINK).click()
        });
        return {
            STATIC_DEVICE_TYPE: "web",
            updateDestination: t,
            sanitize: y
        }
    });
    k.when("A").register("addressChangeConstants", function(a) {
        return {
            ENDPOINT: "/portal-migration/hz/glow/address-change?actionSource\x3dglow",
            PARAMS_FORMAT: "json",
            CONTENT_TYPE: "application/json"
        }
    });
    "use strict";
    k.register("GLUXConfig", function() {
        return {
            SIGNIN_URL: "/gp/sign-in.html?ie\x3dUTF8\x26useRedirectOnSuccess\x3d1\x26ref_\x3ddex_glow_signin\x26path\x3d",
            ADDRESS_BOOK_URL: "/a/addresses",
            POSTAL_CODE_TO_CITY_LOOKUP_BASE_URL: "/gp/glow/lookup-zipcode.html?"
        }
    });
    k.when("A").execute(function(a) {
        a.on("a:popover:ajaxSuccess:glow-modal", function(a) {
            var b = a.popover;
            k.when("A", "a-modal", "GLUXWidget").execute("gluxWidgetInit", function(a, h, e) {
                b.isActive() && 1 == b.$container.length && (a = b.$container[0].getElementsByClassName("a-popover-header-content"),
                1 == a.length && (a = a[0]) && e.GLOW_TITLE && (a.innerText = e.GLOW_TITLE))
            })
        })
    });
    k.when("A", "a-modal", "GLUXWidget", "GLUXRefreshController", "GLUXMetrics", "GLUXWeblabUtil", "LocationTypes", "GLUXCartConflict").register("GLUXWidgetController", function(a, g, b, d, h, e, c, l) {
        function n() {
            var b = a.$("#nav-global-location-slot");
            (b = g.get(b)) && b.hide();
            (b = g.get("program_specific_modal")) && b.hide()
        }
        function q() {
            a.$("#" + b.IDs.ZIP_INPUT_SECTION).hide();
            a.$("#" + b.IDs.ZIP_CONFIRMATION_SECTION).show()
        }
        function u() {
            a.$("#" + b.IDs.ZIP_CONFIRMATION_SECTION).hide();
            a.$("#" + b.IDs.ZIP_INPUT_SECTION).show()
        }
        function v() {
            [b.IDs.ADDRESS_LIST, b.IDs.ADDRESS_LIST_DELIVERY, b.IDs.ADDRESS_LIST_PICKUP].forEach(function(b) {
                a.$("#" + b).find("input[disabled]").each(function() {
                    this.removeAttribute("disabled");
                    a.$(this).parent().parent().removeClass("a-button-focus");
                    a.$(this).parent().parent().removeClass("a-button-selected")
                })
            })
        }
        function r(c) {
            var d = g.get(a.$("#nav-global-location-slot"))
              , e = d.getContent();
            if (e) {
                var l = e.prop("innerHTML")
                  , k = d.attrs("header");
                c && (a.$("#" + b.IDs.SUCCESS_SUB_TEXT).addClass("GLUX_Hidden"),
                a.$("#" + b.IDs.SUCCESS_SUB_TEXT_AIS_EGRESS).removeClass("GLUX_Hidden"));
                c = a.$("#" + b.IDs.SUCCESS_DIALOG).clone().removeClass("GLUX_Hidden").prop("outerHTML");
                var q = a.$("#" + b.IDs.SUCCESS_FOOTER).prop("innerHTML")
                  , p = b.CONFIRM_HEADER;
                0 < a.$(e).find("#GLUXHiddenSuccessDialog").length && (a.state.replace("GLUXInfo", {
                    oldContent: l,
                    oldHeader: k
                }),
                d.update({
                    content: c,
                    footer: q,
                    width: 375,
                    header: p
                }),
                a.declarative("GLUXConfirmAction", "click", n))
            } else
                h.logEvent(h.getEvents().error.missingContent)
        }
        function x(c) {
            switch (c) {
            case "ADDRESS_ID":
                a.$("#" + b.IDs.ADDRESS_SET_ERROR).show();
                h.logEvent(h.getEvents().error.addressSelection);
                break;
            case "POSTAL_CODE":
                a.$("#" + b.IDs.ZIP_ERROR).show();
                h.logEvent(h.getEvents().error.postalInput);
                break;
            case "POSTAL_CODE_SERVER":
                a.$("#" + b.IDs.ZIP_SERVER_ERROR).show();
                h.logEvent(h.getEvents().error.postalServer);
                break;
            case "COUNTRY":
                a.$("#" + b.IDs.ADDRESS_SET_ERROR).show();
                h.logEvent(h.getEvents().error.addressSelection);
                break;
            case "POSTAL_CODE_WITH_CITY":
                a.$("#" + b.IDs.POSTAL_CODE_WITH_CITY_ERROR_MSG).removeClass("GLUX_Hidden"),
                h.logEvent(h.getEvents().error.postalCodeWithCityInput)
            }
        }
        var p = e.doesWeblabMatchTreatment("PACKARD_GLOBAL_DESKTOP_124721", e.TREATMENTS.T1);
        return {
            handleLocationUpdateResponse: function(b, e, g) {
                b ? (g === c.TYPE_ADDRESS_ID && l.resolve(),
                p ? e ? (r(e),
                d.subscribeAfterHidePopoverEvent()) : ("POSTAL_CODE" === g && q(),
                k.when("CondoEvents").execute(function(b) {
                    a.trigger(b.FEATURE_NOTIFY, "AddressList", "CustomerIntent")
                })) : e ? (r(e),
                d.subscribeAfterHidePopoverEvent()) : (n(),
                k.when("CondoEvents").execute(function(b) {
                    a.trigger(b.FEATURE_NOTIFY, "AddressList", "CustomerIntent")
                })),
                h.logLocationChange(g)) : x(g)
            },
            handleLocationUpdateResponseError: function() {
                x("POSTAL_CODE_SERVER")
            },
            resetErrors: function() {
                a.$("#" + b.IDs.ADDRESS_SET_ERROR).hide();
                a.$("#" + b.IDs.ZIP_ERROR).hide();
                a.$("#" + b.IDs.ZIP_SERVER_ERROR).hide()
            },
            restoreWidget: function() {
                k.when("CondoAPI").execute(function(a) {
                    a.restoreTakeover()
                })
            },
            hideWidget: n,
            resetAddressRowState: v,
            clearAddressSelection: function() {
                [b.IDs.ADDRESS_LIST, b.IDs.ADDRESS_LIST_DELIVERY, b.IDs.ADDRESS_LIST_PICKUP].forEach(function(b) {
                    a.$("#" + b + " li\x3espan\x3espan").removeClass("a-button-selected");
                    a.$("#" + b + " li\x3espan\x3espan").removeClass("a-button-focus")
                });
                v()
            },
            clearPostalSelection: function() {
                p && u();
                var c = "input[id^\x3d" + b.IDs.ZIP_UPDATE_INPUT + "]";
                a.$(c).val("");
                a.$(c).attr("value", "")
            },
            clearCountrySelection: function() {
                var c = b.COUNTRY_LIST_PLACEHOLDER;
                a.$("#" + b.IDs.COUNTRY_VALUE).text(c);
                a.$("#" + b.IDs.COUNTRY_LIST_DROPDOWN).removeClass("a-button-focus")
            },
            clearCitySelection: function() {
                var c = b.CITY_LIST_PLACEHOLDER;
                a.$("#" + b.IDs.CITY_VALUE).text(c);
                a.$("#" + b.IDs.CITY_LIST_DROPDOWN).removeClass("a-button-focus")
            },
            clearAndReselectCountryDropdown: function(c) {
                a.$("#" + b.IDs.COUNTRY_LIST + ' optgroup option[selected\x3d"selected"]').each(function() {
                    a.$(this).removeAttr("selected")
                });
                (c = a.$("#" + b.IDs.COUNTRY_LIST + ' optgroup option[value\x3d"' + c + '"]')) && a.$(c).attr("selected", "selected")
            },
            clearAndReselectCityDropdown: function(c) {
                a.$("#" + b.IDs.CITY_LIST + ' optgroup option[selected\x3d"selected"]').each(function() {
                    a.$(this).removeAttr("selected")
                });
                (c = a.$("#" + b.IDs.CITY_LIST + ' optgroup option[value\x3d"' + c + '"]')) && a.$(c).attr("selected", "selected")
            },
            replacePostalCodeInputWithConfirmation: q,
            replacePostalCodeConfirmationWithInput: u
        }
    });
    k.when("A").register("GLUXRefreshController", function(a) {
        function g() {
            a.trigger("packard:glow:destinationChangeNav")
        }
        return {
            notifyDestinationChangeNav: g,
            subscribeAfterHidePopoverEvent: function() {
                a.on("a:popover:afterHide:glow-modal", function() {
                    g();
                    a.off("a:popover:afterHide:glow-modal")
                })
            },
            getAfterHidePopoverEvent: "a:popover:afterHide:glow-modal"
        }
    });
    "use strict";
    k.when("A", "jQuery", "GLUXMetrics", "GLUXWeblabUtil").register("GLUXCartConflict", function(a, g, b, d) {
        function h() {
            var a = "storeRegionId addressId almBrandId deviceType locationType storeContext".split(" ");
            return null != e && a.every(function(a) {
                return e.hasOwnProperty(a)
            })
        }
        var e = null
          , c = !0
          , k = d.doesWeblabMatchTreatment("PACKARD_GLOBAL_DESKTOP_124721", d.TREATMENTS.T1);
        return {
            reset: function() {
                e = null;
                c = !0
            },
            getConflictSummary: function(d) {
                e = d.data;
                h() ? a.post("/afx/cartconflicts/getconflictsummary", {
                    timeout: 5E3,
                    success: function(a) {
                        !1 === a.isSuccess || !1 === a.canShopRegion || !1 === a.hasConflicts ? (c = !1,
                        d.updateDestination(e)) : (c = !0,
                        k || d.hideWidget())
                    },
                    error: function() {
                        b.logEvent(b.getEvents().cartConflict.getSummaryError);
                        d.updateDestination(e)
                    },
                    params: {
                        newRegionId: e.storeRegionId,
                        newAddressId: e.addressId,
                        brandId: e.almBrandId,
                        client: "glow"
                    }
                }) : (b.logEvent(b.getEvents().cartConflict.validateDataError),
                d.updateDestination(e))
            },
            resolve: function() {
                h() && a.post("/afx/cartconflicts/resolve", {
                    timeout: 5E3,
                    success: function() {
                        b.logEvent(b.getEvents().cartConflict.resolveSuccess)
                    },
                    error: function() {
                        b.logEvent(b.getEvents().cartConflict.resolveError)
                    },
                    params: {
                        newRegionId: e.storeRegionId,
                        newAddressId: e.addressId,
                        brandId: e.almBrandId,
                        client: "glow"
                    }
                })
            },
            substitute: function() {
                try {
                    if (h() && c) {
                        var a = g.param({
                            newRegionId: e.storeRegionId,
                            newAddressId: e.addressId,
                            brandId: e.almBrandId,
                            client: "glow",
                            deviceType: e.deviceType,
                            locationType: e.locationType,
                            storeContext: e.storeContext,
                            sourceUrl: l.location.pathname + l.location.search
                        });
                        b.logEvent(b.getEvents().cartConflict.substituteSuccess);
                        l.location.href = "/afx/cartconflicts/resolve/substitute?" + a
                    }
                } catch (d) {
                    b.logEvent(b.getEvents().cartConflict.substituteError)
                }
            }
        }
    });
    k.when("A", "GLUXWidget").register("LocationTypes", function(a, g) {
        return {
            TYPE_LOCATION_INPUT: "LOCATION_INPUT",
            TYPE_DEFAULT_ADDRESS: "DEFAULT_ADDRESS",
            TYPE_ACCOUNT_ADDRESS: "ACCOUNT_ADDRESS",
            TYPE_ADDRESS_ID: "ADDRESS_ID",
            TYPE_POSTAL_CODE: "POSTAL_CODE",
            TYPE_POSTAL_CODE_WITH_CITY: "POSTAL_CODE_WITH_CITY",
            TYPE_GPS_INPUT: "GPS_INPUT",
            TYPE_COUNTRY: "COUNTRY",
            TYPE_CITY: "CITY",
            TYPE_REGION: "REGION",
            TYPE_PCD: "PCD"
        }
    });
    k.when("A").register("lookupZipcodeConstants", function(a) {
        return {
            ENDPOINT: "/portal-migration/hz/glow/lookup-zipcode",
            IS_HORIZONTE: !0
        }
    });
    k.when("A", "GLUXWidget", "LocationTypes").register("GLUXRegionData", function(a, g, b) {
        var d = {
            "FR-CH": {
                countryCode: "FR",
                zipCode: "20000"
            }
        };
        return {
            getRegions: function() {
                return d
            },
            mapRegionCodeToLocationData: function(a) {
                a = d.hasOwnProperty(a) ? {
                    addressLabel: a,
                    countryCode: d[a].countryCode,
                    zipCode: d[a].zipCode,
                    locationType: b.TYPE_REGION
                } : null;
                return a
            }
        }
    });
    k.when("A", "ready", "navCF").execute(function(a) {
        a = a.$;
        var g = l.ue_pty;
        if (g && ("Detail" === g || "DetailAW" === g) && 0 !== a("#glow-ingress-block").length && (g = a("#addToCart"),
        0 !== g.length)) {
            if (0 === a("#addToCart input[name\x3ddropdown-selection]").length) {
                var b = a("#nav-global-location-slot #unifiedLocation1ClickAddress");
                0 !== b.length && b.clone().attr("id", "cartAddressNew").appendTo(g)
            }
            0 === a("#addToCart input[name\x3ddropdown-selection-ubb]").length && (a = a("#nav-global-location-slot #ubbShipTo"),
            0 !== a.length && a.clone().attr("id", "cartAddressUsed").appendTo(g))
        }
    });
    k.when("A", "GLUXWidget").register("GLUXMetrics", function(a) {
        function g(a, b) {
            l.ueLogError && a && l.ueLogError({
                message: a
            }, {
                logLevel: b || "ERROR",
                attribution: "GLOW"
            })
        }
        function b(a) {
            l.ue ? l.ue.count(a, (l.ue.count(a) || 0) + 1) : g("Failed to increment metrics counter: " + a + " because window.ue is not present.", "ERROR")
        }
        var d = {
            click: {
                signIn: "click.signIn",
                seeMore: "click.seeMore",
                seeMoreDelivery: "click.seeMoreDelivery",
                seeMorePickup: "click.seeMorePickup",
                tabChangeDelivery: "click.tabDelivery",
                tabChangePickup: "click.tabPickup",
                postalInput: "click.postalInput",
                postalCodeWithCityInput: "click.postalCodeWithCityInput",
                gpsInput: "click.gpsInput",
                countrySelector: "click.countrySelector",
                citySelector: "click.citySelector",
                cityWithDistrictSelector: "click.cityWithDistrictSelector",
                keypressEnterPostal: "click.keypressEnterPostal",
                manageAddressBook: "click.manageAddressBook",
                showSpecifyLocation: "click.showSpecifyLocation",
                changePostalCodeFromConfirm: "click.changePostalCodeFromConfirm",
                freshPickupLocationC: "click.freshPickupLocationC",
                freshPickupLocationT1: "click.freshPickupLocationT1"
            },
            postalCodeLookup: {
                ajaxSuccessWithValidResponse: "postalCodeLookup.ajaxSuccessWithValidResponse",
                ajaxSuccessWithEmptyCityListOrErrorMessage: "postalCodeLookup.ajaxSuccessWithEmptyCityListOrErrorMessage",
                ajaxFailure: "postalCodeLookup.ajaxFailure"
            },
            view: {
                open: "view.open",
                close: "view.close"
            },
            error: {
                addressSelection: "error.addressSelection",
                postalInput: "error.postalInput",
                postalServer: "error.postalServer",
                postalCodeWithCityInput: "error.postalCodeWithCityInput",
                gpsInput: "error.gpsInput",
                missingContent: "error.getContent",
                pcdInput: "error.pcdInput"
            },
            cartConflict: {
                getSummarySuccess: "success.cartConflict.getConflictSummary",
                getSummaryError: "error.cartConflict.getConflictSummary",
                resolveSuccess: "success.cartConflict.resolve",
                resolveError: "error.cartConflict.resolve",
                substituteSuccess: "success.cartConflict.substitute",
                substituteError: "error.cartConflict.substitute",
                validateDataError: "error.cartConflict.data"
            },
            locationChange: "locationChange"
        };
        return {
            getPageType: function() {
                return l.ue_pty
            },
            getEvents: function() {
                return d
            },
            logLocationChange: function(a) {
                b("GLOW." + d.locationChange + "." + a)
            },
            logEvent: function(a) {
                b("GLOW." + a)
            },
            logError: function(a, b) {
                g(a, b)
            }
        }
    });
    k.when("A", "GLUXWidget").register("GLUXWeblabUtil", function(a, g) {
        return {
            TREATMENTS: {
                C: "C",
                T1: "T1",
                T2: "T2"
            },
            doesWeblabMatchTreatment: function(a, d) {
                return g.WEBLABS && g.WEBLABS[a] === d
            }
        }
    })
});
/* ******** */
(function(v) {
    var u = window.AmazonUIPageJS || window.P
      , x = u._namespace || u.attributeErrors
      , J = x ? x("AssociatesSiteStripeJS", "") : u;
    J.guardFatal ? J.guardFatal(v)(J, window) : J.execute(function() {
        v(J, window)
    })
}
)(function(v, u, x) {
    var J = J || function(d, t) {
        var q = {}
          , h = q.lib = {}
          , g = function() {}
          , p = h.Base = {
            extend: function(c) {
                g.prototype = this;
                var a = new g;
                c && a.mixIn(c);
                a.hasOwnProperty("init") || (a.init = function() {
                    a.$super.init.apply(this, arguments)
                }
                );
                a.init.prototype = a;
                a.$super = this;
                return a
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a)
                    a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }
          , b = h.WordArray = p.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != t ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || e).stringify(this)
            },
            concat: function(a) {
                var c = this.words
                  , b = a.words
                  , r = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (r % 4)
                    for (var e = 0; e < a; e++)
                        c[r + e >>> 2] |= (b[e >>> 2] >>> 24 - e % 4 * 8 & 255) << 24 - (r + e) % 4 * 8;
                else if (65535 < b.length)
                    for (e = 0; e < a; e += 4)
                        c[r + e >>> 2] = b[e >>> 2];
                else
                    c.push.apply(c, b);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words
                  , c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - c % 4 * 8;
                a.length = d.ceil(c / 4)
            },
            clone: function() {
                var a = p.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], r = 0; r < a; r += 4)
                    c.push(4294967296 * d.random() | 0);
                return new b.init(c,a)
            }
        })
          , k = q.enc = {}
          , e = k.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var b = [], r = 0; r < a; r++) {
                    var e = c[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    b.push((e >>> 4).toString(16));
                    b.push((e & 15).toString(16))
                }
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, r = [], e = 0; e < c; e += 2)
                    r[e >>> 3] |= parseInt(a.substr(e, 2), 16) << 24 - e % 8 * 4;
                return new b.init(r,c / 2)
            }
        }
          , c = k.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var b = [], r = 0; r < a; r++)
                    b.push(String.fromCharCode(c[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, r = [], e = 0; e < c; e++)
                    r[e >>> 2] |= (a.charCodeAt(e) & 255) << 24 - e % 4 * 8;
                return new b.init(r,c)
            }
        }
          , n = k.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(c.stringify(a)))
                } catch (b) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return c.parse(unescape(encodeURIComponent(a)))
            }
        }
          , r = h.BufferedBlockAlgorithm = p.extend({
            reset: function() {
                this._data = new b.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = n.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var c = this._data
                  , r = c.words
                  , e = c.sigBytes
                  , k = this.blockSize
                  , h = e / (4 * k)
                  , h = a ? d.ceil(h) : d.max((h | 0) - this._minBufferSize, 0);
                a = h * k;
                e = d.min(4 * a, e);
                if (a) {
                    for (var g = 0; g < a; g += k)
                        this._doProcessBlock(r, g);
                    g = r.splice(0, a);
                    c.sigBytes -= e
                }
                return new b.init(g,e)
            },
            clone: function() {
                var a = p.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
        h.Hasher = r.extend({
            cfg: p.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                r.reset.call(this);
                this._doReset()
            },
            update: function(a) {
                this._append(a);
                this._process();
                return this
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(a) {
                return function(c, b) {
                    return (new a.init(b)).finalize(c)
                }
            },
            _createHmacHelper: function(c) {
                return function(b, r) {
                    return (new a.HMAC.init(c,r)).finalize(b)
                }
            }
        });
        var a = q.algo = {};
        return q
    }(Math);
    (function(d) {
        function t(c, a, b, e, h, k, d) {
            c = c + (a & b | ~a & e) + h + d;
            return (c << k | c >>> 32 - k) + a
        }
        function q(c, a, b, e, k, h, d) {
            c = c + (a & e | b & ~e) + k + d;
            return (c << h | c >>> 32 - h) + a
        }
        function h(c, a, b, e, h, k, d) {
            c = c + (a ^ b ^ e) + h + d;
            return (c << k | c >>> 32 - k) + a
        }
        function g(c, a, b, e, k, h, d) {
            c = c + (b ^ (a | ~e)) + k + d;
            return (c << h | c >>> 32 - h) + a
        }
        for (var p = J, b = p.lib, k = b.WordArray, e = b.Hasher, b = p.algo, c = [], n = 0; 64 > n; n++)
            c[n] = 4294967296 * d.abs(d.sin(n + 1)) | 0;
        b = b.MD5 = e.extend({
            _doReset: function() {
                this._hash = new k.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(b, a) {
                for (var e = 0; 16 > e; e++) {
                    var k = a + e
                      , d = b[k];
                    b[k] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360
                }
                var e = this._hash.words
                  , k = b[a + 0]
                  , d = b[a + 1]
                  , p = b[a + 2]
                  , n = b[a + 3]
                  , z = b[a + 4]
                  , u = b[a + 5]
                  , D = b[a + 6]
                  , G = b[a + 7]
                  , C = b[a + 8]
                  , B = b[a + 9]
                  , E = b[a + 10]
                  , F = b[a + 11]
                  , I = b[a + 12]
                  , L = b[a + 13]
                  , M = b[a + 14];
                b = b[a + 15];
                a = e[0];
                var f = e[1]
                  , l = e[2]
                  , m = e[3];
                a = t(a, f, l, m, k, 7, c[0]);
                m = t(m, a, f, l, d, 12, c[1]);
                l = t(l, m, a, f, p, 17, c[2]);
                f = t(f, l, m, a, n, 22, c[3]);
                a = t(a, f, l, m, z, 7, c[4]);
                m = t(m, a, f, l, u, 12, c[5]);
                l = t(l, m, a, f, D, 17, c[6]);
                f = t(f, l, m, a, G, 22, c[7]);
                a = t(a, f, l, m, C, 7, c[8]);
                m = t(m, a, f, l, B, 12, c[9]);
                l = t(l, m, a, f, E, 17, c[10]);
                f = t(f, l, m, a, F, 22, c[11]);
                a = t(a, f, l, m, I, 7, c[12]);
                m = t(m, a, f, l, L, 12, c[13]);
                l = t(l, m, a, f, M, 17, c[14]);
                f = t(f, l, m, a, b, 22, c[15]);
                a = q(a, f, l, m, d, 5, c[16]);
                m = q(m, a, f, l, D, 9, c[17]);
                l = q(l, m, a, f, F, 14, c[18]);
                f = q(f, l, m, a, k, 20, c[19]);
                a = q(a, f, l, m, u, 5, c[20]);
                m = q(m, a, f, l, E, 9, c[21]);
                l = q(l, m, a, f, b, 14, c[22]);
                f = q(f, l, m, a, z, 20, c[23]);
                a = q(a, f, l, m, B, 5, c[24]);
                m = q(m, a, f, l, M, 9, c[25]);
                l = q(l, m, a, f, n, 14, c[26]);
                f = q(f, l, m, a, C, 20, c[27]);
                a = q(a, f, l, m, L, 5, c[28]);
                m = q(m, a, f, l, p, 9, c[29]);
                l = q(l, m, a, f, G, 14, c[30]);
                f = q(f, l, m, a, I, 20, c[31]);
                a = h(a, f, l, m, u, 4, c[32]);
                m = h(m, a, f, l, C, 11, c[33]);
                l = h(l, m, a, f, F, 16, c[34]);
                f = h(f, l, m, a, M, 23, c[35]);
                a = h(a, f, l, m, d, 4, c[36]);
                m = h(m, a, f, l, z, 11, c[37]);
                l = h(l, m, a, f, G, 16, c[38]);
                f = h(f, l, m, a, E, 23, c[39]);
                a = h(a, f, l, m, L, 4, c[40]);
                m = h(m, a, f, l, k, 11, c[41]);
                l = h(l, m, a, f, n, 16, c[42]);
                f = h(f, l, m, a, D, 23, c[43]);
                a = h(a, f, l, m, B, 4, c[44]);
                m = h(m, a, f, l, I, 11, c[45]);
                l = h(l, m, a, f, b, 16, c[46]);
                f = h(f, l, m, a, p, 23, c[47]);
                a = g(a, f, l, m, k, 6, c[48]);
                m = g(m, a, f, l, G, 10, c[49]);
                l = g(l, m, a, f, M, 15, c[50]);
                f = g(f, l, m, a, u, 21, c[51]);
                a = g(a, f, l, m, I, 6, c[52]);
                m = g(m, a, f, l, n, 10, c[53]);
                l = g(l, m, a, f, E, 15, c[54]);
                f = g(f, l, m, a, d, 21, c[55]);
                a = g(a, f, l, m, C, 6, c[56]);
                m = g(m, a, f, l, b, 10, c[57]);
                l = g(l, m, a, f, D, 15, c[58]);
                f = g(f, l, m, a, L, 21, c[59]);
                a = g(a, f, l, m, z, 6, c[60]);
                m = g(m, a, f, l, F, 10, c[61]);
                l = g(l, m, a, f, p, 15, c[62]);
                f = g(f, l, m, a, B, 21, c[63]);
                e[0] = e[0] + a | 0;
                e[1] = e[1] + f | 0;
                e[2] = e[2] + l | 0;
                e[3] = e[3] + m | 0
            },
            _doFinalize: function() {
                var c = this._data
                  , a = c.words
                  , b = 8 * this._nDataBytes
                  , e = 8 * c.sigBytes;
                a[e >>> 5] |= 128 << 24 - e % 32;
                var k = d.floor(b / 4294967296);
                a[(e + 64 >>> 9 << 4) + 15] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
                a[(e + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
                c.sigBytes = 4 * (a.length + 1);
                this._process();
                c = this._hash;
                a = c.words;
                for (b = 0; 4 > b; b++)
                    e = a[b],
                    a[b] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
                return c
            },
            clone: function() {
                var c = e.clone.call(this);
                c._hash = this._hash.clone();
                return c
            }
        });
        p.MD5 = e._createHelper(b);
        p.HmacMD5 = e._createHmacHelper(b)
    }
    )(Math);
    "use strict";
    v.when("A", "amzn-ss-app-config").register("amzn-ss-link-id", function(d, t) {
        var q = function(d) {
            if ("string" !== typeof d.tag)
                throw Error("Invalid Tag");
            var g = d.linkCode, p = d.toolCreation, b = parseInt(t.getMarketplaceId(), 10), k = {
                p_parameter: "SS v2",
                test_name: t.getTestName()
            }, e, c;
            if ("string" !== typeof g || 2 > g.length || 3 < g.length)
                throw Error("Invalid LinkCode");
            if ("string" !== typeof p || null === p.match(/^(AC|SS|Pubstudio|Feeds|PAAPI)$/i))
                throw Error("Invalid ToolCreation");
            if (isNaN(b))
                throw Error("Invalid Marketplace");
            g = t.getForesterAssocLinksUrl();
            for (e in d)
                d.hasOwnProperty(e) && (k[e] = d[e]);
            k.createTime = (new Date).getTime();
            try {
                c = J.MD5(JSON.stringify(k)).toString()
            } catch (n) {
                c = "z7b5638deb81af5805803e8dc94cfdez"
            }
            this.linkId = c;
            d = {
                linkId: c,
                trackingParams: k,
                _v: 1
            };
            (new Image).src = g + encodeURIComponent(JSON.stringify(d));
            this.get = function() {
                return this.linkId
            }
        };
        return {
            get: function(d) {
                return (new q(d)).get()
            }
        }
    });
    "use strict";
    v.when("A").register("amzn-ss-make-xhr", function(d) {
        var t = d.$;
        return {
            makeXHR: function(d) {
                t.ajax({
                    url: d.url,
                    timeout: d.timeout ? d.timeout : 3E3,
                    data: d.data,
                    method: d.methodType,
                    dataType: d.dataType,
                    cache: d.cache,
                    success: function(d) {
                        return function(g) {
                            d.successCBArgs.push(g);
                            d.successCB.apply(x, d.successCBArgs)
                        }
                    }(d),
                    error: function(d) {
                        return function(g, p, b) {
                            d.failureCBArgs.push(g);
                            d.failureCBArgs.push(p);
                            d.failureCBArgs.push(b);
                            d.failureCB.apply(x, d.failureCBArgs)
                        }
                    }(d)
                })
            }
        }
    });
    "use strict";
    v.when("A", "amzn-ss-app-config", "amzn-ss-make-xhr").register("amzn-ss-third-party-module", function(d, t, q) {
        var h = function(g, b) {
            g.status = b ? b.status : 0;
            d.trigger("amzn-ss-third-party-excluded-asin-callback", g)
        }
          , g = function(g, b, k, e) {
            g.status = 0;
            d.trigger("amzn-ss-third-party-excluded-asin-callback", g)
        };
        return {
            isThirdPartyExcludedAsin: function(d) {
                q.makeXHR({
                    url: "/associates/sitestripe/validateAsin",
                    methodType: "GET",
                    data: {
                        asin: d.asin,
                        marketplaceId: t.getMarketplaceId()
                    },
                    dataType: "json",
                    successCB: h,
                    failureCB: g,
                    successCBArgs: [d],
                    failureCBArgs: [d]
                })
            }
        }
    });
    "use strict";
    v.when("A", "ready").register("amzn-ss-widget-utils", function(d) {
        var t = d.$;
        return {
            toggleCheckbox: function(d, h) {
                h = t("#" + h);
                var g = h.find("i")
                  , p = h.find("input");
                d ? (h.attr("aria-checked", "true"),
                g.removeClass("a-icon-checkbox-inactive"),
                g.addClass("a-icon-checkbox-active"),
                p.attr("checked", "checked")) : (h.attr("aria-checked", "false"),
                g.removeClass("a-icon-checkbox-active"),
                g.addClass("a-icon-checkbox-inactive"),
                p.removeAttr("checked"))
            },
            toggleRadioButton: function(d, h) {
                h = t("#" + h);
                var g = h.find("i")
                  , p = h.find("input");
                d ? (h.attr("aria-checked", "true"),
                g.removeClass("a-icon-radio-inactive"),
                g.addClass("a-icon-radio-active")) : (h.attr("aria-checked", "false"),
                g.removeClass("a-icon-radio-active"),
                g.addClass("a-icon-radio-inactive"));
                p.attr("checked", d)
            },
            isCheckboxChecked: function(d) {
                return "true" === t("#" + d).attr("aria-checked") ? !0 : !1
            },
            isRadioButtonChecked: function(d) {
                return "true" === t("#" + d).attr("aria-checked") ? !0 : !1
            }
        }
    });
    "use strict";
    v.when("twisterModule", "amzn-ss-store-tag").execute(function(d, t) {
        d = d.getState();
        d !== x && t.setTwisterState(d)
    });
    "use strict";
    v.when("A", "amzn-ss-app-config", "amzn-ss-store-tag", "amzn-ss-make-xhr", "ready").execute(function(d, t, q, h) {
        d = d.$;
        var g = t.getForesterPublisherStudioUrl()
          , p = function(b) {
            var d = q.getGlobalStoreTag();
            return {
                pParameter: "SS v2",
                testName: t.getTestName(),
                storeId: d.storeId,
                trackingId: d.trackingId,
                marketplaceId: t.getMarketplaceId(),
                asin: q.getAsin(),
                url: u.location.href,
                toolCreation: "SS",
                createTime: (new Date).getTime(),
                event: b.dataset.eventName
            }
        };
        d("body").delegate(".amzn-ss-wrap-content", "click", function(b) {
            (b = b.target) && b.dataset && b.dataset.eventName && (b = p(b),
            h.makeXHR({
                url: g + encodeURIComponent(JSON.stringify(b)),
                methodType: "GET",
                dataType: "json",
                successCB: function() {},
                failureCB: function() {},
                successCBArgs: [],
                failureCBArgs: []
            }))
        })
    });
    "use strict";
    v.when("A", "a-dropdown", "amzn-ss-app-config", "amzn-ss-store-tag", "amzn-ss-store-tag-manager", "ready").execute(function(d, t, q, h, g) {
        function p(a, c) {
            g.setButtonClicked(c);
            b(a, function() {
                k(".amzn-ss-link-home-page").unbind("click").click();
                k("#amzn-ss-earnings-link").unbind("click").click();
                k("#amzn-ss-help-link").unbind("click").click();
                k(".amzn-ss-settings-option").unbind("click").click()
            })
        }
        function b(a, c) {
            h.isStoreTagMapAssigned || (a.preventDefault(),
            h.populateStoreTagDropdown(),
            c())
        }
        var k = d.$
          , e = g.getGlobalStore()
          , c = g.getGlobalTag();
        if (e === x || "" === e.trim())
            h.populateStoreTagDropdown();
        else {
            d = ["text", "image", "text-image"];
            q = d.length;
            var n = []
              , r = [];
            n[0] = e;
            r[0] = c;
            for (e = 0; e < q; e++)
                h.updateDropdown(t.getSelect("amzn-ss-store-id-dropdown-" + d[e]), n),
                h.updateDropdown(t.getSelect("amzn-ss-tracking-id-dropdown-" + d[e]), r)
        }
        k(".amzn-ss-link-home-page").click(function(a) {
            p(a, g.ButtonsClicked.HOME)
        });
        k("#amzn-ss-earnings-link").click(function(a) {
            p(a, g.ButtonsClicked.EARNINGS)
        });
        k("#amzn-ss-help-link").click(function(a) {
            p(a, g.ButtonsClicked.HELP)
        });
        k(".amzn-ss-settings-option").click(function(a) {
            p(a, g.ButtonsClicked.SETTINGS)
        })
    });
    "use strict";
    v.when("A", "amzn-ss-default-store-tag", "amzn-ss-app-config", "amzn-ss-make-xhr", "ready").register("amzn-ss-store-tag-manager", function(d, t, q, h) {
        var g = d.$
          , p = {}
          , b = []
          , k = {}
          , e = !1
          , c = {
            NONE: "",
            HOME: "Home",
            EARNINGS: "Earnings",
            HELP: "Help",
            SETTINGS: "Settings"
        }
          , n = c.NONE
          , r = t.getDefaultStoreId()
          , a = t.getDefaultTrackingId()
          , K = q.getLocale()
          , N = JSON.parse(q.getLocaleBaseUrls().replace(/&quot;/g, '"'))
          , y = function(a, c, b, e, d) {
            a = [a, c, b, e, d];
            h.makeXHR({
                url: "/associates/sitestripe/getStoreTagMap",
                methodType: "GET",
                data: {
                    marketplaceId: t.getMarketplaceId()
                },
                dataType: "json",
                timeout: 8E3,
                successCB: D,
                successCBArgs: a,
                failureCB: G,
                failureCBArgs: a
            })
        }
          , w = function(c, b, e) {
            e && 1 === e.status && (r = c,
            a = b)
        }
          , v = function() {}
          , z = function(c, b) {
            c === r && b === a || h.makeXHR({
                url: "/associates/sitestripe/setDefaultStoreTag",
                methodType: "GET",
                data: {
                    marketplaceId: t.getMarketplaceId(),
                    storeId: c,
                    trackingId: b
                },
                dataType: "json",
                successCB: w,
                failureCB: v,
                successCBArgs: [c, b],
                failureCBArgs: []
            })
        }
          , A = function(a, c, b) {
            "function" === typeof a && a.apply(c, b)
        }
          , D = function(c, h, n, D, t, f) {
            if (f)
                if (1 === f.status) {
                    var l = f.storeTagMap;
                    f = f.storeHomeCountryMap;
                    var m = 0, q = [], H;
                    for (H in l)
                        l.hasOwnProperty(H) && (q[m++] = H);
                    H = !1;
                    m = r;
                    -1 === g.inArray(m, q) && (m = q[0],
                    H = !0);
                    var G = f[m]
                      , O = a
                      , y = l[m];
                    -1 === g.inArray(O, y) && (O = y[0],
                    H = !0);
                    p = l;
                    e = !0;
                    b = q;
                    k = f;
                    K !== G && B(G);
                    C();
                    H && z(m, O);
                    H = [];
                    switch (D) {
                    case "storeArray":
                        H = [q, f, h];
                        break;
                    case "tagArray":
                        H = t && -1 !== g.inArray(t, q) ? [l[t], h] : [[], h];
                        break;
                    case "storeTagMap":
                        H = [l, h]
                    }
                    A(c, n, H)
                } else
                    2 === f.status && (A(c, n, [x, h]),
                    d.trigger("amzn-ss-action-disable-ss"))
        }
          , G = function(a, c, b, e, d, k, l, m) {
            A(e, k, [x, d, a, c, b])
        }
          , C = function() {
            n === c.HOME ? u.open(document.getElementsByClassName("amzn-ss-brand amzn-ss-link-container")[0].getElementsByTagName("a")[0].href) : n === c.EARNINGS ? u.open(document.getElementById("amzn-ss-earnings-link").getElementsByTagName("a")[0].href) : n === c.HELP ? u.open(document.getElementById("amzn-ss-help-link").getElementsByTagName("a")[0].href) : n === c.SETTINGS && u.open(document.getElementsByClassName("amzn-ss-settings-option")[0].getElementsByTagName("a")[0].href);
            n = c.NONE
        }
          , B = function(a) {
            var c = "https://" + N[a]
              , b = c + "/home/account/sitestripe";
            document.getElementsByClassName("amzn-ss-settings-option")[0].getElementsByTagName("a")[0].href = b;
            b = c + "/home/reports";
            document.getElementById("amzn-ss-earnings-link").getElementsByTagName("a")[0].href = b;
            b = c + "/help/stripe.html";
            document.getElementById("amzn-ss-help-link").getElementsByTagName("a")[0].href = b;
            c += "/home";
            document.getElementsByClassName("amzn-ss-brand amzn-ss-link-container")[0].getElementsByTagName("a")[0].href = c;
            K = a
        };
        return {
            getGlobalStore: function() {
                return r
            },
            getGlobalTag: function() {
                return a
            },
            fetchStores: function(a, c, d) {
                e ? A(a, d, [b, k, c]) : y(a, c, d, "storeArray", "")
            },
            fetchTags: function(a, c, d, k) {
                e ? -1 === g.inArray(k, b) ? A(a, d, [[], c]) : A(a, d, [b, c]) : y(a, c, d, "tagArray", k)
            },
            fetchStoreTagMap: function(a, c, b) {
                e ? (A(a, b, [p, k, c]),
                C()) : y(a, c, b, "storeTagMap", "")
            },
            updateGlobalStoreTag: z,
            isStoreTagMapAssigned: function() {
                return e
            },
            updateUrls: B,
            setButtonClicked: function(a) {
                n = a
            },
            ButtonsClicked: c
        }
    });
    "use strict";
    v.when("A", "a-popover", "amzn-ss-app-config", "amzn-ss-make-xhr", "ready").register("amzn-ss-sitestripe", function(d, t, q, h) {
        var g = function(b, c, d) {
            u.location.reload(!1)
        }
          , p = function(b, c) {
            u.location.reload(!1)
        }
          , b = function(b) {
            u.location.reload(!1)
        }
          , k = function(b, c, d) {
            u.location.reload(!1)
        };
        d.declarative("amzn-ss-action-toggle-ss", "click", function(b) {
            b = b.data;
            h.makeXHR({
                url: "hide" === b.action ? "/associates/sitestripe/hideSiteStripe" : "/associates/sitestripe/showSiteStripe",
                methodType: "GET",
                data: {
                    marketplaceId: q.getMarketplaceId()
                },
                dataType: "json",
                successCB: p,
                failureCB: g,
                successCBArgs: [b],
                failureCBArgs: [b]
            })
        });
        d.on("amzn-ss-action-disable-ss", function() {
            h.makeXHR({
                url: "/associates/sitestripe/disableSiteStripe",
                methodType: "GET",
                data: {
                    marketplaceId: q.getMarketplaceId()
                },
                dataType: "json",
                successCB: b,
                failureCB: k,
                successCBArgs: [],
                failureCBArgs: []
            })
        });
        return {
            getLanguagePreferance: function() {
                var b = q.getLanguageCodeCookieName();
                return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + b + "\\s*\\\x3d\\s*([^;]*).*$)|^.*$"), "$1")
            },
            addActiveToPopoverContainer: function(b) {
                b.$trigger && (b.$trigger.closest("li").addClass("active"),
                b.$container && b.$container.addClass(b.$trigger.data("a-class")))
            },
            removeActiveFromPopoverContainer: function(b) {
                b.$trigger && b.$trigger.closest("li").removeClass("active")
            },
            getUpdatedUrl: function() {
                var b = q.getRetailWebsiteUrl()
                  , c = u.location.pathname
                  , c = c.replace(/\/$/, "");
                -1 < c.indexOf("/ref\x3d") && (c = c.replace(/(\/ref=)[^?"]+/ig, ""));
                b += c;
                if (1 == !!document.documentMode) {
                    var c = decodeURIComponent(u.location.search)
                      , d = [/(&?language=)[^&"]+/ig, /(&?linkId=)[^&"]+/ig, /(&?tag=)[^&"]+/ig, /(&?creative=)[^&"]+/ig, /(&?camp=)[^&"]+/ig, /(&?creativeASIN=)[^&"]+/ig, /(&?linkCode=)[^&"]+/ig, /(&?ref=)[^&"]+/ig, /(&?ref_=)[^&"]+/ig];
                    if (c)
                        for (var k = 0; k < d.length; k++)
                            c = c.replace(d[k], "");
                    else
                        c = "?ie\x3dUTF8";
                    c = encodeURI(c)
                } else
                    c = new URLSearchParams(u.location.search),
                    c.delete("language"),
                    c.delete("linkId"),
                    c.delete("tag"),
                    c.delete("creative"),
                    c.delete("camp"),
                    c.delete("creativeASIN"),
                    c.delete("linkCode"),
                    c.delete("ref"),
                    c.delete("ref_"),
                    c = "?" + c.toString();
                return b + c
            }
        }
    });
    "use strict";
    v.when("A", "a-dropdown", "a-button", "amzn-ss-app-config", "amzn-ss-sitestripe", "amzn-ss-make-xhr", "amzn-ss-store-tag-manager").register("amzn-ss-store-tag", function(d, t, q, h, g, p, b) {
        var k = d.$
          , e = h.isDetailPage()
          , c = {
            storeId: b.getGlobalStore(),
            trackingId: b.getGlobalTag()
        }
          , n = function(a) {
            return t.getSelect("amzn-ss-store-id-dropdown-" + a)
        }
          , r = function(a) {
            return t.getSelect("amzn-ss-tracking-id-dropdown-" + a)
        }
          , a = function(a) {
            var c = q(".amzn-ss-get-link-btn");
            !0 === a ? c.enable() : c.disable()
        }
          , K = function() {
            var a = g.getUpdatedUrl();
            return "1" !== e ? "NA" : u(a)
        }
          , u = function(a) {
            for (var c = [/\/gp\/product\/([a-zA-Z0-9]{10})/, /\/dp\/([a-zA-Z0-9]{10})/], b = 0; b < c.length; b++) {
                var d = c[b].exec(a);
                if (d)
                    return d[1]
            }
            return "NA"
        }
          , y = function(a, c) {
            if (a) {
                for (var b = [], d = a.getOptions().size(), e = 0; e < d; e++)
                    b[e] = e;
                a.removeOptions(b);
                b = [];
                for (e = 0; e < c.length; e++)
                    b[e] = {
                        text: c[e],
                        value: c[e]
                    };
                a.addOptions(b)
            }
        }
          , w = function(a, d, e) {
            if (a) {
                var g = n(e)
                  , h = r(e)
                  , p = g.val()
                  , q = h.val();
                a = a[p];
                p !== x && a !== x && "object" === typeof a && (c.storeId = g.val(),
                b.updateUrls(d[p]),
                y(h, a),
                h.setValue(-1 === k.inArray(q, a) ? a[0] : q),
                v(e))
            }
        }
          , v = function(b) {
            var e = r(b);
            c.trackingId = e.val();
            a(!0);
            switch (b) {
            case "text":
                d.trigger("amzn-ss-text-popover-store-tag-updated", c);
                break;
            case "image":
                d.trigger("amzn-ss-image-popover-get-link", c);
                break;
            case "text-image":
                d.trigger("amzn-ss-text-image-popover-get-link", c)
            }
        }
          , z = function(a, b) {
            var d = c.storeId
              , e = c.trackingId
              , g = n(b);
            b = r(b);
            a = a[d];
            a !== x && -1 !== k.inArray(e, a) && g && b && (g.setValue(d),
            y(b, a),
            b.setValue(e))
        }
          , A = function(a, b) {
            if (a) {
                var c = b.length, d = 0, e = [], k;
                for (k in a)
                    a.hasOwnProperty(k) && (e[d++] = k);
                for (d = 0; d < c; d++)
                    y(n(b[d]), e),
                    z(a, b[d])
            }
        };
        d.declarative("amzn-ss-get-link", "click", function(a) {
            d.trigger("amzn-ss-text-popover-get-link", c)
        });
        d.on("amzn-ss-store-tag-change-event", z);
        return {
            getLongUrlTemplate: function() {
                var a = g.getUpdatedUrl();
                if ("1" === e)
                    var b = K()
                      , c = u(a)
                      , a = b !== c ? a.replace(c, b) : a;
                a += "\x26linkCode\x3d__LINKCODE__\x26tag\x3d__TRACKINGID__\x26linkId\x3d__LINKID__";
                g.getLanguagePreferance() && (a += "\x26language\x3d__LANGUAGE__");
                return a + "\x26ref_\x3d__REFTAG__"
            },
            getAsin: K,
            getGlobalStoreTag: function() {
                return c
            },
            enableGetLinkButton: a,
            updateDefaultStoreTagAtServer: function() {
                b.updateGlobalStoreTag(c.storeId, c.trackingId)
            },
            setTwisterState: function(a) {},
            updateDropdown: y,
            handleStoreDropdownChange: function(a) {
                b.fetchStoreTagMap(w, a)
            },
            handleTagDropdownChange: v,
            populateStoreTagDropdown: function(a) {
                b.isStoreTagMapAssigned() ? b.fetchStoreTagMap(A, [a]) : b.fetchStoreTagMap(A, ["text", "image", "text-image"])
            }
        }
    });
    "use strict";
    v.when("A", "a-popover", "a-modal", "amzn-ss-link-id", "amzn-ss-app-config", "amzn-ss-store-tag", "amzn-ss-widget-utils", "amzn-ss-make-xhr", "amzn-ss-sitestripe", "amzn-ss-third-party-module").register("amzn-ss-text-popover", function(d, t, q, h, g, p, b, k, e, c) {
        var n = d.$
          , r = g.isDetailPage();
        q = g.getStringMap();
        var a, K = !1, u = !1, y = n("#amzn-ss-text-link"), w = n(".amzn-ss-popover-spinner"), v = n(".amzn-ss-popover-third-party-message"), z = n("#amzn-ss-popover-text-preload-content-container"), A = n(".amzn-ss-popover-link-failure-message"), D = n("#amzn-ss-txt-success-msg"), x = n("#amzn-ss-txt-failure-msg"), C = n("#amzn-ss-txt-update-msg"), B = n("#amzn-ss-loading-spinner"), E = n("#amzn-ss-text-fulllink-textarea"), F = n("#amzn-ss-text-shortlink-textarea"), I = function() {
            w.hide();
            v.hide();
            A.hide();
            z.hide()
        }, L = function() {
            D.hide();
            x.hide();
            C.hide();
            B.hide()
        }, M = {
            name: "amzn-ss-popover-text-preload-content",
            popoverLabel: q.amzn_ss_popover_title_txt,
            header: q.amzn_ss_popover_title_txt,
            activate: "onclick",
            width: 560
        }, f = {
            toolCreation: "SS",
            adUnitType: "TEXT",
            adUnitDescription: "Product links Text only link",
            destinationType: "1" === r ? "ASIN" : "MULTIPLE",
            marketplaceId: g.getMarketplaceId()
        }, l = function() {
            b.toggleRadioButton(!1, "amzn-ss-full-link-radio-button");
            b.toggleRadioButton(!1, "amzn-ss-short-link-radio-button")
        }, m = function(a, b) {
            I();
            b && !0 === b.isOk ? null === b.shortUrl ? v.show() : (z.show(),
            L(),
            D.show(),
            p.enableGetLinkButton(!1),
            K = !0,
            E.hide(),
            F.show(),
            F.text(b.shortUrl),
            setTimeout(function() {
                F.select()
            }, 10)) : Q(a)
        }, Q = function(a, b, c, d) {
            I();
            a ? (z.show(),
            L(),
            x.show()) : A.show()
        }, H = function(c, d) {
            a = p.getLongUrlTemplate();
            f.store = c.storeId;
            f.tag = c.trackingId;
            f.asin = p.getAsin();
            f.adUnitSubType = "ShortLinks";
            f.linkCode = "1" === r ? g.getLinkCode().textShortLink_dp : g.getLinkCode().textShortLink_ndp;
            c = h.get(f);
            var n = a.replace("__LINKCODE__", f.linkCode)
              , n = n.replace("__REFTAG__", g.getRefTag().textLink)
              , n = n.replace("__LANGUAGE__", e.getLanguagePreferance())
              , n = n.replace("__TRACKINGID__", f.tag)
              , n = n.replace("__LINKID__", c);
            B.show();
            k.makeXHR({
                url: "/associates/sitestripe/getShortUrl",
                methodType: "GET",
                data: {
                    longUrl: n,
                    marketplaceId: f.marketplaceId
                },
                dataType: "json",
                successCB: m,
                failureCB: Q,
                successCBArgs: [d],
                failureCBArgs: [d]
            });
            l();
            b.toggleRadioButton(!0, "amzn-ss-short-link-radio-button");
            E.hide();
            F.show()
        };
        F.bind("click", function() {
            n(this).select()
        });
        E.bind("click", function() {
            n(this).select()
        });
        d.declarative("amzn-ss-get-link-shortlink", "click", function(a) {
            l();
            b.toggleRadioButton(!0, "amzn-ss-short-link-radio-button");
            E.hide();
            F.show();
            F.select()
        });
        d.declarative("amzn-ss-get-link-fulllink", "click", function(c) {
            if (K) {
                K = !1;
                f.adUnitSubType = "FullLinks";
                f.linkCode = "1" === r ? g.getLinkCode().textLongLink_dp : g.getLinkCode().textLongLink_ndp;
                c = h.get(f);
                var d = a.replace("__LINKCODE__", f.linkCode)
                  , d = d.replace("__REFTAG__", g.getRefTag().textLink)
                  , d = d.replace("__LANGUAGE__", e.getLanguagePreferance())
                  , d = d.replace("__TRACKINGID__", f.tag)
                  , d = d.replace("__LINKID__", c);
                E.text(d)
            }
            l();
            b.toggleRadioButton(!0, "amzn-ss-full-link-radio-button");
            F.hide();
            E.show();
            E.select()
        });
        d.declarative("amzn-ss-show-text-popover", "click", function(a) {
            u || (p.getAsin(),
            a = t.create(y, M),
            I(),
            w.show(),
            a.show(),
            H(p.getGlobalStoreTag(), !1))
        });
        d.on("a:popover:beforeShow:amzn-ss-popover-text-preload-content", function(a) {
            p.populateStoreTagDropdown("text")
        });
        d.on("a:popover:show:amzn-ss-popover-text-preload-content", function(a) {
            u = !0;
            e.addActiveToPopoverContainer(a.popover)
        });
        d.on("a:popover:afterHide:amzn-ss-popover-text-preload-content", function(a) {
            u = !1;
            e.removeActiveFromPopoverContainer(a.popover);
            p.updateDefaultStoreTagAtServer()
        });
        d.on("a:dropdown:amzn-ss-store-id-dropdown-text:select", function(a) {
            p.handleStoreDropdownChange("text")
        });
        d.on("a:dropdown:amzn-ss-tracking-id-dropdown-text:select", function(a) {
            p.handleTagDropdownChange("text")
        });
        d.on("amzn-ss-text-popover-get-link", function(a) {
            H(a, !0)
        });
        d.on("amzn-ss-text-popover-store-tag-updated", function(a) {
            L();
            C.show();
            F.text("");
            E.text("");
            K = !1
        })
    });
    "use strict";
    v.when("A", "a-popover", "amzn-ss-link-id", "amzn-ss-app-config", "amzn-ss-store-tag", "amzn-ss-widget-utils", "amzn-ss-sitestripe", "amzn-ss-third-party-module").register("amzn-ss-image-popover", function(d, t, q, h, g, p, b, k) {
        var e = d.$, c, n = {}, r = h.getLinkCode(), a = h.getStringMap(), u = !1, v = e("#amzn-ss-image-link"), y = e(".amzn-ss-popover-spinner"), w = e(".amzn-ss-popover-third-party-message"), P = e(".amzn-ss-popover-link-failure-message"), z = e("#amzn-ss-popover-image-preload-content-container"), A = e("#amzn-ss-image-textarea"), D = function() {
            y.hide();
            w.hide();
            P.hide();
            z.hide()
        }, G = {
            name: "amzn-ss-popover-image-preload-content",
            popoverLabel: a.amzn_ss_popover_title_img,
            header: a.amzn_ss_popover_title_img,
            activate: "onclick",
            width: 530
        }, C = {
            toolCreation: "SS",
            adUnitType: "Image",
            adUnitSubType: "Product link",
            destinationType: "ASIN",
            pageType: "ProductLinks",
            subPageType: "Individual",
            marketplaceId: h.getMarketplaceId()
        }, B = function(a, b, d, k) {
            p.toggleRadioButton(!1, "amzn-ss-small-image-radio-button");
            p.toggleRadioButton(!1, "amzn-ss-medium-image-radio-button");
            p.toggleRadioButton(!1, "amzn-ss-large-image-radio-button");
            p.toggleRadioButton(!0, a);
            n[b] === x && (C.linkCode = k,
            a = q.get(C),
            k = c.replace(/__LINKCODE__/g, k),
            k = k.replace(/__LINKID__/g, a),
            n[b] = k.replace("__IMAGEFORMAT__", b));
            d && (e("#amzn-ss-preview-image-link").empty(),
            e("#amzn-ss-preview-image-link").append(n[b]));
            A.text(n[b]);
            setTimeout(function() {
                A.select()
            }, 10)
        }, E = function(a) {
            var d = g.getLongUrlTemplate();
            C.store = a.storeId;
            C.tag = a.trackingId;
            C.asin = g.getAsin();
            n = {};
            a = C.asin;
            var e = C.tag;
            c = h.getVendingHtml().imageLink;
            b.getLanguagePreferance() && (c = h.getVendingHtmlWithLanguagePreferance().imageLink);
            d = d.replace("__REFTAG__", h.getRefTag().imageLink);
            c = c.replace("__LONGURL__", d);
            c = c.replace("__WIDGETSERVERHOST__", h.getWidgetServerHost());
            c = c.replace("__IMPRESSIONRECORDERURL__", h.getImpressionRecorderUrl());
            c = c.replace(/__ASIN__/g, a);
            c = c.replace(/__TRACKINGID__/g, e);
            c = c.replace(/__LANGUAGE__/g, b.getLanguagePreferance());
            c = c.replace("__LOCALE__", h.getLocale());
            c = c.replace("__ASSOCPROGRAMID__", h.getAssocProgramId());
            B("amzn-ss-medium-image-radio-button", "_SL160_", !0, r.mediumImageLink)
        };
        A.bind("click", function() {
            e(this).select()
        });
        a = function(a) {
            switch (a.action) {
            case "amzn-ss-get-small-image":
                B("amzn-ss-small-image-radio-button", "_SL110_", !1, r.smallImageLink);
                break;
            case "amzn-ss-get-medium-image":
                B("amzn-ss-medium-image-radio-button", "_SL160_", !1, r.mediumImageLink);
                break;
            case "amzn-ss-get-large-image":
                B("amzn-ss-large-image-radio-button", "_SL250_", !1, r.largeImageLink)
            }
        }
        ;
        d.declarative("amzn-ss-get-small-image", "click", a);
        d.declarative("amzn-ss-get-medium-image", "click", a);
        d.declarative("amzn-ss-get-large-image", "click", a);
        d.declarative("amzn-ss-show-image-popover", "click", function(a) {
            if (!u) {
                a = g.getAsin();
                var b = t.create(v, G);
                D();
                y.show();
                b.show();
                k.isThirdPartyExcludedAsin({
                    asin: a,
                    $popoverTrigger: v
                })
            }
        });
        d.on("a:popover:beforeShow:amzn-ss-popover-image-preload-content", function(a) {
            g.populateStoreTagDropdown("image")
        });
        d.on("a:popover:show:amzn-ss-popover-image-preload-content", function(a) {
            u = !0;
            b.addActiveToPopoverContainer(a.popover)
        });
        d.on("a:popover:afterHide:amzn-ss-popover-image-preload-content", function(a) {
            u = !1;
            b.removeActiveFromPopoverContainer(a.popover);
            g.updateDefaultStoreTagAtServer()
        });
        d.on("a:dropdown:amzn-ss-store-id-dropdown-image:select", function() {
            g.handleStoreDropdownChange("image")
        });
        d.on("a:dropdown:amzn-ss-tracking-id-dropdown-image:select", function() {
            g.handleTagDropdownChange("image")
        });
        d.on("amzn-ss-image-popover-get-link", E);
        d.on("amzn-ss-third-party-excluded-asin-callback", function(a) {
            if (v === a.$popoverTrigger)
                switch (D(),
                a.status) {
                case 1:
                    E(g.getGlobalStoreTag());
                    z.show();
                    setTimeout(function() {
                        A.select()
                    }, 10);
                    break;
                case 2:
                    w.show();
                    break;
                default:
                    P.show()
                }
        })
    });
    "use strict";
    v.when("A", "a-popover", "a-checkbox", "amzn-ss-link-id", "amzn-ss-app-config", "amzn-ss-store-tag", "amzn-ss-sitestripe", "amzn-ss-third-party-module").register("amzn-ss-text-image-popover", function(d, t, q, h, g, p, b, k) {
        var e = d.$, c, n = !1, r = g.getStringMap(), a = e("#amzn-ss-text-image-link"), u = e(".amzn-ss-popover-spinner"), v = e(".amzn-ss-popover-third-party-message"), y = e(".amzn-ss-popover-link-failure-message"), w = e("#amzn-ss-popover-text-image-preload-content-container"), x = e("#amzn-ss-preview-text-image-link"), z = e("#amzn-ss-text-image-textarea"), A = q("#amzn-ss-text-image-open-link-checkbox"), D = q("#amzn-ss-text-image-show-border-checkbox"), G = function() {
            u.hide();
            v.hide();
            y.hide();
            w.hide()
        }, C = {
            name: "amzn-ss-popover-text-image-preload-content",
            popoverLabel: r.amzn_ss_popover_title_txt_img,
            header: r.amzn_ss_popover_title_txt_img,
            activate: "onclick",
            width: 530
        }, B = {
            toolCreation: "SS",
            adUnitType: "Text and Image",
            adUnitSubType: "Product link widget showing text and image",
            destinationType: "ASIN",
            adUnitDescription: "Product link text and image",
            adUnitScriptType: "Iframe",
            pageType: "ProductLinks",
            servedInd: "Y",
            subPageType: "Individual",
            linkCode: g.getLinkCode().textImageLink,
            marketplaceId: g.getMarketplaceId()
        }, E = function(a) {
            a = D.isChecked() ? a.replace("__SHOWBORDER__", "true") : a.replace("__SHOWBORDER__", "false");
            a = A.isChecked() ? a.replace("__OPENINNEWWINDOW__", "true") : a.replace("__OPENINNEWWINDOW__", "false");
            a = D.isChecked() ? a.replace("__TEMPSHOWBORDER__", "bc1\x3d000000") : a.replace("__TEMPSHOWBORDER__", "bc1\x3dFFFFFF");
            return a = A.isChecked() ? a.replace("__TEMPOPENINNEWWINDOW__", "_blank") : a.replace("__TEMPOPENINNEWWINDOW__", "_top")
        }, F = function() {
            var a = c
              , a = E(a)
              , b = g.getVendingHtml().textImageLink
              , b = b.replace("__TEXTIMAGESRC__", a);
            x.empty();
            x.append(b);
            z.text(b);
            setTimeout(function() {
                z.select()
            }, 10)
        }, I = function(a) {
            p.getLongUrlTemplate();
            B.store = a.storeId;
            B.tag = a.trackingId;
            B.asin = p.getAsin();
            a = h.get(B);
            var d = B.asin
              , e = B.tag;
            c = g.getVendingHtml().textImageSrc;
            b.getLanguagePreferance() && (c = g.getVendingHtmlWithLanguagePreferance().textImageSrc);
            c = c.replace(/__ASIN__/g, d);
            c = c.replace("__WIDGETSERVERHOST__", g.getWidgetServerHost());
            c = c.replace("__OLDWIDGETSERVERHOST__", g.getOldWidgetServerHost());
            c = c.replace("__LINKID__", a);
            c = c.replace("__REFTAG__", g.getRefTag().textImageLink);
            c = c.replace(/__TRACKINGID__/g, e);
            c = c.replace(/__LANGUAGE__/g, b.getLanguagePreferance());
            c = c.replace(/__LOCALE__/g, g.getLocale());
            c = c.replace("__ASSOCPROGRAMID__", g.getAssocProgramId());
            F()
        };
        z.bind("click", function() {
            e(this).select()
        });
        d.declarative("amzn-ss-show-text-image-popover", "click", function(b) {
            if (!n) {
                b = p.getAsin();
                var c = t.create(a, C);
                G();
                u.show();
                c.show();
                k.isThirdPartyExcludedAsin({
                    asin: b,
                    $popoverTrigger: a
                })
            }
        });
        d.declarative("amzn-ss-text-image-checkbox-updated", "change", F);
        d.on("a:popover:beforeShow:amzn-ss-popover-text-image-preload-content", function(a) {
            p.populateStoreTagDropdown("text-image")
        });
        d.on("a:popover:show:amzn-ss-popover-text-image-preload-content", function(a) {
            n = !0;
            b.addActiveToPopoverContainer(a.popover)
        });
        d.on("a:popover:afterHide:amzn-ss-popover-text-image-preload-content", function(a) {
            n = !1;
            b.removeActiveFromPopoverContainer(a.popover);
            p.updateDefaultStoreTagAtServer()
        });
        d.on("amzn-ss-text-image-popover-get-link", I);
        d.on("a:dropdown:amzn-ss-store-id-dropdown-text-image:select", function() {
            p.handleStoreDropdownChange("text-image")
        });
        d.on("a:dropdown:amzn-ss-tracking-id-dropdown-text-image:select", function() {
            p.handleTagDropdownChange("text-image")
        });
        d.on("amzn-ss-third-party-excluded-asin-callback", function(b) {
            if (a === b.$popoverTrigger)
                switch (G(),
                b.status) {
                case 1:
                    I(p.getGlobalStoreTag());
                    w.show();
                    setTimeout(function() {
                        z.select()
                    }, 10);
                    break;
                case 2:
                    v.show();
                    break;
                default:
                    y.show()
                }
        })
    });
    "use strict";
    v.when("A", "a-popover", "amzn-ss-link-id", "amzn-ss-app-config", "amzn-ss-store-tag", "amzn-ss-sitestripe", "amzn-ss-make-xhr", "amzn-ss-third-party-module", "ready").register("amzn-ss-social-share-handler", function(d, t, q, h, g, p, b, k) {
        var e = d.$
          , c = h.isDetailPage()
          , n = !1
          , r = h.getStringMap()
          , a = e(".amzn-ss-popover-spinner")
          , v = e(".amzn-ss-popover-third-party-message")
          , N = e(".amzn-ss-popover-link-failure-message")
          , y = null
          , w = {
            toolCreation: "SS",
            ad_unit_type: "Text",
            ad_unit_description: "SiteStripe Share on Media",
            destination_type: "1" === c ? "ASIN" : "Multiple",
            page_type: "1" === c ? "Detail" : "Gateway",
            served_ind: "N"
        }
          , J = {
            popoverLabel: r.social_share_header_link,
            header: r.social_share_header_link,
            activate: "onclick",
            width: 530
        }
          , z = function() {
            a.hide();
            v.hide();
            N.hide()
        }
          , A = {
            facebook: {
                server: "//www.facebook.com",
                template: "/share.php?u\x3d__FULLURL__"
            },
            twitter: {
                server: "https://twitter.com",
                template: "/intent/tweet?original_referer\x3d__FULLURL__\x26text\x3d__DESCRIPTION__\x26related\x3d__RELATEDACCOUNTS__\x26url\x3d__SHORTURL__\x26via\x3d__VIA__",
                relatedAccounts: "amazondeals,amazonmp3"
            },
            ameba: {
                server: "https://blog.ameba.jp",
                template: "/ucs/entry/srventryinsertinput.do?entry_text\x3d__HTMLTAG__"
            },
            goo: {
                server: "https://blog.goo.ne.jp",
                template: "/admin/newentry/?fid\x3dbookmarklet\x26title\x3d__TITLE__\x26burl\x3d__FULLURL__"
            },
            livedoor: {
                server: "https://livedoor.blogcms.jp",
                template: "//select/article/edit?_body\x3d__HTMLTAG__"
            },
            hatena: {
                server: "https://blog.hatena.ne.jp",
                template: "/my/edit?body\x3d[asin:__ASIN__:detail]"
            }
        }
          , D = function() {
            var a = "";
            if ("1" !== h.isDetailPage()) {
                var b = e("meta[name\x3ddescription]");
                b && b.attr("content") ? a = b.attr("content") : e("title") && e("title")[0] && (a = e("title")[0].text)
            } else
                document.getElementById("productTitle") && (a = document.getElementById("productTitle").innerText);
            a && (a = a.replace(/\r?\n|\r/g, ""),
            a = a.trim());
            return a
        }
          , G = function(a, b, c, d) {
            d = d.replace("\x26linkId\x3d__LINKID__", "");
            var e = g.getGlobalStoreTag()
              , k = h.getLinkCode().shareLongLink
              , f = h.getCampaign();
            creative = r["shareOnCcmid_" + b + "_" + c];
            creative === x && (creative = r["shareOnCcmid_" + c]);
            c = creative;
            d = d.replace("__LINKCODE__", k);
            d = d.replace("__REFTAG__", "as_li_ss_shr");
            d = d.replace("__LANGUAGE__", p.getLanguagePreferance());
            d = d.replace("__TRACKINGID__", e.trackingId);
            d = d.replace("__ASIN__", a);
            d = d.replace("__CAMP__", f);
            d = d.replace("__CCMID__", c);
            w.store_id = e.storeId;
            w.tag = e.trackingId;
            w.asin = a;
            w.linkCode = k;
            w.destination_url = d;
            "twitter" === b ? w.ad_unit_description = "SiteStripe Share on Twitter" : "facebook" === b && (w.ad_unit_description = "SiteStripe Share on Facebook");
            a = q.get(w);
            return d = (d + "\x26linkId\x3d__LINKID__").replace("__LINKID__", a)
        }
          , C = function(a, b) {
            b && b.isOk && a(b.shortUrl)
        }
          , B = function(a, b, c, d) {
            a(d)
        }
          , E = function(a, b) {
            a(b)
        }
          , F = function(a, b, c, d) {
            a(d)
        }
          , I = function(a) {
            return new Promise(function(c, d) {
                b.makeXHR({
                    url: "/assoc/sitestripe/get_product_info?skip_sentry\x3dtrue",
                    methodType: "GET",
                    data: {
                        ASIN: a,
                        MARKETPLACEID: Associates.marketplaceId
                    },
                    dataType: "json",
                    successCB: E,
                    failureCB: F,
                    successCBArgs: [c],
                    failureCBArgs: [d]
                })
            }
            )
        }
          , L = function(a) {
            return new Promise(function(c, d) {
                b.makeXHR({
                    url: "/associates/sitestripe/getShortUrl",
                    methodType: "GET",
                    data: {
                        longUrl: a,
                        marketplaceId: h.getMarketplaceId()
                    },
                    dataType: "json",
                    successCB: C,
                    failureCB: B,
                    successCBArgs: [c],
                    failureCBArgs: [d]
                })
            }
            )
        }
          , M = function(a, b) {
            var d = D()
              , e = "";
            if ("1" == c) {
                var k = h.getImageLinkTemplate()
                  , f = k.imageLinkTemplate;
                p.getLanguagePreferance() && (f = k.imageLinkLangPrefTemplate);
                f = f.replace("__WIDGETSERVERHOST__", h.getWidgetServerHost());
                f = f.replace("__ASIN__", b);
                f = f.replace("__TRACKINGID__", g.getGlobalStoreTag().trackingId);
                f = f.replace("__LANGUAGE__", p.getLanguagePreferance());
                f = f.replace("__LOCALE__", h.getLocale());
                (b = f = f.replace("__IMAGEFORMAT__", "_SL160_")) && (e = '\x3cimg src\x3d"' + b + '"\x3e')
            }
            return encodeURIComponent('\x3ca  href\x3d"' + a + '"\x3e' + e + d + "\x3c/a\x3e")
        }
          , f = function(a) {
            var b, d, e, k = g.getAsin(), f = a.sharePlatform;
            I(k).then(function(a) {
                var f = ""
                  , r = 0
                  , l = ""
                  , n = ""
                  , p = ""
                  , q = "";
                a && a[k] && (productData = a[k],
                f = productData.contributor_name,
                r = productData.price,
                l = productData.currency,
                n = productData.currency_icon,
                p = productData.savings_percentage,
                q = productData.title);
                r && (r = r.toFixed(2));
                d = {
                    asin: k,
                    brand: f,
                    price: r,
                    currency: l,
                    currency_icon: n,
                    savings: p,
                    title: q
                };
                a = d;
                a.asin === x || "NA" === a.asin ? e = h.getGenericMessageId() : (f = h.getBaseMessageId(),
                h.getShareOnHasDeals() ? 10 < a.savings ? f += "4" : (f += "2",
                a.price && 0 !== a.price || (f += h.getNoPricePrefix())) : f += "1",
                a.brand || (f += h.getNoBylinePrefix()),
                e = f);
                a = g.getLongUrlTemplate();
                "1" === c && (a += "\x26creativeASIN\x3d__ASIN__");
                b = a + "\x26camp\x3d__CAMP__\x26creative\x3d__CCMID__"
            }).catch(function(a) {
                b = g.getLongUrlTemplate()
            }).finally(function() {
                var a = G(k, f, e, b)
                  , c = A[f].server + A[f].template;
                switch (f) {
                case "facebook":
                    c = c.replace("__FULLURL__", encodeURIComponent(a));
                    break;
                case "twitter":
                    var g, l;
                    L(a).then(function(a) {
                        l = a
                    }).catch(function(a) {
                        l = ""
                    }).finally(function() {
                        var b = g = d === x ? {
                            shortUrl: l,
                            fullurl: a
                        } : {
                            shortUrl: l,
                            title: d.title,
                            brand: d.brand,
                            price: d.price,
                            currency: d.currency,
                            currency_icon: d.currency_icon,
                            fullurl: a
                        }, k = c, f, n, m;
                        (n = r[e]) && 0 !== n.length || (n = "__TITLE__");
                        m = 268;
                        "string" == typeof b.shortUrl && (m -= b.shortUrl.length + 1);
                        h.getShareOnHasDeals() && b.price && (b.currency || b.currency_icon) && (f = b.currency_icon ? b.currency_icon + b.price : b.price + b.currency,
                        n = n.replace("__PRICE__", f));
                        b.brand && (n = n.replace("__BRAND__", b.brand));
                        f = b.title ? b.title : D();
                        m -= n.length - 9;
                        "string" == typeof f && f.length > m && (f = f.substring(0, m - 3),
                        f += "...");
                        n = n.replace("__TITLE__", f);
                        k = k.replace("__SHORTURL__", encodeURIComponent(b.shortUrl || ""));
                        b = k.replace("__FULLURL__", encodeURIComponent(b.fullurl));
                        b = b.replace("__DESCRIPTION__", encodeURIComponent(n));
                        b = b.replace("__VIA__", "amazon");
                        k = b = b.replace("__RELATEDACCOUNTS__", A.twitter.relatedAccounts);
                        y && y.hide();
                        u.open(k, "_blank", "toolbar \x3d no, location \x3d yes, status \x3d no, menubar \x3d no, scrollbars \x3d yes, resizable \x3d yes, width \x3d 700, height \x3d 400")
                    });
                    break;
                case "ameba":
                    var n = M(a, k)
                      , c = c.replace("__HTMLTAG__", n);
                    break;
                case "goo":
                    n = D();
                    c = c.replace("__TITLE__", n);
                    c = c.replace("__FULLURL__", encodeURIComponent(a));
                    break;
                case "livedoor":
                    n = M(a, k);
                    c = c.replace("__HTMLTAG__", n);
                    break;
                case "hatena":
                    c = c.replace("__ASIN__", k)
                }
                "twitter" != f && (y && y.hide(),
                u.open(c, "_blank", "toolbar \x3d no, location \x3d yes, status \x3d no, menubar \x3d no, scrollbars \x3d yes, resizable \x3d yes, width \x3d 700, height \x3d 400"))
            })
        };
        d.on("a:popover:show:amzn-ss-popover-social-share-preload-content", function(a) {
            n = !0
        });
        d.on("a:popover:afterHide:amzn-ss-popover-social-share-preload-content", function(a) {
            n = !1
        });
        d.declarative("amzn-ss-share-on-platform", "click", function(b) {
            if (!n) {
                var d = e("#amzn-ss-social-share-" + b.data.sharePlatform);
                J.name = "amzn-ss-popover-social-share-preload-content-" + b.data.sharePlatform;
                y = t.create(d, J);
                z();
                y.show();
                a.show();
                c ? k.isThirdPartyExcludedAsin({
                    asin: g.getAsin(),
                    sharePlatform: b.data.sharePlatform,
                    isSocialShare: !0
                }) : f({
                    sharePlatform: b.data.sharePlatform
                })
            }
        });
        d.on("amzn-ss-third-party-excluded-asin-callback", function(a) {
            if (a.isSocialShare)
                switch (a.status) {
                case 1:
                    f(a);
                    break;
                case 2:
                    z();
                    v.show();
                    break;
                default:
                    z(),
                    N.show()
                }
        })
    });
    "use strict";
    v.when("A", "a-popover", "a-switch", "amzn-ss-sitestripe", "amzn-ss-make-xhr", "amzn-ss-app-config").register("amzn-ss-sitestripe-settings", function(d, t, q, h, g, p) {
        var b = d.$;
        g = b("#amzn-ss-settings-toggle-switch");
        var k = b("#amzn-ss-settings-popover-container")
          , e = q.getSwitch(g)
          , c = b("#amzn-ss-settings-popover-link")
          , n = {
            name: "amzn-ss-settings-popover-preload-content",
            popoverLabel: p.getStringMap().amzn_ss_popover_title_settings,
            header: p.getStringMap().amzn_ss_popover_title_settings,
            activate: "onclick",
            width: 300
        };
        d.declarative("amzn-ss-turnoff-message-got-it", "click", function(b) {
            e.isOn() || d.trigger("amzn-ss-action-disable-ss")
        });
        d.declarative("amzn-ss-settings-popover", "click", function(b) {
            b = t.create(c, n);
            k.show();
            b.show()
        });
        d.on("a:popover:show:amzn-ss-settings-popover-preload-content", function(b) {
            h.addActiveToPopoverContainer(b.popover)
        });
        d.on("a:popover:afterHide:amzn-ss-settings-popover-preload-content", function(b) {
            b = b.popover;
            e.isOn(!0);
            h.removeActiveFromPopoverContainer(b)
        });
        d.on("a:switch:amzn-ss-settings-toggle-switch:flip", function(c) {
            e.isOn() ? (e.label(p.getStringMap().amzn_ss_popover_content_sett_turnoff_ss),
            b("#amzn-ss-turnoff-message").fadeOut()) : (e.label(p.getStringMap().amzn_ss_popover_content_sett_turnedoff),
            b("#amzn-ss-turnoff-message").fadeIn())
        })
    });
    u.Associates || (u.Associates = {});
    Associates.siteStripeInitLibrary = function(d) {
        function t(b, d) {
            if (b === d)
                return !0;
            for (; d && d !== b; )
                d = d.parentNode;
            return d === b
        }
        function q(b) {
            return b = b.replace(/(assoc_ss_ref=)[^\&]+/, "$1" + encodeURIComponent(Associates.RetailWebsiteUrl + u.location.pathname + p()))
        }
        Associates.AttachEventListener = function(b, d, e) {
            b.addEventListener ? b.addEventListener(d, e, !1) : b.attachEvent("on" + d, e)
        }
        ;
        Associates.absPos = function(b) {
            if (b.offsetParent) {
                for (var d = 0, e = 0; b; )
                    e += b.offsetTop,
                    d += b.offsetLeft,
                    b = b.offsetParent;
                return {
                    x: d,
                    y: e
                }
            }
        }
        ;
        String.prototype.Associates_containsToken = function(b) {
            return (new RegExp("(?:^| )" + b + "(?: |$)")).test(this)
        }
        ;
        String.prototype.Associates_replaceToken = function(b, d) {
            return this.replace(new RegExp("(?:^| )" + b + "(?: |$)"), "")
        }
        ;
        Associates.ButtonStateMachine = function(b) {
            this.item = b;
            this.setDOMHandlers();
            for (b = b.firstChild; b && (!b.className || !b.className.Associates_containsToken("button_left_cap")); )
                b = b.nextSibling;
            this.end_cap = b
        }
        ;
        Associates.ButtonStateMachine.prototype.setDOMHandlers = function() {
            var b = this;
            Associates.AttachEventListener(this.item, "mouseover", function(d) {
                b.setHovered(!0)
            });
            Associates.AttachEventListener(this.item, "mouseout", function(d) {
                b.setHovered(!1)
            });
            Associates.AttachEventListener(this.item, "mousedown", function(d) {
                b.setPressed(!0)
            });
            Associates.AttachEventListener(this.item, "mouseup", function(d) {
                b.setPressed(!1)
            });
            Associates.AttachEventListener(this.item, "click", function(d) {
                b.click(d)
            })
        }
        ;
        Associates.ButtonStateMachine.prototype.click = function(b) {
            var d = this.item.getElementsByTagName("A")[0];
            b = b.target ? b.target : b.srcElement;
            if (d && d != b)
                if (this.item.className.Associates_containsToken("menu_button"))
                    if (d.click)
                        d.click();
                    else {
                        if (d.onclick)
                            d.onclick()
                    }
                else
                    this.setHovered(!1),
                    "_blank" == d.target ? u.open(d.href, d.target) : document.location = d.href
        }
        ;
        Associates.ButtonStateMachine.prototype._setButtonState = function(b) {
            b.match(/^(hover|down|normal)$/) && ("normal" == b && (b = ""),
            this.item.className = this.item.className.Associates_replaceToken("(?:hover_button|down_button)", ""),
            this.end_cap.className = this.end_cap.className.Associates_replaceToken("(?:hover_left_cap|down_left_cap)", ""),
            "" != b && (this.item.className = this.item.className + " " + b + "_button",
            this.end_cap.className = this.end_cap.className + " " + b + "_left_cap"))
        }
        ;
        Associates.ButtonStateMachine.prototype.setHovered = function(b) {
            this.hovered = b;
            this.lock_pressed || this._setButtonState(b ? "hover" : "normal")
        }
        ;
        Associates.ButtonStateMachine.prototype.setPressed = function(b) {
            b ? this._setButtonState("down") : this._setButtonState(this.hovered ? "hover" : "normal")
        }
        ;
        Associates.ButtonStateMachine.prototype.lockPressed = function(b) {
            this.lock_pressed = b;
            this.setPressed(b)
        }
        ;
        Associates.ButtonStateMachine.initButtonsFoundInElement = function(b) {
            b = b.getElementsByTagName("DIV");
            for (var d = 0; d < b.length; d++)
                b[d].className.Associates_containsToken("button") && !b[d].className.Associates_containsToken("disabled_button") && (b[d].Associates_button_state_machine && b[d].Associates_button_state_machine.setDOMHandlers ? b[d].Associates_button_state_machine.setDOMHandlers() : b[d].Associates_button_state_machine = new Associates.ButtonStateMachine(b[d]))
        }
        ;
        Associates.ButtonStateMachine.init = function() {
            try {
                document.execCommand("BackgroundImageCache", !1, !0)
            } catch (d) {}
            var b = document.getElementById(Associates.siteStripePrefix + "wrap");
            Associates.ButtonStateMachine.initButtonsFoundInElement(b)
        }
        ;
        Associates.SiteStripeSettingsAndSofty = {};
        Associates.SiteStripeSettingsAndSofty.init = function(b) {
            var d = b("#" + Associates.siteStripePrefix + "_share_on_softy_arrow")
              , e = b("#" + Associates.siteStripePrefix + "softy_wrap")
              , c = b("#" + Associates.siteStripePrefix + "_share_page_trigger")
              , g = b("#" + Associates.siteStripePrefix + "_settings_button")
              , h = b("#" + Associates.siteStripePrefix + "settings_wrap")
              , a = b("#" + Associates.siteStripePrefix + "_short_link_trigger")
              , p = b("#" + Associates.siteStripePrefix + "_assoc_wrap")
              , u = b("." + Associates.siteStripePrefix + "_assoc_x_button")
              , v = b("#" + Associates.siteStripePrefix + "_assoc_shortlink_loader")
              , w = b("#" + Associates.siteStripePrefix + "_assoc_shortlink_iframe");
            if (Associates.isAui)
                d.click(function(a) {
                    e.show();
                    a.preventDefault();
                    a.stopPropagation();
                    c[0].Associates_button_state_machine.lockPressed(!0)
                }),
                e.mouseleave(function() {
                    e.hide();
                    c[0].Associates_button_state_machine.lockPressed(!1)
                }),
                g.click(function(a) {
                    h.show();
                    a.preventDefault();
                    a.stopPropagation();
                    g[0].Associates_button_state_machine.lockPressed(!0)
                }),
                h.mouseleave(function() {
                    h.hide();
                    g[0].Associates_button_state_machine.lockPressed(!1)
                }),
                a.click(function(b) {
                    var c = q(w.data("src"));
                    w.prop("src", c);
                    w[0].contentWindow.focus();
                    v.show();
                    p.show();
                    b.preventDefault();
                    b.stopPropagation();
                    a[0].Associates_button_state_machine.lockPressed(!0)
                }),
                u.click(function(b) {
                    p.hide();
                    w.prop("src", "about:blank");
                    w[0].contentWindow.blur();
                    a[0].Associates_button_state_machine.lockPressed(!1);
                    b.preventDefault();
                    b.stopPropagation()
                }),
                b(document).mousedown(function(b) {
                    "undefined" === typeof g[0] || t(h[0], b.target) || (h.hide(),
                    g[0].Associates_button_state_machine.lockPressed(!1));
                    "undefined" === typeof c[0] || t(e[0], b.target) || (e.hide(),
                    c[0].Associates_button_state_machine.lockPressed(!1));
                    "undefined" === typeof a[0] || t(p[0], b.target) || (p.hide(),
                    w.prop("src", "about:blank"),
                    w[0].contentWindow.blur(),
                    a[0].Associates_button_state_machine.lockPressed(!1))
                }),
                h.click(function(a) {
                    a.stopPropagation();
                    return !0
                }),
                e.click(function(a) {
                    a.stopPropagation();
                    return !0
                }),
                p.click(function(a) {
                    a.stopPropagation();
                    return !0
                });
            else {
                a.unbind().click(function() {
                    var a = q(w.attr("data-src"));
                    w.attr("src", a);
                    v.show()
                });
                d.amazonPopoverTrigger({
                    localContent: "#" + Associates.siteStripePrefix + "softy_wrap",
                    width: null,
                    skin: null,
                    locationOffset: [-70, -12],
                    closeEventInclude: ["MOUSE_LEAVE"],
                    onShow: function() {
                        c[0].Associates_button_state_machine.lockPressed(!0)
                    },
                    onHide: function() {
                        c[0].Associates_button_state_machine.lockPressed(!1)
                    }
                });
                g.amazonPopoverTrigger({
                    localContent: "#" + Associates.siteStripePrefix + "settings_wrap",
                    width: null,
                    skin: null,
                    locationOffset: [0, -16],
                    closeEventInclude: ["MOUSE_LEAVE"],
                    onShow: function() {
                        g[0].Associates_button_state_machine.lockPressed(!0)
                    },
                    onHide: function() {
                        g[0].Associates_button_state_machine.lockPressed(!1)
                    }
                });
                var x = a.amazonPopoverTrigger({
                    localContent: "#" + Associates.siteStripePrefix + "_assoc_wrap",
                    width: null,
                    skin: null,
                    locationOffset: [0, -10],
                    closeEventInclude: ["CLICK_OUTSIDE"],
                    onShow: function() {
                        a[0].Associates_button_state_machine.lockPressed(!0);
                        w[0].contentWindow.focus()
                    },
                    onHide: function() {
                        a[0].Associates_button_state_machine.lockPressed(!1);
                        w.attr("src", "about:blank");
                        w[0].contentWindow.blur()
                    }
                });
                u.click(function() {
                    x.amznPopoverHide()
                })
            }
            Associates.ButtonStateMachine.init()
        }
        ;
        Associates.SiteStripeLightbox = {};
        Associates.SiteStripeLightbox.init = function(b) {
            var k = b("#" + Associates.siteStripePrefix + "_page_trigger")
              , e = b("#" + Associates.siteStripePrefix + "_product_trigger")
              , c = b("#" + Associates.siteStripePrefix + "_widget_trigger");
            if (Associates.isAui)
                k.click(function(b) {
                    b.stopPropagation();
                    b.preventDefault();
                    v.when("A", "a-modal").execute(function(a, b) {
                        var c = b.create(k, {
                            url: q(Associates.lightboxURL),
                            width: 685,
                            cache: 0,
                            name: "assoc_modal"
                        });
                        a.on("a:popover:afterHide:assoc_modal", function(a) {
                            b.remove(a.popover)
                        });
                        c.show()
                    })
                }),
                e.click(function(b) {
                    b.stopPropagation();
                    b.preventDefault();
                    v.when("A", "a-modal").execute(function(a, b) {
                        var c = b.create(e, {
                            url: q(Associates.lightboxURL),
                            width: 685,
                            cache: 0,
                            name: "assoc_modal"
                        });
                        a.on("a:popover:afterHide:assoc_modal", function(a) {
                            b.remove(a.popover)
                        });
                        c.show()
                    })
                }),
                c.click(function(b) {
                    b.stopPropagation();
                    b.preventDefault();
                    v.when("A", "a-modal").execute(function(a, b) {
                        var d = b.create(c, {
                            url: Associates.widgetLightboxURL,
                            width: 1038,
                            cache: 0,
                            name: "assoc_modal"
                        });
                        a.on("a:popover:afterHide:assoc_modal", function(a) {
                            b.remove(a.popover)
                        });
                        d.show()
                    })
                });
            else {
                var n = {
                    width: 685,
                    destination: function() {
                        return q(Associates.lightboxURL)
                    },
                    closeEventExclude: ["CLICK_OUTSIDE"],
                    locationOffset: [0, -50],
                    modal: !0
                };
                k.amazonPopoverTrigger(n);
                e.amazonPopoverTrigger(n);
                c.amazonPopoverTrigger({
                    width: 1038,
                    destination: Associates.widgetLightboxURL,
                    closeEventExclude: ["CLICK_OUTSIDE"],
                    locationOffset: [0, -50],
                    modal: !0
                })
            }
            b("#" + Associates.siteStripePrefix + "_share_page_trigger").click(h);
            b("#" + Associates.siteStripePrefix + "softy_wrap #" + Associates.siteStripePrefix + "softy .button").click(function(c) {
                c.stopPropagation();
                c = b("span.button_content span", this).attr("name");
                var a = g(c);
                this.Associates_button_state_machine.setHovered(!1);
                b("#" + Associates.siteStripePrefix + "_share_on_softy_arrow").click();
                if (a) {
                    d("#" + Associates.siteStripePrefix + "_share_on_" + c);
                    var a = u.Associates.SocialShareAttributes[c].hoverText
                      , e = d("#" + Associates.siteStripePrefix + "_share_on_softy_text")
                      , k = u.Associates.SocialShareAttributes.shareDefault.platform
                      , h = d("#" + Associates.siteStripePrefix + "_share_on_softy");
                    h.removeClass(k);
                    h.addClass(c);
                    h.attr("title", a);
                    e.attr("title", a);
                    u.Associates.SocialShareAttributes.shareDefault.platform = c
                }
            });
            n = b("#" + Associates.siteStripePrefix + "_share_excluded_trigger");
            Associates.isAui ? n.click(function(b) {
                v.when("A", "a-modal").execute(function(a, b) {
                    var c = b.create(a.$("#" + Associates.siteStripePrefix + "_share_excluded_trigger"), {
                        content: "\x3cspan\x3e" + Associates.thirdPartyExcludedMessage + "\x3c/span\x3e",
                        width: 685,
                        name: "assoc_modal"
                    });
                    a.on("a:popover:afterHide:assoc_modal", function(a) {
                        b.remove(a.popover)
                    });
                    c.show()
                });
                b.stopPropagation();
                b.preventDefault()
            }) : n.amazonPopoverTrigger({
                width: 685,
                localContent: "\x3cspan\x3e" + Associates.thirdPartyExcludedMessage + "\x3c/span\x3e",
                closeEventExclude: ["CLICK_OUTSIDE"],
                locationOffset: [0, -50],
                modal: !0
            })
        }
        ;
        var h = function(b) {
            return d("#" + Associates.siteStripePrefix + "_share_on_softy_arrow").length && b.pageX >= d("#" + Associates.siteStripePrefix + "_share_on_softy_arrow").offset().left ? d("#" + Associates.siteStripePrefix + "_share_on_softy_arrow").click() : g(u.Associates.SocialShareAttributes.shareDefault.platform)
        }
          , g = function(b) {
            var g = ""
              , e = u.Associates.SocialShareAttributes.asin
              , c = u.Associates.SocialShareAttributes[b].blockNonDetail;
            if (u.Associates.SocialShareAttributes.thirdPartyExcludedAsin)
                return Associates.isAui ? v.when("A", "a-modal", "ready").execute(function(b, c) {
                    var a = c.create(b.$("div#assoc_logo"), {
                        content: "\x3cspan\x3e" + Associates.thirdPartyExcludedMessage + "\x3c/span\x3e",
                        width: 685,
                        name: "assoc_modal"
                    });
                    b.on("a:popover:afterHide:assoc_modal", function(a) {
                        c.remove(a.popover)
                    });
                    a.show()
                }) : d.AmazonPopover.displayPopover({
                    width: 685,
                    localContent: "\x3cspan\x3e" + Associates.thirdPartyExcludedMessage + "\x3c/span\x3e",
                    closeEventExclude: ["CLICK_OUTSIDE"],
                    locationOffset: [0, -50],
                    modal: !0
                }),
                !1;
            if (!e) {
                if (c)
                    return Associates.isAui ? v.when("A", "a-modal", "ready").execute(function(b, c) {
                        var a = c.create(b.$("div#assoc_logo"), {
                            content: "\x3cspan\x3e" + Associates.onlyDetailMessage + "\x3c/span\x3e",
                            width: 685,
                            name: "assoc_modal"
                        });
                        b.on("a:popover:afterHide:assoc_modal", function(a) {
                            c.remove(a.popover)
                        });
                        a.show()
                    }) : d.AmazonPopover.displayPopover({
                        width: 685,
                        localContent: "\x3cspan\x3e" + Associates.onlyDetailMessage + "\x3c/span\x3e",
                        closeEventExclude: ["CLICK_OUTSIDE"],
                        locationOffset: [0, -50],
                        modal: !0
                    }),
                    !1;
                g = null;
                null != d("meta[name\x3ddescription]") && (g = d("meta[name\x3ddescription]").attr("content"));
                null != g && 0 != g.length || null == d("title") || null == d("title")[0] || (g = d("title")[0].text);
                g = null != g ? g.substring(0, 140 < g.length ? 140 : g.length) : "";
                g = "\x26message\x3d" + encodeURIComponent(g)
            }
            e = u.Associates.SocialShareAttributes.shareDefault.platform == b ? "" : "true";
            Associates.shareSocialURL = q(Associates.shareSocialURL);
            u.open(Associates.shareSocialURL + g + "\x26socialPlatform\x3d" + b + "\x26reqEmb\x3d" + e, "_blank", "location\x3dyes,width\x3d700,height\x3d400");
            return !0
        }
          , p = function() {
            var b = decodeURIComponent(u.location.search)
              , d = [/(&?linkId=)[^&"]+/ig, /(&?tag=)[^&"]+/ig, /(&?creative=)[^&"]+/ig, /(&?camp=)[^&"]+/ig, /(&?creativeASIN=)[^&"]+/ig, /(&?linkCode=)[^&"]+/ig];
            if (b)
                for (var e = 0; e < d.length; e++)
                    b = b.replace(d[e], "");
            else
                b = "?ie\x3dUTF8";
            return encodeURI(b)
        };
        Associates.SiteStripeLightbox.showLightbox = function(b, d) {
            b("#" + Associates.siteStripePrefix + "_" + d + "_trigger").trigger("click")
        }
        ;
        Associates.isAui ? v.register("assoc_ss", function() {
            return {
                init: function(b) {
                    Associates.SiteStripeSettingsAndSofty.init(b)
                },
                initLightbox: function(b) {
                    Associates.SiteStripeLightbox.init(b)
                },
                showLightbox: function(b, d) {
                    Associates.SiteStripeLightbox.showLightbox(b, d)
                }
            }
        }) : amznJQ.declareAvailable("assoc_ss")
    }
    ;
    Associates !== x && Associates.isAui !== x && Associates.initModules === x && (Associates.initModules = !0,
    Associates.isAui ? v.when("A", "ready").execute(function(d) {
        Associates.siteStripeInitLibrary(d.$)
    }) : amznJQ.available("popover", function() {
        Associates.siteStripeInitLibrary(jQuery)
    }))
});
/* ******** */
(function(g) {
    var d = window.AmazonUIPageJS || window.P
      , l = d._namespace || d.attributeErrors
      , a = l ? l("GlowToasterAssets", "") : d;
    a.guardFatal ? a.guardFatal(g)(a, window) : a.execute(function() {
        g(a, window)
    })
}
)(function(g, d, l) {
    g.when("A", "a-alert", "glow-toaster-action-registry", "glow-toaster-overlay", "glow-toaster-strings").register("glow-toaster", function(a, f, k, b, e) {
        function m(c) {
            d.ue && "function" === typeof d.ue.count && d.ue.count(c, (d.ue.count(c) || 0) + 1)
        }
        function n() {
            return a.capabilities.mobile ? "MOBILE" : "DESKTOP"
        }
        var h = a.$;
        a.on("a:sheet:afterHide:wfm_mweb_qr_bottom_sheet", function() {
            g.register("QRClosed", function() {})
        });
        var p = function(c) {
            this.animationEnabled = !0;
            this.params = c || {};
            this.slot = "DEFAULT";
            this.csrfToken = "";
            this.type = l;
            this.blocking = !1;
            this.automaticAction = l;
            this.executeAction = {
                OPEN_GLOW: this.openGlowAutomaticAction
            };
            this.FETCH_TOASTER_SUCCESS_METRIC = "GLOW:fetch-toaster:" + n() + ":success";
            this.FETCH_TOASTER_FAILURE_METRIC = "GLOW:fetch-toaster:" + n() + ":failure";
            this.GLOW_TOASTER_SCOPE = "glow-toaster-api-timer-" + n();
            this.slots = {
                DEFAULT: a.capabilities.mobile ? "#nav-subnav-toaster" : "#nav-main .nav-left",
                SUBNAV: "#nav-subnav-toaster"
            };
            this.selectors = {
                navbar: "#navbar",
                subnav: "#nav-subnav",
                toaster: ".glow-toaster",
                actionButton: ".glow-toaster-button",
                actionError: ".glow-toaster-error"
            };
            this.endpoint = "/portal-migration/hz/glow/get-rendered-toaster";
            this.refreshXhr = l;
            this.initEvents()
        };
        h.extend(p.prototype, {
            initEvents: function() {
                a.on("packard:glow:destinationChangeAll", this.handleGlowAddressChange.bind(this));
                a.on("a:popover:beforeShow", this.handlePopoverBeforeShow.bind(this));
                a.on("a:popover:afterHide", this.handlePopoverAfterHide.bind(this));
                a.on("a:sheet:beforeShow", this.handleSheetBeforeShow.bind(this));
                a.on("a:sheet:afterHide", this.handleSheetAfterHide.bind(this));
                a.on.ready(this.handlePageReady.bind(this));
                h(d).bind("beforeunload", this.handleBeforeUnload.bind(this));
                h(d).bind("focusin", this.handleFocusIn.bind(this))
            },
            refresh: function() {
                this.ready && (this.hide(),
                this.abortRefresh(),
                "function" === typeof d.uet && d.uet("bb", this.GLOW_TOASTER_SCOPE, {
                    wb: 1
                }),
                this.refreshXhr = a.get(this.endpoint, {
                    params: this.params,
                    cache: !1,
                    success: function(c, a, e) {
                        m(this.FETCH_TOASTER_SUCCESS_METRIC);
                        "string" === typeof c && (this.update(c),
                        "function" === typeof d.uex && d.uex("ld", this.GLOW_TOASTER_SCOPE, {
                            wb: 1
                        }))
                    }
                    .bind(this),
                    error: function(c, a, e) {
                        m(this.FETCH_TOASTER_FAILURE_METRIC)
                    }
                    .bind(this)
                }))
            },
            remove: function() {
                this.getToasterElement().remove()
            },
            show: function() {
                !a.capabilities.mobile && "DEFAULT" == this.slot || !this.animationEnabled ? this.getToasterElement().show() : this.getToasterElement().slideDown();
                this.blocking && b.show();
                a.capabilities.isAmazonApp && a.capabilities.ios && d.scrollTo(0, -999)
            },
            hide: function() {
                !a.capabilities.mobile && "DEFAULT" == this.slot || !this.animationEnabled ? this.getToasterElement().hide() : this.getToasterElement().slideUp();
                this.blocking && b.hide()
            },
            isHidden: function() {
                return !this.getToasterElement().length || this.getToasterElement().is(":hidden")
            },
            isVisible: function() {
                return !this.isHidden()
            },
            showError: function(c) {
                this.setError(c);
                this.show()
            },
            showErrorID: function(c) {
                c = e.get(c);
                this.showError(c)
            },
            setError: function(c) {
                var a = this.getToasterElement().find(this.selectors.actionError)
                  , a = f(a);
                a.text(c || "");
                c ? a.show() : a.hide()
            },
            clearError: function() {
                this.setError("")
            },
            isActionFailureEmulated: function() {
                return /[?&]glowToasterActionEmulateFailure=1(&|$)/.test(location.href)
            },
            syncOverlay: function() {
                this.blocking ? b.show() : b.hide()
            },
            update: function(c) {
                c = c.trim();
                var a = !c.length;
                this.remove();
                a || (a = h(c).hide(),
                a.is(this.selectors.toaster) || (a = this.createFatalErrorToaster(c)),
                this.importProps(a),
                this.attachActions(a),
                this.syncOverlay(),
                this.getContainerElement().append(a),
                this.show())
            },
            createFatalErrorToaster: function(c) {
                var e = "glow-toaster glow-toaster-theme-alert glow-toaster-slot-default a-padding-medium"
                  , b = "";
                a.capabilities.isAmazonApp ? e += " glow-toaster-app" : a.capabilities.mobile || (e += " nav-coreFlyout nav-flyout",
                b = '\x3cdiv class\x3d"nav-arrow"\x3e\x3cdiv class\x3d"nav-arrow-inner"\x3e\x3c/div\x3e\x3c/div\x3e');
                c = h('\x3cdiv class\x3d"' + e + '" data-toaster-slot\x3d"DEFAULT"\x3e\x3cdiv class\x3d"glow-toaster-content"\x3e' + b + '\x3cdiv class\x3d"glow-toaster-body"\x3e' + c + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                c.hide();
                return c
            },
            getCurrentContainer: function() {
                return this.slots[this.slot]
            },
            getContainerElement: function() {
                var c = this.getCurrentContainer();
                return h(c)
            },
            getToasterElement: function() {
                var c = this.getCurrentContainer();
                return h(c + " " + this.selectors.toaster)
            },
            importProps: function(c) {
                c = c.data();
                c.toasterSlot && (this.slot = c.toasterSlot);
                this.type = c.toasterType || l;
                this.blocking = !!parseInt(c.toasterBlocking);
                this.automaticAction = c.toasterAutomaticAction || l;
                this.csrfToken = c.toasterCsrftoken || c.csrfToken || ""
            },
            attachActions: function(c) {
                c.bind("click touchstart", this.selectors.actionButton, this.handleActionButtonClick.bind(this));
                this.automaticAction && this.executeAction[this.automaticAction] && this.executeAction[this.automaticAction].call(this)
            },
            abortRefresh: function() {
                this.refreshXhr && (this.refreshXhr.abort(),
                this.refreshXhr = l)
            },
            handleActionButtonClick: function(c) {
                h(c.target).is("a") || (c.stopImmediatePropagation(),
                c.preventDefault());
                c = h(c.target).data();
                if (c.actionType) {
                    var a = k.getByActionType(c.actionType);
                    a && ("SET_POSTAL_CODE" === c.actionType && (c.actionParams.zipCode = h("input#glow-toaster-postal-code-input").val()),
                    a.handle(this, c.actionParams))
                }
            },
            handleGlowAddressChange: function() {
                this.refresh()
            },
            handlePopoverBeforeShow: function(a) {
                a = a && a.popover && a.popover.type;
                this.blocking && "modal" == a && this.isVisible() && b.hide()
            },
            handlePopoverAfterHide: function(a) {
                a = a && a.popover && a.popover.type;
                this.blocking && "modal" == a && this.isVisible() && b.show()
            },
            handleSheetBeforeShow: function() {
                this.blocking && this.isVisible() && b.hide()
            },
            handleSheetAfterHide: function() {
                this.blocking && this.isVisible() && b.show()
            },
            handleBeforeUnload: function() {
                this.abortRefresh()
            },
            handlePageReady: function() {
                this.ready = !0;
                this.refresh()
            },
            handleFocusIn: function(a) {
                if (this.blocking && b.isVisible()) {
                    var e = this.getToasterElement()
                      , f = h(this.selectors.subnav).has(a.target).length
                      , k = h(this.selectors.navbar).add(this.getContainerElement()).has(a.target).length;
                    a = this.getContainerElement().has(a.target).length;
                    if (f || !k && !a)
                        e.focus(),
                        b.sync()
                }
            },
            openGlowAutomaticAction: function() {
                var a = d.location.pathname.includes("storefront")
                  , e = this.openGlow.bind(this);
                a ? (g.when("A", "FMCShowQrCodeTrue", "QRClosed").execute(function() {
                    e()
                }),
                g.when("A", "FMCShowQrCodeFalse").execute(function() {
                    e()
                })) : this.openGlow()
            },
            openGlow: function() {
                var a = h("#nav-global-location-slot .a-declarative")
                  , e = h("#nav-global-location-slot.a-declarative");
                a && a.length ? a.click() : e && e.length && e.click()
            }
        });
        return p
    });
    "use strict";
    g.when("A").register("glow-toaster-string-container", function(a) {
        var f = a.$;
        a = function(a) {
            this.stringMap = a || {}
        }
        ;
        f.extend(a.prototype, {
            get: function(a) {
                return this.stringMap[a] !== l ? this.stringMap[a] : ""
            },
            load: function(a) {
                f.extend(this.stringMap, a)
            }
        });
        return a
    });
    "use strict";
    g.when("glow-toaster-string-container").register("glow-toaster-strings", function(a) {
        return new a({
            "glow-toaster-address-change-error": "An address change error has occurred. Please try again.",
            "glow-toaster-unknown-error": "An error has occurred. Please try again."
        })
    });
    "use strict";
    g.when("A", "glow-toaster").register("glow-toaster-manager", function(a, f) {
        var d = function() {};
        a.$.extend(d.prototype, {
            toasters: [],
            create: function(a) {
                a = new f(a);
                this.toasters.push(a);
                return a
            },
            getAll: function() {
                return this.toasters
            }
        });
        return new d
    });
    "use strict";
    g.when("A").register("glow-toaster-overlay", function(a) {
        var f = a.$
          , g = function() {
            this.overlayClass = "glow-toaster-overlay";
            this.overlayLockClass = "glow-toaster-overlay-lock";
            this.insertAfterSelector = "#nav-subnav-toaster";
            this.$overlay = l;
            this.$body = f(document.body);
            this.animationEnabled = !0
        };
        f.extend(g.prototype, {
            hide: function() {
                this.$overlay && (this.$body.removeClass(this.overlayLockClass),
                this.animationEnabled ? this.$overlay.fadeOut() : this.$overlay.hide())
            },
            show: function() {
                this.$overlay || (this.createOverlay(),
                this.initEvents());
                this.sync();
                this.$body.addClass(this.overlayLockClass);
                this.animationEnabled ? this.$overlay.fadeIn() : this.$overlay.show()
            },
            isVisible: function() {
                return !!(this.$overlay && this.$overlay.length && this.$overlay.is(":visible"))
            },
            isHidden: function() {
                return !this.isVisible()
            },
            sync: function() {
                this.scrollTop();
                this.syncSize()
            },
            scrollTop: function() {
                f(document).scrollTop(0)
            },
            createOverlay: function() {
                this.$overlay = f("\x3cdiv\x3e").addClass(this.overlayClass).height(0).insertAfter(this.insertAfterSelector);
                a.capabilities.touch && this.disableTouch()
            },
            disableTouch: function() {
                this.$overlay.bind("click touchstart", function(a) {
                    a.cancelable && a.preventDefault()
                })
            },
            initEvents: function() {
                f(d).bind("resize", this.syncSize.bind(this))
            },
            syncSize: function() {
                if (this.$overlay && this.$overlay.length) {
                    var a = this.getScreenHeight();
                    this.$overlay.height(a);
                    var e = this.getDocumentHeight();
                    e > a && this.$overlay.height(e)
                }
            },
            getScreenHeight: function() {
                return f(d).height()
            },
            getDocumentHeight: function() {
                return f(document).height()
            }
        });
        return new g
    });
    "use strict";
    g.when("A", "glow-toaster-set-address-action", "glow-toaster-select-location-action", "glow-toaster-dismiss-action", "glow-toaster-set-postalcode-action").register("glow-toaster-action-registry", function(a, f, d, b, e) {
        var m = function(a) {
            this.actions = a || [];
            this.hashActionsByType()
        };
        a.$.extend(m.prototype, {
            getByActionType: function(a) {
                return this.actionsByType[a]
            },
            getAll: function() {
                return this.actions
            },
            hashActionsByType: function() {
                this.actionsByType = a.reduce(this.actions, function(a, e) {
                    a[e.name] = e;
                    return a
                }, {})
            }
        });
        return new m([f, d, b, e])
    });
    g.when("A").register("glow-toaster-dismiss-toaster-constants", function(a) {
        return {
            ENDPOINT: "/portal-migration/hz/glow/dismiss-toaster",
            PARAMS_FORMAT: "json",
            CONTENT_TYPE: "application/json"
        }
    });
    g.when("A").register("glow-toaster-select-location-constants", function(a) {
        return {
            ALM_ADDRESS_INELIGIBLE: "ALM_ADDRESS_INELIGIBLE"
        }
    });
    g.when("A").register("glow-toaster-set-address-constants", function(a) {
        return {
            ENDPOINT: "/portal-migration/hz/glow/address-change?actionSource\x3dglow-toaster",
            PARAMS_FORMAT: "json",
            CONTENT_TYPE: "application/json"
        }
    });
    "use strict";
    g.when("A", "glow-toaster-dismiss-toaster-constants").register("glow-toaster-dismiss-action", function(a, f) {
        var d = a.$
          , b = function() {};
        d.extend(b.prototype, {
            name: "DISMISS",
            endpoint: f.ENDPOINT,
            errorStringID: "glow-toaster-unknown-error",
            paramsFormat: f.PARAMS_FORMAT,
            contentType: f.CONTENT_TYPE,
            handle: function(e, b) {
                e.hide();
                b.actionSource = "web-" + (a.capabilities.mobile ? "mobile" : "desktop");
                a.post(this.endpoint, {
                    params: b,
                    paramsFormat: this.paramsFormat,
                    headers: {
                        "anti-csrftoken-a2z": d(".glow-toaster").attr("data-toaster-csrfToken") || "",
                        "Content-Type": this.contentType
                    },
                    success: function(a, b, d) {
                        "object" !== typeof a || !a.success || e.isActionFailureEmulated() ? e.showErrorID(this.errorStringID) : e.refresh()
                    }
                    .bind(this),
                    error: function(a, b, d) {
                        e.showErrorID(this.errorStringID)
                    }
                    .bind(this)
                })
            }
        });
        return new b
    });
    "use strict";
    g.when("A", "glow-toaster-select-location-constants").register("glow-toaster-select-location-action", function(a, f) {
        var k = a.$
          , b = function() {};
        k.extend(b.prototype, {
            name: "SELECT_LOCATION",
            errorStringID: "glow-toaster-unknown-error",
            handle: function(a, b) {
                a.type !== f.ALM_ADDRESS_INELIGIBLE && a.hide();
                this.showAddressSelector(a, b)
            },
            showAddressSelector: function(e, b) {
                a.capabilities.isAmazonApp ? this.showAppAddressSelector(e, b) : this.showWebAddressSelector(e)
            },
            showAppAddressSelector: function(a, b) {
                this.csmLogCount(a);
                g.when("BottomSheetPlugin").execute(function(a) {
                    a.ShowBottomSheet({
                        useCase: "LocUX",
                        paramsInJson: b || {}
                    })
                })
            },
            showWebAddressSelector: function(a) {
                var b = k("#nav-global-location-slot .a-declarative")
                  , d = k("#nav-global-location-slot.a-declarative")
                  , f = a.isActionFailureEmulated();
                b.length && !f ? (b.click(),
                this.csmLogCount(a)) : d.length && !f ? (d.click(),
                this.csmLogCount(a)) : (a.showErrorID(this.errorStringID),
                this.csmLogCount(a, !0))
            },
            csmLogCount: function(a, b) {
                d.ue && d.ue.count && (a = "GlowToaster:" + (b ? "SelectLocationFailed" : "SelectLocation") + ":" + a.type + ":" + this.getDeviceType() + ":",
                d.ue.count(a, 1))
            },
            getDeviceType: function() {
                return a.capabilities.isAmazonApp ? "APP" : a.capabilities.tablet ? "TABLET" : a.capabilities.mobile ? "MOBILE" : "DESKTOP"
            }
        });
        return new b
    });
    "use strict";
    g.when("A", "glow-toaster-set-address-constants").register("glow-toaster-set-address-action", function(a, f) {
        var k = function() {};
        a.$.extend(k.prototype, {
            name: "SET_ADDRESS",
            endpoint: f.ENDPOINT,
            errorStringID: "glow-toaster-address-change-error",
            forceReload: !0,
            handle: function(b, e) {
                if (e && e.addressID) {
                    b.hide();
                    var g = "generic";
                    b.params && b.params.storeName && (g = b.params.storeName);
                    a.post(this.endpoint, {
                        headers: {
                            "anti-csrftoken-a2z": b && b.csrfToken ? b.csrfToken : ""
                        },
                        params: {
                            locationType: "ACCOUNT_ADDRESS",
                            addressId: e.addressID,
                            storeContext: g,
                            deviceType: "web",
                            pageType: d.ue_pty,
                            actionSource: "glow-toaster",
                            toasterType: b.type
                        },
                        paramsFormat: f.PARAMS_FORMAT,
                        contentType: f.CONTENT_TYPE,
                        success: function(a, e, d) {
                            "object" !== typeof a || !a.sembuUpdated || b.isActionFailureEmulated() ? b.showErrorID(this.errorStringID) : this.refreshGlowIngress()
                        }
                        .bind(this),
                        error: function(a, e, d) {
                            b.showErrorID(this.errorStringID)
                        }
                        .bind(this)
                    })
                }
            },
            refreshGlowIngress: function() {
                a.capabilities.isAmazonApp ? g.when("BottomSheetPlugin").execute(function(a) {
                    a.UpdateGlowIngress({});
                    this.onGlowIngressRefreshComplete()
                }
                .bind(this)) : (a.trigger("packard:glow:destinationChangeNav"),
                this.onGlowIngressRefreshComplete())
            },
            onGlowIngressRefreshComplete: function() {
                this.forceReload ? d.location.reload() : toaster.refresh()
            }
        });
        return new k
    });
    "use strict";
    g.when("A", "glow-toaster-set-address-constants").register("glow-toaster-set-postalcode-action", function(a, f) {
        var k = a.$
          , b = function() {};
        k.extend(b.prototype, {
            name: "SET_POSTAL_CODE",
            endpoint: f.ENDPOINT,
            forceReload: !0,
            handle: function(b, g) {
                g && null !== g.zipCode && g.zipCode !== l && a.post(this.endpoint, {
                    headers: {
                        "anti-csrftoken-a2z": b && b.csrfToken ? b.csrfToken : ""
                    },
                    params: {
                        locationType: "LOCATION_INPUT",
                        zipCode: this.preparePostalCodeForSubmit(g.zipCode),
                        deviceType: "web",
                        pageType: d.ue_pty,
                        actionSource: "glow-toaster",
                        toasterType: b.type
                    },
                    paramsFormat: f.PARAMS_FORMAT,
                    contentType: f.CONTENT_TYPE,
                    success: function(a, d, f) {
                        "object" !== typeof a || !a.sembuUpdated || b.isActionFailureEmulated() ? (b.showError(g.inputError),
                        k("input#glow-toaster-postal-code-input").addClass("a-form-error")) : this.refreshGlowIngress()
                    }
                    .bind(this),
                    error: function(a, d, f) {
                        b.showError(g.inputError)
                    }
                    .bind(this)
                })
            },
            refreshGlowIngress: function() {
                a.capabilities.isAmazonApp ? g.when("BottomSheetPlugin").execute(function(a) {
                    a.UpdateGlowIngress({});
                    this.onGlowIngressRefreshComplete()
                }
                .bind(this)) : (a.trigger("packard:glow:destinationChangeNav"),
                this.onGlowIngressRefreshComplete())
            },
            preparePostalCodeForSubmit: function(a) {
                return a.replace(/[^A-Za-z0-9- /]+/g, "")
            },
            onGlowIngressRefreshComplete: function() {
                this.forceReload ? d.location.reload() : toaster.refresh()
            }
        });
        return new b
    })
});
/* ******** */
(function(f) {
    var b = window.AmazonUIPageJS || window.P
      , g = b._namespace || b.attributeErrors
      , a = g ? g("AmazonBusinessRetailNavigationAssets", "") : b;
    a.guardFatal ? a.guardFatal(f)(a, window) : a.execute(function() {
        f(a, window)
    })
}
)(function(f, b, g) {
    (function(a) {
        a.when("$", "$F", "flyouts.create", "config", "flyouts.anchor", "data", "provider.dynamicMenu", "agent", "log").run("flyout.abAcquisition", function(a, c, k, d, e, b, f, g, l) {
            c = a("#nav-ab-acquisition");
            if (!c)
                return !1;
            var h = k({
                key: "abAcquisition",
                className: "nav-coreFlyout",
                link: c,
                cover: !0,
                clickThrough: !0,
                event: "abAcquisition",
                arrow: "top",
                animateDown: d.flyoutAnimation
            });
            c.click(function() {
                a(this).blur();
                h.show()
            });
            return h
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("$", "$F", "flyouts.create", "config").run("flyout.abActivation", function(a, c, b, d) {
            c = a("#nav-ab-activation");
            if (!c)
                return !1;
            var e = b({
                key: "abActivation",
                className: "nav-coreFlyout",
                link: c,
                cover: !0,
                clickThrough: !0,
                event: "abActivation",
                arrow: "top",
                animateDown: d.flyoutAnimation
            });
            c.click(function() {
                a(this).blur();
                e.show()
            });
            return e
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("$", "$F", "flyouts.create", "config").run("flyout.abAccountLink", function(a, c, b, d) {
            c = a("#nav-ab-account-link");
            if (!c)
                return !1;
            var e = b({
                key: "abAccountLink",
                className: "nav-coreFlyout",
                link: c,
                cover: !0,
                clickThrough: !0,
                event: "abAccountLink",
                arrow: "top",
                animateDown: d.flyoutAnimation
            });
            c.click(function() {
                a(this).blur();
                e.show()
            });
            return e
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("$", "flyouts.create", "config").run("flyout.abCatAcquisition", function(a, c, b) {
            var d = a("#nav-ab-cat-acquisition");
            if (!d)
                return !1;
            var e = c({
                key: "abCatAcquisition",
                link: d,
                cover: !0,
                clickThrough: !0,
                event: "abCatAcquisition",
                arrow: "top",
                animateDown: b.flyoutAnimation,
                className: "nav-coreFlyout"
            });
            d.click(function() {
                a(this).blur();
                e.show()
            });
            return e
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("$", "flyouts.create", "config").run("flyout.abCatActivation", function(a, c, b) {
            var d = a("#nav-ab-cat-activation");
            if (!d)
                return !1;
            var e = c({
                key: "abCatActivation",
                link: d,
                cover: !0,
                clickThrough: !0,
                event: "abCatActivation",
                arrow: "top",
                animateDown: b.flyoutAnimation,
                className: "nav-coreFlyout"
            });
            d.click(function() {
                a(this).blur();
                e.show()
            });
            return e
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("$", "flyouts.create", "config").run("flyout.abCatAccountLink", function(a, c, b) {
            var d = a("#nav-ab-cat-account-link");
            if (!d)
                return !1;
            var e = c({
                key: "abCatAccountLink",
                link: d,
                cover: !0,
                clickThrough: !0,
                event: "abCatAccountLink",
                arrow: "top",
                animateDown: b.flyoutAnimation,
                className: "nav-coreFlyout"
            });
            d.click(function() {
                a(this).blur();
                e.show()
            });
            return e
        })
    }
    )(b.$Nav)
});
/* ******** */
(function(k) {
    var b = window.AmazonUIPageJS || window.P
      , l = b._namespace || b.attributeErrors
      , e = l ? l("EverywhereCartIngressAssets", "") : b;
    e.guardFatal ? e.guardFatal(k)(e, window) : e.execute(function() {
        k(e, window)
    })
}
)(function(k, b, l) {
    (function(e) {
        e.when("$", "config").run("ewc.ajax", function(v, a) {
            if (a.ewc && !a.ewc.debugInlineJS) {
                if (!a.ewc.EarlyLoadEWCContentTreatment) {
                    var n = v("#nav-flyout-ewc .nav-ewc-content")
                      , c = function() {
                        n.html(a.ewc.errorContent.html).addClass("nav-tpl-flyoutError")
                    }
                      , p = /\$Nav/g
                      , m = function(a) {
                        if (a) {
                            a = "var P \x3d window.AmazonUIPageJS; " + a;
                            if (p.test(a))
                                return c(),
                                !1;
                            e.when("ewc.flyout", "ewc.cartCount").run("[rcx-nav-cart]ewc", a)
                        }
                        return !0
                    }
                      , f = function(c) {
                        var r = {};
                        c ? r.isReloaded = !0 : (a.ewc.freshCartCount !== l && (r.freshCartCount = a.ewc.freshCartCount),
                        a.ewc.almCartCount !== l && (r.almCartCount = a.ewc.almCartCount),
                        a.ewc.primeWardrobeCartCount !== l && (r.primeWardrobeCartCount = a.ewc.primeWardrobeCartCount));
                        r.widerCompactView = 1280 < b.innerWidth;
                        return r
                    }
                      , h = function(e) {
                        v.ajax({
                            url: a.ewc.url,
                            data: f(e),
                            type: "GET",
                            dataType: a.ewc.isCompactEWCRendered ? "html" : "json",
                            cache: !1,
                            timeout: a.ewc.timeout || 3E4,
                            beforeSend: function() {
                                a.ewc.isCompactEWCRendered ? "function" === typeof b.uet && b.uet("af", "ewc2-compact", {
                                    wb: 1
                                }) : (n.addClass("nav-spinner"),
                                "function" === typeof b.uet && b.uet("af", "ewc", {
                                    wb: 1
                                }))
                            },
                            error: c,
                            success: function(c) {
                                "function" === typeof b.uet && b.uet("bb", "ewc", {
                                    wb: 1
                                });
                                if (a.ewc.isCompactEWCRendered) {
                                    if (e) {
                                        var f = v(c).find("#ewc-total-quantity").val();
                                        b.$Nav && f && b.$Nav.when("api.setCartCount").run(function(a) {
                                            a(parseInt(f), !0)
                                        })
                                    } else
                                        k.register("EWC", function() {
                                            b.EwcP === l && (b.EwcP = b.AmazonUIPageJS || k);
                                            return {
                                                refresh: function() {
                                                    b.ue && b.ue.count && b.ue.count("ewc2-refresh", 1);
                                                    h(!0);
                                                    k.when("EWCRefreshCallback").execute(function(a) {
                                                        a.update()
                                                    })
                                                }
                                            }
                                        });
                                    if (!a || !a.ewc || !a.ewc.flyout)
                                        return n.html(c);
                                    var p = a.ewc.EWCBrowserCacheKey;
                                    p && a.ewc.flyout.cache().updateCacheAndEwcContainer(p, c)
                                }
                                m(c.js) && n.html(c.html);
                                "function" === typeof b.uet && b.uet("be", "ewc", {
                                    wb: 1
                                })
                            },
                            complete: function() {
                                a.ewc.isCompactEWCRendered || n.removeClass("nav-spinner");
                                "function" === typeof b.uet && b.uet("cf", "ewc", {
                                    wb: 1
                                });
                                "function" === typeof b.uex && b.uex("ld", "ewc", {
                                    wb: 1
                                })
                            }
                        })
                    };
                    a.ewc.flyout.ableToPersist() ? (h(),
                    e.declare("ewc.loadContent", function() {})) : e.declare("ewc.loadContent", h)
                }
                k.when("ewc.pageload-content-loader").execute(function(a) {
                    a.loadContent(!0)
                })
            }
        })
    }
    )(b.$Nav);
    $Nav.when("$", "$F", "config").build("fixedBarWithEwcHandling", function(e, l, a) {
        var n = e("#nav-search")
          , c = e("#nav-tools")
          , p = e(b)
          , m = function() {
            var a = e(".nav-ewc-persistent-hover #nav-flyout-ewc");
            return a && a[0] ? a[0].offsetWidth : 0
        }
          , f = function() {
            var b = e(".nav-ewc-persistent-hover #nav-flyout-ewc");
            return a.ewc && a.ewc.isCompactEWCRendered && b.length ? b.css("right") : "0px"
        }
          , h = function() {
            return "calc(" + Array.from(arguments).join(" + ") + ")"
        }
          , g = l.throttle(400).on(function() {
            c.css({
                right: h(m() + "px", f())
            });
            n.css({
                right: h(c.width() + "px", m() + "px", f())
            })
        });
        return {
            setFixed: function(a, b) {
                c.css({
                    right: h(m() + "px", f())
                });
                n.css({
                    left: a,
                    right: b + m()
                });
                p.bind("resize", g)
            },
            setRelative: function() {
                p.unbind("resize", g)
            }
        }
    });
    (function(e, k) {
        e.when("$", "config").build("compactEWCSmallScreenCheck", function(a, e) {
            return {
                canCompactEWCHideContentOnPage: function() {
                    var c = e.ewc.isCompactEWCRendered, p = document.getElementById("a-page"), m = document.getElementById("nav-belt"), f = document.getElementById("nav-flyout-ewc"), h, g, r = function(a) {
                        a.forEach(function(a) {
                            a.hide()
                        })
                    }, k = function(a) {
                        a.forEach(function(a) {
                            a.show()
                        })
                    }, w = function() {
                        r([a("#nav-upnav")]);
                        var b = p.scrollWidth;
                        k([a("#nav-upnav")]);
                        return b
                    }, q = function(c) {
                        var e, f;
                        return function() {
                            var h = a(b).width();
                            h !== e && (e = h,
                            f = c.apply(this, arguments));
                            return f
                        }
                    }(function() {
                        if (g === l)
                            return 25 < w() - m.scrollWidth ? (t(),
                            !0) : h === l && (a(".nav-ewc-compact-view") ? t() : (f.style.visibility = "hidden",
                            inlineFlyout.applyPageLayoutForPersistent(),
                            t(),
                            inlineFlyout.unapplyPageLayoutForPersistent(),
                            f.style.visibility = ""),
                            g !== l && g > m.scrollWidth) ? !0 : !1;
                        if (g !== l) {
                            var b = m.scrollWidth;
                            h && (b = m.scrollWidth + 100);
                            return g > b
                        }
                    }), t = function() {
                        25 < w() - m.scrollWidth && (g = w() - 25 + 100)
                    };
                    return function() {
                        if (!c || 1280 < (b.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) || "loading" === document.readyState)
                            return !1;
                        var a = p && m && q()
                          , e = !a;
                        if (e !== l) {
                            var f;
                            f = e ? "shown" : "hidden";
                            var g;
                            h === l ? g = f : h !== e && (g = "resizeto" + f);
                            if (f = g)
                                f = ["compactEWCVisibleState", f],
                                b.ue && b.ue.count && b.ue.count(f.join(":"), 1);
                            h = e
                        }
                        return a
                    }
                }()
            }
        })
    }
    )(b.$Nav, k);
    (function(e, l) {
        e.when("$").run("ewc.before.flyout", function() {
            "function" === typeof b.uet && b.uet("x3", "ewc", {
                wb: 1
            })
        });
        e.when("$", "config", "flyouts.anchor").run("ewc.resetArrow", function(a, b, c) {
            a("#nav-flyout-ewc .nav-ewc-arrow").length && a(".nav-ewc-arrow").detach().appendTo(c())
        });
        e.when("$", "$F", "config", "flyouts.create", "ewc.loadContent", "data", "logUeError", "now", "metrics", "util.checkedObserver", "compactEWCSmallScreenCheck").run("ewc.flyout", function(a, n, c, p, m, f, h, g, r, k, w) {
            if (c.ewc && !c.ewc.debugInlineJS) {
                "function" === typeof b.uet && b.uet("x4", "ewc", {
                    wb: 1
                });
                var q = c.ewc.flyout;
                g = h = !1;
                c.beaconbeltCover && !c.ewc.enablePersistent && (g = h = !0);
                var t = a(b);
                a(document.documentElement);
                a("#nav-belt");
                a("#nav-cart");
                r = c.ewc.timeout || 3E4;
                var z = c.ewc.isCompactEWCRendered
                  , E = w.canCompactEWCHideContentOnPage
                  , x = function() {
                    return q.ableToPersist() && (z ? !E() : !0)
                }
                  , A = function() {
                    var a = b.document.documentElement.clientHeight
                      , c = b.document.body;
                    return "CSS1Compat" === b.document.compatMode && a || c && c.clientHeight || a
                };
                c.ewc.isEWCLogging && (x(),
                A());
                var B = n.once().on(m);
                e.declare("ewc.cartCount", function(a) {
                    f.observe("cartCount", a)
                });
                var d = p({
                    elem: a("#nav-flyout-ewc"),
                    key: "ewc",
                    link: c.ewc.isTriggerEnabled ? a("#nav-cart") : null,
                    event: "ewc",
                    className: "nav-ewcFlyout",
                    cover: h,
                    disableCoverPinned: g,
                    enableFlyoutBuffer: !1,
                    anchor: a("#navbar"),
                    timeoutDelay: r,
                    aligner: function(b) {
                        var d = b.$flyout
                          , e = a(".nav-flyout-body", d)
                          , f = a("#nav-belt");
                        b = a("#nav-main");
                        var h = f.outerHeight();
                        b.outerHeight();
                        a("#nav-tools").outerHeight();
                        return function() {
                            var a = f.offset().top
                              , b = t.scrollTop()
                              , F = A()
                              , g = 0
                              , k = 0;
                            b < a ? g = a - b : b <= a + h && (k = a - b);
                            a = {
                                top: g + "px",
                                height: F - g + "px"
                            };
                            z && x() ? a.right = q.getEWCRightOffsetCssProperty ? q.getEWCRightOffsetCssProperty() : "0" : c.ewc.isCompactEWCRendered || e.css({
                                top: k + "px",
                                height: d.height() - k + "px"
                            });
                            d.css(a)
                        }
                    }
                });
                d.getPanel().onRender(function() {
                    var a = d.elem();
                    a.hasClass("nav-ewc-lazy-align") && a.removeClass("nav-ewc-hide-head");
                    c.ewc.isEWCStateExpanded || "function" === typeof b.uex && b.uex("ld", "ewc", {
                        wb: 1
                    })
                });
                var u;
                c.ewc.pinnable && (u = function(d) {
                    var e = d.elem()
                      , f = e.find(".nav-ewc-pin-tail")
                      , g = f.find(".nav-ewc-pin-button")
                      , h = function(b, c) {
                        c = c || (d.isPersistent() ? "crt_ewc_pin" : "crt_ewc_unpin");
                        a.ajax({
                            type: "GET",
                            cache: !1,
                            url: "/gp/navigation/ajax/save-ewc-status.html/ref\x3d" + c + b
                        })
                    }
                      , k = function(a) {
                        c.ewc.isEWCStateExpanded = "1" === a;
                        h("?persistent\x3d" + a)
                    }
                      , l = function() {
                        var a = "?ttDisplayed\x3d1";
                        c.ewc.ewcDebugTTP && (a += "\x26ewcDebugTTP\x3d" + c.ewc.ewcDebugTTP);
                        h(a, "crt_ewc_incttd")
                    }
                      , m = function(a) {
                        a ? f.removeClass("nav-ewc-unpin").addClass("nav-ewc-pin") : f.removeClass("nav-ewc-pin").addClass("nav-ewc-unpin")
                    }
                      , n = e.find(".nav-ewc-pin-tt")
                      , p = function() {
                        return {
                            fadeIn: function() {
                                n.stop(!0, !0).css({
                                    top: g.position().top + g.height() / 2 - n.outerHeight(!0) / 2 + "px"
                                }).fadeIn(200)
                            },
                            fadeOut: function() {
                                n.stop(!0, !0).fadeOut(200)
                            },
                            hide: function() {
                                n.stop(!0, !0).hide()
                            }
                        }
                    }();
                    g.bind("mouseenter", function() {
                        p.fadeIn()
                    });
                    g.bind("mouseleave", function() {
                        p.fadeOut()
                    });
                    g.bind("click", function() {
                        p.hide();
                        f.hasClass("nav-ewc-pin") ? (d.persist({
                            noAnimation: !0
                        }),
                        k("1")) : (d.unpersist({
                            noAnimation: !0
                        }),
                        k("0"))
                    });
                    return {
                        align: function() {
                            var a = e.find(".nav-flyout-head");
                            g.css({
                                top: a.outerHeight() - a.height() + (parseInt(a.css("top"), 10) || 0) + 250 + "px"
                            })
                        },
                        tryToShowTrainingTip: function() {
                            f.hasClass("nav-ewc-pin") || (p.fadeIn(),
                            setTimeout(function() {
                                p.fadeOut()
                            }, 2E3),
                            l())
                        },
                        resetVisibility: function() {
                            (b.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) >= c.ewc.viewportWidthForPersistent ? (e.find(".nav-flyout-body").addClass("nav-ewc-unpinbody"),
                            f.show()) : (f.hide(),
                            e.find(".nav-flyout-body").removeClass("nav-ewc-unpinbody"))
                        },
                        isVisible: function() {
                            return f.is(":visible")
                        },
                        collapse: function() {
                            m(!0)
                        },
                        expand: function() {
                            B();
                            m(!1)
                        }
                    }
                }(d));
                d.onAlign(function() {
                    c.ewc.pinnable && u.align()
                });
                d.onShow(function() {
                    d.lock()
                });
                d.onRender(n.once().on(function() {
                    "function" === typeof b.uet && b.uet("x5", "ewc", {
                        wb: 1
                    });
                    var e = d.elem()
                      , g = d.getPanel().elem()
                      , h = a("#nav-cart")
                      , k = e.find(".nav-cart");
                    c.ewc.isEWCStateExpanded ? (g.hide(),
                    d.getPanel().render({
                        html: " "
                    })) : e.find(".nav-flyout-body").append(g);
                    f.observe("cartCount", function() {
                        k.html(h.html())
                    });
                    c.ewc.pinnable && (u.resetVisibility(),
                    t.resize(n.throttle(300).on(u.resetVisibility)))
                }));
                d.ableToPersist = x;
                d.hasQualifiedViewportForPersistent = function() {
                    return q.hasQualifiedViewportForPersistent ? q.hasQualifiedViewportForPersistent() : !1
                }
                ;
                var C = function() {
                    e.getNow("isAuiP") && l.when("A").execute("ForceAuiResize", function(a) {
                        a.trigger("resize", b, {
                            width: 1,
                            height: 1
                        })
                    })
                };
                d.applyPageLayoutForPersistent = function() {
                    q.applyPageLayoutForPersistent();
                    "function" === typeof b.maintainHeight && b.maintainHeight();
                    C()
                }
                ;
                d.unapplyPageLayoutForPersistent = function() {
                    q.unapplyPageLayoutForPersistent();
                    C()
                }
                ;
                (function() {
                    var b, e = function(a) {
                        a.stop(!1, !0).animate({
                            left: "-" + a.width() + "px"
                        }, 400, function() {
                            b = setTimeout(function() {
                                f(a)
                            }, 2E3)
                        })
                    }, f = function(a) {
                        a.stop(!0, !0).fadeOut(400, function() {
                            a.css({
                                left: "",
                                display: ""
                            })
                        });
                        clearTimeout(b)
                    }, g = function(b, d) {
                        var c = {
                            right: "-" + b[0].offsetWidth + "px"
                        };
                        d ? b.css(c) : (b.animate(c, 400, function() {
                            a(this).css("right", "")
                        }),
                        e(a(".nav-flyout-tail", b)))
                    }, h = !1;
                    c.ewc.pinnable && (h ? u.expand() : u.collapse());
                    d.isSlidedIn = function() {
                        return h
                    }
                    ;
                    d.slideIn = k({
                        context: d,
                        check: function() {
                            if (h)
                                return !1
                        },
                        observe: function(b) {
                            B();
                            d.isVisible() || d.show();
                            var c = this.elem();
                            b = b.noAnimation;
                            var e = {
                                right: q.getEWCRightOffsetCssProperty ? q.getEWCRightOffsetCssProperty() : "0"
                            };
                            b ? c.stop().css(e) : (c.stop().animate(e, 400),
                            f(a(".nav-flyout-tail", c)));
                            h = !0
                        }
                    });
                    d.onSlideIn = d.slideIn.observe;
                    d.onSlideIn(function() {
                        c.ewc.pinnable && u.expand()
                    });
                    d.slideOut = k({
                        context: d,
                        check: function() {
                            if (!h)
                                return !1
                        },
                        observe: function(a) {
                            d.isVisible() || d.show();
                            g(this.elem(), a.noAnimation);
                            h = !1
                        }
                    });
                    d.onSlideOut = d.slideOut.observe;
                    d.onSlideOut(function() {
                        c.ewc.pinnable && u.collapse()
                    })
                }
                )();
                (function() {
                    var a = !1;
                    d.persist = k({
                        context: d,
                        check: function(b) {
                            if (a)
                                return !1
                        },
                        observe: function(b) {
                            a = !0;
                            d.applyPageLayoutForPersistent();
                            d.slideIn({
                                noAnimation: b.noAnimation
                            });
                            d.lock()
                        }
                    });
                    d.onPersist = d.persist.observe;
                    d.unpersist = k({
                        context: d,
                        check: function(b) {
                            if (!a)
                                return !1
                        },
                        observe: function(b) {
                            a = !1;
                            d.unlock();
                            d.slideOut({
                                noAnimation: b.noAnimation
                            });
                            d.unapplyPageLayoutForPersistent()
                        }
                    });
                    d.onUnpersist = d.unpersist.observe;
                    d.isPersistent = function() {
                        return a
                    }
                }
                )();
                var y = function() {
                    !0 === c.ewc.isEWCExpandCollapseFeatureEnabled ? x() ? (ewcExpandCollapseButton.style.display = "flex",
                    d.showUserPreference()) : (d.unpersist({
                        noAnimation: !0
                    }),
                    ewcExpandCollapseButton.style.display = "none") : x() ? d.persist({
                        noAnimation: !0
                    }) : d.unpersist({
                        noAnimation: !0
                    })
                }
                  , D = function(b) {
                    a("#navbar").is(":hidden") ? setTimeout(function() {
                        D(b)
                    }, 1E3) : b()
                };
                D(function() {
                    !0 !== c.ewc.isEWCExpandCollapseFeatureEnabled && d.show();
                    t.scroll(function() {
                        d.align()
                    });
                    t.resize(n.throttle(300).on(d.align));
                    q.unbindEvents();
                    !0 === c.ewc.isEWCExpandCollapseFeatureEnabled ? (ewcExpandCollapseButton.addEventListener("click", d.ewcExpandCollapseEventCallBack),
                    b.addEventListener("load", y)) : z && q.ableToPersist() && (d.persist({
                        noAnimation: !0
                    }),
                    b.addEventListener("load", y),
                    a("#nav-flyout-ewc").addClass("nav-flyout-ewc-compact"));
                    y();
                    c.ewc.pinnable && c.ewc.enableTrainingTip && u.tryToShowTrainingTip();
                    t.resize(n.throttle(300).on(y))
                });
                return d
            }
        });
        e.when("$", "$F", "config", "util.mouseOut", "util.velocityTracker", "ewc.flyout").run("ewc.hoverTrigger", function(a, e, c, k, m, f) {
            if (c.ewc.enableHover) {
                var h = a("#nav-cart")
                  , g = m();
                c = k(500);
                c.add(h);
                c.add(f.elem());
                c.enable();
                h.hover(function() {
                    g.enable()
                }, function() {
                    g.disable()
                });
                c.action(function() {
                    f.hasQualifiedViewportForPersistent() || f.slideOut()
                });
                var l = e.debounce(500, !0).on(function() {
                    f.hasQualifiedViewportForPersistent() || f.slideIn()
                });
                g.addThreshold({
                    below: 40
                }, function() {
                    l();
                    g.disable()
                });
                var v = function() {
                    var b = a(".nav-icon", h);
                    f.hasQualifiedViewportForPersistent() ? b.hide().css({
                        visibility: "hidden"
                    }) : b.show().css({
                        visibility: "visible"
                    })
                };
                v();
                a(b).resize(function() {
                    v()
                })
            }
        })
    }
    )(b.$Nav, k)
});
/* ******** */
(function(d) {
    var b = window.AmazonUIPageJS || window.P
      , c = b._namespace || b.attributeErrors
      , a = c ? c("AmazonSmileNavAUIAssets", "") : b;
    a.guardFatal ? a.guardFatal(d)(a, window) : a.execute(function() {
        d(a, window)
    })
}
)(function(d, b, c) {
    (function(a, b) {
        a.when("$", "$F", "data", "config", "flyouts.create").run("flyout.smileSupporting", function(a, h, f, k, l) {
            var d = a("#nav-smile-your-charity-link");
            if (!d.length)
                return !1;
            var e = l({
                key: "smileSupportingCharity",
                link: d,
                clickThrough: !0,
                event: "smileSupportingCharity",
                arrow: "top",
                suspendTabbing: !0,
                cover: !0,
                animateDown: k.flyoutAnimation,
                align: {
                    constrainTo: a("#navbar"),
                    constrainBuffer: [3, 0, 0, 0],
                    constrainChecks: [!0, !1, !1, !1]
                }
            })
              , c = h.once().on(function() {
                b.when("A").execute(function(a) {
                    a.trigger("a:popover:show:pldn-xsite-popover")
                })
            })
              , g = function() {
                e.isVisible() && e.getPanel().isRendered() && c()
            };
            e.getPanel().onRender(function() {
                this.elem().addClass("a-popover-inner");
                e.align()
            });
            e.onShow(function() {
                g()
            });
            e.getPanel().onRender(function() {
                g()
            });
            b.when("A").execute(function(a) {
                a.on("pldn-changed-charity", function(b) {
                    a.get(b + "\x26isAUI\x3d1", {
                        success: function(a) {
                            f({
                                smileSupportingCharityContent: {
                                    html: a
                                }
                            })
                        }
                    })
                })
            });
            return e
        })
    }
    )(b.$Nav, b.P);
    (function(a) {
        a.when("config", "data", "provider.ajax").build("provider.smileSupporting", function(a, b, d) {
            var f = function(a) {
                b({
                    smileSupportingCharityContent: {
                        html: a
                    }
                })
            }
              , c = function(a, d, e) {
                b({
                    smileSupportingCharityContent: {
                        html: '\x3ca href\x3d"/gp/chpf/dashboard?ref\x3dnav_cs_smile_sm_err"\x3eView Charity Dashboard\x3c/a\x3e',
                        error: "Error with smile ajax - " + e
                    }
                })
            };
            if (a.smilePopoverUrl)
                return d({
                    url: a.smilePopoverUrl,
                    success: f,
                    error: c
                });
            c(null, null, "No smile popover url provided from config")
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("provider.smileSupporting", "flyout.smileSupporting", "util.Proximity").run("bindSmileSupportingFlyout", function(a, b, d) {
            if (b && a) {
                var c = a.boundFetch({
                    isRawHTMLContent: !0,
                    data: {
                        smileSupportingCharityContent: "smileSupportingCharity",
                        metricKey: "smileMetric"
                    }
                });
                b.onShow(c);
                b.link.focus(c);
                d.onEnter(b.link, [20, 40, 40, 40], function() {
                    c()
                })
            }
        })
    }
    )(b.$Nav)
});
/* ******** */
(function(c) {
    var b = window.AmazonUIPageJS || window.P
      , d = b._namespace || b.attributeErrors
      , a = d ? d("YourOrdersAnywhereWidgetAssets", "") : b;
    a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {
        c(a, window)
    })
}
)(function(c, b, d) {
    (function(a, b) {
        a.when("$", "$F", "data", "config", "flyouts.create", "yoawWeblabEnabled").run("flyout.yoaw", function(e, a, k, c, d, l) {
            e = e("#nav-orders");
            if (!e.length)
                return !1;
            var f = d({
                key: "yoaw",
                link: e,
                clickThrough: !0,
                event: "yoaw",
                arrow: "top",
                suspendTabbing: !0,
                cover: !0,
                animateDown: c.flyoutAnimation
            })
              , h = a.once().on(function() {
                b.when("A").execute(function(a) {})
            })
              , g = function() {
                f.isVisible() && f.getPanel().isRendered() && h()
            };
            f.getPanel().onRender(function() {
                f.align()
            });
            f.onShow(function() {
                g()
            });
            f.getPanel().onRender(function() {
                g()
            });
            return f
        })
    }
    )(b.$Nav, b.P);
    (function(a) {
        a.when("config", "data", "provider.ajax").build("provider.yoaw", function(a, e, b) {
            return b({
                url: "/your-orders/yoaw?ref\x3dppx_yoawnav_dt_b_flyout",
                success: function(a) {
                    e({
                        yoawContent: {
                            html: a
                        }
                    })
                },
                error: function(a, b, c) {
                    e({
                        yoawContent: {
                            html: '\x3cdiv class\x3d"nav-tpl-itemList nav-flyout-content nav-flyout-accessibility" style\x3d"min-height: 120px;"\x3e\x3cdiv class\x3d"nav-title" style\x3d"font-size: 16px; font-weight: bold;""\x3eYour Orders\x3c/div\x3e\x3ca href\x3d"/gp/css/order-history?ref_\x3dppx_yoawnav_dt_b_fallback_allorders" class\x3d"nav-link nav-item"\x3e\x3cspan class\x3d"nav-text"\x3eSee all orders\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e',
                            error: "Error with yoaw ajax - " + c
                        }
                    })
                }
            })
        })
    }
    )(b.$Nav);
    (function(a) {
        a.when("provider.yoaw", "flyout.yoaw", "util.Proximity").run("bindYoawFlyout", function(a, b, c) {
            if (b && a) {
                var d = a.boundFetch({
                    isRawHTMLContent: !0,
                    data: {
                        yoawContent: "yoaw",
                        metricKey: "yoawMetric"
                    }
                });
                b.onShow(d);
                b.link.focus(d);
                c.onEnter(b.link, [20, 40, 40, 40], function() {
                    d()
                })
            }
        })
    }
    )(b.$Nav)
});
/* ******** */
