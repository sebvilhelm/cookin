import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersState } from './users.store';
import { Person } from '../entities/Person';
import * as faker from 'faker';


@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient
  ) { }

  static getInitalState(): UsersState {
    return {
      currentUser: undefined,
      users: []
    };
  }

  static getMockUser(): Person {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      dateOfBirth: new Date(faker.date.past()),
      area: faker.address.city(),
      requirements: ['Nut Allergy']
    };
  }

  getAutocompleteItems(): string[] {
    return [
      'Vegan',
      'Vegetarian',
      'Nut Allergy',
      'Gluten Allergy',
      'Lactose Intolerant',
    ];
  }

  getUsers() {
    return this.http.get('https://angular-exam-e8c4c.firebaseio.com/users.json');
  }
}

/*
FOR FIREBASE
{
  "rules": {
    ".read": true,
    ".write": true,
      "users": {
        ".indexOf": ["email"]
      }
  }
}
*/
