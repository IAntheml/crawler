def test(a, b, *args, **kwargs):
    print(a, type(a))
    print(b, type(b))
    print(args, type(args))
    print(kwargs, type(kwargs))

test(11, 22, 33, 44, 55, 66, name='顾安', address='长沙')