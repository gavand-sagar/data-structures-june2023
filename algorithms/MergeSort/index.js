let array = [2,6,4,3,1,5,7]


function mergeSort(array){
    if(array.length <= 1){
        return array
    }

    let midpoint = Math.floor(array.length / 2)
    let leftArray = array.slice(0,midpoint)
    let rightArray = array.slice(midpoint)


    let sortedLeft = mergeSort(leftArray)
    let sortedRight = mergeSort(rightArray)

    return merge(sortedLeft,sortedRight)

}

function merge(left,right){
    let temp = [];

    while(left.length || right.length){
        if(left.length > 0 && right.length > 0){
            if(left[0] < right[0]){
                temp.push(left.shift())
            }else{
                temp.push(right.shift())
            }
        }else if (left.length > 0){
            temp = [...temp,...left]
            return temp
        }else if (right.length > 0){
            temp = [...temp,...right]
            return temp
        }
    }
    return temp;

}



console.log(mergeSort(array))