# com.shizhuang.duapp
import frida
import sys

rdev = frida.get_remote_device()
session = rdev.attach("com.shizhuang.duapp")

scr = """
Java.perform(function () {
    var AESEncrypt = Java.use("com.duapp.aesjni.AESEncrypt");
    
    AESEncrypt.encode.overload('java.lang.Object', 'java.lang.String').implementation = function(obj,str){
        console.log("9999");
        
        // 输出调用栈
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
        var res = this.encode(obj,str);
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
