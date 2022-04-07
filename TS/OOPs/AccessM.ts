class Products {
   pname:string 
   price:number 
  protected category:string 
   private qty:number

   constructor() {
       this.pname = "MAcbook Air"
       this.price = 84000 
       this.category = "Electronics"
       this.qty = 5
   }

  private totalPrice(){
       console.log(this.price  *this.qty)
   }

   printDetails() {
       console.log(this.pname,this.price,this.category,this.qty)
   }



}

  class Macbook extends Products {
     
      Details(): void {
          this.pname 
          this.price 
          this.category
        //   this.qty   not accessible due to private
      }
  }

var p1 = new Products()
// p1.category  not accessible due to protected
// p1.qty  not accessible due to private


