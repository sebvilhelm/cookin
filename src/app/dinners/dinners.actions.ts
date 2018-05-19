import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Dinner } from '../entities/Dinner';
import { Person } from '../entities/Person';

@Injectable()
export class DinnersActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static readonly REQUEST_ADD_DINNER = 'REQUEST_ADD_DINNER';
  static readonly FAILED_ADD_DINNER = 'FAILED_ADD_DINNER';
  static readonly ADD_DINNER = 'ADD_DINNER';
  static readonly ADD_ATTENDEE_TO_DINNER = 'ADD_ATTENDEE_TO_DINNER';
  static readonly REMOVE_DINNER = 'REMOVE_DINNER';
  static readonly UPDATE_DINNER = 'UPDATE_DINNER';
  static readonly REQUEST_GET_DINNERS = 'REQUEST_GET_DINNERS';
  static readonly FAILED_GET_DINNERS = 'FAILED_GET_DINNERS';
  static readonly SET_DINNERS = 'SET_DINNERS';

  getDinners() {
    this.ngRedux.dispatch({
      type: DinnersActions.REQUEST_GET_DINNERS
    });
  }

  addDinner(dinner: Dinner) {
    this.ngRedux.dispatch({
      type: DinnersActions.REQUEST_ADD_DINNER,
      payload: dinner
    });
  }

  removeDinner(id: string) {
    this.ngRedux.dispatch({
      type: DinnersActions.REMOVE_DINNER,
      payload: id
    });
  }

  updateDinner(dinner: Dinner) {
    this.ngRedux.dispatch({
      type: DinnersActions.UPDATE_DINNER,
      payload: dinner
    });
  }

  addAttendeeToDinner(dinnerId: string, attendee: Person) {
    this.ngRedux.dispatch({
      type: DinnersActions.ADD_ATTENDEE_TO_DINNER,
      payload: { dinnerId, attendee }
    });
  }

}
