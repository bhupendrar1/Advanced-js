// Promises in JavaScript are objects that represent
//  the eventual completion (or failure) of an asynchronous operation and its resulting value.

//  A Promise can exist in one of three states:
// Pending: The initial state; the asynchronous operation has not yet completed.
// Fulfilled (Resolved)->(then) : The operation completed successfully, and a resulting value is available.
// Rejected (Catch): The operation failed, and an error reason is available.

// let complete = true;

// let prom = new Promise(function(resolve, reject){
//     if(complete){
//         resolve("I'm successfull");
//     }
//     else{
//    reject("I'm Failed");
//     }
// });
// console.log(prom);


// Using function 


// function prom(complete){
//     return new Promise(function(resolve, reject){
//     if(complete){
//         resolve("I'm successfull");
//     }
//     else{
//    reject("I'm Failed");
//     }
// });
// }

// console.log(prom(true));


// Create function for each condition  & setTimeout method


// function prom(complete){
//     return new Promise(function(resolve, reject){
//         console.log("Fetching data, please Wait.");
//     setTimeout(() => {
//         if(complete){
//             console.log("I'm successfull");
//         }
//         else{
//             console.log("I'm failed");
//         }
//     }, 3000)     // 3 sec time
// });
// }

// let onfulfilment = (result) => {
//     console.log(result);    
// }
// let onRejection = (error) => {
//     console.log(error);
// }
// prom(false).then(onfulfilment).catch(onRejection);      // method chaining 

// another way 


// function prom(complete){
//     return new Promise(function(resolve, reject){
//         console.log("Fetching data, please Wait.");
//     setTimeout(() => {
//         if(complete){
//             console.log("I'm successfull");
//         }
//         else{
//             console.log("I'm failed");
//         }
//     }, 3000)     // 3 sec time
// });
// }

// prom(true).then((result) => {
//     console.log(result);    
// }).catch((error) => {
//     console.log(error);
// });  


// example of  division 

function prom(a, b){
 return new Promise(function(resolve, reject){
    console.log("Fetching data, Please wait.");
    let c = a / b;
    setTimeout(() =>{
        if(a,b){
            resolve(`Your answer : ${c}`);
        }else{
            reject("Failed to calculate.");
        }
    }, 2000)
 });
}

prom(9,2).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});