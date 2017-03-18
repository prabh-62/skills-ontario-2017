import { RegistrationPage } from './app.po';

describe('registration App', () => {
  let page: RegistrationPage;

  beforeEach(() => {
    page = new RegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
