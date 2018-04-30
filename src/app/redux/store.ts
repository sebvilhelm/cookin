import { combineReducers } from 'redux';

export class State {
  state?: boolean;
}

export class IAppState {
  state?: State;

}

export const rootState: IAppState = {};

export const rootReducer = combineReducers<IAppState>({
});
