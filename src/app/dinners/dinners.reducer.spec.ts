import { dinnersReducer } from './dinners.reducer';
import { DinnersService } from './dinners.service';
import { Dinner } from '../entities/Dinner';
import { DinnersActions } from './dinners.actions';

const deepFreeze = require('deep-freeze');

describe('Dinners reducer', () => {

  it('should return initial state', () => {
    expect(dinnersReducer(undefined, {})).toEqual(DinnersService.getInitalState());
  });

  it('should add a dinner', () => {
    const initialState = DinnersService.getInitalState();
    const dinner = DinnersService.getMockDinner();
    initialState.dinners.push(dinner);
    deepFreeze(initialState);
    const newDinner = DinnersService.getMockDinner();
    const stateAfter = DinnersService.getInitalState();
    stateAfter.dinners.push(dinner, newDinner);
    deepFreeze(stateAfter);

    expect(dinnersReducer(initialState, {
      type: DinnersActions.ADD_DINNER,
      payload: newDinner
    })).toEqual(stateAfter);
  });

});
