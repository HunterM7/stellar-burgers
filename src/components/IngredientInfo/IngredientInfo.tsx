import React from 'react'

// Redux
import { useSelector } from 'redux/store'
import { ingredientDetailsSelector } from 'redux/selectors'

// Styles
import styles from './IngredientInfo.module.scss'

const IngredientInfo: React.FC = () => {
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
    <>
      <img className={styles.img} src={image} alt={title} />

      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.nutrients}>{nutrients}</ul>
    </>
  )
}

export default React.memo(IngredientInfo)
