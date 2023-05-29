import requests

"""
headers = {
    "Host": "api.m.jd.com",
    "j-e-h": "%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1685280663105%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22user-agent%22%3A%22b2jedRHmBzCkCJSkCJjgZQ1rbQm7YW5ucw9fZNj2ZXTzaW9kBzOmBtGkDNjsdWviZM85Czq2CNjzY3TvZW4lCJK4CRqyCJCnE29zBzu7%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D",
    "charset": "UTF-8",
    "user-agent": "okhttp/3.12.1;jdmall;android;version/10.4.4;build/93860",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
}
cookies = {
    "whwswswws": "JD012145b90GYSAivwAy1685280662178056yXkOahx6j6t9KjS2zyNvUdAhP7fxIMfyHwvREFzcnmTK6eqcKSXUC4Kj9wJ_vnpjJv7qGKUUJxQkmV3IwdA-Xv91TzmWDv_QXgEh-kYPt40lpf7x5~hl8khL-gOmsFg1QBe7KBvsHA4MDa1zBKU_40NNqcByh8UnMJYTP5KiUqXmW0TtaE7gbzB1LG-XG-nstJuofXD-c3RDSZIb_B2T69pUaIGW8Mir_o5h-mRKE1Wbm6YdvcvsIfPE88g6AfCHaF6AJW79uGcPutdj55m4P-9kwUzEIs",
    "unionwsws": "{\"devicefinger\":\"eidAffea81233esf69zWQMLtTJ6GqLRTKaULVuvc18kle3F0tbMsCPPOsnNcxWWN5m71wGNZqOmxUbpYt60ie5cZVCzuzqOARpIRdm1cmoL4Wzfhx9h3\",\"jmafinger\":\"JD012145b90GYSAivwAy1685280662178056yXkOahx6j6t9KjS2zyNvUdAhP7fxIMfyHwvREFzcnmTK6eqcKSXUC4Kj9wJ_vnpjJv7qGKUUJxQkmV3IwdA-Xv91TzmWDv_QXgEh-kYPt40lpf7x5~hl8khL-gOmsFg1QBe7KBvsHA4MDa1zBKU_40NNqcByh8UnMJYTP5KiUqXmW0TtaE7gbzB1LG-XG-nstJuofXD-c3RDSZIb_B2T69pUaIGW8Mir_o5h-mRKE1Wbm6YdvcvsIfPE88g6AfCHaF6AJW79uGcPutdj55m4P-9kwUzEIs\"}"
}
url = "https://api.m.jd.com/client.action"
params = {
    "functionId": "tip",
    "clientVersion": "10.4.4",
    "build": "93860",
    "client": "android",
    "partner": "tencent",
    "oaid": "e5962f1eb9dd1a6b",
    "eid": "eidA3e21412395l544c48d41a4bed23ea57f7e1bd873f6f43f0aad4csXRbdYiyLLGmu74ZVumOYauf7bvbhvfm7jQmCXwiAMRhb3Y4ANOMp/qSsrik",
    "sdkVersion": "28",
    "lang": "zh_CN",
    "harmonyOs": "0",
    "networkType": "wifi",
    "uemps": "0-2",
    "ext": "{\"prstate\":\"0\",\"pvcStu\":\"1\"}",
    "ef": "1",
    "ep": "{\"hdid\":\"JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=\",\"ts\":1685280661728,\"ridx\":-1,\"cipher\":{\"d_model\":\"UwVubWvEb3HvDm==\",\"wifiBssid\":\"dW5hbw93bq==\",\"osVersion\":\"EG==\",\"d_brand\":\"WQvrb21f\",\"screen\":\"CtOzCIenCNqm\",\"uuid\":\"ZJq0CNZvEWDtYzCzY2DrZq==\",\"aid\":\"ZJq0CNZvEWDtYzCzY2DrZq==\"},\"ciphertype\":5,\"version\":\"1.2.0\",\"appname\":\"com.jingdong.app.mall\"}",
    "bef": "1",
    "st": "1685281278962",
    "sign": "73f3e4418df9c71b401f4bd7f18384de",
    "sv": "122"
}
data = {
    "body": "{\"hdid\":\"JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=\",\"ts\":1685281278963,\"ridx\":-1,\"cipher\":{\"body\":\"oyTxdWVzc1dlcwHQbQPxStesCMSiSwjvoXdlcwGsEsBetSXvt7KsBMTiYXD0a2V5StesSsmsbQ9tJQP0StfkdWniBMTib2DCbwcsEw51bQmiSxL2aWGsEsSzY2TwYtu5CNG5DJK0EQZwYtGyCzSyYJTrCtHsYtLuCyT9\"},\"ciphertype\":5,\"version\":\"1.2.0\",\"appname\":\"com.jingdong.app.mall\"}",
    "": ""
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)

"""

import requests

import ctypes


