import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  templateUrl: './twowaydb.component.html',
  styleUrls: ['./twowaydb.component.css']
})
export class TwowaydbComponent implements OnInit {
   uname:string =''
   email:string = ''
   phone:number = 9999999999
  constructor() { }

  ngOnInit(): void {
  }

}
