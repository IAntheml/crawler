/*
版本：V11.5.0


反编译工具：
    PC端：jadx1.2、jadx1.4、jeb、gda
    手机：MT管理器（收费）、NP管理器（免费）
 */


/*
MT管理器的使用：找到apk点击查看->找到classes.dex->选择dex编辑器确定->找对应的文件得到smali代码然后转成Java代码
 */

/*
在寻找代码过程中，遇到接口中的方法
    - 看方法前的对象是谁
    - 找谁实现了目标接口
    - 基于hook输出是哪个对象
        console.log(this.k) -> 会输出k方法
        console.log(this.k.value) -> 输出k字段
        send(this.k.value) -> 防止输出的是object
 */