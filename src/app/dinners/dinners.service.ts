import { Injectable } from '@angular/core';
import { DinnersState } from './dinners.store';

@Injectable()
export class DinnersService {

  constructor() { }

  static getInitalState(): DinnersState {
    return {
      dinners: []
    };
  }

}
