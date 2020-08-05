const sym = (...args) => {

    // Define a veriable to keep the result
    let result = args[0]
    // for loop to find differences between two arrays
    for(let i = 1; i < args.length; i++){
      result = result.filter(x => !args[i].includes(x)).concat(args[i].filter(x => !result.includes(x)))
    }
    // a function to remove duplicate element
    let x = (r) => r.filter((v,i) => r.indexOf(v) === i)
    result = x(result)
    return result;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);
  