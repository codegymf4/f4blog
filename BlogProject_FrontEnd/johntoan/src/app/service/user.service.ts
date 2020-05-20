import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserJwt} from "../model/UserJwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/books";
  private user: BehaviorSubject<UserJwt[]> = new BehaviorSubject([]);
  private book: BehaviorSubject<UserJwt> = new BehaviorSubject<UserJwt>(new class implements UserJwt {
    id: string;
    email: string;
    name: string;
    image: string;
    token?: string;
    idToken?: string;
  })

  constructor() { }
}
