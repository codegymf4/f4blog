import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserJwt} from "../model/UserJwt";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  message: string;
  test : Date = new Date();
  focus;
  focus1;
  constructor(private userService:UserService) {
    this.userRegisterForm = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
        }
    )
  }

  ngOnInit(): void {
  }

  save() {
    let confirmPassword = (document.getElementById('repassword') as HTMLInputElement).value;
    console.log(confirmPassword);
    this.userService.getMessage().subscribe(m => this.message = m);
    let user: UserJwt = this.userRegisterForm.value;
    this.userService.createUser(user);
  }

}
