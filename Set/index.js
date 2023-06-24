// set  
// it is a collection
// it do not contain duplicate values

// Techinal
// it is goint to be a class
// add(item) method will be there to add new item
// values() method will be there to get all items

class MySet{    
    #array;
    
    constructor(){
        this.#array = []
    }

    add(item){
        if(this.#array.includes(item) == false) // if not present
        {
            this.#array.push(item)
        }
    }

    values(){
        return this.#array;
    }
}

let s = new MySet();
s.add(5)
s.add(6)
s.add(7)
s.add(7)
s.add(7)
s.add(7)
s.add(3)
s.add(5)

console.log(s.values()) 

