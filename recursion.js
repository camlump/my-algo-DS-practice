function pow(x, n) {
    // base case if the exponent is eaqual to one return the number
    if(n == 1) {
        return x;
    //if not multiply the number by the exponent 
    } else {
        return x * pow(x, n -1);
    }

}

function factiorial(num) {
    //if num is equal to zero return 1
    if (num === 0) {
        return 1;
    }
    console.log(`the factiorial of ${num} * ${num -1}`)
    //if num is not equal to zero or one keep multiplying num * num - 1
    return num * factiorial(num -1);
}

function product(arr) {
  if( arr.length === 1) {
      return arr[0];
      
    }else {
        console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]} + ${arr[4]}` )
        return arr.pop() + product( arr)
    }
 
  
}

function addRange(num) {
  //add the number in range
  if( num === 0 ) {
      return num;
      
  }
  console.log(`num in range ${num} + ${num -1 }`)

  return num + addRange(num -1)
    
}
// 1, 1, 2, 3, 5, 8, 13
function fib(num) {
    
   if( num <= 1 ) {
       return 1;
   }
  
   

    return fib(num -1) + fib(num- 2)
}

// console.log(fib(7))

// console.log(addRange(2))

// arr = [1,2,3,10,11, 12];

// console.log(product(arr))

// console.log(factiorial(6))

// console.log(pow(2,8))

function quickSort(array){
    // if the array length only has one item it can't be sorted
    if(array.length === 1){
    return array
    
    }
    
   
    //the mid
    const pivot =  array[array.length - 1]
    
    const leftArray = []; 
    const rightArray = []; 


    //loop through the array
    for(let i = 0; i < array.length -1; i++) {
    //check to see if the item is less than the pivot
        if( array[i] < pivot) {
    //if it is push it to the left array
        leftArray.push(array[i])
        console.log(leftArray)
    } else {
    //if it is bigger than the pivot push it to the right array
    rightArray.push(array[i])
    console.log(rightArray)
    }
    }
    
    if(leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot]
    } else {
    return [pivot, ...quickSort(rightArray)]
    }
    
    
    }


function binarySearchRecursive(sortedarray, searchValue, minIndex, maxIndex) {
    'use strict'
    
    
    let currentIndex;

    let currentElement;

    while(minIndex <= maxIndex) {
        //find the value in the middle of the array
        let middleIndex = (minIndex + maxIndex)/ 2 | 0;
        currentElement = sortedarray[middleIndex];

        //check to see if it is the same as the middle value
        if(currentElement === searchValue) {
            return middleIndex;
        }
        if(currentElement < searchValue) {
            return binarySearchRecursive(sortedarray, searchValue, middleIndex + 1, maxIndex);
        }
        
        
        //if the value is greater than the middle of the array
        if (currentElement > searchValue) {
            return binarySearchRecursive(sortedarray, searchValue, minIndex, middleIndex - 1);
        }
       
      
    }

    return -1

}

let sortedarray = [ 2, 7, 11, 25, 30, 56, 200, 250];

let valueToFind = 200;

let minIndex = 0;

let maxIndex = sortedarray.length - 1;

let result = binarySearchRecursive(sortedarray, valueToFind, minIndex, maxIndex);

console.log(`The index position is ${result}`);

console.log(`The value is: ${sortedarray[result]}` )
   


function twoSums(arr, target) {
    let result = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target){
                result.push(i)
                result.push(j)
            }
        }
    }
    return result;
}


let arr = [3, 4, 11, 12]

let target = 7;
console.log(twoSums(arr, target))