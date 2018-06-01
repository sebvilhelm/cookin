import { browser, element, by } from 'protractor';

import { Person } from '../src/app/entities/Person';
import { UsersService } from '../src/app/users/users.service';
import { RegisterPage } from './register.po';
import { LoginPage } from './login.po';
import { DinnersListPage } from './dinners-list.po';
import { AdminPage } from './admin.po';

describe('Admin flow', () => {
  let user;

  beforeAll(() => {
    user = UsersService.getMockUser();
    browser.get('/');
  });

  it('should create an admin user', async () => {
    await RegisterPage.navigateTo();
    await browser.waitForAngular();
    await RegisterPage.registerAdmin(user);
    await browser.waitForAngular();
    // TODO: Should have a success criteria
  });

  it('should log the user in on succesful login', async () => {
    element(by.id('login-link')).click();
    await browser.waitForAngular();
    await LoginPage.login(user);
    await browser.waitForAngular();
    await expect(DinnersListPage.getParagraphText()).toEqual('Find dinners');
  });

  it('should give access to the admin panel for an admin user', async () => {
    await AdminPage.navigateTo();
    await browser.waitForAngular();
    expect(AdminPage.getHeaderText()).toEqual('Admin');
  });

  it('should successfully delete a user', async () => {
    await AdminPage.navigateTo();
    await browser.waitForAngular();
    await AdminPage.navigateToUserPage();
    await browser.waitForAngular();

    expect(AdminPage.getSubPageHeader()).toEqual('All users');

    const numberOfUsersBefore = await AdminPage.getAllUserCards().count();

    await AdminPage.clickFirstUserDeleteButton();

    const numberOfUsersAfter = await AdminPage.getAllUserCards().count();

    expect(numberOfUsersAfter).toEqual(numberOfUsersBefore - 1);
  });
});
