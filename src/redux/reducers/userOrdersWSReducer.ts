import { userOrdersWSActions } from 'redux/actions'
import { IWSOrder, userOrdersWSActionTypes } from 'redux/actionTypes'

interface IWSInitialState {
  wsConnected: boolean
  orders: IWSOrder[]
  total: number
  totalToday: number

  error?: Event | undefined
}

const initialState: IWSInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
}

export const userOrdersWSReducer = (
  state = initialState,
  action: userOrdersWSActions,
): IWSInitialState => {
  switch (action.type) {
    case userOrdersWSActionTypes.SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      }

    case userOrdersWSActionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }

    case userOrdersWSActionTypes.CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      }

    case userOrdersWSActionTypes.GET_ORDERS:
      return {
        ...state,
        error: undefined,
        ...action.payload,
      }
    default:
      return state
  }
}
