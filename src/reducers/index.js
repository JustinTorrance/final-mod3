import { combineReducers } from 'redux'
import { housesReducer } from './housesReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers ({
  houses: housesReducer,
  loading: loadingReducer,
  error: errorReducer
})

export default rootReducer