---
title: Discussion 6 Quiz
layout: post
---

There are some [extra examples](../extra/disc06/) not on the worksheet that we went over during discussion.

{% problem %}

Implement a class `LoopList` that has a method `at_index`. If `at_index` is called with an index that is too large, the `LoopList` will loop around back to the beginning.

```python
class LoopList(object):
    """
    >>> x = LoopList([3, 1, 4])
    >>> [x.at_index(i) for i in range(10)]  # loops around!
    [3, 1, 4, 3, 1, 4, 3, 1, 4, 3]
    """
    pass
```

{% solution %}

```python
class LoopList(object):
    """
    >>> x = LoopList([3, 1, 4])
    >>> [x.at_index(i) for i in range(10)]  # loops around!
    [3, 1, 4, 3, 1, 4, 3, 1, 4, 3]
    """
    def __init__(self, lst):
        self.lst = lst

    def at_index(self, idx):
        return self.lst[idx % len(self.lst)]
```

{% endsolution %}
{% endproblem %}



{% problem %}

Draw the environment diagram (this one's hard!).

```python
def campa(nile):
    def ding(ding):
        nonlocal nile
        def nile(ring):
            return ding
    return nile(ding(1914)) + nile(1917)

ring = campa(lambda nile: 100)
```

{% solution %}

When looking through the environment diagram, be very _very_ careful about the order of operations! Remember that for every function call, we do:

1. Evaluate the operator (this means resolving the name of the function to the function itself!)
2. Evaluate the operands, from left to right.
3. Apply the operator on the operands.

{% environment %}
http://pythontutor.com/composingprograms.html#code=def+campa(nile%29%3A%0A++++def+ding(ding%29%3A%0A++++++++nonlocal+nile%0A++++++++def+nile(ring%29%3A%0A++++++++++++return+ding%0A++++return+nile(ding(1914%29%29+%2B+nile(1917%29%0A%0Aring+%3D+campa(lambda+nile%3A+100%29&mode=display&origin=composingprograms.js&cumulative=true&py=3&rawInputLstJSON=%5B%5D&curInstr=0
{% endenvironment %}
{% endsolution %}
{% endproblem %}
