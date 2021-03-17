import {Component} from '@angular/core';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.scss']
})
export class ActivatedComponent {

  public limit = 10;
  public showOnlyActivatedItems = true;

}
