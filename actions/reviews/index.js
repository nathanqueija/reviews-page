import {SET_REVIEWS, FETCH_REVIEWS, REFETCH_REVIEWS} from './types'
import get from 'lib/request'

export function fetch(page) {
  return async (dispatch) => {
    dispatch({type: FETCH_REVIEWS})
    const response = await get(`/reviews/${page}`)
    dispatch({type: SET_REVIEWS, payload: {data: response.data}})
  }
}

export function refetch() {
  return async (dispatch) => {
    dispatch({type: REFETCH_REVIEWS})
    const response = await get('/reviews/1')
    dispatch({type: SET_REVIEWS, payload: {data: response.data}})
  }
}
