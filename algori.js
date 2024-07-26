function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Shift elements of the sorted portion (arr[0] to arr[j]) that are greater than the current element
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element at its correct position
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage
  const numbers = [5, 2, 4, 6, 1, 3];
  const sortedNumbers = insertionSort(numbers);
  console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6]