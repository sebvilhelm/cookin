import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Injectable()
export class AuthGuardService implements CanActivate {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  checkLogin() {
    this.ngRedux.select(state => state.users.currentUser).subscribe(user => {
      this.isLoggedIn = user ? true : false;
    });
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  checkIfAdmin() {
    this.ngRedux.select(state => state.users.currentUser).subscribe(user => {
      this.isAdmin = user.isAdmin;
    });

    if (!this.isAdmin) {
      alert('Admin only section!');
      return false;
    }

    return true;
  }

}
