import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../actionTypes/actionTypes'
import axios from 'axios';

// для всех фото
const fetchPhotos = async () => {
  const response = await axios
    .get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=24')
    .catch((err) => {
      console.log('error', err);
    })
  return response.data
}

// для выбранного фото

// возникли сложности с передачей id в сагу, поэтому оставил подгрузку отдельной фото в компоненте

// const fetchPhotoItem = async () => {
//   const response = await axios
//     .get(`https://jsonplaceholder.typicode.com/photos/${1}`)
//     .catch((err) => {
//       console.error('Error', err)
//     })
//   return response.data
// }

// для всех фото
function* workerGetFetchPhotos() {
  const photos = yield call(fetchPhotos)
  yield put({ type: ActionTypes.GET_PHOTOS_SUCCESS, payload: photos })
}

// для выбранного фото
// function* workerGetFetchSelectedPhoto() {
//   const photo = yield call(fetchPhotoItem)
//   yield put({ type: ActionTypes.GET_SELECTED_PHOTO_SUCCESS, payload: photo })
// }

// наблюдатель
function* watchActions() {
  yield takeEvery(ActionTypes.GET_PHOTOS, workerGetFetchPhotos);
  // yield takeEvery(ActionTypes.GET_SELECTED_PHOTO, workerGetFetchSelectedPhoto);
}

export default watchActions;
