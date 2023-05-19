# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:01 下午
# @Author  : 顾安
# @File    : 2. 设置一个私有属性.py
# @Software: PyCharm


class StudentInfo:
    # 创建一个构造方法
    def __init__(self, name, age):
        self.name = name
        # 私有属性
        self.__age = age

    def info(self):
        print(f'我叫{self.name}, 今年{self.__age}岁')


stu = StudentInfo('安娜', 66)
stu.info()

# 将这个学生的年龄进行修改
# stu.__age = 18  # 因为是私有属性 所以无法进行修改
stu.info()

# 使用实例对象获取私有属性
# print(stu.__age)
#
# print(StudentInfo.__age)
'''
总结:
    私有属性的作用：保护数据的完整性
        只能在类的内部通过方法进行获取
        
    如果在类的外部
        实例对象或者类对象是无法获取私有属性的
'''

