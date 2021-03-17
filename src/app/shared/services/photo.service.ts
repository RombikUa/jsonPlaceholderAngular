import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IPhoto} from '../interfaces/photo.interface';
import {HttpClient} from '@angular/common/http';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class PhotoService {

  private photos: IPhoto[] = [];
  private isFetched = false;

  constructor(private http: HttpClient) {
  }

  public getPhotos(limit: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`/photos?_limit=${limit}`)
      .pipe(switchMap(posts => {
        if (this.isFetched) {
          return of(this.photos);
        } else {
          this.isFetched = true;
          this.photos = posts;
          return of(this.photos);
        }
      }));
  }

  public updatePhoto(postId: number, status: string): Observable<IPhoto> {
    return this.http.patch<IPhoto>(`/photos/${postId}`, {status})
      .pipe(tap(updatedPhoto => {
        this.photos = this.photos.map(photo => {
          if (photo.id === updatedPhoto.id) {
            return updatedPhoto;
          } else {
            return photo;
          }
        });
      }));
  }
}
