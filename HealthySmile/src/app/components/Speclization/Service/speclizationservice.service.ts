import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../appointment/model/appointment.model';
import { Speclizations } from '../model/Speclization.model';

@Injectable({
  providedIn: 'root'
})
export class SpeclizationserviceService {

  private getSpeclizationApi: string;
private getReviewByProductIDApi:string;
  constructor(private http: HttpClient) {
    this.getSpeclizationApi="http://localhost:8181/speclization";
    this.getReviewByProductIDApi=""
  }

  getAllSpeclization():Observable<Speclizations[]> {
    return this.http.get<Speclizations[]>(this.getSpeclizationApi);
  }

  public getAppointemntBySpeclizationId(sid: number):Observable<Appointment[]> {
    
     return this.http.get<Appointment[]>(this.getReviewByProductIDApi+sid);
  }
}
