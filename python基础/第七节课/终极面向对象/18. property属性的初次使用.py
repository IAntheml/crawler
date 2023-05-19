# -*- coding:utf-8 -*-
# @FileName: 18. property属性的初次使用.py
# @Time    : 2022/10/28 20:16
# @Author  : 顾安


class Foo:
    def info(self):
        pass

    # 在当前类中定义一个方法 并且我调用这个方法的形式为: foo.xxx
    @property  # 拿到当前方法中计算的返回值  翻页 第一页有20条内容 100
    def func(self):
        return '调用了当前这个方法'


foo = Foo()
result = foo.func
print(result)


class Goods:
    def __init__(self):
        self.old_money = 100
        self.money = 0.8

    # @property
    # def _money(self):
    #     result = self.old_money * self.money
    #     return result


goods = Goods()
print(goods.money)


"""
被property装饰的方法不能创建除了self之外的任何形参
"""