def r(data_string):
    def int_overflow(val):
        maxint = 2147483647
        if not -maxint - 1 <= val <= maxint:
            val = (val + (maxint + 1)) % (2 * (maxint + 1)) - maxint - 1
        return val

    def unsigned_right_shitf(n, i):
        # 数字小于0，则转为32位无符号uint
        if n < 0:
            n = ctypes.c_uint32(n).value
        # 正常位移位数是为正数，但是为了兼容js之类的，负数就右移变成左移好了
        if i < 0:
            return -int_overflow(n << abs(i))
        # print(n)
        return int_overflow(n >> i)

    char_list = []
    aae = ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'U', 'V',
           'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'e', 'f', 'g', 'h',
           'i', 'j', 'k', 'l', 'm', 'n', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/']
    bArr = data_string.encode('utf-8')
    for i in range(0, len(bArr), 3):
        bArr2 = [None for i in range(4)]
        b2 = 0
        for i2 in range(0, 3):
            i3 = i + i2
            if i3 <= len(bArr) - 1:
                bArr2[i2] = b2 | unsigned_right_shitf((bArr[i3] & 255), ((i2 * 2) + 2))
                b2 = unsigned_right_shitf(((bArr[i3] & 255) << (((2 - i2) * 2) + 2)) & 255, 2)
            else:
                bArr2[i2] = b2
                b2 = 64
        bArr2[3] = b2
        for i4 in range(4):
            if bArr2[i4] <= 63:
                char_list.append(aae[bArr2[i4]])
            else:
                char_list.append("=")

    return "".join(char_list)

ep = {
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "ts": 1685280661728,
    "ridx": -1,
    "cipher": {
        "d_model": "UwVubWvEb3HvDm==",
        "wifiBssid": "dW5hbw93bq==",
        "osVersion": "EG==",
        "d_brand": "WQvrb21f",
        "screen": "CtOzCIenCNqm",
        "uuid": "ZJq0CNZvEWDtYzCzY2DrZq==",
        "aid": "ZJq0CNZvEWDtYzCzY2DrZq=="
    },
    "ciphertype": 5,
    "version": "1.2.0",
    "appname": "com.jingdong.app.mall"
}

headers = {
    "Host": "api.m.jd.com",
    "j-e-h": "%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1685280663105%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22user-agent%22%3A%22b2jedRHmBzCkCJSkCJjgZQ1rbQm7YW5ucw9fZNj2ZXTzaW9kBzOmBtGkDNjsdWviZM85Czq2CNjzY3TvZW4lCJK4CRqyCJCnE29zBzu7%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D",
    "charset": "UTF-8",
    "user-agent": "okhttp/3.12.1;jdmall;android;version/10.4.4;build/93860",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
}

cookies = {
    "whwswswws": "JD012145b90GYSAivwAy1685280662178056yXkOahx6j6t9KjS2zyNvUdAhP7fxIMfyHwvREFzcnmTK6eqcKSXUC4Kj9wJ_vnpjJv7qGKUUJxQkmV3IwdA-Xv91TzmWDv_QXgEh-kYPt40lpf7x5~hl8khL-gOmsFg1QBe7KBvsHA4MDa1zBKU_40NNqcByh8UnMJYTP5KiUqXmW0TtaE7gbzB1LG-XG-nstJuofXD-c3RDSZIb_B2T69pUaIGW8Mir_o5h-mRKE1Wbm6YdvcvsIfPE88g6AfCHaF6AJW79uGcPutdj55m4P-9kwUzEIs",
    "unionwsws": "{\"devicefinger\":\"eidAffea81233esf69zWQMLtTJ6GqLRTKaULVuvc18kle3F0tbMsCPPOsnNcxWWN5m71wGNZqOmxUbpYt60ie5cZVCzuzqOARpIRdm1cmoL4Wzfhx9h3\",\"jmafinger\":\"JD012145b90GYSAivwAy1685280662178056yXkOahx6j6t9KjS2zyNvUdAhP7fxIMfyHwvREFzcnmTK6eqcKSXUC4Kj9wJ_vnpjJv7qGKUUJxQkmV3IwdA-Xv91TzmWDv_QXgEh-kYPt40lpf7x5~hl8khL-gOmsFg1QBe7KBvsHA4MDa1zBKU_40NNqcByh8UnMJYTP5KiUqXmW0TtaE7gbzB1LG-XG-nstJuofXD-c3RDSZIb_B2T69pUaIGW8Mir_o5h-mRKE1Wbm6YdvcvsIfPE88g6AfCHaF6AJW79uGcPutdj55m4P-9kwUzEIs\"}"
}

url = "https://api.m.jd.com/client.action"

params = {
    "functionId": "backupKeywords",
    "clientVersion": "10.4.4",
    "build": "93860",
    "client": "android",
    "partner": "tencent",
    "oaid": "e5962f1eb9dd1a6b",
    "eid": "eidA3e21412395l544c48d41a4bed23ea57f7e1bd873f6f43f0aad4csXRbdYiyLLGmu74ZVumOYauf7bvbhvfm7jQmCXwiAMRhb3Y4ANOMp/qSsrik",
    "sdkVersion": "28",
    "lang": "zh_CN",
    "harmonyOs": "0",
    "networkType": "wifi",
    "uemps": "0-2",
    "ext": "{\"prstate\":\"0\",\"pvcStu\":\"1\"}",
    "ef": "1",
    "ep": "{\"hdid\":\"JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=\",\"ts\":1685280661728,\"ridx\":-1,\"cipher\":{\"d_model\":\"UwVubWvEb3HvDm==\",\"wifiBssid\":\"dW5hbw93bq==\",\"osVersion\":\"EG==\",\"d_brand\":\"WQvrb21f\",\"screen\":\"CtOzCIenCNqm\",\"uuid\":\"ZJq0CNZvEWDtYzCzY2DrZq==\",\"aid\":\"ZJq0CNZvEWDtYzCzY2DrZq==\"},\"ciphertype\":5,\"version\":\"1.2.0\",\"appname\":\"com.jingdong.app.mall\"}",
    "st": "1685281455598",
    "sign": "4663125c16e6839d22f1191c6c032042",
    "sv": "121"
}

data = {
    "body": "{\"keyword\":\"茅台\"}",
    "": ""
}

response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)