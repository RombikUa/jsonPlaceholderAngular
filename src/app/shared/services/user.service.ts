import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class UserService {

  private users: IUser[] = [];
  private isFetched = false;

  constructor(private http: HttpClient) { }

  public getUsers(limit: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(`/users?&_limit=${limit}`)
      .pipe(switchMap(users => {
        if (this.isFetched) {
          return of(this.users);
        } else {
          this.isFetched = true;
          this.users = users;
          return of(this.users);
        }
      }));
  }

  public updateUserStatus(userId: number, status: string): Observable<IUser> {
    return this.http.patch<IUser>(`/users/${userId}`, {status})
      .pipe(tap(updatedUser => {
        this.users = this.users.map(user => {
          if (user.id === updatedUser.id) {
            return updatedUser;
          } else {
            return user;
          }
        });
      }));
  }
}
