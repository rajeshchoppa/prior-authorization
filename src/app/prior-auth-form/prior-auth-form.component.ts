import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchCriteria } from './search-criteria';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-prior-auth-form',
  templateUrl: './prior-auth-form.component.html',
  styleUrls: ['./prior-auth-form.component.css']
})
export class PriorAuthFormComponent implements OnInit {
      constructor(private clientService:ClientService) { }

  ngOnInit() {
  }
  searchCriteria:SearchCriteria=new SearchCriteria();
  providerForm = new FormGroup({
    memberId: new FormControl(''),
    providerId: new FormControl(''),
    lineOfService: new FormControl(''),
    procedureCodeType:new FormControl(''),
    procedureCode:new FormControl(''),
    placeOfService:new FormControl(''),
    revenueCode:new FormControl(''),
    diagonosisCodeType: new FormControl('')
  });

  onSubmit() {
  this.searchCriteria=<SearchCriteria>this.providerForm.value;
    console.warn(this.searchCriteria);
  }
  showConfig() {
    this.clientService.getConfig()
      .subscribe((data) =>{
       console.warn(data);
      });
  }
}
