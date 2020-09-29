// Implement Selection Sort
function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[min] > array[j]) {
        min = j;
      }
    }
    if(i !== min) {
      [array[i], array[min]] = [array[min], array[i]]
    }
  }
  return array;
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
