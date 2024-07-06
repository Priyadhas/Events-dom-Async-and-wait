let myMap = new Map();

// Adding elements
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'boolean key');
myMap.set({ id: 1 }, 'object key');

// Retrieving elements
console.log(myMap.get('name')); 
console.log(myMap.get(true)); 

// Checking for keys
console.log(myMap.has('age')); 
console.log(myMap.has('gender')); 

// Removing elements
myMap.delete('age');
console.log(myMap.has('age')); 

// Iterating over elements
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Size of the Map
console.log(myMap.size); 

// Clearing the Map
myMap.clear();
console.log(myMap.size); 
