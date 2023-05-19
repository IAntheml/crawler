# -*- coding: utf-8 -*-
# @Time : 2022/11/14 下午9:30
# @Author : 顾安
# @File : 5. UDP 聊天器.py
# @Software: PyCharm


import socket

"""
定义一个程序
    当前这个程序有两个功能
        数据接收/数据发送

使用函数的形式进行代码编写
"""


# 数据发送
def send_message(udp_socket):
    # 1. 获取用户输入的信息
    message = input('请输入你要发送的信息: ')
    # 2. 定义接收方的地址
    dest_ip = ('192.168.65.176', 8080)
    # 3. 发送数据
    udp_socket.sendto(message.encode(), dest_ip)


# 数据接收
def recv_message(udp_socket):
    # 1. 接收数据
    recv_message = udp_socket.recvfrom(1024)
    # 2. 将信息提取并进行解码
    print(recv_message[0].decode())


def main():
    # 1. 创建一个套接字对象
    udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    # 2. 绑定本地信息
    local_address = ('', 6666)
    udp_socket.bind(local_address)

    # 3. 让用户自主选择相关功能 并且在完成对应功能时程序不能退出
    while True:
        print('1.发送消息')
        print('2.接收消息')
        print('3.退出程序')
        op_num = input('请输入你要操作的序号: ')
        # 4. 根据用户所输入的序号进行相关的功能调用
        if op_num == '1':
            # 数据发送
            send_message(udp_socket)
        elif op_num == '2':
            recv_message(udp_socket)
        elif op_num == '3':
            break
        else:
            print('当前输入有误, 请重新输入')
    udp_socket.close()


if __name__ == '__main__':
    main()


'''
大家在课下练习的时候无需安装网络调试助手
    必须创建两个python文件
        1. 发送方
        2. 接收方
        
    注意点：
        在本地练习的同学 首先运行接收端 再去运行发送端
        接收端和发送端的端口不能一致
        
        接收端: 6666
        发送端: 6667
        
        本地调试ip地址为: 127.0.0.1 
'''