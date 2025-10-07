/// is a powerful feature that allows for unpacking values 
// from arrays or properties from objects into distinct variables.

// let user = ["Yahoo Baba", 22, "Delhi"];

// let [name, age , city] = user;   // destructuing
// console.log(name);
// console.log(age);
// console.log(city);

// using rest operator

// let user = ["Yahoo baba" , 20, "Delhi"];

// let [name, ...args] = user;
// console.log(name);
// console.log(args);

// uisng function

// function user (name , age = 20 , city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }

// user (["Yahoo baba" , 20, "Delhi"]);


// using return array

function user(){
    return ["Yahoo baba", 22, "agra"];
}
let [name, age, city] = user();

console.log(city);
console.log(age);

