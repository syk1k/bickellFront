import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup } from "@angular/forms"

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

  constructor(private title: Title, private data: DataService) { 
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
        console.log(data);
        this.userToken = data as Token
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
