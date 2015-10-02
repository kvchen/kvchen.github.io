---
title: Discussion 4 Quiz
layout: post
---

[Attendance Form](http://goo.gl/forms/3okNT4spS4)

1. Implement a function `running_total` that mutates a list of numbers such
that the $i$th element is the sum of the first $i+1$ elements.

    ```python3
    def running_total(lst):
        """Computes a running total over a list of numbers.
        >>> l = [1, 2, 3]
        >>> running_total(l)  # mutates the original list, returns None
        >>> l  # [1, 1+2, 1+2+3]
        [1, 3, 6]
        """
        return
    ```

2. Draw the environment diagram.

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
