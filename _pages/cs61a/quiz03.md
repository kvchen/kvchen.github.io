---
title: Discussion 3 Quiz
layout: post
---

[Attendance form](http://goo.gl/forms/rWwTi4vmPC)

{% problem %}

Draw the environment diagram.

```python
def reverse(lst):
    if len(lst) <= 1:
        return lst
    return reverse(lst[1:]) + [lst[0]]

l = [1, [2, 3], 4]
rev = reverse(l)
```

**Followup**: How would you modify this to _deep-reverse_ a list - that is, if an element of the list is also a list, that element gets reversed as well (and all lists under it)?

<!-- {% solution %}
{% environment %}
http://pythontutor.com/composingprograms.html#code=def+reverse(lst%29%3A%0A++++if+len(lst%29+%3C%3D+1%3A%0A++++++++return+lst%0A++++return+reverse(lst%5B1%3A%5D%29+%2B+%5Blst%5B0%5D%5D%0A%0Al+%3D+%5B1,+%5B2,+3%5D,+4%5D%0Arev+%3D+reverse(l%29&mode=display&origin=composingprograms.js&cumulative=true&py=3&rawInputLstJSON=%5B%5D&curInstr=0
{% endenvironment %}
{% endsolution %} -->
{% endproblem %}



{% problem %}

What does the following code print?

```python
lst = [None for _ in range(10)]
for i in range(10):
    lst[i] = lambda: i

for func in lst:
    print(func())
```

<!-- {% solution %}
Note that all the lambda functions are not called until the second for loop - they are simply defined in the first for loop. By the time the second loop spins `i` has taken on the value 9, so the number 9 is printed 10 times. The key here is that _the value of `i` is never stored inside the lambda function - the lambdas get the value of `i` from the outer frame_.

```python
9
9
9
9
9
9
9
9
9
9
```
{% endsolution %} -->
{% endproblem %}



{% problem %}

Implement a function `addup` that takes in a `lst` of numbers and a target value `n`. It should return `True` if some subset of `lst` adds up to `n`. Numbers in `lst` may not be reused. For example:

```python
>>> addup([3, 4, 5], 9)
True # 4 + 5 = 9
>>> addup([3, 9, 27, 81], 3)
True # 3 = 3
>>> addup([3, 9, 27, 81], 33)
False
```

**Followup**: What needs to be changed if values in `lst` can be reused?

<!-- {% solution %}
```python
def addup(tup, n):
    if n == 0:
        return True
    elif n < 0:
        return False
    else:
        for i, num in enumerate(tup):
            if addup(tup[i+1:], n ­- num):
                return False
        return True
```

If values can be reused, then we can change the 7th line to:

```python
if addup(tup, n ­- num):
```

Since we don't remove any elements from `tup` in our recursive call, then we can reuse any element any number of times.
{% endsolution %} -->
{% endproblem %}