import crypto from 'crypto'

// Types
import { ICartIngredient, TIngredient } from 'redux/actionTypes'

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

// Settings for crypto method
Object.defineProperty(global.self, 'crypto', {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
})

describe('Cart Reducer tests', function () {
  const bun: TIngredient = {
    _id: '60d3b41abdacab0026a733c7',
    name: 'Флюоресцентная булка R2-D3',
    type: 'bun',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
  }

  const ingredient: TIngredient = {
    _id: '60d3b41abdacab0026a733cc',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
  }

  const cartIngredient: ICartIngredient = {
    _id: '60d3b41abdacab0026a733cc',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    uuid: 'test value',
  }

  const initialState = {
    bun: null,
    ingredients: null,
  }

  const setBunState = {
    ...initialState,
    bun,
  }

  const setIngredientState = {
    ...initialState,
    ingredients: [{ ...ingredient, uuid: 'test value' }],
  }

  it('should return initialState', function () {
    expect(reducer(initialState, {} as CartActions)).toEqual(initialState)
  })

  it('should handle SET_BUN', function () {
    expect(reducer(initialState, setBun(bun))).toEqual(setBunState)
  })

  it('should handle SET_INGREDIENT', function () {
    jest.spyOn(crypto, 'randomUUID').mockImplementation(() => 'test value')

    expect(reducer(initialState, setIngredient(ingredient))).toEqual(
      setIngredientState,
    )
  })

  it('should handle REMOVE_INGREDIENT', function () {
    expect(reducer(setIngredientState, removeIngredient('test value'))).toEqual(
      initialState,
    )
  })

  it('should handle REORDER_INGREDIENTS', function () {
    const ingredients = [cartIngredient, cartIngredient, cartIngredient]

    const expected = { ...setIngredientState, ingredients }

    expect(
      reducer(setIngredientState, reorderIngredients(ingredients)),
    ).toEqual(expected)
  })
})
