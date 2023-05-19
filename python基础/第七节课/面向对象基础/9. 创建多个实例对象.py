# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 10:21 下午
# @Author  : 顾安
# @File    : 9. 创建多个实例对象.py
# @Software: PyCharm


class Cat:
    def __init__(self, new_name, new_age):
        self.name = new_name
        self.age = new_age

    def eat(self):
        print(f'{self.name}在吃鱼')

    def drink(self):
        print(f'{self.name}在喝水')

    def print_info(self):
        print(f'姓名: {self.name}, 年龄: {self.age}')


tom = Cat('汤姆猫', 2)
jia_fei = Cat('加菲猫', 3)


# 这个两个实例对象是不是用一个对象？
print(tom is jia_fei)
'''
你创建了多少个实例对象，那么在内存中就有多少个内存对象
'''

tom_obj = Cat
jiafei_obj = Cat
print(tom_obj is jiafei_obj)

"""
你创建了多个实例对象，那么在内存中就有多少个实例对象
    实例对象与实例对象之间互不干扰

创建多个类对象在内存中只有一个，多个变量所指向的类对象都是指向了同一个内存地址
"""

tom.print_info()
jia_fei.print_info()
