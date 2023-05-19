# -*- coding: utf-8 -*-
# @Time: 8:28 下午
# @Author: 顾安
# @File: 2. 多线程任务
# Software: PyCharm


"""
1. python中需要使用一个模块来完成多线程任务
    threading 标准库
"""

import time
import threading


def print_hello():
    print('hello')
    time.sleep(1)


# 使用多线程进行任务加速
for i in range(5):
    # 1. 创建一个线程对象
    t = threading.Thread(target=print_hello)
    # 2. 使用线程对象启动一个线程
    t.start()
