import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { RouterService } from './router.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private routerService: RouterService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // // TODO: Store URL
    return this.checkLogin(state.url);
  }

  checkLogin(url: string) {
    this.ngRedux.select(state => state.users.currentUser).subscribe(user => {
      this.isLoggedIn = user ? true : false;
    });
    if (!this.isLoggedIn) {
      this.routerService.redirectUrl = url;
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
