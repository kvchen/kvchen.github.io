---
title: Discussion 10 Quiz
layout: post
---

[Discussion attendance](https://goo.gl/forms/r6rZndQZiRMAa2EG2)

Download the `records` and `meetings` tables used in discussion [here](/cs61a/extra/disc10/disc10.sql). To load it into SQLite3, you should run the following command (in the same folder as `disc10.sql`):

~~~bash
sqlite3 --init disc10.sql
~~~

Now, you should be able to see what the table looks like:

~~~sql
sqlite> .schema
CREATE TABLE records(
  name,
  division,
  title,
  salary,
  supervisor
);
CREATE TABLE meetings(division, day, time);
~~~


{% problem %}

Write a recursive select statement to compute the powers of two from $2^0, 2^1, \cdots 2^{10}$. **Hint**: Be careful about your stopping condition!

~~~sql
WITH twos(exp) AS (
  -- YOUR CODE HERE
)

SELECT exp FROM twos;
1
2
4
8
16
32
64
128
256
512
1024
~~~

<!-- {% solution %}
~~~sql
WITH twos(exp) AS (
  SELECT 1 UNION
  SELECT 2 * exp FROM twos WHERE exp < 1024
)
SELECT exp FROM twos;
~~~
{% endsolution %} -->
{% endproblem %}


{% problem %}

Write a SQL statement that finds all perfect squares from 156 to 1145.

~~~sql
CREATE TABLE squares AS
  WITH naturals(n) AS (
    SELECT __________ UNION
    SELECT __________
      FROM naturals
      WHERE ____________________;
  )
  SELECT __________ AS n
    FROM ______________, ______________
    WHERE ____________________;

SELECT * FROM squares
169
196
...
1024
1089
~~~

<!-- {% solution %}
~~~sql
CREATE TABLE squares AS
  WITH naturals(n) AS (
    SELECT 1 UNION
    SELECT n + 1
      FROM naturals
      WHERE n < 1145
  )
  SELECT b.n AS n
    FROM naturals AS a, naturals AS b
    WHERE a.n * a.n = b.n AND b.n > 156;
~~~
{% endsolution %} -->
{% endproblem %}


{% problem %}

We can use SQL to determine the anagrams of a word! Specifically, let's use SQL to find the anagrams of the word `cats`.

~~~sql
WITH given(char, weight) AS (
  SELECT 'c', 1 UNION
  SELECT 'a', 10 UNION
  SELECT 't', 100 UNION
  SELECT 's', 1000
)
SELECT ________________________________________
FROM __________________________________________
WHERE _________________________________________;
~~~

<!-- {% solution %}
~~~sql
WITH given(char, weight) AS (
  SELECT 'c', 1 UNION
  SELECT 'a', 10 UNION
  SELECT 't', 100 UNION
  SELECT 's', 1000
)
SELECT a.char || b.char || c.char || d.char
FROM given AS a, given AS b, given AS c, given AS d
WHERE a.weight + b.weight + c.weight + d.weight = 1111;
~~~
{% endsolution %} -->
{% endproblem %}
