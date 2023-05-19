# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 8:57 下午
# @Author  : 顾安
# @File    : 7. 不定长参数的特殊情况.py
# @Software: PyCharm


# 这种定义方式python是允许的
def sum_1(a, *args, b=22, c=33, **kwargs):
    print(a)
    print(b)
    print(c)
    print(args)
    print(kwargs)


sum_1(100, 200, 300, 400, 500, 600, 700, b=1, c=2, name='安娜', age=90)


# 总结一个规律 **kwargs 必须在最后
# def sum_2(a, **kwargs, b=22, c=33, *args,):
#     pass


# 形参 缺省 不定长 实参不是在定义函数时用的 在调用函数时使用
