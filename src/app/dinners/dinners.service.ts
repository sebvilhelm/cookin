import { Injectable } from '@angular/core';
import { DinnersState } from './dinners.store';
import { Dinner } from '../entities/Dinner';
import * as faker from 'faker';

@Injectable()
export class DinnersService {

  constructor() { }

  static getInitalState(): DinnersState {
    return {
      dinners: []
    };
  }

  static getMockDinner(): any {
    return {
      name: faker.random.words(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      host: {},
      date: new Date(faker.date.future()),
      attendeesMax: faker.random.number(),
      menu: faker.random.words(),
      description: faker.random.words(),
      specifics: []
    };
  }

}
