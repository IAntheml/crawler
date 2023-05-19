# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 8:14 下午
# @Author  : 顾安
# @File    : 10. 继承的代码练习.py
# @Software: PyCharm


class A:
    # 构造方法 给这个类的实例对象去创建属性
    def __init__(self):
        self.num = 10

    # 实例方法中打印实例属性
    def print_num(self):
        print(self.num)


class B(A):
    pass


b = B()

b.print_num()


'''
在当前的这个案例中
    除了实例方法被继承之外, 构造方法也被继承了
'''



