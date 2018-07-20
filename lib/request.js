const axios = require('axios')
const API_HOST = process.env.REACT_APP_API_URL

const buildHeaders = () => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  return headers
}

const proxyInstance = axios.create({
  baseURL: API_HOST,
  timeout: 10000,
  headers: buildHeaders()
})

const localInstance = axios.create({
  baseURL: `http://localhost:${process.env.PORT || 3000}`,
  timeout: 10000
})

const get = async (endpoint, proxy) => {
  const instance = proxy ? proxyInstance : localInstance
  return instance.get(endpoint)
}

module.exports = get
