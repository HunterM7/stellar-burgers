import React from 'react'

// Redux
import { IWSOrder } from 'redux/actionTypes'
import { useSelector } from 'redux/store'
import { dataIngreientsSelector } from 'redux/selectors'

// Utils
import { dataConverter } from 'utils/dataConverter'

// Components
import { OrderCardList, PriceCard } from 'components'

// Styles
import styles from './OrderCard.module.scss'

interface IOrderCard {
  order: IWSOrder
}

const OrderCard: React.FC<IOrderCard> = ({ order }) => {
  const allIngredients = useSelector(dataIngreientsSelector)

  const currentIngredients = allIngredients.filter(el =>
    order.ingredients.includes(el._id),
  )

  // Date
  const displayedDate = dataConverter(order.createdAt)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.suptitle}>#{order.number}</h4>

        <span className={styles.timing}>{displayedDate}</span>
      </div>

      <h3 className={styles.title}>{order.name}</h3>

      <div className={styles.footer}>
        <OrderCardList ingredients={currentIngredients} />
        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </div>
  )
}

export default OrderCard
