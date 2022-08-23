import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAppointment } from '../seeppointmenthome/model/getallappointment.model';

@Injectable({
  providedIn: 'root'
})
export class GetallAppointService {
  private getAppointmentApi: string;
  private getApi: string;
  constructor(private http: HttpClient) {
    this.getAppointmentApi="http://localhost:8181/appointment/";
    this.getApi="http://localhost:8181/appointment";
  }

  getAllAppointment(did:number):Observable<GetAppointment[]> {
    return this.http.get<GetAppointment[]>(this.getAppointmentApi+did);
  }

  getAll():Observable<GetAppointment[]> {
    console.log(this.http.get<GetAppointment[]>(this.getApi));
    return this.http.get<GetAppointment[]>(this.getApi);
  
  }

}
