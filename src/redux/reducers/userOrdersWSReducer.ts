import { userOrdersWSActions } from 'redux/actions'
import { IWSOrder, userOrdersWSActionTypes } from 'redux/actionTypes'

export interface IWSUserOrdersState {
  wsConnected: boolean
  orders: IWSOrder[] | null

  error?: Event | undefined
}

const initialState: IWSUserOrdersState = {
  wsConnected: false,
  orders: null,
}

export const userOrdersWSReducer = (
  state = initialState,
  action: userOrdersWSActions,
): IWSUserOrdersState => {
  switch (action.type) {
    case userOrdersWSActionTypes.SUCCESS:
      return {
        ...initialState,
        wsConnected: true,
      }

    case userOrdersWSActionTypes.ERROR:
      return {
        ...initialState,
        wsConnected: false,
        error: action.payload,
      }

    case userOrdersWSActionTypes.CLOSED:
      return initialState

    case userOrdersWSActionTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      }

    default:
      return state
  }
}
