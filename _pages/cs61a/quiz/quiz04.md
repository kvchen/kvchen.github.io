---
title: Discussion 4 Quiz
layout: post
---

[Attendance Form](http://goo.gl/forms/3okNT4spS4)

1. Complete the implementation of `print_by_level`, which takes in a tree and
   prints each "level" of the tree in sequential order, as a series of lists. A
   level of a tree is defined as all the elements at the same depth from the
   root. Assume that you can use `branches(tree)` and `root(tree)`.

    ```python3
    def print_by_level(t):
        """Prints each level of the tree as a list.

        >>> t = tree(1,[tree(3,[tree(2),tree(4)]),tree(6,[tree(5),tree(7)])])
        >>> print_by_level(t)
        [1]
        [3, 6]
        [2, 4, 5, 7]
        """
        expand_next, next_level, curr_level = [t], [], []
        while expand_next:
            for t in expand_next:
                ____________________
                curr_level.append(_________________)
            print(curr_level)
            expand_next, next_level, curr_level = ____________________
    ```

2. Implement a function `running_total` that mutates a list of numbers such
   that the $i$th element is the sum of the first $i+1$ elements.

    ```python3
    def running_total(lst):
        """Computes a running total over a list of numbers.
        >>> lst = [1, 2, 3]
        >>> running_total(lst)  # mutates the original list, returns None
        >>> lst  # [1, 1+2, 1+2+3]
        [1, 3, 6]
        """
        return
    ```

3. Draw the environment diagram.

    ```python3
    def world(series):
        if len(series) % 2 == 0:
            series[0] = series[:2]
            return [series.pop(1)]
        else:
            return series[:2]

    blue_jays = [1, 2, 3, 4]
    cardinals = world(blue_jays)
    cubs = world(blue_jays)
    royals = world(cubs)
    ```
