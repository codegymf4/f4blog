import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.login("tu123","1234")
    }
}
