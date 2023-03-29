// Actions
import { allOrdersWSActions } from 'redux/actions'

// Action Creators
import {
  successAllOrdersWSConnection,
  errorAllOrdersWSConnection,
  closedAllOrdersWSConnection,
  getAllOrders,
} from 'redux/actionCreators'

// MockData
import { mockOrder } from 'jest/mockData'

// Reducer
import {
  IWSAllOrdersState,
  allOrdersWSReducer as reducer,
} from 'redux/reducers'

describe('User Orders WS Reducer tests', function () {
  const event: Event = {} as Event
  const messageEvent: MessageEvent = {
    data: JSON.stringify({
      orders: [mockOrder('done'), mockOrder('pending'), mockOrder('created')],
      total: 1337,
      totalToday: 42,
    }),
  } as MessageEvent

  const initialState: IWSAllOrdersState = {
    wsConnected: false,
    orders: null,
    onworkOrders: null,
    doneOrders: null,
    total: 0,
    totalToday: 0,
  }

  const successState: IWSAllOrdersState = {
    ...initialState,
    wsConnected: true,
  }

  const errorState: IWSAllOrdersState = {
    ...initialState,
    error: event,
  }

  const userOrdersState: IWSAllOrdersState = {
    ...successState,
    orders: [mockOrder('done'), mockOrder('pending'), mockOrder('created')],
    onworkOrders: [mockOrder('pending').number],
    doneOrders: [mockOrder('done').number],
    total: 1337,
    totalToday: 42,
  }

  it('should return initialState', function () {
    expect(reducer(initialState, {} as allOrdersWSActions)).toEqual(
      initialState,
    )
  })

  it('should handle userOrdersWSActionTypes.SUCCESS', function () {
    expect(reducer(initialState, successAllOrdersWSConnection(event))).toEqual(
      successState,
    )
  })

  it('should handle userOrdersWSActionTypes.ERROR', function () {
    expect(reducer(initialState, errorAllOrdersWSConnection(event))).toEqual(
      errorState,
    )
  })

  it('should handle userOrdersWSActionTypes.CLOSED', function () {
    expect(reducer(successState, closedAllOrdersWSConnection(event))).toEqual(
      initialState,
    )
  })

  it('should handle userOrdersWSActionTypes.GET_ORDERS', function () {
    expect(reducer(successState, getAllOrders(messageEvent))).toEqual(
      userOrdersState,
    )
  })
})
