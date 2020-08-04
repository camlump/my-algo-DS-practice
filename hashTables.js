// //HASH TABLES
// //hash function
// const hash = (key, size) =>{
// let hashedKey = 0;

// for(let i =  0; i < key.length; i++) {
// hashedKey = key.charCodeAt(i);
// }

// return hashedKey % size

// }

// class HashTable {
//     constructor(){
//         this.size = 20;
//         this.buckets = Array(this.size)

//         for(let i = 0; i < this.buckets.length; i++) {
//             this.buckets[i] = new Map();
//         }

//     }

//     insert(key, value) {
//         let idx = hash(key, this.size)
//         this.buckets[idx].set(key, value)
//     }

//     remove(key) {
//         let idx = hash(key, this.size)
//         let deleted = this.buckets[idx].get(key)
//         this.buckets[idx].delete(key)
//         return deleted
//     }

//     search() {

//     }

// }

function hashStringToInt(s) {
    let hash = 17;

    for(let i = 0; i < s.length; i++) {
        hash = hash * s.chart
    }

    return hash;

}

console.log('ben'.charCodeAt(2))

class HashTable {
    table = new Array(100);


    setItem = (key, value) =>{
        const idx = hashStringToInt(key);
        this.table[idx] = value

    };

    getItem = key => {
        const idx =hashStringToInt(key);
        return this.table[idx];
    };
}

const myTable = new HashTable();

myTable.setItem("firstName", "bob");
myTable.getItem("firstName")

