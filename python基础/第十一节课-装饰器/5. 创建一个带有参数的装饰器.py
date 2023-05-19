# -*- coding:utf-8 -*-
# @FileName: 5. 创建一个带有参数的装饰器.py
# @Time    : 2022/11/7 9:25 下午
# @Author  : 顾安

# 接收装饰器本身的参数  level: 日志报警等级 info debug warring error
def logging(level):
    # 接收被装饰的函数的引用
    def wrapper(func):
        # 接收被装饰的函数的参数
        def inner_wrapper(*args, **kwargs):
            print(f'【{level}】: enter function {func.__name__}()')
            # 返回的是被装饰的函数的调用
            return func(*args, **kwargs)
        return inner_wrapper
    return wrapper


@logging(level='info')
def say(*args, **kwargs):
    print(f'hello {args}')


say('小小', 1,2,3,4)

