function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Concatenate the remaining elements
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  
  // Example usage:
  const array = [64, 25, 12, 22, 11];
  const sortedArray = mergeSort(array);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
  