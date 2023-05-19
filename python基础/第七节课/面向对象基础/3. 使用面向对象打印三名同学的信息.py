# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 8:52 下午
# @Author  : 顾安
# @File    : 3. 使用面向对象打印三名同学的信息.py
# @Software: PyCharm


class Person:
    # 在这个类的代码块中一般编写函数
    def __init__(self, name, age):
        # 对于这个类的一些属性
        self.name = name
        self.age = age

    # 在这个类中创建一个函数 在这个函数中获取到上面声明属性[变量]
    def print_info(self):
        print(f'姓名: {self.name}, 年龄: {self.age}')


# Person是类名 不是方法名 这两个不是一个东西 可以理解成类中包含了方法 包含关系
p_1 = Person('顾安', 20)
p_2 = Person('安娜', 18)
p_3 = Person('双双', 16)


# 如果现在想要把安娜老师的信息打印出来 应该怎么做？
p_3.print_info()
p_2.print_info()


# 在实例化类的时候会返回一个对象 如果对同一个类进行了多次的实例化时，会在内存中创建多个对象 并且对象与对象之间互不干扰




