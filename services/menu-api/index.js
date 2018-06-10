import {get, post, put} from 'lib/request'

export const getMenu = async () => {
  const endpoint = '/wp-json/menus/v1/menus/main-nav'

  try {
    return await get(endpoint)
  } catch (error) {
    if (error.response && error.response.status === 422)
      throw new Error('Unknown error. Please try again.', error)
    else throw error
  }
}
