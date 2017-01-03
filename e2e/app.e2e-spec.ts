import { Vnt4techPage } from './app.po';

describe('vnt4tech App', function() {
  let page: Vnt4techPage;

  beforeEach(() => {
    page = new Vnt4techPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
