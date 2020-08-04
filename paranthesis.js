
const reverseStr = (str) => {

let newStr = '';

for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}

return newStr;
}
  

  

let name = 'Matthew';

console.log(reverseStr(name))




// var searchInsert = function(nums, target) {
//     //create a variable for the pointer in the array
    

//     for (let val in nums) {
//         if(nums[val] === target) {
//             target = val;
//             return target
//         }
//     }
   
      
    //if the current index matches the target
    //return the index of the target.
  
    
// };

// nums = [ 9, 0, 7]

// target = 9;

// console.log( nums, target)


var searchInsert = function(nums, target) {
    //create a variable for the pointer in the array
    
    //loop through the array 
    for(let i = 0; i < nums.length; i++) {
       
        if( target <= nums[i]) {
            return i
           
        }
    }
    //if the current index matches the target
    //return the index of the target.
    return i
    
};

const nums = [ 0, 7, 2, 3]

let target = 7;

console.log(searchInsert(nums, target))