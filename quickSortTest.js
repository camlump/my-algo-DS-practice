function quickSort(array){
    // if the array length only has one item it can't be sorted
    if(array.length === 1){
    return array
    
    }
    
   
    //the mid
    const pivot =  array[array.length - 1]
    
    const leftArray = []; 
    const rightArray = []; 


    //loop through the array
    for(let i = 0; i < array.length -1; i++) {
    //check to see if the item is less than the pivot
        if( array[i] < pivot) {
    //if it is push it to the left array
        leftArray.push(array[i])
        console.log(leftArray)
    } else {
    //if it is bigger than the pivot push it to the right array
    rightArray.push(array[i])
    console.log(rightArray)
    }
    }
    
    if(leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot]
    } else {
    return [pivot, ...quickSort(rightArray)]
    }
    
    
    }

    const newArr = [5, 6, 3 ,7, 11, 14];
;    const array = [ 4, 6, 2, 77, 9, 16, 90, 20]

    console.log(quickSort(newArr))
    