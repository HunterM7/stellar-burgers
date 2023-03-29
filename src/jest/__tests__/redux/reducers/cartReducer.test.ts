import crypto from 'crypto'

// Actions
import { CartActions } from 'redux/actions'

// Action Creators
import {
  setBun,
  setIngredient,
  removeIngredient,
  reorderIngredients,
} from 'redux/actionCreators'

// Reducer
import { cartReducer as reducer } from 'redux/reducers'

// MockData
import {
  mockBun,
  mockMain,
  mockCartMain,
  mockCartSauce,
  mockSauce,
} from 'jest/mockData'

// Settings for crypto method
Object.defineProperty(global.self, 'crypto', {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
})

describe('Cart Reducer tests', function () {
  const initialState = {
    bun: null,
    ingredients: null,
  }

  const setBunState = {
    ...initialState,
    bun: mockBun,
  }

  const setIngredientState = {
    ...initialState,
    ingredients: [{ ...mockMain, uuid: 'test value' }],
  }

  const setIngredientsState = {
    ...initialState,
    ingredients: [
      { ...mockMain, uuid: 'test value' },
      { ...mockSauce, uuid: 'test value 2' },
    ],
  }

  it('should return initialState', function () {
    expect(reducer(initialState, {} as CartActions)).toEqual(initialState)
  })

  it('should handle SET_BUN', function () {
    expect(reducer(initialState, setBun(mockBun))).toEqual(setBunState)
  })

  it('should handle SET_INGREDIENT', function () {
    jest.spyOn(crypto, 'randomUUID').mockImplementation(() => 'test value')

    expect(reducer(initialState, setIngredient(mockMain))).toEqual(
      setIngredientState,
    )
  })

  it('should handle REMOVE_INGREDIENT', function () {
    expect(reducer(initialState, removeIngredient('test value'))).toEqual(
      initialState,
    )
    expect(reducer(setIngredientState, removeIngredient('test value'))).toEqual(
      initialState,
    )
    expect(
      reducer(setIngredientsState, removeIngredient('test value 2')),
    ).toEqual(setIngredientState)
  })

  it('should handle REORDER_INGREDIENTS', function () {
    const ingredients = [mockCartMain, mockCartSauce]

    const expected = { ...setIngredientState, ingredients }

    expect(
      reducer(setIngredientState, reorderIngredients(ingredients)),
    ).toEqual(expected)
  })
})
