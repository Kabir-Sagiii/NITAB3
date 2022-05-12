import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcc',
  templateUrl: './parentcc.component.html',
  styleUrls: ['./parentcc.component.css']
})
export class ParentccComponent implements OnInit {

  parentData:string = 'No Data From Parent Component'
  constructor() { }

  
  getParentData(inputRef:any) {
  this.parentData = inputRef.value
  // alert(this.parentData)


  }

  ngOnInit(): void {
  }

}
