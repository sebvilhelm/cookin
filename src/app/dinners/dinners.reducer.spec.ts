import { dinnersReducer } from './dinners.reducer';
import { DinnersService } from './dinners.service';
import { Dinner } from '../entities/Dinner';
import { DinnersActions } from './dinners.actions';
import { tassign } from 'tassign';
import * as faker from 'faker';
import { UsersService } from '../users/users.service';

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

  it('should remove a dinner', () => {
    const initialState = DinnersService.getInitalState();
    const dinner = DinnersService.getMockDinner();
    const dinnerToRemove = DinnersService.getMockDinner();
    initialState.dinners.push(dinnerToRemove, dinner);
    deepFreeze(initialState);
    const stateAfter = DinnersService.getInitalState();
    stateAfter.dinners.push(dinner);
    deepFreeze(stateAfter);

    expect(dinnersReducer(initialState, {
      type: DinnersActions.REMOVE_DINNER,
      payload: dinnerToRemove.id
    })).toEqual(stateAfter);
  });

  it('should update a dinner', () => {
    const initialState = DinnersService.getInitalState();
    const dinner = DinnersService.getMockDinner();
    const dinnerToUpdate = DinnersService.getMockDinner();
    initialState.dinners.push(dinnerToUpdate, dinner);
    deepFreeze(initialState);
    const stateAfter = DinnersService.getInitalState();
    const updatedDinner = tassign(dinnerToUpdate, { date: new Date(faker.date.future()) });
    stateAfter.dinners.push(updatedDinner, dinner);
    deepFreeze(stateAfter);

    expect(dinnersReducer(initialState, {
      type: DinnersActions.UPDATE_DINNER,
      payload: updatedDinner
    })).toEqual(stateAfter);
  });

  it('should add an attendee to a dinner', () => {
    const dinner = DinnersService.getMockDinner();
    const dinnerTwo = DinnersService.getMockDinner();
    const initialState = DinnersService.getInitalState();
    initialState.dinners.push(dinner, dinnerTwo);
    deepFreeze(initialState);
    const attendee = UsersService.getMockUser();
    const dinnerAfter = { ...dinner, attendees: [...dinner.attendees, attendee] };
    const stateAfter = DinnersService.getInitalState();
    stateAfter.dinners.push(dinnerAfter, dinnerTwo);
    deepFreeze(stateAfter);

    expect(dinnersReducer(initialState, {
      type: DinnersActions.ADD_ATTENDEE_TO_DINNER,
      payload: { dinnerId: dinner.id, attendee }
    })).toEqual(stateAfter);
  });

});
