let array = [3, 4, 5, 62, 3, 17, 90, 22]

for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while(j>=0 && array[j] > current){
        array[j+1] = array[j]
        j--
    }
    array[j+1] = current
    // we have to calculate the position of current
    // in the previous items

}
console.log(array)