"""
python编写+js代码

pip install frida==14.2.18
pip install frida-tools==9.2.5

手机上安装的frida需要和pc一致，都为14.2.18

https://github.com/frida/frida/releases?page=8
- frida-server
    可以通过右边命令获取cpu架构： adb -s 设备名 shell getprop ro.product.cpu.abi
    - arm
        -32位
        -64位
    - x86
        -32位
        -64位
    根据手机决定

-解压xz文件 -> 文件（非文件夹）
-文件传入手机的/data/local/tmp/
    abd push C:\tool\frida\frida-server-14.2.18-android-arm64 /data/local/tmp/
-登录手机，把文件的权限修改为可执行的权限
    adb -s 设备名 shell
    su -
    chmod 777 frida-server-14.2.18-android-arm64
-启动frida
    cd /data/local/tmp/
    ./frida-server-14.2.18-android-arm64

手机端启动完frida的服务器后，在电脑端的操作如下：
    -adb forward tcp:27042 tcp:27042
    -adb forward tcp:27043 tcp:27043

adb命令学习：
    adb -s 设备名 shell #登录设备
    adb push C:/XXX /sdcard/

编写hook脚本：Python+JS代码

"""

import frida
import sys

# 连接手机设备
rdev = frida.get_remote_device()

# Hook手机上的那个APP（app的包名字）
# 注意事项：在运行这个代码之前，一定要先在手机上启动app
session = rdev.attach("com.che168.autotradercloud")  # 车智赢+

scr = """
Java.perform(function () {

    // 包.类
    var AHAPIHelper = Java.use("com.autohome.ahkit.AHAPIHelper");


    // Hook，替换
    AHAPIHelper.appendPublicParam.implementation = function(context,map){
        console.log(123);

        // 执行原来的方法
        this.appendPublicParam(context,map);

        console.log(666);

    }

});
"""
script = session.create_script(scr)


# 回调函数
def on_message(message, data):
    print(message, data)


script.on("message", on_message)

script.load()
# 停住，等待出发hook
sys.stdin.read()
