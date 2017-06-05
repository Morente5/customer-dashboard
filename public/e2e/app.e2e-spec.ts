import { ClientDashboardPage } from './app.po';

describe('client-dashboard App', () => {
  let page: ClientDashboardPage;

  beforeEach(() => {
    page = new ClientDashboardPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to bmc!!'))
      .then(done, done.fail);
  });
});
