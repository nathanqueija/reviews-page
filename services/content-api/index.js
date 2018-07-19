import {get, post, put} from 'lib/request'

export const getContent = async (apiRoute, slug) => {
  const endpoint = `/wp-json/postlight/v1/${apiRoute}?slug=${slug}`

  try {
    return await get(endpoint)
  } catch (error) {
    if (error.response && error.response.status === 422)
      throw new Error('Unknown error. Please try again.', error)
    else throw error
  }
}

export const getCustomContentType = async (contentType, id, slug) => {
  const endpoint = `wp-json/wp/v2/${contentType}${
    id || slug ? `/${id || slug}` : ''
  }`

  try {
    return await get(endpoint)
  } catch (error) {
    if (error.response && error.response.status === 422)
      throw new Error('Unknown error. Please try again.', error)
    else throw error
  }
}
