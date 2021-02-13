const LinkedList = require("./LinkedList")

const myList = new LinkedList()

myList.insert(1)
myList.insert(2)
myList.insert(3)

console.log(JSON.stringify(myList, null,2))