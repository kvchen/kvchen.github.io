class nil:
    """The empty list"""
    def __len__(self):
        return 0

    def map(self, fn):
        return self

nil = nil()  # this hides the nil class *forever*


class Pair:
    def __init__(self, first, second=nil):
        self.first, self.second = first, second

    def __len__(self):
        n, second = 1, self.second
        while isinstance(second, Pair):
            n, second = n + 1, second.second
        if second is not nil:
            raise TypeError("length attempted on improper list")
        return n

    def __getitem__(self, k):
        if k == 0:
            return self.first
        if k < 0:
            raise IndexError("negative index into list")
        elif self.second is nil:
            raise IndexError("list index out of bounds")
        elif not isinstance(self.second, Pair):
            raise TypeError("ill-formed list")
        return self.second[k-1]

    def map(self, fn):
        """Returns a Scheme list after applying a Python function fn over
        self."""
        applied = fn(self.first)
        if self.second is nil or isinstance(self.second, Pair):
            return Pair(applied, self.second.map(fn))
        else:
            raise TypeError("ill-formed list")

    def to_py_list(self):
        """Returns a Python list containing the elements of this Scheme list.
        """
        y, result = self, []
        while y is not nil:
            result.append(y.first)
            if not isinstance(y.second, Pair) and y.second is not nil:
                raise TypeError("ill-formed list")
            y = y.second
        return result
