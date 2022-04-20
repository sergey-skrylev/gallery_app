import { ActionTypes } from '../actionTypes/actionTypes';

export const getPhotos = () => {
  return {
    type: ActionTypes.GET_PHOTOS,
  }
}

export const getPhotosSuccess = (photos) => {
  return {
    type: ActionTypes.GET_PHOTOS_SUCCESS,
    payload: photos,
  }
}

export const getSelectedPhoto = () => {
  return {
    type: ActionTypes.GET_SELECTED_PHOTO,
  }
}

export const getSelectedPhotoSuccess = (photo) => {
  return {
    type: ActionTypes.GET_SELECTED_PHOTO_SUCCESS,
    payload: photo,
  }
}
