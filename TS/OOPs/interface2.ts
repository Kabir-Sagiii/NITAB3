interface IProduct {

    pname:string 
    price:number 
    qty:number
    print():void 
    totalAmount():number
}

class Apple implements IProduct {

   pname="Macbook"
    price = 2400000 
    qty=2
    rating:number = 5
    
     print(): void {
         console.log(this.pname,this.price,this.qty)
     }

     totalAmount(): number {
         return this.price * this.qty
     }

}