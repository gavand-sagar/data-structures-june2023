function bubbleSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        // Swap adjacent elements if they are in the wrong order
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(array);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  