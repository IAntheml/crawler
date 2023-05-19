# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 8:29 下午
# @Author  : 顾安
# @File    : 3. 关于pass的实例.py
# @Software: PyCharm


# 定义了4个函数
# def add_2_nums():
#     pass
#
#
# def min_2_nums():
#     pass
#
#
# def mult_2_nums():
#     pass
#
#
# def div_2_nums():
#     pass

def add_2_nums():
    print("接下来要进行加法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s+%s=%d" % (num1, num2, int(num1) + int(num2)))


def min_2_nums():
    print("接下来要进行减法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s-%s=%d" % (num1, num2, int(num1) - int(num2)))


def mult_2_nums():
    print("接下来要进行乘法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s*%s=%d" % (num1, num2, int(num1) * int(num2)))


def div_2_nums():
    print("接下来要进行除法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s/%s=%d" % (num1, num2, int(num1) / int(num2)))


# 分别调用函数
add_2_nums()
min_2_nums()
mult_2_nums()
div_2_nums()
