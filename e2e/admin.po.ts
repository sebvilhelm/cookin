import { element, by } from 'protractor';

export class AdminPage {
  static navigateTo() {
    return element(by.id('admin-link')).click();
  }

  static navigateToUserPage() {
    return element(by.id('admin-users-link')).click();
  }

  static getHeaderText() {
    return element(by.css('app-admin h1')).getText();
  }

  static getSubPageHeader() {
    return element(by.css('app-user-list h2')).getText();
  }
}
