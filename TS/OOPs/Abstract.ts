abstract class Products {
  pname:string 
  price:number  
  qty:number

  totalAmount():number {
      return this.price * this.qty
  }

 abstract print():void

}

class AppleProduct extends Products {
    pname = "Iphone"
    price = 75000 
    qty=5

    print() {
        console.log(`This is Apple Product:${this.pname}`)
    }


}

class VivoProduct extends Products {
pname = "Vivo"
    price = 45000 
    qty=3

    print() {
        console.log(`This is Vivo Product:${this.pname}`)
        
    }

}

