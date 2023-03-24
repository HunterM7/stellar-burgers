// Actions
import { DataActions } from 'redux/actions'
import { IDataState, TIngredient } from 'redux/actionTypes'
import {
  setErrorStatus,
  setRequestStatus,
  setSuccessStatus,
} from 'redux/actionCreators'

// Reducer
import { dataReducer as reducer } from './dataReducer'

describe('Data reducer tests', () => {
  const initialState: IDataState = {
    ingredients: null,
    isLoading: false,
    hasError: false,
  }

  const requestState: IDataState = {
    ...initialState,
    isLoading: true,
  }

  const response: TIngredient[] = [
    {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    },
    {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    },
    {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    },
  ]

  const successState: IDataState = {
    ...initialState,
    ingredients: response,
  }

  const errorState: IDataState = {
    ...initialState,
    hasError: true,
  }

  it('should return the initial state', () => {
    expect(reducer(initialState, {} as DataActions)).toEqual(initialState)
    expect(reducer(requestState, {} as DataActions)).toEqual(requestState)
    expect(reducer(successState, {} as DataActions)).toEqual(successState)
    expect(reducer(errorState, {} as DataActions)).toEqual(errorState)
  })

  it('should handle INGREDIENTS_REQUEST', () => {
    expect(reducer(initialState, setRequestStatus())).toEqual(requestState)
    expect(reducer(requestState, setRequestStatus())).toEqual(requestState)
    expect(reducer(successState, setRequestStatus())).toEqual(requestState)
    expect(reducer(errorState, setRequestStatus())).toEqual(requestState)
  })

  it('should handle INGREDIENTS_SUCCESS', () => {
    expect(reducer(initialState, setSuccessStatus(response))).toEqual(
      successState,
    )
    expect(reducer(requestState, setSuccessStatus(response))).toEqual(
      successState,
    )
    expect(reducer(successState, setSuccessStatus(response))).toEqual(
      successState,
    )
    expect(reducer(errorState, setSuccessStatus(response))).toEqual(
      successState,
    )
  })

  it('should handle INGREDIENTS_ERROR', () => {
    expect(reducer(initialState, setErrorStatus())).toEqual(errorState)
    expect(reducer(requestState, setErrorStatus())).toEqual(errorState)
    expect(reducer(successState, setErrorStatus())).toEqual(errorState)
    expect(reducer(errorState, setErrorStatus())).toEqual(errorState)
  })
})
