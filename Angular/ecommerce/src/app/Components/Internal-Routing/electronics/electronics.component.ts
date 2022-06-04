import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../Services/categories.service'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
   electronicsData:any
  constructor(private category:CategoriesService) { }

  ngOnInit(): void {
    this.getAllElectronicsData()
  }

     getAllElectronicsData(){
       this.category.getDetailsOfCategory('electronics').subscribe((res)=>{
              console.log(res)
              this.electronicsData = res
       })
     }

}
