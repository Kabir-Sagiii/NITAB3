import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-c',
  templateUrl: './ngclass-c.component.html',
  styleUrls: ['./ngclass-c.component.css']
})
export class NgclassCComponent implements OnInit {

   mybox:boolean = false
   mybox2:boolean = true
  constructor() { }
  ApplyBox1Styles() {
    this.mybox = true 
    this.mybox2 = false
  }
  ApplyBox2Styles(){
    this.mybox = false 
    this.mybox2 = true
  }

  ngOnInit(): void {
  }

}
