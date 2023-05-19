# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 8:57 下午
# @Author  : 顾安
# @File    : 1. 隐藏属性.py
# @Software: PyCharm


class Cat(object):
    def __init__(self, new_name, new_age):
        self.name = new_name
        self.age = new_age

    def print_info(self):
        print("我叫%s，今年%s岁了" % (self.name, self.age))


# 创建猫对象
cat = Cat("波斯猫", 4)
# 调用方法
cat.print_info()
# 尝试修改属性  动态修改实例属性的值
cat.age = -10
# 调用方法
cat.print_info()


# 如果想要让上述的代码中的值不能随意修改
# 私有属性
