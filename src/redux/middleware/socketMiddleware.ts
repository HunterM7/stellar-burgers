import { Middleware, MiddlewareAPI } from 'redux'

// Redux
import { AppDispatch, TRootState } from 'redux/store'
import { TAppActions } from 'redux/actions'
import { WSActionTypes } from 'redux/actionTypes'
import {
  closedWSConnection,
  errorWSConnection,
  getAllOrders,
  successWSConnection,
} from 'redux/actionCreators'

export const socketMiddleware = (wsUrl: string): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null

    return next => (action: TAppActions) => {
      const { dispatch } = store

      if (action.type === WSActionTypes.WS_CONNECTION_START) {
        socket = new WebSocket(wsUrl)
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch(successWSConnection(event))
        }

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(errorWSConnection(event))
        }

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          dispatch(getAllOrders(event))
        }
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch(closedWSConnection(event))
        }

        // if (action.type === WSActionTypes.WS_SEND_MESSAGE) {
        //   const message = action.payload
        // функция для отправки сообщения на сервер
        //   socket.send(JSON.stringify(message))
        // }
      }

      next(action)
    }
  }) as Middleware
