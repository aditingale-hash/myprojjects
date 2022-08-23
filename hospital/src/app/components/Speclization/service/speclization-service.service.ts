import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speclization } from '../model/speclization.model';

@Injectable({
  providedIn: 'root'
})
export class SpeclizationServiceService {

 

  private getSpeclizationApi: string;

  constructor(private http: HttpClient) {
    this.getSpeclizationApi="http://localhost:8181/speclization";

  }

  getAllSpeclization():Observable<Speclization[]> {
    return this.http.get<Speclization[]>(this.getSpeclizationApi);
  }
}
