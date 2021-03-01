# How does JS work?
## What is a program?
- allocate memory - storing information such as variables
- parse and execute - read and run commands

**JavaScript Engine** is that browsers implement that reads the JS that we write and translates them into machine readable executions.

The engine consists of two parts:
1. memory heap - this is where memory allocations happens
2. call stack - this is where your code is read and executed

Memory Heap, what does that look like in JS? It is when you are declaring variables, etc.

Memory Leak, with all memory with have a limited amount. Unused memory just laying around, fills up the memory heap, this is why global variables are bad. 

Call Stack, what does this look like in JS? It is when you are executing functions, etc. 

## JS is single-threaded
Meaning, that JS has one call stack and can only do one thing only at a time. FILO, which is first in last out. 

Running code on a single thread is fairly simple. Issues with multi-threaded call stacks are deadlocks.

## Synchronous
One line of code gets executed at a time. You need to wait for the latter to finish before the next line of code can begin. 

**Stack Overflow**, the call stack is large and there isn’t enough space for all of the operations, an example is an infinite loop or recursion. 

## Asynchronous 
Think of it like a behavior, 
