# -*- coding: utf-8 -*-
# @Time    : 2022/9/29 8:57 下午
# @Author  : 顾安
# @File    : 11. 关于字典的遍历方式.py
# @Software: PyCharm


teacher_info = {
    'name': '夏洛',
    'age': 18,
    'address': '长沙',
    'gender': '男'
}

# 想要拿到字典的key
for item in teacher_info:
    print(item)

print('-' * 20)

for item in teacher_info.keys():
    print(item)

print('=' * 20)

# 拿到字典中的值
for value in teacher_info.values():
    print(value)

print('+' * 20)

# 拿到字典中的所有的key和value
# items是字典中的一个方法 方法有返回值 返回值的类型是元组类型
for item in teacher_info.items():
    print(item)

# 如果查询的key在字典中不存在则报错
# print(teacher_info['money'])

# 如果不确定自己查询的key是否存在于这个字典中，但是不想让程序报错
print(teacher_info.get('money', '当前的key不存在'))
teacher_info['name'] = '木木'
print(teacher_info)

teacher_info['money'] = 100
print(teacher_info)

del teacher_info['name']
# del teacher_info
print(teacher_info)
teacher_info.clear()
print(teacher_info)

