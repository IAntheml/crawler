import requests

url = "http://q.10jqka.com.cn/index/index/board/ss/field/zdf/order/desc/page/1/ajax/1/"

headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    # "Cookie": "v=A_hhzKio6BC3owSEW7oG4LgVya2PYV-vvsEwZzJrR1vn-JYT2nEsew7VAa6B",
    "Host": "q.10jqka.com.cn",
    "Pragma": "no-cache",
    "Referer": "http://q.10jqka.com.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    # "hexin-v": "A_hhzKio6BC3owSEW7oG4LgVya2PYV-vvsEwZzJrR1vn-JYT2nEsew7VAa6B"
}

response = requests.get(url=url, headers=headers)
print(response.status_code)
print(response.text)