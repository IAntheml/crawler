# -*- coding: utf-8 -*-
# @Time : 2022/11/16 下午1:39
# @Author : 顾安
# @File : tcp_server_socket.py
# @Software: PyCharm


import socket


def get_file(file_name):
    # 获取文件内容
    try:
        with open(file_name, 'rb') as f:
            content = f.read()
            return content
    except:
        print('没有下载的文件：%s' % file_name)


def main():
    # 创建套接字对象
    tcp_server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 本地信息绑定
    address = ('', 6666)
    tcp_server_socket.bind(address)
    # 被动监听
    tcp_server_socket.listen(128)

    while True:
        # 等待链接
        new_socket, cli_address = tcp_server_socket.accept()
        # 数据接收
        recv_data = new_socket.recv(1024)
        file_name = recv_data.decode('utf-8')
        print(f'对方请求下载的文件名为: {file_name}')
        file_content = get_file(file_name)

        # 发送数据给客户端, 当前数据格式为二进制
        if file_content:
            new_socket.send(file_content)
        # 关闭套接字
        new_socket.close()


if __name__ == '__main__':
    main()
