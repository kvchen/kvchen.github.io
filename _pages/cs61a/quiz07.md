---
title: Discussion 7 Quiz
subtitle: Scheme
layout: page
---

{% problem %}

Draw the box-and-pointer diagrams for each of the following:

~~~scheme
'(1 . (2 . (3)))

'(1 2 . 3)

'(1 . 2 . 3)

(cons 1 '(list 2 3))

(list (append '(1) '(2) nil) 3)

(list 3 '(1 4 . 1) (cons (list 5 9) 2) 6)
~~~

{% endproblem %}



{% problem %}

Write a function `take` that takes in a list `s` and a positive number `n`, and returns a list `t` such that `(car t)` is the first `n` elements of `s` and `(cdr t)` is the remaining elements of `s`. If `n` is greater than the length of `s`, `(car t)` should be `s` and `(cdr t)` should be `nil`.

~~~scheme
(define (take s n)
  'YOUR-CODE-HERE
)
~~~

~~~scheme
scm> (define a (take '(1 2 3) 2))
scm> (car a)
(1 2)
scm> (cdr a)
(3)
scm> (define b (take '(1 2 3) 4))  ; when n > (length s)
scm> (car b)
(1 2 3)
scm> (cdr b)
()
~~~

{% solution %}

~~~scheme
(define (take s n)
  (cond ((= n 0) (cons nil s))
        ((null ? s ) ( cons s nil ))
        (else
          (let ((rec (take (cdr s) (- n 1))))
            (cons (cons (car s) (car rec)) (cdr rec))))))
~~~

{% endsolution %}
{% endproblem %}



{% problem %}

Write a function to slice a list in Scheme as you would a list in Python, starting at the `start` index and ending one before the `end` index. Assume that the step size is 1, and `start` and `end` are both non-negative.

~~~scheme
(define (slice lst start end)
  'YOUR-CODE-HERE
)
~~~

~~~scheme
scm> (define a '(3 1 4 1 5 9))
scm> (slice a 2 5)
(4 1 5)
scm> (slice a 10 3)
()
scm> (slice a 1 100)
(1 4 1 5 9)
~~~

**Bonus challenge**: Write the same `slice` procedure that also accepts a `step` argument, along with negative values of `start` and `end`!

{% solution %}
~~~scheme
(define (slice lst start end)
  (cond ((or (<= end 0) (null? lst)) nil)
        ((> start 0) (slice (cdr lst) (- start 1) (- end 1)))
        (else (cons (car lst) (slice (cdr lst) (- start 1) (- end 1))))))
~~~
{% endsolution %}
{% endproblem %}
