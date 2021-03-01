# Stacks & Queues
Stacks and queues are both linear data structures, what this means is that it allows us to traverse data elements one by one, only one data element can be directly reached. 

These are similar is because it can be implemented in a similar way and the main difference is how elements are removed. 

Stacks are specifically concerned with elements the first or last element in the data structure. 

How can this be useful? Sometimes, all the methods that are available to you in arrays or linked lists may be distracting. There are certain situations where you only need some of the methods and these data structures are able to do it very well because it’s focused.

## Stacks 
Think of them like plates, each plate represents a piece of data and it stacked on top of each other and you’re really only able to access the top plate. This is called LIFO which means ‘last in first out’

#### How to build?
- Arrays
- Linked Lists

Arrays will be faster than linked lists because of cached locality which means data is stored nearby and less memory because the absence of pointers. 

## Queues
Think of them like an entrance to a roller coaster, the first person who arrives in the the line gets to go then the next and so forth. It’s the opposite in stacks that is is FIFO which means ‘first in first out’ 

#### How to build?
- Arrays
- Linked Lists

Although you can use both to build queues, it is better to use linked lists in all scenarios, this is because of the shifting on indexes when we are concerned with the first element in queues. 





