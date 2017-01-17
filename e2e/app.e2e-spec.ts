import { JerseyPage } from './app.po';

describe('jersey App', function() {
  let page: JerseyPage;

  beforeEach(() => {
    page = new JerseyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
