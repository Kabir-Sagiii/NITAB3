interface IStudent {
    name:string 
    email:string
    phone:number
    // address:{
    //     city:string
    //     state:string
    //     pincode:number
    // },
    address:IAddress,
    print():void,
    returnCity():string

}
 interface IAddress {
     city:string ,
     state:string,
     pincode:number

 }

var student1:IStudent = {
  name:"NIT",
  email:"NIT@gmail.com",
  phone:9898987654,
  address:{
      city:"Hyd",
      state:"TS",
      pincode:500018
  },
  print:function(){
      console.log("I am Print function")
  },
  returnCity:function(){
        return "Hyderabad"
  }

 

}