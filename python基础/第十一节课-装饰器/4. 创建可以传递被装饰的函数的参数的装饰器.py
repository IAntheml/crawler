# -*- coding:utf-8 -*-
# @FileName: 4. 创建可以传递被装饰的函数的参数的装饰器.py
# @Time    : 2022/11/7 9:08 下午
# @Author  : 顾安

# 规律: 外层函数一般接收函数引用
def debug_1(func_1):
    def wrapper(*args):
        # 规律: 内部函数返回被装饰的函数的调用
        return func_1(*args)

    # 规律：外层函数返回内层函数的引用
    return wrapper


@debug_1
def say(*args):
    print(f'hello {args}')


say('顾安', 1, 2, 3, 4, 5)
