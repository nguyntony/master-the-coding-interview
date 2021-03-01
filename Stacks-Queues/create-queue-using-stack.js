class Stack {
  // last in first out, the last element that is added will be the first one to be removed. (stack of plates)
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    this.size--;
    delete this.storage[this.size];
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  empty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

class Queue {
  // first in first out, the first element that is added will be the first one to be removed. (a line at grocery store)

  // how to make a stack behave like a queue, with a stack the last one element is the first one removed, but we need it to behave like a queue.
  // you can use two stacks, everytime you want to use an element you check is the second stack is empty. then you will remove the items in the first stack into the second stack which will result in us flipping the stack
  // always add elements in the first element, and you remove elements in the second element, you need to check if stack 2 is empty, if it isn't we need to remove the elements inthere first and when the second element is empty we can move elements from the first stack to the second stack which will flip the first stack.

  //https://www.youtube.com/watch?v=BI3JzvNyV3o&feature=emb_logo

  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  push(val) {
    this.pushStack.push(val);
  }

  pop() {
    if (this.popStack.empty()) {
      while (!this.pushStack.empty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek() {
    if (this.popStack.empty()) {
      while (!this.pushStack.empty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.peek();
  }

  empty() {
    return this.popStack.empty() && this.pushStack.empty();
  }
}
