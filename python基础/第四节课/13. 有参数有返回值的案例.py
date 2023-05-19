# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:25 下午
# @Author  : 顾安
# @File    : 13. 有参数有返回值的案例.py
# @Software: PyCharm


# 计算1~num的累积和
def add_nums(num):
    sum_result = 0
    for x in range(1, num + 1):
        sum_result += x
    return sum_result


result = add_nums(1000)
print('1~100的累积和为:%d' % result)
