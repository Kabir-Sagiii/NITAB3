import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifthenelse',
  templateUrl: './ngifthenelse.component.html',
  styleUrls: ['./ngifthenelse.component.css']
})
export class NgifthenelseComponent implements OnInit {


  product:any = {
    pname:"Macbook Pro",
    price:240000,
    description:"Apple new MacBook review (early 2015)",
    image:"https://cdn2.expertreviews.co.uk/sites/expertreviews/files/7/95/apple_new_macbook_hero.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
