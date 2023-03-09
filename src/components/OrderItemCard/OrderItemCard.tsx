import React from 'react'

// Redux
import { IWSOrder } from 'redux/actionTypes'
import { dataIngreientsSelector } from 'redux/selectors'
import { useSelector } from 'redux/store'

// Components
import { OrderItemCardIngredients } from 'components'

// Styles
import styles from './OrderItemCard.module.scss'

const OrderItemCard: React.FC<IWSOrder> = order => {
  const allIngredients = useSelector(dataIngreientsSelector)

  const currentIngredients = allIngredients.filter(el =>
    order.ingredients.includes(el._id),
  )

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.suptitle}>#{order.number}</h4>

      <span className={styles.timing}>{order.createdAt}</span>

      <h3 className={styles.title}>{order.name}</h3>

      <OrderItemCardIngredients ingredients={currentIngredients} />
    </div>
  )
}

export default OrderItemCard
