import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

   /*
      Fetch the data from API
  */
      private getCategoryApi: string;

      constructor(private http: HttpClient) {
        this.getCategoryApi="http://localhost:8888/category";
      }
    
      getAllCategories():Observable<Category[]> {
        return this.http.get<Category[]>(this.getCategoryApi);
      }
}
