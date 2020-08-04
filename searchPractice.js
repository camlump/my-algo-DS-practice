


// function linearsearch(arr, elem) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === elem){
//         console.log(arr[i])
//             return i
//         }
//     }
//     return -1

// }

// const arr = [ 3, 4, 5, 7, 8, 9, 10, 13, 11, 22,];

// console.log(linearsearch(arr, 13 ))

function binarySearch(array, elem) {
    let start  = 0;
    let end = array.length -1;
    let middle = Math.floor((start + end) / 2);

    while(array[middle] !== elem && start <= end) {
        if (array[middle] < elem ) {
            start = middle + 1; 
        } else {
            end = middle -1;
        } middle = Math.floor((start + end) / 2);
    }
    return array[middle] === elem ? middle : -1;
}


const array = [ 2, 3, 5, 6, 8, 12, 24, 56, 67,];

console.log(binarySearch(array, 24))