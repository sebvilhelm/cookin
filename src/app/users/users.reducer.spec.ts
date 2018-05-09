import { usersReducer } from './users.reducer';
import { UsersService } from './users.service';
import * as types from './users.actions';
const deepFreeze = require('deep-freeze');

describe('Users reducer', () => {
  it('should return initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(UsersService.getInitalState());
  });

  it('should add a user', () => {
    const initialState = UsersService.getInitalState();
    deepFreeze(initialState);
    const newUser = UsersService.getMockUser();
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
    const user = UsersService.getMockUser();
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
    const user = UsersService.getMockUser();
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
