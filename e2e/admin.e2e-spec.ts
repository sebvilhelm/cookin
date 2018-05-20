import { browser, element, by } from 'protractor';

describe('Admin flow', () => {

  beforeAll(() => {
    browser.get('/dinners');
  });

  it('should create an admin user', async () => {
    element(by.id('register-link')).click();

    element(by.css('[name="name"]')).sendKeys('John Applesmith');
    element(by.css('[name="email"]')).sendKeys('john@example.com');
    element(by.css('[name="dateOfBirth"]')).sendKeys('6/19/1992');
    element(by.css('[name="area"]')).sendKeys('Copenhagen');
    element(by.css('app-tag-input input')).sendKeys('Vegan, Nut allergy');
    element(by.css('mat-slide-toggle')).click();
    element(by.css('button[type="submit"]')).click();

    await browser.waitForAngular();


    // TODO: Should have a success criteria
  });
  it('should log the user in on succesful login', async () => {
    element(by.id('login-link')).click();
    element(by.css('input[name="email"]')).sendKeys('john@example.com');
    element(by.css('input[name="password"]')).sendKeys('john');

    element(by.css('app-login-form button[type="submit"]')).click();

    await browser.waitForAngular();

    expect(element(by.css('app-dinners-list h1')).getText()).toEqual('Find dinners');

  });
});

