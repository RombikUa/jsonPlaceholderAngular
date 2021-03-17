import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  template: ''
})
// tslint:disable-next-line:component-class-suffix
export class UnSubscriber implements OnDestroy {

  public unSubscriber = new Subject();

  ngOnDestroy(): void {
    this.unSubscriber.next();
    this.unSubscriber.complete();
  }
}
