# -*- coding: utf-8 -*-
# @Time: 10:07 下午
# @Author: 顾安
# @File: 7. 进程池
# Software: PyCharm

"""
当创建进程池之后会自动创建你设置的进程的个数
进程池对象(10) 是个进程 重复利用的

一百万个任务
    创建一个进程池
        限定只能创建是个进程

        把一百万个任务放进进程池中
            前十个任务被进程执行
            剩下的任务对象进行等待 直到十个进程中的某一个任务执行完毕再进行调用
"""


import time
import random
from multiprocessing import Pool


def worker(msg):
    # 创建一个时间对象用来进行任务启动的计时
    t_start = time.time()
    # 让当前程序随机休眠 0 - 1
    time.sleep(random.random() * 2)
    t_stop = time.time()
    print(msg, '任务执行完毕，耗时%0.2f' % (t_stop - t_start))


def main():
    # 创建进程池对象
    po = Pool(3)  # 如果任务数大于进程数 则多出来的任务会等待被执行
    for i in range(10):
        # 异步执行进程任务
        po.apply_async(worker, (i,))
        # 同步执行进程任务
        # po.apply(worker, (i,))

    print('进程池启动...')
    po.close()  # 关闭进程池  当进程池一旦创建并调用close之后 不能动态的去创建进程数量
    po.join()  # 等待进程池中的进程任务全部执行完毕后接堵塞  join必须在close之后
    print('任务结束...')


if __name__ == '__main__':
    main()


'''
如果第二个函数执行需要依赖第一个函数中的返回值
'''