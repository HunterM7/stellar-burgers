import React from 'react'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import {
  setIngredientDetails,
  resetIngredientDetails,
} from 'redux/actionCreators'
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
    ingredient && dispatch(setIngredientDetails(ingredient))

    return () => {
      dispatch(resetIngredientDetails())
    }
  }, [dispatch, ingredient])

  const IngredientDetails = useSelector(ingredientDetailsSelector)

  return IngredientDetails
}

export default useIngredientDetails
