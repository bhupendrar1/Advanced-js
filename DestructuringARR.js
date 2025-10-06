/// is a powerful feature that allows for unpacking values 
// from arrays or properties from objects into distinct variables.

const person = { name: 'Alice', age: 30, city: 'New York' };

// Destructuring to extract name and age
const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30
