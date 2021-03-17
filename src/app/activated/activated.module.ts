import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedComponent } from './activated.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: 'activated', component: ActivatedComponent}
];

@NgModule({
  declarations: [
    ActivatedComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class ActivatedModule { }
