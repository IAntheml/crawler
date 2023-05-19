# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 9:17 下午
# @Author  : 顾安
# @File    : 5. 对象的概念.py
# @Software: PyCharm


"""
对象：
    通过类实例化产生的对象被称之为这个类的实例对象

实例对象理解成通过这个类生产出来的产品
    可以被开发者直接使用
        可以通过实例对象.方法() 方式去运行代码
"""


class Person:
    # 这个函数的作用是专门去生产属性的
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_info(self):
        print(f'姓名: {self.name}, age: {self.age}')


p_1 = Person('顾安', 18)
p_2 = Person('安娜', 20)

# 对象是可以直接使用类中的方法的  也就是说 对象可以被开发者直接使用
p_1.print_info()
p_2.print_info()


'''
先有类, 才有对象
    对象是被类生产出来的
'''
