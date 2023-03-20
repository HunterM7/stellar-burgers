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

export const allOrdersWSMiddleware = (): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null

    return next => (action: TAppActions) => {
      const { dispatch } = store

      if (action.type === allOrdersWSActionTypes.START) {
        socket = new WebSocket(action.payload)
      }

      if (socket) {
        socket.onopen = event => {
          dispatch(successAllOrdersWSConnection(event))
        }

        socket.onerror = event => {
          dispatch(errorAllOrdersWSConnection(event))
        }

        socket.onmessage = event => {
          dispatch(getAllOrders(event))
        }

        socket.onclose = event => {
          dispatch(closedAllOrdersWSConnection(event))
        }

        if (action.type === allOrdersWSActionTypes.STOP) {
          socket.close()
        }
      }

      next(action)
    }
  }) as Middleware
