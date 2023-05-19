# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 9:26 下午
# @Author  : 顾安
# @File    : 17. super 方法的使用二.py
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


father = Father('父亲', 40)
print(father)


son = Son('儿子', 18, '高中')
print(son)

'''
如果在子类中重写了父类的构造方法 并且在父类中构造方法中的参数子类也会使用到
则可以使用super().__init__() 将父类所需要的参数进行传递 
并可以在子类中创建属于这个子类的独有的实例属性
'''
