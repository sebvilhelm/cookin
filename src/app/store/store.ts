import { combineReducers } from 'redux';
import { UsersState } from '../users/users.store';
import { usersReducer } from '../users/users.reducer';


export class IAppState {
  users: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
  users: usersReducer
});
