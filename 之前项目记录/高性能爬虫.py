# from queue import Queue
#
# q = Queue(maxsize=100)
# q.put('aaa')
# q.put('bbb')
# # print(q.get())
# q.task_done()
# print(q.qsize())
#
# q.join()  # 队列维持计数，当计数不为0时会阻塞线程，队列计数为0后才会执行下方代码， 通过put操作，计数会+1，get取值时计数不会减一，使用task_done才会减一。

import threading
import time
from queue import Queue
import pymongo
import requests


class Aqiyi():
    def __int__(self):
        self.client = pymongo.MongoClient()
        self.collection = self.client['spiders']['aqiyi']
        self.url = ''
        self.headers = {}
        self.url_queue = Queue()
        self.json_queue = Queue()
        self.content_queue = Queue()

    def get_url(self):
        for i in range(1, 10):
            self.url_queue.put(self.url.format(i))

    def get_data(self):
        # while self.url_queue.qsize() > 0:
        while True:
            data_url = self.url_queue.get()
            response = requests.get(data_url, headers=self.headers)
            self.json_queue.put(response.json())
            self.url_queue.task_done()

    def parse_data(self):
        # while self.json_queue.qsize() > 0:
        while True:
            data = self.json_queue.get()
            for i in data['data']['list']:
                item = {}
                item['title'] = i['title']
                item['playUrl'] = i['playUrl']
                item['description'] = i['description']
                self.content_queue.put(item)
            self.json_queue.task_done()

    def sava_data(self):
        # while self.content_queue.qsize()>  0: 这样写的问题是队列中没有数据会直接结束方法从而结束调用该方法的线程
        while True:
            item = self.content_queue.get()
            self.collection.insert_one(item)
            self.json_queue.task_done()

    def main(self):
        t_list = []
        t_url = threading.Thread(target=self.get_url)
        t_list.append(t_list)
        for i in range(2):
            t_data = threading.Thread(target=self.get_data)
            t_list.append(t_data)
        for i in range(2):
            t_parse = threading.Thread(target=self.parse_data)
            t_list.append(t_parse)
        # 保存数据一般用单线程, 多线程可能会出现资源竞争问题
        t_save = threading.Thread(target=self.sava_data)
        t_list.append(t_save)

        for t in t_list:
            t.setDaemon(True)  # 把子线程设置为守护主线程，主线程结束，子线程也结束。
            t.start()

        for q in [self.url_queue, self.json_queue, self.content_queue]:
            q.join()  # 此处不使用qsize()方法判断是否全部取完作为结束的原因：取完不代表任务结束，用task_done来标记任务结束才能满足所有任务跑完才结束的需求


if __name__ == '__main__':
    t1 = time.time()
    aqy = Aqiyi()
    aqy.main()
    print('总花费时间：', time.time() - t1)


from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor(10) as f:
        f.submit()
