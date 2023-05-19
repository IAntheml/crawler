# -*- coding:utf-8 -*-
# @FileName: 15. 动态绑定属性.py
# @Time    : 2022/10/26 21:47
# @Author  : 顾安


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


p_1 = Person('安娜', 18)
p_1.gender = '女'  # 动态绑定
print(p_1.gender)

p_2 = Person('双双', 16)
# print(p_2.gender)

# p对象和p_2实例对象分别存储在不同的空间中

# 可以在当前这个类中创建一个类属性 类属性是共享的
Person.gender = None

p_2.gender = '未知'
print(p_2.gender)


'''
给实例对象添加属性的两种方式
    使用实例对象去创建属性: 当前属性是实例属性 不共享
    
    使用类去创建属性：类属性，共享的
'''
