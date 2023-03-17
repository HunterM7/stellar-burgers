import React from 'react'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { getIngredients } from 'redux/actions'
import { setIngredientDetails } from 'redux/actionCreators'
import {
  dataIngreientsSelector,
  ingredientDetailsSelector,
} from 'redux/selectors'

const useIngredientDetails = (id: string | undefined) => {
  const dispatch = useDispatch()

  // Searching ingredient in Ingredient storage
  const ingredient = useSelector(dataIngreientsSelector).find(
    el => el._id === id,
  )

  React.useEffect(() => {
    if (ingredient) {
      dispatch(
        setIngredientDetails({
          title: ingredient.name,
          image: ingredient.image_large,
          calories: ingredient.calories,
          proteins: ingredient.proteins,
          fat: ingredient.fat,
          carbohydrates: ingredient.carbohydrates,
        }),
      )
    } else {
      dispatch(getIngredients())
    }
  }, [dispatch, ingredient])

  const IngredientDetails = useSelector(ingredientDetailsSelector)

  return IngredientDetails
}

export default useIngredientDetails
