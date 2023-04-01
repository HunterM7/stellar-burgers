import { allOrdersWSActions } from 'redux/actions/allOrdersWSActions'
import { IWSOrder, allOrdersWSActionTypes } from 'redux/actionTypes'

export interface IWSAllOrdersState {
  wsConnected: boolean
  orders: IWSOrder[] | null
  onworkOrders: number[] | null
  doneOrders: number[] | null
  total: number
  totalToday: number

  error?: Event | undefined
}

const initialState: IWSAllOrdersState = {
  wsConnected: false,
  orders: null,
  onworkOrders: null,
  doneOrders: null,
  total: 0,
  totalToday: 0,
}

export const allOrdersWSReducer = (
  state = initialState,
  action: allOrdersWSActions,
): IWSAllOrdersState => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case allOrdersWSActionTypes.SUCCESS:
      return {
        ...initialState,
        wsConnected: true,
      }

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case allOrdersWSActionTypes.ERROR:
      return {
        ...initialState,
        wsConnected: false,
        error: action.payload,
      }

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case allOrdersWSActionTypes.CLOSED:
      return {
        ...initialState,
        wsConnected: false,
      }

    // Опишем обработку экшена с типом WS_GET_MESSAGE
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case allOrdersWSActionTypes.GET_ORDERS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
