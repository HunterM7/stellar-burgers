// Actions
import { userOrdersWSActions } from 'redux/actions'

// Action Creators
import {
  successUserOrdersWSConnection,
  errorUserOrdersWSConnection,
  closedUserOrdersWSConnection,
  getUserOrders,
} from 'redux/actionCreators'

// MockData
import { mockOrder } from 'jest/mockData'

// Reducer
import {
  IWSUserOrdersState,
  userOrdersWSReducer as reducer,
} from 'redux/reducers'

describe('User Orders WS Reducer tests', function () {
  const event: Event = {} as Event
  const messageEvent: MessageEvent = {
    data: JSON.stringify({
      orders: [mockOrder('done'), mockOrder('pending'), mockOrder('created')],
    }),
  } as MessageEvent

  const initialState: IWSUserOrdersState = {
    wsConnected: false,
    orders: null,
  }

  const successState: IWSUserOrdersState = {
    ...initialState,
    wsConnected: true,
  }

  const errorState: IWSUserOrdersState = {
    ...initialState,
    error: event,
  }

  const userOrdersState: IWSUserOrdersState = {
    ...successState,
    orders: [mockOrder('done'), mockOrder('pending'), mockOrder('created')],
  }

  it('should return initialState', function () {
    expect(reducer(initialState, {} as userOrdersWSActions)).toEqual(
      initialState,
    )
  })

  it('should handle userOrdersWSActionTypes.SUCCESS', function () {
    expect(reducer(initialState, successUserOrdersWSConnection(event))).toEqual(
      successState,
    )
  })

  it('should handle userOrdersWSActionTypes.ERROR', function () {
    expect(reducer(initialState, errorUserOrdersWSConnection(event))).toEqual(
      errorState,
    )
  })

  it('should handle userOrdersWSActionTypes.CLOSED', function () {
    expect(reducer(successState, closedUserOrdersWSConnection(event))).toEqual(
      initialState,
    )
  })

  it('should handle userOrdersWSActionTypes.GET_ORDERS', function () {
    expect(reducer(successState, getUserOrders(messageEvent))).toEqual(
      userOrdersState,
    )
  })
})
