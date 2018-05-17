import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { ActionsObservable } from 'redux-observable';
import { UsersActions } from './users.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable()
export class UsersEpic {
  constructor(
    private usersService: UsersService
  ) { }

  getUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.REQUEST_GET_USERS)
      .mergeMap((({ payload }) => {
        return this.usersService.getUsers()
          .map(((result: Object) => {
            const users = Object.keys(result).reduce((array, key) => {
              const user = result[key];
              user.id = key;
              array.push(user);
              return array;
            }, []);
            return {
              type: UsersActions.SET_USERS,
              payload: users
            };
          }))
          .catch(err => Observable.of({
            type: UsersActions.FAILED_GET_USERS,
            payload: err
          }));
      }));
  }

  addUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.REQUEST_ADD_USER)
      .mergeMap((({ payload: user }) => {
        return this.usersService.addUser(user)
          .map((({ name }: any) => {
            user.id = name;
            return {
              type: UsersActions.ADD_USER,
              payload: user
            };
          }))
          .catch(err => Observable.of({
            type: UsersActions.FAILED_ADD_USER,
            payload: err
          }));
      }));
  }
}
