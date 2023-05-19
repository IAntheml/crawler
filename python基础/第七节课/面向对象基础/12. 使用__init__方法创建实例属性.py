# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 8:29 下午
# @Author  : 顾安
# @File    : 12. 使用__init__方法创建实例属性.py
# @Software: PyCharm


class Cat:
    # 实例方法
    def __init__(self, name, age):
        # 实例属性 变量  只有实例对象才能调用一下的变量[实例属性]
        self.name = name
        self.age = age

    # 当前这个猫的行为
    def eat(self):
        print(f'{self.name}正在吃鱼...')

    def drink(self):
        print(f'{self.name}正在喝水...')

    def print_info(self):
        print(f'我叫{self.name}, 今年{self.age}岁')


# 因为在实例化这个类的时候会自动调用 __init__ 所以我需要在实例化的过程中将参数传递给这个__init__
tom = Cat('汤姆猫', 1)
tom.eat()
tom.drink()
tom.print_info()
