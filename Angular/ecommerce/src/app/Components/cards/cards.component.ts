import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
   serviceProperty:string = ''
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.users.myFirstAngularService()
    this.serviceProperty = this.users.dataService
  }

}
