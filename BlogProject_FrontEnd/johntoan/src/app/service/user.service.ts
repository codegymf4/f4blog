import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserJwt} from "../examples/model/UserJwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/books";
  private user: BehaviorSubject<UserJwt[]> = new BehaviorSubject([]);
  private book: BehaviorSubject<UserJwt> = new BehaviorSubject<UserJwt>(new class implements UserJwt {
    id: string;
    token: string;
    type: string;
    userName: string;
    roles?: string[];
    avatar?: string;
  })

  constructor() { }
}
