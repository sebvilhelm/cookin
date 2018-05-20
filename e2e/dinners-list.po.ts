import { browser, by, element } from 'protractor';

export class DinnersListPage {
  navigateTo() {
    return browser.get('/dinners');
  }

  getParagraphText() {
    return element(by.css('app-dinners-list h1')).getText();
  }
}
