import { WSActions } from 'redux/actions/webSocketActions'
import { IWSOrder, WSActionTypes } from 'redux/actionTypes'

interface IWSInitialState {
  wsConnected: boolean
  orders: IWSOrder[]
  onworkOrders: number[]
  doneOrders: number[]
  total: number
  totalToday: number

  error?: Event | undefined
}

const initialState: IWSInitialState = {
  wsConnected: false,
  orders: [],
  onworkOrders: [],
  doneOrders: [],
  total: 0,
  totalToday: 0,
}

export const webSocketReducer = (
  state = initialState,
  action: WSActions,
): IWSInitialState => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WSActionTypes.WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      }

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WSActionTypes.WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WSActionTypes.WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      }

    // Опишем обработку экшена с типом WS_GET_MESSAGE
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case WSActionTypes.WS_GET_ALL_ORDERS:
      return {
        ...state,
        // onworkOrders: [],
        // doneOrders: [],

        error: undefined,
        ...action.payload,
      }
    default:
      return state
  }
}
