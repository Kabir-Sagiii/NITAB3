import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcc',
  templateUrl: './childcc.component.html',
  styleUrls: ['./childcc.component.css']
})
export class ChildccComponent implements OnInit {

   @Input() childProperty:string = ''
   
  constructor() { }

  ngOnInit(): void {
  }

}
