import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {CategoriesService} from '../../Services/categories.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    userId:any
    productData:any
  constructor(private route:ActivatedRoute,private category:CategoriesService) { }

  ngOnInit(): void {
    // alert(this.route.snapshot.paramMap.get('id'))
    this.userId = this.route.snapshot.paramMap.get('id')
    this.getData()
  }
      getData(){
         this.category.getSpecificProductDetails(this.userId).subscribe((res)=>{
                   console.log(res)
                   this.productData = res
         })
      }

}
