# Introduction to Algorithms


## The Role of Algorithms in Computing

An algorithm is any well-defined computational procedure that takes some value, or set of calues, as input and produces some value, or set of values, as output in a finite amount of time.


## Insertion Sort

Input: A sequence of n numbers 
Output: A permutation (reordering) of the input sequence.

### Pseudo-code

```
InsertionSort(A, n)
    for i = 2 to n
        key = A[i]
        j = i - 1
        while j > 0 and A[j] > key
        A[j + 1] = A[j]
        j = j - 1
    A[j + 1] = key

```
