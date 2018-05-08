import { tassign } from 'tassign';

import { UsersService } from './users.service';
import { UsersActions } from './users.actions';
import { UsersState } from './users.store';

const INITIAL_STATE: UsersState = UsersService.getInitalState();

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case UsersActions.ADD_USER:
      return tassign(state, { users: [...state.users, action.payload] });
    case UsersActions.LOGIN_USER:
      return tassign(state, { currentUser: action.payload });
    default:
      return state;
  }
}
