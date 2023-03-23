// Actions
import { DataActions } from 'redux/actions'
import { TIngredient } from 'redux/actionTypes'
import {
  setErrorStatus,
  setRequestStatus,
  setSuccessStatus,
} from 'redux/actionCreators'

// Reducer
import { dataReducer as reducer } from './dataReducer'

describe('todos reducer', () => {
  const initialState = {
    ingredients: [],
    isLoading: true,
    hasError: false,
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as DataActions)).toEqual(initialState)
  })

  it('should handle INGREDIENTS_REQUEST', () => {
    const expectedState = {
      ...initialState,
      isLoading: true,
      hasError: false,
    }

    expect(reducer(initialState, setRequestStatus())).toEqual(expectedState)
  })

  it('should handle INGREDIENTS_SUCCESS', () => {
    const mockData: TIngredient[] = [
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

    const expectedState = {
      ...initialState,
      ingredients: [...mockData],
      isLoading: false,
    }

    expect(reducer(initialState, setSuccessStatus(mockData))).toEqual(
      expectedState,
    )
  })

  it('should handle INGREDIENTS_ERROR', () => {
    const expectedState = {
      ...initialState,
      isLoading: false,
      hasError: true,
    }

    expect(reducer(initialState, setErrorStatus())).toEqual(expectedState)
  })
})
