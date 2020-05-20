import {Component, OnInit} from '@angular/core';
import {Post} from '../model/Post';
import {HttpClient} from '@angular/common/http';
import {PostServiceService} from '../service/post-service.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
    listPost: Post[];
    focus: any;
    focus1: any;

    constructor(private http: HttpClient, private postService: PostServiceService) {
    }

    ngOnInit() {
        this.getAllBook();
    }
    getAllBook() {
        const url = 'http://localhost:8080/posts/';
        this.http.get<Post[]>(url).subscribe((resJson) => {
            this.listPost = resJson;
            console.log(this.listPost);
            console.log(this.listPost[0].title);
        });
    }

    addPostToService(post: Post) {
        this.postService.setPost(post);
    }
    //
    // deleteBook(books: Books) {
    //     if (confirm('Bạn muốn xóa chứ')) {
    //         const url = 'http://localhost:3000/books/' + books.id;
    //         this.http.delete(url).subscribe((resJson) => {
    //             alert('delete thành công');
    //             this.getAllBook();
    //         }, error => {
    //             alert('delete lỗi');
    //         });
    //     }
    // }
}
