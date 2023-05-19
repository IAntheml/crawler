# -*- coding: utf-8 -*-
# @Time: 8:07 下午
# @Author: 顾安
# @File: 1. 使用greenlet完成任务并发
# Software: PyCharm


# 1. 下载greenlet

# 2. 导入greenlet
from greenlet import greenlet


def func_1():
    print(1)
    gr2.switch()
    print(2)
    gr2.switch()


def func_2():
    print(3)
    gr1.switch()
    print(4)


gr1 = greenlet(func_1)
gr2 = greenlet(func_2)

gr1.switch()


