---
title: Discussion 8 Quiz
layout: post
---

[Attendance Form](http://goo.gl/forms/CqzmD8ql4H)

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
        elif _____________________ or _____________________:
            if _____________________:
                return False

    return _____________________
```
{% endproblem %}
