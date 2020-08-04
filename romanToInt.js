const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);

function romanToInt(string) {
    let result = 0,
    current, previous = 0;
    for(const char of string.split("").reverse()) {
        current = values.get(char);
        if(current >= previous) {
            result += previous
        } else {
            result -= current;
        }
        previous = current;
    }
    return result;
}

console.log(romanToInt('I'))