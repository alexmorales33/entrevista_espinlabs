function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambiar los elementos
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]