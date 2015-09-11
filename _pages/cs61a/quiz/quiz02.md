---
title: Discussion 2 Quiz
layout: post

tags: []
---

[Section 135 Attendance](http://goo.gl/forms/KNfI88V8Ua) · [Section 139 Attendance](http://goo.gl/forms/YmbH7LVM9V)


1. Fill in the blanks (without using any numbers in the first blank!) to get
   the expected output.

    ```python3

    >>> (lambda x: lambda y: ________)(___)(lambda z: z*z)()
    9

    ```

2. Draw the environment diagram resulting from running the following code:

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

3. Suppose we've already entered the following code into the Python interpreter:

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
