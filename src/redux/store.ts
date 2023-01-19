import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducer'
import { dataReducer } from './reducers/dataReducer'
import { orderReducer } from './reducers/orderReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  order: orderReducer,
})

// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type DispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<DispatchType>()
