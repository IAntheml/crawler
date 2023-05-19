# -*- coding: utf-8 -*-
# @Time: 9:39 下午
# @Author: 顾安
# @File: 7. 互斥锁
# Software: PyCharm


import time
import threading

# 创建线程互斥锁  设置为一个全局的变量
mutex = threading.Lock()

# 创建一个全局变量
g_num = 0


def add_number_1(num):
    global g_num

    for i in range(num):
        # 上锁
        mutex.acquire()
        g_num += 1
        # 释放锁
        mutex.release()
    # print(f'线程1计算得出的结果为: {g_num}')


def add_number_2(num):
    global g_num
    for i in range(num):
        # 上锁
        mutex.acquire()
        g_num += 1
        # 释放锁
        mutex.release()
    # print(f'线程2计算得出的结果为: {g_num}')


if __name__ == '__main__':
    t1 = threading.Thread(target=add_number_1, args=(1000000,))
    t1.start()

    t2 = threading.Thread(target=add_number_2, args=(1000000,))
    t2.start()

    # 主线程等待: 当主线程运行到没有代码到时候会进行等待 直到子线程任务完成则结束程序
    """
    如果大家需要等待子线程执行完毕后获取最终的结果
        那么需要完成在子线程启动的时候让主线程等待
        如果主线程执行到子线程启动后下面还有代码的情况下
            下面的代码不会执行
    """
    t1.join()
    t2.join()
    print(f'主线程获取到到最终的结果: {g_num}')
