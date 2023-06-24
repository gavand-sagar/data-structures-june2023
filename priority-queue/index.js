class PriotiryQueue {
    #array
    constructor() {
        this.#array = []
    }
    size() {
        return this.#array.length
    }

    add(item, priority) {
        //if queue is empty its a simple push
        if(this.isEmpty()){
            this.#array.push({ value: item, priority: priority })
            return;
        }

        let added = false;
        for (let index = 0; index < this.#array.length; index++) {
            if (priority > this.#array[index].priority) {
                this.#array.splice(index, 0, { value: item, priority: priority });
                added = true;
                break;
            }
        }

        if (added == false) {
            this.#array.push({ value: item, priority: priority })
        }
    }

    remove() {
        this.#array.shift();
    }

    front() {
        if (this.#array.length > 0) {
            return this.#array[0].value
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.#array.length == 0
    }
}


let queue = new PriotiryQueue();

console.log(queue.size())             // 0

queue.add("Sagar", 1)

console.log(queue.front())            // Sagar

queue.add("Rohit", 1)
console.log(queue.front())            // Sagar
console.log(queue.size())             // 2

queue.add("Rahul", 3)
console.log(queue.front())            // Rahul

queue.remove();
console.log(queue.front())            // Sagar      