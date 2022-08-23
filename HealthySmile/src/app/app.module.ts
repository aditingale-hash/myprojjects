import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarhomeComponent } from './components/navbar/navbarhome/navbarhome.component';
import { CatergoryhomeComponent } from './components/categories/catergoryhome/catergoryhome.component';
import { AppointmenthomeComponent } from './components/appointment/appointmenthome/appointmenthome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FooterhomeComponent } from './components/footer/footerhome/footerhome.component';
import { SpeclizationhomeComponent } from './components/speclization/speclizationhome/speclizationhome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarhomeComponent,
    CatergoryhomeComponent,
    AppointmenthomeComponent,
    FooterhomeComponent,
    SpeclizationhomeComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
