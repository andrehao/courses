import { Alurapic2Page } from './app.po';

describe('alurapic2 App', function() {
  let page: Alurapic2Page;

  beforeEach(() => {
    page = new Alurapic2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
