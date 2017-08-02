class A:
    def f(self):
        return 2

    def g(self, obj, x):
        if x == 0:
            return A.f(obj)
        return obj.f() + self.g(self, x - 1)


class B(A):
    def f(self):
        return 4


"""What gets printed when you run the following lines?
>>> x, y = A(), B()
>>> x.f()
"""
