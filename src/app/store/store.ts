import { combineReducers } from 'redux';
import { usersReducer } from '../users/users.reducer';
import { routerReducer } from '@angular-redux/router';
import { Person } from '../entities/Person';
import { UsersState } from '../users/users.store';

export class IAppState {
  users: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
  users: usersReducer,
  router: routerReducer
});
