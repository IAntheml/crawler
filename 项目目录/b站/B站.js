/*
    软件版本可以在豌豆荚上下载V6.24.0
 */


/*
反编译：用jadx打开apk后点击放大镜建立索引
 */

/*
搜索定位请求的方式：请求体、请求头、url，hook常见加密算法，hook treeMap或者HashMap的put方法
 */

/*
字节数组输出成object时，可以调用序列化方法JSON.stringify(res)将结果转化为字节字符串输出

注意：在表示字节时java是有符号的，python是无符号的，需要转换。
 */


/*
常用几个id的python实现：AndroidID、UUID、mac、IMEI
 */


/*
    b>>>4 位移操作可以用python函数int_overflow()和unsigned_right_shitf()实现
 */

/*
IDA反编译后动态注册的补充，找RegisterNatives：libart.so


第一步 libart.so中找RegisterNatives方法 -> 内存地址
第二步：基于内存地址进行hook，找到第三个参数（2索引位置）
第三步：gMethods对应关系 -> s -> ？函数
 */