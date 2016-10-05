---
title: Discussion 4 Quiz
layout: post
---

{% problem %}
Complete the implementation of `print_by_level`, which takes in a tree and prints each "level" of the tree in sequential order, as a series of lists. A level of a tree is defined as all the elements at the same depth from the root. Assume that you can use `branches(tree)` and `root(tree)`.

~~~ python
def print_by_level(t):
    """Prints each level of the tree as a list.

    >>> t = tree(1, [
    ...         tree(3, [
    ...             tree(2),
    ...             tree(4, [
    ...                  tree(8)
    ...             ])]),
    ...         tree(6, [
    ...             tree(5),
    ...             tree(7)])])
    >>> print_by_level(t)
    [1]
    [3, 6]
    [2, 4, 5, 7]
    [8]
    """
    current_level, next_level = [t], []

    while len(current_level) != 0:
        shown_values = []

        for tree in current_level:
            next_level.extend(____________)
            shown_values.append(____________)

        print(shown_values)
        current_level, next_level = ____________, ____________
~~~

{% solution %}

~~~ python
def print_by_level(t):
    """Prints each level of the tree as a list.

    >>> t = tree(1, [
    ...         tree(3, [
    ...             tree(2),
    ...             tree(4, [
    ...                  tree(8)
    ...             ])]),
    ...         tree(6, [
    ...             tree(5),
    ...             tree(7)])])
    >>> print_by_level(t)
    [1]
    [3, 6]
    [2, 4, 5, 7]
    [8]
    """
    current_level, next_level = [t], []

    while len(current_level) != 0:
        shown_values = []

        for tree in current_level:
            next_level.extend(children(tree))
            shown_values.append(label(tree))

        print(shown_values)
        current_level, next_level = next_level, []
~~~

{% endsolution %}
{% endproblem %}



{% problem %}
Implement a function `running_total` that mutates a list of numbers such that the $i$th element is the sum of the first $i+1$ elements.

~~~ python
def running_total(lst):
    """Computes a running total over a list of numbers.
    >>> lst = [1, 2, 3]
    >>> running_total(lst)  # mutates the original list, returns None
    >>> lst  # [1, 1+2, 1+2+3]
    [1, 3, 6]
    """
    return
~~~

{% solution %}

~~~ python
def running_total(lst):
    """Computes a running total over a list of numbers.
    >>> lst = [1, 2, 3]
    >>> running_total(lst)  # mutates the original list, returns None
    >>> lst  # [1, 1+2, 1+2+3]
    [1, 3, 6]
    """
    total = 0
    for i in range(len(lst)):
        total += lst[i]
        lst[i] = total
~~~

{% endsolution %}
{% endproblem %}



{% problem %}

Draw the environment diagram.

~~~ python
def world(series):
    if len(series) % 2 == 0:
        series[0] = series[:2]
        return [series.pop(1)]
    else:
        return series[:2]

blue_jays = [1, 2, 3, 4]
cardinals = world(blue_jays)
cubs = world(blue_jays)
royals = world(cubs)
~~~

{% solution %}
{% environment %}
http://pythontutor.com/composingprograms.html#code=def+world(series%29%3A%0A++++if+len(series%29+%25+2+%3D%3D+0%3A%0A++++++++series%5B0%5D+%3D+series%5B%3A2%5D%0A++++++++return+%5Bseries.pop(1%29%5D%0A++++else%3A%0A++++++++return+series%5B%3A2%5D%0A%0Ablue_jays+%3D+%5B1,+2,+3,+4%5D%0Acardinals+%3D+world(blue_jays%29%0Acubs+%3D+world(blue_jays%29%0Aroyals+%3D+world(cubs%29&mode=display&origin=composingprograms.js&cumulative=true&py=3&rawInputLstJSON=%5B%5D&curInstr=0
{% endenvironment %}
{% endsolution %}
{% endproblem %}
