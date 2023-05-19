# -*- coding: utf-8 -*-
# @Time    : 2022/10/11 8:17 下午
# @Author  : 顾安
# @File    : 17. 使用匿名函数对序列类型进行排序.py
# @Software: PyCharm


students = [
    {'name': '顾安', 'age': 18},
    {'name': '安娜', 'age': 20},
    {'name': '双双', 'age': 60},
]

# # 根据名称进行排序
# print(students)
# # unicode 编码集来的
# students.sort(key=lambda x: x['name'])
# print(students)
#
#
# # 根据年龄进行排序
# students.sort(key=lambda x: x['age'])
# print(students)


obj = lambda x: x['name']
# for item in students:
#     print(obj(item))


def my_sort(item):
    return item['age']

students.sort(key=my_sort)
print(students)


# for item in students:
#     print(obj(item))
#
# students.sort(key=lambda x: x['age'])
# print(students)



