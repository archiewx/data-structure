const LinkedNode = require('./LinkedNode');

class LinkedList {
  constructor() {
    /**@type {LinkedNode} */
    this.head = null;
    /**@type {LinkedNode} */
    this.tail = null;
  }

  // 添加
  append(val) {
    const node = new LinkedNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  // 插入
  prepend(v) {
    if (!this.head) {
      const node = new LinkedNode(v);
      this.head = node;
      this.tail = node;
    } else {
      const node = new LinkedNode(v, this.head);
      this.head = node;
    }
    return this;
  }

  // 删除
  delete(v) {
    if (!this.head) return this;

    while (this.head.value === v) {
      this.head = this.head.next;
    }
    let previousNode = this.head;
    let currentNode = this.head.next;
    while (currentNode) {
      const node = currentNode.next;
      if (currentNode.value === v) {
        previousNode.next = node;
        currentNode = node;
      } else {
        previousNode = previousNode.next;
        currentNode = node
      }
    }
    return this;
  }

  // 查找
  find(v) {
    if (!this.head) return null

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === v) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  // 旋转
  reverse() {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null
    while(currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode

      // 位移
      prevNode = currentNode
      currentNode = nextNode
    }
    this.tail = this.head
    this.head = prevNode
    return this
  }

  toString() {
    let currentNode = this.head;
    const nodes = [];
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

module.exports = LinkedList;
