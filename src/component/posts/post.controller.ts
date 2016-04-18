import {Http, Response} from 'angular2/http';
import {Inject, Component} from 'angular2/core';
import {PostService} from './post.service';
import {Injectable} from 'angular2/core';
import {Post} from './post.model';

@Component({
    selector: 'posts',
    providers: [PostService],
    directives: [],
    template: `
                <div>
                    <button type="button" (click)='getPosts($event)'>Get Posts</button>
                        <div *ngFor="#post of posts">
                            <div>
                                <label>{{ post.title }}</label>
                            </div>
                        </div>
                </div>`
})

@Injectable()
export class PostPage {

    public postService: PostService
    public posts: Post[]
    public errorMessage: string
    
    constructor(postService: PostService) {
        this.postService = postService
    }
    
    getPosts () {
        
        this.posts = []
        this.postService.Get()
                         .subscribe((responseObject) => {
                                this.posts = <Post[]>responseObject.result
                            },
                            error => this.errorMessage = <any>error
                         )	
                                           
        }
}