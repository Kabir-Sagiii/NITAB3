import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  submitted:boolean = false
  constructor(private fb:FormBuilder) { }
  // myform = new FormGroup({
  // name : new FormControl('Kabir'),
  // password: new FormControl('Kabir123')

  // })

      myform = this.fb.group({
        name:['Riya',[Validators.required,Validators.minLength(5)]],
        password:['Riya@1234',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
   

      })

  resetValues(){
    this.myform.reset({
      name:"NareshIT",
     
    })
  }

  setValues(){
    this.myform.setValue({
      name:"Raj",
      password:"Raj@12345"
    })
  }

  getLoginData() {
    this.submitted = true
    console.log("Username:",this.myform.value.name)
    console.log("Password",this.myform.value.password)
  }

  updateValues(){
    this.myform.patchValue({
      name:"Sneha Reddy"
    })
  }


  ngOnInit(): void {
  }

}
