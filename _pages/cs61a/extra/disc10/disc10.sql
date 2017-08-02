CREATE TABLE records AS
  SELECT "Ben Bitdiddle" AS name, "Computer" AS division, "Wizard" AS title, 60000 AS salary, "Oliver Warbucks" AS supervisor UNION
  SELECT "Alyssa P Hacker", "Computer", "Programmer", 40000, "Ben Bitdiddle" UNION
  SELECT "Cy D Fect", "Computer", "Programmer", 35000, "Ben Bitdiddle" UNION
  SELECT "Lem E Tweakit", "Computer", "Technician", 25000, "Ben Bitdiddle" UNION
  SELECT "Louis Reasoner", "Computer", "Programmer Trainee", 30000, "Alyssa P Hacker" UNION
  SELECT "Oliver Warbucks", "Administration", "Big Wheel", 150000, "Oliver Warbucks" UNION
  SELECT "DeWitt Aull", "Administration", "Secretary", 25000, "Oliver Warbucks" UNION
  SELECT "Eben Scrooge", "Accounting", "Chief Accountant", 75000, "Oliver Warbucks" UNION
  SELECT "Robert Cratchet", "Accounting", "Scrivener", 18000, "Eben Scrooge";

CREATE TABLE meetings AS
  SELECT "Accounting" AS division, "Monday" AS day, "9am" AS time UNION
  SELECT "Computer", "Wednesday", "4pm" UNION
  SELECT "Administration", "Monday", "11am" UNION
  SELECT "Administration", "Thursday", "1pm";


SELECT *
  FROM records
  WHERE name = supervisor;


SELECT name
  FROM records
  WHERE salary > 50000
  ORDER BY name;


-- 3.1

SELECT e.name, e.salary, s.name, s.salary
  FROM records AS e, records AS s
  WHERE e.supervisor = s.name
    AND s.salary > (2 * e.salary);

SELECT e.name
  FROM records AS e, records AS s
  WHERE e.supervisor = s.name
    AND e.division != s.division;


SELECT m.day, m.time
  FROM records AS r, meetings AS m
  WHERE r.supervisor = "Oliver Warbucks"
    AND r.division = m.division;


SELECT s.name
  FROM records as e, records as s
  WHERE e.supervisor = s.name
    AND s.name != s.supervisor;


CREATE TABLE naturals AS
  WITH num(n) AS (
    SELECT 0 UNION
    SELECT n + 1 FROM NUM WHERE n < 5
  )
  SELECT * FROM num;


WITH fact(n, nfact) AS (
  SELECT 1, 1 UNION
  SELECT n+1, (n+1)*nfact FROM fact WHERE n < 11
)
SELECT n, nfact FROM fact;


CREATE TABLE primes AS
  SELECT 2 as prime UNION
  SELECT 3 UNION
  SELECT 5;


WITH hamming(num) AS (
  SELECT 1 UNION
  SELECT num * prime FROM hamming, primes
    WHERE num < 100
) SELECT num from hamming;



