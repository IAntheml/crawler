"""
验证码: 实际上是一个加大难度的签名验证

pip install pillow

滑块验证的图片缺口识别方式：
方式一： 人工智能识别 pip install ddddocr
方式二： 识别平台识别
方式三： obcv处理矩阵识别

操作滑块的方式：
方式一：自动化
方式二：扣js代码
"""

"""
极验滑块验证实战
"""
"""
点击验证之前的请求
1. 地址：https://www.geetest.com/demo/slide-float.html
2. 请求分析：
    请求1：https://www.geetest.com/demo/slide-float.html，返回静态页面
    请求2：https://apps.bdimg.com/libs/jquery/1.9.1/jquery.js 返回一个js
    请求3：https://www.geetest.com/demo/libs/gt.js 返回一个js
    请求4：https://www.geetest.com/demo/gt/register-slide?t=1683881968444
        载荷：时间戳
        返回：
                {
                    "success": 1,
                    "challenge": "d6df0dcc4f842cf33bc5ef798d5a600d",
                    "gt": "019924a82c70bb123aae90d483087f94",
                    "new_captcha": true
                }
    请求5：https://apiv6.geetest.com/gettype.php
        载荷：（请求4返回的gt+时间戳）
        {
            "gt": "019924a82c70bb123aae90d483087f94",
            "callback": "geetest_1683881974384"
        }
        返回：
        {
            "status": "success",
            "data": {
                "type": "fullpage",
                "static_servers": [
                    "static.geetest.com/",
                    "dn-staticdown.qbox.me/"
                ],
                "beeline": "/static/js/beeline.1.0.1.js",
                "voice": "/static/js/voice.1.2.2.js",
                "click": "/static/js/click.3.0.8.js",
                "fullpage": "/static/js/fullpage.9.1.4.js",
                "slide": "/static/js/slide.7.9.0.js",
                "geetest": "/static/js/geetest.6.0.9.js",
                "aspect_radio": {
                    "slide": 103,
                    "click": 128,
                    "voice": 128,
                    "beeline": 50
                }
            }
        }
    请求6：https://static.geetest.com/static/js/fullpage.9.1.4.js，返回js
    请求7：https://apiv6.geetest.com/get.php
        载荷：（主要是一个w参数）
        {
            "gt": "019924a82c70bb123aae90d483087f94",
            "challenge": "d6df0dcc4f842cf33bc5ef798d5a600d",
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": "a0Z8fqTgpcI3Bkh0YCICMd0uFcvJP3wDx2PTdG5vgonY7(dVw1K9BgVkvgzRz(2dW)bFxPIbvbxMtyGy8oJh(LANcaJNyCl9viMM2lQpKZP326TNWUHmBGZgrGrtPgXsyVGu9qgFmvCPxad)UAtAxttq1(axsPw7CALCQ)U7Qbav9qt4pT)8(cXZxYofYsBh9Szf3T3)mc2AtsXLfovW9PN7ZjjMaajMvM9xOEmp9XnzlE1iyycQbnrTj2bNlGs7TMtcLrcmeAf7zEQFw07w2PUuFcflWDE21Tg(FHFC5QXm265A0Tgfg5uymT(Vw32GOl5n8MnPPEPAN5k91FwDTCBlMlGzOjfCyyLMhXBnRB(NcaunWqa1(4DmbP04UH2)R9)wHlJm(nncqPZ8JnTolarQQhgqH5508YezT1Y7eEFzYVnsVSm1My9qjRPEeJww(NlqpoC5FOHmI8vJL0Eq2iJInqVqyieu1ng0dEjTVy3CvACrn2tTjtPuocjCl)qUgIv7kG783JZqMO)zU27(cdTWZnDmm(81cKRH8B4tqXdQan6TnIAVWZoDlpMzvyP27XYxETdqeqBA1BLFnBHCyBm8AlZ2r7O7y0)seyuk9(S27s3WmYIasceD4gPnb4i(9N7hk8IqW0Rmyzirp5evmRBdYvpoZD16w09EN)B)cFW)wXxs(qM(Q0p0dRRsEl0adyKDwaFg4mdvgBbBWRe9WD5pOO7zEGdtrhdWbS7bv4480VfyWDm2VZFLSP6wildpnVuen7T6oE)3eAj9AuhAdZO0l6CATv)q0LhfGFG0SYoQBLCCmV(e1t0NGXTmPhZzioTBtZQRMA7wuxFlJLXS5X7p81vZbTe5(Qq)lMW7snpTlO9FDq3PuHtFQvpwQCVkLurdUYOj4WP98SoWGz6KjXiPqx6tf0hMS1Y5PBFtCCm7bp60hCgNBcV7EZtomXcK5aNFxG6SalC1Q4NHrWc)b7kFtNRStuB2KT6Kmlnydp3LYTqq5pMRnpWYw1iq2(wHrjiipwVb4H35m0cpl1Gcso0PEioLOdEObBD22whCYPqBtzSFQCzawUDYeJr4hJW3xXkiQlCfn3uxleo0JTmq06AwisL6PE8aA2DmG7NbX9mcxVlF45Byh3mi8uqRLdW0tizY79GC4j9Yy5WIiwnPWynhdQTaZAhCHLB(Ns7K34Useq0VrGz(g9vigT80munHuhPFsBTnszGQ7kg)in2ffmlA6M7hnCsvyNd(cUTDOMqLSfr9RynjJmrdqZUqJwmrGRT9L58xm34Wta71lKtDlEAhTLVMlYG2Q4xbdcN0li1hLG4Ft(PId6r(59F4PCUIpgRuHS093vff67S5lYEb1evGzhJ3RsqyOG7otunuNtZRav(Nq(zlpIFfti61(iqKTbREUws0wfy0N8BqdNwSpl0C25AFhvLgnbenjVBRFxEoQbpSj1DWBWPnnSFIPEelO8YfOO1IVN0wLzUFdkiNDaK2rj8sXZx66nGkXPncXkY3zSGEbCibW7emR(qWgpOlGdReT96fmplxRBczRJipStnFX9O7ez6HTzsbZ(E9OMIA20VO08Mhdd1D8F6MsMAz1gxC3INAEqGTyohLURxVUBB(pwG5eaWRgDPGK2DexbDGdmllsWhOOBLUt9ZhSg8G7g6P(w9nkTbZjykttLQdzTyrTObv)OMjwt5DVPANJIZQDfzhUVeajrWr8EUp9u8Z2VwBDRIM(thqKEKfbKcC2GABnh2lx(S97Jl)SK9wubTSaihKv)RXa6km5xjgIeamzRp3E4SAsuyB8Gne8ZHh77KjL8J15eaAfKLEUaCglCIGO8ykp0PbzualuMuB(9xN0Sw6Zm8URAIpaZD8v2R(KmIls87h7JZY6r1RvRvv5VXufECR2hVIrqvg1sVHLFzlfc6WClSCqRCsBzN24HPHh1PLjtlM2EPODVPCuE0hCtoybF5mgaQ4L4QuUHWEMlYfJyvw5hUUO)2WTIacaxc9bOfUKT)LC2gT)ZS5GCMEZ3WBYNqKG13KmXz9(k)JMFLRGQQaoOZTRCbvjK1Yj9xcRw..70b9edbe202abe94ce0aeaa48fa66ab5513eb453cc259f63f28ca25eb1033f70340fe1c464425f58ef303d8172be03e8281da17ffeecc1a0142fbb9ab0cd6082e2bd7d9655cd67be3341222186ec237dfcf8c69187cbd4e5b76e232656a4bbf20805f7478f100932c37f554b24bb1a56addac14c107674bac8311833ec990a96",
            "callback": "geetest_1683881975436"
        }
        返回：
        {
            "status": "success",
            "data": {
                "theme": "wind",
                "theme_version": "1.5.8",
                "static_servers": [
                    "static.geetest.com",
                    "dn-staticdown.qbox.me"
                ],
                "api_server": "api.geetest.com",
                "logo": true,
                "feedback": "https://www.geetest.com/contact#report",
                "c": [
                    12,
                    58,
                    98,
                    36,
                    43,
                    95,
                    62,
                    15,
                    12
                ],
                "s": "34674753",
                "i18n_labels": {
                    "copyright": "由极验提供技术支持",
                    "error": "网络不给力",
                    "error_content": "请点击此处重试",
                    "error_title": "网络超时",
                    "fullpage": "智能检测中",
                    "goto_cancel": "取消",
                    "goto_confirm": "前往",
                    "goto_homepage": "是否前往验证服务Geetest官网",
                    "loading_content": "智能验证检测中",
                    "next": "正在加载验证",
                    "next_ready": "请完成验证",
                    "read_reversed": false,
                    "ready": "点击按钮进行验证",
                    "refresh_page": "页面出现错误啦！要继续操作，请刷新此页面",
                    "reset": "请点击重试",
                    "success": "验证成功",
                    "success_title": "通过验证"
                }
            }
        }
"""
"""点击验证之后的请求"""
"""
请求1：https://api.geetest.com/ajax.php
    载荷:(challenge改变，w)
        {
    "gt": "019924a82c70bb123aae90d483087f94",
    "challenge": "b4c505f6dee17b49b3d7f719d0c967c6",
    "lang": "zh-cn",
    "pt": "0",
    "client_type": "web",
    "w": "pYkWnKLaW5(G1)lzagmSmEohFfRm46)HSKDmMwT8Fm82UvkfXfw8Il)SqbfySEMEmNo55UnXCU5E)SIbPVejlCZg0d9cnUmvZKtx0lytNfDJeECUWpd4ArEdovqrzgllhpcbmy0O44BLf(XnKkbwJym9Bv(dHq8pGsAIsJdmjuxfqqGc6TPWwhb6XicK(7P8jAXTef(A)EFc(4Gulcm(DbmebWklAMg0AwB2Uwv2FaK9vJLO4DKoTpRF9y)QuNdYfe3C0fUHC)qwgQL83ixLyUsgoiSKSrnjmUIlDB8OB)ug(VrvfYK175xDsl7IZ)(eEwx)ka)0QYhVraLYRgJNJN5lEq2SaWAgJoOVM)HYLWuaqnL)QSRYdGewb3Slh(iwNvGl0S6)tc7jvA2)mTviuI24iU6l1VpD61DHa2kZM0d3cwRyLIyEBk4CYO0xS8qfb2nsJrTTF6NTlWP5NYoYKuhdZ0AOTXI)Wye1Rf)W4SqYapIf6er1OKXrQAcDcQz)V0xLkmsz9p1VYDyKRD(FgmEjbS9k35hYz1N4z1SLYi5LWl9A47E1UZASiECl4Hja5lD91KGzRKfBDzOAK(RogrZM6uB9ZPDHc7hidx4CtMNnVREeob0KHtR2hA(Q9LqdoTCT431SPPUZlFWaCXzohY2mtuvejb9xVYDziK4go5AVNy9tS37LvgL8ItRkxbwSBKJUUcqh9TQo8B8tDeNFSfRCZyQkbvZ3CBXEgOhzeEe9HO8cBDl1nXsSUmtCpsISvYR7fFrrLk4LQz5qUwBIiQxJRVWhP8HG6lDHcZlHKZzFtC85ql9y(X2jF4fcrtrnTba48kBVpKLQW7(ghXo8k5j1aQBkEK(KKMPkDXS0LLielnyfgMGzG7su7WvpM4tu1yQOkt7uHDh)px3zUZdikie6kvSJnEKq7or(Z(VRRNZaOoRwoUh1)ycZIhEzpmkYB3otxNm7f6QiTqCHz4baFsxAID0l6(NkcJAV)EYLcPDWzwlTRp1SiiyoRNXp602cL4sMDaEJ5QqZVwjtjIJcbRTN)Gpz751oq8JhZTlm9sHlo)qhdrSVQORzWTK3KNqNDY(rDd53SF5pKQB95V4mmGHu5gZ3jGcdctlRyQeydXQY7gx64DihcFbu71oCjAfoB16NgaqdM(QMx)GtDC0qUXiMpz1)h4H3yXDJg7wW5gxoDXpMg8pJS4T2RxAHhfwqDuxwaRjp9YUKsRLhoXRzMAYt55dot5R5FEFqWRxp3hNeqy(1wOfcNZxGkiqInQaHvSUh)dVbMQ0HsrFdSYCFbdB6(qJ6G(ScAnRLI(4amFSWmcYhhfEjMvoewQ6qo9e9HStfyaxuaKUs0G8p68X0lTlgXCphEg3I73Q81RGnG26sRYv1yMyeHKtZwmWETpSk7QyaJ6Zsn6OU2efOcatjPcY4BVXXqF)RSZ7G6h1IhX9OlqYLjzBy(OR2jUCyRnRGH)Itnv96eXtKE1s2YJVADoYEjnNyxidgaEnNCQQwA(PHXFUYSbypnls22nG1SJoTFXn(lh(WmOUDXx0smqO(9(0GzCQAFGCV7X1V66NwbXYdzb2jbOPgQlEABGQHIC5TvaWpOs6x5qW16y(s7mLIkgZd5U70CT6MeCgVZfnxVKaQi9A1qeJdL)abq7fD1bgFIIyIU2(zAnI9yFMUGNW1cIsBlGpJZOQaf8uQju9G5QROlD0Bp(BM5Ts9zCMm(YTQSd9bpfBApCzCE8(4475shShLKPOgUttwn6ucJYbvErjBqH2MLO8ORx6lgsYSwrpQKvxOL7jBaOjh2NE0z1gW9wMvzjARshXejIlq9XVNAC4sZER7p9AMtNfOgJUqIzs8ZKG4uhd06(b4IJenFR9w92)BUBKIyhI3H(yQqZPow0pGBGaDJ7t2v(Tl1Z)EdXXXWC89iAzacjhDtR07pZKt(FWOK9oHda)L)iORbXB8Y8Zl2FtpOvVCgLc2AYqeYu02y2i1vrhzs5ELEvVcSfF1U0G3lzqnFIA4SiVCUSUBSV6MCTSN1CLBJu6(zJ8eoCEI",
    "callback": "geetest_1683882534236"
    
    返回：
    {
        "status": "success",
        "data": {
            "result": "slide"
        }
    }
}

请求2：https://static.geetest.com/static/js/slide.7.9.0.js 返回js

请求3：https://api.geetest.com/get.php
    载荷：
    {
        "is_next": "true",
        "type": "slide3",
        "gt": "019924a82c70bb123aae90d483087f94",
        "challenge": "b4c505f6dee17b49b3d7f719d0c967c6",
        "lang": "zh-cn",
        "https": "true",
        "protocol": "https://",
        "offline": "false",
        "product": "embed",
        "api_server": "api.geetest.com",
        "isPC": "true",
        "autoReset": "true",
        "width": "100%",
        "callback": "geetest_1683882535777"
    }
    返回：
        {
            "gt": "019924a82c70bb123aae90d483087f94",
            "challenge": "b4c505f6dee17b49b3d7f719d0c967c65r",
            "id": "ab4c505f6dee17b49b3d7f719d0c967c6",
            "bg": "pictures/gt/7bfaaa72b/bg/25deb3e8b.jpg",
            "fullbg": "pictures/gt/7bfaaa72b/7bfaaa72b.jpg",
            "link": "",
            "ypos": 52,
            "xpos": 0,
            "height": 160,
            "slice": "pictures/gt/7bfaaa72b/slice/25deb3e8b.png",
            "api_server": "https://api.geetest.com",
            "static_servers": [
                "static.geetest.com/",
                "dn-staticdown.qbox.me/"
            ],
            "mobile": true,
            "theme": "ant",
            "theme_version": "1.2.6",
            "template": "",
            "logo": true,
            "clean": false,
            "type": "multilink",
            "fullpage": false,
            "feedback": "https://www.geetest.com/contact#report",
            "show_delay": 250,
            "hide_delay": 800,
            "benchmark": false,
            "version": "6.0.9",
            "product": "embed",
            "https": true,
            "width": "100%",
            "show_voice": true,
            "c": [
                12,
                58,
                98,
                36,
                43,
                95,
                62,
                15,
                12
            ],
            "s": "6e537566",
            "so": 0,
            "i18n_labels": {
                "cancel": "取消",
                "close": "关闭验证",
                "error": "请重试",
                "fail": "请正确拼合图像",
                "feedback": "帮助反馈",
                "forbidden": "怪物吃了拼图，请重试",
                "loading": "加载中...",
                "logo": "由极验提供技术支持",
                "read_reversed": false,
                "refresh": "刷新验证",
                "slide": "拖动滑块完成拼图",
                "success": "sec 秒的速度超过 score% 的用户",
                "tip": "请完成下方验证",
                "voice": "视觉障碍"
            },
            "gct_path": "/static/js/gct.b71a9027509bc6bcfef9fc6a196424f5.js"
        }
请求4：https://static.geetest.com/static/js/gct.b71a9027509bc6bcfef9fc6a196424f5.js 返回js
"""
"""滑动滑块后的请求"""
"""
地址： https://api.geetest.com/ajax.php
载荷：
{
    "gt": "019924a82c70bb123aae90d483087f94",
    "challenge": "b4c505f6dee17b49b3d7f719d0c967c65r",
    "lang": "zh-cn",
    "$_BCX": "0",
    "client_type": "web",
    "w": "lMCwKQ2vqceHJ96kEEWfji9DC25zKwu)A7y(fIb(JrAM51MkMQblVfvk)JtJCOFIQYMBI7PwO4xQ(z1qPDNsYnq3VZvthUqp2EBI4wLJ(2qfatwXfd2hXP6Y0bGRsmyfL4w5gD8gBtMF5zBrkuUyr87sqZjq1gOXYyYkU2fmr6fCruB)(EYLCAWM87l82xZUtTiF00BwuqB)FSLSNrNAcrQq94RZdxhSsIGWEA4CfyYCvVbqfcBDELYXHMVuigIBASQoE3)sYeaxryxBpRvGcB8NcCbA6(eVu(qrym8wjfXFKg6K5E9sJG38rZxI0hveEcqwPHFsp97Bz6P1zfeP6VDJ208Oe5iA()DntpLsOpJqMGdW8kpVYioXA7uDpg79RCLr1Xu58BLp9rVpFvg7i3nmpiMpNC93GvLk6vWqi)epazsaQw1p86ua38MEe4P9Fl4KBj3CZ7f5u4fqMw5)vSRz0kzzpL3fWDcsNjtczdFIWUepNndbtSsobds(G4f7PT0WgjTVJD2EkEIMJAcM6gpMIbVyaoPjgLy5yyuJln193p5Iz1TKqlWLQyWIicgQfpof(Yoofeni3A3mZVoKeZBBgN9rzfD3T46clSbFixl(vcmSa7OcWqz)o4)e1xhh(3qcHcoEILzZg6DyS)eRUtlGDFjzDGzg3KFpiPeE(KEKrxZVRQpHqIcf5GoNRFkO5KdfXnBga50KSIVUNOE4g2b1jtHG4JVDHn26gkLHILitx7sImyMRP5Zhac2EJnc7)bDn8l5B02IGnmoFGarCnICbpO9uUwL5qPhxkvJLean9Av(NtQ2MWC0J1i0qLP1S21471e1c8cb4d8215ae20b0cd6a10195869f4297be9310c9ae25f1d7455d87bae6e27b8534935fc90eadb7659cde0aa7017fcffb31ac4ded6d64feedac5a47ea7b435f5d8f4f2aac85c8a4b09104fcfb78c707ff80121fb2417d4a94c5fa7ea02f53a2f58fb92d9fff3bbc5514110b09d44a61b4a8aa9e74428a362ecaf1cc74",
    "callback": "geetest_1683883032765"
}



分析： "w" = h+u
"""