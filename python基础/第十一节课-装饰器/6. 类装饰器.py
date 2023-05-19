# -*- coding:utf-8 -*-
# @FileName: 6. 类装饰器.py
# @Time    : 2022/11/7 9:42 下午
# @Author  : 顾安


class Logging:
    def __init__(self, func):
        # 实例属性是什么？
        self.func = func

    def __call__(self, *args, **kwargs):
        print(f'[DEBUG]: enter function {self.func.__name__}')
        return self.func(*args, **kwargs)


@Logging
def say(name):
    print(f'hello {name}')


say('双双')


