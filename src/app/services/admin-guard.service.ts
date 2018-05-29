import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { RouterService } from './router.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  isAdmin: boolean = false;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private routerService: RouterService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkIfAdmin(state.url);
  }

  checkIfAdmin(url: string) {
    this.ngRedux.select(state => state.users.currentUser).subscribe(user => {
      this.isAdmin = user.isAdmin;
    });

    if (!this.isAdmin) {
      alert('Admin only section!');
      this.routerService.redirectUrl = url;
      return false;
    }

    return true;
  }

}
