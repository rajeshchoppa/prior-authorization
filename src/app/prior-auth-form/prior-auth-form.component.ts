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
     ngOnInit() { }
  searchCriteria:SearchCriteria=new SearchCriteria();

  //result binding
  response1:Response1=null;
  diagnosisCd: Map<string,string>=new Map();
  procedureCode: Map<string,string>=new Map();

  providerForm = new FormGroup({
    'memberID': new FormControl('',Validators.required),
    providerId: new FormControl(''),
    lineOfService: new FormControl(''),
    procedureCode:new FormControl(''),
    diagnosisCodes:new FormControl([])
     });

  onSubmit() {
    this.searchCriteria=<SearchCriteria>this.providerForm.value;
    if(this.searchCriteria.memberID!=null){

    }
 
  this.searchCriteria.diagnosisCodes=[this.providerForm.value.diagnosisCodes];
   // console.warn(this.searchCriteria);
    this.clientService.postData(this.searchCriteria)
    .subscribe((data) =>{
      this.response1=<Response1>data;
      this.diagnosisCd=this.response1.diagnosisCodes;
      this.procedureCode=this.response1.procedureCode;
      
     console.warn(this.response1);
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
