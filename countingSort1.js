// an array has a length greater than 0 or equal to 100
// each item is a number
// how many time does the current number appear in the array
// create a hashmap that has keys of the numbers and values that hold how many times that number appears
// return  a string showing the amount of times each number appears on one line seperated by spaces.


function countingSort1(nums) {
    //So need need a variable(hashmap) that holds the numbers and the occurances.

    let myNums = {};
    //populate myNums object
    //loop through the nums array
   for(let i = 0; i < nums.length; i++) {
       // check the current item is exist in our object
       if( nums[i] in myNums) {
           //check if the number exist
               //if the item exist increment it by 1
            myNums[nums[i]] += 1;
        } else {
            //if the item does not exist 
                //add item as a key, assign it a value of 1
            myNums[nums[i]] = 1;
        }
    }
    //create a variable with an empty string
    let result = '';
    for(let i = 0; i < nums.length; i++){
    //check how many times does the index appear by the value
        if( i in myNums) {
            result += '' + myNums[i] + ' ';
            
        } else {
            result += '' + 0 + ' ';
        }
    }

    return result;
}

function countingSort2(newSet){
    //create an array to hold the counts
    const counts = [];
    //loop from 0 to 100 
    for(let i = 0; i < 100; i++) {
    // set the value of counts to zero
        counts[i]= 0;
    }
    for(let i = 0; i < newSet.length; i++){
        counts[arr[i]]++;
    }
    console.log(counts.join( ''));
}


let nums = [1, 1, 2, 3, 1];

let newNums = [2, 0, 4, 5, 2, 6]

console.log(countingSort1(newNums))




// hackerrank hashmap solution
// let myNums = {};
// //populate myNums object
// //loop through the nums array
// for(let i = 0; i < arr.length; i++) {
//    // check the current item is exist in our object
//    if( arr[i] in myNums) {
//        //check if the number exist
//            //if the item exist increment it by 1
//         myNums[arr[i]] += 1;
//     } else {
//         //if the item does not exist 
//             //add item as a key, assign it a value of 1
//         myNums[arr[i]] = 1;
//     }
// }
// //create a variable with an empty string
// let output = [];
// for(let i = 0; i < 100; i++){
// //check how many times does the index appear by the value
//     if( i in myNums) {
//         output.push(myNums[i]);
        
//     } else {
//        output.push(0); 
//     }
// }

// return output;




