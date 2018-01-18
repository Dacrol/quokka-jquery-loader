const $ = require('jquery')
module.exports = {
  before: config => {
      window.$ = $
  },
  beforeEach: config => {
  }
}