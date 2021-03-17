import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IUsersTable} from '../../interfaces/usersTable.interface';
import {UserService} from '../../services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {IUser} from '../../interfaces/user.interface';
import {UnSubscriber} from '../../../utils/unsubscriber';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent extends UnSubscriber implements OnInit, OnDestroy {

  @Input()
  public limit = 10;

  @Input()
  public showActive = false;

  public usersData: IUsersTable = {
    source: new MatTableDataSource<IUser>(),
    columns: ['name', 'username', 'email', 'action']
  };

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.userService.getUsers(this.limit)
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(users => {
      this.usersData.source.data = users;
    });
  }

  updateStatus(userId: number, status: string): void {
    this.userService.updateUserStatus(userId, status)
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(updatedUser => {
      this.usersData.source.data = this.usersData.source.data.map(user => {

        if (user.id === userId) {
          return updatedUser;
        }

        return user;
      });
    });
  }
}
