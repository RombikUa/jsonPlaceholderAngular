import { Pipe, PipeTransform } from '@angular/core';

type status = {status: 'active' | 'deactivated' | undefined};

@Pipe({
  name: 'activatedItems',
  pure: false
})
export class ActivatedItemsPipe implements PipeTransform {

  transform<T extends status>(items: T[], applyFilter: boolean): T[] {

    if (applyFilter) {
      return items.filter(item => item.status === 'active');
    }

    return items;
  }

}
