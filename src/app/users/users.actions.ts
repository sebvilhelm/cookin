import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Person } from '../entities/Person';

@Injectable()
export class UsersActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static readonly ADD_USER = 'ADD_USER';
  static readonly LOGIN_USER = 'LOGIN_USER';
  static readonly LOGOUT_USER = 'LOGOUT_USER';


  addUser(user: Person): void {
    this.ngRedux.dispatch({
      type: UsersActions.ADD_USER,
      payload: user
    });
  }

  logInUser(user: Person): void {
    this.ngRedux.dispatch({
      type: UsersActions.LOGIN_USER,
      payload: user
    });
  }

  logOutUser(user: Person): void {
    this.ngRedux.dispatch({
      type: UsersActions.LOGOUT_USER
    });
  }
}
