import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-adummy',
  templateUrl: './adummy.component.html',
  styleUrls: ['./adummy.component.css']
})
export class ADummyComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
    // myform = new FormGroup({
    //   name: new FormControl('Kabir'),
    //   password: new FormControl('Kabir')
    // })

    myform = this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      password:['',Validators.required]
    })

    reset(){
       this.myform.reset({
        name:"Sagar",
       
       })
    }
    updateName(){
    this.myform.patchValue({
      name:"hiiii"
    })
    }

  ngOnInit(): void {
  }

}
