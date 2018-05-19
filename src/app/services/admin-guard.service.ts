import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Injectable()
export class AdminGuardService implements CanActivate {

  isAdmin: boolean = false;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  canActivate() {
    return this.checkIfAdmin();
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
