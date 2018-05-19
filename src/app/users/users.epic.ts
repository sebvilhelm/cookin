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
import { Person } from '../entities/Person';

@Injectable()
export class UsersEpic {
  constructor(
    private usersService: UsersService
  ) { }

  getUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.REQUEST_GET_USERS)
      .mergeMap(({ payload }) => {
        return this.usersService.getUsers()
          .map((response: Object) => {
            const users = Object.keys(response).reduce((array, key) => {
              const user = { ...response[key], id: key };
              array.push(user);
              return array;
            }, []);
            return {
              type: UsersActions.SET_USERS,
              payload: users
            };
          })
          .catch(err => Observable.of({
            type: UsersActions.FAILED_GET_USERS,
            payload: err
          }));
      });
  }

  addUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.REQUEST_ADD_USER)
      .mergeMap(({ payload: user }) => {
        return this.usersService.addUser(user)
          .map(({ name: id }: any) => {
            const createdUser = { ...user, id } as Person;
            return {
              type: UsersActions.ADD_USER,
              payload: createdUser
            };
          })
          .catch(err => Observable.of({
            type: UsersActions.FAILED_ADD_USER,
            payload: err
          }));
      });
  }

  loginUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.REQUEST_USER_AUTH)
      .mergeMap(({ payload: email }) => {
        return this.usersService.getUserByEmail(email)
          .map((response) => {
            const user = Object.keys(response).reduce((array, key) => {
              const result = { ...response[key], id: key };
              array.push(result);
              return array;
            }, [])[0];

            if (!user) { // Throw an error if no user was returned from the server
              throw new Error('No user match');
            }

            return {
              type: UsersActions.LOGIN_USER,
              payload: user
            };
          })
          .catch(err => Observable.of({
            type: UsersActions.FAILED_USER_AUTH,
            payload: err
          }));
      });
  }
}
