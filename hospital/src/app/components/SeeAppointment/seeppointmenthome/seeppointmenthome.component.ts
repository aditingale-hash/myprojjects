import { Component, OnInit } from '@angular/core';
import { doctors, user } from '../../Auth/model/userdata';
import { AuthguardService } from '../../Auth/service/authguard.service';
import { GetallAppointService } from '../service/getall-appoint.service';
import { GetAppointment } from './model/getallappointment.model';

@Component({
  selector: 'app-seeppointmenthome',
  templateUrl: './seeppointmenthome.component.html',
  styleUrls: ['./seeppointmenthome.component.css']
})
export class SeeppointmenthomeComponent implements OnInit {
  user:user[];
  errorMsg:string;
  appointment:GetAppointment[];
  username:string;
  doctors:doctors[];
  doctor:any;
  username1:string;
  name:string;
  constructor(private seeappointmentservice:GetallAppointService,private authservice:AuthguardService) { }
did:number;
  ngOnInit(): void {

    this.authservice.getAllUser().subscribe(data=>{
      this.user=data;
       console.log(this.user);
       this.username1=atob(localStorage.getItem('token')).split(':')[0];
      console.log( this.username1);
      this.doctor=this.user.find(d=>(d.username===this.username1));
      this.did=this.doctor.doctor.id;
      this.name=this.doctor.doctor.name;
      console.log(this.name);
      console.log(this.did);
      console.log(this.doctor.doctor.id);
      this.seeappointmentservice.getAllAppointment(this.did).subscribe(data=>{
        this.appointment = data;
      },
      error=>{
        this.errorMsg="Error in Loading Categories, Please contact Administrator";
      });
  
      });
   
   // this.seeappointmentservice.getAll().subscribe(data=>{
     // this.appointment = data;
      //console.log(this.appointment);
    //},
    //error=>{
     // this.errorMsg="Error in Loading Categories, Please contact Administrator";
    //});
  }

}
