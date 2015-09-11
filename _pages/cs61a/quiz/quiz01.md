---
title: Discussion 1 Quiz
layout: post

tags: []
---

1. Are these primitive expressions or call expressions?
  * `3`
  * `add(2, 3)`
  * `print(5)`
  * `3 + 4`


2. When do we make a new frame in an environment diagram?


3. Implement the function `nearest_two`, which takes a positive number `x` as
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

        """YOUR CODE HERE"""

        return power_of_two

    ```

4. Imagine we run the following lines through a Python interpreter. Draw the
   environment diagram after executing the program.

    ```python3

    def swap(x, y):
        x, y = y, x
        return print('Swapped!', x, y)

    x, y = 60, 1
    a = swap(x, y)
    swap(a, y)

    ```