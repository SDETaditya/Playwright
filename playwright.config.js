
const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  use: {
    headless : false,
    browserName: 'chromium'

  }
})

module.exports = config
