# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 8:24 下午
# @Author  : 顾安
# @File    : 11. __init__ 方法初探.py
# @Software: PyCharm


class Test:
    # 构造方法也是一个实例方法 实例方法只能被实例对象
    def __init__(self):
        print('当前调用的是构造方法')


# 1. 实例化
test = Test()

# 类名本身是一个类对象
Test.__init__(test)


# 在实例化这个类的时候 python解释器会自动去执行 __init__ 方法

