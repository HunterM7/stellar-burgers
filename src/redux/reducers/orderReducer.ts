import { OrderStateType, OrderStatus } from '../actionTypes/types'
import { orderActions } from '../actions/orderAction'

const initialState: OrderStateType = {
  orderInfo: {
    name: 'Идентификатор заказа',
    order: 0,
  },
  isLoading: true,
  hasError: false,
}

export const orderReducer = (
  state: OrderStateType = initialState,
  action: orderActions,
) => {
  switch (action.type) {
    case OrderStatus._REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }
    case OrderStatus._SUCCESS: {
      return {
        ...state,
        orderInfo: {
          name: action.name,
          order: action.orderId,
        },
        isLoading: false,
      }
    }
    case OrderStatus._ERROR: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    default: {
      return state
    }
  }
}
