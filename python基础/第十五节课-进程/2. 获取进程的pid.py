# -*- coding: utf-8 -*-
# @Time: 8:44 下午
# @Author: 顾安
# @File: 2. 获取进程的pid
# Software: PyCharm


"""
什么是pid
    一个程序如果在操作系统上被运行之后就变成了一个进程
        操作系统如何找到某一个指定的进程
            借助pid
                相当于给进程分配了一个编号

    ps 列出系统进程资源
    ps aux
    ps aux｜grep "python3"

    如果想要退出某一个进程
        kill -9 pid

    es
    docker
    nginx
    uwsgi

"""
import os
import time
import multiprocessing


def test():
    while True:
        print('子进程 pid=%d, 父进程的pid=%d' % (os.getpid(), os.getppid()))
        time.sleep(1)


def main():
    print('子进程 pid=%d, 父进程的pid=%d' % (os.getpid(), os.getppid()))
    p = multiprocessing.Process(target=test)
    p.start()


if __name__ == '__main__':
    main()
