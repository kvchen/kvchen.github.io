---
title: Discussion 6 Quiz Solutions
layout: post
---

1. Draw the box-and-pointer diagram for the linked list `link` after the following code is executed.

    ```python3
    >>> link = Link(0)
    for i in range(1, 3):
    ... link = Link(i, Link(link, link))
    ...
    >>> link.rest.rest.rest = link.rest
    ```

    ```
                    +-------------+      
                    |             v      
    +---+---+     +---+---+     +---+---+
    |   |   |     | | |   |     |   |   |
    | 2 | +-----> | + | +-----> | 1 | + |
    |   |   |     |   |   |     |   | | |
    +---+---+     +---+---+     +---+---+
                    ^                 |  
                    +-----------------+  
    ```


2. Write a function `all_paths` that takes in a `Tree` and returns a list of paths from the root to leaves. Each path is represented as a `Link`.

    ```python3
    def all_paths(tree):
        if tree.is_leaf():
            return [Link(tree.entry)]

        result = []
        for branch in tree.children:
            result += [Link(tree.entry, path)
                       for path in all_paths(branch)]

        return result
    ```
