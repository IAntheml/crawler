# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 9:52 下午
# @Author  : 顾安
# @File    : 19. 多态.py
# @Software: PyCharm


class Dog:
    def bark(self):
        print('狗汪汪叫...')


class LangDog(Dog):
    def bark(self):
        print('细狗汪汪叫....')


class ZangAo(Dog):
    pass


class Person:
    def __init__(self, name):
        self.name = name

    def person_pk_dog(self, dog):
        print(f'{self.name}在打狗....')
        dog.bark()


anna = Person('安娜')

dog1 = Dog()
dog2 = LangDog()
dog3 = ZangAo()

anna.person_pk_dog(dog1)
anna.person_pk_dog(dog2)
anna.person_pk_dog(dog3)
