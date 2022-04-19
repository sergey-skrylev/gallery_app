import { ActionTypes } from '../actionTypes/actionTypes';

export const setPhotos = (photos) => {
  return {
    type: ActionTypes.SET_PHOTOS,
    payload: photos,
  }
}

export const selectedPhotos = (photo) => {
  return {
    type: ActionTypes.SELECTED_PHOTO,
    payload: photo,
  }
}
