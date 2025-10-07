import { message , user , test} from "./lib.js";

console.log(message);
user("Bhupendra", 23);   /// call function

// let a = new test();


import * as yahoo from "./lib.js";

console.log(yahoo.message);
console.log(yahoo.user("Yahoo Baba")); 

// let a = new yahoo.test();


import{default as yahoo} from "./lib.js";
yahoo();



