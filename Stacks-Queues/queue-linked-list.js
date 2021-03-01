class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      // there's only one node in our queue
      this.first = newNode;
      this.last = newNode;
    } else {
      // any item added will be added to the end of queue
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // this removes the first element in the queue
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      // this will only run if the length is 1
      this.last = null;
    }
    // const firstRef = this.first
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("tony"));
console.log(myQueue.enqueue("tyler"));
console.log(myQueue.enqueue("taro"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
