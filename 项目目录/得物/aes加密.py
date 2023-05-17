from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64


def aes_encrypt(data_string):
    key = "d245a0ba8d678a61"
    aes = AES.new(
        key=key.encode('utf-8'),
        mode=AES.MODE_ECB,
    )
    raw = pad(data_string.encode('utf-8'), 16)
    return aes.encrypt(raw)


data_string = "loginTokenplatformandroidtimestamp1654007179041title阿uuidc71e2a6d5ab50586v4.74.5"
res = aes_encrypt(data_string)
value = base64.encodebytes(res)
result = value.replace(b"\n", b'')
print(result)
