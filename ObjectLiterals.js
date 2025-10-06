// an object literal is a concise and direct way to create an object

// NORMAL OBJECT CREATE in javascript

// let name = "Yahoo Baba";
// let course = "B-TECH";

// let obj = {
//     name: name,
//     course : course,
// };
// console.log(obj);


/// OBJECT LITERALS IN ES6 version

// let name = "Yahoo Baba";
// let course = "B-TECH";

// let obj = {
//     name,
//     course,
// };
// console.log(obj);

// use variable as a property name

// let n = "student";

// let obj = {
//     [n + "name"] : "Yahoo Baba",
//     course : "Btech",
//     detail : function(){
//       return `${this.studentname} is student of
//        ${this.course}`
//     }
// };

// console.log(obj);
// console.log(obj.detail());


// New function syntax

// let n = "student";

// let obj = {
//     [n + "name"] : "Yahoo Baba",
//     course : "Btech",
//     detail(){   // new function 
//       return `${this.studentname} is student of
//        ${this.course}`
//     }
// };

// console.log(obj);


let fname = "akul";
let lname = "singh";
let course = "Btech";

function student(fname, lname , course) {
    let fullname = fname + " " + lname;

    return {fullname, course};  // obj return
}
console.log(student(fname, lname, course));
