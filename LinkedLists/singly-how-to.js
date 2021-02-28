class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverse(index) {
    let counter = 1;
    let targetNode = this.head;
    // the declaration above is important because the first item in our list is at 0 index and targetNode is = this.head, so that means the first number is the same as the element in index of 1

    while (counter < index) {
      targetNode = targetNode.next;
      counter++;
      // this while loop basically counts how many jumps it must take to get to the element before the index we want.
    }

    return targetNode;
    // based on the value that this function is given, it will go through the list and target the node that is equivalent to the value or index that it received.
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(new Node(value));
      this.length++;
      return this.printList();
    }

    if (index >= this.length) {
      this.append(new Node(value));
      this.length++;
      return this.printList();
    }

    const targetNode = this.traverse(index);
    const newNode = new Node(value);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      const targetNode = this.head;
      this.head = targetNode.next;
      this.length--;
      return this.printList();
    }

    if (index >= this.length) {
      const targetNode = this.traverse(this.length - 2);
      targetNode.next = null;
      return this.printList();
    }

    const targetNode = this.traverse(index);
    const unwantedNode = targetNode.next;
    targetNode.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const testLinkedList = new LinkedList(10);
testLinkedList.prepend(100);
console.log(testLinkedList.printList());
testLinkedList.append(99, 99);
console.log(testLinkedList.printList());
testLinkedList.insert(5, 5);
console.log(testLinkedList.printList());
testLinkedList.insert(1, 1);
console.log(testLinkedList.printList());
testLinkedList.insert(3, 3);
console.log(testLinkedList.printList());
testLinkedList.remove(3);
console.log(testLinkedList.printList());
testLinkedList.remove(0);
console.log(testLinkedList.printList());
testLinkedList.remove(10);
console.log(testLinkedList.printList());
