import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userRegister } from '../Register';
import { RegisterserviceService } from '../service/registerservice.service';

@Component({
  selector: 'app-registerhome',
  templateUrl: './registerhome.component.html',
  styleUrls: ['./registerhome.component.css']
})
export class RegisterhomeComponent implements OnInit {

  UserArray:userRegister[];
  Register:FormGroup;
  post:userRegister;
  role1:string;
  resgiteruser:userRegister[];
  constructor(private registerservice:RegisterserviceService) { }

  ngOnInit(): void {


    this.registerservice.getuserApi().subscribe(data=>{
      this.UserArray=data;
    });

    
    this.Register = new FormGroup({
      name : new FormControl(''),
      useraname:new FormControl(''),
      password: new FormControl(''),
      Patient: new FormControl(''),
      doctor: new FormControl(''),
     
    });
  }

  onPost(){
      
    if(this.Register.value.Patient){
       this.role1=this.Register.value.Patient;
   }
  
   else{
    this.role1=this.Register.value.doctor;
   }

    this.post={

   
    username:this.Register.value.useraname,
    password:this.Register.value.password,
     role:this.role1,
     name:this.Register.value.name,
    
    }  

    
 console.log(this.post);
 this.registerservice.Register(this.post).subscribe(data=>{
    this.resgiteruser.push(data);

  });
}




}
