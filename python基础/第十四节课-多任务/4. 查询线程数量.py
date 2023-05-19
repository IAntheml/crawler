# -*- coding: utf-8 -*-
# @Time: 9:04 下午
# @Author: 顾安
# @File: 4. 查询线程数量
# Software: PyCharm


import threading
from time import sleep, ctime


# 两个任务 周杰伦来长沙开演唱会 唱歌 跳舞
def sing():
    for i in range(5):
        print('正在唱歌: ', i)
        sleep(1)


def dance():
    for i in range(5):
        print('正在跳舞: ', i)
        sleep(1)


if __name__ == '__main__':
    print(f'程序开始: {ctime()}')
    # 创建两个线程对象
    t1 = threading.Thread(target=sing)
    t2 = threading.Thread(target=dance)

    # 启动线程
    t1.start()
    t2.start()

    # 查看线程数量
    while True:
        # print(threading.enumerate())
        length = len(threading.enumerate())
        print(f'当前线程数量: {length}')
        if length <= 1:
            # 如果线程数量等于1意味着当前只有一个主线程
            # 如果只剩下主线程则终止循环
            break
        sleep(0.5)

