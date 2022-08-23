import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmenthomeComponent } from './components/appointment/appointmenthome/appointmenthome.component';
import { CatergoryhomeComponent } from './components/categories/catergoryhome/catergoryhome.component';
import { SpeclizationhomeComponent } from './components/speclization/speclizationhome/speclizationhome.component';

const routes: Routes = [
  {path:'', component: CatergoryhomeComponent},
  {path:'Speclization', component: SpeclizationhomeComponent},
  {path:'appointment/:sid',component:AppointmenthomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
