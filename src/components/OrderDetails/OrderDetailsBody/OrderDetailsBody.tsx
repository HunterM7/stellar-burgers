import { PriceCard, OrderRow } from 'components'
import { useIngredientsByIds } from 'hooks/useIngredientsByIds'
import React from 'react'

// Types
import { IWSOrder } from 'redux/actionTypes'
import { OrderStatus } from 'utils/data/constants'
import { dateConverter } from 'utils/dateConverter'

// Styles
import styles from './OrderDetailsBody.module.scss'

interface IOrderDetailsBody {
  order: IWSOrder
}

const OrderDetailsBody: React.FC<IOrderDetailsBody> = ({ order }) => {
  // Order creation date
  const date = dateConverter(order.createdAt)

  // Ingredients
  const currentIngredients = useIngredientsByIds(order.ingredients)

  const ingredientsList = [...new Set(currentIngredients)].map(ingredient => {
    const count =
      ingredient.type === 'bun'
        ? 2
        : currentIngredients?.filter(el => el._id === ingredient._id).length

    return (
      <OrderRow
        count={count || 0}
        ingredient={ingredient}
        key={ingredient._id}
      />
    )
  })

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{order.name}</h3>

      <p className={styles.status}>{OrderStatus[order.status]}</p>

      <h3 className={styles.composition}>Состав:</h3>

      <ul className={styles.ingredients}>{ingredientsList}</ul>

      <div className={styles.footer}>
        <span className={styles.timing}>{date}</span>

        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </div>
  )
}

export default OrderDetailsBody
