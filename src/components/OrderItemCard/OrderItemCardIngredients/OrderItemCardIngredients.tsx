import React from 'react'
import { TIngredient } from 'redux/actionTypes'

// Styles
import styles from './OrderItemCardIngredients.module.scss'

interface IOrderItemCardIngredients {
  ingredients: TIngredient[]
}

const OrderItemCardIngredients: React.FC<IOrderItemCardIngredients> = ({
  ingredients,
}) => {
  const images = [...ingredients].slice(0, 6).map((el, i) => (
    <li
      key={i}
      className={styles.item}
      style={{ position: 'relative', right: i * 16, zIndex: 6 - i }}
    >
      <div className={styles.item__container}>
        <img src={el.image_mobile} className={styles.image} alt="Ingredient" />

        {i === 5 && ingredients.length > 6 && (
          <span className={styles.toplayer}>+{ingredients.length - 6}</span>
        )}
      </div>
    </li>
  ))

  return <ul className={styles.list}>{images}</ul>
}

export default React.memo(OrderItemCardIngredients)
