//there are two lists that are permutations of one another
//some of the numbers are missing in the list 
// find the missing numbers in the list 
//if a number occurs more than once in the list make sure that number appears the same time in both lists.
// the numbers must be printed in ascending order
// n is the first list
//m is the second list


function missing_numbers( arr, brr) {
    let first = 0;
    let second = 0;
    while(arr.length > 0 && brr.length > 0) {
    //check to see if the values are in both arrays
    if(arr[first] == brr[second]) {


        }
    }
}


function missingNumbers(arr) {
    let missing = [];

    for(let j = 0; j < arr.length; j++) {
        for(let i = 1; i <= count; i++){
            if (arr[j] != i) {
                missing.push(i);
            }
        }
    }
}