let array = [8, 2, 4, 1, 5]

for (let i = 0; i < array.length - 1; i++) {
    // if current is greater than the smallest of remaining
    // then swap and go to next
    // else
    // go to next item
    let current = array[i];
    // this code is just to get the smallest Item and its location
    let smallestIndex = i + 1;
    let smallestItem = array[i + 1]
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < smallestItem) {
            smallestIndex = j;
            smallestItem = array[j]
        }
    }


    if(current > smallestItem){
        // swap current location with smallest location
        let temp = array[i]
        array[i] = array[smallestIndex];
        array[smallestIndex] = temp;
    }


}


console.log(array)
