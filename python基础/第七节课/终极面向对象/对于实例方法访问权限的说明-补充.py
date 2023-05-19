# -*- coding:utf-8 -*-
# @FileName: 对于实例方法访问权限的说明-补充.py
# @Time    : 2022/10/26 22:13
# @Author  : 顾安


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f'{self.name}, {self.age}')


# 类对象无权访问实例属性
p = Person('安娜', 18)

# 不是类对象有访问权限
Person.info(p)

