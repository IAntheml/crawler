# -*- coding:utf-8 -*-
# @FileName: 2. 逻辑运算符的使用.py
# @Time    : 2022/9/21 8:33 下午
# @Author  : 顾安


# username = input('请输入用户名: ')
# password = input('请输入密码: ')
# print(username == '顾安' and password == 'admin')

print('-' * 20)

role = '员工'
print(role == '老板' or role == '领导')

print('-' * 20)

age = 20
print(age > 18)
print(not(age <= 18))

print('-' * 20)

age = 20
gender = '女性'
print(18 <= age <= 50 and gender == '女性')
# print(age >= 18 and age <= 50 and gender == '女性')

print('-' * 20)

other_age = 25
other_gender = '男性'
print((18 <= other_age <= 60 and other_gender == '男性') or (18 <= other_age <= 50 and other_gender == '女性'))





