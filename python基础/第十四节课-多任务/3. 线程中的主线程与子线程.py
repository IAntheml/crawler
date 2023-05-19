# -*- coding: utf-8 -*-
# @Time: 8:46 下午
# @Author: 顾安
# @File: 3. 线程中的主线程与子线程
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

    t1.start()
    t2.start()

    # sleep(6)
    print(f'程序结束: {ctime()}')
