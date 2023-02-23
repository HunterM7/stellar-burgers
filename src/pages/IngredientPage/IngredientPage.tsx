import React from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { getIngredients } from 'redux/actions'
import { dataIngreientsSelector, dataSelector } from 'redux/selectors'
import { setIngredientDetails } from 'redux/actionCreators'

// Components
import { IngredientInfo, Loader } from 'components'

// Styles
import styles from './IngredientPage.module.scss'

const IngredientPage: React.FC = () => {
  const dispatch = useDispatch()

  // Getting all ingredients
  const { isLoading, hasError } = useSelector(dataSelector)

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  // Getting necessary ingredient from Redux
  const { id } = useParams()
  const ingredients = useSelector(dataIngreientsSelector)
  const ingredient = React.useMemo(
    () => ingredients.find(el => el._id === id),
    [id, ingredients],
  )

  React.useEffect(() => {
    ingredient &&
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
  }, [dispatch, ingredient])

  return (
    <div className={`container ${styles.wrapper}`}>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <h2>Что-то пошло не так...</h2>
      ) : (
        <>
          {' '}
          <h2>Детали ингредиента</h2>
          <IngredientInfo />
        </>
      )}
    </div>
  )
}

export default React.memo(IngredientPage)
