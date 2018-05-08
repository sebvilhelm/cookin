import { usersReducer } from './users.reducer';
import { UsersService } from './users.service';
import { Person } from '../entities/Person';
import * as types from './users.actions';
const deepFreeze = require('deep-freeze');

describe('Users reducer', () => {
  it('should return initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(UsersService.getInitalState());
  });

  it('should add a user', () => {
    const initialState = UsersService.getInitalState();
    deepFreeze(initialState);
    const newUser: Person = {
      name: 'John Appleseed',
      email: 'john@example.com',
      dateOfBirth: new Date(1977, 0, 1),
      area: 'Copenhagen',
      requirements: ['Vegetarian']
    };
    const stateAfter = UsersService.getInitalState();
    stateAfter.users.push(newUser);
    deepFreeze(stateAfter);

    expect(usersReducer(initialState, {
      type: types.UsersActions.ADD_USER,
      payload: newUser
    })).toEqual(stateAfter);
  });

  it('should set current user on login', () => {
    const initialState = UsersService.getInitalState();
    deepFreeze(initialState);
    const user: Person = {
      name: 'John Appleseed',
      email: 'john@example.com',
      dateOfBirth: new Date(1977, 0, 1),
      area: 'Copenhagen',
      requirements: ['Vegetarian']
    };
    const stateAfter = UsersService.getInitalState();
    stateAfter.currentUser = user;
    deepFreeze(stateAfter);

    expect(usersReducer(initialState, {
      type: types.UsersActions.LOGIN_USER,
      payload: user
    })).toEqual(stateAfter);
  });

  it('should unset current user on logout', () => {
    const initialState = UsersService.getInitalState();
    const user: Person = {
      name: 'John Appleseed',
      email: 'john@example.com',
      dateOfBirth: new Date(1977, 0, 1),
      area: 'Copenhagen',
      requirements: ['Vegetarian']
    };
    initialState.currentUser = user;
    deepFreeze(initialState);
    const stateAfter = UsersService.getInitalState();
    deepFreeze(stateAfter);

    expect(usersReducer(initialState, {
      type: types.UsersActions.LOGOUT_USER,
      payload: user
    })).toEqual(stateAfter);
  });
});
