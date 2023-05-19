# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:42 下午
# @Author  : 顾安
# @File    : 16.函数的嵌套调用.py
# @Software: PyCharm


# def test_1():
#     print('--- test_1 start ---')
#     print('这里是test_1函数执行的代码...')
#     print('--- test_1 end ---')
#
#
# def test_2():
#     print('--- test_2 start ---')
#     test_1()
#     print('--- test_2 end ---')
#
#
# test_2()


# def test_1():
#     print('test_1执行的代码...')
#
#
# def test_2():
#     print('正在运行中...')
#     # 发现我需要test_1中的功能
#     test_1()
#     print('任务完成...')
#
#
# test_2()


# # 打印一条横线
# def print_1_line():
#     print("-" * 30)
#
#
# # 打印多条横线
# def print_num_line(num):
#     i = 0
#
#     # 因为print_1_line函数已经完成了打印横线的功能，
#     # 只需要多次调用此函数即可
#     while i < num:
#         print_1_line()
#         i += 1
#
#
# # 调用函数
# print_num_line(10)


# 求3个数的和
def sum_3_number(a, b, c):
    return a + b + c  # return 的后面可以是数值，也可是一个表达式


# 完成对3个数求平均值
def average_3_umber(a, b, c):
    # 因为sum_3_number函数已经完成了3个数的就和，所以只需调用即可
    # 即把接收到的3个数，当做实参传递即可
    sum_result = sum_3_number(a, b, c)
    avg_result = sum_result / 3.0
    return avg_result


# 调用函数，完成对3个数求平均值
result = average_3_umber(11, 2, 55)
print("average is %d" % result)



