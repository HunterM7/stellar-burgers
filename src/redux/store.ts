import { createStore, combineReducers } from 'redux'

import { burgerReducer } from './slices/burgerSlice/burgerReducer'

const rootReducer = combineReducers({
  burger: burgerReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
