import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-c',
  templateUrl: './ngif-c.component.html',
  styleUrls: ['./ngif-c.component.css']
})
export class NgifCComponent implements OnInit {

   angular:boolean = true 
   react:boolean = false
   showReact(){
     this.react = true 
     this.angular = false
   }
     showAngular() {
       this.angular = true
       this.react = false
      }
  constructor() { }

  ngOnInit(): void {
  }

}
