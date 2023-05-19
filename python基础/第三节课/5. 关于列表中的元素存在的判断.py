# -*- coding: utf-8 -*-
# @Time    : 2022/9/28 8:41 下午
# @Author  : 顾安
# @File    : 5. 关于列表中的元素存在的判断.py
# @Software: PyCharm


# 待查找的列表
stu_names = ['张三', '李四', '王五']

# 获取用户要查找的名字
# find_name = input('请输入要查找的姓名:')
#
# # 查找是否存在
# if find_name in stu_names:
#     print('找到了名字')
# else:
#     print('没有找到')

# 在python中的 in 是一个关键字
# 作用为:成员运算符 用来判断你指定的值是否在序列类型中


# 统计在列表中的元素出现的次数
data_list = ['a', 'b', 'b', 'c']
print(data_list.count('b'))


list_obj = ['张三', '李四', '王五', '张三']
print(list_obj.count('张三'))


# 列表删除
# del
movie_names = ['加勒比海盗', '骇客帝国', '第一滴血', '指环王', '霍比特人', '速度与激情']

for name in movie_names:
    print(name)

del movie_names[2]

print('-' * 20)

for name in movie_names:
    print(name)


# pop
# pop 删除方法与其他两个的区别是：有返回值
# pop 如果没有指定你要删除的元素下标的话则默认弹出最后一个
movie_name = movie_names.pop()
print('pop 弹出元素: ', movie_name)

# remove: 可以指定元素的名称进行删除
movie_names.remove('指环王')
print(movie_names)
