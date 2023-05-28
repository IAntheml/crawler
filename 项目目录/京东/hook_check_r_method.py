import frida
import sys

rdev = frida.get_remote_device()
session = rdev.attach("com.jingdong.app.mall")

scr = """
Java.perform(function () {
     function showMap(title,map){
        var result = "{";
        var keyset = map.keySet();
        var it = keyset.iterator();
        while(it.hasNext()){
            var keystr = it.next().toString();
            var valuestr = map.get(keystr).toString();
            result += '"' + keystr + '"';
            result += ":";
            result +=  '"' + valuestr + '"';
            result += ",";
        }
        result += "}";
        console.log(title, result);
    }

    var EncryptTool = Java.use("com.jingdong.common.network.encrypt.EncryptTool");
    EncryptTool.encrypt.implementation = function(map){
        console.log("-----------------------");
        showMap("map字典->", map);
        var res = this.encrypt(map);
        console.log('返回值-->',res);
        // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
        return res;
    }

});
"""
script = session.create_script(scr)


def on_message(message, data):
    print(message, data)


script.on("message", on_message)
script.load()
sys.stdin.read()