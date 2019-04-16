import { combineReducers } from 'redux'
import { housesReducer } from './housesReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers ({
  houses: housesReducer,
  loading: loadingReducer
})

export default rootReducer