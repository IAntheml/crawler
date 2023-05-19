# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 8:31 下午
# @Author  : 顾安
# @File    : 4. 函数定义一次可以执行多次.py
# @Software: PyCharm


def test():
    num = 100
    num += 1
    print("在test函数中num=%d" % num)


test()
test()

'''
函数多次执行是从第一行重新执行
    重复执行，并且是重新执行
'''
