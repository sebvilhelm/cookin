import { tassign } from 'tassign';
import { DinnersService } from './dinners.service';
import { DinnersActions } from './dinners.actions';
import { DinnersState } from './dinners.store';

const INITIAL_STATE: DinnersState = DinnersService.getInitalState();

export function dinnersReducer(state: DinnersState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case DinnersActions.SET_DINNERS:
      return tassign(state, { dinners: action.payload });
    case DinnersActions.ADD_DINNER:
      return tassign(state, { dinners: [...state.dinners, action.payload] });
    case DinnersActions.REMOVE_DINNER:
      return tassign(state,
        {
          dinners: state.dinners.filter(dinner =>
            dinner.id !== action.payload)
        });
    case DinnersActions.UPDATE_DINNER:
      return tassign(state, {
        dinners: state.dinners.map(dinner =>
          dinner.id === action.payload.id ? action.payload : dinner
        )
      });
    case DinnersActions.ADD_ATTENDEE_TO_DINNER:
      return tassign(state, {
        dinners: state.dinners.map(dinner => {
          if (dinner.id === action.payload.dinnerId) {
            return tassign(dinner, { attendees: [...dinner.attendees, action.payload.attendee] });
          }
          return dinner;
        })
      });
    default:
      return state;
  }
}
