import { combineReducers } from 'redux'
import { buysReducer } from './buys/buys.reducer';

export default combineReducers({
    buys: buysReducer
})
