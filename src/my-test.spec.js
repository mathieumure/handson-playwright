describe('My Test', () => {
  it('should go to getting started', async () => {
    await page.goto('https://playwright.dev/');
    await page.waitForLoadState("networkidle");

    await Promise.all([
      page.click('"Getting started"'),
      page.waitForNavigation()
    ])
    const url = await page.url()
    expect(url).toEqual('https://playwright.dev/docs/intro')
  });

  it('should search', async () => {
    await page.goto('https://playwright.dev/');
    await page.waitForLoadState("networkidle");

    await page.type('[placeholder="Search"]', 'selector');
    await page.waitForSelector('"See all results"')

    await page.press('[placeholder="Search"]', 'Enter');
    await page.waitForSelector('h1:text("Selectors")')

    const url = await page.url()
    expect(url).toEqual('https://playwright.dev/docs/api/class-selectors?_highlight=selector')
  });

  it('should go in light mode', async () => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('https://www.clubic.com');
    await page.waitForLoadState('networkidle');
    const htmlElement = await page.$('body');
    const dataTheme = await htmlElement.getAttribute('class')
    expect(dataTheme).toEqual('light-mode')
  });

  it('should go in dark mode', async () => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('https://www.clubic.com');
    await page.waitForLoadState('networkidle');
    const htmlElement = await page.$('body');
    const dataTheme = await htmlElement.getAttribute('class')
    expect(dataTheme).toEqual('dark-mode')
  });
});
