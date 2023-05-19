# -*- coding:utf-8 -*-
# @FileName: 关于__getattribute__方法的说明-补充.py
# @Time    : 2022/10/26 22:27
# @Author  : 顾安


'''
__getattribute__:
    使用实例对象.实例属性获取值必须通过__getattribute__进行获取
'''


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getattribute__(self, item):
        # 实例对象获取实例属性需要通过当前这个方法进行返回
        # 当前这个方法中的item参数是实例属性的属性名称
        print(item)
        # 对当前用户所参数的属性名进行判断控制
        if item == 'name':
            return '双双'
        else:
            # 使用object获取当前子类中实例属性所指向的值
            return object.__getattribute__(self, item)


p = Person('安娜', 18)
print(p.name)
print(p.age)

