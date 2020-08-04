
function mergerSort(arr){
    //check if the array can be split, is there more than one item?
    if(arr.length === 1){
        return arr;
    }
    //if the array can be split into two sides
    let mid = Math.floor(arr.length / 2 );
    // first array is the first set of numbers in the original array
    let arr1 = arr.slice(0, mid);
    // second array is the second half of numbers in the first array
    let arr2 = arr.slice(mid, arr.length);
    console.log(arr1, arr2)
    //recursivly run merge sort on both arrays until there are only arrays with one index
    arr1 = mergerSort(arr1);
    arr2 = mergerSort(arr2);
    // return the merge of all the mergeSorted arrays
    return merge(arr1, arr2);

}

function merge(arr1, arr2) {
    // create a empty array to hold arr1 and arr2 items
    const result = [];
    // while both of the arrays have items inside
    while (arr1.length && arr2.length) {
    //compare the current arr1 item to the current arr2 item to see
    // if is less than or equal and push and shift to the result array
        if(arr1[0] <= arr2[0]){
            result.push(arr1.shift())
            console.log(result)
        } else {
         //compare the current arr1 item to the current arr2 item to see
    // if is greater than or equal and push and shift to the result array
       
            result.push(arr2.shift())
            console.log(result)
        }
    }
    //concat the two arrays into the result array to get a sorrted array.
    return result.concat(arr1, arr2)
}

let arr = [ 23, 44, 556, 78, 99, 24, 11, 18, 6, 79, 122, 134, 56, 89, 90]

console.log(mergerSort(arr))