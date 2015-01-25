---
title: Slicing Linked Lists
slug: slicing-linked-lists

layout: problem
difficulty: medium
language: python

categories: ["cs61a", "recursion", "linked-lists"]
---


{% contentfor problem %}

Write a function `slice_linked_list` that takes in a linked list (`lst`), a `start` index, and an `end` index. The function should slice the list from `start` to `end` (as with a normal Python list), then return the sliced list. Assume that `start <= end < len(lst)`.

{% endcontentfor %}



{% contentfor example %}{% highlight python3 %}

>>> lst = Link(3, Link(1, Link(4, Link(1, Link(5, Link(9))))))
>>> sliced_lst = slice_linked_list(lst, 1, 4)
>>> print(sliced_lst)
Link(1, Link(4, Link(1)))

{% endhighlight %}{% endcontentfor %}



{% contentfor template %}{% highlight python3 %}

def slice_linked_list(lst, start, end):
    """YOUR CODE HERE"""

    return

{% endhighlight %}{% endcontentfor %}



{% contentfor hint %}

For this problem, you may want to use a recursive method similar to iteration to figure out which item indices to put into your slice. For each call, you should consider three cases:

1. Before the slice begins
2. In the middle of the slice
3. After the slice has ended

Make sure that for each step, your recursive calls are consistent with the elements being sliced!
{% endcontentfor %}



{% contentfor solution %}
The solution to this problem sets up a similar system to iteration (which we need to figure out which indices to slice at). 

The `if` case handles if we've reached the end of our slice; if we have, then we terminate our slice with an empty link. 

The `elif` case deals with when we're in the middle of the slice. In that case, we insert the current element into our slice so far, then recurse into the rest of the list, subtracting one from our end index.

Finally, the `else` case catches everything before the slice; we simply keep iterating through the list until we reach the `elif` case as described above.


{% highlight python3 %}
def slice_linked_list(lst, start, end):
    if end == 0:
        return empty
    elif start == 0:
        return link(first(lst), slice_linked_list(rest(lst), 0, end-1))
    else:
        return slice_linked_list(rest(lst), start-1, end-1)

{% endhighlight %}{% endcontentfor %}

