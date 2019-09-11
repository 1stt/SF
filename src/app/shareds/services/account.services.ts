import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/component/register/register.interface';

@Injectable()
export class AccountSevice{

    //ลงทะเบียน
    onRegister(model: IRegister){
        return new Promise((resolve,reject) =>{
            resolve(model);
        });
         //console.log(model);
    }
}