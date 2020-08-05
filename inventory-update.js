const updateInventory = (arr1, arr2) => {

    // for loop to update quantities
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr2[j].indexOf(arr1[i][1]) !== -1){
                arr1[i][0] += arr2[j][0]
                arr2.splice(j, 1) // to remove added items from newInv
            }
        }
    }
    // concat method to add new items and sort in alphabetically order
    arr1 = arr1.concat(arr2).sort((p, n) => p[1] > n[1] ? 1 : -1)
    console.log(arr1)
    return arr1;
}

// Example inventory lists
let curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

let newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

updateInventory(curInv, newInv);
