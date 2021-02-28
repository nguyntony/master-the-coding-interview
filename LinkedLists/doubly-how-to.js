class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  traverse(index) {
    // read singly-how-to to understand this method
    let counter = 1;
    let targetNode = this.head;

    while (counter < index) {
      targetNode = targetNode.next;
      counter++;
    }

    return targetNode;
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

    // const targetNode = this.traverse(index);
    // const newNode = new Node(value);
    // newNode.next = targetNode.next;
    // targetNode.next = newNode;
    const newNode = new Node(value);
    const leader = this.traverse(index);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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
// testLinkedList.prepend(100);
// console.log(testLinkedList.printList());
testLinkedList.append(99);
testLinkedList.insert(1, 1);
testLinkedList.prepend(5);
testLinkedList.insert(0, 0);
console.log(testLinkedList);
console.log(testLinkedList.printList());
// testLinkedList.insert(5, 5);
// console.log(testLinkedList.printList());
// testLinkedList.insert(1, 1);
// console.log(testLinkedList.printList());
// testLinkedList.insert(3, 3);
// console.log(testLinkedList.printList());
// testLinkedList.remove(3);
// console.log(testLinkedList.printList());
// testLinkedList.remove(0);
// console.log(testLinkedList.printList());
// testLinkedList.remove(10);
// console.log(testLinkedList.printList());
