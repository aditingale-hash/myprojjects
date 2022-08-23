import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Precription } from '../../precription/model/precription.model';
import { PrecriptionhomeService } from '../service/precriptionhome.service';

@Component({
  selector: 'app-precriptionhome',
  templateUrl: './precriptionhome.component.html',
  styleUrls: ['./precriptionhome.component.css']
})
export class myPrecriptionhomeComponent implements OnInit {

  precribe:Precription[];
  precription:Precription;
  username:string;
  errorMsg:string;
  constructor(private precribeservice:PrecriptionhomeService,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.precribeservice.getAll().subscribe(data=>{
      this.precribe=data;
       console.log(this.precribe);
       this.username=atob(localStorage.getItem('token')).split(':')[0];
      console.log( this.username);
     // this.doctor=this.user.find(d=>(d.username===this.username1));
      //this.did=this.doctor.doctor.id;
      //this.name=this.doctor.doctor.name;
      //console.log(this.name);
      //console.log(this.did);
      //console.log(this.doctor.doctor.id);
      this.precribeservice.getAllmyprecription(this.username).subscribe(data=>{
        if(data)
        this.precription = data;
        console.log(this.precribe);
      
        
      },
      error=>{
        this.errorMsg="Error in Loading Categories, Please contact Administrator";
      });
  
      });
   
   
  }

}
