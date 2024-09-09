/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newTail = new Node(val);
    if (this.tail != null)
      this.tail.next = newTail;
    if (this.head == null)
      this.head = newTail;
    this.tail = newTail;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newHead = new Node(val);
    if (this.head != null)
      newHead.next = this.head;
    if (this.tail == null)
      this.tail = newHead;
    this.head = newHead;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0)
      return null;
    else if (this.length === 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    let current = this.head;
    let newTail = null;
    while (current.next !== this.tail) 
      current = current.next;
    newTail = current;
    const val = this.tail.val;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const head = this.head;
    if (head == null)
      return null;
    if (this.head === this.tail)
      this.tail = null;
    this.head = head.next;
    this.length--;
    return head.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length <= idx || idx < 0)
      return null;
    let current = this.head;
    for (let i = 0; i !== idx; i++)
      current = current.next;
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length <= idx || idx < 0)
      return null;
    let current = this.head;
    for (let i = 0; i !== idx; i++)
      current = current.next;
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length < idx || idx < 0)
      return null;
    const newNode = new Node(val);
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0)
        this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++)
        current = current.next;
      newNode.next = current.next;
      current.next = newNode;
      if (idx === this.length)
        this.tail = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length <= idx || idx < 0)
      return null;
    if (idx === 0) {
      const value = this.head.val;
      this.head = this.head.next;
      if (this.length === 1)
        this.tail = null;
      this.length--;
      return value;
    }
    let current = this.head;
    for (let i = 0; i < idx - 1; i++)
      current = current.next;
    const value = current.next.val;
    current.next = current.next.next;
    if (idx === this.length - 1)
      this.tail = current;
    this.length--;
    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0)
      return 0;
    let currentNode = this.head;
    let sum = 0;
    while (currentNode != null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
