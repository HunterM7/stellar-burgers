import { TOrderState, OrderFetchStatus } from '../actionTypes/types'
import { OrderActions } from '../actions/orderActions'

const initialState: TOrderState = {
  orderInfo: {
    name: 'Идентификатор заказа',
    order: 0,
  },
  isLoading: true,
  hasError: false,
}

export const orderReducer = (
  state = initialState,
  action: OrderActions,
): TOrderState => {
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
