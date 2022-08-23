import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/AppService';
import { doctors, user } from '../../Auth/model/userdata';
import { AuthguardService } from '../../Auth/service/authguard.service';
import { Speclization } from '../model/speclization.model';
import { SpeclizationServiceService } from '../service/speclization-service.service';

@Component({
  selector: 'app-speclizationhome',
  templateUrl: './speclizationhome.component.html',
  styleUrls: ['./speclizationhome.component.css']
})
export class SpeclizationhomeComponent implements OnInit {

  Speclization:Speclization[];
  errorMsg:string;
  loggedIn: boolean;
  username:string;
  user:user[];
  doctor:any;
  did:number;
  doctors:doctors[];
  constructor(private speclizationService:SpeclizationServiceService,private authservice:AuthguardService,private appService:AppService) { }
username1:string;
  ngOnInit(): void {

    this.appService.loggedIn.subscribe(data=>{
    this.authservice.getAllUser().subscribe(data=>{
      this.user=data;
        console.log(this.user);
        console.log(this.user);
       this.username1=atob(localStorage.getItem('token')).split(':')[0];
      console.log( this.username1);
      this.doctor=this.user.find(d=>(d.username===this.username1));
      this.did=this.doctor.doctor.id;
      console.log(this.did);
      console.log(this.doctor.doctor.id);
      username:atob(localStorage.getItem('token')).split(':')[0]
      this.doctor = this.user.find(u=> (u.username === this.username));
     //  this.did=this.doctor.doctors.id;  
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
  });
      });
     
    this.speclizationService.getAllSpeclization().subscribe(data=>{
      this.Speclization = data;
    },
    error=>{
      this.errorMsg="Error in Loading Categories, Please contact Administrator";
    });
  }
  
  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }
  }


