import { createStore, combineReducers } from 'redux'
import { useDispatch } from 'react-redux'

import { cartReducer } from './slices/cartSlice/cartReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
