/* istanbul ignore file */
import { ICartIngredient, TIngredient } from 'redux/actionTypes'
import { IWSOrder } from 'redux/actionTypes'

export const mockBun: TIngredient = ingredientCreator('bun')
export const mockMain: TIngredient = ingredientCreator('main')
export const mockSauce: TIngredient = ingredientCreator('sauce')
export const mockCartMain: ICartIngredient = cartIngredientCreator('main')
export const mockCartSauce: ICartIngredient = cartIngredientCreator('sauce')

export const mockOrder: IWSOrder = {
  ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
  _id: '_id',
  name: 'name',
  number: 1337,
  status: 'done',
  createdAt: 'date',
  updatedAt: 'date',
}

function ingredientCreator(type: 'bun' | 'sauce' | 'main') {
  return {
    _id: '1',
    name: 'name',
    type: type,
    proteins: 42,
    fat: 13,
    carbohydrates: 69,
    calories: 228,
    price: 1337,
    image: 'image link',
    image_mobile: 'image link',
    image_large: 'image link',
  } as TIngredient
}

function cartIngredientCreator(type: 'bun' | 'sauce' | 'main') {
  return {
    _id: '1',
    name: 'name',
    type: type,
    proteins: 42,
    fat: 13,
    carbohydrates: 69,
    calories: 228,
    price: 1337,
    image: 'image link',
    image_mobile: 'image link',
    image_large: 'image link',
    uuid: 'uuid',
  } as ICartIngredient
}
