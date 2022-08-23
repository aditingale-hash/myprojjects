import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Precription } from '../model/precription.model';
import { PrecriptionService } from '../service/precription.service';

@Component({
  selector: 'app-precriptionhome',
  templateUrl: './precriptionhome.component.html',
  styleUrls: ['./precriptionhome.component.css']
})
export class PrecriptionhomeComponent implements OnInit {
  constructor(private router: Router,private PrecriptionService:PrecriptionService,private actRoute: ActivatedRoute) { }
  precriptionForm:FormGroup;
  precrption:Precription[];
  postprecription:Precription;
  username:string;
  ngOnInit(): void {

    this.PrecriptionService.getAppointmentApi().subscribe(data=>{
      this.precrption=data;
      console.log(this.precrption);
    });
   
    this.precriptionForm = new FormGroup({
      tablets: new FormControl(''),
      precaution: new FormControl('')
    });

    this.actRoute.params.subscribe(params=>{
      this.username=params.username;
  });
  }

  onFormSubmit(){
    this.postprecription={
      tablets :this.precriptionForm.value.tablets,
     precaution: this.precriptionForm.value.precaution
    }
     //let user1  = this.user.find(u=> (u.username === username && u.password === password ));
     this.PrecriptionService.PostAppointment(this.postprecription,this.username).subscribe(data=>{
      this.precrption.push(data);
    });
  }
}
