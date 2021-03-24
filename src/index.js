const playwright = require('playwright');

const run = async (browserType, screenshotPath) => {
  const browser = await playwright[browserType].launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://playwright.dev/');

  const title = await page.title()
  console.log(title);

  await page.screenshot({ path: screenshotPath })

  await browser.close();
}

(async () => {
  await Promise.all(['chromium', 'firefox', 'webkit'].map((browserType) => run(browserType, `screenshots/${browserType}-homepage.png`)))
})();
