# // 在依赖项中添加包： --save
# npm install crypto-js  --save

# 使用案例
import hashlib

def md5_test():
    md5 = hashlib.md5()
    md5.update('python'.encode('utf-8'))
    print(md5.hexdigest())

if __name__ == '__main__':
    md5_test()