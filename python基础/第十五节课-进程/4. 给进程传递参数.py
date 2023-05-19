# -*- coding: utf-8 -*-
# @Time: 9:19 下午
# @Author: 顾安
# @File: 4. 给进程传递参数
# Software: PyCharm

import multiprocessing


def test(a, b, c, *args, **kwargs):
    print(a)
    print(b)
    print(c)
    print(args)
    print(kwargs)


def main():
    p = multiprocessing.Process(target=test, args=(11, 22, 33, 44, 55), kwargs={'name': '双双'})
    p.start()


if __name__ == '__main__':
    main()
