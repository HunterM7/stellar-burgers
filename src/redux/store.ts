import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { dataReducer } from './reducers/dataReducer'
import { IngredientDetailsReducer } from './reducers/ingredientDetailsReducer'
import { cartReducer } from './reducers/cartReducer'
import { orderReducer } from './reducers/orderReducer'
import { TAppActions } from './actions'

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: IngredientDetailsReducer,
})

// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// --- --- --- --- --- --- --- ---

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type TRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<TRootState, never, TAppActions>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  never,
  TAppActions
>

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook
