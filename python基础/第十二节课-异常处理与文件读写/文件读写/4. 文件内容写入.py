# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午10:05
# @Author : 顾安
# @File : 4. 文件内容写入.py
# @Software: PyCharm


path = 'test.txt'

f_name = open(path, 'w')
f_name.write('今晚我家没人～')

f_name_2 = open(path, 'a')
f_name_2.write('\n让你看看我的夜光手表')




