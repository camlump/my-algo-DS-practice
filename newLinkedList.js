class Node {
    constructor(element)

    {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // Create a new Node
        let node = new Node(element);
        // to store current node
        let current;
        //if the list is empty add the element and make it the head
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

        }
        //iterate to the end of the list
        while(current.next) {
            current = current.next;
        }

        current.next = node;
        this.size++;
    }

    insertAt(element, index) {
        if(index > 0 && index > this.size) {
            return false;
        } else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;
        }

}