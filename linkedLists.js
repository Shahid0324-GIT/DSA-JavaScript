// Example: 10 --> 24 --> 36

// Structure of a Linked List using Javascript

// let linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 24,
//       next: {
//         value: 36,
//         next: null,
//       },
//     },
//   },
// };

// class for creating a new node for not implementing DRY

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    // Check the value of index
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // Check params
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const toBeDelatedNode = leader.next;
    leader.next = toBeDelatedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
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

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(24);
// myLinkedList.append(36);
// myLinkedList.prepend(2);
// myLinkedList.insert(0, 55);
// myLinkedList.insert(99, 200);
// myLinkedList.insert(2, 25);
// myLinkedList.remove(2);
// myLinkedList.reverse();
// console.log(myLinkedList.printList());
