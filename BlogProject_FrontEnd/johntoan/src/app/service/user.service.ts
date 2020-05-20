import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserJwt} from "../examples/model/UserJwt";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlLogin: string = "http://localhost:8080/Gradle___org_example___Blog_Project_1_0_SNAPSHOT_war/login";
  private users: BehaviorSubject<UserJwt[]> = new BehaviorSubject([]);
  private user: BehaviorSubject<UserJwt> = new BehaviorSubject<UserJwt>(new class implements UserJwt {
    id: string;
    token: string;
    type: string;
    userName: string;
    roles: string[];
    avatar: string;
  })

  constructor(private httpClient: HttpClient) {

  }

  login(name: string, pass: string) {
    let user: UserJwt = {
      userName: name,
      password: pass
    };
    this.httpClient.post(this.urlLogin,user).subscribe(result => {
      this.user.next(result);
      console.log(this.user.getValue())
    })
  }

  createUser() {

  }
}
