import { TIngredient } from 'redux/actionTypes'

export const sortIngredientsList = (
  ingredients: TIngredient[],
): TIngredient[] => {
  const buns = [...new Set(ingredients)].filter(el => el.type === 'bun')
  const ingredientsList = ingredients.filter(el => el.type !== 'bun')
  const totalIngredientsList = [...buns, ...ingredientsList, ...buns]

  return totalIngredientsList
}
