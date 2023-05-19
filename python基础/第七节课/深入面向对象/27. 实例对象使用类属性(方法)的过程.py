# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 9:16 下午
# @Author  : 顾安
# @File    : 27. 实例对象使用类属性(方法)的过程.py
# @Software: PyCharm


"""
因为类属性和类方法都存储在类对象中
    实例属性想要使用类属性/类方法 则需要找到这个类所存储的空间
"""


class Test:
    nums = [1, 2, 3]

    @classmethod
    def info(cls):
        print(cls.nums)
        return 1


# 创建一个实例对象
test = Test()

'''
现在说明实例访问类属性与类方法的过程
    1. 创建实例对象
    2. 在创建的实例对象中存在一个方法 __class__
    3. 通过__class__底层方法获取到这个类的地址
    4. 通过地址找到对应的方法与属性
'''


print(test.__class__)

# 实例对象通过__class__获取这个类的地址 通过这个地址获取这个类所保存的类属性与方法
# print(test.__class__.nums)
print(test.__class__.info())  # 通过__class__ 可以获取到这个方法的返回值


# __class__ 用的不多  因为python解释器在运行实例对象.方法(属性) 会自动帮助我们调用__class__



