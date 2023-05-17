# com.shizhuang.duapp
import frida
import sys

rdev = frida.get_remote_device()
session = rdev.attach("com.shizhuang.duapp")

scr = """
Java.perform(function () {
    # 找so文件和导出函数
    var addr_func = Module.findExportByName("libJNIEncrypt.so", "AES_128_ECB_PKCS5Padding_Encrypt");
    # 对这个导出函数所在的地址拦截
    Interceptor.attach(addr_func, {
        # 进入这个函数时 
        onEnter: function(args){
            console.log("-------------执行函数-------------");

            console.log("-------------参数 1-------------");
            console.log(args[0].readUtf8String())

            console.log("-------------参数 2-------------");
            console.log(args[1].readUtf8String());
        },
        # 离开函数的时候执行
        onLeave: function(retValue){
            console.log("-------------返回-------------");
            console.log(retValue.readUtf8String());
        }

    })

});
"""
script = session.create_script(scr)


def on_message(message, data):
    print(message, data)


script.on("message", on_message)
script.load()
sys.stdin.read()
