import { Injectable } from '@angular/core';
import { DinnersState } from './dinners.store';
import { Dinner } from '../entities/Dinner';
import * as faker from 'faker';
import { UsersService } from '../users/users.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DinnersService {

  constructor(
    private http: HttpClient
  ) { }

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
      title: faker.random.words(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      host: UsersService.getMockUser(),
      date: new Date(faker.date.future()),
      attendeesMax: faker.random.number(),
      attendees: [],
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

  getDinners(): Observable<Object> {
    return this.http.get('https://angular-exam-e8c4c.firebaseio.com/dinners.json');
  }

  addDinner(dinner: Dinner): Observable<Object> {
    dinner.attendees = [];
    return this.http.post('https://angular-exam-e8c4c.firebaseio.com/dinners.json', dinner);
  }

  updateDinner(dinner: Dinner) {
    const { id, ...updatedDinner } = dinner;
    return this.http.patch(`https://angular-exam-e8c4c.firebaseio.com/dinners/${id}/.json`, updatedDinner);
  }

}
