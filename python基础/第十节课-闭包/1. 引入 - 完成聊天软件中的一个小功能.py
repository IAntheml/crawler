# -*- coding:utf-8 -*-
# @FileName: 1. 引入 - 完成聊天软件中的一个小功能.py
# @Time    : 2022/11/4 20:03
# @Author  : 顾安


"""
在聊天软件中显示是谁发送的信息 - 信息标记
"""


# 1. 普通方式
def say(user_name, content):
    print(f'{user_name}: {content}')


user_name_1 = '安娜'
user_name_2 = '双双'


say(user_name_1, '今天吃了么？')
say(user_name_2, '吃过了...')

say(user_name_1, '吃了啥？')
say(user_name_2, '一头母牛')

say(user_name_1, '为啥没叫我？')
say(user_name_2, '我一个人正好')

say(user_name_1, '你小气~')
say(user_name_2, '不客气~')

