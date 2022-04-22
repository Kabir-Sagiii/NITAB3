import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-db',
  templateUrl: './property-db.component.html',
  styleUrls: ['./property-db.component.css']
})
export class PropertyDBComponent implements OnInit {

  constructor() { }
  placeholder:string = "Enter Password"
  inputType:string="password"
  btnValue:string="Show Password"
  width:string="100%"
  height:string="100%"
  productDetails:any = {
     
      image:"https://th.bing.com/th/id/R.7e391d197f73b1fa82162c86b6067e77?rik=eZeoWNz6lniWag&riu=http%3a%2f%2fwww.ballerstatus.com%2fwp-content%2fuploads%2f2016%2f04%2fros1.jpg&ehk=0oZcZp5u9fB%2bFLuT6cuhMDCLKeBnUiOnkkZD8ulPgOw%3d&risl=&pid=ImgRaw&r=0",
      pname:"Macbook",
      price:90000,
      
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam itaque repudiandae iure tempore aliquid in consectetur dolore, excepturi assumenda?",
      qty:9,
  }

  getPasswordText(inputRef:any):void {
      // alert("working")
        // this.inputType = "text"
        this.btnValue = "Hide Password"
        console.log(inputRef.value)
        inputRef.type="text"

  }

  ngOnInit(): void {
  }

}
