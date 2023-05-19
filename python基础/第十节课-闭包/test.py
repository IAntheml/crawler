# -*- coding:utf-8 -*-
# @FileName: test.py
# @Time    : 2022/11/4 21:15
# @Author  : 顾安


def person(**kwargs):
    def address_info(address):  # 拆包有风险 参数 值 对等
        return f"1{kwargs['anna']}: {address}"

    def gender_info(gender):
        return f"2{kwargs['shuangshuang']}: {gender}"

    return address_info, gender_info  # return 可以将多个参数返回成一个元组


# p = person('安娜')
# print(p[0]('长沙'), p[1]('女'))

p1, p2 = person(anna='安娜', shuangshuang='双双')
print(p1('长沙'))
print(p2('女'))

'''
一个功能有几万种解决方式
    最优解
    
发散思维
'''


# 一般在嵌套内使用
def test_1(num):
    def test_2():
        # num属于谁？
        nonlocal num
        num += 1
        return num

    return test_2


person_age = 20


def add():
    global person_age
    person_age += 1
    print(person_age)


add()

'''
闭包的作用：
    可以将函数当成一个实例对象一样去使用的一种编程手法
    

闭包的构成：
    函数嵌套
        内部函数使用外部函数的参数
        外部函数返回内部函数的引用

验证型的问题
    自己动手去试
'''


class Person:
    # 类属性
    gender = '女'  # 类属性 类属性的特点就是没有任何前缀并不再任何一个方法体中
    money = 100

    def __init__(self, name, address):
        # 只要类中的属性存在在构造函数 / 属性名有self前缀则为一个实力属性
        self.name = name
        self.address = address
        self.__desc = ''

    # 创建一个实例方法进行私有属性的访问
    def get_desc(self):
        return self.__desc

    # 实例方法中的第一个参数为self 实例方法可以访问实例属性与类属性
    def info(self):
        gender = '男'  # 普通变量
        print(self.name, self.address)

    # 静态方法 就是一个普通的函数 只不过这个函数的作用域在类中
    @staticmethod
    def aaa():
        pass

    # 类方法 可以去访问类属性
    @classmethod
    def bbb(cls):
        print(cls.gender)

    @property  # 将方法变成一个属性一样去使用
    def get_money(self):
        return self.money

    @get_money.setter
    def get_money(self, value):
        self.money = value
        return self.money


p = Person('安娜', '长沙')

res = p.get_money
print(res)

p.get_money = 200
print(p.get_money)



'''
一到两个功能

    创建一个迷你系统
        
        1. 装开发工具
        
        2. 装娱乐工具
        
        3. 游戏
        
    
'''



