import { RegisterPage } from './register.po';

import { browser, element, by } from 'protractor';
import { Person } from '../src/app/entities/Person';
import { UsersService } from '../src/app/users/users.service';

describe('Admin flow', () => {
  let user;

  beforeAll(() => {
    user = UsersService.getMockUser();
    browser.get('/dinners');
  });

  it('should create an admin user', async () => {
    await RegisterPage.navigateTo();
    await browser.waitForAngular();
    await RegisterPage.registerAdmin(user);
    await browser.waitForAngular();
    // TODO: Should have a success criteria
  });
  /*
  it('should log the user in on succesful login', async () => {
    element(by.id('login-link')).click();
    await browser.waitForAngular();
    element(by.css('input[name="email"]')).sendKeys('john@example.com');
    element(by.css('input[name="password"]')).sendKeys('john');
    element
      .all(by.css('app-login-form button[type="submit"]'))
      .first()
      .click();
    await browser.waitForAngular();
    expect(element(by.css('app-dinners-list h1')).getText()).toEqual(
      'Find dinners'
    );
  });

  it('should give access to the admin panel for an admin user', async () => {
    element(by.id('admin-link')).click();
    await browser.waitForAngular();
    expect(element(by.css('app-admin h1')).getText()).toEqual('Admin');
  });

  it('should successfully delete a user', async () => {
    element(by.id('admin-link')).click();
    await browser.waitForAngular();
    element(by.id('admin-users-link')).click();
    await browser.waitForAngular();

    expect(element(by.css('app-user-list h2')).getText()).toEqual('All users');

    const numberOfUsersBefore = await element
      .all(by.css('.user-list mat-card'))
      .count();

    element(by.css('mat-card mat-card-actions .delete-button')).click();

    const numberOfUsersAfter = await element
      .all(by.css('.user-list mat-card'))
      .count();

    expect(numberOfUsersAfter).toEqual(numberOfUsersBefore - 1);
  }); */
});
