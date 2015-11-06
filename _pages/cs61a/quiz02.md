---
title: Discussion 2 Quiz
layout: post
---

{% problem %}

Fill in the blanks (without using any numbers in the first blank!) to get the expected output.

```python3
>>> (lambda x: lambda y: ________)(___)(lambda z: z*z)()
9
```

{% solution %}

```python3
>>> (lambda x: lambda y: lambda: y(x))(3)(lambda z: z*z)()
9
```

{% endsolution %}
{% endproblem %}



{% problem %}

Draw the environment diagram resulting from running the following code:

```python3
x = 2
def dread(pirate):
    x = 30
    def roberts(westley):
        x = 400
        return westley + pirate(x)

    return roberts(x)

dread(lambda spot: x + spot)
```

{% solution %}
{% environment %}
http://pythontutor.com/composingprograms.html#code=x+%3D+2%0Adef+dread(pirate%29%3A%0A++++x+%3D+30%0A++++def+roberts(westley%29%3A%0A++++++++x+%3D+400%0A++++++++return+westley+%2B+pirate(x%29%0A%0A++++return+roberts(x%29%0A%0Adread(lambda+spot%3A+x+%2B+spot%29&mode=display&origin=composingprograms.js&cumulative=true&py=3&rawInputLstJSON=%5B%5D&curInstr=0
{% endenvironment %}
{% endsolution %}

{% endproblem %}



{% problem %}

Suppose we've already entered the following code into the Python interpreter:

```python3
wild = 2

def pig(out):
    while out < 10:
        if out % 2:
            print('oink')
        if out % 3:
            print('squeal')

        def x(x):
            return out + x

        out = out * out
    return x(out)

def hog(wild):
    while pig(wild):
        wild = wild // 3

        if wild % 3 == 0:
            return pig(wild + 3)

def swine(hog):
    return hog(wild) + wild
```

What would Python print for each of the following lines?

```python3
>>> pig(3)

>>> y = hog(7)

>>> hog(swine(hog))

>>> swine(pig)
```

{% solution %}

```python3
>>> pig(3)
oink
oink
162

>>> y = hog(7)
oink
squeal
squeal
squeal
oink
oink

>>> hog(swine(hog))
squeal
squeal
oink
oink
Error

>>> swine(pig)
squeal
squeal
34
```

{% endsolution %}
{% endproblem %}
