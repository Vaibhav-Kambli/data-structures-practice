/** Stack implementation */

class Stack {
    constructor(){
        this.data = []
    }

    push(item){
        this.data.push(item)
    }

    pop(){
        this.data.pop()
    }
}

module.exports = Stack