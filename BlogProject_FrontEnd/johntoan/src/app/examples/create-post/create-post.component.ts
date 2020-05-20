import {Component, OnInit} from '@angular/core';
import {Post} from '../model/Post';
import {HttpClient} from '@angular/common/http';
import {UserPost} from '../model/UserPost';
import {CategoryEntity} from '../model/CategoryEntity';
import {TagEntity} from '../model/TagEntity';
import {PostLikes} from '../model/PostLikes';
import {CommentPost} from '../model/CommentPost';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
    post: {
        id: number,
        title: string,
        publishedStatus: boolean,
        publishTime: number,
        createdAt: number,
        updatedAt: number,
        content: string,
        commentsById: CommentPost[],
        userByUserId: UserPost,
        categoryEntityList: CategoryEntity[],
        tagEntityList: TagEntity[],
        postLikesById: PostLikes[]
    };


    commentsById: CommentPost[];
    id: 7;
    title: 'nguyễn văn toan';
    publishedStatus: true;
    publishTime: 1589989875000;
    createdAt: 1589989886000;
    updatedAt: 1589989890000;
    userByUserId: UserPost = {
        id: 1,
        userName: '1',
        password: '1',
        firstName: '1',
        lastName: '1',
        mobile: '1',
        email: '1',
        registeredAt: 1588636800000,
        lastLogin: 1588636800000,
        srcAvatar: '1',
        roleEntityList: []
    };
    categoryEntityList: CategoryEntity[];
    tagEntityList: TagEntity[];
    postLikesById: PostLikes[]
    content: string;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    createPost() {
        this.post = {
            id: 19,
            title: 'toa2nsssssssddsssssssssssssssss',
            publishedStatus: true,
            publishTime: 1589989875000,
            createdAt: 1589989886000,
            updatedAt: 1589989890000,
            content: 'Môi trường là kết quả tổng hòa các mối quan hệ hệ thống giữa địa quyển, thủy quyển, khí quyển và sinh quyển. Con người, một thành phần của sinh quyển, từ thời nguyên thủy luôn tìm cách tác động lên môi trường tự nhiên nhằm tạo ra một môi trường sống bao quanh mình tiện nghi hơn và sinh kế sung túc hơn.Từ riêng lẽ các tác động lớn dần lên về quy mô, hình thành nên những dự án cần vốn đầu tư từ cộng đồng và từ vốn Nhà nước (đầu tư công). Quy mô càng lớn tác động càng sâu rộng. Tác động đúng quy luật, hiệu quả đạt được cao và bền vững. Tác động trái quy luật và vượt sức chịu tải của môi trường, môi trường bị hũy hoại, hậu quả không sớm thì muộn cũng sẽ đến và phát triển không thể bền vững.Nhà nước của bất kỳ quốc gia nào cũng muốn đầu tư công có hiệu quả cao và bền vững, môi trường được bảo vệ và ngày càng tốt đẹp hơn cho cuộc sống của cộng đồng. Từ đó mà có luật pháp về đầu tư công và về bảo vệ môi trường.',
            commentsById: [],
            userByUserId: {
                id: 1,
                userName: '1',
                password: '1',
                firstName: '1',
                lastName: '1',
                mobile: '1',
                email: '1',
                registeredAt: 1588636800000,
                lastLogin: 1588636800000,
                srcAvatar: '1',
                roleEntityList: []
            },
            categoryEntityList: [],
            tagEntityList: [],
            postLikesById: []
        };

        console.log(this.title);
        console.log(this.content);
        const url = 'http://localhost:8080/posts/';
        this.http.post(url, this.post).subscribe((resJson) => {
            alert('create thành công');
        }, error => {
            alert('create lỗi');
        });
    }
}
