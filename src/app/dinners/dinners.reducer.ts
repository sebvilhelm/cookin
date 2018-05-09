import { tassign } from 'tassign';
import { DinnersService } from './dinners.service';
import { DinnersActions } from './dinners.actions';
import { DinnersState } from './dinners.store';

const INITIAL_STATE: DinnersState = DinnersService.getInitalState();

export function dinnersReducer(state: DinnersState = INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
