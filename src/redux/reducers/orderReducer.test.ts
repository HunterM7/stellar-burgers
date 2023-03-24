import { orderReducer as reducer, IOrderState } from 'redux/reducers'
import { OrderActions } from 'redux/actions'
import {
  setRequestOrderStatus,
  setSuccessOrderStatus,
  setErrorOrderStatus,
} from 'redux/actionCreators'

describe('Order Reducer tests', function () {
  const initialState: IOrderState = {
    orderInfo: null,
    isLoading: false,
    hasError: false,
  }

  const requestState = {
    ...initialState,
    isLoading: true,
  }

  const response = {
    name: 'Some juicy burger',
    order: {
      number: 1234567,
    },
  }

  const successState = {
    ...initialState,
    orderInfo: {
      name: response.name,
      order: response.order.number,
    },
    isLoading: false,
    hasError: false,
  }

  const errorState = {
    ...initialState,
    hasError: true,
  }

  it('should return the initial state', function () {
    expect(reducer(initialState, {} as OrderActions)).toEqual(initialState)
    expect(reducer(requestState, {} as OrderActions)).toEqual(requestState)
    expect(reducer(successState, {} as OrderActions)).toEqual(successState)
    expect(reducer(errorState, {} as OrderActions)).toEqual(errorState)
  })

  it('should handle ORDER_REQUEST', function () {
    expect(reducer(initialState, setRequestOrderStatus())).toEqual(requestState)
    expect(reducer(requestState, setRequestOrderStatus())).toEqual(requestState)
    expect(reducer(successState, setRequestOrderStatus())).toEqual(requestState)
    expect(reducer(errorState, setRequestOrderStatus())).toEqual(requestState)
  })

  it('should handle ORDER_SUCCESS', function () {
    expect(reducer(initialState, setSuccessOrderStatus(response))).toEqual(
      successState,
    )
    expect(reducer(requestState, setSuccessOrderStatus(response))).toEqual(
      successState,
    )
    expect(reducer(successState, setSuccessOrderStatus(response))).toEqual(
      successState,
    )
    expect(reducer(errorState, setSuccessOrderStatus(response))).toEqual(
      successState,
    )
  })

  it('should handle ORDER_ERROR', function () {
    expect(reducer(initialState, setErrorOrderStatus())).toEqual(errorState)
    expect(reducer(requestState, setErrorOrderStatus())).toEqual(errorState)
    expect(reducer(successState, setErrorOrderStatus())).toEqual(errorState)
    expect(reducer(errorState, setErrorOrderStatus())).toEqual(errorState)
  })
})
