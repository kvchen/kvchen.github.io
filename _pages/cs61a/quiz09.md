---
title: Discussion 9 Quiz
layout: post
---

[Discussion Attendance Form](http://goo.gl/forms/lbpnbUxksv)

{% problem %}

What are the first four values of the stream `s`?

```scheme
(define (sweet dreams)
  (cons-stream (list dreams) (sweet (list dreams))))

(define (mix tape)
  (cons-stream
    (car (car tape))
    (mix (append (match cdr-stream (cdr tape))
                 (list (cdr-stream (car tape)))))))

(define (match dot com)
  (if (null? com) nil
      (cons (dot (car com)) (match dot (cdr com)))))

(define s (mix (match sweet '(1 2 3))))
```

<!-- {% solution %}
The key here is to think about the purpose of `sweet` and `match`:

`sweet`: This returns a stream of lists, with each next element enclosed in one more set of parentheses.

`match`: This is basically the `map` procedure in disguise. We're taking the procedure `dot` and applying it to every element in the list `com`.

`mix`: Takes a list of streams `tape` as input. It pulls the first element from the first stream, then moves the first stream to the end of the list. Finally, it moves every stream in the list forward

Deciphering the final line, we first look at the innermost expression:

```scheme
(match sweet '(1 2 3))
```

Here, we're just mapping the procedure `sweet` over the list `(1 2 3)`. This gives us back a list of three infinite streams - here's the first one:

```scheme
[0]: (1)
[1]: ((1))
[2]: (((1)))
[3]: ((((1))))
...
```

The other two streams look the same, but with the numbers `2` and `3` instead.

```scheme
(((1) . #[delayed]) ((2) . #[delayed]) ((3) . #[delayed]))
```

So far so good! Now that we know what `mix` does, we can apply it to this list of streams to get the first four elements of our new stream `s`:

```scheme
[0]: (1)
[1]: ((2))
[2]: (((3)))
[3]: ((((1))))
...
```
{% endsolution %} -->
{% endproblem %}


{% problem %}

Earlier in the semester, we defined the `Tree` class, which contains an entry and multiple branches leading to its children. We wish to make these trees iterable, displaying each element of the tree in _preorder_ traversal. That is, we iterate over the entry of a tree before the entries of any of its children. We then iterate over each child in the order presented in the `branches`.

```python3
>>> t = Tree(1, [Tree(2, [Tree(3), Tree(4)]), Tree(5)])
>>> for entry in t:
...     print(entry)
1
2
3
4
5
```

What additional method(s) do you need to implement, and what do their implementation(s) look like?

```python3
class Tree:
    """A tree with entry as its root value."""
    def __init__(self, entry, branches=[]):
        self.entry = entry
        for branch in branches:
            assert isinstance(branch, Tree)
        self.branches = list(branches)
```

<!-- {% solution %}
The simplest way to accomplish this is to use a generator in the `__iter__` method.

```python3
def __iter__(self):
    yield self.entry
    for branch in self.branches:
        yield from branch
```
{% endsolution %} -->
{% endproblem %}