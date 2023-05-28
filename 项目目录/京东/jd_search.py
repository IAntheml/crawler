import requests

url = "https://api.m.jd.com/client.action"
headers = {
    "Host": "api.m.jd.com",
    "j-e-h": "%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1685279131361%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22user-agent%22%3A%22b2jedRHmBzCkCJSkCJjgZQ1rbQm7YW5ucw9fZNj2ZXTzaW9kBzOmBtGkDNjsdWviZM85Czq2CNjzY3TvZW4lCJK4CRqyCJCnE29zBzu7%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D",
    "charset": "UTF-8",
    "user-agent": "okhttp/3.12.1;jdmall;android;version/10.4.4;build/93860",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
}
cookies = {
    "whwswswws": "JD012145b9RjRyPVK7Hy168527913103803Fi2h83zXlIMYTWy4Y6fFIVe2j6DA68wQXQRZP5kI0ZP0TuwjiRukTRQIbZPv1Y-ji5DlI3RgUqV9TZFY_dDQAg3uc7N90u-q1ladspk~fl8khL-gOmsFg1QBe7KBvsHA4MDa1zBKU_40NNqcByh8UnMJYTP5KiUqXmW0TtaE7rWzOyDlOySLO4crFU7K7efZW9Ib1FV1PmcXgScy4fz7s55IVz8TEd8ZO7B1xG_XwbPuFvtE-2x4rD6AHs4X1tDgdjmqCDHp146pxbCLat3A",
    "unionwsws": "{\"devicefinger\":\"eidA01fe812315sfNEP38talTkWmQBQ2FqHwbjRD+Xs5HBSyggbaX2PxOhEqry0SXv5k2zNQuOvU5NeFp2W8euejYAVDxMiBw8x5LHSbaLbliMk9Jkpi\",\"jmafinger\":\"JD012145b9RjRyPVK7Hy168527913103803Fi2h83zXlIMYTWy4Y6fFIVe2j6DA68wQXQRZP5kI0ZP0TuwjiRukTRQIbZPv1Y-ji5DlI3RgUqV9TZFY_dDQAg3uc7N90u-q1ladspk~fl8khL-gOmsFg1QBe7KBvsHA4MDa1zBKU_40NNqcByh8UnMJYTP5KiUqXmW0TtaE7rWzOyDlOySLO4crFU7K7efZW9Ib1FV1PmcXgScy4fz7s55IVz8TEd8ZO7B1xG_XwbPuFvtE-2x4rD6AHs4X1tDgdjmqCDHp146pxbCLat3A\"}"
}

params = {
    "functionId": "search",
    "clientVersion": "10.4.4",
    "build": "93860",
    "client": "android",
    "partner": "tencent",
    "oaid": "e5962f1eb9dd1a6b",
    "eid": "eidAb4c241211dl544abb83422a656d0142c43ba685a9ea0730e5f6cP3OpiNrIfIeX8F3TeF RwgHDJLuYwOVEdJhBDnc2QJQyMRCPPmlF9lOycx6T",
    "sdkVersion": "28",
    "lang": "zh_CN",
    "harmonyOs": "0",
    "networkType": "wifi",
    "uemps": "0-2",
    "ext": "{\"prstate\":\"0\",\"pvcStu\":\"1\"}",
    "ef": "1",
    "ep": "{\"hdid\":\"JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=\",\"ts\":1685279130504,\"ridx\":-1,\"cipher\":{\"d_model\":\"UwVubWvEb3HvDm==\",\"wifiBssid\":\"dW5hbw93bq==\",\"osVersion\":\"EG==\",\"d_brand\":\"WQvrb21f\",\"screen\":\"CtOzCIenCNqm\",\"uuid\":\"ZJq0CNZvEWDtYzCzY2DrZq==\",\"aid\":\"ZJq0CNZvEWDtYzCzY2DrZq==\"},\"ciphertype\":5,\"version\":\"1.2.0\",\"appname\":\"com.jingdong.app.mall\"}",
    "bef": "1",
    "st": "1685279152526",
    "sign": "f0947a7c2d5cd97bb4a6db160f547e19",
    "sv": "120"
}
data = {
    "body": "{\"hdid\":\"JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=\",\"ts\":1685279152527,\"ridx\":-1,\"cipher\":{\"body\":\"oyTrZQHyHwvidQVyStesCISiSwPydQvtbQVPc3DroIS6StOsBMTuZXZfY2VfZPHraWmsEsS2DMSiSwV4cQ9zZWHNb3VkdMS6StKsBMTwcw9kdOV4cQvucyS6SuZpCP8mSsmsaW1rZ2VzaXfvStf7SwdyaWHTbWcsEsS1CzP4DJCnSsmsbQvzdOvjZyS6StC1ERqzDJqsBMTib25xIW1xStesDJCnoNcmEMT9BMTfbxDvcxHLcxHfY2nvStesCISiSwvkc2VydPDtZW5vStesCISiSwvkc2VydQVuG291bxGsEsSmSsmsaXDNb3TyZWD0StesCISiSwfudsS6StL8YXLmbWPya2V0pRHpCtKnENUnCtUyDV9rcRLjYXThZXH8dRVfZ3Vrbwd8DJK5DtZpCP90ZW5tZW50XzLpCRmnDtq1Ctc5CJCzSsmsa2V5d29yZMS6SkaTs+acksSiSwnlY2PiJxVjStesCMSiSw5vd01fZQHiZVHrZyS6StOsBMTkZXdWZXTzaW9kStesCySiSw9kZUTloO1lZMS6StOsBMTlcwvxbwPiU2VrcwDeStesCISiSw9yaWdkYWnJZWnvY3GsEsSnSsmscQPxZIS6StOsBMTmYWdvHW50cwPkY2UsEsSnSsmscQPxZXDfowUsEsSnCMSiSxL2aWGsEsSsBMTzZWPyY2rWZXTzaW9kG29uZIS6Stu1CJKsBMTzZWDlbwHTbxDvZODldW50StesCMSiSxDeb3dJaQ9mVQPsStesoWVzSsmsc2rld1D0b3TvVQPsStesCISiSxD0b2DhStesCIT9\"},\"ciphertype\":5,\"version\":\"1.2.0\",\"appname\":\"com.jingdong.app.mall\"}",
    "": ""
}
# response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)