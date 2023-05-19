# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 9:37 下午
# @Author  : 顾安
# @File    : 18. super 方法的使用三.py
# @Software: PyCharm


class Father:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # __str__  # 通过print(实例对象) 会自动调用__str__ 方法
    def __str__(self):
        return f'{self.name}的年龄是: {self.age}'


class Son(Father):
    def __init__(self, name, age, collage):
        # 需要在子类的构造方法中调用父类的构造方法
        super().__init__(name, age)  # 因为在父类中有两个实例属性 在子类中将两个实例属性传递给父类
        self.collage = collage

    def __str__(self):
        return f'{self.name}的年龄是: {self.age}, 学历是: {self.collage}'


class GrandChild(Son):
    # 一个类在实例化的过程中会自动调用__init__方法
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.address = args
        print('当前子类需要完成的其他事情...')

    def __str__(self):
        return f'{self.name}的年龄是: {self.age}, 学历是: {self.collage}'


father = Father('父亲', 50)
print(father)

son = Son('儿子', 19, '大学')
print(son)

# grand_child = GrandChild('孙子', 2, '未上学', '长沙')
# print(grand_child)
