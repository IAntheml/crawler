/*
Hook
 */

/*
Hooke脚本中遇到map输出为object时，可以在hook脚本中添加如下方法输出对象为字符串形式
 */
function showMap(title, map) {
    var result = "";
    var keySet = map.keySet();
    var it = keySet.iterator();
    while (it.hasNext()) {
        var keyStr = it.next().toString();
        var valueStr = map.get(keyStr).toString();
        result += keyStr;
        result += "=";
        result += valueStr;
        result += ";";
    }
    console.log(title, result)
}


/*
对SO文件进行hook，不能使用模拟器，只能使用真机

AES加密后得到的字节码通常会经过BASE64进行再次编码
 */


/*
JWT token的特点：利用两个点将一串字符串分割 xxxxxx.xxxxxx.xxxxxx

找JWT token的技巧：设置-应用-对应APP-存储空间-清除数据
 */
