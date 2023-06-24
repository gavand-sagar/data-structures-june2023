// Queue
// collection with no index-based access
// you can access only the first item  (front)
// you can insert new item at last position
// you can remove the item from the first position only (front)
// you can access the size


// Technical
// size()
// add(item) --> will insert at last  // push(item)
// remove()  ---> will remove first item and return
// front()    --> will return front item
// isEmpty()  --> 


class Queue{
    #array
    constructor(){
        this.#array = []
    }
    size(){
        return this.#array.length;
    }
    add(item){
        this.#array.push(item)
    }
    remove(){
        return this.#array.shift(); 
    }
    front() {
        return this.#array[0]
    }
    isEmpty(){
        if(this.#array.length == 0){
            return true;
        }else{
            return false
        }
    }
}


let q = new Queue();

console.log(q.size())               //0
console.log(q.isEmpty())            //true

q.add(5)
console.log(q.front())              //5

q.add(7)
console.log(q.front())              //5
console.log(q.size())               //2
console.log(q.isEmpty())            //false

q.remove()
console.log(q.front())              //7
console.log(q.size())               //1

q.remove()
console.log(q.isEmpty())            //true
