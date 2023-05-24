# com.shizhuang.duapp
import time

import frida
import sys

app_package_name = "com.shizhuang.duapp"
device = frida.get_remote_device()


try:
    process = device.attach(app_package_name)
    print("App已经启动")
except frida.ProcessNotFoundError:
    print("App未启动，开始启动APP...")
    pid = device.spawn([app_package_name])
    device.resume(pid)
    time.sleep(1)
    process = frida.get_remote_device().attach(app_package_name)

scr = """
let MerchantCheckNotifierDialog = Java.use("com.shizhuang.duapp.modules.userv2.setting.user.ui.MerchantCheckNotifierDialog");
MerchantCheckNotifierDialog["a"].implementation = function (activity) {
    console.log('a is called' + ', ' + 'activity: ' + activity);
    let ret = this.a(activity);
    console.log('a ret value is ' + ret);
    return ret;
};
"""

scr_1 = """
let CheckNotifier = Java.use("com.shizhuang.duapp.libs.update.base.CheckNotifier");
CheckNotifier["a"].overload('android.app.Activity').implementation = function (activity) {
    console.log('a is called' + ', ' + 'activity: ' + activity);
    let ret = this.a(activity);
    console.log('a ret value is ' + ret);
    return ret;
};
"""

def on_message(message, data):
    print(message, data)


script = process.create_script(scr_1)
script.on("message", on_message)
script.load()
sys.stdin.read()


"""
function foo(clz){
    console.log(clz)
}
Java.perform(function(){
    Java.choose("dalvik.system.PathClassLoader",{
        onMatch: function(instance){
            console.log(instance)
            console.log(Java.ClassFactory)
            var factory = Java.ClassFactory.get(instance)
            try{
                var myClass = factory.use("myClass")
                foo(myClass)
                return "stop"
            }catch(e){
                console.log("next")
                console.log(e)
            }
        },
        onComplete:function(){
            console.log("Done")
        }
    })
})

"""
