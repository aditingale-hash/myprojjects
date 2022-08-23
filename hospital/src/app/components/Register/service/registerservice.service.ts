import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userRegister } from '../Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  RegisterApi:string;
  getalluser:string;
  constructor(private http:HttpClient) { 
    this.RegisterApi="http://localhost:8181/user/";  
    this.getalluser="http://localhost:8181/getalluser";
  }

  public Register(user:userRegister):Observable<userRegister>{

    return this.http.post<userRegister>(this.RegisterApi,user);
  }
  public getuserApi():Observable<userRegister[]>{
    return this.http.get<userRegister[]>(this.getalluser);
  }
}

