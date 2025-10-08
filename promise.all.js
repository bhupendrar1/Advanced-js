/// Promise.all() in JavaScript is a static method that
//  takes an iterable (typically an array) of Promises as input
//  and returns a single Promise.

// promise + promise + promise => promise.all()

// If all promise resolved => then() use
// If any promise rejected => cathc() use

// let p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//      console.log('The First promise has resolved');
//      resolve(10);
//     }, 1 * 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The second promise has resolved');
//     resolve(20);
//   }, 2 * 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The Third promise has failed');
//     reject('failed');
//   }, 3 * 1000);
// });
// agr ek promise bhi failed to failed- error

// let total = 0;
// Promise.all([p1,p2,p3]).then((result) => {
//     for(let i in result){
//        total += result[i];
//     }
//     console.log(`Results : ${result}`);
//     console.log(`Total : ${total}`);
    
// }).catch((error) => {
//     console.log(`Error : ${error}`);
    
// });


// MAKE IT SHORT


let promiseCall = function(returnData , message) {
   return function(resolve,reject){
     setTimeout(() => {
     console.log(`The ${message} promise has resolved`);
     resolve(returnData);
    }, returnData * 100);
   }
};

let p1 = new Promise(promiseCall(10,"First"));
let p2 = new Promise(promiseCall(20,"Second"));
let p3 = new Promise(promiseCall(30,"Third"));
// let p4 = new Promise(function(resolve, reject){
//     reject("The 4th Promise has rejected. ");
// });


let total = 0;
Promise.all([p1,p2,p3]).then((result) => {
    for(let i in result){
       total += result[i];
    }
    console.log(`Results : ${result}`);
    console.log(`Total : ${total}`);
    
}).catch((error) => {
    console.log(`Error : ${error}`);
    
});