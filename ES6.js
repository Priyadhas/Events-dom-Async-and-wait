//Using let and const
let x = 10;
const y = 20;

if (true) {
    let x = 30; 
    console.log(x); 
}

console.log(x); 
//Default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); 
greet('Bob');
// Array destructuring
let [a, b] = [1, 2];
console.log(a, b); 

// Object destructuring
let { name1, age } = { name: 'Alice', age: 25 };
console.log(name1, age); 
//rest parameter

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); 
console.log(multiply(3, 4, 5)); 

console.log(sum(1, 2, 3));

// Spread operator
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6];

console.log(newArr); // [1, 2, 3, 4, 5, 6]
