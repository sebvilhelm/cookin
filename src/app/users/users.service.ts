import { Injectable } from '@angular/core';
import { UsersState } from './users.store';


@Injectable()
export class UsersService {

  constructor() { }

  static getInitalState(): UsersState {
    return {
      currentUser: undefined,
      users: []
    };
  }
}
