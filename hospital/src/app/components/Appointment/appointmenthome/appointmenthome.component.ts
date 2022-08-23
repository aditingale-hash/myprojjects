import { TmplAstBoundEvent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointmenthome',
  templateUrl: './appointmenthome.component.html',
  styleUrls: ['./appointmenthome.component.css']
})
export class AppointmenthomeComponent implements OnInit {
  Form:FormGroup;
  appointment:Appointment;
  appointmentArray:Appointment[];
  did:number;
  name: string;
  cause:string;
  phone:string;
  date:string;
  speId:string;
   slot1:any;
  constructor(private actRoute: ActivatedRoute,private appointmentService:AppointmentService) { }

  ngOnInit(): void {

    this.appointmentService.getAppointmentApi().subscribe(data=>{
      this.appointmentArray=data;
    });
    this.actRoute.params.subscribe(params=>{
      this.did=params.did;
  });

   
    this.Form = new FormGroup({
      name : new FormControl(''),
      problem:new FormControl(''),
     phone: new FormControl(''),
     date: new FormControl(''),
     morning: new FormControl(''),
     afternoon: new FormControl(''),
     evening: new FormControl(''),
     night: new FormControl('')
    });

    this.actRoute.params.subscribe(params=>{
      this.did=params.did;
  });
  
 
  }


    onPost(){
      
      if(this.Form.value.morning){
         this.slot1=this.Form.value.morning;
     }
     else if(this.Form.value.afternoon){
       this.slot1=this.Form.value.afternoon;
     }
     else if(this.Form.value.evening){
     this.slot1=this.Form.value.evening;
     }
     else{
      this.slot1=this.Form.value.night;
     }

      this.appointment={

      name:this.Form.value.name,
      phone:this.Form.value.phone,
      problem:this.Form.value.problem,
       date:this.Form.value.date,
      slot:this.slot1,
     username:atob(localStorage.getItem('token')).split(':')[0]
      }  

   //console.log(this.appointment);
   this.appointmentService.PostAppointment(this.appointment,this.did).subscribe(data=>{
      this.appointmentArray.push(data);
    });
  }
  // console.log(name+"......"+phone+"     "+cause+"     "+date+"     "+slot+"  "+this.did+username);

}