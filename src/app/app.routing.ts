import {Routes,RouterModule} from '@angular/router';
import { AppURL } from './app.url';
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";


const RouteLists:Routes =[
    {path:'', redirectTo:  AppURL.Login,pathMatch:'full'},
    {path: AppURL.Login,component: LoginComponent},
    {path: AppURL.Reg,component: RegisterComponent},
    {path: AppURL.Authen,loadChildren:'./authentication/authentication.module#AuthenticationModule'},

    //{path: AppURL.Login,component: LoginComponent}
    
];


export const AppRouting = RouterModule.forRoot(RouteLists);