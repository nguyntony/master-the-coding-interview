# Searching and Traversal
We search everyday, this is a very important concept. 

## Linear search
A method of finding a target value within a list. (ie. Looping through arrays to find the target)

Linear search is linear time, is there anyway to make that better because linear is too slow. We could sort the data to make it easier. Say that there is a data and we want to find the number 34 and we could ask to see if that number is in the middle and we can discard everything to the left or the right depending on the value that we are searching for. 

## Binary search
But if the data is sorted then we can just change that data into a binary search tree. It may take more power in the beginning to sort the data and put it into a tree but in the long run this is more efficient. This is O log n

## Traversal techniques
1. Breadth first search (BFS)
You go left to right, level by level until you find the node that you are looking for. 

Uses additional memory bc you need to track every node and its children in order. 

#### Pros
- same time complexity, linear
- finding the shortest path between one node to another, bc we start at the root node 
#### Cons
- requires more memory than DFS but if you know that target node is going to the in the upper level of the tree then BFS is good

2. Depth first search (DFS)
You go from the root down, until you reach the last node of that branch with no children, this has a lower memory requirement,  you want to go deep as possible usually on the left side. 

Lower memory requirement bc you don’t need to keep track of the order. 

#### Pros
- same time complexity, linear
- less memory than BFS
- if you know that the target node will be in the lower half of the tree than this is better
- determines if a path exists between two nodes
#### Cons
- it can be slow if the tree is really deep. 

There are three different ways that you can actually implement depth first search. 
- inorder - from left to right, it will return how you will exactly see it in that order. (And also everything is in order)
- preorder - from parent node then grab the kids from left to right. This is really useful is you want to recreate a tree. 
- postorder - starting from the kids then going up to the parent. 

