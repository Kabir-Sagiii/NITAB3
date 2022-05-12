import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   dataService:string = "Angular Service"
   
  myFirstAngularService(){
    console.log("Service is created")
  }

  constructor(private httpclient:HttpClient) { }

     getUsersDetails():Observable<any>{

     
     return  this.httpclient.get('https://randomuser.me/api/?results=50')
     }

}
