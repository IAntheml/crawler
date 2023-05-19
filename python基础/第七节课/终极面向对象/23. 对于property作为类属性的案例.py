# -*- coding:utf-8 -*-
# @FileName: 23. 对于property作为类属性的案例.py
# @Time    : 2022/10/28 21:08
# @Author  : 顾安


class Foo:
    def a(self):
        print('当前get_bar被执行...')
        return 'a'

    def b(self, value):
        print(f'当前set_bar被执行, value: {value}')

        return 'b'

    def c(self):
        print('当前del_bar被执行...')
        return 'c'

    class_bar = property(c, b, a, '当前字符串是对property的一个解释说明...')


obj = Foo()
print(obj.class_bar)

obj.class_bar = 'd'

del obj.class_bar

# 当前获取property说明不能用实例属性
print(Foo.class_bar.__doc__)

