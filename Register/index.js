function getUniuqueValue(key){
    return key
}
class Hashtable{
    #obj
    constructor(){
        this.#obj = {}
    }
    put(key,value){
        let hashedKey = getUniuqueValue(key)
        this.#obj[hashedKey] = value
    }
    get(key){
        let hashedKey = getUniuqueValue(key)
        return this.#obj[hashedKey]
    }
}

let r = new Hashtable()
r.put("phone","9876543")
r.put("name","sagar")
r.put("email","sagar@trainitsolutions.com")


console.log(r.get("name"))
console.log(r.get("phone"))