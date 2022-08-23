import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService{

  cart_product = new BehaviorSubject([]);
  loggedIn = new BehaviorSubject<boolean>(false);

  //[] is initial value of cart_product.


}