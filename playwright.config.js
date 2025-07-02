
const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  use: {
    headless : false,
    browserName: 'chromium',
    screenshot: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
})

module.exports = config
