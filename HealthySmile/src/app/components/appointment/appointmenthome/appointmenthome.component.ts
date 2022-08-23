import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Appointment } from '../model/appointment.model';
import { Speclization } from '../model/Speclization.model';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointmenthome',
  templateUrl: './appointmenthome.component.html',
  styleUrls: ['./appointmenthome.component.css']
})
export class AppointmenthomeComponent implements OnInit {


  appointment:Appointment[];
  appointArry: Appointment[];
 
  Form: FormGroup;
  
  Cavity:string;
  constructor(private appointmentServices:AppointmentService) { }

  ngOnInit(): void {

    this.Form = new FormGroup({
      name : new FormControl(''),
      cause:new FormControl(''),
     phone: new FormControl(''),
     date: new FormControl(''),
     morning: new FormControl(''),
     afternoon: new FormControl(''),
     evening: new FormControl(''),
     speclization:new FormControl(''),
    });
  }
  onPostReview(){
let name=this.Form.value.name;
let phone=this.Form.value.phone;
let cause=this.Form.value.cause;
let date=this.Form.value.date;
let morning=this.Form.value.morning;
let afternoon=this.Form.value.afternoon;
let evening=this.Form.value.evening;
if(morning){
  let slot=this.Form.value.morning;
}
else if(afternoon){
  let slot=this.Form.value.afternoon;
}
else if(evening){
  let slot=this.Form.value.evening;
}
else{
  let slot=this.Form.value.n
}

let speclization=this.Form.value.speclization;
console.log(name+"......"+phone+"     "+cause+"     "+date+"     "+morning+"     "+afternoon+"    "+"   "+ evening+speclization);
   
}
}
