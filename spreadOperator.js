// The spread operator in JavaScript, denoted by three dots (...), allows for the expansion of iterable objects
//  (like arrays or strings) or object properties into individual elements.

// used in calling time

// function sum(name, ...args){
//     console.log(arguments);

//     console.log(`hello ${name} : `);

//     let sum = 0;
//     for(let i in args){
//         sum += args[i];
//     }
//     console.log(sum);
// }
// let arr = [10,20,30,40,50];  // spread operator
// sum("Yahoo", ...arr);


// let arr1 = [10,20,30,40];

// let arr2 = [...arr1];
// arr1.push(50);

// console.log(arr1);
// console.log(arr2);


let arr1 = [10,20,30,40];
let arr2 = [50,60];

let arr3 = [...arr1, ...arr2]

console.log(arr3);

