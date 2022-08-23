import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctors } from '../model/Doctos.model';
import { Speclizations } from '../model/Speclization.model';
import { SpeclizationserviceService } from '../Service/speclizationservice.service';

@Component({
  selector: 'app-speclizationhome',
  templateUrl: './speclizationhome.component.html',
  styleUrls: ['./speclizationhome.component.css']
})
export class SpeclizationhomeComponent implements OnInit {
  errorMsg:string;
  speclization:Speclizations[];
  sid:number;
  doctors:Doctors[];
  constructor(private actRoute: ActivatedRoute ,private SpeclizationService:SpeclizationserviceService) { }

  ngOnInit(): void {

    this.actRoute.params.subscribe(params=>{
      this.sid=params.sid;
       this.SpeclizationService.getAppointemntBySpeclizationId(params.sid).subscribe(data=>{
            
        //this.doctors=data;

       });
    });
    this.SpeclizationService.getAllSpeclization().subscribe(data=>{
      this.speclization = data;
     },
     error=>{
       this.errorMsg="Error in Loading speclization, Please contact Administrator";
     });
  }

}
