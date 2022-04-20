import { ActionTypes } from '../actionTypes/actionTypes';

const initialState = {
  photos: [],
}

export const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PHOTOS_SUCCESS:
      return {
        ...state, photos: payload
      };
    default:
      return state
  }
}

export const selectPhotoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SELECTED_PHOTO_SUCCESS:
      return {
        ...state, ...payload
      };
    default:
      return state
  }
}
