# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 8:17 下午
# @Author  : 顾安
# @File    : 2. 关于缺省参数的案例代码.py
# @Software: PyCharm


def print_info(name, class_name, grade, department_name, school_name='图灵学院'):
    print('老师好, 我是来自 %s (大学) %s系 %s年级 %s班级的学生, 我叫%s' % (
        school_name,
        department_name,
        grade,
        class_name,
        name
    ))


print_info('夏洛', '全栈开发', '一', '软件工程', '北京大学')

# 因为现在我已经知道这位学生的大学名称 但是不知道当前这个学生的详细信息
print_info('夏洛', '全栈开发', '一', '软件工程')
