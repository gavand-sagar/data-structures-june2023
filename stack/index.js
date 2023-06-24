// Stack
// a collection
// with no index based access
// you can see the size/length of the stack 
// when you add new items in the stack, the item will get added at last position
// you can retrive only single item from the stack, that is from last position only



// Techincal points
// length()
// push(item)  -- add new item
// top()  -- get the last item
// pop() --- remove and get the last item
// isEmpty()  -- it will give you true/false


class Stack {
    #array
    constructor() {
        this.#array = []
    }
    size() {
        return this.#array.length
    }
    push(item) {
        this.#array.push(item)
    }
    top() {
        let lastItem = this.#array[this.#array.length - 1]
        return lastItem
    }
    pop() {
        this.#array.pop();
    }
    isEmpty() {
        if (this.#array.length == 0) {
            return true
        } else {
            return false
        }
    }
}





let s = new Stack();
console.log(s.size())  // it should be 0

s.push(4)
console.log(s.top())  // it should be 4

s.push(100)
console.log(s.top())  // it should be 100
console.log(s.size()) // it should be 2

s.push(30)
console.log(s.top())  // it should be 30


console.log(s.size()) // it should be 3
console.log(s.isEmpty())  // false

s.pop()
console.log(s.size())  // it should be 2
console.log(s.top())  // it should be 100

s.pop()
s.pop()
console.log(s.isEmpty())  // true