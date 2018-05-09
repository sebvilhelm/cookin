import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { UsersState } from '../users/users.store';
import { usersReducer } from '../users/users.reducer';
import { DinnersState } from '../dinners/dinners.store';
import { dinnersReducer } from '../dinners/dinners.reducer';
import { UsersService } from '../users/users.service';
import { DinnersService } from '../dinners/dinners.service';

export class IAppState {
  users: UsersState;
  dinners: DinnersState;
}

export const INITAL_STATE = {
  users: UsersService.getInitalState(),
  dinners: DinnersService.getInitalState()
};

export const rootReducer = combineReducers<IAppState>({
  users: usersReducer,
  dinners: dinnersReducer,
  router: routerReducer
});
