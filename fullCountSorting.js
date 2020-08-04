
function mergeSort(arr){
    if(arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    subLeft = arr.slice(0, middle);
    subRight = arr.slice(middle, arr.length);

    subLeft = mergeSort(subLeft)
    subRight = mergeSort(subRight)

    return merge(subLeft, subRight)

}

function merge(subLeft, subRight){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(subLeft.length  && subRight.length) {
        if(subLeft[leftIndex] <= subRight[rightIndex]) {
            result.push(subLeft.shift())
            console.log(result)
        } else {
            result.push(subRight.shift())
          console.log(result)
        }
    }

    return result.concat(subLeft, subRight)
}



 let arr =[ 4, 5, 17, 15, 3, 34, 22, 34, 45];

console.log(mergeSort(arr))


function mergeSort(arr){
    if( arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while(indexLeft < left.length && indexRight < right.length){
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            console.log(result)
            indexLeft++
        }else {
            result.push(right[indexRight])
            console.log(result)
            indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))

}
let names = ['bob', 'xavier', 'Will', 'Goku', 'Gohan', 'Piccolo', 'Krillin', 'Beerus', 'Whis',];

let numbers = [ 45, 46, 78, 99, 34, 78, 23, 12, 17];

console.log(mergeSort(names))

console.log(mergeSort(numbers))