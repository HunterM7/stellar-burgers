import React from 'react'
import { TIngredient } from 'redux/actionTypes'

// Components
import { IngredientIcon } from 'ui'

// Styles
import styles from './IngredientsList.module.scss'

interface IIngredientsList {
  ingredients: TIngredient[]
}

const IngredientsList: React.FC<IIngredientsList> = ({ ingredients }) => {
  const maxLength = 6
  const currentLength = ingredients.length
  const counter = currentLength > maxLength ? currentLength - maxLength : 0

  const images = [...ingredients].slice(0, 6).map((el, i) => (
    <li
      key={i}
      className={styles.item}
      style={{ position: 'absolute', left: i * 48, zIndex: maxLength - i }}
    >
      <IngredientIcon
        image={el.image_mobile}
        counter={i === maxLength - 1 ? counter : 0}
      />
    </li>
  ))

  return <ul className={styles.list}>{images}</ul>
}

export default React.memo(IngredientsList)
