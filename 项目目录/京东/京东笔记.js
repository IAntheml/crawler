/*
版本：10.4.4
目标: 实现京东搜索
    api.m.jd.com    /client.action?functionId=backupKeywords
    -关联关键词
        -oaid (测试可不携带)
        -eid (测试可不携带)
        -ep算法
        -sign
    api.m.jd.com    /client.action?functionId=search
    -搜索
        -ep算法
        -sign
        -加密逻辑
 */



/*
so文件的破解
    - 硬干，ida -> C代码 + hook
    - frida-rpc，缺点：设备要一直连着手机，高并发时可能需要多个手机
    - unidbg，java代码模拟创建手机+“虚拟机=解释器”+apk（dex、so） -> jar包
        -加载apk
        -加载so
        -找到getSignFromJNI方法，主动调用（参数）
 */

