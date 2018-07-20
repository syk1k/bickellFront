import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup } from "@angular/forms"

import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username:any;
  password:any;
  userToken : Token;
  loginError: LoginError;
  LoginForm;
  token = "UNKNOWN";

  constructor(private title: Title, private data: DataService, private cookie: CookieService, private router: Router, private location: Location) { 
    this.title.setTitle("Account");
  }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(values){
    this.data.login(values).subscribe(
      data => {
        this.userToken = data as Token;
        this.cookie.set('token',this.userToken.token);
        this.location.go("http://google.com");
      },
      error => {
        console.log(error);
        this.loginError = error as LoginError;
      }
    )
  }

}
interface Token {
  token:any
}

interface LoginError {
  error:any
}
