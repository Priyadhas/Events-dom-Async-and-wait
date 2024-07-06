let mySet = new Set();

// Adding elements
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(5); // Duplicate value, will be ignored

console.log(mySet);

// Checking for elements
console.log(mySet.has(3)); 
console.log(mySet.has(6)); 

