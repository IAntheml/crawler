# -*- coding: utf-8 -*-
# @Time : 2022/11/14 下午8:33
# @Author : 顾安
# @File : 1. socket的使用.py
# @Software: PyCharm

# 导入socket  python标准库
import socket

# 创建一个套接字
# 当前socket模块需要有两个参数 网络类型：ipv4 协议类型：udp
socket_udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# 就可以使用当前的这个套接字对象进行数据的收/发
# 关闭套接字
socket_udp.close()


'''
有两个协议是比较著名
    UDP
        速度快
        结构简单
        不安全 ---> 不保证数据能准确无误的送达到另外一台计算机上
        
        写信
            邮编 贴邮票 邮件箱
            邮递员帮助你去运送邮件
                邮递员是完全可信的么？
                如果邮递员在运送的过程中出现了意外  不知道
                
        网络直播
        游戏
        物联网  ---> 一部分
                
                 
    TCP
'''