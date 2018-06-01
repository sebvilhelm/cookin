import { element, by } from 'protractor';
import { Person } from '../src/app/entities/Person';
import * as moment from 'moment';
import { protractor } from 'protractor/built/ptor';

export class RegisterPage {
  static navigateTo() {
    return element(by.id('register-link')).click();
  }

  static async registerAdmin(user: Person) {
    await Promise.all<any>([
      element(by.css('[name="name"]')).sendKeys(user.name),
      element(by.css('[name="email"]')).sendKeys(user.email),
      element(by.css('[name="dateOfBirth"]')).sendKeys(
        moment(user.dateOfBirth).format('M/D/YYYY')
      ),
      element(by.css('[name="area"]')).sendKeys(user.area),
      element(by.css('app-tag-input input')).sendKeys(
        user.requirements.join(', '),
        protractor.Key.ENTER
      ),
      element(by.css('mat-slide-toggle')).click()
    ]);
    return element(by.css('button[type="submit"]')).click();
  }
}
