# -*- coding:utf-8 -*-
# @FileName: 17. 限制属性的创建.py
# @Time    : 2022/10/28 20:03
# @Author  : 顾安


class Person:
    # 定义方法
    """
    因为python是可以对类进行动态的属性创建
        在项目开发中不能随意的去创建属性
            __slots__：进行属性的创建限制

        属性？  -> 字符串
        方法是不是属性？

    """
    __slots__ = ('name', 'age')

    # 当前方法不可以写在__init__中


# 对当前这个类进行实例化
p = Person()

# 使用动态的方式进行属性的创建
p.name = '安娜'
print(p.name)

p.age = 18
print(p.age)

# 在当前__slots__方法中没有的属性
# p.address = '长沙'
# print(p.address)


class Person_2(Person):
    pass


p = Person_2()
p.name = '双双'
p.age = 20
p.address = '南京'  # address这个属性并没有受到__slots__的影响
print(p.name, p.age, p.address)

