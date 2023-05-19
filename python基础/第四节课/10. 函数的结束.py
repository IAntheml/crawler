# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:13 下午
# @Author  : 顾安
# @File    : 10. 函数的结束.py
# @Software: PyCharm


# def create_nums():
#     print("---1---")
#     return 1  # 函数中下面的代码不会被执行，因为return除了能够将数据返回之外，还有一个隐藏的功能：结束函数
#     print("---2---")
#     return 2
#     print("---3---")
#
#
# ret = create_nums()
# print(ret)


def create_nums():
    print("---1---")
    # 如果在当前函数中有多个计算结果 可以使用元组进行统一返回
    # 默认返回的类型是一个元组
    return 1, 2, 3, 4


ret = create_nums()
print(ret)
