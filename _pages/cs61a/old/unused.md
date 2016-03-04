{% problem %}

On the midterm, you wrote an algorithm to figure out the number of ways to parenthesize an expression. Here's a brief refresher of how it worked:

```python
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
```

What's the runtime of this algorithm?

{% solution %}



{% endsolution %}
{% endproblem %}
