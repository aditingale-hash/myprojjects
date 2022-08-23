import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';
import { doctors, user } from '../../Auth/model/userdata';
import { AuthguardService } from '../../Auth/service/authguard.service';

@Component({
  selector: 'app-authdoctorhome',
  templateUrl: './authdoctorhome.component.html',
  styleUrls: ['./authdoctorhome.component.css']
})
export class AuthdoctorhomeComponent implements OnInit {

  c
  loginForm: FormGroup;
  users:any;
  errorMsg: string;
  user:user[];
  username:string;
  doctors:doctors[];
  doctor:any;
  did:number;
  constructor(private router: Router, private appService: AppService,private authservice:AuthguardService) { }

  ngOnInit(): void {

    this.authservice.getAllUser().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    });
   
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onFormSubmit(){
     let username = this.loginForm.value.username;
     let password = this.loginForm.value.password;

     let user1  = this.user.find(u=> (u.username === username && u.password === password && u.role=="doctor"));
    // this.username=atob(localStorage.getItem('token')).split(':')[0];
   // this.doctor = this.user.find(u=> (u.username === this.username));

     //console.log( this.did=this.doctor.doctors.id);
     
    // this.did=this.doctor.doctors.id;

console.log(user1);
     if(user1){
        localStorage.setItem("isLoggedIn","true");
        let token = btoa(username + ':' + password);
        localStorage.setItem("token", token);
        this.appService.loggedIn.next(true);
        this.router.navigateByUrl('/');
     }else{
        this.errorMsg = 'Invalid Credentials';
     }
  }
}
