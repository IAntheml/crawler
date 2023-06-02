window = global;

document = {}
document.cookie = ""

var update_cookie;
//第一步
var aPageStart = (new Date()).getTime();
//第二步
var ue_t0 = ue_t0 || +new Date();
//第三步
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

    var ue_csm = window
        , ue_hob = +new Date();
    (function (d) {
            var e = d.ue = d.ue || {}
                , f = Date.now || function () {
                    return +new Date
                }
            ;
            e.d = function (b) {
                return f() - (b ? 0 : d.ue_t0)
            }
            ;
            e.stub = function (b, a) {
                if (!b[a]) {
                    var c = [];
                    b[a] = function () {
                        c.push([c.slice.call(arguments), e.d(), d.ue_id])
                    }
                    ;
                    b[a].replay = function (b) {
                        for (var a; a = c.shift();)
                            b(a[0], a[1], a[2])
                    }
                    ;
                    b[a].isStub = 1
                }
            }
            ;
            e.exec = function (b, a) {
                return function () {
                    try {
                        return b.apply(this, arguments)
                    } catch (c) {
                        console.log("error:" + c.message)
                        ueLogError(c, {
                            attribution: a || "undefined",
                            logLevel: "WARN"
                        })
                    }
                }
            }
        }
    )(ue_csm);

    var ue_err_chan = 'jserr-rw';
    (function (d, e) {
            function h(f, b) {
                if (!(a.ec > a.mxe) && f) {
                    a.ter.push(f);
                    b = b || {};
                    var c = f.logLevel || b.logLevel;
                    c && c !== k && c !== m && c !== n && c !== p || a.ec++;
                    c && c != k || a.ecf++;
                    b.pageURL = "" + (e.location ? e.location.href : "");
                    b.logLevel = c;
                    b.attribution = f.attribution || b.attribution;
                    a.erl.push({
                        ex: f,
                        info: b
                    })
                }
            }

            function l(a, b, c, e, g) {
                d.ueLogError({
                    m: a,
                    f: b,
                    l: c,
                    c: "" + e,
                    err: g,
                    fromOnError: 1,
                    args: arguments
                }, g ? {
                    attribution: g.attribution,
                    logLevel: g.logLevel
                } : void 0);
                return !1
            }

            var k = "FATAL"
                , m = "ERROR"
                , n = "WARN"
                , p = "DOWNGRADED"
                , a = {
                ec: 0,
                ecf: 0,
                pec: 0,
                ts: 0,
                erl: [],
                ter: [],
                buffer: [],
                mxe: 50,
                startTimer: function () {
                    a.ts++;
                    setInterval(function () {
                        d.ue && a.pec < a.ec && d.uex("at");
                        a.pec = a.ec
                    }, 1E4)
                }
            };
            l.skipTrace = 1;
            h.skipTrace = 1;
            h.isStub = 1;
            d.ueLogError = h;
            d.ue_err = a;
            e.onerror = l
        }
    )(ue_csm, window);

    ue_id = 'WJW4SQY7V4SFW9800MJA'
        , ue_url = '/rd/uedata'
        , ue_navtiming = 1
        , ue_mid = 'ATVPDKIKX0DER'
        , ue_sid = '138-4978141-4718406'
        , ue_sn = 'www.amazon.com'
        , ue_furl = 'fls-na.amazon.com'
        , ue_surl = 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod'
        , ue_int = 0
        , ue_fcsn = 1
        , ue_urt = 3
        , ue_rpl_ns = 'cel-rpl'
        , ue_ddq = 1
        , ue_fpf = '//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:138-4978141-4718406:WJW4SQY7V4SFW9800MJA$uedata=s:'
        , ue_sbuimp = 1
        , ue_ibft = 0
        , ue_sswmts = 0
        , ue_jsmtf = 0
        , ue_fnt = 0
        , ue_lpsi = 6000
        , ue_no_counters = 0
        ,
        ue_swi = 1;
    var ue_viz = function () {
        (function (b, e, a) {
                function k(c) {
                    if (b.ue.viz.length < p && !l) {
                        var a = c.type;
                        c = c.originalEvent;
                        /^focus./.test(a) && c && (c.toElement || c.fromElement || c.relatedTarget) || (a = e[m] || ("blur" == a || "focusout" == a ? "hidden" : "visible"),
                            b.ue.viz.push(a + ":" + (+new Date - b.ue.t0)),
                        "visible" == a && (b.ue.isl && q("at"),
                            l = 1))
                    }
                }

                for (var l = 0, q = b.uex, f, g, m, n = ["", "webkit", "o", "ms", "moz"], d = 0, p = 20, h = 0; h < n.length && !d; h++)
                    if (a = n[h],
                        f = (a ? a + "H" : "h") + "idden",
                        d = "boolean" == typeof e[f])
                        g = a + "visibilitychange",
                            m = (a ? a + "V" : "v") + "isibilityState";
                k({});
                d && e.addEventListener(g, k, 0);
                b.ue && d && (b.ue.pageViz = {
                    event: g,
                    propHid: f
                })
            }
        )(ue_csm, ue_csm.document, ue_csm.window)
    };

    (function (d, h, N) {
            function H(a) {
                return a && a.replace && a.replace(/^\s+|\s+$/g, "")
            }

            function u(a) {
                return "undefined" === typeof a
            }

            function B(a, b) {
                for (var c in b)
                    b[v](c) && (a[c] = b[c])
            }

            function I(a) {
                try {
                    var b = N.cookie.match(RegExp("(^| )" + a + "=([^;]+)"));
                    if (b)
                        return b[2].trim()
                } catch (c) {

                    console.log("error:" + c.message)
                }
            }

            function O(k, b, c) {
                var q = (x || {}).type;
                if ("device" !== c || 2 !== q && 1 !== q)
                    k && (d.ue_id = a.id = a.rid = k,
                    w && (w = w.replace(/((.*?:){2})(\w+)/, function (a, b) {
                        return b + k
                    })),
                    D && (e("id", D, k),
                        D = 0)),
                    b && (w && (w = w.replace(/(.*?:)(\w|-)+/, function (a, c) {
                        return c + b
                    })),
                        d.ue_sid = b),
                    c && a.tag("page-source:" + c),
                        d.ue_fpf = w
            }

            function P() {
                var a = {};
                return function (b) {
                    b && (a[b] = 1);
                    b = [];
                    for (var c in a)
                        a[v](c) && b.push(c);
                    return b
                }
            }

            function y(d, b, c, q) {
                q = q || +new E;
                var f, m;
                if (b || u(c)) {
                    if (d)
                        for (m in f = b ? e("t", b) || e("t", b, {}) : a.t,
                            f[d] = q,
                            c)
                            c[v](m) && e(m, b, c[m]);
                    return q
                }
            }

            function e(d, b, c) {
                var e = b && b != a.id ? a.sc[b] : a;
                e || (e = a.sc[b] = {});
                "id" === d && c && (Q = 1);
                return e[d] = c || e[d]
            }

            function R(d, b, c, e, f) {
                c = "on" + c;
                var m = b[c];
                "function" === typeof m ? d && (a.h[d] = m) : m = function () {
                }
                ;
                b[c] = function (a) {
                    f ? (e(a),
                        m(a)) : (m(a),
                        e(a))
                }
                ;
                b[c] && (b[c].isUeh = 1)
            }

            function S(k, b, c, q) {
                function p(b, c) {
                    var d = [b], g = 0, f = {}, m, h;
                    c ? (d.push("m=1"),
                        f[c] = 1) : f = a.sc;
                    for (h in f)
                        if (f[v](h)) {
                            var q = e("wb", h), p = e("t", h) || {}, n = e("t0", h) || a.t0, l;
                            if (c || 2 == q) {
                                q = q ? g++ : "";
                                d.push("sc" + q + "=" + h);
                                for (l in p)
                                    u(p[l]) || null === p[l] || d.push(l + q + "=" + (p[l] - n));
                                d.push("t" + q + "=" + p[k]);
                                if (e("ctb", h) || e("wb", h))
                                    m = 1
                            }
                        }
                    !J && m && d.push("ctb=1");
                    return d.join("&")
                }

                function m(b, c, g, e, f) {
                    if (b) {
                        var k = d.ue_err;
                        d.ue_url && !e && !f && b && 0 < b.length && (e = new Image,
                            a.iel.push(e),
                            e.src = b,
                        a.count && a.count("postbackImageSize", b.length));
                        w ? (f = h.encodeURIComponent) && b && (e = new Image,
                            b = "" + d.ue_fpf + f(b) + ":" + (+new E - d.ue_t0),
                            a.iel.push(e),
                            e.src = b) : a.log && (a.log(b, "uedata", {
                            n: 1
                        }),
                            a.ielf.push(b));
                        k && !k.ts && k.startTimer();
                        a.b && (k = a.b,
                            a.b = "",
                            m(k, c, g, 1))
                    }
                }

                function A(b) {
                    var c = x ? x.type : F
                        , d = 2 == c || a.isBFonMshop
                        , c = c && !d
                        , e = a.bfini;
                    Q || (e && 1 < e && (b += "&bfform=1",
                    c || (a.isBFT = e - 1)),
                    d && (b += "&bfnt=1",
                        a.isBFT = a.isBFT || 1),
                    a.ssw && a.isBFT && (a.isBFonMshop && (a.isNRBF = 0),
                    u(a.isNRBF) && (d = a.ssw(a.oid),
                    d.e || u(d.val) || (a.isNRBF = 1 < d.val ? 0 : 1)),
                    u(a.isNRBF) || (b += "&nrbf=" + a.isNRBF)),
                    a.isBFT && !a.isNRBF && (b += "&bft=" + a.isBFT));
                    return b
                }

                if (!a.paused && (b || u(c))) {
                    for (var l in c)
                        c[v](l) && e(l, b, c[l]);
                    a.isBFonMshop || y("pc", b, c);
                    l = "ld" === k && b && e("wb", b);
                    var s = e("id", b) || a.id;
                    l || s === a.oid || (D = b,
                        ba(s, (e("t", b) || {}).tc || +e("t0", b), +e("t0", b)));
                    var s = e("id", b) || a.id, t = e("id2", b), g = a.url + "?" + k + "&v=" + a.v + "&id=" + s,
                        J = e("ctb", b) || e("wb", b), z;
                    J && (g += "&ctb=" + J);
                    t && (g += "&id2=" + t);
                    1 < d.ueinit && (g += "&ic=" + d.ueinit);
                    if (!("ld" != k && "ul" != k || b && b != s)) {
                        if ("ld" == k) {
                            try {
                                h[K] && h[K].isUeh && (h[K] = null)
                            } catch (I) {
                                console.log("error:" + I.message)
                            }
                            if (h.chrome)
                                for (t = 0; t < L.length; t++)
                                    T(G, L[t]);
                            (t = N.ue_backdetect) && t.ue_back && t.ue_back.value++;
                            d._uess && (z = d._uess());
                            a.isl = 1
                        }
                        a._bf && (g += "&bf=" + a._bf());
                        d.ue_navtiming && f && (e("ctb", s, "1"),
                        a.isBFonMshop || y("tc", F, F, M));
                        !C || a.isBFonMshop || U || (f && B(a.t, {
                            na_: f.navigationStart,
                            ul_: f.unloadEventStart,
                            _ul: f.unloadEventEnd,
                            rd_: f.redirectStart,
                            _rd: f.redirectEnd,
                            fe_: f.fetchStart,
                            lk_: f.domainLookupStart,
                            _lk: f.domainLookupEnd,
                            co_: f.connectStart,
                            _co: f.connectEnd,
                            sc_: f.secureConnectionStart,
                            rq_: f.requestStart,
                            rs_: f.responseStart,
                            _rs: f.responseEnd,
                            dl_: f.domLoading,
                            di_: f.domInteractive,
                            de_: f.domContentLoadedEventStart,
                            _de: f.domContentLoadedEventEnd,
                            _dc: f.domComplete,
                            ld_: f.loadEventStart,
                            _ld: f.loadEventEnd,
                            ntd: ("function" !== typeof C.now || u(M) ? 0 : new E(M + C.now()) - new E) + a.t0
                        }),
                        x && B(a.t, {
                            ty: x.type + a.t0,
                            rc: x.redirectCount + a.t0
                        }),
                            U = 1);
                        a.isBFonMshop || B(a.t, {
                            hob: d.ue_hob,
                            hoe: d.ue_hoe
                        });
                        a.ifr && (g += "&ifr=1")
                    }
                    y(k, b, c, q);
                    var r, n;
                    l || b && b !== s || ca(b);
                    (c = d.ue_mbl) && c.cnt && !l && (g += c.cnt());
                    l ? e("wb", b, 2) : "ld" == k && (a.lid = H(s));
                    for (r in a.sc)
                        if (1 == e("wb", r))
                            break;
                    if (l) {
                        if (a.s)
                            return;
                        g = p(g, null)
                    } else
                        c = p(g, null),
                        c != g && (c = A(c),
                            a.b = c),
                        z && (g += z),
                            g = p(g, b || a.id);
                    g = A(g);
                    if (a.b || l)
                        for (r in a.sc)
                            2 == e("wb", r) && delete a.sc[r];
                    z = 0;
                    a._rt && (g += "&rt=" + a._rt());
                    c = h.csa;
                    if (!l && c)
                        for (n in r = e("t", b) || {},
                            c = c("PageTiming"),
                            r)
                            r[v](n) && c("mark", da[n] || n, r[n]);
                    l || (a.s = 0,
                    (n = d.ue_err) && 0 < n.ec && n.pec < n.ec && (n.pec = n.ec,
                        g += "&ec=" + n.ec + "&ecf=" + n.ecf),
                        z = e("ctb", b),
                        "ld" !== k || b || a.markers ? a.markers && a.isl && !l && b && B(a.markers, e("t", b)) : (a.markers = {},
                            B(a.markers, e("t", b))),
                        e("t", b, {}));
                    a.tag && a.tag().length && (g += "&csmtags=" + a.tag().join("|"),
                        a.tag = P());
                    n = a.viz || [];
                    (r = n.length) && (g += "&viz=" + n.splice(0, r).join("|"));
                    u(d.ue_pty) || (g += "&pty=" + d.ue_pty + "&spty=" + d.ue_spty + "&pti=" + d.ue_pti);
                    a.tabid && (g += "&tid=" + a.tabid);
                    a.aftb && (g += "&aftb=1");
                    !a._ui || b && b != s || (g += a._ui());
                    a.a = g;
                    m(g, k, z, l, b && "string" === typeof b && -1 !== b.indexOf("csa:"))
                }
            }

            function ca(a) {
                var b = h.ue_csm_markers || {}, c;
                for (c in b)
                    b[v](c) && y(c, a, F, b[c])
            }

            function A(a, b, c) {
                c = c || h;
                if (c[V])
                    c[V](a, b, !1);
                else if (c[W])
                    c[W]("on" + a, b)
            }

            function T(a, b, c) {
                c = c || h;
                if (c[X])
                    c[X](a, b, !1);
                else if (c[Y])
                    c[Y]("on" + a, b)
            }

            function Z() {
                function a() {
                    d.onUl()
                }

                function b(a) {
                    return function () {
                        c[a] || (c[a] = 1,
                            S(a))
                    }
                }

                var c = {}, e, f;
                d.onLd = b("ld");
                d.onLdEnd = b("ld");
                d.onUl = b("ul");
                e = {
                    stop: b("os")
                };
                h.chrome ? (A(G, a),
                    L.push(a)) : e[G] = d.onUl;
                for (f in e)
                    e[v](f) && R(0, h, f, e[f]);
                d.ue_viz && ue_viz();
                A("load", d.onLd);
                y("ue")
            }

            function ba(e, b, c) {
                var f = d.ue_mbl
                    , p = h.csa
                    , m = p && p("SPA")
                    , p = p && p("PageTiming");
                f && f.ajax && f.ajax(b, c);
                m && p && (m("newPage", {
                    requestId: e,
                    transitionType: "soft"
                }),
                    p("mark", "transitionStart", b));
                a.tag("ajax-transition")
            }

            d.ueinit = (d.ueinit || 0) + 1;
            var a = d.ue = d.ue || {};
            a.t0 = h.aPageStart || d.ue_t0;
            a.id = d.ue_id;
            a.url = d.ue_url;
            a.rid = d.ue_id;
            a.a = "";
            a.b = "";
            a.h = {};
            a.s = 1;
            a.t = {};
            a.sc = {};
            a.iel = [];
            a.ielf = [];
            a.viz = [];
            a.v = "0.251360.0";
            a.paused = !1;
            var v = "hasOwnProperty", G = "beforeunload", K = "on" + G, V = "addEventListener",
                X = "removeEventListener", W = "attachEvent", Y = "detachEvent", da = {
                    cf: "criticalFeature",
                    af: "aboveTheFold",
                    fn: "functional",
                    fp: "firstPaint",
                    fcp: "firstContentfulPaint",
                    bb: "bodyBegin",
                    be: "bodyEnd",
                    ld: "loaded"
                }, E = h.Date, C = h.performance || h.webkitPerformance, f = (C || {}).timing, x = (C || {}).navigation,
                M = (f || {}).navigationStart, w = d.ue_fpf, Q = 0, U = 0, L = [], D = 0, F;
            a.oid = H(a.id);
            a.lid = H(a.id);
            a._t0 = a.t0;
            a.tag = P();
            a.ifr = h.top !== h.self || h.frameElement ? 1 : 0;
            a.markers = null;
            a.attach = A;
            a.detach = T;
            if ("000-0000000-8675309" === d.ue_sid) {
                var $ = I("cdn-rid")
                    , aa = I("session-id");
                $ && aa && O($, aa, "cdn")
            }
            d.uei = Z;
            d.ueh = R;
            d.ues = e;
            d.uet = y;
            d.uex = S;
            a.reset = O;
            a.pause = function (d) {
                a.paused = d
            }
            ;
            Z()
        }
    )(ue_csm, ue_csm.window, ue_csm.document);

    ue.stub(ue, "event");
    ue.stub(ue, "onSushiUnload");
    ue.stub(ue, "onSushiFlush");

    ue.stub(ue, "log");
    ue.stub(ue, "onunload");
    ue.stub(ue, "onflush");
    (function (b) {
            var a = b.ue
                , g = 1 === b.ue_no_counters;
            a.cv = {};
            a.cv.scopes = {};
            a.cv.buffer = [];
            a.count = function (b, f, c) {
                var e = {}
                    , d = a.cv
                    , h = c && 0 === c.c;
                e.counter = b;
                e.value = f;
                e.t = a.d();
                c && c.scope && (d = a.cv.scopes[c.scope] = a.cv.scopes[c.scope] || {},
                    e.scope = c.scope);
                if (void 0 === f)
                    return d[b];
                d[b] = f;
                d = 0;
                c && c.bf && (d = 1);
                g || (ue_csm.ue_sclog || !a.clog || 0 !== d || h ? a.log && a.log(e, "csmcount", {
                    c: 1,
                    bf: d
                }) : a.clog(e, "csmcount", {
                    bf: d
                }));
                a.cv.buffer.push({
                    c: b,
                    v: f
                })
            }
            ;
            a.count("baselineCounter2", 1);
            a && a.event && (a.event({
                requestId: b.ue_id || "rid",
                server: b.ue_sn || "sn",
                obfuscatedMarketplaceId: b.ue_mid || "mid"
            }, "csm", "csm.CSMBaselineEvent.4"),
                a.count("nexusBaselineCounter", 1, {
                    bf: 1
                }))
        }
    )(ue_csm);

    var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;

