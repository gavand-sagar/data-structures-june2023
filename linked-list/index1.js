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
        while (temp.next != null) {
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

        let counter = 0;
        let temp = this.#head;
        while (temp.next != null) {
            if (counter == index) {
                return temp;
            }
            temp = temp.next;
            counter++;
        }
        return temp
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

        // insert at (1 - last)
        let previousValue = this.getItemAt(index - 1);
        let currentValue = this.getItemAt(index);
        previousValue.next = new Node(item, currentValue);

    }

    removeAtIndex(index) {

    }
    isEmpty() {
        if (this.#head == null) {
            return true;
        } else {
            return false
        }
    }
    size() {
        if (this.#head == null) {
            return 0
        }
        let counter = 0;
        let temp = this.#head;
        while (temp.next != null) {
            temp = temp.next;
            counter++;
        }
        return counter + 1;
    }
    front() {
        return this.#head
    }
    rear() {
        // the item with next == null
        if (this.#head == null) {
            return null
        }
        let temp = this.#head;
        while (temp.next != null) {
            temp = temp.next;
        }
        return temp;

    }
}



let list = new LinkedList();

list.insertAtIndex(0, "Sagar")
list.insertAtIndex(1, "Amit")


console.log(list.front())       //Sagar
console.log(list.rear())        //Amit
console.log(list.size())        //2
console.log(list.isEmpty())        //false


console.log(list.getItemAt(1))      //  Amit
list.insertAtIndex(1, "Jay")
console.log(list.getItemAt(1))      //  Jay

console.log(list.front())           // Sagar

console.log(list.getItemAt(2))      //  Amit

console.log(list.getAllItems())        // ["Sagar","Jay","Amit"]


// console.log(list.removeAtIndex(1))
// console.log(list.getItemAt(1))      // Amit


