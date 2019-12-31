import { createStore } from 'redux'
import appReducer from './reducers'

export const STORE = createStore(appReducer)
