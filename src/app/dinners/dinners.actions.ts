import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Dinner } from '../entities/Dinner';

@Injectable()
export class DinnersActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static readonly ADD_DINNER = 'ADD_DINNER';

  addDinner(dinner: Dinner) {
    this.ngRedux.dispatch({
      type: DinnersActions.ADD_DINNER,
      payload: dinner
    });
  }

}
