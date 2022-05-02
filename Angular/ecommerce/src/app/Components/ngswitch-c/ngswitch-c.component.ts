import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-c',
  templateUrl: './ngswitch-c.component.html',
  styleUrls: ['./ngswitch-c.component.css']
})
export class NgswitchCComponent implements OnInit {
  btnStatus:string = 'basic'
  productDetails:any
  constructor() { }

  changeStatus(value:string){
    this.btnStatus = value

  }

     getProductDetails(){
          fetch('https://fakestoreapi.com/products/3').then((res)=>{
               return  res.json()
          }).then((actualData)=>{
            console.log(actualData)
            this.productDetails = actualData
          })
     }

  ngOnInit(): void {
      this.getProductDetails()
  }

}
