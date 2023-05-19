# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:47 下午
# @Author  : 顾安
# @File    : 7. 对对象关联代码进行优化.py
# @Software: PyCharm


class ClassRoom:
    def __init__(self, name):
        self.class_name = name
        self.stu = None  # 让这个属性的默认值为None

    # 手动定义一个添加学生的方法
    def add_new_stu(self, stu):
        self.stu = stu


class Student:
    def __init__(self, name):
        self.student_name = name


class_01 = ClassRoom('python 1班')
stu_01 = Student('夏洛')

class_01.add_new_stu(stu_01)

# 如何使用班级类打印学生名称?
'''
通过clsss_01方法stu实例属性
stu属性指向的是student这个类的实例对象
所以可以使用 stu.student_name 访问学生类中的student_name属性
'''
print(class_01.stu.student_name)


