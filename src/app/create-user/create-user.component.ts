import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { DataService } from '../services/data.service';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm;
  header;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      email: new FormControl(""),
      is_staff: new FormControl()
    });
  }

  onSubmit(values){
    if(values.is_staff==null){
      values.is_staff = false;
    }
    if(values.email==null){
      values.email = " ";
    }
    console.log(values);
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Token 21f30a249d150465b1a7e42e48b85a28924f8656"
      })
    }

    this.data.createUser(values, httpOptions).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
