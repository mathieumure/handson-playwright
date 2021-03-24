const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment').default;
const fs = require('fs/promises');
const path = require('path');

const screenshotsPath = path.join(__dirname, '..', 'screenshots');

class PlaywrightEnv extends PlaywrightEnvironment {
  async handleTestEvent(event) {
    if (event.name === 'test_done' && event.test.errors.length > 0) {
      const parentName = event.test.parent.name.replace(/\W/g, '-');
      const specName = event.test.name.replace(/\W/g, '-');
      const { browserName } = this._config;

      await this.global.page.screenshot({
        path: path.join(screenshotsPath, `${browserName}_${parentName}_${specName}.png`),
      });
    }
  }
}

module.exports = PlaywrightEnv;
