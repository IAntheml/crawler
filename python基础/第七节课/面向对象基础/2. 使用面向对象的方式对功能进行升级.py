# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 8:23 下午
# @Author  : 顾安
# @File    : 2. 使用面向对象的方式对功能进行升级.py
# @Software: PyCharm


# 创建一个类  需要使用 class 因为大家之后去声明变量不能用class作为变量名称
class Person:
    # 在这个类的代码块中一般编写函数
    def __init__(self, name, age):
        # 对于这个类的一些属性
        self.name = name
        self.age = age

    # 在这个类中创建一个函数 在这个函数中获取到上面声明属性[变量]
    def print_info(self):
        print(f'姓名: {self.name}, 年龄: {self.age}')


# 如何使用这个类呢？
# 1. 需要对这个类进行实例化
p = Person('顾安', 20)  # 类似于容器的这样的一个概念 类是一个篮子 苹果 香蕉
p.print_info()  # 这里的小括号是调用的意思  跟函数一致

# 打印类的属性
print(p.name)






