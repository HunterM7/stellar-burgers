import { combineReducers } from 'redux'

import { dataReducer } from './dataReducer'
import { cartReducer } from './cartReducer'
import { orderReducer } from './orderReducer'
import { ingredientDetailsReducer } from './ingredientDetailsReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
})
