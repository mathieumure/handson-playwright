const playwright = require('playwright');
const assert = require('assert');

const run = async (browserType, screenshotPath) => {
  const browser = await playwright[browserType].launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://playwright.dev/');

  const title = await page.title()
  console.log(title);

  await page.screenshot({ path: screenshotPath })

  await browser.close();
}

const gettingStarted = async () => {
  const browser = await playwright.chromium.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState("networkidle");

  await Promise.all([
    page.click('"Getting started"'),
    page.waitForNavigation()
  ])
  const url = await page.url()
  assert(url === 'https://playwright.dev/docs/intro', `${url} !== https://playwright.dev/docs/intro`)

  await page.screenshot({ path: 'screenshots/getting_started.png' })

  await browser.close();
}

const search = async () => {
  const browser = await playwright.chromium.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState("networkidle");

  await page.type('[placeholder="Search"]', 'selector');
  await page.waitForSelector('"See all results"')

  await page.press('[placeholder="Search"]', 'Enter');
  await page.waitForSelector('h1:text("Selectors")')

  const url = await page.url()
  assert(url === 'https://playwright.dev/docs/api/class-selectors?_highlight=selector', `${url} !== https://playwright.dev/docs/api/class-selectors?_highlight=selector`)

  await page.screenshot({ path: 'screenshots/getting_started.png' })

  await browser.close();
}

const lightMode = async () => {
  const browser = await playwright.chromium.launch({headless: true});
  const page = await browser.newPage();

  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('https://www.clubic.com');
  await page.waitForLoadState('networkidle');
  const htmlElement = await page.$('body');
  const dataTheme = await htmlElement.getAttribute('class')
  assert(dataTheme === 'light-mode', `${dataTheme} !== light-mode`)

  await browser.close();
}

const darkMode = async () => {
  const browser = await playwright.chromium.launch({headless: true});
  const page = await browser.newPage();

  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('https://www.clubic.com');
  await page.waitForLoadState('networkidle');
  const htmlElement = await page.$('body');
  const dataTheme = await htmlElement.getAttribute('class')
  assert(dataTheme === 'dark-mode', `${dataTheme} !== dark-mode`)

  await browser.close();
}

(async () => {
  await Promise.all(['chromium', 'firefox', 'webkit'].map((browserType) => run(browserType, `screenshots/${browserType}-homepage.png`)))
  await gettingStarted();
  await search();
  await lightMode();
  await darkMode();
})().catch((err) => {
  console.error(err);
  process.exit(1);
})
