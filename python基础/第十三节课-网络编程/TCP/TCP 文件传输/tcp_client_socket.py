# -*- coding: utf-8 -*-
# @Time : 2022/11/16 下午9:24
# @Author : 顾安
# @File : tcp_client_socket.py
# @Software: PyCharm


import socket


def main():
    tcp_client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    server_ip = '192.168.65.176'
    server_port = 6666

    # 连接服务器
    tcp_client_socket.connect((server_ip, server_port))

    # 输入你要下载的文件名
    file_name = input('请输入要下载的文件名: ')
    tcp_client_socket.send(file_name.encode('utf-8'))

    # 接收服务器发送过来的文件数据
    recv_data = tcp_client_socket.recv(1024)

    # 判断当前文件是否有内容
    if recv_data:
        with open('新:' + file_name, 'wb') as f:
            f.write(recv_data)
    else:
        print('文件已损坏...')

    tcp_client_socket.close()


if __name__ == '__main__':
    main()


'''
NAS
    
'''