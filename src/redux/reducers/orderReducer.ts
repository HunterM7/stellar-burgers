import { OrderStateType, OrderFetchStatus } from '../actionTypes/types'
import { orderActions } from '../actions/orderActions'

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
    case OrderFetchStatus.ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }
    case OrderFetchStatus.ORDER_SUCCESS: {
      return {
        ...state,
        orderInfo: {
          name: action.name,
          order: action.orderId,
        },
        isLoading: false,
      }
    }
    case OrderFetchStatus.ORDER_ERROR: {
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
