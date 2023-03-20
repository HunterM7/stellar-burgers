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

export const userOrdersWSMiddleware = (): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null

    return next => (action: TAppActions) => {
      const { dispatch } = store

      const accessToken = getCookie('accessToken') || ''

      if (action.type === userOrdersWSActionTypes.START) {
        socket = new WebSocket(`${action.payload}?token=${accessToken}`)
      }

      if (socket) {
        if (action.type === userOrdersWSActionTypes.STOP) {
          socket.close()
        }

        socket.onopen = event => {
          dispatch(successUserOrdersWSConnection(event))
        }

        socket.onerror = event => {
          dispatch(errorUserOrdersWSConnection(event))
        }

        socket.onmessage = event => {
          dispatch(getUserOrders(event))
        }

        socket.onclose = event => {
          dispatch(closedUserOrdersWSConnection(event))
        }
      }

      next(action)
    }
  }) as Middleware
