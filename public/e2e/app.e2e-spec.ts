import { ClientDashboardPage } from './app.po';

describe('client-dashboard App', () => {
	let page: ClientDashboardPage;

	beforeEach(() => {
		page = new ClientDashboardPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to app!');
	});
});
