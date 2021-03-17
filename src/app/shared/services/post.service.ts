import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IPost} from '../interfaces/post.interface';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class PostService {

  private posts: IPost[] = [];
  private isFetched = false;

  constructor(private http: HttpClient) { }

  public getPosts(limit: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/posts?_limit=${limit}`)
      .pipe(switchMap(posts => {
        if (this.isFetched) {
          return of(this.posts);
        } else {
          this.isFetched = true;
          this.posts = posts;
          return of(this.posts);
        }
      }));
  }

  public updateUserStatus(postId: number, status: string): Observable<IPost> {
    return this.http.patch<IPost>(`/posts/${postId}`, {status})
      .pipe(tap(updatedPost => {
        this.posts = this.posts.map(post => {
          if (post.id === updatedPost.id) {
            return updatedPost;
          } else {
            return post;
          }
        });
      }));
  }
}
