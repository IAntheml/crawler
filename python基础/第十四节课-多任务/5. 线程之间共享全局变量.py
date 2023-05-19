# -*- coding: utf-8 -*-
# @Time: 9:11 下午
# @Author: 顾安
# @File: 5. 线程之间共享全局变量
# Software: PyCharm


import time
import threading


# 创建一个全局变量
g_num = 100

"""
创建两个任务
    一个任务负责对全局变量进行加法操作
    一个任务获取全局变量的值
"""


def work_1():
    global g_num
    for i in range(3):
        g_num += 1
    print(f'子线程1中计算得出的结果为: {g_num}')


def work_2():
    global g_num
    print(f'子线程2获取到的全局变量的值为: {g_num}')


# 函数入口
if __name__ == '__main__':
    print(f'子线程未启动之前主线程获取的值为: {g_num}')

    # 创建线程对象 当前这个线程创建完之后线程是否已经存在？ 不存在的 对象不是线程 就是一串代码地址
    t1 = threading.Thread(target=work_1)
    # 启动线程
    t1.start()
    t2 = threading.Thread(target=work_2)
    t2.start()
    print(f'主线程等待子线程执行完毕后获取的值为: {g_num}')


