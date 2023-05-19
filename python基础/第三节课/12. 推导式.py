# -*- coding: utf-8 -*-
# @Time    : 2022/9/29 9:14 下午
# @Author  : 顾安
# @File    : 12. 推导式.py
# @Software: PyCharm


# int_list = [x for x in range(1, 21) if x % 2 == 0]
# print(int_list)

# int_list = []
# for i in range(1, 21):
#     if i % 2 == 0:
#         int_list.append(i)
#
# print(int_list)


a = [x for x in range(5)]
print(a)

a = [x for x in range(3, 4)]
print(a)

a = [x for x in range(3, 19)]
print(a)

a = [x for x in range(0, 20, 2)]
print(a)

# 列表推导式的规范为: [变量 for 变量 in 循环对象]


# 在推导式中加入条件判断
a = [x for x in range(0, 11) if x % 2 == 0]
print(a)
a = [x for x in range(0, 11) if x % 2 != 0]
print(a)

# 在推导式中使用嵌套循环
a = [(x, y) for x in range(1, 3) for y in range(3)]
print(a)

a = [(x, y, z) for x in range(1, 3) for y in range(3) for z in range(4, 6)]
print(a)

# 生成字典序列 要求value的结果是key的平方
int_dict = [{x: x ** 2} for x in range(1, 11)]
print(int_dict)

