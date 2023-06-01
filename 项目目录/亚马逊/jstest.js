b = function (a, c, d, e, b, l, v, r) {
    function u(a) {
        return a && "object" === typeof a && "default" in a ? a : {
            "default": a
        }
    }

    function h(a) {
        var b = function (g) {
            var d = b.trackingApplicable
                , k = b.trackingParams
                , H = b.trackingStandalone
                , e = m + a
                , n = {
                "page-type": I["page-type"]
            };
            L !== J && (H && (e += -1 !== e.indexOf("?") ? "\x26track\x3dtrue" : "/track"),
                n = c.__assign(c.__assign({}, n), (d ? K(L, k || {}) : L) || {}));
            M && (n = c.__assign(c.__assign({}, n), {
                stamp: M
            }));
            d = [];
            for (var h in n)
                n.hasOwnProperty(h) && (k = n[h],
                    d.push(encodeURIComponent(h) + "\x3d" + encodeURIComponent(k)));
            e += (-1 !== e.indexOf("?") ? "\x26" : "?") + d.join("\x26");
            return w(e, a, g, y)
        };
        b.factoryClone = function (b) {
            var c = h(a);
            b && (c.trackingParams = b.trackingParams || {},
                c.trackingStandalone = b.trackingStandalone,
                c.trackingApplicable = b.trackingApplicable);
            return c
        }
        ;
        return b
    }

    function q(a, b) {
        0 < b.length && b.forEach(function (b) {
            a[b] = h(b)
        })
    }

    function p(a) {
        void 0 === a && (a = []);
        q(N, a);
        return N
    }

    var t = u(d), B = u(e), E = u(b), A = u(l), C = u(v), z = u(r), F = function (a) {
        return a && "AjaxError" === a.type
    }, w = function (a, b, c, d) {
        a = B["default"].post(a, {
            accepts: "text/html, application/json",
            contentType: "application/json",
            additionalHeaders: {
                "x-amz-acp-params": d
            }
        }, c);
        a.then(function () {
            n(b, "success")
        }, function (a) {
            if (F(a)) {
                var c = a.statusCode;
                "Request Timeout" === a.statusText ? n(b, "timeout") : n(b, "error", c)
            } else
                "Ajax request aborted" === a && n(b, "abort")
        });
        return E["default"].promise(a.then(function (a) {
            var b = a.contentType;
            a = a.responseBody;
            if ("NO-CONTENT-TYPE-FOUND" !== b || a) {
                if ("application/json" === b)
                    return a || {};
                if ("text/html" === b)
                    try {
                        var c = (new DOMParser).parseFromString(a, "text/html").querySelector("body").firstElementChild;
                        return C["default"].proxify(c, c)
                    } catch (V) {
                        throw Error("Error encountered when parsing html response: " + V);
                    }
                else
                    throw Error("Unexpected content-type found when parsing response: " + b);
            }
        }))
    }, n = function (a, b, c) {
        x(A["default"].count, "mix:remoteOperations", b, c);
        x(z["default"].count, "remoteOperations:" + a, b, c)
    }, x = function (a, b, c, d) {
        "success" === c ? a(b + ":attempt", 1) : (a(b + ":attempt", 0),
            a(b + ":error:" + (d || c), 1))
    }, D = /[-_]$/, G = /^[-_]/, H = {
        hitType: "pageTouch",
        pageAssemblyType: "main"
    }, I = (d = f.uept) ? {
        "page-type": d.pageType,
        "sub-page-type": d.subPageType
    } : {}, K = function (a, b) {
        var d = b.refSuffix
            , g = b.ref_;
        b = c.__rest(b, ["refSuffix", "ref_"]);
        var k = a.ref_ || "";
        g = g || "";
        d = d || "";
        var m = k;
        g ? m = g : d && (g = k.match(D) || d.match(G),
            m = [k, d].join(g ? "" : "_"));
        k = (k = m) ? {
            ref_: k
        } : {};
        return c.__assign(c.__assign(c.__assign(c.__assign(c.__assign({}, I), a), b), k), H)
    }, g = function () {
        return "Bad data-acp-tracking value."
    }, m, y, L, M, N = {};
    a.default = {
        setup: p
    };
    a.initialize = function (a, b, c) {
        if ((a = t["default"].cardRoot) && a.hasAttribute("data-acp-path") && a.hasAttribute("data-acp-params")) {
            m = a.getAttribute("data-acp-path") || "";
            b = a.getAttribute("data-acp-params") || "";
            try {
                var d = document.createElement("textarea");
                d.innerHTML = b;
                y = 0 === d.childNodes.length ? "" : d.childNodes[0].nodeValue || ""
            } catch (P) {
                throw Error("Issue encountered while parsing card attributes when setting up RemoteOperations, error: " + P);
            }
            a.removeAttribute("data-acp-path");
            a.removeAttribute("data-acp-params");
            a.hasAttribute("data-acp-stamp") && (M = a.getAttribute("data-acp-stamp") || "",
                a.removeAttribute("data-acp-stamp"))
        } else
            throw Error("Remote Operation capability requires card root node to exist and have attribute: data-acp-path \x26 data-acp-params");
        a: {
            if (t["default"].cardRoot.hasAttribute("data-acp-tracking"))
                try {
                    L = JSON.parse(t["default"].cardRoot.getAttribute("data-acp-tracking"));
                    break a
                } catch (P) {
                    f.P.logError(P, P instanceof SyntaxError ? "" + g : null, "ERROR")
                }
            L = J
        }
        c._operationNames && q(N, c._operationNames)
    }
    ;
    a.isAjaxError = F;
    a.setup = p;
    Object.defineProperty(a, "__esModule", {
        value: !0
    })
}
