# -*- coding:utf-8 -*-
# @FileName: 7. 创建带有参数的类装饰器.py
# @Time    : 2022/11/7 9:50 下午
# @Author  : 顾安


class Logging:
    # 创建这个类本身的参数 使用实例属性进行接收
    def __init__(self, level='INFO'):
        self.level = level

    # 创建__call__方法 用于接收被装饰的函数的引用
    def __call__(self, func):
        # 创建一个内部函数用来接收被装饰的函数的参数
        def wrapper(*args, **kwargs):
            print(f'[{self.level}]: enter function {func.__name__}')
            func(*args, **kwargs)

        return wrapper


def debug(func):
    def wrapper(*args):
        print(f'[DEBUG]: enter {func.__name__}()')
        return func(*args)  # 参数func是一个函数的引用
    return wrapper


@Logging()
@debug
def say(name):
    print(f'hello {name}')


say('安娜')


