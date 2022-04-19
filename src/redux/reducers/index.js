import { combineReducers } from "redux";
import { photosReducer } from './photosReducer'

const reducers = combineReducers({
  photos: photosReducer,
})


export default reducers;
