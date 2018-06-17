import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AdminService } from '../../../../admin/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUserGuardService implements CanActivateChild {

  constructor(private adminSrvc: AdminService ) { }

  canActivateChild(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    return this.adminSrvc.isUserAuthenticated('John');
  }
}
