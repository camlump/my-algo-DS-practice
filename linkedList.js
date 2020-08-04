// Linked list
// Disadvantages slow for getting the Nth element - O(N)
// Advantage insert and delete is O(1) constant
// Appending takes O(N) linear time

l
class Node{
    constructor(data){
        // node starts with a given data property
        this.data = data;
        // a node also has a .next property initialized as null
        this.next = null;

    }

}

class LinkedList{
    constructor(){
        //a Linked LIst starts with a "head" property initiakized as null
        this.head = null;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        let newNode = new Node(data);
        //if the linked list is empty, the head is the new node
        if(this.head === null){
            this.head = newNode;
            return
        }
    
        // otherwise, find the tail and add the new node as the tail's next node
        let cur = this.head;
        while(cur.next != null){
            cur = cur.next;
        }
        cur.next = newNode;
    }

    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        let newNode = new Node(data);
        // if the linked list is empyty, the head is this new node
        if(this.head === null){
            this.head = newNode;
            return;
        }
        // otherwise, the new node is the head and the previous head is the new
        // node's next node
        let oldHead = this.head;
        this.head = newNode;
        newNode = oldHead;
    }

    pop(){
        if(this.head === null){
            return null;
        }
        if(this.head.next == null){
            let oldHead = this.head;
            this.head = null;
            return oldHead.data
        }
        let prev = null;
        let cur = this.head;
        while(cur.next != null) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
        return cur.data;
    }
}



let name = "cameron";


console.log(LinkedList)

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        //the start of the linkedlist needs to be null
        this.head = null;
        this.size = 0;
    }
    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
        // if empty, make head
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;
        while(current.next) {
            current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    insertAt(data, index) {
        //edge case
        //if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }
        //edge case
        //if first index
        if(index === 0){
            this.head = new Node(data, this.head)
            return
        }

        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current; // node before the index taking the insert
            count++;
            current = current.next // node after the index
        }
        node.next = current;
        previous.next = node;


        this.size++
    }
       
   
    //print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}






// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(500)
// ll.insertAt(400, 3)
// ll.insertAt(800, 1)
// ll.insertAt(10000, 4)
// // console.log(ll)

// // console.log(ll)

// ll.printListData()


// class LinkedList {
//     constructor() {
//         this.head = his.tail = null
//     }

//     append() {
//         if(!this.head) {
//             this.head = this.tail = new Node(value)
//         } else {
//             let oldTail = this.tail;
//             this.tail = new Node(value);
//             oldTail.next = this.tail
//             this.tail.previous = oldTail
//         }
//     }

//     prepend()

//     deleteHead()

//     deleteTail()

//     search()

// }

// class Node {
//     constructor(value, pre, next) {
//         this.value=value;
//         this.pre = null;
//         this.next=null;

//     }
// }