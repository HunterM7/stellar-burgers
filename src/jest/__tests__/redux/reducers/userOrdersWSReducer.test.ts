// Actions
import { userOrdersWSActions } from 'redux/actions'

// Action Creators
import {
  successUserOrdersWSConnection,
  errorUserOrdersWSConnection,
  closedUserOrdersWSConnection,
  getUserOrders,
} from 'redux/actionCreators/userOrdersActionCreators'

// MockData
import { mockOrder } from 'jest/mockData'

// Reducer
import { IWSUserState, userOrdersWSReducer as reducer } from 'redux/reducers'

describe('User Orders WS Reducer tests', function () {
  const event: Event = {} as Event
  const messageEvent: MessageEvent = {
    data: JSON.stringify({ orders: [mockOrder, mockOrder, mockOrder] }),
  } as MessageEvent

  const initialState: IWSUserState = {
    wsConnected: false,
    orders: null,
  }

  const successState: IWSUserState = {
    ...initialState,
    wsConnected: true,
  }

  const errorState: IWSUserState = {
    ...initialState,
    error: event,
  }

  const userOrdersState: IWSUserState = {
    ...successState,
    orders: [mockOrder, mockOrder, mockOrder],
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
