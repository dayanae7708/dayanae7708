import { Component, OnInit } from '@angular/core';
import { FormArrayName,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  value='';
  formGroup:any;
  e_mail:any;

  constructor(private toastr :ToastrService) { }
    toasts: ToastrService[] = [];

  
  showSuccessToaster() {
    this.toastr.show('Registred', 'successfully!');
  

 
    this.formGroup = new FormGroup ({
      
      e_mail:new FormControl('',[Validators.pattern('^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.-]+$')]),
      password :new FormControl('',[Validators.required]),
      confirmpassword :new FormControl('',[Validators.required]),
      number :new FormControl('',[Validators.required,Validators.maxLength(10)]),
      
    
       });
  

       }
       submitForm(){
        console.log(this.formGroup);
  
      }
      ngOnInit(): void {
      
      
       }
      
       
       }
      
      
       

    



