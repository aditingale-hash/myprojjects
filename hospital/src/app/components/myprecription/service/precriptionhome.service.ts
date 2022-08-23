import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Precription } from '../../precription/model/precription.model';

@Injectable({
  providedIn: 'root'
})
export class PrecriptionhomeService {

  private getmyprecriptionApi: string;
private getapi:string;
  constructor(private http: HttpClient) {
    this.getmyprecriptionApi="http://localhost:8181/precription/";
  this.getapi='http://localhost:8181/precription';
  }

  getAllmyprecription(username:string):Observable<Precription> {
    return this.http.get<Precription>(this.getmyprecriptionApi+username);
  }

  getAll():Observable<Precription[]> {
    console.log(this.http.get<Precription[]>(this.getapi));
    return this.http.get<Precription[]>(this.getapi);
  
  }
}
