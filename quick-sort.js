//Implement Quick Sort
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pilot = array[0];
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) { 
      if (e < pilot) {
        lesser.push(e);
      } else if (e > pilot) {
        greater.push(e);
      } else { 
        equal.push(e)
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)]
  }
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
