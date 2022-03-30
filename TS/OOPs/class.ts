class AppleBrand {
    brandName:string 
    pname:string 
    price:number
    qty:number 

    constructor() {
         this.brandName = "Apple"
         this.pname = "Iphone 12"
         this.price = 90000
         this.qty = 11
    }


    totalAmount():number {
    return this.price * this.qty
    }

      displayDetails():void {
        console.log(this.brandName,this.pname,this.price,this.qty)
      }

}
    var p1=  new AppleBrand()  //object
    p1.totalAmount() 
    p1.displayDetails()
    p1.price = 100000















            
class Macbook {
   macbookName:string = "Macbook Pro 16"
   macbookPrice:number = 240000
   rating:number = 5


    printDetails() :void {
console.log(this.macbookName,this.macbookPrice,this.rating)
    }


}