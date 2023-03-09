import { AppDispatch, TRootState } from 'redux/store'
import { TAppActions } from 'redux/actions'
import { WSActionTypes } from 'redux/actionTypes'

import type { Middleware, MiddlewareAPI } from 'redux'

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null

    return next => (action: TAppActions) => {
      const { dispatch } = store

      if (action.type === WSActionTypes.WS_CONNECTION_START) {
        // объект класса WebSocket
        socket = new WebSocket(wsUrl)

        console.log('test')
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({
            type: WSActionTypes.WS_CONNECTION_SUCCESS,
            payload: event,
          })
        }

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: WSActionTypes.WS_CONNECTION_ERROR, payload: event })
        }

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event
          dispatch({ type: WSActionTypes.WS_GET_MESSAGE, payload: data })
        }
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: WSActionTypes.WS_CONNECTION_CLOSED, payload: event })
        }

        if (action.type === WSActionTypes.WS_SEND_MESSAGE) {
          const message = action.payload
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message))
        }
      }

      next(action)
    }
  }) as Middleware
}
