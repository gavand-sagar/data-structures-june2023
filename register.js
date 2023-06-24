class Register{
    #array;

    constructor(){
        this.#array =[];
    }

    put(key,value){
        if(key == "phone"){
            this.#array.push(Number(value))
        }

        if(key == "name"){
            this.#array.push(String(value))
        }
    }

   get(key){
   if(key === "phone"){
    const getNums = this.#array.filter(elem=> typeof elem === 'number')
    return getNums;
   }  

   if(key === "name"){
    const getNames = this.#array.filter(elem => typeof elem === 'string')
    return getNames;
   }
 }
}

const reg = new Register();

reg.put("phone","456679")
reg.put("phone","1323239")
reg.put("phone","5644")
reg.put("name","sigma")
reg.put("name","alpha")


console.log(reg.get("phone"))
console.log(reg.get("name"))


