# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 8:13 下午
# @Author  : 顾安
# @File    : 1. 缺省参数.py
# @Software: PyCharm


def print_info(name, age=30):
    print(f'name is {name}, age is {age}')


print_info('夏洛', 20)

# 在调用函数的时候想省略传参的步骤
print_info('顾安')

