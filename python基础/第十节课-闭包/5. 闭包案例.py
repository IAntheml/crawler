# -*- coding:utf-8 -*-
# @FileName: 5. 闭包案例.py
# @Time    : 2022/11/4 20:50
# @Author  : 顾安


def test(number):
    def test_in(number_in):
        print(f'内部函数中的参数的值为: ', number_in)
        return number + number_in
    return test_in


ret = test(20)
print(ret(10))



