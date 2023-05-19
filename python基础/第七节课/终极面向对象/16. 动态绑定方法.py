# -*- coding:utf-8 -*-
# @FileName: 16. 动态绑定方法.py
# @Time    : 2022/10/26 21:56
# @Author  : 顾安

import types


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print(f'{self.name}正在吃东西')


def info(self):
    print(f'名称: {self.name}, 年龄: {self.age}')


p = Person('安娜', 30)
p.eat()

# MethodType：可以动态的给一个类添加实例方法
p.info = types.MethodType(info, p)

p.info()


# 静态方法
@staticmethod
def static_func():
    print('我是一个静态方法...')


Person.address = '长沙'


# 类方法
@classmethod
def class_func(cls):
    print(f'当前是类方法, 类属性的值为: {cls.address}')


# 使用类对象添加静态和类方法
Person.static_func = static_func
Person.class_func = class_func

# 使用实例对象调用静态和类方法 [类对象也可以调用]
p.static_func()
p.class_func()


# 动态删除属性
del Person.address


'''
方法是不是属性？
    是

想要在一个类中添加一个属性
    类名.属性名 = 值  # 动态赋值
    
    类名.方法名 = 方法名  # 将我们自己定义的函数的引用地址复制给类中的一个变量 类属性
    
    为什么实例方法不能直接赋值？
        因为实例方法有访问权限
'''

