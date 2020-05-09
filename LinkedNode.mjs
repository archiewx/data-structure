class LinkedNode {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }

  toString() {
    console.log('LinkedNode:', this.value);
  }
}

export default LinkedNode
