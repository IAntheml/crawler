# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 8:51 下午
# @Author  : 顾安
# @File    : 25. 类方法.py
# @Software: PyCharm


"""
在一个类中如果想要访问类属性
    类对象
    实例对象

如果在实例方法中访问类属性，需要查看__init__方法中有没有重名的属性 如果有：则不能使用self进行访问
只能使用类名进行访问


使用类方法进行类属性的访问
"""


class Test:
    # 类属性
    nums = [1, 2, 3]

    # 实例属性
    def __init__(self):
        self.nums = [1, 2, 3, 4]

    # 类方法
    @classmethod
    def info(cls):
        print(f'当前访问的是雷属性中的值: {cls.nums}')
        '''
        注意点：类方法是没有权限去访问实例属性的
        '''


test = Test()
test.info()

# 类方法不光可以使用实例对象进行调用 也可以使用类对象进行调用
Test.info()

