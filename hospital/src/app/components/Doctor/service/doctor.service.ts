import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private getdoctorApi: string;

  constructor(private http: HttpClient) {
    this.getdoctorApi="http://localhost:8181/speclization/";

  }

  getAllDoctor(sid:number):Observable<Doctor> {
    console.log(this.http.get<Doctor>(this.getdoctorApi+sid));
    return this.http.get<Doctor>(this.getdoctorApi+sid);
    
  }
}
