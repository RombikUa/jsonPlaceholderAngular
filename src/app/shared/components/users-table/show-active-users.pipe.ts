import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {MatTableDataSource} from '@angular/material/table';

@Pipe({
  name: 'showActiveUsers',
  pure: false
})
export class ShowActiveUsersPipe implements PipeTransform {

  transform(source: MatTableDataSource<IUser>, applyFilter: boolean): MatTableDataSource<IUser> {

    if (applyFilter) {

      source.connect().next(source.data.filter(user => user.status === 'active'));

      return source;
    } else {
      return source;
    }
  }
}
