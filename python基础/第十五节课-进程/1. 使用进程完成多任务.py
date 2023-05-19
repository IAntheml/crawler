# -*- coding: utf-8 -*-
# @Time: 8:28 下午
# @Author: 顾安
# @File: 1. 使用进程完成多任务
# Software: PyCharm


import time
import threading
import multiprocessing  # 多进程任务


def test_1():
    for i in range(10):
        print('这是任务1: %s' % i)
        time.sleep(1)


def test_2():
    for i in range(10):
        print('这是任务2: %s' % i)
        time.sleep(1)


def main():
    # t1 = threading.Thread(target=test_1)
    # t2 = threading.Thread(target=test_2)
    #
    # t1.start()
    # t2.start()
    multiprocessing.set_start_method('fork')  # windows不支持
    # 创建了两个进程对象
    p1 = multiprocessing.Process(target=test_1)
    p2 = multiprocessing.Process(target=test_2)

    p1.start()
    p2.start()


# 如果大家创建的是一个多进程任务 必须写入函数入口 不写报错
main()

"""
多进程任务在不同的操作系统上创建的进程方式是不一样的
    windows：spawn 必须要写入函数入口的
    linux: fork
    macOS: fork
    
    指定当前进程对象启动的方式
    
    
linux 能运行 exe？
    wine
        虚拟机 
"""