//第四步
window.ue && ue.count && ue.count('CSMLibrarySize', 9835)


//第五步
window.ue_ihe = (window.ue_ihe || 0) + 1;


if (window.ue_ihe === 1) {
    (function (c) {
            c && 1 === c.ue_jsmtf && "object" === typeof c.P && "function" === typeof c.P.when && c.P.when("mshop-interactions").execute(function (e) {
                "object" === typeof e && "function" === typeof e.addListener && e.addListener(function (b) {
                    "object" === typeof b && "ORIGIN" === b.dataSource && "number" === typeof b.clickTime && "object" === typeof b.events && "number" === typeof b.events.pageVisible && (c.ue_jsmtf_interaction = {
                        pv: b.events.pageVisible,
                        ct: b.clickTime
                    })
                })
            })
        }
    )(ue_csm);
    (function (c, e, b) {
            function m(a) {
                f || (f = d[a.type].id,
                    "undefined" === typeof a.clientX ? (h = a.pageX,
                        k = a.pageY) : (h = a.clientX,
                        k = a.clientY),
                    2 != f || l && (l != h || n != k) ? (r(),
                    g.isl && e.setTimeout(function () {
                        p("at", g.id)
                    }, 0)) : (l = h,
                        n = k,
                        f = 0))
            }

            function r() {
                for (var a in d)
                    d.hasOwnProperty(a) && g.detach(a, m, d[a].parent)
            }

            function s() {
                for (var a in d)
                    d.hasOwnProperty(a) && g.attach(a, m, d[a].parent)
            }

            function t() {
                var a = "";
                !q && f && (q = 1,
                    a += "&ui=" + f);
                return a
            }

            var g = c.ue, p = c.uex, q = 0, f = 0, l, n, h, k, d = {
                click: {
                    id: 1,
                    parent: b
                },
                mousemove: {
                    id: 2,
                    parent: b
                },
                scroll: {
                    id: 3,
                    parent: e
                },
                keydown: {
                    id: 4,
                    parent: b
                }
            };
            g && p && (s(),
                g._ui = t)
        }
    )(ue_csm, window, document);

    (function (s, l) {
            function m(b, e, c) {
                c = c || new Date(+new Date + t);
                c = "expires=" + c.toUTCString();
                n.cookie = b + "=" + e + ";" + c + ";path=/"
            }

            function p(b) {
                b += "=";
                for (var e = n.cookie.split(";"), c = 0; c < e.length; c++) {
                    for (var a = e[c]; " " == a.charAt(0);)
                        a = a.substring(1);
                    if (0 === a.indexOf(b))
                        return decodeURIComponent(a.substring(b.length, a.length))
                }
                return ""
            }

            function q(b, e, c) {
                if (!e)
                    return b;
                -1 < b.indexOf("{") && (b = "");
                for (var a = b.split("&"), f, d = !1, h = !1, g = 0; g < a.length; g++)
                    f = a[g].split(":"),
                        f[0] == e ? (!c || d ? a.splice(g, 1) : (f[1] = c,
                            a[g] = f.join(":")),
                            h = d = !0) : 2 > f.length && (a.splice(g, 1),
                            h = !0);
                h && (b = a.join("&"));
                !d && c && (0 < b.length && (b += "&"),
                    b += e + ":" + c);
                return b
            }

            var k = s.ue || {}, t = 3024E7, n = ue_csm.document || l.document, r = null, d;
            a: {
                try {
                    d = l.localStorage;
                    break a
                } catch (u) {
                    console.log("error:" + u.message)
                }
                d = void 0
            }
            k.count && k.count("csm.cookieSize", document.cookie.length);
            k.cookie = {
                get: p,
                set: m,
                updateCsmHit: function (b, e, c) {
                    try {
                        var a;
                        if (!(a = r)) {
                            var f;
                            a: {
                                try {
                                    if (d && d.getItem) {
                                        f = d.getItem("csm-hit");
                                        break a
                                    }
                                } catch (k) {
                                    console.log("error:" + k.message)
                                }
                                f = void 0
                            }
                            a = f || p("csm-hit") || "{}"
                        }
                        a = q(a, b, e);
                        r = a = q(a, "t", +new Date);
                        try {
                            d && d.setItem && d.setItem("csm-hit", a)
                        } catch (h) {
                            console.log("error:" + h.message)
                        }
                        m("csm-hit", a, c)
                    } catch (g) {
                        console.log("error:" + g.message)
                        "function" == typeof l.ueLogError && ueLogError(Error("Cookie manager: " + g.message), {
                            logLevel: "WARN"
                        })
                    }
                }
            }
        }
    )(ue_csm, window);

    (function (l, e) {
            function c(b) {

                b = "";
                var c = a.isBFT ? "b" : "s"
                    , d = "" + a.oid
                    , g = "" + a.lid
                    , h = d;
                d != g && 20 == g.length && (c += "a",
                    h += "-" + g);
                a.tabid && (b = a.tabid + "+");
                b += c + "-" + h;
                b != f && 100 > b.length && (f = b,
                    a.cookie ? a.cookie.updateCsmHit(m, b + ("|" + +new Date)) : e.cookie = "csm-hit=" + b + ("|" + +new Date) + n + "; path=/")
            }

            update_cookie = c

            function p() {
                f = 0
            }

            function d(b) {
                !0 === e[a.pageViz.propHid] ? f = 0 : !1 === e[a.pageViz.propHid] && c({
                    type: "visible"
                })
            }

            var n = "; expires=" + (new Date(+new Date + 6048E5)).toGMTString(), m = "tb", f, a = l.ue || {},
                k = a.pageViz && a.pageViz.event && a.pageViz.propHid;
            a.attach && (a.attach("click", c),
                a.attach("keyup", c),
            k || (a.attach("focus", c),
                a.attach("blur", p)),
            k && (a.attach(a.pageViz.event, d, e),
                d({})));
            a.aftb = 1
        }
    )(ue_csm, ue_csm.document);

    ue_csm.ue.stub(ue, "impression");

    ue.stub(ue, "trigger");

    if (window.ue && uet) {
        uet('bb');
    }

}



getCookie = function (cookie){
    document.cookie = cookie
    update_cookie("")
    console.log(document.cookie)
    return document.cookie
}

getCookie('csm-hit=tb:s-WJW4SQY7V4SFW9800MJAB|1685688917033&t:1685688917033;expires=Fri, 17 May 2024 06:55:17 GMT;path=/')