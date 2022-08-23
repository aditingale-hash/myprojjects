import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/AppService';

@Component({
  selector: 'app-navbarhome',
  templateUrl: './navbarhome.component.html',
  styleUrls: ['./navbarhome.component.css']
})
export class NavbarhomeComponent implements OnInit {
 
  constructor() { }
  loggedIn:boolean;
  username:string;
  ngOnInit(): void {

    let status = localStorage.getItem('isLoggedIn');
        if(status){
            this.loggedIn = true;
            let token = localStorage.getItem('token');
            token = atob(token);
            this.username = token.split(":")[0];
        }
        else{
            this.loggedIn = false;
        }



  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }

  
}
