// Actions
import { userOrdersWSActionTypes } from 'redux/actionTypes'

import {
  successUserOrdersWSConnection,
  errorUserOrdersWSConnection,
  closedUserOrdersWSConnection,
  getUserOrders,
} from 'redux/actionCreators/userOrdersActionCreators'

// Reducer
import { IWSInitialState, userOrdersWSReducer as reducer } from 'redux/reducers'
import { userOrdersWSActions } from 'redux/actions'

describe('User Orders WS Reducer tests', function () {
  const initialState: IWSInitialState = {
    wsConnected: false,
    orders: null,
  }

  it('should return initialState', function () {
    expect(reducer(undefined, {} as userOrdersWSActions)).toEqual(initialState)
  })
})
