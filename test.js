


function findMax(arr) {
    let maxVal = 0;
    for(let i = 0; i < arr.length; i++) {
        let currentVal = arr[i]
        if( currentVal > maxVal){
            maxVal= currentVal;
        }
    }

    return maxVal
}

// function findMin(arr) {
//     let minVal = arr[i];
//     for(let i = 0; i > arr.length; i++) {
//         let currentIndex = arr[i]
//         if( currentIndex > maxVal){
//             minVal = currentIndex;
//         }
//     }

//     return minVal
// }
// temp = 75;
// function weatherFeeling() {
//     if(temp > 20){
//         console.log('it is fairly warm')
//     } else if(temp < 66){
//         console.log('its a little chilly')
//     } else if ( temp > 75) {
//         console.log('feels like summer')
//     } else {

//     }
// }



console.log(findMax([1, 20, 45, 78, 38, 24, 56, 78, 2, 99, 33]));
// console.log(weatherFeeling(temp))
// console.log(findMin([45, 3, 55, 66, 1, 23]))



function indexOfMin(arr) {
    let minIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i
        }
    }
    return minIndex
}

// function selectionSort(arr) {
    
//         let newArr = [];
//         while(arr.length > 0) {
//             let minIndex = indexOfMin[arr];
//             newArr.push(arr[minIndex]);
//             arr.splice(minIndex, 1);
        
//     }
//     return newArr;
// }

// let myList = [30, 150, 545, 200, 45, 33, 78, 800, ];

// let sortedList = selectionSort(myList)

// console.log(sortedList)


// stack exceeded example for memory
// function factorial(n) {
//     // Start with the recursive base case, n == 0:
//     if (n === 0) {
//         return 1;
//     }
//     // Now make our recursive call
//     return n * factorial(n - 1);
// }

// factorial(1000000);


//countdown function
let num = 10;


function countDown(num) {
    if(num < 0) {
        return;
    }
    console.log(num);
    return countDown(num - 1)
}

// Stack overflow 
// let num = 10;


// function countDown(num) {
//     if(num < 0) {
//         return;
//     }
//     console.log(num);
//     return countDown(num + 1)
// }


//count up to 100
let numb = 0;

let even = 0;

let pre = 10;

function countUp(numb) {
    if (numb > 9 ) {
        return numb
    }
    console.log(numb)
    return countUp(numb + 1)

}

function countEven(even) {
    if (even > 8 ) {
        return even
    }
    console.log(even)
    return countEven(even + 2)

}

function addPrevious(pre) {
    if(pre === 1) {
        return 1
    }
    console.log(pre)
    return pre + addPrevious(pre - 1)
}

// console.log(countUp(numb))
console.log(countEven(even))
console.log(countUp(numb))
console.log(countDown(num))
console.log(addPrevious(pre))



function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    // Base case: coinFlips(0) = [""]
    // Recursion: [""] => ["H", "T"] => ["HH", "HT", "TH", "TT"]
    if (n === 0) {
        return [''];
    }
    let previousFlips = coinFlips(n - 1);
    let flips = [];
    for (let i = 0; i < previousFlips.length; i++) {
        flips.push(previousFlips[i] + 'H');
        flips.push(previousFlips[i] + 'T');
    }
    return flips;
}


function findBig(nums) {
    let sum = 0;
    //create a pointer to compare elements
    for(let i = 0; i < nums.length; i++) {
    //loop through the array
        let currentNum = nums[i];
        if(currentNum > sum) {
            sum = currentNum;
        }
    }
    return sum;
}


nums = [1, 10, 5, 8, 30, 17];


console.log(findBig(nums))

function quickSort(arr) {
    if(arr.length == 1) {
        return arr;

    }
    const pivot = arr[arr.length -1];
    leftArr = [];
    rightArr =[]

    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i])
            // console.log(leftArr)
        } else {
            rightArr.push(arr[i])
            // console.log(rightArr)
        }
    }
    if(leftArr > 0 && rightArr > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if (leftArr > 0) {
        return [...quickSort(leftArr), pivot]

    }else {
        return [pivot, ...quickSort(rightArr)]
    }
    

}

const dogs = [3, 5, 4, 6, 11, 4, 77, 44, 22, 8]

console.log(quickSort(dogs))
