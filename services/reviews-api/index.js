const get = require('../../lib/request')

module.exports = (page) => {
  const endpoint = `/reviews/${page}`
  return get(endpoint, true)
}
