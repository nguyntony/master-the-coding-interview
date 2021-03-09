# Sorting
The issue with sorting? When you have a small input data, the built in sort function isn’t that big of a deal. But when we are talking about scalability, it does not scale well. 

In JS, the sort() method on numbers, changes the numbers to strings and then it grabs the char code for each element and arranges the data like so. 

## Bubble sort
Known as an elementary sort. You will loop through the data and compare two items each time and switch the items depending on which value is lower. 
- Quadratic time

## Selection sort
Known as an elementary sort. Scan the list of elements for the smallest element then swaps with the starting element. 
- Quadratic time 

## Insertion sort
This is best for when the list is already almost sorted. You will go through each element of the array and insert where it is best to sort. This is good for small datasets. 
- Quadratic time

## Merge sort
Divide and conquer. You divided the data in half and then you divide it in half again, you keep dividing it in half until you only have single items. 

The idea is to compare items to their local list, so we don’t have to compare it to every single element such as bubble sort. 

- O(n log n) which is better than quadratic 

## Stable algo
A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in the sorted output as they appear in the input array to be sorted. 

## Quick sort
Divide and conquer, using a pivoting technique, picking the pivot point is sort of random but it is important to try to pick a good pivot because if the pivot is the lowest or highest number then it could be quadratic time because everything will need to move to its left or right. It is best to use this sorting algorithm if you can pick a good pivot. 

What is a pivot
1. Pivot is in the correct position in the final sorted array. 
2. Items to the left are smaller
3. Items to the right are larger

Choose a pivot that will divide the work evenly as possible

- O(n log n)

## When to use which sorting 
1. Insertion sort - use with a small input and the data is almost sorted. 
2. Bubble sort - educational purposes, not really the best in any scenario
3. Selection sort - same as above ^ 
4. Merge sort - really good bc of divide and conquer, best and worst is always O(n log n), which isn’t always the case for other sorting algorithms. However merge sort is expensive in terms of space complexity. 
5. Quick sort - can be better than merge sort because the best and average case is similar to merge sort and the space complexity is only O(log (n)), but there is a worst case of quadratic but you could put in a little bit of extra work to make sure to find a good pivot to avoid that.
6. 