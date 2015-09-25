---
title: Discussion 3 Quiz
layout: post
---

[Section 135 Attendance](http://goo.gl/forms/sbVTZgd6pC) · [Section 139 Attendance](http://goo.gl/forms/pxW84o12K0)

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

2. What does the following code print?

    ```python3
    lst = [None] * 10
    for i in range(10):
        lst[i] = lambda: i

    for func in lst:
        print(func())
    ```
