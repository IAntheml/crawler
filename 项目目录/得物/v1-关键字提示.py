import time
import requests
import datetime
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64
import json
import random


def create_shu_mei_id():
    v1 = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    v2 = create_android_id(25)
    return "{}{}".format(v1, v2)


def create_android_id(size=9):
    data_list = []
    for i in range(1, size):
        part = "".join(random.sample("0123456789ABCDEF", 2))
        data_list.append(part)
    return "".join(data_list).lower()


def md5(data_bytes):
    hash_object = hashlib.md5()
    hash_object.update(data_bytes)
    return hash_object.hexdigest()


def aes_encrypt(data_string):
    key = "d245a0ba8d678a61"
    aes = AES.new(
        key=key.encode('utf-8'),
        mode=AES.MODE_ECB,
    )
    raw = pad(data_string.encode('utf-8'), 16)
    return aes.encrypt(raw)


def get_headers(uid, ctime, x_auth_token):
    return {
        "duuuid": uid,
        # "duimei": "008796750031188",
        "duplatform": "android",
        "appId": "duapp",
        "duchannel": "pp",
        "humeChannel": "",
        "duv": "4.74.5",
        "duloginToken": "",
        "dudeviceTrait": "MI+6+Plus",
        "dudeviceBrand": "Xiaomi",
        "timestamp": ctime,
        "shumeiid": create_shu_mei_id(),
        "oaid": "",
        "User-Agent": "duapp/4.74.5(android;6.0.1)",
        "X-Auth-Token": x_auth_token,
        "isRoot": "0",
        "emu": "1",
        "isProxy": "0",
        "Content-Type": "application/json; charset=utf-8",
    }


def encrypt_add_sign(data_dict):
    ordered_string = "".join(["{}{}".format(key, data_dict[key]) for key in sorted(data_dict.keys())])
    aes_string = aes_encrypt(ordered_string)
    aes_string = base64.encodebytes(aes_string)
    aes_string = aes_string.replace(b"\n", b"")
    sign = md5(aes_string)
    data_dict['newSign'] = sign


def get_x_auth_token(uid):
    ctime = str(int(time.time() * 1000))
    param_dict = {
        "loginToken": "",
        "platform": "android",
        "timestamp": ctime,
        "uuid": uid,
        "v": "4.74.5"
    }

    encrypt_add_sign(param_dict)

    res = requests.post(
        url="https://app.dewu.com/api/v1/app/user_core/users/getVisitorUserId",
        headers=get_headers(uid, ctime, ""),
        json=param_dict
    )
    x_auth_token = res.headers['X-Auth-Token']
    return x_auth_token


def search_key(word, uid, x_auth_token):
    ctime = str(int(time.time() * 1000))
    param_dict = {
        "loginToken": "",
        "platform": "android",
        "timestamp": ctime,
        "uuid": uid,
        "v": "4.74.5",
        "word": word,
        # "newSign":"xx"
    }

    encrypt_add_sign(param_dict)

    res = requests.post(
        url="https://app.dewu.com/sns-rec/v1/search/prompt",
        headers=get_headers(uid, ctime, x_auth_token),
        json=param_dict
    )

    goods_dict = res.json()
    print(goods_dict)


def run():
    word = "耐"

    # duuuid/uuid
    uid = create_android_id()

    x_auth_token = get_x_auth_token(uid)

    search_key(word, uid, x_auth_token)


if __name__ == '__main__':
    run()
