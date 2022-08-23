import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../review/model/review.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private getProductByCatIDApi : string;
  private getReviewByProductIDApi: string;
  private postReviewApi: string;
  private deleteReviewApi: string;
 
  constructor(private http: HttpClient){
    this.getProductByCatIDApi ='http://localhost:8888/product/';
    this.getReviewByProductIDApi='http://localhost:8888/review/product/';
    this.postReviewApi='http://localhost:8888/review/';
    this.deleteReviewApi='http://localhost:8888/review/';
  }

  public getProductByCatId(catId:number) : Observable<Product[]>{
   
    return this.http.get<Product[]>(this.getProductByCatIDApi + catId);
  }

  public getReviewsByProductId(pid: number):Observable<Review[]> {
   
     return this.http.get<Review[]>(this.getReviewByProductIDApi+ pid);
  }

  public postReview(review: Review, pid: number):Observable<Review> {
    
     return this.http.post<Review>(this.postReviewApi + pid , review);
  }

  public deleteReview(rid: number):Observable<any> {
   
    return this.http.delete<any>(this.deleteReviewApi+rid);
  }
}

