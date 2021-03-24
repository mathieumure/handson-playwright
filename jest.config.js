module.exports = {
  preset: "jest-playwright-preset",
  testTimeout: 35000, // Because playwright timeout is 30 seconds
  testEnvironment: './scripts/testEnvironment.js',
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
      launchOptions: {
        headless: !process.env.NO_HEADLESS
      }
    },
  }
}
