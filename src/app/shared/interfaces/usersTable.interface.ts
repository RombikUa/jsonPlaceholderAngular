import {MatTableDataSource} from '@angular/material/table';
import {IUser} from './user.interface';

export interface IUsersTable {
  source: MatTableDataSource<IUser>;
  columns: string[];
}
