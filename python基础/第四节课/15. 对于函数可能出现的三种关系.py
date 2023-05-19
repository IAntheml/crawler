# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:32 下午
# @Author  : 顾安
# @File    : 15. 对于函数可能出现的三种关系.py
# @Software: PyCharm

# 第一种: 多个函数使用了同一个全局变量

# 全局变量: 当前变量定义在最外部 不属于任何代码块 但是任何代码块都可以使用
g_num = 0


def test_1():
    global g_num
    # 将处理结果存储到全局变量g_num中
    # 如果没有使用global的情况下 python解释器会认为你在函数体中声明了一个局部变量
    g_num = 100


def test_2():
    print(g_num)


# 先调用test_1得到数据并且存到全局变量中
test_1()

# 再调用test_2打印test_1()处理过后的数据
test_2()


def test_1():
    # 通过return将一个数据结果返回
    return 20


def test_2():
    # 在test_2函数体中调用test_1并获取test_1的返回值
    result = test_1()
    # 在当前函数体中处理数据
    print(result)


# 调用test_2完成数据处理
test_2()
