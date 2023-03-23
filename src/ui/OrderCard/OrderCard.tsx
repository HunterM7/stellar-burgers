import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Redux
import { IWSOrder } from 'redux/actionTypes'

// Utils
import { OrderStatus } from 'utils/data/constants'
import { dateConverter } from 'utils/dateConverter'

// Hooks
import { useIngredientsByIds } from 'hooks/useIngredientsByIds'

// Components
import { PriceCard, IngredientsList } from 'ui'

// Styles
import styles from './OrderCard.module.scss'

interface IOrderCard {
  order: IWSOrder
  isStatusShown: boolean
  modalPath: string
}

const OrderCard: React.FC<IOrderCard> = ({
  order,
  isStatusShown,
  modalPath,
}) => {
  const location = useLocation()
  const currentIngredients = useIngredientsByIds(order.ingredients)
  const uniqueIngredientsList = [...new Set(currentIngredients)]

  // Date
  const displayedDate = dateConverter(order.createdAt)

  return (
    <Link
      className={styles.wrapper}
      state={{ background: location }}
      to={`${modalPath}/${order.number}`}
    >
      <div className={styles.header}>
        <h4 className={styles.suptitle}>#{order.number}</h4>

        <span className={styles.timing}>{displayedDate}</span>
      </div>

      <div className={styles.title}>
        <h3>{order.name}</h3>

        {isStatusShown && (
          <p className={styles[`title_${order.status}`]}>
            {OrderStatus[order.status]}
          </p>
        )}
      </div>

      <div className={styles.footer}>
        <IngredientsList ingredients={uniqueIngredientsList} />
        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </Link>
  )
}

export default OrderCard
