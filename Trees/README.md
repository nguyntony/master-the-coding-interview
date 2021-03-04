# Trees
Possess a hierarchal structure, there is a root node and every node has only one parent. An example of the tree data structure is the DOM. 

Node can only point to a child. There is only one entry point which is the root. 

## Binary tree
- each node can only have 0,1,2 children 
- each node only have one parent. 
- each node represents a state. 
- full binary tree, each node will have either 0 or 2 kids. 

## Perfect binary tree
- perfect binary tree, all the leaf nodes are filled, each level doubles as you go further down. 
- the amount of nodes at the bottom level, are the amount of the nodes in the above levels + 1
- that means more than half the nodes are on the bottom level. 
- to find the number of nodes: 2^h - 1 
- h is the height of the tree or how many levels it is. 

O(log n) is better than linear because you do not need to check every single element.

## Binary search tree
A subset of the binary tree data structure, this is great for comparing things. This data structure preserves relationships. 
[visualization](https://visualgo.net/bn/bst)

#### Rules
- all child nodes on the right side must be greater than the current node. 
- all child nodes on the left must be less than the current node. 
- a node can only have up to two children. 

#### Balanced vs Unbalanced tree
There are scenarios where the tree may be unbalanced due to the values that we have, this basically turns into a linked list and the operations now become linear time. 
Why an unbalanced binary search tree is bad? (Answered above)

#### Pros 
- usually better than linear
- ordered
- flexible size

#### Cons
- no constant time operations 

## Balancing our tree
In production you may use a red black tree or AVL tree that will balance the tree out. 

It is important to understand how it works. 
#### AVL Tree
If the tree is becoming unbalance (one side is beginning to look like a linked list), this tree will evaluate the values on the unbalanced side and take a value that is between the higher and lower values and make that into the parent node and the higher and lower values will become either the left and right children. 

In a scenario where the numbers are 71, 77 and 80. This will turn 77 into the parent node. 

Resources 
- [Visual](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
- [Explanation](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)

#### Red/Black Tree
This will do the same thing above but will also be identified via red and black color.

Resources
- [Visual](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
- [Explanation](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)

## Binary Heap
Every child belongs to a parent node that is higher than the child. This is called a max heap there is also a min heap. Every node of the top level has a higher value than the level below it. 

#### How do they differ from Binary Trees?
The left and right value can be any value as long as its less than the parent, in a binary tree the left is the lower value, the right is the higher value. This results in lookup being linear time in binary heap. 

Heaps are used a lot in priority queues or even sort algorithms. 

#### Pros
- you do not have to balance 
- left to right insertion (there is some order of insertions)
- this means that they can take up less memory (space) compared to binary search tree
- good for priority queue (this is not the same thing as stacks/queue

#### What is priority queue
Each element has some sort of priority, and those with higher priority will get tended to first than those with lesser priority. This is how it differs from queues where it is FIFO. A real world example would be an emergency room where you tend to the patient with the severe conditions first. 


## Trie
Specialized tree used in search most often with text. another name for trie is prefix tree. You can think of it like autocompletion. The benefit of this data structure is speed and space. 

The BigO is O(length of word). 






