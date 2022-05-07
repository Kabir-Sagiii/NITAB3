import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-c',
  templateUrl: './ngstyle-c.component.html',
  styleUrls: ['./ngstyle-c.component.css']
})
export class NgstyleCComponent implements OnInit {

  mybox:any = {
  'background-color':'lightgreen',
  'padding':'30px',
  'box-shadow':'0 0 10px black',
  'color':'red'
}
btnStyle:any = {
  'border':'none',
  'background-color':'darkred',
  'padding':'10px 20px',
  'color':'white'
}
  changeStyle(){
     this.mybox = {
       'background-color':'lightcoral',
      'padding':'50px',
  'box-shadow':'0 0 10px red',
  'color':'white'
     }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
