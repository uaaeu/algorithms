//Algorithms: Pairwise 
function pairwise(arr, arg) {
  let result = 0;
  let newArr = arr.slice()
  for(let i = 0; i < newArr.length; i++) {
    for(let j = i + 1; j < newArr.length; j++) {
      if(newArr[i] + newArr[j] === arg) {
        result += i + j;
        newArr[i] = newArr [j] = NaN;
      }
    }
  }
  return result;
}

console.log(pairwise([1,4,2,3,0,5], 7))
