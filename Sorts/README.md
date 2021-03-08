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
