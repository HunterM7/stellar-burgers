// Redux
import { combineReducers } from 'redux'

// Reducers
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

// Export Reducers
export * from './dataReducer'
export * from './cartReducer'
export * from './orderReducer'
export * from './ingredientDetailsReducer'
export * from './authReducer'
