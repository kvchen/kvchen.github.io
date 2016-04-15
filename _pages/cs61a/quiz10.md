---
title: Discussion 10 Quiz
layout: post
---

[Discussion Attendance](http://goo.gl/forms/B6c2Op4C4P)

{% problem %}

Earlier in the semester, we defined the `Tree` class, which contains a `label` and multiple branches leading to its `children`. Here's the class for reference:

```python
class Tree:
    def __init__(self, label, children=()):
        self.label = label
        for branch in children:
            assert isinstance(branch, Tree)
        self.children = list(children)

    def is_leaf(self):
        return not self.children
```

We wish to make these trees iterable, and display each label of the tree in _preorder_ traversal. That is, we iterate over the label of a tree before the labels of any of its children. We also iterate over each child in the order presented in the `children`.

1. What are the new method(s) you need to add in order to make these trees iterable?
2. Write out the code for these new method(s).

<!-- {% solution %}

One solution is to use a generator in our `__iter__` method:

```python
class Tree:
    def __iter__(self):
        yield self.label

        for child in self.children:
            for label in child:
                yield label
```
{% endsolution %} -->
{% endproblem %}


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
