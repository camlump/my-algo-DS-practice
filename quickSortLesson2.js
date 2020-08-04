//bubble sort takes O(n squared)

//quicksork takes n(log(n))

const testArr = [3, 5, 2, 10 , 88, 90, 23, 11, 2, 66, 100, 700]

function quickSort(arr, start, end){
    //if start is greater than end, return
    if (start >= end){
        return;
    }

    //find a pivot value
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);


    function partition(arr, start, end){
        let pivotIndex = 0;
        let pviotValue = arr[end];
        for(let i = 0; i < end-1; i++){
            if(arr[i] < pviotValue){
                
            }
        }
    }
    // if the number is less than the pivot put it to the less side of the pivot
    //if the number is greater put to the right side of the pivot
}

function fastSort(arr){
    if (arr.length < 1){
        return arr;
    }

    const pivot = arr[arr.length -1]
    leftArr = [];
    rightArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot) {
            leftArr.push(arr[i])
        } else (arr)
      
    }
}

//west virginia
// texas
// penn state


// function shuffleSchools(choices){
//     let j, x, i;
//     for(i = choices.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = choices[i];
//         choices[i] = choices[j];
//          choices[j] = x;
//     }
//     return choices[i]




// }

// const choices = ['Clemson', 'LSU', 'Alabama']

// console.log(shuffleSchools(choices))   

for (let counter = 1; counter <= 5; counter++)
{
   console.log("hey hey");
}


// let msg = "hey hey",
// function printMessage(msg) {

//     for (let counter = 1; counter <= 5; counter++)
// {
//    console.log(msg);
// }

const fizzBuzz = () =>{
    for(let i = 1; i < 101; i++) {
        if(i % 15 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0 ) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(100))


const findMax =(arr) => {
//we want to create a variable the counts over each item in the array
let max = 0;

for(let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    if(currentVal > max) {
        max =currentVal;
    }
}
return max;
}

let arr = [3, 10, 22, 4];

console.log(findMax(arr))