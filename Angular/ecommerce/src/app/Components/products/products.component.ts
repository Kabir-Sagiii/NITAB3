import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    productD:any=[]
    showTable:boolean = false
   
  constructor() { }

  getProductsFromServer() {
      fetch("https://fakestoreapi.com/products").then(function(res){
               return res.json()

      }).then((actualData)=>{
           console.log(actualData)
          //  this.productD = actualData
          this.productD = actualData
          this.showTable = true
         
      })

  }

  ngOnInit(): void {
  }

}
