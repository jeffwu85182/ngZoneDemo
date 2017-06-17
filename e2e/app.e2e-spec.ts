import { NgZoneIntroPage } from './app.po';

describe('ng-zone-intro App', () => {
  let page: NgZoneIntroPage;

  beforeEach(() => {
    page = new NgZoneIntroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
