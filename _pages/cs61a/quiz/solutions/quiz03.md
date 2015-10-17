---
title: Discussion 3 Quiz Solutions
layout: post
---

**Note**: If you wish to meet with me one on one to discuss the course, please shoot me an email with your available times. My email can be found on the [course info page](/cs61a/). If you want to tell me how to improve, please use [this form](http://goo.gl/forms/fUieXB6oHv) or send me a private email if you want me to get back to you.

1. Draw the environment diagram.

    ```python3
    def reverse(lst):
        if len(lst) <= 1:
            return lst
        return reverse(lst[1:]) + [lst[0]]

    l = [1, [2, 3], 4]
    rev = reverse(l)
    ```

    [Environment Diagram](http://goo.gl/e2Jygk)

2. What does the following code print?

    ```python3
    lst = [None] * 10
    for i in range(10):
        lst[i] = lambda: i

    for func in lst:
        print(func())
    ```

    Note that all the lambda functions are not called until the second for loop - they are simply defined in the first for loop. By the time the second loop spins `i` has taken on the value 9, so the number 9 is printed 10 times. The key here is that _the value of `i` is never stored inside the lambda function - the lambdas get the value of `i` from the outer frame_.

    ```python3
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

3. Implement a function `addup` that takes in a `lst` of numbers and a target value `n`. It should return `True` if some subset of `lst` adds up to `n`. Numbers in `lst` may not be reused. For example:

    ```python3
    >>> addup([3, 4, 5], 9)
    True # 4 + 5 = 9
    >>> addup([3, 9, 27, 81], 3)
    True # 3 = 3
    >>> addup([3, 9, 27, 81], 33)
    False
    ```

    ```python3
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

    **Followup**: What needs to be changed if values in `lst` can be reused?

    If values can be reused, then we can change the 7th line to:

    ```python3
    if addup(tup, n ­- num):
    ```

    Since we don't remove any elements from `tup` in our recursive call, then we can reuse any element any number of times.
