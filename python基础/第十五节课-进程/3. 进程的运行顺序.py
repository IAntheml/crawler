# -*- coding: utf-8 -*-
# @Time: 9:02 下午
# @Author: 顾安
# @File: 3. 进程的运行顺序
# Software: PyCharm


"""
之前在学习线程时，线程运行的顺序是随机的
    操作系统自行调度的
"""

import time
import multiprocessing


def test_1():
    for i in range(10):
        print('子进程1: %d' % i)
        time.sleep(1)


def test_2():
    for i in range(10):
        print('子进程2: %d' % i)
        time.sleep(1)


def main():
    p1 = multiprocessing.Process(target=test_1)
    p2 = multiprocessing.Process(target=test_2)

    p1.start()
    p2.start()


if __name__ == '__main__':
    main()


"""
进程之间的执行顺序是无序的
"""