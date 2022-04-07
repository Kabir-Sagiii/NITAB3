var Emp = /** @class */ (function () {
    function Emp() {
        this.id = 101;
        this.name = "Raj";
        this.department = "Development";
        Emp.role = "Developer";
    }
    Emp.prototype.print = function () {
        console.log(this.id, this.name, this.department, Emp.role);
    };
    Emp.changeRole = function () {
        // this.id = 102     Invalid
        //    this.role = "Software Tester"   valid
        Emp.role = "Software Tester"; //valid
    };
    return Emp;
}());
//   var emp1=  new Emp()
//   emp1.name = "Rahul"
//   emp1.print()
//   emp1.role  ---- Not Valid 
//  emp1.changeRole() -- Not Valid 
// Emp.role = "Software Manager"
// Emp.changeRole()
var emp1 = new Emp();
emp1.id = 501;
var emp2 = new Emp();
emp2.id = 701;
emp1.print();
console.log("--------------------------");
emp2.print();
Emp.changeRole();
emp1.print();
console.log("--------------------------");
emp2.print();
