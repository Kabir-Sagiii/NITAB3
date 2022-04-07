class Products {

    pname:string = "Macbook"
    price:number  = 9889 
    bname:any

    print(bname:string):void{
    this.bname = bname
       console.log(this.pname,this.price)
    }

    // print(bname:number):void{
    //     this.bname = bname
    //    console.log(this.pname,this.price)
    // }
}

class Apple extends Products {
  print(bname: string): void {
      this.bname = bname
      console.log("This is from child class Implementation")
      console.log(this.bname)
  }

    details(){
        // this.print("iphone")
        this.print("Oppo")
        super.print("Vivo")
    }

}

   var apple1 = new Apple()
//    apple1.print("iphone")
apple1.details()