import { UsersState } from './users.store';
import { UsersService } from './users.service';
import { UsersActions } from './users.actions';

const INITIAL_STATE: UsersState = UsersService.getInitalState();

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case UsersActions.ADD_USER:
      return state;
    default:
      return state;
  }
}
