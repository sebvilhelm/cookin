import { by, element } from 'protractor';

export class DinnersListPage {
  static async getParagraphText() {
    return element(by.css('app-dinners-list h1')).getText();
  }
}
