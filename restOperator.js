/// before knowing rest operator u know about function with multiple arguments
// used in argument time

// function sun(num1, num2){
//     console.log(num1+num2); 
// }

// sum(10,20);
// sum(10,20,30);
// sum(10,20,30,40);
// sum("hello",10,20);


// REST OPERATOR


function sum(name, course, ...args) {
    console.log(args);

    console.log(`hello ${name} of ${course}  : `);
    
  
     let sum = 0;
   for(let i in args){
        sum += args[i];
    }
    console.log(sum); 
}

sum("Yahoo", "BBA" , 20,30,40);
sum("ram kumar", "BTECH", 20,30);

// note -> REST OPERATOR MUST BE LAST FORMAL PARAMETER (NOT FIRST ARGUMENT)