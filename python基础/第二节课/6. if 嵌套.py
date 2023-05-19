# -*- coding:utf-8 -*-
# @FileName: 6. if 嵌套.py
# @Time    : 2022/9/21 9:47 下午
# @Author  : 顾安


ticket = 0  # 用True代表有车票，False代表没有车票
knife_length = 11  # 刀子的长度，单位为cm

if ticket == 1:
    print("有车票，可以进站")
    if knife_length < 9:
        print("通过安检")
        print("终于可以见到Ta了，美滋滋~~~")
    else:
        print("没有通过安检")
        print("刀子的长度超过规定，等待警察处理...")
else:
    print("没有车票，不能进站")
    print("亲爱的，那就下次见了")



'''
pycharm的使用技巧
    debug
        可以通过debug进行代码的单步执行
    断点 
'''