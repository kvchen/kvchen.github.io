---
title: Discussion 8 Quiz
layout: post
---

{% problem %}

Write a tail-recursive procedure `binary-to-decimal` that converts a list `bits` of zeros and ones into the corresponding base-10 number. **Hint**: Use a helper procedure!

```scheme
(define (binary-to-decimal bits)
  'YOUR-CODE-HERE
)
```

```scheme
scm> (binary-to-decimal (list))
0
scm> (binary-to-decimal (list 1 0 1))        ; 4 + 1
5
scm> (binary-to-decimal (list 1 1 1 1 0 1))  ; 32 + 16 + 8 + 4 + 1
61
```

{% solution %}

```scheme
(define (binary-to-decimal bits)
  (define (helper bits sofar)
    (if (null? bits)
        so - far
        (helper (cdr bits)
                (+ (* 2 sofar) (car bits)))))
  (helper bits 0)
)
```

{% endsolution %}
{% endproblem %}



{% problem %}

Fill in the blanks for the function `matched_up`, which takes in a string `parens` and checks if all the open parentheses are properly matched with closing parentheses. **Hint**: use `stack.pop` and `stack.append`.

```python3
def matched_up(parens):
    """Checks that all the parentheses in a string are matched up properly.

    >>> matched_up("()")
    True
    >>> matched_up("(()())")
    True
    >>> matched_up("()((")
    False
    >>> matched_up("()()")
    True
    >>> matched_up(")())")
    False
    """
    stack = []

    for c in parens:
        if _____________________:
            _____________________
        elif _____________________:
            if _____________________ or _____________________:
                return False

    return _____________________
```

{% solution %}

```python3
def matched_up(parens):
    """Checks that all the parentheses in a string are matched up properly."""
    stack = []

    for c in parens:
        if c == '(':
            stack.append(c)
        elif c == ')':
            if not stack or stack.pop() != '(':
                return False

    return len(stack) == 0
```

{% endsolution %}
{% endproblem %}
