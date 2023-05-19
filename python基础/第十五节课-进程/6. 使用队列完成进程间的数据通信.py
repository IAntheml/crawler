__author__ = 'Administrator'
import multiprocessing

"""
当前通过一个进程进行网站的数据抓取
另外一个进程负责数据的读写
"""


def download_from_web(q):
    """模拟抓取下来的数据"""
    data = [1, 2, 3, 4]
    # 向队列写入数据
    for temp in data:
        q.put(temp)

    print('数据上传队列成功...')


def get_data(q):
    queue_data = list()
    # 从队列中获取数据
    while True:
        data = q.get()
        queue_data.append(data)
        if q.empty():
            break
    # 模拟数据读写
    print(queue_data)


def main():
    q = multiprocessing.Queue()

    p_1 = multiprocessing.Process(target=download_from_web, args=(q,))
    p_2 = multiprocessing.Process(target=get_data, args=(q,))

    p_1.start()
    p_1.join()
    p_2.start()


if __name__ == '__main__':
    main()

