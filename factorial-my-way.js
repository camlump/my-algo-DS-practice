// create a function takes a value and returns output, 5! = 5 * 4 * 3 * 2 * 1

function myWay(val) {
    let result = val;
    //if the number is equal to zero return 1,
    if(val  === 0 ) {
        return 1;
    }

    while( val > 1) {
    val--
    result = result * val
    }

    return result;


}

console.log(myWay(5))

LinkedList in JavaScript

// create a Node

class Node {
    constructor(data) {
        this.data = data;
        this.next - null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data);
        //base case, is the head empty?
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;

            this.tail = node;
        }
        this.length++
    }

    remove(data) {
        let node = new Node(data);
        
        if (!this.head) {
            this.head = node;
        }
        else {
            let current = this.head;
            let newTail = current;

            while(current.next) {
                newTail = current;
                current = current.next;
                this.tail = newTail;
                this.tail.next = null;
            }

            
            this.length--;
            return current;
        }
    }

    removeBeginning(data) {
        let node = new Node(data);

        let current = this.head;
        this.head = current.next;

        if(!this.head) {
            this.head = node;
        }

        if(this.length === 0) {
            this.tail = null;
        }

        return current;

    }

    unShift(data) {
        let node = new Node(data);

        let current = this.head;
        this.head = current;

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            while(current.next) {

            }
        }
    }

    getIndex(data, index) {
        // let node = new Node(data);

        let current = this.head;
        let count = 0;

        while(current) {
            if(count === index) {
                console.log(current.data)
            }
            count++
            current = current.next;
        }

        // while(current) {
        //     if (count < index){
        //         current = current.next;
        //         count++
        //         console.log(current.next)
        //     }

        // }

        return;
    }

    removeAt(data, index) {

    }
}

let ll = new LinkedList();

ll.add(100)
ll.add(200)
ll.add(400)
ll.add(600)
ll.getIndex(1)


 console.log(ll);


 capitalizing words
 nest even sum flattened arrays
 stringify numbers
 collect strings


 var twoSum = function (nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
console.log(twoSum([2, 7, 11, 15], 9));
// Output [ 0, 1 ]


function twoSum(arr,  target) {
    let result =[];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                result.push(i)
                result.push(j)
            }
        }
    }
    return result;
}

let arr = [ 2, 5, 6, 11];

target = 7;

console.log(twoSum(arr, target))


let removeDuplicatesInPlace = function (nums) {
    //Declare pointers and found variable
    let i, j, cur, found;
    //loop through the array of numbers from the last number
    //then loop through the numbers of
    for (i = nums.length - 1; i >= 0; i--) {
        //declare the current element as nums[i];
        cur = nums[i];
        //Set found to false
        found = false;

        for (j = i - 1; !found && j >= 0; j--) {
            if (cur === nums[j]) {
                if (i !== j) {
                    nums.splice(i, 1);
                }
                found = true;
            }
        }
    }
    return nums;
};


let nums = [ 0, 0, 1, 1, 2, 3, 3,];

console.log(removeDuplicatesInPlace(nums))

var removeElement = function(nums, val) {
    
    //create a variable for to iterate through
   
    let i, j, found;
    
    for(let i= 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1)
        }
  
        
        } 
     
        
    
  
    return nums.length;
    
};

// create a map of all the roman values
const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);



const checkChar = 'Cameron';

console.log(checkChar.charCodeAt(3))