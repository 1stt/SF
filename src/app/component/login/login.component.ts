import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { ILoginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements ILoginComponent {
  
  
  constructor(
    private builder: FormBuilder,
    private router: Router  

  ) { 
    this.initialCreateFormData();
  }
  form: FormGroup;
  Url = AppURL;

  //เข้าสู่ระบบ
  onSubmit(): void {
    if(this.form.invalid)
    return alert('กรอกข้อมูลใหม่อีกครั้ง');
    console.log(this.form.value); 
    this.router.navigate(['/',AppURL.Authen,AuthURL.Status]);
  }

  //สร้างฟอร์ม
  private initialCreateFormData(){
    this.form = this.builder.group({
      email:    ['',Validators.required],
      password: ['',Validators.required],
      remember: [true]

    });

  }

}
