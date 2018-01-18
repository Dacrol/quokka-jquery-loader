const jq = require('jquery')
const global = window || this
module.exports = {
  before: config => {
      global.$ = jq
      $ = jq
  },
  beforeEach: config => {
  }
}