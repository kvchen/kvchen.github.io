---
title: Discussion 6 Quiz
layout: post
---

[Attendance Form](http://goo.gl/forms/CnzpFkGtkq)

1. Draw the box-and-pointer diagram for the linked list `link` after the following code is executed.

    ```python3
    >>> link = Link(0)
    for i in range(1, 3):
    ... link = Link(i, Link(link, link))
    ...
    >>> link.rest.rest.rest = link.rest
    ```

2. Write a function `all_paths` that takes in a `Tree` and returns a list of paths from the root to leaves. Each path is represented as a `Link`.

    ```python3
    def all_paths(tree):
        """YOUR CODE HERE."""
    ```
