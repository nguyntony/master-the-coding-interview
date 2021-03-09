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

## Non comparison sort
- counting sort
- radix sort
These are entirely different ways of thinking about sorting, with the other sorting algorithms that we talked about above is comparing the elements to each other. 

## Prep questions for which sort to use 
1. Sort 10 schools around your house by distance: insertion since the data is small and I am assuming that the list that is returned will be somewhat sorted.
2. eBay sorts listings by the current Bid amount: radix or counting since the data is only numbers from 
3. Sport scores on ESPN: quick sort because the data is large and there are tons of different kinds of numbers
4. Massive database (can't fit all into memory) needs to sort through past year's user data: merge sort since the worst case for quick sort is quadratic and you’d want to avoid that in all scenarios
5. Almost sorted Udemy review data needs to update and add 2 new reviews: insertion
6. Temperature Records for the past 50 years in Canada: quick sort
7. Large user name database needs to be sorted. Data is very random: quick sort
8. You want to teach sorting for the first time: bubble sort