class employee {
    constructor(name, age, salary){
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        // console.log("constructor : Employee");
    }
    info(){  // prototype
         console.log(`Name : ${this.empname} Age 
            : ${this.empage} Salary : ${this.empsalary}`);
    }
}

class manager extends employee {
  
   info(){  // prototype
     let TA = 1000;
   let PA = 300;
   let Totalsalary = this.empsalary + TA + PA;
         console.log(`Name : ${this.empname} Age 
            : ${this.empage} Salary : ${Totalsalary}`);
    }
}


class test extends manager {

}

let a = new test("Bhupendra singh", 25, 20000);
// let b = new employee("Harshit singh", 25, 12000);

a.info();
// b.info();





// class employee {
//     constructor(name){
//         console.log("constructor :  Employee" + name);
//     }
// }

// class manager extends employee {
//      constructor(name){
//         super();    // super keyword
//         console.log("constructor :  manager" + name);
//     }
// }

// let a = new manager("Yahoo Baba");
