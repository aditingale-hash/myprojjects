import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmenthomeComponent } from './components/Appointment/appointmenthome/appointmenthome.component';
import { LoginComponent } from './components/Auth/authhome/authhome.component';
import { AuthService } from './components/Auth/service/auth.service';
import { AuthdoctorhomeComponent } from './components/AuthDoctor/authdoctorhome/authdoctorhome.component';
import { AuthServicedoc } from './components/AuthDoctor/service/authservice.service';
import { HomedoctorComponent } from './components/Doctor/homedoctor/homedoctor.component';
import { myPrecriptionhomeComponent } from './components/myprecription/precriptionhome/precriptionhome.component';
import { PaymenthomeComponent } from './components/payment/paymenthome/paymenthome.component';
import { PrecriptionhomeComponent } from './components/precription/precriptionhome/precriptionhome.component';
import { RegisterhomeComponent } from './components/Register/registerhome/registerhome.component';
import { SeeppointmenthomeComponent } from './components/SeeAppointment/seeppointmenthome/seeppointmenthome.component';
import { SpeclizationhomeComponent } from './components/speclization/speclizationhome/speclizationhome.component';

const routes: Routes = [
  {path:'', component: SpeclizationhomeComponent},
  {path:'appointment',component:RegisterhomeComponent},
  {path:'login', component: LoginComponent},
  {path:'doctor', component: AuthdoctorhomeComponent},
  {path:'speclization/:sid',component:HomedoctorComponent},
  {path:'appointment/:did',component:AppointmenthomeComponent, canActivate: [AuthService]},
  {path:'payment',component:PaymenthomeComponent},
  {path:'viewappointment/:did',component:SeeppointmenthomeComponent,canActivate: [AuthServicedoc]},
  {path:'precription/:username',component:PrecriptionhomeComponent},
  {path:'myprecription/:username1',component:myPrecriptionhomeComponent,canActivate: [AuthService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
