import { TIngredient } from 'redux/actionTypes'

export const countPrice = (ingredients: TIngredient[]) => {
  return ingredients.reduce((sum, el) => sum + el.price, 0)
}
