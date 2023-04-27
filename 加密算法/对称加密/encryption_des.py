"""
常见算法归纳
DES: 56位密钥，由于密钥太短，被逐渐被弃用。
AES: 有128位、192位、256位密钥，现在比较流行。密钥长、可以增加破解的难度和成本。

工作模式归纳
1. ECB模式：全称Electronic Codebook模式，译为电子密码本模式，每个数据块独立进行加/解密
2. CBC模式：全称Cipher Block Chaining模式，译为密文分组链接模式
3. CFB模式：全称Cipher FeedBack模式，译为密文反馈模式
4. OFB模式：全称Output Feedback模式，译为输出反馈模式。
5. CTR模式：全称Counter模式，译为计数器模式。
"""