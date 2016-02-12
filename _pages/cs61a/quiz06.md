---
title: Discussion 6 Quiz
layout: post
---

{% problem %}

1. Draw the box-and-pointer diagram for the linked list `link` after the following code is executed.

```python
>>> link = Link(0)
for i in range(1, 3):
... link = Link(i, Link(link, link))
...
>>> link.rest.rest.rest = link.rest
```

{% solution %}

Even I think this looks awful. I should probably use Paint or something next time.

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
{% endsolution %}
{% endproblem %}



{% problem %}

Write a function `all_paths` that takes in a `Tree` and returns a list of paths from the root to leaves. Each path is represented as a `Link`.

```python
def all_paths(tree):
    """YOUR CODE HERE."""
```

{% solution %}

```python
def all_paths(tree):
    if tree.is_leaf():
        return [Link(tree.entry)]

    result = []
    for branch in tree.children:
        result += [Link(tree.entry, path)
                   for path in all_paths(branch)]

    return result
```
    
{% endsolution %}
{% endproblem %}