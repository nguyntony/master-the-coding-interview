# Recursion
This isn’t really an algorithm but it is more of a concept. What is recursion, it is a function that refers to itself inside of its code block.

## Two big problems 
1. Difficult to understand
2. Stack overflow - if there isn’t a way to break out of the recursion you will call the function over and over again, this is take up all the available space in the call stack. 

## Two paths
1. Calling the function again
2. Base case - stops from calling the function again

## Base case 
You can create some sort of conditional statement that will stop the recursion, similar to a for / while loops.

When you reach the base case you do need to somehow return that value as it needs to bubble up. You can do that by including `return function()` at the end of the code. 

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns, one for the base and one for recursive 

## Why use Recursion?
It may be less code to write but it comes at a cost. The engineer will have to make that decision. Recursion can make you code DRY and readable but it can cause stack overflow 

It may be good to use recursion when you’re unsure of the depth of the data structure such as trees, you’re not sure how many levels it will go down.

Tail Call Optimization 
It allows recursion to be called without increasing the call stack, there are ways to write recursion without increasing the memory. 

1. Every time you are using a tree or converting something into a tree, consider recursion 
- divided into a number of subproblems that are smaller instances of the same problem 
- each instance of the subproblems is identical in nature
- the solutions of each subproblem can be combined to solve the problem at hand
2. Divide and conquer using recursion 