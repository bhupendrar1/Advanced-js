export let message = "ES6 Modules";   // variable

export function user(name, age){    // function
    console.log(`Hello ${name} your age is : ${age}`);
}

export class test {     // class
    constructor(){
        console.log("Constructor Method ");
        
    }
}



 let message = "ES6 Modules";   // variable

 function user(name, age){    // function
    console.log(`Hello ${name} your age is : ${age}`);
}

 class test {     // class
    constructor(){
        console.log("Constructor Method ");
        
    }
}

export {message , user , test};



export default function(){
  console.log("Hello Madhur");
  
}