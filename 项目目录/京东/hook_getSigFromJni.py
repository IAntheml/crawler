"""

Hook获取sign的本地方法的传入参数：

package com.jingdong.common.utils;

public class BitmapkitUtils {

    public static native String getSignFromJni(Context context, String str, String str2, String str3, String str4, String str5);

}
"""
import frida
import sys

rdev = frida.get_remote_device()
session = rdev.attach("com.jingdong.app.mall")

scr = """
Java.perform(function () {

    var BitmapkitUtils = Java.use("com.jingdong.common.utils.BitmapkitUtils");


    BitmapkitUtils.getSignFromJni.implementation = function(ctx,str,str2,str3,str4,str5){
        console.log("=================");
        console.log("str=",str);
        console.log("str2=",str2);
        console.log("str3=",str3);
        console.log("str4=",str4);
        console.log("str5=",str5);
        var res = this.getSignFromJni(ctx,str,str2,str3,str4,str5);
        console.log("返回值=",res);
        console.log("=================");
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