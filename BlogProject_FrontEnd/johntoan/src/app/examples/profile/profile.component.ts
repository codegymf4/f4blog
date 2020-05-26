import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {UserPost} from "../model/UserPost";
import {BehaviorSubject} from "rxjs";
import {RoleEntity} from "../model/RoleEntity";
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {PostServiceService} from "../service/post-service.service";
import {Post} from "../model/Post";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    message: string = "";
    posts:Post[]=[];
    userProfile: UserPost = new class implements UserPost {
        email: string ="";
        firstName: string="";
        id: number=0;
        lastLogin: number=0;
        lastName: string="";
        mobile: string;
        password: string;
        registeredAt: number;
        roleEntityList: RoleEntity[];
        srcAvatar: string;
        userName: string;
    };
    registeredAt: string = "";

    constructor(private userService: UserService,
                private router:Router,
                private activatedRoute: ActivatedRoute,
                private postServiceService:PostServiceService)
    {
        this.activatedRoute.params.subscribe((b) => console.log(b['id']));
    }

    ngOnInit() {
        this.userService.getUserInfor();
        this.userService.userProfile.subscribe(b => {
            this.userProfile = b;
            this.registeredAt = new Date(this.userProfile.registeredAt).toString();
        });
        this.postServiceService.getPostByUser().subscribe(u => this.posts = u);
    }

    changeStatus(post: Post) {
        if (post.publishedStatus == 0) {
            post.publishedStatus = 1;
        }else {
            post.publishedStatus = 0;
        }
        this.postServiceService.savePost(post);
    }

    goToPost(post: Post) {
        this.router.navigate(["/showprivateblog/"+post.id])
    }

    createLink(id: number) {
        this.message = "";
        let name = prompt("input name user");
        this.postServiceService.createLink(id, name).subscribe((m:HttpResponse<String>) => {
            console.log(m);
        },((error: HttpErrorResponse) => {
            console.log(error.error.text)
            this.message= "http://localhost:4200/#/showprivateblog/"+(error.error.text);
        }));
    }
}
