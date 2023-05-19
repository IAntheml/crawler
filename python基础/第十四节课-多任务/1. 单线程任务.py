# -*- coding: utf-8 -*-
# @Time: 8:23 下午
# @Author: 顾安
# @File: 1. 单线程任务
# Software: PyCharm


import time


def print_hello():
    print('hello')
    # 让程序休眠一秒
    time.sleep(1)  # 程序执行到此处代码会阻塞一秒


for i in range(5):
    print_hello()

'''
当前程序为一个单线程程序
    如果程序中有阻塞/休眠
        必须等待解堵塞/解休眠之后才能继续向下执行
        
    5秒时间才能执行完毕
'''