import { element, by } from 'protractor';
import { Person } from '../src/app/entities/Person';

export class LoginPage {
  static navigateTo() {
    return element(by.id('login-link')).click();
  }

  static async login(user: Person) {
    await Promise.all<any>([
      element(by.css('input[name="email"]')).sendKeys(user.email),
      element(by.css('input[name="password"]')).sendKeys('')
    ]);
    return element(by.css('button[type="submit"]')).click();
  }
}
