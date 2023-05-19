# -*- coding: utf-8 -*-
# @Time : 2022/11/14 下午9:08
# @Author : 顾安
# @File : 3. 使用UDP协议接收数据.py
# @Software: PyCharm

import socket

# 1. 创建套接字
udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# 2. 定义接收方地址
send_address = ('192.168.65.176', 8080)

# 3. 获取数据
send_data = input('请输入你要发送的信息: ')

# 4. 发送数据
udp_socket.sendto(send_data.encode(), send_address)

# 5. 接收数据
# 1024: 一次性可以接收的最大的字节数
# recvfrom 方法有返回值
recv_data = udp_socket.recvfrom(1024)  # 当前代码会阻塞 等待发送方的数据过来
print(recv_data[0].decode())

# 6. 关闭套接字
udp_socket.close()


