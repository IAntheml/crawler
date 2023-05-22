/*
APP版本
    V5.32.1

1. 抓包工具判断参数是否需要逆向的方式：重发

2. URL转义：将汉字转化为url中的%...
from urllib.parse import unquote_plus, quote_plus

补充： "k3":'{"name":"xxx","age":"xxxx"}'
可以通过如下实现：
info_dict = {"name":"xxx","age":"xxxx"}
res = requests.post{
    url="...",
    data={
        "k3":json.dumps(info_dict, separators=(',',":")) #可以去除json.dumps产生的多余空格
    }
}
 */


/*
encrypt本地方法
 */


/*
x-zse-96逆向使用到WebView，本质上是App中嵌套html和css
    注意，hook时发现android_webview代表使用了webView
 */