"""
1. 正则表达式（需要再过一遍文档以及常见的正则表达式）
    贪婪模式：正则表达式默认是贪婪模式，尽可能匹配更多的字符，通常以*结尾
    非贪婪模式：通常以？结尾
    pattern=re.compile('正则表达式')
    print(pattern.match(字符串,start,end))#默认从头开始匹配，只匹配一次，返回一个match对象
    print(pattern.search(字符串,start,end))#从任意位置开始匹配，只匹配一次，返回一个match对象
    print(pattern.findall(字符串,start,end))#全文多次匹配，将匹配到的结果放到一个list返回给我们
    print(pattern.finditer(字符串,start,end))#全文多次匹配，将匹配到的结果放到一个match对象的迭代器返回

"""