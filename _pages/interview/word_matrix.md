---
title: Word Matrix
layout: post

tags: [Pinterest]

comments: true
share: true
---

Let's say we have some matrix of letters and a word list:

{% highlight python3 %}
letter_matrix = [
    ['C', 'C', 'A', 'T'], 
    ['A', 'A', 'A', 'K'], 
    ['K', 'Z', 'T', 'S'], 
    ['E', 'U', 'E', 'S']
]

word_list = ["CAT", "ATE", "CATS", "CAKE"]
{% endhighlight %}

Write a function `find_coords` that outputs a dictionary keying each word in the word list to a list of coordinates where that word can be found. The word can be arranged horizontally, vertically, or diagonally, but the coordinate has to correspond to the first letter of the word. For example, when we run the function on the letter matrix and word list above, we get:

{% highlight python3 %}
>>> coords = find_coords(letter_matrix, word_list)
>>> print(coords)
{
    'CAT': [(0, 0), (1, 0)], 
    'ATE': [(2, 1)], 
    'CATS': [(0, 0)], 
    'CAKE': [(0, 0)]
}
{% endhighlight %}

The word can only ever travel to the right, down, or diagonally down and to the right - it will never be found in reverse.