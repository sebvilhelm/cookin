import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Person } from '../entities/Person';

@Injectable()
export class UsersActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static readonly REQUEST_GET_USERS = 'REQUEST_GET_USERS';
  static readonly FAILED_GET_USERS = 'FAILED_GET_USERS';
  static readonly SET_USERS = 'SET_USERS';
  static readonly REQUEST_ADD_USER = 'REQUEST_ADD_USER';
  static readonly FAILED_ADD_USER = 'FAILED_ADD_USER';
  static readonly ADD_USER = 'ADD_USER';
  static readonly REQUEST_REMOVE_USER = 'REQUEST_REMOVE_USER';
  static readonly FAILED_REMOVE_USER = 'FAILED_REMOVE_USER';
  static readonly REMOVE_USER = 'REMOVE_USER';
  static readonly REQUEST_USER_AUTH = 'REQUEST_USER_AUTH';
  static readonly FAILED_USER_AUTH = 'FAILED_USER_AUTH';
  static readonly LOGIN_USER = 'LOGIN_USER';
  static readonly LOGOUT_USER = 'LOGOUT_USER';

  getUsers(): void {
    this.ngRedux.dispatch({
      type: UsersActions.REQUEST_GET_USERS
    });
  }

  addUser(user: Person): void {
    this.ngRedux.dispatch({
      type: UsersActions.REQUEST_ADD_USER,
      payload: user
    });
  }

  removeUser(id: string) {
    this.ngRedux.dispatch({
      type: UsersActions.REQUEST_REMOVE_USER,
      payload: id
    });
  }

  logInUser(email: string): void {
    this.ngRedux.dispatch({
      type: UsersActions.REQUEST_USER_AUTH,
      payload: email
    });
  }

  logOutUser(): void {
    this.ngRedux.dispatch({
      type: UsersActions.LOGOUT_USER
    });
  }
}
