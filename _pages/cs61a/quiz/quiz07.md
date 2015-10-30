---
title: Discussion 7 Quiz
layout: post
---

[Attendance Form](http://goo.gl/forms/11G42Sdnzm)

<!-- [Solutions](/cs61a/quiz/solutions/quiz06.html) -->

1. Draw the box-and-pointer diagrams for each of the following:

    ```scheme
    '(1 . (2 . (3)))

    '(1 2 . 3)

    '(1 . 2 . 3)

    (cons 1 '(list 2 3))

    (list (append '(1) '(2) nil) 3)

    (list 3 '(1 4 . 1) (cons (list 5 9) 2) 6)
    ```

2. Write a function `take` that takes in a list `s` and a positive number `n`, and returns a list `t` such that `(car t)` is the first `n` elements of `s` and `(cdr t)` is the remaining elements of `s`. If `n` is greater than the length of `s`, `(car t)` should be `s` and `(cdr t)` should be `nil`.

    ```scheme
    (define (take s n)
      'YOUR-CODE-HERE
    )
    ```
