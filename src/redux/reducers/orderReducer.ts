import { OrderActions } from 'redux/actions'
import { OrderFetchStatus } from 'redux/actionTypes'

export interface IOrderState {
  orderInfo: {
    name: string
    order: number
  } | null
  isLoading: boolean
  hasError: boolean
}

const initialState: IOrderState = {
  orderInfo: null,
  isLoading: false,
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
        isLoading: true,
      }
    }
    case OrderFetchStatus.ORDER_SUCCESS: {
      return {
        ...initialState,
        orderInfo: {
          name: action.name,
          order: action.orderId,
        },
      }
    }
    case OrderFetchStatus.ORDER_ERROR: {
      return {
        ...initialState,
        hasError: true,
      }
    }

    default: {
      return state
    }
  }
}
