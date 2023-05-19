# -*- coding:utf-8 -*-
# @FileName: 11. 关于属性拦截器的使用注意事项.py
# @Time    : 2022/10/26 20:56
# @Author  : 顾安


class Test:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getattribute__(self, item):
        print(item)
        return object.__getattribute__(self, item)


test = Test('安娜', 20)
print(test.name)
print(test.age)

