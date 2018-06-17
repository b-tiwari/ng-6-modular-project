import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent, RegisterUserComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, RegisterUserComponent]
})
export class AdminModule { }
