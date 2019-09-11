import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsDropdownModule } from 'ngx-bootstrap';
import { AuthNavbarComponent } from './ShComponents/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './ShComponents/auth-sidebar/auth-sidebar.component';
import { AuthConntentComponent } from './ShComponents/auth-conntent/auth-conntent.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AccountSevice } from './services/account.services';


@NgModule({
  declarations: [AuthNavbarComponent, AuthSidebarComponent, AuthConntentComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule,
  ],
  exports:[
    AuthNavbarComponent,
    BsDropdownModule,
    AuthSidebarComponent,
    AuthConntentComponent, 
    ReactiveFormsModule, 
    FormsModule,
    AlertModule,
  ],
  providers:[
    AccountSevice
  ]

})
export class SharedsModule { }
