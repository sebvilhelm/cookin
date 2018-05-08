import { combineReducers } from 'redux';
import { UsersState } from '../users/users.store';


export class IAppState {
  users: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
});
