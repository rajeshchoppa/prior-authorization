import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchCriteria } from './search-criteria';

@Component({
  selector: 'app-prior-auth-form',
  templateUrl: './prior-auth-form.component.html',
  styleUrls: ['./prior-auth-form.component.css']
})
export class PriorAuthFormComponent implements OnInit {
    constructor() { }

  ngOnInit() {
  }
  searchCriteria:SearchCriteria=new SearchCriteria();
  providerForm = new FormGroup({
    memberId: new FormControl(''),
    providerId: new FormControl(''),
  });

  onSubmit() {
  this.searchCriteria=<SearchCriteria>this.providerForm.value;
    console.warn(this.searchCriteria);
  }
}
