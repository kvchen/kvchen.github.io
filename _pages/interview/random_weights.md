---
title: Random Weights
layout: post

tags: [Pinterest]

comments: true
share: true
---

Given a dictionary keying letters to weights, come up with an algorithm that randomly selects one of the letters in the dictionary based on its weight (higher weights are more likely). For instance, given the dictionary:

{% highlight python3 %}
letter_weights = {
    'A': 1, 
    'B': 3, 
    'C': 5, 
    'D': 1
}
{% endhighlight %}

we would want to select the letter B with probability 3/10.

### Followup

Suppose we delete one of the letters from the original dictionary. Modify your original algorithm to account for this case.