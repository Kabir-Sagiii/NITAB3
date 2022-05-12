import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username:string = ''
  userData:any
 @Output() customEvent:EventEmitter<any> = new EventEmitter()
  constructor() { }

  getUserData(){
    // alert(this.username)
    fetch(`https://api.github.com/users/${this.username}`).then((res)=>{
         return    res.json()
    }).then((actualdata)=>{
        console.log(actualdata)
        this.userData = actualdata
        this.customEvent.emit(this.userData)
    })
  }

  ngOnInit(): void {
  }

}
