import { ActionTypes } from '../actionTypes/actionTypes'

export const setPhotos = (photos) => {
  return {
    type: ActionTypes.SET_PHOTOS,
    payload: photos,
  }
}
