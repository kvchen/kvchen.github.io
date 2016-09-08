---
title: Discussion 1 Quiz
description: Control and Environments
layout: post
---

[Discussion Attendance](https://goo.gl/forms/lsTtZzrJwMCGUcA12)


{% problem %}

Are these primitive expressions or call expressions?

* `3`
* `add(2, 3)`
* `print(5)`
* `3 + 4`


{% solution %}

* 3 is a number (primitive expression)
* `add(2, 3)` is calling the function `add` (call expression)
* `print(5)` is calling the builtin function `print` (call expression)
* `3 + 4` is calling the builtin function `__add__` (call expression)

The last one's tricky! Try typing these two into a Python interpreter to convince yourself:

~~~python
>>> 3 + 4
7
>>> (3).__add__(4)
7
~~~
{% endsolution %}
{% endproblem %}



{% problem %}

When do we make a new frame in an environment diagram?


{% solution %}

We make a new frame whenever we call a _user-defined_ function. This means we don't create frames for builtin function calls like `abs(x)` and `3 + 4`. We also don't create frames for imported functions!

{% endsolution %}
{% endproblem %}


{% problem %}

Imagine we run the following lines through a Python interpreter. Draw the environment diagram after executing the program.

~~~python
def swap(x, y):
    x, y = y, x
    return print('Swapped!', x, y)

x, y = 60, 1
a = swap(x, y)
swap(a, y)
~~~


{% solution %}
{% environment %}
http://pythontutor.com/composingprograms.html#code=def+swap(x,+y%29%3A%0A++++x,+y+%3D+y,+x%0A++++return+print('Swapped!',+x,+y%29%0A%0Ax,+y+%3D+60,+1%0Aa+%3D+swap(x,+y%29%0Aswap(a,+y%29&mode=display&origin=composingprograms.js&cumulative=true&py=3&rawInputLstJSON=%5B%5D&curInstr=0
{% endenvironment %}
{% endsolution %}
{% endproblem %}



<!-- {% problem %}

Implement the function `nearest_two`, which takes a positive number `x` as input, and returns the power of two (..., 1/8, 1/4, 1/2, 1, 2, 4, 8, ...) that is nearest to `x`. If there is a tie, return the larger value.

~~~python
def nearest_two(x):
    """Returns the power of two that is nearest to x.
    >>> nearest_two(8)
    8.0
    >>> nearest_two(11.5)  # closer to 8 than to 16
    8.0
    >>> nearest_two(0.75)  # tie between 0.5 and 1
    1.0
    """
    power_of_two = 1.0

    """YOUR CODE HERE"""

    return power_of_two
~~~

{% solution %}

~~~python
def nearest_two(x):
    """Returns the power of two that is nearest to x.
    >>> nearest_two(8)
    8.0
    >>> nearest_two(11.5)  # closer to 8 than to 16
    8.0
    >>> nearest_two(0.75)  # tie between 0.5 and 1
    1.0
    """
    power_of_two = 1.0

    if x < 1:
        factor = 0.5
    else:
        factor = 2.0

    while abs(power_of_two * factor - x) < abs(power_of_two - x):
        power_of_two *= factor

    # Check if our powers are equidistant
    if abs(power_of_two * 2 - x) == abs(power_of_two - x):
        power_of_two *= 2

    return power_of_two
~~~

{% endsolution %}
{% endproblem %} -->
