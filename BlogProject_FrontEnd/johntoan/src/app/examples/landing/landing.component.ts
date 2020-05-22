import {Component, OnInit} from '@angular/core';
import {Post} from '../model/Post';
import {HttpClient} from '@angular/common/http';
import {PostServiceService} from '../service/post-service.service';
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
    listPost: Post[]=[];
    focus: any;
    focus1: any;
    introduce: string[];

    constructor(private http: HttpClient, private postService: PostServiceService,private userService:UserService) {
    }

    ngOnInit() {
        // this.getAllBook();
        this.getAllPost();
    }

    // sliceConten(conten: string) {
    //     if (conten.length > 400) {
    //         return conten.slice(0, 400) + '...';
    //     } else {
    //         return conten;
    //     }
    // }

    baseUrl:string = 'http://localhost:8080/getAllPosts';
    getAllPost(){
        this.http.get<Post[]>(this.baseUrl).subscribe((resJson) => {
            this.listPost = resJson;
            console.log(this.listPost);
        });
    }

    // getAllBook() {
    //     const url = 'http://localhost:8080/posts/';
    //     this.http.get<Post[]>(url).subscribe((resJson) => {
    //         this.listPost = resJson;
    //         console.log(this.listPost);
    //     });
    // }

    addPostToService(post: Post) {
        this.postService.setPost(post);
    }

    logout() {
        this.userService.logout();
    }

}
