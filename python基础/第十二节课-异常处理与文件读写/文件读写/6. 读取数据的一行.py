# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午10:16
# @Author : 顾安
# @File : 6. 读取数据的一行.py
# @Software: PyCharm

path = 'test.txt'
read_file = open(path, 'r')
# readline 读取一行 每一行数据最后有一个隐藏的\n
print(read_file.readline(1))

# readlines 将文件中的所有的数据全部读取 如果读取一行数据则将这一行数据作为一个列表的元素
# print(read_file.readlines())

