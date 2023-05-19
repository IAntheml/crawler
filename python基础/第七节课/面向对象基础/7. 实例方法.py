# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 9:54 下午
# @Author  : 顾安
# @File    : 7. 实例方法.py
# @Software: PyCharm


class Hero(object):
    def test1(self):
        print("这是一个方法")

    def test2(self, age):
        print("age=%d" % age)

    def test3(self, score1, socre2, socre3):
        return (score1 + socre2 + socre3) / 3


'''
实例方法
    就是在类中定义的函数
        函数中的第一个位置的参数必须是self
'''


h = Hero()
h.test1()

# 如果我现在使用类对象调用实例方法可不可以？
h_obj = Hero
# h_obj.test1(h)


