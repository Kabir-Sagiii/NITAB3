import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userData:any
  constructor() { }
  getDataFromSearchComponent(e:any) {
     this.userData = e
     console.log("Home Component",this.userData)
  }

  ngOnInit(): void {
  }

}
