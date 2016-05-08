---
title: Discussion 7 Quiz
layout: post
---

{% problem %}

One of your favorite problems on the midterm was `count_groupings`, which asked you to write an algorithm to figure out the number of ways to group terms together in a multiplicative sequence. Here's a brief refresher of how it worked:

~~~ python
def count_groupings(n):
    """For N >= 1, the number of distinct parenthesizations of a product of N
    items.

    >>> count_groupings (1)
    1
    >>> count_groupings (2)
    1
    >>> count_groupings (3)
    2
    >>> count_groupings (4)
    5
    >>> count_groupings (5)
    14
    """
    if n == 1:
        return 1

    total = 0
    i = 1

    while i < n:
        total += count_groupings (i) * count_groupings (n - i)
        i += 1

    return total
~~~

What's the runtime of this algorithm?

{% solution %}

**Note**: This question is more advanced that what we'd ask you on an exam. If you're interested in further runtime analysis, you can check out [the Master theorem](https://en.wikipedia.org/wiki/Master_theorem), which makes it simple to analyze runtimes for recursive algorithms.

Let's denote the `count_groupings` algorithm by a function $C(n)$. We can represent the number of recursive calls resulting from calling $C(n)$ by a different function $T(n)$.

$$ T(n) = 2(n-1) + 2(T(1) + T(2) + \ldots + T(n-1)) $$

Using the same logic, we see that

$$ T(n+1) = 2n + 2(T(1) + T(2) + \ldots + T(n-1) + T(n)) $$

Subtracting these two equations, we get:

$$ T(n+1) - T(n) = 2 + 2T(n) $$

Rewriting and simplifying this equation, we get the recursive equation:

$$ T(n+1) = 2 + 3T(n) $$

By adding one to both sides and repeatedly applying this expansion, we notice a pattern:

$$\begin{aligned}
T(n+1) + 1 &= 3(T(n) + 1) \\
           &= 9(T(n-2) + 1) \\
           &= 27(T(n-3) + 1) \\
           &= \cdots \\
           &= 3^{n-1}(T(2) + 1) \\
\end{aligned}$$

By plugging in $T(2) = 2$ and $n-1$ as $n$, we have our final expression:

$$ T(n) = 3^{n-1} - 1 \in \mathcal{O}(3^n) $$

**Aside**: This is actually a very famous series known as the [Catalan numbers](https://en.wikipedia.org/wiki/Catalan_number). Like the Fibonacci sequence, there is a closed-form solution that can yield a given number in the sequence without having to calculate the previous ones.

{% endsolution %}
{% endproblem %}



{% problem %}

Draw the box-and-pointer diagram for the linked list `link` after the following code is executed.

~~~ python
>>> link = Link(0)
>>> for i in range(1, 3):
...     link = Link(i, Link(link, link))
...
>>> link.rest.rest.rest = link.rest
~~~

{% solution %}
{% img cs61a/quiz07_q2 magick:third %}
{% endsolution %}
{% endproblem %}



{% problem %}

Write a function `all_paths` that takes in a `Tree` and returns a list of paths from the root to leaves. Each path is represented as a `Link`.

~~~ python
def all_paths(tree):
    pass    
~~~

{% solution %}

~~~ python
def all_paths(tree):
    if tree.is_leaf():
        return [Link(tree.label)]

    result = []
    for branch in tree.branches:
        result += [Link(tree.label, path)
                   for path in all_paths(branch)]

    return result
~~~

{% endsolution %}
{% endproblem %}
