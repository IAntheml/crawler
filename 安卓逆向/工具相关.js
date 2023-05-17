/*
解决NO_PROXY问题
安装在手机、模拟器上的一个软件，对你的手机中某些app中的请求进行转发，解决app中设置NO_PROXY的情况。

- Drony-102.apk，【英文版】【安卓低版本】【模拟器】
- Drony-1-3.154.apk，【繁体中文】【手机】


模拟器可安装Drony-102.apk
配置：
    setting-WiFi-长按IP-Proxy type变成手动Manual-找HOST和PORT，设置为抓包软件的Local IP Address和端口-Filter default value设置为Direct all-Rules点击加号然后在All applications里面选择app，action设置为allow然后点击保存-回到主界面将off置为on

 */

/*
反编译工具

- apk文件，本质就是压缩包（代码）。

- 反编译工具，反编译成java代码，分析java代码。例如：jadx、jeb、gda。

jadx直接解压，然后选择jadx-gui.bat（windows）
 */




/*
APK文件找SO的方法:
    第一步找到APK文件，改后缀成ZIP文件然后解压缩，之后在目录中找到lib，然后找到对应的包
    第二步打开ida，点击new，找到对应的so文件打开
    第三步点击export找导出函数，如果没有对应的函数则说明是动态注册
    第四步动态注册找JNI_OnLoad
 */