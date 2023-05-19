# -*- coding: utf-8 -*-
# @Time: 9:23 下午
# @Author: 顾安
# @File: 5. 多进程之间不共享全局变量
# Software: PyCharm

import time
import multiprocessing

nums = [11, 22, 33]


def test_1():
    nums.append(44)
    print('在子进程1中的全局变量的值为: ', nums)
    time.sleep(3)


def test_2():
    print('在子进程2中的全局变量的值为: ', nums)


def main():
    p_1 = multiprocessing.Process(target=test_1)
    p_2 = multiprocessing.Process(target=test_2)

    p_1.start()
    p_2.start()


if __name__ == '__main__':
    main()

"""
为什么子进程1中获取的全局变量和子进程2中获取的全局变量的值不一致

    拷贝
    
    进程是如何创建的？
        由主进程将当前的资源(代码)拷贝到子进程中
        
        
进程与进程之间进行数据交换？
    队列
    
"""