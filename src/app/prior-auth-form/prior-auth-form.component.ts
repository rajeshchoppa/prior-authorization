import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { SearchCriteria } from './search-criteria';
import { ClientService } from '../client.service';
import { Response1 } from './response1';

@Component({
  selector: 'app-prior-auth-form',
  templateUrl: './prior-auth-form.component.html',
  styleUrls: ['./prior-auth-form.component.css']
})
export class PriorAuthFormComponent implements OnInit {
      constructor(private clientService:ClientService) { }

  searchCriteria:SearchCriteria=new SearchCriteria();
  ngOnInit() {
   this.response1=null;
   this.procedureCode=null;
    }
  //result binding
  response1:Response1=null;
  diagnosisCd: string="";
  procedureCode:string="";
  insurerMedian:number;
  memberMedian:number;
  providerMedian:number;
  isFailed: boolean = false;

  providerForm = new FormGroup({
    memberID: new FormControl('',Validators.required),
    providerId: new FormControl(''),
    lineOfService: new FormControl(''),
    procedureCode:new FormControl('',Validators.required),
    diagnosisCode:new FormControl('',Validators.required)
     });

  onSubmit() {

this.response1=null;  this.procedureCode=null;
    this.searchCriteria=<SearchCriteria>this.providerForm.value;
    this.isFailed=false;
 // this.searchCriteria.diagnosisCodes=[this.providerForm.value.diagnosisCodes];
   // console.warn(this.searchCriteria);
    this.clientService.postData(this.searchCriteria)
    .subscribe((data) =>{
      this.response1=<Response1>data;
      this.diagnosisCd=this.response1.prediction.diagnosisCode;
      this.procedureCode=this.response1.prediction.procedureCode;
      this.memberMedian=this.response1.prediction.memberMedian;
      this.providerMedian=this.response1.prediction.providerMedian;
      this.insurerMedian=this.response1.prediction.insurerMedian;
      console.warn(this.response1);
    },
       (error)=>{
         this.isFailed=true;
            });
  }

  showConfig() {
    this.clientService.getConfig()
      .subscribe((data) =>{
       console.warn(data);
      });
  }
  getKeys(map){
    if(!map){
    return Array.from(map.keys());
  }
}
}
