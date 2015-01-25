---
title:  Slicing Linked Lists
layout: problem
difficulty: medium

source: 
language: python
categories: ["cs61a", "recursion", "linked lists"]
---


{% contentfor problem %}

Write a function `slice_linked_list` that takes in a linked list (`lst`), a 
`start` index, and an `end` index. The function should slice the list from 
`start` to `end` (as with a normal Python list), then return the sliced list. 
Assume that `start <= end < len(lst)`.

Functional representations of a linked list are provided below.

{% endcontentfor %}


{% contentfor examples %}

>>> lst = link(3, link(1, link(4, link(1, link(5, link(9, empty))))))
>>> sliced_lst = slice_linked_list(lst, 1, 4)
>>> print(linked_list_to_string(sliced_lst))
<1 4 1>

{% endcontentfor %}


{% contentfor includes %}{% highlight python3 %}

{% include cs61a/code/linked_lists/functional_linked_lists.py %}

{% endhighlight %}{% endcontentfor %}


{% contentfor startercode %}

# A function that slices a linked list from start to end

def slice_linked_list(lst, start, end):
    """YOUR CODE HERE"""
    return


def test_examples():
    lst = link(3, link(1, link(4, link(1, link(5, link(9, empty))))))
    sliced_lst = slice_linked_list(lst, 1, 4)
    print(linked_list_to_string(sliced_lst))

{% endcontentfor %}


{% contentfor solution %}{% highlight python3 %}

def slice_linked_list(lst, start, end):
    if end == 0:
        return empty
    elif start == 0:
        return link(first(lst), slice_linked_list(rest(lst), 0, end-1))
    else:
        return slice_linked_list(rest(lst), start-1, end-1)

{% endhighlight %}{% endcontentfor %}

