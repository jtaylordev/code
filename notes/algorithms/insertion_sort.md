### **Study Guide for Insertion Sort**

---

### **1. Introduction to Insertion Sort**

**Insertion Sort** is a simple, comparison-based sorting algorithm. It sorts an array or list one element at a time, similarly to how you might organize playing cards in your hand. This algorithm is suitable for small or nearly sorted datasets due to its simplicity.

---

### **2. Working Principle of Insertion Sort**

Insertion Sort divides the input list into two sublists:

1. **Sorted Sublist**: This sublist grows one element at a time.
2. **Unsorted Sublist**: The remaining elements of the list yet to be sorted.

The algorithm works by picking elements from the unsorted sublist and inserting them into their correct position within the sorted sublist.

---

### **3. Step-by-Step Process**

### **Initialization**

- Start with the first element in the array. Consider this as the sorted sublist.
Example:
    
    ```
    Sorted: [A[0]]
    Unsorted: [A[1], A[2], ..., A[n-1]]
    
    ```
    

### **Iterative Insertion**

- For each element in the unsorted sublist (`A[i]`):
    - Compare it with the elements in the sorted sublist, from right to left.
    - Shift larger elements one position to the right to make space for `A[i]`.
    - Insert `A[i]` in its correct position.

### **Termination**

- The algorithm ends when all elements from the unsorted sublist have been inserted into the sorted sublist. At this point, the entire array is sorted.

---

### **4. Example Walkthrough**

Consider the array `[5, 2, 9, 1, 5, 6]`:

1. **Initial state**:
    
    Sorted: `[5]`
    
    Unsorted: `[2, 9, 1, 5, 6]`
    
2. **First iteration** (`2`):
    
    Compare `2` with `5`, shift `5` to the right, insert `2`.
    
    Sorted: `[2, 5]`
    
    Unsorted: `[9, 1, 5, 6]`
    
3. **Second iteration** (`9`):
    
    Insert `9` without shifting.
    
    Sorted: `[2, 5, 9]`
    
    Unsorted: `[1, 5, 6]`
    
4. **Third iteration** (`1`):
    
    Compare `1` with `9`, `5`, and `2`, shift all to the right, insert `1`.
    
    Sorted: `[1, 2, 5, 9]`
    
    Unsorted: `[5, 6]`
    
5. **Fourth iteration** (`5`):
    
    Shift `9`, insert `5` into position.
    
    Sorted: `[1, 2, 5, 5, 9]`
    
    Unsorted: `[6]`
    
6. **Fifth iteration** (`6`):
    
    Shift `9`, insert `6`.
    
    Sorted: `[1, 2, 5, 5, 6, 9]`
    
    Unsorted: `[]`
    

---

### **5. Complexity Analysis**

### **Time Complexity**

- **Best Case**: O(n) – If the array is already sorted.
- **Average Case**: O(n²) – On average, half the elements need to be shifted.
- **Worst Case**: O(n²) – If the array is sorted in reverse order, all elements will be shifted for each insertion.

### **Space Complexity**

- **Auxiliary Space**: O(1) – Insertion Sort is an in-place sorting algorithm, meaning it requires a constant amount of additional memory.

---

### **6. Stability and Adaptability**

- **Stable**: Yes. Equal elements maintain their relative positions after sorting.
- **Adaptive**: Yes. Insertion Sort performs better when the input data is partially sorted.

---

### **7. Code Implementation**

### **Python Implementation**

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Example Usage
sample_array = [5, 2, 9, 1, 5, 6]
insertion_sort(sample_array)
print("Sorted array:", sample_array)

```

### **C Implementation**

```c
#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int sample_array[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(sample_array) / sizeof(sample_array[0]);
    insertionSort(sample_array, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", sample_array[i]);
    }
    return 0;
}

```

---

### **8. Advantages and Disadvantages**

### **Advantages**:

- Simple to implement and understand.
- Efficient for small datasets or nearly sorted data.
- Adaptive and stable sorting algorithm.

### **Disadvantages**:

- Inefficient for large datasets due to its O(n²) time complexity in the worst case.
- Not ideal for random or reverse-sorted data.

---

### **9. When to Use Insertion Sort**

- Use Insertion Sort for small datasets, nearly sorted datasets, or when stability and low memory usage are required.

For larger datasets or more complex sorting requirements, consider more efficient algorithms like **Merge Sort**, **Quick Sort**, or **Heap Sort**.