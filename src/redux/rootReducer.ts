import { combineReducers } from 'redux'

import { burgerReducer } from './slices/burgerSlice/burgerReducer'

export const rootReducer = combineReducers({
  burgerReducer,
})
