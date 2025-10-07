// class hello {
//     message() {   // method 
//         console.log("hello everyone");
//     }
//     sorry(){
//         console.log("sorry");
        
//     }
// }

// let a = new hello();     // object
// a.message();
// a.sorry();

// types of method 
// CONSTRUCTOR

// constructor() {
//     console.log("hello");   
// }
// PROTOTYPE

// message(){
//     console.log("Hello");
   
// }
// STATIC

// static name(){
//     console.log("hello");
// }

class student{
    constructor(){
        let name;
        console.log("Constructor function");
    }

    hello(){    // prototyope
        console.log("Hello " + this.name);
        
    }
}
let a = new student();    // object
a.name = "Bhupendra singh";
a.hello();