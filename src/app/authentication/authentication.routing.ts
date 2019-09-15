import {Routes,RouterModule} from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './Authcomponents/dashboard/dashboard.component';
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


const RouteLists:Routes =[
    {path:'', redirectTo: AuthURL.Moniter,pathMatch:'full'},
    {path: AuthURL.Dashboard, component:DashboardComponent},
    {path: AuthURL.Manage, component:ManageComponent},
    {path: AuthURL.Change, component:ChangePComponent},
    {path: AuthURL.Check, component:CheckInComponent},
    {path: AuthURL.Moniter, component:MoniterComponent},
    {path: AuthURL.Controll, component:ControllerComponent},
    {path: AuthURL.Test, component:ItemComponent},
    {path: AuthURL.Moniter1, component:Moniter1Component},
    {path: AuthURL.Controll1, component:Controller1Component},
    {path: AuthURL.Status, component:StatusComponent},
    {path: AuthURL.Mixing, component:MixingComponent},
    {path: AuthURL.Feeding, component:FeedingComponent},
    {path: AuthURL.Manual, component:ManualComponent},
    {path: AuthURL.Setting, component:SetComponent},







];


export const AuthenticationRouting = RouterModule.forChild(RouteLists);
