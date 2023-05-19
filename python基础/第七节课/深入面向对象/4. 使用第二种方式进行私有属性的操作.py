# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:19 下午
# @Author  : 顾安
# @File    : 4. 使用第二种方式进行私有属性的操作.py
# @Software: PyCharm


"""
当前操作私有属性的方式不推荐大家使用
"""


class Test:
    def __init__(self, name, age):
        self.name = name
        self.__age = age  # 对原有的名称自动添加前缀

    def print_info(self):
        print(f'name: {self.name}, age: {self.__age}')


# 进行私有属性的修改
stu = Test('顾安', 18)

# 命名规则: 实例对象._类名__属性名
# 其实python中的私有属性也是不安全的
stu._Test__age = 20
stu.print_info()
