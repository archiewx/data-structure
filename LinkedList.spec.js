const LinkedList = require('./LinkedList')

const linked = new LinkedList()

linked.append(20).append(50).append(100).prepend(2).prepend(1).prepend(1).prepend(1).append(5).append(5).delete(5)

console.log(linked.toString())
linked.reverse()
console.log(linked.toString())
