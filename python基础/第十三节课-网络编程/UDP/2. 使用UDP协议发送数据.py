# -*- coding: utf-8 -*-
# @Time : 2022/11/14 下午8:52
# @Author : 顾安
# @File : 2. 使用UDP协议发送数据.py
# @Software: PyCharm

# 1. 导入套接字模块
import socket

# 2. 创建一个套接字对象
udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# 3. 编辑接收方到地址（ip/port）
'''
我需要知道当前接收消息的一方的ip和接收消息软件所占用的端口
在macOS中将信息发送到Ubuntu上

ubuntu：
    ip：192.168.65.176
    port：8080
'''

send_address = ('192.168.65.176', 8080)

# 4. 获取用户输入的信息
send_message = input('请输入你要发送的信息: ')

# 5. 将接收到的信息发送到Ubuntu上
# 发送信息需要将字符串转为一个字节类型
# encode：编码 将字符串编码为字节
# 如果大家使用的是windows 则需要在方法中指定编码集 gbk
udp_socket.sendto(send_message.encode(), send_address)

# 6. 关闭套接字 释放端口
udp_socket.close()

