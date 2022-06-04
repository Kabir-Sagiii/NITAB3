import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../Services/categories.service'

@Component({
  selector: 'app-jewellary',
  templateUrl: './jewellary.component.html',
  styleUrls: ['./jewellary.component.css']
})
export class JewellaryComponent implements OnInit {
  jewellaryData:any
  constructor(private category:CategoriesService) { }

  ngOnInit(): void {
    this.getJewellaryDetails()
  }

        getJewellaryDetails(){
          this.category.getDetailsOfCategory('jewelery').subscribe((res)=>{
               console.log(res)
               this.jewellaryData = res
          })
        }

}
