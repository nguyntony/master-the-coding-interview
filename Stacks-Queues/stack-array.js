class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LIFO, the last stack is at the end of the list whereas the first stack is at the beginning of the list.
class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this.array;
  }

  pop() {
    this.array.pop();
    return this;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
