# -*- coding: utf-8 -*-
# @Time    : 2022/10/11 8:55 下午
# @Author  : 顾安
# @File    : 18. 循环解决阶乘问题.py
# @Software: PyCharm


# def result_nums(n):
#     ret = 1
#     for x in range(1, n + 1):
#         ret *= x
#     return ret
#
#
# res = result_nums(4)
# print(res)


# 递归的方式进行计算
def result_nums(n):
    if n > 1:
        return n * result_nums(n - 1)
    else:
        return 1


result_nums(4)





