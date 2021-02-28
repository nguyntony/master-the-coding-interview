# Linked Lists
There are two types of linked lists: 
1. Singly 
2. Doubly

Problem with Arrays?
Static arrays, there is limited amount of data that can is allocated where the data can be beside on another. However with both static and dynamic arrays, they are able to expand their memory allocation and possibly even double up by having more data stored elsewhere. There is a performance implication of O(n). Arrays are bad with inserts and delete. 

Hash tables are good with inserting and deleting but they data isn’t ordered. 

## ☁️ What is it?
A list that is linked. A singly list contains a set of nodes, these nodes have two elements the value of the data and a pointer to the next node in line. The first node is called a head and the last node is known as the tail. (Some people may call anything after the head a tail). 

Linked lists are null terminated, which means that the end of the list is a null value. 

## ☁️ Bad Example
Imagine that you want a linked list like so: 
- apples ➡️ grapes ➡️ pears
It is important to note that each item will be stored at a different memory address. 

## ☁️ Why use Linked Lists?
What can linked list offer that arrays and hash tables do not?

[Visual Resource](https://visualgo.net/en/list)

#### Pros
- allows you to insert a value into the middle of the list by resetting few pointers. Unlike with an array, if you insert or delete something in the middle of the array, it will cause a shift because it is ordered but with linked lists, that will not occur. 
- although the memory is stored at different memory addresses unlike hash tables there is some sort of order which means that you can order better than hash tables. 

#### Cons
- the data in linked lists are scattered so it may take longer to traverse the list versus an array where the data is nearby to one another.  

#### TLDR
Linked lists are better at inserting and deleting values compared to an array. Also the way in which the nodes are stored in memory addresses, there is a pointer so there is some order to the linked lists compared to hash tables. 

## Pointers
A pointer is a reference to another place in memory, another object or node for example. In JS you can demonstrate it like this:
- `const obj1 = {a:true}`
- `const obj2 = obj1`
You are not creating another entry with a = true, obj1 and obj2 both points to the same memory location. 

JS is a language with automated garbage collection, if there is not a pointer pointing to that value, it will be deleted. 







