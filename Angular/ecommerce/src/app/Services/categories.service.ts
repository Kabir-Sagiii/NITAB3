import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpclient:HttpClient) { }

      getDetailsOfCategory(categoryname:string):Observable<any>{
         return  this.httpclient.get(`https://fakestoreapi.com/products/category/${categoryname}`)
      }
      getSpecificProductDetails(id:any):Observable<any>{
      return this.httpclient.get(`https://fakestoreapi.com/products/${id}`)
      }
}
