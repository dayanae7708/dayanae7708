import { Component, OnInit } from '@angular/core';
import { FormArrayName,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value= '';
  formGroup:any;

  constructor() {
    this.formGroup=new FormGroup({
      e_mail:new FormControl('',[Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      password : new FormControl ('',[Validators.required,Validators.minLength(6)]),
    })
   }
   get password() { return this.formGroup.get('password'); }
   get e_mail() { return this.formGroup.get('e_mail'); }
   submitForm(){
   console.log(this.formGroup)
   }

  ngOnInit(): void {
  }

}