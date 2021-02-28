// 10 > 5 > 16

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

// OOP concept, instead of rewriting this object we can create a class of Node that will reduce repititive code
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// how can we create the above?
class LinkedList {
  constructor(value) {
    // this is the beginning creation of linked lists.
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // my attempt
  // append(value) {
  //   if (this.length === 1) {
  //     this.head.next = { value, next: null };
  //     this.tail = this.head.next;
  //   } else {
  //     this.tail.next = { value, next: null };
  //     this.tail = this.tail.next;
  //   }
  //   this.length++;
  // }

  // append solution
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

  // the list will still be 0 index-th
  insert(index, value) {
    let counter = 1;
    let currentNode = this.head;

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

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    let counter = 1;
    let currentNode = this.head;

    if (index === 0) {
      this.head = currentNode.next;
      this.length--;
      return this.printList();
    }

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    const unwantedNode = currentNode.next;
    currentNode.next = unwantedNode.next;
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

const anotherLinkedList = new LinkedList(10);
anotherLinkedList.append(5);
anotherLinkedList.append(16);
anotherLinkedList.prepend(20);
anotherLinkedList.insert(100, 55);
anotherLinkedList.insert(3, 11);
anotherLinkedList.remove(3);
// console.log(anotherLinkedList);
console.log(anotherLinkedList.printList());
