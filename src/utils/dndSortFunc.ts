import update from 'immutability-helper'

import { TIngredientCart } from '../redux/actionTypes/types'

export const dndSortFunc = (
  ingredients: TIngredientCart[],
  dragIndex: number,
  hoverIndex: number,
) => {
  const newIngredients = update(ingredients, {
    $splice: [
      [dragIndex, 1],
      [hoverIndex, 0, ingredients[dragIndex]],
    ],
  })

  return newIngredients
}
