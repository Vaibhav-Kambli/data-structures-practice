/**Instance of stack class */

const Stack = require("./Stack")

const people = new Stack()

people.push({name: 'Vaibhav'})
people.push({name: 'VK'})
people.push({name: 'V'})

console.log(JSON.stringify(people, null, 2))
people.pop()
console.log(JSON.stringify(people, null, 2))
people.push({name: 'VK', age: 25})
console.log(JSON.stringify(people, null, 2))