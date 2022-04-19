import { ActionTypes } from '../actionTypes/actionTypes';

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

export const selectPhotoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PHOTO:
      return { ...state, ...payload };
    default: return state
  }
}
