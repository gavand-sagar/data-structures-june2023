let array = [2, 4, 5, 8, 10, 13, 15]  // 7/2 == 3.5 // 5 checks to get to 10

// for binary search it will take 3 checks 

function binarySearch(array, item) {
    if (array.length == 0) {
        return false
    }

    if (array.length == 1) {
        return (array[0] == item)
    }

    let mid = Math.floor(array.length / 2) // to get you the integer only

    if (array[mid] == item) {
        return true;
    } else if (item < array[mid]) {
        // check in left side
        // create left side
        let leftArray = array.slice(0,mid)
        return binarySearch(leftArray,item)        
    }else{
        //check in right side
        //create right side array
        let rightArray = array.slice(mid)
        return binarySearch(rightArray,item)
    }
}


console.log(binarySearch(array,4))