import { createStore, combineReducers, applyMiddleware } from 'redux'
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducer'
import { dataReducer } from './reducers/dataReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
})

// === Redux DevTools ===

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = createStore(rootReducer, composeEnhancers())

// === ----------------- ===

// === ----------------- ===

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
