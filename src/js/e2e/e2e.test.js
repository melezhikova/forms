import puppetteer from 'puppeteer';

jest.setTimeout(30000);

describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add .popover class in DOM', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.btn');
    button.click();
    await page.waitForSelector('.popover');
  });
});
