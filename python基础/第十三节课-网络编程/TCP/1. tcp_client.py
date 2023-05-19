# -*- coding: utf-8 -*-
# @Time : 2022/11/16 下午8:19
# @Author : 顾安
# @File : 1. tcp_client.py
# @Software: PyCharm


import socket


# 1. 创建一个tcp套接字
# socket.SOCK_DGRAM：UDP类型
# socket.SOCK_STREAM：TCP类型
tcp_client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 2. 建立连接 如果当前的服务器没有启动 客户端 服务器
# 定义连接ip与port
server_ip = input('请输入服务器ip地址: ')
server_port = int(input('请输入服务器端口: '))
tcp_client_socket.connect((server_ip, server_port))

# 3. 发送信息
message = input('请输入你要发送的信息: ')
# udp 发送数据的方法是：sendto
tcp_client_socket.send(message.encode('utf-8'))

# 4. 数据接收 UDP 接收数据的方法为：recvfrom
recv_message = tcp_client_socket.recv(1024)

# 5. 打印数据
print(recv_message.decode('utf-8'))

# 6. 关闭套接字
tcp_client_socket.close()


