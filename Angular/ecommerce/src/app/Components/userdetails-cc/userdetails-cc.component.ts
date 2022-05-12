import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service'

@Component({
  selector: 'app-userdetails-cc',
  templateUrl: './userdetails-cc.component.html',
  styleUrls: ['./userdetails-cc.component.css']
})
export class UserdetailsCCComponent implements OnInit {
  userData:any
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.getDataFromService()
  }

    getDataFromService(){
      this.users.getUsersDetails().subscribe((res)=>{
          console.log(res)
          this.userData = res.results
      })
    }

}
