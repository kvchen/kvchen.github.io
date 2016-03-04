class Foo(object):
    def __init__(self, a):
        self.a = a

    def garply(self):
        return self.baz(self.a)


class Bar(Foo):
    a = 1

    def baz(self, val):
        return val

