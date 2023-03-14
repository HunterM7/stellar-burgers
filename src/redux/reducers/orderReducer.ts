import { IOrderState, OrderFetchStatus } from 'redux/actionTypes'
import { OrderActions } from 'redux/actions'

const initialState: IOrderState = {
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
): IOrderState => {
  switch (action.type) {
    case OrderFetchStatus.ORDER_REQUEST: {
      return {
        ...initialState,
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
