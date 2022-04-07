class Brands {
 brandName :string 
 price:number  //access Modifiers

 constructor(brandName){
   this.brandName = brandName
   this.price = 78788
 }

 printBrand() {
     console.log(this.brandName)

 }

}

class MobileBrand extends Brands {

    modelName:string 
    constructor(modelName){
       super("Apple")
        this.modelName = modelName
         

    }
      details() {
          this.printBrand()
          console.log(this.modelName)
      }
    
}

 var mb1 = new MobileBrand("Iphone 13")
 mb1.details()

 mb1.brandName = "Oppo"
 mb1.modelName = "Oppo 13"

 mb1.details()

 class LaptopBrand extends Brands {
   modelName:string 
   constructor(){
       super("Apple")
       this.modelName = "Macbook Pro M1 Chip"
   }
   getData() {
       this.printBrand()
       console.log(this.modelName)
   }

 }

 var lb1 = new LaptopBrand() 
 lb1.getData()