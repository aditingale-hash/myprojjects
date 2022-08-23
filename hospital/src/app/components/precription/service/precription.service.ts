import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Precription } from '../model/precription.model';

@Injectable({
  providedIn: 'root'
})
export class PrecriptionService {

  
  postprecriptionApi:string;
  getallprecrption:string;
  constructor(private http:HttpClient) { 
    this.postprecriptionApi="http://localhost:8181/precription/";  
    this.getallprecrption="http://localhost:8181/precription";
  }

  public PostAppointment(precrption:Precription,uername:string):Observable<Precription>{

    return this.http.post<Precription>(this.postprecriptionApi+uername,precrption);
  }

  public getAppointmentApi():Observable<Precription[]>{
    return this.http.get<Precription[]>(this.getallprecrption);
  }
}
