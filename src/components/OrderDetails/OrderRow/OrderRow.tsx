import React from 'react'

// Redux
import { TIngredient } from 'redux/actionTypes'

// Components
import { IngredientIcon, PriceCard } from 'ui'

// Styles
import styles from './OrderRow.module.scss'

interface IOrderRow {
  ingredient: TIngredient
  count: number
}

const OrderRow: React.FC<IOrderRow> = ({ ingredient, count }) => {
  return (
    <li className={styles.wrapper}>
      <IngredientIcon image={ingredient.image_mobile} />
      <p className={styles.title}>{ingredient.name}</p>
      <PriceCard size="small" prefix={count} price={ingredient.price} />
    </li>
  )
}

export default OrderRow
