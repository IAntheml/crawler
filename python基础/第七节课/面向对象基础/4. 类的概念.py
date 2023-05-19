# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 9:11 下午
# @Author  : 顾安
# @File    : 4. 类的概念.py
# @Software: PyCharm


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_info(self):
        print(f'姓名: {self.name}, age: {self.age}')


# 什么叫类？
p_1 = Person('顾安', 18)
p_2 = Person('安娜', 20)


p_1.print_info()
p_2.print_info()


'''
总结：类是可以产生对象的一个模板
    通过这个模板产生的对象有具有相似的行为: 方法
'''
