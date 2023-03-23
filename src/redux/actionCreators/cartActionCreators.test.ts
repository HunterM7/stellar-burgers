import { CartActionTypes, TIngredient } from 'redux/actionTypes'
import { setBun } from 'redux/actionCreators'

const testIngredient: TIngredient = {
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

describe('Cart action creators', () => {
  it('Set Bun action', () => {
    const expectedAction = {
      type: CartActionTypes.SET_BUN,
      ingredient: testIngredient,
    }

    expect(setBun(testIngredient)).toEqual(expectedAction)
  })

  // it('Set Ingredient action', () => {
  //   const expectedAction = {
  //     type: CartActionTypes.SET_INGREDIENT,
  //     ingredient: { ...testIngredient, uuid: crypto.randomUUID() },
  //   }

  //   expect(setIngredient(testIngredient)).toEqual(expectedAction)
  // })

  // it('Cart action - succes', () => {
  //   const ingredients = [1, 2, 3]

  //   const expectedAction = {
  //     type: CartActionTypes.INGREDIENTS_SUCCESS,
  //     ingredients,
  //   }

  //   expect(setSuccessStatus(ingredients)).toEqual(expectedAction)
  // })
})

// export const setIngredient = (ingredient: TIngredient): setIngredientA => ({
//   type: CartActionTypes.SET_INGREDIENT,
//   ingredient: { ...ingredient, uuid: crypto.randomUUID() },
// })

// export const removeIngredient = (id: string): removeIngredientA => ({
//   type: CartActionTypes.REMOVE_INGREDIENT,
//   id,
// })

// export const reorderIngredients = (
//   ingredients: TCartIngredient[],
// ): reorderIngredientsA => ({
//   type: CartActionTypes.REORDER_INGREDIENTS,
//   ingredients,
// })
