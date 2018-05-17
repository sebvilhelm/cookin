import { Injectable } from '@angular/core';
import { DinnersState } from './dinners.store';
import { Dinner } from '../entities/Dinner';
import * as faker from 'faker';
import { UsersService } from '../users/users.service';

@Injectable()
export class DinnersService {

  constructor() { }

  static getInitalState(): DinnersState {
    return {
      dinners: []
    };
  }

  static generateId(): string {
    return faker.random.uuid();
  }

  static getMockDinner(): Dinner {
    return {
      id: DinnersService.generateId(),
      name: faker.random.words(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      host: UsersService.getMockUser(),
      date: new Date(faker.date.future()),
      attendeesMax: faker.random.number(),
      menu: faker.random.words(),
      description: faker.lorem.sentences(),
      specifics: ['Vegan', 'Lactose Intolerant']
    };
  }

  getAutocompleteItems(): string[] {
    return [
      'Vegan',
      'Vegetarian',
      'Nut Free',
      'Gluten Free',
      'Lactose Free',
    ];
  }

}
