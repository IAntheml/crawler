# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:57 下午
# @Author  : 顾安
# @File    : 18.全局变量.py
# @Software: PyCharm


# 定义全局变量
a = 100


def test_1():
    a = 300  # 局部变量
    print(f'test_1修改前a的值为: {a}')
    a = 200
    print(f'test_1修改后a的值为: {a}')


def test_2():
    print(f'test_2获取全局变量的值为: {a}')


# test_1()
# test_2()

'''
在一个函数中如果定义了一个变量 则优先使用函数体中的变量

如果在函数中没有找到你定义的变量名称则会寻找全局变量
如果在全局变量中没有找到则报错

定义全局是注意不要把变量名称写在任何一个代码块中！！！
    简而言之，全局变量前没有缩进
'''

# 在python中如何去修改全局变量
# global

'''
global 关键字作用于不可变类型
    整型
'''

global_int = 10
global_list = [1, 2, 3]

# 如果是元组则需要知道元组本身就是不允许修改的
global_tuple = (1, 2, 3)


def test_3():
    # 如果修改整型则需要添加关键字
    global global_int
    global_int = 20

    # 修改列表类型的全局变量
    global_list.append(4)


def test_4():
    print(global_int)
    print(global_list)
    print(global_tuple)


test_3()
test_4()
