import { TIngredient } from 'redux/actionTypes'

export const sortIngredientsList = (
  ingredients: TIngredient[],
): TIngredient[] => {
  const bun = ingredients.find(el => el.type === 'bun')
  const ingredientsList = ingredients.filter(el => el.type !== 'bun')
  const totalIngredientsList = bun
    ? [bun, ...ingredientsList, bun]
    : ingredientsList

  return totalIngredientsList
}
