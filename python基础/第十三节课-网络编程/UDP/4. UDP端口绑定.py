# -*- coding: utf-8 -*-
# @Time : 2022/11/14 下午9:23
# @Author : 顾安
# @File : 4. UDP端口绑定.py
# @Software: PyCharm

import socket

udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# 绑定端口信息 防止操作系统随机分配
# ip地址在绑定时为空字符串：默认绑定本地ip
localhost_address = ('', 6789)
# 将设置好的地址载入到socket对象中
udp_socket.bind(localhost_address)

# 等待对方给我们发送消息
recv_data = udp_socket.recvfrom(1024)

# 打印接收到的信息
print(recv_data[0].decode())

# 关闭套接字
udp_socket.close()
