class LinkedNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }

  toString() {
    console.log('LinkedNode:', this.value);
  }
}

module.exports = LinkedNode
