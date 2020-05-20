import {Component, OnInit} from '@angular/core';
import {PostServiceService} from '../service/post-service.service';
import {Post} from '../model/Post';
import {UserPost} from '../model/UserPost';

@Component({
    selector: 'app-showblog',
    templateUrl: './showblog.component.html',
    styleUrls: ['./showblog.component.css']
})
export class ShowblogComponent implements OnInit {
    post: Post;

    constructor(private postService: PostServiceService) {
    }

    ngOnInit(): void {
        this.postService.getPost().subscribe(b => this.post = b);
    }

}
