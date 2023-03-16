import { Middleware, MiddlewareAPI } from 'redux'

// Redux
import { AppDispatch, TRootState } from 'redux/store'
import { TAppActions } from 'redux/actions'
import { allOrdersWSActionTypes } from 'redux/actionTypes'
import {
  closedAllOrdersWSConnection,
  errorAllOrdersWSConnection,
  getAllOrders,
  successAllOrdersWSConnection,
} from 'redux/actionCreators'

export const allOrdersWSMiddleware = (wsUrl: string): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null

    return next => (action: TAppActions) => {
      const { dispatch } = store

      if (action.type === allOrdersWSActionTypes.START) {
        socket = new WebSocket(wsUrl)
      }
      if (socket) {
        // Stop connection to WS
        if (action.type === allOrdersWSActionTypes.STOP) {
          console.log('stop connection')
          socket.close()
        }
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          console.log('open connection')

          dispatch(successAllOrdersWSConnection(event))
        }

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(errorAllOrdersWSConnection(event))
        }

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          dispatch(getAllOrders(event))
        }
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          console.log('close connection')

          dispatch(closedAllOrdersWSConnection(event))
        }
      }

      next(action)
    }
  }) as Middleware
