class Node {
    value;
    next;
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    #head
    constructor() {
        this.#head = null;
    }

    getAllItems() {
        if (this.#head == null) {
            return []
        }
        let array = []

        let temp = this.#head;
        while (temp != null) {           
            array.push(temp.value)
            temp = temp.next;
        }
        
        return array;
    }
    getItemAt(index) {
        if (this.#head == null) {
            throw 'No Items'
        }

        if (index >= this.size()) {
            throw "index greater than size cannot be accessed"
        }

        if (index < 0) {
            throw "index less than zero cannot be accessed"
        }

        if (index == 0) {
            return this.#head;
        }

        let counter = 0;
        let temp = this.#head;
        while (temp != null) {
            if (counter == index) {
                return temp;
            }
            temp = temp.next;
            counter++;
        }
        return null
    }

    insertAtIndex(index, item) {
        if (index < 0) {
            throw "cannot insert at index less than zero"
        }

        if (index == 0) {
            let oldHead = this.#head;
            this.#head = new Node(item, oldHead)
            return;
        }

        if (index > this.size()) {
            throw "cannot insert at index greater than size"
        }

        if (index == this.size()) {
            let last = this.rear();
            last.next = new Node(item, null)
            return;
        }

        let previousValue = this.getItemAt(index - 1);
        let currentValue = this.getItemAt(index);
        previousValue.next = new Node(item, currentValue);

    }
    removeAtIndex(index) {

    }
    isEmpty() {
        return this.#head == null;        
    }
    size() {
        if(this.isEmpty()){
            return 0
        }
        let counter = 0;
        let temp = this.#head;
        while (temp != null) {
            temp = temp.next;
            counter++;
        }
        return counter;
    }
    front() {
        return this.#head
    }
    rear() {        
        return this.getItemAt(this.size() - 1);
    }
}



let list = new LinkedList();


list.insertAtIndex(0, "Sagar")
list.insertAtIndex(1, "Amit")


console.log(list.front().value)       //Sagar
console.log(list.rear().value)        //Amit
console.log(list.size())        //2
console.log(list.isEmpty())        //false


console.log(list.getItemAt(1).value)      //  Amit
list.insertAtIndex(1, "Jay")
console.log(list.getItemAt(1).value)      //  Jay

console.log(list.front().value)           // Sagar

console.log(list.getItemAt(2).value)      //  Amit

console.log(list.getAllItems())        // ["Sagar","Jay","Amit"]




// list.insertAtIndex(0, "Sagar")
// list.insertAtIndex(1, "Amit")
// list.insertAtIndex(1, "Jay")

// console.log(list.getItemAt(0))      //  Sagar
// console.log(list.getItemAt(1))      //  Jay
// console.log(list.getItemAt(2))      //  Amit



