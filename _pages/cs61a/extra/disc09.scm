(define (naturals n)
  (cons n (naturals (+ n 1))))


(define (naturals n)
  (cons-stream n (naturals (+ n 1))))


(define (compute-rest n)
  (print 'evaluatin!)
  (cons-stream n nil))


(define (has-even? s)
  (cond ((null? s) False)
        ((even? (car s)) True)
        (else (has-even? (cdr-stream s)))))

(define ones (cons-stream 1 ones))

(define twos (cons-stream 2 twos))


(define (map-stream f s))


(define (filter-stream f s)
  (cond
    ((null? s) nil)
    ((f (car s)) (cons-stream (car s) (filter-stream f (cdr-stream s))))
    (else (filter-stream f (cdr-stream s)))))



(define (filter-stream f s)
  (if (null? s) nil
    (let ((rest (filter-stream f (cdr-stream s))))
      (if (f (car s))
        (cons-steram (car s) rest)
        rest))))


(define (zip-with f xs ys)
  (if (or (null? xs) (null? ys))
    nil
    (cons-stream
      (f (car xs) (car ys))
      (zip-with f (cdr-stream xs) (cdr-stream ys)))))



