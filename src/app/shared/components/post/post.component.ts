import {Component, Input, OnDestroy} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {PostService} from '../../services/post.service';
import {UnSubscriber} from '../../../utils/unsubscriber';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent extends UnSubscriber implements OnDestroy {

  @Input()
  public post!: IPost;

  constructor(private postService: PostService) {
    super();
  }

  updateStatus(postId: number, status: string): void {
    this.postService.updateUserStatus(postId, status)
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(updatedPost => {
      this.post = updatedPost;
    });
  }
}
