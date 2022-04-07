class A {
 name:string 
 city:string 

//  constructor(){
//      this.name = "NIT"
//      this.city = "Hyd"
//  }

constructor(x,y){
     this.name = x
     this.city = y
 }

   printDetails(){
       console.log(this.name,this.city)
   }


}

//   var a1= new A()
//   a1.printDetails()

//   var a2 = new A() 
//   a2.printDetails()

   var a1 = new A("Nit","Hyd")
   a1.printDetails()

   var a2 = new A("NareshIT","Delhi")
   a2.printDetails()

  a1.name = "Kabir";
  a2.name = "Dhoni"
console.log("------------------------------");
a1.printDetails();
a2.printDetails();