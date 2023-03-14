import { TIngredient } from '../redux/actionTypes/dataTypes'

export function getIngredientsList(
  arrayOfIDs: string[],
  sampleArray: TIngredient[],
) {
  const currentIngredients: TIngredient[] = []

  arrayOfIDs.forEach(id => {
    const el = sampleArray.find(ingredient => {
      if (ingredient._id === id) {
        return ingredient._id === id
      }
      return false
    })

    if (el) currentIngredients.push(el)
  })

  return currentIngredients
}
