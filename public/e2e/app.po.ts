import { browser, by, element } from 'protractor';

export class ClientDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bmc-root h1')).getText();
  }
}
