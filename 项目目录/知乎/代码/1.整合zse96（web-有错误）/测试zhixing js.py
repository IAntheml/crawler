import os
import execjs

os.environ["NODE_PATH"] = "/usr/local/lib/node_modules/"
with open('sdk.js', mode='r', encoding='utf-8') as f:
    js = f.read()

ct = execjs.compile(js).call("get_sign", "e92a2d3af6a523ad669f4a3b1ac6f3f4")
zse96 = "2.0_" + ct
print(zse96)
