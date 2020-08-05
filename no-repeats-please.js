const permAlone = (str) => {
    // regex for repeated characters
    const regex = /(.)\1+/;
  
    // split the string into an array
    let arr = str.split('');
    let permutations = [];
    let tmp;
  
    // return 0 if str contains same character
    if(str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
    // function to swap content
    const swap = (i1, i2) => {
      tmp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = tmp;
    }
  
    // generate arrays of permutations
    const generate = (int) => {
      if(int === 1) {
        permutations.push(arr.join(''));
      }else{
        for(let i = 0; i != int; i++) {
          generate(int - 1);
          swap(int % 2 ? 0 : i, int -1);
        }
      }
    }
  
    generate(arr.length);
  
    // filter the array of repeated permutations
    const filtered = permutations.filter((string) => {
      return !string.match(regex);
    });
  
    // return no repetitions
    return filtered.length;
  }
  
  permAlone('aab');
  