# -*- coding: utf-8 -*-
# @Time : 2022/11/16 下午8:49
# @Author : 顾安
# @File : 2. tcp_server.py
# @Software: PyCharm

import socket


# 1. 买个手机
tcp_server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 2. 插入手机卡 python socket ip地址写成空字符串自动绑定默认的ip地址
address = ('', 6666)
tcp_server_socket.bind(address)

# 3. 将手机设置成监听状态
# 最大可以支持128个客户端的连接
tcp_server_socket.listen(128)

# 4. 等待别人打电话过来
# 这个方法的返回值是一个元组
# 元组中有两个元素
# 1. 一个新的tcp套接字: 数据发送/数据接收 因为第一个套接字负责连接的
# 2. 对方的ip和port
new_socket, cli_address = tcp_server_socket.accept()  # 阻塞代码 当客户端连接成功解堵塞


# 5. 接听对方打过来的电话
recv_message = new_socket.recv(1024)  # 堵塞代码 当客户端发送消息成功后解堵塞
print(recv_message.decode('utf-8'))

# 6. 回电
new_socket.send('over~'.encode('utf-8'))

# 在服务器关闭之前打印客户端的连接地址
print(cli_address)

# 7. 如果需要服务器关闭
new_socket.close()
tcp_server_socket.close()
