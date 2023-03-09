// Redux
import { combineReducers } from 'redux'

// Reducers
import { dataReducer } from './dataReducer'
import { cartReducer } from './cartReducer'
import { orderReducer } from './orderReducer'
import { ingredientDetailsReducer } from './ingredientDetailsReducer'
import { authReducer } from './authReducer'
import { webSocketReducer } from './webSocketReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
  socket: webSocketReducer,
})

// Export Reducers
export * from './dataReducer'
export * from './cartReducer'
export * from './orderReducer'
export * from './ingredientDetailsReducer'
export * from './authReducer'
