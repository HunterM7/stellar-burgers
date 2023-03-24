import React from 'react'

// Types
import { TIngredient } from 'redux/actionTypes'

// Styles
import styles from './IngredientInfoCard.module.scss'

interface IIngredientInfoCard {
  ingredient: TIngredient
}

const IngredientInfoCard: React.FC<IIngredientInfoCard> = ({ ingredient }) => {
  const nutrientsInfo = React.useMemo(
    () => [
      { title: 'Калории,ккал', value: ingredient.calories },
      { title: 'Белки, г', value: ingredient.proteins },
      { title: 'Жиры, г', value: ingredient.fat },
      { title: 'Углеводы, г', value: ingredient.carbohydrates },
    ],
    [ingredient],
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
      <img
        className={styles.img}
        src={ingredient.image}
        alt={ingredient.name}
      />

      <h3 className={styles.title}>{ingredient.name}</h3>

      <ul className={styles.nutrients}>{nutrients}</ul>
    </>
  )
}

export default React.memo(IngredientInfoCard)
