import { Injectable } from '@angular/core';
import { DinnersService } from './dinners.service';
import { ActionsObservable } from 'redux-observable';
import { DinnersActions } from './dinners.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DinnersEpic {
  constructor(
    private dinnersService: DinnersService
  ) { }

}
