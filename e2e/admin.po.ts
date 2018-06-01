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

  static getAllUserCards() {
    return element.all(by.css('.user-list mat-card'));
  }

  static clickFirstUserDeleteButton() {
    return element
      .all(by.css('mat-card mat-card-actions .delete-button'))
      .first()
      .click();
  }
}
