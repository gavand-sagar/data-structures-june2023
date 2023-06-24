let array = [61, 5, 20, 11, 17, 89]

for (let z = 0; z < array.length; z++) {

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {  // check item with its next 
            //swap  array[i] and array[i + 1]
            let temp = array[i]
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
}

console.log(array)


