import { Component, OnInit } from '@angular/core';
import { doctors, user } from '../../Auth/model/userdata';
import { AuthguardService } from '../../Auth/service/authguard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username1:string;
  doctors:doctors[];
  doctor:any;
  user:user[];
  did:number;
  doc:"doctor";
  constructor(private authservice:AuthguardService) { }

  ngOnInit(): void {

    this.authservice.getAllUser().subscribe(data=>{
      this.user=data;
       console.log(this.user);
       this.username1=atob(localStorage.getItem('token')).split(':')[0];
      console.log( this.username1);
      this.doctor=this.user.find(d=>(d.username===this.username1));
      this.did=this.doctor.doctor.id;
      console.log(this.did);
      console.log(this.doctor.doctor.id);
      
      });
      
  }

}
