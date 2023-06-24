let array = [541, 335, 3, 523, 125, 352, 357, 578, 54, 532, 1345]

function linearSearch(array, item) {
    let flag = false
    for (let i = 0; i < array.length; i++) {
        if (item == array[i]) {
            flag = true;
            break;
        }
    }

    if (flag) {
        console.log('found')
    } else {
        console.log('not found')
    }
}



linearSearch(array,54)