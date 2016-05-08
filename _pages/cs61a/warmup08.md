---
title: Discussion 8 Warmup
layout: post
---

{% problem %}

Suppose we've run this code in Python:

~~~python
class ClassA:
    a = 0
    c = 10

    def __init__(self):
        a = 1
        self.a = 2


class ClassB(ClassA):
    b = 1
    c = 20

    def __init__(self):
        ClassB.b += 1
        self.b = ClassB.b
~~~

What would the Python interpreter display for each of the following lines?

~~~python
>>> ClassA.a

>>> a = ClassA()
>>> [a.a, ClassA.a, a.c]

>>> [ClassB.b, ClassB.a, ClassB.c]

>>> b = ClassB()
>>> [b.b, ClassB.b]

>>> b = ClassB()
>>> [b.b, ClassB.b]

~~~

<!-- {% solution %}
~~~python
>>> ClassA.a
0
>>> a = ClassA()
>>> [a.a, ClassA.a, a.c]
[2, 0, 10]
>>> [ClassB.b, ClassB.a, ClassB.c]
[1, 0, 20]
>>> b = ClassB()
>>> [b.b, ClassB.b]
[2, 2]
>>> b = ClassB()
>>> [b.b, ClassB.b]
[3, 3]
~~~
{% endsolution %} -->
{% endproblem %}
