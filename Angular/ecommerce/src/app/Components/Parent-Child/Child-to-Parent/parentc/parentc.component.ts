import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentc',
  templateUrl: './parentc.component.html',
  styleUrls: ['./parentc.component.css']
})
export class ParentcComponent implements OnInit {
  childData:string = ''
  constructor() { }
  getDataFromChild(e:any){
  this.childData = e
  }
  ngOnInit(): void {
  }

}
