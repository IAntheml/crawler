# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 8:29 下午
# @Author  : 顾安
# @File    : 4. 命名参数.py
# @Software: PyCharm


def test(a, b):
    print(f'a={a}, b={b}')


# test(11, 22)

# 使用命名参数进行实参的传递
test(b=33, a=12)

'''
可以不根据函数中的形参的位置进行传参
    指定参数名称进行传参
    
作用：
    在调用函数的时候不受参数的位置的影响
'''



