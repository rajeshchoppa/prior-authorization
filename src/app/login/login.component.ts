import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
 
  constructor(private router: Router,private formBuilder: FormBuilder) { }
 
   ngOnInit() {
   this.loginForm = this.formBuilder.group({
               username: ['', [Validators.required]],
               password: ['', [Validators.required]]
           });
   }
 
     // convenience getter for easy access to form fields
       get f() { return this.loginForm.controls; }
 
   onSubmit() {
   this.submitted = true;
           // stop here if form is invalid
          if (this.loginForm.invalid) {
              return;
          }
           if(this.loginForm.value.username != 'admin' && this.loginForm.value.password != 'admin'){
           alert("Invalid Credentials");
             return;
        }
          this.router.navigate(["prior"]);
}
}
