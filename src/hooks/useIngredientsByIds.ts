// Redux
import { useSelector } from 'redux/store'
import { dataIngreientsSelector } from 'redux/selectors'
import { TIngredient } from 'redux/actionTypes/dataTypes'
import { sortIngredientsList } from 'utils/sortIngredientsList'

export function useIngredientsByIds(ids: string[]) {
  const allIngredients = useSelector(dataIngreientsSelector)

  const orderIngredients = ids.reduce<TIngredient[]>((acc, id) => {
    const ingredient = allIngredients?.find(el => el._id === id)

    if (ingredient) acc.push(ingredient)

    return acc
  }, [])

  return sortIngredientsList(orderIngredients)
}
