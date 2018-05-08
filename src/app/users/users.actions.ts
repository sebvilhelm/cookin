import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

Injectable();
export class UsersActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static readonly ADD_USER = 'ADD_USER';
}
