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

  const ingredientState = {
    ...initialState,
    ingredients: [mockCartMain],
  }

  const ingredientsState = {
    ...initialState,
    ingredients: [mockCartMain, mockCartSauce],
  }

  const ingredientsRemoveState = {
    ...initialState,
    ingredients: [mockCartMain, { ...mockCartSauce, uuid: 'test value 2' }],
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
      ingredientState,
    )

    expect(reducer(ingredientState, setIngredient(mockSauce))).toEqual(
      ingredientsState,
    )
  })

  it('should handle REMOVE_INGREDIENT', function () {
    expect(reducer(initialState, removeIngredient('test value'))).toEqual(
      initialState,
    )
    expect(reducer(ingredientState, removeIngredient('test value'))).toEqual(
      initialState,
    )
    expect(
      reducer(ingredientsRemoveState, removeIngredient('test value 2')),
    ).toEqual(ingredientState)
  })

  it('should handle REORDER_INGREDIENTS', function () {
    const ingredients = [mockCartMain, mockCartSauce]

    const expected = { ...ingredientState, ingredients }

    expect(reducer(ingredientState, reorderIngredients(ingredients))).toEqual(
      expected,
    )
  })
})
