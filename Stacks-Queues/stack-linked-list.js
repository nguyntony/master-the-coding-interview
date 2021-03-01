class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LIFO, the last stack is at the end of the list whereas the first stack is at the beginning of the list.
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const topRef = this.top;
      this.top = newNode;
      this.top.next = topRef; // 'this.top is now the new node and we want the new node to point to the previous this.top
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const topRef = this.top;
    this.top = this.top.next;
    this.length--;
    // you could return topRef here, if you wanted to return the item that was removed
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
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
