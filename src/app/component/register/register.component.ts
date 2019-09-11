import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IRegisterComponent } from './register.interface';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AccountSevice } from 'src/app/shareds/services/account.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements IRegisterComponent {
  
  constructor(
    private builder: FormBuilder,
    private account: AccountSevice,
    private router: Router,

    ) { 
    this.initialCreateFormData() 

  }
  Url = AppURL;
  form: FormGroup;

  //ลงทะเบียน
  onSubmit() {

    if(this.form.invalid)
    return alert('กรอกข้อมูลใหม่อีกครั้ง');
    // console.log(this.form.value);

    //ส่งข้อมูล
    this.account
    .onRegister(this.form.value) 
    .then (res =>{
        alert ('Its Complete')
        this.router.navigate(['/',AppURL.Login]);
    })
    .catch(err => alert(err.Message ));

   
  }
private initialCreateFormData(){
  this.form = this.builder.group({
    firstname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
    cpassword:['',[Validators.required,this.comparePassword('password')]]
  });
}

//สร้าง Validation
 
private comparePassword(passwordField: string){
    return function (confirm_password:AbstractControl){
      if(!confirm_password.parent) return;
      const password = confirm_password.parent.get(passwordField);
      const passwordSubscripe = password.valueChanges.subscribe(()=>{
        confirm_password.updateValueAndValidity();
        passwordSubscripe.unsubscribe();
      });
      if (confirm_password.value === password.value)
      return;
      return{compare: true};

    }
}

  


  

  
 
  

  }


