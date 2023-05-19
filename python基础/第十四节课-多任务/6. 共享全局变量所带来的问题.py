# -*- coding: utf-8 -*-
# @Time: 9:27 下午
# @Author: 顾安
# @File: 6. 共享全局变量所带来的问题
# Software: PyCharm

import time
import threading

g_num = 0


def work_1(num):
    global g_num
    for i in range(num):
        g_num += 1
    print(f'子线程1中计算得出的结果为: {g_num}')


def work_2(num):
    global g_num
    for i in range(num):
        g_num += 1
    print(f'子线程2中计算得出的结果为: {g_num}')


if __name__ == '__main__':
    print(f'子线程未启动之前主线程获取的值为: {g_num}')
    t1 = threading.Thread(target=work_1, args=(1000000,))
    t1.start()

    t2 = threading.Thread(target=work_2, args=(1000000,))
    t2.start()

    print(f'子线程启动之后主线程获取的值为: {g_num}')
