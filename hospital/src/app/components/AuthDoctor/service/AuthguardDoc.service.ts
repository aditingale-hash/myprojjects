import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../Auth/model/userdata';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

 

  private getuserApi: string;

  constructor(private http: HttpClient) {
    this.getuserApi="http://localhost:8181/getalluser";

  }

  getAllUser():Observable<user[]> {
    return this.http.get<user[]>(this.getuserApi);
  }
}
