# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午8:35
# @Author : 顾安
# @File : 2. 使用raise与try代码配合使用.py
# @Software: PyCharm


def exp_exception(x, y):
    try:
        a = x / y
        print('计算结果:', a)
        # Exception 是所有异常类的父类 只要有异常错误 基本上Exception都能捕获
        # 能捕获的都是python的内置异常 python这个语言中定义了一些内置的错误异常类
        # 如果你现在编写的代码的错误在python中有异常定义 则捕获
        # 如果没有 则捕获不到
        # 登陆功能 输错密码 算 不是
    except Exception:
        raise ZeroDivisionError  # 如果想要去定位错误


print(exp_exception(9, 0))

# 在第三方库中已经自己定义了一些异常类
# 继承python Exception 类
# 真正的作用: 知道有这个错误 但是当前这个错误不会影响到你的业务代码
# 防止程序因为报错导致异常退出

