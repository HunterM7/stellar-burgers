// Actions
import { DataActions } from 'redux/actions'
import { IDataState, TIngredient } from 'redux/actionTypes'
import {
  setErrorStatus,
  setRequestStatus,
  setSuccessStatus,
} from 'redux/actionCreators'

// Reducer
import { dataReducer as reducer } from 'redux/reducers'

// MockData
import { mockBun, mockMain, mockSauce } from 'jest/mockData'

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

  const ingredients: TIngredient[] = [mockBun, mockMain, mockSauce]

  const successState: IDataState = {
    ...initialState,
    ingredients,
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
    expect(reducer(initialState, setSuccessStatus(ingredients))).toEqual(
      successState,
    )
    expect(reducer(requestState, setSuccessStatus(ingredients))).toEqual(
      successState,
    )
    expect(reducer(successState, setSuccessStatus(ingredients))).toEqual(
      successState,
    )
    expect(reducer(errorState, setSuccessStatus(ingredients))).toEqual(
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
