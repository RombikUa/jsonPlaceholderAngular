import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {PostService} from '../../services/post.service';
import {UnSubscriber} from '../../../utils/unsubscriber';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent extends UnSubscriber implements OnInit, OnDestroy {

  @Input()
  public limit = 10;

  @Input()
  public showActive = false;

  public posts: IPost[] = [];

  constructor(private postService: PostService) {
    super();
  }

  ngOnInit(): void {
    this.postService.getPosts(this.limit)
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(posts => {
      this.posts = posts;
    });
  }

}
