# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午10:10
# @Author : 顾安
# @File : 5. 关于文件读取的编码问题.py
# @Software: PyCharm

path = 'test.txt'

# windows bgk

# f_name = open(path, 'w', encoding='gbk')
# f_name.write('我家的猫会跳高...')


read_file = open(path, 'r', encoding='gbk')
print(read_file.read())
