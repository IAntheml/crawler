# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 8:26 下午
# @Author  : 顾安
# @File    : 23. 类属性.py
# @Software: PyCharm


class Test:
    # 类属性
    nums = [1, 2, 3]

    def __init__(self):
        self.nums = [1, 2, 3, 4]

    def print_nums_1(self):
        print(self.nums)  # 如果在这个类中声明类属性与实例属性并且同名 则实例方法访问的是实例属性
        # print(Test.nums)
        # print(nums)
        '''
        如果在实例方法中访问的属性名在实例属性中存在 则直接访问实例属性
        如果访问的属性在实例属性中不存在 则会继续向上寻找 类属性
        '''

    @classmethod  # 类方法
    def print_nums_2(cls):
        print(cls.nums)


test = Test()
test.print_nums_1()
test.print_nums_2()

'''
类属性是一种共享的属性
    多个方法都可以对当前这个类属性进行操作
'''