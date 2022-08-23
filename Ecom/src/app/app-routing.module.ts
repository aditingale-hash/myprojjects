import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/auth-home/auth-home.component';
import { AuthGuard } from './component/auth/service/auth.guard.service';
import { CategoryHomeComponent } from './component/category/category-home/category-home.component';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { ReviewHomeComponent } from './component/review/review-home/review-home.component';

const routes: Routes = [
  {path:'', component: CategoryHomeComponent},
  {path:'login', component: LoginComponent},
  {path:'product/:cid', component: ProductHomeComponent},
  {path: 'review/:pid', component: ReviewHomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
