import { Middleware, MiddlewareAPI } from 'redux'

// Redux
import { AppDispatch, TRootState } from 'redux/store'
import { TAppActions } from 'redux/actions'
import { userOrdersWSActionTypes } from 'redux/actionTypes'
import {
  closedUserOrdersWSConnection,
  errorUserOrdersWSConnection,
  successUserOrdersWSConnection,
  getUserOrders,
} from 'redux/actionCreators'
import { getCookie } from 'utils/cookie'

export const userOrdersWSMiddleware = (wsUrl: string): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null

    return next => (action: TAppActions) => {
      const { dispatch } = store

      const accessToken = getCookie('accessToken') || ''

      if (action.type === userOrdersWSActionTypes.START) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`)
      }
      if (socket) {
        // Stop connection to WS
        if (action.type === userOrdersWSActionTypes.STOP) {
          console.log('stop connection')
          socket.close()
        }
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch(successUserOrdersWSConnection(event))
        }

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(errorUserOrdersWSConnection(event))
        }

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          dispatch(getUserOrders(event))
        }
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch(closedUserOrdersWSConnection(event))
        }

        // if (action.type === UserOrdersWSActionTypes.WS_SEND_MESSAGE) {
        //   const message = action.payload
        // функция для отправки сообщения на сервер
        //   socket.send(JSON.stringify(message))
        // }
      }

      next(action)
    }
  }) as Middleware
