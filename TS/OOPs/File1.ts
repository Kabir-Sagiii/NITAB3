export class A {

  sname:string = "Rajesh"
  scity:string = "Delhi"
  sphn:number = 9898987654 

  print(){
      console.log(this.sname,this.scity,this.sphn)
  }

}

export class Products {
    pname:string ="Nike Shoe"
    price:number = 5000 
    qty:number =5 

    totalAmount() {
        console.log(this.price * this.qty)
    }
}
