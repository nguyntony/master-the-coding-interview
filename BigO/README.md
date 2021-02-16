# Big O Notation
#algo

## 🌱 What is it? 
It is the language that developers use to measure how long it takes for an algorithm to run (regardless of computer/hardware differences).

### Scalability
Scalability means that as the input grows, how much does the algorithm / code slow down? “As the input increases, how many more operations do we have to do?” Big O is a way to explain / measure this, so it concerns itself with how many steps it takes to complete the algorithm because each ‘step’ takes x amount of time. 

Scalability can be measured by speed and memory. 

### Rules 
When writing code you may want to be cognizant of these three concepts:
1. Write `readable` code that can be maintained by anyone
2. Speed, `(time complexity)`, how efficient is it in terms of Big O and does it scale well?
3. Memory, `(space complexity)`, how much memory does your program take? The more memory it takes the less ideal it is. 

There’s usually a trade off between the two (time and space complexity).

### Data Structures + Algorithms = Programs
Data structures are ways to store data and algorithms are ways to do something with the data and the two combined create our programs. 

There are best data structures and algorithms for different scenarios. 

## 🌱 Simplifying Big O
1. Worst case 
2. Remove constants
3. Different terms for inputs
4. Drop non dominants

### Different terms for inputs 
If there is a function that takes two arrays and each array will do some loop in the function that evaluates to O(a + b)

#### O(a + b) example
```
function doSomething(box, box2) {
	for (i in box) {//code}
 	for (j in box2) {//code}
}
```
This is common mistake where a developer may think that it simplifies to O(n). The inputs are two different collections (or, in this example, arrays).

#### O(a * b) example
```
function doSomething(box, box2) {
	for (i in box) {
		// nested loop
	}
 	for (j in box2) {
		// nested loop
	}
}
```

It is important to note that if the two collections are used for nested loops then the result will be O(a * b).

### Drop non dominants 
When simplifying, we should keep the dominant term and drop the others. We should worry about the most dominant term. 

`O(x^2 + 3 + 100 + x/2)`

The `x^2` is the most dominant term here because it’s scalability is the greatest, the larger the number (x) the scalability increases greatly compared to the other terms. 

## 🌱 Constant time O(1)
If there is an algorithm that only does one operation. This differs from linear time from that the linear time increase as the input increase, this big O notation will not increase as the input increases. 

```
const boxes = [0,1,2,3,4,5]
function logFirstTwoBox(boxes) {
	console.log(boxes[0]) // O(1)
	console.log(boxes[1]) // O(1)
}
```

There are two operations that this fn does, the two console logs, this will result in O(2), `this is still constant time because regardless of the number of inputs, it will always perform two operations`

That is the difference between constant time and linear time, constant time is the same number of operations regardless of input, the input doesn’t affect the number of operations unlike linear time where if the array gets larger then the looping becomes (which is the number of operations) also increases. 

O(1) - the formula to describe constant time

## 🌱 Linear O(n)
`As the number of our inputs increase the number of operations increase` (ie. a single loop, if there are 5 items in the array that we are looping over then it will take 5 operations).

#### Terms
- O(n) - the formula to describe linear time
- Linear time - another word to describe the big O notation 

## 🌱 Quadratic O(n^2) 
A common example of this type of big O is a nested loop. Unlike O(n), nested loops will be result in multiplying the variable, (if the variable if the same, meaning the fn takes one input )

#### Terms
- O(n^2)
- Quadratic time - another word to describe this big O

## 🌱 Factorial O(n!)
Also known as the “oh no”. This means that there is a nested loop for every input, this is commonly seen in the real world but you should still be aware of it. 



