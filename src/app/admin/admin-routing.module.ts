import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, RegisterUserComponent } from './components';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'addUser',
    component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
