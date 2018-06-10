import axios from 'axios'
import _ from 'lodash'

const API_HOST = process.env.REACT_APP_API_URL

const instance = axios.create({
  baseURL: API_HOST,
  timeout: 10000
})

export const get = async (endpoint, jwt, params = {}) => {
  const headers = buildHeaders(jwt)
  return instance.get(endpoint, {headers: headers, params: params})
}

export const post = async (endpoint, data, jwt) => {
  const headers = buildHeaders(jwt)
  return instance.post(endpoint, data, {headers: headers})
}

export const put = async (endpoint, data, jwt) => {
  const headers = buildHeaders(jwt)
  return instance.put(endpoint, data, {headers: headers})
}

export const del = async (endpoint, jwt) => {
  const headers = buildHeaders(jwt)
  return instance.delete(endpoint, {headers: headers})
}

export const getFile = async (endpoint, jwt) => {
  const headers = buildHeaders(jwt)

  return fetch(API_HOST + endpoint, {
    method: 'GET',
    headers
  })
}

const buildHeaders = (jwt = 'empty') => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  if (jwt) {
    headers['authorization'] = `Token ${jwt}`
  }

  return headers
}
