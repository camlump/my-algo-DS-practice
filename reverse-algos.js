//reverse a string
//create a variable with an empty string

function reverseString(str) {
    let newStr = '';
    //create a for loop that iterates backwards over the length of the word minus the last letter
    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i];
    }
    console.log('reversed string is: ', newStr);
}


let name = 'Matthew';

console.log(reverseString(name))


//reverse array


function reverseArray(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])

    }
    console.log('reverse array is:', newArr)
}


 const arr = [ 8, 9, 3, 5, 7, 10, 9];

 console.log(reverseArray(arr));


 function reverseInteger(x){
     //create a variable for getting the last digit
    let value, result = 0;
    
    while(x) {
        // getsthe last digit of a number for example ... 12345 = 5
        value = x % 10;
        //
        result = (result * 10 ) + value;
        //removes the last digit of a number
        x = x/10|0
    }
    
    return result;
 }

 console.log(reverseInteger(1234))


 var isPalindrome = function(x) {
    // loop through the beginning of the number 
   
     if (x < 0) return false

    let reversed = 0, y = x

    while (y > 0) {
        const lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
    
    // loop through the end of the number to see if it is the same
    // return the true if 
    
    
    
};

var isValid = function(s) {
    let bracket = {
       '(': ')',
       '{': '}',
       '[':'}'
   }
   //we should expect a closed a bracket
   let heap = [];

   for( let char of s) {
       if(bracket[char]) {
           heap.push(bracket[char])
       } else {
           if(heap.pop() !== char ) return false;
       }
   }

   return (!heap.length)
   
};