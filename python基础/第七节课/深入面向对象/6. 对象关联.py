# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:38 下午
# @Author  : 顾安
# @File    : 6. 对象关联.py
# @Software: PyCharm


class ClassRoom:
    def __init__(self, name):
        self.class_name = name


class Student:
    def __init__(self, name):
        self.student_name = name


class_01 = ClassRoom('python 1班')
stu_01 = Student('夏洛')


# 对当前这两个类进行关联
class_01.stu = stu_01  # 在班级类中动态的去创建了一个实例属性 stu属性
# 这个stu属性与stu_01进行了绑定
'''
在类中动态创建的stu属性指向的是学生类生产出来的实例对象
'''

