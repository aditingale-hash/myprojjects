import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarhomeComponent } from './components/navbar/navbarhome/navbarhome.component';
import { SpeclizationhomeComponent } from './components/speclization/speclizationhome/speclizationhome.component';
import { HomedoctorComponent } from './components/Doctor/homedoctor/homedoctor.component';
import { AppointmenthomeComponent } from './components/Appointment/appointmenthome/appointmenthome.component';
import { LoginComponent } from './components/Auth/authhome/authhome.component';
import { PaymenthomeComponent } from './components/payment/paymenthome/paymenthome.component';
import { SeeppointmenthomeComponent } from './components/SeeAppointment/seeppointmenthome/seeppointmenthome.component';
import { AuthdoctorhomeComponent } from './components/AuthDoctor/authdoctorhome/authdoctorhome.component';
import { HomeComponent } from './components/homedoc/home/home.component';
import { PrecriptionhomeComponent } from './components/precription/precriptionhome/precriptionhome.component';
import { RegisterhomeComponent } from './components/Register/registerhome/registerhome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarhomeComponent,
    SpeclizationhomeComponent,
    HomedoctorComponent,
    AppointmenthomeComponent,
    LoginComponent,
    PaymenthomeComponent,
    SeeppointmenthomeComponent,
    AuthdoctorhomeComponent,
    HomeComponent,
    PrecriptionhomeComponent,
    RegisterhomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
