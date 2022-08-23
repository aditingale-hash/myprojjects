import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  postAppointmentApi:string;
  getallappintment:string;
  constructor(private http:HttpClient) { 
    this.postAppointmentApi="http://localhost:8181/appointment/";  
    this.getallappintment="http://localhost:8181/getappointment";
  }

  public PostAppointment(appointement:Appointment,did:number):Observable<Appointment>{

    return this.http.post<Appointment>(this.postAppointmentApi+did,appointement);
  }

  public getAppointmentApi():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.getallappintment);
  }
}
