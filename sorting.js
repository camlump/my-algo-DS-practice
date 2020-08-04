function quickSort(array){
    if(array.length === 1){
    return array;
    }
    
    const pivot = array[array.length -1];
    const leftArray = [];
    const rightArray = []
    
    for(let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
        leftArray.push(array[i])
    } else {
        rightArray.push(array[i])
    }
    
    }
    
    if(leftArray.length > 0 && rightArray.length > 0){
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
    return [ ...quickSort(leftArray), pivot,]
    } else {
    return [ pivot, ...quickSort(rightArray)]
    }
    
    }
    const array = [ 10, 200, 40, 50]
    console.log(quickSort(array))


 



// function mergeSort(arr) {
//     if (arr.length < 2) {
//     return arr;
//     }
    
//     const middle = Math.floor(arr.length / 2);
//     const leftSide = arr.slice(0, middle);
//     const rightSide = arr.slice(middle, arr.length);
    
//     return merge(mergeSort(leftSide), mergeSort(rightSide));

//     }
   
//     const merge = (left, right) => {
     
//     const result = [];
//     while(left.length && right.length) {
            
//     if( left[0] <= right[0]) {
//     result.push(left.shift())
//     } else {
//     result.push(right.shift())
//     }
    
    
//     }
    
//     while(left.length) result.push(left.shift());
    
//     while(right.length) result.push(left.shift());
    
//     return result
    
//     }
    

//     // const array = [ 2, 6, 1, 5, 100, 99, 70, 60, 8,]
//     const arr = [ 34, 22, 16, 177, 225, 78, 4, 89, 99, 122, 122, 45, ,68]


//     // console.log(quickSort(array))

//     console.log(mergeSort(arr))


// function mergeSort(arr){
//     if( arr.length === 1) {
//         return arr;
//     }

//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge (left, right) {
//     let result = [];
//     let indexLeft = 0;
//     let indexRight = 0;

//     while(indexLeft < left.length && indexRight < right.length){
//         if (left[indexLeft] < right[indexRight]) {
//             result.push(left[indexLeft])
//             indexLeft++
//         }else {
//             result.push(right[indexRight])
//             indexRight++
//         }
//     }
//     return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
// }


const arr = [34, 22, 16, 177, 225, 78, 4, 89, 99, 122, 122, 45, 68];

console.log(mergeSort(arr))
    

function insertionSort(numbers) {
    // loop through length of numbers
    for(let i = 0; i < numbers.length; i++) {
        let j = i - 1;
        let temp = numbers[i];
        while( j >= 0 && numbers[j] > temp) {
            numbers[j + 1] = numbers[j]
            j--
        }
        numbers[j + 1] = temp
    }
    return numbers
}
    
    
const numbers = [3, 5, 7, 8, 10, 22, 6, 4, 36, 55, 16]

console.log(insertionSort(numbers))


function weatherCondition(atlanta) {
//if the weather over 66 than it is just right
if( atlanta >= 66 && atlanta < 78){
    console.log('Its kind of warm')
    // if it is 32 degrees than it is cold
} else if (atlanta <= 32) {
    console.log('It is cold')
}else if (atlanta >= 78) {
    console.log('its really hot')
} else [
    console.log('I dont know hoe to feel')
]

// if it is over 78 it is is really hot

}
let atlanta = 99;

console.log(weatherCondition(atlanta))


// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90.
// - BB if marks is greater than 70  and less than or equal to 80.
// - BC if marks is greater than 60 and less than or equal to 70.
// - CC if marks is greater than 50  and less than or equal to 60.
// - CD if marks is greater than 40  and less than or equal to 50.
// - DD if marks is greater than 30  and less than or equal to 40.
// - FF if marks is less than or equal to 30.
let marks = 34; 

function getScore(marks){
    if (marks > 90 && marks < 101) {
        console.log('AA');
    } else if (marks > 80 && marks <= 90){
        console.log('AB')
        
    } else if (marks > 70 && marks <= 80){
        console.log('BB')
    } else if (marks >  60 && marks <= 70){
        console.log('BC')
    } else if (marks > 50 && marks <= 60){
       console.log('cc')
    } else if (marks > 40 && marks <= 50){
        console.log('CD')
    } else if (marks > 30 && marks <= 40){
      console.log('DD')
    } else  if ( marks <= 30){
        console.log('FF')
    } else{
        console.log('not a valid score')
    }
}

console.log(getScore(marks))


