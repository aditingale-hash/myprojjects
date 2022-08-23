import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicedoc implements CanActivate{

  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    //if loggedIN??
    let token = localStorage.getItem('token');
    if(token){
      
      return true;
    }
    this.router.navigateByUrl("/doctor");
    return false;
  }

}

