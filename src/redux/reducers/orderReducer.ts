import { TOrderState, OrderFetchStatus } from 'redux/actionTypes'
import { OrderActions } from 'redux/actions/orderActions'

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
        orderInfo: {
          name: action.name,
          order: action.orderId,
        },
        isLoading: false,
        hasError: false,
      }
    }
    case OrderFetchStatus.ORDER_ERROR: {
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }
    }

    default: {
      return state
    }
  }
}
