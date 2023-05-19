# -*- coding:utf-8 -*-
# @FileName: 对于__call__方法的说明-补充.py
# @Time    : 2022/10/26 22:21
# @Author  : 顾安


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(self.name, self.age)

    def __call__(self, *args, **kwargs):
        address = args
        print(address)
        # return self.name, self.age


# 当对当前的实例对象进行括号调用时打印人物信息
p = Person('双双', 17)

# 把实例对象当成一个函数去使用
p('长沙')

# 函数可以接受参数
