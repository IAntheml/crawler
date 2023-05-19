# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 8:34 下午
# @Author  : 顾安
# @File    : 5. 关于命名参数的使用注意事项.py
# @Software: PyCharm

# 传递命名参数必须要和函数中的形参的名称保持一致
# def test(name, address):
#     print(f'my name is {name}, from address is {address}')
#
#
# test(name='安娜', addres='长沙')


def test(a, b, c=100, d=200):
    print(f'a={a}, b={b}, c={c}, d={d}')


test(1, 2)
test(10, 20, 30)
test(100, 200, 300, 400)
test(1000, 2000, d=3000, c=4000)

# test(c=1, d=2)  # 不可以 因为必须先要让形参有值
# test(c=1, d=2, 3, 4)  # 如果在函数中有形参 则必须要让形参先有值






