window = global;
document = {}
document.cookie = "session-id=142-0824655-9537948; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=132-1509104-8027665"
oldCookie = null
h = a.oid
g = a.lid
b = "tb"
h += "-" + g
e = "s" + "-" + h
e = "s-FH2WMW9RQ64XARPV4HWK|1685674314596"
c = undefined
updateCsmHit = function (b, e, c) {
    try {
        var a;
        if (!(a = r)) {
            var f;
            a: {
                try {
                    f = oldCookie;
                    break a
                } catch (k) {
                }
                f = void 0
            }
            a = f || p("csm-hit") || "{}"
        }
        a = q(a, b, e);
        r = a = q(a, "t", +new Date);
        // try {
        //     d && d.setItem && d.setItem("csm-hit", a)
        // } catch (h) {
        // }
        m("csm-hit", a, c)
    } catch (g) {
        "function" == typeof l.ueLogError && ueLogError(Error("Cookie manager: " + g.message), {
            logLevel: "WARN"
        })
    }
}

function p(b) {
    b += "=";
    for (var e = oldCookie.split(";"), c = 0; c < e.length; c++) {
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

function m(b, e, c) {
    c = c || new Date(+new Date + t);
    c = "expires=" + c.toUTCString();
    n.cookie = b + "=" + e + ";" + c + ";path=/"
}

b = "tb", e = "s-FH2WMW9RQ64XARPV4HWK|1685674314596", c = undefined

b = "";
var c = a.isBFT ? "b" : "s"
    , d = "" + a.oid
    , g = "" + a.lid
    , h = d;
d != g && 20 == g.length && (c += "a",
    h += "-" + g);