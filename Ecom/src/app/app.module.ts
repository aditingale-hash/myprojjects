import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryHomeComponent } from './component/category/category-home/category-home.component';
import { CartHomeComponent } from './component/cart/cart-home/cart-home.component';
import { NavbarHomeComponent } from './component/navbar/navbar-home/navbar-home.component';
import { ReviewHomeComponent } from './component/review/review-home/review-home.component';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './component/auth/auth-home/auth-home.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryHomeComponent,
    CartHomeComponent,
    NavbarHomeComponent,
    ReviewHomeComponent,
    ProductHomeComponent,
    LoginComponent
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
