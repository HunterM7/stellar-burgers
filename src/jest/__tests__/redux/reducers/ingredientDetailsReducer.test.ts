import { ingredientDetailsReducer as reducer } from 'redux/reducers'
import { IngredientDetailsActions } from 'redux/actions'
import { TIngredient } from 'redux/actionTypes'
import {
  resetIngredientDetails,
  setIngredientDetails,
} from 'redux/actionCreators'

describe('Ingredient Details Reducer test', () => {
  const initialState = null

  it('should return the initial state', () => {
    expect(reducer(initialState, {} as IngredientDetailsActions)).toEqual(
      initialState,
    )
  })

  it('should handle SET_INGREDIENT_DETAILS', () => {
    const ingredient: TIngredient = {
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
    }
    const expectedState = ingredient

    expect(reducer(initialState, setIngredientDetails(ingredient))).toEqual(
      expectedState,
    )
  })

  it('should handle RESET_INGREDIENT_DETAILS', () => {
    expect(reducer(initialState, resetIngredientDetails())).toEqual(
      initialState,
    )
  })
})
