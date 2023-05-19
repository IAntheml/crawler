# -*- coding:utf-8 -*-
# @FileName: 5. elif 子句.py
# @Time    : 2022/9/21 9:37 下午
# @Author  : 顾安


score = 77  # 定义变量存储分数

if score >= 90 and score <= 100:  # 如果分数在90~100
    print('本次考试，等级为A')
elif score >= 80 and score < 90:  # 如果分数在80~90
    print('本次考试，等级为B')
elif score >= 70 and score < 80:  # 如果分数在70~80
    print('本次考试，等级为C')
elif score >= 60 and score < 70:  # 如果分数在60~70
    print('本次考试，等级为D')
elif score >= 0 and score < 60:  # 如果分数在60以下
    print('本次考试，等级为E')
else:  # 如果分数不在0~100之间，就认为错误
    print("分数有误...")


