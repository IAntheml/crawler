# -*- coding:utf-8 -*-
# @FileName: 4. 函数引用.py
# @Time    : 2022/11/4 20:34
# @Author  : 顾安


def test():
    print(1)


test()

ret = test  # 将当前函数中的地址赋值给了一个变量

ret_2 = test


print(id(ret) == id(ret_2))


'''
你要学闭包  那么你就必须要知道什么是指向
'''


