import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdemo',
  templateUrl: './ngswitchdemo.component.html',
  styleUrls: ['./ngswitchdemo.component.css']
})
export class NgswitchdemoComponent implements OnInit {
  templateValue:string = 't1'
  constructor() { }

  changeTemplate(e:any) {
    console.log(e.target.value)
     this.templateValue = e.target.value
  }

  ngOnInit(): void {
  }

}
