import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {
   childData:string = ''

      //create the custom event
    @Output() customEvent:EventEmitter<string> =  new EventEmitter()


   sendDataToParent() {
   
       //Fireup the event
       this.customEvent.emit(this.childData)

   }
  constructor() { }

  ngOnInit(): void {
  }

}
