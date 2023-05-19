# -*- coding: utf-8 -*-
# @Time    : 2022/9/26 9:50 下午
# @Author  : 顾安
# @File    : 3. 列表.py
# @Software: PyCharm


stu_names = ['张三', '李四', '王五']  # 在列表中的值我们一般称之为元素
print(stu_names[0])  # 此时只输出张三

stu_names[0] = "顾安"
print(stu_names[0])  # 此时只输出顾安
print(stu_names)

# 切片
stu_names = ['张三', '李四', '王五']
print(stu_names[1:3])  # 此时得到一个新列表 [李四', '王五']
# 列表倒序
print(stu_names[::-1])

'''
序列类型一般是可以被for循环进行迭代取值的
'''
my_str = 'abcdef'
for i in my_str:
    print(i)

print('-' * 20)

int_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in int_list:
    print(i)

print('-' * 20)

length = len(int_list)
i = 0
while i < length:
    print(stu_names[i])
    i += 1
