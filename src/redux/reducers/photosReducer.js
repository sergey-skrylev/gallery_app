import { ActionTypes } from '../actionTypes/actionTypes'

const initialState = {
  photos: [],
}

export const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PHOTOS:
      return { ...state, photos: payload }
    default:
      return state
  }
}
