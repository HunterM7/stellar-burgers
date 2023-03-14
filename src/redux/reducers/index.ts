// Redux
import { combineReducers } from 'redux'

// Reducers
import { dataReducer } from './dataReducer'
import { cartReducer } from './cartReducer'
import { orderReducer } from './orderReducer'
import { authReducer } from './authReducer'
import { ingredientDetailsReducer } from './ingredientDetailsReducer'
import { allOrdersWSReducer } from './allOrdersWSReducer'
import { userOrdersWSReducer } from './userOrdersWSReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  ingredientDetails: ingredientDetailsReducer,
  allOrders: allOrdersWSReducer,
  userOrders: userOrdersWSReducer,
})

// Export Reducers
export * from './dataReducer'
export * from './cartReducer'
export * from './orderReducer'
export * from './authReducer'
export * from './ingredientDetailsReducer'
export * from './allOrdersWSReducer'
export * from './userOrdersWSReducer'
