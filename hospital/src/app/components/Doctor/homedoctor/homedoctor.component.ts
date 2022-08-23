import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../model/doctor.model';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-homedoctor',
  templateUrl: './homedoctor.component.html',
  styleUrls: ['./homedoctor.component.css']
})
export class HomedoctorComponent implements OnInit {

  
doctor:Doctor;
  errorMsg:string;
  sid:number;
  constructor(private actRoute: ActivatedRoute,private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      params=>{
        this.sid = params.sid;
        this.doctorService.getAllDoctor(params.sid)
        .subscribe(data=>{
            this.doctor= data;
        },
        error=>{
          this.errorMsg='Error in Loading Products, Please contact Administrator';
        });
      }
    );
  }
}
