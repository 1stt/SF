import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Authcomponents/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { ManageComponent } from './Authcomponents/manage/manage.component';
import { ChangePComponent } from './Authcomponents/change-p/change-p.component';
import { CheckInComponent } from './Authcomponents/check-in/check-in.component';
import { MoniterComponent } from './Authcomponents/moniter/moniter.component';
import { ControllerComponent } from './Authcomponents/controller/controller.component';
import { ItemComponent } from './Authcomponents/item/item.component';
import { Moniter1Component } from './Authcomponents/moniter1/moniter1.component';
import { Controller1Component } from './Authcomponents/controller1/controller1.component';
import { StatusComponent } from './Authcomponents/status/status.component';
import { MixingComponent } from './Authcomponents/mixing/mixing.component';
import { FeedingComponent } from './Authcomponents/feeding/feeding.component';
import { ManualComponent } from './Authcomponents/manual/manual.component';
//import { SettingComponent } from './Authcomponents/set/setting.component';
import { SetComponent } from './Authcomponents/set/set.component';
//import { RouterModule } from '@angular/router';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
  declarations: [DashboardComponent, ManageComponent, ChangePComponent, CheckInComponent, MoniterComponent,
    ControllerComponent, ItemComponent, Moniter1Component, Controller1Component,
    StatusComponent, MixingComponent, FeedingComponent, ManualComponent,  SetComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,
    NgxGaugeModule,
   // RouterModule,

  ]
})
export class AuthenticationModule { }
