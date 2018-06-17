import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbExampleComponent, HomeComponent } from './components';
import { CoreComponent, PageNotFoundComponent } from './core/components';
import { AuthorizedUserGuardService } from './core/services/RouteGuards/AuthorizedUserRouteGuard/authorized-user-guard.service';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ngbExample',
    component: NgbExampleComponent
  },
  {
    path: 'core',
    component: CoreComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivateChild: [AuthorizedUserGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
