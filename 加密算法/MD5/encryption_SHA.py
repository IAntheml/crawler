# SHA1：40位
# SHA224: 56位
# SHA256: 64位
# SHA512: 128位
import hashlib

def sha1_test2():
    sha1 = hashlib.sha1()
    sha1.update('I love python!'.encode('utf-8'))
    print(sha1.hexdigest())

if __name__ == '__main__':
    sha1_test2()