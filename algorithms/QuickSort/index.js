function quickSort(arr) {
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[0];
    let smallers = [];
    let greaters = [];

    for (let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            smallers.push(arr[i])
        }else{
            greaters.push(arr[i])
        }
    }

    return quickSort(smallers).concat([pivot]).concat(quickSort(greaters))

}



let array = [54321,32435,3,5233,12325,356432,332457,578,54,532,1345]
console.log(quickSort(array))