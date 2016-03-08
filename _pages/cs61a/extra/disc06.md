---
title: Discussion 6 Extra
layout: post
---

Here are some extra examples we went over in class that are important to know for the midterm.

### Inherited class variables

```python
>>> c.foo
5
>>> A.foo = 8
>>> c.foo
8
```

### Class variable and instance attribute precedence

```python
>>> a.foo = 9
>>> c.foo
5
>>> c.foo = 7
>>> a.foo
9
>>> A.foo
5
```

### Binding methods to classes

```python
>>> c = C()
>>> C.bar = lambda x: print(x)
>>> c.bar("ayyy")
Error
>>> C.bar = lambda self, x: print(x)
>>> c.bar("lmao")
lmao
```

### Binding methods to instances (not really!)

```python
>>> c0.bar = lambda self: print(self.foo)
>>> c1.bar()
Error
>>> c0.bar()
Error
>>> c1.bar(c1)
Error
>>> c0.bar(c1)
5
```
