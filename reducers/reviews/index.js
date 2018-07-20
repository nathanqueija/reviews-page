import {
  SET_REVIEWS,
  FETCH_REVIEWS,
  REFETCH_REVIEWS
} from 'actions/reviews/types'

const INITIAL_STATE = {
  page: 1,
  reviews: [],
  hasMore: true,
  loading: false
}

export default function(state = INITIAL_STATE, action) {
  const {payload} = action
  switch (action.type) {
    case SET_REVIEWS:
      return {
        ...state,
        hasMore: payload.data.hasMore,
        reviews: [...state.reviews, ...payload.data.reviews],
        page: (state.page += 1),
        loading: false
      }
    case FETCH_REVIEWS:
      return {...state, loading: true}
    case REFETCH_REVIEWS:
      return {...INITIAL_STATE, loading: true}

    default:
      return state
  }
}
