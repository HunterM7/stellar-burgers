import { useSelector } from 'redux/store'
import { dataIngreientsSelector } from 'redux/selectors'

export function useIngredientsByIds(ids: string[]) {
  const allIngredients = useSelector(dataIngreientsSelector)

  const result = []

  for (const id of ids) {
    const ingredient = allIngredients.find(ingredient => ingredient._id === id)

    if (ingredient) result.push(ingredient)
  }

  return result
}
