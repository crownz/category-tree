import { WixTestasPage } from './app.po';

describe('wix-testas App', () => {
  let page: WixTestasPage;

  beforeEach(() => {
    page = new WixTestasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
