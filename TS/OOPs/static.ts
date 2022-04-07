class Emp {
   id:number
   name:string
   department:string
   static role:string

   constructor(){
     this.id = 101 
     this.name = "Raj"
     this.department = "Development"
     Emp.role = "Developer"
   }

       print(){
           console.log(this.id,this.name,this.department,Emp.role)
       }

      static  changeRole(){
            // this.id = 102     Invalid

        //    this.role = "Software Tester"   valid
           Emp.role = "Software Tester"      //valid
        }

}

//   var emp1=  new Emp()
//   emp1.name = "Rahul"
//   emp1.print()
//   emp1.role  ---- Not Valid 
//  emp1.changeRole() -- Not Valid 

// Emp.role = "Software Manager"
// Emp.changeRole()


 var emp1=  new Emp()
    emp1.id = 501

var emp2 = new Emp() 
emp2.id = 701

emp1.print() 
console.log("--------------------------")
emp2.print()


Emp.changeRole()
emp1.print() 
console.log("--------------------------")
emp2.print()
