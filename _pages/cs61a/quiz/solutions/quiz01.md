---
title: Discussion 1 Quiz Solutions
layout: post
---

1.  Are these primitive expressions or call expressions?
    * `3`: **primitive expression**
    * `add(2, 3)`: **call expression**
    * `print(5)`: **call expression**
    * `3 + 4`: **call expression**


2.  When do we make a new frame in an environment diagram?
    
    **We make a new frame whenever we call a _user-defined_ function.**

3.  Implement the function `nearest_two`, which takes a positive number `x` as
    input, and returns the power of two (..., 1/8, 1/4, 1/2, 1, 2, 4, 8, ...)
    that is nearest to `x`. If there is a tie, return the larger value.

    ```python3
    def nearest_two(x):
        """Returns the power of two that is nearest to x.
        >>> nearest_two(8)
        8.0
        >>> nearest_two(11.5)  # closer to 8 than to 16
        8.0
        >>> nearest_two(0.75)  # tie between 0.5 and 1
        1.0
        """
        power_of_two = 1.0

        if x < 1:
            factor = 0.5
        else:
            factor = 2.0

        while abs(power_of_two * factor - x) < abs(power_of_two - x):
            power_of_two *= factor

        # Check if our powers are equidistant
        if abs(power_of_two * 2 - x) == abs(power_of_two - x):
            power_of_two *= 2

        return power_of_two
    ```

4.  Imagine we run the following lines through a Python interpreter. Draw the
    environment diagram after executing the program.

    ```python3
    def swap(x, y):
        x, y = y, x
        return print('Swapped!', x, y)

    x, y = 60, 1
    a = swap(x, y)
    swap(a, y)
    ```

    [Environment Diagram](http://goo.gl/wDbJX3)
