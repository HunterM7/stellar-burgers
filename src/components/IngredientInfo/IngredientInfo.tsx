import React from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import {
  dataIngreientsSelector,
  dataSelector,
  ingredientDetailsSelector,
} from 'redux/selectors'
import { setIngredientDetails } from 'redux/actionCreators'

// Components
import { Loader } from 'components'

// Styles
import styles from './IngredientInfo.module.scss'

const IngredientInfo: React.FC = () => {
  // Getting ingredient info
  const dispatch = useDispatch()
  const { id } = useParams()

  const ingredient = useSelector(dataIngreientsSelector).find(
    el => el._id === id,
  )

  const { isLoading, hasError } = useSelector(dataSelector)

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
  }, [ingredient, dispatch])

  // Nutrients
  const { title, image, calories, proteins, fat, carbohydrates } = useSelector(
    ingredientDetailsSelector,
  )

  const nutrientsInfo = React.useMemo(
    () => [
      { title: 'Калории,ккал', value: calories },
      { title: 'Белки, г', value: proteins },
      { title: 'Жиры, г', value: fat },
      { title: 'Углеводы, г', value: carbohydrates },
    ],
    [calories, carbohydrates, fat, proteins],
  )

  const nutrients = React.useMemo(
    () =>
      nutrientsInfo.map((item, i) => (
        <li key={i} className={styles.nutrients__item}>
          <p className={styles.nutrients__title}>{item.title}</p>
          <p className={styles.nutrients__quantity}>{item.value}</p>
        </li>
      )),
    [nutrientsInfo],
  )

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <h2>Что-то пошло не так</h2>
      ) : (
        <>
          <img className={styles.img} src={image} alt={title} />

          <h3 className={styles.title}>{title}</h3>

          <ul className={styles.nutrients}>{nutrients}</ul>
        </>
      )}
    </div>
  )
}

export default React.memo(IngredientInfo)
