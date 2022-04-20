import { combineReducers } from "redux";
import { photosReducer, selectPhotoReducer} from './photosReducer';

const rootReducer = combineReducers({
  allPhotos: photosReducer,
  selectedPhoto: selectPhotoReducer,
})


export default rootReducer;
