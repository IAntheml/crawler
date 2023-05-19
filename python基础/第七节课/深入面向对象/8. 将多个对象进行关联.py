# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:54 下午
# @Author  : 顾安
# @File    : 8. 将多个对象进行关联.py
# @Software: PyCharm


class ClassRoom:
    def __init__(self, name):
        self.name = name
        self.students = []

    def add_new_stu(self, stu):
        self.students.append(stu)


class Student:
    def __init__(self, name):
        self.student_name = name


class_01 = ClassRoom('python 1班')

# 想要让多个学生加入到这个班级中
stu_1 = Student('安娜')
stu_2 = Student('双双')
stu_3 = Student('木木')

class_01.add_new_stu(stu_1)
class_01.add_new_stu(stu_2)
class_01.add_new_stu(stu_3)

print(class_01.students[0].student_name)
print(class_01.students[1].student_name)
print(class_01.students[2].student_name)

# 想要让一个实例对象关联到多个实例对象中 可以使用序列类型进行实例对象的临时存储
