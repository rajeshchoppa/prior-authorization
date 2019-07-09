import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    let username:string='admin';
    let password:string='admin';
    console.warn(this.loginForm.value.username);
    console.warn(this.loginForm.value.password);
    if(username==this.loginForm.value.username&&password==this.loginForm.value.password){
      this.router.navigate(["prior"]);
    }
    else{
      alert('enter valid credentials');
    }
      }
}
