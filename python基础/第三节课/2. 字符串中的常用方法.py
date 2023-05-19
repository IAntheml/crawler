# -*- coding: utf-8 -*-
# @Time    : 2022/9/26 8:56 下午
# @Author  : 顾安
# @File    : 2. 字符串中的常用方法.py
# @Software: PyCharm


# find
# my_str = 'http://www/baidu.com'
# print(my_str.find('www'))  # 查询词组返回的是第一个字母的下标
# print(my_str.find('s'))

# rfind 区分当前你写的字符个数
# print(my_str.rfind('w'))

# count 查询当前你指定的字符所出现的次数
# print(my_str.count('s'))

# replace
my_str = "welcome to www.tulingxueyuan.com"
print(my_str.replace('w', 'W', 1))
'Welcome to www.tulingxueyuan.com'

# split
print(my_str.split(' '))

# startswith
print(my_str.startswith('welcome'))
# endswith
print(my_str.endswith('org'))

print('-' * 20)
# lower

my_str_2 = "Welcome to www.tulingxueyuan.com"
print(my_str_2.lower())
print(my_str_2.upper())

print('-' * 20)

my_str_3 = my_str_2 = "   Welcome to www.tulingxueyuan.com   "
print(my_str_3)
print(my_str_3.strip())

print('-' * 20) 
print(my_str.partition('to'))


my_str_4 = """
welcome 
to 
www.tulingxueyuan.com
thank you
"""

print(my_str_4.splitlines())

print('-' * 20)

my_str_5 = 'abc1'
print(my_str_5.isalpha())

print('-' * 20)

my_str_6 = '123456'
print(my_str_6.isdigit())

print('-' * 20)
my_str_7 = 'abc123'
print(my_str_7.isalnum())


print('-' * 20)
# join
my_str_8 = '-'
str_list = ['welcome', 'to', 'changsha']
# 返回一个新的字符串
print(my_str_8.join(str_list))  # join方法会返回一个新的字符串 大家可以声明一个变量来接收这个新的字符串
print(my_str_8)
print(str_list)






