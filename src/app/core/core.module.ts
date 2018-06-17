import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent,
          AppNavBarComponent, PageNotFoundComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    CoreComponent,
    AppNavBarComponent,
    PageNotFoundComponent
  ],
  exports: [
    CoreComponent,
    AppNavBarComponent
  ]
})
export class CoreModule { }
