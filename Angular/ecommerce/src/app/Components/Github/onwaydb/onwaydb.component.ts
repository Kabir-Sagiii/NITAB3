import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onwaydb',
  templateUrl: './onwaydb.component.html',
  styleUrls: ['./onwaydb.component.css']
})
export class OnwaydbComponent implements OnInit {

  constructor() { }

    productDetails:any = {
      pname:"Iphone 13 Pro",
      price:90000,
      qty:8


    }

    userDetails:any = {
    uname:"Rahul Pandey",
    city:"Delhi",
    email:"Rahulp@gmail.com",
    gender:"male"

    }

  ngOnInit(): void {
  }

}
