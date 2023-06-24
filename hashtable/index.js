// faster retrieval


let dataArray = [
    {
        usename: "Sagar",
        password: '123',
        email: "asdhfkl"
    },
    {
        usename: "Amit",
        password: '123',
        email: "asdhfkl"
    }, 
]

dataArray.push({
    usename: "Rahul",
    password: '123',
    email: "asdhfkl"
})





let DataStore = {
    "Sagar":{
        usename: "Sagar",
        password: '123',
        email: "asdhfkl"
    },
    "Amit":{
        usename: "Amit",
        password: '123',
        email: "asdhfkl"
    }
}

DataStore["Rahul"] = {
    usename: "Rahul",
    password: '123',
    email: "asdhfkl"
}



let nameToFind = "Rahul"
let obj = DataStore[nameToFind]
