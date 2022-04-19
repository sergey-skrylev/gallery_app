import { combineReducers } from "redux";
import { photosReducer, selectPhotoReducer} from './photosReducer';

const reducers = combineReducers({
  allPhotos: photosReducer,
  selectedPhoto: selectPhotoReducer,
})


export default reducers;
