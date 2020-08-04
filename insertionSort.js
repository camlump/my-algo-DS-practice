//Insertion Sort is liking Sorting cards

//we want to swap values against each other


function InsertionSort(arr) {
//loop through the the array
for(let i = 1; i < arr.length; i++){
//Check the current index with the index befor it to see if is
// less than swap the indices
    let j = i -1;
    let temp = arr[i];
    while( j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]
        console.log(arr[j])
        j--
        }
        arr[j + 1] = temp
        console.log(arr[i])
        }
        return arr

    }

    
    


let arr =  [3, 7, 10, 4, 6, 22, 11, 19, 34, 2, 5, 12, 67, 33]

console.log(InsertionSort(arr))