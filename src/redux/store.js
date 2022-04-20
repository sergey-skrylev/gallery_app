import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import watchActions from './sagas/sagas';
import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchActions);

export default store;
